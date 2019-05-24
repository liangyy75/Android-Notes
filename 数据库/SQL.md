```sql
A, –all-databases 表示所有库
-a, –analyze 分析表
-o, –optimize 优化表
-r, –repair 修复表错误
-c, –check 检查表是否出错
–auto-repair 自动修复损坏的表
-B, –databases 选择多个库
-1, –all-in-1 Use one query per database with tables listed in a comma separated way
-C, –check-only-changed 检查表最后一次检查之后的变动
-g, –check-upgrade Check for version dependent changes in the tables
-F, –fast Check tables that are not closed properly
–fix-db-names Fix DB names
–fix-table-names Fix table names
-f, –force Continue even when there is an error
-e, –extended Perform extended check on a table. This will take a long time to execute.
-m, –medium-check Faster than extended check option, but does most checks
-q, –quick Faster than medium check option

-- mysqlcheck -c test test_null -uroot -ppassword: 查询表是否损坏
    -- mysqlcheck -c test test_null -uroot -ppassword: 查询数据库中所有表
    -- mysqlcheck -c --all-databases -uroot -p: 所有的数据库和表
    -- mysqlcheck -c --databases test world dingbao -uroot -p: 查询多个数据库
-- mysqlcheck -a test test_null -uroot -p: 分析表
-- mysqlcheck -o test test_null -uroot -p: 优化表
-- mysqlcheck -r test test_null -uroot -p: 修复表
-- mysqlcheck -uroot -p --auto-repair -o test: 检查，优化，修复表组合命令

check table test_null quick/medium/fast/changed/extended;  -- 只对myisam表有作用(对innodb和视图无效)
    -- quick：不扫描行，不检查错误的链接。
    -- fast：只检查没有被正确关闭的表。
    -- changed：只检查自上次检查后被更改的表，和没有被正确关闭的表。
    -- medium：扫描行，以验证被删除的链接是有效的。也可以计算各行的关键字校验和，并使用计算出的校验和验证这一点。
    -- extended：对每行的所有关键字进行一个全面的关键字查找。这可以确保表是100％一致的，但是花的时间较长，所以很少使用。
repair [local | no_write_to_binlog] table tbl_name [, tbl_name] ... [quick] [extended] [use_frm]
    -- quick：repair只修复索引，等价于“myisamchk --recover --quick tablename”
    -- extended：MySQL会一行一行地创建索引行，等价于”myisamchk --safe-recover tablename“
    -- use_frm:如果.MYI索引文件缺失或标题被破坏，则使用此选项，用来自.frm文件重新创建.MYI文件。这种修复不能使用myisamchk来完成；在repair常规无法完成时，才会使用这个选项，如果表被压缩不能使用。
    -- no_write_to_binlog:repair默认是写到二进制文件的，如果有主从模式的话，repair也会在从库执行；使用此选项将会禁止写入到二进制文件中。
```

```sql
show index from test;
delete from messages where create < date_sub(now(), interval 3 month);
-- 分解大连接查询
show engeines;
```

