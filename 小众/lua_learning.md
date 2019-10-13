- [过去的学习资料](#%e8%bf%87%e5%8e%bb%e7%9a%84%e5%ad%a6%e4%b9%a0%e8%b5%84%e6%96%99)
- [自带方法预览](#%e8%87%aa%e5%b8%a6%e6%96%b9%e6%b3%95%e9%a2%84%e8%a7%88)
- [其他语法笔记](#%e5%85%b6%e4%bb%96%e8%af%ad%e6%b3%95%e7%ac%94%e8%ae%b0)
- [例子: 调用C++的Lib](#%e4%be%8b%e5%ad%90-%e8%b0%83%e7%94%a8c%e7%9a%84lib)
- [具体的C++与Lua交互](#%e5%85%b7%e4%bd%93%e7%9a%84c%e4%b8%8elua%e4%ba%a4%e4%ba%92)
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

[Lua 菜鸟](https://www.runoob.com/lua/lua-environment.html)
[luarocks](https://luarocks.org)
[Lua 易百](https://www.yiibai.com/lua/lua_environment.html)
[ubuntu下安装lua和luarocks](https://blog.csdn.net/kgzhang/article/details/72885199)
[使用Lua做Web开发](https://www.jianshu.com/p/94342efd9467)
[Seq2Seq Chatbot 聊天机器人：基于Torch的一个Demo搭建 手札](https://blog.csdn.net/MebiuW/article/details/52749822)

成功下载的: lua-cjson luasocket xml luafilesystem busted lua-vips lrandom lmathx inspect gomaxmagick

没有成功下载的: torch nn image graph-toolkit tekui

[inspect](https://github.com/kikito/inspect.lua)
[luafilesystem](https://keplerproject.github.io/luafilesystem/)
[xml](https://lubyk.github.io/lubyk/xml.html)
[lua-cjson](https://www.kyne.com.au/~mark/software/lua-cjson-manual.html)
[https://github.com/diegonehab/luasocket](luasocket)
[busted](https://github.com/Olivine-Labs/busted)
[lua-vips](https://github.com/libvips/lua-vips)
[gomaxmagick](https://github.com/LuaDist2/gomaxmagick)
[graph-toolkit](https://franko.github.io/graph-toolkit/)
[luagraph](https://github.com/hleuwer/luagraph)
[luazip](https://github.com/gdraheim/zziplib) [](https://mpeterv.github.io/luazip/manual.html)
[luasql](https://keplerproject.github.io/luasql/)

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

[Lua与Android交互详解](https://blog.csdn.net/niuba123456/column/info/25343)
[对比React Native、dcloud、LuaView三个框架技术（内部）](https://www.jianshu.com/p/ee1cdb33db8d)

[lua-for-idea](https://bitbucket.org/sylvanaar2/lua-for-idea/src/idea16/)
[IntelliJ-EmmyLua](https://github.com/EmmyLua/IntelliJ-EmmyLua)
[VSCode-EmmyLua](https://github.com/EmmyLua/VSCode-EmmyLua)
[EmmyLua-LanguageServer](https://github.com/EmmyLua/EmmyLua-LanguageServer)
[Kong](https://github.com/Kong/kong)
[lua-nginx-module](https://github.com/openresty/lua-nginx-module)
[VeryNginx](https://github.com/alexazhou/VeryNginx)
[xLua](https://github.com/Tencent/xLua)
[LuaViewSDK](https://github.com/alibaba/LuaViewSDK)
[cuberite](https://github.com/cuberite/cuberite)
[ZeroBraneStudio](https://github.com/pkulchenko/ZeroBraneStudio)
[awesome-lua](https://github.com/LewisJEllis/awesome-lua)

### 自带方法预览

```lua
io.write("Hello World, from ", _VERSION, "!\n")

local socket = require("socket")
local logging = require("logging")
local json = require('json')
--local tree = require('tree')
--local list = require('list')

learning_text = io.open('./learning.txt', 'w+')
function pairTable(t, n, u)
    local s = n .. ' -- ' .. tostring(t)
    learning_text:write(s .. '\n')
    if u ~= nil and u then
        print(s)
    end
    if t ~= nil then
        for k, v in pairs(t) do
            s = '    k: ' .. k .. ', v: ' .. string.gsub(tostring(v), '\n', '\\n')
            learning_text:write(s .. '\n')
            if u ~= nil and u then
                print(s)
            end
        end
    else
        s = '    ' .. n .. ' is nil'
        learning_text:write(s .. '\n')
        if u ~= nil and u then
            print(s)
        end
    end
end

-- pairTable(tree, 'tree')
-- pairTable(list, 'list')
pairTable(json, 'json')
pairTable(socket, 'socket')
pairTable(logging, 'logging')
pairTable(_G, '_G')
pairTable(string, 'string')
pairTable(io, 'io')
pairTable(math, 'math')
pairTable(package, 'package')
pairTable(os, 'os')
pairTable(table, 'table')
pairTable(debug, 'debug')
pairTable(coroutine, 'coroutine')
io.close(learning_text)
```

### 其他语法笔记

```lua
-- 单行注释
--[[
多行注释
--]]
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
for i = 1, 10 do
    break
end
for i, v in ipairs(socket) do  -- ipairs是用数字下标遍历的，而且从1开始
    break
end
for i, v in pairs(socket) do  -- pairs是遍历所有的key
    break
end
repeat
    break
until true
function exampleFun(...)
    local a = 10
    local varargs = { ... }
    for i, v in ipairs(varargs) do
        a = a + i
    end
    return a
end
--三木运算符 ?
-- 基本数据类型 nil / boolean / number / string / table / function / userdata / thread -- lua 下标一般从1开始
-- nil
-- true / false
-- 2 / 2.2 / 0.2 / 2e+1 / 0.2e-1 / 7.82679402y48384e-06
-- "this is a string" 'this is also a string' [[ this is a multiple line string ]] .."连接字符串或者数字" #"获取长度"
-- {} / {'key 为 1', 'key 为 2', 3 = 'key 为 3', key = 'key 为 key'} / for k, v in pairs(t) do ... end / for k, v in ipairs(t) do ... end

function square(endNum, startNum)
    -- 只能接受两个参数
    if startNum ~= endNum then
        startNum = startNum - 1
        return startNum, startNum * startNum
    end
end
for i, n in square, 0, 3 do
    print(i, n)
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
end })
print(myNewTable.key, myNewTable.key1, myNewTable.key2)

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

// TODO: [Lua和C++交互总结（很详细）](https://blog.csdn.net/shun_fzll/article/details/39120965)
// Lua执行上下文
//     lua_State* L = luaL_newstate()
//     void luaL_openlibs(L)
//     void lua_close(L)
//     int lua_gettop (lua_State *L);  // 返回栈顶索引（即栈长度）
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
