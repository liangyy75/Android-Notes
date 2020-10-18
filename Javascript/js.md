- [基础语法](#基础语法)
    - [基础](#基础)
        - [词法结构](#词法结构)
            - [定义](#定义)
            - [保留字](#保留字)
            - [空白](#空白)
            - [分号【重点】](#分号重点)
            - [大小写](#大小写)
        - [变量和标识符](#变量和标识符)
            - [变量声明](#变量声明)
            - [变量作用域](#变量作用域)
        - [属性和变量](#属性和变量)
        - [表达式](#表达式)
            - [原始表达式(primary exression)](#原始表达式primary-exression)
            - [复杂表达式(MemberExpression)](#复杂表达式memberexpression)
        - [严格模式](#严格模式)
            - [使用](#使用)
            - [规则](#规则)
        - [内存管理及垃圾回收](#内存管理及垃圾回收)
            - [分配内存](#分配内存)
            - [释放内存](#释放内存)
            - [引用计数法](#引用计数法)
            - [标记清除法](#标记清除法)
            - [性能问题](#性能问题)
            - [优化内存占用](#优化内存占用)
        - [动态脚本](#动态脚本)
            - [外部脚本](#外部脚本)
            - [内部脚本](#内部脚本)
            - [兼容写法](#兼容写法)
    - [运算符](#运算符)
    - [语句](#语句)
    - [规范](#规范)
- [数据类型](#数据类型)
    - [基础](#基础-1)
        - [15种原生对象类型系统综述](#15种原生对象类型系统综述)
        - [原始值和复杂值](#原始值和复杂值)
        - [包装对象](#包装对象)
            - [定义](#定义-1)
            - [生存期](#生存期)
            - [显示创建](#显示创建)
            - [转型函数](#转型函数)
            - [比较函数](#比较函数)
    - [基本类型](#基本类型)
        - [Undefined和Null](#undefined和null)
        - [Boolean布尔类型](#boolean布尔类型)
        - [Number数字类型](#number数字类型)
            - [定义](#定义-2)
            - [整数](#整数)
            - [浮点数](#浮点数)
            - [科学计数法](#科学计数法)
            - [数值精度](#数值精度)
            - [数值范围](#数值范围)
            - [特殊数值](#特殊数值)
            - [转成数值](#转成数值)
            - [实例方法](#实例方法)
        - [Math对象](#math对象)
            - [常量](#常量)
            - [函数](#函数)
        - [String字符串类型](#string字符串类型)
        - [String字符串类型的属性和方法](#string字符串类型的属性和方法)
            - [属性](#属性)
            - [方法](#方法)
    - [构造器类型](#构造器类型)
        - [正则表达式基础语法](#正则表达式基础语法)
        - [RegExp正则类型](#regexp正则类型)
            - [匹配模式](#匹配模式)
            - [对象](#对象)
            - [属性](#属性-1)
            - [方法](#方法-1)
        - [Array数组类型](#array数组类型)
        - [22种数组方法](#22种数组方法)
        - [数组复制](#数组复制)
        - [字符串和数组的方法比较](#字符串和数组的方法比较)
        - [错误处理机制](#错误处理机制)
            - [error对象](#error对象)
            - [error类型](#error类型)
            - [error事件](#error事件)
            - [抛出错误与捕获错误](#抛出错误与捕获错误)
    - [日期对象](#日期对象)
        - [日期和时间基础知识](#日期和时间基础知识)
        - [Date日期对象](#date日期对象)
            - [静态方法](#静态方法)
            - [构造](#构造)
            - [实例方法](#实例方法-1)
        - [简易日历实现](#简易日历实现)
        - [日期联动效果](#日期联动效果)
    - [类型识别](#类型识别)
        - [四种类型识别的方法](#四种类型识别的方法)
        - [数组检测方式](#数组检测方式)
    - [类型转换](#类型转换)
        - [toString()](#tostring)
        - [valueOf()](#valueof)
        - [数据类型转换](#数据类型转换)
            - [原始值转换成原始值](#原始值转换成原始值)
            - [对象转换成原始值](#对象转换成原始值)
            - [显式类型转换](#显式类型转换)
            - [隐式类型转换](#隐式类型转换)
    - [函数](#函数-1)
        - [函数概述](#函数概述)
            - [函数定义](#函数定义)
            - [函数返回值](#函数返回值)
            - [函数调用](#函数调用)
        - [函数参数](#函数参数)
            - [arguments](#arguments)
            - [内部属性](#内部属性)
            - [函数重载](#函数重载)
            - [参数传递](#参数传递)
        - [函数的属性和方法](#函数的属性和方法)
        - [ES6函数扩展](#es6函数扩展)
        - [函数式编程](#函数式编程)
        - [高阶函数](#高阶函数)
        - [函数柯里化](#函数柯里化)
        - [函数节流和函数防抖](#函数节流和函数防抖)
        - [惰性函数](#惰性函数)
    - [对象](#对象-1)
        - [初识对象](#初识对象)
        - [对象的属性操作](#对象的属性操作)
        - [对象的属性描述符](#对象的属性描述符)
        - [对象拷贝](#对象拷贝)
- [难点重点](#难点重点)
    - [作用域](#作用域)
    - [闭包](#闭包)
    - [this](#this)
    - [继承实现](#继承实现)
        - [一张图理解prototype、proto和constructor的三角关系](#一张图理解prototypeproto和constructor的三角关系)
        - [构造函数和原型对象](#构造函数和原型对象)
        - [创建对象的5种模式](#创建对象的5种模式)
        - [实现继承的3种形式](#实现继承的3种形式)
        - [面向对象的6个概念](#面向对象的6个概念)
    - [模块化](#模块化)
- [DOM -- 节点](#dom----节点)
    - [节点类型](#节点类型)
        - [12种DOM节点类型概述](#12种dom节点类型概述)
        - [文本节点](#文本节点)
        - [注释节点和文档类型节点](#注释节点和文档类型节点)
        - [文档片段节点](#文档片段节点)
        - [元素节点](#元素节点)
        - [特性节点](#特性节点)
        - [文档节点](#文档节点)
    - [获取节点](#获取节点)
        - [元素选择器](#元素选择器)
        - [getElementsByClassName](#getelementsbyclassname)
        - [selector选择器](#selector选择器)
        - [动态集合](#动态集合)
    - [节点操作](#节点操作)
        - [节点关系](#节点关系)
        - [节点操作](#节点操作-1)
        - [节点内容](#节点内容)
        - [节点遍历](#节点遍历)
        - [节点范围](#节点范围)
        - [区分元素特性和对象属性](#区分元素特性和对象属性)
- [DOM -- 脚本化CSS](#dom----脚本化css)
- [DOM -- 表单脚本](#dom----表单脚本)
- [DOM -- 元素尺寸](#dom----元素尺寸)
- [DOM -- 事件](#dom----事件)
- [动画 -- 拖拽](#动画----拖拽)
- [动画 -- 运动](#动画----运动)
- [动画 -- canvas](#动画----canvas)
- [动画 -- svg](#动画----svg)
- [ajax](#ajax)
- [存储](#存储)
- [BOM](#bom)
- [【空闲】【必要】](#空闲必要)

# 基础语法

## 基础

### 词法结构

#### 定义

javascript由三部分组成：ECMAScript、DOM和BOM<br>
ECMAScript由ECMA-262定义，提供核心语言功能（ECMA是欧洲计算机制造商协会）<br>
DOM(Document Object Model)文档对象模型，提供访问和操作网页内容的方法和接口<br>
BOM(Browser Object Model)浏览器对象模型，提供与浏览器交互的方法和接口

#### 保留字

保留字包括关键字、未来保留字、空字面量和布尔值字面量
```txt
break      do         instanceof        typeof
case       else       new               var
catch      finally    return            void
continue   for        switch            while
debugger   function   this              with
default    if         throw             delete
in         try
```
```txt
class      enum       extends       super
const      export     import
```

javascript预定义了很多全局变量和函数，应该避免把它们的名字用做标识符名
```txt
arguments Array Boolean Date decodeURI decodeURIComponent encodeURI
encodeURIComponent Error eval EvalError Function Infinity isFinite
isNaN JSON Math NaN Number Object parseFloat parseInt RangeError
ReferenceError RegExp String SyntaxError TypeError undefined URIError
```

#### 空白

javascript将如下这些识别为空白字符WhiteSpace

```txt
\u0009    水平制表符         <TAB>
\u000B    垂直制表符         <VT>
\u000C    换页符            <FF>
\u0020    空格符            <SP>
\u00A0    非中断空格符       <NBSP>
\uFEFF    字符序标记
```

javascript将如下字符识别为行终止符LineTerminator

```txt
\u000A    换行符        <LF>
\u000D    回车符        <CR>
\u2028    行分隔符      <LS>
\u2029    段落分割符     <PS>
```

#### 分号【重点】

javascript并不是在所有换行处都填补分号，只有在缺少了分号就无法正确解析代码时，javascript才会填补分号。换句话说，如果当前语句和随后的非空格字符不能当成一个整体来解析的话，javascript就在当前语句行结束处填补分号。

```js
var a
a
=
3
console.log(a)
// ==>
var a;
a = 3;
console.log(a);
```

这种语句的分隔规则会导致一些意想不到的情形

```js
var y = x + f
(a+b).toString
// ==>
var y = x + f(a+b).toString
```

因此，为了能让上述代码解析成两条不同的语句，必须手动填写行尾的显式分号<br>
【**重点**】**通常来讲，如果一条语句以'('、'['、'/'、'+'、'-'等符号开始，那么它极有可能和前一条语句合一起解析**

如果当前语句和下一行语句无法合并解析，javascript会在第一行后填补分号，这是通用规则，但有两个例外<br>
第一个例外是涉及return、break、continue、throw语句的场景中。如果这四个关键字后紧跟着换行，javascript会在换行处填补分号<br>
第二个例外是在涉及++和--运算符时，如果将其用作后缀表达式，它和表达式应该同一行。否则，行尾将填补分号，同时++或--将作为下一行代码的前缀操作符并与之一起解析

虽然分号不是必须的，但最好不要省略它，因为加上分号可以避免很多错误，代码行结尾处没有分号会导致压缩错误。加上分号也会在某些情况下增进代码的性能，因为这样解析器就不必再花时间推测应该在哪里插入分号了

#### 大小写

在HTML中，这些标签和属性名可以使用大写也可以使用小写，而在javascript中则必须是小写

### 变量和标识符

#### 变量声明

使用var语句重复声明变量是合法且无害的，如果重复声明且带有赋值操作，相当于重新赋值<br>
如果试图读取一个没有声明的变量的值，javascript会报错<br>
声明后不初始化的变量是undefined<br>
javascript允许遗漏声明，即直接对变量赋值而无需事先声明，赋值操作将自动声明该变量。但是，在ECMAScript5严格模式中，给一个没有声明的变量赋值会报错<br>

变量在声明之前甚至已经可用。javascript这个特性被非正式地称为**声明提升**(hoisting)，javascript函数里声明的所有变量(**不涉及赋值**)都被提前到函数体的顶部<br>
除了变量提升，**函数也被提升**

**当声明一个javascript全局变量时，实际上是定义了全局对象window的一个属性**<br>
**当使用var声明一个变量时，创建的这个变量是不可配置的，也就是说这个变量无法通过delete运算符删除**<br>
**如果没有使用严格模式并给一个未声明的变量赋值的话，javascript会自动创建一个全局变量，以这种方式创建的变量是全局对象的正常的可配置属性，并可以删除它们**<br>
【注意】IE8-浏览器下，如果删除window属性时，不论该属性是如何创建的，都会报错
```js
window.fakevar1 = 10;
this.fakevar2 = 20;
var fakevar3 = 30;
fakevar4 = 40;
console.log(delete fakevar1);//IE8-浏览器报错，其他浏览器返回true
console.log(delete fakevar2);//IE8-浏览器报错，其他浏览器返回true
console.log(delete fakevar3);//所有浏览器都返回false
console.log(delete fakevar4);//所有浏览器都返回true
```

#### 变量作用域

变量的作用域(scope)是程序源代码中定义这个变量的区域。作用域分为**全局作用域**和**函数作用域**(又叫局部作用域)两种。<br>
全局作用域是最外围的一个执行环境，在web浏览器中，全局执行环境被认为是window对象。所有全局变量和函数都是作为window对象的属性和方法创建的。全局变量拥有全局作用域，在javascript代码中的任何地方都是有定义的。全局作用域直到应用程序退出例如关闭网页或浏览器时才会被销毁<br>
在函数内声明的变量只在函数体内有定义。它们是局部变量，作用域是局部性的。函数参数也是局部变量，它们只在函数体内有定义。函数作用域中的所有代码执行完毕后，该作用域被销毁，保存在其中的所有变量和函数定义也随之销毁<br>
如果省略var操作符，可以在函数中创建一个全局变量<br>
虽然省略var操作符可以定义全局变量，但并不推荐。在局部作用域中定义的全局变量很难维护，而且如果有意地忽略了var操作符，也会由于相应变量不会马上就有定义而导致不必要的混乱，给未经声明的变量赋值在严格模式下会导致抛出ReferenceError错误

### 属性和变量

https://www.cnblogs.com/xiaohuochai/p/4851210.html 【小知识点】

【1】以下这种情况是常见情况，会弹出“测试内容” ``<input type="button" value="测试内容" onclick = "alert(value)">``<br>
【2】心想，这种情况下value找不到，沿着作用域链应该到document了，应该弹出“123"，但情况是弹出空 ``<script>var value=123;</script><input type="button" onclick = "alert(value)">``<br>
【3】value确实是找不到吗？是找的到的。在调试工具下，查看了this的属性，里面有一条是 ‘ value:"" ’ 。它的值就是空``<input type="button" onclick = "console.log(this)">``。所以value作为input的属性一直存在，不存在找不到的情况，赋值了value就是被赋的值，没赋值value就是空<br>
【4】看一例拓展，value伪装兄弟val。val先在input对象上找，没有找到，沿着作用域链在document对象上找，找到弹出123``<script>var val=123;</script><input type="button" onclick = "console.log(val)">``<br>
【6】还有就是不论val=123被写在前面，而是后面，都能访问到，因为onclick只是事件绑定，等事件真正发生的时候页面早就解析了后面var val=123的代码了。所以不会出错``<input type="button" onclick = "console.log(val)"><script>var val=123;</script>``<br>
【6】是这样吗？但其实把声明放在后面是不靠谱的，如果之间还有其他``<script>``代码，由于网络原因无法访问到，由于``<script>``有阻塞作用，会阻塞后面代码，会报错``<input type="button" onclick = "alert(val)"><script src="http://www.qq.com/test.js"></script><script>var val=123;</script>``<br>
【7】最后一个拓展。如果是一个表单元素，则它的作用域链是 this -> this.form -> document 。先从``<input type="button">``对象中寻找username属性，发现没有。然后找到它的父级form，form的username可以找到``<input type="text">``元素(表单元素可以直接通过name值访问)，然后找到其value值123后弹出。
```html
<form action="#">
    <input type="text" name="username" value="123">
    <input type="button" value="btn" onclick = "alert(username.value)">
</form>
```

### 表达式

一般地，关于javascript基础语法，人们听得比较多的术语是操作符和语句。但是，其实还有一个术语经常使用，却很少被提到，这就是javascript表达式(expression)。本文将详细介绍javascript表达式，表达式分为原始表达式和复杂表达式

#### 原始表达式(primary exression)

原始表达式是表达式的最小单位——它不再包含其他表达式<br>
原始表达式分为字面量、关键字和变量；详细来说包括this关键字、标识符引用、字面量引用、数组初始化、对象初始化和分组表达式

```js
// this关键字和标识符
this;
i;
sum;
// 字面量
null;
undefined;
true;
false;
1;
'abc';
/pattern/;
// 数组和对象初始化
[];
[1,2,3];
{};
{a:1};
// 分组表达式实际上就是括号，用于重写运算符的优先级
```

#### 复杂表达式(MemberExpression)

复杂表达式由原始表达式和操作符(operator)组合而成，包括属性访问表达式、对象创建表达式和函数表达式

### 严格模式

#### 使用

1. 整个脚本启用严格模式，在顶部执行："use strict";
2. 在指定函数中执行严格模式，在函数体第一行："use strict"
3. 不支持strict模式的浏览器把"use strict"当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式
4. 支持严格模式的浏览器包括IE10+、Firefox4+、safari12+、opera12+、chrome

#### 规则

1. 变量
    1. 不允许意外创建全局变量
    2. 不能对变量调用delete操作符
2. 对象
    1. 不能为只读属性赋值
    2. 不能为不可配置的属性使用delete操作
3. 函数
    1. 参数必须唯一
    2. 修改形参不会反映到arguments中
    3. 不允许使用arguments.callee和arguments.caller
4. 不允许eval()在包含上下文中创建变量或函数
5. 不允许使用eval和arguments作为标识符，也不允许读写他们的值
6. 不允许this值为null或undefined
7. 不允许使用with语句
8. 不允许使用八进制字面量

```js
"use strict";
// 2.1
var person = { name: 'cook' };
Object.defineProperty(person, 'name', { writable: false });
person.name = 'Nicholas';  // error
// 2.2
var person = { name: 'cook' };
Object.defineProperty(person, 'name', { configurable: false });
delete person.name;
// 3.2
function showValue(value){
    value = "Foo";
    alert(arguments[0]);
    // 非严格模式:"Foo"
    // 严格模式:"Hi"
}
showValue("Hi");
```

### 内存管理及垃圾回收

不管什么程序语言，内存生命周期基本是一致的：首先，分配需要的内存；然后，使用分配到的内存；最后，释放其内存。而对于第三个步骤，何时释放内存及释放哪些变量的内存，则需要使用垃圾回收机制。本文将详细介绍javascript中的内存管理和垃圾回收

#### 分配内存

为了不让程序员费心分配内存，JavaScript 在定义变量时就完成了内存分配<br>
因为原始值占据空间固定，是简单的数据段，为了便于提升变量查询速度，将其存储在栈(stack)中<br>
由于复杂值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此其存储在堆(heap)中，存储在变量处的值是一个指针，指向存储对象的内存处

#### 释放内存

Javascript内嵌了垃圾收集器，用来跟踪内存的分配和使用，以便当分配的内存不再使用时，自动释放它。垃圾收集器会按照固定的时间间隔，或代码执行中预定的收集时间，周期性地执行这一操作<br>
局部变量只在函数执行的过程中存在。而在这个过程中，会为局部变量在栈(或堆)内存上分配相应的空间，以便存储它们的值。然后在函数中使用这些变量，直到函数执行结束。此时，局部变量就没有存在的必要了。因此可以释放它们的内存以供将来使用。在这种情况下，很容易判断变量是否还有存在的必要；但并非所有情况下都这么容易就能得出结论<br>
垃圾收集器必须跟踪哪个变量有用哪个变量无用，对于不再有用的变量打上标记，以备将来收回其所占用的内存。用于标识无用变量的策略通常有标记清除和引用计数两种

#### 引用计数法

最简单的垃圾收集算法。此算法把“对象是否不再需要”简化定义为“对象有没有其他对象引用到它”。如果没有引用指向该对象（零引用），对象将被垃圾回收机制回收。

【循环引用】

【IE低版本】IE8-浏览器中，有一部分对象并不是原生javascript对象，例如，其BOM和DOM中的对象就是使用c++以COM(component Object Model 组件对象模型)对象的形式实现，而COM对象的垃圾回收机制采用的就是引用计数策略。该方式常常造成对象被循环引用时内存发生泄漏

#### 标记清除法

javascript中最常用的垃圾收集算法是标记清除(mark-and-sweep)，这个算法把“对象是否不再需要”简化定义为“对象是否可以到达”。如果对象不可到达，对象将被垃圾回收机制回收<br>
大多数浏览器实现使用的都是标记清除式的垃圾收集策略，只不过垃圾收集的时间互有不同<br>
这个算法假定设置一个叫做根（root）的对象（在Javascript里，根是全局对象）。定期的，垃圾回收器将从根开始，找所有从根开始引用的对象，然后找这些对象引用的对象……从根开始，垃圾回收器将找到所有可以到达的对象和所有不能到达的对象<br>
该算法称为标记清除，是因为分为标记(mark)和清除(sweep)两个阶段<br>
在标记阶段，垃圾回收器会从根对象开始遍历，每一个可以从根对象访问到的对象都会被添加一个标识，于是这个对象就被标识为可到达对象<br>
在清除阶段，垃圾回收器会对内存从头到尾进行线性遍历，如果发现有对象没有被标识为可到达对象，那么就将此对象占用的内存回收，并且将原来标记为可到达对象的标识清除，以便进行下一次垃圾回收操作

#### 性能问题

垃圾收集器是周期性运行的，而且如果为变量分配的内存数量很可观，那么回收工作量也是相当大的。在这种情况下，确定垃圾收集时间间隔是一个非常重要的问题<br>
IE的垃圾收集器是根据内存分配量运行的。具体一点说，就是256个变量，4096个对象(或数组)字面量和数组元素(slot)或者64kb的字符串。达到上述任何一个临界值，垃圾收集器就会运行<br>
这种实现方式的问题在于，如果一个脚本中包含那么多变量，那么该脚本很可能会在其生命周期中一直保有那么多的变量。而这样一来，垃圾收集器就不得不频繁地运行。结果，由此引发的严重性能问题促使IE7重写了其垃圾收集例程<br>
IE7的javascript引擎的垃圾收集例程改变了工作方式：触发垃圾收集的变量分配、字面量和数组元素的临界值被调整为动态修正。IE7中的各项临界值在初始时与IE6相等。如果垃圾收集例程回收的内存分配量低于15%，则变量、字面量和数组元素的临界值就会加倍。如果例程回收了85%的内存分配量，则将各种临界值重置回默认值。这样，极大地提升了IE在运行包含大量javascript的页面时的性能<br>
事实上，在有的浏览器中可以触发垃圾收集过程。在IE中，调用window.CollectGarbage()方法会立即执行垃圾收集

#### 优化内存占用

使用具备垃圾收集机制的javascript的主要问题在于：分配给web浏览器的可用内存数量通常要比分配给桌面应用程序的少，目的是防止运行javascript的网页耗尽全部系统内存而导致系统崩溃。内存限制问题不仅会影响给变量分配内存，同时还会影响调用栈以及在一个线程中能够同时执行的语句数量<br>
因此，确保占用最少的内存可以让页面获得更好的性能。而优化内存占用的最佳方式是：为执行中的代码只保存必要的数据。一旦数据不再有用，最好通过将其值设置为null来释放其引用，这种做法叫解除引用(dereferencing)。这一做法适用于大多数全局变量和全局对象的属性，局部变量会在它们离开执行环境时自动被解除引用<br>
不过，要注意的是，解除一个值的引用并不意味着自动回收该值所占用的内存。解除引用的真正作用是让值脱离执行环境，以便垃圾收集器下次运行时将其回收

### 动态脚本

动态脚本是指在页面加载时不存在，但将来的某一时刻通过修改DOM动态添加的脚本。和操作HTML元素一样，创建动态脚本也有两种方式：插入外部文件和直接插入内部javascript代码。下面将详细介绍这两种情况

#### 外部脚本

```html
<div id="box">测试文字</div>
<button id="btn">动态添加脚本</button>
<script>
function loadScript(url) {
    loadScript.mark = 'load';
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}
btn.onclick = function() {
    if (loadScript.mark != 'load') {
        loadScript("js/script.js");
    }
}
</script>
```
```js
// script.js里面的内容
box.style.color = "red";
```

#### 内部脚本

```js
<div id="box">测试文字</div>
<button id="btn">动态添加样式</button>
<script>
function loadScript(str) {
    loadScript.mark = 'load';
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = str;
    document.body.appendChild(script);
}
btn.onclick = function(){
    if (loadScript.mark != 'load') {
        loadScript("box.style.color = 'red'");
    }
}
</script>
```

在标准浏览器下，上面代码可以正常运行。但是，在IE8-浏览器下却报错。这是因为IE8-浏览器将``<script>``元素视为一个特殊的元素，不允许DOM访问其子节点，使用appendChild()方法或innerHTML属性都会报错

#### 兼容写法

动态插入内部脚本存在兼容问题，可使用``<script>``元素的text属性替代innerHTML属性来指定javascript代码
```js
<div id="box">测试文字</div>
<button id="btn">动态添加样式</button>
<script>
function loadScript(str) {
    loadScript.mark = 'load';
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.text = str;
    document.body.appendChild(script);
}
btn.onclick = function() {
    if (loadScript.mark != 'load') {
        loadScript("box.style.color = 'red'");
    }
}
</script>
```

## 运算符

【空闲】

[javascript运算符——条件、逗号、赋值、()和void运算符](https://www.cnblogs.com/xiaohuochai/p/5669107.html)

46个运算符总共分为14级的优先级，从高到低依次是：
```txt
1  ++ -- - + ~ ! delete typeof void
2  * / %
3  + -
4  << >> >>>
5  < <= > >= instanceof in
6  == != === !==
7  &
8  ^
9  |
10 &&
11 ||
12 ?:
13 = *= /= %= += -= &= ^= |= <<= >>= >>>=
14 ,
```

在数字Number类型中，有一个值比较特殊，是NaN(not a number)，它与任何值都不相等；此外，数字Number类型中存在着+0和-0，虽然其符号不同，但值相等
```js
console.log(NaN === NaN);//false
console.log(+0 === -0);//true
```
恒不等运算符(!==)又叫严格不等于运算符，操作数的比较过程与恒等运算符相同，结果取反。如果'==='的比较结果是true，则'!=='的比较结果是false；如果'==='的比较结果是false，则'!=='的比较结果是true

当两个操作数类型不同时，相等运算符'=='会遵守如下规则：<br>
【1】如果一个值是对象类型，另一值是原始类型，则对象类型会先使用valueOf()转换成原始值，如果结果还不是原始值，则再使用toString()方法转换，再进行比较。【注意】日期类只允许使用toString()方法转换为字符串。类似地，时间Date对象进行加法运算时使用toString()转换为字符串，而在其他数学运算，包括减法、乘法、除法、求余等运算中，都是使用Number()转换函数将时间Date对象使用valueOf()转换为数字<br>
【2】在对象转换为原始值之后，如果两个操作数都是字符串，则进行字符串的比较<br>
【3】在对象转换为原始值之后，如果至少有一个操作数不是字符串，则两个操作数都将通过Number()转型函数转换成数字进行数值比较。【注意】如果一个值是null，另一个值是undefined，则返回true。虽然Number(null)是0，但null和0并不相等。【注意】空字符串或空格字符串会转成0。

**大于、小于运算符也是与相等运算符一样的运算规则**。

【注意】在原生对象中，使用valueOf()方法转换为原始值的，只有转换为数字Number类型的时间Date对象，其他对象都通过toString()方法转换为字符串。<br>
【注意】在字母表中大写字母在小写字母的前面，所以大写字母 < 小写字母；但字符串String对象有一个字符串比较的方法localeCompare()方法会考虑自然语言的排序情况，把'B'排在'a'的后面，如果字符串在字母表中排在其参数之前时，则该方法返回一个负数；字符串在字母表中排在其参数之后时，返回一个正数<br>
【注意】在等于操作符中，时间Date()对象只允许通过toString()方法转换为字符串，而不允许通过valueOf()方法转换为数字；而在大于操作符中，时间Date()对象允许优先使用valueOf()方法转换为数字<br>
【注意】null == 0的结果为false，这是因为javascript将null == undefined的结果设为true。在大于运算中，null和undefined进行Number()转型函数转换分别转换为0和NaN

对于数字和字符串来说，加号运算符和比较运算符的行为有所不同，加号运算符更偏爱字符串，如果它的一个操作数是字符串，就进行字符串连接。而比较运算符则更偏爱数字，只有在两个操作数都是字符串时，才进行字符串的比较

ECMAScript中的所有数值都以IEEE-754 64位格式存储，但位操作符并不直接操作64位的值，而是以32位带符号的整数进行运算的，并且返回值也是一个32位带符号的整数。这种位数转换使得在对特殊的NaN和Infinity值应用位操作时，这两个值都会被当成0来处理。

【必要】[位运算符](https://www.cnblogs.com/xiaohuochai/p/5668004.html)

逻辑非操作符由一个叹号(!)表示，可以应用于ECMAScript中的任何值。无论这个值是什么数据类型，这个操作符都会返回一个布尔值。逻辑非操作符首先会将它的操作数转换成一个布尔值，然后再对其求反。逻辑非对操作数转为布尔类型的转换类型与Boolean()转型函数相同，只不过最后再将其结果取反。而如果同时使用两个逻辑非操作符，实际上就会模拟Boolean()转型函数的行为

**除了false、undefined、null、+0、-0、NaN、''这7个假值，其余都是真值**

逗号运算符还可以用于赋值，在用于赋值时，逗号运算符总是返回表达式中的最后一项

void是一元运算符，它出现在操作数之前，操作数可以是任意类型，操作数会照常计算，但忽略计算结果并返回undefined。由于void会忽略操作数的值，因此在操作数具有副作用的时候使用void来让程序更具语义。<br>
【作用一】替代undefined：由于undefined并不是一个关键字，其在IE8-浏览器中会被重写，在高版本函数作用域中也会被重写；所以可以用void 0/void(0)来替换undefined<br>
【作用二】客户端URL：这个运算符最常用在客户端URL——javascript:URL中，在URL中可以写带有副作用的表达式，而void则让浏览器不必显示这个表达式的计算结果。例如，经常在HTML代码中的\<a>标签里使用void运算符``<a href="javascript:void window.open();">打开一个新窗口</a>``<br>
【作用三】阻止默认事件：阻止默认事件的方式是给事件置返回值false``/*一般写法*/<a href="http://example.com" onclick="f();return false;">文字</a>``。使用void运算符可以取代上面写法``<a href="javascript:void(f())">文字</a>``

## 语句

【空闲】

[被嫌弃的eval和with](https://www.cnblogs.com/xiaohuochai/p/5724899.html)

## 规范

【空闲】

# 数据类型

## 基础

### 15种原生对象类型系统综述

原生对象分为两类：原始类型(primitive type)和对象类型(object type)。原始类型又分为两类，一类是空值，一类是包装对象；对象类型也可以分为两类：一类是构造器对象，一类是单体内置对象

标准类型：Undefined Null Object Boolean String Number<br>
标准内置对象：Object Boolean String Number   Function Array Date RegExp Error Math JSON 全局对象<br>
构造器：Object Boolean String Number   Function Array Date RegExp Error<br>
对象：Math JSON 全局对象 arguments<br>
原生对象：Undefined Null Object Boolean String Number   Function Array Date RegExp Error Math JSON 全局对象 arguments<br>

### 原始值和复杂值

**原始值**是表示javascript中可用的数据或信息的最底层形式或最简单形式。原始类型的值被称为原始值，是因为它们是不可细化的。也就是说，数字是数字，字符是字符，布尔值则是true或false，null和undefined就是null和undefined。这些值本身很简单，不能表示由其他值组成的值<br>
原始值明显的特征是**不可更改**，任何方法都无法更改一个原始值。**栈存储**，**按值传递**

**复杂值**可以由很多不同类型的javascript对象组成。复杂对象其在内存中的大小是未知的，因为复杂对象可以包含任何值，而不是一个特定的已知值。对象和原始值不同，它们是可变的，它们的值是**可修改的**。**堆存储**，**按引用传递**

### 包装对象

#### 定义

在javascript中，“一切皆对象”，就连三种原始类型的值(数值、字符串、布尔值)，在一定条件下，也会自动转为对象，也就是原始类型的“包装对象”<br>
包装对象是特殊的引用类型。每当读取字符串、数字或布尔值的属性或方法时，创建的临时对象称做包装对象<br>
为了便于引用字符串的属性和方法，javascript将字符串值通过调用new String()的方式转换成对象，这个对象继承了字符串的属性和方法，并被用来处理属性和方法的引用。一旦属性或方法引用结束，这个新创建的对象就会销毁。数字或布尔值也类似<br>
【注意】实际上并不一定创建或销毁这个临时对象，然而整个过程看起来是这样的
```js
var s1 = 'some text';
var s2 = s1.substring(2);
//上述过程看起来发生了三个步骤
var s1 = new String('some text'); //(1)创建String类型的一个实例
var s2 = s1.substring(2); //(2)在实例上调用指定的方法
s1 = null; //(3)销毁这个实例
```

#### 生存期

引用类型和基本包装类型的主要区别是对象的生存期。使用new操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味着不能在运行时为基本类型值添加属性和方法

#### 显示创建

可以通过new操作符显式创建包装对象，但应该在绝对必要的情况下再这样做。因为这种做法，很容易让人分不清是在处理基本类型还是引用类型的值。有两种方式显式创建包装类型的方式:<br>
【1】Object方式
```js
var s = new Object('abc');
var b = new Object(true);
var n = new Object(123);
```
【2】构造函数方式
```js
var s = new String('abc');
var b = new Boolean(true);
var n = new Number(123);
```

#### 转型函数

直接调用转型函数与使用new调用基本包装类型的构造函数是不一样的，使用转型函数返回的是基本类型值
```js
var s = 'abc';
var s1 = String(s);
var s2 = new String(s);
var s3 = new Object(s);
console.log(typeof s,typeof s1,typeof s2,typeof s3);  //string string object object
```

#### 比较函数

等于运算符'=='将原始值和其包装对象视为相等，因为其中一个操作数是对象，需要调用对象的valueOf()方法，Number对象、Boolean对象和String对象的valueOf()方法都返回其对应的原始值<br>
全等运算符'==='将原始值和其包装对象视为不相等。因为全等运算符要比较类型和值，原始值和其包装对象的类型不同

## 基本类型

### Undefined和Null

最开始时，null是一个表示”无”的对象，转为数值时为0；undefined是一个表示”无”的原始值，转为数值时为NaN。但是，目前null和undefined基本是同义的，都是原始类型，且只有一些细微的差别。<br>
对于尚未声明过的变量只能执行一项操作，使用typeof操作符检测其数据类型，但严格模式下会导致错误 ``var test; typeof(test); // undefined``

undefined【出现场景】
1. 已声明未赋值的变量
2. 获取对象不存在的属性
3. 无返回值的函数的执行结果
4. 函数的参数没有传入
5. void(expression)

【类型转换】
```js
Boolean(undefined)  // false
Number(undefined)  // NaN
String(undefined)  // 'undefined'

Boolean(null)  // false
Number(null)  // 0
String(null)  // 'null'
```

【类型鉴别】
```js
console.log(typeof(undefined))  // 'undefined'
console.log(typeof(null))  // 'object' ==> 不行
console.log(null === null)  // true 可行
```

不同的对象在底层都表示为二进制，在javascript中二进制前三位都为0会被判断为object类型，null的二进制表示是全0，所以执行typeof时返回'object'<br>
实际上，因为undefined和null不是构造器类型，所以它们没有任何的属性和方法，使用.和[]来存取这两个值的成员或方法都会产生一个类型错误

### Boolean布尔类型

转换成false的值称为假值(falsy value)，这7个值包括undefined、null、+0、-0、NaN、false、""(空字符串)

【注意】在Number()方法中空字符串和空白字符串都转换为0，而在Boolean方法中，空字符串""转换为false，而空白字符串" "转换为true

【注意】所有对象(包括空对象)的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true
```js
console.log(Boolean(new Boolean(false)))  // true
```

Boolean对象是与布尔值对应的包装类型，继承了Object对象的通用方法toString()、toLocaleString()、valueOf()这三个方法

### Number数字类型

#### 定义

javascript只有一种数字类型，它在内部被表示为64位的浮点数，和java的double数字类型一样。与其他大多数编程语言不同的是，它没有分离出整数类型，所以1和1.0的值相同。这提供了很大的方便，避免了一大堆因数字类型导致的错误。javascript采用IEEE754格式来表示数字，不区分整数和浮点数，javascript中的所有数字都用浮点数值表示。由于浮点型数值需要的内存空间是保存整数值的两倍，因此javascript会不失时机地将浮点数值转换成整数值，若小数点后没有跟任何数字或者浮点值本身表示的就是一个整数，这个数值会作为整数值来保存。当一个数字直接出现在javascript程序中时，称之为数字字面量(numeric literal)。而当Number()使用new操作符用做构造函数时，称之为Number对象。

#### 整数

javascript的整数表示共有四种字面量格式是十进制、二进制、八进制、十六进制。但在进行算术计算时，所有以二进制、八进制和十六进制表示的数值最终都将被转换成十进制数值。<br>
【注意】由于某些javascript的实现不支持八进制字面量，且八进制字面量在严格模式下是无效的，会导致javascript抛出错误。所以尽量不使用八进制字面量。

```js
0b1
010
10
0xa
```

#### 浮点数

由于javascript采用IEEE754格式表示数字，浮点数不是精确值，所以涉及浮点数的比较和运算时要特别小心。【注意】虽然小数点前面可以没有整数，但不推荐

#### 科学计数法

对于极大或者极小的数，可以用科学计数法e来表示的浮点数值来表示。科学计数法允许字母e或E的后面，跟着一个整数，表示这个数值的指数部分。以下两种情况，javascript会自动将数值转为科学计数法表示

1. 小于1且小数点后面带有6个0以上的浮点数值
```js
0.0000003 // 3e-7
0.000003 // 0.000003
```
2. 整数位数字多于21位
```js
1234567890123456789012 //1.2345678901234568e+21
1234567890123456789012.1 //1.2345678901234568e+21
123456789012345678901 //123456789012345680000
```

#### 数值精度

根据国际标准IEEE 754，javascript浮点数的64个二进制位，从最左边开始，是这样组成的
> 第1位：        符号位，0表示正数，1表示负数<br>
> 第2位到第12位： 储存指数部分<br>
> 第13位到第64位：储存小数部分（即有效数字）<br>

符号位决定了一个数的正负，指数部分决定了数值的大小，小数部分决定了数值的精度。IEEE 754规定，有效数字第一位默认总是1，不保存在64位浮点数之中。也就是说，有效数字总是1.xx...xx的形式，其中xx..xx的部分保存在64位浮点数之中，最长可能为52位。也就是说，有效数字总是1.xx...xx的形式，其中xx..xx的部分保存在64位浮点数之中，最长可能为52位。因此，javascript提供的有效数字最长为53个二进制位。精度最长为53个二进制位，意味着绝对值小于2的53次方的整数，即-(2<sup>53</sup>-1)到2<sup>53</sup>-1，都可以精确表示。所以换算成十进制，javascript数字最高精度是16位(若整数部分为0，则表示小数点后16位；若整数部分不为0，则表示整体保留16位)。

#### 数值范围

根据标准，64位浮点数的指数部分的长度是11个二进制位，意味着指数部分的最大值是2047（211-1）。
分出一半表示负数，则javascript能够表示的数值范围为2<sup>1024</sup>到2<sup>-1023</sup>，超出这个范围的数无法表示。
javascript中能表示的最大值是+-1.79769\*10<sup>308</sup>，而javascript能表示的最小值是+-5*10<sup>-324</sup>。
javascript能够表示的整数范围是-253到253。如果超过了此范围的整数，无法保证低位数字的精度。javascript中的最大值保存在Number.MAX_VALUE中，而最小值保存在Number.MIN_VALUE

如果数字超过最大值，javascript会返回Infinity，这称为正向溢出(overflow)；如果等于或超过最小负值-1023（即非常接近0），javascript会直接把这个数转为0，这称为负向溢出(underflow)。如下所示，实际情况并非全部如此 ``Number.MAX_VALUE+1 === Number.MAX_VALUE;//true``。当数字最大值+1时，结果并不等于Infinity，而是仍然等于最大值。这是因为精度受限，javascript中的存储位置没有多余位置去存储个位数1。当运算数和数字最大值保持在相同精度维度上时，才可与数字最大值发生运算。
```js
Number.MAX_VALUE+1e291;  // 1.7976931348623157e+308
Number.MAX_VALUE+1e292;  // Infinity
```
类似地，与数字最小值的运算也有相似情况
```js
Number.MIN_VALUE + 1;  // 1
Number.MIN_VALUE - 3e-324;  // 0
Number.MIN_VALUE - 2e-324;  // 5e-324
```

#### 特殊数值

javascript提供了几个特殊数值，包括Number.MAX_VALUE、Number.MIN_VALUE、Number.POSITIVE_INFINITY、Number.NEGATIVE_INFINITY、Number.MAX_SAFE_INTEGER、Number.MIN_SAFE_INTEGER、Number.NaN、+0、-0共9个。其中，前7个特殊数值是Number对象的属性

Number.MAX_SAFE_INTEGER表示最大整数(253-1)，Number.MIN_SAFE_INTEGER表示最小整数-(253-1)

**Infinity**参与的运算结果只能是其本身、0或NaN
```js
2 + Infinity;//Infinity
2 / Infinity;//0
Infinity / 2;//Infinity
Infinity - Infinity;//NaN
Infinity + Infinity;//Infinity
Infinity / Infinity;//NaN
Infinity * Infinity;//Infinity
```
可以通过isFinite()来确定一个数值是不是有穷的，包含着隐式类型转换Number()。如果是+-Infinity或NaN时返回false，否则为true

**NaN**(not a number)表示非数字，NaN与任何值都不相等，包括NaN本身，且任何涉及NaN的操作都会返回NaN。isNaN()来判断这个数字是不是NaN，包含着隐式类型转换Number()。判断NaN更可靠的方法是，利用NaN是javascript之中唯一不等于自身的值这个特点，进行判断

在javascript内部，实际上存在2个0：一个是+0，一个是-0。它们与0是等价的：+0 == 0 == -0。一般地，+0和-0都会被当做0来看待，但是+0或-0当作分母，返回的值是不相等的
```js
console.log(1/+0);//Infinity
console.log(1/-0);//-Infinity
console.log((1/+0) === (1/-0));//false
```

#### 转成数值

有3个函数可以把非数值转换成数值：Number()、parseInt()和parseFloat()。其中Number()可以将任意类型的值转化成数值，而parseInt()和parseFloat()只应用于字符串向数字的转换

Number()函数解析字符串时会识别出字符串的前置空格并去掉

1. 若字符串只包含十进制或十六进制数字，则转成十进制的数字
    1. Number()不识别八进制数字的字符串，会按照十进制数字处理
    2. 字符串'1.2.'不会报错，但数字1.2.会报错
2. 若字符串为空字符串或空格字符串，则转成0
3. 其他情况的字符串，则转成NaN

Number()函数解析对象时，会按照以下步骤进行处理

1. 如果valueOf()方法返回的还是对象，则调用对象的toString()方法，如果返回原始类型的值，则对该值使用Number()函数
2. 如果toString()方法返回的依然是对象，则结果是NaN

由于只有时间Date()对象返回的是原始类型的值数字，所以Number(new Date())返回现在到1970年1月1日00:00:00的数值类型的毫秒数
```js
Number(new Date())//1465976459108
Number();//0
Number([10]);//10
Number([1,2]);//NaN
Number(其他对象);//NaN
```

* parseInt()专门用于把字符串转换成整数。在转换字符串时，会忽略字符串前面的空格，直到找到第一个非空格字符。如果第一个字符不是数字字符或者负号，parseInt()就会返回NaN。如果是，则继续解析，直到解析完成或者遇到非数字字符。
* 规则与Number类似，但可以识别出各种进制的数字，输出的是运算后的十进制的数字。
* 对于那些会自动转为科学计数法的数字，parseInt会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。
* parseInt()方法还可以接受第二个参数（2到36之间），表示被解析的值的进制，返回该值对应的十进制数。默认情况下，parseInt的第二个参数为10，即默认是十进制转十进制。如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。如果第二个参数是0、undefined和null，则直接忽略。
* parseInt()是专门用来处理字符串转换数字的，parseInt处理非字符串和数字类型时输出NaN。但是，实际上parseInt()包含着隐式的toString()方法，所以parseInt([数字或字符串])输出对应的数字

* parseFloat()专门用于字符串转换浮点数。同样地，解析时会忽略字符串前面的空格，直到找到第一个非空格字符，然后一直解析到字符串末尾或一个无效的浮点数字字符为止
* 如果字符串符合科学计数法，则会进行相应的转换
* parseFloat()可以识别不同进制的数字，但只能解析十进制字符串
* parseFloat()是专门用来处理字符串转换浮点数的，parseFloat处理非字符串和数字类型时输出NaN。但是，实际上parseFloat()包含着隐式的toString()方法，所以parseFloat([数字或字符串])输出对应的数字

#### 实例方法

关于Number()对象的实例方法总共有6个，分为两类。包括toString()、toLocalString()、valueOf()这3种对象通用方法和toFixed()、toExponential()、toPrecision()这3种改变数值显示形式并转换为字符串的方法

* valueOf()方法返回对象的数字字面量
* toString()方法将数字转换为字符串
* toLocalString()方法将数字转换为本地惯例格式化数字的字符串

【注意】如果数字不加括号，点会被javascript引擎解释成小数点，从而报错
```js
console.log(typeof 1.valueOf(),1.valueOf());//报错
console.log(typeof 1.toString(),1.toString());//报错
console.log(typeof 1.toLocaleString(),1.toLocaleString());//报错

console.log(typeof (1).valueOf(),(1).valueOf());//number 1
console.log(typeof (1).toString(),(1).toString());//String '1'
console.log(typeof (1).toLocaleString(),(1).toLocaleString());//String '1'
```
除了为数字加上括号，还可以在数字后面加两个点，javascript会把第一个点理解成小数点，把第二个点理解成调用对象属性，从而得到正确结果

* toFixed()方法按照指定的小数位返回数值四舍五入后的字符串表示(常用于处理货币值)。【注意】toFixed()里的参数只接受0-20，若不传参或参数为undefined则相当于参数是0
* toExponential()方法返回数值四舍五入后的指数表示法(e表示法)的字符串表示，参数表示转换后的小数位数。【注意】toExponential()方法里的参数只接受0-20，但与toFxied()不同的是，若不传参或参数为undefined，则保留尽可能多的有效数字；若参数是0表示没有小数部分
* toPrecision()方法接收一个参数，即表示数值的所有数字的位数(不包括指数部分)，自动调用toFixed()或toExponential()。【注意】toPrecision()里的参数只接受1-21，若不传参或参数为undefined则相当于调用toString()方法
* 【注意】toFixed()、toExponential()、toPrecision()这三个方法在小数位用于四舍五入时都不太可靠，跟浮点数不是精确储存有关

### Math对象

#### 常量

【对数】
```js
Math.E           // 自然对数的底数，即常量e的值(约等于2.71828)
Math.LN2         // 2的自然对数(约等于0.693)
Math.LN10        // 10的自然对数(约等于2.303)
Math.LOG2E       // 以2为底e的对数(约等于1.443)
Math.LOG10E      // 以10为底e的对数(约等于0.434)
```

【派值】
```js
Math.PI          // 派的值(约等于3.14)
```

【平方根】
```js
Math.SQRT2       // 2的平方根(约等于1.414)
Math.SQRT1_2     // 1/2的平方根，即2的平方根的倒数(约等于0.707)
```

#### 函数

* Math.max：返回参数中最大值。如果没有参数则返回-Infinity。如果任意一个参数是NaN或不可转换为数字，则返回NaN
* Math.min：返回参数中最小值。如果没有参数则返回Infinity。如果任意一个参数是NaN或不可转换为数字，则返回NaN
* Math.ceil
* Math.floor
* Math.round
* Math.random：返回大于等于0小于1的一个随机数
* Math.abs
* Math.sin / Math.cos / Math.tan / Math.asin / Math.acos / Math.atan / Math.atan2(y, x)
* Math.exp
* Math.log
* Math.sqrt
* Math.pow

```js
console.log(Math.max(1,2,3));//3
console.log(Math.max());//-Infinity
console.log(Math.max(1,2,'3px'));//NaN
var values = [1,2,3,4,5,6,7,8];
var maxValue = Math.max.apply(Math,values);//8
```

### String字符串类型

* Unicode编码
* 在ECMAScript5中，字符串可以拆分成数行，每行必须以反斜线(\)结束
* javascript中的字符串是不可变的。一旦字符串被创建，就永远无法改变它。要改变某个变量保存的字符串，首先要销毁原来的字符串，然后再用另一个包含新值的字符串填充该变量
* 把一个值转换为字符串有两种方式，toString()和String()。也可以使用空字符串"" + 某个值，将该值转换为字符串
    * null和undefined没有toString方法

转型函数String()遵循下列规则：
1. 如果值是null，则返回'null'；如果值是undefined，则返回'undefined'
2. 如果值不是null或undefined，则调用toString()方法并返回原始类型值
3. 若使用toString()方法返回的是对象，则再调用valueOf()方法返回原始类型值，若使用valueOf()方法返回的是对象，会报错

### String字符串类型的属性和方法

#### 属性

字符串String类型的每个实例都有一个length属性，表示字符串中的字符个数。由于字符串是不可变的，所以字符串的长度也不可变<br>
字符串的length属性不会在for/in循环中枚举，也不能通过delete操作符删除。【注意】对于字符串s来说，最后一个字符的索引是s.length - 1

#### 方法

字符串String对象有多达20多个实例方法，包括

* toString()、toLocaleString()、valueOf()从Object对象继承的3种对象通用方法，
* chartAt()、中括号[]、charCodeAt()和fromCharCode()4种访问字符方法，
    * charAt参数为空或NaN时，默认参数为0；当参数超出范围时，则返回一个空字符串
    * x.charAt(pos)与x.substring(pos, pos+1)、x.substr(pos, 1)、x.slice(pos, pos+1)的结果相等。
    * 方括号参数超出范围或是NaN时，则输出undefined；没有参数时，会报错；该方法没有Number()转型函数的隐式类型转换，但参数为单数值数组时可转换为数值
    * String构造函数本身有一个静态方法:fromCharCode()。这个方法的任务是接收一个或多个字符编码，然后把它们转换成一个字符串。从本质上看，这个方法与实例方法charCodeAt()执行的是相反的操作。若参数为空或NaN时，则返回空字符串；若参数超出0-65535的范围，则输出字符不可控
* concat()和加号+这2种字符串拼接方法，
    * 由于数组也存在concat()方法，参数会按照首先出现的参数是数组还是字符串来决定如何转换 ``'1,2,3,'.concat([4,5]);//'1,2,3,4,5'`` ``[1,2,3].concat(',4,5');//[1, 2, 3, ",4,5"]``
    * 当+操作数其中一个是字符串，或者对象转换为字符串时，才进行字符串拼接
* slice(start, end)、substr(from, length)和substring(start, end)3种创建子字符串方法，
* toLowerCase()、toLocaleLowerCase()、toUpperCase()、toLocaleUpperCase()这4种大小写转换方法，
* indexOf()和lastIndexOf()这2种查找字符串位置的方法，
* match()、search()、replace()、split()这4种正则匹配方法
    * match()方法只接受一个为正则或字符串的参数，并以数组的形式返回匹配的内容。这个方法类似于正则表达式RegExp的exec()方法，只是调换了RegExp和String对象的位置。若匹配失败，则match()方法返回null
    * 若不设置全局标志，match()方法和exec()方法结果相同。设置全局标志后，exec()方法依然返回单次的匹配结果，而match()方法会返回一个字符串数组，其中包括各次成功匹配的文本，但没有index和input属性
    * search()方法不执行全局匹配，忽略全局标志g，也会忽略RegExp对象的lastIndex属性，总是从字符串的开始位置开始搜索
    * 与match()和seartch()方法相比，replace()方法更为强大，它可以在第二个参数中通过短属性名来使用某些正则表达式的静态属性
        * $&              最近一次的匹配项
        * $`              匹配项之前的文本
        * $'              匹配项之后的文本
        * $1,$2...        表示第N个匹配捕获组
    * replace()方法的第二个参数可以是函数，这样文本的处理更加灵活。
        * 如果在只有一个匹配项的情况下(/.at/g)，该方法会向这个函数传递3个参数：模式的匹配项、模式匹配项在字符串中的位置、原始字符串
        * 如果正则表达式定义多个捕获组(/(.)at/g或者/(.)at(.)/g)，则该方法传递给函数的参数依次是模式的匹配项、第一个捕获组的匹配项、第二个捕获组的匹配项……第N个捕获组的匹配项，但最后两个参数仍然分别是模式的匹配项在字符串中的位置和原始字符串，这个函数返回一个字符串
    * split方法可以接受第二个参数(可选)用于指定数组的大小，如果第二个参数为0-array.length范围内的值时按照指定参数输出，其他情况将所有结果都输出。若指定分隔符没有出现在字符串中，则以数组的形式返回原字符串的值。参数中的正则表达式是否使用全局标志g对结果没有影响
* 以及去除首尾空格的trim()方法
* 和字符串比较的localeCompare()方法

```js
1 + 2;//3
'1' + 2;//'12'
var o = {valueOf:function(){return '1';}};
o + 2;//'12'
var o = {valueOf:function(){return 1;}};
o + 2;//3

var string = 'cat,bat,sat,fat';
var pattern = /.at/;
var matches = string.match(pattern);
console.log(matches,matches.index,matches.input);//['cat'] 0 'cat,bat,sat,fat'
var matches = string.match(pattern);
console.log(matches,matches.index,matches.input);//['cat'] 0 'cat,bat,sat,fat'

var exec = pattern.exec(string);
console.log(exec,exec.index,exec.input);//['cat'] 0 'cat,bat,sat,fat'
exec = pattern.exec(string);
console.log(exec,exec.index,exec.input);//['cat'] 0 'cat,bat,sat,fat'

string = 'cat,bat,sat,fat';
pattern = /.at/g;
matches = string.match(pattern);
console.log(matches,matches.index,matches.input);//["cat", "bat", "sat", "fat"] undefined undefined
matches = string.match(pattern);
console.log(matches,matches.index,matches.input);//["cat", "bat", "sat", "fat"] undefined undefined

string = 'cat,bat,sat,fat';
pattern = /.at/g;
exec = pattern.exec(string);
console.log(exec,exec.index,exec.input);//['cat'] 0 'cat,bat,sat,fat'
exec = pattern.exec(string);
console.log(exec,exec.index,exec.input);//['bat'] 4 'cat,bat,sat,fat'
```

【首字母大写】
```js
var text = 'one two three';
var result = text.replace(/\b(\w+)\b/g, function (match,m1,pos,originalText) {
    return m1.charAt(0).toUpperCase() + m1.substring(1);
});
console.log(result);
```

【HTML标签转义】
```js
function htmlEscape(text){
    return text.replace(/[<>"&]/g, function (match,pos,originalText) {
        switch(match){
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '"':
                return '&quot;';
        }
    });
}
console.log(htmlEscape('<p class="greeting">Hello world!</p>'));
// &lt;p class=&quot; greeting&quot;&gt;Hello world!&lt;/p&gt;
console.log(htmlEscape('<p class="greeting">Hello world!</p>'));
// 同上
```

【找出重复项最多的字符和个数】
```js
var str = 'aaaaabbbbbdddddaaaaaaaffffffffffffffffffgggggcccccce';
var pattern = /(\w)\1+/g;
var maxLength = 0;
var maxValue = '';
var result = str.replace(pattern,function(match,match1,pos,originalText){
    if(match.length > maxLength){
        maxLength = match.length;
        maxValue = match1;
    }
})
console.log(maxLength,maxValue);//18 "f"
```

## 构造器类型

### 正则表达式基础语法

【必要】 https://www.cnblogs.com/xiaohuochai/p/5608807.html

### RegExp正则类型

#### 匹配模式

正则表达式的匹配模式支持下列3个标志：

* g:表示全局(global)模式，即模式将被应用于所有字符串，而非在发现第一个匹配项时立即停止
* i:表示不区分大小写(case-insensitive)模式，即在确定匹配项时忽略模式与字符串的大小写
* m:表示多行(multiline)模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项

#### 对象

```js
//匹配字符串所有'at'的实例
var p1 = /at/g;
//同上
var p2 = new RegExp('at','g');
```

#### 属性

每个RegExp实例对象都包含如下5个属性

* global:　　  布尔值，表示是否设置了g标志
* ignoreCase:  布尔值，表示是否设置了i标志
* multiline:   布尔值，表示是否设置了标志m
* lastIndex:   整数，表示开始搜索下一个匹配项的字符位置，从0算起
* source: 　　 正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回

如果使用RegExp的exec()或test()函数，并且设定了全局模式'g'，正则表达式的匹配就会从lastIndex的位置开始，并且在每次匹配成功之后重新设定lastIndex。这样，就可以在字符串中重复迭代，依次寻找各个匹配结果。但是，如果需要对不同字符串调用同一个RegExp的exec()或test()方法，这个变量也可能会带来意料之外的匹配结果，所以在更换字符串时，要显式地将RegExp的lastIndex置为0

| 长属性名     | 短属性名 | 说明                                     |
| :----------- | :------- | :--------------------------------------- |
| input        | $_       | 最近一次要匹配的字符串                   |
| leftContext  | $`       | input字符串中lastMatch之前的文本         |
| rightContext | $'       | input字符串中lastMatch之后的文本         |
| lastMatch    | $&       | 最近一次的匹配项                         |
| lastParen    | $+       | 最近一次匹配的捕获组                     |
| multiline    | $*       | 布尔值，表示是否所有表达式都使用多行模式 |

```js
//test()用于测试一个字符串是否匹配某个正则表达式，并返回一个布尔值
var text = 'this has been a short summer';
var pattern = /(.)hort/g;
if(pattern.test(text)){
    console.log(RegExp.input);//'this has been a short summer'
    console.log(RegExp.leftContext);//'this has been a '
    console.log(RegExp.rightContext);//' summer'
    console.log(RegExp.lastMatch);//'short'
    console.log(RegExp.lastParen);//'s'
    console.log(RegExp.multiline);//false
    console.log(RegExp['$_']);//'this has been a short summer'
    console.log(RegExp['$`']);//'this has been a '
    console.log(RegExp["$'"]);//' summer'
    console.log(RegExp['$&']);//'short'
    console.log(RegExp['$+']);//'s'
    console.log(RegExp['$*']);//false
}
```

理论上，应该保存整个表达式匹配文本的RegExp.$0并不存在，值为undefined。<br>
RegExp.$1\RegExp.$2\RegExp.$3……到RegExp.$9分别用于存储第一、第二……第九个匹配的捕获组

#### 方法

RegExp对象的实例方法共5个，分为两类。包括toString()、toLocalString()、valueOf()这3种对象通用方法和test()、exec()正则匹配方法

test()方法用来测试正则表达式能否在字符串中找到匹配文本，接收一个字符串参数，匹配时返回true，否则返回false

同样地，在调用test()方法时，会造成RegExp对象的lastIndex属性的变化。如果指定了全局模式，每次执行test()方法时，都会从字符串中的lastIndex偏移值开始尝试匹配，所以用同一个RegExp多次验证不同字符串，必须在每次调用之后，将lastIndex值置为0

### Array数组类型

**字面量语法**
```js
var arr1 = [1, '2', true, [], { property: 'value' }];
var num1 = 12;
var arr2 = [num1, num1 + 4, num1 + 9];
```
【注意】使用数字字面量表示法时，不会调用Array构造函数

**构造函数**
```js
var a = new Array();

var a  = new Array(10);
console.log(a);  // []
console.log(a[0],a.length);  // undefined 10

var a = new Array(1,2,3);
console.log(a);  // [1,2,3]
console.log(a[0],a[1],a[2]);  // 1 2 3
```

**数组本质**：数组是对象的特殊形式，使用方括号访问数组元素就像用方括号访问对象的属性一样。javascript语言规定，对象的键名一律为字符串，所以，数组的键名其实也是字符串。之所以可以用数值读取，是因为非字符串的键名会被转为字符串，然后将其作为属性名来使用。所有的索引都是属性名，但只有在0~2<sup>32</sup>-2(4294967294)之间的整数属性名才是索引

**稀疏数组**：稀疏数组就是包含从0开始的不连续索引的数组。

* 制造稀疏数组最直接的方法就是使用delete操作符
* 数组的逗号之间可以省略元素值，通过省略元素值也可以制造稀疏数组。省略的元素值和值为undefined的元素值是有区别的。如果在数组的末尾使用逗号时，浏览器之间是有差别的。标准浏览器会忽略该逗号，而IE8-浏览器则会在末尾添加undefined值
* 足够稀疏的数组通常在实现上比稠密的数组更慢，内存利用率更高，在这样的数组中查找元素的时间与常规对象属性的查找时间一样长

```js
var a = [1,2,3,4,5];
delete a[1];
console.log(a[1]);  // undefined
console.log(1 in a);  // false

var a =[1,,3,4,5];
console.log(a[1]);  // undefined
console.log(1 in a);  // false

var a =[1,undefined,3,4,5];
console.log(a[1]);  // undefined
console.log(1 in a);  // true
```

**数组长度**

* 如果为一个数组元素赋值，索引i大于等于现有数组的长度时，length属性的值将设置为i+1
* 设置length属性为小于当前长度的非负整数n时，当前数组索引值大于等于n的元素将从中删除
* 将数组的length属性值设置为大于其当前的长度。实际上这不会向数组中添加新的元素，它只是在数组尾部创建一个空的区域
* 由于数组本质上是对象，所以可以为数组添加属性，但是这不影响length属性的值

**数组遍历**

* for , while
* 如果数组是稀疏数组时，使用for循环，就需要添加条件：if (!(index in arr)) continue;
* 还可以使用for/in循环处理稀疏数组。循环每次将一个可枚举的属性名（包括数组索引）赋值给循环变量。不存在的索引将不会遍历到
* 由于for/in循环能够枚举继承的属性名，如添加到Array.prototype中的方法。由于这个原因，在数组上不应该使用for/in循环，除非使用额外的检测方法来过滤不想要的属性
* javascript规范允许for/in循环以不同的顺序遍历对象的属性。通常数组元素的遍历实现是升序的，但不能保证一定是这样的。特别地，如果数组同时拥有对象属性和数组元素，返回的属性名很可能是按照创建的顺序而非数值的大小顺序。如果算法依赖于遍历的顺序，那么最好不要使用for/in而用常规的for循环

```js
var a = [1, , , 2];
a.b = 'b';
for (var i in a) {
    console.log(a[i]);  // 1 2 'b'
}
for (var i in a) {
    if (String(Math.floor(Math.abs(Number(i)))) !== i) continue;
    console.log(a[i]);  // 1 2
}
```

**类数组**：拥有length属性和对应非负整数属性的对象叫做类数组(array-like object)

* arguments对象
* DOM方法(如document.getElementsByTagName()方法)返回的对象
* 字符串。【注意】字符串是不可变值，故当把它们作为数组看待时，它们是只读的。如push()、sort()、reverse()、splice()等数组方法会修改数组，它们在字符串上是无效的，且会报错
* 数组的slice方法将类数组对象变成真正的数组 ``var arr = Array.prototype.slice.call(arrayLike);``

```js
// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');
arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

var str = 'abc';
Array.prototype.forEach.call(str, function(chr) {
    console.log(chr);//a b c
});
Array.prototype.splice.call(str, 1);
console.log(str);//TypeError: Cannot delete property '2' of [object String]
```

**数组乱序**

```js
// 给数组原生的sort()方法传入一个函数，此函数随机返回1或-1，达到随机排列数组元素的目的，打乱100000数字大概需要100ms
var arr = [];
var NUM = 100000;
for (var i = 0; i < NUM; i++) { arr.push(i); }
var startTime = +new Date();
arr.sort(function() { return Math.random() - 0.5 });
console.log(+new Date() - startTime); // 100

// 依次遍历数组中的每个元素，遍历到的元素与一个随机位置的元素交换值，大概需要13ms
var startTime = +new Date();
for (var i = 0 ; i < arr.length; i++) {
    var randomIndex = Math.floor(Math.random()*arr.length);
    [arr[i],arr[randomIndex]] = [arr[randomIndex],arr[i]];
}
console.log(+new Date() - startTime);  // 13
```

### 22种数组方法

**对象继承方法**：toString()、toLocaleString()和valueOf()方法。valueOf()方法返回数组对象本身，toString和toLocaleString返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串

**数组转换方法**

* Array.join：是String.split()方法的逆向操作。
    * 若join()方法的参数是undefined，标准浏览器以逗号为分隔符返回字符串，而IE7-浏览器以'undefined'为分隔符返回字符串
    * 如果数组中的某一项的值是null或者undefined，则该值在join()方法返回的结果中以空字符串表示

**栈和队列方法**

* Array.push(...)。如果需要合并两个数组，可以使用apply方法。如果使用call方法，则会把数组b整体看成一个参数。push()方法也可以向对象中添加元素，添加后的对象变成类数组对象，即新加入元素的键对应数组的索引，并且对象有一个length属性
* Array.pop()。从数组末尾移除最后一项，减少数组的length值，然后返回移除的项。对空数组使用pop()方法，不会报错，而是返回undefined
* Array.shift()。移除数组中的第一个项并返回该项，同时数组的长度减1。空数组返回undefined
* Array.unshift(...)。在数组前端添加任意个项并返回新数组长度。当使用多个参数调用unshift()时，参数是一次性插入的而非一次一个地插入。这意味着最终的数组中插入的元素的顺序和它们在参数列表中的顺序一致。在IE7-浏览器中，unshift()方法返回的总是undefined而不是数组长度

```js
var a = [1, 2, 3];
var b = [4, 5, 6];
console.log(a, Array.prototype.push.apply(a, b));  // [1, 2, 3, 4, 5, 6] 6
```

**数组排序方法**

* Array.reverse()
* Array.sort(compareFun = null)。
    * sort()方法按字符串升序排列数组项，sort方法会调用每个数组项的toString()方法，然后比较得到的字符串排序，返回经过排序之后的数组，而原数组顺序也发生改变
    * 如果数组包含undefined元素，它们会被排到数组的尾部
    * sort()方法可以接受一个比较函数作为参数，以便指定哪个值在哪个值的前面。比较函数接收两个参数，如果第一个参数应该位于第二个参数之前则返回一个负数，如果两个参数相等则返回0，如果第一个参数应该位于第二个参数之后则返回一个正数

**数组拼接方法**

* Array.concat(...)：基于当前数组中的所有项创建一个新数组，先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组
    * 如果不给concat()方法传递参数时，它只是复制当前的数组；如果参数是一个或多个数组，则该方法会将这些数组中的每一项都添加到结果数组中；如果传递的值不是数组，这些值就会被简单地添加到结果数组的末尾
    * 如果不提供参数，concat()方法返回当前数组的一个浅拷贝。所谓“浅拷贝”，指的是如果数组成员包括复合类型的值（比如对象），则新数组拷贝的是该值的引用
    * concat()方法也可以用于将对象合并为数组，但是必须借助call()方法

```js
var newArray = Array.prototype.concat.call({ a: 1 }, { b: 2 })
console.log(newArray);  // [{ a: 1 }, { b: 2 }]
console.log(newArray[0].a);  // 1
```

**创建子数组方法**

* Array.slice(start, end)：基于当前数组中的一个或多个项创建一个新数组，接受一个或两个参数，即要返回项的起始和结束位置，最后返回新数组
    * 如果start是负数，则start = max(length + start, 0)
    * 如果end是负数，则end = max(length + end, 0)
    * start和end无法交换位置
    * 如果没有参数，则返回原数组的一个浅拷贝

**数组删改方法**

* Array.splice(start, number)：用于删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员
    * 返回一个由删除元素组成的数组，或者如果没有删除元素就返回一个空数组
    * 第一个参数start指定了插入或删除的起始位置。如果start是负数，则start = max(length + start,0)；如果start是NaN，则相当于start = 0。如果只提供一个元素，相当于将原数组在指定位置拆分成两个数组
    * 第二个参数number指定了应该从数组中删除的元素的个数。如果省略第二个参数，从起始点开始到数组结尾的所有元素都将被删除。如果number是负数或NaN或undefined，则number=0，因此不删除元素
    * 如果后面还有更多的参数，则表示这些就是要被插入数组的新元素

**数组位置方法**

* Array.indexOf(search, start)
* Array.lastIndexOf(search, start)

**数组归并方法**

* Array.reduce(function (pre, cur, index, arr) {})
    * 初始变量，默认为数组的第一个元素值。函数第一次执行后的返回值作为函数第二次执行的初始变量，依次类推
    * 当前变量，如果指定了第二个参数，则该变量为数组的第一个元素的值，否则，为第二个元素的值
    * 当前变量对应的元素在数组中的索引(从0开始)
    * 原数组对象
* Array.reduceRight(function (pre, cur, index, arr) {})

**数组迭代方法**

* Array.map(function (item, index, arr) { return item; }, o /\*是f调用时的可选this值*/)
* Array.forEach(function (item, index, arr) {}, o)
    * forEach()方法无法在所有元素都传递给调用的函数之前终止遍历。也就是说，没有像for循环中使用的相应的break语句。如果要提前终止，必须把forEach()方法放在一个try块中，并能抛出一个异常
* Array.filter(function (item, index, arr) { return Boolean; }, o)
    * filter()会跳过稀疏数组中缺少的元素，它的返回数组总是稠密的，所以可以压缩稀疏数组的空缺
    * 如果要压缩空缺并删除undefined和null元素，可以这样使用filter()方法 a.filter(function (item) { return item!= undefined; })
* Array.some(function (item, index, arr) { return Boolean; }) 对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true。并且当且仅当数值中的所有元素调用判定函数都返回false，它才返回false
* Array.every(function (item, index, arr) {})

```js
// 第二个参数对于多层this非常有用，因为多层this通常指向是不一致的，可以使用forEach()方法的第二个参数固定this
var obj = {
    name: '张三',
    times: [1, 2, 3],
    print: function () {
        // 该this指向obj
        console.log(this);
        this.times.forEach(function (n) {
            // 该this指向window
            console.log(this);
        });
    }
};
obj.print();
```

**数组去重方法封装**

```js
Array.prototype.norepeat = function () {
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (result.indexOf(this[i]) == -1) {
            result.push(this[i]);
        }
    }
    return result;
}
var arr = ['a','ab','a'];
console.log(arr.norepeat());  // ['a','ab']
```

**测试数组是否包含特定值的方法封装**

```js
Array.prototype.inArray = function (value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === value) {
            return true;
        }
    }
    return false;
}
var arr = ['a','ab','a'];
console.log(arr.inArray('b'));  // false
console.log(arr.inArray('a'));  // true
```

### 数组复制

【push】
```js
function copyArr1(arr) {
    var result = [];
    arr.forEach((item) => result.push(item));
    return result;
}
```

【join】
```js
function copyArr2(arr) { return arr.join(',').split(','); }
```

【concat】
```js
function copyArr3(arr) { return arr.concat(); }
```

【slice】
```js
function copyArr4(arr) { return arr.slice(); }
```

【深拷贝】
```js
function copyArr5(arr, result) {
    var result = result || [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result[i] = [];
            copyArray(arr[i], result[i]);
        } else {
            result[i] = arr[i];  // todo: 拷贝对象
        }
    }
    return result;
}
```

### 字符串和数组的方法比较

索引

转换

拼接

创建

位置

顺序

### 错误处理机制

#### error对象

ECMA-262规定了error对象包括两个属性：message和name。message属性保存着错误信息，而name属性保存错误类型。
```js
try {
    t;
} catch(ex) {
    console.log(ex.message);  // t is not defined
    console.log(ex.name);  // ReferenceError
}
```
浏览器还对error对象的属性做了扩展，添加了其他相关信息。其中各浏览器厂商实现最多的是stack属性，它表示栈跟踪信息(safari不支持)

可以使用error()构造函数来创建错误对象。如果指定message参数，则该error对象将把它用做它的message属性；若不指定，它将使用一个预定义的默认字符串作为该属性的值
```js
throw new Error('test');  // Uncaught Error: test
throw new Error();  // Uncaught Error

function UserError(message) {
   this.message = message;
   this.name = "UserError";
}
UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
throw new UserError("errorMessage");  // Uncaught UserError: errorMessage
```
当不使用new操作符，直接将Error()构造函数像一个函数一样调用时，它的行为和带new操作符调用时一样

error对象有一个toString()方法，返回'Error:'+ error对象的message属性

#### error类型

ECMA-262定义了下列7种错误类型：
```
Error
EvalError(eval错误)
RangeError(范围错误)
ReferenceError(引用错误)
SyntaxError(语法错误)
TypeError(类型错误)
URIError(URI错误)
```

其中，Error是基类型，其他错误类型都继承自该类型。因此，所有错误类型共享了一组相同的属性。Error类型的错误很少见，如果有也是浏览器抛出的；这个基类型的主要目的是供开发人员抛出自定义错误

#### error事件

任何没有通过try-catch处理的错误都会触发window对象的error事件。error事件可以接收三个参数：错误消息、错误所在的URL和行号。多数情况下，只有错误消息有用，因为URL只是给出了文档的位置，而行号所指的代码行既可能出自嵌入的javascript代码，也可能出自外部的文件。要指定onerror事件处理程序，可以使用DOM0级技术，也可以使用DOM2级事件的标准格式
```js
// DOM0级
window.onerror = function(message, url, line) { alert(message); }
// DOM2级
window.addEventListener("error", function(message, url, line) { alert(message); });
```
浏览器是否显示标准的错误消息，取决于onerror的返回值。如果返回值为false，则在控制台中显示错误消息；如果返回值为true，则不显示

这个事件处理程序是避免浏览器报告错误的最后一道防线。理想情况下，只要可能就不应该使用它。只要能够适当地使用try-catch语句，就不会有错误交给浏览器，也就不会触发error事件。图像也支持error事件。只要图像的src特性中的URL不能返回可以被识别的图像格式，就会触发error事件。此时的error事件遵循DOM格式，会返回一个以图像为目标的event对象。加载图像失败时会显示一个警告框。发生error事件时，图像下载过程已经结束，也就是不能再重新下载了
```js
var image = new Image();
image.src = 'smilex.gif';
image.onerror = function(e) { console.log(e); }
```

#### 抛出错误与捕获错误

throw语句用于抛出错误。抛出错误时，必须要给throw语句指定一个值，这个值是什么类型，没有要求

利用原型链还可以通过继承Error来创建自定义错误类型。此时，需要为新创建的错误类型指定name和message属性

浏览器对待继承自Error的自定义错误类型，就像对待其他错误类型一样。如果要捕获自己抛出的错误并且把它与浏览器错误区别对待的话，创建自定义错误是很有用的
```js
function CustomError(message) {
    this.name = 'CustomError';
    this.message = message;
}
CustomError.prototype = new Error();
throw new CustomError('my message');
```

```js
try {  } catch(e) {  } finally {  }
```

try-catch语句的一个常见用途是**创建块级作用域**，其中声明的变量仅仅在catch内部有效。ES6引入了let关键字，为其声明的变量创建块级作用域。但是，在目前ES3和ES5的情况下，常常使用try-catch语句来实现类似的效果。在IE8-浏览器中，catch语句中捕获的错误对象会被添加到执行环境的变量对象，而不是catch语句的变量对象中。换句话说，即使是在catch块的外部也可以访问到错误对象。IE9修复了这个问题

## 日期对象

### 日期和时间基础知识

一般而言的标准时间是指GMT和UTC，以前是GMT，现在是UTC。

格林尼治标准时间(GMT)是指位于伦敦郊区的皇家格林尼治天文台的标准时间，因为本初子午线被定义在通过那里的经线。理论上来说，格林尼治标准时间的正午是指当太阳横穿格林尼治子午线时(也就是在格林尼治上空最高点时)的时间。由于地球在它的椭圆轨道里的运动速度不均匀，这个时刻可能和实际的太阳时相差16分钟。地球每天的自转是有些不规则的，而且正在缓慢减速。所以，格林尼治时间已经不再被作为标准时间使用。现在的标准时间由世界协调时间(UTC)提供

世界协调时间(UTC)又称世界统一时间，世界标准时间，国际协调时间，全称Coordinated Universal Time，是以原子时秒长为基础，在时刻上尽量接近于世界时的一种时间计量系统。这套时间系统被应用于许多互联网和万维网的标准中，中国大陆、中国香港、中国澳门、中国台湾、蒙古国、新加坡、马来西亚、菲律宾、西澳大利亚州的时间与UTC的时差均为+8，也就是UTC+8

ECMAScript定义了一个基于简化的ISO8601扩展格式的日期时间的字符串互换格式。完整格式为: YYYY-MM-DDTHH:mm:ss.sssZ。【注意】前置0不能省略，否则在完整格式的情况下会报错
```txt
YYYY        公历中年的十进制数字，如果这个参数值在0-99之间，则向它加上1900
-           在字符串中直接以“-”(破折号)出现两次
MM          一年中的月份，从01(一月)到12(十二月)
DD          月份中的日期，从01到31
T           在字符串中直接以“T”出现，用来表明时间元素的开始
HH          用两个十进制数字表示的，自午夜0点以来的小时数
:           在字符串中直接以“:”(冒号)出现两次
mm          是用两个十进制数字表示的，自小时开始以来的分钟数
ss          是用两个十进制数字表示的，自分开始以来的秒数
.           在字符串中直接以“.”(点)出现
sss         是用三个十进制数字表示的，自秒开始以来的毫秒数
Z           是时区偏移量，由（“Z”(指UTC)或“+”或“-”）和后面跟着的时间表达式hh:mm组成
```
只表示日期的格式:  YYYY YYYY-MM YYYY-MM-DD

除了标准格式外，以下格式也支持

1. '月/日/年' 如6/13/2004
2. '月 日,年' 如January 12,2004或Jan 12,2004
3. '星期 月 日 年 时:分:秒 时区' Tue May 25 2004 00:00:00 GMT-0700

【注意】所有数字必须是10进制的。如果缺少MM或DD字段，用“01”作为它们的值。如果缺少mm或ss字段，用“00”作为它们的值，对于缺少的sss用“000”作为它的值。对于缺少的时区偏移量用“Z”

四年一闰，百年不闰，四百年再闰

```txt
一月       Jan January
二月       Feb February
三月       Mar March
四月       Apr April
五月       May May
六月       Jun June
七月       Jul July
八月       Aug August
九月       Sep September
十月       Oct October
十一月     Nov November
十二月     Dec December
```

```txt
星期日    sunday         Sun
星期一    monday         Mon
星期二    Tuesday        Tue
星期三    Wednesday      Wed
星期四    Thursday       Thu
星期五    Friday         Fri
星期六    Saturday       Sar
```

1天 = 24小时 = 24\*60(1440)分 = 24\*60\*60(86400)秒 = 86,400,000毫秒<br>
1分= 60秒<br>
1小时 = 3600秒<br>
1天 = 86400秒<br>
Date对象返回的是一个毫秒数，经常需要将其换算成时分秒的形式

### Date日期对象

#### 静态方法

Date对象总共有三个静态方法，分别是**Date.now()**、**Date.parse(str)**、**Date.UTC(year,month,day,hours,minutes,seconds,ms)**。这些方法通过Date()构造函数本身调用，而不是通过Date实例对象。在不支持Date.now()方法的浏览器中，可以用+操作符把Date对象转换成数字，也可以实现类似效果 ``Date.now() == +new Date()``

```js
console.log(Date.parse('6/13/2004'));  // 1087056000000
console.log(Date.parse('January 12,2004'));  // 1073836800000
console.log(Date.parse('Tue May 25 2004 00:00:00 GMT-0700'));  // 1085468400000
console.log(Date.parse('2004-05-25T00:00:00'));  // 1085443200000
console.log(Date.parse('2016'));  // 1451606400000
console.log(Date.parse('T00:00:00'));  // NaN
console.log(Date.parse());  // NaN
```

```js
console.log(Date.UTC(1970));  // NaN
console.log(Date.UTC(1970, 0));  // 0
console.log(Date.UTC(1970, 0, 2));  // 86400000
console.log(Date.UTC(1970, 0, 1, 1));  // 3600000
console.log(Date.UTC(1970, 0, 1, 1, 59));  // 714000
console.log(Date.UTC(1970, 0, 1, 1, 59, 30));  // 717000
```

#### 构造

```js
Date();  // 1. 不带new操作符，像一个函数一样调用。它将忽略所有传入的参数，并返回当前日期和时间的一个字符串表示
new Date();  // 2. Date()函数使用new操作符，且不带参数时，将根据当前时间和日期创建一个Date对象
new Date(ms);  // 3. Date(ms)函数可接受一个数字参数，该参数表示设定时间与1970年1月1日0点之间的毫秒数
new Date(str);  // 4. Date()函数可接受一个字符串参数，参数形式类似于Date.parse()方法。但parse()方法返回的是一个数字，而Date()函数返回的是一个对象。关于标准的日期时间字符串中前置0的处理，也类似于Date.parse()方法，若有前置0，则相当于UTC时间，若没有，则相当于本地时间。其余情况一般都为本地时间
new Date(y, M, d, h, m, s, ms);  // 5. Date()函数可接受参数形式类似于Date.UTC()方法的参数，但Date.UTC()方法返回是一个毫秒数，且是UTC时间，而Date()函数返回是一个对象，且是本地时间。
// 使用参数类似于Date.parse()函数的方法时，如果日期对象超出范围，浏览器会自动将日期计算成范围内的值；使用参数类似于Date.UTC()函数的方法时，如果日期对象超出范围，浏览器会提示Invalid Date
```

#### 实例方法

Date对象没有可以直接读写的属性，所有对日期和时间的访问都需要通过方法。Date对象的大多数方法分为两种形式：一种是使用本地时间，一种是使用UTC时间，这些方法在下面一起列出。例如，get\[UTC]Day()同时代表getDay()和getUTCDay()

Date对象一共有46个实例方法，可以分为以下3类：to类、get类、set类

【to类方法】从Date对象返回一个字符串，表示指定的时间

* toString(): 返回本地时区的日期字符串
* toUTCString(): 返回UTC时间的日期字符串
* toISOString(): 返回Date对象的标准的日期时间字符串格式的字符串
* toDateString(): 返回Date对象的日期部分的字符串
* toTimeString(): 返回Date对象的时间部分的字符串
* toJSON(): 返回一个符合JSON格式的日期字符串，与toISOString方法的返回结果完全相同
* toLocaleString()：toString()方法的本地化转换
* toLocaleTimeString()：toTimeString()方法的本地化转换
* toLocaleDateString()：toDateString()方法的本地化转换

```js
console.log(new Date('2016-7-12').toString());  // Tue Jul 12 2016 00:00:00 GMT+0800 (中国标准时间)
console.log(new Date('2016-7-12').toUTCString());  // Mon, 11 Jul 2016 16:00:00 GMT
console.log(new Date('2016-7-12').toISOString());  // 2016-07-11T16:00:00.000Z
console.log(new Date('2016-7-12').toDateString());  // Tue Jul 12 2016
console.log(new Date('2016-7-12').toTimeString());  // 00:00:00 GMT+0800 (中国标准时间)
console.log(new Date('2016-7-12').toJSON());  // 2016-07-11T16:00:00.000Z

console.log(new Date('2016-7-12').toLocaleString());//2016/7/12 上午12:00:00
console.log(new Date('2016-7-12').toLocaleDateString());//2016/7/12
console.log(new Date('2016-7-12').toLocaleTimeString());//上午12:00:00
```

【get类方法】用来获取实例对象某个方面的值

* getTime()：返回距离1970年1月1日0点的毫秒数，同valueOf() ``new Date().getTime() == Date.now()``
* getTimezoneOffset()：返回当前时间与UTC的时区差异，以分钟表示(8*60=480分钟)，返回结果考虑到了夏令时因素
* getYear()：返回距离1900年的年数(已过时)
* get\[UTC]FullYear()：返回年份(4位数)
* get\[UTC]Month()：返回月份(0-11)
* get\[UTC]Date()：返回第几天(1-31)
* get\[UTC]Day()：返回星期几(0-6)
* get\[UTC]Hours()：返回小时值(0-23)
* get\[UTC]Minutes()：返回分钟值(0-59)
* get\[UTC]Seconds()：返回秒值(0-59)
* get\[UTC]Milliseconds()：返回毫秒值(0-999)。【注意】通过标准日期时间格式字符串，且有前置0的形式的参数设置，设置的是UTC时间

```js
console.log(new Date('2016-07-12T10:00').getYear());  // 116
console.log(new Date('2016-07-12T10:00').getFullYear());  // 2016
console.log(new Date('2016-07-12T10:00').getUTCFullYear());  // 2016
console.log(new Date('2016-07-12T10:00').getMonth());  // 6
console.log(new Date('2016-07-12T10:00').getUTCMonth());  // 6
console.log(new Date('2016-07-12T10:00').getDate());  // 12
console.log(new Date('2016-07-12T10:00').getUTCDate());  // 12
console.log(new Date('2016-07-12T10:00').getDay());  // 2
console.log(new Date('2016-07-12T10:00').getUTCDay());  // 2
console.log(new Date('2016-07-12T10:00').getHours());  // 18
console.log(new Date('2016-07-12T10:00').getUTCHours());  // 10
console.log(new Date('2016-07-12T10:00').getMinutes());  // 0
console.log(new Date('2016-07-12T10:00').getUTCMinutes());  // 0
console.log(new Date('2016-07-12T10:00').getSeconds());  // 0
console.log(new Date('2016-07-12T10:00').getUTCSeconds());  // 0
console.log(new Date('2016-07-12T10:00').getMilliseconds());  // 0
console.log(new Date('2016-07-12T10:00').getUTCMilliseconds());  // 0
```

【set类方法】大概与get一一对应

### 简易日历实现

```html
<style>
    .calendar { width: 400px; height: 400px; border-radius: 5%; border: 2px solid black; margin: 0 auto; }
    .calendar .control-wrapper { width: 100%; height: 14.2%; border-bottom: 1px solid black; position: relative; }
    .calendar .control { width: 90%; position: absolute; top: 50%; left: 5%; transform: translate(0, -50%); }
    .calendar .control > span { cursor: pointer; }
    .calendar .control > span:nth-child(1), .control > span:nth-child(2) { float: left; }
    .calendar .control > span:nth-child(1) { border: transparent 10px solid; border-right: black 10px solid; }
    .calendar .control > span:nth-child(3), .control > span:nth-child(4) { float: right; }
    .calendar .control > span:nth-child(3) { border: transparent 10px solid; border-left: black 10px solid; }
    .calendar .control > div { text-align: center; font-weight: bold; font-size: large; }
    .calendar .control span+span { margin-left: 10px; }
    .calendar .show { width: 100%; height: 85.7%; position: relative; overflow: hidden; }
    .calendar .day { position: absolute; width: 100%; height: 100%; display: flex; flex-wrap: wrap; justify-content: space-around; align-content: space-around; }
    .calendar .day > span { flex-basis: 14.2%; text-align: center; }
    .calendar .pre { left: -100%; }
    .calendar .next { left: 100%; }
    .calendar .gray { color: gray; }
    .calendar .current { color: white; position: relative; }
    .calendar .current::before { width: 60%; height: 162%; position: absolute; left: 20%; top: -31%; content: ''; z-index: -1; background: orange; border-radius: 50%; }
</style>
<div class="calendar">
    <div class="control-wrapper">
        <div class="control">
            <span></span><span>&lt;</span>
            <span></span><span>&gt;</span>
            <div><span>2020</span><span>6</span></div>
        </div>
    </div>
    <div class="show">
        <div class="pre day"></div>
        <div class="day"></div>
        <div class="next day"></div>
    </div>
</div>
<script>
    (function() {
        // document.getElementById('').style.left
        var calendar = document.getElementsByClassName("calendar")[0]
        var show = calendar.getElementsByClassName("show")[0]
        var control = calendar.getElementsByClassName("control")[0]
        var spans = control.getElementsByTagName("span")

        var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        function getDayOfMonth(month, year) {
            var dayOfMonth = months[month]
            if (month == 1 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
                dayOfMonth = 29
            }
            return dayOfMonth
        }
        function showDay(now, parent) {
            var year = now.getFullYear()
            var month = now.getMonth()
            spans[4].innerText = String(year)
            spans[5].innerText = String(month + 1)
            var tag = year + '-' + month
            if (parent.tag == tag) {
                return
            }
            parent.tag = tag
            console.log(tag)
            var innerHTML = '<span>周一</span><span>周二</span><span>周三</span><span>周四</span><span>周五</span><span>周六</span><span>周日</span>'
            var dayOfWeek = (new Date(year, month, 0)).getDay()
            var dayOfMonth = month > 0 ? getDayOfMonth(month - 1, year) : getDayOfMonth(11, year - 1)
            for (let i = 0; i < dayOfWeek; i++) {
                innerHTML = innerHTML + '<span class="gray">' + (dayOfMonth - dayOfWeek + i + 1) + '</span>'
            }
            dayOfMonth = getDayOfMonth(month, year)
            var trueNow = new Date()
            var trueYear = trueNow.getFullYear()
            var trueMonth = trueNow.getMonth()
            var trueDate = trueNow.getDate() - 1
            for (let i = 0; i < dayOfMonth; i++) {
                if (trueYear == year && trueMonth == month && i == trueDate) {
                    innerHTML = innerHTML + '<span class="current">' + (i + 1) + '</span>'
                } else {
                    innerHTML = innerHTML + '<span>' + (i + 1) + '</span>'
                }
            }
            var surplus = 42 - dayOfWeek - dayOfMonth
            for (let i = 0; i < surplus; i++) {
                innerHTML = innerHTML + '<span class="gray">' + (i + 1) + '</span>'
            }
            parent.innerHTML = innerHTML
        }
        var now = new Date()
        var days = show.getElementsByClassName("day")
        var current = 1
        showDay(now, days[current])

        var showWidth = days[0].offsetWidth
        var handler = null
        function scrollDay(adder, isYear) {
            if (handler !== null) {
                return
            }
            if (isYear) {
                now.setFullYear(now.getFullYear() + adder)
            } else {
                now.setMonth(now.getMonth() + adder)
            }
            var next = (current + adder + 3) % 3
            var nextDay = days[next]
            var currentDay = days[current]
            var muler = -adder * 0.05
            showDay(now, nextDay)
            handler = setInterval(() => {
                nextDay.style.left = nextDay.offsetLeft + showWidth * muler + 'px'
                currentDay.style.left = currentDay.offsetLeft + showWidth * muler + 'px'
                if (nextDay.offsetLeft == 0) {
                    clearInterval(handler)
                    handler = null
                }
            }, 25)
            days[(current - adder + 3) % 3].style.left = adder * showWidth + 'px'
            current = next
        }
        spans[0].onclick = () => scrollDay(-1, true)
        spans[1].onclick = () => scrollDay(-1, false)
        spans[2].onclick = () => scrollDay(1, true)
        spans[3].onclick = () => scrollDay(1, false)
    })()
</script>
```

<iframe src='./jses/date.html' width='100%' height='420px' frameborder='0'></iframe>

### 日期联动效果

https://www.cnblogs.com/xiaohuochai/p/5877594.html 【空闲】

## 类型识别

### 四种类型识别的方法

**typeof**放在单个操作数的前面，返回值为表示操作数类型的首字母小写的字符串。typeof运算符后面带不带圆括号都可以。

* 可以识别标准类型(将Null识别为'object')。
* 不能识别具体的对象类型(Function除外)。
* 判断一个值是否为null类型的最佳方法是直接和null进行恒等比较

```js
console.log(typeof "jerry");  // "string"
console.log(typeof 12);  // "number"
console.log(typeof true);  // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);  // "object"
console.log(typeof {name: "jerry"});  // "object"

console.log(typeof function(){});  // "function"
console.log(typeof []);  // "object"
console.log(typeof new Date);  // "object"
console.log(typeof /\d/);  // "object"
function Person(){};
console.log(typeof Person);  // 'function'
console.log(typeof new Person);  // "object"
```

**instanceof**是一个二元运算符，左操作数是一个对象，右操作数是一个构造函数。如果左侧的对象是右侧构造函数的实例对象，则表达式返回true；否则返回false。如果左操作数不是对象，返回false，如果右操作数不是函数，则抛出一个类型错误异常TypeError。

* 所有的对象都是Object的实例。
* 可以识别内置对象类型、自定义类型及其父类型
* 不能识别标准类型，会返回false
* 不能识别undefined、null，会报错

```js
console.log("jerry" instanceof String);  // false
console.log(12 instanceof Number);  // false
console.log(true instanceof Boolean);  // false
console.log(undefined instanceof Undefined);  // 报错
console.log(null instanceof Null);  // 报错
console.log({name: "jerry"} instanceof Object);  // true

console.log(function(){} instanceof Function);  // true
console.log([] instanceof Array);  // true
console.log(new Date instanceof Date);  // true
console.log(/\d/ instanceof RegExp);  // true
function Person(){};
console.log(new Person instanceof Person);  // true
console.log(new Person instanceof Object);  // true
```

实例对象的**constructor属性**指向其构造函数。如果是内置类型，则输出function 数据类型(){[native code]}；如果是自定义类型，则输出function 数据类型(){}。

* 可以识别标准对象、内置对象类型以及自定义类型
* 不能识别undefined、null，会报错，因为它俩没有构造函数

```js
console.log(("jerry").constructor);  // function String(){[native code]}
console.log((12).constructor);  // function Number(){[native code]}
console.log((true).constructor);  // function Boolean(){[native code]}
console.log((undefined).constructor);  // 报错
console.log((null).constructor);  // 报错
console.log(({name: "jerry"}).constructor);  // function Object(){[native code]}

console.log((function(){}).constructor);  // function Function(){[native code]}
console.log(([]).constructor);  // function Array(){[native code]}
console.log((new Date).constructor);  // function Date(){[native code]}
console.log((/\d/).constructor);  // function RegExp(){[native code]}
function Person(){};
console.log((new Person).constructor);  // function Person(){}
```

可以将constructor属性封装成类型识别方法
```js
function type(obj) {
    return obj.constructor.toString().replace(/^function (\w+)\(\).+$/,'$1');
}
```

对象的类属性是一个字符串，用以表示对象的类型信息。javascript没有提供设置这个属性的方法，但有一种间接方法可以查询它。**Object.prototype.toString**()方法返回了如下格式的字符串：[object 数据类型]。

* 可以识别标准类型及内置对象类型
* 不能识别自定义类型

```js
console.log(Object.prototype.toString.call("jerry"));  // [object String]
console.log(Object.prototype.toString.call(12));  // [object Number]
console.log(Object.prototype.toString.call(true));  // [object Boolean]
console.log(Object.prototype.toString.call(undefined));  // [object Undefined]
console.log(Object.prototype.toString.call(null));  // [object Null]
console.log(Object.prototype.toString.call({name: "jerry"}));  // [object Object]

console.log(Object.prototype.toString.call(function(){}));  // [object Function]
console.log(Object.prototype.toString.call([]));  // [object Array]
console.log(Object.prototype.toString.call(new Date));  // [object Date]
console.log(Object.prototype.toString.call(/\d/));  // [object RegExp]
function Person(){};
console.log(Object.prototype.toString.call(new Person));  // [object Object]
```

可以将Object.prototype.toString()方法封装成一个类型识别方法
```js
function type(obj) {
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
```

【注意】如果是包装对象，Object.prototype.toString()方法将返回其原始类型

**完整的类型识别函数**
```js
function type(obj) {
    if (obj === null) {
        return 'null'
    }
    var result = typeof(obj)
    if (result != 'object') {
        return result
    }
    return obj.constructor.toString().replace(/^function (\w+)\(\).+$/,'$1');
}
```

### 数组检测方式

typeof [] ==> 'object'

[] instanceof Array ==> true<br>
先创建一个父网页box.html和子网页in.html，其中父网页通过iframe包含子网页<br>
```html
<!-- 子网页为空 -->
<!-- 父网页 -->
<iframe name="child" src="in.html"></iframe>
```
测试父网页和子网页的通信，注意一定要在服务器环境下测试
```js
// 子网页
var arr = [1,2,3];
// 父网页
window.onload = function(){
    console.log(child.window.arr);  // [1,2,3]
}
```
这时进行数组检测
```js
window.onload = function() {
    console.log(child.window.arr instanceof Array);  // false
}
```
测试后发现，数组检测的结果是false。这是因为**网页中包含多个框架，那实际上就存在多个不同的全局环境，从而存在不同版本的Array构造函数**。如果从一个框架向另一个框架传入一个数组，那么传入的数组与在第二个框架中原生创建的数组分别具有各自不同的构造函数。

**Object.prototype.toString总能判断出数组，返回'\[object Array]'**

为了让数组检测更方便，ECMAScript5新增了**Array.isArray(arr)**方法。该方法的目的是最终确定某个值到底是不是数组，而不管它在哪个全局环境中创建的。

完整测试代码
```html
<!-- in.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<script>
var arr = [1,2,3];
</script>
</body>
</html>
<!-- box.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<iframe name="child" src="in.html"></iframe>
<script>
function test(arr){
    return arr instanceof Array;
}
function type(obj){
    return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}
window.onload = function(){
    console.log(child.window.arr);// [1,2,3]
    console.log(test(child.window.arr));//false
    console.log(type(child.window.arr));//'array'
    console.log(Array.isArray(child.window.arr));//true
}
</script>
</body>
</html>
```

## 类型转换

### toString()

* undefined和null没有toString()方法
* 布尔型数据true和false返回对应的'true'和'false'
* 字符串类型原值返回
* 数值类型的情况较复杂
    * 正浮点数及NaN、Infinity加引号返回
    * 负浮点数或加'+'号的正浮点数直接跟上.toString()，相当于先运行toString()方法，再添加正负号，转换为数字
    * 整数直接跟上.toString()形式，会报错，提示无效标记，因为整数后的点会被识别为小数点。
    * 因此，为了避免以上无效及报错的情况，数字在使用toString()方法时，加括号可解决
    * 此外，数字类型的toString()方法可以接收表示转换基数(radix)的可选参数，如果不指定此参数，转换规则将是基于十进制。同样，也可以将数字转换为其他进制数(范围在2-36)
* 对象Object类型及自定义对象类型加括号返回[object Object]
    * 常常使用Object.prototype.toString()来进行类型识别，返回代表该对象的[object 数据类型]字符串表示
    * 除了类型识别之外，还可以进行其他识别，如识别arguments或DOM元素。
        * console.log(Object.prototype.toString.call(arguments));//[object Arguments]
        * console.log(Object.prototype.toString.call(document));//[object HTMLDocument]
* 函数Function类型返回函数代码。
    * 当我们对一个自定义函数调用toString()方法时，可以得到该函数的源代码；
    * 如果对内置函数使用toString()方法时，会得到一个'[native code]'字符串。因此，可以使用toString()方法来区分自定义函数和内置函数
* 数组Array类型返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串
* 时间Date类型返回表示当前时区的时间的字符串表示
* 正则表达式RegExp类型返回正则表达式字面量的字符串表示
* 错误Error类型

```js
Error.toString();//"function Error() { [native code] }"
RangeError.toString();//"function RangeError() { [native code] }"
ReferenceError.toString();//"function ReferenceError() { [native code] }"
SyntaxError.toString();//"function SyntaxError() { [native code] }"
TypeError.toString();//"function TypeError() { [native code] }"
URIError.toString();//"function URIError() { [native code] }"
```

### valueOf()

如果存在任意原始值，它就默认将对象转换为表示它的原始值；对象是复合值，而大多数对象无法真正表示为一个原始值，因此默认的valueOf()方法简单地返回对象本身，而不是返回一个原始值

* undefined和null没有valueOf()方法
* 布尔型数据true和false返回原值。布尔型数据的包装对象返回true或false
* 字符串类型原值返回。字符串类型的包装对象返回字符串值
* 数值类型分为整数和浮点数进行处理。数值类型的包装对象返回数值类型值
    * 整数直接跟.valueOf()形式，会报错，提示无效标记，因为整数后的点被识别为小数点，所以尽量加括号
    * -0的valueOf()值是-0，而-0的toString()值是'0'
    * 浮点数原值返回
    * 和toString()不同的是，valueOf()不可以接收转换基数
* 对象Object类型及自定义对象类型返回原对象
* 函数Function类型返回原函数
* 数组Array类型返回原数组
* 和其他对象不同，时间Date类型返回一个数字值，它是当前时间值
* 正则表达式RegExp类型返回原正则对象
* 错误Error类型

```js
Error.valueOf();//Error() { [native code] }
RangeError.valueOf();//RangeError() { [native code] }
ReferenceError.valueOf();//ReferenceError() { [native code] }
SyntaxError.valueOf();//SyntaxError() { [native code] }
TypeError.valueOf();//TypeError() { [native code] }
URIError.valueOf();//URIError() { [native code] }
```

1. toString()和valueOf()的主要不同点在于，toString()返回的是字符串，而valueOf()返回的是原对象
2. 由于undefined和null不是对象，所以它们toString()和valueOf()两个方法都没有
3. 数值Number类型的toString()方法可以接收转换基数，返回不同进制的字符串形式的数值；而valueOf()方法无法接受转换基数
4. 时间Date类型的toString()方法返回的表示时间的字符串表示；而valueOf()方法返回的是现在到1970年1月1日00:00:00的数值类型的毫秒数
5. 包装对象的valueOf()方法返回该包装对象对应的原始值
6. 使用toString()方法可以区分内置函数和自定义函数

### 数据类型转换

#### 原始值转换成原始值

【Undefined】

* 转换为字符串: 'undefined'
* 转换为数字: NaN
* 转换为布尔值: false

【Null】

* 转换为字符串: 'null'
* 转换为数字: 0
* 转换为布尔值: false

【Boolean】

* true
    * 转换为字符串: 'true'
    * 转换为数字: 1
* false
    * 转换为字符串: 'false'
    * 转换为数字: 0

【Number】

* 10
    * 转换为字符串: '10'
    * 转换为布尔值: true
* 0
    * 转换为字符串: '0'
    * 转换为布尔值: false
* NaN
    * 转换为字符串: 'NaN'
    * 转换为布尔值: false
* Infinity
    * 转换为字符串: 'Infinity'
    * 转换为布尔值: true

【String】

* 'abc'
    * 转换布尔值: true
    * 转换为数字: NaN
* '123'

    * 转换布尔值: true
    * 转换为数字: 123
* ' '(空格字符串)

    * 转换布尔值: true
    * 转换为数字: 0
* ''(空字符串)

    * 转换布尔值: false
    * 转换为数字: 0

#### 对象转换成原始值

* 【Boolean】对象到布尔值的转换非常简单，所有的对象都转换为true
* 【Number】
    * 如果对象具有valueOf()方法，后者返回一个原始值，则javascript将这个原始值转换为数字(如果需要的话)，并返回这个数字
        * 在内置对象中，只有时间Date()对象返回的是原始类型的值数字，所以Number(new Date())返回现在到1970年1月1日00:00:00的数值类型的毫秒数
    * 否则，如果对象具有toString()方法，后者返回一个原始值，则javascript将其转换并返回
        * 数组Array类型返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串，如果字符串中只存在数字，则返回数字，其他情况返回NaN；由于其他对象的toString()方法返回的字符串中不只包括数字，所以返回NaN
    * 否则，javascript抛出一个类型错误异常
* 【String】
    * 如果对象具有toString()方法，则调用这个方法，如果它返回一个原始值，javascript将这个值转换为字符串(如果本身不是字符串的话)，并返回这个字符串结果
    * 如果对象没有toString()方法，或者这个方法不返回一个原始值，那么javascript会调用valueOf()方法，如果存在这个方法，则javascript调用它，如果返回值是原始值，javascript将这个值转换为字符串(如果本身不是字符串的话)，并返回这个字符串结果
    * 否则，javascript无法从toString()或valueOf()获得一个原始值，因此这时它将抛出一个类型错误异常

#### 显式类型转换

* 【转成布尔】将一个值转为布尔值可使用Boolean()转型函数。
    * 转换成false的值称为假值(falsy value)，这7个值包括undefined、null、+0、-0、NaN、false、""(空字符串)。
    * 在Number()方法中空字符串和空白字符串都转换为0，而在Boolean()方法中，空字符串""转换为false，而空白字符串" "转换为true
    * 所有对象(包括空对象)的转换结果都是true，甚至连false对应的布尔对象new Boolean(false)也是true
* 【转成数值】有3个函数可以把非数值转换成数值:Number()、parseInt()和parseFloat()。其中Number()可以将任意类型的值转化成数值，而parseInt()和parseFloat()只应用于字符串向数字的转换
* 【转字符串】把一个值转换为字符串有两种方式，toString()和String()
    * undefined和null没有toString方法
    * 在不知道要转换的值是不是undefined或null时，可以使用转型函数String()
        * 如果值是null，则返回'null'；如果值是undefined，则返回'undefined'
        * 如果值不是null或undefined，则调用toString()方法并返回原始类型值
        * 若使用toString()方法返回的是对象，则再调用valueOf()方法返回原始类型值，若使用valueOf()方法返回的是对象，会报错

#### 隐式类型转换

隐式类型转换又称为自动类型转换，javascript中的运算符和语句中存在着大量的自动类型转换，其规则是：预期什么类型的值，就调用该类型的转换函数。类似地，将隐式类型转换分为转为布尔、转为数值和转字符串

* 【转为布尔】
    * 逻辑非运算符(!)
    * 条件运算符(?:)
    * if条件语句
    * while循环语句
* 【转为数字】
    * 算术运算符
    * 位运算符
    * 关系运算符
* 【转字符串】
    * 加法运算符
    * 关系运算符

## 函数

### 函数概述

#### 函数定义

* 函数声明语句 function funcname([arg1[, arg2[..., argn]]]) { statement; }
    * 变量的重复声明是无用的，但函数的重复声明会覆盖前面的声明(无论是变量还是函数声明)
    * 函数声明提升(hoisting)，函数名称和函数体都提升
    * 和变量声明一样，函数声明语句创建的变量无法删除 function foo(){}  delete foo;  // 无效
* 函数定义表达式 var functionName = function funcName([arg1[, arg2[..., argn]]]){ statement;} 其中funcName可有可无
    * 匿名函数(anonymous function)也叫拉姆达函数，是function关键字后面没有标识符的函数
    * 一个函数定义表达式包含名称，函数的局部作用域将会包含一个绑定到函数对象的名称。实际上，函数的名称将成为函数内部的一个局部变量
    * 对于具名的函数表达式来说，函数名称相当于函数对象的形参，只能在函数内部使用；而变量名称相当于函数对象的实参，在函数内部和函数外部都可以使用
    * 函数定义了一个非标准的name属性，通过这个属性可以访问到给定函数指定的名字，这个属性的值永远等于跟在function关键字后面的标识符，匿名函数的name属性为空
* Function构造函数 var functionName = new Function(['arg1' [,'arg2' [...,'argn']]],'statement;');
    * Function构造函数无法指定函数名称，它创建的是一个匿名函数
    * 从技术上讲，这是一个函数表达式。但，不推荐使用，因为这种语法会导致解析两次代码。第一次是解析常规javascript代码，第二次解析传入构造函数中的字符串，影响性能
    * Function()构造函数创建的函数，其函数体的编译总是会在全局作用域中执行。于是，Function()构造函数类似于在全局作用域中执行的eval()
    * 【注意】并不是所有的函数都可以成为构造函数

```js
var test = function fn(){
   return fn;
}
console.log(test);//fn(){return fn;}
console.log(test());//fn(){return fn;}
console.log(test()());//fn(){return fn;}

var test = function fn(){
   return fn === test;
}
console.log(test());//true
console.log(test === fn);//ReferenceError: fn is not defined

// IE11-浏览器无效，均输出undefined
// chrome在处理匿名函数的name属性时有问题，会显示函数表达式的名字
function fn(){};
console.log(fn.name);//'fn'
var fn = function(){};
console.log(fn.name);//''，在chrome浏览器中会显示'fn'
var fn = function abc(){};
console.log(fn.name);//'abc'
```

#### 函数返回值

如果函数调用时在前面加上了new前缀，且返回值不是一个对象，则返回this(该新对象)。如果返回值是一个对象，则返回该对象
```js
function test() { this.a = 1; return 1; }
console.log(new test().a)  // 1
function test2() { this.a = 1; this.b = 2; return { a: 10 }; }
console.log(new test2().a)  // 10
console.log(new test2().b)  // undefined
```

#### 函数调用

【函数调用模式】当一个函数并非一个对象的属性时，那么它就是被当做一个函数来调用的。对于普通的函数调用来说，函数的返回值就是调用表达式的值。使用函数调用模式调用函数时，非严格模式下，this被绑定到全局对象；在严格模式下，this是undefined。因此，'this'可以用来判断当前是否是严格模式。``var strict = (function(){return !this;}());``

因为函数调用模式的函数中的this绑定到全局对象，所以会发生全局属性被重写的现象
```js
var a = 0;
function fn() { this.a = 1; }
fn();
console.log(this,this.a,a);  // window 1 1
```

【方法调用模式】当一个函数被保存为对象的一个属性时，我们称它为一个方法。当一个方法被调用时，this被绑定到该对象。如果调用表达式包含一个提取属性的动作，那么它就是被当做一个方法来调用
```js
var o = { m: function() { console.log(1); } };
o.m();  // 1
```

任何函数只要作为方法调用实际上都会传入一个隐式的实参——这个实参是一个对象，方法调用的母体就是这个对象，通常来讲，基于那个对象的方法可以执行多种操作，方法调用的语法已经很清晰地表明了函数将基于一个对象进行操作。

和变量不同，关键字this没有作用域的限制，嵌套的函数不会从调用它的函数中继承this。如果嵌套函数作为方法调用，其this的值指向调用它的对象。如果嵌套函数作为函数调用，其this值不是全局对象(非严格模式下)就是undefined(严格模式下)。如果想访问这个外部函数的this值，需要将this的值保存在一个变量里，这个变量和内部函数都同在一个作用域内。通常使用变量self或that来保存this

【构造函数调用模式】如果函数或者方法调用之前带有关键字new，它就构成构造函数调用。如果构造函数调用在圆括号内包含一组实参列表，先计算这些实参表达式，然后传入函数内。如果构造函数没有形参，javascript构造函数调用的语法是允许省略实参列表和圆括号的。凡是没有形参的构造函数调用都可以省略圆括号。【注意】尽管构造函数可以像一个方法调用，它依然会使用这个新对象作为调用上下文。也就是说，在表达式new o.m()中，调用上下文并不是o。

【间接调用模式】javascript中函数也是对象，函数对象也可以包含方法。call()和apply()方法可以用来间接地调用函数。这两个方法都允许显式指定调用所需的this值，也就是说，任何函数可以作为任何对象的方法来调用，哪怕这个函数不是那个对象的方法。两个方法都可以指定调用的实参。call()方法使用它自有的实参列表作为函数的实参，apply()方法则要求以数组的形式传入参数
```js
var obj = {};
function sum(x,y) { return x + y; }
console.log(sum.call(obj, 1, 2));  // 3
console.log(sum.apply(obj, [1, 2]));  // 3
```

### 函数参数

#### arguments

javascript中的函数定义并未指定函数形参的类型，函数调用也未对传入的实参值做任何类型检查。实际上，javascript函数调用甚至不检查传入形参的个数。
```js
function add(x) { return x+1; }
console.log(add(1));  // 2
console.log(add('1'));  // '11'
console.log(add());  // NaN
console.log(add(1,2));  // 2
```

【注意】在非严格模式下，函数中可以出现同名形参，且只能访问最后出现的该名称的形参。而在严格模式下，出现同名形参会抛出语法错误<br>
当实参比函数声明指定的形参个数要少，剩下的形参都将设置为undefined值。常常使用逻辑或运算符给省略的参数设置一个合理的默认值<br>
```js
function add(x,y) {
    y = y || 2;
    console.log(x,y);  // 1 2
}
add(1);
```
【注意】实际上，使用y || 2是不严谨的，显式地设置假值(undefined、null、false、0、-0、''、NaN)也会得到相同的结果。所以应该根据实际场景进行合理设置。

当实参比形参个数要多时，剩下的实参没有办法直接获得，需要使用即将提到的arguments对象。javascript中的参数在内部用一个数组表示。函数接收到的始终都是这个数组，而不关心数组中包含哪些参数。在函数体内可以通过arguments对象来访问这个参数数组，从而获取传递给函数的每一个参数。arguments对象并不是Array的实例，它是一个类数组对象，可以使用方括号语法访问它的每一个元素。

【注意】arguments对象的length属性显示实参的个数，函数的length属性显示形参的个数

【注意】当形参与实参的个数相同时，arguments对象的值和对应形参的值保持同步。虽然命名参数和对应arguments对象的值相同，但并不是相同的命名空间。它们的命名空间是独立的，但值是同步的。但在严格模式下，arguments对象的值和形参的值是独立的。当形参并没有对应的实参时，arguments对象的值与形参的值并不对应
```js
function test(num1, num2) {
    console.log(num1, arguments[0]);  // 1 1
    arguments[0] = 2;
    console.log(num1, arguments[0]);  // 2 2
    num1 = 10;
    console.log(num1, arguments[0]);  // 10 10
}
test(1);
```

#### 内部属性

arguments对象有一个**属性callee**，该属性是一个指针，指向拥有这个arguments对象的函数。可以用于解耦合
```js
function factorial(num) { return num <= 1 ? 1 : num * arguments.callee(num - 1); }  // 可以随便修改函数名称，而不需要更改内部实现。
console.log(factorial(5));  // 120
```

但在严格模式下，访问这个属性会抛出TypeError错误，这时，可以使用具名的函数表达式
```js
var factorial = function fn(num) { return num <= 1 ? 1 : num * fn(num - 1); }
```

**函数的caller属性**保存着调用当前函数的函数的引用，如果是在全局作用域中调用当前函数，它的值是null。在严格模式下，访问这个属性会抛出TypeError错误<br>
**arguments对象的caller**始终是undefined，定义这个属性是为了分清arguments.caller和函数的caller属性。同样地，在严格模式下，访问这个属性会抛出TypeError错误

#### 函数重载

javascript函数不能像传统意义上那样实现重载。而在其他语言中，可以为一个函数编写两个定义，只要这两个定义的签名(接受的参数的类型和数量)不同即可。javascript函数没有签名，因为其参数是由包含0或多个值的数组来表示的。而没有函数签名，真正的重载是不可能做到的。只能通过检查传入函数中参数的类型和数量并作出不同的反应，来模仿方法的重载

#### 参数传递

javascript中**所有函数的参数都是按值传递的**。也就是说，把函数外部的值复制到函数内部的参数，就和把值从一个变量复制到另一个变量一样。

* 【基本类型值】在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量(命名参数或arguments对象的一个元素)
* 【引用类型值】在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部

### 函数的属性和方法

【属性】

* length：arguments对象的length属性表示实参个数，而函数的length属性则表示形参个数
* name
    * ES6对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量，ES5的name属性，会返回空字符串，而ES6的name属性会返回实际的函数名
    * 如果将一个具名函数赋值给一个变量，则ES5和ES6的name属性都返回这个具名函数原本的名字
    * Function构造函数返回的函数实例，name属性的值为“anonymous”
    * bind返回的函数，name属性值会加上“bound ”前缀
* prototype：每一个函数都有一个prototype属性，这个属性指向一个对象的引用，这个对象称做原型对象(prototype object)。每一个函数都包含不同的原型对象。将函数用做构造函数时，新创建的对象会从原型对象上继承属性

【方法】

* apply()和call()：每个函数都包含两个非继承而来的方法：apply()和call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于函数体内this对象的值。
    * 要想以对象o的方法来调用函数f()，可以这样使用call()和apply()：``f.call(o); f.apply(o);`` 假设o中不存在m方法，则等价于: ``o.m = f; o.m(); delete o.m;`` 。
    * apply()方法接收两个参数：一个是在其中运行函数的作用域(或者可以说成是要调用函数的母对象，它是调用上下文，在函数体内通过this来获得对它的引用)，另一个是参数数组。其中，第二个参数可以是Array的实例，也可以是arguments对象
    * call()方法与apply()方法的作用相同，它们的区别仅仅在于接收参数的方式不同。对于call()方法而言，第一个参数是this值没有变化，变化的是其余参数都直接传递给函数。换句话说，在使用call()方法时，传递给函数的参数必须逐个列举出来
    * 在非严格模式下，使用函数的call()或apply()方法时，null或undefined值会被转换为全局对象。而在严格模式下，函数的this值必须得是指定的值
    * 应用
        * 调用对象的原生方法
        * 找出数组最大元素
        * 将类数组对象转换成真正的数组
        * 将一个数组的值push到另一个数组中
        * 绑定回调函数的对象：由于apply方法（或者call方法）不仅绑定函数执行时所在的对象，还会立即执行函数，因此不得不把绑定语句写在一个函数体内。更简洁的写法是采用下面介绍的bind方法
* bind()
    * 当在函数f()上调用bind()方法并传入一个对象o作为参数，这个方法将返回一个新的函数。以函数调用的方式调用新的函数将会把原始的函数f()当做o的方法来调用，传入新函数的任何实参都将传入原始函数
    * [注意]IE8-浏览器不支持。兼容代码
        ```js
        Function.prototype.bind = function(context){
            var self = this, context = [].shift.call(arguments), args = [].slice.call(arguments);
            return function() { return self.apply(context, [].concat.call(args, [].slice.call(arguments))); }
        }
        ```
    * bind()方法不仅是将函数绑定到一个对象，它还附带一些其他应用：除了第一个实参之外，传入bind()的实参也会绑定到this，这个附带的应用是一种常见的函数式编程技术，有时也被称为'柯里化'(currying)
    * 使用bind()方法实现柯里化可以对函数参数进行拆分
* toString: 函数的toString()实例方法返回函数代码的字符串，而静态toString()方法返回一个类似'[native code]'的字符串作为函数体
* toLocaleString: 函数的toLocaleString()方法和toString()方法返回的结果相同
* valueOf: 函数的valueOf()方法返回函数本身

```js
// 1.5.1 调用对象的原生方法
var obj = {};
obj.hasOwnProperty('toString');  // false
obj.hasOwnProperty = function (){ return true; };
obj.hasOwnProperty('toString');  // true
Object.prototype.hasOwnProperty.call(obj, 'toString');  // false
// 1.5.2
var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a);  // 15
// 1.5.3
Array.prototype.slice.apply({0: 1, length: 1});  // [1]
[].prototype.slice.apply({0: 1, length: 1});  // [1]
// 1.5.4
var a = [];
Array.prototype.push.apply(a, [1, 2, 3]);
console.log(a);  // [1,2,3]
Array.prototype.push.apply(a, [2, 3, 4]);
console.log(a);  // [1,2,3,2,3,4]
// 如果使用ES6中的不定参数则非常简单
var a  = [...[1,2,3],...[2,3,4]];
console.log(a);//[1,2,3,2,3,4]
// 1.5.5
var o = {};
o.f = function () { console.log(this === o); }
var f = function (){ o.f.apply(o); };
$('#button').on('click', f);
// 2.1
function f(y) { return this.x + y; }
var o = {x: 1};
f.bind(o)(2)  // 2
// 2.3
function getConfig(colors,size,otherOptions) { console.log(colors,size,otherOptions); }
var defaultConfig = getConfig.bind(null,'#c00','1024*768');
defaultConfig('123');//'#c00 1024*768 123'
defaultConfig('456');//'#c00 1024*768 456'
```

### ES6函数扩展

ES6标准关于函数扩展部分，主要涉及以下四个方面：参数默认值、rest参数、扩展运算符和箭头函数

1. **参数默认值**
    1. 一般地，为参数设置默认值需进行如下设置 ``function test(x) { x = x || 'world' }``
    2. 但这样设置实际上是有问题的，如果y的值本身是假值(包括false、undefined、null、''、0、-0、NaN)，则无法取得本身值
    3. ES6允许为函数的参数设置默认值，即直接写在参数定义的后面
    4. [注意]参数变量是默认声明的，所以不能用let或const再次声明
    5. **尾参数**: 通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的
    6. 如果传入undefined，将触发该参数等于默认值，null则没有这个效果
    7. 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数
    8. [注意]如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了
    9. 作用域
        1. 如果参数默认值是一个变量，则该变量所处的作用域，与其他变量的作用域规则是一样的，即先是当前函数的作用域，然后才是全局作用域 ``function f(x, y = x) {}  // 这里的y默认值就是前面的x``
        2. 如果函数调用时，函数作用域内部的变量x没有生成，则x指向全局变量
    10. 应用
        1. 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误 ``function e() { throw new Error("missing parameters") } function(x = e) {}``
        2. [注意]将参数默认值设为undefined，表明这个参数可以省略
2. ES6引入rest参数(形式为“...变量名”)，用于获取函数的多余参数，这样就不需要使用arguments对象了。rest参数搭配的变量是一个数组，该变量将多余的参数放入数组中
    1. function add(...values) {}
    2. rest参数中的变量代表一个数组，所以数组特有的方法都可以用于这个变量
    3. 函数的length属性不包括rest参数
    4. [注意]rest参数之后不能再有其他参数
3. 扩展运算符(spread)是三个点(...)。它好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列。该运算符主要用于函数调用。该运算符主要用于函数调用。扩展运算符可以将字符串转为真正的数组

### 函数式编程

和Lisp、Haskell不同，javascript并非函数式编程语言，但在javascript中可以操控对象一样操控函数，也就是说可以在javascript中应用函数式编程技术。ES5中的数组方法(如map()和reduce())就可以非常适合用于函数式编程风格。本文将详细介绍函数式编程

1. 函数处理数组
    1. 假设有一个数组，数组元素都是数字，想要计算这些元素的平均值和标准差。
    2. 可以使用数组方法map()和reduce()实现同样的计算，这种实现极其简洁
    3. 在ES3中，并不包含这些数组方法，需要自定义map()和reduce()函数
2. 不完全函数
    1. 不完全函数是一种函数变换技巧，即把一次完整的函数调用拆成多次函数调用，每次传入的实参都是完整实参的一部分，每个拆分开的函数叫做不完全函数，每次函数调用叫做不完全调用。这种函数变换的特点是每次调用都返回一个函数，直到得到最终运行结果为止
    2. 函数f()的bind()方法返回一个新函数，给新函数传入特定的上下文和一组指定的参数，然后调用函数f()。bind()方法只是将实参放在完整实参列表的左侧，也就是说传入bind()的实参都是放在传入原始函数的实参列表开始的位置，但有时希望将传入bind()的实参放在完整实参列表的右侧
    3. 可以使用不完全调用的组合来重新组织求平均数和标准差的代码，这种编码风格是非常纯粹的函数式编程
3. 记忆
    1. 将上次的计算结果缓存起来，在函数式编程中，这种缓存技巧叫做记忆(memorization)。记忆只是一种编程技巧，本质上是牺牲算法的空间复杂度以换取更优的时间复杂度，在客户端javascript中代码的执行时间复杂度往往成为瓶颈，因此在大多数场景下，这种牺牲空间换取时间的做法以提升程序执行效率的做法是非常可取的
    2. memorize()函数创建一个新的对象，这个对象被当作缓存的宿主，并赋值给一个局部变量，因此对于返回的函数来说它是私有的。所返回的函数将它的实参数组转换成字符串，并将字符串用做缓存对象的属性名。如果在缓存中存在这个值，则直接返回它；否则，就调用既定的函数对实参进行计算，将计算结果缓存起来并返回
4. 连续调用单参函数

```js
// 1.1
var data = [1,1,3,5,5];
var total = 0;
for(var i = 0 ; i < data.length; i++){
    total += data[i];
}
var mean = total/data.length;
total = 0;
for(var i = 0; i < data.length; i++){
    var deviation = data[i] - mean;
    total += deviation * deviation;
}
var stddev = Math.sqrt(total/(data.length-1));
// 1.2
Math.sum = function() { return Array.prototype.slice.call(arguments).reduce((pre, cur, index, arr) => pre + cur); }
Math.avg = function() { return Math.sum(...arguments) / arguments.length; }
Math.stdDev = function() {
    var avgNum = Math.avg(...arguments);
    return Math.sqrt(Array.prototype.reduce.call(arguments, (pre, cur, index, arr) => pre + Math.pow(cur - avgNum, 2), 0) / (arguments.length - 1));
}
Math.stdDev(1, 1, 3, 5, 5)
// 1.3
Array.prototype.map = Array.prototype.map ? Array.prototype.map : function (callback) {
    var result = []
    for(var i = 0, len = this.length; i < len; i++) {
        if (i in this) {
            result[i] = callback.call(null, this[i], i, this)
        }
    }
    return result
}
Array.prototype.reduce = Array.prototype.reduce ? Array.prototype.reduce : function (callback, initial) {
    var i = 0, len = this.length
    if (arguments.length == 1) {
        if (len == 0) {
            throw TypeError()
        }
        while (i < lne) {
            if (i in this) {
                initial = this[i++]
                break
            } else {
                i++
            }
        }
        if (len == i) {
            throw TypeError()
        }
    }
    while (i < len) {
        if (i in a) {
            initial = f.call(undefined, initial, this[i], i, this)
        }
        i++
    }
    return initial
}
```

```js
// 实现一个工具函数将类数组对象(或对象)转换为真正的数组
function array(a, n) { return Array.prototype.slice.call(a, n || 0); }
// 这个函数的实参传递到左侧
function partialLeft(f) {
    var args = arguments;
    return function() {
        var a = array(args, 1);
        a = a.concat(array(arguments));
        return f.apply(this, a);
    };
}
// 这个函数的实参传递到右侧
function partialRight(f){
    var args = arguments;
    return function() {
        var a = array(arguments);
        a = a.concat(array(args, 1));
        return f.apply(this, a);
    };
}
// 这个函数的实参被用作模板，实参列表中的undefined值都被填充
function partial(f) {
    var args = arguments;
    return function() {
        var a = array(args, 1);
        var i = 0, j = 0;
        // 遍历args，从内部实参填充undefined值
        for(;i < a.length; i++){
            if (a[i] === undefined) {
                a[i] = arguments[j++];
            }
            // 现在将剩下的内部实参都追加进去
        };
        a = a.concat(array(arguments, j));
        return f.apply(this, a);
    }
}
// 这个函数有三个实参
var f = function(x, y, z) { return x * (y - z); }
// 注意这三个不完全调用之间的区别
partialLeft(f, 2)(3, 4);  // 2*(3-4)=-2
partialRight(f, 2)(3, 4);  // 3*(4-2)=6
partial(f, undefined, 2)(3, 4);  // 3*(2-4)=-6

var data = [1, 1, 3, 5, 5];
var sum = function(x, y) { return x + y; }
var product = function(x, y) {return x * y; }
var neg = partial(product, -1);
var square = partial(Math.pow, undefined, 2);
var sqrt = partial(Math.pow, undefined, .5);
var reciprocal = partial(Math.pow, undefined, -1);
var mean = product(reduce(data, sum), reciprocal(data.length));
var stdDev = sqrt(product(reduce(map(data, compose(square, partial(sum, neg(mean)))), sum), reciprocal(sum(data.length, -1))));
```

```js
// 返回f()的带有记忆功能的版本
// 只有当f()的实参的字符串表示都不相同时它才会工作
function memorize(f) {
    var cache = {};  // 将值保存到闭包内
    return function() {
        // 将实参转换为字符串形式，并将其用做缓存的键
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        if (key in cache) {
            return cache[key];
        } else {
            return cache[key] = f.apply(this,arguments);
        }
    }
}
//返回两个整数的最大公约数
function gcd(a,b) {
    var t;
    if (a < b) {
        t = b, b = a, a = t;
    }
    while (b != 0) {
        t = b, b = a % b, a = t;
    }
    return a;
}
var gcdMemo = memorize(gcd);
gcdMemo(85, 187);  // 17
```

```js
function add(n) {
    return function f(m) {
        if (m === undefined) {
            return n;
        } else {
            n += m;
            return f;
        }
    }
}
// or
function add(n) {
    function f(m) {
        n += m;
        return f;
    };
    f.toString = f.valueOf = function () { return n }
    return f;
}
```

### 高阶函数

高阶函数(higher-order function)指操作函数的函数，一般地，有以下两种情况

1. 函数可以作为参数被传递
2. 函数可以作为返回值输出

javascript中的函数显然满足高阶函数的条件，在实际开发中，无论是将函数当作参数传递，还是让函数的执行结果返回另外一个函数，这两种情形都有很多应用场景。下面将对这两种情况进行详细介绍

1. **把函数当作参数传递**，代表可以抽离出一部分容易变化的业务逻辑，把这部分业务逻辑放在函数参数中，这样一来可以分离业务代码中变化与不变的部分。其中一个常见的应用场景就是回调函数。
2. 相比把函数当作参数传递，**函数当作返回值输出**的应用场景也有很多。让函数继续返回一个可执行的函数，意味着运算过程是可延续的

```js
var isString = function(obj) { return Object.prototype.toString.call(obj) === '[object String]'; };
var isArray = function(obj) { return Object.prototype.toString.call(obj) === '[object Array]'; };
var isNumber = function(obj) { return Object.prototype.toString.call(obj) === '[object Number]'; };
// ==>
var isType = function(type) { return function(obj) { return Object.prototype.toString.call( obj ) === '[object '+ type +']'; }};
var isString = isType('String');
var isArray = isType('Array');
var isNumber = isType('Number');
```

3. **AOP（面向切面编程）**的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等。把这些功能抽离出来之后，再通过“动态织入”的方式掺入业务逻辑模块中。这样做的好处首先是可以保持业务逻辑模块的纯净和高内聚性，其次是可以很方便地复用日志统计等功能模块。通常，在javascript中实现AOP，都是指把一个函数“动态织入”到另外一个函数之中。下面通过扩展Function.prototype来实现。

```js
Function.prototype.before = function(beforeFn) {
    var _this = this;  // 保存原函数的引用
    return function() {  // 返回包含了原函数和新函数的"代理"函数
        beforeFn.apply(this, arguments);  // 先执行新函数，修正this
        return _this.apply(this, arguments);  // 再执行原函数
    }
};
Function.prototype.after = function(afterFn) {
    var _this = this;
    return function() {
        var ret = _this.apply(this, arguments);  // 先执行原函数
        afterFn.apply(this, arguments);  // 再执行新函数
        return ret;
    }
};
var func = () => console.log(2);
func = func.before(function() {
    console.log(1);
}).after(function() {
    console.log(3);
});
func();
```

4. 其他应用
    1. 【not】返回参数的返回值的逻辑非
    2. 【mapper】返回的新函数将一个数组映射到另一个使用这个函数的数组上
    3. 【compose】接收两个函数f()和g()，并返回一个新函数用以计算f(g())

```js
// 1
function not(f) {
    return () => !(f.apply(this, arguments));
}
var even = (x) => x % 2 === 0;
var odd = not(even);
[1, 1, 3, 5, 5].every(odd);
// 2
function mapper(f) {
    return (a) => Array.prototype.map.call(a, f);
}
var increment = (x) => x + 1;
var incrementer = mapper(increment);
increment([1,2,3]);//[2,3,4]
// 3
function compose(f, g) {
    return () => f.call(this, g.apply(this, arguments));
}
```

### 函数柯里化

currying又称部分求值。一个currying的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值

1. 例子：每月开销函数

```js
var cost = (function() {
    var args = [];
    return function() {
        // 如果没有参数，则计算args数组中的和
        if (arguments.length === 0) {
            var money = 0;
            for (var i = 0, l = args.length; i < l; i++) {
                money += args[i];
            }
            return money;
            // 如果有参数，则只能是将数据传到args数组中
        } else {
            [].push.apply(args, arguments);
        }
    }
})();
cost(100); // 未真正求值
cost(200); // 未真正求值
cost(300); // 未真正求值
console.log(cost()); // 求值并输出：600
```

2. 通用函数

```js
var currying = function(fn) {
    var args = [];
    return function() {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            [].push.apply(args, arguments);
            return arguments.callee;
        }
    }
};
var cost = (function() {
    var money = 0;
    return function() {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }
        return money;
    }
})();
var cost = currying(cost); // 转化成 currying 函数
cost(100); // 未真正求值
cost(200); // 未真正求值
cost(300); // 未真正求值
alert(cost()); // 求值并输出：600
```

3. 可穿参函数
4. 求值柯里化
5. 反柯里化

### 函数节流和函数防抖

javascript中的函数大多数情况下都是由用户主动调用触发的，除非是函数本身的实现不合理，否则一般不会遇到跟性能相关的问题。但在一些少数情况下，函数的触发不是由用户直接控制的。在这些场景下，函数有可能被非常频繁地调用，而造成大的性能问题。解决性能问题的处理办法就是函数节流和函数防抖。本文将详细介绍函数节流和函数防抖

1. 常见场景
    1. mousemove事件。如果要实现一个拖拽功能，需要一路监听 mousemove 事件，在回调中获取元素当前位置，然后重置 dom 的位置来进行样式改变。如果不加以控制，每移动一定像素而触发的回调数量非常惊人，回调中又伴随着 DOM 操作，继而引发浏览器的重排与重绘，性能差的浏览器可能就会直接假死。
    2. window.onresize事件。为window对象绑定了resize事件，当浏览器窗口大小被拖动而改变的时候，这个事件触发的频率非常之高。如果在window.onresize事件函数里有一些跟DOM节点相关的操作，而跟DOM节点相关的操作往往是非常消耗性能的，这时候浏览器可能就会吃不消而造成卡顿现象
    3. 射击游戏的 mousedown/keydown 事件（单位时间只能发射一颗子弹）
    4. 搜索联想（keyup事件）
    5. 监听滚动事件判断是否到页面底部自动加载更多（scroll事件）
    6. 对于这些情况的解决方案就是函数节流（throttle）或函数去抖（debounce），核心其实就是限制某一个方法的频繁触发
2. 定时器管理 -- 两种机制
    1. 只要当前函数没有执行完成，任何新触发的函数都会被忽略，可以实现在持续触发事件的情况下，一段时间内只执行一次事件的效果，即函数节流
    2. 只要有新触发的函数，就立即停止执行当前函数，转而执行新函数，可以实现在持续触发事件的情况下，一定在事件触发n秒后执行，如果n秒内又触发了这个事件，则以新的事件的时间为准，还是n秒后执行，即函数防抖，简易代码如下
3. 函数防抖：利用函数来防止抖动。在执行触发事件的情况下，元素的位置或尺寸属性快速地发生变化，造成页面回流，出现元素抖动的现象。通过函数防抖，使得元素的位置或尺寸属性延迟变化，从而减少页面回流。简单的防抖函数代码如下，该函数接受2个参数，第一个参数为需要被延迟执行的函数，第二个参数为延迟执行的时间
4. 函数节流：即限制函数的执行频率，在持续触发事件的情况下，间断地执行函数；实现方法对应定时器管理的第一种策略，只要当前函数没有执行完成，任何新触发的函数都会被忽略
5. 数组分块
    1. 在前面关于函数节流和函数防抖的讨论中，提供了限制函数被频繁调用的解决方案。下面将遇到另外一个问题，某些函数确实是用户主动调用的，但因为一些客观的原因，这些函数会严重地影响页面性能
    2. 一个例子是创建WebQQ的QQ好友列表。列表中通常会有成百上千个好友，如果一个好友用一个节点来表示，在页面中渲染这个列表的时候，可能要一次性往页面中创建成百上千个节点
    3. 这个问题的解决方案之一是数组分块技术，下面的timeChunk函数让创建节点的工作分批进行，比如把1秒钟创建1000个节点，改为每隔200毫秒创建8个节点
    4. 数组分块是一种使用定时器分割循环的技术，为要处理的项目创建一个队列，然后使用定时器取出下一个要处理的项目进行处理，接着再设置另一个定时器
    5. 在数组分块模式中，array变量本质上就是一个“待办事宜”列表，它包含了要处理的项目。使用shift()方法可以获取队列中下一个要处理的项目，然后将其传递给某个函数。如果在队列中还有其他项目，则设置另一个定时器，并通过arguments.callee调用同一个匿名函数
    6. 数组分块的重要性在于它可以将多个项目的处理在执行队列上分开，在每个项目处理之后，给予其他的浏览器处理机会运行，这样就可能避免长时间运行脚本的错误。一旦某个函数需要花50ms以上的时间完成，那么最好看看能否将任务分割为一系列可以使用定时器的小任务

```js
// 2.1
function fn(method, context) {
    if (method.tId) {
        return false  // 忽略新函数
    }
    method.tId = setTimeout(() => method.call(context), 1000)
}
// 2.2
function fn(method, context) {
    clearTimeout(method.tId)
    method.tId = setTimeout(() => method.call(context), 1000)
}
// 3
const debounce = (fn, wait=30) => {
    return () => {
        clearTimeout(fn.timer)
        fn.timer = setTimeout(fn.bind(this, ...arguments), wait)
    }
}
// 4
const throttle = (fn, wait=100) =>{
    return function() {
        if (fn.timer) {
            return
        }
        fn.timer = setTimeout(() => {
            fn.apply(this, arguments)
            fn.timer = null
        }, wait)
    }
}
// 5
function chunk(array, process, context) {
    setTimeout(function() {
        // 取出下一个条目并处理
        var item = array.shift();
        process.call(context, item);
        // 若还有条目，再设置另一个定时器
        if (array.length > 0) {
            setTimeout(arguments.callee, 100);
        }
    }, 100);
}
// 5.2 -- 第1个参数是创建节点时需要用到的数据，第2个参数是封装了创建节点逻辑的函数，第3个参数表示每一批创建的节点数量
var timeChunk = function (ary, fn, count) {
    var start = function () {
        for (var i = 0; i < Math.min(count || 1, ary.length); i++) {
            var obj = ary.shift();
            fn(obj);
        }
    };
    return function () {
        var t = setInterval(function () {
            if (ary.length === 0) { // 如果全部节点都已经被创建好
                return clearInterval(t);
            }
            start();
        }, 200);    // 分批执行的时间间隔，也可以用参数的形式传入
    };
};
```
1. 

### 惰性函数

惰性函数表示函数执行的分支只会在函数第一次调用的时候执行，在第一次调用过程中，该函数会被覆盖为另一个按照合适方式执行的函数，这样任何对原函数的调用就不用再经过执行的分支了。本文将详细介绍惰性函数

1. **使用背景**：因为各浏览器之间的行为的差异，经常会在函数中包含了大量的if语句，以检查浏览器特性，解决不同浏览器的兼容问题。比如，最常见的为dom节点添加事件的函数。这个过程，在addEvent函数每次调用的时候都要走一遍，其实，如果浏览器支持其中的一种方法，那么它就会一直支持了，就没有必要再进行其他分支的检测了。也就是说，if语句不必每次都执行，代码可以运行的更快一些。解决方案就是惰性载入
2. **函数重写**
3. **惰性函数**的本质就是函数重写。所谓惰性载入，指函数执行的分支只会发生一次，有两种实现惰性载入的方式
    1. 第一种是在函数被调用时，再处理函数。函数在第一次调用时，该函数会被覆盖为另外一个按合适方式执行的函数，这样任何对原函数的调用都不用再经过执行的分支了。但是，这种方法有个缺点，如果函数名称有所改变，修改起来比较麻烦
    2. 第二种是声明函数时就指定适当的函数。把嗅探浏览器的操作提前到代码加载的时候，在代码加载的时候就立刻进行一次判断，以便让addEvent返回一个包裹了正确逻辑的函数

```js
// 1
function addEvent(type, element, fun) {
    if (element.addEventListener) {
        element.addEventListener(type, fun, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + type, fun);
    } else {
        element['on' + type] = fun;
    }
}
// 2
function a(){
    console.log('a');
    a = () => console.log('b');
}
// 3.1
function addEvent(type, element, fun) {
    if (element.addEventListener) {
        addEvent = (type2, element2, fun2) => element.addEventListener(type, fun, false)
    } else if (element.attachEvent) {
        addEvent = (type2, element2, fun2) => element.attachEvent('on' + type, fun)
    } else {
        addEvent = (type2, element2, fun2) => element['on' + type] = fun
    }
    return addEvent(type, element, fun)
}
// 3.2
var addEvent = (function() {
    if (document.addEventListener) {
        return (type, element, fun) => element.addEventListener(type, fun, false)
    } else if (document.attachEvent) {
        return (type, element, fun) => element.attachEvent('on' + type, fun)
    } else {
        return (type, element, fun) => element['on' + type] = fun
    }
})();
```

## 对象

### 初识对象

1. 对象创建
    1. new构造函数：使用new操作符后跟Object构造函数用以初始化一个新创建的对象。[注意]undefined和null会转换为一个空对象。Object()函数不通过new而直接使用，则相当于转换方法，可以把任意值转换为对象
    2. 对象直接量：new构造函数的语法糖，使用对象字面量的方法来定义对象，属性名会自动转换成字符串。[注意]一般地，对象字面量的最后一个属性后的逗号将忽略，但在IE7-浏览器中导致错误
    3. Object.create()。ES5定义了一个名为Object.create()的方法，它创建一个新对象，第一个参数就是这个对象的原型，第二个可选参数用以对对象的属性进行进一步描述。
        1. 可以通过传入参数null来创建一个没有原型的新对象，但通过这种方式创建的对象不会继承任何东西，甚至不包括基础方法。比如toString()和valueOf()。
        2. 如果想创建一个普通的空对象(比如通过{}或new Object()创建的对象)，需要传入Object.prototype。
        3. Object.create()方法的第二个参数是属性描述符
2. 对象组成：对象是属性的无序集合，由键名和属性值组成
    1. 对象的所有键名都是字符串，所以加不加引号都可以，如果不是字符串也会自动转换成字符串
    2. [注意]如果键名不符合标识符命名规则，则必须加上引号，否则会报错
    3. 属性值可以是任何类型的表达式，最终表达式的结果就是属性值的结果
    4. 如果属性值为函数，则通常把这个属性称为“方法”
    5. 由于对象的方法就是函数，因此也有name属性。方法的name属性返回紧跟在function关键字后面的函数名。如果是匿名函数，ES5环境会返回undefined，ES6环境会返回方法名
3. 引用对象：如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量
4. 实例方法
    1. valueOf()：返回当前对象
    2. toString()：返回当前对象对应的字符串形式。一般地，使用Object.prototype.toString()来获取对象的类属性，进行类型识别
    3. toLocaleString()：并不做任何本地化自身的操作，它仅调用toString()方法并返回对应值。[注意]Date和Number类对toLocaleString()方法做了本地化定制
5. 判断为空
    1. for-in
    2. JSON.stringify
    3. Object.keys

```js
// 1.1
var person = new Object();  // 如果不给构造函数传递参数可以不加括号 var person = new Object;
person.name = 'bai';
person.age = 29;
var o1 = { a: 1 };
var o2 = new Object(o1);
console.log(o1 === o2);  // true
var uObj = Object(undefined);
var nObj = Object(null);
console.log(Object.keys(nObj));  // []
console.log(Object.keys(uObj));  // []
function isObject(o) { return o == Object(o) }
// 1.2
var person = {
    name : 'bai',
    age : 29,
    5 : true
};
// 1.3.1
var o2 = Object.create(null); // o2不继承任何属性和方法
var o1 = {};
console.log(Number(o1));  // NaN
console.log(Number(o2));  // Uncaught TypeError: Cannot convert object to primitive value
// 1.3.3
var o1 = Object.create({ z: 3 }, {
    y: { value: 2, writable: false, enumerable: true, configurable: true },
    x: { value: 1, writable: false, enumerable: true, configurable: true },
});
console.log(o1.x, o1.y, o1.z);  // 1 2 3
// 5.1
let isEmpty = (obj) => {
    for (let i in obj) {
        return false
    }
    return true
}
console.log(isEmpty({}))  // true
console.log(isEmpty({ a: 1 }))  // false
// 5.2
let isEmpty = (obj) => JSON.stringify(obj) === '{}'
// 5.3
let isEmpty = (obj) => !Object.keys(obj).length
```

### 对象的属性操作

对于对象来说，属性操作是绕不开的话题。类似于“增删改查”的基本操作，属性操作分为属性查询、属性设置、属性删除，还包括属性继承。本文是对象系列的第二篇——属性操作

1. 属性查询
    1. 点运算符
    2. 方括号运算符
    3. [注意]变量中可以存在中文，因为中文相当于字符，与英文字符同样对待，因此可以写成person.白或person['白']
    4. [注意]可计算属性名。var person = { [a + 3]: 'abc' };
    5. [注意]查询一个不存在的属性不会报错，而是返回undefined
2. 属性设置
    1. 点运算符
    2. 方括号运算符
3. 属性删除
    1. 使用delete运算符可以删除对象属性(包括数组元素)
    2. [注意]给对象属性置null或undefined，并没有删除该属性
    3. 使用delete删除数组元素时，不会改变数组长度
    4. delete运算符只能删除自有属性，不能删除继承属性(要删除继承属性必须从定义这个属性的原型对象上删除它，而且这会影响到所有继承自这个原型的对象)
    5. delete操作符的返回值是个布尔值true或false
        1. 当使用delete操作符删除对象属性或数组元素删除成功时，返回true
        2. 当使用delete操作符删除不存在的属性或非左值时，返回true
        3. 当使用delete操作符删除变量时，返回false，严格模式下会抛出ReferenceError错误
        4. 当使用delete操作符删除不可配置的属性时，返回false，严格模式下会抛出TypeError错误
4. 属性继承
    1. 每一个javascript对象都和另一个对象相关联。“另一个对象”就是我们熟知的原型，每一个对象都从原型继承属性。所有通过对象直接量创建的对象都具有同一个原型对象，并可以通过Object.prototype获得对原型对象的引用。console.log({}.__proto__ === Object.prototype);// true
    2. [注意]Object.prototype的原型对象是null，所以它不继承任何属性。console.log(Object.prototype.__proto__ === null);//true
    3. 对象本身具有的属性叫自有属性(own property)，从原型对象继承而来的属性叫继承属性
    4. in操作符可以判断属性在不在该对象上，但无法区别自有还是继承属性
    5. 通过for-in循环可以遍历出该对象中所有可枚举属性　
    6. 通过hasOwnProperty()方法可以确定该属性是自有属性还是继承属性。console.log(obj.hasOwnProperty('a'));//false
    7. Object.keys()方法返回所有可枚举的自有属性
    8. 与Object.keys()方法不同，Object.getOwnPropertyNames()方法返回所有自有属性(包括不可枚举的属性)

### 对象的属性描述符

1. 对象属性描述符的类型分为两种：数据属性和访问器属性
    1. 数据属性
        1. Configurable(可配置性)：可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true。[注意]使用var命令声明变量时，变量的configurable为false。一般地，设置Configurable:false后，将无法再使用defineProperty()方法来修改属性描述符。有一个例外，设置Configurable:false后，只允许writable的状态从true变为false
        2. Enumerable(可枚举性)：可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为true。用户定义的普通属性默认是可枚举的，而原生继承的属性默认是不可枚举的。propertyIsEnumerable()方法用于判断对象的属性是否可枚举。console.log(o.propertyIsEnumerable('a'));//true
        3. Writable(可写性)：可写性决定是否可以修改属性的值，默认值为true。[注意]设置writable:false后，通过Object.defineProperty()方法改变属性value的值不会受影响，因为这也意味着在重置writable的属性值为false
        4. Value(属性值)：属性值包含这个属性的数据值，读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置。默认值为undefined
    2. 访问器属性
        1. Configurable(可配置性)：可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true。[注意]使用var命令声明变量时，变量的configurable为false。一般地，设置Configurable:false后，将无法再使用defineProperty()方法来修改属性描述符。有一个例外，设置Configurable:false后，只允许writable的状态从true变为false
        2. Enumerable(可枚举性)：可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为true。用户定义的普通属性默认是可枚举的，而原生继承的属性默认是不可枚举的。propertyIsEnumerable()方法用于判断对象的属性是否可枚举。console.log(o.propertyIsEnumerable('a'));//true
        3. getter：在读取属性时调用的函数。默认值为undefined
        4. setter：在写入属性时调用的函数。默认值为undefined
        5. 和数据属性不同，访问器属性不具有可写性(Writable)。如果属性同时具有getter和setter方法，那么它是一个读/写属性。如果它只有getter方法，那么它是一个只读属性。如果它只有setter方法，那么它是一个只写属性。读取只写属性总是返回undefined
2. 前面介绍了属性描述符，要想设置它们，就需要用到描述符方法。描述符方法总共有以下4个：
    1. Object.getOwnPropertyDescriptor(o, name)：用于查询一个属性的描述符，并以对象的形式返回
        1. 查询obj.a属性时，可配置性、可枚举性、可写性都是默认的true，而value是a的属性值1
        2. 查询obj.b属性时，因为obj.b属性不存在，该方法返回undefined
    2. Object.defineProperty(o, name, desc)方法用于创建或配置对象的一个属性的描述符，返回配置后的对象。使用该方法创建或配置对象属性的描述符时，如果不针对该属性进行描述符的配置，则该项描述符默认为false
    3. Object.defineProperties(o, descriptors)方法用于创建或配置对象的多个属性的描述符，返回配置后的对象。Object.defineProperties(o, {a: {writeable: false}})
    4. Object.create(proto, descriptors)方法使用指定的原型和属性来创建一个对象
3. get和set
    1. get是一个隐藏函数，在获取属性值时调用。set也是一个隐藏函数，在设置属性值时调用，它们的默认值都是undefined。Object.definedProperty()中的get和set对应于对象字面量中get和set方法
    2. [注意]getter和setter取代了数据属性中的value和writable属性
    3. 给只设置get方法，没有设置set方法的对象赋值会静默失败，在严格模式下会报错
    4. 只设置set方法，而不设置get方法，则对象属性值为undefined
    5. 一般地，set和get方法是成对出现的
4. 对象状态：属性描述符只能用来控制对象中一个属性的状态。而如果要控制对象的状态，就要用到下面的6种方法
    1. Object.preventExtensions(o)(禁止扩展)：使一个对象无法再添加新的属性，并返回当前对象。在严格模式下，给禁止扩展的对象添加属性会报TypeError错误。Object.preventExtensions()方法并不改变对象中属性的描述符状态
    2. Object.isExtensible(o)(测试扩展)：Object.isExtensible()方法用来检测该对象是否可以扩展
    3. Object.seal()(对象封印)：使一个对象不可扩展并且所有属性不可配置，并返回当前对象
    4. Object.isSealed()(测试封印)：用来检测该方法是否被封印
    5. Object.freeze()(对象冻结)：使一个对象不可扩展，不可配置，也不可改写，变成一个仅可以枚举的只读常量，并返回当前对象
    6. Object.isFrozen()(检测冻结)：用来检测一个对象是否被冻结

```js
// 3.3
var o = { get a() { return 2; }}
console.log(o.a);  // 2
o.a = 3;  // 由于没有设置set方法，所以o.a=3的赋值语句会静默失败
console.log(o.a);  // 2
Object.defineProperty(o, 'a', {get: function() { return 2; }})  // 一样的不行，因为没有设置set
```

### 对象拷贝

1. 浅拷贝
    1. 简单拷贝：新建一个空对象，使用for-in循环，将对象的所有属性复制到新建的空对象中
    2. 使用属性描述符：通过对象的原型，建立一个空的实例对象。通过forEach语句，获取到对象的所有属性的属性描述符，将其作为参数，设置到新建的空实例对象中
    3. 使用jquery的extend()方法
2. 深拷贝
    1. 遍历复制：复制对象的属性时，对其进行判断，如果是数组或对象，则再次调用拷贝函数；否则，直接复制对象属性
    2. json：用JSON全局对象的parse和stringify方法来实现深复制算是一个简单讨巧的方法，它能正确处理的对象只有Number、String、Boolean、Array、扁平对象，即那些能够被json直接表示的数据结构
    3. 使用jquery的extend()方法

```js
// 1.1
function simpleClone1(obj) {
    if (typeof obj != 'object') {
        return false;
    }
    var cloneObj = {};
    for (var i in obj) {
        cloneObj[i] = obj[i];
    }
    return cloneObj;
}
// 1.2
function simpleClone2(orig) {
    var copy = Object.create(Object.getPrototypeOf(orig));
    Object.getOwnPropertyNames(orig).forEach((propKey) => Object.defineProperty(copy, propKey, Object.getOwnPropertyDescriptor(orig, propKey)));
    return copy;
}
// 1.3
var obj2 = $.extend({}, obj1);
// 2.1
function deepClone1(obj, cloneObj) {
    if (typeof obj != 'object') {
        return false;
    }
    cloneObj = cloneObj || {};
    for (var i in obj) {
        if (typeof obj[i] === 'object') {
            cloneObj[i] = (obj[i] instanceof Array) ? [] : {};
            arguments.callee(obj[i], cloneObj[i]);
        } else {
            cloneObj[i] = obj[i];
        }
    }
    return cloneObj;
}
// 2.2
function jsonClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
// 2.3
var obj2 = $.extend(true, {}, obj1);
```

# 难点重点

## 作用域

1. 

## 闭包

## this

## 继承实现

### 一张图理解prototype、proto和constructor的三角关系

javascript里的关系又多又乱。作用域链是一种单向的链式关系，还算简单清晰；this机制的调用关系，稍微有些复杂；而关于原型，则是 ![prototype、proto和constructor的三角关系](https://pic.xiaohuochai.site/blog/JS_ECMA_grammer_proto.png)

**【概念】**

上图中的复杂关系，实际上来源就两行代码

```js
function Foo(){};
var f1 = new Foo;
```

1. 构造函数
2. 实例对象
3. 原型对象及prototype: 构造函数有一个prototype属性，指向实例对象的原型对象。通过同一个构造函数实例化的多个对象具有相同的原型对象。经常使用原型对象来实现继承
4. constructor: 原型对象有一个constructor属性，指向该原型对象对应的构造函数。
5. proto: 实例对象有一个__proto__属性，指向该实例对象对应的原型对象。

```js
// 3
function Foo(){};
Foo.prototype.a = 1;
var f1 = new Foo;
var f2 = new Foo;
console.log(Foo.prototype.a);//1
console.log(f1.a);//1
console.log(f2.a);//1
// 4
function Foo(){};
console.log(Foo.prototype.constructor === Foo);//true
var f1 = new Foo;
console.log(f1.constructor === Foo);//true
```

**【说明】**

1. 第一部分： Foo
    1. 实例对象f1是通过构造函数Foo()的new操作创建的。构造函数Foo()的原型对象是Foo.prototype；实例对象f1通过__proto__属性也指向原型对象Foo.prototype
    2. 实例对象f1本身并没有constructor属性，但它可以继承原型对象Foo.prototype的constructor属性
2. 第二部分： Object
    1. Foo.prototype是f1的原型对象，同时它也是实例对象。实际上，任何对象都可以看做是通过Object()构造函数的new操作实例化的对象。所以，Foo.prototype作为实例对象，它的构造函数是Object()，原型对象是Object.prototype。相应地，构造函数Object()的prototype属性指向原型对象Object.prototype；实例对象Foo.prototype的proto属性同样指向原型对象Object.prototype
    2. 实例对象Foo.prototype本身具有constructor属性，所以它会覆盖继承自原型对象Object.prototype的constructor属性
    3. 如果Object.prototype作为实例对象的话，其原型对象是什么，结果是null。私以为，这可能也是typeof null的结果是'object'的原因之一吧
3. 第三部分： Function
    1. 前面已经介绍过，函数也是对象，只不过是具有特殊功能的对象而已。任何函数都可以看做是通过Function()构造函数的new操作实例化的结果
    2. 如果把函数Foo当成实例对象的话，其构造函数是Function()，其原型对象是Function.prototype；类似地，函数Object的构造函数也是Function()，其原型对象是Function.prototype
    3. 原型对象Function.prototype的constructor属性指向构造函数Function()；实例对象Object和Foo本身没有constructor属性，需要继承原型对象Function.prototype的constructor属性
    4. 所有的函数都可以看成是构造函数Function()的new操作的实例化对象。那么，Function可以看成是调用其自身的new操作的实例化的结果。所以，如果Function作为实例对象，其构造函数是Function，其原型对象是Function.prototype
    5. 如果Function.prototype作为实例对象的话，其原型对象是什么呢？和前面一样，所有的对象都可以看成是Object()构造函数的new操作的实例化结果。所以，Function.prototype的原型对象是Object.prototype，其原型函数是Object()

```js
// 1
function Foo(){};
var f1 = new Foo;
console.log(f1.__proto === Foo.prototype);  // true
console.log(Foo.prototype.constructor === Foo);  // true
console.log(f1.constructor === Foo);  // true
console.log(f1.hasOwnProperty('constructor'));  // false
// 2
function Foo(){};
var f1 = new Foo;
console.log(Foo.prototype.__proto__ === Object.prototype);  // true
function Foo(){};
var f1 = new Foo;
console.log(Foo.prototype.constructor === Foo);//true
console.log(Object.prototype.constructor === Object);//true
console.log(Foo.prototype.hasOwnProperty('constructor'));//true
// 3
function Foo(){};
var f1 = new Foo;
console.log(Foo.__proto__ === Function.prototype);//true
console.log(Object.__proto__ === Function.prototype);//true
```

**【总结】**

1. 【1】函数(Function也是函数)是new Function的结果，所以函数可以作为实例对象，其构造函数是Function()，原型对象是Function.prototype
2. 【2】对象(函数也是对象)是new Object的结果，所以对象可以作为实例对象，其构造函数是Object()，原型对象是Object.prototype
3. 【3】Object.prototype的原型对象是null

### 构造函数和原型对象

**【构造函数】**

1. 构造函数是用new创建对象时调用的函数，与普通唯一的区别是构造函数名应该首字母大写
2. 根据需要，构造函数可以接受参数
3. 如果没有参数，可以省略括号
4. 如果忘记使用new操作符，则this将代表全局对象window
5. **instanceof**操作符可以用来鉴别对象的类型
6. 每个对象在创建时都自动拥有一个构造函数属性**constructor**，其中包含了一个指向其构造函数的引用。而这个constructor属性实际上继承自原型对象，而constructor也是原型对象唯一的自有属性
7. 虽然对象实例及其构造函数之间存在这样的关系，但是还是建议使用instanceof来检查对象类型。这是因为构造函数属性可以被覆盖，并不一定完全准确
8. 针对丢失new的构造函数的解决办法是在构造函数内部使用instanceof判断是否使用new命令，如果发现没有使用，则直接使用return语句返回一个实例对象
9. 使用构造函数的好处在于所有用同一个构造函数创建的对象都具有同样的属性和方法
10. 构造函数允许给对象配置同样的属性，但是构造函数并没有消除代码冗余。使用构造函数的主要问题是每个方法都要在每个实例上重新创建一遍。在上面的例子中，每一个对象都有自己的sayName()方法。这意味着如果有100个对象实例，就有100个函数做相同的事情，只是使用的数据不同
11. 可以通过把函数定义转换到构造函数外部来解决问题
12. 但是，在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用域有点名不副实。而且，如果对象需要定义很多方法，就要定义很多全局函数，严重污染全局空间，这个自定义的引用类型没有封装性可言了。如果所有的对象实例共享同一个方法会更有效率，这就需要用到下面所说的原型对象

```js
// 8
function Person(){
    if(!(this instanceof Person)){
        return new Person();
    }
    this.age = 30;
}
var person1 = Person();
console.log(person1.age);//30
var person2 = new Person();
console.log(person2.age);//30
// 10
function Person(name){
    this.name = name;
    this.sayName = function(){
        console.log(this.name);
    }
}
// 11
function Person(name){
    this.name = name;
    this.sayName = sayName;
}
function sayName(){
    console.log(this.name);
}
```

**【原型对象】**

1. 通过构造函数的new操作创建实例对象后，会自动为构造函数创建prototype属性，该属性指向实例对象的原型对象。通过同一个构造函数实例化的多个对象具有相同的原型对象
2. 原型对象默认只会取得一个constructor属性，指向该原型对象对应的构造函数。至于其他方法，则是从Object继承来的
3. 由于实例对象可以继承原型对象的属性，所以实例对象也拥有constructor属性，同样指向原型对象对应的构造函数
4. 实例对象内部包含一个proto属性(IE10-浏览器不支持该属性)，指向该实例对象对应的原型对象
5. 一般地，可以通过**isPrototypeOf**()方法来确定对象之间是否是实例对象和原型对象的关系
6. ES5新增了**Object.getPrototypeOf()**方法，该方法返回实例对象对应的原型对象。实际上，Object.getPrototypeOf()方法和__proto__属性是一回事，都指向原型对象
7. **属性查找**：当读取一个对象的属性时，javascript引擎首先在该对象的自有属性中查找属性名字。如果找到则返回。如果自有属性不包含该名字，则javascript会搜索proto中的对象。如果找到则返回。如果找不到，则返回undefined
8. **in**操作符可以判断属性在不在该对象上，但无法区别自有还是继承属性
9. 通过**hasOwnProperty**()方法可以确定该属性是自有属性还是继承属性
10. 当一个函数被创建时，该原型对象的constructor属性自动创建，并指向该函数。当使用对象字面形式改写原型对象Person.prototype时，需要在改写原型对象时手动重置其constructor属性
11. 由于默认情况下，原生的constructor属性是不可枚举的，更妥善的解决方法是使用Object.defineProperty()方法，改变其属性描述符中的枚举性enumerable

```js
// 5
function Foo(){};
var f1 = new Foo;
console.log(f1.__proto__ === Foo.prototype);//true
console.log(Foo.prototype.isPrototypeOf(f1));//true
// 10
function Person(name){
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    sayName: function(){
        console.log(this.name);
    },
    toString : function(){
        return '[person ' + this.name + ']'
    }
};
// 11
Object.defineProperty(Person.prototype,'constructor',{
    enumerable: false,
    value: Person
});
```

**【总结】**

1. 构造函数、原型对象和实例对象之间的关系是实例对象和构造函数之间没有直接联系

### 创建对象的5种模式

1. 对象字面量
    1. 虽然对象字面量可以用来创建单个对象，但如果要创建多个对象，会产生大量的重复代码
2. 工厂模式
    1. 为了解决上述问题，人们开始使用工厂模式。该模式抽象了创建具体对象的过程，用函数来封装以特定接口创建对象的细节
    2. 工厂模式虽然解决了创建多个相似对象的问题，但没有解决对象识别的问题，因为使用该模式并没有给出对象的类型
3. 构造函数
    1. 可以通过创建自定义的构造函数，来定义自定义对象类型的属性和方法。创建自定义的构造函数意味着可以将它的实例标识为一种特定的类型，而这正是构造函数模式胜过工厂模式的地方。该模式没有显式地创建对象，直接将属性和方法赋给了this对象，且没有return语句
    2. 使用构造函数的主要问题是每个方法都要在每个实例上重新创建一遍，创建多个完成相同任务的方法完全没有必要，浪费内存空间
    3. 构造函数拓展模式：在构造函数模式的基础上，把方法定义转移到构造函数外部，可以解决方法被重复创建的问题
    4. 现在，新问题又来了。在全局作用域中定义的函数实际上只能被某个对象调用，这让全局作用域有点名不副实。而且，如果对象需要定义很多方法，就要定义很多全局函数，严重污染全局空间，这个自定义的引用类型没有封装性可言了
    5. 寄生构造函数模式：该模式的基本思想是创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新创建的对象。该模式是工厂模式和构造函数模式的结合。寄生构造函数模式与构造函数模式有相同的问题，每个方法都要在每个实例上重新创建一遍，创建多个完成相同任务的方法完全没有必要，浪费内存空间。还有一个问题是，使用该模式返回的对象与构造函数之间没有关系。因此，使用instanceof运算符和prototype属性都没有意义。所以，该模式要尽量避免使用。
    6. 稳妥构造函数模式：所谓稳妥对象指没有公共属性，而且其方法也不引用this的对象。稳妥对象最适合在一些安全环境中(这些环境会禁止使用this和new)或者在防止数据被其他应用程序改动时使用。稳妥构造函数与寄生构造函数模式相似，但有两点不同：一是新创建对象的实例方法不引用this；二是不使用new操作符调用构造函数。与寄生构造函数模式相似，使用稳妥构造函数模式创建的对象与构造函数之间也没有什么关系，因此instanceof操作符对这种对象也没有什么意义
4. 原型模式
    1. 使用原型对象，可以让所有实例共享它的属性和方法。换句话说，不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中
    2. 原型模式问题在于引用类型值属性会被所有的实例对象共享并修改，这也是很少有人单独使用原型模式的原因
5. 组合模式
    1. 组合使用构造函数模式和原型模式是创建自定义类型的最常见方式。构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性，这种组合模式还支持向构造函数传递参数。实例对象都有自己的一份实例属性的副本，同时又共享对方法的引用，最大限度地节省了内存。该模式是目前使用最广泛、认同度最高的一种创建自定义对象的模式

```js
// 1
var person1 = { name: "bai", age: 29, job: "Software Engineer", sayName: function() { alert(this.name); } };
// 2
function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayname = function() {
        alert(this.name);
    }
    return o;
}
var person1 = createPerson('bai', 29, 'software Engineer');
var person2 = createPerson('hu', 25, 'software Engineer');
// 3.5
var person1 = new createPerson("bai",29,"software Engineer");
var person2 = new createPerson("hu",25,"software Engineer");
// 3.6
function Person(name, age, job) {
    //创建要返回的对象
    var o = new Object();
    //可以在这里定义私有变量和函数
    //添加方法
    o.sayName = function () {
        console.log(name);
    };
    //返回对象
    return o;
}
//在稳妥模式创建的对象中，除了使用sayName()方法之外，没有其他方法访问name的值
var friend = Person("bai", 29, "Software Engineer");
friend.sayName();//"bai"
```

### 实现继承的3种形式

1. 类式继承
    1. 大多数面向对象的编程语言都支持类和类继承的特性，而JS却不支持这些特性，只能通过其他方法定义并关联多个相似的对象，如new和instanceof。不过在后来的ES6中新增了一些元素，比如class关键字，但这并不意味着javascript中是有类的，class只是构造函数的语法糖而已
    2. 类式继承的主要思路是，通过构造函数实例化对象，通过原型链将实例对象关联起来。下面将对类式继承进行详细解释
    3. 【原型链继承】javascript使用原型链作为实现继承的主要方法，实现的本质是重写原型对象，代之以一个新类型的实例。下面的代码中，原来存在于SuperType的实例对象中的属性和方法，现在也存在于SubType.prototype中了
    4. 原型链最主要的问题在于包含引用类型值的原型属性会被所有实例共享，而这也正是为什么要在构造函数中，而不是在原型对象中定义属性的原因。在通过原型来实现继承时，原型实际上会变成另一个类型的实例。于是，原先的实例属性也就顺理成章地变成了现在的原型属性了
    5. 原型链的第二个问题是，在创建子类型的实例时， 不能向超类型的构造函数中传递参数。实际上，应该说是没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数。再加上包含引用类型值的原型属性会被所有实例共享的问题，在实践中很少会单独使用原型链继承
    6. 【借用构造函数继承】借用构造函数(constructor stealing)的技术(有时候也叫做伪类继承或经典继承)。基本思想相当简单，即在子类型构造函数的内部调用超类型构造函数，通过使用apply()和call()方法在新创建的对象上执行构造函数
    7. 相对于原型链而言，借用构造函数有一个很大的优势，即可以在子类型构造函数中向超类型构造函数传递参数。但是，如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定义，因此函数复用就无从谈起了
    8. 【组合继承】组合继承(combination inheritance)有时也叫伪经典继承，指的是将原型链和借用构造函数的技术组合到一块，从而发挥二者之长的一种继承模式。其背后的思路是使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性
    9. 组合继承有它自己的问题。那就是无论什么情况下，都会调用两次父类型构造函数：一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。子类型最终会包含父类型对象的全部实例属性，但不得不在调用子类型构造函数时重写这些属性
    10. 【寄生组合继承】解决两次调用的方法是使用寄生组合式继承。寄生组合式继承与组合继承相似，都是通过借用构造函数来继承不可共享的属性，通过原型链的混成形式来继承方法和可共享的属性。只不过把原型继承的形式变成了寄生式继承。使用寄生组合式继承可以不必为了指定子类型的原型而调用父类型的构造函数，从而寄生式继承只继承了父类型的原型属性，而父类型的实例属性是通过借用构造函数的方式来得到的
    11. 【ES6中的class】
2. 原型继承
    1. 【原型继承】原型继承，在《你不知道的javascript》中被翻译为委托继承。道格拉斯·克罗克福德(Douglas Crockford)在2006年写了一篇文章，《javascript中的原型式继承》。在这篇文章中，他介绍了一种实现继承的方式，这种方式并没有使用严格意义上的构造函数。他的想法是借助原型可以基于已有的对象来创建新对象，同时不必因此创建自定义类型。在object()函数内部，先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回了这个临时类型的一个新实例。从本质上讲，object()对传入其中的对象执行了一次浅复制。
    2. 
3. 拷贝继承

```js
// 1.3
function Super(){
    this.value = true;
}
Super.prototype.getValue = function(){
    return this.value;
};
function Sub(){}
//Sub继承了Super
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;

var instance = new Sub();
console.log(instance.getValue());//true
// 1.4
function Super() {
    this.colors = ['red', 'blue', 'green'];
}
function Sub() { };
//Sub继承了Super
Sub.prototype = new Super();
var instance1 = new Sub();
instance1.colors.push('black');
console.log(instance1.colors);//'red,blue,green,black'
var instance2 = new Sub();
console.log(instance2.colors);//'red,blue,green,black'
```

```js
// 1.6
function Super() {
    this.colors = ['red', 'blue', 'green'];
}
function Sub() {
    //继承了Super
    Super.call(this);
}
var instance1 = new Sub();
instance1.colors.push('black');
console.log(instance1.colors);// ['red','blue','green','black']
var instance2 = new Sub();
console.log(instance2.colors);// ['red','blue','green']
// 1.9
function Super(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
Super.prototype.sayName = function () {
    return this.name;
};
function Sub(name, age) {
    // 第二次调用Super()，Sub.prototype又得到了name和colors两个属性，并对上次得到的属性值进行了覆盖
    Super.call(this, name);
    this.age = age;
}
//第一次调用Super()，Sub.prototype得到了name和colors两个属性
Sub.prototype = new Super();
Sub.prototype.constructor = Sub;
Sub.prototype.sayAge = function () {
    return this.age;
};
```

```js
// 1.10
function Super(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
Super.prototype.sayName = function () {
    return this.name;
};

function Sub(name, age) {
    Super.call(this, name);
    this.age = age;
}
if (!Object.create) {
    Object.create = function (proto) {
        function F() { };
        F.prototype = proto;
        return new F;
    }
}
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;

var instance1 = new Sub("bai", 29);
instance1.colors.push("black");
console.log(instance1.colors);//['red','blue','green','black']
instance1.sayName();//"bai"

var instance2 = new Sub("hu", 27);
console.log(instance2.colors);//['red','blue','green']
instance2.sayName();//"hu"
```

```js
// 1.11
class Super {
    constructor(name) {
        this.name = name;
        this.colors = ["red", "blue", "green"];
    }
    sayName() {
        return this.name;
    }
}

class Sub extends Super {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}

var instance1 = new Sub("bai", 29);
instance1.colors.push("black");
console.log(instance1.colors);//['red','blue','green','black']
instance1.sayName();//"bai"

var instance2 = new Sub("hu", 27);
console.log(instance2.colors);//['red','blue','green']
instance2.sayName();//"hu"
```

```js
// 2.1
function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}
var superObj = {
    init: function(value){
        this.value = value;
    },
    getValue: function(){
        return this.value;
    }
}
var subObj = object(superObj);
subObj.init('sub');
console.log(subObj.getValue());//'sub'
```

### 面向对象的6个概念



## 模块化

# DOM -- 节点

## 节点类型

### 12种DOM节点类型概述

DOM是javascript操作网页的接口，全称为文档对象模型(Document Object Model)。它的作用是将网页转为一个javascript对象，从而可以使用javascript对网页进行各种操作(比如增删内容)。浏览器会根据DOM模型，将HTML文档解析成一系列的节点，再由这些节点组成一个树状结构。DOM的最小组成单位叫做节点(node)，文档的树形结构(DOM树)由12种类型的节点组成。本文将主要说明DOM节点类型。

一般地，节点至少拥有nodeType、nodeName和nodeValue这三个基本属性。节点类型不同，这三个属性的值也不相同。DOM定义了一个Node接口，这个接口在javascript中是作为Node类型实现的，而在IE8-浏览器中的所有DOM对象都是以COM对象的形式实现的。所以，IE8-浏览器并不支持Node对象的写法。

nodeType：
```js
元素节点              Node.ELEMENT_NODE(1)
属性节点              Node.ATTRIBUTE_NODE(2)
文本节点              Node.TEXT_NODE(3)
CDATA节点             Node.CDATA_SECTION_NODE(4)
实体引用名称节点      Node.ENTRY_REFERENCE_NODE(5)
实体名称节点          Node.ENTITY_NODE(6)
处理指令节点          Node.PROCESSING_INSTRUCTION_NODE(7)
注释节点              Node.COMMENT_NODE(8)
文档节点              Node.DOCUMENT_NODE(9)
文档类型节点          Node.DOCUMENT_TYPE_NODE(10)
文档片段节点          Node.DOCUMENT_FRAGMENT_NODE(11)
DTD声明节点           Node.NOTATION_NODE(12)
```

1. 元素节点：对应网页的HTML标签元素，nodeType值是1，nodeName值是大写的标签名，nodeValue值是null。
2. 特性节点：对应网页中HTML标签的属性，只存在于元素的attributes属性中，并不是DOM文档树的一部分，nodeType值是2，nodeName值是属性名，nodeValue值是属性值
3. 文本节点：代表网页中的HTML标签内容，nodeType值是3，nodeName值是'#text'，nodeValue值是标签内容值
4. CDATA节点：只针对基于XML的文档，只出现在XML文档中，表示的是CDATA区域，格式一般为 <![CDATA[ ... ]]> 。nodeType的值为4，nodeName的值为'#cdata-section'，nodevalue的值是CDATA区域中的内容
5. 实体引用名称节点：
    1. 实体是一个声明，指定了在XML中取代内容或标记而使用的名称。 实体包含两个部分， 首先，必须使用实体声明将名称绑定到替换内容。 实体声明是使用 <!ENTITY name "value"> 语法在文档类型定义(DTD)或XML架构中创建的。其次，在实体声明中定义的名称随后将在 XML 中使用。 在XML中使用时，该名称称为实体引用。
    2. nodeType的值为5，nodeName的值为实体引用的名称，nodeValue的值为null
6. 实体名称节点：nodeType的值为6，nodeName的值为实体名称，nodeValue的值为null
7. 处理指令节点：nodeType的值为7，nodeName的值为target，nodeValue的值为entire content excluding the target
8. 注释节点：nodeType的值为8，nodeName的值为'#comment'，nodeValue的值为注释的内容
9. 文档节点：nodeType的值为9，nodeName的值为'#document'，nodeValue的值为null
10. 文档类型节点：nodeType的值为10，nodeName的值为doctype的名称，nodeValue的值为null
11. 文档片段节点：nodeType的值为11，nodeName的值为'#document-fragment'，nodeValue的值为null
12. DTD声明节点：nodeType的值为12，nodeName的值为符号名称，nodeValue的值为null

```js
console.log(document.body.nodeType,document.body.nodeName,document.body.nodeValue)  // 1 'BODY' null
var attr = document.getElementById('test').attributes.id
console.log(attr.nodeType,attr.nodeName,attr.nodeValue)  // 2 'id' 'test'
console.log(text.nodeType,text.nodeName,text.nodeValue)  // 3 '#text' '文本内容'

<!ENTITY publisher "Microsoft Press">  //实体名称
<pubinfo>Published by &publisher;</pubinfo>  //实体名称引用

var com = document.getElementById('myDiv').firstChild;  /* <div id="myDiv"><!-- 我是注释内容 --></div> */
console.log(com.nodeType,com.nodeName,com.nodeValue)  //8 '#comment' '我是注释内容'
console.log(document.nodeType,document.nodeName,document.nodeValue)  //9 "#document" null
```

### 文本节点

1. 空白文本节点：IE8-浏览器不识别空白文本节点，而其他浏览器会识别空白文本节点
2. 属性
    1. data属性与nodeValue属性相同
    2. wholeText属性将当前Text节点与毗邻的Text节点，作为一个整体返回。大多数情况下，wholeText属性的返回值，与data属性和textContent属性相同。但是，某些特殊情况会有差异。[注意]IE8-浏览器不支持
    3. length属性保存着节点字符的数目，而且nodeValue.length、data.length也保存着相同的值
3. 方法
    1. createTextNode()方法用于创建文本节点，这个方法接收一个参数——要插入节点中的文本
    2. normalize()方法的作用是合并相邻的文本节点，该方法在文本节点的父节点——元素节点上调用。[注意]IE9+浏览器无法正常使用该方法
    3. splitText()方法将一个文本节点分成两个文本节点，即按照指定的位置分割nodeValue值。原来的文本节点将包含从开始到指定位置之前的内容。这个方法会返回一个新文本节点，包含剩下的文本。splitText()方法返回的节点与原节点的parentNode相同
    4. appendData(text)方法将text添加到节点的末尾，该方法无返回值
    5. deleteData(offset,count)方法从offset指定的位置开始删除count个字符，无返回值
    6. insertData(offset,text)方法在offset指定的位置插入text，无返回值
    7. replaceData(offset,count,text)方法用text替换从offset指定位置开始到offset+count为止的文本，无返回值
    8. substringData(offset,count)方法提取从offset指定的位置开始到offset+count为止处的字符串，并返回该字符串。原来的文本节点无变化
4. 性能
    1. 通过上面的方法介绍，我们会发现，文本节点的操作与字符串的操作方法相当类似。一般地，我们获取文本都用innerHTML，然后再去字符串的操作方法去操作。下面对两者的性能进行对比分析
    2. 首先，对replaceData()和replace()这两个方法进行比较。replace()方法又分为两个方法，一个是在循环中直接对innerHTML进行赋值；另一个是在循环中对变量进行赋值，最后再赋值给innerHTML。
        1. var temp = divNode.innerHTML
        2. divNode.innerHTML = temp.replace(1,Math.floor(Math.random() * 9 + 1));  // 2351ms
        3. temp.innerHTML = temp.replace(1,Math.floor(Math.random() * 9 + 1));  // 408ms
        4. txtNode.replaceData(1,1,Math.floor(Math.random() * 9 + 1))  // 327ms
        5. 从结果中可以看出，在100万次的循环中，直接操作innerHTML开销较大，操作文本节点的的开销最小
    3. 对substring()和substringData()方法进行比较，这两种方法都用于提取子串。从结果中可以看出，在1000万次的循环中，使用substringData()方法比substring()方法的开销较大

```html
<!-- 1 -->
<div id="box">
    <div>1</div>
</div>
<script>
    //标准浏览器输出[text, div, text]，text表示空白文本节点
    //IE8-浏览器输出[div]，并不包含空白文本节点
    console.log(box.childNodes);
</script>

<!-- 2.2 -->
<div id="test">123</div>
<script>
    console.log(test.firstChild.wholeText);//123
    console.log(test.firstChild.data);//123
    //以索引1为指定位置分割为两个文本节点
    test.firstChild.splitText(1);
    console.log(test.firstChild.wholeText);//123
    console.log(test.firstChild.data);//1
</script>

<!-- 3.1 -->
<div id="box">123</div>
<script>
    var oBox = document.getElementById('box');
    var oText = document.createTextNode('<strong>hello</strong> world!');
    oBox.appendChild(oText);
    //'123&lt;strong&gt;hello&lt;/strong&gt; world!'
    console.log(oBox.innerHTML);
    //此时，页面中有两个文本节点
    console.log(oBox.childNodes.length);
</script>

<!-- 3.2 -->
<div id="box">0</div>
<script>
    var oText1 = document.createTextNode('1');
    var oText2 = document.createTextNode('2');
    box.appendChild(oText1);
    box.appendChild(oText2);
    console.log(box.childNodes);//[text, text, text]
    console.log(box.childNodes.length);//3
    box.normalize();
    //IE9+浏览器返回[text,text]，而其他浏览器返回[text]
    console.log(box.childNodes);
    //IE9+浏览器返回'01'，而其他浏览器返回'012'
    console.log(box.childNodes[0]);
    //IE9+浏览器返回2，使用该方法时只能将所有的文本节点减1；其他浏览器正常，返回2
    console.log(box.childNodes.length);//1
</script>
```

### 注释节点和文档类型节点

1. [注意]所有浏览器都识别不出位于``</html>``后面的注释
2. 注释节点Comment与文本节点Text继承自相同的基类，因此它拥有除了splitText()之外的所有字符串操作方法。与Text类型相似，也可以通过nodeValue或data属性来取得注释的内容
3. createComment()方法用于创建注释节点，这个方法接收一个参数——要插入节点中的注释文本：document.createComment(text)
4. 文档类型节点有一个快捷写法是document.doctype，但是该写法IE8-浏览器不支持
5. 文档类型节点DocumentType对象有3个属性:name、entities、notations
    1. name表示文档类型的名称，与nodeName的属性相同
    2. entities表示由文档类型描述的实体的NamedNodeMap对象
    3. notations表示由文档类型描述的符号的NamedNodeMap对象。通常浏览器中的文档使用的都是HTML或XHTML文档类型，因而entites和notations都是空列表(列表中的项来自行内文档类型声明)
6. IE8-浏览器将标签名为"!"的元素视作注释节点，所以文档声明也被视作注释节点

### 文档片段节点

1. 创建文档片段，要使用document.createDocumentFragment()方法。文档片段继承了Node的所有方法，通常用于执行那些针对文档的DOM操作
2. 我们经常使用javascript来操作DOM元素，比如使用appendChild()方法。每次调用该方法时，浏览器都会重新渲染页面。如果大量的更新DOM节点，则会非常消耗性能，影响用户体验。
    1. javascript提供了一个文档片段DocumentFragment的机制。如果将文档中的节点添加到文档片段中，就会从文档树中移除该节点。把所有要构造的节点都放在文档片段中执行，这样可以不影响文档树，也就不会造成页面渲染。当节点都构造完成后，再将文档片段对象添加到页面中，这时所有的节点都会一次性渲染出来，这样就能减少浏览器负担，提高页面渲染速度。
    2. 若使用IE浏览器，则使用文档片段DocumentFragment的性能并不会更好，反而变差；若使用chrome和firefox浏览器，使用文档片段DocumentFragment可以提升性能
    3. 由于文档片段的优点在IE浏览器下并不明显，反而可能成为多此一举。所以，该类型的节点并不常用

```html
<!-- 2.1.1 -->
<ul id="list1"></ul>
<script>
    var list1 = document.getElementById('list1');
    console.time("time");
    var fragment = document.createDocumentFragment();
    for(var i = 0; i < 500000; i++){
        fragment.appendChild(document.createElement('li'));
    }
    list1.appendChild(fragment);
    console.timeEnd('time');
</script>
<!-- 2.1.2 -->
<ul id="list"></ul>
<script>
    var list = document.getElementById('list');
    console.time("time");
    for(var i = 0; i < 500000; i++){
        list.appendChild(document.createElement('li'));
    }
    console.timeEnd('time');
</script>
```

### 元素节点

1. 父节点parentNode指向包含该元素节点的元素节点Element或文档节点Document
2. 要访问元素的标签名可以使用nodeName，也可以使用tagName属性，这两个属性会返回相同的值
3. 元素可以有任意数目的子节点和后代节点，因为元素可以是其他元素的子节点。元素的childNodes属性中包含了它的所有子节点，这些子节点可能是元素、文本、注释、处理指令节点
4. 特性操作：hasAttribute()、getAttribute('name')、setAttribute('name', 'value')、removeAttribute()，可以针对任何特性使用，包括那些以HTMLElement类型属性的形式定义的特性。
    1. [注意]IE7-浏览器不支持hasAttribute()方法
    2. [注意]通过setAttrbute()方法设置的特性名会统一转换成小写形式
    3. IE7-浏览器设置class、style、for、cellspacing、cellpadding、tabindex、readonly、maxlength、rowspan、colspan、usemap、frameborder、contenteditable这13个特性没有任何效果
5. attributes属性
    1. getNamedItem(name)方法返回nodeName属性等于name的节点
    2. removeNamedItem(name)方法从列表中移除nodeName属性等于name的节点，并返回该节点
    3. setNamedItem(node)方法向列表中添加节点，该方法无返回值
    4. item(pos)方法返回位于数字pos位置处的节点，也可以用方括号法[]简写
    5. attributes属性主要用于特性遍历。在需要将DOM结构序列化为HTML字符串时，多数都会涉及遍历元素特性
    6. 针对attributes对象中的特性，不同浏览器返回的顺序不同。IE7-浏览器会返回HTML元素中所有可能的特性，包括没有指定的特性。可以利用特性节点的specified属性来解决IE7-浏览器的这个问题。如果specified属性的值为true，则意味着该属性被设置过。在IE中，所有未设置过的特性的该属性值都是false。而在其他浏览器中，任何特性节点的specified值始终为true。

```html
<!-- 4.3 -->
<div id="box">123</div>
<script>
    var oBox = document.getElementById('box');
    oBox.setAttribute("class","testClass");
    oBox.setAttribute("style","height: 100px; background: red;");
    //IE7下oBox.className的值为undefined
    if(!oBox.className){
        oBox.setAttribute("className","testClass");
        oBox.style.setAttribute("cssText","height: 100px; background: red;");
    }
</script>

<!-- 5.6 -->
<div id="box" name="abc" index="123" title="test"></div>
<script>
    var oBox = document.getElementById('box');
    var yesItem = oBox.attributes.getNamedItem("index");
    var noItem = oBox.attributes.getNamedItem("onclick");
    //所有浏览器浏览器都返回true
    console.log(yesItem.specified);
    //IE7-浏览器返回false，而其他浏览器报错，noItem不存在
    console.log(noItem.specified);
</script>
```

### 特性节点

1. [注意]关于特性节点是否存在子节点，各个浏览器表现不一致
2. 属性
    1. name是特性名称，与nodeName的值相同
    2. value是特性的值，与nodeValue的值相同
    3. specified是一个布尔值，用以区别特性是在代码中指定的，还是默认的。这个属性的值如果为true，则意味着要么是在HTML中指定了相应特性，要么是通过setAttribute()方法设置了该属性。在IE中，所有未设置过的特性的该属性值都为false，而在其他浏览器中，所有设置过的特性的该属性值都是true，未设置过的特性，如果强行为其设置specified属性，则报错。
3. 方法
    1. createAttribute()：方法传入特性名称并创建新的特性节点
    2. setAttributeNode()：方法传入特性节点并将特性添加到元素上，无返回值
    3. getAttributeNode()：方法传入特性名并返回特性节点
    4. removeAttributeNode()：方法传入特性名删除并返回删除的特性节点，但IE7-浏览器下无法删除

```html
<div id="box"></div>
<script>
    var oBox = document.getElementById('box');
    var oAttr = oBox.attributes;
    //(chrome\safari\IE9+\firefox) 2 id box null
    //(IE7-) 2 onmsanimationiteration null null
    console.log(oAttr[0].nodeType,oAttr[0].nodeName,oAttr[0].value,oAttr[0].parentNode)
    //(chrome\firefox) undefined
    //(safari) Text
    //(IE9+) box
    //(IE8-) 报错
    console.log(oAttr[0].childNodes[0])
</script> 
```

### 文档节点

1. 由于它是根节点，所以其父节点parentNode指向null，ownerDocument也指向null
2. 快捷访问
    1. 子节点
        1. **document.documentElement**属性始终指向HTML页面中的``<html>``元素
        2. **document.body**属性指向``<body>``元素
        3. **document.doctype**属性指向``<!DOCTYPE>``标签。[注意]IE8-不识别，输出null，因为IE8-浏览器将其识别为注释节点
        4. **document.head**属性指向文档的``<head>``元素
    2. 文档信息
        1. ``<title>``元素显示在浏览器窗口的标题栏或标签页上，**document.title**包含着``<title>``元素中的文本，这个属性可读可写
        2. **URL、domain、referrer**
            1. URL：页面的完整地址
            2. domain：domain与URL是相互关联的，包含页面的域名
            3. referrer：表示链接到当前页面的上一个页面的URL，在没有来源页面时，可能为空
            4. [注意]上面这些信息都来自请求的HTTP头部，只不过可以通过这三个属性在javascript中访问它而已
            5. 在这3个属性中，只有domain是可以设置的。但由于安全方面的限制，也并非可以给domain设罝任何值。如果URL中包含一个子域名，例如home.cnblogs.com,那么就只能将domain设置为"cnblogs.com"。不能将这个属性设置为URL中不包含的域。
        3. **document.baseURI**返回``<base>``标签中的URL，如果没有设置``<base>``，则该值与document.URL相同
        4. **document.charset**表示文档中实际使用的字符集
        5. **document.defaultView**保存着一个指针，指向拥有给定文档的窗口或框架。IE8-浏览器不支持defaultView属性，但IE中有一个等价的属性名叫parentWindow。var parentWindow = document.defaultView || document.parentWindow;
        6. **document.compatMode**表示文档的模式，在标准模式下值为"CSS1Compat"，在兼容模式下值为"BackCompat"
        7. **document.documentMode**属性表示当前的文档模式，[注意]该属性只有IE11-浏览器支持。IE11返回11，IE10返回10，IE9返回9，IE8返回8，IE7返回7，IE6返回6
        8. **document.lastModified**属性返回当前文档最后修改的时间戳，格式为字符串
    3. 节点集合
        1. **document.anchors**包含文档中所有带name特性的``<a>``元素
        2. **document.links**包含文档中所有带href特性的``<a>``元素
        3. **document.forms**包含文档中所有的``<form>``元素，与document.getElementsByTagName("form")结果相同
        4. **document.images**包含文档中所有的``<img>``元素，与document.getElementsByTagName('img')结果相同
        5. **document.scripts**属性返回当前文档的所有脚本(即script标签)
        6. 由于HTMLCollection实例可以用HTML元素的id或name属性引用，因此如果一个元素有id或name属性，就可以在上面这五个属性上引用：console.log(document.myForm === document.forms.myForm); // true
3. 文档写入方法
    1. write()和writeln()方法都接收一个字符串参数，即要写入到输出流中的文本。write()会原样写入，而writeln()则在字符串的末尾添加一个换行符(\n)，但换行符会被页面解析为空格。在页面被加载的过程中，可以使用这两个方法向页面中动态地加入内容。注意，这些好像是完全的替换，本来的内容会消失掉
    2. open()和close()方法分别用于打开和关闭网页的输出流。open()方法实际上等于清除当前文档。close()方法用于关闭open方法所新建的文档。一旦关闭，write方法就无法写入内容了。如果再调用write方法，就等同于又调用open方法，新建一个文档，再写入内容。所以，实际上，close()只是和open()方法配套使用而已。
    3. 一般地，先使用open()方法用于新建一个文档，然后使用write()和writeln()方法写入文档，最后使用close()方法，停止写入。
    4. [注意]如果是在页面加载期间使用write()和writeln()方法，则不需要用到这两个方法

```js
// 2.2.2
console.log(document.URL);//http://www.cnblogs.com/xiaohuochai/
console.log(document.domain);//www.cnblogs.com
console.log(document.referrer);//http://home.cnblogs.com/followees/
```

```html
<button id="btn">替换内容</button>
<script>
    btn.onclick = function() {
        document.write('123');
        document.writeln('abc');
        document.write('456');
    }
</script>
```

## 获取节点

### 元素选择器

### getElementsByClassName

### selector选择器

### 动态集合

## 节点操作

### 节点关系

### 节点操作

### 节点内容

### 节点遍历

### 节点范围

### 区分元素特性和对象属性

# DOM -- 脚本化CSS

# DOM -- 表单脚本

# DOM -- 元素尺寸

# DOM -- 事件

# 动画 -- 拖拽

# 动画 -- 运动

# 动画 -- canvas

# 动画 -- svg

# ajax

# 存储

# BOM

# 【空闲】【必要】