```sql
-- show databases;
-- create database if not exists test;
-- use test;
-- show tables;
-- create table if not exists mytable (id int not null auto_increment, col1 int not null default 1, col2 varchar(45) null, col3 date null, primary key(`id`));
-- desc table mytable;
-- drop table mytable if exists;
-- drop database test if exists;
-- show create table mytable;

-- 修改表名
alter table mytable rename to mytable3;
-- 添加: 键 唯一索引 索引 全文索引 多列索引
alter table mytable add primary key(`id`);
alter table mytable add unique(`col3`);
alter table mytable add index test_index(`col4`);
alter table mytable add fulltext(`col5`);
alter table mytable add index test_multiple_index(`col1`, `col2`, `col3`);
-- 字段(包括字段类型)操作: 添加 修改 修改 修改 删除
alter table mytable add col4 char(20);
alter table mytable modify col4 char(24);
alter table mytable alter column col4 set int default 0;
alter table mytable change col4 col5 int not null default 0 (after col1/first);
alter table mytable drop column col4;

-- insert into mytable(col1, col2) values(val1, val2);
insert into mytable(col1, col2) select col1, col2 from mytable2;
create table mytable2 as select * from mytable;

-- update mytable set col = val where id = 1;

-- delete from mytable where id between 1 and 2;
truncate table mytable; -- 可以清空表，也就是删除所有行。

select distinct col1, col2 from mytable order by id;
select top 2 from mytable;
select top 50 percent from mytable;
select * from mytable limit 2, 5;   -- select * from mytable limit 5 offset 2;
select * from mytable where id <= 3 and col is not null or not (id < 5);
select * from mytable order by col1 desc, col2 asc;
select * from mytable where col1 like `[^AB]%`;
select id * id as idTwo, concat(trim(col1), '(', trim(col2), ')') as concat_col from mytable;

select col, count(*) as num from mytable group by col order by num having num >= 2; -- 分组规定：
-- GROUP BY 子句出现在 WHERE 子句之后，ORDER BY 子句之前；
-- 除了汇总字段外，SELECT 语句中的每一字段都必须在 GROUP BY 子句中给出； ???
-- NULL 的行会单独分为一组；
-- 大多数 SQL 实现不支持 GROUP BY 列具有可变长度的数据类型。
select * from mytable where id in (select col1 in mytable);
select cust_name, (select count(*) from orders where orders.cust_id = customers.cust_id) as orders_num from customers order by cust_name;

select count(*) from mytable1, mytable2 where mytable1.id = mytable2.id;
-- <==> select count(*) from mytable1 as A inner join mytable2 as B on A.id = B.id; -- 还可以用where语句，这个on只是用于join的。
-- 在 MySQL 中（仅限于 MySQL） CROSS JOIN 与 INNER JOIN 的表现是一样的，在不指定 ON 条件得到的结果都是笛卡尔积，反之取得两个表完全匹配的结果。
select col1 from mytable1 where id = (select id from mytable2 where col2 = "Jim");
-- <==> select A.col1 from mytable1 as A inner join mytable2 as B on A.id = B.id and B.col2 = "Jim";
select count(*) from mytable1 natural join mytable2;
-- 相当于合并所有同名的同值的列(即两个表都有且值相同)，然后返回这些同名列以及它们所在行的数据。由于mytable2是复制mytable1的，所以，这里
-- <==> select count(*) from mytable1 inner join mytable2 using (id, col1, col2, col3);
-- <==> select count(*) from mytable1 as A inner join mytable2 as B A.id = B.id and A.col1 = B.col1 and A.col2 = B.col2 and A.col3 = B.col3;

-- 注意：mysql不支持Full join,不过可以通过UNION 关键字来合并 LEFT JOIN 与 RIGHT JOIN来模拟FULL join.

select * from mytable1 union select * from mytable2;
select id from mytable1 union all select col1 from mytable2;

select id from mytable1 where exists (select * from mytable2 where mytable2.id = mytable1.id);
select id from mytable1 where not exists (select * from mytable2 where mytable2.id = mytable1.id);
select id from mytable1 where id >= all(select * from mytable1);

create view myview as select concat(col1, col2) as concat_col, col3 * col4 as compute_col from mytable where col5 = val;
-- create algorithm view 视图名称[(column_list)] as select 语句 with [cascaded|local] check option
    -- cascaded 默认值，表示更新视图的时候，要满足视图和表的相关条件 -- local: 表示更新视图的时候，要满足该视图定义的一个条件即可
-- with check option：对视图进行更新操作的时，需要检查更新后的值是否还是满足视图公式定义的条件。通俗点，就是所更新的结果是否还会在视图中存在。
-- 如果更新后的值不在视图范围内，就不允许更新如果创建视图的时候，没有加上with check option，更新视图中的某项数据的话，mysql并不会进行有效性检查。
-- 删掉了就删掉了。在视图中将看不到了。所以使用whit [cascaded|local] check option选项可以保证数据的安全性
select * from myview;
show create view myview;
drop view myview;
update myview set col = val where id = 1;
create or replace view myview as select * from mytable2;
alter view myview as select * from mytable2;

-- b'100' + 0, bin(10), oct(8), hex(21)
-- avg(distinct id), count(*), max, min, sum
-- nullif(int1, int2), ifnull(val1, val2)
-- left(str, len), right, substr(str, start, len), substring(str, start, len), reverse, locate(ch, str), lower, upper, ltrim, rtrim, length, soundex(转换为语音值)
-- ceil, floor, round, div, mod, power(a, b), truncate(a, b)数字截取：a中保留b位小数，且不四舍五入；如果b为负，规律一样。
-- sin, cos, tan, abs, sqrt, mod, exp, pi, rand
-- adddate('2019-02-23', 10/'21'), addtime('12:20:30', '1:0:0'), curdate(), curtime(), date('2019-03-23 09:34:23'), time(date), datediff(date1, date2),
--     date_add(date, interval expr type(microsecond|second|minute|hour|day|week|month|quarter|year|second_microsecond|minute_microsecond|minute_second|hour_microsecond|hour_second|hour_minute|day_microsecond|day_second|day_minute|day_hour|year_month)), extract(type from date);
--     date_format(now(), '%Y-%m-%d %H:%i:%s'), year(), month(), day(), dayofweek(), hour(), minute(), second(),

-- select过程：from->where->select->group by->having->order by->limit
-- A LEFT/RIGHT JOIN B ON ... WHERE ... 先是on完后再where的。
-- 对于union的前部分查询和后部分查询不能有GROUP BY,ORDER BY等字段,只有是在整个的最后才能有GROUP BY,ORDER BY等字段!
-- [mysql的exists与inner join 和 not exists与 left join 性能差别惊人](https://openxtiger.iteye.com/blog/1911228)
-- on, using, inner/cross join, left (outer) join, right (outer) join, natural join
-- union, union all
-- not in, in/ any, all, some/ exists, not exists
-- group by, having, order by, desc, asc
```

```sql
set @param1 = 1;
set @param2 = 2;
set @param3 = 3;
select @param1;
select @param2;
delimiter $$
create definer='root'@'localhost' procedure param_test(in p_in int, out p_out int, inout p_inout int)
begin
    select p_in;
    set p_in = 2;
    select p_in;
    select p_out;
    set p_out = 1;
    select p_out;
    select p_inout;
    set p_inout = 1;
    select p_inout;
end$$
delimiter ;
call param_test(@param1, @param2, @param3);
select @param1;
select @param2;
select @param3;

select 'hello world' into @x;
select @x;

create procedure greetworld() select concat(@greeting,' world');
set @greeting = "Hello";
call greetworld();

create procedure p1() set @last_procedure='p1';
create procedure p2() select concat('last procedure was ',@last_procedure);
call p1();
call p2();

delimiter //
create procudure all(in pin int, out pout int, inout pinout int)
begin
    declare variable varchar(5) default 'outer';
    select variable;
    begin
        declare variable varchar(5) default 'inner';
        select variable;
    end;
    select variable;
    if ... then
        ...
    else if ... then
        ...
    else
        ...
    end if;
    case ...
        when ... then
            ...
        when ... then
            ...
        else
            ...
    end case;
    while ... do
        ...
    end while;
    repeat
        ...
        until ...;
    end repeat;
    loop_lable : loop
        ...
        leave loop_lable;
    end loop;
end;
//
delimiter ;
```

```sql
show variables like 'event_scheduler';
set global event_scheduler = on;
create table if not exists users(id int not null auto_increment, first_name varchar(10) not null,
    last_name varchar(10) not null, sex set('男', '女') not null, score int not null, primary key(`id`));
delimiter $$    -- 将语句的结束符号从分号;临时改为两个$$(可以是自定义)
drop procedure if exists add_user;
create procedure add_user(in amount int)
begin
    declare rowid int default 0;    -- 定义变量
    declare first_name char(1);
    declare last_name char(3) default '';
    declare name1 char(1);
    declare name2 char(1);
    declare sex char(1) default '男';
    declare score char(2);
    -- declare temp int;
    while rowid < amount do
        set first_name = substring('赵钱孙李周吴郑王林杨柳刘孙陈江阮侯邹高彭徐', floor(1 + 21 * rand()), 1);
        set name1 = substring('一二三四五六七八九十甲乙丙丁静景京晶名明铭敏闵民军君俊骏天田甜兲恬益依成城诚立莉力黎励', floor(1 + 43 * rand()), 1);
        set name2 = substring('一二三四五六七八九十甲乙丙丁静景京晶名明铭敏闵民军君俊骏天田甜兲恬益依成城诚立莉力黎励', floor(1 + 43 * rand()), 1);
        set sex = if(round(rand()) = 1, '男', '女');
        set score = round(40 + rand() * 60);
        set rowid = rowid + 1;
        -- set temp = floor(rand() * 2);
        -- if temp = 0 then
        --     set last_name = name1;
        -- else if temp = 1 then
        --     set last_name = name2;
        -- else
        --     set last_name = concat(name1, name2);
        -- end if;
        set last_name = case round(rand() * 2)
            when 0 then name1;
            when 1 then name2;
            else concat(name1, name2);
        end;
        insert into users(first_name, last_name, sex, score) values(first_name, last_name, sex, score);
    end while;
end$$
delimiter ;
call add_user(100);
```

