

## React 简明学习

https://www.cnblogs.com/xiaohuochai/p/8541350.html<br>

React让组件化成为了前端开发的基本思路，比传统思路可以更好的控制前端复杂度，旧的开发方法受到了影响，如分离式的HTML/CSS、非侵入式JS、模板语言、MVC、CSS文件、Bootstrap等。在React中，组件把数据翻译成UI，数据通过组件props属性传入，组件自身状态通过state状态值来控制。 每个组件都是一个状态机，也就是声明式编程。数据有变化，组件自动刷新。本文将详细介绍React基本概念

**【JSX】**

1. JSX是Javascript的语法扩展(extension)，可以让我们在Javascript中可以编写像HTML一样的代码。JSX用来声明 React 当中的元素，JSX 中使用 JavaScript 表达式，JSX中的表达式要包含在大括号里。
2. 可以在JSX中使用【模板字符串】：``{`Joined in ${time}`}``
3. 可以使用引号来定义以字符串为值的【属性】：``const element = <div tabIndex="0"></div>``。也可以使用大括号来定义以 JavaScript 表达式为值的属性：``const element = <img src={user.avatarUrl}/>``；如果没有给属性传值，它默认为 true
4. 【扩展属性】如果已经有了个 props 对象，并且想在 JSX 中传递它，可以使用 ... 作为扩展操作符来传递整个属性对象。下面两个组件是等效的。
    1. ``<Greeting firstName="Ben" lastName="Hector" />``
    2. ``const props = {firstName: 'Ben', lastName: 'Hector'}; <Greeting {...props} />``
5. 【JSX是进步还是倒退】
    1. 长期以来，一直不倡导在HTML中使用onclick，为什么在JSX中却要使用onClick这样的方式来添加事件处理函数呢？
    2. 在React出现之初，很多人对React这样的设计非常反感，因为React把类似HTML的标记语言和Javascript混在一起了。但是，随着时间的推移，业界逐渐认可了这种方式，因为大家发现，以前用HTML来代表内容，用CSS代表样式，用Javascript来定义交互行为，这三种语言分在三种不同的文件里面，实际上是把不同技术分开管理了，而不是逻辑上的“分而治之”
    3. 根据做同一件事的代码应该有高耦合性的设计原则，为什么不把实现这个功能的所有代码集中在一个文件里呢？
    4. 在JSX中使用onClick来添加事件处理函数，是否代表网页应用开发兜了一个大圈，最终回到了起点呢？
    5. 不是的，在HTML中直接使用onclick很不专业，因为onclick添加的事件处理函数是在全局环境下执行的，这污染了全局环境，很容易产生意料不到的后果；给很多DOM元素添加onclick事件，可能会影响网页的性能；对于使用onclick的DOM元素，如果在DOM元素删除后忘了注销事件处理函数，可能会造成内存泄漏
    6. 上面说的这些问题在JSX中都不存在
    7. onClick挂载的每个函数，都可以控制在组件范围内，不会污染全局空间；在JSX中使用了onClick，但并没有产生直接使用onclick的HTML，而是使用事件委托的方式处理，无论多少个onclick出现，最后都只在DOM树上添加了一个事件处理函数，挂在最顶层的DOM节点上；因为React控制了组件的生命周期，在unmount时自然能够清除相关的所有事件处理函数，内存泄漏也不再是一个问题

**【样式设置】**

1. 【行内样式】：当属性的类型不是字符串类型时，在JSX中必须用花括号\{}把prop值包住。所以style的值有两层花括号。行内样式使用如下写法：``{{color: 'red', backgroundColor: 'blue'}}``
2. 【图片】的相对引用使用如下写法：``<img src={require('./common/img/128H.jpg')} alt="" />``
3. 【CSS引入】：``require('./common/style/main.css')`` 或者 ``import '@/assets/global.css'``
4. 【class设置】：``<div className="test"></div>``
5. 【自定义属性】：``<div data-abc="123"></div>``

**【组件】**

1. 作为软件设计的通用原则，组件的划分要满足高内聚和低耦合。高内聚是指把逻辑紧密相关的内容放在一个组件中。低耦合是指不同组件之间的依赖关系要尽量弱化，也就是每个组件要尽量独立。组件从概念上看就像是函数，它可以接收任意的输入值（称之为“props”），并返回一个需要在页面上展示的React元素。[注意]组件可以嵌套自身。
2. 【函数组件】：``function Welcome(props) { return <h1>Hello, {props.name}</h1>;}``
3. 【类组件】：``class Welcome extends React.Component { render() { return <h1>Hello, {this.props.name}</h1>; }}``

**【prop】**

1. 当React遇到的元素是用户自定义的组件，它会将JSX属性作为单个对象传递给该组件，这个对象称之为“props”
2. 【只读性】：无论是使用函数或是类来声明一个组件，它决不能修改它自己的props
3. 【隐藏组件】：让 render 方法返回 null 可以隐藏组件
4. 【父传子】：下面的例子来展示父级如何通过props把数据传递给子级
5. 【读取props】：下面的例子展示子级如何读取父级传递来的props
6. 【props检查】：一个组件应该规范以下内容：这个组件支持哪些prop，以及每个prop应该是什么样的格式。React通过propTypes来支持这些功能
7. 【子传父】：React组件要反馈数据在父组件时，可以使用prop。函数类型的prop等于让父组件交给子组件一个回调函数，子组件在恰当的时机调用函数类型的prop，可以带上必要的参数，这样就可以反过来把信息传递给父级。下面的例子中，onUpdate是子组件向父组件传递数据的渠道

