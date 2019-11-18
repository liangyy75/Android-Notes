- [过去的学习资料](#%e8%bf%87%e5%8e%bb%e7%9a%84%e5%ad%a6%e4%b9%a0%e8%b5%84%e6%96%99)
- [自带方法预览](#%e8%87%aa%e5%b8%a6%e6%96%b9%e6%b3%95%e9%a2%84%e8%a7%88)
- [其他语法笔记](#%e5%85%b6%e4%bb%96%e8%af%ad%e6%b3%95%e7%ac%94%e8%ae%b0)
- [例子: 调用C++的Lib](#%e4%be%8b%e5%ad%90-%e8%b0%83%e7%94%a8c%e7%9a%84lib)
- [具体的C++与Lua交互](#%e5%85%b7%e4%bd%93%e7%9a%84c%e4%b8%8elua%e4%ba%a4%e4%ba%92)
- [luvit](#luvit)
- [openresty](#openresty)
- [unity-lua](#unity-lua)
- [cocos-lua](#cocos-lua)
- [love2d](#love2d)
- [gui](#gui)
- [luapower](#luapower)
- [fengri](#fengri)
- [lua web -- luarocks可以安装的](#lua-web----luarocks%e5%8f%af%e4%bb%a5%e5%ae%89%e8%a3%85%e7%9a%84)
- [作业: myLuaCollection](#%e4%bd%9c%e4%b8%9a-myluacollection)
- [作业: myLuaTimer](#%e4%bd%9c%e4%b8%9a-myluatimer)
- [作业: myLuaThread](#%e4%bd%9c%e4%b8%9a-myluathread)
- [作业: myLuaProcess](#%e4%bd%9c%e4%b8%9a-myluaprocess)
- [作业: myLuaXml](#%e4%bd%9c%e4%b8%9a-myluaxml)
- [作业: myLuaJson](#%e4%bd%9c%e4%b8%9a-myluajson)
- [作业: myLuaSocket](#%e4%bd%9c%e4%b8%9a-myluasocket)
- [作业: myLuaMySql](#%e4%bd%9c%e4%b8%9a-myluamysql)
- [作业: myLuaMongodb](#%e4%bd%9c%e4%b8%9a-myluamongodb)
- [作业: myLuaSqlite3](#%e4%bd%9c%e4%b8%9a-myluasqlite3)
- [作业: myLuaRedis](#%e4%bd%9c%e4%b8%9a-myluaredis)
- [作业: 字符贪吃蛇](#%e4%bd%9c%e4%b8%9a-%e5%ad%97%e7%ac%a6%e8%b4%aa%e5%90%83%e8%9b%87)
- [作业: luaServer 和 luaClient](#%e4%bd%9c%e4%b8%9a-luaserver-%e5%92%8c-luaclient)
- [作业: luaECharts](#%e4%bd%9c%e4%b8%9a-luaecharts)
- [end](#end)

### 过去的学习资料

* [Lua 菜鸟](https://www.runoob.com/lua/lua-environment.html)
* [luarocks](https://luarocks.org)
* [Lua 易百](https://www.yiibai.com/lua/lua_environment.html)
* [ubuntu下安装lua和luarocks](https://blog.csdn.net/kgzhang/article/details/72885199)
* [使用Lua做Web开发](https://www.jianshu.com/p/94342efd9467)
* [Seq2Seq Chatbot 聊天机器人: 基于Torch的一个Demo搭建 手札](https://blog.csdn.net/MebiuW/article/details/52749822)

成功下载的: lua-cjson luasocket xml luafilesystem busted lua-vips lrandom lmathx inspect gomaxmagick

没有成功下载的: torch nn image graph-toolkit tekui

* [inspect](https://github.com/kikito/inspect.lua)
* [luafilesystem](https://keplerproject.github.io/luafilesystem/)
* [xml](https://lubyk.github.io/lubyk/xml.html)
* [lua-cjson](https://www.kyne.com.au/~mark/software/lua-cjson-manual.html)
* [https://github.com/diegonehab/luasocket](luasocket)
* [busted](https://github.com/Olivine-Labs/busted)
* [lua-vips](https://github.com/libvips/lua-vips)
* [gomaxmagick](https://github.com/LuaDist2/gomaxmagick)
* [graph-toolkit](https://franko.github.io/graph-toolkit/)
* [luagraph](https://github.com/hleuwer/luagraph)
* [luazip](https://github.com/gdraheim/zziplib) [](https://mpeterv.github.io/luazip/manual.html)
* [luasql](https://keplerproject.github.io/luasql/)

```txt
sudo lourocks install busted
sudo lourocks install luasocket
sudo lourocks install rapidjson
sudo lourocks install lua-cjson
sudo lourocks install xml
sudo lourocks install luaexpat
sudo lourocks install luaxpath
sudo lourocks install lua-vips
sudo GRAPHVIZ_INCDIR=/usr/include lourocks install luagraph
sudo lourocks install gomaxmagick
sudo lourocks install lrandom
sudo lourocks install lmathx
sudo lourocks install inspect
sudo lourocks install luazip
sudo MYSQL_INCDIR=/usr/include/mysql lourocks install luasql-mysql
sudo SQLITE3_INCDIR= luarocks install luasql-sqlite3
sudo POSTGRES_INCDIR= luarocks install luasql-postgres
sudo SQLITE_INCDIR= luarocks install luasql-sqlite
sudo ODBC_INCDIR= luarocks install luasql-odbc
安装openresty: http://openresty.org/cn/installation.html [openresty小例子](https://blog.csdn.net/tao_627/article/details/78942202) [Openresty最佳案例 | 汇总](https://blog.csdn.net/forezp/article/details/78616856) [跟我学OpenResty(Nginx+Lua)开发目录贴](https://jinnianshilongnian.iteye.com/blog/2190344) [OpenResty 最佳实践](https://moonbingbing.gitbooks.io/openresty-best-practices/content/index.html)
    wget -qO - https://openresty.org/package/pubkey.gpg | sudo apt-key add -
    sudo apt-get -y install software-properties-common
    sudo add-apt-repository -y "deb http://openresty.org/package/ubuntu $(lsb_release -sc) main"
    sudo apt-get update
    sudo apt-get install openresty  // sudo apt-get install --no-install-recommends openresty
sudo lourocks install 
sudo lourocks install 
sudo lourocks install 
```

* [Lua与Android交互详解](https://blog.csdn.net/niuba123456/column/info/25343)
* [对比React Native、dcloud、LuaView三个框架技术(内部)](https://www.jianshu.com/p/ee1cdb33db8d)
* 
* [lua-for-idea](https://bitbucket.org/sylvanaar2/lua-for-idea/src/idea16/)
* [IntelliJ-EmmyLua](https://github.com/EmmyLua/IntelliJ-EmmyLua)
* [VSCode-EmmyLua](https://github.com/EmmyLua/VSCode-EmmyLua)
* [EmmyLua-LanguageServer](https://github.com/EmmyLua/EmmyLua-LanguageServer)
* [Kong](https://github.com/Kong/kong)
* [lua-nginx-module](https://github.com/openresty/lua-nginx-module)
* [VeryNginx](https://github.com/alexazhou/VeryNginx)
* [xLua](https://github.com/Tencent/xLua)
* [LuaViewSDK](https://github.com/alibaba/LuaViewSDK)
* [cuberite](https://github.com/cuberite/cuberite)
* [ZeroBraneStudio](https://github.com/pkulchenko/ZeroBraneStudio)
* [awesome-lua](https://github.com/LewisJEllis/awesome-lua)

### 自带方法预览

```lua
---@param s string
---@param l number
---@param c string
---@return string
function string.addPrefix(s, l, c)
    local sLen = #s
    if (sLen < l) then
        return string.rep(c, l - sLen) .. s
    end
    return s
end

---@param s string
---@param l number
---@param c string
---@return string
function string.addSuffix(s, l, c)
    local sLen = #s
    if (sLen < l) then
        return s .. string.rep(c, l - sLen)
    end
    return s
end

---@param t table
---@return table
function table.getKeys(t)
    local keys = {}
    for k, n in pairs(t) do
        table.insert(keys, k)
    end
    return keys
end

-- TODO: 相同的 prefix 和相同的 suffix
---@param pack table
---@param depth number
---@param addressMap table
---@return string
function showPackage(pack, depth, addressMap)
    for k, v in pairs(addressMap) do
        if v ~= -1 then
            addressMap[k] = v + 1
        end
    end
    local addressStr = tostring(pack):sub(8)
    addressMap[addressStr] = -1
    local result = ''
    local prefix = string.rep('    ', depth)
    local maxKLen = 0
    local maxVLen1 = 0
    local maxVLen2 = 0
    for k, v in pairs(pack) do
        local kLen = #tostring(k)
        local vStr = tostring(v)
        if (maxKLen < kLen) then
            maxKLen = kLen
        end
        local startIndex, endIndex, matchStr = vStr:find(':')
        if (startIndex ~= nil) then
            local vLen1 = #(vStr:sub(1, startIndex - 1))
            local vLen2 = #(vStr:sub(endIndex + 1))
            if (maxVLen1 < vLen1) then
                maxVLen1 = vLen1
            end
            if (maxVLen2 < vLen2) then
                maxVLen2 = vLen2
            end
        end
        if type(v) == 'table' then
            addressStr = vStr:sub(endIndex + 2)
            if addressMap[addressStr] == nil then
                addressMap[addressStr] = 0
            end
        end
    end
    -- for k, v in pairs(pack) do
    local orderedKeys = table.getKeys(pack)
    table.sort(
        orderedKeys,
        function(k1, k2)
            local typeK1, typeK2 = type(k1), type(k2)
            if typeK1 == typeK2 then
                return k1 < k2
            elseif typeK1 == 'number' and typeK2 == 'string' then
                return true
            elseif typeK2 == 'number' and typeK1 == 'string' then
                return false
            end
            return k1 < k2
        end
    )
    for i, k in pairs(orderedKeys) do
        local v = pack[k]
        local vStr = tostring(v)
        local startIndex, endIndex, matchStr = vStr:find(':')
        if (startIndex ~= nil) then
            vStr =
                vStr:sub(1, startIndex - 1):addPrefix(maxVLen1, ' ') .. vStr:sub(endIndex + 1):addSuffix(maxVLen2, ' ')
        else
            vStr = vStr:addPrefix(maxVLen1, ' ')
        end
        vStr = vStr:gsub('\n', '\\n')
        result = result .. prefix .. string.addSuffix(tostring(k), maxKLen, ' ') .. ' -- ' .. vStr .. '\n'
        if type(v) == 'table' and addressMap[tostring(v):sub(endIndex + 2)] == 0 then
            result = result .. showPackage(v, depth + 1, addressMap)
        end
    end
    for k, v in pairs(addressMap) do
        if v ~= -1 then
            addressMap[k] = v - 1
        end
    end
    return result
end

local record = io.open('/home/liangyy75/workspaces/lua/homework/socket/record__G.txt', 'w+')
local content = showPackage(_G, 0, {}) -- :gsub('([^\n]+)', '    %1')
record:write(content)
record:close()

local lfs = require('lfs')
local record = io.open('/home/liangyy75/workspaces/lua/homework/socket/record_lfs.txt', 'w+')
local content = showPackage(lfs, 0, {}) -- :gsub('([^\n]+)', '    %1')
record:write(content)
record:close()

local socket = require('socket')
local socket_ftp = require('socket.ftp')
local socket_headers = require('socket.headers')
local socket_http = require('socket.http')
local socket_smtp = require('socket.smtp')
local socket_url = require('socket.url')
local record = io.open('/home/liangyy75/workspaces/lua/homework/socket/record_socket.txt', 'w+')
local addressMap = {}
local content = showPackage(socket, 0, addressMap) -- :gsub('([^\n]+)', '    %1')
-- local content_ftp = showPackage(socket_ftp, 0, addressMap) --:gsub('([^\n]+)', '    %1')
-- local content_http = showPackage(socket_http, 0, addressMap) --:gsub('([^\n]+)', '    %1')
-- local content_smtp = showPackage(socket_smtp, 0, addressMap) --:gsub('([^\n]+)', '    %1')
-- local content_headers = showPackage(socket_headers, 0, addressMap) --:gsub('([^\n]+)', '    %1')
-- local content_url = showPackage(socket_url, 0, addressMap) --:gsub('([^\n]+)', '    %1')
-- record:write('### base\n\n' .. content)
record:write(content)
-- record:write('\n### ftp\n\n' .. content_ftp)
-- record:write('\n### http\n\n' .. content_http)
-- record:write('\n### smtp\n\n' .. content_smtp)
-- record:write('\n### headers\n\n' .. content_headers)
-- record:write('\n### url\n\n' .. content_url)
record:close()

local http_request = require('http.request')
local http_websocket = require('http.websocket')
local http_socks = require('http.socks')
local http_server = require('http.server')
local http_client = require('http.client')
-- local http_zlib = require('http.zlib')
local http_headers = require('http.headers')
local http_cookie = require('http.cookie')
local http_utils = require('http.util')
local http_proxies = require('http.proxies')
local record = io.open('/home/liangyy75/workspaces/lua/homework/socket/record_http.txt', 'w+')
local addressMap = {}
local content_request = showPackage(http_request, 0, addressMap)
local content_websocket = showPackage(http_websocket, 0, addressMap)
local content_socks = showPackage(http_socks, 0, addressMap)
local content_server = showPackage(http_server, 0, addressMap)
local content_client = showPackage(http_client, 0, addressMap)
-- local content_zlib = showPackage(http_zlib, 0, addressMap)
local content_headers = showPackage(http_headers, 0, addressMap)
local content_cookie = showPackage(http_cookie, 0, addressMap)
local content_utils = showPackage(http_utils, 0, addressMap)
local content_proxies = showPackage(http_proxies, 0, addressMap)
record:write('### request\n\n')
record:write(content_request)
record:write('\n### websocket\n\n')
record:write(content_websocket)
record:write('\n### socks\n\n')
record:write(content_socks)
record:write('\n### server\n\n')
record:write(content_server)
record:write('\n### client\n\n')
record:write(content_client)
-- record:write('\n\n')
-- record:write(content_zlib)
record:write('\n### headers\n\n')
record:write(content_headers)
record:write('\n### cookie\n\n')
record:write(content_cookie)
record:write('\n### util\n\n')
record:write(content_utils)
record:write('\n### proxies\n\n')
record:write(content_proxies)
record:close()

local record = io.open('/home/liangyy75/workspaces/lua/homework/socket/record_package_loaded.txt', 'w+')
local addressMap = {}
local content = showPackage(package.loaded, 0, addressMap) -- :gsub('([^\n]+)', '    %1')
record:write(content)
record:close()
print(#addressMap)
```

### 其他语法笔记

```lua
-- 单行注释
--[[
多行注释
--]]
-- [[多行文本]] [==[[带有[]的文本]]==]
if true and false then
    -- a
elseif true or false then
    -- b
else
    -- c
end
while not true do
    if math.random() > 0.5 then
        break
    end
end
for i = 1, 10, 2 do break end
for i = 1, 10 do break end
for i, v in ipairs(socket) do  -- ipairs是用数字下标遍历的，而且从1开始
    break
end
for i, v in pairs(socket) do  -- pairs是遍历所有的key
    break
end
repeat break until true
function exampleFun(...)
    local a = 10
    local varargs = { ... }
    for i, v in ipairs(varargs) do
        a = a + i
    end
    return a
end
```
```lua
--三木运算符 ?
-- 基本数据类型 nil / boolean / number / string / table / function / userdata / thread -- lua 下标一般从1开始
-- nil
-- true / false
-- 2 / 2.2 / 0.2 / 2e+1 / 0.2e-1 / 7.82679402y48384e-06
-- "this is a string" 'this is also a string' [[ this is a multiple line string ]] .."连接字符串或者数字" #"获取长度"
-- {} / {'key 为 1', 'key 为 2', 3 = 'key 为 3', ["key"] = 'key 为 key'} / for k, v in pairs(t) do ... end / for k, v in ipairs(t) do ... end

function square(endNum, startNum)
    if startNum ~= endNum then
        startNum = startNum - 1
        return startNum, startNum * startNum
    end
end
for i, n in square, 0, 3 do  -- for遍历的函数只能接受两个参数
    print(i, n)
end
-- 2       4
-- 1       1
-- 0       0

function iterCollection(collection)
    local index = 0
    local count = #collection
    return function()
        index = index + 1
        if index <= count then
            return collection[index]
        end
    end
end
for e in iterCollection({ 'a', 'b', 'c' }) do
    print(e)
end

local arrays = require("utils.arrays")
print(arrays.toString({ 1, 2, 3, 'abc', 'def', function()
    return 'test'
end }))
```
```lua
-- 在Lua中可以定义值的行为，那么就有相应的元方法: 算术类的元方法, 关系类的元方法, 库定义的元方法以及table访问的元方法。
-- 1、算术类的元方法: __add(加), __sub(减), __mul(乘), __div(除), __unm(相反数), __mod(取模), __pow(乘幂), __concat(连接操作符)
-- 2、关系类的元方法: __eq(等于), __lt(小于), __le(小于等于)
-- 3、库定于的元方法: __tostring(print时调用), __metatable(设置后不可修改元表), __call(方法调用)
-- 4、table访问的元方法: __index(查询table), __newindex(修改table的字段), __mode(弱引用table，三种值: "k", "v", "kv" https://www.cnblogs.com/sifenkesi/p/3850760.html)
--  注意: 只有拥有显示构造的对象类型会被自动从weak表中移除，值类型boolean、number是不会自动从weak中移除的。而string类型虽然也由gc来负责清理，但是string没有显示的构造过程，因此也不会自动从weak表中移除，对于string的内存管理有单独的策略。
--  简单应用: 1. 记忆函数 2. 关联对象属性 3. 带有默认值的表

local myTable = {}
local myMetaTable = {}
myTable = setmetatable(myTable, myMetaTable)
print(myMetaTable == getmetatable(myTable))
local myNewTable = setmetatable({}, { __index = { key1 = 'value1' } })
print(myNewTable.key, myNewTable.key1)
myNewTable = setmetatable({ key1 = 'value1' }, { __index = function(table, key)
    print('visit key:', key)
    if key == 'key2' then
        return 'value2'
    else
        return nil
    end
end, __newindex = function(table, key, value) error('can\'t add new item in this table!!!') end })
print(myNewTable.key, myNewTable.key1, myNewTable.key2)
```
```lua
print(('-'):rep(10))
local co = coroutine.create(function(i)
    print('co1', i)
end)
print(coroutine.status(co))
coroutine.resume(co, 1)
print(coroutine.status(co), '\n----------')
co = coroutine.wrap(function(i)
    print('co2', i)
end)
--print(coroutine.status(co))
co(1)
--print(coroutine.status(co), '\n----------')
print('----------')
co = coroutine.create(function()
    for i = 1, 10 do
        print('co3', i)
        if i == 3 then
            print(coroutine.status(co))
            print(coroutine.running())
        end
        coroutine.yield()
    end
end)
coroutine.resume(co)
coroutine.resume(co)
coroutine.resume(co)
print(coroutine.status(co))
print(coroutine.running())

function foo(a)
    print('foo:', a)
    return coroutine.yield(2 * a)
end
co = coroutine.create(function(a, b)
    print('first coroutine:', a, b)
    local r = foo(a + 1)
    print('second coroutine:', r)
    local s
    r, s = coroutine.yield(a + b, a - b)
    print('third coroutine:', r, s)
    return b
end)
print(('-'):rep(20))
print('main', coroutine.resume(co, 1, 10))
print(('-'):rep(10))
print('main', coroutine.resume(co, 'r'))
print(('-'):rep(10))
print('main', coroutine.resume(co, 'x', 'y'))
print(('-'):rep(10))
print('main', coroutine.resume(co, 'x', 'y'))
```
```lua
print(('-'):rep(20))
Shape = { area = 0 }
function Shape:new(o)
    o = o or {}
    setmetatable(o, self)
    self.__index = self
    self.area = 0
    return o
end
function Shape:printArea()
    print('Shape面积为' .. self.area)
end
Shape:new():printArea()
print(('-'):rep(10))
Square = Shape:new()
function Square:new(o, side)
    o = o or Shape:new(o)
    setmetatable(o, self)
    self.__index = self
    side = side or 0
    self.area = side * side
    return o
end
function Square:printArea()
    print('正方形面积为' .. self.area)
end
Square:new(nil, 10):printArea()
print(('-'):rep(10))
Rectangle = Shape:new()
function Rectangle:new(o, length, breadth)
    o = o or Shape:new(o)
    setmetatable(o, self)
    self.__index = self
    self.area = length * breadth
    return o
end
function Rectangle:printArea()
    print('长方形面积为' .. self.area)
end
Rectangle:new(nil, 10, 20):printArea()
```
```lua
-- 性能相关笔记
-- 1、创建一个闭合函数要比创建一个table更廉价，访问非局部的变量也比table字段更快。
-- 2、访问局部变量要比全局变量更快，尽可能的使用局部变量，可以避免无用的名称引入全局环境。
-- 3、do-end语句块能提高lua运行效率，lua运行一行代码就会开启新的程序块，而do-end只有在遇到end时才会算做一个程序块。
-- 4、正确的尾调用不耗费任何栈空间，特别是递归时不会造成栈溢出。
-- 5、循环中使用无状态的迭代器，可以避免每次创建新的闭合函数而产生开销。
-- 6、多重赋值解决声明多个变量时的运行效率。
-- 7、多次运行代码块时，loadfile编译一次可多次运行，dofile每次运行都将会再次编译，这时loadfile的开销将小很多。
-- 8、函数定义是一种赋值操作，只有在运行时才完成的操作。加载外部代码块只是编译了它，但还没有定义它。
-- 9、合理使用弱引用table，可增强函数运行速度，整理内存及无效指针。
```
```lua
-- 单继承
local function class(super)
    local cls
    if super then
        cls = {["super"] = super}
        setmetatable(cls, {__index = super})
    else
        -- ctor是构造函数的命名
        cls = {ctor = function () end}
    end
    cls.__index = cls
    function cls.new(...)
        local instance = setmetatable({}, cls)
        instance:ctor(...)
        return instance
    end
    return cls
end

local Test = class()
function Test:doSomething()
    print("test doSomething")
end
local test = Test.new()
test:doSomething()
local Test2 = class(Test)
local test2 = Test2.new()
test2:doSomething()
```
```lua
-- 多继承
local function search(key, tables)
    for _, super in ipairs(tables) do
        if super[key] then
            return super[key]
        end
    end
end
local function class(...)
    local cls = { ctor = function () end}
    local supers = {...}
    setmetatable(cls, {__index = function (t, key) return search(key, supers) end})
    function cls.new(...)
        local instance = setmetatable({}, {__index = cls})
        instance:ctor(...)
        return instance
    end
    return cls
end

local Human = class()
function Human:life() print("almost 100 years.") end
local Programmer = class()
function Programmer:coding() print("sub 1 year.") end
local My = class(Human, Programmer)
local yuzixin = My.new()
yuzixin:life()
yuzixin:coding()
```
```lua
-- Lua使用增量标记和扫描收集器，它使用两个数字来控制其垃圾收集周期，即垃圾收集器暂停和垃圾收集器步骤倍增器。这些值以百分比表示，值100通常在内部等于1。
-- 垃圾收集器暂停用于控制垃圾收集器之前需要等待多长时间，Lua的自动内存管理再次调用。小于100的值意味着Lua不会等待下一个周期。类似地，该值的较高值将导致垃圾收集器缓慢。200的值表示收集器在开始新循环之前等待使用的总内存加倍。因此，根据应用程序的性质和速度，可能需要更改此值以在Lua应用程序中获得最佳性能。
-- 此步骤乘数控制垃圾收集器与Lua程序中内存分配的相对速度。较大的步长值将导致垃圾收集器更具侵略性，并且还会增加垃圾收集的每个增量步骤的步长。小于100的值通常可以避免垃圾收集器不完成循环并且通常不是优选的。默认值为200，这意味着垃圾收集器的运行速度是内存分配的两倍。
collectgarbage("collect")  -- 运行一个完整的垃圾收集循环。
collectgarbage("count")  -- 返回程序当前以千字节为单位的内存量。
collectgarbage("restart")  -- 如果垃圾收集器已停止，则重新启动它。
collectgarbage("setpause")  -- 将给定的值作为第二个参数除以100，将它设置为垃圾收集器暂停变量。
collectgarbage("setstepmul")  -- 将给定的值作为第二个参数除以100，将它设置为垃圾步骤乘数变量。
collectgarbage("step")  -- 运行垃圾收集的一步。第二个参数越大，此步骤越大。如果触发的步骤是垃圾收集周期的最后一步，则collectgarbage将返回true。
collectgarbage("stop")  -- 如果垃圾收集器正在运行，则停止它。

assert(type(a) == "number", "a is not a number")
error(message[, level])  -- level参数指定如何获取错误位置。对于级别1(默认值)，错误位置是调用错误函数的位置。级别2将错误指向调用调用错误的函数的位置等等。传递0级可避免向消息添加错误位置信息。
pcall(f, arg1, ...)  -- 如果函数f中发生某些错误，则不会抛出错误。它只返回错误状态。
xpcall(f, errHandler)

function myfunction () n = n / nil end
if pcall(myfunction) then print("Success") else print("Failure") end
function myerrorhandler(err) print("ERROR:", err) end
print(xpcall(myfunction, myerrorhandler))  -- false
```
```lua
-- [Lua 与 C 交互之UserData（4）](https://www.cnblogs.com/zsb517/p/6420885.html)
-- [Lua userdata和lightuserdata](https://blog.csdn.net/fwb330198372/article/details/82217022) finished
-- [lua高级用法（1）之C语言userdata](https://blog.csdn.net/xiadasong007/article/details/79705912)
-- [lua中访问userdata中对象和访问table中对象的效率比较](https://blog.csdn.net/mywcyfl/article/details/37765751)
-- TODO:

-- userdata和lightuserdata都可以让C返回一个句柄给Lua，而Lua可以将句柄再通过在C中注册的方法传回C
-- userdata: userdata通过Lua的API(lua_newuserdata())分配内存，就像C里的malloc()函数分配内存，但不需要调用free()去释放内存，该内存是由LUA的GC机制进行回收。
-- lightuserdata: lightuserdata通过LUA的API(lua_pushlightuserdata())创建，返回一个指针。当你需要把这个一个C的对象传到LUA里，并且需要自己管理这个指针时，lightuserdata就很适用了。但是，这个C对象是需要自己管理，LUA并不会帮忙回收。例如Cocos2d-x拥有自己的GC机制，使用lightuserdata把数据对象的指针传到LUA里。
-- 区别: 1.userdata是由LUA的GC机制进行回收 2.lightuserdata需要自己管理分配和回收。
```

### 例子: 调用C++的Lib

```cpp
// mLuaLib.h
#pragma once

#ifdef __cplusplus
extern "C" {
    #include <lua.h>
    #include <lualib.h>
    #include <lauxlib.h>
}
#else
#include <lauxlib.h>
#include <lua.h>
#include <lualib.h>
#endif

extern "C" __declspec(dllexport) int luaopen_mLualib(lua_State *L);
```

```cpp
// mLuaLib.c
#include "mLuaLib.h"
#include <stdio.h>

static int averageFunc(lua_State *L) {
    int n          = lua_gettop(L);
    lua_Number sum = 0;
    int i;
    /* 循环求参数之和 */
    for (i = 1; i <= n; i++) {
        sum += lua_tonumber(L, i);
    }
    lua_pushnumber(L, sum / n);  // 压入平均值
    lua_pushnumber(L, sum);      // 压入和
    return 2;                    // 返回两个结果
}

static int sayHelloFunc(lua_State *L) {
    printf("hello world!");
    return 0;
}

static const struct luaL_Reg mylib[] = {
    {"average", averageFunc},
    {"sayHello", sayHelloFunc},
    {NULL, NULL}  // 数组中最后一对必须是{NULL, NULL}，用来表示结束
};

int luaopen_mLualib(lua_State *L) {
    lua_getglobal(L, "mylib");
    if (lua_isnil(L, -1)) {
        lua_pop(L, 1);
        lua_newtable(L);
    }
    luaL_setfuncs(L, mylib, 0);
    lua_setglobal(L, "mylib");
    return 1;
}

// g++ -c -DBUILD_DLL mLualib.c
// g++ -shared -o mLualib.dll mLualib.o -Wl,--kill-at,--out-implib,libmLualib.a -llua -lm
```

```lua
require "mLualib"
local ave, sum = mylib.average(1, 2, 3, 4, 5)
print(ave, sum)  -- 3 15
mylib.sayHello()   -- hello world!
```

### 具体的C++与Lua交互

```cpp
// TODO: [VS2012 创建和使用DLL](https://blog.csdn.net/shun_fzll/article/details/39078971)
// #ifdef LEARNING_EXPORTS
// #define LEARNING_API __declspec(dllexport)
// #else
// #define LEARNING_API __declspec(dllimport)
// #endif
// namespace learn {
//     class LEARNING_API Cclass {
//     public:
//         int add(int a, int b);
//     };  // 类
//     extern "C" LEARNING_API float pi;  // 变量
//     extern "C" LEARNING_API float int getMax(int &,int &);  // 函数
//     extern "C" LEARNING_API int add_Interface(int &,int &);  // 函数，封装了对 Class.add 的使用
// }
```

```cpp
// lua.h / luaconf.h / luaxlib.h / lualib.h

// TODO: [Lua和C++交互总结(很详细)](https://blog.csdn.net/shun_fzll/article/details/39120965)
// Lua执行上下文
//     lua_State* L = luaL_newstate()
//     void luaL_openlibs(L)
//     void lua_close(L)
//     int lua_gettop (lua_State *L);  // 返回栈顶索引(即栈长度)
//     void lua_settop (lua_State *L, int idx);	 // lua_settop将栈顶设置为一个指定的位置，即修改栈中元素的数量。如果值比原栈顶高，则高的部分nil补足，如果值比原栈低，则原栈高出的部分舍弃。所以可以用lua_settop(0) 来清空栈。
//     void lua_pushvalue (lua_State *L, int idx);  // 将idx索引上的值的副本压入栈顶
//     void lua_remove (lua_State *L, int idx);	 // 移除idx索引上的值
//     void lua_insert (lua_State *L, int idx);	 // 弹出栈顶元素，并插入索引idx位置
//     void lua_replace (lua_State *L, int idx);  // 弹出栈顶元素，并替换索引idx位置的值
// 加载Lua文件
//     int result = luaL_loadfile(L, "./func.lua")
//     int result = luaL_dofile(L, "./func.lua")
// 调用Lua函数
//     lua_getglobal(L, "funcName")
//     lua_pcall(L, args' position ...)  // 需要先 lua_pushXxx
// 调用Lua变量: 创建、赋值、调用子方法
//     获取
//         lua_getglobal(L, "str")
//         string str = lua_tostring(L,-1);
//     赋值
//     创建
//         lua_pushXxx
//         lua_createtable(L, int narr, int nrec)
//     调用子方法
//         lua_getglobal(L, "tbl");
//         lua_getfield(L, -1 -- index, "name");
// 调用Lua...
// is
//     lua_isstring(L, 1)
//     lua_isnumber(L, 1)
//     lua_isboolean(L, 1)
//     lua_isfunction(L, 1)
//     lua_iscfunction(L, 1)
//     lua_isinteger(L, 1)
//     lua_isnone(L, 1)
//     lua_isnil(L, 1)
//     lua_isnoneornil(L, 1)
//     lua_isthread(L, 1)
//     lua_istable(L, 1)
//     lua_islightuserdata(L, 1)  // ?
//     lua_isuserdata(L, 1)
//     lua_isyieldable(L, 1)  // ?
// to
//     lua_toXxx(L, 1)
//     lua_topointer(L, 1)
//     luaL_tolstring(L, 1)
// push
//     lua_pushstring(L, "str")
//     lua_pushlstring(L, "str")
//     lua_pushnumber(L, double num)
//     lua_pushboolean(L, true/false)
//     lua_pushcclose()
//     lua_pushcfunction
//     lua_push
//     lua_push
// table
//     lua_gettable(L, idx)  // 与两个lua_pushstring配合相当于一个lua_pushstring配合一个lua_setfield
//     lua_settable(L, idx)
//     lua_createtable(L, int narr, int nrec)
//     lua_setfield(L, idx, "key")
//     lua_getfield(L, idx, "key")
```

### luvit

```lua
-- curl -L https://github.com/luvit/lit/raw/master/get-lit.sh | sh
-- 
local http = require('http')

http.createServer(function (req, res)
  local body = 'Hello world\n'
  res:setHeader('Content-Type', 'text/plain')
  res:setHeader("Content-Length", #body)
  res:finish(body)
end):listen(1337, '127.0.0.1')

print('Server running at http://127.0.0.1:1337/')
-- https://blog.csdn.net/liumiaocn/article/details/80529446
```

### openresty

```lua
-- https://opm.openresty.org/
-- https://github.com/GUI/lua-shell-games
-- https://github.com/bungle/lua-resty-template
-- https://framagit.org/fperrad/lua-Rotas
-- https://github.com/gnois/luaty
-- https://github.com/gnois/losty
-- https://github.com/jie123108/lua-resty-stats
-- [[code.openresty] Openresty Nginx API for Lua -上](https://www.jianshu.com/p/7b7c7c8264a3)
```

### unity-lua

```lua
-- https://blog.csdn.net/u011467512/article/details/72716376
```

### cocos-lua

```lua
-- 慕课网
-- 哔哩哔哩
-- 游戏蛮牛
-- github
-- [Creator开源游戏、插件、教程、视频汇总](https://forum.cocos.org/t/creator/44782)  -- 17年
-- [教程司令部 【20160418】](https://forum.cocos.org/t/topic/35606)  -- 16年
-- [Cocos Creator 插件开发系列教程 发布帖（教程完结）](https://forum.cocos.org/t/cocos-creator/69105)  -- 18年
-- [【教程汇总】Flappy Bird大集结](https://forum.cocos.org/t/flappy-bird/7261)  -- 14年
-- [【教程分享】我的几个开源的Cocos2d-js实战项目](https://forum.cocos.org/t/cocos2d-js/10818)  -- 14年
-- [新手入门，教程资料索引 [12.29更新]](https://forum.cocos.org/t/12-29/35454)  -- 17年
-- [接触creator四个月整理的资源。（3.31更新）](https://forum.cocos.org/t/creator-3-31/39917)  -- 16年
-- [用Cocos Creator制作的单机版IO类型贪吃蛇大战（完全开源版）](https://forum.cocos.org/t/cocos-creator-io/40427)  -- 16年
-- [【教程分享】【爱上cocos2d-x系列】不断更新中。。。](https://forum.cocos.org/t/cocos2d-x/7554)  -- 14年
-- [cocos2d-x游戏开发系列教程-超级玛丽01-前言](https://www.cnblogs.com/niulanshan/p/6175023.html)  -- 13年
-- [cocos2d-x游戏开发系列教程-坦克大战游戏之坦克和地图碰撞的检测上](https://www.cnblogs.com/niulanshan/p/6175081.html)  -- 13年
-- [cocos2d-x游戏开发系列教程-中国象棋00-前言](https://www.cnblogs.com/niulanshan/p/6175076.html)  -- 13年
-- [Cocos2d-X开发中国象棋《十二》游戏结果的显示与隐藏](https://blog.csdn.net/u010105970/article/details/41554299)  -- 14年

--[[计划:
    * 贪吃蛇
    * 坦克大战
    * 愤怒的小鸟
    * 中国象棋
    * 植物大战僵尸
    * 神庙逃亡
    * 全新世纪4
书籍:
    * [Lua 5.3 参考手册(中文版)](http://cloudwu.github.io/lua53doc/contents.html)
    * Cocos2d-x之Lua核心编程.pdf
    * Cocos2d-x实战之Lua卷(第2版).pdf
    * Lua 源码鉴赏.pdf
    * Programming.in.Lua第三版.pdf
    * Programming.in.Lua第四版.pdf
]]
```

### love2d

* [love2d系列 -- 2013](https://www.cnblogs.com/xdao/tag/love2d/)
* [love2d系列 -- 2016](https://alexarjing.github.io/categories/%E5%88%9D%E7%BA%A7%E6%95%99%E7%A8%8B/)
* [love2d引擎开发资源合集](https://blog.csdn.net/qq_16798583/article/details/84717150)

### gui

```lua
-- https://zhuanlan.zhihu.com/p/50635225
-- https://luarocks.org/modules/daurnimator/libuilua
-- https://github.com/zevv/libuilua
-- https://github.com/andlabs/libui
-- http://sirkha.github.io/tekUI/doc/index.html
```

### luapower

### fengri

### lua web -- luarocks可以安装的

```lua
-- [Lua Web编程 -- 易百](https://www.yiibai.com/lua/lua_web_programming.html)
-- [xavante](https://github.com/keplerproject/xavante)
-- [wsapi](https://github.com/keplerproject/wsapi)
-- [orbit](https://github.com/keplerproject/orbit)
```

### 作业: myLuaCollection

### 作业: myLuaTimer

### 作业: myLuaThread

### 作业: myLuaProcess

### 作业: myLuaXml

### 作业: myLuaJson

### 作业: myLuaSocket

### 作业: myLuaMySql

### 作业: myLuaMongodb

### 作业: myLuaSqlite3

### 作业: myLuaRedis

### 作业: 字符贪吃蛇

### 作业: luaServer 和 luaClient

### 作业: luaECharts

### end
