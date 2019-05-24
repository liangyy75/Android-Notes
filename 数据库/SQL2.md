* [python对Mysql操作和使用ORM框架（SQLAlchemy）](https://www.cnblogs.com/pycode/p/mysql-orm.html)

database, character, table, view, transaction and privilegesManagement;
```sql
--  --
    load data infile 'D:/book1.csv' into table test_table fields terminated by ',' optionally enclosed by '"' lines terminated by '\r\n' igonre 1 lines (id, name, data);

-- engine --
    show engines;

    create table InnoDB_monitor(a INT) engine=InnoDB;
    show engine InnoDB status;
    drop table InnoDB_monitor;

-- database --
    show databases;
    create database if not exists test_database character set utf8 collate utf8_unicode_ci;  -- character set utf8可以改为default charset=utf8
    use test_database;
    drop if exists test_database;
    show table status from test_database;
    select version();  -- 查看版本
    select database();  -- 查看当前使用的数据库
    set @kb = 1024; set @mb = 1024 * @kb; select concat(round(sum(data_length) / @mb, 2) + round(sum(index_length) / @mb, 2), 'MB') as 'DB size' from infromation_schema.tables where table_schema='test_database'; -- 查看当前数据库大小
    show collation;  -- 查看mysql所支持的所有collate
    show variables like 'collation%';  -- 查看使用中的collation
    show variables like 'port';  -- 查看数据库使用端口
    show variables like 'character%';  -- 查看数据库编码
        -- character_set_client      为客户端编码方式；
        -- character_set_connection  为建立连接使用的编码；
        -- character_set_database    为数据库的编码；
        -- character_set_results     为结果集的编码；
        -- character_set_server      为数据库服务器的编码；
    show variables like 'version';  -- 查看mysql版本
    show variables like 'max_connections%';  -- 查看数据库的最大连接数
    show variables like '%datadir%';  -- 查看数据文件存放路径
    show status like 'Threads%';  -- 查看数据库当前连接数，并发数
        -- Threads_cached : 代表当前此时此刻线程缓存中有多少空闲线程。
        -- Threads_connected :代表当前已建立连接的数量，因为一个连接就需要一个线程，所以也可以看成当前被使用的线程数。
        -- Threads_created :代表从最近一次服务启动，已创建线程的数量。
        -- Threads_running :代表当前激活的（非睡眠状态）线程数。并不是代表正在使用的线程数，有时候连接已建立，但是连接处于sleep状态，这里相对应的线程也是sleep状态。
    status;  -- 查看数据库的编码
    show schemas;
    create schema if not exists test_schema;
    drop schema if exists test_schema;
    -- schema在mysql中与database是同义词，在其他数据库如orcale就不是了。

-- table --
    show tables;
    create table if not exists test_table(id smallint primary key not null auto_increment comment 'user id comment', b int unsigned not null, c datetime default now())engine=InnoDB character set utf8 collate utf8_unicode_ci; -- character set utf8可以改为default charset=utf8
    drop table if exists test_table;
    select * from information_schema.tables where table_name='test_table' and table_schema='test_database';
    show create table test_table;
    desc table test_table;
    alter table test_table rename to test_table2;

    create temporary table if not exists temp_table ...;  -- 只有在当前连接情况下存在
    truncate table temp_table;  -- 在使用前清理数据

-- view --
    create view myview as select concat(col1, col2) as concat_col, col3 * col4 as compute_col from mytable where col5 = val;
    -- create algorithm view 视图名称[(column_list)] as select 语句 with [cascaded|local] check option
        -- cascaded 默认值，表示更新视图的时候，要满足视图和表的相关条件
        -- local: 表示更新视图的时候，要满足该视图定义的一个条件即可
    -- with check option：对视图进行更新操作的时，需要检查更新后的值是否还是满足视图公式定义的条件。通俗点，就是所更新的结果是否还会在视图中存在。
    -- 如果更新后的值不在视图范围内，就不允许更新如果创建视图的时候，没有加上with check option，更新视图中的某项数据的话，mysql并不会进行有效性检查。
    -- 删掉了就删掉了。在视图中将看不到了。所以使用whit [cascaded|local] check option选项可以保证数据的安全性
    -- create table t1(c int); create or replace view v1 as select c from t1 where c > 10;
    -- insert into v1(c) values(5);  -- 因为没有指定with check option，所以即使不符合v1视图的定义也可以工作
    -- create or replace view v2 as select c from v1 with cascaded check option;  insert into v2(c) values(5);  -- 报错
    -- create or replace view v3 as select c from v2 where c < 20; insert into v3(c) values(8);  -- 报错
    -- insert into v3(c) values(30);  -- 能正常工作，因为v3视图没有使用WITH CHECK OPTION定义，并且该语句符合v2视图的定义
    -- alter view v2 as select c from v1 with local check option; insert into v2(c) values(5);  -- 成功，因为v2视图没有任何规则。 v2视图取决于v1视图。 但是，v1视图没有指定检查选项。
    -- insert into v3(c) values(8);  -- 在这种情况下可以执行成功，因为MySQL视图中的WITH LOCAL CHECK OPTIONS选项没有检查v1视图的规则。
    -- 5.7.6前local只要满足本视图的条件即可更新。5.7.6后local与cascaded一样了，都需要满足本视图的条件和本视图相关视图的条件才可更新。
    select * from myview;
    show create view myview;
    drop view myview;
    update myview set col = val where id = 1;
    create or replace view myview as select * from mytable2;
    alter view myview as select * from mytable2;

-- character/charset/编码 --
    create database test_database default (character set utf8/charset=utf8);  -- 数据库
    alter database test_database character set utf8;
    create table test_table (...) default (character set utf8/charset=utf8);  -- 表
    alter table test_table character set utf8;
    alter table test_table change test_field new_test_field int character set utf8;  -- 字段
    select distinct a collate utf8mb4_unicode_ci from test_table;
    select a, b from test_table order by a collate utf8mb4_unicode_ci;

-- 权限/用户 --
    select distinct concat('user: \'',user,'\'@\'',host,'\';') as query from mysql.user;  -- 查看数据库的所有用户信息
    -- show grant for 'root'@'localhost';  -- 查看某个具体用户的权限
    use mysql;
    flush privileges;  -- 每次更新完后记得刷新一下
    select user from user;  -- 查找用户
    create user myuser identified by 'mypassword';   -- 新建用户，新创建的账户没有任何权限。
    rename myuser to newuser;   -- 修改账户名
    set password for myuser = Password('newpassword');  -- 更改密码
    drop user myuser;   -- 删除用户
    show grants for myuser; -- 查看权限
    grant select, insert on mydatabases.* to myuser;    -- 授予权限: 账户用 username@host 的形式定义，username@% 使用的是默认主机名。
    remove select, insert on mydatabases.* from myuser; -- 删除权限: 整个服务器，使用 GRANT ALL privileges 和 REVOKE ALL privileges; 整个数据库，使用 ON database.*;
        -- 特定的表，使用 ON database.table; 特定的列; 特定的存储过程;

-- 事务管理
    start transaction
    lock tabeles tb_name read/write;
    unlock tables;
    -- show status like 'table%';
        -- Table_locks_immediate：产生表级锁定的次数；
        -- Table_locks_waited：出现表级锁定争用而发生等待的次数；
    -- show status like 'InnoDB_row_lock%';
        -- InnoDB_row_lock_current_waits：当前正在等待锁定的数量；
        -- InnoDB_row_lock_time_max：从系统启动到现在等待最常的一次所花的时间；
        -- InnoDB_row_lock_time：从系统启动到现在锁定总时间长度；
        -- InnoDB_row_lock_time_avg：每次等待所花平均时间；
        -- InnoDB_row_lock_waits：系统启动后到现在总共等待的次数；
    // ...
    savepoint delete1;
    // ...
    rollback to delete1;
    // ...
    commit;
    set global init_connect = "set autocommit=0";   -- 提示你用权限更高的财户来设置
    select @@autocommit;
    set @@autocommit = 0;

-- 分解大连接查询 --
    delete from messages where create < date_sub(now(), interval 3 month);
```

curd(create/update/retrieve/delete), join, auto_increment, unique, foreign_key, index, group_by, union and comments;
```sql
-- insert into/delete/update/select --
    insert into test_table (default_a, default_b) values (default, default);
    insert into test_table (a, b) select (c, d) from test_table2;
    create table test_table as select * from test_table2;
    truncate table test_table;
    select test_field collate utf8mb4_unicode_ci from test_table;
    select a, b from test_table order by a collate urf8_unicode_ci;
    select distinct a from test_table;  -- distinct需要放在所有字段之前，比较所有字段是否一致。
    select * from test_table where id in (select test_field in test_table2);
    select * from test_table where id [not] between value1 and value2;  -- 包含了value1和value2边界值，可以用于数字、字符串、时间日期
    -- select top 2 [percent] from test_table;  -- mysql不支持
    -- where/or/and/not/null/is/like
    -- order by [desc/asc]
    select id from mytable1 where exists (select * from mytable2 where mytable2.id = mytable1.id);
    select id from mytable1 where not exists (select * from mytable2 where mytable2.id = mytable1.id);
    select id from mytable1 where id >= all(select * from mytable1);
    -- limit start, len | limit len offset start | limit len
    select * from table_name where ... lock in share mode  -- 共享锁(s)
    select * from table_name where ... for update  -- 排他锁(x)

-- join/连接 --
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
    -- table1 left/right [outer] join tabl2 on ...
    -- [inner] join
    -- natural join

-- auto_increment --
    create table test_table (...) auto_increment=8;
    show session/global variables like 'auto_incre%';  -- 查看auto_increment_increment(步长)与auto_increment_offset(起点); 不加session/global就默认session
    select auto_increment from information_schema.tables where table_schema='test_database' and table_name='test_table';  -- 查看auto_increment
    alter table test_table auto_increment = value;  -- 修改auto_increment，必须比现有的大才有效
        -- truncate table test_table; 也可以让auto_increment重置
        -- drop table test_table; create table test_table;
    set session/global auto_increment_increment/auto_increment_offset = 5;  -- 只能设置为1至65535之间的整数值。所有非正整数全部会置为缺省值1，大于65535的值会被自动置为65535。

-- unique --
    create table test_table (id int unique, a int, unique(a), unique(a, id));
    alter table test_table add [constraint 'id_name'] unique(id_col_name, ...);
    alter table test_table drop constraint/index 'id_name';

-- foreign key/外键 --
    show index from test_table;
    create table test_table(..., [constraint] foreign key ['id_name'] (id_col_name, ...) references foreign_table (id_col_name, ...) [on delete {restrict | cascade | set null | no action | set default}] [on update {restrict | cascade | set null | no action | set default}])
        -- on delete、on update表示事件触发限制，可设参数：
            -- restrict（限制外表中的外键改动）
            -- cascade（跟随外键改动）
            -- set null（设空值）
            -- set default（设默认值）
            -- no action（无动作，默认的）
        -- 外键必须是外键表中的索引
    alter table test_table add foreign key('id_name') references [to] foreign_table(id_col_name, ...) on delete cascade on update cascade;
    alter table test_table drop foreign key 'id_name';

-- index/键 --
    create table test_table(id int not null primary key, a int unique, b int auto_increment, c varchar(20), index id_b(b), fulltext(c));
    alter table test_table add (primary key/[constraint 'id_name'] unique/index 'id_name'/fulltext 'id_name')(id_col_name, ...);
    alter table test_table drop index 'id_name'/constraint 'id_name'/primary key;

-- alter --
    alter table test_table rename to test_table2;
    alter table test_table add test_field ...; 
    alter table test_table modify test_field ...;
    alter table test_table change test_field new_test_field ... [after test_field2/first];
    alter table test_table alter test_field set default 'smg';
    alter table test_table drop test_field;

-- group by/having --
    select a, b from test_table [where ...] group by a [having ...];  -- where选择行后group排序分组，然后每组使用having来选择组，不在group by中的字段，默认是第一个，但也可以使用聚合函数，如max/min/avg/count/sum等来取所有值的最大/最小/平均值/数量/和
        -- group_concat聚合函数，将所有值用,连接起来。
        -- 只能按照上面的顺序来写，否则报错。

-- union: union用于把两个或者多个select查询的结果集合并成一个 --
    select ... union [all | distinct] select ... union [all | distinct] select ...;  -- 默认情况下，union = union distinct
        -- 进行合并的两个查询，其select列表必须在数量和对应列的数据类型上保持一致；
        -- 默认会去掉两个查询结果集中的重复行；默认结果集不排序；
        -- 最终结果集的列名来自于第一个查询的select列表

-- comment/注释 --
    create table test_table(id int primary key not null comment 'user id comment', ...);
    alter table test_table change id id int primary key not null comment 'change comment';
    alter table test_table modify id int primary key not null comment 'change comment';
    show full columns from test_table;
    show create table test_table;
    select * from information_schema.columns where table_schema='test_database' and table_name='test_table';
```

procedure, function and cursor
```sql
select coalesce(a, b, c);  -- 如果a==null,则选择b；如果b==null,则选择c；如果a!=null,则选择a；如果a b c 都为null ，则返回为null（没意义）。
select coalesce(name, '总金额'),name, sum(money) as money from  test group by name with rollup;
-- max/min/avg/count/sum/group_concat
-- 0b100, 0o100, 0x100
-- nullif(a, b); 如果a=b则返回null，否则返回a -- ifnull(a, b); 如果a is null则返回b，否则返回a
-- left/right(str, len) | substr/substring(str, start, len) | reverse/lower/upper/ltrim/rtrim/trim/length/soundex(转换为语音值) | locate(char, str)
-- ceil, floor, round, div, mod, power(a, b), truncate(a, b)数字截取：a中保留b位小数，且不四舍五入；如果b为负，规律一样。
-- sin, cos, tan, abs, sqrt, mod, exp, pi, rand
-- adddate('2019-02-23', 10/'21'), addtime('12:20:30', '1:0:0'), curdate(), curtime(), date('2019-03-23 09:34:23'), time(date), datediff(date1, date2),
    -- date_add(date, interval expr type(microsecond|second|minute|hour|day|week|month|quarter|year|second_microsecond|minute_microsecond|minute_second|hour_microsecond|hour_second|hour_minute|day_microsecond|day_second|day_minute|day_hour|year_month)), extract(type from date);
    -- date_format(now(), '%Y-%m-%d %H:%i:%s'), year(now()), month(), day(), dayofweek(), hour(), minute(), second(),
    -- unix_timestamp(now()) 获得当前时间戳
-- select过程：from->where->select->group by->having->order by->limit
-- a left/right join b on ... where ... 先是on完后再where的。
-- 对于union的前部分查询和后部分查询不能有GROUP BY,ORDER BY等字段,只有是在整个的最后才能有GROUP BY,ORDER BY等字段!
-- [mysql的exists与inner join 和 not exists与 left join 性能差别惊人](https://openxtiger.iteye.com/blog/1911228)
-- [MySQL 笔记 —— 时间函数、时间比较](https://blog.csdn.net/qq_19865749/article/details/78535414)
-- on, using, inner/cross join, left (outer) join, right (outer) join, natural join
-- union, union all
-- not in, in/ any, all, some/ exists, not exists
-- group by, having, order by, desc, asc

-- procedure --
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
-- create function all(pin int) returns int
create procedure all(in pin int, out pout int, inout pinout int)
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
    until ... end repeat;
    loop_lable : loop
        ...
        leave loop_lable;
    end loop;
    -- return ...
end;
//
delimiter ;

show procedure/function status;
show create procedure/function;
show procedure status like '%...%';

declare test_field1_temp int default 0;
...
declare done int default 0;
declare mycursor cursor for select test_field1, test_field2, ... from test_table;  -- 声明游标，这个过程没有实际检索出数据；
declare continue handler for not found set done=1;
open mycursor;
loop_label: loop
    fetch mycursor to test_field1_temp, test_field2_temp, ... test_fieldn_temp;
    if done=1 then
        leave loop_label;
    end if;
end loop loop_label;
close mycursor;
```

event and trigger
```sql
-- 定时器: 如果存储过程执行过程中有错误，则整个过程中可能并不报错，但是定时器指定的存储过程无法正确执行。 --
-- 确认版本：5.1以上开始支持 --
    select version();
-- 开启event功能：默认是关闭的 --
    show variables like 'event_scheduler';
    set global event_scheduler = on;
    -- set @@global.event_scheduler = on; 
    -- set global event_scheduler = 1; 
    -- set @@global.event_scheduler = 1;
    -- 通过配置文件my.cnf: event_scheduler = 1 -- 或者ON 
-- 查看调度器线程 --
    show processlist;
-- 创建event需要的存储过程 --
    drop procedure if exists test_proce;
    create procedure test_proce()
    begin
        insert into `user`(name, age) values('zhoudan','18');
    end;
-- 创建定时器 --
    drop event if exists test_event;
    create event test_event
    on schedule every 1 second  -- 执行的间隔时间
    starts '2015-01-10 00:10:00'  -- 开始执行的时间
    on completion preserve disable  -- 创建定时器后是否立即启动，如果是disable需要手动启动
    do call test_proce();
-- 启动、关闭、查看定时器 --
    alter event test_event on completion preserve enable;  -- 启动定时器
    alter event test_event on completion preserve disable;  -- 关闭定时器
    show events;  -- 显示本数据库下所有定时器
    select * from mysql.event;
-- CREATE 
--     [DEFINER = { user | CURRENT_USER }] 
--     EVENT 
--     [IF NOT EXISTS] 
--     event_name 
--     ON SCHEDULE schedule 
--     [ON COMPLETION [NOT] PRESERVE] 
--     [ENABLE | DISABLE | DISABLE ON SLAVE] 
--     [COMMENT 'comment'] 
--     DO event_body; 
-- schedule: 
--     AT timestamp [+ INTERVAL interval] ... 
--   | EVERY interval 
--     [STARTS timestamp [+ INTERVAL interval] ...] 
--     [ENDS timestamp [+ INTERVAL interval] ...] 
-- interval: 
--     quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE | 
--               WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE | 
--               DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND} 

set global event_scheduler = on;
drop table if exists events_list;
create table events_list(event_name varchar(20) not null, event_started timestamp not null);
create event event_now on schedule at now() do insert into events_list values('event_now', now());
select * from events_list;
create event event_minute on schedule every 1 minute do insert into events_list values('event_minute', now());

-- ALTER 
--     [DEFINER = { user | CURRENT_USER }] 
--     EVENT event_name 
--     [ON SCHEDULE schedule] 
--     [ON COMPLETION [NOT] PRESERVE] 
--     [RENAME TO new_event_name] 
--     [ENABLE | DISABLE | DISABLE ON SLAVE] 
--     [COMMENT 'comment'] 
--     [DO event_body] 

create trigger trigger_name trigger_time trigger_event on tb_name for each row trigger_stmt
    -- trigger_name：触发器的名称
    -- tirgger_time：触发时机，为before或者after
    -- trigger_event：触发事件，为insert、delete或者update
    -- tb_name：表示建立触发器的表明，就是在哪张表上建立触发器。不能在trigger里面修改该tb_name
    -- trigger_stmt：触发器的程序体，可以是一条sql语句或者是用begin和end包含的多条语句
    -- 所以可以说mysql创建以下六种触发器：
    -- before insert,before delete,before update
    -- after insert,after delete,after update
    -- 在insert中可以用new.test_field这样的字段获取插入字段
    -- 在delete中可以用old.test_field
    -- 在update中可以用new与old
create trigger trigger_name before|after trigger_event
on tb_name for each row
begin
    trigger_stmt
end
show triggers;

create table `users` (
    `id` int(11) unsigned not null auto_increment,
    `name` varchar(255) character set utf8mb4 default null,
    `add_time` int(11) default null,
    primary key (`id`),
    key `name` (`name`(250)) using btree
) engine=myisam auto_increment=1000001 default charset=latin1;

create table `logs` (
    `id` int(11) not null auto_increment,
    `log` varchar(255) default null comment '日志说明',
    primary key (`id`)
) engine=innodb default charset=utf8mb4 comment='日志表';

delimiter $
create trigger user_log after insert on users for each row
begin
    declare s1 varchar(40) character set utf8;
    declare s2 varchar(20) character set utf8;  -- 后面发现中文字符编码出现乱码，这里设置字符集
    set s2 = " is created";
    set s1 = concat(new.name,s2);  -- 函数concat可以将字符串连接
    insert into logs(log) values(s1);
end $
delimiter ;

drop trigger user_log;  -- 删除触发器
-- https://www.cnblogs.com/phpper/p/7587031.html
```
