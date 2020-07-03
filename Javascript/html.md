- [语法](#语法)
    - [HTML实体](#html实体)
    - [HTML原有属性](#html原有属性)
        - [class](#class)
        - [id](#id)
        - [style](#style)
        - [title](#title)
        - [accesskey](#accesskey)
        - [dir](#dir)
        - [lang](#lang)
        - [tabindex](#tabindex)
    - [HTML5新增属性](#html5新增属性)
        - [contenteditable](#contenteditable)
        - [contextmenu](#contextmenu)
        - [data-*](#data-)
        - [hidden(IE7-不支持)](#hiddenie7-不支持)
        - [draggable(IE8-不支持)](#draggableie8-不支持)
        - [spellcheck(IE9-不支持)](#spellcheckie9-不支持)
        - [dropzone(所有浏览器都不支持)](#dropzone所有浏览器都不支持)
        - [translate(所有浏览器都不支持)](#translate所有浏览器都不支持)
    - [HTML5遵循的5个设计原则](#html5遵循的5个设计原则)
    - [HTML5标签嵌套规则](#html5标签嵌套规则)
        - [分类](#分类)
        - [子元素是流元素](#子元素是流元素)
        - [子元素是语句型元素](#子元素是语句型元素)
        - [子元素是transparent(以它的父元素允许的子元素为准)](#子元素是transparent以它的父元素允许的子元素为准)
        - [无子元素](#无子元素)
        - [子元素是``<caption>、<colgroup>、<thead>、<tfoot>、<tbody>，也可以是<script>、<template>``元素](#子元素是captioncolgrouptheadtfoottbody也可以是scripttemplate元素)
        - [子元素是文本内容](#子元素是文本内容)
        - [总结](#总结)
    - [HTML条件注释](#html条件注释)
    - [HTML规范](#html规范)
        - [整体结构](#整体结构)
        - [代码格式](#代码格式)
        - [特殊元素](#特殊元素)
- [结构](#结构)
    - [HTML文档声明](#html文档声明)
    - [HTML文档头部](#html文档头部)
    - [HTML骨架结构](#html骨架结构)
    - [HTML块级元素](#html块级元素)
    - [HTML内联元素](#html内联元素)
    - [HTML结构元素](#html结构元素)
        - [section](#section)
        - [article](#article)
        - [aside](#aside)
        - [nav](#nav)
        - [header](#header)
        - [footer](#footer)
        - [main](#main)
        - [例子](#例子)
    - [HTML交互元素](#html交互元素)
        - [文档描述](#文档描述)
        - [对话框](#对话框)
    - [HTML标签内容模型](#html标签内容模型)
        - [元数据型(metadata)](#元数据型metadata)
        - [区块型(sectioning)](#区块型sectioning)
        - [标题型(heading)](#标题型heading)
        - [文档流型(flow)](#文档流型flow)
        - [语句型(phrasing)](#语句型phrasing)
        - [内嵌型(embedded)](#内嵌型embedded)
        - [交互型(interactive)](#交互型interactive)
        - [总结](#总结-1)
- [重点标签](#重点标签)
    - [HTML锚点](#html锚点)
        - [href属性](#href属性)
        - [target属性](#target属性)
        - [download属性](#download属性)
        - [rel属性](#rel属性)
        - [注意事项](#注意事项)
    - [HTML图像](#html图像)
        - [img标签](#img标签)
        - [figure标签](#figure标签)
        - [figcaption](#figcaption)
        - [map](#map)
        - [area](#area)
    - [HTML列表](#html列表)
        - [无序列表](#无序列表)
        - [有序列表](#有序列表)
        - [marker](#marker)
        - [定义列表](#定义列表)
    - [HTML框架](#html框架)
        - [frameset](#frameset)
        - [frame](#frame)
        - [iframe](#iframe)
        - [框架脚本](#框架脚本)
        - [iframe脚本](#iframe脚本)
    - [HTML表格](#html表格)
        - [table](#table)
        - [行(tr/th/td)](#行trthtd)
        - [列(col/colgroup)](#列colcolgroup)
        - [其他表格元素(thead/tbody/tfoot/caption)](#其他表格元素theadtbodytfootcaption)
        - [display](#display)
        - [匿名表格对象](#匿名表格对象)
        - [表格层](#表格层)
        - [边距设置](#边距设置)
    - [DOM操作表格](#dom操作表格)
- [【多媒体】](#多媒体)
    - [HTML音频和视频](#html音频和视频)
        - [音频格式](#音频格式)
        - [视频格式](#视频格式)
        - [插件元素](#插件元素)
        - [HTML5元素](#html5元素)
        - [HTML音频](#html音频)
        - [HTML视频](#html视频)
    - [audio和video](#audio和video)
        - [audio](#audio)
        - [video](#video)
        - [source](#source)
        - [track](#track)
        - [方法](#方法)
        - [属性](#属性)
        - [事件](#事件)
        - [audio专有](#audio专有)
    - [音乐播放器](#音乐播放器)
- [【表单】](#表单)
    - [form元素](#form元素)
    - [input元素属性](#input元素属性)
    - [input元素的type类型](#input元素的type类型)
        - [传统类型](#传统类型)
        - [新增类型](#新增类型)
    - [表单控件](#表单控件)
        - [传统控件](#传统控件)
        - [新增控件](#新增控件)
    - [表单美化](#表单美化)
        - [单选按钮](#单选按钮)
        - [多选按钮](#多选按钮)
        - [下拉列表](#下拉列表)
- [【重点，还不是很懂】](#重点还不是很懂)

## 语法

### HTML实体

| 显示结果 | 描述     | 实体名称     | 实体编号    |
| :------- | :------- | :----------- | :---------- |
|          | 空格     | ``&nbsp;``   | ``&#160;``  |
| <        | 小于号   | ``&lt;``     | ``&#60;``   |
| >        | 大于号   | ``&gt;``     | ``&#62;``   |
| &        | 和号     | ``&amp;``    | ``&#38;``   |
| "        | 引号     | ``&quot;``   | ``&#34;``   |
| '        | 撇号     | ``&apos;``   | ``&#39;``   |
| ￠        | 分       | ``&cent;``   | ``&#162;``  |
| £        | 镑       | ``&pound;``  | ``&#163;``  |
| ¥        | 日圆     | ``&yen;``    | ``&#165;``  |
| €        | 欧元     | ``&euro;``   | ``&#8364;`` |
| §        | 小节     | ``&sect;``   | ``&#167;``  |
| ©        | 版权     | ``&copy;``   | ``&#169;``  |
| ®        | 注册商标 | ``&reg;``    | ``&#174;``  |
| ™        | 商标     | ``&trade;``  | ``&#8482;`` |
| ×        | 乘号     | ``&times;``  | ``&#215;``  |
| ÷        | 除号     | ``&divide;`` | ``&#247;``  |

### HTML原有属性

#### class

#### id

#### style

#### title

#### accesskey

支持该属性的元素有 ``<a>、<area>、<button>、<input>、<label>、<legend>、<textarea>`` 。使用该属性可能在新窗口打开链接时可能会被浏览器屏蔽。

```html
<div>
    <a href="https://www.baidu.com" accesskey="b">百度</a>
    <a href="https://www.taobao.com" accesskey="a">阿里</a>
    <a href="https://www.qq.com" accesskey="t">腾讯</a>
    <p>快捷键(alt+b)可以跳转到百度；快捷键(alt+a)可以跳转到阿里；快捷键(alt+t)可以跳转到腾讯</p>
</div>
```

<div>
    <a href="https://www.baidu.com" accesskey="b">百度</a>
    <a href="https://www.taobao.com" accesskey="a">阿里</a>
    <a href="https://www.qq.com" accesskey="t">腾讯</a>
    <p>快捷键(alt+b)可以跳转到百度；快捷键(alt+a)可以跳转到阿里；快捷键(alt+t)可以跳转到腾讯</p>
</div>

#### dir

文字的方向：ltr/rtl/auto

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;height:180px;padding:10px;background-color:#ccc;text-align:center;}
    .con{width:30%;float:left;}
    .con dl+dl{margin-top:1%;}
    .con dt{font-weight:bold;margin-bottom:5%;}
    .con dd{background-color:rgba(255,255,255,0.3);padding:1%;margin-bottom:5%;cursor:pointer;}
    .show{width:60%;padding:0 5%;float:left;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{height:100px;line-height:100px;border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
</style>
<div class="box" id="box">
    <div class="con">
        <dl>
            <dt>dir</dt>
            <dd>auto</dd>
            <dd>ltr</dd>
            <dd>rtl</dd>
        </dl>
    </div>
    <div class="show">
        <h2 class="show-tit">文本方向演示</h2>
        <div class="show-body" id="sb">
            <div id="test">测试文字……</div>
        </div>
    </div>
</div>
<script>
    (function con() {
        var aDl = document.getElementById('box').getElementsByTagName('dl')[0];
        var oTest = document.getElementById('test');
        var aDd = aDl.getElementsByTagName('dd');
        var attrName = aDl.getElementsByTagName('dt')[0].innerHTML
        aDl.last = 0;
        for (var j = 0, lenj = aDd.length; j < lenj; j++) {
            aDd[j].index = j;
            aDd[j].onclick = function() {
                aDd[aDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                this.style.cssText = 'color: white; background-color: black;';
                oTest[attrName] = this.innerHTML;
                aDl.last = this.index;
            }
        }
        aDd[0].click()
    })();
</script>
```

<iframe src="./htmls/dir.html" frameborder="0" width="100%" height="200"></iframe>

#### lang

```txt
en:英文
zh:中文
zh-CN：简体中文
cmn 普通话（官话、国语）
wuu 吴语（江浙话、上海话）、czh 徽语（徽州话、严州话、吴语-徽严片）
hak 客家语
yue 粤语（广东话）
nan 闽南语（福建话、台语）、cpx 莆仙话（莆田话、兴化语）、cdo 闽东语、mnp 闽北语、zco 闽中语
gan 赣语（江西话）
hsn 湘语（湖南话）
cjy 晋语（山西话、陕北话）

zh-CN 中文 (简体, 中国大陆) 对应 cmn-Hans-CN 普通话 (简体, 中国大陆)
zh-SG 中文 (简体, 新加坡)   对应 cmn-Hans-SG 普通话 (简体, 新加坡)
zh-HK 中文 (繁体, 香港)     对应 cmn-Hant-HK 普通话 (繁体, 香港)
zh-MO 中文 (繁体, 澳门)     对应 cmn-Hant-MO 普通话 (繁体, 澳门)
zh-TW 中文 (繁体, 台湾)     对应 cmn-Hant-TW 普通话 (繁体, 台湾)
```

#### tabindex

```html
<div>
    <a href="https://www.baidu.com" tabindex="3">百度</a>
    <a href="https://www.taobao.com" tabindex="2">阿里</a>
    <a href="https://www.qq.com" tabindex="1">腾讯</a>
</div>
```

<div>
    <a href="https://www.baidu.com" tabindex="3">百度</a>
    <a href="https://www.taobao.com" tabindex="2">阿里</a>
    <a href="https://www.qq.com" tabindex="1">腾讯</a>
</div>

### HTML5新增属性

#### contenteditable

bool，指定是否可以在浏览器里编辑内容。设置document.designMode ='on'时，页面的任意位置都可以编辑；使用contenteditable ='true'则只对具体元素和其包含的元素起作用。

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;height:180px;padding:10px;background-color:#ccc;text-align:center;}
    .con{width:30%;float:left;}
    .con dl+dl{margin-top:1%;}
    .con dt{font-weight:bold;margin-bottom:5%;}
    .con dd{background-color:rgba(255,255,255,0.3);padding:1%;margin-bottom:5%;cursor:pointer;}
    .show{width:60%;padding:0 5%;float:left;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{height:100px;line-height:100px;border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
</style>
<div class="box" id="box">
    <div class="con">
        <dl>
            <dt>contentEditable</dt>
            <dd>true</dd>
            <dd>false</dd>
        </dl>
    </div>
    <div class="show">
        <h2 class="show-tit">属性演示</h2>
        <div class="show-body" id="sb">
            <div id="test">测试文字……</div>
        </div>
    </div>
</div>
<script>
    (function con() {
        var oBox = document.getElementById('box');
        var aDl = oBox.getElementsByTagName('dl');
        var oTest = document.getElementById('test');
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var oDt = aDl[i].getElementsByTagName('dt')[0];
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function() {
                    var oDl = this.parentNode;
                    var oDt = oDl.getElementsByTagName('dt')[0];
                    var aDd = oDl.getElementsByTagName('dd');
                    aDd[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    oTest[oDt.innerHTML] = this.innerHTML;
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```

<iframe src="./htmls/contenteditable.html" frameborder="0" width="100%" height="200"></iframe>

```html
<style>
    body{margin:0;}
    dl,dd{margin:0;}
    ul{margin:0;padding:0;list-style:none;}
    .box{width:300px;}
    .con{overflow:hidden;margin-bottom:6px;}
    .con button{float:left;padding:2px;border:1px solid gray;margin-right:2px;cursor:pointer;}
    .show{height:100px;border:2px solid rgba(0,0,0,0.3);}
</style>
<div class="box">
    <div class="con" id="con">
        <button data-name="selectAll">全选</button>
        <button data-name="delete">删除</button>
        <button data-name="undo">撤销</button>
        <button data-name="print">打印</button>
        <button data-name="bold">加粗</button>
        <button data-name="italic">倾斜</button>
        <button data-name="underline">下划线</button>
        <button data-name="fontsize" data-value="7">大号字体</button>
        <button data-name="fontsize" data-value="5">中号字体</button>
        <button data-name="fontsize" data-value="3">小号字体</button>
        <button data-name="forecolor" data-value="red">红色文本</button>
        <button data-name="backcolor" data-value="gray">灰色背景</button>
        <button data-name="removeFormat">清空格式</button>
    </div>
    <div class="show" id="show" contenteditable>我是测试文字</div>
</div>
<script>
    var aCon = document.getElementById('con').getElementsByTagName('button');
    for (var i = 0; i < aCon.length; i++) {
        aCon[i].onclick = function() {
            console.log("name: %s, false, value: %s, origin: %s", this.dataset.name, this.dataset.value, document.queryCommandValue(this.dataset.name))
            document.execCommand(this.dataset.name, false, this.dataset.value);
        }
    }
</script>
```

<iframe src="./htmls/execCommand.html" frameborder="0" width="100%" height="200"></iframe>

#### contextmenu

作用：跟元素关联的右键菜单。值：``<menu>``元素中唯一ID

#### data-*

可以在所有浏览器中使用getAttribute方法来获取data-\*属性的值，也可以使用javascript中dataset属性访问data-\*属性的值，不过IE10-浏览器不支持dataset。
属性名不应包含任何大写字母，且在前缀"data-"之后必须有至少一个字符；属性值可以是任意字符串。

#### hidden(IE7-不支持)

作用：显示或隐藏该元素(与display:none的作用一样)。值：hidden="" || hidden= "hidden"

#### draggable(IE8-不支持)

值：true/false/auto。注意：链接和图像默认是可拖动的

#### spellcheck(IE9-不支持)

作用：规定是否对元素进行拼写和语法检查，对拼写错误的单词会在其下方出现红线。范围：可编辑区域（表单或contenteditable元素）。值：true/false。注意：移动端支持不好。

#### dropzone(所有浏览器都不支持)

作用：规定在拖动被拖动数据时是否进行复制、移动或链接。值：copy拷贝/move移动/link指向原始数据链接

#### translate(所有浏览器都不支持)

作用：规定是否应该翻译元素内容。值：yes/no。

### HTML5遵循的5个设计原则

1. 避免不必要的复杂性
2. 支持已有内容
3. 解决现实的问题：由于使用了内容模型，内联元素（如a）也可以包含块级元素
4. 内容模型，html5新增了多个元素，其中包括：section、article、aside和nav，它们代表了一种新的内容模型——给内容分区。位于这些元素中的任何内容，都可以拥有自己的概要、标题，自己的脚部。
5. 平稳退化，如浏览器在遇到不识别的type值时，会将type的值解释为text

    ```html
    <input type="number"/>
    <input type="search"/>
    <input type="range"/>
    <input type="email"/>
    <input type="date"/>
    <input type="url"/>
    ```

### HTML5标签嵌套规则

#### 分类

html5出现之前，经常把元素按照block、inline、inline-block来区分。在html5中，元素不再按照display属性来区分，而是按照内容模型来区分，分为元数据型(metadata content)、区块型(sectioning content)、标题型(heading content)、文档流型(flow content)、语句型(phrasing content)、内嵌型(embedded content)、交互型(interactive content)。元素不属于任何一个类别，被称为穿透的；元素可能属于不止一个类别，称为混合的。

**区块型元素**(sectioning content)是用于定义标题及页脚范围的元素
> article aside nav section

**标题型元素**(heading content)定义一个区块/章节的标题
> h1 h2 h3 h4 h5 h6

**元数据元素**(metadata content)是可以被用于说明其他内容的表现或行为，或者在当前文档和其他文档之间建立联系的元素
> base link meta noscript script style template title

**流元素**(flow content)是在应用程序和文档的主体部分中使用的大部分元素
> a abbr address area(如果它是map元素的子元素) article aside audio b bdi bdo blockquote br button canvas cite code data datalist del dfn div dl em embed fieldset figure footer form h1 h2 h3 h4 h5 h6 header hr i iframe img input ins kbd keygen label main map mark math meter nav noscript object ol output p pre progress q ruby s samp script section select small span strong sub sup svg table template textarea time u ul var video wbr text

**语句型元素**(phrasing content)是用于标记段落级文本的元素
> a abbr area (如果它是map元素的子级) audio b bdi bdo br button canvas cite code data datalist del dfn em embed i iframe img input ins kbd keygen label map mark math meter noscript object output progress q ruby s samp script select small span strong sub sup svg template textarea time u var video wbr text

**嵌入型元素**(embedded content)是引用或插入到文档中其他资源的元素
> audio canvas embed iframe img math object svg video

**交互型元素**(interactive content)是专门用于与用户交互的元素
> a audio(如果设置了controls属性) button embed iframe img(如果设置了usemap属性) input(如果type属性不为hidden) keygen label object(如果设置了usemap属性) select textarea video (如果设置了controls属性)

#### 子元素是流元素

``<article>、<section>、<blockquote>、<li>、<dd>、<figcaption>、<div>、<main>、<td>``

1. 子元素是流元素，不包括``<main>``元素
```
<aside>、<nav>
```

2. 子元素是流元素，但不包括``<table>``元素
```
<caption>
```

3. 子元素是流元素，但不包括``<form>``元素
```
<form>
```

4. 子元素是流元素，但不包括``<header>、<footer>、<main>``元素
```
<header>、<footer>、<main>
```

5. 子元素是流元素，但不包括``<header>、<footer>``、区块型元素(sectioning content)、标题型元素(heading content)
```
<dt>、<th>
```

6. 子元素是流元素，但不包括``<header>、<footer>、<address>``、区块型元素(sectioning content)、标题型元素(heading content)
```
<address>
```

7. 子元素是一个``<figcaption>``元素，紧跟着流元素
```
<figure>
```

8. 子元素是一个``<legend>``元素，紧跟着流元素
```
<filedset>
```

#### 子元素是语句型元素

``<h1>、<h2>、<h3>、<h4>、<h5>、<h6>、<p>、<pre>、<em>、<strong>、<small>、<s>、<cite>、<q>、<abbr>、<data>、<time>、<code>、<var>、<samp>、<kbd>、<sub>、<sup>、<i>、<b>、<u>、<mark>、<bdi>、<bdo>、<span>、<input>、<output>、<legend>、<label>``

1. 子元素是语句型元素，但不包括和自身相同的元素
```
<dfn>、<progress>、<meter>
```

2. 子元素是语句型元素，但不包括交互型元素(interactive content)
```
<button>
```

#### 子元素是transparent(以它的父元素允许的子元素为准)

``<ins>、<del>、<map>``

1. 子元素是transparent(以它的父元素允许的子元素为准)，但不包括交互型元素(interactive content)
```
<a>
```

2. 子元素可以没有、可以是``<param>``元素，也可以是transparent(以它的父元素允许的子元素为准)
```
<object>
```

#### 无子元素

``<hr>、<br>、<wbr>、<img>、<embed>、<param>、<source>、<track>、<area>、<col>、<keygen>``

1. 子元素可以没有、可以是``<li>``元素，也可以是``<script>、<template>``元素
```
<ol>、<ul>
```

2. 子元素可以没有、可以是``<dt>``和``<dd>``元素，也可以是``<script>、<template>``元素
```
<dl>
```

3. 子元素可以没有，可以是``<option>、<optgroup>``，也可以是``<script>、<template>``元素
```
<select>
```

4. 子元素可以没有，可以是``<option>``，也可以是``<script>、<template>``元素
```
<optgroup>
```

5. 子元素可以没有、可以是``<option>``元素
```
<datalist>
```

6. 子元素可以没有、也可以是``<track>``元素，也可以是``<source>``元素
```
<audio>、<video>
```

7. 子元素可以没有，也可以是``<col>、<template>``元素
```
<colgroup>
```

8. 子元素可以没有，可以是``<tr>``，也可以是``<script>、<template>``元素
```
<tbody>、<thead>、<tfoot>
```

9. 子元素可以没有，可以是``<tr>、<th>``，也可以是`<script>、<template>`元素
```
<tr>
```

#### 子元素是``<caption>、<colgroup>、<thead>、<tfoot>、<tbody>，也可以是<script>、<template>``元素

``<table>``

#### 子元素是文本内容

``<textarea>``

1. 子元素可以没有，也可以是文本内容
```
<option>
```

#### 总结

关于每个元素的详细嵌套规则，上部分已经详细介绍。这部分主要对常用标签的嵌套规则进行总结

【注意】将鼠标移动到深灰色背景的文字上，title将显示该元素所包含的标签

1. ``<h1>``、``<h2>``、``<h3>``、``<h4>``、``<h5>``、``<h6>``、``<p>``的子元素是语句型元素
2. ``<header>``、``<footer>``不可嵌套``<header>``、``<footer>``
3. ``<a>``的子元素是transparent(以它的父元素允许的子元素为准)，但不包括交互型元素(interactive content)
4. ``<form>``不可嵌套``<form>``
5. ``<button>``子元素是语句型元素，不可嵌套交互型元素(interactive content)
6. ``<caption>``不可嵌套``<table>``
7. ``<dt>``、``<th>``不可嵌套``<header>``、``<footer>``、区块型元素(sectioning content)、标题型元素(heading content)

### HTML条件注释

1. 从IE10开始，IE浏览器已经不再支持条件注释。
2. 识别IE。

```html
<!--[if IE]>
<div class="box" id="box"></div>
<![endif]-->

<!-- 可以是 [if IE 6/7/8/9] -->
<!--[if IE 7]>
<div class="box" id="box"></div>
<![endif]-->

<!--gt          大于(greater than)
    gte         大于等于(greater than or equal)
    lt          小于(less than)
    lte         小于等于(less than or equal)  -->
<!--[if lte IE 7]>
<div class="box" id="box"></div>
<![endif]-->
```

3. 识别非IE。实际上识别的是IE10+浏览器和其他非IE浏览器。

```html
<!--[if !IE]>
<div class="box" id="box"></div>
<![endif]-->
```

### HTML规范

#### 整体结构

1. 【页面头部】
    1. 文件应以``<!DOCTYPE ......>``首行顶格开始，推荐使用``<!DOCTYPE html>``
    2. 必须声明文档的编码charset，且与文件本身编码保持一致，指定字符编码的 meta 必须是 head 的第一个直接子元素。推荐使用UTF-8编码``<meta charset="utf-8">``
    3. 根据页面内容和需求填写适当的keywords和description。
    4.. 页面title是不可缺少的一项，title必须作为head的直接子元素，并紧随charset声明之后。

```html
<head>
    <meta charset="UTF-8">
    <meta name="description" content="不超过150个字符">
    <meta name="keywords" content="">
    <title>页面标题</title>
</head>
```

2. 【资源引入】
    1. 保证 favicon 可访问。``<link rel="shortcut icon" href="path/to/favicon.ico">``
    2. 引入CSS和JavaScript时无须指明type属性
    3. 引入CSS时必须指明rel="stylesheet"。``<link rel="stylesheet" href="page.css">``
    4. 使用link将css文件引入，并置于head中；使用script将js文件引入，并置于body底部。
    5. 移动环境或只针对现代浏览器设计的Web应用，如果引用外部资源的URL协议部分与页面相同，建议省略协议前缀。这是因为使用protocol-relativeURL引入CSS，在IE7/8下，会发两次请求。是否使用protocol-relativeURL应充分考虑页面针对的环境。``<script src="//s1.bdstatic.com/cache/static/jquery-1.10.2.min_f2fb5194.js"></script>``
3. 【结构优化】
    1. 尽量遵循 HTML 标准和语义，但是不要以牺牲实用性为代价。任何时候都要尽量使用最少的标签并保持最小的复杂度
    2. 结构顺序和视觉顺序基本保持一致，按照从上至下、从左到右的视觉顺序书写HTML结构。有时为了便于搜索引擎抓取，也会将重要内容在HTML结构顺序上提前
    3. 结构、表现、行为三者分离，避免内联
    4. 每一个块级元素都另起一行，每一行都使用Tab缩进对齐（head和body的子元素不需要缩进）。删除冗余的行尾空格
    5. 对于内容较为简单的表格，建议将tr写成单行
    6. 可以在大的模块之间用空行隔开，使模块更清晰
4. 【语义化】浏览器会根据标签的语义给定一个默认的样式。判断网页标签语义化是否良好的一个简单方法：去掉样式，看网页结构是否组织良好有序，是否仍然有很好的可读性
    1. 尽可能少地使用无语义标签span和div
    2. 在语义不明显，既可以使用p也可以使用div的地方，尽量用p
    3. 在既可以使用div也可以使用section的地方，尽量用section
    4. 不要使用纯样式标签，如b、u等，而改用CSS设置

#### 代码格式

#### 特殊元素

1. 【图片】
    1. 禁止img的src取值为空，否则会导致部分浏览器重新加载一次当前页面
    2. 为图片添加alt属性，提高图片加载失败时的用户体验
    3. 避免为img添加不必要的title属性，多余的title影响看图体验，并且增加了页面尺寸
    4. 为图片添加width和height属性，以避免页面抖动。``<img src="#" alt="#" width="#" height="#">``
    5. 有下载需求的图片采用img标签实现，无下载需求的图片采用CSS背景图实现。产品logo、用户头像、用户产生的图片等有潜在下载需求的图片，以img形式实现，能方便用户下载。无下载需求的图片，比如：icon、背景、代码使用的图片等，尽可能采用css背景图实现
2. 【表单】
    1. 有文本标题的控件使用label标签将其与其标题相关联。最好将控件置于label内，以减少不必要的id。``<label><input type="checkbox" name="confirm" value="on"/> 我已确认上述条款</label>``
    2. 使用button元素时必须指明type属性值。因为button元素的默认type为submit，如果被置于form元素中，点击后将导致表单提交``<button type="submit">提交</button><button type="button">取消</button>``
    3. 在针对移动设备开发的页面时，根据内容类型指定输入框的type属性，能获得友好的输入体验。``<input type="date">``
3. 【多媒体】
    1. 在支持HTML5的浏览器中优先使用audio和video标签来定义音视频元素，并使用退化到插件的方式来对多浏览器进行支持

    ```html
    <audio controls>
        <source src="audio.mp3" type="audio/mpeg">
        <source src="audio.ogg" type="audio/ogg">
        <object width="100" height="50" data="audio.mp3">
            <embed width="100" height="50" src="audio.swf">
        </object>
    </audio>

    <video width="100" height="50" controls>
        <source src="video.mp4" type="video/mp4">
        <source src="video.ogg" type="video/ogg">
        <object width="100" height="50" data="video.mp4">
            <embed width="100" height="50" src="video.swf">
        </object>
    </video>
    ```

    2. 只在必要的时候开启音视频的自动播放

## 结构

### HTML文档声明

文档声明必须是HTML文档的第一行、且顶格显示，对大小写不敏感。因为任何放在DOCTYPE前面的东西，比如批注或XML声明，会令IE9或更早期的浏览器触发怪异模式(后面的渲染模式会介绍)。

由于文档类型声明不是标签，因此不应具有关闭标签。

在很久以前的网络上，页面通常有两种版本：为网景(Netscape)的Navigator准备的版本以及为微软(Microsoft)的Internet Explorer准备的版本。当W3C创立网络标准后，为了不破坏当时既有的网站，浏览器不能直接起用这些标准。因此，浏览器采用了两种模式，用以把能符合新规范的网站和老旧网站区分开。

浏览器排版引擎有三种模式：怪异模式(Quirks mode)、接近标准模式(Almost standards mode)以及标准模式(Standards mode)。在怪异模式下，排版会模拟Navigator4与Internet Explorer 5的非标准行为。为了支持在网络标准被广泛采用前，就已经建好的网站，这么做是必要的。在标准模式下，行为即由HTML与CSS的规范描述的行为。在接近标准模式下，只有少数的怪异行为被实现

对HTML文档来说，浏览器使用文档开头的DOCTYPE来决定用怪异模式处理或标准模式处理。如果文档中没有DOCTYPE将触发文档的怪异模式。怪异模式最明显的影响是会触发怪异盒模型。在CSS中盒模型被分为两种，第一种是W3C的标准模型，第二种是怪异盒模型。不同之处在于怪异盒模型的宽高定义的是可见元素框的尺寸，而不是元素框的内容区尺寸

### HTML文档头部

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <!-- 有name属性，文档级的元数据，将附着在整个页面上 -->
    <meta name="keywords" content="HTML, CSS, XML" />
    <!-- 关键词 -->
    <meta name="description" content="Free Web tutorials on HTML, CSS, JavaScript" />
    <!-- 描述 -->
    <meta name="author" content="liangyy75">
    <!-- 作者 -->
    <meta name="copyright" content="本页版权归梁毓颖所有">
    <!-- 版权 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <!-- 【视口】(移动端使用) -->
    <meta name="renderer" content="webkit">
    <!-- 【双核浏览器】如果是双核浏览器，则使用webkit内核渲染 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <!-- 【兼容模式】IE浏览器渲染，这里表示“如果安装了GCF(Google Chrome Frame谷歌内嵌浏览器框架GCF)，则使用GCF来渲染页面，如果没有安装，则使用最高版本的IE内核进行渲染” -->
    <meta http-equiv="refresh" content="5">
    <!-- 【定时刷新/跳转】多少秒刷新 -->
    <meta http-equiv="refresh" content="5;url=http://www.baidu.com">
    <!-- 多少秒后跳转到其他网页 -->
    <meta http-equiv="Expires" Content="0">
    <!-- 【缓存过期时间】设定网页的到期时间，一旦过期则必须到服务器上重新调用。需要注意的是必须使用GMT时间格式 -->
    <meta http-equiv="Expires" Content="Sat Nov 28 2016 21:19:15 GMT+0800">
    <meta http-equiv="Pragma" Content="No-cach">
    <!-- 【禁止缓存】 -->
    <meta http-equiv="windows-Target" content="_top">
    <!-- 【独立页面】强制页面在当前窗口中以独立页面显示，可以防止自己的网页被别人当作一个frame页调用 -->
    <title>Document</title>
    <base href="http://cnblogs.com" target="_blank">
    <!-- 指定文档里所有相对URL地址的基础URL，为页面上所有链接规定默认地址和默认打开方式。文档中的基础URL可以使用document.baseURI进行查询。多个base只有第一个有效。 -->
    <link rel="stylesheet" href="test.css" />
    <!-- link具有属性href、rel、media、hreflang、type和sizes。 -->
    <link rel="shortcut icon" href="ico.ico" />
    <!-- 【rel属性】
        alternate   指示链接到该文档的另一个版本
        author      指示链接到当前文档的作者主页
        help        指向一个跟网站或页面相关的帮助文档
        icon        引入代表当前文档的图标，新的sized属性与这个属性结合使用，指定链接图片的宽高
        license     链接到当前的文档的版权声明
        next        指示链接到文档是一组文档中的下一份
        pingback    处理当前文档被引用情况的服务器地址
        prefetch    指明需要缓存的目标资源
        prev        标明了上一个文档
        search      链接到可以用于搜索当前页面和相关页面的资源
        sidebar     链接到可以作为附属上下文的文档
        stylesheet  引入样式表
        tag         创建应用于当前文档的标签
    -->
    <!-- 【media属性】指定哪个媒体应该应用该link
        screen      计算机屏幕
        tty         终端
        tv          电视
        projection  投影仪
        handheld    手持设备
        print       打印的页面
        braille     盲文设备
        aural       语音合成器
        all         所有
    -->
    <link rel="icon" href="demo.gif" type="image/gif" sizes="16x16" />
    <!-- 【sizes属性】sizes属性规定被链接资源的尺寸，且只有当被链接资源是图标时，才可使用该属性 -->
    <style></style>
    <!-- style主要包含以下属性type、media、title、disabled、scoped
    使用scoped属性，可以在页面任意位置添加CSS样式。但是这样就违背了结构与样式分离的原则，要小心使用。如果该属性存在，则样式应用于其父元素；如果不存在，则应用于整个文档。该属性只有chrome和firefox支持 -->
</head>
<body>
    <article>
        <div>The scoped attribute</div>
        <p>This text should be black</p>
        <section>
            <style scoped>
                p{color:red;}
            </style>
            <p>This should be red.</p>
        </section>
    </article>
    <script type="text/javascript" src="test.js"></script>
    <!-- 没有async或defer属性的脚本和内联脚本会在浏览器继续解析剩余文档前被获取并立刻执行。
        type属性定义script元素包含或src引用的脚本语言。属性的值为MIME类型，支持的MIME类型包括text/javascript, text/ecmascript, application/javascript和application/ecmascript。如果没有定义这个属性，脚本会被视作JavaScript。如果MIME类型不是JavaScript类型(上述支持的类型)，则该元素所包含的内容会被当作数据块而不会被浏览器执行。如果type属性为module，代码会被当作JavaScript模块。
        defer="true"可以让该脚本延后到文档解析完毕后才执行。
        async属性是HTML5新增的属性，IE9-浏览器不支持。该布尔属性指示浏览器是否在允许的情况下异步执行该脚本。该属性对于内联脚本无作用(即没有src属性的脚本) -->
    <script async src="myAsyncScript.js" onload="myInit()"></script>
    <script defer src="myDeferScript.js" onload="myInit()"></script>
    <!-- 正常情况下，当浏览器在解析HTML源文件时如果遇到外部的script，那么解析过程会暂停，并发送请求来下载script文件，只有script完全下载并执行后才会继续执行DOM解析。当前有很多技术来提升页面显示速度，但都需要额外的代码以及针对特定浏览器的技巧。现在，script可以通过添加async或者defer属性来让脚本不必同步执行。 -->
    <!-- async和defer标注的script都不会暂停HTML解析就立刻被下载，两者都支持onload事件回调来解决需要该脚本来执行的初始化。如果同时设置async和defer，和只设置async属性的效果一致。 -->
    <!-- 两者的区别在于执行时的不同：async脚本在script文件下载完成后会立即执行，并且其执行时间一定在window的load事件触发之前。这意味着多个async脚本很可能不会按其在页面中的出现次序顺序执行；与此相对，浏览器确保多个defer脚本按其在HTML页面中的出现顺序依次执行，且执行时机为DOM解析完成后，document的DOMContentLoaded事件触发之前 -->
</body>
</html>
```

### HTML骨架结构

html

head

body

### HTML块级元素

```
h1, h2, h3, h4, h5, h6, hgroup
article, nav, section
p, div
hr
pre
blockquote
address
html, body
<ul>、<ol>、<dl>、<dd>、<dt>
<form>、<fieldset>、<output>、<legend>、<optgroup>、<option>
<article>、<aside>、<header>、<footer>、<nav>、<section>
<figure>、<figcaption>
<summary>、<details>
```

在HTML5出现之前，人们一般把元素分为块级、内联和内联块元素。本文将详细介绍HTML块级元素

**``<h1>``元素** 到 **``<h6>``元素**，重要性逐渐减小，字体大小也逐渐减小。在使用标题元素时，要注意以下几点

1. 不要为了减小标题的字体而使用低级别的标题，而是使用CSS的font-size样式
2. 避免跳过某级标题：始终要从``<h1>``开始，接下来使用``<h2>`` 等等
3. 使用<section> 元素时，为了方便起见，避免重复在一个页面上使用``<h1>``，``<h1>``应该用来表示页面的标题，其他的标题当从``<h2>``开始。使用<section>时，应当每个section都使用一个``<h2>``

HTML5新增了``<hgroup>``标签，它表示标题组，用于组合标题，只在区块需要有多个级别的标题时使用

```html
<hgroup>
    <h1>水果</h1>
    <h2>苹果</h2>
</hgroup>
```

**``<p>``元素**(paragraph)表示文本的一个段落，该元素通常表现为一整块与相邻文本分离的文本，或以垂直的空白隔离或以首行缩进

**``<div>``元素**(divide)(或HTML文档分区元素)是一个通用型的流内容容器，它在语义上不代表任何特定类型的内容，它可以被用来对其它元素进行分组，一般用于样式化相关的需求(使用class或id特性)或者对具有相同特性的一组元素进行分组(比如lang)，它应该在没有任何其它语义元素可用时才使用(比如``<article>``或``<nav>``)

``<hr/>, <pre>, <blockquote>``

**``<address>``元素**可以让作者为它最近的``<article>``或者``<body>``祖先元素提供联系信息。在后一种情况下，它应用于整个文档

除了 ``h、hr、hgroup、p、pre、blockquote、div、article、section、nav、address``，此外，还有

* [骨架类标签](https://www.cnblogs.com/xiaohuochai/p/6216649.html)(``<html>、<body>``)
* [列表类标签](https://www.cnblogs.com/xiaohuochai/p/5046656.html)(``<ul>、<ol>、<dl>、<dd>、<dt>``)
* [表单类标签](https://www.cnblogs.com/xiaohuochai/p/5174891.html)(``<form>、<fieldset>、<output>、<legend>、<optgroup>、<option>``)
* [HTML5新增的结构标签](https://www.cnblogs.com/xiaohuochai/p/5087815.html)(``<article>、<aside>、<header>、<footer>、<nav>、<section>``)
* [HTML5新增的多媒体标签](https://www.cnblogs.com/xiaohuochai/p/5008341.html)(``<figure>、<figcaption>``)
* [HTML5新增的功能性标签](https://www.cnblogs.com/xiaohuochai/p/5090109.html)(``<summary>、<details>``)

### HTML内联元素

```
通用容器 span
强调重要 em strong
文本修饰 i b
错误文本 s
高亮显示 mark
次要评论 small
术语处理 dfn abbr
引用文本 cite q
文本换行 br wbr
上标下标 sup sub
文本删改 ins del
特定时间 time
注音标识 ruby rt rp
文字方向 bdi bdo
代码展示 code kbd samp tt var
```

``<span>``：通用行内容器，并没有任何特殊语义

``<em>、<strong>``：表示突出，其中em可以嵌套

``<i>、<b>``：展示粗体和斜体字体。HTML5中，它们有了新的语义
1. ``<i>``
    1. 表示不同情绪或声音的文本，如内心对白
    <br>Simon smirked,"Yes,I'm happy to take the garbage out." <i>Ugh,I <em>really</em> don't want to !</i> he thought as he picked up the garbage bag.
    2. 表示外来语、分类学名和技术术语等
    <br><i lang="fr">Oh la la!</i>
2. ``<b>``
    1. 用于分隔文字<br>After bringing <b>water</b> to a boil, add <b>potatoes</b> and <b>carrots</b>
    2. 用于文章或故事的引言<br><b class="lede">Meteorologists predict more sunshine and scorching temperatures for the upcoming week, prompting area farmers to install irrigation systems.</b>

``<s>``：不精确文字，在HTML5中重新定义为有错的、过时的、不被建议使用的文本，常用于表示价格变动等<br><s>37度</s> <strong>41度</strong>

``<mark>``：表示高亮或用于引用而标记的文字<br><mark>We're all hoping it rains soon</mark>, some farmers have installed irrigation systems, at <em>considerable</em> expense

``<small>``：表示旁注，可用于免责声明、使用条款和版权信息等需要小字体的场景<br><small>图片仅供参考，请以实物为准</small><br><small>Chris Elhorn | The city Press</small>

``<dfn>``：用来定义术语<br>The term <dfn>organic food</dfn> refers to food produced without synthetic chemicals
<br>
``<abbr>``：缩写词，可以配合``<dfn>``定义术语<br>The <dfn><abbr title="Garage Door Operner">GDO</abbr></dfn> id a device allows off-world teams to open the iris.

``<cite>``：表示作品标题的引用，可以是书影音画等<br>我最喜欢的电影是<cite>千与千寻</cite>
<br>
``<q>``：表示短引用，常用于引用别人说的话，用引号可以表达等价语义
<br>The judge said <q>You can drink water form the fish tank</q> but advised against it.

``<br>``：换行，文本级语义元素，可以设置行高和字体大小，但设置宽高无效
<br>
``<wbr>``：需要时指定单词可以换行的位置<br>
<i>Irrigation<wbr/> Direct</i>

``<sup>、<sub>``：a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>、H<sub>2</sub>SO<sub>4</sub>

``<ins>``：文档中插入的内容
<br>
``<del>``：文档中删除的内容
<br>
[注意]``<ins>``和``<del>``可以嵌套任何元素
<br>[属性]<br>
datetime：用于标明编辑的日期和可选的时间<br>
cite：用于指定说明编辑的文档网址<br>
一打有 <del datetime="2015-12-30T00:00Z" cite="edit.html">二十</del> <ins>十二</ins> 件。

``<time>``：表示日期或时间
<br>[属性]<br>
datatime 表示确切的时间，遵循格式YYYY-MM-DDThh:mm:ssTZD，表示年-月-天-分割符T-时-分-秒-时区<br>
pubdate 表示``<time>``元素中的日期或时间是文档的发布日期<br>
我们在每天早上 <time>9:00</time> 开始营业。<br>
我在<time datetime="2008-02-14">情人节</time>有个约会。<br>
<small>Posted <time datetime="2015-12-30T00:00:00UTC+08:00"></time></small>

ruby标签定义注音标识，多用于CJK文字，CJK是指中日韩统一表意文字(Chinese、Japanese、Korean)<br>
``<ruby>``：表示ruby标记<br>
``<rt>``：表示ruby标记文字<br>
``<rp>``：表示ruby标记括号<br>
<ruby>漢 <rt> ㄏㄢˋ </rt></ruby><br>
<ruby>
    汉<rp>(</rp><rt>hàn</rt><rp>)</rp>
    语<rp>(</rp><rt>yǔ</rt><rp>)</rp>
</ruby>

``<bdi>``：忽略周围文字方向的文字<br>
``<bdo>``：覆盖两种方向的设置，允许显式设置方向，并覆盖所有其他当前方向<br>
When rendered by a browser, <bdo dir="rtl">these words</bdo> will appear as 'sdroweseht'

``<code>``：表示计算机代码<br>
``<kbd>``：定义键盘码<br>
``<samp>``：定义计算机例子代码<br>
``<tt>``：定义打字机代码<br>
``<var>``：定义变量<br>
<code>Computer code</code><br />
<kbd>Keyboard input</kbd><br />
<tt>Teletype text</tt><br />
<samp>Sample text</samp><br />
<var>Computer variable</var>

例子演示

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;}
    .con{float:left;}
    .con *{float:left;}
    .con dl+dl{margin-top:1%;clear:both;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:18%;}
    .show{float:left;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
    .show-body-code{font:12px/14px "宋体";background-color:rgba(255,255,255,0.3);text-align:left;white-space:pre-line;margin-bottom:5px;}
    @media (min-width:600px){
        .con{width:50%;}
        .show{width:50%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="con">
        <!-- 添加测试单元1 -->
        <dl>
            <dt>标签名称</dt>
            <dd>&lt;em&gt;</dd>
            <dd>&lt;strong&gt;</dd>
            <dd>&lt;i&gt;</dd>
            <dd>&lt;b&gt;</dd>
            <dd>&lt;s&gt;</dd>
            <dd>&lt;mark&gt;</dd>
            <dd>&lt;small&gt;</dd>
            <dd>&lt;dfn&gt;</dd>
            <dd>&lt;abbr&gt;</dd>
            <dd>&lt;cite&gt;</dd>
            <dd>&lt;q&gt;</dd>
            <dd>&lt;br&gt;</dd>
            <dd>&lt;wbr&gt;</dd>
            <dd>&lt;sup&gt;</dd>
            <dd>&lt;sub&gt;</dd>
            <dd>&lt;ins&gt;</dd>
            <dd>&lt;del&gt;</dd>
            <dd>&lt;time&gt;</dd>
            <dd>&lt;ruby&gt;</dd>
            <dd>&lt;rt&gt;</dd>
            <dd>&lt;rp&gt;</dd>
            <dd>&lt;bdo&gt;</dd>
            <dd>&lt;code&gt;</dd>
            <dd>&lt;kbd&gt;</dd>
            <dd>&lt;samp&gt;</dd>
            <dd>&lt;tt&gt;</dd>
            <dd>&lt;var&gt;</dd>
        </dl>
        <!-- 添加测试单元1结束 -->
    </div>
    <div class="show">
        <h2 class="show-tit">HTML文本级元素例子演示</h2>
        <div class="show-body" id="sb">
            <div class="show-body-code"></div>
            <div class="show-body-show"></div>
        </div>
    </div>
</div>
<script>
    (function con() {
        var aDl = document.getElementById('box').getElementsByTagName('dl');
        var oSb = document.getElementById('sb');
        var oCode = oSb.getElementsByTagName('div')[0];
        var oShow = oSb.getElementsByTagName('div')[1];
        var array = [
            '<p>I am <em>very</em> worried!</p>',
            '<strong>warning</strong>',
            '<p>Simon smirked,"Yes,I am happy to take the garbage out." <i>Ugh,I <em>really</em> do not want to !</i> he thought as he picked up the garbage bag.</p>',
            '<p>After bringing  <b>water</b> to a boil, add <b>potatoes</b> and <b>carrots</b></p>',
            '<p><s>37度 </s> <strong>41度</strong></p>',
            '<p><mark>We are all hoping it rains soon</mark>, some farmers have installed irrigation systems, at <em>considerable</em> expense </p>',
            '<small>图片仅供参考，请以实物为准</small>',
            '<p>The term <dfn>organic food</dfn> refers to food produced without synthetic chemicals</p>',
            '<p>The <dfn><abbr title="Garage Door Operner">GDO</abbr></dfn> id a device allows  off-world teams to open the iris.</p>',
            '<p>我最喜欢的电影是 <cite>千与千寻</cite></p>',
            '<p>The judge said <q>You can drink water form  the fish tank</q> but advised against it.</p>',
            '<b>The City Press</b><br>123 General Street <br>Springfield, OH 45501</p>',
            '<i>Irrigation<wbr /> Direct</i>',
            '<p>a<sup>2</sup>+b<sup>2</sup>=c<sup>2</sup></p>',
            '<p>H<sub>2</sub>SO<sub>4</sub></p>',
            '<p>一打有 <del datetime="2015-12-30T00:00Z" cite="edit.html">二十</del> <ins>十二</ins> 件。</p>',
            '<p>一打有 <del datetime="2015-12-30T00:00Z" cite="edit.html">二十</del><ins>十二</ins> 件。</p>',
            '<p>我在<time datetime="2008-02-14">情人节</time>有个约会。</p>',
            '<ruby>漢 <rt> ㄏㄢˋ </rt></ruby>',
            '<ruby>汉<rp>(</rp><rt>hàn</rt><rp>)</rp>语<rp>(</rp><rt>yǔ</rt><rp>)</rp></ruby>',
            '<ruby>汉<rp>(</rp><rt>hàn</rt><rp>)</rp>语<rp>(</rp><rt>yǔ</rt><rp>)</rp></ruby>',
            '<p>When rendered by a browser, <bdo dir="rtl">these words</bdo> will appear as "sdroweseht"</p>',
            '<p><code>Computer code</code><br><kbd>Keyboard input</kbd><br><tt>Teletype text</tt><br><samp>Sample text</samp><br><var>Computer variable</var><br></p>'];
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function() {
                    var oDl = this.parentNode;
                    var aDd = oDl.getElementsByTagName('dd');
                    aDd[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    if (this.index >= array.length) {
                        oShow.innerHTML = oCode.innerText = array[array.length - 1];
                    } else {
                        oShow.innerHTML = oCode.innerText = array[this.index];
                    }
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```

<iframe src="./htmls/inline.html" frameborder="0" width="100%" height="350"></iframe>

### HTML结构元素

结构元素，又称为区块型元素，是用来定义区块内容范围的元素。之前，区块型元素只有<div>一个，HTML5新增了7个语义化结构元素，包括``<article>、<aside>、<nav>、<section>、<header>、<footer>、<main>``

#### section

**section元素**(``<section>``)表示文档中的一个区域(或节)，是区块级通用元素。比如，内容中的一个专题组，一般来说会有包含一个标题(heading)。一般通过是否包含一个标题(``<h1>-<h6>`` element)作为子节点，来辨识每一个``<section>``，**注意**：如果元素内容可以分为几个部分的话，应该使用``<article>``而不是``<section>``；再有，不要把``<section>``元素作为一个普通的容器来使用，这是本应该是``<div>``的用法。 一般来说，一个``<section>``应该出现在文档大纲中

#### article

**article元素**(``<article>``)元素表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构。可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。当``<article>``元素嵌套使用时，则该元素代表与外层元素有关的文章。例如，代表博客评论的``<article>``元素可嵌套在代表博客文章的``<article>``元素中。``<article>``元素的作者信息可通过``<address>``元素提供，但是不适用于嵌套的``<article>``元素；``<article>``元素的发布日期和时间可通过``<time>``元素的pubdate属性表示

#### aside

**aside元素**(``<aside>``)元素表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。一般用于表示不直接相关内容的侧边栏，``<aside>``里面的内容与它所关联的内容相互独立，谁缺了谁都不影响各自文本含义的理解。如一篇文章的广告、相关背景和引述内容等。[**注意**]对于``<article>``和``<section>``来说，是必须要加上标题的

#### nav

**nav**：HTML导航栏(``<nav>``)描绘一个含有多个超链接的区域，这个区域包含转到其他页面，或者页面内部其他部分的链接列表。并不是所有的链接都必须使用``<nav>``元素，它只用来将一些热门的链接放入导航栏，例如``<footer>``元素就常用来在页面底部包含一个不常用到，没必要加入``<nav>``的链接列表。一个网页也可能含有多个``<nav>``元素，例如一个是网站内的导航列表，另一个是本页面内的导航列表

#### header

**header**(``<header>``)元素表示页面头部或区块头部，用于将介绍内容和区块的辅助导航分组到一起，所以它有可能包含区块的标题元素以及其他的介绍内容(目录、logo等)。[**注意**]由于``<header>``和``<footer>``元素不是分节内容，所以不会引入新的分节到大纲中。

#### footer

**footer**(``<footer>``)元素表示最近一个章节内容或者根节点(sectioning root)元素的页脚。一个页脚通常包含该章节作者、版权数据或者与文档相关的链接等信息。[**注意**]``<footer>``元素内的作者信息应包含在``<address>``元素中

#### main

**main**(``<main>``)元素放在最后说，是因为``<main>``不常用，最主要的原因是IE浏览器都不支持。main元素(``<main>``)呈现了文档``<body>``或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。这部分内容在文档中应当是独一无二的，不包含任何在一系列文档中重复的内容。``<main>``标签不能是以下元素的继承，包括``<article>、<aside>、<footer>、<header>、或<nav>``。在一个文档中不能出现一个以上的 ``<main>``标签。
<br>所以，一个正常的最外层布局应该是下面这样：
```html
<header></header>
<main>
    <section></section>
    <section></section>
    <section></section>
</main>
<footer></footer>
```
但现在，一般地，布局如下
```html
<header></header>
<section></section>
<section></section>
<section></section>
<footer></footer>
```

#### 例子

```html
<style>
    html, body, ul, div, nav { margin: 0; padding: 0; }
    .title ul { display: inline-block; padding: 20 0; width: 100%; text-align: center; background-color: black; font-size: 20px; }
    .title ul li { display: inline-block; width: 5%; }
    .title ul li a { text-decoration: none; color: white; font-size: 16px; }
    .title ul li a:hover { font-size: 20px; }
</style>
<nav class="title">
    <ul>
        <li><a href="#">Apple</a></li>
        <li><a href="#">Mac</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">iPhone</a></li>
        <li><a href="#">Watch</a></li>
        <li><a href="#">Music</a></li>
        <li><a href="#">技术支持</a></li>
        <li><a href="#">搜索</a></li>
        <li><a href="#">购物袋</a></li>
    </ul>
</nav>
<article class="main">
    <section>展示1</section>
    <section>展示2</section>
    <section>展示3</section>
    <section>展示4</section>
    <nav>
        <ul>
            <li>按钮1</li>
            <li>按钮2</li>
            <li>按钮3</li>
            <li>按钮4</li>
        </ul>
    </nav>
</article>
<aside class="main2">
    <ul>
        <li><a href="#">Watch</a></li>
        <li><a href="#">Pencil</a></li>
        <li><a href="#">iPad</a></li>
        <li><a href="#">MacBook</a></li>
    </ul>
</aside>
<footer>
    <nav>
        <div>选购及了解</div>
        <div>商店</div>
        <div>应用</div>
        <div>账户</div>
        <div>关于</div>
    </nav>
    <section>
        <div>其他杂项</div>
    </section>
</footer>
```

<iframe src="./htmls/nav.html" frameborder="0" width="100%" height="650"></iframe>

### HTML交互元素

HTML5不仅新增了语义型区块级元素及表单类元素，也新增了一些其他的功能性元素，这些元素由于浏览器支持等各种原因，并没有被广泛使用。

#### 文档描述

``<details>``主要用于描述文档或文档某个部分的细节，与``<summary>``配合使用可以为``<details>``定义标题。标题是可见的，用户点击标题时，显示出details。<br>
[**注意**]这两个标签只有chrome和opera支持<br>
[**属性**]仅有一个open属性，用来定义details是否可见(默认为不可见状态)

<details>
    <summary>Copyright 2015.</summary>
    <p>小火柴的蓝色理想</p>
</details>

#### 对话框

``<dialog>``标签用来定义对话框或窗口，且该对话框位于窗口的水平居中位置。<br>
[**注意**]这两个标签只有chrome和opera支持<br>
[**属性**]只有一个open属性，用来定义对话框是否可见(默认为不可见)

<button id="button0">显示对话框</button>
<dialog id="dialog0">我是对话框的内容</dialog>
<script>
var oDia = document.getElementById('dialog0');
document.getElementById('button0').onclick = function(){
    if (!oDia.getAttribute('open')) {
        oDia.setAttribute('open','open');
        this.innerHTML ='隐藏文本框';
    } else {
        oDia.removeAttribute('open');
        this.innerHTML = '显示文本框';
    }
}
</script>

### HTML标签内容模型

HTML标签在HTML5中内容模型拓展到了7类，包括元数据型、区块型、标题型、文档流型、语句型、内嵌型、交互型。但即使是这7个类别也没有完全覆盖所有元素的所有情况，元素可以不属于任何一个类别，被称为穿透的；很多元素可能属于不止一个类别，称为混合的。<br>
[HTML标签详细信息见此w3c链接](http://dev.w3.org/html5/spec-author-view/index.html#element-content-categories)

1. 根元素 ``html``
2. 文本级别语义 ``span a rt rp ruby dfn abbr q cite em time i b sup sub small strong mark ins del bdi bdo s var samp kdb code wbr``
3. 表单 ``fieldset meter legend label input textarea form select optgroup option output button datalist keygen progress``
4. 表格数据 ``table tr td th tbody thead tfoot col colgroup caption``
5. 元数据 ``head title meta base link style noscript script``
6. 组合内容 ``br hr figcaption figure p ol ul li div pre blockquote dl dt dd``
7. 文档章节 ``body aside address h1~h6 hgroup section header footer article nav``
8. 交互元素 ``menu command summary details``
9. 嵌入式内容 ``img area map embed object param source iframe canvas track audio video``

#### 元数据型(metadata)

设置展示、行为、关联文档或其他内容的元数据的元素。``<head>``元素包含文档的元素数据，包括``<base>、<command>、<link>、<meta>、<noscript>、<script>、<style>、<title>``共8个。

#### 区块型(sectioning)

定义区块内容范围的元素，包括``<article>、<aside>、<nav>、<section>``四个元素

#### 标题型(heading)

定义区块内容标题的元素，包括``<h1>到<h6>以及<hgroup>``

#### 文档流型(flow)

大部分文档``<body>``内的元素，只有部分元数据式元素不属于流式，它们是``<base>和<title>``

#### 语句型(phrasing)

文档里的文字、在段落中标记文字的元素等

#### 内嵌型(embedded)

由于HTML本身提供的元素的表达能力有限，允许嵌入内容成为浏览器开发者不得不做的事情，在文档引入另一个资源的元素或者插入文档的另一种语言。嵌入式内容包括``<audio>、<canvas>、<embed>、<iframe>、<img>、<math>、<object>、<svg>和<video>``九类<br>
[**注意**]该类元素中，``<embed>、<iframe>、<object>``这三个元素不设置宽高时，默认宽高为300px*150px

#### 交互型(interactive)

专门用于用户交互的元素，包括``<a>、<audio>、<button>、<details>、<embed>、<iframe>、<img>、<input>、<keygen>、<label>、<menu>、<object>、<select>、<textarea>、<video>``<br>
其中，``<details>、<summary>、<command>、<menu>``这四个交互元素浏览器的支持性还不太好

#### 总结

<img src="https://images2015.cnblogs.com/blog/740839/201512/740839-20151231125817167-1654285937.png" alt="">

## 重点标签

### HTML锚点

``<a>``元素 (或HTML锚元素, Anchor Element)通常用来表示一个锚点/链接。但严格来说，``<a>``元素不是一个链接，而是超文本锚点，可以链接到一个新文件、用id属性指向任何元素。如果没有``<a>``元素没有href属性的话，可以作为原本链接位置的占位符，常用于home链接。

#### href属性

```html
<a href="http://www.baidu.com">百度</a>

<a href="test.zip">下载测试</a>

<a href="#test">目录</a>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<div id="test" style="height: 200px;width: 200px; border: 1px solid black;margin-bottom: 300px;">内容</div>

<a href="http://baike.baidu.com/view/2202.htm#2">足球比赛规则</a>

<a href="tel:15012345678">15012345678</a>  <!-- 在移动端，可以唤出手机拨号盘 -->
```

href属性一定不要留空，若暂时不需要写地址，则写#或javascript:;。若href留空，会刷新页面。

href与src的区别
1. href(hypertext reference)指超文本引用，表示当前页面引用了别处的内容
2. src(source)表示来源地址，表示把别处的内容引入到当前页面
3. 所以``<img>、<script>、<iframe>``等应该使用src，而``<a>和<map>``应该使用href

#### target属性

target属性表示链接打开方式

1. _self 当前窗口（默认）
2. _blank 新窗口
3. _parent 父框架集
4. _top 整个窗口
5. _framename 指定框架

```html
//外层框架
<frameset cols = "20%, *">
    <frame src="left.html">
    <frame src="right.html">
</frameset>

//里层框架
<frameset rows = "50%,*">
    <frame src="top.html">
    <frame src="bottom.html" name="bottom">
</frameset>

//锚点页
<ul class="list">
    <li class="in"><a href="chap1.html" target="_self">chap1(_self)</a></li>
    <li class="in"><a href="chap2.html" target="_blank">chap2(_blank)</a></li>
    <li class="in"><a href="chap3.html" target="_parent">chap3(_parent)</a></li>
    <li class="in"><a href="chap4.html" target="_top">chap4(_top)</a></li>
    <li class="in"><a href="chap5.html" target="bottom">chap5(framename)</a></li>
</ul>
```

<iframe width="100%" height="350" src="./htmls/a_target.html"></iframe>

#### download属性

download属性用来设置下载文件的名称(firefox/chrome/opera支持)

```html
<a href="test.zip" download="gogo">test</a>
```

#### rel属性

rel表示链接间的关系

【应用】当一篇篇幅很长的文章需要多页显示时，配合next或prev可以实现前后页面导航的预加载

| 值         | 描述                                                           |
| :--------- | :------------------------------------------------------------- |
| alternate  | 文档的可选版本（例如打印页、翻译页或镜像）。                   |
| stylesheet | 文档的外部样式表。                                             |
| start      | 集合中的第一个文档。                                           |
| next       | 集合中的下一个文档。                                           |
| prev       | 集合中的前一个文档。                                           |
| contents   | 文档目录。                                                     |
| index      | 文档索引。                                                     |
| glossary   | 文档中所用字词的术语表或解释。                                 |
| copyright  | 包含版权信息的文档。                                           |
| chapter    | 文档的章。                                                     |
| section    | 文档的节。                                                     |
| subsection | 文档的子段。                                                   |
| appendix   | 文档附录。                                                     |
| help       | 帮助文档。                                                     |
| bookmark   | 相关文档。                                                     |
| nofollow   | Google 使用 "nofollow"，用于指定 Google 搜索引擎不要跟踪链接。 |
| licence    |
| tag        |
| friend     |
| author     | 链接到当前文档或文章的作者                                     |
| license    | 当前文档的许可证                                               |
| noreferer  | 访问时链接时不发送referer字段                                  |
| prefetch   | 预加载链接指向的页面(对于chrome使用prerender)                  |
| search     | 用于搜索当前文档或相关文档的资源                               |

```html
<a href="prev.html" rel="prev prefetch prerender">前一页</a>
<a href="next.html" rel="next prefetch prerender">后一页</a>
    //当然prefetch也可以用于预加载其他类型的资源
<link rel="prefetch prerender" href="test.img">
```

#### 注意事项

1. ``<a>``标签的文本颜色只能自身进行设置，从父级继承不到
2. ``<a>``标签的下划线颜色跟随文本颜色进行变化
3. ``<a>``标签不可嵌套``<a>``标签

<div style="color: red;">
    <a href="#">[1]从父级继承不到红色字体</a><br>
    <a href="#" style="color: green">[2]下划线颜色与文本同色</a><br>
    <a href="#">前面<a href="#">[3]a标签不可嵌套</a></a>
</div>

### HTML图像

#### img标签

``<img>``表示image图像，从技术上讲，``<img>``标签并不会在网页中插入图像，而是从网页上链接图像。``<img>`` 标签创建的是被引用图像的占位空间。

【必须属性】

1. src:地址
2. alt:图像替代文本，供探索引擎抓取使用

【可选属性】

1. height:图像高度
2. width:图像宽度
3. ismap:为图像定义为服务器端图像映射
4. longdesc:与alt属性类似，提供多于1024字符的长文本描述
5. usemap:为图像定义客户端图像映射 usemap = "#``<map>``元素的name或id属性"<br>``<img src="test.jpg" alt="测试图片" width="100" height="100">``
6. srcset:指定图片的地址和对应的图片质量。属性格式：图片地址 宽度描述w 多个资源之间用逗号分隔。对于srcset里面出现了一个w单位，可以理解成图片质量。如果可视区域小于这个质量的值，就可以使用，当然，浏览器会自动选择一个最小的可用图片。但是，会发现随着浏览器窗口宽度变大，图片也在不断变大。[**注意**]浏览器会自动匹配最佳显示的图片，如果大图既然缓存了就用大图了，再缩小也不会变成小图了。<br>``<img src="small.jpg" srcset="small.jpg 300w,middle.gif 500w,big.gif 800w">``
7. sizes:用来设置图片的尺寸零界点，主要跟响应式布局打交道。属性格式：媒体查询 宽度描述(支持px)，多条规则用逗号分隔。[**注意**]如果加上sizes属性，会发现，随着浏览器宽度变大，图片一直保持其初始尺寸。所以，应该sizes和srcset两个属性配合使用。<br>``<img src="small.jpg" srcset="small.jpg 300w,middle.gif 500w,big.gif 800w" sizes="(max-width:300px) 300px, (max-width:500px) 500px,800px">``
8. crossorigin:使得在canvas中使用图片资源时可以突破跨越限制。<br>``<img alt="plane" src="test.jpg" crossorigin="anonymous">``

#### figure标签

代表一段独立的内容，经常与说明(caption)``<figcaption>``配合使用，并且作为一个独立的引用单元。figure通常用来插入图片，但它也可以是一段代码、图片、音乐或者视频。

【默认样式】margin: 16px 40px;

<figure>
  <figcaption>黄浦江上的的卢浦大桥</figcaption>
  <img src="#" width="350" height="234" />
</figure>

#### figcaption

定义figure元素的标题，且应该位于figure元素的第一个或最后一个子元素的位置。figure中只能包含一个figcaption。

#### map

与``<area>``属性一起使用来定义一个图像映射。[**注意**]``<img>``中的usemap属性可引用``<map>``中的id或name属性(取决于浏览器)，所以应同时向``<map>``添加id和name属性。

```html
<head>
    <base href="https://www.w3school.com.cn" target="_self" />
</head>
<body>
    <p>请点击图像上的星球，把它们放大。</p>
    <img src="/i/eg_planets.jpg" border="0" usemap="#planetmap" alt="Planets" />
    <map name="planetmap" id="planetmap">
        <area shape="circle" coords="180,139,14" href="/example/html/venus.html" alt="Venus" />
        <area shape="circle" coords="129,161,10" href="/example/html/mercur.html" alt="Mercury" />
        <area shape="rect" coords="0,0,110,260" href="/example/html/sun.html" alt="Sun" />
    </map>
    <p><b>注释：</b>img 元素中的 "usemap" 属性引用 map 元素中的 "id" 或 "name" 属性（根据浏览器），所以我们同时向 map 元素添加了 "id" 和 "name" 属性。</p>
</body>
```

<iframe src="./htmls/map.html" width="100%" height="380" frameborder="0"></iframe>

#### area

``<area>``用来定义图像热区，``<area>``总是嵌套在``<map>``标签中

【必须属性】

1. alt:替代文本

【可选属性】
1. coords:定义可点击区域的坐标
2. href:定义此区域的目标URL
3. nohref:排除某个区域(html5中已废弃)
4. shape:定义区域的形状
    1. 圆形(circ/circle) coords= "x,y,r" x,y是圆心坐标；r是半径
    2. 多边形(poly/polygon) coords = "x1,y1,x2,y2,x3,y3……" x,y是多边形每个顶点的坐标
    3. 矩形(rect/rectangle) coords = "x1,y1,x2,y2" x1,y1是左上角坐标；x2,y2是右下角坐标
    4. 全部区域default(默认)

[**注意**]``<area>``标签采用"先来先得"的顺序，如果区域有重叠，以先出现的``<area>``为准

```html
<head>
    <base href="https://baike.baidu.com/" target="_self">
</head>
<body>
    <img src="https://demo.xiaohuochai.site/jihe.jpg" alt="几何图形" width="600" height="220" usemap="#Map">
    <map name="Map">
        <area shape="rect" coords="35,38,150,158" href="/item/矩形" alt="四边形">
        <area shape="poly" coords="175,109,193,44,268,41,296,109,233,151" href="/item/六边形" alt="六边形">
        <area shape="poly"
            coords="315,81,330,58,356,40,387,37,411,52,430,79,433,108,418,132,389,153,357,154,333,137,315,108"
            href="/item/十二边形" alt="12边形">
        <area shape="circle" coords="512,95,60" href="/item/圆" alt="圆形">
    </map>
</body>
```

<iframe src="./htmls/map2.html" width="100%" height="240" frameborder="0"></iframe>

### HTML列表

无序列表、有序列表和定义列表
ul ol li
dl dt dd

#### 无序列表

默认样式
```css
// IE7-浏览器margin-left: 30pt;
ul {
    margin: 16px 0;
    padding-left: 40px;
    list-style-type: disc;
}
```

#### 有序列表

默认样式
```css
// IE7-浏览器margin-left: 30pt;
ol {
    margin: 16px 0;
    padding-left: 40px;
    list-style-type: decimal;
}
/* HTML5为ol新增了两个属性：reversed和start */
```

<ol reversed start="2">
    <li>咖啡</li>
    <li>牛奶</li>
    <li>茶</li>
    <li>可乐</li>
    <li>酒</li>
</ol>

#### marker

marker表示ol或ul中li的列表项标志，虽然list-style样式只能应用于display的值为list-item的元素，但由于该样式可继承，所以竟然将其应用在ol或ul，然后通过继承，使所有的li都获取设置的list-style样式。如果给某一个li设置list-style样式，将覆盖其从父级继承的list-style样式。

``list-style(列表项标志复合样式):list-style-type list-style-image list-style-position``

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;}
    .con{float:left;}
    .show{float:left;}
    .con *{float:left;}
    .con dl+dl{margin-top:1%;clear:both;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:23%;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
    @media (min-width:600px){.con{width:50%;}
        .show{width:50%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="con">
        <dl>
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
        <dl>
            <dt>list-style-image</dt>
            <dd>none</dd>
            <dd>arrow.gif</dd>
        </dl>
        <dl>
            <dt>list-style-position</dt>
            <dd>inside</dd>
            <dd>outside</dd>
        </dl>
    </div>
    <div class="show">
        <h2 class="show-tit">列表项标志演示</h2>
        <div class="show-body" id="sb">
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
</div>
<script>
    (function con() {
        var oBox = document.getElementById('box');
        var aDl = oBox.getElementsByTagName('dl');
        var oSb = document.getElementById('sb');
        var oShow = oSb.getElementsByTagName('ol')[0];
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var oDt = aDl[i].getElementsByTagName('dt')[0];
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function () {
                    var oDl = this.parentNode;
                    var oDt = oDl.getElementsByTagName('dt')[0];
                    if (oShow.style[oDt.innerHTML] == this.innerHTML) {
                        return
                    }
                    var aDd = oDl.getElementsByTagName('dd');
                    aDd[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    if (this.innerHTML == 'arrow.gif') {
                        oShow.style.listStyle = 'url("http://sandbox.runjs.cn/uploads/rs/26/ddzmgynp/arrow.gif")';
                    } else if (this.innerHTML != 'none') {
                        setTimeout(() => { oShow.style[oDt.innerHTML] = this.innerHTML; }, 0);
                        oShow.style[oDt.innerHTML] = 'none';
                    } else {
                        oShow.style[oDt.innerHTML] = 'none';
                    }
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```

<iframe src="./htmls/marker.html" frameborder="0" width="100%" height="380"></iframe>

#### 定义列表

```css
dl { margin: 16px 0; }
// IE7-浏览器margin-left: 30pt;
dd { margin-left: 40px; }
```

<dl>
    <dt>Coffee</dt>
    <dd>Black hot drink</dd>
    <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>

### HTML框架

框架``<frame>``已经被废弃，而内嵌框架``<iframe>``依然在使用。通过使用框架，可以在同一个窗口显示不止一个页面。每份HTML文档称为一个框架，并且每个框架都独立于其他的框架

#### frameset

框架结构标签(也称为框架集)定义如何将窗口分割成框架，每个frameset定义了一系列行或列。[**注意**]不能将``<body>``标签与``<frameset>``标签同时使用<br>
【属性】<br>
cols 定义框架集列的数目和尺寸<br>
rows 定义框架集行的数目和尺寸

```html
<frameset rows="150,300,150">
<frameset rows="25%,50%,25%">
<frameset cols="100, *">
<frameset rows="*, 100, *">
<frameset cols="10%, 3*, *, *">
```

#### frame

【属性】
* src 规定在框架中显示的文档的URL
* name 规定框架的名称，用于在javascript中引用元素或作为链接的目标
* noresize 指定用户无法调整框架大小
* longdesc 指向带有框架内容长描述的页面
* scroll
    * scroll="auto"//默认，需要时显示滚动条
    * scroll="yes"//始终显示滚动条
    * scroll="no"//从不显示滚动条
* frameborder
    * frameborder="0"//无边框
    * frameborder="1"//(默认，有边框)

```html
<frame src="frame_a.htm" frameborder="0" name="frame1" scrolling="yes"  noresize="noresize"  longdesc="w3school.txt" />

<frameset cols="25%,75%">
   <frame src="frame_a.htm">
   <frame src="frame_b.htm">
</frameset>

<frameset rows="50%,50%">
    <frame src="/example/html/frame_a.html">
    <frameset cols="25%,75%">
        <frame src="/example/html/frame_b.html">
        <frame src="/example/html/frame_c.html">
    </frameset>
</frameset>
```

#### iframe

内联框架用于在网页中显示网页。iframe标签可以很方便地创建框架，但由于创建一个框架意味着要创建一个完整的页面环境，很耗费资源；因此能不用就尽量不用。

* src 规定在内联框架中显示的文档的URL
* name 规定内联框架的名称，用于在javascript中引用元素或作为链接的目标
* height 规定iframe的高度
* width 规定iframe的宽度
* longdesc 指向带有内联框架内容长描述的页面(已废弃)
* frameborder(已废弃)，0表示无边框，1(默认)表示有边框
* scrolling(已废弃)，auto(默认)需要时显示滚动条，yes始终显示滚动条，no从不显示滚动条
* seamless 规定iframe看上去像是包含文档的一部分，设置该属性后，iframe无边框或滚动条
* sandbox 启用对``<iframe>``中内容的限制，可以用空格分隔多个属性值(IE9-不支持)
    * sandbox=""//应用所有的限制
    * sandbox="allow-same-origin"//允许iframe内容被视为与包含文档有相同的来源
    * sandbox="allow-top-navigation"//允许iframe内容从包含文档导航加载内容
    * sandbox="allow-forms"//允许表单提交
    * sandbox="allow-scripts"//允许脚本执行
* srcdoc 规定在iframe中显示的页面的HTML内容(IE浏览器不支持)，若浏览器支持srcdoc属性，则将显示srcdoc属性的内容；否则将显示src属性中规定的文件。<br>``<iframe srcdoc="<p>Hello world!</p>" src="/demo/demo_iframe_srcdoc.html"></iframe>``

#### 框架脚本

如果页面中包含框架，则每个框架都拥有自己的window对象，并且保存在frames集合中。在frames集合中，可以通过数值索引(从0开始，从左至右，从上到下)或者框架名称来访问相应的window对象。每个window对象都有一个name属性，其中包含框架的名称。

top对象始终指向最高(最外)层的框架，也就是浏览器窗口。使用它可以确保在一个框架中正确地访问另一个框架。因为对于在一个框架中编写的任何代码来说，其中的window对象指向的都是那个框架的特定实例，而非最髙层的框架。下图展示了在最髙层窗口中，通过代码来访问前面例子中每个框架的不同方式。

```html
<frameset rows = "40%,*">
    <frame src="https://www.hao123.com/" name="topFrame">
    <frameset cols = "50%,50%">
        <frame src="http://www.baidu.com" name="leftFrame">
        <frame src="http://www.kongzhong.com/" name="rightFrame">
    </frameset>
</frameset>
```

```js
window.frames[0]
window.frames["topFrame"]
top.frames[0]
top.frames["topFrame"]
frames[0]
frames["topFrame"]

window.frames[1]
window.frames["leftFrame"]
top.frames[1]
top.frames["leftFrame"]
frames[1]
frames["leftFrame"]

window.frames[2]
window.frames["rightFrame"]
top.frames[2]
top.frames["rightFrame"]
frames[2]
frames["rightFrame"]
```

与top相对的另一个window对象是parent。顾名思义，parent(父)对象始终指向当前框架的直接上层框架。在某些情况下，parent有可能等于top。但在没有框架的情况下，parent一定等于top(此时它们都等于window)。

浏览器在加载完第一个框架集以后，会继续将第二个框架集加载到rightFrame中。如果代码位于redFrame(或blueFrame)中，那么parent对象指向的就是rightFrame。可是，如果代码位于topFrame中，则parent指向的是top，因为topFrame的直接上层框架就是最外层框架。

除非最高层窗口是通过window.open()打开的，否则其window对象的name属性不会包含任何值。

<!-- <iframe src="./htmls/frameset.html" width="100%" height="500"></iframe> -->
<img src="https://images2015.cnblogs.com/blog/740839/201702/740839-20170208092108916-2107911120.png"/>

与框架有关的最后一个对象是self，它始终指向window。实际上，self和window对象可以互换使用。引入self对象的目的只是为了与top和parent对象对应起来，因此它不格外包含其他值。

所有这些对象都是window对象的属性，可以通过window.parent、window.top等形式来访问。同时，这也意味着可以将不同层次的window对象连缀起来，例如window.parent.parent.frames[0]

在使用框架的情况下，浏览器中会存在多个Global对象。在每个框架中定义的全局变量会自动成为框架中window对象的属性。由于每个window对象都包含原生类型的构造函数，因此每个框架都有一套自己的构造函数，这些构造函数一一对应，但并不相等。例如，top.Object并不等于top.frames[0].Object。这个问题会影响到对跨框架传递的对象使用instanceof操作符。最典型的影响就是数组的类型检测。

#### iframe脚本

通过getElementsById()等方法获得的是iframe的DOM节点，而并非iframe的window。使用contextWindow(IE7-浏览器不支持)属性可以获得iframe节点的包含的window对象，或者使用contentDocument属性获得包含的document对象。如果使用frames\[序号]或者frames\[name]获得的就是iframe的Window对象。

```html
<iframe id = "frameID" name="frameName" src="top.html"></iframe>
<script>
    var frameID = document.getElementById('frameID');
    var frameWindow = frameID.contentWindow;
    var frameDocument = frameID.contentDocument;
    // <iframe> window document
    console.log(frameID, frameWindow, frameDocument);
    // window window
    console.log(frames[0], frames.frameName);
</script>
```

iframe元素遵守同源政策，只有当父页面与框架页面来自同一个域名，两者之间才可以用脚本通信。iframe窗口内部，使用window.parent引用父窗口。如果当前页面没有父窗口，则window.parent属性返回自身。因此，可以通过window.parent是否等于window.self，判断当前窗口是否为iframe窗口。

```js
if (window.parent !== window.self) {
    // 当前窗口是子窗口
}
```

[剩余部分](https://www.cnblogs.com/xiaohuochai/p/5047343.html)

### HTML表格

#### table

【默认样式】
```css
// IE7-浏览器不支持border-spacing
table {
　　border-collapse: separate;
　　border-spacing: 2px;
　　border: 1px solid gray;
}
```

1. border(在html5中，border只能为"1"或" ")(html5已废弃)。
    1. border="0" // 没有边框
    2. border="8" // 8像素宽的边框
2. cellpadding(px/%)(html5已废弃)规定单元边界与单元内容之间的间距
3. cellspacing(px/%)(html5已废弃)规定单元格之间的间距
4. summary(html5已废弃)表格内容的摘要
5. width(html5已废弃)表格宽度
6. frame(IE7-浏览器不能正常显示)(html5已废弃)
    1. void 不显示外侧边框。
    2. above 显示上部的外侧边框。
    3. below 显示下部的外侧边框。
    4. hsides 显示上部和下部的外侧边框。
    5. vsides 显示左边和右边的外侧边框。
    6. lhs 显示左边的外侧边框。
    7. rhs 显示右边的外侧边框。
    8. box 在所有四个边上显示外侧边框。
    9. border 在所有四个边上显示外侧边框。
7. rules(IE7-浏览器不能正常显示)(html5已废弃)
    1. none 没有线条。
    2. groups 位于行组和列组之间的线条。
    3. rows 位于行之间的线条。
    4. cols 位于列之间的线条。
    5. all 位于行和列之间的线条。

```html
<style>
    body, div, dl, dt, dd, ol, ul, li { margin: 0; padding: 0; }
    .container { width: 600px; min-height: 220px; background-color: #CCCCCC; padding: 10px; }
    .nav { float: left; width: 50%; }
    .nav dt { text-align: center; font-weight: bold; padding: 5px 0; }
    .nav dd { display: inline-block; width: 50px; color: black; background-color: rgba(255,255,255,0.3); margin: 5px; padding: 0 5px; text-align: center; cursor: pointer; }
    .show { float: right; width: 50%; text-align: center; }
    .show p { font-size: larger; color: rgb(75, 75, 75); font-family: Arial, Helvetica, sans-serif; }
    .show div { border: 1px solid black; padding: 20px; display: inline-block; border-radius: 10px; }
</style>
<div class="container">
    <dl class="nav">
        <dt>frame</dt>
        <dd>border</dd>
        <dd>void</dd>
        <dd>above</dd>
        <dd>below</dd>
        <dd>hsides</dd>
        <dd>vsides</dd>
        <dd>lhs</dd>
        <dd>rhs</dd>
        <dd>box</dd>
        <dt>rules</dt>
        <dd>all</dd>
        <dd>none</dd>
        <dd>groups</dd>
        <dd>rows</dd>
        <dd>cols</dd>
    </dl>
    <div class="show">
        <p>frame属性和rules属性</p>
        <div>
            <table id="target" border="2" cellpadding="5" cellspacing="3" summary="测试表格">
                <tr>
                    <td>row 1, cell 1</td>
                    <td>row 1, cell 2</td>
                </tr>
                <tr>
                    <td>row 2, cell 1</td>
                    <td>row 2, cell 2</td>
                </tr>
            </table>
        </div>
    </div>
</div>
<script>
    (function start() {
        var dts = []
        var isFirst = false
        var attrNode = null
        var target = document.getElementById("target")
        document.getElementsByClassName("nav")[0].childNodes.forEach((node, index, array) => {
            var nodeName = node.nodeName
            if (nodeName == "DT") {
                attrNode = node
                dts.push([node.innerText, index])
                node.last = -1
                isFirst = true
            } else if (nodeName == "DD") {
                node.index = index
                node.onclick = function() {
                    var childNodes = this.parentNode.childNodes
                    var msg = dts.find((value, index, array2) => value[1] < this.index)
                    var attrNode = childNodes[msg[1]]
                    var last = attrNode.last
                    if (last == this.index) {
                        return
                    } else if (last != -1) {
                        childNodes[last].style.cssText = "color: black; background-color: rgba(255,255,255,0.3);"
                    }
                    this.style.cssText = "color: white; background-color: black;"
                    attrNode.last = this.index
                    target[msg[0]] = this.innerText
                }
                if (isFirst) {
                    isFirst = false
                    node.style.cssText = "color: white; background-color: black;"
                    attrNode.last = index
                }
            }
        })
        dts.reverse()
    })()
</script>
```

<iframe src="./htmls/table.html" frameborder="0" width="100%" height="240"></iframe>

1. border-spacing\[可替代HTML属性cellspaing](IE7-不支持)。【注意】只有当border-collapse值为separate时，该样式才有效。border-spacing: x y。x:水平间距 y:垂直间距。若只有一个值，则水平间距和垂直间距相等。注意，不可为负值。
2. empty-cells(IE7-不支持)
    1. hide 不在空单元格周围绘制边框和背景，类似于hidden效果
    2. show(默认) 在空单元格周围绘制边框和背景
3. border-collapse【重点，还不是很懂】
    1. separate 单元格相互之间是分隔的，【注意】在分隔边框模型中，不能为行、行组、列和列组设置边框。
    2. collapse 单元格边框会相互合并，表格无法设置内边距padding，且单元格边框之间也没有间距。单元格之间的边框会在单元格间的假想表格线上居中，且表格宽度只包含表格边框的一半
    3. 【边框合并的规则】
        1. 某个合并边框的border-style为hidden，它会优先于所有其他合并边框。这个位置上的所有边框都隐藏
        2. 某个合并边框的border-style为none，它的优先级最低
        3. 宽边框优先于窄边框
        4. 若宽度相同，double\solid\dashed\dotted\ridge\outset\groove\inset，优先级逐渐降低
        5. 若样式也相同，cell\row\row group\column\column group\table，优先级逐渐降级

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;}
    .con{float:left;}
    .con *{float:left;}
    .con dl+dl{margin-top:1%;clear:both;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;}
    .show{float:left;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
    @media (min-width:600px){.con{width:50%;}
        .show{width:50%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="con">
        <!-- 添加测试单元1 -->
        <dl>
            <dt style="color: red">cell1-1</dt>
            <dd>hidden</dd>
            <dd>none</dd>
            <dd>dashed</dd>
            <dd>solid</dd>
        </dl>
        <!-- 添加测试单元1结束 -->
        <!-- 添加测试单元2 -->
        <dl>
            <dt style="color: green">cell1-2</dt>
            <dd>hidden</dd>
            <dd>none</dd>
            <dd>dashed</dd>
            <dd>solid</dd>
        </dl>
        <!-- 添加测试单元2结束 -->
        <!-- 添加测试单元3 -->
        <dl>
            <dt style="color: blue">cell2-1</dt>
            <dd>hidden</dd>
            <dd>none</dd>
            <dd>dashed</dd>
            <dd>solid</dd>
        </dl>
        <!-- 添加测试单元3结束 -->
        <!-- 添加测试单元4 -->
        <dl>
            <dt style="color: yellow">cell2-2</dt>
            <dd>hidden</dd>
            <dd>none</dd>
            <dd>dashed</dd>
            <dd>solid</dd>
        </dl>
        <!-- 添加测试单元4结束 -->
        <!-- 添加测试单元5 -->
        <dl>
            <dt style="color: pink">row1</dt>
            <dd>hidden</dd>
            <dd>none</dd>
            <dd>dashed</dd>
            <dd>solid</dd>
        </dl>
        <!-- 添加测试单元5结束 -->
        <!-- 添加测试单元6 -->
        <dl>
            <dt style="color: gray">table</dt>
            <dd>hidden</dd>
            <dd>none</dd>
            <dd>dashed</dd>
            <dd>solid</dd>
        </dl>
        <!-- 添加测试单元6结束 -->
    </div>
    <div class="show">
        <h2 class="show-tit">表格层演示</h2>
        <div class="show-body" id="sb">
            <!-- 添加结构单元 -->
            <table border="1" id="table" style="color: gray;" cellpadding="6">
                <col id="col1">
                <tr id="row1" style="color: pink;">
                    <td id="cell1-1" style="color:red;">row 1, cell 1</td>
                    <td id="cell1-2" style="color:green;">row 1, cell 2</td>
                </tr>
                <tr>
                    <td id="cell2-1" style="color:blue;">row 2, cell 1</td>
                    <td id="cell2-2" style="color:yellow;">row 2, cell 2</td>
                </tr>
            </table>
            <!-- 添加结构单元结束 -->
        </div>
    </div>
</div>
<script>
    (function con() {
        var oBox = document.getElementById('box');
        var aDl = oBox.getElementsByTagName('dl');
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
                    document.getElementById(oDt.innerHTML).style.border = this.innerHTML;
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```

<iframe src="./htmls/table2.html" frameborder="0" width="100%" height="450"></iframe>【重点，还不是很懂】

4. **table-layout**【重点，还不是很懂】
    1. auto//自动宽度布局。【自动布局的步骤】
        1. 对于一列中的单元格，计算最小和最大单元格宽度
        2. 对于各一列，计算最小和最大列宽
        3. 若单元格跨列，最小列宽之和要等于跨列单元格最小单元格宽度
    2. fixed//固定宽度布局。【注意】对于表单元格的长文本来说，使用word-wrap或word-break来强制换行，使用text-overflow实现文本溢出控制都需要设置table-layout:fixed。使用固定宽度布局，用户代理可以更快地计算出表格的布局。【固定布局的步骤】
        1. width属性值不是auto的所有列元素会根据width值设置该列的宽度
        2. 如果一个列的宽度为auto，则根据该单元格设置此列宽度，如果跨多列，则宽度平均分配
        3. 如果列宽度仍为auto，则自动确定其大小，使其宽度尽可能相等
5. **vertical-align**【重点，还不是很懂】
    1. vertical-align: top;//顶端对齐
    2. vertical-align: bottom;//底端对齐
    3. vertical-align: middle;//中间对齐
    4. vertical-align: baseline(默认);//基线对齐
    5. 【注意】vertical-align:sub\super\text-top\text-bottom应用到表格单元格时会被忽略

#### 行(tr/th/td)

* ``<tr>``行 table row
* ``<th>``表头 table head
* ``<td>``表格数据 table data

【默认样式】
```css
th {
    padding: 1px;
    text-align: center;
    font-weight: bold;
}
td { padding: 1px; }
```

td【属性】
1. colspan 规定单元格可横跨的列数
2. rowspan 规定单元格可横跨的行数
3. 【注意】关于行的表格元素生成矩形框，这些框有内容、内边距和边框，但是没有外边距margin。表头呈现为居中的粗体文本

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;}
    .con{float:left;}
    .con dl *{float:left;}
    .con dl+dl{margin-top:1%;clear:both;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:23%;}
    .show{float:left;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
    @media (min-width:600px){.con{width:50%;}
        .show{width:50%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="con">
        <h2 style="font-size:20px;line-height:50px;padding-top: 10px;">（row1,cell1）单元格</h2>
        <!-- 添加测试单元1 -->
        <dl>
            <dt>rowspan</dt>
            <dd>0</dd>
            <dd>1</dd>
            <dd>2</dd>
            <dd>3</dd>
        </dl>
        <!-- 添加测试单元1结束 -->
        <!-- 添加测试单元2 -->
        <dl>
            <dt>colspan</dt>
            <dd>0</dd>
            <dd>1</dd>
            <dd>2</dd>
            <dd>3</dd>
        </dl>
        <!-- 添加测试单元2结束 -->
    </div>
    <div class="show">
        <h2 class="show-tit">rowspan属性和colspan属性</h2>
        <div class="show-body" id="sb">
            <!-- 添加结构单元 -->
            <table border="4" cellpadding="2" cellspacing="5">
                <tr>
                    <td>row 1, cell 1</td>
                    <td>row 1, cell 2</td>
                </tr>
                <tr>
                    <td>row 2, cell 1</td>
                    <td>row 2, cell 2</td>
                </tr>
            </table>
            <!-- 添加结构单元结束 -->
        </div>
    </div>
</div>
<script>
    (function con() {
        var oBox = document.getElementById('box');
        var aDl = oBox.getElementsByTagName('dl');
        var oSb = document.getElementById('sb');
        var oShow = oSb.getElementsByTagName('td')[0];
        for (var i = 0, leni = aDl.length; i < leni; i++) {
            var oDt = aDl[i].getElementsByTagName('dt')[0];
            var aDd = aDl[i].getElementsByTagName('dd');
            aDl[i].last = 0;
            for (var j = 0, lenj = aDd.length; j < lenj; j++) {
                aDd[j].index = j;
                aDd[j].onclick = function() {
                    var oDl = this.parentNode;
                    var oDt = oDl.getElementsByTagName('dt')[0];
                    var aDd = oDl.getElementsByTagName('dd');
                    aDd[oDl.last].style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    this.style.cssText = 'color: white; background-color: black;';
                    oShow.setAttribute(oDt.innerHTML, this.innerHTML);
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```

<iframe src="./htmls/td.html" frameborder="0" width="100%" height="230"></iframe>

#### 列(col/colgroup)

1. ``<col>`` -> column 列。为表格中一个或多个列定义属性值
2. ``<colgroup>`` -> column group 列组。对表格中的列进行组合，以便对其进行格式化

【属性】

1. span 规定col元素应该横跨的列数

【样式】

1. visibility:collapse 该列或列组的所有单元格不显示(设置为其他值则无效)
2. border 只有当border-collapse:collapse时，才能设置border
3. background 只有当单元格及其行有透明背景时，列或列组的背景才可见
4. width 定义列或列组的最小宽度

<table border="1" style="border-collapse: collapse">
    <colgroup span="2" style="width:100px; background-color: red"></colgroup>
    <col style="background-color: green; width:200px; border: 3px solid blue;">
    <tr>
        <td>数字</td>
        <td>中文</td>
        <td>英文</td>
    </tr>
    <tr>
        <td>1</td>
        <td>一</td>
        <td>a</td>
    </tr>
    <tr>
        <td>2</td>
        <td>二</td>
        <td>b</td>
    </tr>
</table>

#### 其他表格元素(thead/tbody/tfoot/caption)

出现次序应该是：caption(表格标题)、thead(表格页眉)、tfoot(表格页脚)、tbody(表格主体)，这样浏览器就可以在收到所有数据前呈现页脚。

【默认样式】
```css
caption { text-align: center; }
```

【样式】

* caption-side: top(默认)
* caption-side: bottom

【注意】``<caption>``标签必须紧随``<table>``标签之后，且只能对每个表格定义一个标题

<table border="1">
    <caption style="caption-side: bottom;">北京天气</caption>
    <thead>
        <tr>
            <th>地区</th>
            <th>天气</th>
        </tr>
    </thead>
    <tfoot>
        <tr>
            <td>北京</td>
            <td>都雾霾</td>
        </tr>
    </tfoot>
    <tbody>
        <tr>
            <td>城八区</td>
            <td>雾霾</td>
        </tr>
        <tr>
            <td>郊区</td>
            <td>雾霾</td>
        </tr>
    </tbody>
</table>

#### display

【重点，还不是很懂】
```css
table { display: table; }
thead { display: table-header-group; }
tbody { display: table-row-group; }
tfoot { display: table-footer-group; }
tr { display: table-row; }
td, th { display: table-cell; }
col { display: table-column; }
colgroup { display: table-column-group; }
caption { display: table-caption; }
```

【注意】IE7-浏览器不支持为HTML元素设置与表格有关的display值

#### 匿名表格对象

CSS定义了一种机制，将遗漏的组件作为匿名对象插入。详细插入规则如下：

1. 如果table-cell(td, th)元素的父元素不是table-row(tr)元素，则插入匿名table-row对象
2. 如果table-row(tr)元素的父元素不是table、inline-table或table-row-group(tbody)元素，则插入匿名table元素
3. 如果table-column(col)元素父元素不是table、inline-table或table-row-group(tbody)元素，则插入匿名table元素
4. 如果table-row-group(tbody)、table-header-group(thead)、table-footer-group(tfoot)、table-column-group(colgroup)或table-caption(caption)的父元素不是table元素，则插入匿名table元素
5. 如果table元素或inline-table元素的子元素不是table-row-group、table-header-group、table-footer-group、table-column-group或table-caption，则插入匿名table-row元素
6. 如果table-row-group、table-header-group、table-footer-group元素的子元素不是table-row元素，则插入匿名table-row元素
7. 如果table-row元素的子元素不是table-cell元素，则插入匿名tabel-cell元素

#### 表格层

CSS定义了6个不同的层，对应表各个方面的样式都在其各自的层上绘制。默认地，所有元素背景都是透明的，如果单元格、行、列等没有自己的背景，则table元素的背景将透明这些内部元素可见。

* 单元格
* 行
* 行组
* 列
* 列组
* 表

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;}
    .con{float:left;}
    .con dl *{float:left;}
    .con dl+dl{margin-top:1%;clear:both;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:48%;}
    .show{float:left;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
    @media (min-width:600px){.con{width:50%;}
        .show{width:50%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="con">
        <!-- 添加测试单元1 -->
        <dl>
            <dt>table</dt>
            <dd>transparent</dd>
            <dd>green</dd>
        </dl>
        <!-- 添加测试单元1结束 -->
        <!-- 添加测试单元2 -->
        <dl>
            <dt>col1</dt>
            <dd>transparent</dd>
            <dd>red</dd>
        </dl>
        <!-- 添加测试单元2结束 -->
        <!-- 添加测试单元3 -->
        <dl>
            <dt>row1</dt>
            <dd>transparent</dd>
            <dd>blue</dd>
        </dl>
        <!-- 添加测试单元3结束 -->
        <!-- 添加测试单元4 -->
        <dl>
            <dt>cell1</dt>
            <dd>transparent</dd>
            <dd>yellow</dd>
        </dl>
        <!-- 添加测试单元4结束 -->
    </div>
    <div class="show">
        <h2 class="show-tit">表格层演示</h2>
        <div class="show-body" id="sb">
            <!-- 添加结构单元 -->
            <table border="4" cellpadding="2" cellspacing="5" id="table">
                <col id="col1">
                <tr id="row1">
                    <td id="cell1">row 1, cell 1</td>
                    <td>row 1, cell 2</td>
                </tr>
                <tr>
                    <td>row 2, cell 1</td>
                    <td>row 2, cell 2</td>
                </tr>
            </table>
            <!-- 添加结构单元结束 -->
        </div>
    </div>
</div>
<script>
    (function con() {
        var oBox = document.getElementById('box');
        var aDl = oBox.getElementsByTagName('dl');
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
                    document.getElementById(oDt.innerHTML).style.backgroundColor = this.innerHTML;
                    oDl.last = this.index;
                }
            }
        }
    })();
</script>
```

<iframe src="./htmls/table3.html" frameborder="0" width="100%" height="320"></iframe>

#### 边距设置

* 【``<table>``】若处于分隔边框模型，margin和padding都可设置。若处于合并边框模型，只可设置margin
* 【``<thead><tbody><tfoot><tr><col><colgroup>``】margin和padding都不可设置
* 【``<td><th>``】不可设置margin，但可以设置padding
* 【``<caption>``】margin和padding都可设置

### DOM操作表格

【效果】
```html
<table border = "1" width = "100%">
    <tbody>
        <tr>
            <td>Cell 1,1</td>
            <td>Cell 2,1</td>
        </tr>
        <tr>
            <td>Cell 1,2</td>
            <td>Cell 2,2</td>
        </tr>
    </tbody>
</table>
```

【方法一】
```js
// 创建表格
var table = document.createElement("table");
table.border = "1";
table.width = "100%";

// 创建tbody
var tbody = document.createElement("tbody");
table.appendChild(tbody);

// 创建第一行
var row1 = document.createElement("tr");
tbody.appendChild(row1);
var cell1_1 = document.createElement("td");
cell1_1.appendChild(document.createTextNode("Cell 1,1"));
row1.appendChild(cell1_1);
var cell2_1 = document.createElement("td");
cell2_1.appendChild(document.createTextNode("Cell 2,1"));
row1.appendChild(cell2_1);

// 创建第二行
var row2 = document.createElement("tr");
tbody.appendChild(row2);
var cell1_2 = document.createElement("td");
cell1_2.appendChild(document.createTextNode("Cell 1,2"));
row2.appendChild(cell1_2);
var cell2_2 = document.createElement("td");
cell2_2.appendChild(document.createTextNode("Cell 2,2"));
row2.appendChild(cell2_2);

// 将表格添加到文档主体中
document.body.appendChild(table);
```

【方法二】<br>
为了方便构建表格，HTML DOM为``<table>、<tbody>、<tr>``元素添加了属性和方法。
1. 为``<table>``元素添加的属性和方法
    1. caption:保存着对``<caption>``元素的指针
    2. tBodies:是一个``<tbody>``元素的HTMLCollection
    3. tFoot:保存着对``<tfoot>``元素的指针
    4. tHead:保存着对``<thead>``元素的指针
    5. createTHead():创建``<thead>``元素，将其放到表格中，返回引用
    6. createTBody():创建``<tbody>``元素，将其放到表格中，返回引用
    7. createTFoot():创建``<tfoot>``元素，将其放到表格中，返回引用
    8. createCaption():创建``<caption>``元素，将其放到表格中，返回引用
    9. deleteTHead():删除``<thead>``元素
    10. deleteTBody():删除``<tbody>``元素
    11. deleteTFoot():删除``<tfoot>``元素
    12. deleteCaption():删除``<caption>``元素
2. 为``<tbody>``元素添加的属性和方法
    1. rows:保存着``<tbody>``元素中行的HTMLCollection
    2. deleteRow(pos):删除指定位置的行
    3. insertRow(pos):向rows集合中的指定位置插入一行，返回对新插入行的引用
3. 为``<tr>``元素添加的属性和方法
    1. cells:保存着``<tr>``元素中单元格的HTMLCollection
    2. deleteCell(pos):删除指定位置的单元格
    3. insertCell(pos):向cells集合中的指定位置插入一个单元格，返回对新插入单元格的引用

```js
// 创建表格
var table = document.createElement("table");
table.border = "1";
table.width = "100%";

// 创建tbody
var tbody = table.createTBody();

// 创建第一行
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode("Cell 1,1"));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode("Cell 2,1"));

// 创建第二行
tbody.insertRow(1);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode("Cell 1,2"));
tbody.rows[1].insertCell(1);
tbody.rows[1].cells[1].appendChild(document.createTextNode("Cell 2,2"));

// 将表格添加到文档主体中
document.body.appendChild(table);
```

## 【多媒体】

### HTML音频和视频

#### 音频格式

* .mid/.midi MIDI (Musical Instrument Digital Interface) 是一种针对电子音乐设备（比如合成器和声卡）的格式。MIDI 文件不含有声音，但包含可被电子产品（比如声卡）播放的数字音乐指令。因为 MIDI 格式仅包含指令，所以 MIDI 文件极其小巧。大多数流行的网络浏览器都支持 MIDI
* .rm/.ram RealAudio 格式是由 Real Media 针对因特网开发的。该格式也支持视频。该格式允许低带宽条件下的音频流（在线音乐、网络音乐）。由于是低带宽优先的，质量常会降低
* .wav Wave (waveform) 格式是由 IBM 和微软开发的。所有运行 Windows 的计算机和所有网络浏览器（除了 Google Chrome）都支持它
* .wma WMA 格式 (Windows Media Audio)，质量优于 MP3，兼容大多数播放器，除了 iPod。WMA 文件可作为连续的数据流来传输，这使它对于网络电台或在线音乐很实用
* .mp3/.mpga MP3 文件实际上是 MPEG 文件的声音部分。MPEG 格式最初是由运动图像专家组开发的。MP3 是其中最受欢迎的针对音乐的声音格式

#### 视频格式

* .avi AVI (Audio Video Interleave) 格式是由微软开发的。所有运行Windows的计算机都支持AVI格式
* .wmv Windows Media 格式是由微软开发的。Windows Media 在因特网上很常见，但是如果未安装额外组件，就无法播放 Windows Media 电影
* .mpg/.mpeg MPEG (Moving Pictures Expert Group) 格式是因特网上最流行的格式。它是跨平台的，得到了所有最流行的浏览器的支持
* .mov QuickTime 格式是由苹果公司开发的。QuickTime 是因特网上常见的格式，但是QuickTime 电影不能在没有安装额组件的Windows计算机上播放
* .rm/.ram RealVideo 格式是由 Real Media 针对因特网开发的。该格式允许低带宽条件下（在线视频、网络电视）的视频流。由于是低带宽优先的，质量常会降低
* .swf/.flv Flash (Shockwave) 格式是由 Macromedia 开发的。Shockwave 格式需要额外的组件来播放
* .mp4 Mpeg-4 (with H.264 video compression) 是一种针对因特网的新格式。越来越多的视频发布者将其作为 Flash 播放器和 HTML5 的因特网共享格式

#### 插件元素

1. ``<embed>`` 用来定义嵌入内容，比如flash插件。[**注意**]由于移动端设备对flash等浏览器插件支持比较差，IOS设备完全不支持，因此不建议使用flash。如果需要播放音频视频，可以使用video和audio来调用浏览器原生的播放器。src 设置嵌入内容的URL。type 设置嵌入内容的类型。``<embed src="helloworld.swf" width="200" height="200" type="application/x-shockwave-flash"/>``
2. ``<object>`` 定义一个嵌入的对象。object可以嵌套object或其他元素，如果浏览器不能渲染优先的选择就显示后备的内容。
    1. type 设置嵌入对象的类型
    2. name 设置对象的名称，以便在脚本中使用
    3. data 设置对象的URL
    4. usemap 设置与对象一同使用的客户端图像映射的URL
    5. form 规定对象所属的一个或多个表单(将object作为表单的一部分是为了解决让插件发送数据到服务器的需要)
    6. typemustmatch 检测资源类型和type属性是否相符(data和type同时设置的情况下)
3. ``<param>`` 用来给内嵌的插件传递参数。
    1. name 定义参数的名称
    2. value 规定参数的值
    3. type 规定参数的MIME类型
    4. valuetype 规定值的MIME类型(data/ref/object)

[object和embed的区别：](https://blog.csdn.net/byxdaz/article/details/60467224) -- 【重点，还不是很懂】

1. 是为了兼容不同浏览器，IE只支持对Object的解析；火狐，谷歌，Safari只支持对Embed的解析。
2. object标签用classid表示控件的唯一id，而embed标签用type表示插件的唯一名称。比如flash插件type为：application/x-shockwave-flash，mp3播放插件type为audio/mpeg。
3. 为了兼容多个浏览器，可以通过ie浏览器动态加载Object标签，非ie浏览器动态加载embed标签；或者在object标签里面嵌入embed标签。

```html
<object width="400" height="40" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0">
　　<param name="SRC" value="bookmark.swf">
　　<embed src="bookmark.swf" width="400" height="40"></embed>
</object>
```

#### HTML5元素

HTML5新增了两个与媒体相关的标签，让开发人员不必依赖任何插件就能在网页中嵌入跨浏览器的音频和视频内容，这两个标签是``<audio>和<video>``，且不被IE8-浏览器支持。这两个标签支持的类型为：

1. 视频 [1]video/ogg [2]video/mp4 [3]video/webm
2. 音频 [1]audio/ogg [2]audio/mpeg

#### HTML音频

在HTML中播放音频的方法有很多种

1. ``<embed>`` ``<embed height="80" width="300" src="song.mp3" />``
2. ``<object>`` ``<object height="80" width="300" data="song.mp3"></object>``
3. ``<audio>``<br>
```html
<audio controls="controls">
    <source src="song.mp3" type="audio/mp3" />
</audio>
```
4. ``<a>`` ``<a href="song.mp3">Play the sound</a>``
5. 更好的解决办法
```html
<audio controls="controls" height="100" width="100">
    <source src="song.mp3" type="audio/mp3" />
    <embed height="100" width="100" src="song.mp3" />
</audio>
```

#### HTML视频

在HTML中播放视频的方法也有好多种

1. ``<embed>`` ``<embed height="240" width="320" src="movie.mp4" />``
2. ``<object>`` ``<object height="240" width="320" data="movie.mp4"></object>``
3. ``<video>``<br>
```html
<video controls="controls">
  <source src="movie.mp4" type="video/mp4" />
</video>
```
4. ``<a>`` ``<a href="movie.mp4">Play the video</a>``
5. ``更好的解决办法``
```html
<video width="320" height="240" controls="controls">
    <source src="movie.mp4" type="video/mp4" />
    <object data="movie.mp4" width="320" height="240">
        <embed src="movie.mp4" width="320" height="240" />
    </object>
</video>
```

<video width="300" height="240" controls="controls">
    <source src="https://demo.xiaohuochai.site/fat.mp4" type="video/mp4" />
    <object data="https://demo.xiaohuochai.site/fat.mp4" width="300" height="240">
        <embed src="https://demo.xiaohuochai.site/fat.mp4" width="300" height="240" />
    </object>
</video>

### audio和video

HTML5新增了两个与媒体相关的标签，让开发人员不必依赖任何插件就能在网页中嵌入跨浏览器的音频和视频内容，这两个标签是``<audio>和<video>``，且不被IE8-浏览器支持。<br>
以视频文件举例，它包含了音频轨道、视频轨道和其他一些元数据(封面、标题、子标题、字幕等)。<br>
使用这两个元素至少要在标签中包含src属性。位于开始和结束标签之间的任何内容都将作为后备内容，在浏览器不支持这两个媒体元素的情况下显示。

#### audio

audio元素不支持播放wma格式的文件

```
autoplay         自动播放
controls         显示控件
loop             循环播放
preload          音频在页面加载时进行加载，并预备播放(若使用autoplay,则忽略该属性)
src              要播放的音频的URL
```

```html
<audio controls autoplay loop muted src="song.mp3">
    <source src="song.mp3" type="audio/mp3" />
</audio>
```

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;}
    .con{float:left;}
    .show{float:left;}
    .con *{float:left;}
    .con dl+dl{margin-top:1%;clear:both;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:48%;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
    @media (min-width:600px){.con{width:40%;}
        .show{width:60%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="con">
        <dl>
            <dt>属性</dt>
            <dd>controls</dd>
            <dd>autoplay</dd>
            <dd>loop</dd>
            <dd>preload</dd>
        </dl>
    </div>
    <div class="show">
        <h2 class="show-tit">audio标签演示</h2>
        <div class="show-body">
            <audio id="test" src="https://demo.xiaohuochai.site/song.mp3"></audio>
        </div>
    </div>
</div>
<script>
    (function con() {
        var aDd = document.getElementById('box').getElementsByTagName('dd');
        var oTest = document.getElementById('test');
        for (var i = 0, leni = aDd.length; i < leni; i++) {
            aDd[i].mark = false;
            aDd[i].onclick = function () {
                if (!this.mark) {
                    this.style.cssText = 'color: white; background-color: black;';
                    oTest.setAttribute(this.innerHTML, this.innerHTML == 'preload' ? 'auto' : this.innerHTML);
                } else {
                    this.style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    oTest.removeAttribute(this.innerHTML);
                }
                this.mark = !this.mark;
            }
        }
    })();
</script>
```

<iframe frameborder="0" width="100%" height="170" src="./htmls/audio.html"></iframe>

#### video

```txt
height              播放器高度
width               播放器宽度
autoplay            自动播放
controls            显示控件
loop                循环播放
preload             视频在页面加载时进行加载，并预备播放(若使用autoplay,则忽略该属性)
preload="none"      当页面加载后不载入视频
preload="auto"      当页面加载后载入整个视频
preload="meta"      当页面加载后只载入元数据
src                 要播放的视频的URL
poster              规定视频下载时显示的图像，或者在用户点击播放按钮前显示的图像
```

``<video id="test" src="movie.mp4" width="280" height="200" poster="diejia.jpg"></video>``

```html
<style>
    body,dl,dd,h2{margin:0;}
    .box{overflow:hidden;width:280px;padding:10px;background-color:#ccc;text-align:center;}
    .con{float:left;}
    .show{float:left;}
    .con *{float:left;}
    .con dl+dl{margin-top:1%;clear:both;}
    .con dt{font-weight:bold;margin-bottom:5%;width:100%;}
    .con dd{background-color:rgba(255,255,255,0.3);margin:1%;margin-bottom:5%;cursor:pointer;width:96%;}
    .show-tit{font:20px/2.5 "宋体";}
    .show-body{border:1px solid black;border-radius:5%;padding:5%;text-align:initial;}
    @media (min-width:600px){.con{width:40%;}
        .show{width:60%;}
        .box{width:580px;}
    }
</style>
<div class="box" id="box">
    <div class="con">
        <dl>
            <dt>属性</dt>
            <dd>controls</dd>
            <dd>autoplay</dd>
            <dd>loop</dd>
            <dd>preload</dd>
            <dd>poster</dd>
        </dl>
    </div>
    <div class="show">
        <h2 class="show-tit">video标签演示</h2>
        <div class="show-body">
            <video id="test" src="https://demo.xiaohuochai.site/movie.mp4" width="280" height="200" poster="https://demo.xiaohuochai.site/guanwangtai.jpg"></video>
        </div>
    </div>
</div>
<script>
    (function con() {
        var aDd = document.getElementById('box').getElementsByTagName('dd');
        var oTest = document.getElementById('test');
        for (var i = 0, leni = aDd.length; i < leni; i++) {
            aDd[i].mark = false;
            aDd[i].onclick = function() {
                if (!this.mark) {
                    this.style.cssText = 'color: white; background-color: black;';
                    if (this.innerHTML == 'poster') {
                        oTest.setAttribute(this.innerHTML, 'https://demo.xiaohuochai.site/guanwangtai.jpg');
                    } else if (this.innerHTML == 'preload') {
                        oTest.setAttribute(this.innerHTML, 'auto');
                    } else {
                        oTest.setAttribute(this.innerHTML, this.innerHTML);
                    }
                } else {
                    this.style.cssText = 'color: black; background-color: rgba(255,255,255,0.3);';
                    oTest.removeAttribute(this.innerHTML);
                }
                this.mark = !this.mark;
            }
        }
    })();
</script>
```

<iframe frameborder="0" width="100%" height="170" src="./htmls/video.html"></iframe>

#### source

为``<video>和<audio>``提供媒介资源

```
media     规定媒体资源的类型(没有浏览器支持)
src     　规定媒体文件的URL
type      规定媒体资源的MIME类型
    视频 [1]video/ogg [2]video/mp4 [3]video/webm
    音频 [1]audio/ogg [2]audio/mpeg
```

使用``<audio>和<video>``至少要在标签中包含src属性。位于开始和结束标签之间的任何内容都将作为后备内容，在浏览器不支持这两个媒体元素的情况下显示。

```html
<video src="#">
    video player not available.
</video>
<audio src="#">
    audio player not available.
</audio>
```

因为并非所有浏览器都支持所有媒体格式，所以可以指定多个不同的媒体来源。为此，不用在标签中指定src属性，而是使用一个或多个``<source>``元素。
```html
<video>
    <source src="video.webm" type="video/webm; codecs='vp8,vorbis'">
    <source src="video.ogg" type="video/ogg; codecs='theora,vorbis'">
    <source src="video.mp4">
    video player not available.
</video>
<audio>
    <source src="audio.ogg" type="audio/ogg">
    <source src="audio.mp3" type="audio/mp3">
    audio player not available.
</audio>
```

因为并非所有浏览器都支持<audio>和<video>标签，所以更好的解决办法是有备选内容
```html
<audio controls="controls" height="100" width="100">
    <source src="song.mp3" type="audio/mp3" />
    <embed height="100" width="100" src="song.mp3" />
    video player not available.
</audio>
<video width="320" height="240" controls="controls">
    <source src="movie.mp4" type="video/mp4" />
    <object data="movie.mp4" width="320" height="240">
        <embed src="movie.mp4" width="320" height="240" />
    </object>
    video player not available.
</video>
```

#### track

``<track>``元素被当作媒体元素—``<audio>和<video>``的子元素来使用。它允许指定计时字幕（或者基于事件的数据），例如自动处理字幕。track给媒体元素添加的数据的类型在kind属性中设置，属性值可以是 subtitles, captions, descriptions, chapters 或 metadata。该元素指向当用户请求额外的数据时浏览器公开的包含定时文本的源文件。一个media元素的任意两个track子元素不能有相同的 kind、srclang和 label属性。

1. default 规定该轨道是默认的，假如没有选择任何轨道
2. kind 表示轨道属于什么文本类型
    1. captions     该轨道定义将在播放器中显示的简短说明
    2. chapters     该轨道定义章节，用于导航媒介资源
    3. descriptions 该轨道定义描述，用于通过音频描述媒介的内容，假如内容不可播放或不可见
    4. metadata     该轨道定义脚本使用的内容
    5. subtitles    该轨道定义字幕，用于在视频中显示字幕
3. label 表示轨道的标签或标题
4. url 表示字幕文件的URL
5. srclang 表示轨道的语言，若 kind 属性值是 "subtitles"，则该属性必需的。中文为"zh"，英文为"en"。字幕文件书写格式如下所示，注意，毫秒位的3个0不能省略。<br>
```vtt
WEBVTT

1
00:00:01.000 --> 00:00:08.000
欢迎来到小火柴的个人网站
```

```html
<video width="320" height="240" controls="controls">
    <source src="mov.mp4" type="video/mp4" />
    <track src="cn_track.vtt" srclang="zh" default kind="captions" label="欢迎你">
    <object data="mov.mp4" width="320" height="240">
        <embed src="mov.mp4" width="320" height="240" />
    </object>
</video>
```

#### 方法

HTML5 DOM为``<audio>和<video>``元素提供了方法、属性和事件

1. canPlayType(type: String) 检测浏览器是否能播放指定的音频或视频类型，返回值为下列之一：
    1. 'probable':浏览器最可能支持该类型
    2. 'maybe':浏览器也许支持该类型
    3. '':浏览器不支持该类型
    4. type常用值
        1. video/ogg
        2. video/mp4
        3. video/webm
        4. audio/mpeg
        5. audio/ogg
        6. audio/mp4
        7. video/ogg;codecs="theora,vorbis"
        8. video/mp4;codecs="avc1.4D401E,mp4a.40.2"
        9. video/webm;codecs="vp8.0,vorbis"
        10. audio/ogg;codecs="vorbis"
        11. audio/mp4;codecs="mp4a.40.5"
2. load() 重新加载音频或视频元素，用于在更改src来源或其他设置后对音频或视频元素进行更新
3. play()
4. pause()

```html
<button onclick = 'audio.play();'>播放</button>
<button onclick = 'audio.pause();'>暂停</button>
<audio id="audio" src="song.mp3"></audio>
<script>
    var audio = document.getElementById('audio')
    console.log(audio.canPlayType('video/ogg;codecs="theora,vorbis"')) // probably
    audio.src = 'myocean.mp3';
    audio.load();
</script>
```

#### 属性

[**注意**]所有属性中，只有videoWidth和videoHeight是立即可用的，在音视频的元数据加载后，其他属性才可用

【只读】
1. buffered
    1. buffered.length//获取已缓冲范围的数量
    2. buffered.start(index)//获取某个已缓冲范围的开始位置
    3. buffered.end(index)//获取某个已缓冲范围的结束位置
    4. buffered.end(0)//获取当前已缓冲的秒数
2. currentSrc 返回当前音频或视频的URL
3. ended 返回音频或视频是否已结束
4. duration 返回当前音频或视频的长度(以秒计)，如果未设置则返回NaN
5. networkState 返回音频或视频当前网络状态
    1. networkState:0(尚未初始化)
    2. networkState:1(已选取资源，但并未使用网络)
    3. networkState:2(正在下载数据)
    4. networkState:3(未找到资源来源)
6. paused boolean 返回音频或视频是否已暂停
7. played 已播范围是指音频或视频的时间范围。如果用户在音频或视频中跳跃，会获得多个播放范围
    1. played.length(获得音频或视频已播放范围的数量)
    2. played.start(index)(获得某个已播范围的开始位置)
    3. played.end(index)(获得某个已播范围的结束位置)
    4. [**注意**]首段已播范围的下标是0
8. readyState 返回音频或视频的当前就绪状态
    1. readyState:0(没有关于音频或视频是否就绪的信息)
    2. readyState:1(关于音频或视频就绪的元数据)
    3. readyState:2(关于当前播放位置的数据是可用的，但没有足够的数据来播放下一帧)
    4. readyState:3(当前及至少下一帧的数据是可用的)
    5. readyState:4(可用数据足以开始播放)
9. seekable 返回可寻址范围，可寻址范围是指用户在视频或音频中可寻址(移动播放位置)的时间范围。对于流视频，通常可以寻址到视频中的任何位置，即使其尚未完成缓冲 【重点，还不是很懂】
    1. seekable.length(获得音频或视频中可寻址范围的数量)
    2. seekable.start(index)(获得可寻址范围的开始位置)
    3. seekable.end(index)(获得可寻址范围的结束位置)
10. seeking
    1. seeking:true(用户正在寻址)
    2. seeking:false(用户没有在寻址)

【可读写】
1. autoplay boolean
2. controls boolean
3. loop boolean
4. preload String 设置或返回是否在页面加载后立即加载音频或视频
    1. preload:auto;(一旦页面加载，则开始加载音频或视频)
    2. preload:metadata;(当页面加载后仅加载音频或视频的元数据)
    3. preload:none;(页面加载后不加载音频或视频)
    4. [**注意**]当设置autoplay时，该属性无效
5. src 设置或返回音频或视频的当前来源
6. currentTime number 设置或返回音频或视频的当前位置(以秒计)
7. volume number 设置或返回音频或视频的当前音量。volume(取得为0-1，0为静音，1为最大，默认为1)
8. crossOrigin 设置或返回CORS设置
9. defaultMuted boolean (只有chrome支持) 是否初始静音
10. muted boolean 是否静音
11. defaultPlaybackRate number
    1. defaultPlaybackRate:1(正常速度)
    2. defaultPlaybackRate:0.5(半速)
    3. defaultPlaybackRate:2(倍速)
    4. defaultPlaybackRate:-1(向后正常速度)
    5. defaultPlaybackRate:-0.5(向后半速)
12. playbackRate number
    1. playbackRate:1(正常速度)
    2. playbackRate:0.5(半速)
    3. playbackRate:2(倍速)
    4. playbackRate:-1(向后正常速度)
    5. playbackRate:-0.5(向后半速)

```html
<button onclick='audio.play();'>播放</button>
<button onclick='audio.pause();'>暂停</button>
<button onclick="audio.muted = !audio.muted">音量开关</button>
<button onclick = "if(audio.volume<=0.9)audio.volume+=0.1;">增大音量</button>
<button onclick = "if(audio.volume>=0.1)audio.volume-=0.1;">减小音量</button>
<button onclick="alert(audio.buffered.end(0));">获取缓冲时间</button>
<audio id="audio" src="http://7xpdkf.com1.z0.glb.clouddn.com/myocean.mp3" controls></audio>
<script>
    var audio = document.getElementById('audio')
    console.log(audio.canPlayType('video/ogg;codecs="theora,vorbis"')) // probably
    audio.src = 'https://demo.xiaohuochai.site/song.mp3';
    audio.load();
    var handler = setInterval(() => console.log('currentSrc: ' + audio.currentSrc), 1000);  // http://7xpdkf.com1.z0.glb.clouddn.com/myocean.mp3
    document.onclick = function(){ console.log('ended: ' + audio.ended); }
    console.log(audio.duration);  // NaN
    setTimeout(() => console.log('duration: ' + audio.duration), 1000);  // 317.022041
    console.log(audio.networkState)  // 3
    document.addEventListener('click', () => console.log('networkState: ' + audio.networkState))
    console.log(audio.paused)
    document.addEventListener('click', () => console.log('paused: ' + audio.paused))
    setTimeout(() => clearInterval(handler), 1000 * 60)
    audio.onseeking = function(){ console.log(audio.seeking) }
</script>
```

#### 事件

当音频或视频正在加载过程中，会依次发生以下事件：

1. loadstart:提示浏览器开始寻找指定的音频或视频
2. progress:提示浏览器正在下载指定的音频或视频
3. durationchange:提示音频或视频的时长已改变
4. loadedmetadata:提示音频或视频的元数据已加载
5. loadeddata:提示音频或视频的当前帧已加载，但没有足够数据播放下一帧
6. canplay:提示浏览器能够开始播放指定的音频或视频
7. canplaythrough:提示音频或视频能够不停顿地一直播放
8. progress:提示浏览器正在下载指定的音频或视频

影响音频或视频数据加载的事件有以下几个：

1. abort:在音频或视频终止加载时触发
2. error:在音频或视频加载发生错误时触发
3. stalled:在浏览器尝试获取媒体数据，但数据不可用时触发
4. suspend:在音频或视频数据被阻止加载时触发(可以是完成加载后触发，或者因为被暂停)
5. empted:在发生故障并且文件突然不可用时触发

音频或视频控制按钮发生改变时触发以下事件:

1. play:音频或视频文件已经就绪可以开始播放时触发
2. playing:音频或视频已开始播放时触发
3. ended:音频或视频文件播放完毕后触发
4. pause:音频或视频文件暂停时触发
5. ratechange:播放速度改变进触发
6. seeked:指示定位已结束时触发
7. seeking:正在进行指示定位时触发
8. timeupdate:播放位置改变时触发[注意:播放和调整指示定位时都会触发]
9. volumechange:音量改变时触发
10. waiting:需要缓冲下一帧而停止时触发

```html
<audio id="audio" src="http://7xpdkf.com1.z0.glb.clouddn.com/myocean.mp3" controls></audio>
<script>
    audio.onloadstart = () => console.log('loadstart');
    audio.ondurationchange = () => console.log('durationchange');
    audio.onloadedmetadata = () => console.log('loadedmetadata');
    audio.onloadeddata = () => console.log('loadeddata');
    audio.onprogress = () => console.log('progress');
    audio.oncanplay = () => console.log('canplay');
    audio.oncanplaythrough = () => console.log('canplaythrough');

    var i = 1;
    document.onclick = function(){
        i += 0.1;
        audio.playbackRate = i;
    }
    audio.onended = () => console.log('ended');
    audio.onpause = () => console.log('pause');
    audio.onplay = () => console.log('play');
    audio.onplaying = () => console.log('playing');
    audio.onratechange = () => console.log('ratechange');
    audio.onseeked = () => console.log('seeked');
    audio.onseeking = () => console.log('seeking');
    audio.ontimeupdate = () => console.log('timeupdate');
    audio.onvolumechange = () => console.log('volumechange');
    audio.onwaiting = () => console.log('waiting');
</script>
<video id="video" src="http://7xpdkf.com1.z0.glb.clouddn.com/movie.mp4" controls></video>
<script>
    setTimeout(() => { video.src = '' }, 2000);
    video.onabort = () => console.log('abort');
    video.onerror = () => console.log('error');
    video.onstalled = () => console.log('stalled');
    video.onsuspend = () => console.log('suspend');
    video.onemptied = () => console.log('emptied');
</script>
```

#### audio专有

``<audio>``元素在一个原生的javascript构造函数Audio，可以在任何时候播放音频。Audio和Image很像，但Audio不用像Image那样必须插入到文档中，只要创建一个新实例，并传入音频源文件即可。

var audio = new Audio('test.mp3');

```html
<script>
var audio = new Audio('http://7xpdkf.com1.z0.glb.clouddn.com/honey.mp3');
audio.oncanplaythrough = () => {
    audio.controls = true
    document.body.appendChild(audio)
}
audio.load()  // 为兼容IOS
</script>
```

特别注意的是，IOS不能直接使用 oncanplaythrough 事件，需要添加 audio.load() 方法，否则该事件不生效

### 音乐播放器

```html
<style>
    body{margin:0;}
    img{display:block;border:none;}
    .outer{position:relative;width:122px;height:122px;margin:30px auto;overflow:hidden;border-radius:50%;}
    .box{position:absolute;top:0;left:0;width:122px;height:122px;background:url('https://demo.xiaohuochai.site/music.png');}
    .box-in{position:absolute;top:0;right:0;width:50%;height:100%;overflow:hidden;}
    .box-in-in{position:absolute;margin-left:-61px;width:61px;height:100%;background:black url('https://demo.xiaohuochai.site/music.png');transform-origin:right;transform:rotate(0deg);}
    .box-con{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:40px;width:40px;font:14px/40px "iconfont";color:black;text-align:center;cursor:pointer;background-color:white;border-radius:50%;}
    @font-face{
        font-family:'iconfont';src:url('font/iconfont.eot');/* IE9*/
        src:url('font/iconfont.eot?#iefix') format('embedded-opentype'),/* IE6-IE8 */
        url('font/iconfont.woff') format('woff'),/* chrome、firefox */
        url('font/iconfont.ttf') format('truetype'),/* chrome、firefox、opera、Safari,Android,iOS 4.2+*/
        url('font/iconfont.svg#iconfont') format('svg');/* iOS 4.1- */
    }
</style>
<div class="outer">
    <img src="https://demo.xiaohuochai.site/huochai.jpg" alt="match" width="122" height="122">
    <div id="player" class="box">
        <div class="box-in">
            <div class="box-in-in"></div>
        </div>
        <div class="box-con"></div>
    </div>
</div>
<audio id="audio" src="https://demo.xiaohuochai.site/song.mp3"></audio>
<script>
    /*
    功能实现
    [1]播放、暂停
    [2]调整定位指示
    */
    var player = document.getElementById('player');
    var control = player.getElementsByClassName('box-con')[0];
    var rotate = player.getElementsByClassName('box-in-in')[0];
    var hidden = player.getElementsByClassName('box-in')[0];
    // 作为歌曲是否加载完毕的标记
    var mark = false;
    // 作为鼠标是否移入控制按钮区域的标记
    var enter = false;
    // 记录按钮的上一个值
    var lastBtn = '&#xe61d;';
    // 当歌曲可以开始不停顿地一直播放时，显示播放按钮
    audio.oncanplaythrough = function () {
        mark = true;
        control.innerHTML = '&#xe61d;'
    };
    //当歌曲在播放过程中
    audio.ontimeupdate = function () {
        //播放按钮记录当前进度百分比
        if (!enter) {
            control.innerHTML = Math.floor(audio.currentTime / audio.duration * 100) + '%';
        } else {
            control.innerHTML = lastBtn;
        }
        //旋转相应度数
        rotate.style.transform = 'rotate(' + audio.currentTime / audio.duration * 360 + 'deg)';
        if ((audio.currentTime / audio.duration) <= 0.5) {
            hidden.style.cssText = 'overflow:hidden;background:transparent';
        } else {
            hidden.style.cssText = 'overflow:visible;background:black url("https://demo.xiaohuochai.site/music.png") 61px 0';
        }
    }
    //当鼠标点击光盘时，歌曲进度变化到对应进度，div旋转到对应角度
    player.onclick = function (e) {
        if (mark) {
            var e = e || event;
            var n1 = e.clientX - this.parentNode.offsetLeft;
            var n2 = e.clientY - this.parentNode.offsetTop;
            var a = 61;
            var b = Math.sqrt(Math.pow(n1 - 61, 2) + Math.pow(n2 - 61, 2));
            var c = Math.sqrt(Math.pow(n1 - 61, 2) + Math.pow(n2, 2));
            var radial = Math.acos((a * a + b * b - c * c) / (2 * a * b));
            //记录鼠标点击磁盘时旋转的角度
            var result = 0;
            if (n1 >= 61) {
                result = radial * 180 / Math.PI;
            } else {
                result = 360 - radial * 180 / Math.PI;
            }
            audio.currentTime = audio.duration * result / 360;
        }
    }
    //当歌曲播放完毕后
    audio.onended = function () {
        //重新加载歌曲
        audio.load();
        //将hidden的样式恢复起始值
        hidden.style.cssText = 'overflow:hidden;background:transparent';
        rotate.style.transform = 'rotate(0);';
        //将播放按钮置为'暂停按钮'
        control.innerHTML = '&#xe61d;';
    }
    //给control添加点击事件
    control.onclick = function (e) {
        var e = e || event;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        if (mark) {
            if (audio.paused) {
                audio.play();
                this.innerHTML = '&#xe662;';
            } else {
                audio.pause();
                this.innerHTML = '&#xe61d;';
            }
            lastBtn = control.innerHTML;
        }
    };
    //当鼠标移入control时，标记enter为true
    control.onmouseover = function () {
        if (mark) {
            enter = true;
        }
    }
    //当鼠标移出control时，标记enter为false
    control.onmouseout = function () {
        if (mark) {
            enter = false;
        }
    }
</script>
```

## 【表单】

### form元素

表单是网页与用户的交互工具，由一个``<form>``元素作为容器构成，封装其他任何数量的表单控件，还有其他任何``<body>``元素里可用的标签。表单能够包含``<input>、<menus>、<textarea>、<fieldset>、<legend>、<label>``等表单控件元素。[**注意**]表单里嵌套表单是不允许的。

form元素有accept-charset、action、autocomplete、enctype、method、name、novalidate、target共8个属性，其中action和name属性为必需项。

1. **表单名称** -- name属性规定表单名称，如果name="test"，则Javascript可以使用document.forms.test来获取该表单
2. **字符集** -- accept-charset属性是一个空格分隔的字符集列表，规定了服务器处理表单数据所接受的字符集
3. **提交地址** -- action属性规定提交表单时，向何处发送表单数据；如果忽略这个属性，表单会重定向到表单所在的URL。这个值可以被``<button>或者<input>``元素中的formaction属性重载(覆盖)
4. **打开方式** -- target属性规定在何处打开action URL。共5个值_blank、_self、_parent、_top、framename
5. **数据编码** -- enctype属性规定在发送到服务器之前应该如何对表单数据进行编码。大多数情况下该属性不需要设置。这个值可以被``<button>或者<input>``元素中的 formenctype属性重载(覆盖)。当method属性值为post时，enctype是提交form给服务器的内容的MIME类型。可能的取值有:
    1. application/x-www-form-urlencoded 在发送前编码所有字符（默认）
    2. multipart/form-data 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值
    3. text/plain 空格转换为 "+" 加号，但不对特殊字符编码
6. **数据发送** method属性，表单可以用两种方式(method)发送数据：GET和POST，默认为GET方法。这个值可以被 <button> 或者 <input> 元素中的 formmethod属性重载(覆盖)
    1. POST方法。如果采用POST方法，浏览器将会按照下面两步来发送数据。首先，浏览器将与action属性中指定的表单处理服务器建立联系，一旦建立连接之后，浏览器就会按分段传输的方法将数据发送给服务器。在服务器端，一旦POST样式的应用程序开始执行时，就应该从一个标志位置读取参数，而一旦读到参数，在应用程序能够使用这些表单值以前，必须对这些参数进行解码。用户特定的服务器会明确指定应用程序应该如何接受这些参数。<br>【应用场景】
        1. 大数据处理，因为POST方法相比GET方法而言，处理更多字段
        2. 安全数据，因为GET 方法将表单参数直接放在应用程序的 URL 中，这样网络窥探者可以很轻松地捕获它们，还可以从服务器的日志文件中进行摘录；而POST方法则没有这方面的漏洞
    2. GET方法。如果采用GET方法，浏览器会与表单处理服务器建立连接，然后直接在一个传输步骤中发送所有的表单数据：浏览器会将数据直接附在表单的action URL之后。这两者之间用问号进行分隔。<br>【应用场景】
        1. 获得最佳表单传输性能，因为GET发送只有少数简单字段
        2. 简单处理，因为GET方法无需处理编码解码方法
        3. 传参处理，因为GET方法允许把表单的参数包括进来作为 URL 的一部分
7. **自动完成** -- autocomplete是HTML5新增的一个属性，规定表单是否应该启用自动完成功能。当用户在字段开始键入时，浏览器基于之前键入过的值，应该显示出在字段中填写的选项。【注意】IE浏览器不支持该属性，只有元素拥有name属性，该属性才有效。
8. **表单验证** -- novalidate是HTML5新增的一个属性，规定当提交表单时不对其进行验证。IE9-不支持

```html
<h3>get方法</h3>
<button id="btn1">打开自动完成</button>
<button id="btn2">打开验证</button>
<form method="get" action="form.php" target="_blank" name="test">
    <p><label>x:<input name="x"></label></p>
    <p><label>y:<input name="y"></label></p>
    <p><button type="submit">Submit</button></p>
</form>
<a title="form.php?x=28&y=66" href="form.php?x=28&amp;y=66">a标签传参</a>
<h3>post方法</h3>
<form method="post" action="form.php" target="_blank">
    <p><label>x:<input name="x"></label></p>
    <p><label>y:<input name="y"></label></p>
    <p><button type="submit">Submit</button></p>
</form>
<script>
    var oForm = document.forms.test;
    console.log(oForm.method); // get
    btn1.flag = false
    btn1.onclick = function () {
        oForm.autocomplete = this.flag ? 'off' : 'on'
        this.innerText = this.flag ? '打开自动完成' : '关闭自动完成'
        this.flag = !this.flag
    };
    btn2.flag = false
    btn2.onclick = function () {
        this.flag ? oForm.removeAttribute('novalidate') : oForm.setAttribute('novalidate', '')
        this.innerText = this.flag ? '打开验证' : '关闭验证'
        this.flag = !this.flag
    };
</script>
```

```php
// GET方法的URL显示为： http://127.0.0.1/form.php?x=1&y=2
// POST方法的URL显示为：http://127.0.0.1/form.php
<p>
<?php
if(isset($_REQUEST["x"]) && isset($_REQUEST["y"])){
    echo "x: " .$_REQUEST["x"] ."<br>";
    echo "y: " .$_REQUEST["y"];
}
?>
</p>
```

### input元素属性

form元素只是一个数据获取元素的容器，而容器内的元素称为表单控件。最常用的表单控件是input元素。<br>
accept、alt、checked、disabled、maxlength、name、readonly、size、src、type、value这11个属性是input元素的传统元素属性<br>
autocomplete、autofocus、novalidate、width、height、list、max、min、step、multiple、pattern、placeholder、required、form、formaction、formenctype、formmethod、formnovalidate、formtarget这19个属性是HTML5新增的元素属性。

```txt
name value type
accept alt checked disabled readonly maxlength size src
autocomplete autofocus novalidate
width height
list min max step
multiple pattern placeholder required
form formaction formenctype formmethod formnovalidate formtarget
```

* name属性用于规定input元素的名称，用于对提交到服务器后的表单数据进行标识，或者在客户端通过javascript引用表单数据。[注意]只有设置了name属性的表单元素才能在提交表单时传递它们的值
* value属性为input元素设定值。对于不同的输入类型，value属性的用法也不同：
    * type="button"、"reset"、"submit"用于定义按钮上的显示的文本
    * type="text"、"password"、"hidden"用于定义输入字段的初始值
    * type="checkbox"、"radio"、"image"用于定义与输入相关联的值
    * [注意1]type="checkbox"或"radio"必须设置value属性
    * [注意2]value属性无法与type="file"的input元素一起使用
* type属性用来规定input元素的类型。[注意]如果input元素没有设置type属性，或者设置的值在浏览器中不支持，那么输入类型会变成type="text"
* accept属性用来规定能够通过文件上传进行提交的文件类型。理论上可以用来限制上传文件类型，然而它只是建设性的，并很可能被忽略，它接受逗号分隔的MIME类型。[注意]该属性只能与type="file"配合使用。``<input type="file" accept="image/gif,image/jpeg,image/jpg">``
* alt属性为图像输入规定替代文本，功能类似于image元素的alt属性，为用户由于某些原因无法查看图像时提供备选信息。[注意]alt属性只能与type="image"的input元素配合使用
* checked属性规定在页面加载时应该被预先选定的input元素，也可以在页面加载后，通过javascript进行设置。[注意]checked属性只能与type="radio"或type="checkbox"的input元素配合使用
* disabled属性规定应该禁用input元素。被禁用的字段是不能修改的，也不可以使用tab按键切换到该字段，但可以选中或拷贝其文本。[注意1]disabled属性无法与type="hidden"的input元素一起使用。[注意2]对于IE7-浏览器必须设置为disabled="disabled"，而不可以直接设置disabled，否则使用javascript控制时将失效
* readonly属性规定输入字段为只读。只读字段是不能修改的，但用户仍然可以使用tab按键切换到该字段，还可以选中或拷贝其文本。readonly属性可与type="text"或"password"的input元素配合使用。[注意]IE7-浏览器不支持使用javascript控制readonly属性
* maxlength属性规定输入字段的最大长度，以字符个数计。[注意]该属性只能与type="text"或type="password"的input元素配合使用
* size属性对于type="text"或"password"的input元素是可见的字符数；而对于其他类型，是以像素为单位的输入字段宽度。[注意]由于size属性是一个可视化的设计属性，推荐使用CSS来代替它
* src属性作为提交按钮显示的图像的URL。[注意]src属性只能且必须与type="image"的input元素配合使用

```html
<!-- checked -->
<input type="radio" name="radio" value="1" checked>
<input type="radio" name="radio" value="2">
<input type="checkbox" name="checkbox" value="1">
<input type="checkbox" name="checkbox" value="2">
<script>
    var oInput = document.getElementsByTagName('input');
    for(var i = 0,len = oInput.length; i < len; i++){
        oInput[i].onmouseover = function(){
            this.checked = 'checked';
        }
    }
</script>
<!-- disabled / readonly -->
<input type="radio" name="field" value="1" checked>disabled</input>
<input type="radio" name="field" value="2">readonly</input>
<button id="btn1">输入域可用</button>
<button id="btn2">输入域不可用</button>
<button id="btn3">修改value</button>
<input id="test" value="内容">
<script>
    var attr = 'disabled'
    document.getElementsByName('field').forEach((value, key, parent) => {
        value.onclick = (ev) => {
            test.removeAttribute(attr)
            if (this.value == 1) {
                attr = 'disabled'
                btn1.innerText = '输入域可用'
                btn2.innerText = '输入域不可用'
            } else {
                attr = 'readonly'
                btn1.innerText = '输入域只读'
                btn2.innerText = '输入域可读写'
            }
        }
    })
    btn1.onclick = () => test.removeAttribute(attr)
    btn2.onclick = () => test.setAttribute(attr, attr)
    btn3.onclick = () => { test.value = this.innerText }
</script>
```

* autocomplete属性可以在个别元素或整个表单上开启或关闭浏览器的自动完成功能。当用户在字段开始键入时，浏览器基于之前键入过的值，显示出在字段中填写的选项。autocomplete属性适用form元素以及以下类型的input元素：text、search、url、telephone、email、password、date pickers、range、color。[注意]IE浏览器不支持该属性，只有元素拥有name属性，该属性才有效。
* autofocus属性规定在页面加载时，域自动地获得焦点。autofous属性适用于button、input、keygen、select和textarea元素
* novalidate属性规定在提交表单时不验证form或input域。novalidate属性适用于form元素以及以下类型的input元素：text、search、url、telephone、email、password、date pickers、range、color。[注意]IE9-浏览器不支持
* width[image]
* height[image]
* 大多数输入类型包含一个属性list，它和一个新元素datalist结合使用，这个元素定义当在表单控件输入数据时可用的一个选项列表。datalist元素自身不会在页面显示，而是为其他元素的list属性提供数据。list属性适用于form元素以及以下类型的input元素：text、search、url、telephone、email、password、date pickers、range、color。[注意]IE9-浏览器及safari浏览器不支持
* min/max/step。min、max、step属性适用于以下类型的input元素:date pickers、number、range
* multiple属性规定按住ctrl按键，输入字段可以选择多个值。该属性适用于type="email"和"file"的input元素。[注意]该属性IE9-浏览器不支持
* pattern属性规定用于验证input域的模式。模型pattern是正则表达式。pattern属性适用于以下类型的input元素：text、search、url、tel、email、password。[注意]IE9-浏览器及safari浏览器不支持
* placeholder属性适用于以下类型的input元素:text、search、url、tel、email、password。[注意]IE9-浏览器不支持。要修改placeholder的颜色需要使用::placeholder
* required属性适用于以下类型的input元素：text、search、url、telephone、email、password、date pickers、number、checkbox、radio、file。[注意]IE9-浏览器及safari浏览器不支持
* form属性规定输入域所属的一个或多个表单，form属性必须和所属表单的id。form属性适用于所有input标签的类型，若需要引用一个以上的表单时，用空格分隔。[注意]IE浏览器不支持该属性，只有元素拥有name属性，该属性才有效
* 表单重写属性允许重写form元素的某些属性设定。其中，formnovalidate适用于button或input元素，而其他属性适用于submit或reset的button或input元素。
    * formaction formenctype formmethod formnovalidate formtarget

```html
<!-- autocomplete -->
<input name="test1" autocomplete="on">
<input name="test2" autocomplete="off">
<!-- autofocus -->
<input name="test1">
<input name="test2" autofocus>
<!-- width / height -->
<form action="#">
    <input name="test">
    <input type="image" src="submit.jpg" width="99" height="99">
</form>
<!-- list -->
<form action="#">
    <input list="list" name="input">
    <datalist id="list">
        <option value="1">
        <option value="2">
        <option value="3">
    </datalist>
</form>
<!-- min / max / step -->
<input type="number" min="0" max="10" step="0.5" value="6" />
<input type="range" min="0" max="10" step="0.5" value="6" />
<!-- multiple -->
<button id="btn1">打开文件多选</button>
<button id="btn2">关闭文件多选</button>
<br><br>
<input id="test" type="file" multiple>
<script>
    btn1.onclick = () => test.setAttribute('multiple','')
    btn2.onclick = () => test.removeAttribute('multiple')
</script>
<!-- pattern -->
<form action="#">
    <input pattern="\d{3}">
    <input type="submit">
</form>
<!-- form -->
<form id="form" action="#">
    <input type="submit">
</form>
<input name="test" form="form">
<!-- formaction -->
<form action="#" >
    First name: <input type="text" name="fname" /><br />
    Last name: <input type="text" name="lname" /><br />
    <input type="submit" value="提交" /><br />
    <input type="submit" formaction="#" value="以管理员身份提交" />
</form>
<!-- formenctype -->
<form action="#" method="post">
    First name: <input type="text" name="fname" /><br />
    <input type="submit" value="提交" />
    <input type="submit" formenctype="multipart/form-data" value="以multipart/form-data编码提交" />
</form>
```

### input元素的type类型

随着HTML5的出现，input元素新增了多种类型，用以接受各种类型的用户输入。其中，button、checkbox、file、hidden、image、password、radio、reset、submit、text这10个是传统的输入控件，新增的有color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week共13个。

#### 传统类型

* text 定义单行的输入字段，用户可在其中输入文本
* password 定义密码字段。该字段中的字符被掩码
* file 定义输入字段和 "浏览"按钮，供文件上传
* radio 定义单选按钮
* checkbox 定义复选框
* hidden 定义隐藏的输入字段
* button 定义可点击按钮（多数情况下，用于通过JavaScript启动脚本）
* image 定义图像形式的提交按钮
* reset 定义重置按钮。重置按钮会清除表单中的所有数据
* submit 定义提交按钮。提交按钮会把表单数据发送到服务器

#### 新增类型

* color 定义调色板
* tel 定义包含电话号码的输入域
* email 定义包含email地址的输入域
* url 定义包含URL地址的输入域
* search 定义搜索域
* number 定义包含数值的输入域
* range 定义包含一定范围内数字值的输入域
* date 定义选取日、月、年的输入域
* month 定义选取月、年的输入域
* week 定义选取周、年的输入域
* time 定义选取月、年的输入域
* datetime 定义选取时间、日、月、年的输入域(UTC时间)
* datatime-local 定义选取时间、日 月、年的输入域(本地时间)

```html
<style>
    input { display: block; }
</style>
<h2>传统类型</h2>
<input type="text"/>
<input type="password"/>
<input type="file"/>
<input type="radio"/>
<input type="checkbox"/>
<input type="hidden" name="test_hidden" value="value_hidden"/>
<input type="submit"/>
<input type="reset"/>
<input type="button" value="button"/>
<input type="image" src="https://demo.xiaohuochai.site/submit.jpg" width="20" height="20" alt="测试图片"/>
<h2>新增类型</h2>
<input type="color"/>
<input type="tel"/>
<input type="email"/>
<input type="url"/>
<input type="search"/>
<input type="number"/>
<input type="range"/>
<input type="date"/>
<input type="month"/>
<input type="week"/>
<input type="time"/>
<input type="datetime"/>
<input type="datatime-local"/>
```

### 表单控件

input元素无疑是一个庞大和复杂的元素，但它并不是唯一的表单控件。还有button、select、option、label、optgroup、textarea、fieldset、legend这八个传统表单控件，datalist、progress、meter、output、keygen这五个新增表单控件。

#### 传统控件

* button 定义一个按钮。button元素内部可以放置文本或图像或其他多媒体内容。但唯一禁止使用的元素是图像映射，因为它对鼠标和键盘敏感的动作会干扰表单按钮的行为。始终为button元素设置type属性，IE7-浏览器的默认类型是button，而其他浏览器的默认类型是submit。IE7-提交button元素之间的文本，而其他浏览器则会提交value属性的内容。button元素比<input>元素更易样式化。可以添加内联HTML内容（如``<em>，<strong> 甚至<img>``），并使用:after和:before伪元素实现复杂的渲染，而input只有文本值属性。
    * name value type
    * autofocus disabled
    * form formtarget formaction formmethod formenctype formnovalidate
* select 定义一个下拉列表，包含任意数量的option和optgroup元素。
    * name
    * autofocus disabled
    * form
    * multiple size[size不可为0，默认为1]
    * safari浏览器无法设置高度
* option 定义下拉列表中的一个选项。option元素有两种应用场景，除了用于下拉列表select外，还可以用于选项列表datalist中。option无法设置margin、padding、border等盒模型样式。
    * disabled
    * selected
    * label firefox不支持label属性
    * value 当设置value值时，服务器提交的是value的值；否则提交给服务器的是option的元素内容
* optgroup 定义选项组，用于组合选项。optgroup无法设置margin、padding、border等盒模型样式。
    * disabled
    * label
* textarea 定义多行的文本输入控件。浏览器不允许textarea嵌套textarea。IE8-浏览器宽高设置不包含滚动条；其他浏览器宽高设置包含滚动条。
    * name value placeholder maxlength
    * autofocus disabled readonly required
    * form
    * cols rows
    * wrap 规定当在表单中提交时，文本区域中折行如何处理。当wrap="soft"，表示表单提交时，虽然文字在屏幕上折行，但提交的数据里不会有换行符(默认值)；而当wrap="hard"，表示表单提交时，提交的数据包含文本换行符%0D%0A。
    * IE7-浏览器不支持通过setAttribute('disabled','')的写法，必须设置为setAttribute('disabled','disabled')
    * IE7-浏览器不支持通过javascript设置readonly属性
    * IE浏览器不支持form，IE9-浏览器不支持autofocus、placeholder和maxlength，IE9-浏览器和safari浏览器不支持required，
* fieldset 分组表单内的相关元素，多数浏览器用一个简单的边框来显示fieldset
    * name form disabled
* legend 定义fieldset元素的标题
* label 定义input元素的标注
    * label元素为input元素定义标注，建立文字标签与表单控件的关联。在label元素内点击文本会触发此控件，选择该文本时浏览器会自动把焦点转到和标签相关的表单控件上
    * label元素有两种用法：一种是使用for属性，另一种是将表单控件嵌套到label内部。但IE6浏览器只识别使用for属性的方法。
    * for[label标签的for属性要与相关元素的id属性相同] form
    * label控件有三个javascript属性，分别是form、htmlFor和control
        * form表示label控件所归属的表单
        * htmlFor表示label控件的for属性的字符串值
        * control表示label控件所指定的input控件(注意：IE浏览器不支持)

```html
<button id="btn1a" type="button">启用</button>
<button id="btn1b" type="button">禁用</button>
<button id="btn2a" type="button">可多选</button>
<button id="btn2b" type="button">不可多选</button>
<button id="btn3a" type="button">size=1</button>
<button id="btn3b" type="button">size=2</button>
<button id="btn3c" type="button">size=3</button>
<button id="btn3d" type="button">不设置size</button>
<form action="#">
    <br><br>
    <select name="test" id="select">
        <optgroup label="num">
            <option value="11" disabled>1</option>
            <option value="22" selected>2</option>
            <option value="33">3</option>
            <option value="44" label="word">4</option>
        </optgroup>
        <optgroup label="word">
            <option>a</option>
            <option>b</option>
            <option>c</option>
            <option>d</option>
        </optgroup>
        <optgroup label="汉字" disabled>
            <option value="一个">一</option>
            <option value="二个">二</option>
            <option value="三个">三</option>
            <option value="四个">四</option>
        </optgroup>
    </select>
    <fieldset>
        <legend>健康信息</legend>
        身高：<input type="text" />
        体重：<input type="text" />
    </fieldset>
    <h4>使用for方法</h4>
    <label for="male">Male</label>
    <input type="radio" name="sex1" id="male" />
    <br />
    <label for="female">Female</label>
    <input type="radio" name="sex1" id="female" />
    <h4>使用嵌套方法</h4>
    <label>Male<input type="radio" name="sex2" /></label>
    <br />
    <label>Female<input type="radio" name="sex2"  /></label>
    <input type="file" id="myFile">
    <label for="myFile" id="myLabel">我是label</label>
    <input type="submit">
</form>
<script>
    var select = document.getElementById('select')
    btn1a.onclick = () => select.removeAttribute('disabled')
    btn1b.onclick = () => select.setAttribute('disabled', '')
    btn2a.onclick = () => select.setAttribute('multiple', '')
    btn2b.onclick = () => select.removeAttribute('multiple')
    btn3a.onclick = () => select.setAttribute('size', '1')
    btn3b.onclick = () => select.setAttribute('size', '2')
    btn3c.onclick = () => select.setAttribute('size', '3')
    btn3d.onclick = () => select.removeAttribute('size')
    var myLabel = document.getElementById('myLabel');
    console.log(myLabel.form);//<form id="myForm">
    console.log(myLabel.htmlFor);//'myFile'
    console.log(myLabel.control);//<input type="file" id="myFile">
</script>
```

#### 新增控件

* datalist 定义输入域的选项列表。列表是通过datalist内的option元素创建的。如果需要把datalist绑定到输入域，需要把输入域的list属性引用datalist的id。option元素一定要设置value属性。
* keygen 定义密钥对生成器，用于生成密钥。当提交表单时，私钥存储在本地，公钥发送到服务器。safari和IE不支持该属性，chrome部分支持该属性。
    * autofocus disabled
    * name form
    * challenge 如果使用，则将keygen的值设置为在提交时询问
    * keytype 定义keytype，rsa生成RSA密钥(默认)
* output 用于显示计算的结果
    * for 定义输出域相关的一个或多个元素
    * form name
* progress 用于显示进度(前进量)。IE9-浏览器及safari浏览器不支持
    * name value
    * 如果progress控件什么属性都不设置，则会有进度条左右往返运动的效果
* meter 用于显示度量(剩余量)。IE浏览器及safari浏览器不支持
    * form
    * low high min max optimum(规定度量的最优值) value
    * min 小于 low 小于 high 小于 max

```html
<!-- datalist -->
<form action="#">
    <input list="list" name="input">
    <datalist id="list">
        <option value="1">
        <option value="2">
        <option value="3">
    </datalist>
</form>
<!-- keygen -->
<!-- firefox: 1->usr_name=1&security=MIIBOjCBpDCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA1HUwmm%2B75QTnuDXC%0D%0AnUsL8cD8KkncFnA6TRaJttYss0Oi6dVzOPOtdK0O7wxD4%2BIhjSMZRD%2FddKFciZw0%0D%0AURyAimXxe%2FlDKmR3Nb1SzmqA7RJnns%2FA%2BduiYeeIIiMSL2ydUOvQvVFYMtaDkWra%0D%0AtpQfeWv1Hjz9hb7HlGzOUbtGrAECAwEAARYAMA0GCSqGSIb3DQEBBAUAA4GBAJ0I%0D%0ATWv7CdcNzqkaq5OpN6GHWtrlIpD5UAL%2FOiFDICb%2F8PFgV7FQk0MaGwj5XzQfEu4B%0D%0A6YlAbyz2l91I9%2FJW6Oerru5wL646OpvnTvD2U%2FzByU%2FHWp0BRNeDqntMAsGvzl6D%0D%0AoNsHTwLjDUGYVILge4syfcQVRpFRZiyVRaNlIJT9# -->
<form action="#">
    Username: <input type="text" name="usr_name" />
    Encryption: <keygen name="security"  />
    <input type="submit" />
</form>
<!-- output -->
<form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
    0<input type="range" id="a" value="50">100
    +<input type="number" id="b" value="50">
    =<output name="x" for="a b"></output>
</form>
<!-- progress -->
<input id="btn" type="button" value="开始下载">
下载进度：<progress id="test" value="0" max="100"></progress>
<script>
var oTimer;
btn.onclick = function() {
    if (oTimer) {
        return;
    }
    oTimer = setInterval(function() {
        test.value++;
        if (test.value >= test.max) {
            clearInterval(oTimer);
        }
    }, 50);
}
</script>
<!-- meter -->
<input id="btn" type="button" value="增加库存">
库存量：<meter id="test" value="10" min="0" low="30" optimum="60" high="80" max="100" ></meter>
<script>
var oTimer;
btn.onclick = function() {
    if (oTimer) {
        return;
    }
    oTimer = setInterval(function() {
        test.value++;
        if (test.value >= test.max) {
            clearInterval(oTimer);
        }
    }, 50);
};
</script>
```

### 表单美化

由于一些系统原生的表单控件在各个浏览器中显示效果不一致，且无法设置某些关键CSS样式，为了保证表单在各浏览器中的兼容性，表单美化就是不得不做的一件事了。

#### 单选按钮

```html
<style>
    body{margin:0;font:16px/20px "宋体";}
    .box{width:500px;height:100px;line-height:100px;margin:0 auto;border:1px solid black;text-align:center;}
    .box label{position:relative;padding-left:20px;cursor: pointer;}
    .box input{visibility:hidden;}
    .box i{position:absolute;top:-2px;left:-2px;height:19px;width:19px;background:url('https://demo.xiaohuochai.site/radiobutton.gif') no-repeat -14px -18px;}
    .box label:hover{color:red;}
    .box label:hover i{background-position:-14px -118px;}
    .box label.selected i{background-position:-14px -218px;}
</style>
<div class="box" id="box">
    选择一项游戏方式：
    <label for="xiu"><i></i>咻一咻</label>
    <input id="xiu" type="radio" value="咻一咻">
    <label for="yao"><i></i>摇一摇</label>
    <input id="yao" type="radio" value="摇一摇">
    <label for="niu"><i></i>扭一扭</label>
    <input id="niu" type="radio" value="扭一扭">
</div>
<script>
    var aLabel = document.getElementById('box').getElementsByTagName('label');
    for (var i = 0, leni = aLabel.length; i < leni; i++) {
        aLabel[i].onclick = function () {
            for (var j = 0, lenj = aLabel.length; j < lenj; j++) {
                aLabel[j].removeAttribute('class');
            }
            this.className = 'selected';
        }
    }
</script>
```

#### 多选按钮

```html
<style>
    body{margin:0;font:16px/20px "宋体";}
    .box{width:600px;height:100px;line-height:100px;margin:0 auto;border:1px solid black;text-align:center;}
    .box label{position:relative;padding-left:20px;}
    .box input{visibility:hidden;}
    .box i{position:absolute;top:-2px;left:-2px;height:19px;width:19px;background:url('https://demo.xiaohuochai.site/checkbox.gif') no-repeat -14px -18px;}
    .box label:hover{color:red;}
    .box label:hover i{background-position:-14px -118px;}
    .box label.selected i{background-position:-14px -218px;}
</style>
<div class="box" id="box">
    选择日常手机交易方式(可多选)：
    <label for="a"><i></i>支付宝</label>
    <input id="a" type="radio" value="支付宝">
    <label for="t"><i></i>微信</label>
    <input id="t" type="radio" value="微信">
    <label for="b"><i></i>百度钱包</label>
    <input id="b" type="radio" value="百度钱包">
</div>
<script>
    var aLabel = document.getElementById('box').getElementsByTagName('label');
    for (var i = 0, leni = aLabel.length; i < leni; i++) {
        aLabel[i].onclick = function () {
            if (!this.className) {
                this.className = 'selected';
            } else {
                this.removeAttribute('class');
            }
        }
    }
</script>
```

#### 下拉列表

```html
<style>
    body{margin:0;font:16px/20px "宋体";}
    ul{margin:0;padding:0;list-style:none;}
    .box{width:300px;height:40px;margin:0 auto;border:1px solid black;}
    .box .show{background-color:red;line-height:30px;padding:5px;}
    .box .show-area{color:white;vertical-align:middle;}
    .box .show-select{position:relative;display:inline-block;vertical-align:middle;width:200px;height:28px;border:1px solid #999;background-color:white;text-indent:20px;cursor:pointer;}
    .box .show-selectAdd{color:#999;}
    .box .show-select i{position:absolute;height:0;width:0;top:0;right:0;margin-top:12px;margin-right:5px;border:5px solid transparent;border-top-color:black;}
    .box .show-selectAdd i{border:5px solid transparent;border-bottom-color:black;margin-top:8px;}
    .box .list{border:1px solid #dfdfdf;border-top:none;display:none;}
    .box .list-in{height:30px;line-height:30px;text-indent:74px;border-bottom:1px solid #dfdfdf;cursor:pointer;}
    .box .list-in:hover{color:red;}
</style>
<div class="box" id="box">
    <div class="show">
        <strong class="show-area">地址:</strong>
        <span class="show-select">朝阳区<i></i></span>
    </div>
    <ul class="list">
        <li class="list-in">朝阳区</li>
        <li class="list-in">海淀区</li>
        <li class="list-in">东城区</li>
        <li class="list-in">西城区</li>
        <li class="list-in">丰台区</li>
        <li class="list-in">石景山区</li>
    </ul>
</div>
<script>
    var oBox = document.getElementById('box');
    var oDiv = oBox.getElementsByTagName('div')[0];
    var oShow = oDiv.getElementsByTagName('span')[0];
    var oUl = oBox.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    // 简单思路
    // [1]点击oDiv时，默认文字为黑色，三角向上，变成文字为#999，三角向下；简化为增加一个show-selectAdd类名；oUl从隐藏变成显示
    oDiv.onclick = function(e) {
        // 阻止冒泡
        e = e || event;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
        oShow.className = 'show-select show-selectAdd';
        oUl.style.display = 'block';
    }
    // [2]点击oUl的li时，oUl从隐藏变成显示，文字和三角恢复到黑色和向上的默认样式；并且文字内容变成当前点击的li的内容
    for (var i = 0, len = aLi.length; i < len; i++) {
        aLi[i].onclick = function() {
            oShow.innerHTML = this.innerHTML + '<i></i>';
        }
    }
    // [3]点击box以外的其他部分时，oUl从隐藏变成显示，文字和三角恢复到黑色和向上的默认样式
    document.onclick = function() {
        this.getElementsByTagName('span')[0].className = 'show-select';
        oUl.style.display = 'none';
    }
</script>
```

## 【重点，还不是很懂】

HTML实体 nbsp < > & " '
HTML原有属性 class id style title accesskey tabindex lang dir
HTML5新增属性 contenteditable contextmenu draggable hidden dropzone translate   data-* spellcheck
**HTML5标签嵌套规则**
HTML条件注释 <!--[if IE] ... <![endif]-->    if IE 6/7/8/9    gt lt gte lte
HTML规范——特殊元素 img[src alt title width/height 是否下载] label/input button.type input.type audio/video/source/object
**HTML文档头部** keywords description author copyright viewport renderer refresh X-UA-Compatible windows-target Expires Progma
**HTML块级元素**
    h1~h6 hgroup
    div p article nav section main footer header aside
    hr pre blockquote
    address
    ul ol dt dl dd
    form fieldset output legend optgroup option
    html body
    figure figcaption
    summary details
**HTML内联元素**
    br
    a
    img
    ...
HTML结构元素
**HTML标签内容模型**

a[href,target,download]

img[src,alt,width,height,ismap,longdesc,usemap,srcset,sizes,crossorigin] figure figcaption map[id,name] area[href,shape,coords,alt,nohref]

table[border,cellpadding,cellspacing,summary,width,frame,rules]<border-collapse,border-spacing,empty-cells,table-layout,vertical-align>
thread tbody tfoot
tr th td[colspan,rowspan]
col colgroup[span]
caption<caption-side>

object[width,height,classid,codebase,type,name,data,usemap,form,typemustmatch]>param[name,value,type,valuetype]+embed[src,width,height,type]

HTML音频
HTML视频

audio[autoplay,controls,loop,preload,src] video[autoplay,controls,loop,preload,src,width,height,poster]
source[src,type,media] track[src,srclang,default,kind,label]

音乐播放器

form[name,accept-charset,action,target,enctype,method,autocomplete,novalidate]
input[name,value,type,src,alt,disabled,checked,readonly,size,maxlength,accept]
input[autocomplete,autofocus,novalidate,multiple,width,height,list,max,min,step,pattern,placeholder,required,form,formaction,formenctype,formmethod,formnovalidate,formtarget]
button、checkbox、file、hidden、image、password、radio、reset、submit、text这10个是传统的输入控件，新增的有color、date、datetime、datetime-local、email、month、number、range、search、tel、time、url、week共13个。
button、select、option、label、optgroup、textarea、fieldset、legend这八个传统表单控件，datalist、progress、meter、output、keygen这五个新增表单控件。
button[name,value,type,autofocus,disabled,form,formaction,formenctype,formtarget,formmethod,formnovalidate]
select[name,form,autofocus,disabled,multiple,size]
option[disabled,selected,label,value]
optgroup[disabled,label]
textarea[name,value,placeholder,maxlength,autofocus,disabled,readonly,required,form,cols,rows,wrap]
fieldset[name,form,disabled]
legend
label[form,for]
datalist[id]
keygen[autofocus,disabled,name,form,challenge,keytype]
output[for,form,name]
progress[name,value]
meter[form,low,high,min,max,optimum]