```js
// 1
function Welcome(props) => <h1>Hello, {props.name}</h1>;
const element = <Welcome name="Sara" />;
ReactDOM.render(element, document.getElementById('root'));
// 4
class ControlPanel extends Component {
    render() {
        return (<div>
            <Counter caption="First"/>
            <Counter caption="Second" initValue={10} />
            <Counter caption="Third" initValue={20} />
            <button onClick={ () => this.forceUpdate() }>Click me to re-render!</button>
        </div>);
    }
}
// 5
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: props.initValue }
    }
}
// 6
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
};
Counter.defaultProps = { initValue: 0 };
// 7
// 子组件
class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.state = {count: props.initValue}
    }
    onClickIncrementButton() { this.updateCount(true); }
    onClickDecrementButton() { this.updateCount(false); }
    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
        this.setState({count: newValue})
        this.props.onUpdate(newValue, previousValue)
    }
    render() {
        const {caption} = this.props;
        return (<div>
            <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
            <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
            <span>{caption} count: {this.state.count}</span>
        </div>);
    }
}
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
};
Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
};
export default Counter;
// 父组件
class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);
        this.initValues = [ 0, 10, 20];
        const initSum = this.initValues.reduce((a, b) => a+b, 0);
        this.state = {sum: initSum};
    }
    onCounterUpdate(newValue, previousValue) {
        const valueChange = newValue - previousValue;
        this.setState({sum: this.state.sum + valueChange});
    }
    render() {
        return (<div>
            <Counter onUpdate={this.onCounterUpdate} caption="First" />
            <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValues[1]} />
            <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValues[2]} />
            <div>Total Count: {this.state.sum}</div>
        </div>);
    }
}
export default ControlPanel;
```

## React 中文官网 -- 开始

https://zh-hans.reactjs.org/docs/getting-started.html<br>

### 一分钟用上 React

```html
<!-- ... 其它 HTML ... -->
<div id="like_button_container"></div>  <!-- 加上 id ，稍后用 JavaScript 代码找到它，并在其中显示一个 React 组件。React 会替换 DOM 容器内的任何已有内容。 -->
<!-- ... 其它 HTML ... -->
<!-- 加载 React。-->
<!-- 注意: 部署时，将 "development.js" 替换为 "production.min.js"。-->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<!-- 加载我们的 React 组件。-->
<script src="like_button.js"></script>
```
```js
// like_button.js
'use strict';
const e = React.createElement;
class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    render() {
        if (this.state.liked) { return 'You liked this.'; }
        return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like');
    }
}
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
```

```html
<div data-commentid="1" class="like_button_container"></div>
<div data-commentid="2" class="like_button_container"></div>
<div data-commentid="3" class="like_button_container"></div>
<!-- ... -->
<script>
    const e = React.createElement
    class LikeButton extends React.Component {
        constructor(props) {
            super(props)
            this.state = { liked: false }
        }
        render() {
            if (this.state.liked) { return 'You liked this comment number ' + this.props.commentID }
            return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like')
        }
    }
    document.querySelectorAll('.like_button_container').forEach(domContainer => {
        const commentID = parseInt(domContainer.dataset.commentid, 10)
        ReactDOM.render(e(LikeButton, { commentID: commentID }), domContainer)
    })
</script>
```

生产环境js
```js
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```

在项目中尝试 JSX 最快的方法是在页面中添加这个 ``<script>`` 标签：
```js
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
现在，你可以在任何 ``<script>`` 标签内使用 JSX，方法是在为其添加 type="text/babel" 属性。例子：react2.html

这种方式适合于学习和创建简单的示例。然而，它会使你的网站变慢，并且不适用于生产环境。当你准备好更进一步时，删除你添加的这个新的 ``<script>`` 标签以及type="text/babel" 属性。因此我们需要 JSX 预处理器来自动转换所有 ``<script>`` 标签的内容。

1. 执行 npm init -y （如果失败，这是[修复办法](https://gist.github.com/gaearon/246f6380610e262f8a648e3e51cad40d)）
2. 执行 npm install babel-cli@6 babel-preset-react-app@3
3. 运行 JSX 预处理器。创建一个名为 src 的文件夹并执行这个终端命令 npx babel --watch src --out-dir . --presets react-app/prod 。不要等待它运行结束 —— 这个命令启动了一个对 JSX 的自动监听器。

### 创建新的 React 应用

介绍一些流行的 React 工具链，它们有助于完成如下任务：

* 扩展文件和组件的规模。
* 使用来自 npm 的第三方库。
* 尽早发现常见错误。
* 在开发中实时编辑 CSS 和 JS。
* 优化生产输出。

本部分推荐的工具链无需配置即可开始使用。

* 如果你是在学习 React 或创建一个新的单页应用，请使用 Create React App。
* 如果你是在用 Node.js 构建服务端渲染的网站，试试 Next.js。
* 如果你是在构建面向内容的静态网站，试试 Gatsby。
* 如果你是在打造组件库或将 React 集成到现有代码仓库，尝试更灵活的工具链。

**【Create React App】**

[Create React App](https://github.com/facebook/create-react-app) 是一个用于学习 React 的舒适环境，也是用 React 创建新的单页应用的最佳方式。它会配置你的开发环境，以便使你能够使用最新的 JavaScript 特性，提供良好的开发体验，并为生产环境优化你的应用程序。你需要在你的机器上安装 Node >= 8.10 和 npm >= 5.6。要创建项目，请执行：

* npx create-react-app my-app
* cd my-app
* npm start

Create React App 不会处理后端逻辑或操纵数据库；它只是创建一个前端构建流水线（build pipeline），所以你可以使用它来配合任何你想使用的后端。它在内部使用 Babel 和 webpack，但你无需了解它们的任何细节。

**【Next.js】**

[Next.js](https://nextjs.org/) 一个流行的、轻量级的框架，用于配合 React 打造静态化和服务端渲染应用。它包括开箱即用的样式和路由方案，并且假定你使用 [Node.js](https://nodejs.org/) 作为服务器环境。

**【Gatsby】**

[Gatsby](https://www.gatsbyjs.org/) 是用 React 创建静态网站的最佳方式。它让你能使用 React 组件，但输出预渲染的 HTML 和 CSS 以保证最快的加载速度。从 Gatsby 的[官方指南](https://www.gatsbyjs.org/docs/)和[入门示例集](https://www.gatsbyjs.org/docs/gatsby-starters/)了解更多。

**【更灵活的工具链】**

以下工具链为 React 提供更多更具灵活性的方案。推荐给更有经验的使用者：

* [Neutrino](https://neutrinojs.org/) 把 webpack 的强大功能和简单预设结合在一起。并且包括了 React 应用和 React 组件的预设。
* [Nx](https://nx.dev/react) 是针对全栈 monorepo 的开发工具包，其内置了 React，Next.js，Express 等。
* [Parcel](https://parceljs.org/) 是一个快速的、零配置的网页应用打包器，并且可以搭配 React 一起工作。
* [Razzle](https://github.com/jaredpalmer/razzle) 是一个无需配置的服务端渲染框架，但它提供了比 Next.js 更多的灵活性。

**【从头开始打造工具链】**

一组 JavaScript 构建工具链通常由这些组成：

* 一个 package 管理器，比如 Yarn 或 npm。它能让你充分利用庞大的第三方 package 的生态系统，并且轻松地安装或更新它们。
* 一个打包器，比如 webpack 或 Parcel。它能让你编写模块化代码，并将它们组合在一起成为小的 package，以优化加载时间。
* 一个编译器，例如 Babel。它能让你编写的新版本 JavaScript 代码，在旧版浏览器中依然能够工作。

如果你倾向于从头开始打造你自己的 JavaScript 工具链，可以查看[这个指南](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)，它重新创建了一些 Create React App 的功能。别忘了确保你自定义的工具链针[对生产环境进行了正确配置](https://zh-hans.reactjs.org/docs/optimizing-performance.html#use-the-production-build)。

### CDN 链接

可以通过 CDN 获得 React 和 ReactDOM 的 UMD 版本。
```js
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

