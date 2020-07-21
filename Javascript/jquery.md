- [基础](#基础)
    - [jQuery设计思想](#jquery设计思想)
    - [理解jQuery对象$](#理解jquery对象)
    - [简易版jQuery——mQuery](#简易版jquerymquery)
    - [jQuery代码优化的9种方法](#jquery代码优化的9种方法)
- [选择器](#选择器)
    - [基础选择器和层级选择器](#基础选择器和层级选择器)
    - [表单选择器](#表单选择器)
    - [子元素选择器](#子元素选择器)
    - [索引选择器](#索引选择器)
    - [属性选择器](#属性选择器)
    - [内容选择器](#内容选择器)
    - [状态选择器](#状态选择器)
    - [伪子元素选择器](#伪子元素选择器)
- [常见操作](#常见操作)
    - [杂项方法](#杂项方法)
    - [工具方法](#工具方法)
    - [节点关系](#节点关系)
    - [节点操作](#节点操作)
    - [特性操作](#特性操作)
    - [文本内容](#文本内容)
    - [样式操作](#样式操作)
    - [元素尺寸和位置操作](#元素尺寸和位置操作)
    - [ajax](#ajax)
- [事件](#事件)
    - [事件绑定](#事件绑定)
    - [事件对象](#事件对象)
    - [鼠标事件](#鼠标事件)
- [动画](#动画)
    - [三种常见动画效果](#三种常见动画效果)
    - [自定义动画](#自定义动画)
    - [动画队列](#动画队列)
    - [动画控制](#动画控制)
- [插件](#插件)
    - [validation](#validation)
    - [编写jQuery插件](#编写jquery插件)

## 基础

### jQuery设计思想

jQuery的基本设计思想和主要用法，就是"选择某个网页元素，然后对其进行某种操作"。这是它区别于其他javascript库的根本特点。使用jQuery的第一步，往往就是将一个选择表达式，放进构造函数jQuery()(简写为$)，然后得到被选中的元素。

1. 模拟CSS选择元素
    1. $(document) //选择整个文档对象
    2. $('#myId') //选择ID为myId的网页元素
    3. $('div.myClass') // 选择class为myClass的div元素
    4. $('input[name=first]') // 选择name属性等于first的input元素
2. 特有表达式选择
    1. $('a:first') //选择网页中第一个a元素
    2. $('tr:odd') //选择表格的奇数行
    3. $('#myForm :input') // 选择表单中的input元素
    4. $('div:visible') //选择可见的div元素
    5. $('div:gt(2)') // 选择所有的div元素，除了前三个
    6. $('div:animated') // 选择当前处于动画状态的div元素
3. 多种筛选方法
    1. $('div').has('p'); // 选择包含p元素的div元素
    2. $('div').not('.myClass'); //选择class不等于myClass的div元素
    3. $('div').filter('.myClass'); //选择class等于myClass的div元素
    4. $('div').first(); //选择第1个div元素
    5. $('div').eq(5); //选择第6个div元素

写法

1. 方法函数化：在原生javascript中，赋值操作符用的比较多。而在jQuery中，多使用函数传参的方式，也就是方法函数化
    1. //原生 window.onload = function(){}; //jQuery $(function(){});
    2. //原生 div.onclick = function(){}; //jQuery div.click(function(){});
    3. //原生 div.innerHTML = '123'; //jQuery div.html('123');
2. 链式操作
    1. $('div').find('h3').eq(2).html('Hello');
        1. $('div') //找到div元素
        2. .find('h3') //选择其中的h3元素
        3. .eq(2) //选择第3个h3元素
        4. .html('Hello'); //将它的内容改为Hello
    2. jQuery还提供了.end()方法，使得结果集可以后退一步
        1. $('div')
        2. .find('h3')
        3. .eq(2)
        4. .html('Hello')
        5. .end() //退回到选中所有的h3元素的那一步
        6. .eq(0) //选中第一个h3元素
        7. .html('World'); //将它的内容改为World
3. 取赋值合体：操作网页元素，最常见的需求是取得它们的值，或者对它们进行赋值。jQuery使用同一个函数来完成取值(getter)和赋值(setter)，即"取值器"与"赋值器"合一。到底是取值还是赋值，由函数的参数决定
    1. 例子
        1. $('h1').html(); //html()没有参数，表示取出h1的值
        2. $('h1').html('Hello'); //html()有参数Hello，表示对h1进行赋值
    2. 常见的取值和赋值函数如下
        1. .html() 取出或设置html内容
        2. .text() 取出或设置text内容
        3. .attr() 取出或设置某个属性的值
        4. .width() 取出或设置某个元素的宽度
        5. .height() 取出或设置某个元素的高度
        6. .val() 取出某个表单元素的值
    3. 需要注意的是，如果结果集包含多个元素，那么赋值的时候，将对其中所有的元素赋值；取值的时候，则是只取出第一个元素的值。[注意].text()例外，它取出所有元素的text内容

### 理解jQuery对象$

1. 对象
    1. 说起jQuery，最明显的标志，毫无疑问，就是美元符号$，美元符号$其实是jquery的简写。而使用$()包装的对象就是jQuery对象
    2. 与jQuery对象相对应的就是DOM对象，DOM对象其实就是DOM元素节点对象。如果直接写document，则指的是document的DOM元素对象
    3. 而如果用\$()包括起来，如\$(document)，是jQuery(document)的简写形式，则指的是jQuery对象。
    4. [注意]jQuery对象无法使用DOM对象的方法，DOM对象也无法使用jQuery对象的方法
2. 转换
    1. DOM转jQuery对象：对于一个jQuery对象，只需要用$()把DOM对象包装起来，就可以获得一个jQuery对象
    2. jQuery转DOM对象：jQuery是一个类数组对象，可以通过[index]或get(index)的方法得到相应的DOM对象
3. 共存：如果jQuery对象和DOM对象指向同一对象，绑定不同函数，则函数会按照顺序依次执行
4. 不报错
    1. 如果使用DOM对象，为不存在的DOM对象设置样式会报错
    2. 而使用jQuery对象，为不存在的jQuery对象设置样式不会报错
5. 判断存在
    1. 一般地，DOM对象在使用之前需要判断存在，防止出错
    2. 对于jQuery对象来说，因为\$()获取到的永远是对象，即使网页上没有该元素。所以不能采用下面方式判断 if (\$("#test")) {}，应该根据获取到元素的长度来判断或者转换成DOM对象来判断 if (\$("#test").length) {};  if (\$("#test")[0]) {}
6. 最后要提一下jQuery的版本问题。jQuery从2.0版本开始不再支持IE8-浏览器，且去掉了一些过时的API，从而使体积更小，运行速率更高。所以，如果有兼容IE8-浏览器的需求，需要使用jQuery1.*版本

```html
<script src="jquery-3.1.0.js"></script>
<script>
    // 1.4
    $(document).onclick = function() { alert(0); };  // 无反应
    document.click(function() { alert(1); });  // Uncaught TypeError: document.click is not a function
    // 2.2
    console.log(document === $(document)[0]);  // true
    console.log(document === $(document).get(0));  // true
    // 3 -- 先弹出0，再弹出1
    document.onclick = function() { alert(0); }
    $(document).click(function() { alert(1); });
    // 
</script>
```


### 简易版jQuery——mQuery



### jQuery代码优化的9种方法

1. 用对选择器：在jQuery中，可以用多种选择器，选择同一个网页元素。每种选择器的性能是不一样的，应该了解它们的性能差异
    1. 最快的选择器：id选择器和元素标签选择器 -- 遇到这些选择器的时候，jQuery内部会自动调用浏览器的原生方法（比如getElementById()），所以它们的执行速度快。
    2. 较慢的选择器：class选择器 -- Firefox、Safari、Chrome、Opera浏览器，都有原生方法getElementByClassName()，所以速度并不慢。但是，IE5-IE8都没有部署这个方法，所以这个选择器在IE中会相当慢
    3. 最慢的选择器：伪类选择器和属性选择器 -- 浏览器没有针对它们的原生方法。但是，一些浏览器的新版本，增加了querySelector()和querySelectorAll()方法，因此会使这类选择器的性能有大幅提高
2. 理解父子关系
    1. 下面六个选择器，都是从父元素中选择子元素
        1. $('.child', $parent)
        2. $parent.find('.child')
        3. $parent.children('.child')
        4. $('#parent > .child')
        5. $('#parent .child')
        6. $('.child', $('#parent'))
    2. 第一条：给定一个DOM对象，然后从中选择一个子元素。jQuery会自动把这条语句转成$.parent.find('child')，这会导致一定的性能损失。它比最快的形式慢了5%-10%
    3. 第二条：是最快的语句，.find()方法会调用浏览器的原生方法（getElementById，getElementByName，getElementByTagName等等），所以速度较快
    4. 第三条：在jQuery内部，会使用$.sibling()和javascript的nextSibling()方法，一个个遍历节点。它比最快的形式大约慢50%
    5. 第四条：jQuery内部使用Sizzle引擎，处理各种选择器。Sizzle引擎的选择顺序是从右到左，所以这条语句是先选.child，然后再一个个过滤出父元素#parent，这导致它比最快的形式大约慢70%
    6. 第五条：这条语句与上一条是同样的情况。但是，上一条只选择直接的子元素，这一条可以选择多级子元素，所以它的速度更慢，大概比最快的形式慢了77%
    7. 第六条：jQuery内部会将这条语句转成$('#parent').find('.child')，比最快的形式慢了23%
3. 不过度使用jQuery
    1. jQuery速度再快，也无法与原生的javascript方法相比。所以有原生方法可以使用的场合，尽量避免使用jQuery。以最简单的选择器为例，document.getElementById("foo")要比$("#foo")快10多倍
    2. 另外，this.id的速度比$(this).attr('id')快了20多倍
4. 做好缓存
    1. 选中某一个网页元素，是开销很大的步骤。所以，使用选择器的次数应该越少越好，并且尽可能缓存选中的结果，便于以后反复使用。
    2. 根据测试，缓存比不缓存，快了2-3倍
    3. jQuery的一大特点，就是允许使用链式写法。采用链式写法时，jQuery自动缓存每一步的结果，因此比非链式写法要快。根据测试，链式写法比（不使用缓存的）非链式写法，大约快了25%
5. 事件委托
    1. javascript的事件模型，采用"冒泡"模式，也就是说，子元素的事件会逐级向上"冒泡"，成为父元素的事件。
    2. 利用这一点，可以大大简化事件的绑定。比如，有一个表格（table元素），里面有100个格子（td元素），现在要求在每个格子上面绑定一个点击事件（click），请问是否需要将下面的命令执行100次？ $("td").on("click", function() { $(this).toggleClass("click"); });
    3. 回答是不需要，我们只要把这个事件绑定在table元素上面就可以了，因为td元素发生点击事件之后，这个事件会"冒泡"到父元素table上面，从而被监听到。因此，这个事件只需要在父元素绑定1次即可，而不需要在子元素上绑定100次，从而大大提高性能。这就叫事件的"委托处理"，也就是子元素"委托"父元素处理这个事件。$("table").on("click", "td", function() { $(this).toggleClass("click"); });
    4. 更好的写法，则是把事件绑定在document对象上面。$(document).on("click", "td", function() { $(this).toggleClass("click"); });
    5. 如果要取消事件的绑定，就使用off()方法 $(document).off("click", "td");
6. 少改动DOM
    1. 改动DOM结构开销很大，因此不要频繁使用.append()、.insertBefore()和.insetAfter()这样的方法。如果要插入多个元素，就先把它们合并，然后再一次性插入。根据测试，合并插入比不合并插入，快了将近10倍
    2. 如果要对一个DOM元素进行大量处理，应该先用.detach()方法，把这个元素从DOM中取出来，处理完毕以后，再重新插回文档。根据测试，使用.detach()方法比不使用时，快了60%
    3. 如果要在DOM元素上储存数据，不要写成下面这样：var elem = $('#elem'); elem.data(key,value); 而要写成 var elem = $('#elem'); $.data(elem[0],key,value); 根据测试，后一种写法要比前一种写法，快了将近10倍。因为elem.data()方法是定义在jQuery函数的prototype对象上面的，而$.data()方法是定义jQuery函数上面的，调用的时候不从复杂的jQuery对象上调用，所以速度快得多
    4. 插入html代码的时候，浏览器原生的innterHTML()方法比jQuery对象的html()更快
7. 尽量少生成jQuery对象
    1. 每当使用一次选择器（比如$('#id')），就会生成一个jQuery对象。jQuery对象是一个很庞大的对象，带有很多属性和方法，会占用不少资源。所以，尽量少生成jQuery对象。举例来说，许多jQuery方法都有两个版本，一个是供jQuery对象使用的版本，另一个是供jQuery函数使用的版本。
    2. 下面两个例子，都是取出一个元素的文本，使用的都是text()方法
        1. 既可以使用针对jQuery对象的版本： var $text = $("#text"); var $ts = $text.text();
        2. 也可以使用针对jQuery函数的版本： var $text = $("#text"); var $ts = $.text($text);
        3. 由于后一种针对jQuery函数的版本不通过jQuery对象操作，所以相对开销较小，速度比较快
8. 选择作用域链最短的方法
    1. 严格地说，这一条原则对所有Javascript编程都适用，而不仅仅针对jQuery。我们知道，Javascript的变量采用链式作用域。读取变量的时候，先在当前作用域寻找该变量，如果找不到，就前往上一层的作用域寻找该变量。这样的设计，使得读取局部变量比读取全局变量快得多
    2. 请看下面两段代码，第一段代码是读取全局变量：var a = 0; function x(){ a += 1; } 第二段代码是读取局部变量：function y() { var a = 0; a += 1; } 第二段代码读取变量a的时候，不用前往上一层作用域，所以要比第一段代码快五六倍
    3. 同理，在调用对象方法的时候，closure模式要比prototype模式更快
        1. prototype模式：var X = function(name) { this.name = name; } X.prototype.get_name = function() { return this.name; };
        2. closure模式：var Y = function(name) { var y = { name: name }; return { 'get_name': function() { return y.name; } }; };
        3. 同样是get_name()方法，closure模式更快
9. 使用Pub/Sub模式管理事件
    1. 当发生某个事件后，如果要连续执行多个操作，最好不要写成下面这样：function doSomthing { doSomethingElse(); doOneMoreThing(); }
    2. 而要改用事件触发的形式：function doSomething { \$.trigger("DO_SOMETHING_DONE"); } \$(document).on("DO_SOMETHING_DONE", function() { doSomethingElse(); });
    3. 还可以考虑使用deferred对象：function doSomething() { var dfd = new $.Deferred(); /* Do something async, then... // dfd.resolve(); */ return dfd.promise(); } function doSomethingElse() { $.when(doSomething()).then(//The next thing); }

## 选择器

### 基础选择器和层级选择器

### 表单选择器

### 子元素选择器

### 索引选择器

### 属性选择器

### 内容选择器

### 状态选择器

### 伪子元素选择器

## 常见操作

### 杂项方法

### 工具方法

### 节点关系

### 节点操作

### 特性操作

### 文本内容

### 样式操作

### 元素尺寸和位置操作

### ajax

## 事件

### 事件绑定

### 事件对象

### 鼠标事件

## 动画

### 三种常见动画效果

### 自定义动画

### 动画队列

### 动画控制

## 插件

### validation

### 编写jQuery插件
