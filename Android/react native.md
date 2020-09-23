### 认识

1. React Native使你只使用JavaScript也能编写原生移动应用。 它在设计原理上和React一致，通过声明式的组件机制来搭建丰富多彩的用户界面。
2. React Native产出的并不是“网页应用”， 或者说“HTML5应用”，又或者“混合应用”。 最终产品是一个真正的移动应用，从使用感受上和用Objective-C或Java编写的应用相比几乎是无法区分的。 React Native所使用的基础UI组件和原生应用完全一致。 你要做的就是把这些基础组件使用JavaScript和React的方式组合起来。
3. React Native让你可以快速迭代开发应用。 比起传统原生应用漫长的编译过程，可以在瞬间刷新应用。开启Hot Reloading的话，甚至能在保持应用运行状态的情况下热替换新代码！
4. React Native完美兼容使用Objective-C、Java或是Swift编写的组件。

例子

```js
import React, { Component } from 'react'
import { Text, View } from 'react-native';

class App extends Component {
    render() {
        return (<ScrollView>
            <Image
                source={{uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/'}}
                style={{width: 320, height:180}} />
            <Text>
                在iOS上，React Native的ScrollView组件封装的是原生的UIScrollView。
                在Android上，封装的则是原生的ScrollView。
                在iOS上，React Native的Image组件封装的是原生的UIImageView。
                在Android上，封装的则是原生的ImageView。
                React Native封装了这些基础的原生组件，使你在得到媲美原生应用性能的同时，还能受益于React优雅的架构设计。
            </Text>
            <View>
                <Text>如果你喜欢在Web上使用React，那你也肯定会喜欢React Native.</Text>
                <Text>基本上就是用原生组件比如'View'和'Text'来代替web组件'div'和'span'。</Text>
            </View>
        </ScrollView>)
    }
}

export default App
```