上述版本仅用于开发环境，不适合用于生产环境。压缩优化后可用于生产的 React 版本可通过如下方式引用：
```js
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

如果需要加载指定版本的 react 和 react-dom，可以把 16 替换成所需加载的版本号。

如果你通过 CDN 的方式引入 React，我们建议你设置 crossorigin 属性。同时建议你验证使用的 CDN 是否设置了 Access-Control-Allow-Origin: * HTTP 请求头。这样能在 React 16 及以上的版本中有更好的错误处理体验。

### 发布渠道

此文章与从事框架，库或开发工具的开发人员息息相关。而主要使用 React 来构建应用程序的开发者无需担心此预发布渠道。

## React 中文官网 -- 核心概念

### Hello World

```js
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));
```

### JSX 简介

我们建议在 React 中配合使用 JSX，JSX 可以很好地描述 UI 应该呈现出它应有交互的本质形式。JSX 可能会使人联想到模版语言，但它具有 JavaScript 的全部功能。JSX 可以生成 React “元素”。我们将在下一章节中探讨如何将这些元素渲染为 DOM。下面我们看下学习 JSX 所需的基础知识。

1. 为什么使用 JSX ：React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合，比如，在 UI 中需要绑定处理事件、在某些时刻状态发生变化时需要通知到 UI，以及需要在 UI 中展示准备好的数据。React 并没有采用将标记与逻辑进行分离到不同文件这种人为地分离方式，而是通过将二者共同存放在称之为“组件”的松散耦合单元之中，来实现关注点分离。
2. 在 JSX 中嵌入表达式：在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。例如，2 + 2，user.firstName 或 formatName(user) 都是有效的 JavaScript 表达式。我们建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱。
3. JSX 也是一个表达式：在编译之后，JSX 表达式会被转为普通 JavaScript 函数调用，并且对其取值后得到 JavaScript 对象。也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX。
4. JSX 特定属性：可以通过使用引号，来将属性值指定为字符串字面量；也可以使用大括号，来在属性值中插入一个 JavaScript 表达式。在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。因为 JSX 语法上更接近 JavaScript 而不是 HTML，所以 React DOM 使用 camelCase（小驼峰命名）来定义属性的名称，而不使用 HTML 属性名称的命名约定。
5. 使用 JSX 指定子元素：
6. JSX 防止注入攻击：可以安全地在 JSX 当中插入用户输入内容。React DOM 在渲染所有输入内容之前，默认会进行转义。它可以确保在你的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转换成了字符串。这样可以有效地防止 XSS（cross-site-scripting, 跨站脚本）攻击。
7. JSX 表示对象：Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

```js
// 2
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
ReactDOM.render(element, document.getElementById('root'));
// 7
const element = (<h1 className="greeting">Hello, world!</h1>);  // 等价于
const element = React.createElement( 'h1', {className: 'greeting'}, 'Hello, world!');  // React.createElement() 会预先执行一些检查，以帮助你编写无错代码，但实际上它创建了一个这样的对象：
const element = { type: 'h1', props: { className: 'greeting', children: 'Hello, world!' } };  // 注意：这是简化过的结构
```

### 元素渲染

与浏览器的 DOM 元素不同，React 元素是创建开销极小的普通对象。React DOM 会负责更新 DOM 来与 React 元素保持一致。

1. 将一个元素渲染为 DOM：想要将一个 React 元素渲染到根 DOM 节点（该节点内的所有内容都将由 React DOM 管理）中，只需把它们一起传入 ReactDOM.render()。
2. 更新已渲染的元素：React 元素是不可变对象。一旦被创建，你就无法更改它的子元素或者属性。一个元素就像电影的单帧：它代表了某个特定时刻的 UI。根据我们已有的知识，更新 UI 唯一的方式是创建一个全新的元素，并将其传入 ReactDOM.render()。
3. React 只更新它需要更新的部分：React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。

```js
// 2
setInterval(() => {
    ReactDOM.render((
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    ), document.getElementById('root'))
}, 1000)
```

### 组件 & Props

组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。组件，从概念上类似于 JavaScript 函数。它接受任意的入参（即 “props”），并返回用于描述页面展示内容的 React 元素。

1. 函数组件与 class 组件：定义组件最简单的方式就是编写 JavaScript 函数；同时还可以使用 ES6 的 class 来定义组件。
2. 渲染组件：之前，我们遇到的 React 元素都只是 DOM 标签，不过，React 元素也可以是用户自定义的组件。当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 “props”。注意： 组件名称必须以大写字母开头。React 会将以小写字母开头的组件视为原生 DOM 标签。例如，``<div />`` 代表 HTML 的 div 标签，而 ``<Welcome />`` 则代表一个组件，并且需在作用域内使用 Welcome。
3. 组合组件：组件可以在其输出中引用其他组件。这就可以让我们用同一组件来抽象出任意层次的细节。按钮，表单，对话框，甚至整个屏幕的内容：在 React 应用程序中，这些通常都会以组件的形式表示。通常来说，每个新的 React 应用程序的顶层组件都是 App 组件。但是，如果你将 React 集成到现有的应用程序中，你可能需要使用像 Button 这样的小组件，并自下而上地将这类组件逐步应用到视图层的每一处。
4. 提取组件：将组件拆分为更小的组件。
5. Props 的只读性：组件无论是使用函数声明还是通过 class 声明，都决不能修改自身的 props。React 非常灵活，但它也有一个严格的规则：所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。

```js
// 1
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
// 2
const element = <Welcome name="Sara" />;
```

### State & 生命周期

前面我们只了解了一种更新 UI 界面的方法。通过调用 ReactDOM.render() 来修改我们想要渲染的元素。这次我们将学习如何封装真正可复用的 Clock 组件。它将设置自己的计时器并每秒更新一次。

```js
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
function tick() {
    ReactDOM.render(<Clock date={new Date()} />, document.getElementById('root'));
}
setInterval(tick, 1000);
```

理想情况下，我们希望只编写一次代码，便可以让 Clock 组件自我更新。我们需要在 Clock 组件中添加 “state” 来实现这个功能。State 与 props 类似，但是 state 是私有的，并且完全受控于当前组件。

1. 将函数组件转换成 class 组件
    1. 创建一个同名的 ES6 class，并且继承于 React.Component。
    2. 添加一个空的 render() 方法。
    3. 将函数体移动到 render() 方法之中。
    4. 在 render() 方法中使用 this.props 替换 props。
    5. 删除剩余的空函数声明。
    6. 现在 Clock 组件被定义为 class，而不是函数。每次组件更新时 render 方法都会被调用，但只要在相同的 DOM 节点中渲染 ``<Clock />`` ，就仅有一个 Clock 组件的 class 实例被创建使用。这就使得我们可以使用如 state 或生命周期方法等很多其他特性。
2. 向 class 组件中添加局部的 state
    1. 把 render() 方法中的 this.props.date 替换成 this.state.date
    2. 添加一个 class 构造函数，然后在该函数中为 this.state 赋初值 。通过 super(props) 将 props 传递到父类的构造函数中。Class 组件应该始终使用 props 参数来调用父类的构造函数。
    3. 移除 ``<Clock />`` 元素中的 date 属性。
3. 将生命周期方法添加到 Class 中
    1. 在具有许多组件的应用程序中，当组件被销毁时释放所占用的资源是非常重要的。
    2. 当 Clock 组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为“挂载（mount）”。
    3. 同时，当 DOM 中 Clock 组件被删除的时候，应该清除计时器。这在 React 中被称为“卸载（unmount）”。
    4. 我们可以为 class 组件声明一些特殊的方法，当组件挂载或卸载时就会去执行这些方法

最后，代码如下
```js
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (<div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>);
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.setState({ date: new Date() }), 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
}
ReactDOM.render(<Clock />, document.getElementById('root'));
```

1. 正确地使用 State
    1. 不要直接修改 State：因为不会更新组件，要使用 setState
    2. State 的更新可能是异步的：出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用。因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
        1. 例如，此代码可能会无法更新计数器 ``this.setState({ counter: this.state.counter + this.props.increment });``
        2. 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数 ``this.setState((state, props) => ({ counter: state.counter + props.increment }));``
    3. State 的更新会被合并：当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state。
2. 数据是向下流动的
    1. 不管是父组件或是子组件都无法知道某个组件是有状态的还是无状态的，并且它们也并不关心它是函数组件还是 class 组件。这就是为什么称 state 为局部的或是封装的的原因。除了拥有并设置了它的组件，其他组件都无法访问。
    2. 组件可以选择把它的 state 或者 state 的某个属性 作为 props 向下传递到它的子组件中。这通常会被叫做“自上而下”或是“单向”的数据流。任何的 state 总是所属于特定的组件，而且从该 state 派生的任何数据或 UI 只能影响树中“低于”它们的组件。如果你把一个以组件构成的树想象成一个 props 的数据瀑布的话，那么每一个组件的 state 就像是在任意一点上给瀑布增加额外的水源，但是它只能向下流动。

### 事件处理

React 元素的事件处理和 DOM 元素的很相似，但是有一点语法上的不同：

1. React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
2. 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

传统的 HTML：``<button onclick="activateLasers()">Activate Lasers</button>`` 。React 中：``<button onClick={activateLasers}>Activate Lasers</button>``

在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。例如，传统的 HTML 中阻止链接默认打开一个新页面，你可以这样写：
``<a href="#" onclick="console.log('The link was clicked.'); return false">Click me</a>``
在 React 中，可能是这样的：
```js
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }
    return (<a href="#" onClick={handleClick}>Click me</a>);
}
```

使用 React 时，你一般不需要使用 addEventListener 为已创建的 DOM 元素添加监听器。事实上，你只需要在该元素初始渲染的时候添加监听器即可。当你使用 ES6 class 语法定义一个组件的时候，通常的做法是将事件处理函数声明为 class 中的方法。例如，下面的 Toggle 组件会渲染一个让用户切换开关状态的按钮：
```js
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({ isToggleOn: !state.isToggleOn }));
    }
    render() {
        return (<button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>);
    }
}
ReactDOM.render(<Toggle />, document.getElementById('root'));
```

如果觉得使用 bind 很麻烦，这里有两种方式可以解决。如果你正在使用实验性的 public class fields 语法，你可以使用 class fields 正确的绑定回调函数：
```js
class LoggingButton extends React.Component {
    // 此语法确保 `handleClick` 内的 `this` 已被绑定。
    // 注意: 这是 *实验性* 语法。
    handleClick = () => {
        console.log('this is:', this);
    }
    render() {
        return (<button onClick={this.handleClick}>Click me</button>);
    }
}  // Create React App 默认启用此语法。
```

如果你没有使用 class fields 语法，你可以在回调中使用箭头函数
```js
class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }
    render() {
        // 此语法确保 `handleClick` 内的 `this` 已被绑定。
        return (<button onClick={() => this.handleClick()}>Click me</button>);
    }
}
```
此语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。在大多数情况下，这没什么问题，但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器中绑定或使用 class fields 语法来避免这类性能问题。

向事件处理程序传递参数。在循环中，通常我们会为事件处理函数传递额外的参数。例如，若 id 是你要删除那一行的 ID，以下两种方式都可以向事件处理函数传递参数：
```js
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
```
上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。

### 条件渲染

在 React 中，你可以创建不同的组件来封装各种你需要的行为。然后，依据应用的不同状态，你可以只渲染对应状态下的部分内容。React 中的条件渲染和 JavaScript 中的一样，使用 JavaScript 运算符 if 或者条件运算符去创建元素来表现当前的状态，然后让 React 根据它们来更新 UI。
```js
function UserGreeting(props) { return <h1>Welcome back!</h1>; }
function GuestGreeting(props) { return <h1>Please sign up.</h1>; }
function Greeting(props) { return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />; }
ReactDOM.render(<Greeting isLoggedIn={false} />, document.getElementById('root'));
```

**【元素变量】**

可以使用变量来储存元素。这可以帮助你有条件地渲染组件的一部分，而其他的渲染部分并不会因此而改变。
```js
function LoginButton(props) { return (<button onClick={props.onClick}>Login</button>); }
function LogoutButton(props) { return (<button onClick={props.onClick}>Logout</button>); }
```
在下面的示例中，我们将创建一个名叫 LoginControl 的有状态的组件。它将根据当前的状态来渲染 ``<LoginButton />`` 或者 ``<LogoutButton />``。同时它还会渲染上一个示例中的 ``<Greeting />``。
```js
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (<div><Greeting isLoggedIn={isLoggedIn} />{button}</div>);
    }
}
ReactDOM.render(<LoginControl />, document.getElementById('root'));
```
声明一个变量并使用 if 语句进行条件渲染是不错的方式，但有时你可能会想使用更为简洁的语法。接下来，我们将介绍几种在 JSX 中内联条件渲染的方法。

**【与运算符 &&】**

通过花括号包裹代码，你可以在 JSX 中嵌入表达式。这也包括 JavaScript 中的逻辑与 (&&) 运算符。它可以很方便地进行元素的条件渲染：
```js
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (<div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>);
}
ReactDOM.render(<Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />, document.getElementById('root'));
```
之所以能这样做，是因为在 JavaScript 中，true && expression 总是会返回 expression, 而 false && expression 总是会返回 false。因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它。

**【三目运算符】**

一种内联条件渲染的方法是使用 JavaScript 中的三目运算符 condition ? true : false。
```js
return (<div>The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</div>);  // or
return (<div>{isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />}</div>);
```

**【阻止组件渲染】**

在极少数情况下，你可能希望能隐藏组件，即使它已经被其他组件渲染。若要完成此操作，你可以让 render 方法直接返回 null，而不进行任何渲染。
```js
function WarningBanner(props) {
    return !props.warn ? null : (<div className="warning">Warning!</div>);
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(state => ({ showWarning: !state.showWarning }));
    }
    render() {
        return (<div>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>{this.state.showWarning ? 'Hide' : 'Show'}</button>
        </div>);
    }
}
ReactDOM.render(<Page />, document.getElementById('root'));
```

### 列表 & Key

如下代码，我们使用 map() 函数让数组中的每一项变双倍，然后我们得到了一个新的列表 doubled 并打印出来：``console.log([1, 2, 3, 4, 5].map((number) => number * 2));``。在 React 中，把数组转化为元素列表的过程是相似的。

**【渲染多个组件】**

我们可以通过使用 {} 在 JSX 内构建一个元素集合。下面，我们使用 Javascript 中的 map() 方法来遍历 numbers 数组。将数组中的每个元素变成 ``<li>`` 标签，最后我们将得到的数组赋值给 listItems。
```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => <li>{number}</li>);
ReactDOM.render(<ul>{listItems}</ul>, document.getElementById('root'));
```

**【基础列表组件】**

```js
function NumberList(props) {
    const listItems = props.numbers.map((number) => <li>{number}</li>);
    return (<ul>{listItems}</ul>);
}
ReactDOM.render(<NumberList numbers={[1, 2, 3, 4, 5]} />, document.getElementById('root'));
```
当我们运行这段代码，将会看到一个警告 a key should be provided for list items，意思是当你创建一个元素时，必须包括一个特殊的 key 属性。我们将在下一节讨论这是为什么。让我们来给每个列表元素分配一个 key 属性来解决上面的那个警告：
```js
function NumberList(props) {
    const listItems = props.numbers.map((number) => <li key={number.toString()}>{number}</li>);
    return (<ul>{listItems}</ul>);
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers} />, document.getElementById('root'));
```

**【key】**

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串。通常，我们使用数据中的 id 来作为元素的 key。当元素没有确定 id 的时候，万不得已你可以使用元素索引 index 作为 key。如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样做会导致性能变差，还可能引起组件状态的问题。可以看看 Robin Pokorny 的[深度解析使用索引作为 key](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) 的负面影响这一篇文章。如果你选择不指定显式的 key 值，那么 React 将默认使用索引用作为列表项目的 key 值。

**【用 key 提取组件】**

元素的 key 只有放在就近的数组上下文中才有意义。比方说，如果你提取出一个 ListItem 组件，你应该把 key 保留在数组中的这个 ``<ListItem />`` 元素上，而不是放在 ListItem 组件中的 ``<li>`` 元素上。
```js
// 错误例子
function ListItem(props) {
    const value = props.value;
    return (<li key={value.toString()}>{value}</li>);  // 错误！你不需要在这里指定 key：
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <ListItem value={number} />);
    return (<ul>{listItems}</ul>);  // 错误！元素的 key 应该在这里指定：
}
// 正确
function ListItem(props) {
    return (<li>{props.value}</li>);
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);
    return (<ul>{listItems}</ul>);
}
```
一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性。

**【key 只是在兄弟节点之间必须唯一】**

数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值。key 会传递信息给 React ，但不会传递给你的组件。如果你的组件中需要使用 key 属性的值，请用其他属性名显式传递这个值。

**【在 JSX 中嵌入 map()】**

JSX 允许在大括号中嵌入任何表达式，所以我们可以内联 map() 返回的结果：
```js
function NumberList(props) { return (<ul>{props.numbers.map((number) => <ListItem key={number.toString()} value={number} />)}</ul>) }
```

### 表单

在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 state。例如这个纯 HTML 表单只接受一个名称：
```html
<form>
    <label>名字:<input type="text" name="name" /></label>
    <input type="submit" value="提交" />