```sql
-- 索引: http://www.w3school.com.cn/sql/sql_create_index.asp http://www.runoob.com/mysql/mysql-index.html
-- 约束: http://www.w3school.com.cn/sql/sql_constraints.asp 
-- 存储过程: 
-- 游标
-- 触发器

-- 事务管理
start transaction
// ...
savepoint delete1;
// ...
rollback to delete1;
// ...
commit;
set global init_connect = "set autocommit=0";   -- 提示你用权限更高的财户来设置
select @@autocommit;
set @@autocommit = 0;

-- 字符集
    -- 字符集为字母和符号的集合；编码为某个字符集成员的内部表示；校对字符指定如何比较，主要用于排序和分组。
create table mytable(col varchar(10) character set latin collate latin1_general_ci) default character set hebrew collate hebrew_general_ci;
    -- 除了给表指定字符集和校对外，也可以给列指定：
select * from mytable order by col collate latin1_general_ci;   -- 可以在排序、分组时指定校对：

-- 权限管理
use mysql;
select user from user;  -- 查找用户
create user myuser identified by'mypassword';   -- 新建用户，新创建的账户没有任何权限。
rename myuser to newuser;   -- 修改账户名
set password for myuser = Password('newpassword');  -- 更改密码
drop user myuser;   -- 删除用户
show grants for myuser; -- 查看权限
grant select, insert on mydatabases.* to myuser;    -- 授予权限: 账户用 username@host 的形式定义，username@% 使用的是默认主机名。
remove select, insert on mydatabases.* from myuser; -- 删除权限: 整个服务器，使用 GRANT ALL 和 REVOKE ALL; 整个数据库，使用 ON database.*;
    -- 特定的表，使用 ON database.table; 特定的列; 特定的存储过程;
```

MySQL支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。

1. ***数值类型***
    1. 整数类型

        类型 | 存储(bytes) | 最小值(signed/unsigned) | 最大值(signed/unsigned)
        :- |:- |:- |:-
        tinyint | 1 | -128 | 127
        . | . | 0 | 255
        smallint | 2 | -32768 | 32767
        . | . | 0 | 65535
        mediumint | 3 | -8388608 | 8388607
        . | . | 0 | 16777215
        int | 4 | -2147483648 | 2147483647
        . | . | 0 | 4294967295
        bigint | 8 | -9223372036854775808 | 9223372036854775807
        . | . | 0 | 18446744073709551615

    2. 定点数: decimal 和 numeric 类型在MySQL中视为相同的类型。它们用于保存必须为确切精度的值。使用示例: ``salary decimal(5, 2)`` ，即decimal(M, D)。
        其中 M 是表示十进制数字总的个数， D 表示小数点后面数字的位数。如果存储时，整数部分超出了范围(如例子中添加数值为1000.01)，MySql就会报错，不允许存这样的值。<br>
        如果存储时，小数点部分若超出范围，就分以下情况：
        - 若四舍五入后，整数部分没有超出范围，则只警告，但能成功操作并四舍五入删除多余的小数位后保存。如999.994实际被保存为999.99。
        - 若四舍五入后，整数部分超出范围，则MySql报错，并拒绝处理。如999.995和-999.995都会报错。
        
        M的默认取值为10，D默认取值为0。如果创建表时，某字段定义为decimal类型不带任何参数，等同于decimal(10,0)。带一个参数时，D取默认值:

        - M的取值范围为1~65，取0时会被设为默认值，超出范围会报错。
        - D的取值范围为0~30，而且必须<=M，超出范围会报错。

        所以，很显然，当M=65，D=0时，可以取得最大和最小值。

    3. 浮点数: 浮点数是用来表示实数的一种方法，它用 M(尾数) * B(基数) 的 E(指数) 次方来表示实数，相对于定点数来说，在长度一定的情况下，具有表示数据范围大的特点。
        但同时也存在误差问题。如果希望保证值比较准确，推荐使用定点数数据类型。MySql中的浮点类型有float，double和real。他们定义方式为:
        ``float(M,D); read(M,D); double percision(M,D)``。REAL就是DOUBLE，如果SQL服务器模式包括REAL_AS_FLOAT选项，REAL是FLOAT的同义词而不是DOUBLE的同义词。<br>
        FLOAT和DOUBLE中的M和D的取值默认都为0，即除了最大最小值，不限制位数。允许的值理论上是-1.7976931348623157E+308~-2.2250738585072014E-308、0和2.2250738585072014E-308~1.7976931348623157E+308。M、D范围如下（MySql5.7实测，与IEEE标准计算的实际是不同的，下面介绍）：

        - M取值范围为0~255。FLOAT只保证6位有效数字的准确性，所以FLOAT(M,D)中，M<=6时，数字通常是准确的。如果M和D都有明确定义，其超出范围后的处理同decimal。
        - D取值范围为0~30，同时必须<=M。double只保证16位有效数字的准确性，所以DOUBLE(M,D)中，M<=16时，数字通常是准确的。如果M和D都有明确定义，其超出范围后的处理同decimal。

        FLOAT和DOUBLE中，若M的定义分别超出7和17，则多出的有效数字部分，取值是不定的，通常数值上会发生错误。因为浮点数是不准确的，所以我们要避免使用“=”来判断两个数是否相等。<br>
        内存中，FLOAT占4-byte（1位符号位 8位表示指数 23位表示尾数），DOUBLE占8-byte（1位符号位 11位表示指数 52位表示尾数）。

    4. bit: 可用来保存位字段值。BIT(M)类型允许存储M位值。M范围为1~64，默认为1，其实就是存入二进制的值。如: ``create table t(b bit(8)); insert into t set b=b'1001'``

