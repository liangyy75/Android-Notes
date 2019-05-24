- mysql优化分类: 
    - 索引优化
        - 最左前缀匹配
        - 扩展索引，而不是添加索引
        - 使用区分度高的列来建立索引
        - 不要使用使索引失效的操作：如索引列中有NULL；索引列使用is null/is not null/!=；索引列参与运算或者放入到函数中了
    - 查询优化: [如何写出高性能的SQL语句，及如何进行SQL性能分析与调优](https://blog.csdn.net/weixin_41660162/article/details/86429175)
        - count的优化: information_schema.tables的table_rows
        - 避免使用不兼容的数据类型，尽量使用数字型字段
        - 索引字段上进行运算会使索引失效
        - 避免使用!=或<>、is null或is not null、in ，not in等这样的操作符
        - 合理使用exists，not exists子句。可以用连接如left join来替换not exists来优化，因为mysql子查询算法太慢。
        - 能够用between的就不要用in。能用exists就不用in，因为in是缓存所有记录，然后遍历比较；而exists是每次select查看有没有。通常情况下采用exists要比in效率高，因为in不走索引。
        - 能够用distinct的就不用group by
        - 尽量不要用select into语句。select into语句会导致表锁定，阻止其他用户访问该表。
        - 必要时强制查询优化器使用某个索引
        - 消除对大型表行数据的顺序存取
        - 尽量避免在索引过的字符数据中，使用非打头字母搜索。这也使得引擎无法利用索引
        - ...
    - 查询缓存
    - 服务器设置优化
    - 操作系统和硬件优化
    - 应用层面优化(web服务器，缓存)等等
- 索引: 
    - B+Tree原理:
        - 类似二分查找的效率，而且因为有数据间的顺序指针，可以提高区间查询的性能，还支持最左前缀匹配的多列索引，而且索引字段要尽量的小并将真实的数据放到叶子节点而不是内层节点(为了降低树的高度)
        - 与hash表对比: hash表只能匹配是否相等，不能区间查询；使用order by时，hash无法支持排序；无法支持组合索引中的部分索引查询；当数据量太大时，hash冲突概率大增
        - 与红黑树对比: 更少的查找次数；利用磁盘预读特性，支持顺序预读；支持区间查询
    - MySQL 索引: 在存储引擎层实现(不同存储引擎具有不同的索引类型和实现)
        - B+Tree 索引: 五大功能 主索引与辅助索引 五大建立B+Tree索引原则
            - 是大多数MySQL存储引擎的默认索引类型
            - 快速查找、排序、分组、区间查找
            - 多列索引: 如(name,age,sex)，数据库会按照从左到右的顺序来建立搜索树，而查找时也是从左到右，即索引的最左匹配特性，所以如果(20,F)这样的字段B+树就不知道下一步该查哪个节点，会全表查询，浪费很多时间。
            - InnoDB 的 B+Tree 索引分为主索引和辅助索引。主索引的叶子节点 data 域记录着完整的数据记录，这种索引方式被称为聚簇索引。因为无法把数据行存放在两个不同的地方，所以一个表只能有一个聚簇索引。辅助索引的叶子节点的 data 域记录着主键的值，因此在使用辅助索引进行查找时，需要先查找到主键值，然后再到主索引中进行查找。
            - 建立B+Tree 索引的原则: 
                1. 最左前缀匹配原则: mysql会一直向右匹配直到遇到范围查询(>、<、between、like)就停止匹配，比如a = 1 and b = 2 and c > 3 and d = 4如果建立(a,b,c,d)顺序的索引，d是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d的顺序可以任意调整。
                2. =和in可以乱序，mysql的查询优化器会帮你优化成索引可以识别的形式
                3. 尽量选择区分度高的列作为索引，区分度的公式是count(distinct col)/count(*)，表示字段不重复的比例，比例越大我们扫描的记录数越少，唯一键的区分度是1，而一些状态、性别字段可能在大数据面前区分度就是0，那可能有人会问，这个比例有什么经验值吗？使用场景不同，这个值也很难确定，一般需要join的字段我们都要求是0.1以上，即平均1条扫描10条记录
                4. 索引列不能参与计算，保持列"干净"，比如from_unixtime(create_time) = '2014-05-29'就不能使用到索引，原因很简单，b+树中存的都是数据表中的字段值，但进行检索时，需要把所有元素都应用函数才能比较，显然成本太大。所以语句应该写成create_time = unix_timestamp(’2014-05-29’);
                5. 尽量的扩展索引，不要新建索引。比如表中已经有a的索引，现在要加(a,b)的索引，那么只需要修改原来的索引即可
        - Hash 索引: O(1)查询，但失去有序性，无法区间查询，无法分组，无法多列索引，数据量大时易冲突。Mysql中只有在memory引擎显示支持哈希索引。
            - 注意: Innodb引擎有一个特殊的功能叫做"自适应哈希索引"。当Innodb注意到某些索引值使用非常频繁时，它会在内存中基于B-tree索引之上再建立一个哈希索引。这是一个完全自动、内部的行为，用户无法配置或者设置，不过有必要可以关闭此功能。
            - 自定义Hash索引: 
                ```sql
                mysql> create table test(
                    -> id int not null auto_increment primary key,
                    -> url varchar(255) not null,
                    -> url_crc int unsigned not null default 0
                    -> );  -- 其中，url_crc用来存储哈希值。该值根据url和哈希函数得出。
                mysql> delimiter //
                mysql> create trigger test_insert before insert on test for each row begin
                    -> set new.url_crc=crc32(new.url);
                    -> end;
                    -> //
                Query OK, 0 rowsaffected (0.03 sec)
                mysql> create trigger test_update before update on test for each row begin
                    -> set new.url_crc=crc32(new.url);
                    -> end;
                    -> //
                Query OK, 0 rowsaffected (0.03 sec)
                mysql> delimiter ;
                <!-- 我们来测试下， -->
                mysql> insertinto test (url) values("www.hao123.com");
                Query OK, 1 rowaffected (0.01 sec)
                mysql> select * from test;
                +----+----------------+------------+
                | id | url            | url_crc    |
                +----+----------------+------------+
                |  1 | www.hao123.com | 3883448495 |
                +----+----------------+------------+
                1 row in set (0.00sec)
                ```
        - 全文索引: 引擎 使用 实现 中文 结果 模式
            - 支持引擎: MyISAM 存储引擎支持全文索引，用于查找文本中的关键词，而不是直接比较是否相等。InnoDB 存储引擎在 MySQL 5.6.4 版本中也开始支持全文索引。
            - 查找条件: 使用 MATCH AGAINST，而不是普通的 WHERE。``create table(title text, body text, fulltext(text, body)); select * from articles where match(title, body) against('数据库')``。
            - 具体实现: 全文索引使用倒排索引实现，它记录着关键词到其所在文档的映射。倒排索引跟B+树一样，也是一种数据结构。一般利用关联数组，在辅助表中存储单词与文档中所在位置的映射。
                - Innodb采用的是full inverted index的存储方式。这种方式会占用更多的空间，因为它不仅会存储单词和单词所在文档的ID，还会存储单词所在文档的ID中具体的位置。
                - 还有一种存储方式: inverted file index，只存储单词及对应的单词所在文档。这种理节省空间，但是查找时，只能根据关键字得到相应文档，并进行查找。
                - 有一些词，我们可能是不能索引查询的，比如'to'，这称之为stopword; ``select * from information_schema.INNODB_FT_DEFAULT_STOPWORD;``。或者word的字符长度不在innodb_ft_min_token_size到innodb_ft_max_token_size。默认是3-84个字符区间。当然，也可以定制stopword，可以参考[mysql stopwords](https://dev.mysql.com/doc/refman/5.7/en/fulltext-stopwords.html)
                - 定制stopword: 
            - 中文索引: MySQL自带全文索引的只能满足英文索引，需要插件oneSql。
            - 结果返回: 如果一个查询，匹配到多条记录，是根据相关性。``select title, match(title) against('like') as relevance from test``。那相关性是怎么计算呢？
                - word(查询关键字)是否在文档中出现
                - word在文档中出现的次数
                - word在索引列中的数量
                - 多少个文档包含该word
            - 检索模式: 
                - 默认的检索模式，Natural Language模式！表示查询带有指定word的文档。下面2种方式是等价的。
                    ```sql
                    select * from test where match(title) against('what' in natural language mode);
                    select * from test where match(title) against('what');
                    ```
                - boolean模式，当使用这种模式时，表示字符串前后的字符有特殊含义。
                    ```sql
                    select * from test where match(title) against('+Pease' in boolean mode);  -- 查找有Pease单词的记录
                    select * from test where match(title) against('+Pease -hot' in boolean mode);  -- 查找有Pease，但是没有hot的记录
                    ```
        - 空间数据索引: MyISAM 存储引擎支持空间数据索引(R-Tree)，可以用于地理数据存储。空间数据索引会从所有维度来索引数据，可以有效地使用任意维度来进行组合查询。必须使用 GIS 相关的函数来维护数据。https://blog.csdn.net/MongChia1993/article/details/69941783
        <!-- - 位图索引: mysql不支持，oracle才支持 - 位片索引:  -->
    - 索引优化: 
        1. 独立的列: 索引列不能参与运算，不能是函数的参数，否则无法还有索引
        2. 多列索引: 尽量使用符合最左前缀匹配的多列索引，比单列索引性能更好(一个主索引vs一个主索引加多个辅助索引)
        3. 索引列顺序: 
            1. 让区分度高的索引列在前面，让后面需要遍历的索引数量减少。
            2. MySQL查询只使用一个索引，因此如果WHERE子句中已经使用了索引的话，那么ORDER BY中的列是不会使用索引的。因此数据库默认排序可以符合要求的情况下，不要使用排序操作。
            3. 尽量不要包含多个列的排序，如果需要，最好给这些列也创建组合索引。
        4. 前缀索引: 对于 BLOB、TEXT 和 VARCHAR 类型的列，必须使用前缀索引，只索引开始的部分字符。对于前缀长度的选取需要根据索引选择性来确定。``alter table table_name add key(column_name(prefix_length));``。既可以节约空间，又可以提高查询效率。但无法使用前缀索引做 ORDER BY 和 GROUP BY，也无法使用前缀索引做覆盖扫描。
        5. 覆盖索引: 索引包含所有需要查询的字段的值。
            - 索引通常远小于数据行的大小，只读取索引能大大减少数据访问量。
            - 一些存储引擎(例如 MyISAM)在内存中只缓存索引，而数据依赖于操作系统来缓存。因此，只访问索引可以不使用系统调用(通常比较费时)。
            - 对于 InnoDB 引擎，若辅助索引能够覆盖查询，则无需访问主索引。只用去读取索引而取得数据，无需进行二次查询相关表。这样的索引的叶子节点上面也包含了他们索引的数据。
            - 判断标准: 判断标准: 使用explain，可以通过输出的extra列来判断，对于一个索引覆盖查询，显示为using index,MySQL查询优化器在执行查询前会决定是否有索引覆盖查询。
        6. 索引不会包含有NULL值的列，避免使用!=或<>、IS NULL或IS NOT NULL、IN ，NOT IN等这样的操作符: 只要列中包含有NULL值，都将不会被包含在索引中，组合索引中只要有一列有NULL值，那么这一列对于此条组合索引就是无效的。所以我们在数据库设计时，不要让索引字段的默认值为NULL。因为NULL不能使用=,<,>这样的运算符，对null做算术运算的结果都是null，count时不会包括null行等，null比空字符串需要更多的存储空间等。当然如果是is null或者is not null还是可以使用到索引的，但不建议这样做。NULL其实是占用空间的，空值('')是不占用空间的。
        7. LIKE语句操作: 一般情况下，不建议使用LIKE操作；如果非使用不可，如何使用也是一个研究的课题。LIKE "%aaaaa%"不会使用索引，但是LIKE "aaa%"却可以使用索引。
        8. 索引越多，更新数据的速度越慢，所以应该尽量扩展索引，而不是新建索引。
        9. 合理的建立索引能够加速数据读取效率，不合理的建立索引反而会拖慢数据库的响应速度。
    - 索引优点: 
        - 快速查询
        - 可以帮助服务器避免进行排序和分组，以及避免创建临时表
        - 将随机 I/O 变为顺序 I/O
    - 索引分类: 
        - 根据数据结构分: B+Tree索引 Hash索引 全文索引 空间数据索引
        - 根据内部结构分: 主索引 辅助索引
            - 如果定义了主键，InnoDB会自动使用主键来创建聚集索引。如果没有定义主键，InnoDB会选择一个唯一的非空索引代替主键。如果没有唯一的非空索引，InnoDB会隐式定义一个主键来作为聚集索引。
        - 其他划分: 聚集索引 辅助索引 覆盖索引 联合索引 前缀索引
    - 索引使用条件: 
        - 对于非常小的表、大部分情况下简单的全表扫描比建立索引更高效；
        - 对于中到大型的表，索引就非常有效；
        - 但是对于特大型的表，建立和维护索引的代价将会随之增长。这种情况下，需要用到一种技术可以直接区分出需要查询的一组数据，而不是一条记录一条记录地匹配，例如可以使用分区技术。
- 查询优化: 
    - 查询开销指标: 执行时间 检查的行数 返回的行数
    - 慢查询的优化步骤: 
        1. 查看运行效果，是否真的很慢，主要设置SQL_NO_CACHE。``select sql_no_cache count(*) from users;``
        2. WHERE条件单表查询，锁定最小返回记录表。这句话的意思是，把查询语句的WHERE都应用到表中返回的记录数最小的表开始查起，单表每个字段分别查询，看哪个字段的区分度最高。``select count(distinct col)/count(*) as col_rel from users;``
        3. EXPLAIN查看执行计划，是否与1预期一致(从锁定记录较少的表开始查询)，主要有三个字段(rows key select_type)
        4. ORDER BY LIMIT 形式的SQL语句，让排序的表优先查
        5. 多去了解业务的使用场景
        6. 加索引时，要参照建立索引的几大原则
        7. 观察结果，不符合预期，则重新从1开始分析。
    - 优化数据访问
        1. 减少请求的数据量
            - 只返回必要的列: 最好不要使用 SELECT * 语句。
            - 只返回必要的行: 使用 LIMIT 语句来限制返回的数据。
            - 缓存重复查询的数据: 使用缓存可以避免在数据库中进行查询，特别在要查询的数据经常被重复查询时，缓存带来的查询性能提升将会是非常明显的。
        2. 减少服务器端扫描的行数: 如覆盖查询
    - 重构查询方式
        1. 切分大查询: 使用offset与limit
        2. 分解大连接查询: 将一个大连接查询分解成对每一个表进行一次单表查询，然后在应用程序中进行关联，这样做的好处有
            - 让缓存更高效。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。
            - 分解成多个单表查询，这些单表查询的缓存结果更可能被其它查询使用到，从而减少冗余记录的查询。
            - 减少锁竞争；
            - 在应用层进行连接，可以更容易对数据库进行拆分，从而更容易做到高性能和可伸缩。
            - 查询本身效率也可能会有所提升。例如下面的例子中，使用 IN() 代替连接查询，可以让 MySQL 按照 ID 顺序进行查询，这可能比随机的连接要更高效。
- **引擎**: 
    1. InnoDB: 主索引 支持的特性(内部优化(自适应哈希索引 插入缓存 磁盘预读处理) 在线热更新 auto_incremnt 外键 事务 隔离级别) 不支持的特性(count 5.6.4前的fulltext) 适用场景
        - 事务: 默认事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其他存储引擎；
        - 隔离级别: 实现了四个标准的隔离级别(未提交读 提交读 可重复读 可串行化/丢失修改 脏读 不可重复读 幻读)，默认可重复读，在可重复读隔离级别下，通过多版本并发控制(MVCC)+间隙锁(Next-Key Locking)防止幻影读。
        - 主索引: 主索引是聚簇索引，在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。
        - 内部优化: 内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。
        - 在线热备份: 支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。
        - 5.6.4前不支持fulltext类型的索引，而且它没有保存表的行数，当select count(*) from table时需要扫描全表。除非``use information_schema; select num_rows from innodb_sys_tablestats where name='test/test_null';``
        - 适用场景: 
            1. 支持事务。
            2. 外键约束。只有他支持外键。
            3. 经常更新的表，适合处理多重并发的更新请求。
            4. 可以从灾难中恢复（通过bin-log日志等）。
            5. 支持自动增加列属性auto_increment。
    2. MyISAM: 设计 支持的特性(并发插入 压缩表 空间数据索引 delay_key_wait 检测与修复) 不支持的特性(行级锁 事务 外键) 适用场景
        - 设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用它。
        - 提供了大量的特性，包括压缩表、空间数据索引等。
        - 不支持事务。
        - 不支持行级锁，只能对整张表加锁，读取时会对需要读到的所有表加共享锁，写入时则对表加排它锁。但在表有读取操作的同时，也可以往表中插入新的记录，这被称为并发插入(CONCURRENT INSERT)。
        - 可以手工或者自动执行检查和修复操作，但是和事务恢复以及崩溃恢复不同，可能导致一些数据丢失，而且修复操作是非常慢的。
            - 在MySQL的配置文件my.cnf中，启动项部分加入myisam-recover设置数据恢复功能，具体参数如下: 
                - default: 不起任何作用
                - backup: 如果在恢复过程中，数据文件被更改了，将tbl_name.MYD文件备份为tbl_name-datetime.BAK
                - force: 即使.MYD文件将丢掉多个行也进行恢复
                - quick: 如果没有删除块，不要检查表中的行
            - myisamchk命令: 
            - check/repair命令: 
            - mysql下的bin目录中有mysqlcheck.exe是专门修复myisam表损坏的，需要命令行中执行。
        - 如果指定了 DELAY_KEY_WRITE 选项，在每次修改执行完成时，不会立即将修改的索引数据写入磁盘，而是会写到内存中的键缓冲区，只有在清理键缓冲区或者关闭表的时候才会将对应的索引块写入磁盘。这种方式可以极大的提升写入性能，但是在数据库或者主机崩溃时会造成索引损坏，需要执行修复操作。
        - 适用场景: 
            1. 不支持事务的设计，但是并不代表着有事务操作的项目不能用MyIsam存储引擎，可以在service层进行根据自己的业务需求进行相应的控制。
            2. 不支持外键的表设计。
            3. 查询速度很快，如果数据库insert和update的操作比较少的话比较适用。
            4. 整天 对表进行加锁的场景。
            5. MyISAM极度强调快速读取操作。
            6. MyIASM中存储了表的行数，于是SELECT COUNT(*) FROM TABLE时只需要直接读取已经保存好的值而不需要进行全表扫描。如果表的读操作远远多于写操作且不需要数据库事务的支持，那么MyIASM也是很好的选择。
    3. Memory(也叫Heap即堆内存): 基于堆实现，存储在内存中，对于临时表很有用。
        1. 使用存在内存中的内容来创建表。每个MEMORY表只实际对应一个磁盘文件。MEMORY类型的表访问非常得快，因为它的数据是放在内存中的，并且默认使用HASH索引。
    4. Mrg_Myisam(分表的一种方式–水平分表): 不同MyISAM表的集合
    5. Blackhole(黑洞引擎): /dev/null storage engine (anything you write to it disappears)。但有日志，可以用作日志恢复。
    6. CVS: 
    7. Archive: 
    8. PERFORMANCE_SCHEMA: 
    9. FEDERATED: 
    6. InnoDB与MyISAM比较: 事务 行表级锁 备份 崩溃恢复 并发
        - 事务: InnoDB 是事务型的，可以使用 Commit 和 Rollback 语句。
        - 并发: MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。MyISAM 支持并发插入与delay_key_wait，而 InnoDB 支持插入缓存
        - 外键: InnoDB 支持外键。
        - 备份: InnoDB 支持在线热备份。
        - 崩溃恢复: MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。
        - 其它特性: MyISAM 支持压缩表和空间数据索引，而InnoDB支持auto_increment。
    7. 引擎作用: 
        1. 数据库管理: 设计并创建数据库以保存系统所需的关系或XML文档。
        2. 数据管理: 实现系统以访问和更改数据库中存储的数据。包括实现网站或使用数据的应用程序，还包括生成使用SQL Server工具和实用工具以使用数据的过程。
        3. 为单位或客户部署实现的系统。
        4. 提供日常管理支持以优化数据库的性能。
    8. 如何修改数据库引擎: 
        1. 修改配置文件my.ini: default-storage-engine=INNODB
        2. 在建表的时候指定: ``create table test_table(id int primary key, name varchar(50))engine=MyISAM;``
        3. 建表后修改: ``alter table test_table engine=InnoDB;``
    9. 查看数据库引擎: 
        1. ``show table status from test_database; ``
        2. ``show create table test_table``
        3. 使用数据库管理工具。
- 数据类型: 
    1. ***数值类型***
        1. 整数类型: tinyint smallint mediumint int bigint
        2. 定点数: decimal(M=10(0~65), D=0(0~30 <=M))
        3. 浮点数: float(M, D) double percision(M, D) real(M, D)
        4. bit(M=1(1~64))
    2. ***字符串类型***
        1. char(M=255)(删除存储字段的尾部空格) / varchar(M=255（0~65535)
        2. binary(M)(右边填充0x00(零字节)值以达到指定长度，即'a'变为'a\0') / varbinary(M)
        3. blob(tinyblob blob mediumblob longblob) / text(tinytext text medium text longtext)
            - 当保存或检索blob和text列的值时不删除尾部空格。(这与varbinary和varchar列相同）。 
            - 比较时将用空格对text进行扩充以适合比较的对象，正如char和varchar。
            - 对于blob和text列的索引，必须指定索引前缀的长度。对于char和varchar，前缀长度是可选的。
            - blob和text列不能有默认值。
            - tiny：最大长度255个字符(2^8-1)
            - blob或text：最大长度65535个字符(2^16-1)
            - medium：最大长度16777215个字符(2^24-1)
            - longtext 最大长度4294967295个字符(2^32-1)
        4. enum(只能选择字符串作为成员，最多65535个，默认从1开始，插入失败默认变为错误空串(值为0)，可以插入空串与null，成员值的尾部空格将自动被删除)
        5. set(也只能选择字符串为成员，最多64个，按2^n的形式作为int值开始(n是位置，从1开始)，成员值的尾部空格将自动被删除，)
    3. ***时间日期类型***
        1. date, datetime, timestamp
        2. time
        3. year
    4. ***几何类型***<br>
        <!-- ![几何类型](http://blog.anxpp.com/usr/uploads/2016/04/1585660606.png) -->
        <div align="center"><img alt="几何类型" src="http://blog.anxpp.com/usr/uploads/2016/04/1585660606.png"/></div>
- **切分**: 
    - 水平切分(也叫 Sharding 分行): 将同一个表中的记录拆分到多个结构相同的表中
    - 垂直切分(分列): 将一张表按列切分成多个表，通常是按照列的关系密集程度进行切分，也可以利用垂直切分将经常被使用的列和不经常被使用的列切分到不同的表中。
    - Sharding 策略
        - 哈希取模: hash(key) % N；
        - 范围: 可以是 ID 范围也可以是时间范围；
        - 映射表: 使用单独的一个数据库来存储映射关系。
    - Sharding 存在的问题: 
        - 事务: 使用分布式事务来解决，比如 XA 接口。
        - 连接: 可以将原来的连接分解成多个单表查询，然后在用户程序中进行连接。
        - ID 唯一性
            - 使用全局唯一 ID(GUID)
            - 为每个分片指定一个 ID 范围
            - 分布式 ID 生成器 (如 Twitter 的 Snowflake 算法)
- **复制**: 
    - 主从复制: 主要涉及三个线程: binlog 线程、I/O 线程和 SQL 线程。
        - binlog 线程: 负责将主服务器上的数据更改写入二进制日志(Binary log)中。
        - I/O 线程: 负责从主服务器上读取二进制日志，并写入从服务器的中继日志(Relay log)。
        - SQL 线程: 负责读取中继日志，解析出主服务器已经执行的数据更改并在从服务器中执行。
    - 读写分离: 主服务器处理写操作以及实时性要求比较高的读操作，而从服务器处理读操作。读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。读写分离能提高性能的原因在于: 
        - 主从服务器负责各自的读和写，极大程度缓解了锁的争用；
        - 从服务器可以使用 MyISAM，提升查询性能以及节约系统开销；
        - 增加冗余，提高可用性。
- 底层操作: 
    - order by: 如果可以的话使用索引来返回已排好序的数据，或者对查找到的数据进行排序。
    - group by: group by 实际上也同样会进行排序操作，而且与order by 相比，group by 主要只是多了排序之后的分组操作。当然，如果在分组的时候还使用了其他的一些聚合函数(使用group by时，如果在返回集字段中，这些字段要么就要包含在group by语句的后面，作为分组的依据；要么就要被包含在聚合函数中)，那么还需要一些聚合函数的计算。所以，在group by 的实现过程中，与 order by 一样也可以利用到索引。
        1. group by 的实现同样有多种(三种)方式，其中有两种方式会利用现有的索引信息来完成 group by，另外一种为完全无法使用索引的场景下使用。下面我们分别针对这三种实现方式做一个分析。
            1. 使用松散(loose)索引扫描实现 group by: 实际上就是当 mysql 完全利用索引扫描来实现 group by 的时候，并不需要扫描所有满足条件的索引键即可完成操作得出结果。松散索引扫描需要读取的键值数量与分组的组数量一样多，也就是说比实际存在的键值数目要少很多。而在where子句包含范围判断式或者等值表达式的时候， 松散索引扫描查找满足范围条件的每个组的第1个关键字，并且再次读取尽可能最少数量的关键字。所以松散索引扫描的效率会很高。要利用到松散索引扫描实现 group by，需要至少满足以下几个条件: 
                1. group by 条件字段必须在同一个索引中最前面的连续位置;
                2. 在使用group by 的同时，只能使用 max 和 min 这两个聚合函数;
                3. 如果引用到了该索引中 group by 条件之外的字段条件的时候，必须以常量形式存在;
            2. 使用紧凑(tight)索引扫描实现 group by: 紧凑索引扫描实现 group by 和松散索引扫描的区别主要在于他需要在扫描索引的时候，读取所有满足条件的索引键，然后再根据读取恶的数据来完成 group by 操作得到相应结果。即需要访问 where 条件所限定的所有索引键信息之后才能得出结果。这就是通过紧凑索引扫描来实现 GROUP BY 的执行计划输出信息。
            3. 使用临时表实现 group by: mysql 在进行 group by 操作的时候要想利用所有，必须满足 group by 的字段必须同时存放于同一个索引中，且该索引是一个有序索引(如 hash 索引就不能满足要求)。而且，并不只是如此，是否能够利用索引来实现 group by 还与使用的聚合函数也有关系。前面两种 group by 的实现方式都是在有可以利用的索引的时候使用的，当 mysql query optimizer 无法找到合适的索引可以利用的时候，就不得不先读取需要的数据，然后通过临时表来完成 group by 操作。
        2. 如果使用 all 关键字，那么查询结果将包括由 group by 子句产生的所有组，即使某些组没有符合搜索条件的行。没有 all 关键字，包含 group by 子句的 select 语句将不显示没有符合条件的行的组。``select a, b, count(*) from test_table group by all a, b;``
        3. where关键字在使用集合函数时不能使用，所以在集合函数中加上了having来起到测试查询结果是否符合条件的作用。
        4. 当同时含有where子句、group by 子句 、having子句及聚集函数时，执行顺序如下：
            - 执行where子句查找符合条件的数据；
            - 使用group by 子句对数据进行分组；对group by 子句形成的组运行聚集函数计算每一组的值；最后用having 子句去掉不符合条件的组。
            - having子句限制的是组，而不是行。where子句中不能使用聚集函数，而having子句中可以。
    - 使用group by查询时order by无效问题:
        1. order by 子句中的列必须包含在查找字段或 group by 子句中。
        2. 或者列不在group by中: 将排序写成一个子查询，在子查询中添加limit，阻止mysql将order by优化掉。
    - distinct这个关键字来过滤掉多余的重复记录只保留一条。
    - 一个表中只能有一个字段是auto_increment，而且不能与default并用。而且它必须是索引。
    - default的值要不是常量，要不就是now()/current_date();
    - 表/数据库的collate指定排序的规则。
        1. 对于mysql中那些字符类型的列，如varchar，char，text类型的列，都需要有一个collate类型来告知mysql如何对该列进行排序和比较。简而言之，collate会影响到order by语句的顺序，会影响到where条件中大于小于号筛选出来的结果，会影响**distinct**、**group by**、**having**语句的查询结果。另外，mysql建索引的时候，如果索引列是字符类型，也会影响索引创建，只不过这种影响我们感知不到。总之，凡是涉及到字符类型比较或排序的地方，都会和collate有关。
        2. COLLATE通常是和数据编码（CHARSET）相关的，一般来说每种CHARSET都有多种它所支持的COLLATE，并且每种CHARSET都指定一种COLLATE为默认值。例如Latin1编码的默认COLLATE为latin1_swedish_ci，GBK编码的默认COLLATE为gbk_chinese_ci，utf8mb4编码的默认值为utf8mb4_general_ci。
        3. mysql中有utf8和utf8mb4两种编码，在mysql中请大家忘记**utf8**，永远使用**utf8mb4**。这是mysql的一个遗留问题，mysql中的utf8最多只能支持3bytes长度的字符编码，对于一些需要占据4bytes的文字，mysql的utf8就不支持了，要使用utf8mb4才行。
        4. 很多COLLATE都带有_ci字样，这是Case Insensitive的缩写，即大小写无关，也就是说"A"和"a"在排序和比较的时候是一视同仁的。与此同时，对于那些_cs后缀的COLLATE，则是Case Sensitive，即大小写敏感的。
        5. 在国内比较常用的是utf8mb4_general_ci（默认）、utf8mb4_unicode_ci、utf8mb4_bin这三个。我们来探究一下这三个的区别: 
            1. utf8mb4_bin的比较方法其实就是直接将所有字符看作二进制串，然后从最高位往最低位比对。所以很显然它是区分大小写的。
            2. utf8mb4_unicode_ci和utf8mb4_general_ci对于中文和英文来说，其实是没有任何区别的。对于我们开发的国内使用的系统来说，随便选哪个都行。只是对于某些西方国家的字母来说，utf8mb4_unicode_ci会比utf8mb4_general_ci更符合他们的语言习惯一些，general是mysql一个比较老的标准了。例如，德语字母“ß”，在utf8mb4_unicode_ci中是等价于"ss"两个字母的（这是符合德国人习惯的做法），而在utf8mb4_general_ci中，它却和字母“s”等价。不过，这两种编码的那些微小的区别，对于正常的开发来说，很难感知到。本身我们也很少直接用文字字段去排序。推荐使用utf8mb4_unicode_ci，对于已经用了utf8mb4_general_ci的系统，也没有必要花时间改造。
            3. 从mysql 8.0开始，mysql默认的CHARSET已经不再是Latin1了，改为了utf8mb4。并且默认的COLLATE也改为了utf8mb4_0900_ai_ci。
    - 外键必须是外键表中的索引
    - InnoDB行锁是通过给索引上的索引项加锁来实现的，只有通过索引条件检索数据，InnoDB才使用行级锁，否则，InnoDB将使用表锁

[MySQL锁详解](https://www.cnblogs.com/luyucheng/p/6297752.html)
[《MySQL技术内幕》读书笔记](https://blog.csdn.net/shenchaohao12321/article/category/8075653/4?)
[如何写出高性能的SQL语句，及如何进行SQL性能分析与调优](https://blog.csdn.net/weixin_41660162/article/details/86429175)
[万字总结：学习MySQL优化原理，这一篇就够了！](https://dbaplus.cn/news-155-1531-1.html?utm_source=tuicool&utm_medium=referral)
[mysqlcheck与myisamchk的区别](https://www.cnblogs.com/abclife/p/8288565.html)
[myisamchk命令使用总结](https://blog.csdn.net/wyzxg/article/details/7303486)
[[MySQL] 怎样使用Mysqlcheck来检查和修复, 优化表](https://blog.csdn.net/orangleliu/article/details/63275154)
[MySQL查询语句优化](https://www.cnblogs.com/wangning528/p/6388538.html)
[MySQL中NULL对索引的影响](https://blog.csdn.net/djrm11/article/details/83592799)
[创建自定义哈希索引](https://blog.csdn.net/V_victor/article/details/52232685)
[聚集索引、辅助索引、覆盖索引、联合索引](https://blog.csdn.net/u012006689/article/details/73195837)
[常见的空间索引方法](https://blog.csdn.net/Amesteur/article/details/80392679)
[空间数据索引RTree完全解析及Java实现](https://blog.csdn.net/MongChia1993/article/details/69941783)
[mysql stopwords](https://dev.mysql.com/doc/refman/5.7/en/fulltext-stopwords.html)

<!-- GFM-TOC -->
* [一、索引](#一索引)
    * [B+ Tree 原理](#b-tree-原理)
    * [MySQL 索引](#mysql-索引)
    * [索引优化](#索引优化)
    * [索引的优点](#索引的优点)
    * [索引的使用条件](#索引的使用条件)
* [二、查询性能优化](#二查询性能优化)
    * [使用 Explain 进行分析](#使用-explain-进行分析)
    * [优化数据访问](#优化数据访问)
    * [重构查询方式](#重构查询方式)
* [三、存储引擎](#三存储引擎)
    * [InnoDB](#innodb)
    * [MyISAM](#myisam)
    * [比较](#比较)
* [四、数据类型](#四数据类型)
    * [整型](#整型)
    * [浮点数](#浮点数)
    * [字符串](#字符串)
    * [时间和日期](#时间和日期)
* [五、切分](#五切分)
    * [水平切分](#水平切分)
    * [垂直切分](#垂直切分)
    * [Sharding 策略](#sharding-策略)
    * [Sharding 存在的问题](#sharding-存在的问题)
* [六、复制](#六复制)
    * [主从复制](#主从复制)
    * [读写分离](#读写分离)
* [参考资料](#参考资料)
<!-- GFM-TOC -->

# 一、索引

## B+ Tree 原理

### 1. 数据结构

B Tree 指的是 Balance Tree，也就是平衡树。平衡树是一颗查找树，并且所有叶子节点位于同一层。

B+ Tree 是基于 B Tree 和叶子节点顺序访问指针进行实现，它具有 B Tree 的平衡性，并且通过顺序访问指针来提高区间查询的性能。

在 B+ Tree 中，一个节点中的 key 从左到右非递减排列，如果某个指针的左右相邻 key 分别是 key<sub>i</sub> 和 key<sub>i+1</sub>，且不为 null，则该指针指向节点的所有 key 大于等于 key<sub>i</sub> 且小于等于 key<sub>i+1</sub>。

<div align="center"> <img src="https://gitee.com/CyC2018/CS-Notes/raw/master/docs/pics/10a6d3ee-04b2-46b4-b171-d596e5ab0f84.jpg"/> </div><br>

### 2. 操作

进行查找操作时，首先在根节点进行二分查找，找到一个 key 所在的指针，然后递归地在指针所指向的节点进行查找。直到查找到叶子节点，然后在叶子节点上进行二分查找，找出 key 所对应的 data。

插入删除操作会破坏平衡树的平衡性，因此在插入删除操作之后，需要对树进行一个分裂、合并、旋转等操作来维护平衡性。

### 3. 与红黑树的比较

红黑树等平衡树也可以用来实现索引，但是文件系统及数据库系统普遍采用 B+ Tree 作为索引结构，主要有以下两个原因: 

(一)更少的查找次数

平衡树查找操作的时间复杂度和树高 h 相关，O(h)=O(log<sub>d</sub>N)，其中 d 为每个节点的出度。

红黑树的出度为 2，而 B+ Tree 的出度一般都非常大，所以红黑树的树高 h 很明显比 B+ Tree 大非常多，查找的次数也就更多。

(二)利用磁盘预读特性

为了减少磁盘 I/O 操作，磁盘往往不是严格按需读取，而是每次都会预读。预读过程中，磁盘进行顺序读取，顺序读取不需要进行磁盘寻道，并且只需要很短的旋转时间，速度会非常快。

操作系统一般将内存和磁盘分割成固定大小的块，每一块称为一页，内存与磁盘以页为单位交换数据。数据库系统将索引的一个节点的大小设置为页的大小，使得一次 I/O 就能完全载入一个节点。并且可以利用预读特性，相邻的节点也能够被预先载入。

## MySQL 索引

索引是在存储引擎层实现的，而不是在服务器层实现的，所以不同存储引擎具有不同的索引类型和实现。

### 1. B+Tree 索引

是大多数 MySQL 存储引擎的默认索引类型。

因为不再需要进行全表扫描，只需要对树进行搜索即可，所以查找速度快很多。

除了用于查找，还可以用于排序和分组。

可以指定多个列作为索引列，多个索引列共同组成键。

适用于全键值、键值范围和键前缀查找，其中键前缀查找只适用于最左前缀查找。如果不是按照索引列的顺序进行查找，则无法使用索引。

InnoDB 的 B+Tree 索引分为主索引和辅助索引。主索引的叶子节点 data 域记录着完整的数据记录，这种索引方式被称为聚簇索引。因为无法把数据行存放在两个不同的地方，所以一个表只能有一个聚簇索引。

<div align="center"> <img src="https://gitee.com/CyC2018/CS-Notes/raw/master/docs/pics/4f151e62-6160-47f1-9eff-47b1f4dea4e9.jpg"/> </div><br>

辅助索引的叶子节点的 data 域记录着主键的值，因此在使用辅助索引进行查找时，需要先查找到主键值，然后再到主索引中进行查找。

<div align="center"> <img src="https://gitee.com/CyC2018/CS-Notes/raw/master/docs/pics/40f29839-fd56-4ed0-9353-39dfe6f0bba5.jpg"/> </div><br>

### 2. 哈希索引

哈希索引能以 O(1) 时间进行查找，但是失去了有序性: 

- 无法用于排序与分组；
- 只支持精确查找，无法用于部分查找和范围查找。

InnoDB 存储引擎有一个特殊的功能叫"自适应哈希索引"，当某个索引值被使用的非常频繁时，会在 B+Tree 索引之上再创建一个哈希索引，这样就让 B+Tree 索引具有哈希索引的一些优点，比如快速的哈希查找。

### 3. 全文索引

MyISAM 存储引擎支持全文索引，用于查找文本中的关键词，而不是直接比较是否相等。

查找条件使用 MATCH AGAINST，而不是普通的 WHERE。

全文索引使用倒排索引实现，它记录着关键词到其所在文档的映射。

InnoDB 存储引擎在 MySQL 5.6.4 版本中也开始支持全文索引。

### 4. 空间数据索引

MyISAM 存储引擎支持空间数据索引(R-Tree)，可以用于地理数据存储。空间数据索引会从所有维度来索引数据，可以有效地使用任意维度来进行组合查询。

必须使用 GIS 相关的函数来维护数据。

## 索引优化

### 1. 独立的列

在进行查询时，索引列不能是表达式的一部分，也不能是函数的参数，否则无法使用索引。

例如下面的查询不能使用 actor_id 列的索引: 

```sql
SELECT actor_id FROM sakila.actor WHERE actor_id + 1 = 5;
```

### 2. 多列索引

在需要使用多个列作为条件进行查询时，使用多列索引比使用多个单列索引性能更好。例如下面的语句中，最好把 actor_id 和 film_id 设置为多列索引。

```sql
SELECT film_id, actor_ id FROM sakila.film_actor
WHERE actor_id = 1 AND film_id = 1;
```

### 3. 索引列的顺序

让选择性最强的索引列放在前面。

索引的选择性是指: 不重复的索引值和记录总数的比值。最大值为 1，此时每个记录都有唯一的索引与其对应。选择性越高，查询效率也越高。

例如下面显示的结果中 customer_id 的选择性比 staff_id 更高，因此最好把 customer_id 列放在多列索引的前面。

```sql
SELECT COUNT(DISTINCT staff_id)/COUNT(*) AS staff_id_selectivity,
COUNT(DISTINCT customer_id)/COUNT(*) AS customer_id_selectivity,
COUNT(*)
FROM payment;
```

```html
   staff_id_selectivity: 0.0001
customer_id_selectivity: 0.0373
               COUNT(*): 16049
```

### 4. 前缀索引

对于 BLOB、TEXT 和 VARCHAR 类型的列，必须使用前缀索引，只索引开始的部分字符。

对于前缀长度的选取需要根据索引选择性来确定。

### 5. 覆盖索引

索引包含所有需要查询的字段的值。

具有以下优点: 

- 索引通常远小于数据行的大小，只读取索引能大大减少数据访问量。
- 一些存储引擎(例如 MyISAM)在内存中只缓存索引，而数据依赖于操作系统来缓存。因此，只访问索引可以不使用系统调用(通常比较费时)。
- 对于 InnoDB 引擎，若辅助索引能够覆盖查询，则无需访问主索引。

### 6. 何时使用聚簇索引或非聚簇索引

使用动作描述 | 使用聚簇索引 | 使用非聚簇索引
:-: |:-: |:-:
列经常被分组排序 | √ | √
返回某范围内的数据 | √ | ×
一个或极少不同的值 | × | ×
小数目不同的值 | √ | ×
大数目不同的值 | × | √
频繁更新的列 | × | √
外键列 | √ | √
主键列 | √ | √
频繁修改索引列 | × | √

## 索引的优点

- 大大减少了服务器需要扫描的数据行数。

- 帮助服务器避免进行排序和分组，以及避免创建临时表(B+Tree 索引是有序的，可以用于 ORDER BY 和 GROUP BY 操作。临时表主要是在排序和分组过程中创建，因为不需要排序和分组，也就不需要创建临时表)。

- 将随机 I/O 变为顺序 I/O(B+Tree 索引是有序的，会将相邻的数据都存储在一起)。

## 索引的使用条件

- 对于非常小的表、大部分情况下简单的全表扫描比建立索引更高效；

- 对于中到大型的表，索引就非常有效；

- 但是对于特大型的表，建立和维护索引的代价将会随之增长。这种情况下，需要用到一种技术可以直接区分出需要查询的一组数据，而不是一条记录一条记录地匹配，例如可以使用分区技术。

# 二、查询性能优化

## 慢查询的优化步骤

1. 查看运行效果，是否真的很慢，主要设置SQL_NO_CACHE。``select sql_no_cache count(*) from users;``
2. WHERE条件单表查询，锁定最小返回记录表。这句话的意思是，把查询语句的WHERE都应用到表中返回的记录数最小的表开始查起，单表每个字段分别查询，看哪个字段的区分度最高。
3. EXPLAIN查看执行计划，是否与1预期一致(从锁定记录较少的表开始查询)
4. ORDER BY LIMIT 形式的SQL语句，让排序的表优先查
5. 多去了解业务的使用场景
6. 加索引时，要参照建立索引的几大原则
7. 观察结果，不符合预期，则重新从1开始分析。

## 使用 Explain 进行分析

Explain 用来分析 SELECT 查询语句，开发人员可以通过分析 Explain 结果来优化查询语句。

比较重要的字段有: 

- select_type : 查询类型，有简单查询、联合查询、子查询等
- key : 使用的索引
- rows : 扫描的行数

## 优化数据访问

### 1. 减少请求的数据量

- 只返回必要的列: 最好不要使用 SELECT * 语句。
- 只返回必要的行: 使用 LIMIT 语句来限制返回的数据。
- 缓存重复查询的数据: 使用缓存可以避免在数据库中进行查询，特别在要查询的数据经常被重复查询时，缓存带来的查询性能提升将会是非常明显的。

### 2. 减少服务器端扫描的行数

最有效的方式是使用索引来覆盖查询。

## 重构查询方式

### 1. 切分大查询

一个大查询如果一次性执行的话，可能一次锁住很多数据、占满整个事务日志、耗尽系统资源、阻塞很多小的但重要的查询。

```sql
DELETE FROM messages WHERE create < DATE_SUB(NOW(), INTERVAL 3 MONTH);
```

```sql
rows_affected = 0
do {
    rows_affected = do_query(
    "DELETE FROM messages WHERE create  < DATE_SUB(NOW(), INTERVAL 3 MONTH) LIMIT 10000")
} while rows_affected > 0
```

### 2. 分解大连接查询

将一个大连接查询分解成对每一个表进行一次单表查询，然后在应用程序中进行关联，这样做的好处有: 

- 让缓存更高效。对于连接查询，如果其中一个表发生变化，那么整个查询缓存就无法使用。而分解后的多个查询，即使其中一个表发生变化，对其它表的查询缓存依然可以使用。
- 分解成多个单表查询，这些单表查询的缓存结果更可能被其它查询使用到，从而减少冗余记录的查询。
- 减少锁竞争；
- 在应用层进行连接，可以更容易对数据库进行拆分，从而更容易做到高性能和可伸缩。
- 查询本身效率也可能会有所提升。例如下面的例子中，使用 IN() 代替连接查询，可以让 MySQL 按照 ID 顺序进行查询，这可能比随机的连接要更高效。

```sql
SELECT * FROM tab
JOIN tag_post ON tag_post.tag_id=tag.id
JOIN post ON tag_post.post_id=post.id
WHERE tag.tag='mysql';
```

```sql
SELECT * FROM tag WHERE tag='mysql';
SELECT * FROM tag_post WHERE tag_id=1234;
SELECT * FROM post WHERE post.id IN (123,456,567,9098,8904);
```

# 三、存储引擎

## InnoDB

是 MySQL 默认的事务型存储引擎，只有在需要它不支持的特性时，才考虑使用其它存储引擎。

实现了四个标准的隔离级别，默认级别是可重复读(REPEATABLE READ)。在可重复读隔离级别下，通过多版本并发控制(MVCC)+ 间隙锁(Next-Key Locking)防止幻影读。

主索引是聚簇索引，在索引中保存了数据，从而避免直接读取磁盘，因此对查询性能有很大的提升。

内部做了很多优化，包括从磁盘读取数据时采用的可预测性读、能够加快读操作并且自动创建的自适应哈希索引、能够加速插入操作的插入缓冲区等。

支持真正的在线热备份。其它存储引擎不支持在线热备份，要获取一致性视图需要停止对所有表的写入，而在读写混合场景中，停止写入可能也意味着停止读取。

## MyISAM

设计简单，数据以紧密格式存储。对于只读数据，或者表比较小、可以容忍修复操作，则依然可以使用它。

提供了大量的特性，包括压缩表、空间数据索引等。

不支持事务。

不支持行级锁，只能对整张表加锁，读取时会对需要读到的所有表加共享锁，写入时则对表加排它锁。但在表有读取操作的同时，也可以往表中插入新的记录，这被称为并发插入(CONCURRENT INSERT)。

可以手工或者自动执行检查和修复操作，但是和事务恢复以及崩溃恢复不同，可能导致一些数据丢失，而且修复操作是非常慢的。

如果指定了 DELAY_KEY_WRITE 选项，在每次修改执行完成时，不会立即将修改的索引数据写入磁盘，而是会写到内存中的键缓冲区，只有在清理键缓冲区或者关闭表的时候才会将对应的索引块写入磁盘。这种方式可以极大的提升写入性能，但是在数据库或者主机崩溃时会造成索引损坏，需要执行修复操作。

## 比较

- 事务: InnoDB 是事务型的，可以使用 Commit 和 Rollback 语句。

- 并发: MyISAM 只支持表级锁，而 InnoDB 还支持行级锁。

- 外键: InnoDB 支持外键。

- 备份: InnoDB 支持在线热备份。

- 崩溃恢复: MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。

- 其它特性: MyISAM 支持压缩表和空间数据索引。

# 四、数据类型

## 整型

TINYINT, SMALLINT, MEDIUMINT, INT, BIGINT 分别使用 8, 16, 24, 32, 64 位存储空间，一般情况下越小的列越好。

INT(11) 中的数字只是规定了交互工具显示字符的个数，对于存储和计算来说是没有意义的。

## 浮点数

FLOAT 和 DOUBLE 为浮点类型，DECIMAL 为高精度小数类型。CPU 原生支持浮点运算，但是不支持 DECIMAl 类型的计算，因此 DECIMAL 的计算比浮点类型需要更高的代价。

FLOAT、DOUBLE 和 DECIMAL 都可以指定列宽，例如 DECIMAL(18, 9) 表示总共 18 位，取 9 位存储小数部分，剩下 9 位存储整数部分。

## 字符串

主要有 CHAR 和 VARCHAR 两种类型，一种是定长的，一种是变长的。

VARCHAR 这种变长类型能够节省空间，因为只需要存储必要的内容。但是在执行 UPDATE 时可能会使行变得比原来长，当超出一个页所能容纳的大小时，就要执行额外的操作。MyISAM 会将行拆成不同的片段存储，而 InnoDB 则需要分裂页来使行放进页内。

在进行存储和检索时，会保留 VARCHAR 末尾的空格，而会删除 CHAR 末尾的空格。

## 时间和日期

MySQL 提供了两种相似的日期时间类型: DATETIME 和 TIMESTAMP。

### 1. DATETIME

能够保存从 1001 年到 9999 年的日期和时间，精度为秒，使用 8 字节的存储空间。

它与时区无关。

默认情况下，MySQL 以一种可排序的、无歧义的格式显示 DATETIME 值，例如"2008-01-16 22:37:08"，这是 ANSI 标准定义的日期和时间表示方法。

### 2. TIMESTAMP

和 UNIX 时间戳相同，保存从 1970 年 1 月 1 日午夜(格林威治时间)以来的秒数，使用 4 个字节，只能表示从 1970 年到 2038 年。

它和时区有关，也就是说一个时间戳在不同的时区所代表的具体时间是不同的。

MySQL 提供了 FROM_UNIXTIME() 函数把 UNIX 时间戳转换为日期，并提供了 UNIX_TIMESTAMP() 函数把日期转换为 UNIX 时间戳。

默认情况下，如果插入时没有指定 TIMESTAMP 列的值，会将这个值设置为当前时间。

应该尽量使用 TIMESTAMP，因为它比 DATETIME 空间效率更高。

# 五、切分

## 水平切分

水平切分又称为 Sharding，它是将同一个表中的记录拆分到多个结构相同的表中。

当一个表的数据不断增多时，Sharding 是必然的选择，它可以将数据分布到集群的不同节点上，从而缓存单个数据库的压力。

<div align="center"> <img src="https://gitee.com/CyC2018/CS-Notes/raw/master/docs/pics/63c2909f-0c5f-496f-9fe5-ee9176b31aba.jpg"/> </div><br>

## 垂直切分

垂直切分是将一张表按列切分成多个表，通常是按照列的关系密集程度进行切分，也可以利用垂直切分将经常被使用的列和不经常被使用的列切分到不同的表中。

在数据库的层面使用垂直切分将按数据库中表的密集程度部署到不同的库中，例如将原来的电商数据库垂直切分成商品数据库、用户数据库等。

<div align="center"> <img src="https://gitee.com/CyC2018/CS-Notes/raw/master/docs/pics/e130e5b8-b19a-4f1e-b860-223040525cf6.jpg"/> </div><br>

## Sharding 策略

- 哈希取模: hash(key) % N；
- 范围: 可以是 ID 范围也可以是时间范围；
- 映射表: 使用单独的一个数据库来存储映射关系。

## Sharding 存在的问题

### 1. 事务问题

使用分布式事务来解决，比如 XA 接口。

### 2. 连接

可以将原来的连接分解成多个单表查询，然后在用户程序中进行连接。

### 3. ID 唯一性

- 使用全局唯一 ID(GUID)
- 为每个分片指定一个 ID 范围
- 分布式 ID 生成器 (如 Twitter 的 Snowflake 算法)

# 六、复制

## 主从复制

主要涉及三个线程: binlog 线程、I/O 线程和 SQL 线程。

-  **binlog 线程** : 负责将主服务器上的数据更改写入二进制日志(Binary log)中。
-  **I/O 线程** : 负责从主服务器上读取二进制日志，并写入从服务器的中继日志(Relay log)。
-  **SQL 线程** : 负责读取中继日志，解析出主服务器已经执行的数据更改并在从服务器中执行。

<div align="center"> <img src="https://gitee.com/CyC2018/CS-Notes/raw/master/docs/pics/master-slave.png"/> </div><br>

## 读写分离

主服务器处理写操作以及实时性要求比较高的读操作，而从服务器处理读操作。

读写分离能提高性能的原因在于: 

- 主从服务器负责各自的读和写，极大程度缓解了锁的争用；
- 从服务器可以使用 MyISAM，提升查询性能以及节约系统开销；
- 增加冗余，提高可用性。

读写分离常用代理方式来实现，代理服务器接收应用层传来的读写请求，然后决定转发到哪个服务器。

<div align="center"> <img src="https://gitee.com/CyC2018/CS-Notes/raw/master/docs/pics/master-slave-proxy.png"/> </div><br>

# 参考资料

- BaronScbwartz, PeterZaitsev, VadimTkacbenko, 等. 高性能 MySQL[M]. 电子工业出版社, 2013.
- 姜承尧. MySQL 技术内幕: InnoDB 存储引擎 [M]. 机械工业出版社, 2011.
- [20+ 条 MySQL 性能优化的最佳经验](https://www.jfox.info/20-tiao-mysql-xing-nen-you-hua-de-zui-jia-jing-yan.html)
- [服务端指南 数据存储篇 | MySQL(09) 分库与分表带来的分布式困境与应对之策](http://blog.720ui.com/2017/mysql_core_09_multi_db_table2/ "服务端指南 数据存储篇 | MySQL(09) 分库与分表带来的分布式困境与应对之策")
- [How to create unique row ID in sharded databases?](https://stackoverflow.com/questions/788829/how-to-create-unique-row-id-in-sharded-databases)
- [SQL Azure Federation – Introduction](http://geekswithblogs.net/shaunxu/archive/2012/01/07/sql-azure-federation-ndash-introduction.aspx "Title of this entry.")
- [MySQL 索引背后的数据结构及算法原理](http://blog.codinglabs.org/articles/theory-of-mysql-index.html)
- [MySQL 性能优化神器 Explain 使用分析](https://segmentfault.com/a/1190000008131735)
- [How Sharding Works](https://medium.com/@jeeyoungk/how-sharding-works-b4dec46b3f6)
- [大众点评订单系统分库分表实践](https://tech.meituan.com/dianping_order_db_sharding.html)
- [B + 树](https://zh.wikipedia.org/wiki/B%2B%E6%A0%91)

</br><div align="center">⭐️欢迎关注我的公众号 CyC2018，在公众号后台回复关键字 📚 **资料** 可领取复习大纲，这份大纲是我花了一整年时间整理的面试知识点列表，不仅系统整理了面试知识点，而且标注了各个知识点的重要程度，从而帮你理清多而杂的面试知识点。可以说我基本是按照这份大纲来进行复习的，这份大纲对我拿到了 BAT 头条等 Offer 起到很大的帮助。你们完全可以和我一样根据大纲上列的知识点来进行复习，就不用看很多不重要的内容，也可以知道哪些内容很重要从而多安排一些复习时间。</div></br>
<div align="center"><img width="180px" src="https://cyc-1256109796.cos.ap-guangzhou.myqcloud.com/%E5%85%AC%E4%BC%97%E5%8F%B7.jpg"></img></div>