</form>
```
此表单具有默认的 HTML 表单行为，即在用户提交表单后浏览到新页面。如果你在 React 中执行相同的代码，它依然有效。但大多数情况下，使用 JavaScript 函数可以很方便的处理表单的提交， 同时还可以访问用户填写的表单数据。实现这种效果的标准方式是使用“受控组件”。

**【受控组件】**

在 HTML 中，表单元素（如``<input>、 <textarea> 和 <select>``）通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。我们可以把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。

例如，如果我们想让前一个示例在提交时打印出名称，我们可以将表单写为受控组件：
```js
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>名字:<input type="text" value={this.state.value} onChange={this.handleChange} /></label>
            <input type="submit" value="提交" />
        </form>);
    }
}
```
由于在表单元素上设置了 value 属性，因此显示的值将始终为 this.state.value，这使得 React 的 state 成为唯一数据源。由于 handleChange 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新。对于受控组件来说，输入的值始终由 React 的 state 驱动。你也可以将 value 传递给其他 UI 元素，或者通过其他事件处理函数重置，但这意味着你需要编写更多的代码。

**【textarea 标签】**

在 HTML 中, ``<textarea>`` 元素通过其子元素定义其文本。``<textarea>默认文本</textarea>``。而在 React 中，``<textarea>`` 使用 value 属性代替。这样，可以使得使用 ``<textarea>`` 的表单和使用单行 input 的表单非常类似。
```js
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '请撰写一篇关于你喜欢的 DOM 元素的文章.' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('提交的文章: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>文章:<textarea value={this.state.value} onChange={this.handleChange} /></label>
            <input type="submit" value="提交" />
        </form>);
    }
}
```

**【select 标签】**

在 HTML 中，``<select> ``创建下拉列表标签。例如，如下 HTML 创建了水果相关的下拉列表：
```html
<select>
    <option value="grapefruit">葡萄柚</option>
    <option value="lime">酸橙</option>
    <option selected value="coconut">椰子</option>
    <option value="mango">芒果</option>
