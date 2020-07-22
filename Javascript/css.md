- [urls](#urls)
- [基础](#基础)
    - [基础语法](#基础语法)
        - [引入CSS](#引入css)
            - [外部样式表](#外部样式表)
            - [内部样式表](#内部样式表)
            - [行间样式](#行间样式)
        - [选择器](#选择器)
        - [选择器新用法](#选择器新用法)
            - [变量](#变量)
            - [@apply](#apply)
            - [自定义选择器](#自定义选择器)
            - [选择器嵌套](#选择器嵌套)
        - [层叠](#层叠)
            - [特殊性](#特殊性)
            - [重要性](#重要性)
            - [继承](#继承)
            - [来源](#来源)
            - [层叠](#层叠-1)
        - [单位](#单位)
            - [绝对长度单位](#绝对长度单位)
            - [字体相关相对长度单位 em](#字体相关相对长度单位-em)
            - [字体相关相对长度单位 rem](#字体相关相对长度单位-rem)
            - [字体相关相对长度单位 ex](#字体相关相对长度单位-ex)
            - [字体相关相对长度单位 ch](#字体相关相对长度单位-ch)
            - [视口相关相对长度单位 vh](#视口相关相对长度单位-vh)
            - [视口相关相对长度单位 vw](#视口相关相对长度单位-vw)
            - [视口相关相对长度单位 vmin](#视口相关相对长度单位-vmin)
            - [视口相关相对长度单位 vmax](#视口相关相对长度单位-vmax)
        - [样式关键字](#样式关键字)
        - [calc()](#calc)
        - [默认可继承样式](#默认可继承样式)
        - [CSS Why](#css-why)
        - [变量Variable](#变量variable)
        - [属性速查表](#属性速查表)
            - [布局类](#布局类)
            - [盒模型](#盒模型)
            - [文本类](#文本类)
            - [修饰类](#修饰类)
            - [stylelint](#stylelint)
    - [兼容](#兼容)
        - [CSS Hack](#css-hack)
            - [属性标记法](#属性标记法)
            - [选择器前缀法](#选择器前缀法)
        - [CSS兼容性详解](#css兼容性详解)
            - [盒模型](#盒模型-1)
            - [布局类](#布局类-1)
            - [文本类](#文本类-1)
            - [修饰类](#修饰类-1)
            - [其他类](#其他类)
        - [haslayout](#haslayout)
    - [伪类伪元素](#伪类伪元素)
        - [伪元素](#伪元素)
        - [计数器](#计数器)
        - [伪类](#伪类)
    - [规范](#规范)
        - [CSS reset](#css-reset)
        - [CSS命名实践](#css命名实践)
        - [CSS规范](#css规范)
        - [命名规范](#命名规范)
        - [CSS编码技巧](#css编码技巧)
        - [代码检查工具stylelint](#代码检查工具stylelint)
            - [vue](#vue)
            - [react](#react)
            - [注意事项](#注意事项)
- [布局](#布局)
    - [盒模型](#盒模型-2)
        - [盒子尺寸](#盒子尺寸)
            - [盒模型](#盒模型-3)
            - [四个自适应宽高关键字](#四个自适应宽高关键字)
            - [边框和阴影](#边框和阴影)
            - [margin要点](#margin要点)
            - [margin负值](#margin负值)
            - [轮廓outline](#轮廓outline)
        - [弹性盒模型](#弹性盒模型)
            - [弹性盒模型flex](#弹性盒模型flex)
            - [旧版flex及兼容](#旧版flex及兼容)
            - [flex布局应用](#flex布局应用)
        - [盒子显示](#盒子显示)
            - [溢出overflow](#溢出overflow)
            - [裁剪clip](#裁剪clip)
            - [拉伸resize](#拉伸resize)
            - [滚动条](#滚动条)
            - [可见性visibility](#可见性visibility)
    - [普通流](#普通流)
        - [display](#display)
        - [haslayout](#haslayout-1)
        - [BFC](#bfc)
            - [触发条件](#触发条件)
            - [作用](#作用)
        - [视觉格式化](#视觉格式化)
        - [文本方向](#文本方向)
    - [浮动和定位](#浮动和定位)
        - [浮动](#浮动)
        - [清浮动](#清浮动)
        - [定位中的偏移](#定位中的偏移)
        - [定位中的堆叠z-index](#定位中的堆叠z-index)
        - [绝对定位](#绝对定位)
        - [绝对定位应用](#绝对定位应用)
            - [跟随图标](#跟随图标)
            - [视频提示](#视频提示)
            - [下拉菜单](#下拉菜单)
            - [边缘对齐](#边缘对齐)
            - [星号对齐](#星号对齐)
            - [全屏自适应](#全屏自适应)
            - [左右半区翻图](#左右半区翻图)
            - [九宫格](#九宫格)
            - [等高布局](#等高布局)
            - [整体布局](#整体布局)
        - [相对定位和固定定位](#相对定位和固定定位)
    - [布局方式](#布局方式)
        - [布局系统](#布局系统)
            - [Media媒体查询](#media媒体查询)
            - [多列布局](#多列布局)
            - [grid栅格布局](#grid栅格布局)
            - [移动优先的响应式布局](#移动优先的响应式布局)
        - [居中布局](#居中布局)
            - [水平居中](#水平居中)
            - [垂直居中](#垂直居中)
            - [水平垂直居中](#水平垂直居中)
        - [常见布局](#常见布局)
            - [两端对齐](#两端对齐)
            - [单列定宽单列自适应布局](#单列定宽单列自适应布局)
            - [两列自适应布局](#两列自适应布局)
            - [三列布局](#三列布局)
            - [三栏式布局(所谓的圣杯和双飞翼布局)](#三栏式布局所谓的圣杯和双飞翼布局)
            - [等分布局](#等分布局)
            - [等高布局](#等高布局-1)
            - [全屏布局](#全屏布局)
            - [sticky-footer布局](#sticky-footer布局)
- [渲染](#渲染)
    - [字体和文本](#字体和文本)
        - [字体](#字体)
        - [基础文本样式](#基础文本样式)
        - [行高与垂直对齐](#行高与垂直对齐)
        - [换行和空白符](#换行和空白符)
        - [文本溢出和文本阴影](#文本溢出和文本阴影)
    - [颜色和背景](#颜色和背景)
        - [颜色模式](#颜色模式)
        - [颜色模式转换器](#颜色模式转换器)
        - [前景色和透明度](#前景色和透明度)
        - [背景](#背景)
        - [光标](#光标)
    - [变形和动画](#变形和动画)
        - [过渡transition](#过渡transition)
        - [变形transform(2d)](#变形transform2d)
        - [变形transform(3d)](#变形transform3d)
        - [变形transform的副作用](#变形transform的副作用)
        - [线性渐变](#线性渐变)
        - [径向渐变](#径向渐变)
        - [动画animation](#动画animation)
        - [动画animation的三个应用(漂浮的白云、旋转的星球和正方体合成)](#动画animation的三个应用漂浮的白云旋转的星球和正方体合成)
        - [animate.css的使用](#animatecss的使用)
    - [渲染属性](#渲染属性)
        - [混合模式](#混合模式)
        - [滤镜](#滤镜)
        - [倒影](#倒影)
        - [页面渲染优化属性will-change](#页面渲染优化属性will-change)
        - [遮罩mask](#遮罩mask)
        - [路径裁剪clip-path](#路径裁剪clip-path)
    - [效果](#效果)
        - [元素显示隐藏的9种思路](#元素显示隐藏的9种思路)
        - [实现滑动门的3种方法](#实现滑动门的3种方法)
        - [CSS以图换字的9种方法](#css以图换字的9种方法)
        - [导航条Tab切换](#导航条tab切换)
        - [CSS画出的图](#css画出的图)
        - [纹理文本](#纹理文本)
        - [CSS文本效果](#css文本效果)
        - [CSS边框效果](#css边框效果)
        - [CSS背景效果](#css背景效果)
        - [CSS遮罩和毛玻璃效果](#css遮罩和毛玻璃效果)
- [额外](#额外)
    - [知识点1](#知识点1)
        - [知识点1.1](#知识点11)
- [【重点】、【不是很懂】](#重点不是很懂)

# urls

* [CSS禅意花园](http://www.csszengarden.com/)
* [CSS学习目录](https://www.cnblogs.com/xiaohuochai/p/5249139.html)

# 基础

## 基础语法

### 引入CSS

CSS语法非常简单，但容易忽略的一点是不能省略分号(最后一个样式除外)。

关于CSS的优先级先后问题，与**外部、内部、行间**这三种引入CSS的方式关系不大，主要与重要性、特殊性和出现顺序有关。在重要性相等的情况下，行间样式的优先级最高，外部样式和内部样式无可比性。

#### 外部样式表

【使用link标记】<br>
在link标记中rel和href属性是必须的，type属性和media属性可省略<br>
``<link rel="stylesheet" type="text/css" href="sheet1.css" media="all" />``

【多个样式表】<br>
一个文档可能关联多个样式表，如果是这样，文档最初显示时只会使用rel为stylesheet的link标记<br>
```html
<link rel="stylesheet" href="sheet1.css" />
<link rel="stylesheet" href="sheet2.css" />
```

【候选样式表】<br>
将rel属性的设置为alternate stylesheet可以定义候选样式表，只有在用户选择这个样式表时才会用于文档表现。如果浏览器能使用候选样式表，它会使用link元素的title属性值生成一个候选样式列表，可在菜单栏中查看->样式中进行选择。(IE和firefox支持)<br>
[注意]若一个候选样式表没有设置title，那么它将无法在候选样式列表中出现，则无法被引用<br>
```html
<link rel="stylesheet" type="text/css" href="sheet1.css" />
<link rel="alternate stylesheet" type="text/css" href="sheet2.css" title="sheet2"/>
```

#### 内部样式表

* 【使用style元素】内部样式表需要使用``<style>``元素包含样式表，它在文档中单独出现。
* 【多个style标签】文档中可出现多个style标签，且样式规则与层叠样式规则一致
* 【使用@import指令】与link类似，@import指令用于指示Web浏览器加载一个外部样式表，并在表现HTML文档时使用其样式。唯一的区别在于命令的具体语法和位置。@import指令常用于样式表需要使用另一个样式表中的样式的情况。[**注意**]@import要放在其他CSS规则之前，否则将根本不起作用。
* 【多个@import指令】可以使用@import指令导入多个CSS样式表，且可以使用media来限制应用场景。

```html
<style>
    @import url(sheet1.css) all;
    @import url(sheet2.css);
    body { background-color: red; }
</style>
```

#### 行间样式

如果只是想为单个元素指定一些样式，可以使用HTML的style属性来设置一个行间样式。[注意]行间样式若存在多个style属性，只能识别第一个

### 选择器

* 通配选择器\* ``* {}``
* 元素选择器 ``h2 {}``
* 类选择器 ``.c {}``
* ID选择器 ``#id1 {}``
* 属性选择器
    * 简单属性选择器 ``#div[class]{color: red;} [class]{color: red;} a[href][title]{color: red;}``
    * 具体属性选择器 ``a[href="http://www.baidu.com"][title="baidu"] {color: red;} [class="test box"]{color: red;} [id="tox"]{color: red;}``
    * 部分属性选择器
        * [class ~="b"] 选择class属性值在用空格分隔的词列表中包含词语"b"的所有元素
        * [class |="b"] 选择class属性值等于b或以b-开头的所有元素
        * [class ^="b"] 选择class属性值以"b"开头的所有元素
        * [class $="b"] 选择class属性值以"b"结尾的所有元素
        * [class *="b"] 选择class属性值包含"b"的所有元素
* 分组选择器 ``h1,p{color: red;}``
* 后代选择器 ``ul li{color: red;}`` ``ul > li{color: red;}``
* 兄弟元素选择器
    * 相邻兄弟选择器 ``div + p{color: red;}`` [注意]两个元素之间的文本内容不会影响相邻兄弟结合符起作用
    * 通用兄弟选择器 ``div ~ p {color:red;}`` 选择匹配的F元素，且位于匹配的E元素后的所有匹配的同级F元素
* 伪类选择器
    * 伪类顺序：link-visited-focus-hover-active
        * 静态伪类(只应用于超链接，包括link/visited) visited伪类只能设置字体颜色、边框颜色、outline颜色的样式
        * 动态伪类(可应用于任何元素)
            * focus 拥有焦点(IE7-不支持)
            * hover 鼠标停留(IE6-不支持给<a>以外的其他元素设置伪类)
            * active 正被点击(IE7-不支持给<a>以外的其他元素设置伪类)
    * 目标伪类:target(IE8-不支持) 匹配锚点对应的目标元素 https://www.runoob.com/try/try.php?filename=trycss3_target
    * UI元素伪类(IE8-不支持)
        * enabled
        * disabled
        * checked
    * 结构伪类(IE8-不支持)
        * :root 选择文档的根元素，即``<html>``元素
        * E:first-child(IE6-不支持) 父元素的第一个子元素,且该子元素是E，与E:nth-child(1)等同
        * E:last-child(IE6-不支持) 父元素的最后一个子元素，且该子元素是E，与E:nth-last-child(1)等同
        * E:only-child 选择父元素中只包含一个子元素，子元素是E
        * E F:nth-child(n) 选择父元素的第n个子元素，父元素是E，子元素是F
        * E F:nth-last-child(n) 选择父元素的倒数第n个子元素，父元素是E，子元素是F
        * E:first-of-type 选择父元素中具有指定类型的第1个子元素，与E:nth-of-type(1)相同
        * E:last-of-type 选择父元素中具有指定类型的最后1个子元素，与E:nth-last-of-type(1)相同
        * E:only-of-type 选择父元素中只包含一个同类型的子元素，子元素是E
        * E F:nth-of-type(n) 选择父元素的具有指定类型的第n个子元素，父元素是E，子元素是F
        * E F:nth-last-of-type(n) 选择父元素的具有指定类型的倒数第n个子元素，父元素是E，子元素是F
        * E:empty 选择没有子元素的元素，而且该元素也不包含任何文本节点
        * [注意]n可以是整数(从1开始)，也可以是公式，也可以是关键字(even、odd)
    * :lang 相当于|=属性选择器(IE7-不支持)
        * p:lang(en) 匹配语言为"en"的<p>
    * 伪类的结合 [注意]顺序无关
        * a:visited:hover:first-child{color: black;}
* 伪元素选择器
    * IE8-浏览器仅支持伪元素选择器的单冒号表示法
    * :first-letter 设置首字母样式。所有前导标点符号应与第一个字母一同应用该样式；只能与块级元素关联；只有当选择器部分和左大括号之间有空格时，IE6-浏览器才支持。因为first-letter中存在连接符的原因 ``p:first-letter {color: red;} ``
    * :first-line 设置首行样式。只能与块级元素关联；只有当选择器部分和左大括号之间有空格时，IE6-浏览器才支持。因为first-line中存在连接符的原因 ``p:first-line{color: red;}``
    * :before 在元素内容前面插入内容(IE7-不支持)。默认这个伪元素是行内元素，继承元素可继承的属性；所有元素都必须放在出现该伪元素的选择器的最后面。若写成 p:before em 就是不合法的 ``p:before{content:"text"}``
    * :after 在元素内容后面插入内容(IE7-不支持)。默认这个伪元素是行内元素，继承元素可继承的属性 ``p:after{content:"text"}``
    * ::selection 匹配被用户选择的部分。目前selection只支持color和background两个属性，且只支持双冒号写法(IE8-浏览器不支持)。::-moz-selection firefox浏览器需要添加前缀
* 根元素选择器
    * 根元素选择器:root用来选择HTML元素，但由于其实质是伪类选择器，所以其优先级更高。在HTML上设置的样式，如果在:root上也设置了同样的样式，则会被覆盖。

### 选择器新用法

现在，预处理器(如[sass](https://www.cnblogs.com/xiaohuochai/p/6242257.html))似乎已经成为开发CSS的标配，正如几年前[jQuery](https://www.cnblogs.com/xiaohuochai/p/6489658.html)是开发JS的标配一样。JS的querySelector借鉴了jQuery的选择器思想，CSS选择器也借鉴了预处理器的变量定义、选择器嵌套、代码块重用等常用功能。本文将详细介绍CSS选择器的新用法。

#### 变量

* 【声明变量】变量必须以--开头。例如--example-variable: 20px，意思是将20px赋值给--example-varibale变量。可以将声明变量的语句置于任何元素内，如果要设置全局变量，则可以设置为:root、body或html：``:root{--bgColor:#000;}``。变量声明就像普通的样式声明语句一样，也可以使用内联样式：``<body style="--bgColor:#000">``。
* 【使用变量】使用var()函数使用变量，并且可以被使用在任意的地方。例如：var(--example-variable)会返回--example-variable所对应的值。``<body style="--bgColor:#000;"><div style="width: 100px;height: 100px;background-color: var(--bgColor)"></div></body>``。var()函数还有一个可选参数，用来设置默认值，当变量无法取得值时，则使用默认值``<div style="width: 100px;height: 100px;background-color: var(--bgColor,pink)"></div>``。

遗憾地是，除了CSS变量variable可以在新版本chrome下使用外，其他CSS选择器的新用法目前都没有浏览器支持。但是，CSS后处理器postcss中的cssnext插件可以解决所有问题。

#### @apply

应用规则集@apply令代码块可以重用，与var()相比，@apply是引用样式的集合，而var()是引用一个单独的样式值。
```css
:root {
    --overflow-ellipsis: {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    };
}
.title {
    width: 200px;
    @apply --overflow-ellipsis;
}
```

#### 自定义选择器

自定义选择器通过@custom-selector来定义，后面跟随一个:--接着是自定义选择器的名称，后面是需要定义的选择器，多个用逗号隔开：``@custom-selector :--heading h1, h2, h3, h4, h5, h6;``。这样，:--heading就成为一个可以使用的选择器。

#### 选择器嵌套

CSS规则包含许多重复的内容
```css
table.colortable td {
    text-align:center;
}
table.colortable td.c {
    text-transform:uppercase;
}
table.colortable td:first-child, table.colortable td:first-child+td {
    border:1px solid black;
}
table.colortable th {
    text-align:center;
    background:black;
    color:white;
}
```

使用嵌套语法后，代码如下
```css
table.colortable {
    & td {
        text-align:center;
        &.c { text-transform:uppercase }
        &:first-child, &:first-child + td { border:1px solid black }
    }
    & th {
        text-align:center;
        background:black;
        color:white;
    }
}
```

[注意]&嵌套选择符的两种错误写法如下所示
```css
.foo {
    color: red;
    .bar & { color:blue; }
}
.foo {
    color: red;
    &.bar, .baz { color: blue; }
}
```

为了解决上面的嵌套选择符&的脆弱，可以使用@nest选择符，@nest可适用范围更广，只要与嵌套选择符&共同作用即可
```css
.foo {
    color: red;
    @nest & > .bar {
        color: blue;
    }
}
/* 等价于 */
.foo { color: red; }
.foo > .bar { color: blue; }

.foo {
    color: red;
    @nest .parent & {
        color: blue;
    }
}
/* 等价于 */
.foo { color: red; }
.parent .foo { color: blue; }

.foo {
    color: red;
    @nest :not(&) {
        color: blue;
    }
}
/* 等价于 */
.foo { color: red; }
:not(.foo) { color: blue; }
```

[注意]@nest选择符的两种错误写法如下所示
```css
.foo {
    color: red;
    @nest .bar {
        color: blue;
    }
}
.foo {
    color: red;
    @nest & .bar, .baz {
        color: blue;
    }
}
```

### 层叠

层叠样式表CSS最基本的一个特性就是层叠。冲突的声明通过层叠进行排序，由此确定最终的文档表示。而这个过程的核心就是选择器及其相关声明的特殊性、重要性、来源及继承机制。本文将详细介绍CSS层叠

#### 特殊性

选择器的特殊性由选择器本身的组件确定。特殊性值表述为4个部分(如：0,0,0,0)。下面来介绍不同的选择器的特殊性值

1. 内联样式 -> 1,0,0,0
2. ID属性值 -> 0,1,0,0
3. 类属性值、属性选择或伪类 -> 0,0,1,0
4. 元素或伪元素 -> 0,0,0,1
5. 结合符和通配选择器 -> 0,0,0,0

特殊性的值是从左向右排序的，特殊性值1,0,0,0大于以0开头的所有值，而无论后面是什么数。在一组规则中，特殊性最高的规则胜出
```txt
h1{} -> 0,0,0,1
p em{} -> 0,0,0,2
.grape{} -> 0,0,1,0
*.bright{} -> 0,0,1,0
p.bright em.dark{} -> 0,0,2,2
#id121{} -> 0,1,0,0
div#side *[href]{} -> 0,1,1,1
```

#### 重要性

有时某个声明可能非常重要，超过了所有其他声明，CSS2.1称之为重要声明。重要声明在声明的结束分号之前插入!important来标志，如果!important放在声明的任何其他位置，整个声明都将无效。如果一个声明是重要声明，则超过所有的非重要声明

#### 继承

继承是从一个元素向其后代元素传递属性值所采用的机制。基于继承机制，样式不仅可以应用到指定的元素，还会应用到它的后代元素。在两个比较特殊的情况需要注意：一个是在HTML中，应用到body元素的背景样式可以传递到html元素；另一个是``<a>``标签不会继承父元素的文本样式。[注意]继承的属性没有特殊性

#### 来源

CSS按来源的不同分为3类：author(作者)、user(用户)、user agent(代理)

1. author(作者): 来自文档的样式文件。我们平常所写的样式基本上都是这一类的
2. user(用户): 用户指定的自定义的样式文件。一些UA允许用户导入自定义的样式文件
3. user agent(代理): 一些UA(如：浏览器)要为某些元素预设一个默认的样式，以方便阅读

关于用户CSS因为不常见，可能一些朋友不太理解。IE可以通过Internet 选项 -> 外观 -> 辅助功能 -> 用户样式表来指定样式文件。Chrome可以使用Stylish扩展来实现

#### 层叠

CSS层叠样式表的层叠特性就是让样式层叠在一起，通过特殊性、重要性、来源及继承机制来排列层叠样式的顺序及选出胜出者。

1. 首先，按照来源及重要性排序。在不考虑重要性的前提下，优先级顺序为：author(作者) > user(用户) > user agent(代理)。但是，如果考虑重要性，则user(用户)的优先级大于author(作者)的优先级，这样做是试图平衡author(作者)和user(用户)。所以，最终的优先级排序为：user(用户)!important > author(作者)!important > author > user > user agent
2. 接着，对于非重要声明来说，按照特殊性排序。特殊性越高的规则，权重越大
3. 最后，如果特殊性相同，则按照出现顺序排序。声明在样式表或文档中越靠后出现，权重越大。如果样式表中有通过@import导入的样式表，一般认为出现在导入样式表中的声明在前，主样式表的所有声明在后

### 单位

本文分为绝对长度单位和相对长度单位来介绍CSS中的长度单位的主要知识

#### 绝对长度单位

* 像素px(pixels) 在web上，像素px是典型的度量单位，很多其他长度单位直接映射成像素。最终，他们被按照像素处理
* 英寸in(inches) 1in = 2.54cm = 96px　　
* 厘米cm(centimeters) 1cm = 10mm = 96px/2.54 = 37.8px
* 毫米mm(millimeters) 1mm = 0.1cm = 3.78px
* 1/4毫米q(quarter-millimeters) 1q = 1/4mm = 0.945px
* 点pt(points) 1pt = 1/72in = =0.0139in = 1/72*2.54cm = 1/72*96px = 1.33px
* 派卡pc(picas) 1pc = 12pt = 1/6in = 1/6*96px = 16px

#### 字体相关相对长度单位 em

em表示元素的font-size属性的计算值，如果用于font-size属性本身，相对于父元素的font-size；若用于其他属性，相对于本身元素的font-size。
```css
.box { font-size: 20px; }
.in {
    /* 相对于父元素，所以2*2px=40px */
    font-size: 2em;
    /* 相对于本身元素，所以5*40px=200px */
    height: 5em;
    /* 10*40px=400px */
    width: 10em;
    background-color: lightblue;
}
```

#### 字体相关相对长度单位 rem

rem是相对于根元素html的font-size属性的计算值
```css
/* 浏览器默认字体大小为16px，则2*16=32px，所以根元素字体大小为32px */
html { font-size: 2rem; }
/* 2*32=64px */
.box { font-size: 2rem; }
.in {
    /* 1*32=32px */
    font-size: 1rem;
    /* 1*32=32px */
    border-left: 1rem solid black;
    /* 4*32=128px */
    height: 4rem;
    /* 6*32=192px */
    width: 6rem;
    background-color: lightblue;
}
```

#### 字体相关相对长度单位 ex

ex是指所用字体中小写x的高度。但不同字体x的高度可能不同。实际上，很多浏览器取em值一半作为ex值。[注意]ex在实际中常用于微调。
```html
<style>
    .box { font-size: 20px; }
    .in {
        font-size: 1ex;
        border-left: 1ex solid black;
        height: 10ex;
        width: 20ex;
        background-color: lightblue;
    }
</style>
<button>宋体</button>
<button>微软雅黑</button>
<button>arial</button>
<button>serif</button>
<div class="box">
    <div class="in" id="test">测试文字</div>
</div>
<script>
    var aBtns = document.getElementsByTagName('button');
    for (var i = 0; i < aBtns.length; i++) {
        aBtns[i].onclick = function() {
            test.style.fontFamily = this.innerHTML;
        }
    }
</script>
```

#### 字体相关相对长度单位 ch

ch与ex类似，被定义为数字0的宽度。当无法确定数字0宽度时，取em值的一半作为ch值。 IE8-不支持。[注意]ch在实际中主要用于盲文排版
```css
.box { font-size: 20px; }
.in {
    font-size: 1ch;
    border-left: 1ch solid black;
    height: 10ch;
    width: 20ch;
    background-color: lightblue;
}
```

#### 视口相关相对长度单位 vh

视口相关的长度值相对于初始包含块的大小。当初始包含块的宽高变化时，他们都会相应地缩放。然而，当根元素的overflow值为auto时，任何滚动条会假定不存在。关于视口相关的单位有vh、vw、vmin、vmax4个单位。兼容性:IE8-不支持，IOS7.1-不支持，android4.3-不支持(对于vmax，所有IE浏览器都不支持)。[注意]黑莓错误的将其相对于视觉视口来计算；而safari奇怪地相对于html元素来计算，如果html中增加了内容，这两个单位也会发生变化。

vh相当于布局视口高度的 1/100。

#### 视口相关相对长度单位 vw

布局视口宽度的 1/100

#### 视口相关相对长度单位 vmin

布局视口高度和宽度之间的最小值的 1/100

#### 视口相关相对长度单位 vmax

布局视口高度和宽度之间的最大值的 1/100

### 样式关键字

在CSS中，有4个关键字理论上可以应用于任何的CSS属性，它们是initial(初始)、inherit(继承)、unset(未设置)、revert(还原)。而all的取值只能是以上这4个关键字。本文将介绍initial、inherit、unset、revert和all。

* initial 表示元素属性的初始默认值(该默认值由官方CSS规范定义)。兼容性: IE不支持。【注意】[关于各属性的初始默认值移步至此](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* inherit 表示元素的直接父元素对应属性的计算值。兼容性: IE7-不支持
* unset unset相对于initial和inherit而言，相对复杂一点。表示如果该属性默认可继承，则值为inherit；否则值为initial。实际上，设置unset相当于不设置。兼容性: IE不支持，safari9-不支持，ios9.2-不支持，android4.4.4-不支持
* revert 表示样式表中定义的元素属性的默认值。若用户定义样式表中显式设置，则按此设置；否则，按照浏览器定义样式表中的样式设置；否则，等价于unset。兼容性: 只有safari9.1+和ios9.3+支持
* all 表示重设除unicode-bidi和direction之外的所有CSS属性的属性值，取值只能是initial、inherit、unset和revert。兼容性: IE不支持，safari9-不支持，ios9.2-不支持，android4.4-不支持
    * 当all:initial时，.in的所有属性都取默认值：``border:none;padding:0;color:black;``
    * 当all:inherit时，.in的所有属性都取父元素继承值：``border:1px solid black;padding:20px;color:red;``
    * 当all:unset时，.in的所有属性都相当于不设置值，默认可继承的继承，不可继承的保持默认值：``border:none;padding:0;color:red;``

```html
<style>
    .test {
        border: 1px solid black;
        padding: 20px;
        color: red;
    }
    .in {
    /*  all: initial;
        all: inherit;
        all: unset;
        all: revert; */
    }
</style>
<div class="test">
    <div class="in">测试文字</div>
</div>
```

测试all的例子
```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;position:relative;}
    .con{float:left;}
    .show{float:left;}
    .con dl *{float:left;}
    .con dl+dl{margin-top:1%;clear:both;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:48%;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
    @media (min-width:600px){.con{width:50%;}
        .show{width:50%;}
        .box{width:580px;}
    }
    .test{border:1px solid black;padding:20px;color:red;}
    #show-img{text-align:center;}
</style>
<div class="box" id="box">
    <div class="con">
        <dl>
            <dt>all</dt>
            <dd>initial</dd>
            <dd>inherit</dd>
            <dd>unset</dd>
            <dd>revert</dd>
        </dl>
        <button id="reset" style="position: absolute; right:0;bottom:0;">还原</button>
        <!-- 添加测试单元1结束 -->
    </div>
    <div class="show">
        <h2 class="show-tit">all关键字演示</h2>
        <div class="test">
            <div class="in" id="sb">测试文字</div>
        </div>
        <div id="show-img"></div>
    </div>
</div>
<script>
    function getCSS(obj, style) { return window.getComputedStyle ? getComputedStyle(obj)[style] : obj.currentStyle[style]; };
    (function con() {
        var aDl = document.getElementById('box').getElementsByTagName('dl');
        var oSb = document.getElementById('sb');
        var oImg = document.getElementById('show-img');
        reset.onclick = () => history.go();
        oImg.innerHTML = '.in元素的样式为:' + '<br>' + 'padding:' + getCSS(oSb, 'padding') + '<br>' + 'border:' + getCSS(oSb, 'border') + '<br>' + 'color:' + getCSS(oSb, 'color');
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function() {
                    var oDl = this.parentNode;
                    oDl.getElementsByTagName('dd')[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    oSb.style.all = this.innerHTML;
                    oImg.innerHTML = '.in元素的样式为:' + '<br>' + 'padding:' + getCSS(oSb, 'padding') + '<br>' + 'border:' + getCSS(oSb, 'border') + '<br>' + 'color:' + getCSS(oSb, 'color');
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```
<iframe frameborder='0' src='./csses/all.html' width="100%" height="260"></iframe>

### calc()

数学表达式calc()是calculate计算的缩写，它允许使用+、-、*、/这四种运算符，可以混合使用%、px、em、rem等单位进行计算<br>
兼容性: IE8-、safari5.1-、ios5.1-、android4.3-不支持，android4.4-4.4.4只支持加法和减法。IE9不支持用于backround-position<br>
[注意]+和-运算符两边一定要有空白符

```html
<style>
    .test1 {
        border: calc(1px + 1px) solid black;
        /* calc里面的运算遵循*、/优先于+、-的顺序 */
        width: calc(100%/3 - 2*1em - 2*1px);
        background-color: pink;
        font-style: toggle(italic, normal);
    }
    .test2 {
        /* 由于运算符+的左右两侧没有空白符，所以失效 */
        border: calc(1px+1px) solid black;
        /* 对于不能小于0的属性值，当运算结果小于0时，按0处理 */
        width: calc(10px - 20px);
        padding-left: 10px;
        background-color: lightblue;
    }
</style>
<div class="test1">测试文字一</div>
<div class="test2">测试文字二</div>
```

```html
<style>
    p{margin: 0;}
    .parent{overflow: hidden;zoom: 1;}
    .left{float: left;width: 100px;margin-right: 20px;}
    .right{float: left;width: calc(100% - 120px);}
</style>
<div class="parent" style="background-color: lightgrey;">
    <div class="left" style="background-color: lightblue;">
        <p>left</p>
    </div>
    <div class="right"  style="background-color: lightgreen;">
        <p>right</p>
        <p>right</p>
    </div>
</div>
```

### 默认可继承样式

【常用默认可继承样式】
```txt
color
cursor
direction
font
letter-spacing
line-height
list-style
text-align
text-indent
text-shadow
text-transform
white-space
word-break
word-spacing
word-wrap
writing-mode
```

不常用可继承样式
```txt
caption-side
empty-cells
text-combine-upright
text-orientation
text-rendering
text-underline-position
widows
```

### CSS Why

【重点】

### 变量Variable

* 兼容性：移动端和IE浏览器不兼容
* 【声明变量】变量声明语句必须包含一个元素内，而不能随意放置。变量声明就像普通的样式声明语句一样，也可以使用内联样式
* 【使用变量】var()
* 和普通的样式属性一样，变量属性也支持继承和层叠。下面示例中，body元素的变量值为green，div元素的变量值为red; 基于层叠的原理，最终div元素的背景颜色为红色。``<body style="--bgColor:green;"><div style="width: 100px;height: 100px;--bgColor: red;background-color: var(--bgColor,pink)"></div></body>``
* CSS变量可以进行组合使用 ``.box { --top:20%; --left:30%; background-position: var(--left)  var(--top); }`` 。但是，CSS变量不能进行如下形式的组合，var(--color1)var(--color2)不被浏览器识别，如果分开，如var(--color1) var(--color2)，则被解析为# 333，同样无法被浏览器识别。
* 变量和普通样式值一样，除了组合，还可以使用calc进行计算
* 变量不支持!important，background-color:--color !important;是无效的。
* CSS变量可以和 JS 互相交互。要注意的是，只能使用getPropertyValue()和setProperty()方法，而不能使用style属性。

```html
<button id="btn" type="button">变浅蓝</button>
<div id="box" style="--color:lightgreen; background-color: var(--color); width: 100px; height: 100px; display:inline-block;"></div>
<script>
    var oBox = document.getElementById('box');
    console.log(oBox.style['--color']); // undefined
    console.log(oBox.style.getPropertyValue('--color')); // 'lightgreen'
    document.getElementById('btn').onclick = () => oBox.style.setProperty('--color','lightblue');
</script>
```

好处
* 可维护性
* 语义化
* 更方便的实现@media媒体查询

```css
.box {
    width: 100px;
    height: 100px;
    padding: 20px;
    margin: 10px;
    background-color: red;
}
@media screen and (max-width:600px) {
    .box {
        width: 50px;
        height: 50px;
        padding: 10px;
        margin: 5px;
    }
}
/* ====> */
.box {
    --base-size: 10px;
    width: calc(var(--base-size) * 10);
    height: calc(var(--base-size) * 10);
    padding: calc(var(--base-size) * 2);
    margin: calc(var(--base-size) * 1);
    background-color: red;
}
@media screen and (max-width:600px) {
    .box {
        --base-size: 5px;
    }
}
```

### 属性速查表

【重点】

本文将按照布局类属性、盒模型属性、文本类属性、修饰类属性这四个分类，对CSS常用属性进行重新排列，并最终设置为一份stylelintrc文件

#### 布局类

1. 定位 ``position z-index top bottom left right``
2. 浮动 ``float clear``
3. 多列布局 ``columns columns-width columns-count column-rule column-fill column-span column-gap``
4. 栅格布局
    1. 显示网格 ``display grid grid-template-rows grid-template-columns grid-column-gap grid-row-gap grid-gap``
    2. 网格线 ``grid-row-start grid-row-end grid-row grid-column-start grid-column-end grid-column grid-area``
    3. 隐式网格 ``grid-auto-rows grid-auto-columns grid-auto-flow grid-template-rows grid-template-columns grid-template-areas grid-template``
    4. 对齐 ``justify-items justify-self align-items align-self align-content``

#### 盒模型

* 弹性盒模型
    * 弹性容器 display flex-direction flex-wrap flex-flow justify-content align-items align-content
    * 弹性项目 flex flex-basis flex-grow flex-shrink align-self order
* 表格模型 table-layout empty-cells caption-side border-collapse border-spacing
* 列表模型 list-style
* 盒子尺寸 box-sizing display width height padding margin border border-radius outline
* 盒子显示 overflow clip resize visibility

#### 文本类

* 文本样式 font line-height text-align vertical-allign text-indent text-transform text-overflow text-decoration text-shadow text-justify text-emphasis white-space letter-spacing word-spacing word-wrap word-break
* 排版模式 writing-mode text-combine-upright unicode-bidi text-orientation direction

#### 修饰类

* 颜色 color background isolation clip-path mask filter box-shadow opacity cursor
* 变形 transform transform-style transform-origin perspective perspective-origin backface-visibility
* 动画 transition animation will-change

#### stylelint

```json
{
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "order/order": [
      "declarations",
      "custom-properties",
      "dollar-variables",
      "rules",
      "at-rules"
    ],
    "order/properties-order": [
      "position",
      "z-index",
      "top",
      "bottom",
      "left",
      "right",
      "float",
      "clear",
      "columns",
      "columns-width",
      "columns-count",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "column-fill",
      "column-span",
      "column-gap",
      "display",
      "grid",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-auto-rows",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-column-gap",
      "grid-row-gap",
      "grid-template",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-gap",
      "grid-row-gap",
      "grid-column-gap",
      "grid-area",
      "grid-row-start",
      "grid-row-end",
      "grid-column-start",
      "grid-column-end",
      "grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-row",
      "grid-row-start",
      "grid-row-end",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-flow",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-content",
      "align-items",
      "align-self",
      "order",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-collapse",
      "border-spacing",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "ruby-align",
      "ruby-merge",
      "ruby-position",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "border",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-top",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-top-left-radius",
      "outline",
      "outline-width",
      "outline-color",
      "outline-style",
      "outline-offset",
      "overflow",
      "overflow-x",
      "overflow-y",
      "resize",
      "visibility",
      "font",
      "font-style",
      "font-variant",
      "font-weight",
      "font-stretch",
      "font-size",
      "font-family",
      "font-synthesis",
      "font-size-adjust",
      "font-kerning",
      "line-height",
      "text-align",
      "text-align-last",
      "vertical-align",
      "text-overflow",
      "text-justify",
      "text-transform",
      "text-indent",
      "text-emphasis",
      "text-emphasis-style",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-style",
      "text-decoration-line",
      "text-underline-position",
      "text-shadow",
      "white-space",
      "overflow-wrap",
      "word-wrap",
      "word-break",
      "line-break",
      "hyphens",
      "letter-spacing",
      "word-spacing",
      "quotes",
      "tab-size",
      "orphans",
      "writing-mode",
      "text-combine-upright",
      "unicode-bidi",
      "text-orientation",
      "direction",
      "text-rendering",
      "font-feature-settings",
      "font-language-override",
      "image-rendering",
      "image-orientation",
      "image-resolution",
      "shape-image-threshold",
      "shape-outside",
      "shape-margin",
      "color",
      "background",
      "background-image",
      "background-position",
      "background-size",
      "background-repeat",
      "background-origin",
      "background-clip",
      "background-attachment",
      "background-color",
      "background-blend-mode",
      "isolation",
      "clip-path",
      "mask",
      "mask-image",
      "mask-mode",
      "mask-position",
      "mask-size",
      "mask-repeat",
      "mask-origin",
      "mask-clip",
      "mask-composite",
      "mask-type",
      "filter",
      "box-shadow",
      "opacity",
      "transform-style",
      "transform",
      "transform-box",
      "transform-origin",
      "perspective",
      "perspective-origin",
      "backface-visibility",
      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state",
      "scroll-behavior",
      "scroll-snap-type",
      "scroll-snap-destination",
      "scroll-snap-coordinate",
      "cursor",
      "touch-action",
      "caret-color",
      "ime-mode",
      "object-fit",
      "object-position",
      "content",
      "counter-reset",
      "counter-increment",
      "will-change",
      "pointer-events",
      "all",
      "page-break-before",
      "page-break-after",
      "page-break-inside",
      "widows"
    ],
  }
}
```

## 兼容

### CSS Hack

CSS Hack是实现浏览器样式兼容的兜底办法，能不用就尽量不要使用。但是，针对一些浏览器的bug，比如老版本IE的bug，有时使用CSS Hack是不得已而为之的做法。本文将详细介绍CSS Hack。CSS Hack主要分为属性标记法和选择器前缀法两种。

#### 属性标记法

* 【IE6-】对于IE6-浏览器主要使用下划线_和中划线-这两种字符 _color:blue; -color:blue;
* 【IE7-】对于IE7-浏览器可以使用非常多的字符，包括``\`~!@#$%^&*()=+{[]:<>,.?/``。但是，比较常用的是加号+和星号*。+color:blue; *color:blue;
* 【IE10-】使用后缀\9可以识别出IE10-浏览器。color:blue\9;
* 【IE8+】使用后缀\0可以识别出IE8+浏览器。color:blue\0;
* 【IE9、IE10】使用后缀\9\0可以识别出IE9、10浏览器。color:blue\9\0;

#### 选择器前缀法

* 【IE6-】在选择器前面添加* html，可以识别IE6-浏览器。[注意]\*和html之间有无空格都可以生效。\*html div{color:red}
* 【IE7】在选择器前面添加\*+html，可以识别IE7浏览器。[注意]\*、+、html之间有无空格都可以生效。*+html div{color:red}
* 【IE8】在选择器外层使用@media \0，可以识别IE8浏览器。[注意]@media和\0之间必须有空格。@media \0{}
* 【IE9+及其他非IE浏览器】在选择器前面添加:root，可以识别IE9+及其他非IE浏览器。:root div{color:red}

### CSS兼容性详解

对于前端工程师来说，不想面对又不得不面对的一个问题就是兼容性。在几年之前，处理兼容性，一般地就是处理IE低版本浏览器的兼容性。而近几年，随着移动端的发展，工程师也需要注意手机兼容性了。本文将详细介绍CSS兼容性。

#### 盒模型

* 宽高 width height max-width min-width max-height min-height
* 内边距 padding
* 外边距
    * margin
    * (IE不支持，且需要添加webkit或moz前缀) margin-start margin-end
    * (只有chrome和safari支持，且需要添加webkit前缀) -webkit-margin-before -webkit-margin-after
* 边框
    * border border-width border-style border-color
        * none:隐藏border，即border为0.具有最低的优先级，none是border的默认属性。
        * hidden:隐藏border,即border为0.具有最高的优先级
        * dashed:border为虚线
        * dotted：border为点
        * solid:border为直线
        * double:border为两条直线，并且两条直线的宽度、两条直线之间的距离相等，且它们和等于border-width。
        * groove:3d效果，看上去凹了下去
        * ridge:3d效果，看上去凸了出来
        * inset:3d效果
        * outset：3d效果
    * border-radius(IE8-不支持)
    * border-image(IE10-不支持border-image相关的) border-image-source border-image-slice border-image-width border-image-outset border-image-repeat
    * border-colors(只有firefox支持，需要添加-moz-前缀)
* 轮廓
    * (IE7-不支持) outline outline-width outline-color outline-style
    * (IE不支持) outline-offset
* box-sizing(IE7-不支持) 只有firefox支持padding-box属性值
    * 值为content-box，border和padding不计算入width之内
    * 值为padding-box，padding计算入width内
    * 值为border-box，border和padding计算入width之内，其实就是怪异模式了~

border 可应用于几乎所有有形的html元素，而 outline 是针对链接、表单控件和ImageMap等元素设计。从而另一个区别也可以推理出，那就是： outline 的效果将随元素的 focus 而自动出现，相应的由 blur 而自动消失。这些都是浏览器的默认行为，无需JavaScript配合CSS来控制。另外outline 不会象border那样影响元素的尺寸或者位置，outline不占据空间。在使用border-radius时，border会跟随改变，outline确依然是一个矩形。

#### 布局类

* display [注意]IE7-浏览器不支持table类属性值
* 浮动 float clear
* 定位 [注意]IE6-不支持固定定位position:fixed
    * position
    * left
    * right
    * top
    * bottom
    * z-index
* 溢出相关 【重点】
    * overflow overflow-x overflow-y
        * visible 默认值，内容不会被裁剪，可以呈现在元素框之外
        * hidden 内容会被裁剪
        * scroll 内容会被裁剪，但浏览器会提供滚动条方便查看被裁剪内容
        * auto 如果内容被裁剪，则提供滚动条
        * inherit
        * (横向滚动)overflow-x / overflow-y 所有主流浏览器都支持，但无法在 IE8 以及更早的浏览器正确地工作。添加以下值
            * no-display：如果内容不适合内容框，则删除整个框。
            * no-content：如果内容不适合内容框，则隐藏整个内容。
    * clip: rect(0px,60px,200px,0px); clip: auto(默认值); clip: inherit
    * visibility
        * visible / hidden / inherit
        * collapse 当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 "hidden"。
    * (IE不支持) resize
* flex 【不是很懂】【重点】(IE9-不支持) flex-direction flex-wrap flex-flow justify-content align-items align-content align-self flex-basis flex-grow flex-shrink flex order
* 多列布局 【不是很懂】【重点】
    * (IE10+和chrome浏览器支持标准写法，firefox、safari浏览器及移动端android、IOS需要添加前缀) column-width column-count column-gap column-rule column-span(firefox不支持该属性) columns
    * (只有firefox支持带前缀的column-fill属性) column-fill
* grid 【不是很懂】【重点】
    * (IE9-不支持，IE10+需要添加-ms-前缀，android4.4.4-不支持，IOS10.2-不支持) grid-template-rows grid-template-columns grid-template-areas grid-column-gap grid-row-gap grid-gap grid-row-start grid-row-end grid-row grid-column-start grid-column-end grid-column grid-area grid-auto-flow grid-auto-rows grid-auto-columns justify-items justify-self align-items align-self

#### 文本类

* 字体 font font-family font-size font-style font-variant font-weight line-height @font-face
* 首行缩进 text-indent
* 对齐 [注意]IE7-浏览器中vertical-align的百分比值不支持小数行高
    * 【不是很懂】 text-align vertical-align
    * (safari浏览器、IOS、androis4.4-浏览器不支持) text-align-last
* 间隔 【不是很懂】 word-spacing letter-spacing
* 大小写 【不是很懂】 text-transform
* 划线 【不是很懂】 text-decoration
* 空白符 【不是很懂】 white-space [注意]IE7-浏览器不支持pre-line和pre-wrap这两个属性值
* 换行 【不是很懂】 [注意1]W3C建议使用overflow-wrap替换word-wrap [注意2]移动端目前基本都不支持word-break的属性值keep-all
    * word-wrap word-break
    * (IE不支持) overflow-wrap
* 文本方向
    * direction unicode-bidi【不是很懂】
    * (safari和移动端IOS和android需要添加-webkit-前缀；IE浏览器只支持自己的私有属性值) writing-mode
* 文本溢出 text-overflow【不是很懂】
* 文本阴影 text-shadow (IE9-不支持)

#### 修饰类

* 背景
    * background background-color background-image background-repeat background-position
    * (IE8-不支持) background-attachment background-clip background-size
* 前景和透明度
    * color
    * opacity(IE8不支持)
* 颜色模式 [注意]IE7-不支持color:transparent，但支持background-color: transparent和border-color: transparent
    * (全兼容) 命名颜色 16进制 RGB
    * (IE8-不支持) currentColor RGBA HSL HSLA
* 光标 cursor [注意]IE7-不支持拓展样式
* 过渡 (IE9-不支持，safari3.1-6、IOS3.2-6.1、android2.1-4.3需要添加-webkit-前缀) transition-property transition-duration transiton-timing-function transition-delay transition
* 变形 (IE9-不支持，safari3.1-8、android2.1-4.4.4、IOS3.2-8.4都需要添加前缀) transform transform-origin transform-style perspective perspective-origin backface-visibility 【不是很懂】
* 渐变 IE9-不支持，safari4-5、IOS3.2-4.3、android2.1-3只支持线性渐变，且需要添加-webkit-；safari5.1-6、IOS5.1-6.1、android4-4.3支持线性和径向渐变，且需要添加-webkit-
* 动画(IE9-不支持；safari4-8、IOS3.2-8.4、android2.1-4.4.4需要添加-webkit-前缀) animation animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-direction animation-play-state animation-fill-mode 【不是很懂】
* 混合模式(IE浏览器、android4.4-不支持，safari和IOS需要添加-webkit-前缀) mix-blend-mode background-blend-mode isolation 【不是很懂】
* 滤镜 filter (IE浏览器及android4.3-浏览器不支持，android4.4+需要添加-webkit-前缀)
* 倒影 box-reflect 只有chrome和safari浏览器支持，且需要添加-webkit-前缀
* will-change(IE13+、chrome49+、safari9.1+、IOS9.3+、Android52+)

#### 其他类

* 表格 【不是很懂】
    * border-collapse table-layout caption-side
    * (IE7-不支持) border-spacing empty-cells
* 分页 【不是很懂】
    * page-break-after page-break-before page-break-inside
    * (IE7-不支持) orphans
    * (IE及手机端不支持) windows
* 选择器
    * 通配选择器 *；元素选择器 div；类选择器 .box；ID选择器 #box；后代选择器 div a；分组选择器 h1,p
    * (IE6-不支持) 属性选择器 h1[class]；子元素选择器 ul > li；相邻兄弟选择器 div + p
    * (IE7-不支持) 通用兄弟选择器 div ~ p
* 伪类
    * :link； :visited
    * (IE6-不支持给``<a>``以外的其他元素设置伪类) :hover；:active
    * (IE7-不支持) :focus；:lang()
    * (IE8-不支持) :target；:enabled；:disabled；:checked；:nth-child(n)；:nth-last-child(n)；:first-child；:last-child；:only-child；:nth-of-type(n)；:nth-last-of-type(n)；:first-of-type；:last-of-type；:only-of-type；:root；:not；:empty
* 伪元素
    * (只有当选择器部分和左大括号之间有空格时，IE6-浏览器才支持) :first-letter；:first-line
    * (IE7-不支持) :before；:after
    * (IE8-不支持) ::selection
* 关键字
    * (IE7-浏览器不支持) inherit
    * (IE浏览器不支持) initial
    * (IE不支持，safari9-不支持，ios9.2-不支持，android4.4.4-不支持) unset all
    * (只有safari9.1+和ios9.3+支持) revert
* calc [注意]android4.4-4.4.4只支持加法和减法。IE9不支持用于backround-position。(IE8-、safari5.1-、ios5.1-、android4.3-不支持)
* 单位
    * px in cm mm q pt pc em ex ch
    * (IE8-不支持) rem
    * (IE8-浏览器不支持，IOS7.1-不支持，android4.3-不支持，对于vmax所有IE浏览器都不支持) vh vw vmin vmax

### haslayout

【重点】、【不是很懂】

haslayout是IE7-浏览器的特有属性。hasLayout是一种只读属性，有两种状态：true或false。当其为true时，代表该元素有自己的布局，否则代表该元素的布局继承于父元素。<br>
[注意]通过element.currentStyle.hasLayout可以得出当前元素的hasLayout情况。

默认触发hasLayout的有如下HTML标签：

* html,body
* table,tr,th,td
* img
* hr
* input,button,select,textarea,fieldset
* frameset,frame,iframe

可以触发hasLayout的有如下CSS属性：

* display:inline-block
* height/width:除了auto
* float:left/right
* position:absolute
* writing-mode(IE专有属性，设置文本的垂直显示):tb-rl
* zoom(IE专有属性，设置或检索对象的缩放比例):除了normal

IE7专有的触发hasLayout的CSS属性

* min-height/max-height/min-width/max-width:除none
* overflow\overflow-x\overflow-y:除visible
* position:fixed

【用途1】解决IE7-浏览器下父级边框不阻止子级上下margin传递的bug
```html
<style>
    body{margin:0;}
    ul{margin:0;padding:0;list-style:none;}
    .list{border:10px solid black;background-color:red; /*触发hasLayout*/ /*float:left;*/}
    .in{height:100px;width:100px;margin-top:50px;background-color:blue;}
</style>
<ul class="list">
    <li class="in"></li>
</ul>
```

【用途2】配合display:inline让块元素模拟inline-block
```html
<style>
    body{ margin: 0; }
    .box {
        width: 100px;
        height: 100px;
        background-color: red;
        display:inline-block;
        /* 配合display: inline触发hasLayout */
        /* float:left; display:inline; */
    }
</style>
<div class="box" id="box"></div><span>测试inline-block用</span>
```

【用途3】解决在IE7-浏览器下LI4px空隙bug(IE7-浏览器下li有高度或宽度或zoom:1，且仅包含内联元素，且内联元素被设置为display:block，li下会多出3px的垂直间距)
```html
<style>
    body{margin:0;}
    ul{margin:0;padding:0;list-style:none;}
    .list{width:200px;background-color:lightgreen;}
    .in{height:100px;background-color:lightblue;}
    .span{display:block;zoom:1;}
</style>
<ul class="list">
    <li class="in">
        <span class="span">1231</span>
    </li>
    <li class="in">
        <span class="span">1232</span>
    </li>
</ul>
```

【用途4】触发浮动元素的父级的hasLayout，浮动元素会被layout元素自动包含，相当于IE7-浏览器下实现清浮动
```html
<style>
    body{margin:0;}
    ul{margin:0;padding:0;list-style:none;}
    .list{background-color:lightgreen;height:200px;}
    .in{float:left;width:100px;height:100px;border:1px solid black;background-color:lightblue;}
    .test{width:100px;height:150px;background-color:yellow;}
</style>
<ul class="list">
    <li class="in"></li>
    <li class="in"></li>
</ul>
<div class="test">测试浮动</div>
```

## 伪类伪元素

### 伪元素

伪元素顾名思义伪装成元素，但不是元素，这与生成内容相关。生成内容主要指由浏览器创建的内容，而不是由标志或内容来表示。生成内容主要由:before和:after伪元素来实现，当然伪元素还包括:first-line,:first-letter和::selection。

【重点】
```txt
/* Typographic Pseudo-elements */
::first-line            /* 选取文字块首行字符 */
::first-letter          /* 选取文字块首行首个字符 */

/* Highlight Pseudo-elements */
::selection             /* 选取文档中高亮(反白)的部分*/
::inactive-selection    /* 选取非活动状态时文档中高亮(反白)的部分*/
::spelling-error        /* 选取被 UA 标记为拼写错误的文本 */
::grammar-error         /* 选取被 UA 标记为语法错误的文本 */

/* Tree-Abiding Pseudo-elements */
::before                /* 在选中元素中创建一个前置的子节点 */
::after                 /* 在选中元素中创建一个后置的子节点 */
::marker                /* 选取列表自动生成的项目标记符号 */
::placeholder           /* 选取字段的占位符文本(提示信息) */

/* WebVTT Format */
::cue                   /* 匹配所选元素中 WebVTT 提示 */

/* Fullscreen API */
::backdrop              /* 匹配全屏模式下的背景 */
```

【content】属性应用于before和after伪元素

* normal(默认值)
* 'string' [注意1]如果希望生成内容中有一个换行，则需要使用\A [注意2]若是一个很长的串，需要它拆分成多行则需要用\对换行符转义
* uri('arrow.gif')
* attr(data-before)

```html
<style>
    div:before { content: "\A第一段\
    第二段"; }
    div:after { content: attr(data-after); }
</style>
<div data-after='后缀'>测试文字</div>
```

【quotes】属性管理引号
```
前单引号 -> \2018
后单引号 -> \2018
前双引号 -> \201C
后双引号 -> \201D
quotes: '201C' '201D' '2018' '2019'; //第一个值定义最外层开始引号(open-quote),第二个串定义最外层结束引号(close-quote)，第三个值定义次外层开始引号，第四个值定义次外层结束引号，第五个值定义次次外层开始引号，第六个值定义次次外层结束引号……
```
```html
<style>
    div { display: inline-block; quotes: '201C' '201D' '2018' '2019' '201C' '201D'; }
    div:before { content: open-quote; }
    div:after { content: no-close-quote; }
</style>
<div>
    最外层
    <div>
        次外层
        <div>
            最里层
        </div>
    </div>
</div>
<!-- 显示结果是：“最外层 ” -->
```

【Demo——首字下沉】
```html
<style>
    #div { width: 200px; border: 1px solid black; text-indent: 0.5em; }
    #div:first-letter { font-size: 30px; float: left; }
</style>
<div id="div">冠联赛是亚洲最高等级的俱乐部赛事，相当于欧洲的欧洲冠军联赛及南美洲的南美解放者杯，高于亚足联杯和亚足联主席杯，获得冠军的球队将代表亚洲参加当年12月举行的国际足联世界俱乐部杯。期待恒大在世俱杯中为中国足球争光添彩。</div>
```

【Demo——钉子效果】
```html
<style>
    .box:before { display:block; content: "钉子"; height: 50px; width: 50px; border-radius: 50%; background-color: black; color: white; font-weight:bold; text-align: center; line-height: 50px; }
    .box:after { display: block; content: ""; width: 0; height: 0; border: 25px solid transparent; border-top: 50px solid black; margin-top: -20px; }
</style>
<div class="box"></div>
```

【Demo——图片叠加效果】
```html
<style>
    body { margin: 0; }
    .box { position: relative; margin: 30px auto 0; width: 300px; }
    .box-img { position: absolute; z-index: 1; border: 5px solid gray; }
    .box:before, .box:after { content: ""; position: absolute; background-color: #D5B07C; width: 300px; height: 200px; border: 5px solid gray; }
    .box:before { left: -10px; top: 0; transform: rotate(-5deg); }
    .box:after { top: 4px; left: 0; transform: rotate(4deg); }
</style>
<div class="box">
    <img class="box-img" src="https://demo.xiaohuochai.site/guanwangtai.jpg" alt="图片叠加效果">
</div>
```

### 计数器

创建计数器的基础包括两个方面，一是能重置计数器的起点，二是能将其递增一定的量。

* counter-reset [注意]如果不设置\<integer>，则默认重置为0
    * counter-reset: none;(默认)
    * counter-reset: \<identifier> <integer>
        * \<identifier>是**计数器标识符**，是创作人员自己起的一个名字
        * \<integer>是重置的数字
    * counter-reset: c1 4;//表示将c1的计数器重置为4
    * counter-reset: c1 4 c2 0 c3 -5;//表示将c1重置为4,将c2重置为0,将c3重置为-5
    * couter-reset: c1;//将c1重置为0
* counter-increment [注意]如果不设置\<integer>，则默认递增为1
    * counter-increment:none;(默认)
    * counter-increment:\<identifier>\<integer>
        * \<identifier>是**计数器标识符**，是创作人员自己起的一个名字
        * \<integer>是递增的数字
    * counter-increment: c1 4;//表示将c1计数器的递增设为4
    * counter-reset: c1 4 c2 0 c3 -5;//表示将c1递增设为4,将c2递增设为0,将c3递增设为-5
    * couter-increment: c1;//将c1计数器的递增设为1

具体使用计数器需要结合使用content属性和counter()函数。counter()函数接受两个参数，而且两参数之间用逗号(,)来分隔，第一个参数是**计数器标识符**，第二个参数设置计数器风格(可省略)，与列表中list-style-type值相同。同样的，可以使用多个counter()函数。``content: counter(c1,upper-roman); //表示使用大写罗马字母格式的计数器c1``

【计数器风格详见下面演示框】
```html
<style>
    body,dl,dd,h2,ul,h3,p{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;position:relative;}
    .con{float:left;width:100%;}
    .show{float:left;width:100%;}
    .con dl{float:left;}
    .con dt{font-weight:bold;margin-bottom:5%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;}
    #spec{width:100%;}
    #spec *{float:left;}
    #spec dt{width:100%;}
    #spec dd{width:23%;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:center;background-color:pink;}
    @media (min-width:600px){
        .con{width:60%;}
        .show{width:40%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="show">
        <h2 class="show-tit">列表项标志演示</h2>
        <div class="show-body" id="sb">
            <!-- 添加结构单元 -->
            <ol>
                <li>咖啡</li>
                <li>牛奶</li>
                <li>茶</li>
                <li>可乐</li>
                <li>酒</li>
            </ol>
            <!-- 添加结构单元结束 -->
        </div>
    </div>
    <div class="con">
        <dl>
            <dt>list-style-position</dt>
            <dd>inside</dd>
            <dd>outside</dd>
        </dl>
        <dl>
            <dt>list-style-image</dt>
            <dd>none</dd>
            <dd>arrow.gif</dd>
        </dl>
        <dl id="spec">
            <dt>list-style-type</dt>
            <dd>none</dd>
            <dd>disc</dd>
            <dd>circle</dd>
            <dd>square</dd>
            <dd>decimal</dd>
            <dd>lower-roman</dd>
            <dd>upper-roman</dd>
            <dd>lower-alpha</dd>
            <dd>upper-alpha</dd>
            <dd>lower-greek</dd>
            <dd>decimal-leading-zero</dd>
        </dl>
    </div>
</div>
<script>
    (function con() {
        var aDl = document.getElementById('box').getElementsByTagName('dl');
        var oShow = document.getElementById('sb').getElementsByTagName('ol')[0];
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var oDt = aDl[i].getElementsByTagName('dt')[0];
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function () {
                    var oDl = this.parentNode;
                    var oDt = oDl.getElementsByTagName('dt')[0];
                    var aDd = oDl.getElementsByTagName('dd');
                    aDd[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    oShow.style[oDt.innerHTML] = this.innerHTML;
                    if (this.innerHTML == 'arrow.gif') {
                        oShow.style.listStyle = 'url("http://sandbox.runjs.cn/uploads/rs/26/ddzmgynp/arrow.gif")';
                    }
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```
<iframe frameborder='0' width='100%' height='340' src='./csses/counter-style.html'></iframe>

【简单计数器演示】
```html
<style>
    body,dl,dd,h2,ul,h3,p{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;position:relative;}
    .con{float:left;width:100%;}
    .show{float:left;width:100%;}
    .con dl{float:left;width:100%;}
    .con dl *{float:left;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:23%;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:center;background-color:pink;}
    @media (min-width:600px){
        .con{width:60%;}
        .show{width:40%;}
        .box{width:580px;}
    }
    #oShow div:before{content:counter(c1);}
</style>
<div class="box" id="box">
    <div class="show">
        <h2 class="show-tit">简单计数器演示</h2>
        <div class="show-body" id="sb">
            <!-- 添加结构单元 -->
            <div id="oShow">
                <div>咖啡</div>
                <div>牛奶</div>
                <div>茶</div>
                <div>可乐</div>
                <div>酒</div>
            </div>
            <!-- 添加结构单元结束 -->
        </div>
    </div>
    <div class="con">
        <dl>
            <dt>counter-reset</dt>
            <dd>-1</dd>
            <dd>0</dd>
            <dd>1</dd>
            <dd>2</dd>
        </dl>
        <dl>
            <dt>counter-increment</dt>
            <dd>-1</dd>
            <dd>0</dd>
            <dd>1</dd>
            <dd>2</dd>
        </dl>
    </div>
</div>
<script>
    (function con() {
        var aDl = document.getElementById('box').getElementsByTagName('dl');
        var children = document.getElementById('oShow').children;
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function () {
                    var oDl = this.parentNode;
                    var oDt = oDl.getElementsByTagName('dt')[0];
                    var aDd = oDl.getElementsByTagName('dd');
                    aDd[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    if (oDt.innerHTML == 'counter-reset') {
                        children[0].style[oDt.innerHTML] = 'c1 ' + this.innerHTML;
                    } else {
                        for (var k = 1; k < children.length; k++) {
                            children[k].style[oDt.innerHTML] = 'c1 ' + this.innerHTML;
                        }
                    }
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```
<iframe frameborder='0' width='100%' height='200' src='./csses/counter.html'></iframe>

【层级目录演示】
```html
<style>
    #oShow1 h2, #oShow1 h3, #oShow1 p{margin:0;}
    #oShow1{counter-reset:c2;}
    #oShow1 h2{counter-reset:c3 cp;counter-increment:c2;}
    #oShow1 h3{counter-increment:c3;counter-reset:cp;text-indent:2em;}
    #oShow1 p{counter-increment:cp;text-indent:4em;}
    #oShow1 h2:before{content:counter(c2);}
    #oShow1 h3:before{content:counter(c2) '.'counter(c3);}
    #oShow1 p:before{content:counter(c2) '.'counter(c3) '.'counter(cp);}
</style>
<div id="oShow1">
    <h2>第一章</h2>
    <h3>第一部分</h3>
    <p>第一节</p>
    <p>第二节</p>
    <h3>第二部分</h3>
    <p>第一节</p>
    <h2>第二章</h2>
    <h3>第一部分</h3>
    <p>第一节</p>
    <p>第二节</p>
    <h3>第二部分</h3>
    <p>第一节</p>
    <h2>第三章</h2>
    <h3>第一部分</h3>
    <p>第一节</p>
    <p>第二节</p>
    <h3>第二部分</h3>
    <p>第一节</p>
</div>
```

<style>
    #oShow1 h2, #oShow1 h3, #oShow1 p{margin:0;}
    #oShow1{counter-reset:c2;}
    #oShow1 h2{counter-reset:c3 cp;counter-increment:c2;}
    #oShow1 h3{counter-increment:c3;counter-reset:cp;text-indent:2em;}
    #oShow1 p{counter-increment:cp;text-indent:4em;}
    #oShow1 h2:before{content:counter(c2);}
    #oShow1 h3:before{content:counter(c2) '.'counter(c3);}
    #oShow1 p:before{content:counter(c2) '.'counter(c3) '.'counter(cp);}
</style>
<div id="oShow1">
    <h2>第一章</h2>
    <h3>第一部分</h3>
    <p>第一节</p>
    <p>第二节</p>
    <h3>第二部分</h3>
    <p>第一节</p>
    <h2>第二章</h2>
    <h3>第一部分</h3>
    <p>第一节</p>
    <p>第二节</p>
    <h3>第二部分</h3>
    <p>第一节</p>
    <h2>第三章</h2>
    <h3>第一部分</h3>
    <p>第一节</p>
    <p>第二节</p>
    <h3>第二部分</h3>
    <p>第一节</p>
</div>

【层级目录演示2】
```html
<style>
    body,dl,dd,h2,ul,h3,p{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;position:relative;}
    .con{float:left;width:100%;}
    .show{float:left;width:100%;}
    .con dl{float:left;width:100%;}
    .con dl *{float:left;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:23%;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:center;background-color:pink;}
    @media (min-width:600px){
        .con{width:60%;}
        .show{width:40%;}
        .box{width:580px;}
    }
    #jiange dd{width:12%;}
    #oShow{counter-reset:c2;}
    #oShow h2{counter-reset:c3 cp;counter-increment:c2;}
    #oShow h3{counter-increment:c3;counter-reset:cp;}
    #oShow p{counter-increment:cp;}
</style>
<div class="box" id="box">
    <div class="show">
        <h2 class="show-tit">层级目录演示</h2>
        <div class="show-body" id="sb">
            <!-- 添加结构单元 -->
            <div id="oShow">
                <h2>第一章</h2>
                <h3>第一部分</h3>
                <p>第一节</p>
                <p>第二节</p>
                <h3>第二部分</h3>
                <p>第一节</p>
                <h2>第二章</h2>
                <h3>第一部分</h3>
                <p>第一节</p>
                <p>第二节</p>
                <h3>第二部分</h3>
                <p>第一节</p>
                <h2>第三章</h2>
                <h3>第一部分</h3>
                <p>第一节</p>
                <p>第二节</p>
                <h3>第二部分</h3>
                <p>第一节</p>
            </div>
            <!-- 添加结构单元结束 -->
        </div>
    </div>
    <div class="con">
        <!-- 添加测试单元1 -->
        <dl>
            <dt>章:style-type</dt>
            <dd>decimal</dd>
            <dd>lower-roman</dd>
            <dd>upper-roman</dd>
            <dd>lower-alpha</dd>
            <dd>upper-alpha</dd>
            <dd>lower-greek</dd>
            <dd style="width:46%">decimal-leading-zero</dd>
        </dl>
        <!-- 添加测试单元1结束 -->
        <!-- 添加测试单元2 -->
        <dl>
            <dt>部分:style-type</dt>
            <dd>decimal</dd>
            <dd>lower-roman</dd>
            <dd>upper-roman</dd>
            <dd>lower-alpha</dd>
            <dd>upper-alpha</dd>
            <dd>lower-greek</dd>
            <dd style="width:46%">decimal-leading-zero</dd>
        </dl>
        <!-- 添加测试单元2结束 -->
        <dl>
            <dt>节:style-type</dt>
            <dd>decimal</dd>
            <dd>lower-roman</dd>
            <dd>upper-roman</dd>
            <dd>lower-alpha</dd>
            <dd>upper-alpha</dd>
            <dd>lower-greek</dd>
            <dd style="width:46%">decimal-leading-zero</dd>
        </dl>
        <dl id="jiange">
            <dt>间隔符</dt>
            <dd>-</dd>
            <dd>.</dd>
            <dd>@</dd>
            <dd>#</dd>
            <dd>*</dd>
            <dd>></dd>
            <dd>&</dd>
        </dl>
    </div>
</div>
<script>
    function escape(html) {
        var elem = document.createElement('div')
        var txt = document.createTextNode(html)
        elem.appendChild(txt)
        return elem.innerHTML;
    }
    function unescape(str) {
        var elem = document.createElement('div')
        elem.innerHTML = str
        return elem.innerText || elem.textContent;
    }
    function loadStyleString(css) {
        var style = document.createElement("style");
        style.type = "text/css";
        try {
            style.appendChild(document.createTextNode(css));
        } catch (ex) {
            style.styleSheet.cssText = css;
        }
        var head = document.getElementsByTagName('head')[0];
        head.appendChild(style);
    }
    loadStyleString('');
    (function con() {
        var oBox = document.getElementById('box');
        var aDl = oBox.getElementsByTagName('dl');
        var oSb = document.getElementById('sb');
        var oShow = document.getElementById('oShow');;
        //变量声明
        var aC2 = oShow.getElementsByTagName('h2');
        var aC3 = oShow.getElementsByTagName('h3');
        var aCp = oShow.getElementsByTagName('p');
        var oDc2 = oDc3 = oDcp = 'decimal';
        var oD = ' ';
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var oDt = aDl[i].getElementsByTagName('dt')[0];
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function () {
                    var oDl = this.parentNode;
                    var oDt = oDl.getElementsByTagName('dt')[0];
                    var aDd = oDl.getElementsByTagName('dd');
                    aDd[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    if (oDt.innerHTML.charAt(0) == '章') {
                        oDc2 = this.innerHTML;
                    } else if (oDt.innerHTML.charAt(0) == '部') {
                        oDc3 = this.innerHTML;
                    } else if (oDt.innerHTML.charAt(0) == '节') {
                        oDcp = this.innerHTML;
                    } else {
                        oD = '"' + (this.innerText || this.textContent) + '"';
                    };
                    var oStyle = document.getElementsByTagName('style')[1];
                    var temp = "#oShow h2:before{content: counter(c2," + oDc2 + ");}\
        #oShow h3:before{content: counter(c2,"+ oDc2 + ") " + oD + " counter(c3," + oDc3 + ");}\
        #oShow p:before{content: counter(c2,"+ oDc2 + ") " + oD + " counter(c3," + oDc3 + ") " + oD + " counter(cp," + oDcp + ");}";
                    try {
                        oStyle.innerHTML = temp;
                    } catch (ex) {
                        oStyle.styleSheet.cssText = temp;
                    }
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```
<iframe frameborder='0' width='100%' height='600' src='./csses/counter2.html'></iframe>

### 伪类

伪类经常与伪元素混淆，伪元素的效果类似于通过添加一个实际的元素才能达到，而伪类的效果类似于通过添加一个实际的类来达到。实际上css3为了区分两者，已经明确规定了伪类用一个冒号来表示，而伪元素则用两个冒号来表示。本文将详细介绍伪类的详细知识。

* **关于锚点**``<a>``，有常见的5个伪类，分别是:link,:hover,:active,:focus,:visited
    * CSS层叠中有一条法则十分重要，就是后面覆盖前面，所以伪类的顺序是需要精心考虑的。
    * link和visited必须在最前面，且没有先后顺序，否则link或visited的效果将被覆盖。[注意]link和visited称为静态伪类，只能应用于超链接
    * hover、active、focus这三个伪类必须是focus、hover、active的顺序，因为在focus状态下，也需要触发hover和active，而要触发active一定要先触发hover，所以active要放在hover后面。[注意]hover、active、focus称为动态伪类，可应用于任何元素，但IE7-浏览器不支持:focus，:hover和:active在IE6-浏览器下只支持给<a>设置
    * 所以最终的顺序只有两种:link、visited、focus、hover、active或visited、link、focus、hover、active
* **UI元素伪类**包括:enabled、:disabled、:checked三个，主要针对于HTML中的form元素，IE8-浏览器不支持
* 结构伪类可分为以下3种情况，IE8-浏览器不支持。以下情况都是E为父元素，F为子元素
    * :nth-child(n)、:nth-last-child(n)、first-child、last-child、:only-child [注意]:first-child和:last-child只有IE6-浏览器不支持。n可以是整数(从1开始)，也可以是公式，也可以是关键字(even、odd)
    * :nth-of-type(n)、:nth-last-of-type(n)、:first-of-type、:last-of-type、:only-of-type
    * :root、:not、:empty、:target
* 其他
    * :lang()
    * 不仅可以使用单一伪类，也可以伪类结合使用。[注意]顺序无关。``div:hover:first-child{background-color: lightgreen;}`` ``div:last-of-type:active{background-color: lightblue;}``

【重要】<br>
伪类速查表
```txt
/* Logical Combinations */
:is()   /* :matches() */ /*:any()*/   /* 匹配 集合内指定 的元素 */
:not()                  /* 排除 满足指定关系 的元素 */
:has()                  /* 匹配 满足指定关系 的元素*/


/* Linguistic Pseudo-classes */
:dir()                  /* 匹配 设置dir(文字书写方向)属性 的元素 */
:lang()                 /* 匹配 设置lang(定义元素语言)属性 的元素 */


/* Location Pseudo-classes */
:any-link               /* 匹配 任意有链接锚点 的元素*/
:link                   /* 匹配 未处于访问记录中 的链接 */
:visited                /* 匹配 处于访问记录中 的链接 */
:target                 /* 匹配 URL指向的锚点 的元素 */
:scope                  /* 匹配 设置scoped属性的style标签 的作用域 */


/* User Action Pseudo-classes */
:hover                  /* 匹配 处于鼠标悬停状态 的元素 */
:active                 /* 匹配 处于激活状态 的元素 */
:focus                  /* 匹配 处于聚焦状态 的元素 */
:focus-ring             /* 匹配 处于聚焦状态元素 的UA样式(聚焦轮廓) */
:focus-within           /* 匹配 子节点处于聚焦状态 的元素 */
:drop                   /* 匹配 处于拖拽状态 的元素 */
:drop()                 /* 匹配 处于指定拖拽状态 的元素 */


/* Time-dimensional Pseudo-classes */
:current                /* 匹配 处于当前状态 的定义了timeline属性的元素 */
:past                   /* 匹配 处于过去状态 的定义了timeline属性的元素 */
:future                 /* 匹配 处于将来状态 的定义了timeline属性的元素 */


/* Resource State Pseudos */
:playing                /* 匹配 处于播放状态 的元素 */
:paused                 /* 匹配 处于暂停状态 的元素 */


/* The Input Pseudo-classes */
:enabled                /* 匹配 可以编辑 的元素 */
:disabled               /* 匹配 禁止编辑 的元素 */
:read-only              /* 匹配 内容只读 的元素 */
:read-write             /* 匹配 内容可编辑 的元素 */
:placeholder-shown      /* 匹配 显示字段占位符文本 的元素 */
:default                /* 匹配 页面载入默认选中 的元素 */

:checked                /* 匹配 选中状态 的元素 */
:indeterminate          /* 匹配 模糊状态 的元素 */

:valid                  /* 匹配 输入内容通过类型验证 的元素 */
:invalid                /* 匹配 输入内容无法通过类型验证 的元素 */
:in-range               /* 匹配 输入数值符合范围 的元素 */
:out-of-range           /* 匹配 输入数值溢出范围 的元素 */
:required               /* 匹配 设置必填属性 的元素 */
:optional               /* 匹配 可选字段 的元素 */
:user-invalid           /* 匹配 用户输入内容未通过验证 的元素 */

/* Tree-Structural pseudo-classes */
:root                   /* 匹配 文档树 的根元素*/
:empty                  /* 匹配 无子节点 的元素 */
:blank                  /* 匹配 仅包含空格或者换行符 的元素 */

:nth-child(n)           /* 匹配 符合元素集合中指定位置 的元素 */
:nth-last-child(n)      /* 反序匹配 符合元素集合内指定位置 的元素 */
:first-child            /* 匹配 符合元素集合内首个 的元素 */
:last-child             /* 匹配 符合元素集合内末尾 的元素 */
:only-child             /* 匹配 无兄弟节点 的元素 */

:nth-of-type(n)         /* 匹配 符合元素集合中同类型指定位置 的元素 */
:nth-last-of-type(n)    /* 反序匹配 符合元素集合中同类型指定位置 的元素 */
:first-of-type          /* 匹配 每个在元素集合中初次出现 的元素 */
:last-of-type           /* 匹配 每个在元素集合中末次出现 的元素 */
:only-of-type           /* 匹配 无同类兄弟节点 的元素*/

/* Fullscreen API */
:fullscreen             /* 匹配 全屏显示模式中 的元素 */

/* Page Selectors */
:first                  /* 打印文档时首页的样式 */
:left                   /* 打印文档时左侧的样式 */
:right                  /* 打印文档时右侧的样式 */
```

## 规范

### CSS reset

大部分的时候，作为前端，我们在写 CSS 样式之前，需要添加一份 **reset.css** 。CSS reset不仅用于清除默认样式，更是一种全局样式定义。如果项目前期不定制好CSS reset，后期维护阶段再对其进行修改，将会牵一发而动全身

```css
body{margin: 0; font: 12px/22px Arial,"微软雅黑"; color: #333;}
header,footer,section,article,aside,nav,figure{display:block}

ul,ol{margin: 0;padding: 0;list-style: none;}
p,dl,dd{margin: 0;}
h1,h2,h3,h4{margin: 0;font-size: 100%;}

img{border:none;}
a{color: #21a557;cursor: pointer; text-decoration: none; }
a:active,a:hover{outline：none;}
a:hover{text-decoration: underline;}

strong{font-weight:normal;}
em,i{font-style:normal;}

table{border-collapse: collapse; table-layout: fixed;border-spacing:0;}
th,td{padding: 0;}
button,input{box-sizing: border-box;padding: 0;border: none;background: none;}
```

**Normalize.css** 与 reset.css 的风格恰好相反，注重通用的方案，重置掉该重置的样式（例如body的默认margin），保留该保留的 user agent 样式，同时进行一些 bug 的修复，这点是 reset 所缺乏的。Normalize不讲求样式一致，而讲求通用性和可维护性

```css
html { line-height: 1.15;  /*统一行高*/ -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; /*防止在winPhone和ISO中，因旋转屏幕而造成的字体大小的改变*/ }
body { margin: 0; /*去除margin*/ }
article, aside, footer, header, nav, section, figcaption, figure, main { /*重置IE8-浏览器的display*/ display: block; }
h1 { font-size: 2em; margin: 0.67em 0; /*统一字体大小及margin*/ }
figure { margin: 1em 40px; /*重置IE8浏览器的margin*/ }
hr { box-sizing: content-box;  /*重置firefox浏览器的box-sizing*/ height: 0; overflow: visible;  /*重置IE浏览器的overflow*/ }
a { background-color: transparent;  /*移除IE10中的灰色背景*/ -webkit-text-decoration-skip: objects; }
abbr[title] { border-bottom: none;  /*移除Chrome57- and Firefox 39-中的border-bottom*/ text-decoration: underline dotted;  /*统一text-decoration*/ }
b, strong { font-weight: bolder; /*统一字体重量*/ }
pre, code, kbd, samp { font-family: monospace, monospace; font-size: 1em; /*统一字体系列及字体大小*/ }
dfn { font-style: italic; /*重置Android4.3-浏览器的字体样式*/ }
mark { background-color: #ff0; color: #000; /*重置IE8-浏览器的背景颜色及文本颜色*/ }
small { font-size: 80%; /*统一字体大小*/ }
sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline;  /*去除sub、sup对行高的影响*/ }
sub { bottom: -0.25em; /*统一位置*/ }
sup { top: -0.5em; /*统一位置*/ }
audio, video { display: inline-block; /*重置IE8-浏览器的display*/ }
audio:not([controls]) { display: none; height: 0; /*重置iOS 4-7中的display及height*/ }
img { border-style: none; /*重置IE9-浏览器的border-style*/ }
svg:not(:root) { overflow: hidden; /*重置IE浏览器中的overflow*/ }
button, input, optgroup, select, textarea { font-family: sans-serif; font-size: 100%; line-height: 1.15; margin: 0; /*移除Firefox and Safari中的margin*/ /*统一样式*/ }
button, input { overflow: visible; /*重置IE浏览器中的overflow*/ }
button, select { text-transform: none; /*重置firefox浏览器中的text-transform*/ }
button, html [type="button"], [type="reset"], [type="submit"] { -webkit-appearance: button; /*重置webkit浏览器的appearance属性*/ }
button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner { border-style: none; padding: 0; /*重置firefox浏览器中的border和padding*/ }
button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring { outline: 1px dotted ButtonText; /*统一outline*/ }
fieldset { padding: 0.35em 0.75em 0.625em; /*重置firefox浏览器的padding*/ }
legend { box-sizing: border-box; color: inherit; display: table; max-width: 100%; padding: 0; white-space: normal; }
progress { display: inline-block; /*重置IE9-浏览器的display*/ vertical-align: baseline; /*重置Chrome, Firefox浏览器的vertical-align*/ }
textarea { overflow: auto; /*移除IE浏览器中默认的垂直滚动条*/ }
[type="checkbox"], [type="radio"] { box-sizing: border-box; padding: 0; /*重置IE9-浏览器的box-sizing及padding*/ }
[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button { height: auto; /*修正Chrome中增加和减量按钮的光标样式*/ }
[type="search"] { -webkit-appearance: textfield; outline-offset: -2px; /*重置Chrome and Safari的appearance和outline-offset*/ }
[type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration { -webkit-appearance: none; /*在macOS上删除Chrome和Safari中的内填充和取消按钮。*/ }
::-webkit-file-upload-button { -webkit-appearance: button; font: inherit; /*在iOS和Safari中，纠正无法点击的类型。*/ }
details, menu { display: block; /*重置IE8-浏览器的display*/ }
summary { display: list-item; /*统一display*/ }
canvas { display: inline-block; /*重置IE8-浏览器的display*/ }
template { display: none; /*重置IE浏览器的display*/ }
[hidden] { display: none; /*重置IE9-浏览器的display*/ }
```

是否 Normalize.css 就真的比 reset.css 好呢？也不见得，Normalize.css 中重置修复的很多 bug ，其实在我们的项目中十个项目不见得有一个会用得上，那么这些重置或者修复，某种意义上而言也是所谓的冗余代码。所以，应该根据项目需要，混合部分 reset 或者 normalize，编写了一份适合团队项目的 reset ，做出取舍微调，适量裁剪和修改后再使用。对于一般项目而言，在调用normalize.css之后，再根据实际情况，编写reset.css。当然，这个reset并不是将样式清空，而是设置样式的默认值及常用的工具样式。

```css
html{
    /*这样，1rem=100px，方便后续计算，不设置为10px是因为chrome下最小字体大小为12px*/
    font-size:100px;
}
body{
    /*设置为12px*/
    font-size: 0.12rem;
    line-height: 1.5;
    /*不使用纯黑色#000，降低页面对比度*/
    color:#222;
}
a{
    color:#666;
    text-decoration:none;
}
a:hover,a:active{
    color:#0ae;
    text-decoration: underline;
}
::selection{
    background-color: #b3d4fc;
    text-shadow:none;
}
ul{
    margin: 0;
    padding: 0;
    list-style:none;
}
.fl{float: left;}
.fr{float: right;}
.clear:after{content:""; display: block; clear: both;}
.clear{zoom:1;}
/*低版本浏览器提示*/
.browserupgrade{
    margin:0;
    padding:1rem;
    background-color: #ccc;
}
```

### CSS命名实践

https://www.cnblogs.com/xiaohuochai/p/7173867.html

### CSS规范

* 【文件注释】文件顶部必须包含文件注释，星号要一列对齐，星号与内容之间保留一个空格，标识符冒号与内容之间保留一个空格。用 @name 标识文件说明，@author标识作者，@description为文件或模块描述，@update为可选项，建议每次改动都更新一下

```css
/**
 * @name: 文件名或模块名
 * @description: 文件或模块描述
 * @author: author-name(mail-name@qq.com)
 *          author-name2(mail-name2@qq.com)
 * @update: 2017-07-14 00:00
 */
```

* **私有在前，标准在后**，即先写带有浏览器私有标志的，后写W3C标准的

```css
.m-box {
    -webkit-box-shadow: 0 0 0 #000;
    -moz-box-shadow: 0 0 0 #000;
    box-shadow: 0 0 0 #000;
}
```

* 相关的属性声明应当归为一组，并按照（布局类属性->盒模型属性->文本类属性->修饰类属性）顺序排列。布局属性处在第一位，是因为它可以使一个元素脱离正常文本流，并且覆盖盒模型相关的样式。盒模型紧跟其后，因为它决定了一个组件的大小和位置。其他属性只在组件内部起作用或者不会对前面两种情况的结果产生影响，所以它们排在后面。另外，如果包含 content 属性，应放在最前面

```txt
布局类属性     position / top / right / bottom / left / float / display / overflow 等
盒模型属性   border / margin / padding / width / height 等
文本类属性     font / line-height / text-align / word-wrap 等
修饰类属性     background / color / transition / list-style 等
```

```css
.sidebar {
    /* formatting model */
    position: absolute;
    top: 50px;
    left: 0;
    overflow-x: hidden;

    /* box model */
    width: 200px;
    padding: 5px;
    border: 1px solid #ddd;

    /* typographic */
    font-size: 14px;
    line-height: 20px;

    /* visual */
    background: #f5f5f5;
    color: #333;
    -webkit-transition: color 1s;
       -moz-transition: color 1s;
            transition: color 1s;
}
```

* **尽量不使用 !important 声明**。 当需要强制指定样式且不允许任何场景覆盖时，通过标签内联和 !important 定义样式
* **避免耗性能的属性，如express和filter**。不过有时候需求大于一切。

```css
/* expression */
.class {width: expression(this.width>100?'100px':'auto');}
/* filter */
.class {filter: alpha(opacity=50);}
```

* **避免使用 @import**，与 <link> 标签相比，@import 指令要慢很多，不光增加了额外的请求次数，还会导致不可预料的问题
* 避免sass中不必要的嵌套,这是因为虽然可以使用嵌套，但是并不意味着应该使用嵌套。只有在必须将样式限制在父元素内（也就是后代选择器），并且存在多个需要嵌套的元素时才使用嵌套
* **尽量避免使用hack**，由于浏览器自身缺陷，无法避开的时候，可以允许使用适当的Hack。统一使用“*”和“_”分别对IE7和6进行Hack

```css
/* IE7会显示灰色#888，IE6会显示白色#fff，其他浏览器显示黑色#000 */
.m-list{
    color:#000;
    *color:#888;
    _color:#fff;
}
```

### 命名规范

https://www.cnblogs.com/xiaohuochai/p/7173466.html

### CSS编码技巧

```html
<style>
    .btn {
        padding: .3em .8em;
        border: 1px solid rgba(0,0,0,0.1);
        background: #58a linear-gradient(hsla(0,0%,100%,.2),transparent);
        border-radius: .2em;
        box-shadow: 0 .05em .25em rgba(0,0,0,0.5);
        color: white;
        text-shadow: 0 -.05em .05em rgba(0,0,0,0.5);
        font-size: 125%;
        line-height: 1.5;
    }
    .yes { background-color: #58a; }
    .no { background-color: #c00; }
    .ok { background-color: #6b0; }
</style>
<div class="btn yes">YES</div>
<div class="btn no">NO</div>
<div class="btn ok">OK</div>
```

<style>
    .btn {
        width: 5em;
        padding: .3em .8em;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background: #58a linear-gradient(hsla(0, 0%, 100%, .2),transparent);
        border-radius: .2em;
        box-shadow: 0 .05em .25em rgba(0,0,0,0.5);
        color: white;
        text-shadow: 0 -.05em .05em rgba(0,0,0,0.5);
        font-size: 125%;
        line-height: 1.5;
    }
    .yes { background-color: #58a; }
    .no { background-color: #c00; }
    .ok { background-color: #6b0; }
</style>
<div class="btn yes">YES</div>
<div class="btn no">NO</div>
<div class="btn ok">OK</div>

在CSS3中，得到了一个特殊的颜色关键字currentColor，它是从SVG那里借鉴来的。这个关键字并没有绑定到一个固定的颜色值，而是一直被解析为color。实际上，这个特性让它成为了CSS中有史以来的第一个变量。虽然功能很有限，但它真的是个变量。举个例子，让所有的水平分割线自动与文本的颜色保持一致。有了currentcolor之后，只需要这样写 ``hr{background:currentColor;}``

inherit可以用在任何CSS属性中，而且它总是绑定到父元素的计算值(对伪元素来说，则会取生成该伪元素的宿主元素)。举例来说，要把表单元素的字体设定为与页面的其他部分相同，并不需要重复指定字体瞩性，只需利用inherit的特性即可 ``input,select,button{font:inherit;}`` 。与此类似，要把超链接的颜色设定为页面中其他文本相同，也是用inherit ``a{font:inherit;}``

以下两行CSS代码并不是等价的
```css
.temp {
    background : rebeccapurple;
    background-color : rebeccapurple;
}
```
**不要害怕使用简写属性**。合理使用简写是一种良好的防卫性编码方式，可以抵御未来的风险。当然，如果要明确地去覆盖某个具体的展开式属性并保留其他相关样式，那就需用展开式属性
```css
.temp {
    background: url(tr.png) no-repeat top right / 2em 2em,
            url(br.png) no-repeat bottom right / 2em 2em,
            url(b1.png) no-repeat bottom left / 2em 2em;
}
/* ==> */
background : ur1(tr.png) top right,
             url(br.png) bottom right,
             url(b1.png) bottom left;
background-size : 2em 2em;
background-repeat : no-repeat;
```

### 代码检查工具stylelint

CSS不能算是严格意义的编程语言，但是在前端体系中却不能小觑。 CSS 是以描述为主的样式表，如果描述得混乱、没有规则，对于其他开发者一定是一个定时炸弹，特别是有强迫症的人群。CSS 看似简单，想要写出漂亮的 CSS 还是相当困难。所以校验 CSS 规则的行动迫在眉睫。stylelint是一个强大的现代 CSS 检测器，可以让开发者在样式表中遵循一致的约定和避免错误。本文将详细介绍CSS代码检查工具stylelint

stylelint拥有超过150条的规则，包括捕捉错误、最佳实践、控制可以使用的语言特性和强制代码风格规范。它支持最新的CSS语法，并且灵活可配置

#### vue

1. 安装stylelint、stylint-config-standard和stylelint-order
```txt
npm install stylelint --save-dev
npm install stylelint-config-standard --save-dev
npm install stylelint-order --save-dev
```
其中，stylelint是运行工具，stylelint-config-standard是stylelint的推荐配置，stylelint-order是CSS属性排序插件。安装完成后，package.json文件中会自动添加如下字段
```json
    "stylelint": "^9.1.3",
    "stylelint-config-standard": "^18.2.0",
    "stylelint-order": "^0.8.1",
```
2. 在根目录下创建.stylelintrc配置文件
```json
{
  "extends": "stylelint-config-standard",
  "plugins": ["stylelint-order"],
  "rules": {
    "order/order": [
      "declarations",
      "custom-properties",
      "dollar-variables",
      "rules",
      "at-rules"
    ],
    "order/properties-order": [
      "position",
      "z-index",
      "top",
      "bottom",
      "left",
      "right",
      "float",
      "clear",
      "columns",
      "columns-width",
      "columns-count",
      "column-rule",
      "column-rule-width",
      "column-rule-style",
      "column-rule-color",
      "column-fill",
      "column-span",
      "column-gap",
      "display",
      "grid",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-auto-rows",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-column-gap",
      "grid-row-gap",
      "grid-template",
      "grid-template-rows",
      "grid-template-columns",
      "grid-template-areas",
      "grid-gap",
      "grid-row-gap",
      "grid-column-gap",
      "grid-area",
      "grid-row-start",
      "grid-row-end",
      "grid-column-start",
      "grid-column-end",
      "grid-column",
      "grid-column-start",
      "grid-column-end",
      "grid-row",
      "grid-row-start",
      "grid-row-end",
      "flex",
      "flex-grow",
      "flex-shrink",
      "flex-basis",
      "flex-flow",
      "flex-direction",
      "flex-wrap",
      "justify-content",
      "align-content",
      "align-items",
      "align-self",
      "order",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-collapse",
      "border-spacing",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "ruby-align",
      "ruby-merge",
      "ruby-position",
      "box-sizing",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "border",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-color",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-image",
      "border-image-source",
      "border-image-slice",
      "border-image-width",
      "border-image-outset",
      "border-image-repeat",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-top",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-top-left-radius",
      "outline",
      "outline-width",
      "outline-color",
      "outline-style",
      "outline-offset",
      "overflow",
      "overflow-x",
      "overflow-y",
      "resize",
      "visibility",
      "font",
      "font-style",
      "font-variant",
      "font-weight",
      "font-stretch",
      "font-size",
      "font-family",
      "font-synthesis",
      "font-size-adjust",
      "font-kerning",
      "line-height",
      "text-align",
      "text-align-last",
      "vertical-align",
      "text-overflow",
      "text-justify",
      "text-transform",
      "text-indent",
      "text-emphasis",
      "text-emphasis-style",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-style",
      "text-decoration-line",
      "text-underline-position",
      "text-shadow",
      "white-space",
      "overflow-wrap",
      "word-wrap",
      "word-break",
      "line-break",
      "hyphens",
      "letter-spacing",
      "word-spacing",
      "quotes",
      "tab-size",
      "orphans",
      "writing-mode",
      "text-combine-upright",
      "unicode-bidi",
      "text-orientation",
      "direction",
      "text-rendering",
      "font-feature-settings",
      "font-language-override",
      "image-rendering",
      "image-orientation",
      "image-resolution",
      "shape-image-threshold",
      "shape-outside",
      "shape-margin",
      "color",
      "background",
      "background-image",
      "background-position",
      "background-size",
      "background-repeat",
      "background-origin",
      "background-clip",
      "background-attachment",
      "background-color",
      "background-blend-mode",
      "isolation",
      "clip-path",
      "mask",
      "mask-image",
      "mask-mode",
      "mask-position",
      "mask-size",
      "mask-repeat",
      "mask-origin",
      "mask-clip",
      "mask-composite",
      "mask-type",
      "filter",
      "box-shadow",
      "opacity",
      "transform-style",
      "transform",
      "transform-box",
      "transform-origin",
      "perspective",
      "perspective-origin",
      "backface-visibility",
      "transition",
      "transition-property",
      "transition-duration",
      "transition-timing-function",
      "transition-delay",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "animation-fill-mode",
      "animation-play-state",
      "scroll-behavior",
      "scroll-snap-type",
      "scroll-snap-destination",
      "scroll-snap-coordinate",
      "cursor",
      "touch-action",
      "caret-color",
      "ime-mode",
      "object-fit",
      "object-position",
      "content",
      "counter-reset",
      "counter-increment",
      "will-change",
      "pointer-events",
      "all",
      "page-break-before",
      "page-break-after",
      "page-break-inside",
      "widows"
    ],
    "no-empty-source": null,
    "property-no-vendor-prefix": [true, {"ignoreProperties": ["background-clip"]}],
    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,
    "length-zero-no-unit": true,
    "value-list-comma-space-after": "always",
    "declaration-colon-space-after": "always",
    "value-list-max-empty-lines": 0,
    "shorthand-property-no-redundant-values": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-semicolon-newline-after": "always",
    "block-closing-brace-newline-after": "always",
    "media-feature-colon-space-after": "always",
    "media-feature-range-operator-space-after": "always",
    "at-rule-name-space-after": "always",
    "indentation": 2,
    "no-eol-whitespace": true,
    "string-no-newline": null
  }
}
```

3. 使用stylelint验证CSS代码即可，如验证src目录下的所有vue文件：``$ stylelint src/**/*.vue``

#### react

react中使用styled-components来书写CSS代码，stylelint同样提供了插件来校验CSS

1. 安装stylelint、stylelint-processor-styled-components、stylelint-config-styled-components、stylelint-config-recommend、stylelint-order。注意： 由于stylelint更新到9.2版本后，导致styled-components中的CSS代码无法正常校验，所以稳妥起见，使用9.1.3版本的stylelint。
```txt
npm install --save-dev stylelint@9.1.3
npm install --save-dev stylelint-processor-styled-components
npm install --save-dev stylelint-config-styled-components
npm install --save-dev stylelint-config-recommended
npm install --save-dev stylelint-order
```
2. 在根目录下新建配置文件.stylelintrc
```json
{
  "processors": ["stylelint-processor-styled-components"],
  "extends": [
    "stylelint-config-recommended",
    "stylelint-config-styled-components"
  ],
  "plugins": ["stylelint-order"],
  "rules": {
    "order/order": [
      "declarations",
      "custom-properties",
      "dollar-variables",
      "rules",
      "at-rules"
    ],
...
}
```
3. 同样地，使用stylelint命令即可校验 ``$ stylelint src/**/*.js``

#### 注意事项

1. **fix命令**：在stylelint的150多条规则中，使用fix命令，可以自动修复一些命令。但是，该fix命令一定要慎用。笔者在使用fix命令后，stylelint将React工程中的所有js文件里的代码全部清除，只留着了下可以识别的css部分 ``stylelint '**/*.js' --fix``
2. **配置scripts**：可以在package.json中配置stylelint的快捷方式 ``"scripts": { "lintcss": "stylelint 'src/**/*.js'" }`` 这样，使用npm run lintcss 命令即可实现相同效果
3. 如果提示如下错误 Error: No configuration provided for 是因为在根路径下没有发现配置文件，如.stylelintrc

# 布局

## 盒模型

### 盒子尺寸

#### 盒模型

所有文档元素都生成一个矩形框，这称为元素框(element box)，它描述了一个元素在文档布局中所占的空间大小。而且，每个框影响着其他元素框的位置和大小。

----------------上外边界----------------
|               上外边距               |
|   ------------上边框--------------   |
|   |           上内边距           |   |
|   |   --------上内边界--------   |   |
|   |   |                  |   |   |   |
左左| 左左---宽度----------|---右右 |右右
外外左内内                 高  内内右外外
边边边边边                 度  边边边边边
界距框距界                 |   界距框距界
|   |   |                  |   |   |   |
|   |   --------下内边界--------   |   |
|   |           下内边距           |   |
|   ------------上边框--------------   |
|               下外边距               |
----------------下外边界----------------

1. width | height: \<length> | \<percentage> | auto | inherit 。宽高和margin可以设置auto。对于块级元素来说，宽度设置为auto，则会尽可能的宽。详细来说，元素宽度=包含块宽度—元素水平外边距-元素水平边距宽度-元素水平内边距；高度设置为auto，则会尽可能的窄。详细来说，元素高度=恰好足以包含其内联内容的高度。【注意】如果没有显式声明包含块的height，则元素的百分数高度会重置为auto。【注意】IE6-浏览器的宽高定义的是可见元素框的尺寸，而不是元素框的内容区尺寸，即**怪异盒模型**
2. min-width | min-height: \<length> | \<percentage> | inherit。
3. max-width | max-height: \<length> | \<percentage> | inherit。【注意】IE6-浏览器不支持min-width | min-height | max-width | max-height

```html
<style>
    body,dl,dd,h2{margin:0;}
    h2{font-size:20px;}
    .box{overflow:hidden;width:276px;padding:10px;background-color:#ddd;text-align:center;position:relative;font:18px/1.2 "宋体";}
    .con{float:left;width:100%;}
    .show{float:left;width:100%;}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;height:100px;}
    #show-img{min-height:20px;font-size:14px;}
    .con dl *{float:left;overflow:hidden;}
    .con dl+dl{margin-top:1%;}
    .con dt{font-weight:bold;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;cursor:pointer;width:23%;}
    @media (min-width:600px){
        .con{width:50%;}
        .show{width:50%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="show">
        <h2 class="show-tit">最小最大宽度演示</h2>
        <div class="show-body">
            <div id="sb" style="background-color: yellowgreen;"></div>
        </div>
        <div id="show-img"></div>
    </div>
    <div class="con">
        <dl>
            <dt>min-width</dt>
            <dd>0</dd>
            <dd>20%</dd>
            <dd>50%</dd>
            <dd>100%</dd>
        </dl>
        <dl>
            <dt>min-height</dt>
            <dd>0</dd>
            <dd>20%</dd>
            <dd>50%</dd>
            <dd>100%</dd>
        </dl>
        <dl>
            <dt>max-width</dt>
            <dd>none</dd>
            <dd>20%</dd>
            <dd>50%</dd>
            <dd>100%</dd>
        </dl>
        <dl>
            <dt>max-height</dt>
            <dd>none</dd>
            <dd>20%</dd>
            <dd>50%</dd>
            <dd>100%</dd>
        </dl>
    </div>
</div>
<script>
    function getCSS(obj, style) {
        return window.getComputedStyle ? getComputedStyle(obj)[style] : obj.currentStyle[style];
    };
    (function con() {
        var aDl = document.getElementById('box').getElementsByTagName('dl');
        var oSb = document.getElementById('sb');
        var oImg = document.getElementById('show-img');
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function () {
                    var oDl = this.parentNode;
                    var oDt = oDl.getElementsByTagName('dt')[0];
                    oDl.getElementsByTagName('dd')[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    oSb.style[oDt.innerHTML] = this.innerHTML;
                    oImg.innerHTML = '测试内容的' + oDt.innerHTML + ':' + getCSS(oSb, oDt.innerHTML);
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```

<iframe frameborder='0' src='./csses/box-model.html' width='100%' height='220'></iframe>

4. padding: [\<length> | \<percentage>]{1,4} | inherit。
    1. 块级元素通过padding:50%可以实现正方形的效果，因为水平和垂直padding的百分比值都是相对于包含块的宽度决定的，常常用于移动端头图。如果是内联元素使用padding:50%，必须配合font-size:0，因为使用inline元素的垂直padding会出现"幽灵空白节点"，也就是规范中"strut"。所以通过font-size:0使其尺寸为0。
    2. 【表单】所有浏览器input/textarea/button都内置padding。部分浏览器select下拉内置padding，firefox、IE8+可以设置padding。除IE10-以外的其他浏览器，radio/checkbox单选复选框无内置padding，且无法设置padding。IE10-浏览器的radio/checkbox单选复选框有内置padding，且可以设置padding。除IE10-以外的其他浏览器，radio/checkbox单选复选框无内置border，且无法设置border
    3. 【button兼容】在firefox浏览器中，设置padding:0，按钮左右两侧依然有padding，这时需要使用firefox自有样式 ``button::-moz-focus-inner{padding:0;}`` 。IE7-浏览器下文字越多，左右padding逐渐变大，设置overflow:visible可解决该问题。
    4. button按钮的padding与高度计算不兼容。

```css
button{
    line-height:20px;
    padding:10px;
    border:none;
}
/* 结果为：
IE7: 45px
firefox:42px
chrome/IE8+:40px */
```
    可以使用label标签来实现类似的效果，然后把按钮button进行可访问性隐藏即可
```html
<style>
    label {
        display:inline-block;
        line-height:20px;
        padding:10px;
        border:none;
    } /* 结果为：
    IE7: 40px
    firefox:40px
    IE8+:40px
    chrome:40px */
</style>
<button id="btn"></button>
<label for="btn">按钮</label>
```

    5. 【下内边距缺失】firefox和IE8+浏览器在overflow:scroll或auto时，存在padding-bottom缺失现象
5. margin: [\<length> | \<percentage> | auto]{1,4} | inherit。设置外边距margin会在元素外创建额外的空白，空白通常指不能放其他元素的区域，而且在这个区域中可以看到父元素的背景。外边距可以应用到行内元素，上下外边距对行高没有任何影响。由于上下外边距实际上是透明的，所以这个声明没有任何视觉效果。左外边距应用到元素开始处；右外边距应用到元素结束处。
    1. 百分数: 相对于包含块的width。【注意】对于普通元素来说，包含块就是块级父级元素，对于定位元素来说，包含块是定位父级。所以，普通元素的margin百分比相对于块级父级元素的width，定位元素的margin百分比相对于定位父级的width
    2. 【四值顺序】
        1. 【1个值】margin: top|right|bottom|left;
        2. 【2个值】margin: top|bottom left|right;
        3. 【3个值】margin: top left|right bottom;
        4. 【4个值】margin: top right bottom left;
    3. margin-start相当于流方向的开始端的外边距。在正常的流向下，margin-start等同于margin-left，两者重叠不累加；如果水平流是从右向左，margin-start等同于margin-right；在垂直流下(writing-mode:vertical-*;)，margin-start等同于margin-top。【注意】IE浏览器不支持。类似地，margin-before在默认流向的情况下，等同于margin-top。与margin-before相对应的是margin-after。【注意】只有chrome和safari支持
6. border: width style color;
7. box-sizing: content-box | bordrer-box | padding-box | inherit

#### 四个自适应宽高关键字

* width:fill-available表示撑满可用空间。出现fill-available关键字值的价值在于，可以让元素的100%自动填充特性不仅仅在block水平元素上，也可以应用在其他元素。可实现【等高布局】
* width:fit-content表示将元素宽度收缩为内容宽度。配合margin:auto可实现【水平居中】
* width:min-content表示采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度。首先，要明白这里的“最小宽度值”是什么意思。替换元素，例如图片的最小宽度值就是图片呈现的宽度，对于文本元素，如果全部是中文，则最小宽度值就是一个中文的宽度值；如果包含英文，因为默认英文单词不换行，所以，最小宽度可能就是里面最长的英文单词的宽度
* width:max-content表示采用内部元素宽度值最大的那个元素的宽度作为最终容器的宽度。如果出现文本，则相当于文本不换行

#### 边框和阴影

* 关于虚线dashed，在chrome/firefox下，虚线宽高比是3/1；而在IE下，虚线宽高比为2/1。所以在IE下虚线显得比较密
* 关于点线dotted，在chrome下，点线是方点；而在IE/firefox下，点线是圆点
* 边框的宽度不能为负，不能指定为百分比值。这是因为，边框并不会因为设备尺寸变大，所以百分比单位并不符合语义。类似地，还有outline、box-shadow、text-shadow等
* 边框宽度支持3个关键字：this/medium/thick，分别是1px、3px、5px，且medium为默认值。medium为3px是因为边框样式double至少为3px为有效果
* 默认的边框颜色是元素本身的前景色，即元素的文本颜色；如果元素没有任何文本，则边框颜色是其父元素的文本颜色。但是，在表格中，若只设置border-style，而不设置border,则边框颜色为黑色，而不与文本颜色相同。类似地，还有text-shadow、box-shadow等
* 边框绘制在元素背景之上，如果边框样式有某种缝隙，可以通过这些缝隙看到元素的背景(有兼容问题)
* 同一元素的边框相交处是斜线，可以用边框实现【三角形】 ``.test { width: 0; border: 20px solid transparent; border-top-color: green; }``
* 行内元素的上下边框由于不影响行高，不影响布局；左右边框会影响布局
* 在CSS2.1中，背景定位background-position只能相对于左上角定位。如果需要是相对于右侧，则可以使用一个右侧的透明边框来实现类似的效果
* 【四值顺序】
    * border-width: 1px 2px 3px 4px;//上右下左
    * border-width: 1px 2px 3px;//上(左右)下
    * border-width: 1px 2px;//(上下)(左右)
    * border-width: 1px;//(上下左右)

* 多色边框border-colors可以在一条边框上设置多种颜色。【注意】只有firefox支持，需要加-moz-前缀，且只能四条边分开写，否则无效

* 圆角边框border-radius可以为边框设置圆角(IE8-不支持)，四值顺序是左上、右上、右下、左下
* 重置border-radius没有圆角，使用none无效，需要取值0
* border-radius对``<img>``没有任何效果
* 如果border-radius取值为百分比，水平方向圆角百分比相对于宽度，垂直方向圆角百分比相对于高度
* border-radius: 10px 20px 30px 40px / 20px 30px 40px 50px; 斜杆前面是水平方向圆角半径，后面是垂直方向圆角半径
* 【圆形】``.test { width: 100px; height: 100px; border-radius: 50%; }``
* 【半圆】``.test { width: 100px; height: 50px; border-radius: 50px 50px 0 0; }``
* 【扇形】``.test { width: 50px; height: 50px; border-radius: 50px 0 0 0; }``
* 【椭圆】``.test { width: 100px; height: 80px; border-radius: 100px / 80px; }``

* 盒子阴影
    * box-shadow: none(默认)
    * box-shadow: (h-shadow v-shadow blur spread color inset)+;
    * h-shadow: 水平阴影位置(必须)
    * v-shadow: 垂直阴影位置(必须)
    * blur:     模糊距离(可选)
    * spread:   阴影尺寸(可选)
    * color:    阴影颜色，默认和文本颜色一致(可选)
    * inset:    内部阴影(可选)
    * box-shadow:10px 10px red,20px 20px blue;
    * 【模拟边框】``box-shadow: 0 0 0 10px blue;``
* 可以使用多重阴影，但使用过多会造成性能差
* 边框在内阴影之上，内阴影在背景图片之上，背景图片在背景色之上，背景色在外阴影之上
* 内阴影对``<img>``元素没有任何效果
* 最先写的阴影在最顶层
* 该属性与border-radius一脉相承，若通过border-radius设置为圆角，则box-shadow的最终呈现也将是圆角
* 【单侧投影】【邻边投影】【双侧投影】

* 图片边框border-image可以在边框位置设置图片(IE10-不支持)。border-image: border-image-source || border-image-slice [ / border-image-width? | / border-image-outset ]? || border-image-repeat; 【注意】该属性的作用是用来替代border-style的，若border-image为none，则显示border-style的值。border-image: url('img.img') 27 fill / 27 / 27px repeat;
* border-image-source: url('test.img');
* border-image-slice: \<number> | \<percentage> fill 图片边框四条切割线的位置
    * 若不写单位，具体值默认单位是px
    * fill表示图片边框的中间部分将保留下来
    * 四值方向是上右下左，代表切割线的方向，切割的分别是高宽高宽
    * 图片边框是在边框范围内显示的，若边框宽度不等于slice切片值，则图片边框会按比例放大缩小，以使图片边框正好显示在边框范围内
    * 若slice值为负，或大于盒子的宽度或高度会被100%，四个角将显示整个背景图片
    * 若右切和左切大于盒子宽度，则上中和下中部分为空；若上切和下切大于盒子高度，则左中和右中部分为空
* border-image-width: \<length> | \<percentage> | \<number> | auto 若指定该值，则边框图片宽度由该值确定，否则由盒子的边框宽度来确定。该值可以用具体像素、数字(表示几倍)以及百分比来表示，遵循四值顺序
* border-image-outset表示边框图像区域超出边框的量，可以用具体像素和数字(表示几倍)表示，遵循四值顺序
* border-image-repeat: stretch(拉伸,默认) | repeat(重复) | round(平铺) [1,2] //第一个值表示水平方向的排列方式，第二个值表示垂直方向的排列方式

* 【三角形】【圆形】【半圆】【扇形】【椭圆】【单侧投影】【邻边投影】【双侧投影】
* 【三道杠效果】上面两道杠使用上边框的double样式，下面一道杠使用下边框的solid样式
* 【十字效果】
* 【信封效果】

```html
<style>
    .content { background-color: #ddd; padding: 10px; display: inline-block; }
    .show { float: left; width: 240px; text-align: center; }
    .show-body { border: 1px solid black; border-radius: 5%; }
    .show-target { width: 50px; height: 50px; background-color: white; margin: 10px; box-shadow: 0 0 0 5px red; }
    .control { float: left; font-family: 宋体; font-size: large; margin-left: 10px; }
    .control dl { margin: 0; }
    .control dt { font-weight: bold; text-align: center; }
    .control dd { display: inline-block; text-align: center; width: 50px; height: 20px; background-color: #E7E7E7; margin: 0; cursor: pointer; }
</style>
<div class="content">
    <div class="show">
        <h3>box-shadow演示</h3>
        <div class="show-body">
            <div class="show-target"></div>
        </div>
        <div class="show-tips"></div>
    </div>
    <div class="control">
        <dl>
            <dt>h-shadow</dt>
            <dd>-2px</dd>
            <dd>-1px</dd>
            <dd>0</dd>
            <dd>1px</dd>
            <dd>2px</dd>
        </dl>
        <dl>
            <dt>v-shadow</dt>
            <dd>-2px</dd>
            <dd>-1px</dd>
            <dd>0</dd>
            <dd>1px</dd>
            <dd>2px</dd>
        </dl>
        <dl>
            <dt>blur</dt>
            <dd>0</dd>
            <dd>1px</dd>
            <dd>2px</dd>
            <dd>3px</dd>
            <dd>4px</dd>
        </dl>
        <dl>
            <dt>spread</dt>
            <dd>-2px</dd>
            <dd>-1px</dd>
            <dd>0</dd>
            <dd>1px</dd>
            <dd>2px</dd>
        </dl>
        <dl>
            <dt>color</dt>
            <dd>red</dd>
            <dd>green</dd>
            <dd>blue</dd>
            <dd>black</dd>
            <dd>white</dd>
        </dl>
        <dl>
            <dt>inset</dt>
            <dd>out</dd>
            <dd>in</dd>
        </dl>
    </div>
</div>
<script>
    (function () {
        var target = document.getElementsByClassName("show-target")[0]
        var tips = document.getElementsByClassName("show-tips")[0]
        var boxShadow = ['0', '0', '0', '0', 'red', '']
        var dls = document.getElementsByTagName("dl")
        for (let index = 0; index < dls.length; index++) {
            const element = dls[index];
            var dt = element.getElementsByTagName("dt")[0]
            dt.last = 0
            dt.index = index
            var dds = element.getElementsByTagName("dd")
            for (let index2 = 0; index2 < dds.length; index2++) {
                const element2 = dds[index2];
                element2.index = index2
                element2.onclick = function() {
                    var dl = this.parentElement
                    var dt = dl.getElementsByTagName("dt")[0]
                    dl.getElementsByTagName("dd")[dt.last].style.cssText = 'background-color: #E7E7E7; color: black;'
                    this.style.cssText = 'background-color: black; color: white;'
                    dt.last = this.index
                    if (dt.innerText == 'inset') {
                        boxShadow[dt.index] = this.innerText == 'out' ? '' : 'inset'
                    } else {
                        boxShadow[dt.index] = this.innerText
                    }
                    tips.innerText = boxShadow.join(" ").trim()
                    target.style.boxShadow = tips.innerText
                }
            }
        }
    })()
</script>
```
<iframe frameborder='0' src='./csses/boxShadow.html' width='100%' height='290'></iframe>

```html
<!-- 【十字效果】 -->
<style>
    .box { position: relative; color: blue; border: 4px solid; width: 40px; height: 40px; transition: color 0.5s; }
    .box:before { content: ""; border-top: 10px solid; display: block; position: absolute; width: 30px; top: 15px; left: 5px; }
    .box:after { content: ""; position: absolute; top: 5px; left: 15px; border-left: 10px solid; height: 30px; }
    .box:hover { color: lightblue; }
</style>
<div class="box"></div>
```

```html
<!-- 【信封效果】 -->
<style>
    .box {
        width: 200px; height: 100px; padding: 10px; border: 10px solid;
        border-image: repeating-linear-gradient(-225deg, red 0, red 10px, transparent 10px, transparent 20px, #58a 20px, #58a 30px, transparent 30px, transparent 40px) 20;
    }
</style>
<div class="box" contenteditable="true">请修改文字</div>
```

#### margin要点

margin是盒模型几个属性中一个非常特殊的属性。简单举几个例子：只有margin不显示当前元素背景，只有margin可以设置为负值，margin和宽高支持auto，以及margin具有非常奇怪的重叠特性。

* 【margin重叠】又叫margin合并，发生这种情况有两个前提
    * 只发生在block元素上(不包括float、absolute、inline-block元素)
    * 只发生在垂直方向上(不考虑writing-mode)
    * margin重叠共包括以下3种情况
        * 相邻的兄弟元素
        * 父级元素和第一个或最后一个子元素，父子级的margin重叠又叫margin传递。相对比相邻兄弟元素margin重叠来说，父子级margin重叠需要满足以下几个条件(以margin-top重叠为例)：
            * 父元素不是BFC（[深入理解BFC](https://www.cnblogs.com/xiaohuochai/p/5248536.html)）元素
            * 父元素没有padding-top值
            * 父元素没有border-top值
            * 父元素和第一个子元素之间没有inline元素分隔
            * 如果是父子级的margin-bottom重叠，第d条改为父元素和最后一个子元素之间没有inline元素分隔，以及还需要满足父元素没有height、min-height、max-height限制
        * 空的block元素。空block元素应该撑开父级margin-top+margin-bottom共2em的高度，但由于margin重叠，只有1em。空block元素发生margin重叠也需要满足一些条件
            * 元素没有border值
            * 元素没有padding值
            * 里面没有inline元素
            * 没有height或min-height
    * 两个正垂直外边距，浏览器取大值；如果垂直外边距都设置为负值，浏览器会选取两个外边距的绝对值的最大值；如果一个正外边距与一个负外边距合并，会从正外边距减去这个负外边距的绝对值
* 【为什么margin:auto无法实现垂直居中】
    * 水平方向可以居中是因为块级元素的宽度默认是撑满父级元素的，如果给宽度设置一个固定值，而左右margin设置为auto，则可以平分剩余空间
    * 垂直方向不可以居中是因为块级元素的高度默认是内容高度，与父级元素的高度并没有直接的关系，而上下margin设置为auto，则被重置为0
* 【为什么图片使用margin:auto不能水平居中】
    * 图片无法水平居中，类似于块级元素无法垂直居中。因为图片的宽度width默认是自身宽度，与父元素的宽度没有直接关系。左右margin设置为auto，会被重置为0
    * 所以，图片要水平居中，需要设置为display:block元素
* 【实现垂直居中】使用margin:auto实现垂直居中，有以下两种方法
    * 使用writing-mode:vertical-lr; writing-mode代表页面流方向，默认是水平方向。改为垂直方向后，可实现垂直居中，但水平不居中了
    * 将元素变为绝对定位元素(IE7-浏览器不支持)。将元素变为绝对定位元素后，设置top:0;bottom:0;，使绝对定位元素与定位父级的高度有了直接的联系。再设置margin:auto 0;，使margin-top和margin-bottom平分剩余空间，达到垂直居中的效果
* 【行内元素垂直margin无效】。因为行内元素垂直布局主要是通过行高line-height和垂直对齐vertical-align来影响的，垂直margin并不会影响它们，所以不会影响垂直布局。而在显示方式，margin区域不会显示元素背景，所以也不会影响自身元素的显示，所以行内元素垂直margin无效。【注意】不包括inline-block或设置writing-mode为vertical-lr的情况
* 【某些表格类元素margin无效】。``<thead>、<tbody>、<tfoot>、<tr>、<col>、<colgroup>、<td>、<th>``不可设置margin。对于display属性来说，display为table相关类型(不包括table-caption、table、inline-table)，margin声明无效
* 【绝对定位元素非定位方向的margin值看似无效】绝对定位的margin值是一直有效的，只是因为绝对定位元素是脱离文档流的，与其他元素节点没有什么关系，所以看不出效果
* 【BFC造成的margin看似无效】左侧元素使用浮动，右侧元素使用overflow-hidden实现两栏自适应的布局时，右侧元素的margin-left值只有足够大，才能看到效果。这是因为margin-left是相对于父元素左侧，而不是图片右侧
* 【内联特性导致的margin无效】一个div里面包着一张图片，当图片的margin-top小到一定值时，图片就不再接着向上移动了。这是因为图片是内联元素，它受制于内联元素vertical-align对齐特性的影响。默认基线对齐。以页面假想的大写X字符为例，X是不会因为图片margin-top足够小而跑到父元素外面的，所以图片移动到一定位置就不再接着向上移动了

#### margin负值

* 【表现】
    * block元素可以使用四个方向的margin值
    * inline元素使用上下方向的margin值无效
    * inline-block使用上下方向的margin负值看上去无效
    * 【注意】inline-block使用上下方向的margin负值只是看上去无效，这与其默认的vertical-align:baseline有关系，当垂直对齐的属性值为其他值时，则会显示不同的视觉效果
* 【重叠】
    * margin负值并不总是后面元素覆盖前面元素，它与元素display属性有关系
    * 两个block元素重叠时，后面元素可以覆盖前面元素的背景，但无法覆盖其内容
    * 当两个inline元素，或两个line-block元素，或inline与inline-block元素重叠时，后面元素可以覆盖前面元素的背景和内容
    * 当inline元素(或inline-block元素)与block元素重叠时，inline元素(或inline-block元素)覆盖block元素的背景，而内容的话，后面的元素覆盖前面的元素
    * 综上所述，个人理解，在普通流布局中，浏览器将页面布局分为内容和背景，内容的层叠显示始终高于背景。block元素分为内容和背景，而inline元素或inline-block元素，它本身就是内容(包括其背景等样式设置)
* 【浮动】
    * block元素与浮动元素重叠时，其边框和背景在该浮动元素之下显示，而内容在浮动元素之上显示
    * inline或inline-block元素与浮动元素重叠时，其边框、背景和内容都在该浮动元素之上显示
* 【定位】
    * 定位元素(position不为static)覆盖其他元素的背景和内容
    * 将relative属性值应用于inline元素，由于无法改变其行内元素的本质，所以其上下margin依然存在问题
* 【应用】 https://www.cnblogs.com/xiaohuochai/p/5314289.html
    * 【水平垂直居中】
        * 如果要居中的元素的宽/高是不变的或者说是确定的，比如width/height=100px，那么设置absolute的top/left=50%，然后margin-left/margin-top=-50px即可
        * 如果要居中的元素的宽/高是不确定的，这时margin负值就不能使用具体的px了，可以使用百分比。但由于margin的百分比都是相对于包含块的宽度，所以这里限制了只能设置宽高相同的居中元素。包含块的宽度如何获得呢？利用absolute的包裹性，在需要居中的元素外面套一个空的``<div>``元素即可
    * 【列表项两端对齐】
        * 比如外层元素宽度为200px，内层3个元素，宽度为60px，margin-right为10px。这里，正常流中块级元素框的水平总和总共为210px，超过了父元素的宽度200px，则第三个元素会被挤下来。当然可以给第三个元素设置margin-right=0。但，这种方法不优雅，为布局而布局，第三个元素并没有什么特殊的，却被设置了特殊的样式
        * 优雅的方法应该是内层元素和外层元素之间包一层元素，设置margin-right=-10px，使块级元素框的水平总和总共为210px - 10px = 200x ，等于父元素的宽度即可
        * 【注意】设置overflow:hidden用于清除浮动
    * 【三栏自适应布局】
        * 中间的主体使用双层标签，外层``<div>``宽度100%显示，并且浮动，内层``<div>``为真正的主体内容，含有左右110px的margin值。左栏和右栏都采用margin负值。左栏左浮动，margin-left为-100%，正好使左栏位于页面左侧。右栏左浮动，大小为其本身的宽度100px
    * 【三栏等高布局】【不是很懂】
        * 给每栏设置大的底部内边距，然后用数值相同的负外边距消除这个高度，然后在外层容器中设置overflow为hidden

```html
<style>
    body,dl,dd,h2{margin:0;}
    h2{font-size:20px;}
    .box{overflow:hidden;width:276px;padding:10px;background-color:#ddd;text-align:center;position:relative;font:18px/1.2 "宋体";}
    .con{float:left;width:100%;}
    .show{float:left;width:100%;}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;}
    #show-img{min-height:20px;font-size:14px;}
    .con dl *{float:left;overflow:hidden;}
    .con dl+dl{margin-top:1%;}
    .con dt{font-weight:bold;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;cursor:pointer;width:23%;}
    .con dl.display dd{width:19%;margin:1px;}
    .con dl.display dd:last-child{width:40%;}
    @media (min-width:700px) {.con{width:50%;}.show{width:50%;}.box{width:700px;}}
    ul{margin:0;padding:0;list-style:none;}
    .l{float:left;}
    .r{float:right;}
    .con-ul{display:inline-block;vertical-align:top;width:94%;border:1px solid black;overflow:hidden;padding:2%;border-radius:10px;margin-top:10px;}
    .con-ul li{height:30px;line-height:30px;font-size:14px;background-color:rgba(0,0,0,0.5);text-align:left;color:white;cursor:pointer;margin:1%;overflow:hidden;}
    .con-ul li input{width:60px;}
</style>
<div class="box" id="box">
    <div class="show">
        <h2 class="show-tit">margin负值演示</h2>
        <div class="show-body" id="sb">
            <!-- 添加结构单元 -->
            <div id='oShow1' style="background-color:lightyellow;width:140px;height:40px;line-height:20px;">前块元素/元素一</div>
            <div id="oShow2" style="background-color:lightblue;width:140px;height:40px;line-height:20px;">测试元素/元素二</div>
            <div id="oShow3" style="background-color:lightgreen;width:140px;height:40px;line-height:20px;">后块元素/元素三</div>
            <!-- 添加结构单元结束 -->
        </div>
        <div id="show-img"></div>
        <button id="reset" style="position:absolute;left:0;bottom:0;margin-bottom:20px;">还原</button>
    </div>
    <div class="con">
        <dl>
            <dt>序号</dt>
            <dd data-id="oShow1">元素一</dd>
            <dd data-id="oShow2">元素二</dd>
            <dd data-id="oShow3">元素三</dd>
        </dl>
        <dl class="display">
            <dt data-attr="display">display</dt>
            <dd>block</dd>
            <dd>inline</dd>
            <dd>none</dd>
            <dd>inline-block</dd>
        </dl>
        <dl>
            <dt data-attr="vertical-align">vertical-align</dt>
            <dd>baseline</dd>
            <dd>top</dd>
            <dd>bottom</dd>
            <dd>middle</dd>
        </dl>
        <dl>
            <dt data-attr="float">float</dt>
            <dd>left</dd>
            <dd>right</dd>
            <dd>none</dd>
        </dl>
        <dl>
            <dt data-attr="position">position</dt>
            <dd>static</dd>
            <dd>relative</dd>
            <dd>absolute</dd>
            <dd>fixed</dd>
        </dl>
        <ul class="con-ul" id="conUl">
            <li data-name="margin-top">
                <span class="l">margin-top:<b>auto</b></span>
                <button class="r">auto</button>
                <input class="r" type="range" min="-100" max="100" step="1" value="0">
                <input class="r" type="number" min="-100" max="100" value="0">
            </li>
            <li data-name="margin-bottom">
                <span class="l">margin-bottom:<b>auto</b></span>
                <button class="r">auto</button>
                <input class="r" type="range" min="-100" max="100" step="1" value="0">
                <input class="r" type="number" min="-100" max="100" value="0">
            </li>
            <li data-name="margin-left">
                <span class="l">margin-left:<b>auto</b></span>
                <button class="r">auto</button>
                <input class="r" type="range" min="-100" max="100" step="1" value="0">
                <input class="r" type="number" min="-100" max="100" value="0">
            </li>
            <li data-name="margin-right">
                <span class="l">margin-right:<b>auto</b></span>
                <button class="r">auto</button>
                <input class="r" type="range" min="-100" max="100" step="1" value="0">
                <input class="r" type="number" min="-100" max="100" value="0">
            </li>
        </ul>
    </div>
</div>
<script>
    function getCSS(obj, style) {
        return window.getComputedStyle ? getComputedStyle(obj)[style] :obj.currentStyle[style]
    }
    (function con() {
        var aDl = document.getElementById('box').getElementsByTagName('dl')
        var oShow1 = document.getElementById('oShow1')
        var oShow2 = document.getElementById('oShow2')
        var oShow3 = document.getElementById('oShow3')
        var oShow = null
        var oImg = document.getElementById('show-img')
        var conChildren = conUl.children
        reset.onclick = () => history.go()
        for (var i = 0; i < conChildren.length; i++) {
            var conChild = conChildren[i]
            conChild.index = i
            var oFocus = conChild.getElementsByTagName('input')[0]
            var oFocus2 = conChild.getElementsByTagName('input')[1]
            conChild.getElementsByTagName('button')[0].onclick =
            oFocus.onpropertychange = oFocus.oninput = oFocus.onchange =
            oFocus2.onpropertychange = oFocus2.oninput = oFocus2.onchange = function () {
                if (oShow == null) {
                    return
                }
                var temp = this.value === '' ? 'auto' :(this.value + 'px')
                var parent = this.parentNode
                parent.getElementsByTagName('b')[0].innerHTML = temp
                oShow.style[parent.dataset ? parent.dataset.name :parent.getAttribute('data-name')] = temp
                oImg.innerHTML = 'margin：' + getCSS(oShow, 'margin') + '; ' + 'display:' + getCSS(oShow, 'display')
                if (this.tagName == 'BUTTON') {
                    parent.getElementsByTagName('input')[0].value = '0'
                    parent.getElementsByTagName('input')[1].value = '0'
                } else {
                    parent.getElementsByTagName('input')[0].value = this.value
                    parent.getElementsByTagName('input')[1].value = this.value
                }
            }
            conChild.onmouseover = function() { this.style.color = "rgb(39,184,231)" }
            conChild.onmouseout = function() { this.style.color = "white" }
        }
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var aDd = aDl[i].getElementsByTagName('dd')
            aDl[i].last = 0
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j
                aDd[j].onclick = function () {
                    var oDl = this.parentNode
                    var oDt = oDl.getElementsByTagName('dt')[0]
                    if (oDt.dataset.attr == null) {
                        if (oShow != null) {
                            oShow.style.outline = ''
                        }
                        if (this.dataset.id == 'oShow1') {
                            oShow = oShow1
                        } else if (this.dataset.id == 'oShow2') {
                            oShow = oShow2
                        } else if (this.dataset.id == 'oShow3') {
                            oShow = oShow3
                        }
                        oDl.getElementsByTagName('dd')[oDl.last].style.cssText = 'color:black; background-color:rgba(255,255,255,0.3);'
                        this.style.cssText = 'color:white; background-color:black;'
                        oDl.last = this.index
                        oShow.style.outline = '3px solid black'
                        return
                    }
                    if (oShow == null) {
                        return
                    }
                    oDl.getElementsByTagName('dd')[oDl.last].style.cssText = 'color:black; background-color:rgba(255,255,255,0.3);'
                    this.style.cssText = 'color:white; background-color:black;'
                    oDl.last = this.index
                    oShow.style[oDt.dataset.attr] = this.innerHTML
                    oImg.innerHTML = 'margin: ' + getCSS(oShow, 'margin') + '; display: ' + getCSS(oShow, 'display') + '; float: ' + getCSS(oShow, 'float') + '; vertical-align: ' + getCSS(oShow, 'vertical-align')
                }
            }
        }
    })()
</script>
```
<iframe src='./csses/negative-margin.html' frameborder='0' width='100%' height='300'></iframe>

#### 轮廓outline

* 【样式】none | dotted | dashed | solid | double | groove | ridge | inset | outset | inherit。与边框不同的是，值少了一个hidden
* 【宽度】
* 【颜色】
* 【偏移】outline-offset属性，可以简单理解为控制outline绘制的边框和border边框之间的距离。另外，outline-offset属性还可接收负值
* 【总】
* 【应用】

```html
<style>
    :root { --interval: 10px; --small-interval: 5px; --large-interval: 20px; }
    dl, dt, dd, div { margin: 0; padding: 0; }
    .content { background: #ddd; width: 360px; overflow: hidden; padding: var(--interval); position: relative; }
    .show { float: left; width: 100%; text-align: center; }
    .show-wrapper { border: 1px black solid; border-radius: 5%; padding: var(--large-interval); }
    .control { float: left; width: 100%; }
    .show-title, .control dt { font-size: larger; font-weight: bold; text-align: center; }
    .control dd { display: inline-block; margin: var(--small-interval); width: 25%; background: #e7e7e7; cursor: pointer; text-align: center; }
    .control dd:hover { background: #aaa; color: white; }
    .control div { background: #999; padding: var(--small-interval); }
    .control div span { color: white; font-size: small; }
    .control div input { width: 60px; float: right; margin-left: var(--small-interval); }
    @media (min-width: 600px) {
        .content { width: 600px; }
        .show { width: 38%; }
        .control { width: 60%; margin-left: 2%; }
    }
</style>
<div class="content">
    <div class="show">
        <div class="show-title">outline演示</div>
        <div class="show-wrapper">
            <div class="show-body">测试内容</div>
        </div>
        <div class="show-tips"></div>
    </div>
    <button style="position: absolute; top: 10px; left: 10px;" onclick="history.go()">reset</button>
    <div class="control">
        <dl data-attr="outlineStyle">
            <dt>outline-style</dt>
            <dd>none</dd>
            <dd>dotted</dd>
            <dd>dashed</dd>
            <dd>solid</dd>
            <dd>double</dd>
            <dd>groove</dd>
            <dd>ridge</dd>
            <dd>inset</dd>
            <dd>outset</dd>
        </dl>
        <dl data-attr="outlineWidth">
            <dt>outline-width</dt>
            <dd>thin</dd>
            <dd>medium</dd>
            <dd>thick</dd>
            <dd>0</dd>
            <dd>1px</dd>
            <dd>10px</dd>
        </dl>
        <dl data-attr="outlineColor">
            <dt>outline-color</dt>
            <dd>red</dd>
            <dd>green</dd>
            <dd>blue</dd>
            <dd>white</dd>
            <dd>black</dd>
        </dl>
        <dl data-attr="color">
            <dt>color</dt>
            <dd>red</dd>
            <dd>green</dd>
            <dd>blue</dd>
            <dd>white</dd>
            <dd>black</dd>
        </dl>
        <div data-attr="outlineOffset">
            <span>outline-offset: <b></b></span>
            <input type="reset" value="reset"></button>
            <input type="range" max='100' min='-100' value='0' step='1'>
            <input type="number" value='0'>
        </div>
    </div>
</div>
<script>
    function getCSS(obj, style) {
        return window.getComputedStyle ? getComputedStyle(obj)[style] :obj.currentStyle[style]
    }
    (function() {
        const showBody = document.getElementsByClassName("show-body")[0]
        const showTips = document.getElementsByClassName("show-tips")[0]
        var allControl = document.getElementsByClassName("control")[0]
        var controls = allControl.getElementsByTagName("dl")
        for (let index1 = 0; index1 < controls.length; index1++) {
            var control = controls[index1];
            control.last = 0
            var items = control.getElementsByTagName("dd")
            for (let index2 = 0; index2 < items.length; index2++) {
                var item = items[index2];
                item.index = index2
                item.onclick = function() {
                    var parent = this.parentNode
                    parent.getElementsByTagName("dd")[parent.last].style.cssText = 'background: #e7e7e7; color: black;'
                    this.style.cssText = 'background: black; color: white;'
                    parent.last = this.index
                    showBody.style[parent.dataset.attr] = this.innerText
                    showTips.innerHTML = 'outline: ' + getCSS(showBody, 'outline') + '<br>color: ' + getCSS(showBody, 'color') + '<br>outline-offset: ' + getCSS(showBody, 'outline-offset')
                }
            }
        }
        var controls2 = allControl.getElementsByTagName("div")
        for (let index1 = 0; index1 < controls2.length; index1++) {
            var control = controls2[index1];
            var inputs = control.getElementsByTagName("input")
            var reset = inputs[0]
            var range = inputs[1]
            var number = inputs[2]
            reset.onclick = range.onchange = number.onchange = range.onpropertychange = number.onpropertychange = range.oninput = number.oninput = function() {
                var parent = this.parentNode
                var value = this.value == '' ? '0' : this.value + 'px'
                var inputs = parent.getElementsByTagName("input")
                showBody.style[parent.dataset.attr] = value
                parent.getElementsByTagName("b")[0].innerText = value
                if (this.type == 'reset') {
                    inputs[1].value = inputs[2].value = '0'
                } else {
                    inputs[1].value = inputs[2].value = this.value
                }
                showTips.innerHTML = 'outline: ' + getCSS(showBody, 'outline') + '<br>color: ' + getCSS(showBody, 'color') + '<br>outline-offset: ' + getCSS(showBody, 'outline-offset')
            }
        }
    })()
</script>
```
<iframe src='./csses/outline.html' frameborder='0' width='100%' height='300'></iframe>

### 弹性盒模型

#### 弹性盒模型flex

【版本迭代】

flexbox布局的语法规范经过几年发生了很大的变化。从2007年07月，flex第一版本的工作草案发布，到2012年09月，flex最新版本成为候选推荐。flex主要经历了三个版本

* 旧版本 display:box|inline-box; IE浏览器不支持，windows下的safari浏览器只支持旧版本的写法且需要添加前缀，移动端可以兼容到andriod2.1-4.3和ios3.2-6.1，也需要添加前缀
* 混合版本 display:flexbox|inline-flexbox; 该版本只有IE10支持，且需要添加前缀-ms-
* 新版本 display:flex|inline-flex; 该版本兼容IE11+、firefox、safari、chrome、opera及移动端，但移动端ios7.1-8.4需要添加前缀-webkit-

【display】

采用flex布局的元素，称为伸缩容器(flex container)，容器内的子元素称为伸缩项目(flex item)。<br>
浏览器会将任何直接在伸缩容器里的连续文字块包起来成为匿名伸缩项目。<br>
弹性盒模型的两种容器块级伸缩容器和内联伸缩容器的区别类似于block和inline-block的区别，一个独占一行，另一个非独占一行<br>
使用flex布局实现上是使元素FFC化(flex formatting context伸缩格式化上下文)，FFC是普通流的一种。而浮动流和定位流以及CSS其他属性对FFC是有影响的，主要表现在以下几点：

1. float、clear和vertical-align属性在伸缩项目上没有效果
2. 伸缩容器的margin与其内容的margin不会重叠
3. text-align属性在伸缩容器上没有效果，因为其只可应用于块级block容器
4. 另外，columns属性伸缩容器上没有效果

【基本概念】

<img src='./images/flex-示意图.png'></img>

伸缩容器默认存在两条轴: 水平的主轴(main axis) 和垂直的侧轴(cross axis)<br>
主轴方向不一定是水平的，它主要取决于flex-direction属性<br>
主轴起点叫main start，主轴终点叫main end；侧轴起点叫cross start，侧轴终点叫cross end<br>
伸缩项目默认沿主轴排列。单个伸缩项目占据的主轴空间叫main size ，占据的侧轴空间叫cross size<br>
伸缩项目的main size和cross size主要由宽度或高度决定

【伸缩容器】

* **伸缩流方向 flex-direction** 指定主轴的方向(即伸缩项目在伸缩容器中的排列方向)。

```css
/* 伸缩流方向: 水平方向 | 反向水平 | 垂直方向 | 反向垂直 */
/* 新版本同混合版本 */
flex-direction: row[默认] | row-reverse | column | column-reverse
/* 旧版本 */
box-orient: horizontal(水平) | vertical(垂直) | inline-axis[默认](内联轴方向) | block-axis(块级轴方向)
box-direction: normal(正常) | reverse(反向)
```

伸缩流方向与direction和writing-mode有关系

* **伸缩流换行 flex-wrap** 指定伸缩项目溢出伸缩容器时是否换行

```css
/* 伸缩行换行:不换行 | 换行 | 反转换行 */
/* 新版本同混合版本 */
flex-wrap: nowrap[默认] | wrap | wrap-reverse
/* 旧版本，没有浏览器支持box-lines属性，所以在旧版本中无法实现伸缩项目换行显示 */
box-lines: single[默认] | multiple | N/A
```

此时，CSS允许使用overflow属性来处理溢出内容的显示方式<br>
伸缩项目的排列顺序同样与direction和wrinting-mode有关系

* **伸缩流(包括方向与换行) flex-flow** 伸缩流方向与伸缩行换行的缩写

```css
/* 伸缩流: 伸缩流方向 | 伸缩行换行 */
/* 新版本同混合版本 */
flex-flow: <flex-direction> | <flex-wrap>
[默认值] flex-flow: row nowrap
/* 旧版本无对应属性 */
```

* **主轴对齐 justify-content** 用来设置伸缩容器当前行伸缩项目在主轴方向的对齐方式，指定如何在伸缩项目之间分布伸缩容器额外空间

当一行上的所伸缩项目不能伸缩或可伸缩已达到最大长度时，这一属性才会对伸缩容器额外空间进行分配。当伸缩项目溢出某一行时，这一属性也会在项目的对齐上施加一些控制
```css
/* 主轴对齐方式: 左对齐 | 居中对齐 | 右对齐 | 两端对齐 | 扩散对齐 */
/* 新版本 */
justify-content: flex-start[默认] | center | flex-end | space-between | space-around
/* 混合版本 */
flex-pack: start[默认] | center | end | justify | distribute
/* 旧版本 */
box-pack: start[默认] | center | end | justify | N/A
```

主轴对齐方式与direction、writing-mode、flex-flow都有关

* **侧轴对齐 align-items** 用来设置伸缩容器当前行在侧轴方向的对齐方式

```css
/* 侧轴对齐方式: 顶边对齐 | 中间对齐 | 底部对齐 | 基线对齐 | 伸缩项目拉伸填充整个伸缩容器 */
/* 新版本 */
align-items: flex-start | center | flex-end | baseline | stretch[默认]
/* 混合版本 */
flex-align: start | center | end | baseline | stretch[默认]
/* 旧版本 */
box-align: start | center | end | baseline | stretch[默认]
```

侧轴对齐方式与direction、writing-mode、flex-flow都有关

* **堆栈伸缩行 align-content** 指定多个伸缩项目行在侧轴的对齐方式

```css
/* 侧轴对齐方式: 顶边对齐 | 中间对齐 | 底部对齐 | 两端对齐 | 扩散对齐 | 伸缩项目拉伸填充整个伸缩容器 */
/* 新版本 */
align-content: flex-start | center | flex-end | space-between | space-around | stretch[默认]
/* 混合版本 */
flex-line-pack: start | center | end | justify | distribute | stretch[默认]
/* 旧版本无对应属性 */
```

该属性只有在flex-wrap:wrap | wrap-reverse;且伸缩项目存在多行时才生效<br>
堆栈伸缩行与direction、writing-mode、flex-flow都有关

【伸缩项目】

一个伸缩项目就是伸缩容器的一个子元素。伸缩容器中的文本也被视为一个伸缩项目。以下6个属性设置在伸缩项目上。

* **自身侧轴对齐方式 align-self** 单个伸缩项目在侧轴的对齐方式，该属性可以覆盖伸缩容器的侧轴对齐方式。对于匿名伸缩项目，align-self的值永远与其关联的伸缩容器的align-items的值相同。

```css
/* 侧轴对齐方式: 自动 | 顶边对齐 | 中间对齐 | 底部对齐 | 基线对齐 | 伸缩项目拉伸填充整个伸缩容器 */
/* 新版本 */
align-self: auto[默认] | flex-start | center | flex-end | baseline | stretch
/* 混合版本 */
flex-item-align: auto[默认] | start | center | end | baseline | stretch
/* 旧版本无对应属性 */
```

如果align-self的值为auto，则其计算值为伸缩项目的伸缩容器的align-items值<br>
如果伸缩项目的任一个侧轴上的外边距为auto，则该伸缩项目在伸缩容器的剩余空间内居中对齐，且align-self没有效果

* **伸缩基准值 flex-basis** 伸缩项目在主轴方向上的初始大小

```css
/* 新版本 */
flex-basis: <length> | auto[默认]
/* 混合版本 */
positive-flex: <number>[默认为1]
/* 旧版本无对应属性 */
```

如果flex-basis的值为0，表示伸缩项目在主轴方向上的初始大小为0，分配所有空间；如果flex-basis的值为auto，表示伸缩项目在主轴方向上的初始大小为设置宽度(如果没有设置宽度，则为内容宽度)，再分配剩余空间<br>
flex-basis的\<length>值可以是一个数字后面跟着px、em等单位，也可以是一个百分数，相对于其父伸缩容器的主轴长度

* **扩展比率 flex-grow** 当伸缩容器的额外空间为正值时，此伸缩项目相对伸缩容器里其他伸缩项目能扩展的空间比例

```css
/* 新版本 */
flex-grow: <number>[默认为0]
/* 混合版本 */
positive-flex: <number>[默认为0]
/* 旧版本无对应属性 */
```

若flex-grow的值为0表示即使存在剩余空间也不放大；若所有项目的flex-grow属性都为1，则它们将等分剩余空间(如果有的话)；若一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍

* **收缩比率 flex-shrink** 当伸缩容器的额外空间为负值时，此伸缩项目相对于伸缩容器里其他伸缩项目能收缩的空间比例

```css
/* 新版本 */
flex-shrink: <number>[默认为1]
/* 混合版本 */
negative-flex: <number>[默认为0]
/* 旧版本无对应属性 */
```

如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小<br>
伸缩基准值、扩展比率和收缩比率都可以为小数，但不能为负数

* **伸缩性 flex** 扩展比率、收缩比率和伸缩基准值的缩写

```css
flex: none => flex: 0 0 auto;  //表示宽度为原始宽度，不发生扩展或收缩
flex: auto => flex: 1 1 auto;  //表示除了占据原先的宽度外，还要分配剩余宽度(包括扩展或收缩)
flex: 0 => flex: 0 1 0%;  //表示收缩为最小宽度
flex: 1 => flex: 1 1 0%;  //表示分配所有宽度(包括扩展或收缩)
flex: 0 auto => flex: 0 1 auto;(默认值) //表除了占据原先的宽度外，还要分配剩余宽度(只收缩，不扩展)
flex: 0 1 => flex: 0 1 0%;
```

当flex为关键字none或存在auto时，flex-basis为auto；若flex只有数字值，则flex-basis为0%；

* **显示顺序 order** 定义伸缩项目的排列顺序，数值越小，排列越靠前。伸缩容器中的伸缩项目默认显示顺序是遵循文档在源码中出现的先后顺序(HTML文档的DOM结构中的先后顺序)

```css
/* 新版本 */
order: <number>[默认为0]
/* 混合版本 */
flex-order: <number>[默认为0]
/* 旧版本 */
box-ordinal-group: <integer>[默认为1]
```

#### 旧版flex及兼容

【尚未补全】https://www.cnblogs.com/xiaohuochai/p/5334936.html

以下是flex模块的常用兼容代码
```css
/*display*/
.display_flex{
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.display_flex > *{
    display: block;
}
.display_inline-flex{
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
}
.display_inline-flex > *{
    display: block;
}
/*伸缩流方向*/
.flex-direction_column{
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
}
/*主轴对齐*/
.justify-content_flex-center{
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
}
.justify-content_flex-end{
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
}
.justify-content_flex-justify{
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
}
/*侧轴对齐*/
.align-items_flex-start{
    -webkit-box-align: start;
    -ms-flex-align: start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
}
.align-items_flex-end{
    -webkit-box-align: end;
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
}
.align-items_center{
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
.align-items_baseline{
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    -webkit-align-items: baseline;
    align-items: baseline;
}
/*伸缩性*/
.flex_auto{
    -webkit-box-flex: 1;
    -ms-flex: auto;
    -webkit-flex: auto;
    flex: auto;
}
.flex_1{
    width: 0;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    -webkit-flex: 1;
    flex: 1;
}
/*显示顺序*/
.order_2{
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 2;
    -webkit-order: 2;
    order: 2;
}
.order_3{
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 3;
    -webkit-order: 3;
    order: 3;
}
```

#### flex布局应用

* 【元素居中】
    * .parent { display: flex; justify-content: center; align-items: center; }
    * .parent { display: flex; } .flex_item { margin: auto; }
* 【两端对齐】 .parent { display: flex; justify-content: space-between | space-around; }
* 【底端对齐】 .parent { display: flex; align-items: flex-end; height: 40px; } .item1 { height: 10px; } .item2 { height: 20px; }
* 【输入框按钮】 .inputBox { display: flex; width: 250px; } .inputBox-input { flex: 1; } .inputBox-button { flex: 0; }
* 【等分布局】
    * .parent { display: flex; } .child { flex: 1; height: 100px; } .child + .child { margin-left: 10px; }
    * .parent { display: flex; justify-content: space-between; width: 500px; } .child { width: 100px; }
* 【多列自适应布局】 .parent { display: flex; } .left,.center { margin-right: 20px; } .right { flex: 1; }
* 【悬挂布局】 https://www.cnblogs.com/xiaohuochai/p/5460201.html 有点不理解这种操作啊
* 【全屏布局】 对 flex 的各种属性的充分利用

### 盒子显示

#### 溢出overflow

overflow溢出: visible(默认) | hidden | scroll | auto | inherit。应用于: 块级元素、替换元素、表单元格。【注意】除了IE7-浏览器外，其他浏览器都不支持给table-cell元素设置overflow属性。firefox和IE11浏览器不支持给table-cell元素的设置100%高度的子元素设置overflow属性。

overflow-x和overflow-y的属性原本是IE浏览器独自拓展的属性，后来被CSS3采用，并标准化。overflow-x主要用来定义对水平方向内容溢出的剪切，而overflow-y主要用来定义对垂直方向内容溢出的剪切。

* 【注意1】IE6-浏览器中元素的包含块会延伸，使得可以包裹其超出的内容
* 【注意2】IE7-浏览器的按钮(包括``<button>和<input type="button">``两种)存在bug，当按钮上的文字越多时，按钮两侧的padding就越大。通过设置overflow:visible就可解决该问题
* 【注意】对于一般浏览器来说，``<html>和<textarea>``默认带有overflow:auto的属性。但IE7-浏览器则不同，默认存在纵向滚动条
* 【注意】firefox和IE8+浏览器在overflow:scroll或auto时，存在padding-bottom缺失现象
* **失效**
    * 【注意】绝对定位元素不总是被父级overflow属性剪裁，尤其是当overflow在绝对定位元素及其包含块之间的时候
    * 【注意】由于固定定位是相对于视窗定位的，所以固定定位元素无法被其所有的父级元素overflow属性剪裁
    * overflow元素自身为包含块时，给父级设置position:absolute或fixed或relative，可以解决overflow元素为absolute/fixed时的失效问题
    * overflow元素的子元素为包含块时，在绝对定位元素和overflow元素之间增加一个元素并设置position:absolute或fixed或relative
* **应用**
    * 【清除浮动影响】当overflow设置为auto或scroll或hidden时可以触发BFC，使得overflow可以实现一些相关应用。[关于BFC的详细信息移步至此](https://www.cnblogs.com/xiaohuochai/p/5248536.html)
        * IE6-浏览器使用overflow这种方式并不能清除浮动，常用的消除浮动的方法是 ``.clear { *zomm: 1; } .clear:after { content: ''; display: block; clear: both; }``
    * 【避免margin穿透】【必要】【不是很懂】 https://www.cnblogs.com/xiaohuochai/p/5289653.html
    * 【两栏自适应布局】【必要】【不是很懂】 https://www.cnblogs.com/xiaohuochai/p/5289653.html
    * 【选项卡】

```html
<style>
    body{margin:0;text-align:center;}
    ul{margin:0;padding:0;list-style:none;}
    a{text-decoration:none;color:inherit;}
    .show{width:100px;height:100px;overflow:hidden;border:1px solid black;line-height:100px;font-size:40px;}
    .show-in{width:100px;height:100px;}
    #one{background-color:lightgreen;}
    #two{background-color:lightyellow;}
    #three{background-color:lightblue;}
    #four{background-color:pink;}
    .con{margin:10px 0 0 10px;width:100px;}
    .con-in{display:inline-block;width:16px;line-height:16px;border:1px solid black;background-color:gray;}
</style>
<div class="box">
    <ul class="show">
        <li class="show-in" id="one">1</li>
        <li class="show-in" id="two">2</li>
        <li class="show-in" id="three">3</li>
        <li class="show-in" id="four">4</li>
    </ul>
    <nav class="con">
        <a class="con-in" href="#one">1</a>
        <a class="con-in" href="#two">2</a>
        <a class="con-in" href="#three">3</a>
        <a class="con-in" href="#four">4</a>
    </nav>
</div>
```

#### 裁剪clip

一个绝对定位或固定定位元素通过使用属性clip可以改变剪裁区域的形状，但并不改变元素本身的宽高属性。值: rect(top,right,bottom,left) | auto | inherit。<br>
clip:rect(top,right,bottom,left)中的值不是边偏移，而是距元素左上角的距离。具体来说，就是top和bottom是表示距离元素上边界的距离；left和right是距离元素元素左边界的距离。这里元素的边界指元素边框外侧。这意味着如果高度和宽度没有明确定义，将无法设置一致的剪裁区域。

【注意】IE7-浏览器不支持rect(top,right,bottom,left)，支持的写法是rect(top right bottom left)；而其他浏览器两种写法都支持。

clip:rect(...)只允许长度值和auto，不允许有百分数。如果设置为auto，则相当于将剪裁边界设置为适当的内容边界。对于top或left设置auto，相当于值为0；对于right或bottom设置auto，相当于值为水平方向的宽度和或垂直方向的高度和。

【注意】该元素水平方向或垂直方向的clip区域的边界是外框外侧，不包括outline

【应用】

* 隐藏：当clip:rect(top,right,bottom,left)中的top>=bottom，或者left>=right时，可实现元素的隐藏效果，效果类似于visibility:hidden;
* 雪碧图定位：css sprite是一种网页图片应用处理方式，它允许将一个页面涉及到的所有零星图片都包含到一张大图中，然后利用background-position来显示应该显示的区域。如果使用clip也可以实现同样的效果。
* 歌词演示：利用clip和background-clip实现歌词演示效果，实际上通过改变宽度也可以实现，主要用于拓展思路。

```html
<style>
    @keyframes loop{
        0% { clip:rect(0,0px,100px,0); }
        100% { clip:rect(0,520px,100px,0); }
    }
    .show, .con{ width: 520px; height: 100px; line-height: 100px; font-size: 30px; position:absolute; background-color: lightgreen; }
    .con { animation: loop 6s linear infinite; -webkit-background-clip: text; color: red; }
</style>
<div class="show">我曾经跨过山和大海，也穿过人山人海</div>
<div class="con">我曾经跨过山和大海，也穿过人山人海</div>
```

#### 拉伸resize

CSS3新增了resize属性，该属性允许用户通过拖动的方式来修改元素的尺寸。本来resize应该翻译为缩放，但在实际测试中通过resize属性只可以在宽高基础上实现拉伸效果，而无法实现缩放到小于宽高的效果。[注意]IE浏览器不支持resize属性

resize与overflow关系紧密，**只有当元素的overflow属性值不是visible时，resize才会起作用**。【注意】因为文本框本身就具有overflow:auto的属性，所以自带resize属性。值: none | both | horizontal | vertical。
```txt
none: 用户无法调整元素尺寸
both: 用户可调整元素的宽度和高度
horizontal: 用户只可调整元素的宽度
vertical: 用户只可调整元素的高度
```

https://www.cnblogs.com/xiaohuochai/p/5294367.html

#### 滚动条

滚动条和overflow是紧密相关的。只有当父级的overflow的值是auto或scroll，并且元素的内容超出元素区域时，才有可能出现滚动条。无论什么浏览器，默认滚动条均来自``<html>``，而不是``<body>``。因为``<body>``元素默认有8px的margin。若滚动条来自``<body>``元素，则滚动条与页面则应该有8px的间距，实际上并没有间距，所以滚动条来自``<html>``元素。

通过以下代码可得出滚动条会占用浏览器的可用宽度为：
```html
<style>
    .box { width: 400px; overflow: scroll; }
    .in { *zoom: 1; }
</style>
<div class="box">
    <div id="in" class="in"></div>
</div>
<script>
    window.onload = () => console.log(400-document.getElementById('in').clientWidth);
</script>
<!-- chrome/firefox/IE 17px -->
<!-- safari 21px -->
```

【兼容】

* 默认情况下IE7-浏览器默认有一条纵向滚动条，而其他浏览器则没有
* IE7-浏览器与其他浏览器关于滚动条的宽度设定机制不同。
    * 父级box出现纵向滚动条，实际上子级in的可用宽度就缩小了。IE7-浏览器的子级宽度忽略了该滚动条的宽度，子级宽度=400\*100%=400px，则出现了横向滚动条；而其他浏览器的子级宽度考虑到该滚动条的宽度，子级宽度=(400-滚动条宽度)*100%
* 水平居中跳动问题。当一个元素在页面中水平居中时，页面中出现纵向滚动条会发生水平居中的跳出问题。解决方法如下:

```css
/* IE8-默认 */
html { overflow-y: scroll }
/* IE9+，100vw表示浏览器的宽度，100%表示可用内容的宽度 */
.container { padding-left: calc(100vw-100%); }
```

【自定义】

【IE浏览器】支持通过CSS样式来改变滚动条的部件的自定义颜色
```txt
scrollbar-face-color 滚动条凸出部分的颜色
scrollbar-shadow-color 立体滚动条阴影的颜色
scrollbar-highlight-color 滚动条空白部分的颜色
scrollbar-3dlight-color 滚动条亮边的颜色
scrollbar-darkshadow-color 滚动条强阴影的颜色
scrollbar-track-color 滚动条的背景颜色
scrollbar-arrow-color 上下按钮上三角箭头的颜色
scrollbar-base-color  滚动条的基本颜色
```

【webkit】内核的浏览器支持滚动条自定义样式，但和IE不同，webkit是通过伪类来实现的
```txt
::-webkit-scrollbar 滚动条整体部分
::-webkit-scrollbar-thumb 滚动滑块
::-webkit-scrollbar-track 外层轨道
::-webkit-scrollbar-track-piece 内层轨道
::-webkit-scrollbar-corner 边角
::-webkit-scrollbar-button 两端按钮
```

滚动条的层叠关系为scrollbar在最底层，往上依次是track外层轨道，track-piece内层轨道。而button按钮、corner边角和thumb滑块有最顶层
```txt
:horizontal 适用于任何水平方向上的滚动条
:vertical 适用于任何垂直方向的滚动条
:decrement 适用于按钮和轨道碎片。表示递减的按钮或轨道碎片，例如可以使区域向上或者向右移动的区域和按钮
:increment 适用于按钮和轨道碎片。表示递增的按钮或轨道碎片，例如可以使区域向下或者向左移动的区域和按钮
:start 适用于按钮和轨道碎片。表示对象（按钮 轨道碎片）是否放在滑块的前面
:end 适用于按钮和轨道碎片。表示对象（按钮 轨道碎片）是否放在滑块的后面
:double-button 适用于按钮和轨道碎片。判断轨道结束的位置是否是一对按钮。也就是轨道碎片紧挨着一对在一起的按钮。
:single-button 适用于按钮和轨道碎片。判断轨道结束的位置是否是一个按钮。也就是轨道碎片紧挨着一个单独的按钮。
:no-button 表示轨道结束的位置没有按钮。
:corner-present 表示滚动条的角落是否存在。
:window-inactive 适用于所有滚动条，表示包含滚动条的区域，焦点不在该窗口的时候。
::-webkit-scrollbar-track-piece:start 滚动条上半边或左半边*/
::-webkit-scrollbar-thumb:window-inactive 当焦点不在当前区域滑块的状态
::-webkit-scrollbar-button:horizontal:decrement:hover 当鼠标在水平滚动条下面的按钮上的状态
```

【常用设置】
```css
.box { width: 200px; height: 100px; background-color: pink; overflow: scroll; font-size: 20px; line-height: 40px; }
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.box::-webkit-scrollbar { width: 16px; height: 16px; background-color: #F5F5F5; }
/*定义滚动条轨道 内阴影+圆角*/
.box::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); border-radius: 10px; background-color: #F5F5F5; }
/*定义滑块 内阴影+圆角*/
.box::-webkit-scrollbar-thumb { border-radius: 10px; -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3); background-color: #555; }
```
```html
<div class="box">我是特别长特别长特别长特别长特别长特别长特别长特别长特别长特别长特别长特别长的测试文字</div>
```

【样式类举】 https://www.cnblogs.com/xiaohuochai/p/5294409.html https://www.oschina.net/

#### 可见性visibility

值: visible | hidden | collapse | inherit。

* visible：元素可见
* hidden：元素不可见，但元素还是会影响文档的布局。【注意】可以将一个hidden元素的后代元素置为visible，这会使该后代元素正常出现
* collapse：在表格中``<col>或<colgroup>``中使用，表示该列或列组的所有单元格不显示。如果用于非表格元素，collapse与hidden含义相同。【注意】webkit内核浏览器不支持给``<col>或<colgroup>``元素使用collapse属性

visibility:hidden与display:none作为隐藏元素的两种方式，常常被人们拿来比较。其实区别很简单，前者不脱离文档流，保留隐藏之前元素占据的物理区域；而后者则脱离文档流，如果重新显示则需要页面的重新绘制。还有一点区别却很少人提到，如果父级设置display:none;子级设置display:block也不会显示；而如果父级设置visibility:hidden;子级设置visibility:visible时子级会显示出来。

当元素通过设置visibiliy:hidden之后，虽然还占据物理区域，但已经不可以接受js效果

其实visibility是离散步骤，在0到1数字范围之内，0表示隐藏，1表示显示。visibility:hidden可以看成visibility:0；visibility:visible可以看成visibility:1。于是，visibility应用transition等同于0~1之间的过渡效果。实际上，只要visibility的值大于0就是显示的。由于这个现象，我们可以利用transition实现元素的延时显示隐藏。
```css
#oShow { visibility: visible; transition: visibility 0.2s 0.5s; }
#oShow:hover { visibility: hidden; }
```

visibility配合opacity和transtion可以实现真正的元素淡入淡出。如果只用opacity时，即使最后元素opacity变为0，但实现上该图片还是可以覆盖其他元素以及可以接受js效果。所以使用visibility可以实现元素真正的隐藏。
```css
#oShow { visibility: visible; opacity: 1; transition: 1s; }
#oShow:hover { visibility: hidden; opacity: 0; }
```

当前浏览器大部分都是多tab页(多标签页)的模式，但这些页面性能却参差不齐。对于某些性能很差的页面，当用户从其他tab页切换回来时，有可能出现由于页面性能差出现页面错乱、页面卡死甚至浏览器卡死的情况。HTML5新增了页面可见性API。该API有两个属性，一个事件

* document.hidden: 表示当前页面是否可见。当前tab页处于激活态时，document.hidden的属性值是false，否则是true。【注意】IE9-和safari浏览器不支持。所以可以通过document.hidden !== 'undefined'来做浏览器的识别
* document.visibilityState: 返回当前页面的可见状态。
    * hidden: 当浏览器最小化、切换tab、电脑锁屏时
    * visible: 用户正在查看当前页面时
    * prerender: 文档加载离屏或者不可见
    * unloaded: 当文档将要被unload时
    * [注意]prerender和undloaded不是所有浏览器都支持，用的也不多
    * visibilitychange事件: 当document.visibilityState状态变化时触发该事件

应用场景

* 当页面属性是hidden时，停止页面中选项卡的定时器或页面中的动画等，减少内存占用
* 当通过页面状态的切换，来控制音乐或视频的播放或停止
* ...

【Demo1】页面为非激活页时，暂停页面中的动画；重新激活时，继续动画效果
```html
<style>
    .box { width: 500px; background-color: lightgreen; border: 1px solid black; }
    @keyframes loop{
        0% { width: 100px; }
        100% { width: 500px; }
    }
    #div { width: 100px; height: 100px; background-color: pink; animation: loop 200s alternate infinite linear; }
</style>
<div class="box">
    <div id="div"></div>
</div>
<script>
    function getCSS(obj,style) {
        return window.getComputedStyle ? getComputedStyle(obj)[style] : obj.currentStyle[style];
    };
    var oTimer = setInterval(() => document.title=div.innerHTML = parseInt(getCSS(div,'width')), 100);
    document.addEventListener('visibilitychange', () => div.style.animationPlayState = document.hidden ? 'paused' : 'running', false);
</script>
```

【Demo2】页面切换来控制音乐的播放和暂停
```html
<audio id="audio" src="http://7xpdkf.com1.z0.glb.clouddn.com/myocean.mp3" controls ></audio>
<script>
    var mark;
    document.addEventListener('visibilitychange', function(){
        if (document.hidden) {
            // 如果用户在切换页面前，自己点了暂停
            if (audio.paused) {
                mark = false;
            } else {
                audio.pause();
                mark = true;
            }
        } else {
            // 当暂停是因为页面切换造成的，则返回当前页面时，继续播放
            if (mark) {
                audio.play();
            }
        }
    }, false);
</script>
```


## 普通流

### display

值: none | inline | block | inline-block
    | list-item
    | run-in
    | table | inline-table | table-row-group | table-header-group | table-footer-group | table-row | table-colume-group | table-column | table-cell | table-caption | inherit

【注意】IE7-浏览器不支持table类属性值及inherit

* block
    * 特点：不设置宽度时，宽度为父元素宽度。独占一行。支持宽高
    * 标签：``<address><article><aside><blockquote><body><dd><details><div><dl><dt><fieldset><figcaption><figure><footer><form><h1><header><hgroup><hr><html><legend><menuitem><nav><ol><optgroup><option><p><section><summary><ul>`` 【注意】menuitem标签只有firefox支持
    * 不支持样式：vertical-align
* inline
    * 特点：内容撑开宽度。非独占一行。不支持宽高。代码换行被解析成空格
    * 标签：``<a><abbr><area><b><bdi><bdo><br><cite><code><del><dfn><em><i><ins><kbd><label><map><mark><output><pre><q><rp><rt><ruby><s><smap><small><span><strong><sub><sup><time><u><var><wbr>``
    * 不支持样式：background-position, clear, clip, height | max-height | min-height, width | max-width | min-width, overflow, text-align, text-indent, text-overflow
* inline-block
    * 不设置宽度时，内容撑开宽度。非独占一行。支持宽高。代码换行被解析成空格
    * ``<audio><button><canvas><embed><iframe><img><input><keygen><meter><object><progress><select><textarea><video>`` 要注意的是，这里说的是inline-block元素是指它们具有inline-block特性，而不是指他们的默认值是display:inline-block。如果以默认值为基准，只有表单类元素是纯的inline-block元素，audio、canvas、iframe、img、keygen、object、video都应该算是inline元素
    * clear
    * 【注意】IE7-浏览器不支持给块级元素设置inline-block样式，解决方法如下：首先将其变成行内元素，使用具有行内元素的特性，然后触发haslayout，使其具有块级元素的特性，如此就可以模拟出inline-block的效果。``div { display:inline-block; *display: inline; zoom: 1; }``
    * 【注意】[关于inline-block元素底部空隙的问题移步到此](https://www.cnblogs.com/xiaohuochai/p/5271217.html#anchor2)
* none
    * 隐藏元素并脱离文档流
    * ``<base><link><meta><title><datalist><dialog><param><script><source><style>``
* list-item
    * 不设置宽度时，宽度撑满一行。独占一行。支持宽高
* run-in
    * 是一个有意思的块/行内元素混合，可以使某些块级元素成为下一个元素的行内部分。如果一个元素生成run-in框，而且该框后面是一个块级框，那么该run-in元素将成为块级框开始处的一个行内框，run-in框格式化成另一个元素中的行内框，但它们仍从文档中的父元素继承属性
    * 只有safari和IE8+支持

表格勒元素
```css
table { display: table; }
thead { display: table-header-group; }
tbody { display: table-row-group; }
tfoot { display: table-footer-group; }
tr { display: table-row; }
td,th { display: table-cell; }
col { display: table-column; }
colgroup { display: table-column-group; }
caption { display: table-caption; }
```

表格类元素的display共有以上几种，``<thead><tbody><tfoot><tr><col><colgroup>``因为无法设置margin和padding用的较少，下面将着重介绍下``<table>、<td>、<th>、<caption>``这四个标签对应的display属性

* table
    * 不设置宽度时，宽度由内容撑开。独占一行。支持宽高。默认具有表格特征，可设置table-layout、border-collapse、border-spacing等表格专有属性
    * 【注意】对于display为table和inline-table，若处于分隔边框模型即border-collapse:separate;，margin和padding都可设置；若处于合并边框模型即border-collapse:collapse，只可设置margin
* inline-table
    * 不设置宽度时，宽度由内容撑开。非独占一行。支持宽高。默认具有表格特征，可设置table-layout、border-collapse、border-spacing等表格专有属性
* table-cell
    * 不设置宽度时，宽度由内容撑开。非独占一行。支持宽高。垂直对齐。同级等高
    * 【注意】display:table-cell的元素不可以设置margin，但可以设置padding
* table-caption
    * 不设置宽度时，宽度由内容撑开。独占一行。支持宽高
    * 【注意】display:table-caption的元素margin和padding都可设置

* 如果一个元素是绝对定位元素，float的值设置为none，对于浮动元素或绝对定位元素，计算值由声明值确定
    * 声明 inline-table/table --> 计算 table
    * inline/inline-block/block/run-in/list-item/table-caption/table-cell/table-row/table-column/table-column-group/table-header-group/table-row-group/table-footer-group --> block
    * none --> none
* 对于根元素，如果声明为值inline-table或table，都会得到计算值table，声明为none时则会得到同样的计算值none，所有其他display值都计算为block

### haslayout

haslayout是IE7-浏览器的特有属性。hasLayout是一种只读属性，有两种状态：true或###。当其为true时，代表该元素有自己的布局，否则代表该元素的布局继承于父元素。通过element.currentStyle.hasLayout可以得出当前元素的hasLayout情况

【触发--html】默认触发hasLayout的有如下HTML标签：

* html,body
* table,tr,th,td
* img
* hr
* input,button,select,textarea,fieldset
* frameset,frame,iframe

【触发--css】

* display:inline-block
* height/width:除了auto
* float:left/right
* position:absolute
* writing-mode(IE专有属性，设置文本的垂直显示):tb-rl
* zoom(IE专有属性，设置或检索对象的缩放比例):除了normal
* IE7专有的触发hasLayout的CSS属性
    * min-height/max-height/min-width/max-width:除none
    * overflow\overflow-x\overflow-y:除visible
    * position:fixed

【作用】

**解决IE7-浏览器下父级边框不阻止子级上下margin传递的bug**
```html
<style>
    body { margin: 0; }
    ul { margin: 0; padding: 0; list-style: none; }
    .list { border: 10px solid black; background-color: red; /*触发hasLayout*/ /*float: left;*/ }
    .in { height: 100px; width: 100px; margin-top: 50px; background-color: blue; }
</style>
<ul class="list">
    <li class="in"></li>
</ul>
```

**配合display:inline让块元素模拟inline-block**
```html
<style>
    body { margin: 0; }
    .box { width: 100px; height: 100px; background-color: red; display: inline-block; /*配合display: inline触发hasLayout*/ /* float: left; display: inline;*/ }
</style>
<div class="box" id="box"></div><span>测试inline-block用</span>
```

**解决在IE7-浏览器下LI4px空隙bug**(IE7-浏览器下li有高度或宽度或zoom:1，且仅包含内联元素，且内联元素被设置为display:block，li下会多出3px的垂直间距)
```html
<style>
    body { margin: 0; }
    ul { margin: 0; padding: 0; list-style: none; }
    .list { width: 200px; background-color: lightgreen; }
    .in { height: 100px; background-color: lightblue; }
    .span { display: block; zoom: 1; }
</style>
<ul class="list">
    <li class="in">
        <span class="span">1231</span>
    </li>
    <li class="in">
        <span class="span">1232</span>
    </li>
</ul>
```

**触发浮动元素的父级的hasLayout，浮动元素会被layout元素自动包含，相当于IE7-浏览器下实现清浮动**
```html
<style>
    body { margin: 0; }
    ul { margin: 0; padding: 0; list-style: none; }
    .list { background-color: lightgreen; height: 200px; }
    .in { float: left; width: 100px; height: 100px; border: 1px solid black; background-color: lightblue; }
    .test { width: 100px; height: 150px; background-color: yellow; }
</style>
<ul class="list">
    <li class="in"></li>
    <li class="in"></li>
</ul>
<div class="test">测试浮动</div>
```

### BFC

在解释BFC之前，先说一下文档流。我们常说的文档流其实分为定位流、浮动流和普通流三种。而普通流其实就是指BFC中的FC。FC是formatting context的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的FC有BFC、IFC，还有GFC和FFC。BFC是block formatting context，也就是块级格式化上下文，是用于布局块级盒子的一块渲染区域

#### 触发条件

1. 根元素，即HTML元素
2. float的值不为none
3. overflow的值不为visible
4. display的值为inline-block、table-cell、table-caption
5. position的值为absolute或fixed

#### 作用

BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。它与普通的块框类似，但不同之处在于：

* 可以阻止元素被浮动元素覆盖
* 可以包含浮动元素

https://www.cnblogs.com/xiaohuochai/p/5248536.html

### 视觉格式化

CSS视觉格式化这个词可能比较陌生，但说起盒模型可能就恍然大悟了。实际上，盒模型只是CSS视觉格式化的一部分。视觉格式化分为块级和行内两种处理方式。理解视觉格式化，可以确定得到的效果是应该显示的正确效果，还是浏览器兼容性的bug。下面将详细介绍CSS视觉格式化。

【基本概念】

* 基本框/元素框
    * CSS假定每个元素都会生成一个或多个矩形框，这称为元素框。各元素框中心有一个内容区(content area)。这个内容区周围有可选的内边距、边框和外边距。之所以可选，是因为它们的宽度可以设置为0
    * 可以用多种属性设置外边距、边框和内边距。内容的背景也会应用到内边距。外边距通常是透明的，从中可以看到父元素的背景。内边距不能是负值，但是外边距可以
* 包含块
    * 每个元素都相对于其包含块摆放，包含块就是一个元素的布局上下文。对于正常的文本流中的一个元素而言，包含块由最近的块级祖先框、表单元格或行内块祖先框的内容边界构成
    * \[注意]行内元素的摆放方式并不直接依赖于包含块
* 正常流: 文本从左向右、从上向下显示，是传统HTML文档的文本布局
* 非替换元素: 如果元素的内容包含在文档中，则称之为非替换元素
* 替换元素: 指作为其他内容占位符的一个元素(``<img>、<video>、<audio>``等)。但，inline-block元素在布局中也当作替换元素处理。所以，又包含大量的表单类元素及表格类元素
* 块级元素: 在正常流中，在其元素框之前和之后生成“换行”，且会垂直摆放的元素。通过声明display:block可以让元素生成块级框
* 行内元素: 在正常流中，不会在元素框之前或之后生成“行分隔符”，是块级元素的后代。通过声明display:inline可以让元素生成行内框
* 根元素: 位于文档树顶端的元素，在HTML文档中，是元素HTML

【盒模型】

* margin box(元素框) > border box(可视化区域) > padding box(客户区，关于客户区这种说法来源于javascript中的clientWidth和clientHeight) > content box(内容区)
* 在水平格式化的7个属性中只有margin-left、width、margin-right三个属性可以设置为auto，其余属性必须设置为特定的值，或者默认宽度为0
    * 1个auto：若只有一个值为auto，则根据7个水平属性的总结等于父级width的公式，计算出auto所表示的值。由于width默认值为auto，而margin、border和padding默认值都为0。所以，会有块级元素默认撑满父元素的表现
    * 2个auto：
        * 若margin-left和margin-right为auto，则元素将在父元素中居中显示
        * 若margin-left和width为auto，则margin-left将被重置为0
        * 若margin-right和width为auto，则margin-right将被重置为0
    * 3个auto：若三个值都为auto，则margin-left和margin-right都被重置为0
    * 0个auto：若margin-left/width/margin-right三个属性都设置为非auto的某个值，这种情况叫做格式化属性过分受限。这样margin-right将被重置为auto
* 上面介绍的是正常文本流中非替换块级元素的水平格式化，而替换块级元素管理起来则更简单一些。非替换块元素的所有规则同样适用于替换块元素，只有一个例外：如果width是auto，元素的宽度则是内容的固有宽度。因此margin-left或者margin-right变为auto时会尽量变宽
* 在垂直格式化的7个属性中，只有margin-top、height、margin-bottom三个属性可以设置为auto。与水平格式化不同，垂直格式化的auto处理较为简单。如果块级正常流元素设置为height:auto，显示时其高度将恰好足以包含其内联内容的行盒；如果margin-top或margin-bottom设置为auto，它会自动计算为0。【注意】对于定位元素的上下外边距的auto处理，则有所不同

【**行布局**】

行内元素没有块级元素那么简单和直接，块级元素只是生成框，通常不允许其他内容与这些框并存。在了解行内元素视觉格式化之前要先了解一些涉及到的基本术语

* 匿名文本: 所有未包含在行内元素中的字符串
* em框: 在字体中定义，也称为字符框(character box)。实际的字形可能比其em框更高或更矮。在CSS中，font-size的值确定了各个em框的高度
* 内容区: 在非替换元素中，内容区是元素中各字符的em框串在一起构成的框；而在替换元素中，内容区就是元素的固有高度再加上可能有的外边距、边框或内边距。内容区类似于一个块级元素的内容框(content box)
* 行间距: 是font-size和line-height之差。这个差实际上要分为两半，分别应用到内容区的顶部和底部。【注意】行间距只应用于非替换元素
* 行内框: 通过向内容区增加行间距来描述。对于非替换元素，元素行内框的高度等于line-height的高度；对于替换元素，元素行内框的高度则恰好等于内容区的高度，因为行间距不应用到替换元素。【注意】行内框的区域与内联元素背景颜色所在的区域无关
* 行框: 是包含该行中出现的行内框的最高点和最低点的最小框。换句话说，行框的上边界要位于最高行内框的上边界；而行框的底边要放在最低行内框的下边界

行框构造是行布局中非常重要的一个环节，接下来介绍行框构造的步骤【必要】【不是很懂】https://www.cnblogs.com/xiaohuochai/p/6252163.html

1. 构造各元素的行内框
    1. 对于替换元素来说，得到各元素的height、margin-top、margin-bottom、padding-top、padding-bottom、border-top-width、border-bottom-width值，把它们加在一起(因为，行间距不应用到替换元素上，所以替换元素的内容大小等于行内框大小)
    2. 对于非替换元素来说，得到各行内非替换元素及不属于后代行内元素的所有文本的font-size值和line-height值，再将line-height减去font-size，得到行的行间距，这个行间距除以2，将其一半分别应用到em框的顶部和底部
2. 对于各内容区，确定它在整行基线的上方和下方分别超出多少。对于非替换元素来说，确定各元素及匿名文本各部分的基线的位置，并知道该行本身基线的位置，然后将其对齐；对于替换元素来说，将其底边放在整行的基线上
3. 对于指定了vertical-align值的元素，确定其垂直偏移量。由此可知，该元素的行内框要向上或向下移动多远，并改变元素在基线上方或下方超出的距离
4. 既然已经知道了所有行内框会放在哪里，再来计算最后的行框高度。为此，只需将基线与最高行内顶端之间的距离加上基线与最低行内框底端之间的距离。行的高度(又叫行框的高度)由其组成元素和其他内容(如文本)的高度确定。行高line-height实际上只影响行内元素和其他行内内容，而不会直接影响块级元素。在行布局中，替换元素和非替换元素并不相同，接下来将分别进行介绍

**行内非替换元素**

对于行内非替换元素或匿名文本某一部分，font-size值确定了内容区的高度。如果一个行内元素的font-size为15px，则内容区的高度为15px。内容区加上行间距等于行内框。如果一个行内非替换元素的font-size为15px，line-height为21px，则相差6px。用户代理将这6像素一分为二，将其一半分别应用到内容区的顶部和底部，这就得到了行内框。当line-height小于font-size时，行内框实际上小于内容区。行框定义为行中最高行内框的顶端到最低行内框底端之间的距离，而且各行框的顶端挨着上一行行框的底端。如果一行中存在行高相同但字体大小不同的行内元素，虽然所有行内框大小都相等，但它们排列得并不整齐，因为文本都是按照基线对齐的。如果改变行内框的垂直对齐，比如设置垂直对齐为4px，这会同时提升其内容区和行内框。如果设置的该行内框是行中的最高点，则会把整个行框的顶端也向上移动4像素

如果一个行内元素存在边框或内边距，而没有设置一个足够大的行高line-height来容纳它们，就有覆盖其他行的危险。
内边距和边框不会改变内容区的尺寸，不过它会影响这个元素行内框的高度，但并不会影响行框的生成和布局，即不改变行高。至于外边距，它不会应用到行内非替换元素的顶端和底端，不会影响行框的高度。
尽管内边距、边框和外边距不影响行高，但是它们确实能影响一个元素内容的布局。可能将文本推离其左右两端。实际上，如果左、右两外边距为负，可能会把文本拉近行内元素，甚至导致重叠。
margin-left、padding-left、border-left应用到元素的开始处；而margin-right、padding-right、border-right应用到元素的结尾处。

**行内替换元素**

一般地，行内替换元素(如图像)都有固有的高度和宽度。有固有高度的替换元素可能导致行框比正常要高。但这不会改变行中任何元素的行高line-height值，包括替换元素本身。相反，只是让行框高度恰好能包含替换元素。
行内替换元素需要行高line-height值，从而在垂直对齐时能够正确地定位元素。因为垂直对齐vertical-align的百分数值是相对于元素的行高line-height来计算的。对于垂直对齐来说，图像本身的高度无关紧要，关键是line-height的值。
由于行内替换元素行内框的高度由高度height、内边距padding、边框border和外边距margin共同决定。所以，盒模型属性的变化会影响行内框的高度，进而可能会影响行框的高度。
默认地，行内替换元素位于基线上。如果向替换元素增加下内边距、外边距或边框，内容区会上移。替换元素并没有自己的基线，所以相对来说最好的办法是将其行内框的底端与基线对齐。因此，实际上是下外边距边界与基线对齐。

https://www.cnblogs.com/xiaohuochai/p/6252163.html

### 文本方向

HTML全局属性中有一个"dir"属性就是专门用来设置文本方向的，设置文本方向的CSS样式有direction、unicode-bidi和writing-mode。

* text-align
    * left | center | right | justify | inherit
    * 应用于: 块级元素(包括block和inline-block)
* writing-mode
    * horizontal-tb(default) | vertical-rl | vertical-lr
    * 与其他改变文本方向的属性非常不一样。它不仅改变文本的显示方向，更直接改变了文本流的方向。如果其属性值改为vertical-rl，则文本流改成了垂直方向，则text-align变成了垂直对齐，vertical-align变成了水平对齐
    * 【注意】safari和移动端IOS和android需要添加-webkit-前缀；IE浏览器只支持自己的私有属性值（lr-tb(左-右，上-下)和tb-rl(上-下，右-左)，其中writing-mode:tb-rl常用于触发haslayout）
* dir
    * ltr | rtl | auto。HTML的全局属性，专门用来设置文本的方向
* direction
    * ltr | rtl | inherit
    * 【注意】想让direction样式在inline元素上起作用，需要unicode-bidi样式的相关设置/或者在inline元素上随便设置一个dir
    * 【注意】设置direction样式时，HTML元素的全局属性dir无效
* unicode-bidi 一种更健壮的处理文本方向的方式
    * normal | embed | bidi-override | isolate | isolate-override | plaintext | inherit
    * 【注意】unicode-bidi属性应用于flex弹性盒模型上有问题，除非伸缩容器只包含一个匿名伸缩项目时有效，其余情况都无效
    * 【注意】isolate、isolate-override、plaintext是实验属性值，几乎没有浏览器支持
    * 【注意】只有当dir为rtl或direction为rtl时，unicode-bidi属性才起作用

```txt
原文: 1 23 456

//display:inline-block/block
normal/embed: 456 23 1
bidi-override: 654 32 1

//display:inline
normal:1 23 456
embed: 456 23 1
bidi-override: 654 32 1
```

## 浮动和定位

### 浮动

* 浮动元素脱离普通流，然后按照指定方向，向左或者向右移动，碰到父级边界或者另外一个浮动元素停止
* float: left | right | none | inherit
* 特点
    * 正常流中元素一个接一个排列；浮动元素也构成浮动流
    * 浮动元素自身会生成一个块级框，而不论这个元素本身是什么，使浮动元素周围的外边距不会合并
    * 浮动元素的包含块是指其最近的块级祖先元素，后代浮动元素不应该超出包含块的上、左、右边界。若不设置包含块的高度，包含块若浮动，则包含块会延伸，进而包含其所有后代浮动元素；若不设置包含块的宽度，包含块若浮动，则包含块宽度由后代浮动元素撑开
    * 浮动元素脱离正常流，并破坏了自身的行框属性，使其包含块元素的高度塌陷，使浮动框旁边的行框被缩短，从而给浮动框留出空间，行框围绕浮动框重新排列
* 表现
    * 浮动元素的左(或右)外边界必须是源文档中之前出现的左浮动(或右浮动)元素的右(左)外边界。除非后出现浮动元素的顶端在先出现浮动元素的底端下面
    * 左浮动元素的右外边界不会在其右边右浮动元素的左外边界的右边。右浮动元素的左外边界也不会在其左边任何左浮动元素的右外边界的左边
    * 左(或右)浮动元素左边(右边)有另一个浮动元素，前者右外边界不能在其包含块右(左)边界的右边(左边)
    * 浮动元素的左(或右)外边界不能超出其包含块的左(或右)内边界
    * 一个浮动元素的顶端不能比其父元素的内顶端更高。如果一个浮动元素在两个合并外边距之间，放置这个浮动元素时就好像在两个元素之间有一个块级父元素
    * 浮动元素的顶端不能比之前所有浮动元素或块级元素的顶端更高
    * 如果源文档中一个浮动元素之前出现另一个元素，浮动元素的顶端不能比包含该元素所生成框的任何行框的顶端要高
    * 浮动元素必须尽可能高地放置
    * 左浮动元素必须向左尽可能远，右浮动元素则必须向右尽可能远。位置越高，就会向右或向左浮动得越远
* 浮动元素超出父元素边界的方法有两种：一种是浮动元素的宽度大于父元素的宽度，另一种就是设置负外边距。如果浮动元素存在负外边距，且浮动元素与正常流元素重叠
    * 行内框与一个浮动元素重叠时，其边框、背景和内容都在该浮动元素之上显示
    * 块框与一个浮动元素重叠时，其边框和背景在该浮动元素之下显示，而内容在浮动元素之上显示

### 清浮动

人们经常谈起清浮动，其实就是解决浮动元素的包含块高度塌陷的问题

* clear: left | right | both | none | inherit
* 应用于: 块级元素(块级元素指block元素，不包括inline-block元素)
* 设置clear属性的元素并不能改变浮动元素，而只能改变自身。CSS2.1引入了一个清除区域，清除区域是在元素上外边距之上增加的额外间隔，不允许任何浮动元素进入这个范围，这意味着元素设置clear属性时，它的外边距不改变
* 对于标准浏览器来说，清浮动其实就两种方法，一种是**在浮动元素下面添加新元素设置clear属性**；另一种是**触发包含块的BFC，使其包含浮动元素**。而对于IE7-浏览器，则用到其特有属性haslayout
    * clear
        * ``<div style="clear:both"></div>``<注意>并不是很适用，若包含块为``<ul>``，则子元素只能为``<li>``，则在``<li>``后面添加``<div>``元素不合适
        * ``<br style="clear:both">``<注意>虽然clear属性只应用于块级元素，但在除IE7-以外的其他浏览器都可以将clear属性应用于``<br>``元素
        * 为浮动元素的after伪元素设置clear属性 ``.clear:after{content:""; display: block; clear: both;}`` <注意>IE7-浏览器不支持after伪元素
    * BFC
        * float: left/right
        * position:absolute/fixed
        * display:inline-block/table-cell/table-caption/flex
        * overflow:hidden/scroll/auto
    * IE7-: 关于IE7-浏览器有一个其特有的属性haslayout，当触发包含块的haslayout时，浮动元素被layout元素自动包含
        * display:inline-block
        * height/width:除auto外
        * float: left/right
        * position: absolute
        * writing-mode: tb-rl
        * zoom: 除normal外
* 在所有浏览器中都兼容的清浮动方案如下：``.clear:after{content:""; display: block; clear: both;} .clear{zoom: 1;}``
* 除了清除浮动外，常常也需要解决外边距margin重叠的问题。这时，清除浮动和解决margin重叠的代码如下：``.clear:before,.clear:after{content:"";display:table;} .clear:after{clear:both;} .clear{zoom:1}``

### 定位中的偏移

CSS有三种基本的布局机制：普通流、浮动和绝对定位。利用定位，可以准确地定义元素框相对于其正常位置应该出现的位置，或者相对于父元素、另一个元素甚至浏览器窗口本身的位置。但元素究竟如何定位，定位到什么位置，主要依靠top/right/bottom/left这四个偏移属性。本文就定位中的偏移做详细介绍

* position: static | relative | absolute | fixed | inherit
    * static: 元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中
    * relative: 元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留
    * absolute: 元素框从文档流完全删除，并相对于其包含块定位，包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像该元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框
    * fixed: 元素框的表现类似于将position设置为absolute，不过其包含块是视窗本身
    * [注意]相对定位实际上被看作普通流定位模型的一部分，因为元素的位置相对于它在普通流中的位置
* 包含块
    * 根元素HTML的包含块(也称为初始包含块)是一个视窗大小的矩形，即HTML的父级document
    * 非根元素
        * 如果position值是relative或static，包含块由最近的块级框、表单元格或行内祖先框的内容边界构成
        * 如果position值是absolute，包含块设置为最近的position值不是static的祖先元素(可以是任何类型)，过程如下:
            * 如果这个祖先是块级元素，包含块则设置为该元素的内边距边界。换句话说，就是由边框界定的区域
            * 如果这个祖先是行内元素，包含块则设置为该祖先元素的内容边界
            * 如果没有祖先，元素的包含块定义为初始包含块，即document
        * [注意]由于元素可以定位到其包含块的外面。这与浮动元素使用负外边距浮动到其父元素内容区外面很类似。所以这里包含块实际上应该是定位上下文，或者定位父级
* 三种定位机制使用了4个属性来描述定位元素各边相对于其包含块的偏移。这4个属性被称为偏移属性。
    * top/right/bottom/left: \<length> | \<percentage> | auto | inherit
    * 应用于: 定位元素(也就是position值不是static的元素)
    * 百分数: 对于top和bottom，相对于包含块的clientHeight；对于right和left，相对于包含块的clientWidth
    * 【注意】定位元素的边界是指定位元素margin外侧的边界；包含块的包含区域是指包含块的border内侧的padding+content区域
* 当元素绝对定位时，偏移属性表现如下:
    * left:0 元素的左边界(margin-left外侧)位于包含块的左边界内侧(border-left内侧)
    * top:0 元素的上边界(margin-rop外侧)位于包含块的上边界内侧(border-top内侧)
    * right:0 元素的右边界(margin-right外侧)位于包含块的右边界内侧(border-right内侧)
    * bottom:0 元素的下边界(margin-bottom外侧)位于包含块的下边界内侧(border-bottom内侧)
* 当top、right、bottom、left四个值都为auto时(即都处于默认状态时)，
    * left:auto 元素的左边界位于元素处于静态位置时的左边界
    * top:auto 元素的上边界位于元素处于静态位置时的上边界
    * right:auto 元素的右边界位于正好能包裹住元素的横向区域的右边界(margin-right外侧)
    * bottom:auto 元素的下边界位于正好能包裹住元素的纵向区域的下边界(margin-bottom外侧)
* 格式化
    * 对于普通流的元素来说，水平格式化的7大属性是margin-left、border-left、padding-left、width、padding-right、border-right、margin-right7个属性的值加在一起必须是元素包含块的宽度，这往往是块元素的父元素的width值(因为块级元素的父级元素几乎都是块级元素)。垂直方向也类似。
* auto: auto值的赋值顺序为：margin先置0或其他值，然后宽高置为最小值，然后left/top置为0，最后right/bottom为等式计算值 【必要】【不是很懂】https://www.cnblogs.com/xiaohuochai/p/5289143.html
    * IE7-浏览器不支持绝对定位元素通过将上下外边距设置为auto来实现垂直居中的行为
    * IE6-浏览器不支持绝对定位元素不设置宽度，而通过设置top/left/right/bottom来撑开宽高的行为
    * 【注意】在margin-left和margin-right同时为auto的情况下，只有当left和right值相等时，元素才能水平居中显示；否则，虽然margin-left和margin-right依然相等，但由于left和right并不相等，元素也不能水平居中
    * 【注意】在margin-top和margin-bottom同时为auto的情况下，只有当top和bottom值相等时，元素才能垂直居中显示；否则，虽然margin-top和margin-bottom依然相等，但由于top和bottom并不相等，元素也不能垂直居中

### 定位中的堆叠z-index

所有整数都可以作为z-index的值，包括负数。如果为元素指定一个负z-index值，会将其移到离读者更远的位置，会移到叠放栈的更低层。<br>
CSS2.1页面元素的堆叠规则

* 背景和边框
* 负z-index
* 块级元素
* 浮动元素
* 行内和行内块元素
* z-index: 0 或者 z-index: auto
* 正z-index

定位元素的堆叠规则

* 对于定位元素(position不是static的元素)来说，不设置z-index或z-index相同时，后面元素覆盖前面元素
* 对于处于同一堆叠上下文中的同一层次的元素来说，默认z-index较大值覆盖z-index较小值

一旦为一个元素指定了z-index值(不是auto)，该元素会建立自己的局部堆叠上下文。这意味着，元素的所有后代相对于该祖先元素都有其自己的叠放顺序。<br>
auto值指当前堆叠上下文中生成的栈层次与其父框的层次相同，这个框不会建立新的局部叠放上下文。z-index:auto与z-index:0的值相等，但z-index:0会建立新的局部堆叠上下文

元素不会叠放在其堆叠上下文(即定位父级z-index为数字值)的背景之下，但可以叠放在其内容之下；当元素没有处于堆叠上下文中，元素不会叠放在``<body>``元素的背景之下，但可以叠放在其内容之下。
```html
<style>
    main { width: 400px; text-align: center; margin: 0 auto; }
    .parent { position: relative; width: 400px; padding: 10px; background-color: red; }
    .son { position: absolute; top: 50px; left: 50px; width: 150px; height: 50px; padding: 10px; background-color: green; }
    button { width: 160px; margin: 10px; font-size: inherit; }
</style>
<main>
    <div class="parent">
        我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字我是父级的文字
        <div class="son">我是子级的文字</div>
    </div>
    <button type="button">parent.z-index--</button><button type="button">son.z-index--</button><br>
    <button type="button">parent.z-index++</button><button type="button">son.z-index++</button>
    <p></p>
</main>
<script>
    (function(){
        var parent = document.getElementsByClassName("parent")[0]
        var son = document.getElementsByClassName("son")[0]
        var info = document.getElementsByTagName("p")[0]
        function getCSS(obj, style) { return window.getComputedStyle ? getComputedStyle(obj)[style] : obj.currentStyle[style] }
        function getInfo() { info.innerText = 'parent.z-index = ' + getCSS(parent, 'z-index') + '; son.z-index = ' + getCSS(son, 'z-index') }
        getInfo()
        var buttons = document.getElementsByTagName("button")
        buttons[0].onclick = () => { parent.style.zIndex = Number(parent.style.zIndex) - 1; getInfo() }
        buttons[1].onclick = () => { son.style.zIndex = Number(son.style.zIndex) - 1; getInfo() }
        buttons[2].onclick = () => { parent.style.zIndex = Number(parent.style.zIndex) + 1; getInfo() }
        buttons[3].onclick = () => { son.style.zIndex = Number(son.style.zIndex) + 1; getInfo() }
    })()
</script>
```

【兼容】

* **IE7-浏览器z-index的默认值是0**。一般地，定位元素的z-index的默认值是auto，而IE7-浏览器定位元素的z-index的默认值是0，二者的区别于IE7-浏览器的定位元素会自动生成堆叠上下文

```html
<style>
    div { position: absolute; border: 1px solid black; }
    .div1 { width: 300px; height: 100px; background-color: pink; z-index: 1; }
    .div2 { background-color: lightgreen; top: 50px; left: 50px; width: 200px; height: 200px; }
    .in2 { width: 100px; height: 150px; background-color: lightblue; z-index: 2; border: none; }
</style>
<div class="div1"></div>
<div class="div2">
    <div class="in2"></div>
</div>
<!--
一般地，div1的堆叠顺序为1;div2的堆叠顺序为auto;in2的堆叠顺序为auto,2相当于2。所以覆盖层次为in2 覆盖 div1 覆盖 div2。但在IE7-浏览器中，div1的堆叠顺序为1;div2的堆叠顺序为0;in2的堆叠顺序为0,2。所以覆盖层次为div1 覆盖 in2 覆盖 div2
 -->
```

* **IE6-浏览器关于z-index的一个怪异bug**。当元素本身浮动且不是定位元素(position不是static)，元素父级是relative，则在IE6-浏览器在无论该元素的父级的z-index如何设置都不起作用。【解决方法】
    * 元素去除浮动
    * 父级元素的相对定位改成绝对定位
    * 元素添加position属性(static除外)
* **IE6-浏览器下select的z-index无效而遮挡div**。IE6-浏览器下select设置z-index无效，且默认会堆叠在div上。【解决方法】在IE6-浏览器中，虽然div无法覆盖select，但是iframe可以覆盖select。所以可以设置一个与div宽高相同的iframe。让div覆盖iframe，iframe覆盖select，最终达到select被div覆盖的效果

CSS3的出现对过去的很多规则发出了挑战。对层叠上下文z-index的影响更加显著，主要包括以下8个属性

1. z-index值不为auto的flex项(父元素display:flex | inline-flex)
2. 元素的透明度opacity值不等于1
3. 元素的变形transform不是none
4. 元素的mix-blend-mode值不是normal
5. 元素的filter值不是none
6. 元素的isolation值是isolate
7. will-change指定的属性值为上面的任意一个
8. 元素的-webkit-overflow-scrolling设置为touch
9. 元素的mask属性不是none

设置以上9个属性的任意一个，都和设置absolute类似，层叠上下文z-index会生效。

### 绝对定位

absolute和float都可以触发元素的BFC属性，且都具有包裹性和破坏性，所以对于一些应用场景，这两个属性可以进行替换。

* 包裹性: 元素绝对定位后，会为其后代元素建立一个包含块。且若该绝对定位元素不设置宽度，宽度由内容撑开。[注意]浮动的包含块会延伸，进而包含所有后代浮动元素，但绝对定位的包含块并不会包含后代的定位元素，只是作为后代定位元素的定位父级
* **破坏性**: 元素绝对定位后，会脱离文档流，若父级不设置高度，则父级高度塌陷；若父级为行内元素，无其他内容，则父级宽度也将塌陷
* **去浮动**: 元素绝对定位后，元素原来的浮动效果将失效
* 偏移特性: 如果使用top、right、bottom、left这4个偏移特性来描述元素4个边的放置位置，那么元素的高度和宽度将由这些偏移隐含确定，元素将会拉伸。使用偏移属性拉伸的绝对定位元素，其内部元素支持百分比width/height值。*通常情况下，元素高度百分比要想起作用，需要父级窗口的高度值不是auto；但是如果容器由绝对定位拉伸形成，百分比高度值也是支持的*

当元素绝对定位后，元素可以改变display属性，但各浏览器解析不一致

1. IE8+浏览器解析正常
2. firefox和safari浏览器只有切换为display:none时才会重新渲染，其他值相互切换时无效
3. chrome浏览器切换到display:inline时渲染无效，其他值相互切换时渲染正常
4. IE7-浏览器将绝对定位的元素全部渲染为inline-block元素，只有切换为display:none时才会重新渲染，其他值相互切换时无效

[注意]解决IE7-浏览器绝对定位元素渲染为inline-block元素的bug很简单，只需要在绝对定位的元素外面套一个空的``<div>``即可

**绝对定位或固定定位元素才可以使用clip属性。绝对定位元素常配合clip属性达到元素隐藏的效果。**

当元素绝对定位后，若该元素的格式化属性不发生变化，则该元素处于静态位置。元素的静态位置是指元素在正常流中原本的位置，更确切的讲，顶端的静态位置是从包含块的上边界到假想框的上外边距边界之间的距离。假想框是假设元素position属性为static时元素的第一个框。<br>
【注意】但对于居中对齐的行内元素来说，将元素设置为absolute或fixed会发生静态位置跳动问题。而relative或static则不会有此问题。这是因为元素默认的居中对齐是元素的内容中线对应父级块级元素中线，而当元素绝对定位或固定定位之后，定位元素左边界将与其父级块级元素的中线对齐。

当overflow在绝对定位元素和其包含块之间时，绝对定位元素不会被父级overflow属性剪裁。但当父元素为relative时就可实现hidden。

### 绝对定位应用

#### 跟随图标

```html
<style>
    div { height: 20px; width: 500px; line-height: 20px; margin-bottom: 30px; }
    i { position: absolute; width: 28px; height: 11px; margin: -6px 0 0 2px; background: red; }
    button { font-size: inherit; }
</style>
<div><span>长度可变文字</span><i></i></div>
<button>文字变多</button>
<button>文字变少</button>
<script>
    (function() {
        var target = document.getElementsByTagName("span")[0]
        // var target = document.getElementsByTagName("div")[0]  // 在i后面加则不会变化
        var btns = document.getElementsByTagName("button")
        btns[0].onclick = () => target.innerHTML = target.innerHTML + ' 长度可变文字'
        btns[1].onclick = () => target.innerText.length <= 6 ? alert('文字太少，不可再变少') : target.innerHTML = target.innerHTML.slice(0, -7)
    })()
</script>
```

#### 视频提示

一般在视频图片上的边角上都会有"自制"、"最新"、"1080p"等诸如此类的提示。使用不依赖的绝对定位属性，可以让父级元素不设置relative，拓展性更强
```html
<style>
    i { position: absolute; width: 40px; text-align: center; height: 18px; line-height: 18px; font-style: normal; background-color: orange; color: white; padding: 2px; }
    .box { height: 200px; width: 200px; border: 2px solid gray; margin-left: 100px; }
    .in { width: 100%; height: 100%; line-height: 100px; background-color: pink; display: inline-block; }
    .rt { margin-left: -44px; }
    .lb { margin-top: -22px; }
    .rb { float: right; margin-top: -22px; margin-left: -44px; }
</style>
<div class="box">
    <i>自制</i>
    <div class="in">测试内容</div><!--
    --><i class="rt">独家</i>
    <i class="lb">1080p</i>
    <span style="width: 100%;display:inline-block"></span><!--
    --><i class="rb">最新</i>
</div>
```

#### 下拉菜单

一般地，下拉菜单作为一个组件需要使用在各种场景中，如果给组件添加relative属性，则降低了其利用率

```html
<style>
    body { margin: 0; }
    ul { margin: 0; padding: 0; list-style: none; }
    input { padding: 0; border: 0; }
    .box { width: 200px; height: 38px; border: 2px solid gray; }
    .con { overflow: hidden; }
    .input { float: left; width: 160px; height: 38px; }
    .input:focus { outline: none; }
    .search { width: 38px; height: 38px; float: right; background: url('http: //sandbox.runjs.cn/uploads/rs/26/ddzmgynp/search.png') 0 -38px; }
    .list { display: none; position: absolute; width: 200px; border: 1px solid #e6e8e9; overflow: hidden; }
    .in { line-height: 30px; border-bottom: 1px solid lightblue; cursor: pointer; text-indent: 1em; }
    .in:hover { background-color: #f9f9f9; }
</style>
<div class="box">
    <div class="con">
        <input class="input" id="input" autocomplete="off">
        <a href="javascript:;" class="search"></a>
    </div>
    <ul class="list" id="list">
        <li class="in">选项一</li>
        <li class="in">选项二</li>
        <li class="in" style="margin-bottom: -1px">选项三</li>
    </ul>
</div>
<script>
    input.onfocus = function(e) { e.stopPropagation(); list.style.display = 'block'; return false; }
    input.onblur = () => list.style.display = 'none'
</script>
```

#### 边缘对齐

很多网站都使用了边缘对齐，但好多都是用页面宽度计算出来的，当宽度变化时需要重新计算。而无依赖的绝对定位利用静态位置，无需计算就可将其位置确定，且拓展性好
```html
<style>
    body { margin: 0; }
    ul { margin: 0; padding: 0; list-style: none; }
    .box { width: 200px; height: 100px; border: 2px solid black; background-color: lightgreen; resize: both; overflow: auto; }
    .out { text-align: right; }
    .list { position: absolute; margin: 10px 0 0 2px; display: inline-block; }
    .in { text-align: center; width: 20px; line-height: 20px; margin-top: 4px; background-color: pink; border-radius: 50%; }
</style>
<div class="box">
    text
    <div class="out">
        <!-- 对于safari浏览器需要添加空格&nbsp;来触发右对齐，其他浏览器则不需要-->
        &nbsp;
        <ul class="list">
            <li class="in">一</li>
            <li class="in">二</li>
            <li class="in">三</li>
        </ul>
    </div>
</div>
```

#### 星号对齐

在很多注册或登录页面中，存在用\*表示的必填项。\*和\*号对齐，文字和文字对齐。这种情况使用静态位置的绝对定位比较合适
```html
<style>
    body { margin: 0; }
    ul { margin: 0; padding: 0; list-style: none; }
    i { font-style: normal; color: red; position: absolute; margin-left: -10px; }
    .list { width: 100px; padding-left: 20px; border: 2px solid black; line-height: 2; }
</style>
<ul class="list">
    <li class="in">
        <i>*</i><span>手机号</span>
    </li>
    <li class="in">
        <span>用户名</span>
    </li>
    <li class="in">
        <i>*</i><span>密码</span>
    </li>
</ul>
```

#### 全屏自适应

实现一个距离屏幕右侧200px的全屏自适应的容器层
```html
<style>
    .box{ position: absolute; top: 0; left: 0; right: 200px; bottom: 0; background-color: pink; }
</style>
<div class="box"></div>
```

#### 左右半区翻图

一些选项卡中存在左右半区的翻图效果，点击左覆盖区切换到上一张图片，点击右覆盖区切换到下一张图片
```html
<style>
    ul { margin: 0; padding: 0; list-style: none; }
    .box { position: relative; width: 300px; height: 200px; border: 2px solid lightgray; text-align: center; font: 40px/200px '宋体'; color: white; overflow: hidden; }
    .list { position: absolute; width: 400%; left: 0; top: 0; bottom: 0; transition: left 1s; }
    .in { float: left; width: 25%; background-color: lightgreen; }
    .l,.r { position: absolute; opacity: 0; top: 0; bottom: 0; background-color: rgba(0,0,0,0.1); cursor: pointer; }
    .l { left: 0; right: 50%; }
    .r { left: 50%; right: 0; }
    .l:hover,.r:hover { opacity: 1; transition: 1s; }
</style>
<div class="box">
    <ul class="list" id="list">
        <li class="in">第1个</li>
        <li class="in">第2个</li>
        <li class="in">第3个</li>
        <li class="in">第4个</li>
    </ul>
    <div class="l" id="l">&lt;</div>
    <div class="r" id="r">&gt;</div>
</div>
<script>
    var index = 0;
    var children = list.children;
    l.onclick = function() {
        if (index > 0) {
            index--;
            move(index);
        }
    }
    r.onclick = function() {
        if (index < children.length - 1) {
            index++;
            move(index);
        }
    }
    function move(index) {
        list.style.left = '-' + index * 100 + '%';
    }
</script>
```

#### 九宫格

利用绝对定位的偏移属性可以制作宽高自适应的九宫格效果
```html
<style>
    ul { margin: 0; padding: 0; list-style: none; }
    .box { width: 400px; height: 400px; overflow: auto; resize: both; position: relative; border: 3px solid red; }
    .list { position: absolute; top: 0; left: 0; right: 0; bottom: 0; }
    .in { position: relative; float: left; height: 33.3%; width: 33.3%; background-color: pink; }
    .in:before { content: ''; position: absolute; left: 10px; right: 10px; top: 10px; bottom: 10px; background-color: lightblue; border-radius: 10px; }
    .in:after { content: attr(data-value); position: absolute; left: 0; right: 0; top: 0; bottom: 0; height: 30px; margin: auto; text-align: center; font: bold 24px/30px '宋体'; }
    form { width: 230px; border: 3px solid #ccc; padding: 0 10px 10px 160px; position: relative; }
    form label { position: absolute; left: 10px; margin-top: 10px; padding: 5px; }
    form input { margin-top: 10px; font-size: inherit; padding: 5px; }
</style>
<form action="#">
    <label for="box_height">box height:</label><input type="number" name="box_height" id="box_height"><br>
    <label for="box_width">box width:</label><input type="number" name="box_width" id="box_width">
</form>
<div class="box">
    <ul class="list">
        <li class="in" data-value='1'></li>
        <li class="in" data-value='2'></li>
        <li class="in" data-value='3'></li>
        <li class="in" data-value='4'></li>
        <li class="in" data-value='5'></li>
        <li class="in" data-value='6'></li>
        <li class="in" data-value='7'></li>
        <li class="in" data-value='8'></li>
        <li class="in" data-value='9'></li>
    </ul>
</div>
<script>
    (function() {
        var target = document.getElementsByClassName("box")[0]
        var box_height = document.getElementById("box_height")
        var box_width = document.getElementById("box_width")
        box_height.value = target.clientHeight
        box_width.value = target.clientWidth
        box_height.onfocus = box_height.onchange = box_height.oninput = box_height.onpropertychange = function() { target.style.height = this.value + 'px' }
        box_width.onfocus = box_width.onchange = box_width.oninput = box_width.onpropertychange = function() { target.style.width = this.value + 'px' }
    })()
</script>
```

#### 等高布局

利用overflow清除浮动的BFC的包裹性，形成一个看似等高的布局，再利用绝对定位模拟出背景和间隔线
```html
<style>
    .box { width: 80%; margin: auto; border: 1px solid gray; overflow: hidden; position: relative; background-color: lightgreen; }
    .l { box-sizing: border-box; float: left; width: 25%; position: relative; }
    .r { box-sizing: border-box; float: right; width: 75%; padding: 10px; height: 100%; }
    .con { position: absolute; background-color: lightblue; border-right: 1px solid #ccc; height: 9999px; width: 100%; }
    .show { padding: 10px; position: relative; }
</style>
<div class="box">
    <div class="l">
        <div class="con"></div>
        <div class="show">测试文字<br>测试文字<br></div>
    </div>
    <div class="r">测试文字<br>测试文字<br>测试文字<br></div>
</div>
```
【必要】【不是很懂】

#### 整体布局

整体布局的思路就是利用绝对定位元素的偏移属性来替代固定定位，首先让``<page>``元素满屏起到``<body>``元素的作用，然后各个模块各居其位。如果有其他的一些整体的页面遮罩，则与``<page>``元素平级
```html
<style>
    html,body { height: 100%; }
    body { margin: 0; }
    .page { position: absolute; top: 0; bottom: 0; left: 0; right: 0; }
    header,footer { position: absolute; left: 0; right: 0; height: 50px; }
    header { top: 0; background-color: lightgreen; }
    footer { bottom: 0; background-color: lightcoral; }
    aside { position: absolute; left: 0; top: 50px; bottom: 50px; width: 250px; background-color: lightblue; }
    .content { position: absolute; top: 50px; bottom: 50px; left: 250px; right: 0; overflow: auto; background-color: pink; }
</style>
<div class="page">
    <div class="content">
        <div style="height: 1000px">内容区</div>
    </div>
    <aside>侧边栏</aside>
    <header>头部</header>
    <footer>底部</footer>
</div>
```

### 相对定位和固定定位

相对定位

* 【注意】如果相对定位元素遇到过度受限的问题，一个值会重置为另一个值的相反数。bottom总是等于-top，right总是等于-left<br>
* 非常奇怪的是，虽然相对定位的数值型偏移属性是相对于自身的，但其百分比却是相对于包含块的。top和bottom百分比相对于包含块的高度(只是高度height，不包括纵向padding和border)，left和right百分比相对于包含块的宽度(只是宽度width，不包括横向padding和border)<br>
* 【注意】对于IE7-和firefox浏览器来说，若包含块的高度height为auto，则百分比的top和bottom设置有效果，而其他浏览器则都没有效果
* *限制范围*
    * 一般地，给绝对定位元素限制范围时，为其父级元素设置相对定位relative，因为相对定位元素不脱离文档流
    * [注意]相对定位元素可以限制绝对定位，但不能限制固定定位，因为固定定位是相对于视窗定位的
* *提升层级* 当想要提升元素层级，又不想脱离文档流时，使用相对定位是一个好主意
* 【注意】不同于绝对定位元素可以使元素具有块级元素属性，相对定位应用于inline元素后，由于无法改变其行内元素的属性，不具备块级元素属性，无法设置宽高，其上下margin也依然存在问题
* 【兼容】在IE6浏览器下，haslayout下的元素负margin超出父元素的部分会被隐藏掉。这个问题可以通过设置margin负值元素的position属性值为relative来解决。

固定定位

* 【注意】IE6-浏览器不支持
* 固定定位与绝对定位的很多特性都类似，具有包裹性、破坏性及去浮动的特性，关于各浏览器中display属性的bug、clip属性的隐藏功能、静态位置跳动以及overflow失效的表现都相同
* 【全屏遮罩】当页面内容超出页面容器大小出现滚动条时，此时使用absolute全屏遮罩会出现滚动条以外部分没有遮住的情况。因为根元素html的父级是document，document的高度和可视区域一致，也就是与视窗一致，是不包括滚动条以外部分的。这时，只能使用fixed固定定位来实现全屏遮罩效果
* 【transform】如果设置fixed元素的父级或祖先级元素设置为transform属性，则fixed相对于该元素定位。因为设置transform属性的元素建立了一个新的坐标系。如果要通过fixed实现铺满全屏的效果，一定要注意其父级或祖先级元素不能设置有transform属性

```html
<!-- 全屏遮罩 -->
<style>
    .page { position: absolute; top: 0; bottom: 0; left: 0; right: 0; background-color: pink; z-index: -1; }
    .test { width: 2000px; height: 200px; background-color: lightblue; }
</style>
<div class="page" id="page"></div>
<div class="test"></div>
<button>fixed</button>
<script>
    document.getElementsByTagName('button')[0].onclick = function() {
        page.style.position = this.innerHTML
        this.innerHTML = this.innerHTML == 'fixed' ? 'absolute' : 'fixed'
    }
</script>
```

## 布局方式

### 布局系统

#### Media媒体查询

**【媒介类型】**

在CSS2中，媒体查询只使用于``<style>``和``<link>``标签中，以media属性存在。media属性用于为不同的媒介类型规定不同的样式
```txt
screen         计算机屏幕（默认值）
tty            电传打字机以及使用等宽字符网格的类似媒介
tv             电视类型设备（低分辨率、有限的屏幕翻滚能力）
projection     放映机
handheld       手持设备（小屏幕、有限的带宽）
print          打印预览模式 / 打印页
braille        盲人用点字法反馈设备
aural          语音合成器
all            适合所有设备
```
真正广泛使用且所有浏览器都兼容的媒介类型是'screen'和'all'
```html
<style media="screen">
    .box { height: 100px; width: 100px; background-color: lightblue; }
</style>
<div class="box"></div>
```

**【媒体属性】**

媒体属性是CSS3新增的内容，多数媒体属性带有"min-"和"max-"前缀，用于表达"小于等于"和"大于等于"。这避免了使用与HTML和XML冲突的"<"和">"字符。[注意]媒体属性必须用括号()包起来，否则无效
```txt
width | min-width | max-width
height | min-height | max-height
device-width | min-device-width | max-device-width
device-height | min-device-height | max-device-height
aspect-ratio | min-aspect-ratio | max-aspect-ratio
device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio
color | min-color | max-color
color-index | min-color-index | max-color-index
monochrome | min-monochrome | max-monochrome
resolution | min-resolution | max-resolution
scan | grid
```

1. 颜色(color)：指定输出设备每个像素单元的比特值。如果设备不支持输出颜色，则该值为0。向所有能显示颜色的设备应用样式表
2. 颜色索引(color-index)：指定了输出设备中颜色查询表中的条目数量，如果没有使用颜色查询表，则值等于0。向所有使用至少256个索引颜色的设备应用样式表
3. 宽高比(aspect-ratio)：描述了输出设备目标显示区域的宽高比。该值包含两个以“/”分隔的正整数。代表了水平像素数（第一个值）与垂直像素数（第二个值）的比例
4. 设备宽高比(device-aspect-ratio)：描述了输出设备的宽高比。该值包含两个以“/”分隔的正整数。代表了水平像素数（第一个值）与垂直像素数（第二个值）的比例
5. 设备高度(height)：描述了输出设备的高度。向显示在最小高度1000px的屏幕上的文档应用样式表
6. 设备宽度(device-width)
7. 网格(grid)：判断输出设备是网格设备还是位图设备。如果设备是基于网格的（例如电传打字机终端或只能显示一种字形的电话），该值为1，否则为0
8. 高度(height)：描述了输出设备渲染区域（如可视区域的高度或打印机纸盒的高度）的高度
9. 宽度(width)：宽度描述了输出设备渲染区域的宽度
10. 黑白(monochrome)：指定了一个黑白（灰度）设备每个像素的比特数。如果不是黑白设备，值为0
11. 方向(orientation)：指定了设备处于横屏（宽度大于宽度）模式还是竖屏（高度大于宽度）模式。值：landscape(横屏) | portrait(竖屏)
12. 分辨率(resolution)：指定输出设备的分辨率（像素密度）。分辨率可以用每英寸（dpi）或每厘米（dpcm）的点数来表示
13. 扫描(scan)：扫描描述了电视输出设备的扫描过程。值： progressive | interlace

```css
/* 1 */ @media (color) { .box { height: 100px; width: 100px; background-color: lightblue; } }
/* 2 */ @media (min-color-index: 256) { .box { height: 100px; width: 100px; background-color: lightgreen; } }
/* 3 */ @media (min-aspect-ratio: 1/1) { .box { height: 100px; width: 100px; background-color: lightgreen; } }
/* 4 */ @media (device-aspect-ratio: 16/9) {}
/* 5 */ @media (min-device-height: 1000px) {}
```

**【语法】**

媒体查询包含了一个CSS2已有的媒介类型(或称为媒体类型)和CSS3新增的包含一个或多个表达式的媒体属性，这些媒体属性会被解析成真或假。<br>
媒体查询为真时，相关的样式表或样式规则就会按照正常的级联规则被应用。即使媒体查询返回假，``<link>``标签上带有媒体查询的样式表仍将被下载（只不过不会被应用）

【逻辑操作符】操作符not、and、only和逗号(,)可以用来构建复杂的媒体查询。

* and: ``@media all and (min-width: 700px) and (orientation: landscape) { ... }`` 满足横屏以及最小宽度为700px的条件应用样式表
    * 由于不使用not或only操作符的情况下，媒体类型是可选的，默认为 all，所以可以简写为 ``@media (min-width: 700px) and (orientation: landscape) { ... }``
* ,|or: 将多个媒体查询以逗号分隔放在一起；只要其中任何一个为真，整个媒体语句就返回真，相当于or操作符
* not: 用来对一条媒体查询的结果进行取反。*[注意]*not关键字仅能应用于整个查询，而不能单独应用于一个独立的查询。``@media not all and (monochrome) { ... }``等价于``@media not (all and (monochrome)) { ... }``
* only: 表示仅在媒体查询匹配成功时应用指定样式。可以通过它让选中的样式在老式浏览器中不被应用。``media="only screen and (max-width:1000px)"{...}``在老式浏览器中被解析为media="only"，因为没有一个叫only的设备，所以实际上老式浏览器不会应用样式。``media="screen and (max-width:1000px)"{...}``在老式浏览器中被解析为media="screen"，它把后面的逻辑表达式忽略了。所以老式浏览器会应用样式。所以，在使用媒体查询时，only最好不要忽略

**【方法】**

window.matchMedia()方法用来检查CSS的mediaQuery语句。[注意]IE9-浏览器不支持，可以使用第三方函数库[matchMedia.js](https://github.com/paulirish/matchMedia.js/)。<br>
window.matchMedia()方法接受一个mediaQuery语句的字符串作为参数，返回一个MediaQueryList对象。该对象有media和matches两个属性。

* media：返回所查询的mediaQuery语句字符串
* matches：返回一个布尔值，表示当前环境是否匹配查询语句

```js
var result = window.matchMedia('(min-width: 600px)');
console.log(result.media); //'(min-width: 600px)'
console.log(result.matches); // true
```

【注意】如果window.matchMedia无法解析mediaQuery参数，matches属性返回的总是false，而不是报错

window.matchMedia方法返回的MediaQueryList对象有两个方法，用来监听事件：addListener方法和removeListener方法。【注意】只有mediaQuery查询结果发生变化时，才调用指定的回调函数。所以，如果想要mediaQuery查询未变化时，就显示相应效果，需要提前调用一次函数。下面这个例子是当页面宽度小于1000px时，页面背景颜色为品红色；否则为淡蓝色
```js
var mql = window.matchMedia("(min-width: 1000px)");
mqCallback(mql);
mql.addListener(mqCallback);
function mqCallback(mql) {
    if (mql.matches) {
        document.body.background = 'pink';
    }else{
        document.body.background = 'lightblue';
    }
}
```

**【打印样式】**

媒体查询的一个常用功能是打印样式的设置，主要是背景清除、字体颜色变黑等。
```css
@media print{
    *,*:before,*:after{background:transparent!important;color:#000 !important;box-shadow:none !important;text-shadow:none !important;}
    a,a:visited{text-decoration:underline;}
    a[href]:after{content:"(" attr(href) ")";}
    abbr[title]:after{content:"(" attr(title) ")";}
    a[href^="#"]:after,a[href^="javascript:;"]:after{content:"";}
    pre,blockquote{border:1px solid #999;/*只有opera浏览器起作用，避免在元素内部插入分页符*/page-break-inside:avoid;}
    thead{display:table-header-group;}
    tr,img{page-break-inside:avoid;}
    img{max-width:100%!important;}
    p,h2,h3{/*元素内部发生分页时，最少保留3行*/orphans:3;/*元素内部发生分页时，元素顶部最少保留3行*/windows:3;}
    h2,h3{/*避免在元素后面插入一个分页符*/page-break-after:avoid;}
}
```

**【相对单位】**

如果媒体查询@media使用的是相对单位，如rem，这里有一个**坑**需要着重强调一下。一般而言，rem是相对于HTML的字体大小的。但是，由于媒体查询的级别非常高，它并不是HTML的子元素，不是相对于HTML，而是相对于浏览器的，而浏览器的默认字体大小是16px。如果HTML设置字体大小为12px，设置如下媒体查询``media="only screen and (max-width:1rem)"``。实际上，max-width等于16px，而不是12px。而正是由于媒体查询是相对于浏览器的， 所以使用rem就没有必要，完全可以使用em来替代。``media="only screen and (max-width:1em)"``

#### 多列布局

CSS3新增了多列布局特性，可以让浏览器确定何时结束一列和开始下一列，无需任何额外的标记。简单来说，就是CSS3多列布局可以自动将内容按指定的列数排列，这种特性实现的布局效果和报纸、杂志类排版非常相似。本文将详细介绍CSS多列布局的基本属性和用法

**【列宽】**

* column-width: auto | \<length>主要用于给元素指定最优的列宽度，实际列宽可能会更宽或更窄。如果不设置高度，文字将自动撑满整列，且最后一列的标点会溢出到容器外。
* 【注意】IE10+和chrome浏览器支持标准写法，而firefox、safari浏览器及移动端android、IOS需要添加前缀。
* 应用于: block、inline-block、table-cell(firefox不支持为table-cell设置该属性)
* 【注意】column-width不可为0和负值；当column-width的值为auto或column-width的值大于元素宽度width一半时，没有分列效果(更准确地，由其他属性来决定)

**【列数】**

* column-count: auto | \<length>主要用于给元素指定允许的最大列数
* 【注意】IE10+和chrome浏览器支持标准写法，而firefox、safari浏览器及移动端android、IOS需要添加前缀
* 应用于: block、inline-block、table-cell(firefox不支持为table-cell设置该属性)
* 【注意】column-count不可为0和负值；当column-count的值为auto时，默认没有分列效果(更准确地，由其他属性来决定)

**【列间距】**

* column-gap: normal | \<length>用于定义相邻两列之间的空白间距
* column-gap的normal值默认情况下相当于1em。column-gap值不可为负值

**【列rule】**

* column-rule: \<column-rule-width> || \<column-rule-style> || \<column-rule-color>用于绘制位于列间距水平中心的线条。该样式由column-rule-width、column-rule-style、column-rule-color这三条样式组成。
* 标准中说column-rule类似于border，但实际更类似于outline，因为该样式并不占据实际的物理尺寸。
* [注意]如果column-rule-width的宽度大于column-gap的宽度，则可能会显示在列框内容中

**【跨列】**

* column-span: none | all用来定义子元素是否跨列。
* firefox不支持该属性，IE10+和chrome浏览器支持标准写法，而safari浏览器及移动端android、IOS需要添加前缀
* 【注意】当跨列元素被绝对定位(包括固定定位)或浮动后，跨列将不生效
* 【注意】当跨列元素与column-rule的修饰线重叠时，在IE和safari中，跨列元素将覆盖修饰线，而chrome浏览器存在bug，跨列元素的文本覆盖修饰线，但跨列元素的背景可能会消失。

**【列填充】**

* 在列布局中，有时由于内容不足，多列中的最后列往往没有足够内容填充，这时要实现所有列都具有相同高度的效果，需要使用列填充属性column-fill: auto | balance
    * auto: 默认各列高度随内容变化而变化
    * balance: 各列高度根据内容最多的一列进行统一
* [注意]目前只有firefox支持带前缀的column-fill属性

**【多列】**

* 一般地，我们只关心是否分列以及列宽多少，对列间距并不考虑。于是，column这个column-width和column-count的复合属性就得到了比较广泛的使用columns: column-width || column-count
* [注意]由于column-width和column-count这两个值的单位不同，所以顺序无关
* 要知道，多列布局主要由列宽、列间距、列数及元素宽度影响，其布局等式是
    * 元素宽度 = 列数 * 列宽 + (列数-1)\*列间距 <=> 列数*(列宽+列间距) - 列间距 = 元素宽度
    * 或者， 列数 = (元素宽度+列间距)/(列宽+列间距)
    * 或者， 列宽 = (元素宽度+列间距)/列数 - 列间距
* 此等式中，列间距为定值，其他三个值为可变值，以下是各个值推算情况，其中N为实际列数，W为实际列宽
    * 【1】如果元素宽度为auto，且列宽和列数都不是auto。则 N = column-count, W = column-width;
    * 【2】如果列宽为auto，但列数不是auto，元素宽度不为auto。则 N = column-count, W = max(0,(元素宽度 - ((N-1)*列间距))/N)
    * 【3】如果列宽不为auto，但列数是auto，元素宽度不为auto。则 N = max(1,floor((元素宽度 + 列间距) / (列宽 + 列间距 )), W = ((元素宽度 + 列间距) / N) - 列间距
    * 【4】如果列宽和列数都不是auto，元素宽度不为auto。则 N = min(列宽 , floor((元素宽度 + 列间距) / (列宽 + 列间距))), W = ((元素宽度 + 列间距) / N) - 列间距
* [注意]若列数为小数，只保留整数部分
* [注意]所有的情况都是先推算出实际列数，再由实际列数推算实际列宽

```html
<style>
    .container { width: 600px; background-color: #ddd; padding: 10px; overflow: hidden; }
    .show { width: calc(40% - 10px); float: left; margin-right: 10px; }
    .show h1 { font-size: large; font-weight: bold; text-align: center; margin: 5px; padding: 0; }
    .show div { padding: 10px; border: 2px solid black; border-radius: 5px; }
    .control { width: 60%; float: left; }
    .control dl { margin: 10px; padding: 0; text-align: center; }
    .control dl dt { font-size: large; font-weight: bold; text-align: center; margin: 5px; padding: 0; }
    .control dl dd { display: inline-block; background-color: #E7E7E7; padding: 5px 20px; margin: 5px; font: 18px/24px '宋体'; cursor: pointer; }
    .control .control-item { background-color: #aaa; padding: 5px; border-radius: 5px; margin: 10px; color: white; font: 14px/24px '黑体'; }
    .control .control-item input, .control .control-item button { width: 60px; float: right; margin-left: 5px; }
    .page-container { height: 400px; overflow: hidden; }
    .page { width: 100%; height: 100%; }
    .nav { padding: 10px; width: 60%; float: right; text-align: center; }
    .nav-in { display: inline-block; width:20px; line-height: 20px; border:1px solid black; background-color: #aaa; color: white; text-decoration: none; }
</style>
<div class="container">
    <div class="show">
        <h1>多列布局演示</h1>
        <div>根据气象预测，史上历时最长、强度最强的厄尔尼诺现象将<span style="background-color: chocolate;">跨列测试跨列测试跨列测试</span>持续到今年5月结束，受此影响，2016年中国气象年景可能总体偏差，降水偏多、涝重于旱，珠江流域重现类似1998年洪水、甚至更大规模洪水的可能性很大。</div>
        <p></p>
    </div>
    <div class="control page-container">
        <div class='page' id='page1'>
            <dl data-attr='display'>
                <dt>display</dt>
                <dd>inline</dd>
                <dd>block</dd>
                <dd>table</dd>
                <dd>inline-block</dd>
                <dd>table-cell</dd>
            </dl>
            <div class="control-item" data-attr="width" data-end='px'>
                <label for="width">width</label>
                <input type="number" name="width" id="width">
                <input type="range" value="100" min="100" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item" data-attr="height" data-end='px'>
                <label for="height">height</label>
                <input type="number" name="height" id="height">
                <input type="range" value="100" min="100" max="400"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item" data-attr="columnWidth" data-init='100' data-end='px'>
                <label for="columnWidth">column-width</label>
                <input type="number" name="columnWidth" id="columnWidth">
                <input type="range" value="100" min="0" max="270"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item" data-attr="columnCount" data-init="2">
                <label for="columnCount">column-count</label>
                <input type="number" name="columnCount" id="columnCount">
                <input type="range" value="2" min="0" max="5"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item" data-attr="columnGap" data-init="20" data-end='px'>
                <label for="columnGap">column-gap</label>
                <input type="number" name="columnGap" id="columnGap">
                <input type="range" value="20" min="0" max="100"/>
                <button type="button">normal</button>
            </div>
        </div>
        <div class="page" id="page2">
            <dl data-attr='column-rule-style'>
                <dt>column-rule-style</dt>
                <dd>none</dd>
                <dd>solid</dd>
                <dd>dashed</dd>
                <dd>dotted</dd>
                <dd>double</dd>
            </dl>
            <dl data-attr='column-rule-color'>
                <dt>column-rule-color</dt>
                <dd>lightpink</dd>
                <dd>lightgreen</dd>
                <dd>lightblue</dd>
                <dd>lightyellow</dd>
            </dl>
            <div class="control-item" data-attr="columnRuleWidth" data-init="3" data-end='px'>
                <label for="columnRuleWidth">column-rule-width</label>
                <input type="number" name="columnRuleWidth" id="columnRuleWidth">
                <input type="range" value="3" min="0" max="20"/>
                <button type="button">auto</button>
            </div>
        </div>
        <div class="page" id="page3">
            <dl data-attr='display' data-target='target2'>
                <dt>display</dt>
                <dd>inline</dd>
                <dd>block</dd>
                <dd>table</dd>
                <dd>inline-block</dd>
                <dd>table-cell</dd>
            </dl>
            <dl data-attr='position' data-target='target2'>
                <dt>position</dt>
                <dd>static</dd>
                <dd>relative</dd>
                <dd>absolute</dd>
                <dd>fixed</dd>
            </dl>
            <dl data-attr='float' data-target='target2'>
                <dt>float</dt>
                <dd>left</dd>
                <dd>right</dd>
                <dd>none</dd>
            </dl>
            <dl data-attr='columnSpan' data-target='target2'>
                <dt>column-span</dt>
                <dd>none</dd>
                <dd>all</dd>
            </dl>
        </div>
        <div class="page" id="page4">
            <dl data-attr='columnFill' data-target='target'>
                <dt>column-fill</dt>
                <dd>auto</dd>
                <dd>balance</dd>
            </dl>
        </div>
    </div>
    <nav class="nav">
        <a class="nav-in" href="#page1">1</a>
        <a class="nav-in" href="#page2">2</a>
        <a class="nav-in" href="#page3">3</a>
        <a class="nav-in" href="#page4">4</a>
    </nav>
</div>
<script>
    (function() {
        function getCSS(obj, style) { return window.getComputedStyle ? getComputedStyle(obj)[style] : obj.currentStyle[style]; };
        var show = document.getElementsByClassName("show")[0]
        var target = show.getElementsByTagName("div")[0]
        var target2 = target.getElementsByTagName("span")[0]
        var targets = { 'target': target, 'target2': target2 }
        var tips = show.getElementsByTagName("p")[0]
        var control = document.getElementsByClassName("control")[0]
        var dls = control.getElementsByTagName("dl")
        Array.prototype.forEach.call(dls, (dl, index, dls) => {
            dl.index = -1
            var dds = dl.getElementsByTagName("dd")
            Array.prototype.forEach.call(dds, (dd, index2, dds) => {
                dd.index = index2
                dd.onclick = function() {
                    var dl = this.parentNode
                    if (dl.index == this.index) {
                        return
                    }
                    var target = targets[dl.dataset.target ? dl.dataset.target : 'target']
                    if (getCSS(target, 'border-width') != '0px') {
                        target.style.padding = this.innerText == 'inline' ? '0' : '10px'
                    }
                    target.style[dl.dataset.attr] = this.innerText
                    tips.innerText = target.style.cssText
                    this.style.cssText = 'color: white; background-color: black'
                    if (dl.index >= 0) {
                        dl.getElementsByTagName("dd")[dl.index].style.cssText = 'color: black; background-color: #e7e7e7'
                    }
                    dl.index = this.index
                }
            })
        })
        var controlItems = control.getElementsByClassName("control-item")
        Array.prototype.forEach.call(controlItems, (item, index, controlItems) => {
            var label = item.getElementsByTagName("label")[0]
            var number = item.getElementsByTagName("input")[0]
            var range = item.getElementsByTagName("input")[1]
            var button = item.getElementsByTagName("button")[0]
            var attr = item.dataset.attr ? item.dataset.attr : label.dataset.attr
            var target = targets[item.dataset.target ? item.dataset.target : 'target']
            var value = getCSS(target, attr)
            button.value = number.value = range.value = value.endsWith('px') ? value.slice(0, -2) : item.dataset.init
            button.onclick = number.oninput = number.onfocus = number.onclick = range.onfocus = range.oninput = range.onclick = function() {
                var item = this.parentNode
                var label = item.getElementsByTagName("label")[0]
                var number = item.getElementsByTagName("input")[0]
                var range = item.getElementsByTagName("input")[1]
                var button = item.getElementsByTagName("button")[0]
                var attr = item.dataset.attr ? item.dataset.attr : label.dataset.attr
                var target = targets[item.dataset.target ? item.dataset.target : 'target']
                if (this instanceof HTMLButtonElement) {
                    number.value = range.value = button.value
                    target.style[attr] = button.innerText
                } else {
                    var end = item.dataset.end ? item.dataset.end : ''
                    target.style[attr] = this.value + end
                    number.value = range.value = this.value
                }
                tips.innerText = target.style.cssText
            }
        })
        var navs = document.getElementsByClassName("nav")
        Array.prototype.forEach.call(navs, (nav, index, navs) => {
            Array.prototype.forEach.call(nav.getElementsByClassName("nav-in"), (navIn, index2, nav) => {
                navIn.index = index2
            })
            nav.index = 0
            nav.onclick = function(event) {
                var target = event.target
                if (target.classList.contains('nav-in')) {
                    this.getElementsByClassName("nav-in")[nav.index].style.cssText = 'border: 1px solid black;'
                    nav.index = target.index
                    target.style.cssText = 'border: 1px solid blue; box-shadow: lightblue 0px 0px 1px;'
                }
            }
            nav.getElementsByClassName("nav-in")[nav.index].style.cssText = 'border: 1px solid blue; box-shadow: lightblue 0px 0px 1px;'
        })
    })()
</script>
```
<iframe frameborder='0' width='100%' height='480' src='./csses/column.html'></iframe>

#### grid栅格布局

对于Web开发者来说，网页布局一直是个比较重要的问题。但实际上，在网页开发很长的一段时间当中，我们甚至没有一个比较完整的布局模块。总的来说 Web 布局经历了以下四个阶段：

1. table表格布局，通过Dreamweaver拖拽表格或者手写table标签布局
2. float浮动及position定位布局，借助元素元素盒模型本身的特性以及float position等属性等进行布局
3. flex弹性盒模型布局，革命性的突破，解决传统布局方案上的三大痛点 排列方向、对齐方式，自适应尺寸。是目前最为成熟和强大的布局方案
4. grid栅格布局，二维布局模块，具有强大的内容尺寸和定位能力，适合需要在两个维度上对齐内容的布局。Grid Layout 是一种基于二维网格的布局系统，旨在完全改变我们设计基于网格的用户界面的方式，弥补网页开发在二维布局能力上的缺陷。与flex分为伸缩容器和伸缩项目类似，grid也分为网格容器和网格项目

属性

1. 通过**display**属性设置属性值为grid或inline-grid可以创建一个网格容器。网格容器中的所有子元素就会自动变成网格项目（grid item）。网格项目默认放在行中，并且跨网格容器的全宽
2. 【显示网格】使用**grid-template-columns**和**grid-template-rows**属性可以显式的设置一个网格的列和行。
    1. grid-template-rows: item1's height, item2's height, ...指定的每个值可以创建每行的高度。行的高度可以是任何非负值，长度可以是px、%、em等长度单位的值。没有定义的行的高度是根据其自身的内容来定义。
    2. grid-template-columns: col1's width, col2's width, ...
    3. **fr**单位可以帮助我们创建一个弹列的网格轨道。它代表了网格容器中可用的空间（就像Flexbox中无单位的值）。grid-template-columns: 1fr 1fr 2fr。在这个示例中，网格容器分成了4等份（1 + 1 + 2 = 4），每一份（1fr）是网格容器宽度的四分之一。所以item1和item2的宽度是网格容器的四分之一宽，item3是网格容器宽度的四分之二（2fr）。当fr和其它长度单位的值结合在一起的时候，fr是基于网格容器可用空间来计算。
    4. 可以通过**minmax()**函数来创建网格轨道的最小或最大尺寸。minmax()函数接受两个参数：第一个参数定义网格轨道的最小值，第二个参数定义网格轨道的最大值。可以接受任何长度值，也接受auto值。auto值允许网格轨道基于内容的尺寸拉伸或挤压
        1. grid-template-rows: minmax(100px, auto); grid-template-columns: minmax(auto, 50%) 1fr 3em;
        2. 在这个示例中，第一行的高度最小值是100px，但其最大值为auto，允许行的高度可以变大超过100px。第一列设置了最小值为auto，但它的最大值是50%，也就是列的最大宽度不会超过网格容器宽度的50%
    5. 使用**repeat()**可以创建重复的网格轨道。这个适用于创建相等尺寸的网格项目和多个网格项目。repeat()接受两个参数：第一个参数定义网格轨道应该重复的次数，第二个参数定义每个轨道的尺寸。
        1. grid-template-rows: repeat(3, 1fr); grid-template-columns: 30px repeat(3, 1fr) 30px;
        2. 在这个示例中，第一列和最后一列的宽度都是30px，并且它们之间有另列三列，这三列是通过repeat()来创建的，而且每列的列宽是1fr（1fr = (网格宽度 - 30px - 30px) / 3）
3. 【间距】**grid-column-gap** **grid-row-gap** **grid-gap**。grid-gap是grid-row-gap和grid-column-gap两个属性的缩写，如果它指定了两个值，那么第一个值是设置grid-row-gap的值，第二个值设置grid-column-gap的值。如果只设置了一个值，表示行和列的间距相等，也就是说grid-row-gap和grid-column-gap的值相同。间距(Gap)可以设置任何非负值，长度值可以是px、%、em等单位值
4. 【网格线】**grid-row-start** **grid-row-end** **grid-column-start** **grid-column-end**。通过网格线可以定位网格项目。网格线实际上是代表线的开始、结束，两者之间就是网格列或行。每条线是从网格轨道开始，网格的网格线从1开始，每条网格线逐步增加1。
    1. **grid-row**是grid-row-start和grid-row-end的简写。**grid-column**是grid-column-start和grid-column-end的简写。如果只提供一个值，则指定了grid-row-start(grid-column-start)值；如果提供两个值，第一个值是grid-row-start(grid-column-start)的值，第二个值是grid-row-end(grid-column-end)的值，两者之间必须要用/隔开。默认值为auto
    2. **关键词span**后面紧随数字，表示合并多少个列或行。grid-row: 1 / span 3; grid-column: span 2;
    3. **grid-area**。如果指定四个值，第一个值对应grid-row-start，第二个值对应grid-column-start，第三个值对应grid-row-end，第四个值对应grid-column-end。要用/隔开
5. 【网格线命名】通过grid-template-rows和grid-template-columns定义网格时，网格线可以被命名。网格线名称也可以设置网格项目位置
    1. 分配网格线名称必须用方括号\[网格线名称]，然后后面紧跟网格轨道的尺寸值。定义网格线名称时需要避免使用规范中出现的关键词，以免导致混乱。``grid-template-rows: [row-1-start] 1fr [row-2-start] 1fr [row-2-end];``
    2. 使用网格线名称设置网格项目位置和使用网格线号码设置网格项目位置类似，引用网格线名称的时候不应该带方括号。``grid-row: row-1-start/row-2-end``
    3. 使用repeat()函数可以给网格线分配相同的名称。这可以节省一定的时间。``grid-template-rows: repeat(3, [row-start] 1fr [row-end]);``。使用repeat()函数可以给网格线命名，这也导致多个网格线具有相同的网格线名称。相同网格线名称指定网格线的位置和名称，也且会自动在网格线名称后面添加对应的数字，使其网格线名称也是唯一的标识符。使用时``grid-row: row-start 2 / row-end 3;``
6. 【**网格区域命名**】像网格线名称一样，网格区域的名称可以使用grid-template-areas属性来命名。引用网格区域名称也可以设置网格项目位置。
    1. grid-template-areas: "header header" "content sidebar"  "footer footer"; grid-template-rows: 150px 1fr 100px; grid-template-columns: 1fr 200px;
    2. 设置网格区域的名称应该放置在单引号或双引号内，每个名称由一个空格符分开。网格区域的名称，每组（单引号或双引号内的网格区域名称）定义了网格的一行，每个网格区域名称定义网格的一列。
    3. [注意]grid-template-areas: "header header" "content sidebar" "footer footer";不可以简写为grid-template-areas: "header" "content sidebar" "footer";
    4. grid-row-start、grid-row-end、grid-column-start和grid-column-end以及简写的grid-row、grid-column、grid-area都可以引用网格区域名称，用来设置网格项目位置
7. 【隐式网格】
    1. 网格默认流方向是row，可以通过grid-auto-flow: row|column属性把网格流的方向改变成column。
    2. 当网格项目确认在显式网格之外时就会创建隐性网格，当没有足够的空间或者显式的网格轨道来设置网格项目，此时网格项目就会自动创建隐式网格
    3. 使用**grid-auto-rows**: auto|\<length>和**grid-auto-columns**: auto|\<length>属性可以定义隐式的网格。默认值为auto。grid-auto-rows: 100px其实是将grid-template-rows: auto 70px改为grid-template-rows: auto 70px 100px。即未在grid-template-rows/...中定义的就变为100px。而且grid-template-rows还可以定义多个值，即grid-auto-rows: 70px 50px，然后那些未在template中定义的行就以70px 50px 70px 50px ...续下去。
8. 【**隐式命名**】
    1. 【隐式命名网格区域名称】通常可以将网格线命名成任何想命名的名称，如果网格线名称添加-start和-end的后缀，其实也隐式的创建一个网格区域，可以用来设置网格项目的位置。
        1. ``grid-template-rows:    [outer-start] 1fr [inner-start] 1fr [inner-end] 1fr [outer-end];``
        2. ``grid-template-columns: [outer-start] 1fr [inner-start] 1fr [inner-end] 1fr [inner-end];``
        3. 在这个示例中，行和列都具有inner-start和inner-end网格线名称，同时也会对应的创建一个隐式网格区域名称inner ``grid-area: inner``
        4. 网格项目定位可以通过网格区域名称来设置，而不需要使用网格线名称
    2. 【隐式命名网格线名称】隐式的指定网格线反向指定了隐式的网格区域名称，命名的网格区域隐式的命名了网格线名称
        1. grid-template-areas:   "header header" "content sidebar" "footer footer";
        2. grid-template-rows:    80px 1fr 40px;
        3. grid-template-columns: 1fr 200px;
        4. 指定网格区域会给网格区域边线添加隐式的网格线名称。这些网格线的命名是基于网格区域来命名，只是在网格区域名称的后面添加后缀-start或-end。这时已经隐式的创建了 header-start header-end content-start content-end sidebar-start sidebar-end footer-start footer-end
9. 【网格项目层级】
    1. 网格项目可以具有层级和堆栈，必要时可能通过z-index属性来指定。
    2. .item-1,.item-2 { grid-row-start:  1; grid-column-end: span 2; } .item-1 { grid-column-start: 1; z-index: 1; } .item-2 { grid-column-start: 2 }。在这个例子中，item1和item2的开始行都是1，item1列的开始是1，item2列的开始是2，并且它们都跨越两列。两个网格项目都是由网格线数字定位，结果这两个网格项目重叠了。默认情况下，item2在item1上面，但是，我们在item1中设置了z-index:1;，导致item1在item2之上。
10. 【对齐】
    1. 【网格项目对齐方式（Box Alignment）】CSS的Box Alignment Module补充了网格项目沿着网格行或列轴对齐方式。
    2. **justify-items** / **justify-self** / **align-items** / **align-self** justify-items和justify-self指定网格项目沿着行轴对齐方式；align-items和align-self指定网格项目沿着列轴对齐方式。justify-items和align-items应用在网格容器上。align-self和justify-self属性用于网格项目自身对齐方式。这四个属性主要接受以下属性值：auto | normal | start | end | center | stretch | baseline | first baseline | last baseline
    3. 【网格轨道对齐方式】align-content指定网格轨道沿着行轴对齐方式；justify-content指定网格轨道沿着列轴对齐方式。它们支持下面属性：normal | start | end | center | stretch | space-around | space-between | space-evenly | baseline | first baseline | last baseline

```html
<style>
    body { font: large '宋体'; }
    .container { width: 640px; overflow: hidden; background-color: #ddd; margin: 0 auto; padding: 10px; }
    .show { width: calc(40% - 10px); margin-right: 10px; float: left; text-align: center; }
    .show-title { margin: 10px; padding: 0; font: bolder larger/24px '宋体'; }
    .show-main { background-color: #FFBDC8; border-radius: 5%; padding: 10px; }
    .show-grid-container { background-color: #9ED9E7; margin-bottom: 10px; }
    .show-grid-item { display: inline-block; border: 1px solid black; background-color: #FFFFE0; cursor: pointer; }
    .control { width: 60%; float: left; overflow: hidden; }
    .control dl { margin: 0; padding: 10px; }
    .control dl > dt { margin-bottom: 10px; padding: 0; font: bolder larger/24px '宋体'; text-align: center; }
    .control dl > dd { display: inline-block; padding: 5px; background-color: #e7e7e7; margin: 5px; cursor: pointer; }
    .control .control-item, .control .control-item2 { background-color: #aaa; padding: 5px; border-radius: 5px; margin: 10px; color: white; font: 14px/24px '黑体'; }
    .control .control-item input, .control .control-item button, .control .control-item2 button { width: 50px; float: right; margin-left: 5px; }
    .control .control-item2 input { width: 120px; float: right; margin-left: 5px; }
    .page-container { height: 430px; overflow: hidden; }
    .page { width: 100%; height: 100%; }
    .nav { padding: 10px; width: 60%; float: right; text-align: center; }
    .nav-in { display: inline-block; width:20px; line-height: 20px; border:1px solid black; background-color: #aaa; color: white; text-decoration: none; }
</style>
<div class="container">
    <div class="show">
        <h1 class="show-title">栅格布局演示</h1>
        <div class="show-main">
            <div class="show-grid-container">
                <div class="show-grid-item">item1</div>
                <div class="show-grid-item">item2</div>
                <div class="show-grid-item">item3</div>
            </div>
            <span style="background-color: chocolate;">跟随的行内元素</span>
        </div>
        <p class="show-info"></p>
    </div>
    <div class="control page-container">
        <div class="page" id="page1">
            <dl class="select-item" data-attr="display">
                <dt>display</dt>
                <dd>block</dd>
                <dd>inline-block</dd>
                <dd>grid</dd>
                <dd>inline-grid</dd>
            </dl>
        </div>
        <div class="page" id="page2">
            <div class="control-item attr-item" data-attr="height" data-unit='px'>
                <label for="height">height</label>
                <input type="number" name="height" id="height">
                <input type="range" value="100" min="100" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item attr-item" data-attr="width" data-unit='px'>
                <label for="width">width</label>
                <input type="number" name="width" id="width">
                <input type="range" value="100" min="100" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item" id="custom-item1">
                <label for="itemCount">item count</label>
                <input type="number" name="itemCount" id="itemCount">
                <input type="range" value="3" min="0" max="10"/>
                <button type="button">3</button>
            </div>
            <div class="control-item" id="custom-item2">
                <label for="itemIndex">item index</label>
                <input type="number" name="itemIndex" id="itemIndex">
                <input type="range" value="0" min="0" max="3"/>
                <button type="button">0</button>
            </div>
            <div class="control-item" id="custom-item3">
                <label for="lineIndex">line index</label>
                <input type="number" name="lineIndex" id="lineIndex">
                <input type="range" value="1" min="1" max="10"/>
                <button type="button">0</button>
            </div>
            <div class="control-item" id="custom-item4">
                <label for="gridTemplateRows">grid-template-row</label>
                <input type="number" name="gridTemplateRows" id="gridTemplateRows">
                <input type="range" value="10" min="10" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item" id="custom-item5">
                <label for="gridTemplateColumns">grid-template-column</label>
                <input type="number" name="gridTemplateColumns" id="gridTemplateColumns">
                <input type="range" value="10" min="10" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item2" data-attr="gridTemplateRows">
                <label for="gridTemplateRows">grid-template-rows</label>
                <input type="text" name="gridTemplateRows" id="gridTemplateRows">
                <button type="button">sure</button>
            </div>
            <div class="control-item2" data-attr="gridTemplateColumns">
                <label for="gridTemplateColumns">grid-template-columns</label>
                <input type="text" name="gridTemplateColumns" id="gridTemplateColumns">
                <button type="button">sure</button>
            </div>
            <div class="control-item2" data-attr="gridTemplateAreas">
                <label for="gridTemplateAreas">grid-template-areas</label>
                <input type="text" name="gridTemplateAreas" id="gridTemplateAreas">
                <button type="button">sure</button>
            </div>
        </div>
        <div class="page" id="page3">
            <div class="control-item attr-item" data-attr="gridRowGap" data-unit="px" data-init="10">
                <label for="gridRowGap">grid-row-gap</label>
                <input type="number" name="gridRowGap" id="gridRowGap">
                <input type="range" value="0" min="0" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item attr-item" data-attr="gridColumnGap" data-unit="px" data-init="10">
                <label for="gridColumnGap">grid-column-gap</label>
                <input type="number" name="gridColumnGap" id="gridColumnGap">
                <input type="range" value="0" min="0" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item attr-item" data-attr="gridGap" data-unit="px" data-init="10">
                <label for="gridGap">grid-gap</label>
                <input type="number" name="gridGap" id="gridGap">
                <input type="range" value="0" min="0" max="300"/>
                <button type="button">auto</button>
            </div>
        </div>
        <div class="page" id="page4">
            <div class="control-item attr-item" data-attr="gridRowStart" data-target='selected'>
                <label for="gridRowStart">grid-row-start</label>
                <input type="number" name="gridRowStart" id="gridRowStart">
                <input type="range" value="1" min="1" max="11"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item attr-item" data-attr="gridRowEnd" data-target='selected'>
                <label for="gridRowEnd">grid-row-end</label>
                <input type="number" name="gridRowEnd" id="gridRowEnd">
                <input type="range" value="1" min="1" max="11"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item attr-item" data-attr="gridColumnStart" data-target='selected'>
                <label for="gridColumnStart">grid-column-start</label>
                <input type="number" name="gridColumnStart" id="gridColumnStart">
                <input type="range" value="1" min="1" max="11"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item attr-item" data-attr="gridColumnEnd" data-target='selected'>
                <label for="gridColumnEnd">grid-column-end</label>
                <input type="number" name="gridColumnEnd" id="gridColumnEnd">
                <input type="range" value="1" min="1" max="11"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item2" data-attr="gridRow" data-target='selected'>
                <label for="gridRow">grid-row</label>
                <input type="text" name="gridRow" id="gridRow">
                <button type="button">sure</button>
            </div>
            <div class="control-item2" data-attr="gridColumn" data-target='selected'>
                <label for="gridColumn">grid-column</label>
                <input type="text" name="gridColumn" id="gridColumn">
                <button type="button">sure</button>
            </div>
            <div class="control-item2" data-attr="gridArea" data-target='selected'>
                <label for="gridArea">grid-area</label>
                <input type="text" name="gridArea" id="gridArea">
                <button type="button">sure</button>
            </div>
            <div class="control-item2" data-attr="zIndex" data-target='selected'>
                <label for="zIndex">z-index</label>
                <input type="text" name="zIndex" id="zIndex">
                <button type="button">sure</button>
            </div>
        </div>
        <div class="page" id="page5">
            <div class="control-item2" data-attr="gridTemplateRows">
                <label for="gridTemplateRows">grid-template-rows</label>
                <input type="text" name="gridTemplateRows" id="gridTemplateRows">
                <button type="button">sure</button>
            </div>
            <div class="control-item2" data-attr="gridTemplateColumns">
                <label for="gridTemplateColumns">grid-template-columns</label>
                <input type="text" name="gridTemplateColumns" id="gridTemplateColumns">
                <button type="button">sure</button>
            </div>
            <div class="control-item2" data-attr="gridTemplateAreas">
                <label for="gridTemplateAreas">grid-template-areas</label>
                <input type="text" name="gridTemplateAreas" id="gridTemplateAreas">
                <button type="button">sure</button>
            </div>
        </div>
        <div class="page" id="page6">
            <div class="control-item attr-item" data-attr="gridAutoRows" data-unit='px'>
                <label for="gridAutoRows">grid-auto-rows</label>
                <input type="number" name="gridAutoRows" id="gridAutoRows">
                <input type="range" value="100" min="0" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item attr-item" data-attr="gridAutoColumns" data-unit='px'>
                <label for="gridAutoColumns">grid-auto-columns</label>
                <input type="number" name="gridAutoColumns" id="gridAutoColumns">
                <input type="range" value="100" min="0" max="300"/>
                <button type="button">auto</button>
            </div>
            <div class="control-item2" data-attr="gridAutoRows">
                <label for="gridAutoRows">grid-auto-rows</label>
                <input type="text" name="gridAutoRows" id="gridAutoRows">
                <button type="button">sure</button>
            </div>
            <div class="control-item2" data-attr="gridAutoColumns">
                <label for="gridAutoColumns">grid-auto-columns</label>
                <input type="text" name="gridAutoColumns" id="gridAutoColumns">
                <button type="button">sure</button>
            </div>
        </div>
        <div class="page" id="page7">
            <dl class="select-item2">
                <dt>data-attr</dt>
                <dd>justify-items</dd>
                <dd>justify-self</dd>
                <dd>justify-content</dd>
                <dd>align-items</dd>
                <dd>align-self</dd>
                <dd>align-content</dd>
            </dl>
            <dl class="select-item select-item2" data-target='selected'>
                <dt>justify-items</dt>
                <dd>auto</dd>
                <dd>normal</dd>
                <dd>start</dd>
                <dd>end</dd>
                <dd>center</dd>
                <dd>stretch</dd>
                <dd>baseline</dd>
                <dd>first baseline</dd>
                <dd>last baseline</dd>
            </dl>
        </div>
    </div>
    <nav class="nav">
        <a class="nav-in" href="#page1">1</a>
        <a class="nav-in" href="#page2">2</a>
        <a class="nav-in" href="#page3">3</a>
        <a class="nav-in" href="#page4">4</a>
        <a class="nav-in" href="#page5">5</a>
        <a class="nav-in" href="#page6">6</a>
        <a class="nav-in" href="#page7">7</a>
    </nav>
    <button type="button" onclick='history.go()'>reset</button>
</div>
<script>
    (function() {
        function getCSS(obj, style) { return window.getComputedStyle ? getComputedStyle(obj)[style] : obj.currentStyle[style]; };
        var show = document.getElementsByClassName("show")[0]
        var target = show.getElementsByClassName("show-grid-container")[0]
        var targets = { 'target': target }
        var tips = show.getElementsByClassName("show-info")[0]
        var control = document.getElementsByClassName("control")[0]
        target.onclick = function(event) {
            if (targets['selected'] != null) {
                targets['selected'].style.outline = ''
            }
            var target = event.target
            tips.innerText = target.style.cssText
            targets['selected'] = target
            targets['selected'].style.outline = '3px solid lightgreen'
            getElementFromControlItem(temp)
            if (target.classList.contains('show-grid-item')) {
                number.value = range.value = Array.prototype.indexOf.call(this.getElementsByClassName("show-grid-item"), target) + 1
            } else {
                number.value = range.value = 0
            }
        }

        var dls = control.getElementsByClassName("select-item")
        Array.prototype.forEach.call(dls, (dl, index, dls) => {
            dl.index = -1
            var dds = dl.getElementsByTagName("dd")
            Array.prototype.forEach.call(dds, (dd, index2, dds) => {
                dd.index = index2
                dd.onclick = function() {
                    var dl = this.parentNode
                    if (dl.index == this.index) {
                        return
                    }
                    var target = targets[dl.dataset.target ? dl.dataset.target : 'target']
                    if (getCSS(target, 'border-width') != '0px') {
                        target.style.padding = this.innerText == 'inline' ? '0' : '10px'
                    }
                    target.style[dl.dataset.attr] = this.innerText
                    tips.innerText = target.style.cssText
                    this.style.cssText = 'color: white; background-color: black'
                    if (dl.index >= 0) {
                        dl.getElementsByTagName("dd")[dl.index].style.cssText = 'color: black; background-color: #e7e7e7'
                    }
                    dl.index = this.index
                }
            })
        })

        var dls2 = control.getElementsByClassName("select-item2")
        Array.prototype.forEach.call(dls2[0].getElementsByTagName("dd"), (dd, index, dl) => {
            dd.index = index
        })
        dls2[0].index = -1
        dls2[0].onclick = function(event) {
            var target = event.target
            if (target.tagName == 'DD' && target.index != this.index) {
                var sibling = this.nextElementSibling
                sibling.dataset.attr = target.innerText
                sibling.getElementsByTagName("dt")[0].innerText = target.innerText
                if (target.innerText.endsWith("content") && sibling.innerHTML.trim().endsWith("e</dd>")) {
                    sibling.innerHTML += ' <dd>space-around</dd> <dd>space-between</dd> <dd>space-evenly</dd>'
                } else if (sibling.innerHTML.trim().endsWith("y</dd>")) {
                    sibling.innerHTML = sibling.innerHTML.slice(0, -67)
                }
                if (sibling.index >= 0) {
                    sibling.getElementsByTagName("dd")[sibling.index].style.cssText = 'color: black; background-color: #e7e7e7'
                }
                sibling.index = -1
                target.style.cssText = 'color: white; background-color: black'
                if (this.index >= 0) {
                    this.getElementsByTagName("dd")[this.index].style.cssText = 'color: black; background-color: #e7e7e7'
                }
                this.index = target.index
            }
        }

        var controlItems = control.getElementsByClassName("attr-item")
        var label, number, range, button
        var getElementFromControlItem = function(controlItem) {
            label = controlItem.getElementsByTagName("label")[0]
            number = controlItem.getElementsByTagName("input")[0]
            range = controlItem.getElementsByTagName("input")[1]
            button = controlItem.getElementsByTagName("button")[0]
        }
        Array.prototype.forEach.call(controlItems, (item, index, controlItems) => {
            getElementFromControlItem(item)
            var attr = item.dataset.attr ? item.dataset.attr : label.dataset.attr
            var target = targets[item.dataset.target ? item.dataset.target : 'target']
            var value = target ? getCSS(target, attr) : ''
            button.value = number.value = range.value = value.endsWith('px') ? value.slice(0, -2) : (item.dataset.init ? item.dataset.init : range.value)
            button.onclick = number.oninput = number.onfocus = number.onclick = range.onfocus = range.oninput = range.onclick = function() {
                var item = this.parentNode
                getElementFromControlItem(item)
                var attr = item.dataset.attr ? item.dataset.attr : label.dataset.attr
                var target = targets[item.dataset.target ? item.dataset.target : 'target']
                if (this instanceof HTMLButtonElement) {
                    target.style[attr] = button.innerText
                    var value = getCSS(target, attr)
                    number.value = range.value = value.endsWith('px') ? value.slice(0, -2) : button.value
                } else {
                    target.style[attr] = this.value + (item.dataset.unit != null ? item.dataset.unit : '')
                    number.value = range.value = this.value
                }
                tips.innerText = target.style.cssText
            }
        })

        var configCustomItem = function(customItem, callback) {
            getElementFromControlItem(customItem)
            callback(label, button, number, range)
        }
        var temp = document.getElementById("custom-item2")
        configCustomItem(document.getElementById("custom-item1"), (label, button, number, range) => {
            button.value = number.value = 3
            button.onclick = number.oninput = number.onfocus = number.onclick = range.onfocus = range.oninput = range.onclick = function() {
                var tempRange = temp.getElementsByTagName("input")[1]
                tempRange.value = Math.min(tempRange.value, this.value)
                tempRange.click()
                var innerHTML = ''
                for (let i = 0; i < this.value; i++) {
                    innerHTML += '<div class="show-grid-item">item' + (i + 1) + '</div> '
                }
                target.innerHTML = innerHTML
                tempRange.max = number.value = range.value = this.value
            }
        })
        configCustomItem(temp, (label, button, number, range) => {
            button.value = number.value = 0
            button.onclick = number.oninput = number.onfocus = number.onclick = number.onpropertychange = range.onfocus = range.oninput = range.onclick = range.onpropertychange = function() {
                if (targets['selected'] != null) {
                    targets['selected'].style.outline = ''
                }
                targets['selected'] = this.value == 0 ? target : target.getElementsByClassName("show-grid-item")[this.value - 1]
                targets['selected'].style.outline = '3px solid lightgreen'
                number.value = range.value = this.value
            }
        })
        var lineIndex = 1
        configCustomItem(document.getElementById("custom-item3"), (label, button, number, range) => {
            button.value = number.value = 1
            button.onclick = number.oninput = number.onfocus = number.onclick = range.onfocus = range.oninput = range.onclick = function() {
                number.value = range.value = lineIndex = this.value
            }
        })
        var gridRows = []
        Array.prototype.replace = function(value, newValue) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] == value) {
                    this[i] = newValue
                }
            }
            return this
        }
        configCustomItem(document.getElementById("custom-item4"), (label, button, number, range) => {
            number.value = range.value = 30
            button.onclick = number.oninput = number.onfocus = number.onclick = range.onfocus = range.oninput = range.onclick = function() {
                var rowIndex = temp.getElementsByTagName("input")[1].value
                var flag = this instanceof HTMLButtonElement
                if (rowIndex > 0) {
                    gridRows[rowIndex - 1] = flag ? 'auto' : (this.value + 'px')
                    target.style.gridTemplateRows = gridRows.replace(null, 'auto').join(' ')
                    tips.innerText = target.style.cssText
                }
                if (!flag) {
                    number.value = range.value = this.value
                }
            }
        })
        var gridColumns = []
        configCustomItem(document.getElementById("custom-item5"), (label, button, number, range) => {
            number.value = range.value = 100
            button.onclick = number.oninput = number.onfocus = number.onclick = range.onfocus = range.oninput = range.onclick = function() {
                var flag = this instanceof HTMLButtonElement
                if (lineIndex > 0) {
                    gridColumns[lineIndex - 1] = flag ? 'auto' : (this.value + 'px')
                    target.style.gridTemplateColumns = gridColumns.replace(null, 'auto').join(' ')
                    tips.innerText = target.style.cssText
                }
                if (!flag) {
                    number.value = range.value = this.value
                }
            }
        })

        var controlItems2 = control.getElementsByClassName("control-item2")
        Array.prototype.forEach.call(controlItems2, (item, index, controlItems2) => {
            getElementFromControlItem(item)
            button.onclick = function() {
                var item = this.parentNode
                getElementFromControlItem(item)
                var attr = item.dataset.attr ? item.dataset.attr : label.dataset.attr
                var target = targets[item.dataset.target ? item.dataset.target : 'target']
                target.style[attr] = item.getElementsByTagName("input")[0].value
                tips.innerText = target.style.cssText
            }
        })

        var navs = document.getElementsByClassName("nav")
        Array.prototype.forEach.call(navs, (nav, index, navs) => {
            Array.prototype.forEach.call(nav.getElementsByClassName("nav-in"), (navIn, index2, nav) => {
                navIn.index = index2
            })
            nav.index = 0
            nav.onclick = function(event) {
                var target = event.target
                if (target.classList.contains('nav-in')) {
                    this.getElementsByClassName("nav-in")[nav.index].style.cssText = 'border: 1px solid black;'
                    nav.index = target.index
                    target.style.cssText = 'border: 1px solid blue; box-shadow: lightblue 0px 0px 1px;'
                }
            }
            nav.getElementsByClassName("nav-in")[nav.index].style.cssText = 'border: 1px solid blue; box-shadow: lightblue 0px 0px 1px;'
        })
    })()
</script>
```

<iframe frameborder='0' width='100%' height='500px' src='./csses/grid.html'></iframe>

#### 移动优先的响应式布局

随着移动互联网的兴起，不同设备的分辨率相差较大，如果在不同的设置上显示同一个页面，则用户体验差。响应式网页设计是一种方法，使得一个网站能够兼容多个终端，而不用为每个终端制作特定的版本。它使得一个网站可以在任何类型的屏幕上，都可以被轻松地浏览和使用。采用响应式设计，在不同设备中，网站会重新排列，展现出不同的设计风格，以完美的适配任何尺寸的屏幕

关于响应式设计，有渐进增加和优雅降级两个设计原则

* 渐进增强(progressive enhancement)，是指基本需求得到满足、实现，再根据不同浏览器及不同分辨率设备的特点，利用高级浏览器下的新特性提供更好的体验。比如，圆角、阴影、动画等

* 优雅降级(graceful degradation)则正好相反，现有功能已经开发完备，但需要向下兼容版本和不支持该功能的浏览器。虽然兼容性方案的体验不如常规方案，但保证了功能可用性

移动优先的响应式布局采用的是渐进增强原则，制作响应式网站时，先搞定手机版，然后再去为更大设备去设计和开发更复杂的功能。特征是使用min-width匹配页面宽度。从上到下书写样式时，首先考虑的是移动设备的使用场景，默认查询的是最窄的情况，再依次考虑设备屏幕逐渐变宽的情况。由简入繁易，由繁入简难。如果是桌面优先，布局端是桌面端代码，只有在media中，才是手机端代码，加载了多余的桌面端代码。如果是图片文件，则下载的无用资源更多。无论从界面设计还是代码执行效率的角度而言，移动优先都有明显优势。

**响应式设计包括三个要素：弹性布局、媒体查询和弹性图片**

弹性布局(flex/column/grid)和媒体查询(@media)已经在其他博客中详细介绍，下面来重点介绍下弹性图片。弹性图片，也称为响应式图片，是指图片能够跟随父容器宽度变化而变化，同时宽度受限于父容器，不可按照图片原始尺寸展现。

1. 因此，最简单的响应式图片设置max-width为100%即可。 ``img { max-width: 100%; }``
2. 只有一张图片的情况下，采用上面代码即可。如果提供了高清图，要根据设备大小加载不同的图片，则需要额外的处理。有如下几种处理方式
    1. 采用picture元素，IE浏览器、android4.4.4-浏览器不兼容。
    2. 采用img元素的srcset和sizes属性，IE浏览器、android4.4.4-浏览器不兼容
    3. 采用js，根据window的resize事件，修改图片的路径
    4. 后端配置，前端传递给后端当前设备的一些特征，后端通过这些特征决定做怎样的响应。但目录两个后端响应式解决方案Responsive_Images和Adaptive-Images都不再维护

```html
<!-- 2.1 -->
<picture>
    <source media="(min-width:50em)" srcset="img/l.jpg">
    <source media="(min-width:30em)" srcset="img/m.jpg">
    <img src="img/s.jpg" alt="#">
</picture>
<!-- 2.2 -->
<img
    src="img/480.png"
    srcset="img/480.png 480w,img/800.png 800w, img/1600.png 1600w"
    sizes="(min-width:800px) 800px,100vw" />
<!-- 2.3 -->
<script>
    function makeImageResponsive() {
        var width = $(window).width();
        var img = $('.content img');
        if (width <= 480) {
            img.attr('src', 'img/480.png');
        } else if(width <= 800) {
            img.attr('src','img/800.png');
        } else {
            img.attr('src','img/1600.png');
        }
    }
    $(window).on('resize load', makeImageResponsive);
</script>
```

【优点】

1. 减少工作量，网站、设计、代码、内容都只需要一份
2. 节省时间
3. 解决了设备之间的差异化展示
4. 搜索优化　
5. 更好的用户体验

【缺点】

1. 需要加载更多的样式和脚本资源，加载速度受到影响
2. 设计比较难精确定位和控制
3. 老版本浏览器兼容不好

下面介绍四种响应模式

* 【Column Drop 列下沉】手机上每一个大块单独占据一行，随着屏幕尺寸拉伸会在同一行上形成多个 column 列
* 【Mostly Fulid 基本流体式】基本上跟 Column Drop 一样，但是有一点点“固定布局“的特点：当到达一定宽度后，主体内容部分不再变宽，成为固定宽度
* 【Layout Shifter 变换式】变换式，也就是不必遵循原有内容顺序，可以根据最佳展示需要来调整大块顺序
* 【Off Canvas 抽屉式】抽屉式，屏幕不够宽的时候，隐藏，通过按钮呼出。足够宽的屏幕上，始终显示

### 居中布局

#### 水平居中

* **text-align** text-align: center。适用于block/inline-block。
    * 若要兼容IE7-浏览器，可使用display:inline;zoom:1;来达到inline-block的效果
    * 这种方法的不足之处在于，子元素的text-align继承了父元素的center，文字也居中显示，所以需要在子元素中设置text-align:left。
* **margin** margin: 0 auto
    * 将子元素的display为table，使子元素成为块级元素，同时table还具有包裹性，宽度由内容撑开。【注意】若要兼容IE7-浏览器，可把目标元素的结构换成``<table class="target">DEMO</table>``
    * 若子元素定宽，则可以使用绝对定位的盒模型属性，实现居中效果；若不设置宽度时，子元素被拉伸。position: absolute; left: 0; right: 0; margin: 0 auto;
* **absolute**
    * 配合translate()位移函数: translate函数的百分比是相对于自身宽度的，所以left:50%配合translateX(-50%)可实现居中效果。【注意】IE9-浏览器不支持
    * 配合relative: relative数值型的偏移属性是相对于自身的，但百分比却是相对于包含块的。因为子元素已经被设置为absolute，所以若使用relative，则需要增加一层``<div>``结构，使其宽度与子元素宽度相同。
        * .parent { position: relative; }
        * .childWrap { position: absolute; left: 50%; }
        * .child { position: relative; left: -50%; }
        * ``<div class="parent" style="background-color: gray;height: 20px;"><div class="childWrap"><div class="child" style="background-color: lightblue;">DEMO</div></div></div>``
    * 配合负margin: margin的百分比是相对于包含块的，所以需要增加一层``<div>``结构。由于宽度width的默认值是auto，当设置负margin时，width也会随着变大。所以此时需要定宽处理。【注意】虽然全兼容，但需要增加页面结构及定宽处理，所以限制了应用场景
        * .parent{ position: relative; }
        * .childWrap{ position: absolute; left: 50%; }
        * .child{ width:50px; margin-left:-50%; }
        * ``<div class="parent" style="background-color: gray;height: 20px;"><div class="childWrap"><div class="child" style="background-color: lightblue;">DEMO</div></div></div>``
* **flex** 【注意】IE9-浏览器不支持
    * 在伸缩容器上设置主轴对齐方式justify-content:center
    * 在伸缩项目上设置margin: 0 auto
* **grid** IE10-浏览器不支持
    * 在网格容器上设置justify-items或justify-content
    * 在网格项目中设置justify-self或者margin: 0 auto

#### 垂直居中

1. **line-height** 行高line-height实现单行文本垂直居中。行内流传着一种说法，单行文本垂直居中要将高度和行高设置成相同的值，但高度其实没必要设置。实际上，文本本身就在一行中居中显示。在不设置高度的情况下，行高撑开高度
2. **vertical-align**
    1. 设置父元素的display为table-cell。通过为table-cell元素设置vertical-align:middle，可使其子元素均实现垂直居中。这和表格里单元格的垂直居中是类似的。【注意】若要IE7-浏览器支持，则可以将其改为``<table>``表格结构。【注意】设置为table-cell的div不能使用浮动或绝对定位，因为浮动或绝对定位会使元素具有块级元素特性，从而丧失了table-cell元素具有的垂直对齐的功能。若需要浮动或绝对定位处理，则需要外面再套一层div
    2. 若子元素是图片，通过设置父元素的行高来代替高度，且设置父元素的font-size为0。vertical-align:middle的解释是元素的中垂点与父元素的基线加1/2父元素中字母X的高度对齐。由于字符X在em框中并不是垂直居中的，且各个字体的字符X的高低位置不一致。所以，当字体大小较大时，这种差异就更明显。当font-size为0时，相当于把字符X的字体大小设置为0，于是可以实现完全的垂直居中
    3. 通过新增元素来实现垂直居中的效果。新增元素设置高度为父级高度，宽度为0，且同样设置垂直居中vertical-align:middle的inline-block元素。由于两个元素之间空白被解析，所以需要在父级设置font-size:0，在子级再将font-size设置为所需值；若结构要求不严格，则可以将两个元素一行显示，则不需要设置font-size:0
3. **absolute**
    1. 配合translate()位移函数。translate函数的百分比是相对于自身高度的，所以top:50%配合translateY(-50%)可实现居中效果。【注意】IE9-浏览器不支持。【注意】若子元素的高度已知，translate()函数也可替换为margin-top: 负的高度值
    2. 若子元素定高，结合绝对定位的盒模型属性，实现居中效果。
    3. <关于增加div层级的说明>在水平居中对齐中，元素外层套一层div并设置absolute，元素设置负margin-left或者relative的负left属性，可以实现水平居中的效果。但由于margin是相对于包含块宽度的，这样margin-top:-50%得到的是宽度而不是高度的-50%，所以不可行；对于relative的百分比取值而言，在包含块高度为auto的情况下，chrome、safari和IE8+浏览器都不支持设置元素的百分比top值，所以也不可行
4. **flex** [注意]IE9-浏览器不支持
    1. 在伸缩容器上设置侧轴对齐方式align-items: center
    2. 在伸缩项目上设置margin: auto 0
5. **grid** [注意]IE10-浏览器不支持
    1. 在网格容器上设置align-items或align-content
    2. 在网格项目中设置align-self或者margin: auto 0

```html
<!-- 2.3 -->
<style>
    .parent { height: 200px; font-size: 0; }
    .child { width: 150px; display: inline-block; font-size: 20px; vertical-align: middle; }
    .childSbling { display: inline-block; height: 100%; vertical-align: middle; }
</style>
<div class="parent" style="background-color: lightgray; width:200px;">
    <div class="child" style="background-color: lightblue;">我是比较长的比较长的多行文字</div>
    <i class="childSbling"></i>
</div>
```

#### 水平垂直居中

1. text-align + line-height实现单行文本水平垂直居中
2. text-align + vertical-align
    1. 在父元素设置text-align和vertical-align，并将父元素设置为table-cell元素，子元素设置为inline-block元素。[注意]若兼容IE7-浏览器，将结构改为``<table>``结构来实现table-cell的效果；用display:inline;zoom:1;来实现inline-block的效果
    2. 若子元素是图像，可不使用table-cell，而是其父元素用行高替代高度，且字体大小设为0。子元素本身设置vertical-align:middle
3. margin + vertical-align 要想在父元素中设置vertical-align，须设置为table-cell元素；要想让margin:0 auto实现水平居中的块元素内容撑开宽度，须设置为table元素。而table元素是可以嵌套在tabel-cell元素里面的，就像一个单元格里可以嵌套一个表格。[注意]若兼容IE7-浏览器，需将结构改为``<table>``结构
4. absolute
    1. 利用绝对定位元素的盒模型特性，在偏移属性为确定值的基础上，设置margin:auto
    2. 利用绝对定位元素的偏移属性和translate()函数的自身偏移达到水平垂直居中的效果
    3. 在子元素宽高已知的情况下，可以配合margin负值达到水平垂直居中效果
5. flex [注意]IE9-浏览器不支持
    1. 在伸缩项目上使用margin:auto
    2. 在伸缩容器上使用主轴对齐justify-content和侧轴对齐align-items
6. grid [注意]IE10-浏览器不支持
    1. 在网格项目中设置justify-self、align-self或者margin:  auto
    2. 在网格容器上设置justify-items、align-items或justify-content、align-content

### 常见布局

#### 两端对齐

1. flex ``.justify-content_flex-justify{ -webkit-box-pack: justify; -ms-flex-pack: justify; -webkit-justify-content: space-between; justify-content: space-between; }`` [注意]IE9-浏览器不支持
2. text-align 水平对齐text-align本身就有一个属性值是两端对齐justify。但是，要注意的是，使用它实现两端对齐，需要注意在元素之间添加空白符(包括空格、换行符、制表符)才起作用。由于HTML结构中，``<li>``元素之间存在换行，所以不需要额外添加空白符。但仅仅是这样，元素也无法实现两端对齐效果。元素必须占满一行才行。
    1. 这时就需要使用属性text-align-last，该属性用来规定如何对齐文本的最后一行。于是把text-align属性替换成text-align-last。但是，要兼容IE浏览器需要同时设置text-align:justify。[注意]safari浏览器、IOS、androis4.4-浏览器不支持。text-align: justify;text-align-last: justify;
    2. 使用text-align-last可以实现两端对齐的效果，但是兼容性并不好。通过给父元素设置伪元素:after，并为伪元素设置inline-block，并设置宽度100%，相当于伪元素:after被挤到第二行。从而使原来的元素占满了第一行，触发了两端对齐的效果。这里要注意的是，因为空白会被解析为换行，所以可以通过设置父元素的高度height，并溢出隐藏，来解决多余的换行问题。
3. column 使用多列布局column也可以实现类似的效果。column-count定义了元素的列数，例子中有3个子元素，所以定义为3列。特别要注意的是，这时需要把子元素设置为block元素才会生效。如果子元素之间需要使用竖线，且竖线高度与子元素高度相同时，使用column-rule可方便的实现需求[注意]IE9-浏览器不支持。
4. grid 栅格布局使用justify-content的两端对齐属性space-between。[注意]IE10-浏览器不支持

```html
<!-- 2.1 -->
<style>
    body{margin: 0;}
    ul{margin: 0;padding: 0;list-style: none;}
    .list{width: 200px;overflow: hidden;border: 1px solid gray;background-color: lightgreen;line-height: 30px;text-align: justify;text-align-last: justify;}
    .in{background-color: lightblue;padding: 0 10px;display:inline-block;}
</style>
<ul class="list ">
    <li class="in">内容</li>
    <li class="in">样式</li>
    <li class="in">行为</li>
</ul>
<!-- 2.2 -->
<style>
    body{margin: 0;}
    ul{margin: 0;padding: 0;list-style: none;}
    .list{width: 200px;height: 30px;overflow: hidden;border: 1px solid gray;background-color: lightgreen;line-height: 30px;text-align: justify;}
    .in{background-color: lightblue;padding: 0 10px;display:inline-block;}
    .list:after{content:"";width:100%;display:inline-block;}
</style>
```

#### 单列定宽单列自适应布局

1. float 说起两列布局，最常见的就是使用float来实现。float浮动布局的缺点是浮动后会造成文本环绕等效果，以及需要及时清除浮动。如果各浮动元素的高度不同时，可能会出犬牙交错的效果
    1. float + margin 将定宽的一列使用float，而自适应的一列使用计算后的margin。
        1. [缺点1]IE6-浏览器下3像素bug，具体表现在右侧首行文字会向右偏移3px。解决办法是在left元素上设置margin-right: -100px
        2. [缺点2]当右侧容器中有子元素清除浮动时，会使该元素不与左侧浮动元素同行，从而出现文字下沉现象
        3. 可以在parent使用overflow: hidden;zoom: 1;来清除浮动
    2. float + margin + (fix) (fix)代表增加结构，为了解决上述方法中的两个缺点，可以通过增加结构来实现。自适应的一列外侧增加一层结构.rightWrap并设置浮动。要实现自适应效果，.rightWrap宽度必须设置为100%。若不设置，float后的元素宽度将由内容撑开。同时再配合盒模型属性的计算，设置计算后的负margin值，使两列元素在同一行显示。同时两列之间的间距由.right的margin值确定。由于右侧元素会层叠在左侧元素之上，.left需要使用relative来提升层级
    3. float + margin + calc 除了增加结构的方法外，还可以使用calc()[注意]IE8-、android4.3-、IOS5.1-不支持，android4.4+只支持加减运算
    4. float + overflow 使用overflow属性来触发bfc，来阻止浮动造成的文字环绕效果。由于使用overflow不会改变元素的宽度属性，所以不需要重新设置宽度。由于设置overflow:hidden并不会触发IE6-浏览器的haslayout属性，所以需要设置zoom:1来兼容IE6-浏览器
2. inline-block inline-block内联块布局的主要缺点是需要设置垂直对齐方式vertical-align，则需要处理换行符解析成空格的间隙问题。IE7-浏览器不支持给块级元素设置inline-block属性，兼容代码是display:inline;zoom:1;
    1. inline-block + margin + calc 一般来说，要解决inline-block元素之间的间隙问题，要在父级设置font-size为0，然后在子元素中将font-size设置为默认大小。[注意]IE8-、android4.3-、IOS5.1-不支持，android4.4+只支持加减运算
    2. inline-block + margin + (fix)
3. table 使用table布局的缺点是元素被设置为table后，内容撑开宽度，所以需要设置width:100%。若要兼容IE7-浏览器，需要改为``<table>``结构。由于table-cell元素无法设置margin，若需要在元素间设置间距，需要增加结构
4. absolute 缺点是由于父元素需要设置为relative，且子元素设置为absolute，所以父元素的高度并不是由子元素撑开的，需要单独设置。[注意]IE6-不支持相对的偏移属性同时设置
5. flex [注意]IE9-浏览器不支持 .left{width:100px;margin-right: 20px;} .right{flex:1;}
6. grid [注意]IE10-浏览器不支持 .parent{display: grid;grid-template-columns: 100px 1fr;grid-gap:20px}

```html
<!-- 1.1 -->
<style>
    p{margin: 0;}
    .parent{overflow: hidden;zoom: 1;}
    .left{float: left;width: 100px;}
    .right{margin-left: 120px;}
</style>
<div class="parent" style="background-color: lightgrey;">
    <div class="left" style="background-color: lightblue;">
        <p>left</p>
    </div>
    <div class="right"  style="background-color: lightgreen;">
        <p>right</p>
        <p>right</p>
    </div>
</div>
<!-- 1.2 -->
<style>
    p{margin: 0;}
    .parent{overflow: hidden;zoom: 1;}
    .left{position: relative;float: left;width: 100px;}
    .rightWrap{float: left;width: 100%;margin-left: -100px;}
    .right{margin-left: 120px;}
</style>
<!-- 1.3 -->
<style>
    p{margin: 0;}
    .parent{overflow: hidden;zoom: 1;}
    .left{float: left;width: 100px;margin-right: 20px;}
    .right{float: left;width: calc(100% - 120px);}
</style>
<!-- 1.4 -->
<style>
    p{margin: 0;}
    .parent{overflow: hidden;zoom: 1;}
    .left{ float: left;width: 100px;margin-right: 20px;}
    .right{overflow: hidden;zoom: 1;}
</style>
```

```css
/* 2.1 */
.parent{font-size: 0;}
.left{display:inline-block;vertical-align:top;width:100px;margin-right:20px;font-size:16px;}
.right{display:inline-block;vertical-align:top;width:calc(100% - 120px);font-size:16px;}
/* 3 */
.parent{display:table;width: 100%;table-layout: fixed;}
.left,.rightWrap{display:table-cell;}
.left{width: 100px;}
.right{margin-left: 20px;}
```

#### 两列自适应布局

两列自适应布局是指一列由内容撑开，另一列撑满剩余宽度的布局方式。

1. float 在单列定宽单列自适应的两列布局中，经常用float和负margin配合实现布局效果。但由于margin取值只能是固定值，所以在两列都是自适应的布局中就不再适用。而float和overflow配合可实现两列自适应效果。使用overflow属性来触发bfc，来阻止浮动造成的文字环绕效果。由于设置overflow:hidden并不会触发IE6-浏览器的haslayout属性，所以需要设置zoom:1来兼容IE6-浏览器
    1. .parent{overflow: hidden;zoom: 1;}
    2. .left{float: left;margin-right: 20px;}
    3. .right{overflow: hidden;zoom: 1;}
2. table 若table元素不设置table-layout:fixed，则宽度由内容撑开。在某个table-cell元素的外层嵌套一层div，并设置足够小的宽度如width:0.1%
    1. .parent{display:table;width:100%;}
    2. .leftWrap{display:table-cell;width:0.1%;}
    3. .left{margin-right: 20px;}
    4. .right{display:table-cell;}
3. flex  .right { flex: 1; } .left不要设置宽度
4. grid  grid-template-columns:auto 1fr;

#### 三列布局

三列布局，分为两侧定宽中间自适应、两列定宽一侧自适应、中间定宽两侧自适应、一侧定宽两列自适应和三列自适应这五种情况

https://www.cnblogs.com/xiaohuochai/p/5455905.html

#### 三栏式布局(所谓的圣杯和双飞翼布局)

#### 等分布局

#### 等高布局

#### 全屏布局

#### sticky-footer布局

# 渲染

## 字体和文本

### 字体

1. font-family 字体系列
    1. 5种通用字体系列：拥有相似外观的字体系列
        1. serif字体:字体成比例，且有上下短线(衬线字体)，包括Times\Georgia\New century Schoolbook
        2. sans-serif字体:字体成比例，且没有上下短线(无衬线字体)，包括Helvetica\Geneva\Verdana\Arial\Univers
        3. Monospace字体:字体不成比例，等宽字体，包括Courier\Courier New\Andale Mono
        4. Cursive字体:手写体，包括Zapf Chancery\Author\Comic Sans
        5. Fantasy字体:无法归类的字体，包括Western\Woodblock\Klingon
    2. 特定字体系列：具体的字体系列
        1. font-family:"宋体";
        2. font-family:"arial";
    3. 默认字体系列
        1. chrome/opera:"宋体"
        2. firefox:"微软雅黑"
        3. safari/IE:Times,"宋体"
    4. 中文字体
        1. 对于中文字体来说，常见的是宋体和微软雅黑。宋体是衬线字体，而微软雅黑是无衬线字体。衬线字体常用于排版印刷，而无衬线字体则常用于网页中
        2. 一般地，一行中有30-40个文字时，行高为1.5时，有较好的阅读体验。对于标题来说， 更好的样式是取消其加粗设置，并改变其颜色，增加页面的层次感
2. font-weight 字体加粗
    1. 常用值 normal bold
    2. 所有值 normal(正常)/bold(粗体)/bolder(更粗)/lighter(更细) 100/200/300/400/500/600/700/800/900 (100为最细，900为最粗)
3. font-size 字体大小
    1. 绝对字体大小 xx-small/x-small/small/medium/large/x-large/xx-large
    2. 相对字体大小 smaller/larger
    3. em/% 1em = 100%
    4. 默认字体大小 chrome/firefox/opera/IE/safari:16px
    5. 最小字体大小 chrome:12px opera:9px safari/IE/firefox:无
    6. font-size字体大小设置的是字体中字符em框的高度，实际的字符字形通常比字符em框要矮，与字体类型有关。值: xx-small | x-small | small | medium | large | x-large | xx-large | smaller | larger | <length> | <percentage> | inherit。初始值: medium。百分数: 相对于父元素的字体大小font-size
4. font-style 字体风格：normal italic(倾斜) oblique(倾斜)
5. font-variant 字体变形：normal small-caps(小型大写字母)
6. line-height 行高
7. font: [[<font-style> || <font-variant> || <font-weight>]? <font-size>[/<line-height>?<font-family>]
8. CSS标准定义了6个系统字体关键字，如 font: caption：
    1. caption: 由标题控件使用的字体样式，如按钮和下拉控件
    2. icon: 系统图标所用的字体样式，如文件夹和文件图标
    3. menu: 下拉菜单和菜单列表中文本使用的字体样式
    4. message-box: 对话框中文本使用的字体样式
    5. small-caption: 由标题小控件的标签使用的字体样式
    6. status-bar: 窗口状态条中文本使用的字体样式
9. font-face
    1. 。
    2. 两种调用字体的方法
        1. html(&#x + 小图标对应的unicode编码)
        2. css(\ + 小图标对应的unicode编码)(不兼容IE7-浏览器)
    3. 一般地，使用国内的[iconfont](https://www.iconfont.cn/)网站来寻找需要的字体图标，如晴、阴、雨、雪图标，将其新建为一个项目，并将项目文件下载到本地。下载的文件中包含了需要的字体文件及使用范例
    4. 例子

```css
/* 1.3 */
p {
    font-family:字体系列1,字体系列2 ……
    /* 【注意】若浏览器识别第一个字体，则以第一个字体显示；如果不识别，则尝试下一个。 */
    font-family: arial，“宋体”,“微软雅黑”;
    /* 【注意】若写英文字体，一定要把英文字体写在前面，英文字体会影响到英文、数字和标点符号。 */
    font-family: Times, 'New Century Schoolbook','New York', serif;
    /* 【注意】若字体名中有一个或多个空格，要添加引号 */
}
/* 9.1 */
@font-face {
    font-family: 自定义名称;
    src: url(../font/test.eot);
    src: url(../font/test.eot?#iefix) format("embedded-opentype"),
         url(../font/test.woff) format("woff"),
         url(../font/test.ttf) format("truetype"),
         url(../font/test.svg#jq) format("svg");
}
/* EOT:IE专用；WOFF:标准；TTF:最常见(safari/android/ios)；SVG:图形格式(IE和firefox不支持) */
/* 9.2.1 */
div { font-family: 自定义名称; -webkit-font-smoothing:antialiased;//字体抗锯齿、光滑度属性 -mox-osx-font-smoothing: grayscale;//字体抗锯齿、光滑度属性 }
/* 9.2.2 */
div { font-family: 自定义名称; -webkit-font-smoothing:antialiased;//字体抗锯齿、光滑度属性 -mox-osx-font-smoothing: grayscale;//字体抗锯齿、光滑度属性 }
div:before { content: "\f048"; }
```

```html
<!-- 9.2.1 -->
<div>&#xf048</div>
<!-- 9.2.2 -->
<div></div>
```

```html
<style>
    @font-face { font-family: 'iconfont'; src: url('font/iconfont.eot'); src: url('font/iconfont.eot?#iefix') format('embedded-opentype'), url('font/iconfont.woff') format('woff'), url('font/iconfont.ttf') format('truetype'), url('font/iconfont.svg#iconfont') format('svg'); }
    .weatherBox input { position: absolute; clip: rect(0, 0, 0, 0); pointer-events: none; }
    .weatherBox label { font-family: 'iconfont'; -webkit-font-smoothing: antialiased; /* 字体抗锯齿、光滑度属性 */ -mox-osx-font-smoothing: grayscale; /* 字体抗锯齿、光滑度属性 */ }
    .weatherBox label+label { margin-left: 10px; }
    .weatherBox label:hover { color: lightblue; }
    .icon-sunny:before { content: "\e601"; }
    .icon-snowy:before { content: "\e603"; }
    .icon-cloudy:before { content: "\e605"; }
    .icon-rainy:before { content: "\e606"; }
</style>
<div class="weatherBox">
    <label class="icon-sunny"><input type="radio" name="weather" id="sunny">晴</label>
    <label class="icon-cloudy"><input type="radio" name="weather" id="cloudy">阴</label>
    <label class="icon-rainy"><input type="radio" name="weather" id="rainy">雨</label>
    <label class="icon-snowy"><input type="radio" name="weather" id="snowy">雪</label>
</div>
```

### 基础文本样式

CSS文本样式是相对于内容进行的样式修饰。由于在层叠关系中，内容要高于背景。所以文本样式相对而言更加重要。有些人对文本和字体样式之间的不同不太了解，简单地讲，文本是内容，而字体则用于显示这个内容。本文将详细介绍文本相关样式

1. text-indent: <length> | <percentage> | inherit 首行缩进。[注意]该属性可以为负值。应用于: 块级元素(包括block和inline-block)
    1. 【悬挂缩进】div { width: 200px; border: 1px solid black; text-indent: -1em;//关键代码 padding-left: 1em;//关键代码 }
    2. 【首字下沉】div{ width: 200px; border: 1px solid black; text-indent: 0.5em; } div:first-letter{ font-size: 30px; float: left; }
2. text-align: left | center | right | justify | inherit 水平对齐。
    1. 【两端对齐】当水平对齐方式为两端对齐时，word-spacing可能会调整，以便文本在整行中正好放下。如果为letter-spacing指定一个长度值，则letter-spacing不会受两端对齐影响，除非letter-spacing值为normal
    2. 【IE兼容】对于IE7-浏览器来说，使用text-align不仅会改变文本的水平对齐方式，也会改变后代块级元素的水平对齐方式
3. word-spacing: <length> | normal | inherit 单词间距。[注意]单词之间用空格分开，单词之间的间距 = word-spacing + 空格大小。[注意]字间隔可为负值。
4. letter-spacing: <length> | normal | inherit 字母间隔。
5. text-transform: uppercase(全大写) | lowercase(全小写) | capitalize(首字母大写) | none | inherit 文本转换。
6. text-decoration: none | [underline(下划线) || overline(上划线) || line-through(中划线)] | inherit 文本修饰。[注意]文本修饰线的颜色与文本颜色相同。
    1. 文本修饰属性无法继承，意味着子元素文本上的任何修饰线与父元素的颜色相同。子元素文本上的修饰线实际上是父元素的，只是正好"经过"而已。
    2. [注意]互不冲突的文本修饰线可出现多条。text-decoration: underline overline line-through;

在首行缩进(text-index)、水平对齐(text-align)、字间隔(word-spacing)、字母间隔(letter-spacing)、文本转换(text-transform)、文本修饰(text-decoration)这6种文本样式中，首行缩进(text-index)和水平对齐(text-align)只能够应用于块级元素(包括block和inline-block)

### 行高与垂直对齐

line-height、font-size、vertical-align是设置行内元素布局的关键属性。这三个属性是相互依赖的关系，改变行间距离、设置垂直对齐等都需要它们的通力合作。在CSS字体里面已经详细介绍了font-size的相关内容，本文将主要介绍line-height与vertical-align。本文涉及到的术语解释参考CSS视觉格式化。

line-height行高是指文本行基线之间的距离。行高line-height实际上只影响行内元素和其他行内内容，而不会直接影响块级元素，也可以为一个块级元素设置line-height，但这个值只是应用到块级元素的内联内容时才会有影响。在应用到块级元素时，line-height定义了元素文本基线之间的最小距离，即最小行高。

[注意]如果块级元素中的某一个子级内联元素设置的行高比最小行高大，则行框以设置行高来渲染；如果小，则以最小行高来渲染。因为，每一个子级内联元素的行高都是行内框的高度，只有一行中所有的行内元素(包括代表父级元素的匿名文本)，最大的行内框高度才能成为整行的行高。下面会有详细解释

https://www.cnblogs.com/xiaohuochai/p/5271217.html 【必要】

vertical-align用来设置垂直对齐方式，所有垂直对齐的元素都会影响行高。应用于: 行内元素、替换元素、表单元格

[注意]IE7-浏览器中vertical-align的百分比值不支持小数行高，且取baseline、middle、text-bottom等值时与标准浏览器在展示效果不一样，常用的解决办法是将行内元素设置display:inline-block

* vertical-align:baseline(元素的基线与父元素的基线对齐)
* vertical-align:sub(降低元素的基线到父元素合适的下标位置)
* vertical-align:super(升高元素的基线到父元素合适的上标位置)
* vertical-align:bottom(把对齐的子元素的底端与行框底端对齐)
* vertical-align:text-bottom(把元素的底端与父元素内容区域的底端对齐)
* vertical-align:top(把对齐的子元素的顶端与行框顶端对齐)
* vertical-align:text-top(把元素的顶端与父元素内容区域的顶端对齐)
* vertical-align:middle(元素的中垂点与父元素的基线加1/2父元素中字母X的高度对齐)
* vertical-align:(+-n)px(元素相对于基线上下偏移npx)
* vertical-align:x%(相对于元素的line-height值)
* vertical-align:inherit(从父元素继承vertical-align属性的值)

```html
<style>
    div { width: 300px; margin: 0 auto; border: 1px solid black; font-size: 20px; line-height: 30px; }
    div:nth-child(1) img { vertical-align: baseline; }
    div:nth-child(2) img { vertical-align: sub; }
    div:nth-child(3) img { vertical-align: super; }
    div:nth-child(4) img { vertical-align: bottom; }
    div:nth-child(5) img { vertical-align: text-bottom; }
    div:nth-child(6) img { vertical-align: top; }
    div:nth-child(7) img { vertical-align: text-top; }
    div:nth-child(8) img { vertical-align: middle; }
</style>
<div>
    <img src="https://demo.xiaohuochai.site/backup/vertical-align.png" alt="垂直对齐测试图片" height="10" width="10">
    <span>亚冠联赛(baseline)</span>
</div>
<div>
    <img src="https://demo.xiaohuochai.site/backup/vertical-align.png" alt="垂直对齐测试图片" height="10" width="10">
    <span>亚冠联赛(sub)</span>
</div>
<div>
    <img src="https://demo.xiaohuochai.site/backup/vertical-align.png" alt="垂直对齐测试图片" height="10" width="10">
    <span>亚冠联赛(super)</span>
</div>
<div>
    <img src="https://demo.xiaohuochai.site/backup/vertical-align.png" alt="垂直对齐测试图片" height="10" width="10">
    <span>亚冠联赛(bottom)</span>
</div>
<div>
    <img src="https://demo.xiaohuochai.site/backup/vertical-align.png" alt="垂直对齐测试图片" height="10" width="10">
    <span>亚冠联赛(text-bottom)</span>
</div>
<div>
    <img src="https://demo.xiaohuochai.site/backup/vertical-align.png" alt="垂直对齐测试图片" height="10" width="10">
    <span>亚冠联赛(top)</span>
</div>
<div>
    <img src="https://demo.xiaohuochai.site/backup/vertical-align.png" alt="垂直对齐测试图片" height="10" width="10">
    <span>亚冠联赛(text-top)</span>
</div>
<div>
    <img src="https://demo.xiaohuochai.site/backup/vertical-align.png" alt="垂直对齐测试图片" height="10" width="10">
    <span>亚冠联赛(middle)</span>
</div>
```

[注意]``<sub>和<sup>``默认携带样式vertical-align:sub/super

inline-block元素在块级元素中留空隙就是因为图像的默认垂直对齐方式是基线对齐(基线对齐在原理上相当于图像底边与匿名文本大写英文字母X的底边对齐)；而匿名文本是有行高的，继承父级元素设置的行高，默认为normal(即font-size的1.2倍)，所以X的底边距离行框有一段距离，这段距离就是图像留出的空隙。于是，解决这个问题有以下几个解决办法

1. display:block 因为垂直对齐方式只能作用于替换元素和行内元素，更改为块级元素，会使垂直对齐方式失效
2. 父级的line-height: 0 这样使匿名文本与行框的距离为0
3. vertical-align: top/middle/bottom

应用

1. **【单行文本水平垂直居中】** 仅仅设置line-height就行了
2. **【图片近似垂直居中】** div { line-height: 200px; text-align: center; } img { vertical-align: middle; } 由于字符X在em框中并不是垂直居中的，且各个字体的字符X的高低位置不一致。所以，当字体大小较大时，这种差异就更明显。[注意]IE7浏览器在写块级元素包含行内元素时一定要写成换行/空格写法，而不要写在一行
3. **【图片完全垂直居中】** 在方法2的基础上设置块级元素的font-size为0，则可以设置图片完全垂直居中
4. **【多行文本水平垂直居中】** 由于方法3设置font-size为0的局限性，块级元素里面无法放置文本。方法4主要通过新增元素来实现垂直居中效果，该方法也可用于图片的水平垂直居中
5. **【图标和文本对齐】**
    1. 使用长度负值 img { vertical-align: -5px; } 根据实践经验，20*20像素的图标后面跟14px的文字，vertical-align设置为-5px可以达到比较好的对齐效果
    2. 使用文本底部对齐 img { vertical-align: text-bottom; } 使用baseline会使图标偏上；使用top/bottom会受到其他行内元素影响造成定位偏差；使用middle需要恰好的字体大小且兼容性不高；使用text-bottom较合适，不受行高及其他内联元素影响

```html
<!-- 4 -->
<style>
    div { height: 100px; width: 200px; background-color: pink; text-align: center; }
    span { display:inline-block; vertical-align: middle; line-height: 20px; width: 100px; }
    i { display: inline-block; height: 100%; vertical-align: middle; }
</style>
<div>
    <i></i><span>我是特别长的特别长的特别长的特别长的多行文字</span>
</div>
```

父元素盒子设置line-height，他的baseline就根据line-height来。如果没设置line-height，他的baseline会根据他line-height变化而变化，主要表现为：

1. 子元素没设置vertical-align，父元素的line-height就根据字体的大小变化。
2. 子元素设置了vertical-align，父元素的当前行的高度就是子元素的高度（子元素的高度大于父元素的默认行高，否则仍是默认行高），

### 换行和空白符

CSS3新增了两个换行属性word-wrap和word-break。把空白符和换行放在一起说，是因为实际上空白符是包括换行的，且常用的文本不换行是使用的空白符的属性white-space: nowrap;到底它们还有些什么属性值，以及有什么对应的用法呢？本文就空白符和换行的内容做详细介绍和梳理。

1. 空白符 white-space: normal | nowrap | pre | pre-wrap | pre-line | inherit
    1. 空白符是指空格、制表符和回车；HTML默认已经把所有空白符合并成一个空格
    2. normal: 合并空白符，允许自动换行
    3. nowrap: 合并空白符，不允许自动换行
    4. pre-line: 合并空白符(不包括换行符)，允许自动换行
    5. pre: 不合并空白符，不允许自动换行
    6. pre-wrap: 不合并空白符，允许自动换行(在pre基础上，保留自动换行)
    7. [注意]``<pre>``元素默认带有样式white-space: pre;
    8. [注意]IE7-浏览器不支持pre-line和pre-wrap这两个属性值
    9. 应用于: 所有元素
2. 文本换行
    1. 浏览器自身带有文本自动换行的功能，文本容器的右侧可以实现自动换行
    2. 对于英文来说，浏览器会在半角空格或连字符的地方自动换行，而不会在单词的中间突然换行
    3. 对于中文来说，可以在任何一个文字后面换行，但浏览器碰到标点符号时，通常将标点符号以及其前一个文字作为一个整体进行换行
    4. 所以实际上，white-space解决不了长单词或URL地址的换行问题
    5. word-wrap: normal | break-word 用来实现长单词或URL地址的自动换行
        1. word-wrap:normal(浏览器只在半角空格或连字符的地方进行换行)
        2. word-wrap:break-word(截断单词换行，长单词从下一行开始)
        3. 应用于: 所有元素
        4. [注意]当white-space的值是nowrap或pre时，word-break和word-wrap属性都失效
        5. [注意]word-wrap在标准中被改为overflow-wrap，但由于兼容问题，一般还是使用word-wrap
    6. word-break: normal | break-all | keep-all 决定自动换行的处理方法。通过具体的属性设置，不仅可以让浏览器实现半角空格或连字符后面的换行，而且还可以让浏览器实现任意位置的换行。
        1. 应用于: 所有元素
        2. normal: 中文到边界上的汉字换行，英文从整个单词换行
        3. break-all: 对于英文长单词来说，会截断单词换行，长单词占据当前行剩余空间。但对于中文的处理，各浏览器不一致
            1. [1]firefox及safari: 中文到边界上的汉字换行，且允许标点置于段首
            2. [2]IE及chrome: 中文到边界上的汉字换行，但不允许标点置于段首
        4. keep-all: 对于英文长文本不能换行，但对于中文的处理，各浏览器不一致
            1. [1]firefox: 在空白符处换行
            2. [2]IE及chrome: 在空白符及标点处换行
            3. [3]safari: 不支持
        5. [注意]移动端目前基本都不支持keep-all值　　
        6. [注意]当word-break值为break-all时，word-wrap属性失效；否则两个属性都起作用
3. 对于表单元格的长文本来说，使用word-wrap或word-break来强制换行需要设置table-layout:fixed
4. 伪元素换行 -- 有一个Unicode字符，是专门代表换行符的:0x000A，在CSS中，写作'\000A'，可以简写为'\A'。但是，由于浏览器会合并空白符。因此，需要使用pre来阻止空白符的合并。

```html
<style>
    dt,dd{display:inline;}
    dd{margin: 0;font-weight:bold;}
    dd+dt::before{content:'\A';white-space:pre;}
    dd+dd::before{content:',';font-weight:normal;}
</style>
<dl>
  <dt>姓名:</dt>
  <dd>小火柴</dd>
  <dt>邮箱:</dt>
  <dd>123@qq.com</dd>
  <dd>123@163.com</dd>
</dl>
```

我个人理解，空白符(white-space)最常用的功能是nowrap，即不换行；而CSS3新增的两个属性word-wrap和word-break主要用于解决长文本换行的问题。word-wrap:break-word截断长文本换行，长文本从下一行开始；word-break:break-all也用于截断长文本换行，但长文本会占据当前行剩余空间

当然，空白符(white-space)除了nowrap，还有其他的一些属性值。word-wrap和word-break也有针对中文的处理。但由于浏览器兼容器问题，用的并不是太多

### 文本溢出和文本阴影

1. 文本溢出。一般地，人们一提到文本溢出，想到的就是文本溢出的经典代码 ``white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`` 但实际上，文本换行不一定非要使用white-space；overflow属性值也不一定非要使用hidden
    1. 定义 -- text-overflow: clip | ellipsis 应用于: 块级元素、替换元素、表单元格。
        1. clip: 不显示省略标记(...)，只是简单的裁切，相当于无效果
        2. ellipsis: 文本溢出时显示省略标记(...)，省略标记插入的位置是最后一个字符
        3. [注意]当文本溢出属性应用于表单元格时，需要设置table-layout:fixed
        4. [注意]该属性兼容性很好，兼容IE6+的主流浏览器及移动端iso和android
    2. 实现 --
        1. 当存在长英文文本时，text-overflow属性起作用的前提是 ``overflow(或overflow-y或overflow-x):hidden | auto | scroll``
        2. 当文本为汉字时，text-overflow属性起作用的前提是 实现汉字不自动换行可使用word-break: keep-all; 或 white-space: nowrap; 然后 overflow(或overflow-y或overflow-x):hidden | auto | scroll
2. 多行文本溢出
    1. 在webkit浏览器中，有一个不规范的属性-webkit-line-clamp，它可以实现多行文本溢出。它的值是一个\<number>，设置为几，便可以设置相应数字的文本溢出
    2. 设置多行文本溢出，还需要配合其他样式，样式如下
    3. [注意]不要显式地设置高度，而应该让其自适应高度，否则会造成如下效果
3. 文本阴影
    1. 类似于盒子阴影，文本阴影也有x轴偏移、y轴偏移、模糊半径和阴影颜色这四个值，但是并没有阴影尺寸和内部阴影这两个值 text-shadow: none | (h-shadow v-shadow blur color)+
        1. h-shadow: 水平阴影位置(必须)
        2. v-shadow: 垂直阴影位置(必须)
        3. blur:     模糊距离(该值不能为负值，可选)
        4. color:    阴影颜色，默认和文本颜色一致(可选)
    2. [注意]不要加太多层阴影，会有性能问题
    3. 常见效果

```html
<style>
    /* 2.2 */ .test { /*溢出隐藏*/ overflow: hidden; /*旧版本flex*/ display: -webkit-box; /*旧版伸缩流方向为垂直方向*/ -webkit-box-orient: vertical; /*溢出隐藏3行*/ -webkit-line-clamp: 3; }
</style>
<div style="width:300px;" class='test'>
    我是测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
</div>
<!-- 2.3 -->
<div style="width: 300px; height: 75px;" class='test'>
    我是测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字
</div>
```

```html
<!-- 3.3 -->
<style>
    div { width: 200px; border: 1px solid black; font: 20px/40px "宋体"; }
    div:nth-child(1) { text-shadow: 5px 5px 5px #60f; }
    div:nth-child(2) { box-shadow: 1px 1px 2px 2px #ccc; text-shadow: 0 0 10px black; color: rgba(0, 0, 0, 0); }
    div:nth-child(3) { background-color: #666; color: #fff; text-shadow: 0 0 10px red; }
    div:nth-child(4) { background-color: #666; color: #fff; text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 40px #ff00de, 0 0 70px #ff00de; }
    div:nth-child(5) { background-color: #666; color: #000; text-shadow: 0 1px 1px #fff; font-weight: bold; }
    div:nth-child(6) { background-color: #666; color: #fff; text-shadow: -1px -1px 0 #fff, 1px 1px 0 #333, 1px 1px 0 #444; }
    div:nth-child(7) { color: #fff; text-shadow: 0px 0px 1px black; }
    div:nth-child(8) { background-color: #666; color: #fff; text-shadow: -1px -1px rgba(197, 223, 248, 0.8), -2px -2px rgba(197, 223, 248, 0.8), -3px -3px rgba(197, 223, 248, 0.8); }
    div:nth-child(9) { font-weight: bold; color: white; text-shadow: 0 0 4px #fefcc9, 2px -2px 6px #feec85, -4px -4px 8px #ffae34, 4px -8px 10px #ec760c, -4px -12px 12px #cd4606, 0 -16px 14px #973716, 2px -18px 18px #451b0e; }
</style>
<div>文字简单阴影效果</div>
<div>文字毛玻璃效果</div>
<div>文字外阴影效果</div>
<div>文字辉光效果</div>
<div>文字雕刻效果</div>
<div>文字浮雕效果</div>
<div>文字空心效果</div>
<div>文字3D效果</div>
<div>文字火焰效果</div>
```

## 颜色和背景

### 颜色模式

以前主要采用关键字、16进制和RGB这三种设置颜色的方式。CSS3出现后，增加了RGBA、HSL、HSLA这三种模式，极大地丰富了CSS颜色设置的方式。

CSS颜色关键字包括命名颜色、transparent、currentColor(currentColor顾名思义指当前颜色，准确来讲指当前的文字颜色)属性值。直接使用的名字的颜色值称为命名颜色。CSS支持17种合法命名颜色(标准颜色)：aqua fuchsia lime olive red white black gray maroon orange silver yellow blue green navy purple teal。[注意]浏览器支持140种颜色。[注意]IE7-不支持color:transparent，但支持background-color: transparent和border-color: transparent

web安全颜色是指在256色计算机系统上总能避免抖动的颜色，表示为RGB值20%和51(相应的16进制值为33)的倍数。因此，采用16进制时，使用00\33\66\99\cc\ff认为是Web安全色，一共6*6*6=216种

rgba模式是在RGB基础上增加了alpha通道，用来设置颜色的透明度，其中这个通道值的范围是0-1。0代表完全透明，1代表完全不透明。[注意]IE8-浏览器不支持。<br>
IE8-浏览器对新增的颜色模式并不支持，需要使用gradient滤镜。gradient滤镜的前两位表示Alpha透明度值(00-ff)，其中00表示全透明，ff表示完全不透明。后六位代表的是RGB模式。如果使用#A6DADC并且透明度为0.6的透明色(0.6*255=153，转换成16进制是99)，用gradient滤镜表示为 filter:progid:DXImageTransform.Microsoft.gradient(enabled = 'true',startColorstr="#99A6DADC",endColorstr="#99A6DADC") 。[注意]IE滤镜只能兼容背景色，而不能兼容前景色。

HSL模式是通过对色调(H)、饱和度(S)、亮度(L)三个颜色通道的变化以及它们相互的叠加得到各式各样的颜色。HSL标准几乎可以包括人类视力所能感知的所有颜色。[注意]IE8-浏览器不支持。<br>
hsl(h,s,l)

* h:色调(hue)可以为任意整数。0(或360或-360)表示红色，60表示黄色，120表示绿色，180表示青色，240表示蓝色，300表示洋红(当h值大于360时，实际的值等于该值模360后的值)
* s:饱和度(saturation)，就是指颜色的深浅度和鲜艳程度。取0-100%范围的值，其中0表示灰度(没有该颜色)，100%表示饱和度最高(颜色最鲜艳)
* l:亮度(lightness)，取0-100%范围的值，其中0表示最暗(黑色)，100%表示最亮(白色)

HSLA模式是HSL的扩展模式，在HSL的基础上增加一个透明通道alpha来设置透明度。[注意]IE8-浏览器不支持。hsla(<length>,<percentage>,<percentage>,<opacity>)

### 颜色模式转换器

1. 16进制 -> RGB

```js
function sixteenToRgb(str){
    var r, g, b, rgb;
    if (str.length == 7) {
        r = parseInt(str.substr(1, 2), 16);
        g = parseInt(str.substr(3, 2), 16);
        b = parseInt(str.substr(5, 2), 16);
    } else if (str.length == 4) {
        r = parseInt('' + str.substr(1, 1) + str.substr(1, 1), 16);
        g = parseInt('' + str.substr(2, 1) + str.substr(2, 1), 16);
        b = parseInt('' + str.substr(3, 1) + str.substr(3, 1), 16);
    } else {
        return 'false'
    }
    rgb = 'rgb(' + r +',' + g +','+b +')';
    return rgb;
}
console.log(sixteenToRgb('#123456'));  // rgb(18,52,86)
console.log(sixteenToRgb('#123'));  // rgb(17,34,51)
console.log(sixteenToRgb('#1234'));  // false
```

2. RGB -> 16进制

```js
function rgbToSixteen(str){
    var r16, g16, b16, sixteen;
    if(/^rgb\( *(\d+)\, *(\d+)\, *(\d+) *\)$/.test(str)){
           if (RegExp.$1 >= 0 && RegExp.$1 <= 255 || RegExp.$2 >= 0 && RegExp.$2 <= 255 || RegExp.$3 >= 0 && RegExp.$3 <= 255) {
               r16 = addZero(Number(RegExp.$1).toString(16));
               g16 = addZero(Number(RegExp.$2).toString(16));
               b16 = addZero(Number(RegExp.$3).toString(16));
            　 sixteen = '#' + r16 + g16 + b16 ;
            　 return sixteen;
           } else {
               return 'false';
           }
    } else {
        return 'false';
    }
}
function addZero(str) {
    return str.length == 1 ? '0' + str : str;
}
console.log(rgbToSixteen('rgb(10, 44, 3)'));  // #0a2c03
console.log(rgbToSixteen('rgb(-10, 44, 3)'));  // false
console.log(rgbToSixteen('rgb(123)'));  // false
```

3. HSL -> RGB

```js
// 参考http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
function hslToRgb(str) {
    var r, g, b;
    var h, s, l;
    if (/^hsl\( *(\d+)\, *(\d+)%\, *(\d+)% *\)$/.test(str)) {
        if (RegExp.$1 >= 0 && RegExp.$1 <= 360 && RegExp.$2 >= 0 && RegExp.$2 <= 100 && RegExp.$3 >= 0 && RegExp.$3 <= 100) {
            h = RegExp.$1 / 360;
            s = RegExp.$2 / 100;
            l = RegExp.$3 / 100;
            if (s == 0) {
                r = g = b = l;
            } else {
                var hue2rgb = function hue2rgb(p, q, t) {
                    if (t < 0) t += 1;
                    if (t > 1) t -= 1;
                    if (t < 1 / 6) return p + (q - p) * 6 * t;
                    if (t < 1 / 2) return q;
                    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                    return p;
                }
                var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                var p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
            return 'rgb(' + Math.round(r * 255) + ',' + Math.round(g * 255) + ',' + Math.round(b * 255) + ')';
        }
    }
    return 'false';
}
console.log(hslToRgb('hsl(248,64%,39%)'));  // rgb(53,36,163)
console.log(hslToRgb('hsl(-248,64%,39%)'));  // false
console.log(hslToRgb('hsl(300,40%,50%)'));  // rgb(179,77,178)
```

4. RGB -> HSL

```js
// 参考http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
function rgbToHsl(str) {
    var r, g, b;
    if (/^rgb\((\d+)\,(\d+)\,(\d+)\)$/.test(str)) {
        if (RegExp.$1 >= 0 && RegExp.$1 <= 255 && RegExp.$2 >= 0 && RegExp.$2 <= 255 && RegExp.$3 >= 0 && RegExp.$3 <= 255) {
            r = RegExp.$1 / 255, g = RegExp.$2 / 255, b = RegExp.$3 / 255;
            var max = Math.max(r, g, b), min = Math.min(r, g, b);
            var h, s, l = (max + min) / 2;

            if (max == min) {
                h = s = 0; // achromatic
            } else {
                var d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            return 'hsl(' + Math.round(h * 360) + ',' + Math.round(s * 100) + '%,' + Math.round(l * 100) + '%)';
        }
    }
    return 'false';
}
console.log(rgbToHsl('rgb(53,36,163)'));  // hsl(248,64%,39%)
console.log(rgbToHsl('rgb(179,77,178)'));  // hsl(301,40%,50%)
console.log(rgbToHsl('rgb(300,1,1)'));  // false
```

5. 简单拾色器

```html
<style>
    .show { border: 4px solid black; border-radius: 4px; width: 300px; margin-top: 10px; }
    .show div { height: 40px; line-height: 40px; width: 260px; margin-top: 10px; font-size: 20px; }
    @media (max-width:700px) { .show { width: 100%; } }
</style>
<input id="color" type="color">
<div class="show">
    <div id="sixteen">16进制值:#000000</div>
    <div id="rgb">RGB值:rgb(0,0,0)</div>
    <div id="hsl">HSL值:hsl(0,0%,0%)</div>
</div>
<script>
    function sixteenToRgb(str) {
        var r, g, b, rgb;
        if (str.length == 7) {
            r = parseInt(str.substr(1, 2), 16);
            g = parseInt(str.substr(3, 2), 16);
            b = parseInt(str.substr(5, 2), 16);
        } else if (str.length == 4) {
            r = parseInt('' + str.substr(1, 1) + str.substr(1, 1), 16);
            g = parseInt('' + str.substr(2, 1) + str.substr(2, 1), 16);
            b = parseInt('' + str.substr(3, 1) + str.substr(3, 1), 16);
        } else {
            return 'false'
        }
        rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        return rgb;
    }
    function rgbToHsl(str) {
        var r, g, b;
        if (/^rgb\( *(\d+)\, *(\d+)\, *(\d+) *\)$/.test(str)) {
            if (RegExp.$1 >= 0 && RegExp.$1 <= 255 && RegExp.$2 >= 0 && RegExp.$2 <= 255 && RegExp.$3 >= 0 && RegExp.$3 <= 255) {
                r = RegExp.$1 / 255, g = RegExp.$2 / 255, b = RegExp.$3 / 255;
                var max = Math.max(r, g, b),
                    min = Math.min(r, g, b);
                var h, s, l = (max + min) / 2;
                if (max == min) {
                    h = s = 0; // achromatic
                } else {
                    var d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                        case g: h = (b - r) / d + 2; break;
                        case b: h = (r - g) / d + 4; break;
                    }
                    h /= 6;
                }
                return 'hsl(' + Math.round(h * 360) + ',' + Math.round(s * 100) + '%,' + Math.round(l * 100) + '%)';
            }
        }
        return 'false';
    }
    color.onchange = function () {
        sixteen.innerHTML = '16进制值:' + color.value;
        rgb.innerHTML = 'RGB值:' + sixteenToRgb(color.value);
        hsl.innerHTML = 'HSL值:' + rgbToHsl(sixteenToRgb(color.value));
    }
</script>
```

6. 16进制颜色转换器

```html
<style>
    ul { margin: 0; padding: 0; list-style: none; }
    .con { float: left; width: 304px; border: 2px solid black; overflow: hidden; padding: 10px; border-radius: 10px; }
    .con li { float: left; width: 30px; height: 30px; line-height: 30px; font-size: 24px; background-color: rgba(0, 0, 0, 0.5); text-align: center; color: white; cursor: pointer; margin: 4px; }
    .show { float: left; width: 200px; height: 100px; line-height: 100px; font-size: 40px; background-color: rgba(0, 0, 0, 0.3); color: black; margin: 0 60px; text-align: center; }
    .color { border: 4px solid black; border-radius: 4px; width: 360px; margin-top: 10px; padding: 10px; }
    .color div { height: 40px; line-height: 40px; width: 300px; margin-top: 10px; font-size: 20px; }
    #btn, #reset { font-size: 18px; height: 30px; line-height: 22px; padding: 4px; }
    #sixteen { background-color: rgba(0, 0, 0, 0.2); width: 80px; display: inline-block; }
    @media (max-width:700px) {
        .box { width: 100%; box-sizing: border-box; }
        .show, .con { float: none; width: 100%; box-sizing: border-box; margin: 0; }
        .show { height: 60px; line-height: 60px; font-size: 30px; }
        .show-body { width: 100%; display: block; }
        .color { width: 100%; box-sizing: border-box; height: auto; line-height: 30px; }
        #input { width: 130px; font-size: 12px; }
        .con dt { margin: 0; }
        .con dl { margin: 0; width: 100%; }
        .con dl dd { float: left; width: 23%; margin: 1%; }
        #conUl { width: 100%; box-sizing: border-box; }
        .con li { font-size: 14px; }
        .color { font-size: 12px; }
    }
</style>
<div style="overflow: hidden">
    <ul class="con" id="con">
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
        <li>f</li>
    </ul>
    <div class="show" id="show">测试文字</div>
</div>
<div class="color">
    <div>16进制值:
        <span id="sixteen">#</span>
        <button id="btn">确定</button>
        <button id="reset">重置</button>
    </div>
    <div>RGB值:
        <span id="rgb"></span>
    </div>
    <div>HSL值:
        <span id="hsl"></span>
    </div>
</div>
<script>
    function sixteenToRgb(str) {
        var r, g, b, rgb;
        if (str.length == 7) {
            r = parseInt(str.substr(1, 2), 16);
            g = parseInt(str.substr(3, 2), 16);
            b = parseInt(str.substr(5, 2), 16);
        } else if (str.length == 4) {
            r = parseInt('' + str.substr(1, 1) + str.substr(1, 1), 16);
            g = parseInt('' + str.substr(2, 1) + str.substr(2, 1), 16);
            b = parseInt('' + str.substr(3, 1) + str.substr(3, 1), 16);
        } else {
            return 'false'
        }
        rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
        return rgb;
    }
    function rgbToHsl(str) {
        var r, g, b;
        if (/^rgb\( *(\d+)\, *(\d+)\, *(\d+) *\)$/.test(str)) {
            if (RegExp.$1 >= 0 && RegExp.$1 <= 255 && RegExp.$2 >= 0 && RegExp.$2 <= 255 && RegExp.$3 >= 0 && RegExp.$3 <= 255) {
                r = RegExp.$1 / 255, g = RegExp.$2 / 255, b = RegExp.$3 / 255;
                var max = Math.max(r, g, b), min = Math.min(r, g, b);
                var h, s, l = (max + min) / 2;
                if (max == min) {
                    h = s = 0; // achromatic
                } else {
                    var d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                        case g: h = (b - r) / d + 2; break;
                        case b: h = (r - g) / d + 4; break;
                    }
                    h /= 6;
                }
                return 'hsl(' + Math.round(h * 360) + ',' + Math.round(s * 100) + '%,' + Math.round(l * 100) + '%)';
            }
        }
        return 'false';
    }
    var mark = false;
    var conChildren = con.children;
    for (var i = 0; i < conChildren.length; i++) {
        conChildren[i].onclick = function () {
            if (mark) {
                sixteen.innerHTML = '#';
                show.style.color = 'white';
                mark = false;
            }
            sixteen.innerHTML += this.innerHTML;
        }
        conChildren[i].onmouseover = function () { this.style.color = "rgb(39,184,231)"; }
        conChildren[i].onmouseout = function () { this.style.color = "white"; }
    }
    reset.onclick = function () {
        sixteen.innerHTML = '#';
        rgb.innerHTML = hsl.innerHTML = '';
        show.style.color = 'white';
    }
    btn.onclick = function () {
        if (sixteen.innerHTML.length == '7' || sixteen.innerHTML.length == '4') {
            show.style.color = sixteen.innerHTML;
            rgb.innerHTML = sixteenToRgb(sixteen.innerHTML);
            hsl.innerHTML = rgbToHsl(rgb.innerHTML);
            mark = true;
        } else {
            alert('输入的位数不正确，请重新输入');
            sixteen.innerHTML = '#';
            rgb.innerHTML = hsl.innerHTML = '';
        }
    }
</script>
```

7. https://www.cnblogs.com/xiaohuochai/p/5235336.html RGB颜色转换器
8. https://www.cnblogs.com/xiaohuochai/p/5235336.html HSL颜色转换器

### 前景色和透明度

* 前景是元素的文本，不过前景还包括元素周围的边框。有两种方式直接影响一个元素的前景色，可以使用color属性，也可以使用属性border-color设置边框颜色
* color是可以继承的，可以把文档中的所有正常文本设置为某种颜色，如通过声明body{color:red;}设置为红色。这会把所有没有其他样式的文本变成红色(如锚就不包含在内，锚有其自己的颜色样式)。但浏览器对表单类元素有预定义的颜色，使body颜色无法继承到表单类元素中
* opacity是CSS3中专门用来设置透明度的一个属性，opacity只能给整个元素设置一个透明度，并且其透明度直接会继承给其后代元素。值: value | inherit。value:默认值是1，可以取0-1的任意浮点数。其中，1表示完全不透明，0表示完全透明。
    * IE8-浏览器不支持opacity透明属性，可以使用其专用的滤镜来实现opacity透明属性的透明效果：filter:alpha(opacity=透明值)，该透明值是0-100之间的任意整

### 背景

1. background-color: \<color> | transparent | inherit
2. background-image: \<url> | none | inherit  会放在所指定的背景颜色之上。不过对于有alpha通道的图像格式，如PNG，可能会部分或完全透明，这会导致图像与背景色结合。另外，如果出于某种原因无法加载图像，背景色会取代图像
3. 背景平铺 -- 背景图像默认从一个元素的左上角padding-box开始平铺(background-repeat)，但其从各个方向朝外面平铺，包括border区域。背景平铺的属性值中space和round是CSS3新增的值。space表示背景图像的两端对齐平铺，多出来的空间用空白代替；round也表示背景图像的两端对齐平铺，但多出来的空间通过自身拉伸来填充。
    1. background-repeat: x-value y-value
    2. 值: repeat | repeat-x | repeat-y | no-repeat | space | round | inherit
    3. 初始值: repeat
    4. 应用于: 所有元素
    5. [注意]space和round这两个新增属性值firefox、safari和IE9-浏览器不支持
    6. [注意]背景平铺可以写空格间隔的两个值，分别代表横轴值和纵轴值，但这种写法IE8-浏览器不支持。
4. background-position
    1. 值: [[<percentage] | <length> | left | center | right] [<percentage>] | <length> | top | center | bottom ] ? ] || [[left | center | right] || [top | center | bottom]] | inherit
    2. 初始值: 0% 0%
    3. 应用于: 全部元素
    4. 百分数: 相对于元素和原图像的相应点
    5. x(水平方向):
        1. left: 图的左侧和元素左侧对齐
        2. center: 图的中间和元素中间对齐
        3. right: 图的右侧和元素右侧对齐
        4. 具体值：正值从左向右移动，负值从右向左移动
        5. 百分比：背景图像的x%对应元素的x%
    6. y(垂直方向):
        1. top: 图的顶部和元素顶部对齐
        2. center: 图的中间和元素中间对齐
        3. bottom: 图的底部和元素底部对齐
        4. 正值从上向下移动，负值从下向上移动
        5. 背景图像的y%对应元素的y% [注意]若只写了一个值，另一个值将是50%
    7. [注意]单一关键字：当某一方向的关键字为center时可省略
    8. [注意]页面左上角为原点(0,0)点。[注意]背景图像移出到元素范围外的部分不显示
    9. 【新用法】在CSS2.1中，背景定位只支持以左上角为参照进行定位，在CSS3中新增了可以选择参照方向的定位。第一个和第三个参数为要参照的方向，第二个和第四个参数为偏移值。如 background-position: left 10px bottom 10px
5. background-attachment: scroll(默认) | fixed | inherit
    1. scroll：背景图片会随着页面其余部分的滚动而移动。但如果它自己是可以滚动的元素，背景图不会随元素内容的滚动而滚动(默认值)
    2. fixed：原图像不会随文档滚动，且原图像的放置由可视区的大小确定，而不是由包含该图像的元素的大小 或在可视区中的位置决定。在浏览器中，随着用户调整浏览器窗口的大小，可视区可能会改变。这会导致背景的原图像随着窗口大小的改变移动位置。所以某种意义上说，图像并不是固定的，它只是在可视区大小不改变的情况下保持固定
    3. [注意]IE6-浏览器无法处理非body元素上的固定关系
    4. local：背景图片会随着页面其余部分的滚动而移动。但如果它自己是可以滚动的元素，背景图会随元素内容的滚动而滚动
    5. [注意]local属性值IE8-浏览器不支持
6. background-origin: padding-box || border-box || content-box 决定背景定位属性的参考原点，即决定背景图片定位的起点。[注意]IE8-浏览器不支持
    1. padding-box: 默认值，决定背景定位起始位置从padding的外边缘开始显示背景图片
    2. border-box: 决定背景定位起始位置从border的外边缘开始显示背景图片
    3. content-box: 决定背景定位起始位置从content的外边缘开始显示背景图片
    4. [注意]如果将background-attachment设置为fixed，background-origin将不起任何作用
7. background-clip: padding-box || border-box || content-box 定义背景图像的裁剪区域，[注意]IE8-浏览器不支持。在webkit内核下支持text属性，配合-webkit-text-fill-color: transparent;的属性可以使文字颜色呈现背景图像的效果
8. background-size: auto || \<length> || <percentage> || cover || contain 。 \<percentage>: 取百分比，相对于元素的宽度和padding的总和来计算
    1. 指定背景图片的尺寸，可以控制背景图片在水平和垂直两个方向的缩放，也可以控制图片拉伸覆盖背景区域的方式，甚至还可以截取背景图片。背景图片能够自适应元素盒子的大小，实现与模块大小完全适应的背景图片，避免了因区块尺寸不同而需要设计不同的背景图片。[注意]IE8-浏览器不支持
    2. 背景尺寸的特性有如下用途:在流体布局或者响应式布局中，确保背景图像能够始终适配容器大小；对于平铺的重复性背景图像，可以确保背景图像不会有截断效果；在流体布局中缩放背景图像来伪造出多列分栏效果；解决Retina屏幕双倍像素下背景图像模糊问题；使用链接或者列表元素的背景图像能和文本一起进行缩放
    3. 当背景尺寸属性为固定数值或百分比值时可以设置两个值，也可以设置一个值。只取一个值时，指定了背景图片的宽度，第二个值相当于auto，也就是指定了高度。在这种情况下，auto值设定之后能够让背景图片的高度自动地按照比例缩放
    4. cover: 将背景图片放大，以适合铺满整个容器。但这种方法会致使背景图片失真。常与background-position: center配合来制作满屏背景效果。缺点是需要制作一张足够大的背景图片，否则在较大分辨率浏览器下会使背景图片失真
    5. contain: 保持背景图像本身的宽度比例，将背景图像缩放到宽度或高度正好适应所定义背景容器的区域
9. 【多背景】在使用CSS3之前，每个容器只能指定一张背景图像，因此每当需要增加一张背景图像时，必须至少添加一个容器来容纳它。使用伪元素显示附加图片其实就是嵌套HTML标签实现多背景图像的变身，通过:after和:before等伪元素生成附加元素来放置背景图像，表面上比直接嵌套HTML标签更干净一些，但其实是换汤不换药。[注意]IE8-浏览器不支持
    1. 通过CSS3的多背景属性，HTML标记就不需要任何修改，在CSS的background-image或者background属性中列出需要使用的所有背景图像，用逗号分隔开。而且每张图片都具有background中的属性。
    2. CSS3多背景有层次之分，按照浏览器中显示时图像叠放的顺序从上到下指定，最先声明的背景图像将会居于最上层，最后指定的背景图像将置于最底层
    3. 除了背景颜色之外，其他的属性都可以设置多个属性值，前提是元素有多个背景图像存在
    4. 对于不兼容多背景的浏览器来说，多背景属性写在单一背景属性的后面，而且还要确保这张单一背景图像确实可用。这是处理兼容CSS3多背景特性兼容的常用方案
    5. background: [background-image] | [background-color] | [background-position][/background-size] | [background-repeat] | [background-attachment] | [background-origin] | [background-clip],*
    6. [注意]若background在background-origin和background-clip中仅存在一个值，则该值为background-clip；若存在两个值，则前面为background-origin，后面为background-clip
10.[注意]所有背景属性都不能继承

### 光标

cursor: [<uri>,]*[auto | default | pointer | crosshair | move | e-resize | ne-resize | nw-resize | n-resize | se-resize | sw-resize | s-resize | w-resize | text | wait | help | progress]] | inherit

* 标准样式（css2）
    * url: 自定义光标的URL
    * default: 默认光标，通常是一个箭头
    * auto: 浏览器自动识别的光标
    * crosshair : 十字线
    * pointer: 手型指针
    * move: 移动指针
    * e-resize: 向东移动指针
    * ne-resize: 向东北移动指针
    * nw-resize: 向西北移动指针
    * n-resize: 向北移动指针
    * se-resize: 向东南移动指针
    * sw-resize: 向西南移动指针
    * s-resize: 向南移动指针
    * w-resize: 向西移动指针
    * text: 文本指针
    * wait: 指示程序正忙
    * help: 帮助指针
* 拓展样式（css3）[注意]所有拓展样式IE7-浏览器都不支持
    * cursor:none (not IE8, Safari)
    * cursor:context-menu (not Safari,Firefox,Chrome)
    * cursor:cell (not Safari)
    * cursor:alias (not Safari)
    * cursor:copy (not IE,Safari)
    * cursor:grab (not IE,Safari,Chrome)
    * cursor:grabbing (not IE,Safari,Chrome)
    * cursor:zoom-in (not IE,Safari)
    * cursor:zoom-out (not IE,Safari)
    * cursor:vertical-text
    * cursor:no-drop
    * cursor:not-allowed
    * cursor:all-scroll
    * cursor:ew-resize
    * cursor:ns-resize
    * cursor:nesw-resize
    * cursor:nwse-resize
    * cursor:col-resize
    * cursor:row-resize
* 私有样式 有些浏览器还提供了增加浏览器前缀的私有样式 [注意]safari将-webkit-grab和-webkit-grabbing都解释为default
    * cursor:-webkit-grab; cursor: -moz-grab;
    * cursor:-webkit-grabbing; cursor: -moz-grabbing;
    * cursor:-webkit-zoom-in; cursor: -moz-zoom-in;
    * cursor:-webkit-zoom-out; cursor: -moz-zoom-out;
* 自定义样式 所有浏览器都支持使用后缀名为.cur的文件，chrome、firefox、safari还支持使用普通图片制作光标 [注意]使用URL自定义样式，后面必须跟有一个逗号和某个通用关键字
    * 错误 cursor: url('m.cur');
    * 正确 cursor: url('m.cur'),auto;
* 常见应用
    * 链接的默认光标是手型指针pointer，通过光标的变化可以让访问者清楚的知道该元素是可点击的
    * 元素的title属性用来提供元素的额外信息，配合help光标可以得到更好的表现方式

## 变形和动画

### 过渡transition

* 过渡transition是一个复合属性，包括transition-property、transition-duration、transition-timing-function、transition-delay这四个子属性。通过这四个子属性的配合来完成一个完整的过渡效果
    * transition-property: 过渡属性(默认值为all)
    * transition-duration: 过渡持续时间(默认值为0s) 过渡transition的这四个子属性只有transition-duration是必需值且不能为0。单位是秒s或毫秒ms。[注意]该值为单值时，即所有过渡属性都对应同样时间；该值为多值时，过渡属性按照顺序对应持续时间
    * transiton-timing-function: 过渡函数(默认值为ease函数)。过渡时间函数共三种取值，分别是关键字、steps函数和bezier函数
        * 【重点】steps步进函数将过渡时间划分成大小相等的时间时隔来运行 steps(\<integer>[,start | end]?) 第二个参数: 该参数可选，默认是end，表示开始值保持一次；若参数为start，表示开始不保持
        * 【重点】贝塞尔曲线通过p0-p3四个控制点来控制，其中p0表示(0,0)，p3表示(1,1)。而<transition-timing-function>就是通过确定p1(x1,y1)和p2(x2,y2)的值来确定的 cubic-bezier(x1,y1,x2,y2); [注意]x1,y1,x2,y2都是0到1的值(包括0和1)  【例子】：https://www.cnblogs.com/xiaohuochai/p/5347930.html
        * ease: 开始和结束慢，中间快。相当于cubic-bezier(0.25,0.1,0.25,1)
        * linear: 匀速。相当于cubic-bezier(0,0,1,1)
        * ease-in: 开始慢。相当于cubic-bezier(0.42,0,1,1)
        * ease-out: 结束慢。相当于cubic-bezier(0,0,0.58,1)
        * ease-in-out: 和ease类似，但比ease幅度大。相当于cubic-bezier(0.42,0,0.58,1)
        * step-start: 直接位于结束处。相当于steps(1,start)
        * step-end: 位于开始处经过时间间隔后结束。相当于steps(1,end)
    * transition-delay: 过渡延迟时间(默认值为0s)。单位是秒s或毫秒ms
    * [注意]IE9-不支持该属性，safari3.1-6、IOS3.2-6.1、android2.1-4.3需要添加-webkit-前缀；而其余高版本浏览器支持标准写法
    * transition: \<transition-property> || \<transition-duration> || \<transition-timing-function> || \<transition-delay>
    * transition的这四个子属性之间不能用逗号隔开，只能用空格隔开。因为逗号隔开的代表不同的属性(transition属性支持多值，多值部分稍后介绍)；而空格隔开的代表不同属性的四个关于过渡的子属性
* 不是所有的CSS样式值都可以过渡，只有具有中间值的属性才具备过渡效果
    * 颜色: color background-color border-color outline-color
    * 位置: backround-position left right top bottom
    * 长度:
        * [1]max-height min-height max-width min-width height width
        * [2]border-width margin padding outline-width outline-offset
        * [3]font-size line-height text-indent vertical-align
        * [4]border-spacing letter-spacing word-spacing
    * 数字: opacity visibility z-index font-weight zoom
    * 组合: text-shadow transform box-shadow clip
    * 其他: gradient
* 多值
    * 若不同的transition-property值，对应的transition-delay | transition-timing-function | transition-duration的属性值都相同时，则对应的这些属性设置一个即可
    * 当transition-property值的个数多于对应的transition-delay | transition-timing-function | transition-duration的属性值(属性值的个数大于1个)时，将按顺序开始取值
    * 当transition-property值的个数少于对应的transition-delay | transition-timing-function | transition-duration的属性值个数时，多余的属性值将无效
    * 当transition-property的值中出现一个无效值，它依然按顺序对应transition的其他属性值(其他属性出现无效值，处理情况也类似)
    * 当transition-property的值中，有些值重复出现多次，则以最后出现的值为准，前面所有出现的值都被认定为无效值，但依然按顺序对应transition的其他属性值
* 过渡阶段
    * 【1】过渡开始时间=样式改变的时刻+过渡延迟时间；而过渡结束时间=过渡开始时间+过渡持续时间
    * 【2】过渡起始值=过渡前的过渡属性值；而过渡结束值=过渡完成后的过渡属性值
    * 【3】过渡分为两个阶段：前进(forward)和反向(reverse)。若前进阶段进行一段时间后进入反向阶段，则反向阶段的初始值是前进阶段结束时的瞬时值
    * 【4】以hover为例，若在元素非hover态时设置transition，相当于设置的反向状态。而前进和反向是一致的。而如果在元素hover态设置transition，则前进状态以hover态设置的为准，而反向状态以非hover态设置的为准
    * 【5 必要，重点，尝试】如果子元素和父元素过渡属性都一致。若触发子元素过渡时，父元素正在过渡，则将父元素过渡的中间态的值作为子元素过渡的初始值
    * 6】若过渡起始值或过渡开始值为auto，则浏览器不会自己计算成具体数字值，而是不发生过渡效果。所以要过渡某些属性，首先需要将其重置成具体数字值　[注意]低版本webkit内核浏览器存在bug，会产生反向的过渡效果
    * 【7】隐式过渡是指一个属性改变时引起另一个属性的改变。如border-width是1em，则font-size改变时，border-width也会相应的改变。firefox和IE浏览器支持隐式过渡。而webkit内核浏览器不支持隐式过渡。
* 触发方式
    * 一般地，过渡transition的触发有三种方式，分别是伪类触发、媒体查询触发和javascript触发。其中常用伪类触发包括:hover、:focus、:active等
    * hover 鼠标悬停触发
    * active 用户单击元素并按住鼠标时触发
    * focus 获得焦点时触发
    * @media触发 符合媒体查询条件时触发
    * 点击事件 用户点击元素时触发
* api
    * 关于过渡transition的事件只有一个，是transitionend事件，它发生在过渡事件完成后 [注意]safari3.1-6、ISO3.2-6.1、android2.1-4.3需要使用webkitTransitionEnd事件
    * transitionEnd的事件对象具有以下3个私有属性
        * propertyName：发生transition效果的CSS属性名
        * elapsedTime：代表发生实际效果的持续时间。若完整进行，则返回完整时间；若中途中断，则返回实际时间 [注意]该属性具有兼容性问题，chrome返回持续时间加延迟时间，而其他浏览器只返回持续时间
        * pseudoElement：如果transition效果发生在伪元素，会返回该伪元素的名称，以“::”开头。如果不发生在伪元素上，则返回一个空字符串'' [注意]若transition效果发生在伪元素上，IE浏览器将不会触发transitionEnd事件
    * 注意事项
        * 【1】过渡分为两个阶段：前进阶段和反向阶段。transitionend事件在前进阶段结束时会触发，在反向阶段结束时也会触发
        * 【2】过渡事件触发的次数与transition-property过渡属性的个数有关。过渡属性有几个就会触发几次
        * 【3】如果过渡属性是复合属性，如border-width相当于是border-top-width、border-bottom-width、border-left-width和border-right-width这四个属性的集合。则过渡事件触发4次 [注意]在低版本webkit内核浏览器里只触发1次
        * 【4】如果过渡属性是默认值all，则过渡事件的次数是计算后的非复合的过渡属性的个数。如果发生过渡的属性是border-width和width，则经过计算后过渡事件应该触发5次 [注意]在低版本webkit内核浏览器中处理情况也一致
        * 【5】如果过渡延迟时间为负值，且绝对值大于等于过渡持续时间时，低版本webkit内核浏览器不会产生过渡效果，但会触发过渡事件；而其他浏览器即不会产生过渡效果，也不会触发过渡事件
        * 【6】如果过渡属性存在复合属性及该复合属性包含的非复合属性，则浏览器计算复合属性的子属性时，不会重复计算已包含的属性 [注意]低版本webkit内核浏览器会出现bug，不仅复合属性被当作一个属性来触发事件，而且会多触发一次
        * [注意]当过渡事件执行完后，应及时使用removeEventListener取消绑定，以免对其他效果造成影响

```css
/* 多值 1 */
#test1 { transition-property: width,background; transition-delay: 200ms; transition-timing-function: linear; transition-duration: 2s; } /*类似于*/
#test2 { transition: width 2s linear 200ms,background 2s linear 200ms; }
/* 多值 2 */
#test1 { transition-property: width,background,opacity; transition-duration: 2s,500ms; transition-timing-function: linear,ease; transition-delay: 200ms,0s; } /*类似于*/
#test2 { transition: width 2s linear 200ms,background 500ms ease 0s,opacity 2s linear 200ms; }
/* 多值 3 */
#test1 { transition-property: width; transition-duration: 2s,500ms; transition-timing-function: linear,ease; transition-delay: 200ms,0s; } /*类似于*/
#test2 { transition: width 2s linear 200ms; }
/* 多值 4 */
#test1 { transition-property: width,wuxiao,background; transition-duration: 2s,500ms; transition-timing-function: linear,ease; transition-delay: 200ms,0s; } /*类似于*/
#test2 { transition: width 2s linear 200ms,background 2s linear 200ms; }
/* 多值 5 */
#test1 { transition-property: width,width,background; transition-duration: 2s,500ms; transition-timing-function: linear,ease; transition-delay: 200ms,0s; } /*类似于*/
#test2 { transition: width 500ms ease 0s,background 2s linear 200ms; }
```

```css
/* 过渡阶段 4 */
.test { width: 100px; transition: 3s; }  /* 进入hover时用时0.5s，退出hover用时3s */
.test:hover { width: 500px; transition: 500ms; }
/* 过渡阶段 5 */
.box:hover { font-size: 50px; }
.test:hover { font-size: 30px; }
/* 过渡阶段 7 */
.test { border: 1px solid black; -webkit-transition: font-size 2s; transition:font-size 2s; font: 20px/100px "宋体"; }
.test:hover{ font-size: 40px; border-right-width: 1em; }
```

### 变形transform(2d)

1. transform-origin: x轴 y轴 z轴。初始值: 50% 50%。应用于: 非inline元素(包括block、inline-block、table、table-cell等)。
    1. [注意]IE9-浏览器不支持，safari3.1-8、android2.1-4.4.4、IOS3.2-8.4都需要添加前缀，其他更高版本浏览器可使用标准写法。
    2. 2维的变形原点transform-origin是由x轴和y轴两个轴的值共同确定的(不考虑3维的情况，z轴的值默认为0)
    3. x轴: left | center | right | <length> | <percentage>
    4. y轴: top | center | bottom | <length> | <percentage>
2. transform: translate | scale | rotate | skew | matrix | none
    1. 应用于: 非inline元素(包括block、inline-block、table、table-cell等)
    2. [注意]transform中出现多个变形函数时用空格分隔
    3. [注意]位移、缩放、旋转和倾斜这四个操作中除了位移与变形原点无关，其余三个都与变形原点有关
    4. 实际上，位移、缩放、旋转和倾斜这四个操作都是通过矩阵matrix实现的。matrix(a,b,c,d,e,f)函数有a,b,c,d,e,f这6个参数。而x和y是变形前元素的任意点。通过以下矩阵变换，生成对应的新坐标x'和y'。
        1. x' = ax + cy + e;
        2. y' = bx + dy + f;
    5. 由此可得到默认a、d为1，b、c、e、f为0。a和d控制缩放，且不可为0；c和b控制倾斜；而e和f控制位移
    6. [注意]matrix()方法的最后两个参数，对于chrome浏览器来说，默认是px单位，可以不写单位。但是，在firefox浏览器下，需要添加单位
    7. [注意]位移函数相当于matrix(1,0,0,1,x,y) 位移函数还可以接受百分比。其中x%相对于元素水平方向的宽度和，y%相对于元素垂直方向的高度和 [注意]IE10浏览器有bug，元素的位移函数的百分比是相对于元素的可视宽高(不包括边框)而言的
    8. [注意]缩放函数相当于matrix(x,0,0,y,0,0)
    9. [注意]倾斜函数相当于matrix(1,tany,tanx,1,0,0)
    10. rotate(N deg)[注意]当N为正数时，元素进行顺时针旋转；当N为负数时，元素进行逆时针旋转。[注意]旋转函数相当于matrix(cosN,sinN,-sinN,cosN,0,0)
    11. transform变形可以接受多值，出现多个变形函数时用空格分隔，并且按照从前往后的顺序执行。
    12. 多个变形函数的先后关系可以转换为多个元素的嵌套关系
        1. ``<div style="transform:rotate(45deg) translateX(100px)"></div>`` 相当于 ``<div style="transform:rotate(45deg)"><div style="transform:translateX(100px)"></div></div>``
        2. 变形transform中的多个变形函数的执行顺序是从前向后依次执行
            1. 第一种情况:旋转45deg后，元素的x轴正向变成右下45deg，所以元素接下来的位移向这个方向移动
            2. 第二种情况:元素向右移动100px后，元素的原点跟着元素一起平移，并一直在元素的中心位置，所以元素接下来的旋转是原地旋转

```html
<style>
    body { font: large '宋体'; }
    dl, dt, dd { margin: 0; padding: 0; }
    .container { width: 560px; overflow: hidden; background-color: #ccc; padding: 10px; }
    .show { width: calc(40% - 10px); float: left; margin-right: 10px; cursor: pointer; }
    .show .show-title { font: larger '宋体'; text-align: center; margin-bottom: 10px; }
    .show .show-main { width: 100px; height: 100px; border: 3px solid black; background-color: #f5c3cb; margin: 0 auto 10px; transition-duration: 1s; }
    .show .show-main:hover { transform: rotate(90deg); }
    .show .show-tips { color: red; }
    .control { width: 60%; float: left; }
    .control dl > dt { font: larger '宋体'; text-align: center; margin-bottom: 10px; }
    .control dl > dd { display: inline-block; padding: 5px 10px; background-color: #e7e7e7; margin: 0 5px 10px; cursor: pointer; }
    .control .control-item { font: small '黑体'; color: white; border-radius: 5px; background-color: #888; padding: 5px; }
    .control .control-item + .control-item { margin-top: 10px; }
    .control .control-item > button { width: 60px; }
    .control .control-item > button, .control .control-item > input { float: right; margin-left: 5px; }
    .control .control2 > input { width: 120px; }
    .control .control3 > input { width: 60px; }
    .page-container { height: 430px; overflow: hidden; }
    .page { width: 100%; height: 100%; }
    .nav { padding: 10px; width: 60%; float: right; text-align: center; }
    .nav-in { display: inline-block; width:20px; line-height: 20px; border:1px solid black; background-color: #aaa; color: white; text-decoration: none; }
</style>
<div class="container">
    <div class="show">
        <div class="show-title">transform</div>
        <div class="show-main"></div>
        <div class="show-tips"></div>
    </div>
    <div class="control page-container">
        <div class="page" id="page1">
            <dl class="select-item select2">
                <dt>transform-origin-x</dt>
                <dd>center</dd>
                <dd>left</dd>
                <dd>right</dd>
            </dl>
            <dl class="select-item select2">
                <dt>transform-origin-y</dt>
                <dd>center</dd>
                <dd>top</dd>
                <dd>bottom</dd>
            </dl>
            <div class="control-item control2" data-attr="transformOrigin">
                <label for="transformOrigin">transform-origin</label>
                <button type="button">sure</button>
                <input type="text" name="transformOrigin" id="transformOrigin">
            </div>
            <div class="control-item control3">
                <label for="transformOriginX">transform-origin-x</label>
                <button type="button">0px</button>
                <input type="number" name="transformOriginX" id="transformOriginX">
                <input type="range" max="100" min="0" value="0">
            </div>
            <div class="control-item control3">
                <label for="transformOriginY">transform-origin-y</label>
                <button type="button">0px</button>
                <input type="number" name="transformOriginY" id="transformOriginY">
                <input type="range" max="100" min="0" value="0">
            </div>
            <div class="control-item control3">
                <label for="transformOriginX2">transform-origin-x</label>
                <button type="button">0%</button>
                <input type="number" name="transformOriginX2" id="transformOriginX2">
                <input type="range" max="100" min="0" value="0">
            </div>
            <div class="control-item control3">
                <label for="transformOriginY2">transform-origin-y</label>
                <button type="button">0%</button>
                <input type="number" name="transformOriginY2" id="transformOriginY2">
                <input type="range" max="100" min="0" value="0">
            </div>
        </div>
        <div class="page" id="page2">
            <div class="control-item control2" data-attr="transform">
                <label for="transform">transform</label>
                <button type="button">sure</button>
                <input type="text" name="transform" id="transform">
            </div>
            <div class="control-item control3">
                <label for="transformMatrixA">transform-matrix-a</label>
                <button type="button">1</button>
                <input type="number" name="transformMatrixA" id="transformMatrixA">
                <input type="range" max="100" min="0" value="1">
            </div>
            <div class="control-item control3">
                <label for="transformMatrixB">transform-matrix-b</label>
                <button type="button">0</button>
                <input type="number" name="transformMatrixB" id="transformMatrixB">
                <input type="range" max="100" min="0" value="0">
            </div>
            <div class="control-item control3">
                <label for="transformMatrixC">transform-matrix-c</label>
                <button type="button">0</button>
                <input type="number" name="transformMatrixC" id="transformMatrixC">
                <input type="range" max="100" min="0" value="0">
            </div>
            <div class="control-item control3">
                <label for="transformMatrixD">transform-matrix-d</label>
                <button type="button">1</button>
                <input type="number" name="transformMatrixD" id="transformMatrixD">
                <input type="range" max="100" min="0" value="1">
            </div>
            <div class="control-item control3">
                <label for="transformMatrixE">transform-matrix-e</label>
                <button type="button">0</button>
                <input type="number" name="transformMatrixE" id="transformMatrixE">
                <input type="range" max="100" min="0" value="0">
            </div>
            <div class="control-item control3">
                <label for="transformMatrixF">transform-matrix-f</label>
                <button type="button">0</button>
                <input type="number" name="transformOriginF" id="transformOriginF">
                <input type="range" max="100" min="0" value="0">
            </div>
        </div>
    </div>
    <nav class="nav">
        <a class="nav-in" href="#page1">1</a>
        <a class="nav-in" href="#page2">2</a>
    </nav>
    <button id="reset" type="button" onclick="history.go();" style="margin-top: 10px;">reset</button>
</div>
<script>
    (function () {
        var show = document.getElementsByClassName("show")[0]
        var tips = show.getElementsByClassName("show-tips")[0]
        var target = show.getElementsByClassName("show-main")[0]
        show.onclick = function (event) {
            if (event.target instanceof Text) {
                return
            }
            if (target != null) {
                target.style.outline = ''
            }
            target = event.target
            target.style.outline = '3px solid lightblue'
            console.log(target)
        }

        function attrObj() {
            var partNames = []
            var partInits = []
            Array.prototype.forEach.call(arguments, (item, index, arr) => {
                if (index > 1) {
                    (index % 2 == 0 ? partNames : partInits).push(item)
                }
            })
            var result = {
                'attrName': arguments[0],
                'separator': arguments[1],
                'partNames': partNames,
                'partInits': partInits,
                handle: function(partName, partValue, start, end) {
                    var str = ''
                    this[partName] = partValue
                    this.partNames.forEach((name, index, names) => str = str + (index == 0 ? '' : this.separator) + (this[name] ? this[name] : this.partInits[index]))
                    start = start || ''
                    end = end || ''
                    str = start + str + end
                    console.log(str)
                    target.style[this.attrName] = str
                    tips.innerText = target.style.cssText
                }
            }
            return result
        }

        var control = document.getElementsByClassName("control")[0]
        Array.prototype.forEach.call(control.getElementsByClassName("select-item"), (select, index, selects) => {
            select.index = 0
            var items = select.getElementsByTagName("dd")
            Array.prototype.forEach.call(items, (item, index2, items) => item.index = index2)
            items[0].style.cssText = 'color: white; background-color: black'
        })
        var selectCheck = function (callback) {
            return function (event) {
                var eventTarget = event.target
                if (eventTarget.tagName == 'DD' && eventTarget.index != this.index) {
                    callback(eventTarget, event)
                    eventTarget.style.cssText = 'color: white; background-color: black'
                    if (this.index >= 0) {
                        this.getElementsByTagName("dd")[this.index].style.cssText = 'color: black; background-color: #e7e7e7'
                    }
                    this.index = eventTarget.index
                }
            }
        }
        Array.prototype.forEach.call(control.getElementsByClassName("select1"), (select, index, selects) =>
            select.onclick = selectCheck(function (eventTarget) {
                target.style[this.dataset.attr] = eventTarget.innerText
                tips.innerText = target.style.cssText
        }))
        var selects2 = control.getElementsByClassName("select2")
        var transformOriginAttr = new attrObj('transformOrigin', ' ', 0, 'center', 1, 'center')
        selects2[0].onclick = selectCheck((eventTarget) => transformOriginAttr.handle(0, eventTarget.innerText))
        selects2[1].onclick = selectCheck((eventTarget) => transformOriginAttr.handle(1, eventTarget.innerText))

        Array.prototype.forEach.call(control.getElementsByClassName("control2"), (control, index, controls) =>
            control.getElementsByTagName("button")[0].onclick = function () {
                target.style[this.parentNode.dataset.attr] = this.nextElementSibling.value
                tips.innerText = target.style.cssText
        })

        var controlHandle = function(control, callback) {
            var button = control.getElementsByTagName("button")[0]
            var number = control.getElementsByTagName("input")[0]
            var range = control.getElementsByTagName("input")[1]
            button.value = 0
            number.onclick = range.onclick = number.onfocus = range.onfocus = number.onpropertychange = range.onpropertychange = number.oninput = range.oninput = button.onclick = function() {
                number.value = range.value = this.value
                callback(this.value)
            }
        }
        var controls3 = control.getElementsByClassName("control3")
        controlHandle(controls3[0], (value) => transformOriginAttr.handle(0, value + 'px'))
        controlHandle(controls3[1], (value) => transformOriginAttr.handle(1, value + 'px'))
        controlHandle(controls3[2], (value) => transformOriginAttr.handle(0, value + '%'))
        controlHandle(controls3[3], (value) => transformOriginAttr.handle(1, value + '%'))

        var transformAttr = new attrObj('transform', ',', 0, '1', 1, '0', 2, '0', 3, '1', 4, '0', 5, '0')
        controlHandle(controls3[4], (value) => transformAttr.handle(0, value, 'matrix(', ')'))
        controlHandle(controls3[5], (value) => transformAttr.handle(1, value, 'matrix(', ')'))
        controlHandle(controls3[6], (value) => transformAttr.handle(2, value, 'matrix(', ')'))
        controlHandle(controls3[7], (value) => transformAttr.handle(3, value, 'matrix(', ')'))
        controlHandle(controls3[8], (value) => transformAttr.handle(4, value, 'matrix(', ')'))
        controlHandle(controls3[9], (value) => transformAttr.handle(5, value, 'matrix(', ')'))

        Array.prototype.forEach.call(document.getElementsByClassName("nav"), (nav, index, navs) => {
            Array.prototype.forEach.call(nav.getElementsByClassName("nav-in"), (navIn, index2, nav) => navIn.index = index2)
            nav.index = 0
            nav.onclick = function (event) {
                var target = event.target
                if (target.classList.contains('nav-in')) {
                    this.getElementsByClassName("nav-in")[nav.index].style.cssText = 'border: 1px solid black;'
                    nav.index = target.index
                    target.style.cssText = 'border: 1px solid blue; box-shadow: lightblue 0px 0px 1px;'
                }
            }
            nav.getElementsByClassName("nav-in")[nav.index].style.cssText = 'border: 1px solid blue; box-shadow: lightblue 0px 0px 1px;'
        })
    })()
</script>
```

<iframe frameborder='0' width='100%' height='460px' src='./csses/transform.html'></iframe>

### 变形transform(3d)

3D变形的坐标轴则是x、y、z三条轴组成的立体空间，x轴正向、y轴正向、z轴正向分别朝向右、下和屏幕外。透视是transform变形3D中最重要的内容。如果不设置透视，元素的3D变形效果将无法实现。

下面以rotateX()旋转函数为例，rotateX(45deg)表示元素以X轴方向为轴沿顺时针旋转45角度<br>
左图是无变形和透视样式的原始效果，中图是设置变形和透视样式的效果，右图是设置变形但未设置透视样式的效果
```html
<style>
    div { height: 100px; width: 100px; }
</style>
<div style="border: 1px solid black; background-color: pink; float:left; margin-right: 10px; ">
    <div style="background-color: lightblue; "></div>
</div>
<div style="border: 1px solid black; background-color: pink; perspective: 200px; float:left; margin-right:10px; ">
    <div style="background-color: lightblue; transform: rotateX(45deg); "></div>
</div>
<div style="border: 1px solid black; background-color: pink; float:left; ">
    <div style="background-color: lightblue; transform: rotateX(45deg); "></div>
</div>
```
<iframe frameborder='0' width='100%' height='120px' src='./csses/transform3d-1.html'>

由以上三个图可说明，如果不设置透视，那么浏览器会将元素的3D变形操作投射垂直到2D视平面上，最终呈现出来的只是元素的宽高变化。要深入了解透视，需要了解观察者、被透视元素和变形元素这几个概念。

* 首先是变形元素，顾名思义，就是进行transform3D变形的元素，主要进行transform、transform-origin、backface-visibility等属性的设置
* 观察者是浏览器模拟出来的用来观察被透视元素的一个没有尺寸的点，观察者发出视线，类似于一个点光源发出光线
* 被透视元素也就是被观察者观察的元素，根据属性设置的不同，它有可能是变形元素本身，也可能是它的父级或祖先元素(后面会详细介绍)，主要进行perspective、perspective-origin等属性的设置

主要属性

1. **透视距离perspective**: none | <length>是指观察者沿着平行于z轴的视线与屏幕之间的距离，简称视距。应用于: 非inline元素(包括block、inline-block、table、table-cell等)
    1. [注意]透视perspective不可为0和负数，因为观察者与屏幕距离为0时或者在屏幕背面时是不可以观察到被透视元素的正面的
    2. [注意]透视perspective不可取百分比，因为百分比需要相对的元素，但z轴并没有可相对的元素尺寸
    3. 一般地，物体离得越远，显得越小。反映在perspective属性上，就是该属性值越大，元素的3d效果越不明显。(就像离一个人很近，甚至可以看到他的毛孔；如果离一个人很远，可能只看到一个轮廓)
    4. 设置透视perspective属性的元素就是被透视元素。一般地，该属性只能设置在变形元素的父级或祖先级。因为浏览器会为其子级的变形产生透视效果，但并不会为其自身产生透视效果
2. **透视原点perspective-origin**: 50% 50%是指观察者的位置，一般地，观察者位于与屏幕平行的另一个平面上，观察者始终是与屏幕垂直的。观察者的活动区域是被观察元素的盒模型区域。应用于: 非inline元素(包括block、inline-block、table、table-cell等)
    1. x轴: left | right | center | <percentage> | <length>
    2. y轴: top | bottom | center | <percentage> | <length>
    3. [注意]perspective-origin必须定义在设置perspective的元素上，也就是说必须设置在元素的父元素或祖先元素上
    4. 当只有一个值时，默认第二个值为center
3. 介绍完透视之后，接下来详细介绍关于变形3d的变形函数和变形原点。上篇博文详细介绍了2d变形函数。而3d变形函数也类似，包括**位移、旋转和缩放**，没有倾斜。
    1. [注意]倾斜skew()是二维变形，不能在三维空间变形，元素可能会在x轴和y轴倾斜，但不能在z轴倾斜。
    2. 3d变形函数位移、旋转和缩放都是通过矩阵设置不同的参数而实现的。相比于2d矩阵martrix()的6个参数而言，3d矩阵matrix3d却有12个参数。其变形规则与2dmatrix()类似，只不过是从3*3矩阵，变成了4*4矩阵。matrix3d(a,b,c,0,d,e,f,0,g,h,i,0,j,k,l,1)
        1. x2 = ax + by + cz + j
        2. y2 = dx + ey + fz + k
        3. z3 = gx + hy + iz + l
    3. **3d位移**函数主要包括traslateZ(z)和translate3d(x,y,z)。
        1. [注意]其中，x和y可以是长度值，也可以是百分比，百分比是相对于其本身元素水平方向的宽度和垂直方向的高度和；z只能设置长度值
    4. [注意]常用-webkit-transform: translateZ(0);来开启硬件加速
    5. [注意]3d位移函数相当于matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,x,y,z,1)
    6. **3d缩放**函数主要包括scaleZ()和scale3d()
        1. [注意]3d缩放函数相当于matrix3d(x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1)
        2. [注意]scaleZ()和scale3d()单独使用时没有任何效果
        3. transform: scaleZ(5) translateZ(-100px)和transform: translateZ(-500px)是等价的
    7. **3d旋转**函数主要包括rotateX()、rotateY()、rotateZ()、rotate3d()
        1. [注意]safari浏览器不支持keyframes中改变rotate3d()
4. 上面详细介绍了透视属性perspective，但透视属性应用在变形元素的父级或祖先级。而**透视函数perspective(length)**是transform变形函数的一个属性值，应用于变形元素本身
    1. 透视函数perspective(<length>)的参数只能是长度值，长度值只能是正数
    2. [注意]由于transform属性是从前向后的顺序解析属性值的，所以一定要把perspective()函数写在其他变形函数前面，否则将没有透视效果
5. **变形原点transform-origin**: x轴 y轴 z轴。初始值: 50% 50%。应用于: 非inline元素(包括block、inline-block、table、table-cell等)。
    1. [注意]IE9-浏览器不支持，safari3.1-8、android2.1-4.4.4、IOS3.2-8.4都需要添加前缀，其他更高版本浏览器可使用标准写法。
    2. x轴: left | center | right | <length> | <percentage>
    3. y轴: top | center | bottom | <length> | <percentage>
    4. z轴: <length>
6. **backface-visibility**: visible(默认)|hidden。设置元素背面是否可见
    1. [注意]若一个元素覆盖于另一个元素上，不仅仅是正面覆盖，背面也是覆盖的
7. **变形风格transform-style**: flat | preserve-3d允许变形元素及其子元素在3d空间中呈现。变形风格有两个值。flat是默认值，表示2d平面；而perserve-3d表示3d空间。
    1. [注意]当设置了overflow:非visible或clip:非auto时，transform-style:preserve-3d失效
    2. 来个rotateX就可以看出很大差别。

### 变形transform的副作用

变形transform本来是一个用来处理移动、旋转、缩放和倾斜等基本操作的CSS3属性，但该属性除了完成其本职工作之后，还对普通元素造成了意想不到的影响，本文将详细介绍transform对元素造成的四个副作用。

1. z-index
    1. 在定位中的堆叠z-index中曾经提到过，CSS3的出现对过去的很多规则发出了挑战，对层叠上下文z-index的影响更加显著，其中就包括元素的变形transform不是none的情况。元素的变形transform不是none使该元素可以使用堆叠z-index，从而可以覆盖普通流元素和低级别的定位元素
    2. 在下面例子中，show2和show1都是普通元素，show2通过设置margin负值，覆盖了show1。但是，通过改变show1的'transform'属性可以改变其层叠效果。
2. fixed
    1. 固定定位fixed使元素相对于视窗进行定位，不随着页面滚动条的滚动而滚动。但是，如果在固定定位元素的父级设置transform不为none，则会将固定定位降级为绝对定位absolute。
        1. 兼容性：IE浏览器无此表现，依然保持fixed状态
    2. [注意]在chrome浏览器下，将固定定位元素父级的transform属性设置为none，可能会使元素从静态位置移动到left:0、top:0的位置。如果某个父级元素设置为宽度100%，则fixed将保持在原来位置不会改变。
3. overflow
    1. 给设置overflow的元素使用transform或在设置overflow的元素与溢出元素之间的元素设置transform，可以解决overflow失效(子元素为position: absolute)的问题
    2. 兼容性：在chrome和safari浏览器下，只有设置overflow的元素与溢出元素之间的元素设置transform时，才有效；而IE9+和firefox浏览器，对于以上两种设置都有效
    3. [注意]在chrome浏览器下，将元素的transform属性设置为none，可能会使元素从静态位置移动到left:0、top:0的位置
4. 定位父级
    1. 一般地，绝对定位元素设置宽度百分比时，参照的是定位父级。定位父级是第一个position值为非static值的祖先元素。但是，如果祖先元素中存在设置了transform元素不为none的元素，也可以成为定位父级
        1. width/height等等也会变得适应过去
    2. 这也正是解决overflow失效的原因。

### 线性渐变

渐变实际上是两种或多种颜色之间的平滑过渡。而线性渐变是多种颜色沿着一条直线(称为渐变线)过渡。渐变的实现由两部分组成：渐变线和色标。渐变线用来控制发生渐变的方向；色标包含一个颜色值和一个位置，用来控制渐变的颜色变化。浏览器从每个色标的颜色淡出到下一个，以创建平滑的渐变，通过确定多个色标可以制作多色渐变效果。<br>
[注意]safari4-5、IOS3.2-4.3、android2.1-3只支持线性渐变，且需要添加-webkit-；safari5.1-6、IOS5.1-6.1、android4-4.3支持线性和径向渐变，且需要添加-webkit-；IE10+及其他高版本浏览器支持标准写法。<br>
``<linear-gradient> = linear-gradient([ [ <angle> | to <side-or-corner> ] ,]? <color-stop>[, <color-stop>]+) <side-or-corner> = [left | right] || [top | bottom]``

1. **渐变线**：渐变的第一个参数用于指定渐变线，默认是to bottom。有两种方式指定渐变线方向。0deg表示沿着元素的中心线由下向上的方向(类似于y轴)，且正角度表示顺时针旋转。
    1. [注意]对于-webkit-旧版本浏览器，如windows系统下的safari浏览器来说，0deg表示沿着元素中心线从左向右的方向(类似于x轴)，且正角度表示逆时针旋转。所以-webkit-旧版本浏览器与标准浏览器的之间线性渐变的角度关系为：-webkit-浏览器 = 90deg - 标准浏览器
    2. 相当于 -webkit-linear-gradient(90deg,red,blue) = linear-gradient(0deg,red,blue)
    3. [注意]对于webkit内核的浏览器来说，使用javascript改变元素的样式。当带-webkit-的私有样式和不带-webkit-的标准样式同时存在的时候，并不一定是后面覆盖前面。所以如果两种写法产生的效果相同，但参数不同时，要使用浏览器识别来分别写不同的情况。
    4. 关键字
        1. to top -> 0deg
        2. to right -> 90deg
        3. to bottom -> 180deg
        4. to left -> -90deg(或270deg)
        5. to top left -> -45deg(或315deg)
        6. to top right -> 45deg
        7. to bottom left -> -135deg(或225deg)
        8. to bottom right -> 135deg
    5. [注意]window系统的safari浏览器并不支持'to'加方向的关键字，如to left。它只支持方向关键字，如left。当然了left 和 to left 方向是正好相反的
2. **色标**：浏览器对于色标并没有默认值，且必须设置至少两个色标。色标由颜色和位置组成。颜色使用任何一种颜色模式都可以，而位置可以使用百分比或数值。
    1. [注意]颜色的位置也可以设置负值
    2. 必须是颜色在前，位置在后
        1. 正确 background-image: linear-gradient(red 0%,blue 100%);
        2. 错误 background-image: linear-gradient(0% red,100% blue);
    3. 位置可以省略，浏览器默认会把第一个颜色的位置设置为0%，把最后一个颜色的位置设置为100%
        1. background-image: linear-gradient(red 0%,blue 100%);
        2. 等价于上一个 background-image: linear-gradient(red,blue);
    4. 若渐变只有两种颜色，且第一个颜色的位置设置为n%，第二个颜色的位置设置为m%。则浏览器会将0%-n%的范围设置为第一个颜色的纯色，n%-m%的范围设置为第一个颜色到第二个颜色的过渡，m%-100%的范围设置为第二个颜色的纯色
        1. background-image: linear-gradient(red 30%,blue 60%);
        2. 等价于上一个 background-image: linear-gradient(red 0%,red 30%,blue 60%,blue 100%);
    5. 若渐变颜色没有指定位置，则它们会均匀分布
        1. background-image: linear-gradient(red,yellow,green,blue);
        2. 等价于 background-image: linear-gradient(red 0%, yellow 33.3%, green 66.6%, blue 100%)
    6. 若多色占据同一个位置，例a、b、c三色均占据n%这一位置，则0%-n%为前一种颜色与a颜色的颜色渐变；然后是n%-n%的a颜色与c颜色的颜色突变；n%-100%是c颜色与后一种颜色的颜色渐变。因此，中间的b是无用的
        1. background-image: linear-gradient(red,yellow 50%,white 50%,black 50%,blue);
        2. 等价于上一个 background-image: linear-gradient(red,yellow 50%,black 50%,blue);
3. **重复渐变**：可以实现线性渐变的重复效果，使色标在渐变线方向上无限重复，实现一些特殊的效果
    1. [注意]只有当首尾两颜色位置不在0%或100%时，重复渐变才生效
    2. background-image: -webkit-repeating-linear-gradient(blue 20%,green 50%);
    3. background-image: repeating-linear-gradient(blue 20%,green 50%);
    4. 【纸张效果】使用重复渐变可以实现横线纸张效果 ``div { height: 200px; width:200px; font: 14px/20px '宋体'; text-indent: 2em; background-image: -webkit-repeating-linear-gradient(#f9f9f9,#f9f9f9 9%,#ccc 10%); background-image: repeating-linear-gradient(#f9f9f9,#f9f9f9 9%,#ccc 10%); }``
4. **多背景**：使用多背景属性，利用带有透明度的渐变颜色给图片添加渐变的透明效果
        1. background: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0.8)),url('http://sandbox.runjs.cn/uploads/rs/26/ddzmgynp/img1.gif');
        2. https://www.cnblogs.com/xiaohuochai/p/5370446.html
5. **应用场景**：在CSS样式中，渐变相当于背景图片，在理论上可在任何使用url()值的地方采用。比如最常见的background-image、list-style-image以及border-image。但目前为止，仅在背景图片中得到完美的支持
    1. background-image
        1. background-image: -webkit-linear-gradient(pink,lightblue,lightgreen);
        2. background-image: linear-gradient(pink,lightblue,lightgreen);
        3. [注意]渐变框的大小由background-size决定，默认是padding box
    2. list-style-image
        1. list-style-image: -webkit-linear-gradient(red,blue);
        2. list-style-image: linear-gradient(red,blue);
        3. font-size: 50px;
        4. [注意]渐变框的大小由font-size决定，默认是1em
        5. [注意]firefox不支持在list-style-image中设置
    3. border-image
        1. -webkit-border-image:  -webkit-linear-gradient(black,green) 1/10px;
        2. border-image:  linear-gradient(black,green) 1/10px;
        3. [注意]渐变框的大小由borer-width决定，safari浏览器始终实现的都是带有fill参数的表现
6. **IE兼容**
    1. IE兼容 -- IE9-浏览器并不支持该属性，但可以使用IE准专有的滤镜语法来实现兼容。 ``filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, startColorstr='#color', endColorstr='#color');``
        1. GradientType代表渐变线方向，0为垂直(默认)，1为水平
        2. #color代表色标，格式是#aarrggbb，其中aa为透明度，rrggbb为rgb模式的颜色
        3. startColorstr的默认值是#ff0000ff
        4. endColorstr的默认值是#ff000000
    2. [注意]由于IE滤镜只支持首尾两个位置，且方向只可以为垂直和水平，所以有很大的局限性

```html
<!-- 4 -->
<style>
div { width: 200px; height: 200px; display: inline-block; }
.test1, .test2 { background-image: linear-gradient(45deg,red 25%,transparent 25%), linear-gradient(-45deg,red 25%,transparent 25%), linear-gradient(45deg,transparent 75%,red 75%), linear-gradient(-45deg,transparent 75%,red 75%); }
.test2 { background-size: 20% 20%; }
</style>
<div class="test1"></div>
<div class="test2"></div>
```

### 径向渐变

径向渐变，实际上就是椭圆渐变，圆只是一种特殊的椭圆而已。径向渐变从圆心点以椭圆形状向外扩散，渐变的实现由两部分组成：椭圆和色标。椭圆部分用来控制径向渐变的位置、大小和形状等。而色标部分包含一个颜色值和一个位置，用来控制渐变的颜色变化。[注意]safari4-5、IOS3.2-4.3、android2.1-3只支持线性渐变，且需要添加-webkit-；safari5.1-6、IOS5.1-6.1、android4-4.3支持线性和径向渐变，且需要添加-webkit-；IE10+及其他高版本浏览器支持标准写法

```css
//标准写法
radial-gradient([[<shape>||<size>]?[at <position>,]?<color-stop>[,<color-stop>]+)
//-webkit-老版本径向渐变的写法
-webkit-radial-gradient([<position>||<angle>,]? [<shape>||<size>,]>?<color-stop>[,<color-stop>]+)
.example {
    background-image: radial-gradient(at right bottom, rgb(255, 0, 0), rgb(0, 0, 255))
}
```

径向渐变方式主要由``<position>、<shape>、<size>``这三个参数影响，分别控制椭圆的圆心、形状和大小

* **position**: 定义渐变的圆心，默认是center center。
    * x轴:<length> | <percentage> | left | center | right
    * y轴:<length> | <percentage> | top | center | bottom
    * [注意]和线性渐变类似，旧版本-webkit-内核浏览器并不支持at <position>的写法，只支持<position>的写法
    * x轴数值表示在x轴上离0点(渐变框左上角)的偏移量；y轴数值表示在y轴上离0点的偏移量
    * x轴的百分比相对于渐变框的宽度，而y轴的百分比相对于渐变框的高度。渐变框的宽高由background-size决定
    * 当只有一个值时，默认第二个值为center
* **shape**: 定义渐变的形状是圆circle或椭圆ellipse。默认是椭圆
* **size**: closest-side | closest-corner | farthest-side | farthest-corner。定义渐变的大小。默认是farthest-corner
    * closest-side:半径为从圆心到最近边
    * closest-corner:半径为从圆心到最近角
    * farthest-side:半径为从圆心到最远边
    * farthest-corner:半径为从圆心到最远角
    * 如果``<shape>``是circle，则``<size>``可以设置为``<length>``，表示直径，0%表示圆心，100%表示距离圆心为半径的点
        * [注意]不能为负值也不可以设置百分比
        * [注意]webkit内核浏览器支持使用CSS设置圆的<length>型的<size>，但并不支持javascript改变其值；对于safari浏览器来说，只有半径写在circle关键字前面才识别
    * 如果``<shape>``是ellipse或不设置时，则``<size>``可以设置为``<length>或<percentage>``，第一个值表示水平直径，第二个值表示垂直直径。百分比相对于径向渐变容器的尺寸
        * [注意]若只有一个值，则表示水平和垂直直径相同，因为圆是特殊的椭圆，所以一个值时不可以为百分比
        * [注意]和圆类似，``<size>``值不能为负值，因为其表示的是直径
        * [重要]由于webkit浏览器在使用circle或ellipse关键字时渲染不正常，所以若使用circle时，可以不写shape(默认为ellipse)，用水平和垂直直径相同的椭圆替代

**色标**：与线性渐变的色标相同的部分不再重复，这里只说明不同的部分。由于位置处于100%的色标有时并不会占满渐变区域，则浏览器会默认使用最后一个色标的颜色铺满渐变区域``<color-stop> = <color> [ <percentage> | <length> ]?``
**重复渐变**：重复渐变可以实现径向渐变的重复效果，使色标在椭圆方向上无限重复，实现一些特殊的效果。[注意]只有当首尾两颜色位置不在0%或100%时，重复渐变才生效。
```css
background-image: -webkit-repeating-radial-gradient(blue 20%,green 50%);
background-image: repeating-radial-gradient(blue 20%,green 50%);
```
**其他**：关于线性渐变的多背景和应用场景，径向渐变与之类似。但径向渐变无法实现IE兼容。

### 动画animation

transition过渡是通过初始和结束两个状态之间的平滑过渡实现简单动画的；而animation则是通过关键帧@keyframes来实现更为复杂的动画效果。本文将介绍关于animation动画的相关知识

和transition类似，animation也是一个复合属性，包括animation-name、animation-duration、animation-timing-function、animation-delay、animation-iteration-count、animation-direction、animation-play-state、animation-fill-mode共8个子属性[注意]IE9-不支持；safari4-8、IOS3.2-8.4、android2.1-4.4.4需要添加-webkit-前缀

* animation-name: 动画名称(默认值为none) name1, name2, ... 。
    * 如果多个动画试图修改相同的属性，那么动画列表的后面覆盖前面
    * 如果动画的其他7个子属性和动画名称的长度不同，动画名称列表的长度决定最终的长度，多余的值无余，缺少的值按照顺序进行重复
* animation-duration: 持续时间(默认值为0)
    * 设置为负值，将使得整个动画持续时间都失效，失去动画效果
* animation-timing-function: 时间函数(默认值为ease)
    * animation的时间函数类似于transition的时间函数。时间函数可以应用于整个动画中，也可以应用于关键帧的某两个百分比之间
* animation-delay: 延迟时间(默认值为0)
* animation-iteration-count: 循环次数(默认值为1): infinite | <number>[,infinite | <number>]*
* animation-direction: 动画方向(默认值为normal)
    * normal: 正向播放
    * reverse: 反向播放
    * alternate: 若动画只播放一次，则和正向播放一样。若播放两次以上，偶数次效果为反向播放
    * alternate-reverse: 若动画只播放一次，则和反向播放一样。若播放两次以上，偶数次效果为正向播放
* animation-play-state: 播放状态(默认值为running): running | paused[,running | paused]*
* animation-fill-mode: 填充模式(默认值为none) 定义动画开始帧之前和结束帧之后的动作
    * [注意]android2.1-3不支持animation-fill-mode
    * none: 动画结束后，元素移动到初始状态 [注意]初始状态并不是指0%的元素状态，而是元素本身属性值
    * forwards: 元素停在动画结束时的位置 [注意]动画结束时的位置并不一定是100%定义的位置，因为动画有可能反向运动，也有可能动画的次数是小数
    * backwards: 在animation-delay的时间内，元素立刻移动到动画开始时的位置。若元素无animation-delay时，与none的效果相同 [注意]动画开始时的位置也不一定是0%定义的位置，因为动画有可能反向运动。
    * both: 同时具有forwards和backwards的效果
    * [注意]当持续时间animation-duration为0s时，animation-fill-mode依然适用，当animation-fill-mode的值为backwards时，动画填充在任何animation-delay的阶段。当animation-fill-mode的值为forwards时，动画将保留在100%的关键帧上

```css
div {
    width: 300px;
    height: 100px;
    background-color: pink;
    animation-name: test;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-play-state: running;
    animation-fill-mode: none;
}
/* 百分比顺序不一定非要从0%到100%排列，最终浏览器会自动按照0%-100%的顺序进行解析;
   如果存在负百分数或高于100%的百分数，则该关键帧将被忽略;
   如果0%或100%不指定关键帧，将使用该元素默认的属性值;
   若存在多个@keyframes，浏览器只识别最后一个@keyframes里面的值;
   空的keyframes规则是有效的，它们会覆盖前面有效的关键帧规则  */
@keyframes test {
    0% { background-color: lightblue; /* 可以animation-timing-function: ease; */ }  /* 0%可以用from代替 */
    30% { background-color: lightgreen; }
    60% { background-color: lightgray; }
    100% { background-color: black; }  /* 100%可以用to代替 */
}
```

animation涉及到的事件有animationstart、animationend、animationiteration三个。这三个事件的bubbles都是yes，cancelable都是no。[注意]对于safari浏览器，animation的事件为webkitAnimationStart、webkitAnimationEnd、webkitAnimationIteration。[注意]动画事件只支持DOM2级事件处理程序的写法

* animationstart 发生在动画开始时
    * 【1】如果存在delay，且delay为正值，则元素等待延迟完毕后，再触发该事件
    * 【2】如果delay为负值，则元素先将初始值变为delay的绝对值时，再触发该事件
* animationend 发生在动画结束时
* animationiteration 发生在动画的一次循环结束时，只有当iteration-count循环次数大于1时，触发该事件
* 只有改变animation-name时，才会使animation动画效果重新触发
* 这三个事件的事件对象，都有animationName和elapsedTime属性这两个私有属性
    * animationName属性:返回产生过渡效果的CSS属性名
    * elapsedTime属性:动画已经运行的秒数
    * [注意]对于animationstart事件，elapsedTime属性等于0，除非animation-delay属性等于负值

### 动画animation的三个应用(漂浮的白云、旋转的星球和正方体合成)



### animate.css的使用



## 渲染属性

### 混合模式

### 滤镜

### 倒影

### 页面渲染优化属性will-change

### 遮罩mask

### 路径裁剪clip-path

## 效果

### 元素显示隐藏的9种思路

### 实现滑动门的3种方法

### CSS以图换字的9种方法

### 导航条Tab切换

### CSS画出的图

### 纹理文本

### CSS文本效果

### CSS边框效果

### CSS背景效果

### CSS遮罩和毛玻璃效果

# 额外

## 知识点1

### 知识点1.1

1. [css overflow:hidden为什么会失效](https://my.oschina.net/xuqianwen/blog/540587) -- position: absolute;
    1. 溢出将在满足下列条件之一时出现：
        1. 一个不换行的行元素宽度超出了容器盒子宽度。
        2. 一个宽度固定的块元素放在了比它窄的容器盒子内。
        3. 一个元素的高度超出了容器盒子的高度。
        4. 一个子孙元素，由负边距值引起的部分内容在盒子外部。
        5. text-indent属性引起的行内元素在盒子的左右边界外。
        6. 一个绝对定位的子孙元素，部分内容在盒子外。但超出的部分不是总会被剪裁。子孙元素的内容就不会被子孙元素和其包含块之间的祖先元素的overflow的设置所剪裁。
    2. 当溢出发生时，overflow属性约定了容器盒子是否剪裁掉超出其内边界的部分，并且决定是否出现滚动条来访问被剪裁掉的内容。它会影响到元素所 有内容的剪裁，但有个例外情况，即上面第6条所提到的：元素的子孙元素的包含块（Containing blocks）是整个视窗（viewport）或是该元素的祖先元素，内容将不会被剪裁。包含块是什么呢？简单的说，就是可以决定一个元素位置和大小的 块。通常一个元素的包含块由离它最近的块级祖先元素的内容边界决定。但当元素被设置成绝对定位时，包含块由最近的position不是static的祖先 元素决定。

# 【重点】、【不是很懂】

引入：外部、内部、行间 @import

**选择器**：通配(\*)、元素(a)、类(.class)、ID(#id)、
属性(简单{``[class]{color:red;}``}、具体``[class='xxx']``、部分[~|^$*])、
分组(,)、后代( >)、兄弟(相邻{+}、通用{~})、
伪类(
    link,visited,focus,hover,active|
    **target**|
    enabled,disabled,checked|
    root|
    empty|
    lang(en)|
    first-child,last-child,only-child,nth-child(n),nth-last-child(n)|
    first-of-type,last-of-type,only-of-type,nth-of-type,nth-last-of-type|
    is(),any(),matches(),not(),has()|
    dir(),lang()|
    ...)、
伪元素(::before,::after,::marker,::placeholder
    |::first-letter,::first-line
    |::selection
    |::backdrop)

变量、@apply、@custom-selector
postcss\cssnext

1. 内联样式 -> 1,0,0,0
2. ID属性值 -> 0,1,0,0
3. 类属性值、属性选择或伪类 -> 0,0,1,0
4. 元素或伪元素 -> 0,0,0,1
5. 结合符和通配选择器 -> 0,0,0,0

**单位**

initial、inherit、unset、revert和all

calc(+-*/,%、px、rem、em)

**属性速查表**

**【布局类】**

1. 定位 ``position z-index top bottom left right``
2. 浮动 ``float clear``
3. 多列布局 ``columns columns-width columns-count column-rule column-fill column-span column-gap``
4. 栅格布局
    1. 显示网格 ``display grid grid-template-rows grid-template-columns grid-column-gap grid-row-gap grid-gap``
    2. 网格线 ``grid-row-start grid-row-end grid-row grid-column-start grid-column-end grid-column grid-area``
    3. 隐式网格 ``grid-auto-rows grid-auto-columns grid-auto-flow grid-template-rows grid-template-columns grid-template-areas grid-template``
    4. 对齐 ``justify-items justify-self align-items align-self align-content``

**【盒模型】**

* 弹性盒模型
    * 弹性容器 display flex-direction flex-wrap flex-flow justify-content align-items align-content
    * 弹性项目 flex flex-basis flex-grow flex-shrink align-self order
* 表格模型 table-layout empty-cells caption-side border-collapse border-spacing
* 列表模型 list-style
* 盒子尺寸 box-sizing display width height padding margin border border-radius outline
* 盒子显示 overflow clip resize visibility

**【文本类】**

* 文本样式 font line-height text-align vertical-allign text-indent text-transform text-overflow text-decoration text-shadow text-justify text-emphasis white-space letter-spacing word-spacing word-wrap word-break
* 排版模式 writing-mode text-combine-upright unicode-bidi text-orientation direction

**【修饰类】**

* 颜色 color background isolation clip-path mask filter box-shadow opacity cursor
* 变形 transform transform-style transform-origin perspective perspective-origin backface-visibility
* 动画 transition animation will-change

**CSS Hack**

**CSS兼容性详解**

**haslayout**

counter-reset、counter-increment、content: counter(c1,upper-roman)

【CSS规范】 !important,@import,express|filter,hack,@author/@name/@description/@update,公有&私有

[max/min/]-width/height{:fill-availiable/fit-content/min-content/max-content},padding,border,margin,outline,box-sizing(content-box,padding-box,border-box),border-radius,border-colors,border-image,box-shadow

[border-image](https://segmentfault.com/a/1190000010969367)

**margin要点** **margin负值**

display:flex,flex-wrap,flex-direction,flex-flow,justify-content,align-items,align-content|justify-self,align-self,flex-basic,flex-grow,flex-shrink,flex,order
