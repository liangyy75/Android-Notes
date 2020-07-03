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
---for等价的方法
local f, t, v = iter, tab, var
while true do
    v, value = f(t, v)
    if not v then
        break
    end
    body(v, value)
end

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

local myMetaTable = {}
local myTable = setmetatable({}, myMetaTable)
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
```
.  任意字符
 %s 空白符
 %p 标点
 %c 控制字符
 %d 数字
 %x 十六进制数
 %z 代表0的字符
 %a 字母
 %l 小写字母
 %u 大写字母
 %w 字母数字
字符类的大写形式代表相应集合的补集， 比如 %A 表示除了字母以外的字符集
另外，* + - 三个，作为通配符分别表示：
*： 匹配前面指定的 0 或多个同类字符， 尽可能匹配更长的符合条件的字串
+： 匹配前面指定的 1 或多个同类字符， 尽可能匹配更长的符合条件的字串
-： 匹配前面指定的 0 或多个同类字符， 尽可能匹配更短的符合条件的字串
```

### 例子: 调用C++的Lib

1. c++ 中使用 lua.hpp: ``g++ test.cpp -o test.exe -I D:\scoop\apps\lua53\5.3.4\lua-5.3.5\dist\include\ -llua -L D:\scoop\apps\lua53\5.3.4\lua-5.3.5\dist\lib``
2. lua 调用 c++ 的 dll: ````

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