2. ***字符串类型***
    1. char(M) / varchar(M): char的长度固定，每个默认长度都为255，有M个，当检索到CHAR值时，尾部的空格被删除掉，所以，我们在存储时字符串右边不能有空格，即使有，
        查询出来后也会被删除。在存储或检索过程中不进行大小写转换。所以当char类型的字段为唯一值时，添加的值是否已经存在以不包含末尾空格（可能有多个空格）的值确定，
        比较时会在末尾补满空格后与现已存在的值比较。<br>
        VARCHAR列中的值为可变长字符串。长度可以指定为0到65,535之间的值（实际可指定的最大长度与编码和其他字段有关，比如，本人MySql使用utf-8编码格式，
        大小为标准格式大小的2倍，仅有一个varchar字段时实测最大值仅21844，如果添加一个char(3)，则最大取值减少3。整体最大长度是65,532字节）。
        VARCHAR值保存时不进行填充。当值保存和检索时尾部的空格仍保留，符合标准SQL。VARCHAR值保存时只保存需要的字符数，另加一个字节来记录长度(如果列声明的长度超过255，
        则使用两个字节)。<br>
        如果分配给CHAR或VARCHAR列的值超过列的最大长度，则对值进行裁剪以使其适合。如果被裁掉的字符是空格，则会产生一条警告。如果裁剪非空格字符，
        则会造成错误(而不是警告)并通过使用严格SQL模式禁用值的插入。<br>
        因为空格的原因，相同的值存入到长度都足够的varvhar和char中，取出可能会不同，比如"a"和"a  "。

    2. binary(M) / varbinary(M): 类似于CHAR和VARCHAR类型，但是不同的是，它们存储的不是字符字符串，而是二进制串。它们没有字符集，并且排序和比较基于列值字节的数值值。
        当保存BINARY值时，在它们右边填充0x00(零字节)值以达到指定长度。取值时不删除尾部的字节。比较时所有字节很重要(因为空格和0x00是不同的，0x00<空格)，
        包括ORDER BY和DISTINCT操作。比如插入'a '会变成'a \0'。<br>
        对于VARBINARY，插入时不填充字符，选择时不裁剪字节。比较时所有字节很重要。当类型为BINARY的字段为主键时，应考虑上面介绍的存储方式。

    3. blob / text: blob是一个二进制大对象，可以容纳可变数量的数据。有4种blob类型：tinyblob、blob、mediumblob和longblob。它们只是可容纳值的最大长度不同。<br>
        有4种text类型：tinytext、text、mediumtext和longtext。这些对应4种blob类型，有相同的最大长度和存储需求。<br>
        blob列被视为二进制字符串。text列被视为字符字符串，类似char和binary。在text或blob列的存储或检索过程中，不存在大小写转换。<br>
        未运行在严格模式时，如果你为blob或text列分配一个超过该列类型的最大长度的值，值被截取以保证适合。如果截掉的字符不是空格，将会产生一条警告。
        使用严格sql模式，会产生错误，并且值将被拒绝而不是截取并给出警告。<br>
        在大多数方面，可以将blob列视为能够足够大的varbinary列。同样，可以将text列视为varchar列。<br>
        blob和text在以下几个方面不同于varbinary和varchar：

        - 当保存或检索blob和text列的值时不删除尾部空格。(这与varbinary和varchar列相同）。 
        - 比较时将用空格对text进行扩充以适合比较的对象，正如char和varchar。
        - 对于blob和text列的索引，必须指定索引前缀的长度。对于char和varchar，前缀长度是可选的。
        - blob和text列不能有默认值。

        mysql connector/odbc将blob值定义为longvarbinary，将text值定义为longvarchar。<br>
        blob或text对象的最大大小由其类型确定，但在客户端和服务器之间实际可以传递的最大值由可用内存数量和通信缓存区大小确定。
        你可以通过更改max_allowed_packet变量的值更改消息缓存区的大小，但必须同时修改服务器和客户端程序。<br>
        每个blob或text值分别由内部分配的对象表示。<br>
        它们（text和blob同）的长度：

        - tiny：最大长度255个字符(2^8-1)
        - blob或text：最大长度65535个字符(2^16-1)
        - medium：最大长度16777215个字符(2^24-1)
        - longtext 最大长度4294967295个字符(2^32-1)
    
        实际长度与编码有关，比如utf-8的会减半。

    4. enum: mysql中的enum是一个字符串对象，其值来自表创建时在列规定中显式枚举的一列值。可以插入空字符串""和null：
        - 如果你将一个非法值插入enum(也就是说，允许的值列之外的字符串)，将插入空字符串以作为特殊错误值。该字符串与“普通”空字符串不同，该字符串有数值值0。
        - 如果将enum列声明为允许null，null值则为该列的一个有效值，并且默认值为null。如果enum列被声明为not null，其默认值为允许的值列的第1个元素。

        值的索引规则如下：

        - 来自列规定的允许的值列中的值从1开始编号。
        - 空字符串错误值的索引值是0。所以，可以使用下面的select语句来找出分配了非法enum值的行：mysql> select * from tbl_name where enum_col=0;
        - null值的索引是null。

        enum最多可以有65,535个元素。当创建表时，enum成员值的尾部空格将自动被删除。``create table t(s enum('x-small', 'small', 'medinum', 'large', 'x-large'));``。
        ``insert into t values('large');``。如果将返回值设为数值，将返回索引值，比如``select s + 0 from t;``。

    5. set: 一个字符串对象，可以有零或多个值，其值来自表创建时规定的允许的一列值。指定包括多个set成员的set列值时各成员之间用逗号(‘,’)间隔开。
        例如，指定为set('one', 'two') not null的列可以有下面的任何值：``'',  'one', 'two', 'one,two'``。<br>
        set最多可以设置64个值。创建表时，set成员值的尾部空格将自动被删除。检索时，保存在set列的值使用列定义中所使用的大小写来显示。<br>
        mysql用数字保存set值，所保存值的低阶位对应第1个set成员。如果在数值上下文中检索一个set值，检索的值的位设置对应组成列值的set成员。值以乘2方法递增。如：
        set('a', 'b', 'c', 'd')中'b'对应的十进制值是2，二进制值是b'0010'。如果你为该列分配一个值9，其二进制形式为1001，因此第1个和第4个set值成员'a'和'd'被选择，
        结果值为 'a,d'。set值按数字顺序排序。null值排在非null set值的前面。<br>
        通常情况，可以使用find_in_set()函数或like操作符搜索set值：
        ```sql
        select * from tbl_name where find_in_set('value', set_col) > 0;
        select * from tbl_name where set_col like '%value%';
        ```
        第1个语句找出set_col包含value set成员的行。第2个类似，但有所不同：它在其它地方找出set_col包含value的行，甚至是在另一个set成员的子字符串中。下面的语句也是合法的：
        ```sql
        select * from tbl_name where set_col & 1;
        select * from tbl_name where set_col = 'val1,val2';
        ```
        第1个语句寻找包含第1个set成员的值。第2个语句寻找一个确切匹配的值。应注意第2类的比较。将set值与'val1,val2'比较返回的结果与同'val2,val1'比较返回的结果不同。
        指定值时的顺序应与在列定义中所列的顺序相同。<br>
        如果想要为set列确定所有可能的值，使用show columns from tbl_name like set_col并解析输出中第2列`的set定义。<br>
        什么实际应用呢？比如我们设定用户的权限控制，一个用户可能会有多种权限，我们使用所有权限创建一个set类型的字段，我们不需要用一系列int来定义各种权限了，
        直接使用一个set字段即可：`
        ```sql
        /*
        用户权限permission表
        */
        create table user_permission(id int unsigned not null auto_increment, user_id int not null, permission set('阅读','评论','发帖') not null,
            primary key(id), unique (user_id));
        desc user_permission;
        insert into user_permission values (0, 1, '阅读'), (0, 2, '阅读'), (0, 3, '阅读,评论'), (0, 4, '阅读,评论,发帖');
        select *, permission + 0 from user_permission;
        select permission from user_permission where user_id = 1;
        select * from user_permission where permission & 10;
        select * from user_permission where find_in_set('评论',permission) > 0;
        ```

3. ***时间日期类型***

    Data Type | sample value
    :- |:-
    date | '0000-00-00'
    time | '00:00:00'
    datetime | '0000-00-00 00:00:00'
    timestamp | '0000-00-00 00:00:00'
    year | 0000

    1. date, datetime, timestamp
    2. time
    3. year

4. ***几何类型***<br>
    <!-- ![几何类型](http://blog.anxpp.com/usr/uploads/2016/04/1585660606.png) -->
    <div align="center"><img alt="几何类型" src="http://blog.anxpp.com/usr/uploads/2016/04/1585660606.png"/></div>

* [MySQL join原理](https://www.cnblogs.com/shengdimaya/p/7123069.html)
* [MySQL常用操作语句，如连接MySQL格式：mysql-h主机地址-u用户名-p用户密](https://blog.csdn.net/u013013553/article/details/42147573)
* [MySQL存储过程入门教程](https://www.cnblogs.com/microtiger/p/7815252.html)
* [MySQL存储过程](http://www.runoob.com/w3cnote/mysql-stored-procedure.html)
* [Mysql创建用户表并利用存储过程添加100万条随机用户数据](https://blog.csdn.net/u013399093/article/details/54585785)
* [MySQL中的数据类型介绍](https://www.cnblogs.com/Caveolae/p/7058890.html)
* [点击阅读面试进阶指南](https://github.com/CyC2018/Backend-Interview-Guide)
<!-- GFM-TOC -->
* [一、基础](#一基础)
* [二、创建表](#二创建表)
* [三、修改表](#三修改表)
* [四、插入](#四插入)
* [五、更新](#五更新)
* [六、删除](#六删除)
* [七、查询](#七查询)
* [八、排序](#八排序)
* [九、过滤](#九过滤)
* [十、通配符](#十通配符)
* [十一、计算字段](#十一计算字段)
* [十二、函数](#十二函数)
* [十三、分组](#十三分组)
* [十四、子查询](#十四子查询)
* [十五、连接](#十五连接)
* [十六、组合查询](#十六组合查询)
* [十七、视图](#十七视图)
* [十八、存储过程](#十八存储过程)
* [十九、游标](#十九游标)
* [二十、触发器](#二十触发器)
* [二十一、事务管理](#二十一事务管理)
* [二十二、字符集](#二十二字符集)
* [二十三、权限管理](#二十三权限管理)
* [参考资料](#参考资料)
<!-- GFM-TOC -->


# 一、基础

模式定义了数据如何存储、存储什么样的数据以及数据如何分解等信息，数据库和表都有模式。

主键的值不允许修改，也不允许复用（不能使用已经删除的主键值赋给新数据行的主键）。

SQL（Structured Query Language)，标准 SQL 由 ANSI 标准委员会管理，从而称为 ANSI SQL。各个 DBMS 都有自己的实现，如 PL/SQL、Transact-SQL 等。

SQL 语句不区分大小写，但是数据库表名、列名和值是否区分依赖于具体的 DBMS 以及配置。

SQL 支持以下三种注释：

```sql
# 注释
SELECT *
FROM mytable; -- 注释
/* 注释1
   注释2 */
```

数据库创建与使用：

```sql
CREATE DATABASE test;
USE test;
```

# 二、创建表

```sql
CREATE TABLE mytable (
  id INT NOT NULL AUTO_INCREMENT,
  col1 INT NOT NULL DEFAULT 1,
  col2 VARCHAR(45) NULL,
  col3 DATE NULL,
  PRIMARY KEY (`id`));
```

# 三、修改表

添加列

```sql
ALTER TABLE mytable
ADD col CHAR(20);
```

删除列

```sql
ALTER TABLE mytable
DROP COLUMN col;
```

删除表

```sql
DROP TABLE mytable;
```

# 四、插入

普通插入

```sql
INSERT INTO mytable(col1, col2)
VALUES(val1, val2);
```

插入检索出来的数据

```sql
INSERT INTO mytable1(col1, col2)
SELECT col1, col2
FROM mytable2;
```

将一个表的内容插入到一个新表

```sql
CREATE TABLE newtable AS
SELECT * FROM mytable;
```

# 五、更新

```sql
UPDATE mytable
SET col = val
WHERE id = 1;
```

# 六、删除

```sql
DELETE FROM mytable
WHERE id = 1;
```

**TRUNCATE TABLE**  可以清空表，也就是删除所有行。

```sql
TRUNCATE TABLE mytable;
```

使用更新和删除操作时一定要用 WHERE 子句，不然会把整张表的数据都破坏。可以先用 SELECT 语句进行测试，防止错误删除。

# 七、查询

## DISTINCT

相同值只会出现一次。它作用于所有列，也就是说所有列的值都相同才算相同。

```sql
SELECT DISTINCT col1, col2
FROM mytable;
```

## LIMIT

限制返回的行数。可以有两个参数，第一个参数为起始行，从 0 开始；第二个参数为返回的总行数。

返回前 5 行：

```sql
SELECT *
FROM mytable
LIMIT 5;
```

```sql
SELECT *
FROM mytable
LIMIT 0, 5;
```

返回第 3 \~ 5 行：

```sql
SELECT *
FROM mytable
LIMIT 2, 3;
```

# 八、排序

-  **ASC** ：升序（默认）
-  **DESC** ：降序

可以按多个列进行排序，并且为每个列指定不同的排序方式：

```sql
SELECT *
FROM mytable
ORDER BY col1 DESC, col2 ASC;
```

# 九、过滤

不进行过滤的数据非常大，导致通过网络传输了多余的数据，从而浪费了网络带宽。因此尽量使用 SQL 语句来过滤不必要的数据，而不是传输所有的数据到客户端中然后由客户端进行过滤。

```sql
SELECT *
FROM mytable
WHERE col IS NULL;
```

下表显示了 WHERE 子句可用的操作符

|  操作符 | 说明  |
| :---: | :---: |
| = | 等于 |
| &lt; | 小于 |
| &gt; | 大于 |
| &lt;&gt; != | 不等于 |
| &lt;= !&gt; | 小于等于 |
| &gt;= !&lt; | 大于等于 |
| BETWEEN | 在两个值之间 |
| IS NULL | 为 NULL 值 |

应该注意到，NULL 与 0、空字符串都不同。

**AND 和 OR**  用于连接多个过滤条件。优先处理 AND，当一个过滤表达式涉及到多个 AND 和 OR 时，可以使用 () 来决定优先级，使得优先级关系更清晰。

**IN**  操作符用于匹配一组值，其后也可以接一个 SELECT 子句，从而匹配子查询得到的一组值。

**NOT**  操作符用于否定一个条件。

# 十、通配符

通配符也是用在过滤语句中，但它只能用于文本字段。

-  **%**  匹配 >=0 个任意字符；

-  **\_**  匹配 ==1 个任意字符；

-  **[ ]**  可以匹配集合内的字符，例如 [ab] 将匹配字符 a 或者 b。用脱字符 ^ 可以对其进行否定，也就是不匹配集合内的字符。

使用 Like 来进行通配符匹配。

```sql
SELECT *
FROM mytable
WHERE col LIKE '[^AB]%'; -- 不以 A 和 B 开头的任意文本
```

不要滥用通配符，通配符位于开头处匹配会非常慢。

# 十一、计算字段

在数据库服务器上完成数据的转换和格式化的工作往往比客户端上快得多，并且转换和格式化后的数据量更少的话可以减少网络通信量。

计算字段通常需要使用  **AS**  来取别名，否则输出的时候字段名为计算表达式。

```sql
SELECT col1 * col2 AS alias
FROM mytable;
```

**CONCAT()**  用于连接两个字段。许多数据库会使用空格把一个值填充为列宽，因此连接的结果会出现一些不必要的空格，使用 **TRIM()** 可以去除首尾空格。

```sql
SELECT CONCAT(TRIM(col1), '(', TRIM(col2), ')') AS concat_col
FROM mytable;
```

# 十二、函数

各个 DBMS 的函数都是不相同的，因此不可移植，以下主要是 MySQL 的函数。

## 汇总

|函 数 |说 明|
| :---: | :---: |
| AVG() | 返回某列的平均值 |
| COUNT() | 返回某列的行数 |
| MAX() | 返回某列的最大值 |
| MIN() | 返回某列的最小值 |
| SUM() |返回某列值之和 |

AVG() 会忽略 NULL 行。

使用 DISTINCT 可以让汇总函数值汇总不同的值。

```sql
SELECT AVG(DISTINCT col1) AS avg_col
FROM mytable;
```

## 文本处理

| 函数  | 说明  |
| :---: | :---: |
|  LEFT() |  左边的字符 |
| RIGHT() | 右边的字符 |
| LOWER() | 转换为小写字符 |
| UPPER() | 转换为大写字符 |
| LTRIM() | 去除左边的空格 |
| RTRIM() | 去除右边的空格 |
| LENGTH() | 长度 |
| SOUNDEX() | 转换为语音值 |

其中， **SOUNDEX()**  可以将一个字符串转换为描述其语音表示的字母数字模式。

```sql
SELECT *
FROM mytable
WHERE SOUNDEX(col1) = SOUNDEX('apple')
```

## 日期和时间处理

- 日期格式：YYYY-MM-DD
- 时间格式：HH:MM:SS

|函 数 | 说 明|
| :---: | :---: |
| AddDate() | 增加一个日期（天、周等）|
| AddTime() | 增加一个时间（时、分等）|
| CurDate() | 返回当前日期 |
| CurTime() | 返回当前时间 |
| Date() |返回日期时间的日期部分|
| DateDiff() |计算两个日期之差|
| Date_Add() |高度灵活的日期运算函数|
| Date_Format() |返回一个格式化的日期或时间串|
| Day()| 返回一个日期的天数部分|
| DayOfWeek() |对于一个日期，返回对应的星期几|
| Hour() |返回一个时间的小时部分|
| Minute() |返回一个时间的分钟部分|
| Month() |返回一个日期的月份部分|
| Now() |返回当前日期和时间|
| Second() |返回一个时间的秒部分|
| Time() |返回一个日期时间的时间部分|
| Year() |返回一个日期的年份部分|

```sql
mysql> SELECT NOW();
```

```
2018-4-14 20:25:11
```

## 数值处理

| 函数 | 说明 |
| :---: | :---: |
| SIN() | 正弦 |
| COS() | 余弦 |
| TAN() | 正切 |
| ABS() | 绝对值 |
| SQRT() | 平方根 |
| MOD() | 余数 |
| EXP() | 指数 |
| PI() | 圆周率 |
| RAND() | 随机数 |

# 十三、分组

分组就是把具有相同的数据值的行放在同一组中。

可以对同一分组数据使用汇总函数进行处理，例如求分组数据的平均值等。

指定的分组字段除了能按该字段进行分组，也会自动按该字段进行排序。

```sql
SELECT col, COUNT(*) AS num
FROM mytable
GROUP BY col;
```

GROUP BY 自动按分组字段进行排序，ORDER BY 也可以按汇总字段来进行排序。

```sql
SELECT col, COUNT(*) AS num
FROM mytable
GROUP BY col
ORDER BY num;
```

WHERE 过滤行，HAVING 过滤分组，行过滤应当先于分组过滤。

```sql
SELECT col, COUNT(*) AS num
FROM mytable
WHERE col > 2
GROUP BY col
HAVING num >= 2;
```

分组规定：

- GROUP BY 子句出现在 WHERE 子句之后，ORDER BY 子句之前；
- 除了汇总字段外，SELECT 语句中的每一字段都必须在 GROUP BY 子句中给出；
- NULL 的行会单独分为一组；
- 大多数 SQL 实现不支持 GROUP BY 列具有可变长度的数据类型。

# 十四、子查询

子查询中只能返回一个字段的数据。

可以将子查询的结果作为 WHRER 语句的过滤条件：

```sql
SELECT *
FROM mytable1
WHERE col1 IN (SELECT col2
               FROM mytable2);
```

下面的语句可以检索出客户的订单数量，子查询语句会对第一个查询检索出的每个客户执行一次：

```sql
SELECT cust_name, (SELECT COUNT(*)
                   FROM Orders
                   WHERE Orders.cust_id = Customers.cust_id)
                   AS orders_num
FROM Customers
ORDER BY cust_name;
```

# 十五、连接

连接用于连接多个表，使用 JOIN 关键字，并且条件语句使用 ON 而不是 WHERE。

连接可以替换子查询，并且比子查询的效率一般会更快。

可以用 AS 给列名、计算字段和表名取别名，给表名取别名是为了简化 SQL 语句以及连接相同表。

## 内连接

内连接又称等值连接，使用 INNER JOIN 关键字。

```sql
SELECT A.value, B.value
FROM tablea AS A INNER JOIN tableb AS B
ON A.key = B.key;
```

可以不明确使用 INNER JOIN，而使用普通查询并在 WHERE 中将两个表中要连接的列用等值方法连接起来。

```sql
SELECT A.value, B.value
FROM tablea AS A, tableb AS B
WHERE A.key = B.key;
```

在没有条件语句的情况下返回笛卡尔积。

## 自连接

自连接可以看成内连接的一种，只是连接的表是自身而已。

一张员工表，包含员工姓名和员工所属部门，要找出与 Jim 处在同一部门的所有员工姓名。

子查询版本

```sql
SELECT name
FROM employee
WHERE department = (
      SELECT department
      FROM employee
      WHERE name = "Jim");
```

自连接版本

```sql
SELECT e1.name
FROM employee AS e1 INNER JOIN employee AS e2
ON e1.department = e2.department
      AND e2.name = "Jim";
```

## 自然连接

自然连接是把同名列通过等值测试连接起来的，同名列可以有多个。

内连接和自然连接的区别：内连接提供连接的列，而自然连接自动连接所有同名列。

```sql
SELECT A.value, B.value
FROM tablea AS A NATURAL JOIN tableb AS B;
```

## 外连接

外连接保留了没有关联的那些行。分为左外连接，右外连接以及全外连接，左外连接就是保留左表没有关联的行。

检索所有顾客的订单信息，包括还没有订单信息的顾客。

```sql
SELECT Customers.cust_id, Orders.order_num
FROM Customers LEFT OUTER JOIN Orders
ON Customers.cust_id = Orders.cust_id;
```

customers 表：

| cust_id | cust_name |
| :---: | :---: |
| 1 | a |
| 2 | b |
| 3 | c |

orders 表：

| order_id | cust_id |
| :---: | :---: |
|1    | 1 |
|2    | 1 |
|3    | 3 |
|4    | 3 |

结果：

| cust_id | cust_name | order_id |
| :---: | :---: | :---: |
| 1 | a | 1 |
| 1 | a | 2 |
| 3 | c | 3 |
| 3 | c | 4 |
| 2 | b | Null |

# 十六、组合查询

使用  **UNION**  来组合两个查询，如果第一个查询返回 M 行，第二个查询返回 N 行，那么组合查询的结果一般为 M+N 行。

每个查询必须包含相同的列、表达式和聚集函数。

默认会去除相同行，如果需要保留相同行，使用 UNION ALL。

只能包含一个 ORDER BY 子句，并且必须位于语句的最后。

```sql
SELECT col
FROM mytable
WHERE col = 1
UNION
SELECT col
FROM mytable
WHERE col =2;
```

# 十七、视图

视图是虚拟的表，本身不包含数据，也就不能对其进行索引操作。不需要实际上的物理存储，数据还是存储在原来的表里。在数据库中，只存放了视图的定义。
视图的数据是依赖原来表中的数据的。对视图的操作和对普通表的操作一样。视图增加了数据的 **安全性**(让用户看到我们让它看的) 和
**逻辑独立性**(数据库的设计和结构不会受到视图中的函数、where 或 join 语句的影响)。

视图具有如下好处：

- 简化复杂的 SQL 操作，比如复杂的连接；
- 只使用实际表的一部分数据；
- 通过只给用户访问视图的权限，保证数据的安全性；
- 更改数据格式和表示。

```sql
CREATE VIEW myview AS
SELECT Concat(col1, col2) AS concat_col, col3*col4 AS compute_col
FROM mytable
WHERE col5 = val;
```

# 十八、存储过程

存储过程可以看成是对一系列 SQL 操作的批处理。存储过程无法使用 SELECT 指令来运行，因为它是子程序，与查看表，数据表或用户定义函数不同。
存储过程可以用在数据检验，强制实行商业逻辑等。

使用存储过程的好处：

- 代码封装，保证了一定的安全性(可以隐藏复杂的商业逻辑)；
- 可以回传值，并可以接受参数；
- 代码复用；
- 由于是预先编译，因此具有很高的性能。

命令行中创建存储过程需要自定义分隔符，因为命令行是以 ; 为结束符，而存储过程中也包含了分号，因此会错误把这部分分号当成是结束符，造成语法错误。

包含 in、out 和 inout 三种参数。

给变量赋值都需要用 select into 语句。

每次只能给一个变量赋值，不支持集合的操作。

```sql
delimiter //

create procedure myprocedure( out ret int )
    begin
        declare y int;
        select sum(col1)
        from mytable
        into y;
        select y*y into ret;
    end //

delimiter ;
```

```sql
call myprocedure(@ret);
select @ret;
```

# 十九、游标

在存储过程中使用游标可以对一个结果集进行移动遍历。

游标主要用于交互式应用，其中用户需要对数据集中的任意行进行浏览和修改。

使用游标的四个步骤：

1. 声明游标，这个过程没有实际检索出数据；
2. 打开游标；
3. 取出数据；
4. 关闭游标；

```sql
delimiter //
create procedure myprocedure(out ret int)
    begin
        declare done boolean default 0;

        declare mycursor cursor for
        select col1 from mytable;
        # 定义了一个 continue handler，当 sqlstate '02000' 这个条件出现时，会执行 set done = 1
        declare continue handler for sqlstate '02000' set done = 1;

        open mycursor;

        repeat
            fetch mycursor into ret;
            select ret;
        until done end repeat;

        close mycursor;
    end //
 delimiter ;
```

# 二十、触发器

触发器会在某个表执行以下语句时而自动执行：DELETE、INSERT、UPDATE。

触发器必须指定在语句执行之前还是之后自动执行，之前执行使用 BEFORE 关键字，之后执行使用 AFTER 关键字。BEFORE 用于数据验证和净化，AFTER 用于审计跟踪，将修改记录到另外一张表中。

INSERT 触发器包含一个名为 NEW 的虚拟表。

```sql
CREATE TRIGGER mytrigger AFTER INSERT ON mytable
FOR EACH ROW SELECT NEW.col into @result;

SELECT @result; -- 获取结果
```

DELETE 触发器包含一个名为 OLD 的虚拟表，并且是只读的。

UPDATE 触发器包含一个名为 NEW 和一个名为 OLD 的虚拟表，其中 NEW 是可以被修改的，而 OLD 是只读的。

MySQL 不允许在触发器中使用 CALL 语句，也就是不能调用存储过程。

# 二十一、事务管理

基本术语：

- 事务（transaction）指一组 SQL 语句；
- 回退（rollback）指撤销指定 SQL 语句的过程；
- 提交（commit）指将未存储的 SQL 语句结果写入数据库表；
- 保留点（savepoint）指事务处理中设置的临时占位符（placeholder），你可以对它发布回退（与回退整个事务处理不同）。

不能回退 SELECT 语句，回退 SELECT 语句也没意义；也不能回退 CREATE 和 DROP 语句。

MySQL 的事务提交默认是隐式提交，每执行一条语句就把这条语句当成一个事务然后进行提交。当出现 START TRANSACTION 语句时，会关闭隐式提交；当 COMMIT 或 ROLLBACK 语句执行后，事务会自动关闭，重新恢复隐式提交。

通过设置 autocommit 为 0 可以取消自动提交；autocommit 标记是针对每个连接而不是针对服务器的。

如果没有设置保留点，ROLLBACK 会回退到 START TRANSACTION 语句处；如果设置了保留点，并且在 ROLLBACK 中指定该保留点，则会回退到该保留点。

```sql
START TRANSACTION
// ...
SAVEPOINT delete1
// ...
ROLLBACK TO delete1
// ...
COMMIT
```

# 二十二、字符集

基本术语：

- 字符集为字母和符号的集合；
- 编码为某个字符集成员的内部表示；
- 校对字符指定如何比较，主要用于排序和分组。

除了给表指定字符集和校对外，也可以给列指定：

```sql
CREATE TABLE mytable
(col VARCHAR(10) CHARACTER SET latin COLLATE latin1_general_ci )
DEFAULT CHARACTER SET hebrew COLLATE hebrew_general_ci;
```

可以在排序、分组时指定校对：

```sql
SELECT *
FROM mytable
ORDER BY col COLLATE latin1_general_ci;
```

# 二十三、权限管理

MySQL 的账户信息保存在 mysql 这个数据库中。

```sql
USE mysql;
SELECT user FROM user;
```

**创建账户** 

新创建的账户没有任何权限。

```sql
CREATE USER myuser IDENTIFIED BY 'mypassword';
```

**修改账户名** 

```sql
RENAME myuser TO newuser;
```

**删除账户** 

```sql
DROP USER myuser;
```

**查看权限** 

```sql
SHOW GRANTS FOR myuser;
```

**授予权限** 

账户用 username@host 的形式定义，username@% 使用的是默认主机名。

```sql
GRANT SELECT, INSERT ON mydatabase.* TO myuser;
```

**删除权限** 

GRANT 和 REVOKE 可在几个层次上控制访问权限：

- 整个服务器，使用 GRANT ALL 和 REVOKE ALL；
- 整个数据库，使用 ON database.\*；
- 特定的表，使用 ON database.table；
- 特定的列；
- 特定的存储过程。

```sql
REVOKE SELECT, INSERT ON mydatabase.* FROM myuser;
```

**更改密码** 

必须使用 Password() 函数

```sql
SET PASSWROD FOR myuser = Password('new_password');
```

# 参考资料

- BenForta. SQL 必知必会 [M]. 人民邮电出版社, 2013.