</select>
```

请注意，由于 selected 属性的缘故，椰子选项默认被选中。React 并不会使用 selected 属性，而是在根 select 标签上使用 value 属性。这在受控组件中更便捷，因为您只需要在根标签中更新它。例如：
```js
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        alert('你喜欢的风味是: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (<form onSubmit={this.handleSubmit}>
            <label>
                选择你喜欢的风味: <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
            </label>
            <input type="submit" value="提交" />
        </form>);
    }
}
```
总的来说，这使得 ``<input type="text">, <textarea> 和 <select>`` 之类的标签都非常相似—它们都接受一个 value 属性，你可以使用它来实现受控组件。你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：``<select multiple={true} value={['B', 'C']}>``。

**【文件 input 标签】**

在 HTML 中，``<input type="file">`` 允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 File API 进行控制。因为它的 value 只读，所以它是 React 中的一个非受控组件。将与其他非受控组件在后续文档中一起讨论。

**【处理多个输入】**

当需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作。
```js
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isGoing: true, numberOfGuests: 2 };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    render() {
        return (<form>
            <label>参与: <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} /></label><br />
            <label>来宾人数:<input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} /></label>
        </form>);
    }
}
```
这里使用了 ES6 计算属性名称的语法更新给定输入名称对应的 state 值 ``setState({[name]: value})``。等同 ES5: 
```js
var partialState = {};
partialState[name] = value;
this.setState(partialState);
```
另外，由于 setState() 自动将部分 state 合并到当前 state, 只需调用它更改部分 state 即可。

**【受控输入空值】**

在受控组件上指定 value 的 prop 会阻止用户更改输入。如果你指定了 value，但输入仍可编辑，则可能是你意外地将 value 设置为 undefined 或 null。下面的代码演示了这一点。（输入最初被锁定，但在短时间延迟后变为可编辑。）
```js
ReactDOM.render(<input value="hi" />, mountNode);
setTimeout(function() { ReactDOM.render(<input value={null} />, mountNode); }, 1000);
```

**【受控组件的替代品】**

有时使用受控组件会很麻烦，因为你需要为数据变化的每种方式都编写事件处理函数，并通过一个 React 组件传递所有的输入 state。当你将之前的代码库转换为 React 或将 React 应用程序与非 React 库集成时，这可能会令人厌烦。在这些情况下，你可能希望使用[非受控组件](https://zh-hans.reactjs.org/docs/uncontrolled-components.html), 这是实现输入表单的另一种方式。

**【成熟的解决方案】**

如果你想寻找包含验证、追踪访问字段以及处理表单提交的完整解决方案，使用 [Formik](https://jaredpalmer.com/formik) 是不错的选择。然而，它也是建立在受控组件和管理 state 的基础之上 —— 所以不要忽视学习它们。

### 状态提升

通常，多个组件需要反映相同的变化数据，这时我们建议将共享状态提升到最近的共同父组件中去。让我们看看它是如何运作的。在本节中，我们将创建一个用于计算水在给定温度下是否会沸腾的温度计算器。我们将从一个名为 BoilingVerdict 的组件开始，它接受 celsius 温度作为一个 prop，并据此打印出该温度是否足以将水煮沸的结果。
```js
function BoilingVerdict(props) {
    return props.celsius >= 100 ? <p>The water would boil.</p> : <p>The water would not boil.</p>;
}
```

接下来, 我们创建一个名为 Calculator 的组件。它渲染一个用于输入温度的 ``<input>``，并将其值保存在 this.state.temperature 中。另外, 它根据当前输入值渲染 BoilingVerdict 组件。
```js
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }
    handleChange(event) {
        this.setState({ temperature: event.target.value });
    }
    render() {
        const temperature = this.state.temperature;
        return (<fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input value={temperature} onChange={this.handleChange} />
            <BoilingVerdict celsius={parseFloat(temperature)} />
        </fieldset>);
    }
}
```

**【添加第二个输入框】**

我们的新需求是，在已有摄氏温度输入框的基础上，我们提供华氏度的输入框，并保持两个输入框的数据同步。我们先从 Calculator 组件中抽离出 TemperatureInput 组件，然后为其添加一个新的 scale prop，它可以是 "c" 或是 "f"：
```js
const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: '' };
    }
    handleChange(event) {
        this.setState({ temperature: event.target.value });
    }
    render() {
        return (<fieldset>
            <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
            <input value={this.state.temperature} onChange={this.handleChange} />
        </fieldset>);
    }
}
```

我们现在可以修改 Calculator 组件让它渲染两个独立的温度输入框组件：
```js
class Calculator extends React.Component {
    render() {
        return (<div>
            <TemperatureInput scale="c" />
            <TemperatureInput scale="f" />
        </div>);
    }
}
```
我们现在有了两个输入框，但当你在其中一个输入温度时，另一个并不会更新。这与我们的要求相矛盾：我们希望让它们保持同步。另外，我们也不能通过 Calculator 组件展示 BoilingVerdict 组件的渲染结果。因为 Calculator 组件并不知道隐藏在 TemperatureInput 组件中的当前温度是多少。

**【编写转换函数】**

首先，我们将编写两个可以在摄氏度与华氏度之间相互转换的函数
```js
const toCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
const toFahrenheit = (celsius) => (celsius * 9 / 5) + 32;
```
上述两个函数仅做数值转换。而我们将编写另一个函数，它接受字符串类型的 temperature 和转换函数作为参数并返回一个字符串。我们将使用它来依据一个输入框的值计算出另一个输入框的值。当输入 temperature 的值无效时，函数返回空字符串，反之，则返回保留三位小数并四舍五入后的转换结果：
```js
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    return (Math.round(convert(input) * 1000) / 1000).toString();
}
```
例如，tryConvert('abc', toCelsius) 返回一个空字符串，而 tryConvert('10.22', toFahrenheit) 返回 '50.396'。

**【状态提升】**

到目前为止, 两个 TemperatureInput 组件均在各自内部的 state 中相互独立地保存着各自的数据。然而，我们希望两个输入框内的数值彼此能够同步。当我们更新摄氏度输入框内的数值时，华氏度输入框内应当显示转换后的华氏温度，反之亦然。在 React 中，将多个组件中需要共享的 state 向上移动到它们的最近共同父组件中，便可实现共享 state。这就是所谓的“状态提升”。接下来，我们将 TemperatureInput 组件中的 state 移动至 Calculator 组件中去。如果 Calculator 组件拥有了共享的 state，它将成为两个温度输入框中当前温度的“数据源”。它能够使得两个温度输入框的数值彼此保持一致。由于两个 TemperatureInput 组件的 props 均来自共同的父组件 Calculator，因此两个输入框中的内容将始终保持一致。

首先，我们将 TemperatureInput 组件中的 this.state.temperature 替换为 this.props.temperature（将来我们需要通过 Calculator 组件将其传入）。我们知道 props 是只读的。当 temperature 存在于 TemperatureInput 组件的 state 中时，组件调用 this.setState() 便可修改它。然而，temperature 是由父组件传入的 prop，TemperatureInput 组件便失去了对它的控制权。在 React 中，这个问题通常是通过使用“受控组件”来解决的。与 DOM 中的 ``<input>`` 接受 value 和 onChange 一样，自定义的 TemperatureInput 组件接受 temperature 和 onTemperatureChange 这两个来自父组件 Calculator 的 props。现在，当 TemperatureInput 组件想更新温度时，需调用 this.props.onTemperatureChange 来更新它
```js
const scaleNames = { c: 'Celsius', f: 'Fahrenheit' };
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        return (<fieldset>
            <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
            <input value={this.state.temperature} onChange={this.handleChange} />
        </fieldset>);
    }
}
```

然后是 Calculator
```js
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { temperature: '', scale: 'c' };
    }
    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }
    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (<div>
            <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
            <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>);
    }
}
```

**【学习小结】**

在 React 应用中，任何可变数据应当只有一个相对应的唯一“数据源”。通常，state 都是首先添加到需要渲染数据的组件中去。然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中。你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state。虽然提升 state 方式比双向绑定方式需要编写更多的“样板”代码，但带来的好处是，排查和隔离 bug 所需的工作量将会变少。由于“存在”于组件中的任何 state，仅有组件自己能够修改它，因此 bug 的排查范围被大大缩减了。此外，你也可以使用自定义逻辑来拒绝或转换用户的输入。如果某些数据可以由 props 或 state 推导得出，那么它就不应该存在于 state 中。举个例子，本例中我们没有将 celsiusValue 和 fahrenheitValue 一起保存，而是仅保存了最后修改的 temperature 和它的 scale。这是因为另一个输入框的温度值始终可以通过这两个值以及组件的 render() 方法获得。这使得我们能够清除输入框内容，亦或是，在不损失用户操作的输入框内数值精度的前提下对另一个输入框内的转换数值做四舍五入的操作。

当你在 UI 中发现错误时，可以使用 [React 开发者工具](https://github.com/facebook/react/tree/master/packages/react-devtools) 来检查问题组件的 props，并且按照组件树结构逐级向上搜寻，直到定位到负责更新 state 的那个组件。这使得你能够追踪到产生 bug 的源头：

### 组合 & 继承

**【包含关系】**

有些组件无法提前知晓它们子组件的具体内容。在 Sidebar（侧边栏）和 Dialog（对话框）等展现通用容器（box）的组件中特别容易遇到这种情况。我们建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中：
```js
function FancyBorder(props) {
    return (<div className={'FancyBorder FancyBorder-' + props.color}>{props.children}</div>);
}
// 这使得别的组件可以通过 JSX 嵌套，将任意组件作为子组件传递给它们。
function WelcomeDialog() {
    return (<FancyBorder color="blue">
        <h1 className="Dialog-title">Welcome</h1>
        <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>);
}
```

``<FancyBorder>`` JSX 标签中的所有内容都会作为一个 children prop 传递给 FancyBorder 组件。因为 FancyBorder 将 {props.children} 渲染在一个 ``<div> ``中，被传递的这些子组件最终都会出现在输出结果中。
少数情况下，你可能需要在一个组件中预留出几个“洞”。这种情况下，我们可以不使用 children，而是自行约定：将所需内容传入 props，并使用相应的 prop。
```js
function SplitPane(props) {
    return (<div className="SplitPane">
        <div className="SplitPane-left">{props.left}</div>
        <div className="SplitPane-right">{props.right}</div>
    </div>);
}
function App() {
    return (<SplitPane left={<Contacts />} right={<Chat />} />);
}
```

**【特例关系】**

有些时候，我们会把一些组件看作是其他组件的特殊实例，比如 WelcomeDialog 可以说是 Dialog 的特殊实例。在 React 中，我们也可以通过组合来实现这一点。“特殊”组件可以通过 props 定制并渲染“一般”组件：
```js
function Dialog(props) {
    return (<FancyBorder color="blue">
        <h1 className="Dialog-title">{props.title}</h1>
        <p className="Dialog-message">{props.message}</p>
    </FancyBorder>);
}
function WelcomeDialog() {
    return (<Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />);
}
```

组合也同样适用于以 class 形式定义的组件。
```js
function Dialog(props) {
    return (<FancyBorder color="blue">
        <h1 className="Dialog-title">{props.title}</h1>
        <p className="Dialog-message">{props.message}</p>
        {props.children}
    </FancyBorder>);
}
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = { login: '' };
    }
    render() {
        return (<Dialog title="Mars Exploration Program" message="How should we refer to you?">
            <input value={this.state.login} onChange={this.handleChange} />
            <button onClick={this.handleSignUp}> Sign Me Up! </button>
        </Dialog>);
    }
    handleChange(e) {
        this.setState({ login: e.target.value });
    }
    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}