1. [lua5.3.4源码详解](https://blog.csdn.net/u013517637/category_7137050.html)

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
//     lua_getglobal(L, "name")
//     lua_pcall(L, args' position ...)  // 需要先 lua_pushXxx
// 调用Lua变量: 创建、赋值、调用子方法
//     获取
//         lua_getglobal(L, "str")
//         string str = lua_tostring(L,-1);
//         lua_getglobal(L, "tbl");
//         lua_getfield(L, -1 /* index */, "keyName");
//     赋值
//     创建
//         lua_pushXxx
//         lua_createtable(L, int narr, int nrec)
//     调用子方法
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

1. 链接
    1. [OpenGL着色语言GLSL中文手册](https://blog.csdn.net/hk_shao/article/details/82084274)
    2. [如何理解着色器，渲染管线，光栅化等概念？](https://www.cnblogs.com/luxishi/p/6401108.html)
2. 基本类型
    1. void bool int float
    2. bvec2(n维布尔向量) bvec3 bvec4
    3. ivec2(n维整数向量) ivec3 ivec4
    4. vec2(n维浮点数向量) vec3 vec4
    5. mat2(2x2浮点矩阵) mat3 mat4
    6. sampler2D(2D纹理) samplerCube(盒纹理)
3. 基本结构和数组
    1. struct type-name { ... } // 类似c语言中的“结构体”
    2. float foo[3] // glsl只支持1维数组,数组可以是结构体的成员
4. 向量的分量访问
    1. glsl中的向量(vec2,vec3,vec4)往往有特殊的含义,比如可能代表了一个空间坐标(x,y,z,w),或者代表了一个颜色(r,g,b,a),再或者代表一个纹理坐标(s,t,p,q)。所以glsl提供了一些更人性化的分量访问方式.
    2. vector.xyzw 其中 xyzw 可以任意组合
    3. vector.rgba 其中 rgba 可以任意组合
    4. vector.stpq 其中 stpq 可以任意组合
        ```cpp
        vec4 v    = vec4(1.0, 2.0, 3.0, 1.0);
        float x   = v.x;                    // 1.0
        float x1  = v.r;                    // 1.0
        float x2  = v[0];                   // 1.0
        vec3 xyz  = v.xyz;                  // vec3(1.0, 2.0, 3.0)
        vec3 xyz1 = vec(v[0], v[1], v[2]);  // vec3(1.0, 2.0, 3.0)
        vec3 rgb  = v.rgb;                  // vec3(1.0, 2.0, 3.0)
        vec2 xyzw = v.xyzw;                 // vec4(1.0, 2.0, 3.0, 1.0);
        vec2 rgba = v.rgba;                 // vec4(1.0, 2.0, 3.0, 1.0);
        ```
5. 运算符(优先级自上而下变小)
    1. () 括号
    2. [] () . ++ –- 数组下标 方法参数 属性访问 自增后缀 自减后缀
    3. ++ -- + - ! 自增前缀 自减前缀 正号 负号 取反
    4. * / 乘 除
    5. + - 加 减
    6. < > <= >= 关系运算符
    7. == != 相等性运算符
    8. && 逻辑与
    9. ^^ 逻辑排他或(用处基本等于!=)
    10. || 逻辑或
    11. ?: 三目运算符
    12. = += -= *= /= 赋值与复合赋值
    13. , 顺序分配运算
6. 基础类型间的运算
    1. glsl中，没有隐式类型转换，原则上glsl要求任何表达式左右两侧(l-value)和(r-value)的类型必须一致
    2. 把float转成int: int(1.0)；把int转成float: float(1)
    3. vec，mat这些类型其实是由float复合而成的，当它们与float运算时，其实就是在每一个分量上分别与float进行运算，这就是所谓的逐分量运算。glsl里大部分涉及vec，mat的运算都是逐分量运算，但也并不全是。
        ```cpp
        vec3 temp1 = 10.0 * vec3(1.0, 2.0, 3.0); // vec3(10.0, 20.0, 30.0)
        mat3 temp2 = 10.0 * mat3(1.0); // mat3(10.0)
        vec3 temp3 = vec3(1.0, 2.0, 3.0) + vec3(0.1, 0.2, 0.3); // vec3(1.1, 2.2, 3.3)
        vec3 temp4 = vec3(1.0, 2.0, 3.0) * vec3(0.1, 0.2, 0.3); // vec3(0.1, 0.4, 0.9)
        ```
    4. vec与mat间只存在乘法运算。它们的计算方式和线性代数中的矩阵乘法相同，不是逐分量运算。
        ```cpp
        vec2 temp5 = mat2(1., 2., 3., 4.) * vec2(10., 20.); // vec2(1. * 10. + 3. * 20., 2. * 10. + 4. * 20.)
        vec2 temp6 = vec2(10., 20.) * mat2(1., 2., 3., 4.); // vec2(1. * 10. + 2. * 20., 3. * 10. + 4. * 20.)
        ```
    5. 在mat与mat的运算中，除了乘法是线性代数中的矩阵乘法外，其余的运算任为逐分量运算。简单说就是只有乘法是特殊的，其余都和vec与vec运算类似
        ```cpp
        mat2 a = mat2(1., 2., 3., 4.);
        mat2 b = mat2(10., 20., 30., 40.);
        mat2 c = a + b; // mat2(11., 22., 33., 44.)
        mat2 d = a * b; // mat2(1 * 10 + 3 * 20, 2 * 10 + 4 * 20, 1 * 30 + 3 * 40, 2 * 30 + 4 * 40)
        ```
7. 变量限定符
    1. none (默认的可省略)本地变量，可读可写，函数的输入参数既是这种类型
    2. const 声明变量或函数的参数为只读类型。被const限定符修饰的变量初始化后不可变，除了局部变量，函数参数也可以使用const修饰符。但要注意的是结构变量可以用const修饰，但结构中的字段不行。const变量必须在声明时就初始化``const vec3 v3 = vec3(0.,0.,0.)``。局部变量只能使用const限定符。函数参数只能使用const限定符。
    3. attribute 只能存在于vertex shader中，一般用于保存顶点或法线数据，它可以在数据缓冲区中读取数据。是全局且只读的，一般attribute变量用来放置程序传递来的模型顶点，法线，颜色，纹理等数据它可以访问数据缓冲区。
    4. uniform 在运行时shader无法改变uniform变量，一般用来放置程序传递给shader的变换矩阵，材质，光照参数等等。是全局且只读的。
    5. varying 主要负责在vertex和fragment之间传递变量。一般我们在vertex shader中修改它然后在fragment shader使用它，但不能在fragment shader中修改它。
    6. 全局变量限制符只能为const、attribute、uniform和varying中的一个，不可复合。
8. 函数参数限定符
    1. 函数的参数默认是以拷贝的形式传递的，也就是值传递，任何传递给函数参数的变量，其值都会被复制一份，然后再交给函数内部进行处理
    2. < none: default > 默认使用 in 限定符
    3. in 复制到函数中在函数中可读写
    4. out 返回时从函数中复制出来
    5. inout 复制到函数中并在返回时复制出来
9. glsl的函数
    1. 允许在程序的最外部声明函数。函数不能嵌套，不能递归调用，且必须声明返回值类型(无返回值时声明为void)。在其他方面glsl函数与c函数非常类似。
        ```cpp
        vec4 getPosition() {
            return vec4(0., 0., 0., 1.);
        }
        void doubleSize(inout float size) {
            size = size * 2.0;
        }
        void main() {
            float psize = 10.0;
            doubleSize(psize);
            gl_Position  = getPosition();
            gl_PointSize = psize;
        }
        ```
10. 构造函数
    1. 变量可以在声明的时候初始化，也可以先声明然后等需要的时候在进行赋值。聚合类型对象如(向量、矩阵、数组、结构)需要使用其构造函数来进行初始化。``vec4 color = vec4(0.0, 1.0, 0.0, 1.0);``
        ```cpp
        // 一般类型
        float pSize = 10.0;
        float pSize1;
        pSize1 = 10.0;
        // 复合类型
        vec4 color = vec4(0.0, 1.0, 0.0, 1.0);
        vec4 color1;
        color1 = vec4(0.0, 1.0, 0.0, 1.0);
        // 结构
        struct light {
            float intensity;
            vec3 position;
        };
        light lightVar = light(3.0, vec3(1.0, 2.0, 3.0));
        // 数组
        const float c[3] = float[3](5.0, 7.2, 1.1);
        ```
11. 类型转换
    1. glsl可以使用构造函数进行显式类型转换: int(true) / int(10.3) / float(true) / float(2) / bool(0.0|0) / bool(1.2|3)
12. 精度限定
    1. glsl在进行光栅化着色的时候，会产生大量的浮点数运算，这些运算可能是当前设备所不能承受的，所以glsl提供了3种浮点数精度，我们可以根据不同的设备来使用合适的精度。在变量前面加上``highp mediump lowp``即可完成对该变量的精度声明。我们一般在片元着色器(fragment shader)最开始的地方加上``precision mediump float``；便设定了默认的精度。这样所有没有显式表明精度的变量都会按照设定好的默认精度来处理。
    2. 变量的精度首先是由精度限定符决定的，如果没有精度限定符，则要寻找其右侧表达式中已经确定精度的变量，一旦找到，那么整个表达式都将在该精度下运行。如果找到多个，则选择精度较高的那种，如果一个都找不到，则使用默认或更大的精度类型。
        ```cpp
        uniform highp float h1;
        highp float h2 = 2.3 * 4.7; //运算过程和结果都 是高精度
        mediump float m;
        m = 3.7 * h1 * h2; //运算过程 是高精度
        h2 = m * h1; //运算过程 是高精度
        m = h2 – h1; //运算过程 是高精度
        h2 = m + m; //运算过程和结果都 是中等精度
        void f(highp float p); // 形参 p 是高精度
        f(3.3); //传入的 3.3是高精度
        ```
    3. 由于shader在编译时会进行一些内部优化，可能会导致同样的运算在不同shader里结果不一定精确相等。这会引起一些问题，尤其是vertx shader向fragmeng shader传值的时候。所以我们需要使用**invariant关键字**来显式要求计算结果必须精确一致。当然我们也可使用``#pragma STDGL invariant(all)``来命令所有输出变量必须精确一致，但这样会限制编译器优化程度，降低性能。
        ```cpp
        #pragma STDGL invariant(all) // 所有输出变量为 invariant
        invariant varying texCoord; // varying在传递数据的时候声明为invariant
        ```
    4. 当需要用到多个限定符的时候要遵循以下顺序:
        1. 在一般变量中: invariant > storage > precision
        2. 在参数中: storage > parameter > precision
        3. 例子
            ```cpp
            invariant varying lowp float color; // invariant > storage > precision
            void doubleSize(const in lowp float s){ //storage > parameter > precision
                float s1=s;
            }
            ```
13. 预编译指令
    1. 以#开头的是预编译指令，常用的有：``#define #undef #if #ifdef #ifndef #else #elif #endif #error #pragma #extension #version #line``。比如``#version 100``的意思是规定当前shader使用GLSL ES 1.00标准进行编译，如果使用这条预编译指令，则他必须出现在程序的最开始位置。
    2. 内置的宏:
        1. ``__LINE__``：当前源码中的行号
        2. ``__VERSION__ ``：一个整数，指示当前的glsl版本。
        3. GL_ES：如果当前是在 OPENGL ES 环境中运行则 GL_ES 被设置成1，一般用来检查当前环境是不是 OPENGL ES。
        4. GL_FRAGMENT_PRECISION_HIGH：如果当前系统glsl的片元着色器支持高浮点精度，则设置为1。一般用于检查着色器精度。
    3. 例子
        ```cpp
        #ifdef GL_ES // 如何通过判断系统环境，来选择合适的精度
            #ifdef GL_FRAGMENT_PRECISION_HIGH
                precision highp float;
            #else
            precision mediump float;
            #endif
        #endif
        #define NUM 100 // 自定义宏
        #if NUM==100
        #endif
        ```
14. 内置的特殊变量
    1. glsl程序使用一些特殊的内置变量与硬件进行沟通。他们大致分成两种，一种是input类型，负责向硬件(渲染管线)发送数据；另一种是output类型，负责向程序回传数据，以便编程时需要。
    2. 在vertex Shader中：output类型的内置变量 —— highp vec4 gl_Position(放置顶点坐标信息); mediump float gl_PointSize(需要绘制点的大小，只在gl.POINTS模式下有效)
    3. 在fragment Shader中
        1. input类型的：mediump vec4 gl_FragCoord(片元在framebuffer画面的相对位置); bool gl_FrontFacing(标志当前图元是不是正面图元的一部分); mediump vec2 gl_PointCoord(经过插值计算后的纹理坐标，点的范围是0.0到1.0)
        2. output类型的：mediump vec4 gl_FragColor(设置当前片点的颜色); gl_FragData\[n](设置当前片点的颜色,使用glDrawBuffers数据数组)
15. 内置的常量
    1. vertex
        1. ``const mediump int gl_MaxVertexAttribs >= 8`` 表示在vertex shader(顶点着色器)中可用的最大attributes数。这个值的大小取决于OpenGLES在某设备上的具体实现，不过最低不能小于8个
        2. ``const mediump int gl_MaxVertexUniformVectors >= 128`` 表示在vertex shader(顶点着色器)中可用的最大uniform vectors数
        3. ``const mediump int gl_MaxVaryingVectors >= 8`` 表示在vertex shader(顶点着色器)中可用的最大varying vectors数
        4. ``const mediump int gl_MaxVertexTextureImageUnits >= 0`` 表示在vertex shader(顶点着色器)中可用的最大纹理单元数(贴图)
        5. ``const mediump int gl_MaxCombinedTextureImageUnits >= 8`` 表示在vertex Shader和fragment Shader总共最多支持多少个纹理单元
    2. fragment
        1. ``const mediump int gl_MaxTextureImageUnits >= 8`` 表示在fragment Shader(片元着色器)中能访问的最大纹理单元数
        2. ``const mediump int gl_MaxFragmentUniformVectors >= 16`` 表示在fragment Shader(片元着色器)中可用的最大uniform vectors数
        3. ``const mediump int gl_MaxDrawBuffers = 1`` 表示可用的drawBuffers数，在OpenGL ES 2.0中这个值为1，在将来的版本可能会有所变化
        4. glsl中还有一种内置的uniform状态变量，gl_DepthRange 它用来表明全局深度范围(除此之外的所有uniform状态常量都已在glsl 1.30中废弃)。
            ```cpp
            struct gl_DepthRangeParameters {
                highp float near; // n
                highp float far; // f
                highp float diff; // f - n
            };
            uniform gl_DepthRangeParameters gl_DepthRange;
            ```
16. 流控制
    1. if (true) {  } else if (1 == 2) {  } else {  }
    2. for (l = 0; l < 10; l++) { break; continue; }
    3. while (i < 10) { i++; }
    4. do { i < 10 } while (i < 10);
    5. discard; // 使用discard会退出片段着色器，不执行后面的片段着色操作。片段也不会写入帧缓冲区。
17. 内置函数库(下文中的T可以是 float, vec2, vec3, vec4，且可以逐分量操作)
    1. 通用函数
		1. ``T abs(T x)``: 返回x的绝对值
		2. ``T sign(T x)``: 比较x与0的值,大于,等于,小于 分别返回 1.0 ,0.0,-1.0
		3. ``T floor(T x)``: 返回<=x的最大整数
		4. ``T ceil(T x)``: 返回>=等于x的最小整数
		5. ``T fract(T x)``: 获取x的小数部分
		6. ``T mod(T x, T y); T mod(T x, float y)``: 取x,y的余数
		7. ``T min(T x, T y); T min(T x, float y)``: 取x,y的最小值
		8. ``T max(T x, T y); T max(T x, float y)``: 取x,y的最大值
		9. ``T clamp(T x, T minVal, T maxVal); T clamp(T x, float minVal,float maxVal)``: min(max(x, minVal), maxVal),返回值被限定在 minVal,maxVal之间
		10. ``T mix(T x, T y, T a); T mix(T x, T y, float a)``: 取x,y的线性混合,x*(1-a)+y*a
		11. ``T step(T edge, T x); T step(float edge, T x)``: x > edge ? 1 : 0
		12. ``T smoothstep(T edge0, T edge1, T x); T smoothstep(float edge0,float edge1, T x)``: 如果x>=edge1返回1.0, 否则返回Hermite插值
    1. 角度&三角函数
		13. ``T radians(T degrees)``: 角度转弧度
		14. ``T degrees(T radians)``: 弧度转角度
		15. ``T sin(T angle)``: 正弦函数,角度是弧度
		16. ``T cos(T angle)``: 余弦函数,角度是弧度
		17. ``T tan(T angle)``: 正切函数,角度是弧度
		18. ``T asin(T x)``: 反正弦函数,返回值是弧度
		19. ``T acos(T x)``: 反余弦函数,返回值是弧度
		20. ``T atan(T y, T x); T atan(T y_over_x)``: 反正切函数,返回值是弧度
    1. 指数函数
		21. ``T pow(T x, T y)``: 返回x的y次幂 xy
		22. ``T exp(T x)``: 返回x的自然指数幂 ex
		23. ``T log(T x)``: 返回x的自然对数 ln
		24. ``T exp2(T x)``: 返回2的x次幂 2x
		25. ``T log2(T x)``: 返回2为底的对数 log2
		26. ``T sqrt(T x)``: 开根号 √x
		27. ``T inversesqrt(T x)``: 先开根号,在取倒数,就是 1/√x
    1. 几何函数
		28. ``float length(T x)``: 返回矢量x的长度
		29. ``float distance(T p0, T p1)``: 返回p0 p1两点的距离
		30. ``float dot(T x, T y)``: 返回x y的点积
		31. ``vec3 cross(vec3 x, vec3 y)``: 返回x y的叉积
		32. ``T normalize(T x)``: 对x进行归一化,保持向量方向不变但长度变为1
		33. ``T faceforward(T N, T I, T Nref)``: 根据 矢量 N 与Nref 调整法向量
		34. ``T reflect(T I, T N)``: 返回 I - 2 * dot(N,I) * N, 结果是入射矢量 I 关于法向量N的 镜面反射矢量
		35. ``T refract(T I, T N, float eta)``: 返回入射矢量I关于法向量N的折射矢量,折射率为eta
    1. 矩阵函数(mat可以为任意类型矩阵.)
        1. ``mat matrixCompMult(mat x, mat y)``: 将矩阵 x 和 y的元素逐分量相乘
    2. 向量函数(bvec指的是由bool类型组成的一个向量，如bvec2/bvec3/bvec4)
		36. ``bvec lessThan(T x, T y)``: 逐分量比较x < y,将结果写入bvec对应位置
		37. ``bvec lessThanEqual(T x, T y)``: 逐分量比较 x <= y,将结果写入bvec对应位置
		38. ``bvec greaterThan(T x, T y)``: 逐分量比较 x > y,将结果写入bvec对应位置
		39. ``bvec greaterThanEqual(T x, T y)``: 逐分量比较 x >= y,将结果写入bvec对应位置
		40. ``bvec equal(T x, T y); bvec equal(bvec x, bvec y)``: 逐分量比较 x == y,将结果写入bvec对应位置
		41. ``bvec notEqual(T x, T y); bvec notEqual(bvec x, bvec y)``: 逐分量比较 x!= y,将结果写入bvec对应位置
		42. ``bool any(bvec x)``: 如果x的任意一个分量是true,则结果为true
		43. ``bool all(bvec x)``: 如果x的所有分量是true,则结果为true
		44. ``bvec not(bvec x)``: bool矢量的逐分量取反
    1. 纹理查询函数
        1. 图像纹理有两种：一种是平面2d纹理，另一种是盒纹理，针对不同的纹理类型有不同访问方法。纹理查询的最终目的是从sampler中提取指定坐标的颜色信息。函数名中带有Cube字样的函数需要传入盒状纹理，带有Proj字样的是指带投影的版本。
        2. 以下函数只在vertex shader中可用
            ```cpp
            vec4 texture2DLod(sampler2D sampler, vec2 coord, float lod);
            vec4 texture2DProjLod(sampler2D sampler, vec3 coord, float lod);
            vec4 texture2DProjLod(sampler2D sampler, vec4 coord, float lod);
            vec4 textureCubeLod(samplerCube sampler, vec3 coord, float lod);
            ```
        3. 以下函数只在fragment shader中可用
            ```cpp
            vec4 texture2D(sampler2D sampler, vec2 coord, float bias);
            vec4 texture2DProj(sampler2D sampler, vec3 coord, float bias);
            vec4 texture2DProj(sampler2D sampler, vec4 coord, float bias);
            vec4 textureCube(samplerCube sampler, vec3 coord, float bias);
            ```
        4. 在 vertex shader 与 fragment shader 中都可用
            ```cpp
            vec4 texture2D(sampler2D sampler, vec2 coord);
            vec4 texture2DProj(sampler2D sampler, vec3 coord);
            vec4 texture2DProj(sampler2D sampler, vec4 coord);
            vec4 textureCube(samplerCube sampler, vec3 coord);
            ```
18. shader范例
    1. 心型
        ```cpp
        #ifdef GL_ES
        precision mediump float;
        #endif
        uniform vec2 u_resolution;  // 画布大小
        uniform vec2 u_mouse;  // 鼠标位置
        uniform float u_time;  // 时间
        void main() {
            vec2 p = (2.0 * gl_FragCoord.xy - u_resolution.xy) / min(u_resolution.y, u_resolution.x);
            // background color
            vec3 bcol = vec3(1.0, 0.8, 0.7 - 0.07 * p.y) * (1.0 - 0.25 * length(p));
            // animate
            float tt = mod(u_time, 1.5) / 1.5;
            float ss = pow(tt, .2) * 0.5 + 0.5;
            ss       = 1.0 + ss * 0.5 * sin(tt * 6.2831 * 3.0 + p.y * 0.5) * exp(-tt * 4.0);
            p *= vec2(0.5, 1.5) + ss * vec2(0.5, -0.5);
            // shape
        #if 0
            p *= 0.8;
            p.y = -0.1 - p.y*1.2 + abs(p.x)*(1.0-abs(p.x));
            float r = length(p);
            float d = 0.5;
        #else
            p.y -= 0.25;
            float a = atan(p.x, p.y) / 3.141593;
            float r = length(p);
            float h = abs(a);
            float d = (13.0 * h - 22.0 * h * h + 10.0 * h * h * h) / (6.0 - 5.0 * h);
        #endif
            // color
            float s = 0.75 + 0.75 * p.x;
            s *= 1.0 - 0.4 * r;
            s = 0.3 + 0.7 * s;
            s *= 0.5 + 0.5 * pow(1.0 - clamp(r / d, 0.0, 1.0), 0.1);
            vec3 hcol = vec3(1.0, 0.5 * r, 0.3) * s;
            vec3 col = mix(bcol, hcol, smoothstep(-0.01, 0.01, d - r));
            gl_FragColor = vec4(col, 1.0);
        }
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