```

**【那么继承呢？】**

在 Facebook，我们在成百上千个组件中使用 React。我们并没有发现需要使用继承来构建组件层次的情况。
Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。
如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。

### React 哲学

React 最棒的部分之一是引导我们思考如何构建一个应用。在这篇文档中，我们将会通过 React 构建一个可搜索的产品数据表格来更深刻地领会 React 哲学。



## React 中文官网 -- 高级指引

### 无障碍

### 代码切割

### Context

### 错误边界

### Refs 转发

### Fragments

### 高阶组件

### 与第三方库协同

### 深入 JSX

### 性能优化

### Portals

### Profiler

### 不使用 ES6

### 不使用 JSX

### 协调

### Refs & DOM

### Render Props

### 静态类型检查

### 严格模式

### 使用 PropTypes 类型检查

### 非受控组件

### Web Components

## HOOK

### Hook 简介

### Hook 概览

### 使用 State Hook

### 使用 Effect Hook

### Hook 规则

### 自定义 Hook

### Hook API 索引

### Hooks FAQ

## 测试

### 测试概览

### 测试技巧

### 测试环境

## CONCURRENT 模式

### 介绍 Concurrent 模式

### Suspense 用于数据获取

### Concurrent UI 模式

### 采用 Concurrent 模式

### Concurrent 模式 API 参考

## 自定义 React

### BlockReact


