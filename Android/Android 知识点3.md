* [Gradle](##Gradle)
* [Adb等工具](##Adb等工具)
* [Android权限系统](##Android权限系统)

## Gradle

0. links
    1. Groovy
        * 参考博客
            * [语法基础——Groovy语法基础](https://blog.csdn.net/qq_30379689/article/details/81200026) finished
            * [groovy了解](https://blog.csdn.net/u011861874/article/category/8297824)
            * [拥抱 Android Studio 之三：溯源，Groovy 与 Gradle 基础](http://blog.bugtags.com/2016/01/04/embrace-android-studio-groovy-gradle/) finished
        * 参考文档
            * [Groovy Documentation：Groovy 的详细介绍文档](http://www.groovy-lang.org/documentation.html)
            * [Groovy API Reference：Groovy 的 API 文档，必要的时候查阅](http://www.groovy-lang.org/api.html)
            * []()
    2. Gradle
        * 参考博客
            * [十分钟理解Gradle](https://www.cnblogs.com/Bonker/p/5619458.html) finished
            * [语法基础——Gradle语法基础](https://blog.csdn.net/qq_30379689/article/details/81432291) finished
            * [深入理解Android之Gradle](http://blog.csdn.net/Innost/article/details/48228651)
            * [Gradle构建最佳实践](http://www.figotan.org/2016/04/01/gradle-on-android-best-practise/)
            * [Gradle从入门到实战 - Groovy基础](https://blog.csdn.net/singwhatiwanna/article/details/76084580)
        * 参考文档
            * [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html)
            * [Gradle Build Language Reference：Gradle DSL 参考，重点的几个 DSL 过一下，其他的用到再查](https://docs.gradle.org/current/dsl/)
            * [Android Plugin DSL Reference：使用 Android 插件必备](http://google.github.io/android-gradle-dsl/current/index.html)
            * [邓凡平老师的 Gradle 介绍](http://blog.csdn.net/innost/article/details/48228651)
            * [Gradle User Guide 中文版](https://www.gitbook.com/book/dongchuan/gradle-user-guide-/details)
        * 开源参考
            * [gradle-bintray-plugin：bintray 提供的开源插件](https://github.com/bintray/gradle-bintray-plugin)
            * [gradle-node-plugin： 一个运行 NodeJS 脚本的插件](https://github.com/srs/gradle-node-plugin)
            * [linkedin-gradle-plugins： linkedin的 Gradle 插件集合](https://github.com/linkedin/gradle-plugins)
    3. Proguard
        * [语法基础——Proguard语法基础](https://blog.csdn.net/qq_30379689/article/details/81589428) finished
        * [Android混淆机制](https://juejin.im/post/58c39774da2f605609693761) finished
        * [Android混淆机制](http://www.voidcn.com/article/p-kiqaofhe-bsc.html) finished
    4. Gradle配置
        * [Android local.properties配置文件的使用](https://www.jianshu.com/p/f891fa3eadd8)
        * [Android Studio3.0中dependencies依赖由compile变为implementation的区别](https://blog.csdn.net/silenceoo/article/details/78735687) finished
        * [Android依赖导入全攻略](https://juejin.im/post/5acd6daaf265da238a30ca73) finished
        * [Gradle依赖排除](https://www.zhyea.com/2018/02/08/gradle-exclude-dependencies.html) finished
        * [Gradle依赖项学习总结，dependencies、transitive、force、exclude的使用与依赖冲突解决](http://www.paincker.com/gradle-dependencies)
        * [教你如何使用android studio发布release 版本（完整版）](https://blog.csdn.net/to_perfect/article/details/69048419)
        * [Gradle Kotlin DSL迁移指南](https://juejin.im/post/5c4190276fb9a049fe3570b6)
1. 简介
    1. **构建工具——Gradle**: Gradle是一个**构建工具**，它是用来**帮助我们构建app**的，**构建包括编译、打包等过程**。我们可以为Gradle指定构建规则，然后它就会根据我们的"命令"自动为我们构建app。Android Studio中默认就使用Gradle来完成应用的构建。有些同学可能会有疑问："我用AS不记得给Gradle指定过什么构建规则呀，最后不还是能搞出来个apk。" 实际上，app的构建过程是大同小异的，有一些过程是"通用"的，也就是每个app的构建都要经历一些公共步骤。因此，在我们在创建工程时，Android Studio自动帮我们生成了一些通用构建规则，很多时候我们甚至完全不用修改这些规则就能完成我们app的构建。
    2. **自定义——Groovy**: 有些时候，我们会有一些个性化的构建需求，比如我们引入了第三方库，或者我们想要在通用构建过程中做一些其他的事情，这时我们就要自己在系统默认构建规则上做一些修改。这时候我们就要自己向Gradle"下命令"了，这时候我们就**需要用Gradle能听懂的话了，也就是Groovy。Groovy是一种基于JVM的动态语言**。
    3. 我们在开头处提到"Gradle是一种构建工具"。实际上，当我们想要更灵活的构建过程时，Gradle就成为了一个编程框架——我们可以通过编程让构建过程按我们的意愿进行。也就是说，当我们把Gradle作为构建工具使用时，我们只需要掌握它的配置脚本的基本写法就OK了；而当我们需要对构建流程进行高度定制时，就务必要掌握Groovy等相关知识了。
2. 基本部分
    1. **Project与Task**: 在Gradle中，**每一个待构建的工程是一个Project，构建一个Project需要执行一系列Task，比如编译、打包**这些构建过程的子过程都对应着一个Task。具体来说，**一个apk文件的构建包含以下Task：Java源码编译、资源文件编译、Lint检查、打包以生成最终的apk文件等等**。
    2. **插件**: 插件的核心工作有两个，一是定义Task；二是执行Task。也就是说，我们想让Gradle能正常工作，完成整个构建流程中的一系列Task的执行，必须导入合适的插件，这些插件中定义了构建Project中的一系列Task，并且负责执行相应的Task。在新建工程的app模块的build.gradle文件的第一行，往往都是如下这句: ``apply plugin: 'com.android.application'``。这句话的意思就是应用"com.android.application"这个插件来构建app模块，app模块就是Gradle中的一个Project。也就是说，这个插件负责定义并执行Java源码编译、资源文件编译、打包等一系列Task。实际上"com.android.application"整个插件中定义了如下4个顶级任务
        1. **assemble**: 构建项目的输出(apk)
        2. **check**: 进行校验工作
        3. **build**: 执行assemble任务与check任务
        4. **clean**: 清除项目的输出
        5. 当我们执行一个任务时，会自动执行它所依赖的任务。比如，执行assemble任务会执行assembleDebug任务和assembleRelease任务，这是因为**一个Android项目至少要有debug和release这两个版本的输出**。
    3. **Gradle配置文件**: Android Studio中的一个Module即为Gradle中的一个Project。上图的app目录下，存在一个build.gradle文件，代表了app Module的构建脚本，它定义了应用于本模块的构建规则。我们可以看到，工程根目录下也存在一个build.gradle文件，它代表了整个工程的构建，其中定义了适用于这个工程中所有模块的构建规则。接下来我们介绍一下上图中其他几个Gradle配置文件
        1. **gradle.properties**: 从它的名字可以看出，这个文件中定义了一系列"属性"。实际上，这个文件中定义了一系列供build.gradle使用的常量，比如keystore的存储路径、keyalias等等。
        2. **gradlew与gradlew.bat**: gradlew为Linux下的shell脚本，gradlew.bat是Windows下的批处理文件。gradlew是gradle wrapper的缩写，也就是说它对gradle的命令进行了包装，比如我们进入到指定Module目录并执行"gradlew.bat assemble"即可完成对当前Module的构建(Windows系统下)。
        3. **local.properties**: 从名字就可以看出来，这个文件中定义了一些本地属性，比如SDK的路径。
        4. **settings.gradle**: 假如我们的项目包含了不只一个Module时，我们想要一次性构建所有Module以完成整个项目的构建，这时我们需要用到这个文件。比如我们的项目包含了ModuleA和ModuleB这两个模块，则这个文件中会包含这样的语句：include ':ModuleA', ':ModuleB'。
    4. **构建脚本**
        1. 首先我们来看一下工程目录下的build.gradle，它指定了真个整个项目的构建规则，它的内容如下
            ```groovy
            buildscript {
                repositories {
                    jcenter() // 构建脚本中所依赖的库都在jcenter仓库下载
                }
                dependencies {
                    // 指定了gradle插件的版本
                    classpath 'com.android.tools.build:gradle:1.5.0'
                }
            }
            allprojects {
                repositories {
                    // 当前项目所有模块所依赖的库都在jcenter仓库下载
                    jcenter()
                }
            }
            ```
        2. 我们再来简单介绍下app模块的build.gradle的内容
            ```groovy
            // 加载用于构建Android项目的插件
            apply plugin: 'com.android.application'
            android { // 构建Android项目使用的配置
                compileSdkVersion 23 // 指定编译项目时使用的SDK版本
                buildToolsVersion "23.0.1" // 指定构建工具的版本
                defaultConfig {
                    applicationId "com.absfree.debugframwork" //包名
                    minSdkVersion 15  // 指定支持的最小SDK版本
                    targetSdkVersion 23 // 针对的目标SDK版本
                    versionCode 1 
                    versionName "1.0"
                }
                buildTypes { // 针对不同的构建版本进行一些设置
                    release { // 对release版本进行的设置
                        minifyEnabled false // 是否开启混淆
                        proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'  // 指定混淆文件的位置
                    }
                }
            }
            dependencies { // 指定当前模块的依赖
                compile fileTree(dir: 'libs', include: ['*.jar'])
                testCompile 'junit:junit:4.12'
                compile 'com.android.support:appcompat-v7:23.1.1'
                compile 'com.android.support:design:23.1.1'
            }
            ```
3. 常见配置
    0. 整个工程的build.gradle通常不需我们改动，这里我们介绍下一些对模块目录下build.gradle文件的常见配置。
    1. **依赖第三方库**: 当我们的项目中用到了了一些第三方库时，我们就需要进行一些配置，以保证能正确导入相关依赖。设置方法很简单，比如我们在app模块中中用到了Fresco，只需要在build.gradle文件中的dependencies块添加如下语句``compile 'com.facebook.fresco:fresco:0.11.0'``。这样一来，Gradle会自动从jcenter仓库下载我们所需的第三方库并导入到项目中。
    2. **导入本地jar包**: 在使用第三方库时，除了像上面那样从jcenter仓库下载，我们还可以导入本地的jar包。配置方法也很简单，只需要先把jar文件添加到app\libs目录下，然后在相应jar文件上单击右键，选择"Ad As Library"。然后在build.gradle的dependencies块下添加如下语句 ``compile files('libs/xxx.jar')``。实际上我们可以看到，系统为我们创建的build.gradle中就已经包含了如下语句 ``compile fileTree(dir: 'libs', include: ['*.jar'])``。这句话的意思是，将libs目录下的所有jar包都导入。所以实际上我们只需要把jar包添加到libs目录下并"Ad As Library"即可。
    3. **依赖其它模块**: 假设我们的项目包含了多个模块，并且app模块依赖other模块，那么我们只需app\build.gradle的denpendencies块下添加如下语句 ``compile project(':other')``
    4. **构建输出为aar文件**: 通常我们构建的输出目标都是apk文件，但如果我们的当前项目时Android Library，我们的目标输出就是aar文件。要想达到这个目的也很容易，只需要把build.gradle的第一句改为如下 ``apply plugin:'com.android.library'``。这话表示我们使用的插件不再是构建Android应用的插件，而是构建Android Library的插件，这个插件定义并执行用于构建Android Library的一系列Task。
    5. **自动移除不再使用的资源**: 只需进行如下配置
        ```groovy
        android {
            ...
            }
            buildTypes {
                release {
                    ...
                    shrinkResources true
                    ...
                }
            }
        }
        ```
    6. **忽略Lint错误**: 在我们构建Android项目的过程中，有时候会由于Lint错误而终止。当这些错误来自第三方库中时，我们往往想要忽略这些错误从而继续构建进程。这时候，我们可以只需进行如下配置
        ```groovy
        android {
            ...
            lintOptions {
                abortOnError false
            }
        }
        ```
    7. **集成签名配置**: 在构建release版本的Android项目时，每次都手动导入签名文件，键入密码、keyalias等信息十分麻烦。通过将签名配置集成到构建脚本中，我们就不必每次构建发行版本时都手动设置了。
        1. 具体配置如下
            ```groovy
            signingConfigs {
                myConfig { // 将"xx"替换为自己的签名文件信息
                    storeFile file("xx.jks")
                    storePassword "xx"
                    keyAlias "xx"
                    keyPassword "xx"
                }
            }
            android {
                buildTypes {
                    release {
                        signingConfig  signingConfigs.myConfig // 在release块中加入这行
                        ...
                    }
                }
                ...
            }
            ```
        2. 真实开发中，我们不应该把密码等信息直接写到build.gradle中，更好的做法是放在gradle.properties中设置
            ```properties
            RELEASE_STOREFILE=xxx.jks
            RELEASE_STORE_PASSWORD = xxx
            RELEASE_KEY_ALIAS=xxx
            RELEASE_KEY_PASSWORD=xxx
            ```
        3. 然后在build.gradle中直接引用即可
            ```groovy
            signingConfigs {
                myConfig { 
                    storeFilefile(RELEASE_STOREFILE)
                    storePassword RELEASE_STORE_PASSWORD
                    keyAlias RELEASE_KEY_ALIAS
                    keyPassword RELEASE_KEY_PASSWORD 
                }
            }
            ```
4. Groovy语法基础
    1. 变量
        1. 变量类型: groovy变量没有基本数据类型，只有引用类型，尽管定义的基本类型也会被转换成引用类型
            ```groovy
            int x = 10
            println x.class //class java.lang.Integer
            double y = 10.10
            println y.class //class java.lang.Double
            ```
        2. 弱类型: groovy变量可以有强类型方式和弱类型方式，弱类型方式会自动转换成对应的引用类型
            ```groovy
            def z = 'name'
            println z.class //class java.lang.String
            def h = 1.34
            println h.class //class java.math.BigDecimal
            ```
    2. 字符串
        1. 无格式定义的字符串: 指的是输出的时候，字符串不会带有原本输入的格式 ``def name='Hensen'``
        2. 有格式定义的字符串: 输出的时候，会按照原本定义的格式进行输出
            ```groovy
            def name = '''\
            line one
            line two
            line three
            '''
            ```
        3. GString: groovy提供新的字符串类型GString，用双引号定义的字符串表示可拓展的字符串
            ```groovy
            def name = "Hensen"
            def say = "${name} say : Hello groovy"
            println say //Hensen say : Hello groovy
            println say.class //class org.codehaus.groovy.runtime.GStringImpl
            def sum = "${2 + 3}"
            println sum //5
            ```
        4. 字符串Api
            ```groovy
            def str = "groovy"
            println str.center(10,'1') //11groovy11
            println str.padLeft(10,'1') //1111groovy
            println str.padRight(10,'1') //groovy1111
            def str2 = "java"
            println str > str2 //false
            println str[0] //g
            println str[0..2] //grp
            def str3 = "a"
            println str2 - str3 //jva
            println str.reverse() //yvoorg
            println str.capitalize() //Groovy
            println str.isNumber() //false
            def str4 = "2"
            println str4.toLong() //2
            ```
    3. 逻辑控制
        1. switch-case
            ```groovy
            def x = 5.2
            def result
            switch (x){
                case 'you':
                    result = "you"
                    break
                case [3,4,5,"list"]:
                    result = "inList"
                    break
                case 12..30:
                    result = "12 to 30"
                    break
                case Integer:
                    result = "Integer Params"
                    break
                case BigDecimal:
                    result = "BigDecimal Params"
                    break
                default: result = "default result"
            }
            println result //BigDecimal Params
            ```
        2. for
            ```groovy
            //遍历范围
            def sum = 0
            for(i in 0..9){
                sum += i
            }
            println sum //45
            //遍历集合
            def sum2 = 0
            for (i in [0,1,2,3,4,5]){
                sum2 += i
            }
            println sum2 //15
            //遍历Map
            def sum3 = 0
            for(i in ["one":1,"two":2,"three":3]){
                sum3 += i.value
            }
            println sum3 //6
            ```
    4. 闭包
        1. 闭包
            ```groovy
            //无参闭包
            def method = {println "Hello groovy"}
            //有参闭包
            def method2 = {String name -> println "Hello ${name}"}
            //默认参数闭包
            def method3 = {println "Hello ${it}"}
            //带返回值闭包
            def method4 = {return "Hello ${it}"}
            //闭包的调用
            def name = "groovy"
            method.call()
            method2(name)
            ```
        2. 闭包函数
            ```groovy
            def result = fab(5)
            def result2 = fab2(5)
            def result3 = cal(5)
            println result //120
            println result2 //120
            println result3 //11
            int fab (int number){
                int result = 1
                1.upto(number,{ num -> result *= num }) //执行1-number的闭包
                return result 
            }
            int fab2 (int number){
                int result = 1
                number.downto(1,{ num -> result *= num }) //执行number-1的闭包
                return result
            }
            int cal (int number){
                int result = 1
                number.times { num -> result += num} //执行0-number的闭包
                return result
            }
            ```
        3. 字符串闭包函数
            ```groovy
            def intro = "my name is Hensen,my age is 18"
            //找到第一个符合条件的字符
            println intro.find {
                String s -> s.isNumber() //1
            }
            //找到所有符合条件的字符
            println intro.findAll {
                String s -> s.isNumber() //[1, 8]
            }
            //有一项字符符合即可
            println intro.any {
                String s -> s.isNumber() //true
            }
            //所有字符必须符合条件
            println intro.every {
                String s -> s.isNumber() //false
            }
            //将字符串转换成集合
            println intro.collect {
                it.toUpperCase() //[M, Y,  , N, A, M, E,  , I, S,  , H, E, N, S, E, N, ,, M, Y,  , A, G, E,  , I, S,  , 1, 8]
            }
            //遍历所有字符
            intro.each {
                print it.toUpperCase() //MY NAME IS HENSEN,MY AGE IS 18
            }
            ```
        4. 闭包关键字
            1. this: 代表当前闭包定义处的类
            2. owner: 代表当前闭包定义处的类或者对象
            3. delegate: 代表任意对象，默认与owner一致
        5. 正常闭包: 在这里的this、owner、delegate表示同一个对象，即outer
            ```groovy
            def outer = {
                println "outer this:" + this
                println "outer owner:" + owner
                println "outer delegate:" + delegate
            }
            outer.call()
            //输出结果
            //outer this:Chapter4o4@f48007e
            //outer owner:Chapter4o4@f48007e
            //outer delegate:Chapter4o4@f48007e
            ```
        6. 嵌套闭包: 在这里的this表示outer2、这里的owner、delegate表示inner
            ```groovy
            def outer2 = {
                println "outer2 this:" + this
                println "outer2 owner:" + owner
                println "outer2 delegate:" + delegate
                def inner = {
                    println "inner this:" + this
                    println "inner owner:" + owner
                    println "inner delegate:" + delegate
                }
                inner.call()
            }
            outer2.call()
            //输出结果
            //inner this:Chapter4o4@f48007e
            //inner owner:Chapter4o4$_run_closure2@11cfefda
            //inner delegate:Chapter4o4$_run_closure2@11cfefda
            ```
        7. 委托策略: delegate关键字跟委托策略有关，委托策略有四种
            1. DELEGATE_FIRST: 先从Delegate去找委托属性，再从Owner去找委托属性
            2. DELEGATE_ONLY: 只从Delegate去找委托属性
            3. OWNER_FIRST: 先从Owner去找委托属性，再先从Delegate去找委托属性
            4. OWNER_ONLY: 只从Owner去找委托属性
            5. 例子
            ```groovy
            class Student{
                String name
                def content = {"my name is ${name}"}
                String toString(){
                    content.call()
                }
            }
            class Teacher{
                String name
            }
            def stu = new Student(name: "HensenStudent")
            def tea = new Teacher(name: "HensenTeacher")
            stu.content.delegate = tea
            stu.content.resolveStrategy = Closure.DELEGATE_FIRST
            println stu.toString()
            //输出结果
            // my name is HensenTeacher
            ```
    5. 列表
        1. 定义
            ```groovy
            //定义列表
            def list = [1,2,3,4]
            //定义数组
            def array = [1,2,3,4] as int[] 
            int[] array = [1,2,3,4]
            ```
        2. 列表增操作
            ```groovy
            def list = [1,2,3,4]
            list.add(5)
            list << 6
            println list.toListString()
            def list2 = list + 7
            println list2.toListString()
            ```
        3. 列表删操作
            ```groovy
            def list = [1,2,3,4]
            list.remove(0)
            list.remove((Object)4)
            list.removeAt(0)
            list.removeElement(4)
            list.removeAll({return it % 2 == 0})
            println list.toListString()
            def list2 = list - [2,3]
            println list2.toListString()
            ```
        4. 列表排操作
            ```groovy
            def list = [1,5,-4,8,6,2]
            list.sort()
            list.sort{a,b -> a == b ? 0 : Math.abs(a) > Math.abs(b) ? 1 : -1}
            println list.toListString()
            def strings = ['abc','2','qwe','apple','java']
            strings.sort{it -> return it.size()}
            println strings.toListString()
            ```
        5. 列表查操作
            ```groovy
            def list = [1,5,-4,8,6,2]
            println list.find{ return it % 2 == 0 }
            println list.findAll{ return it % 2 == 0 }
            println list.any{ return it % 2 == 0 }
            println list.every{ return it % 2 == 0 }
            println list.min()
            println list.max()
            println list.count{ return it % 2 == 0 }
            ```
    6. 映射
        1. 定义
            ```groovy
            def colors = [red:'#ff0000',green:'#00ff00',blue:'#0000ff']
            colors.yellow = '#ffff00' //默认找不到字段则为新增字段
            colors.complex = [a:1,b:2]
            println colors.blue
            println colors.yellow
            def key = 'key'
            def map2 = [(key): 'value']
            ```
        2. 遍历
            ```groovy
            def map = [
                1:[name : 'Hensen',age : '20'],
                2:[name : 'Jack',age : '22']
            ]
            map.each { def person ->
                println "the person name : ${person.key}" + "the person age : ${person.value}"
            }
            map.eachWithIndex{ def person, int index ->
                println "the index : ${index}" + "the person name : ${person.key}" + "the person age : ${person.value}"
            }
            map.eachWithIndex{ key , value, int index ->
                println "the index : ${index}" + "the person name : ${key}" + "the person age : ${value}"
            }
            ```
        3. 查询
            ```groovy
            println map.find { def person -> return person.value.age >= 20}
            println map.findAll { def person -> return person.value.age >= 20}
            println map.count { def person -> return person.value.age >= 20}
            println map.findAll { def person -> return person.value.age >= 20}.collect { return it.value.name}
            println map.groupBy { def person -> return person.value.age >= 22 ? "大于22岁" : "小于22岁"}
            println map.sort { def person1, def person2 ->
                Number age1 = person1.value.age
                Number age2 = person2.value.age
                return age1 == age2 ? 0 : age1 > age2 ? 1 : -1
            }
            ```
    7. 范围
        1. 定义
            ```groovy
            def range = 1..10
            println range[0]
            println range.contains(2)
            println range.from
            println range.to
            ```
        2. 循环
            ```groovy
            range.each{
                println it
            }
            for (i in range){
                println i
            }
            ```
        3. 匹配
            ```groovy
            def getGrade(Number number){
                def result
                switch (number){
                    case 0..<60:
                        result = "不及格"
                        break
                    case 60..<90:
                        result = "优秀"
                        break
                    case 90..100:
                        result = "接近满分"
                        break
                }
                return result
            }
            ```
    8. 元编程
        1. 捕获未声明的方法: 如果在调用对象的方法时，该方法未被声明的情况下
            1. 会被优先级高的methodMissing()捕获
            2. 其次会被优先级低的invokeMethod()捕获
            3. 如果这两个方法都未声明，则程序会报错
            4. 示例
                ```groovy
                class Person {
                    String name
                    Integer age
                    @Override
                    Object invokeMethod(String s, Object arg) {
                        return "[invokeMethod] the method is " + s + ", and the params is " + arg
                    }
                    def methodMissing(String s, Object arg){
                        return "[methodMissing] the method is " + s + ", and the params is " + arg
                    }
                }
                Person p = new Person(name: "Hensen",age: 22)
                println p.say("Hello") //[methodMissing] the method is say, and the params is [Hello]
                ```
        2. 动态添加属性和方法
            ```groovy
            class Person{
                String name
                Integer age
            }
            //动态添加一个属性
            Person.metaClass.sex = "male"
            //动态添加方法
            Person.metaClass.getUpperName = { -> name.toUpperCase() }
            //动态添加静态方法
            Person.metaClass.static.createPerson = { String name ,Integer age-> new Person(name: name,age: age) }
            Person p = new Person(name: "Hensen",age: 22)
            println p.sex
            println p.getUpperName()
            println Person.createPerson("Jack",20).name
            ```
        3. 为第三方类添加属性和方法
            ```groovy
            ExpandoMetaClass.enableGlobally()
            String.metaClass.static.sayHello = { String str -> return "Hello" + str}
            println String.sayHello("Hensen")
            ```
    9. Json操作
        1. 对象转换成Json字符串
            ```groovy
            import groovy.json.JsonOutput
            def list = [new Person(name: 'Hensen',age: 20),new Person(name: 'Jack',age: 22)]
            def json = JsonOutput.toJson(list)
            println json //[{"age":20,"name":"Hensen"},{"age":22,"name":"Jack"}]
            ```
        2. Json字符串转换成对象
            ```groovy
            import groovy.json.JsonSlurper
            def jsonSlurper = new JsonSlurper()
            def object = jsonSlurper.parseText(json)
            println object[0].name //Hensen
            ```
        3. 构建Json字符串
            ```groovy
            import groovy.json.JsonBuilder
            def builder2 = new JsonBuilder()
            builder2.book {
                isbn '0321774094'
                title 'Scala for the Impatient'
                author (['Cay S. Horstmann', 'Hellen'])
                publisher 'Addison-Wesley Professional'
                content99 {
                    contentType '1'
                    text 'Hello'
                }
            }
            println(builder2.toPrettyString())
            println(builder2.content)
            ```
    10. xml操作 https://www.ibm.com/developerworks/cn/java/j-pg05199/index.html
        1. 解析xml
            ```groovy
            String xml =
            '''<person>
            <name id="2">Hensen</name><age>23</age>
            <name id="3">Jack</name><age>20</age>
            </person>'''
            def xmlSlurper = new XmlSlurper()
            def person = xmlSlurper.parseText(xml)
            //获取值
            println person.name[0].text()
            //获取属性
            println person.name[0].@id
            //遍历获取
            person.each { p ->
                println p.name.text()
            }
            ```
        2. 遍历xml
            ```groovy
            //深度遍历
            def names = person.depthFirst().findAll{ name ->
                return name.@id == "2" ? true : false
            }
            println names
            //广度遍历
            def namess = person.children().findAll { node ->
                return node.@id == "2" ? true : false
            }.collect{ node ->
                return node.@id
            }
            println namess
            ```
        3. 生成xml
            ```groovy
            import groovy.xml.MarkupBuilder
            class Computer{
                def name = 'Hensen'
                def count = 2
                def languages = [
                    new Language(version: '1.8',value: 'Java'),
                    new Language(version: '3.0',value: 'Python')
                ]
            }
            class Language{
                def version
                def value
            }
            def sw = new StringWriter()
            def xmlBuilder = new MarkupBuilder(sw)
            def computer = new Computer()
            xmlBuilder.computer(name: computer.name, count: computer.count){
                //遍历所有子节点
                computer.languages.each{ lang ->
                    language(version: lang.version, lang.value)
                }
            }
            println sw
            ```
    11. 文件操作
        1. 读取文件
            ```groovy
            //读取文件的所有行
            def file = new File("../Groovy.iml")
            file.eachLine { line ->
                println line
            }
            //读取文件的所有行
            def text = file.getText()
            println text
            //读取文件的前100个字节
            def reader = file.withReader { reader ->
                char [] buffer = new char[100]
                reader.read(buffer)
                return buffer
            }
            println reader
            ```
        2. 拷贝文件
            ```groovy
            def copy(String srcPath,String destPath){
                try {
                    def destFile = new File(destPath)
                    if(!destFile.exists()){
                        destFile.createNewFile()
                    }
                    new File(srcPath).withReader { reader ->
                        def lines = reader.readLines()
                        destFile.withWriter { writer ->
                            lines.each { line ->
                                writer.append(line + '\r\n')
                            }
                        }
                    }
                    return true
                }catch (Exception e){
                    e.printStackTrace()
                }
                return false
            }
            ```
        3. 对象读写
            ```groovy
            def saveObject(Object obj,String path){
                try {
                    def destFile = new File(path)
                    if(!destFile.exists()){
                        destFile.createNewFile()
                    }
                    destFile.withObjectOutputStream { out ->
                        out.writeObject(obj)
                    }
                    return true
                }catch (Exception e){
                    e.printStackTrace()
                }
                return false
            }
            def readObject(String path){
                try {
                    def destFile = new File(path)
                    if(destFile ==null || !destFile.exists())return null
                    destFile.withObjectInputStream { input ->
                        def obj = input.readObject()
                        return obj
                    }
                }catch (Exception e){
                    e.printStackTrace()
                }
                return null
            }
            ```
    12. 正则表达式
    13. 数据库
    14. import
        1. 默认import
            ```groovy
            import java.lang.*
            import java.util.*
            import java.io.*
            import java.net.*
            import groovy.lang.*
            import groovy.util.*
            import java.math.BigInteger
            import java.math.BigDecimal
            ```
        2. 别名
            ```groovy
            import java.lang.String as KString
            println(new KString('aaa'))
            ```
    15. others
        1. 方法的默认参数
            ```groovy
            def foo(String p1, int p2 = 1) {
                println(p1)
                println(p2)
            }
            foo("hello")
            ```
        2. Field 与 Property: Field 是以各种修饰符修饰的变量。Property是私有变量和自带的 gettters/setters，下面的类具有私有变量 name、age，并自带这两个变量的 getter 和 setter。当变量声明为 final 的时候，默认就没有 setter。
            ```groovy
            class Person {
                String name
                int age
            }
            ```
        3. Trait: Groovy 提供了一个叫做 Trait 特性实现了多继承，还有很多强大的功能。
            ```groovy
            trait Fly {
                void fly() {
                    println("fly")
                }
            }
            trait Walk {
                void walk() {
                    println("walk")
                }
            }
            class Duck implements Fly, Walk {}
            Duck duck = new Duck()
            duck.fly()
            duck.walk()
            ```
5. Gradle语法基础
    1. 生命周期: Gradle的构建依次会执行下面的三个生命周期
        1. 初始化阶段(Initialization)：解析整个工程中的所有Project，构建出所有的project对象
        2. 配置阶段(Configuration)：解析所有的projects对象中的task，构建好所有task的拓扑图
        3. 执行阶段(Execution)：执行具体的task及其依赖task
    2. 生命周期监听
        1. 在项目的build.gradle中，监听配置阶段和执行阶段的生命周期
            ```groovy
            this.gradle.beforeProject {
                println "配置阶段开始之前(一)"
            }
            this.beforeEvaluate {
                println "配置阶段开始之前(二)"
            }
            this.gradle.afterProject {
                println "配置阶段执行完毕(一)"
            }
            this.afterEvaluate {
                println "配置阶段执行完毕(二)"
            }
            this.gradle.buildFinished {
                println "执行阶段执行完毕"
            }
            ```
        2. 在项目的settings.gradle中，监听初始化阶段的生命周期，直接增加输出即可
            ```groovy
            include ':app'
            println "初始化阶段开始"
            ```
        3. 执行clean命令后，可以在控制台看到生命周期的执行顺序
            ```groovy
            Executing tasks: [clean]
            初始化阶段开始
            Configuration on demand is an incubating feature.
            配置阶段执行完毕(一)
            配置阶段执行完毕(二)
            配置阶段开始之前(一)
            配置阶段执行完毕(一)
            :clean
            :app:clean
            BUILD SUCCESSFUL in 1s
            2 actionable tasks: 2 executed
            执行阶段执行完毕
            ```
    3. Project对象
        1. 项目中的工程或Module都可以看成Project对象，根工程称为Root Project，Module称为子Project
            1. 如果在工程中或Module中存在build.gradle文件，那么它就是Project对象
            2. 如果在工程中或Module中不存在build.gradle文件，那么它就是个文件夹
        2. 对于子Project来说，一个子Project对应一个输出，输出类型是根据build.gradle文件来确定的
            1. 如果build.gradle定义application类型，则输出为apk
            2. 如果build.gradle定义library类型，则输出为aar
    4. Project相关Api
        1. 获取所有的Project
            ```groovy
            def getProjects(){
                this.getAllprojects().eachWithIndex { Project project ,int index ->
                    if(index == 0){
                        println "Root Project :${project.name}"
                    }else{
                        println "+--- Project :${project.name}"
                    }
                }
            }
            ```
        2. 获取所有的子Project
            ```groovy
            def getProjects(){
                this.getSubprojects().eachWithIndex { Project project ,int index ->
                    println "+--- Project :${project.name}"
                }
            }
            ```
        3. 获取父Project
            ```groovy
            this.getParent()
            ```
        4. 获取根Project
            ```groovy
            this.getRootProject()
            ```
        5. 获取指定名字的Project
            ```groovy
            project('app') {
                apply plugin: 'com.android.application'
                group 'com.hensen'
                version '1.0.0'
                dependencies {}
                android {}
            }
            ```
        6. 统一配置所有的Project
            ```groovy
            allprojects {
                group 'com.hensen'
                version '1.0.0'
            }
            ```
        7. 统一配置所有的子Project
            ```groovy
            subprojects { Project project ->
                if(project.plugins.hasPlugin('com.android.library')){
                    apply from: '../publishToMaven.gradle'
                }
            }
            ```
    5. Project属性Api
        1. 在根工程或gradle文件中定义全局扩展属性
            ```groovy
            //在根工程或gradle文件中定义扩展属性
            ext {
                android = [compileSdkVersion : 25,
                        buildToolsVersion : '25.0.0',
                        versionCode : 1,
                        versionName : '1.0.0']
            }
            //如果在gradle文件中定义扩展属性，需要在子工程引入该gradle文件，然后在子工程使用扩展属性
            apply from: '../common.gradle'
            android {
                compileSdkVersion rootProject.ext.android.compileSdkVersion
                buildToolsVersion rootProject.ext.android.buildToolsVersion
                defaultConfig {
                    versionCode rootProject.ext.android.versionCode
                    versionName rootProject.ext.android.versionName
                    ......
                }
            }
            ```
        2. 在gradle.properties中定义全局扩展属性: 在gradle.properties定义全局扩展属性，应该注意命名不能和系统定义的属性重名，否则会报出找不到扩展属性
            ```groovy
            //在gradle.properties文件中定义全局扩展属性
            isIncludeTestModule = false
            mCompileSdkVersion = 25
            //在settings.gradle中使用扩展属性
            if(hasProperty('isIncludeTestModule') ? isIncludeTestModule.toBoolean() : false){
                include ':Test'
            }
            //在build.gradle中使用扩展属性
            android {
                compileSdkVersion mCompileSdkVersion.toInteger()
                ......
            }
            ```
    6. 文件Api
        1. 获取工程相关的文件
            ```groovy
            println getRootDir().absolutePath
            println getBuildDir().absolutePath
            println getProjectDir().absolutePath
            ```
        2. 获取文件内容
            ```groovy
            getContent('build.gradle')
            def getContent(String path){
                try{
                    def file = file(path)
                    return file.text
                }catch(GradleException e){
                    println 'file not found'
                }
                return null
            }
            ```
        3. 文件拷贝
            ```groovy
            copy {
                from file('build/outputs/apk/app-debug.apk')
                into getRootProject().getBuildDir()
            }
            ```
        4. 文件夹拷贝
            ```groovy
            copy {
                from file('build/outputs/apk/')
                into getRootProject().getBuildDir().path + '/apk/'
                exclude {} //可以对不需要拷贝的文件进行移除
                rename {} //可以对文件进行重命名
            }
            ```
        5. 文件树遍历
            ```groovy
            fileTree('build/outputs/apk/') { FileTree fileTree ->
                fileTree.visit { FileTreeElement element ->
                    println element.file
                    println element.file.name
                }
            }
            ```
    7. 依赖第三方Api
        1. 根工程的第三方依赖
            ```groovy
            buildscript {
                //配置工程的仓库地址
                repositories {
                    google()
                    jcenter()
                    mavenCentral()
                    mavenLocal()
                    maven { 
                        name 'netWork' 
                        url 'http://localhost:8080/nexus/repositories'
                        credentials{
                            username = 'Hensen'
                            password = '123456'
                        }
                    }
                }
                //配置工程的插件依赖地址
                dependencies {
                    classpath 'com.android.tools.build:gradle:3.0.1'
                }
            }
            ```
        2. 子工程的第三方依赖
            ```groovy
            dependencies {
                compile fileTree(dir: 'libs', include: ['*.jar'])
                compile ('com.android.support:appcompat-v7:26.1.0') {
                    exclude module: 'support-v4'
                    exclude group: 'com.android.support'
                    exclude group: 'com.android.support', module: 'support-v4'
                    transitive false //禁止传递依赖
                }
                provided 'com.android.support:support-v4:26.1.0'
            }
            ```
        3. 概念梳理
            1. 传递依赖:A依赖B，B依赖C，如果允许传递依赖，那么A可以使用C的内容，否则为禁止传递依赖
            2. compile:参与编译时期和参与打包过程
            3. provided:参与编译时期，但不参与打包过程
            4. provided应用场景：
                1. 当前依赖的库只适用于编译时期生成代码的工具库
                2. 当前依赖的库已经存在于根工程的依赖，在子工程中只参与编译
    8. 外部命令Api
        1. 调用系统指令
            ```groovy
            task(name: 'apkcopy') {
                doLast {
                    def srcPath = this.buildDir.path + '/outputs/apk'
                    def destPath = './target/apk'
                    def command = "mv -f ${srcPath} ${destPath}"
                    exec {
                        try {
                            executable 'bash'
                            args '-c', command
                            println 'this command exec success'
                        }catch(GradleException e){
                            println 'this command exec error'
                        }
                    }
                }
            }
            ```
        2. 调用脚本
            ```groovy
            task stopTomcat(type:Exec) {
                //dir
                workingDir '../tomcat/bin'
                //windows
                commandLine 'cmd', '/c', 'stop.bat'
                //linux
                commandLine './stop.sh'
            }
            ```
    9. task对象
        1. 定义: 由于task运行于配置阶段中，因此在gradle文件中，只要执行其中一个task，则其他task都会执行一遍
            ```groovy
            //第一种定义方式
            task helloword(group: 'hensen', description :'hello'){
                println "Hello Word"
            }
            //第二种定义方式
            this.tasks.create(name: 'helloword'){
                setGroup('hensen')
                setDescription('hello')
                println "Hello Word"
            }
            ```
        2. 时序
            ```groovy
            //第一种定义方式
            task helloword(group: 'hensen', description :'hello'){
                println "Hello Word"
                doFirst {
                    println "doFirst"
                }
                doLast {
                    println "doLast"
                }
            }
            //第二种定义方式
            helloword.doFirst {
                println "doFirst"
            }
            //第三种定义方式
            helloword << {
                println "doLast"
            }
            // 三种定义方式中，第二种定义方式会比第一种定义方式先执行
            // doFirst:task配置阶段时运行
            // doLast:task执行阶段时运行
            // <<:doLast的简写，等同于doLast
            ```
        3. 计算build执行时长: gradle build执行的时长即task执行阶段的时长
            ```groovy
            def startTime,endTime
            this.afterEvaluate { Project project ->
                def prebuild = project.tasks.getByName('preBuild')
                prebuild.doFirst {
                    startTime = System.currentTimeMillis()
                }
                def build = project.tasks.getByName('build')
                build.doLast {
                    endTime = System.currentTimeMillis()
                    println "the build time is : ${endTime - startTime}"
                }
            }
            ```
        4. 依赖关系: task与task之间的依赖
            ```groovy
            task taskA {
                doLast {
                    println "taskA run"
                }
            }
            task taskB {
                doLast {
                    println "taskB run"
                }
            }
            task taskC(dependsOn: [taskA, taskB]) {
                doLast {
                    println "taskC run"
                }
            }
            //执行taskC后的输出结果
            taskA run
            taskB run
            taskC run
            ```
        5. 依赖关系: task与lib间的依赖
            ```groovy
            task taskC {
                dependsOn this.tasks.findAll { task ->
                    return task.name.startsWith('lib')
                }
                doLast {
                    println "taskC run"
                }
            }
            task lib1 << {println 'lib1'}
            task lib2 << {println 'lib2'}
            task lib3 << {println 'lib3'}
            // 执行taskC后的输出结果
            // lib1
            // lib2
            // lib3
            // taskC run
            ```
        6. 输入输出: 通过指定输入的属性和输出的文件，在构建完成后自动将信息解析成xml存放在releases.xml文件中，作为版本说明的文本
            ```groovy
            ext {
                versionName = rootProject.ext.android.versionName
                versionCode = rootProject.ext.android.versionCode
                versionInfo = 'App 2.0.0版本 上线啦'
                destFile = file('releases.xml')
                if (destFile != null && !destFile.exists()) {
                    destFile.createNewFile()
                }
            }
            task writeTask {
                inputs.property('versionCode', this.versionCode)
                inputs.property('versionName', this.versionName)
                inputs.property('versionInfo', this.versionInfo)
                outputs.file this.destFile
                doLast {
                    //将输入的内容写入到输出文件中去
                    def data = inputs.getProperties()
                    File file = outputs.getFiles().getSingleFile()
                    def versionMsg = new VersionMsg(data)
                    //将实体对象写入到xml文件中
                    def sw = new StringWriter()
                    def xmlBuilder = new MarkupBuilder(sw)
                    if (file.text != null && file.text.size() <= 0) {
                        //没有内容
                        xmlBuilder.releases {
                            release {
                                versionCode(versionMsg.versionCode)
                                versionName(versionMsg.versionName)
                                versionInfo(versionMsg.versionInfo)
                            }
                        }
                        //直接写入
                        file.withWriter { writer -> 
                            writer.append(sw.toString())
                        }
                    } else {
                        //已有其它版本内容
                        xmlBuilder.release {
                            versionCode(versionMsg.versionCode)
                            versionName(versionMsg.versionName)
                            versionInfo(versionMsg.versionInfo)
                        }
                        //插入到最后一行前面
                        def lines = file.readLines()
                        def lengths = lines.size() - 1
                        file.withWriter { writer ->
                            lines.eachWithIndex { line, index ->
                                if (index != lengths) {
                                    writer.append(line + '\r\n')
                                } else if (index == lengths) {
                                    writer.append('\r\r\n' + sw.toString() + '\r\n')
                                    writer.append(lines.get(lengths))
                                }
                            }
                        }
                    }
                }
            }

            task readTask {
                //指定输入文件为上一个task的输出
                inputs.file this.destFile
                doLast {
                    //读取输入文件的内容并显示
                    def file = inputs.files.singleFile
                    println file.text
                }
            }

            class VersionMsg {
                String versionCode
                String versionName
                String versionInfo
            }

            this.project.afterEvaluate { project ->
                def buildTask = project.tasks.getByName('build')
                buildTask.doLast {
                    writeTask.execute()
                }
            }
            ```
        7. 执行顺序: 无论三个task的执行顺序是怎么样，它们都会按照指定的顺序taskA taskB taskC执行
            ```groovy
            task taskA {
                doLast {
                    println "taskA run"
                }
            }
            task taskB {
                mustRunAfter taskA
                doLast {
                    println "taskB run"
                }
            }
            task taskC() {
                mustRunAfter taskB
                doLast {
                    println "taskC run"
                }
            }
            ```
    10. Setting对象: Setting对象对应项目中的工程的**settings.gradle**文件，它是gradle的初始化阶段时运行的文件
    11. SourceSets对象: sourceSets可以指定当前的工程**使用哪套资源配置**来进行不同模版的切换，比如经常用到的是闪屏界面的特效切换等
        ```groovy
        sourceSets {
            main {
                java.srcDir = ['src']
                java.excludes = ['androidTest/**','test/**']
                mainfest.srcFile 'AndroidManifest.xml'
                jniLibs.srcDirs = ['libs']
                if (app_type == "1") {
                    res.srcDirs = ['res','res_a']
                    assets.srcDirs = ['assets','assets_a']
                } else if (app_type == "2"){
                    res.srcDirs = ['res','res_b']
                    assets.srcDirs = ['assets','assets_b']
                }
            }
        }
        ```
    12. Variants相关Api: Variants指的是**多渠道打包**出来的apk的一种统称
        ```groovy
        this.afterEvaluate {
            this.android.applicationVariants.all { variant ->
                // 获取Variants相关属性
                def name = variant.name
                def baseName = variant.baseName
                def buildType = variant.buildType
                def signingConfig = variant. signingConfig
                def versionName = variant.versionName
                def verionCode = variant.versionCode
                println "name: ${name} , baseName: ${baseName}"
                // 修改variant的apk名字
                def output = variant.outputs.first()
                def apkName = "app-${variant.baseName}-${variant.versionName}.apk"
                output.outputFile = new File(output.outputFile.parent,apkName)
                // 修改variant的task
                def checkTask = variant.checkManifest
                checkTask.doFirst {
                    ......   
                }
            }
        }
        // 输出结果
        // name: appDebug , baseName: app-debug
        // name: baiduDebug , baseName: baidu-debug
        ```
    13. 自定义Plugin
        1. 介绍: 自定义Plugin是在原有的工程项目中增加一个新的Module作为Plugin，自定义Plugin的目录结构和正常的Project目录结构有很大区别，而且自定义Plugin的目录结构需要按照规定的命名规则和存放位置才能生效，自定义Plugin分为三步骤
            1. 自定义Plugin
            2. 自定义Extension
            3. 自定义Task
            4. 下图是自定义Plugin的目录结构，其中有两个主要的目录
                1. groovy：编写groovy脚本的目录，创建的文件都必须以groovy为后缀名
                2. resources：必须创建META-INF/gradle-plugins的目录和properties文件，其命名会用在project中的apply plugin语句中
            5. Plugin目录结构图
                ![Plugin目录结构](https://img-blog.csdn.net/20180805161655418?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwMzc5Njg5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
        2. 自定义Plugin
            1. 创建MineSdkPlugin.groovy，实现Plugin<Project\>
                ```groovy
                package com.hensen.plugin
                import org.gradle.api.Plugin
                import org.gradle.api.Project
                class MineSdkPlugin implements Plugin<Project> {
                    @Override
                    void apply(Project project) {
                        println "Hello Gradle Plugin"
                    }
                }
                ```
            2. 编写build.gradle，创建uploadArchives上传Plugin到本地仓库
                ```groovy
                apply plugin: 'groovy'
                apply plugin: 'maven'
                group "com.hensen.plugin"
                version "1.0.0"
                dependencies {
                    implementation fileTree(dir: 'libs', include: ['*.jar'])
                    implementation gradleApi()
                    implementation localGroovy()
                    implementation 'com.android.tools.build:gradle:3.0.1'
                }
                sourceSets {
                    main {
                        groovy {
                            srcDir 'src/main/groovy'
                        }
                        resources {
                            srcDir 'src/main/resources'
                        }
                    }
                }
                uploadArchives {
                    repositories {
                        mavenDeployer {
                            repository(url: uri('../repo')) //定义本地maven仓库的地址
                        }
                    }
                }
                sourceCompatibility = "1.7"
                targetCompatibility = "1.7"
                ```
            3. 编写com.hensen.plugin.properties，指定Plugin的路径
                ```properties
                implementation-class=com.hensen.plugin.MineSdkPlugin
                ```
        3. 自定Extension
            1. 创建MineExtension，提供Plugin的参数配置项
                ```groovy
                public class MineExtension {
                    def appId
                    String appVersion
                    boolean autoBackUp
                    MineExtension() {
                        appId = ""
                        appVersion = ""
                        autoBackUp = false
                    }
                }
                ```
            2. 在MineSdkPlugin中，创建Extension
                ```groovy
                class MineSdkPlugin implements Plugin<Project> {
                    @Override
                    void apply(Project project) {
                        println "Hello Gradle Plugin"
                        project.extensions.create("MineSdkExtension", MineExtension)
                    }
                }
                ```
            3. 执行gradle project右边栏的upload/uploadArchives，在本地仓库更新自定义Plugin信息
        4. 自定义Task
            1. 创建MineTask，继承DefaultTask
                ```groovy
                import org.gradle.api.DefaultTask
                import org.gradle.api.tasks.TaskAction
                class MineTask extends DefaultTask {
                    public MineTask(){
                        group = "mine"
                        description = "MineSdkTask"
                    }
                    /**
                     * 执行在gradle的执行阶段
                     */
                    @TaskAction
                    void doAction() {
                        printInfo()
                    }
                    private void printInfo() {
                        println project.extensions.MineSdkExtension.appId
                        println project.extensions.MineSdkExtension.appVersion
                        println project.extensions.MineSdkExtension.autoBackUp
                    }
                }
                ```
            2. 在MineSdkPlugin中，创建Task
                ```groovy
                class MineSdkPlugin implements Plugin<Project> {
                    @Override
                    void apply(Project project) {
                        println "Hello Gradle Plugin"
                        project.extensions.create("MineSdkExtension", MineExtension)
                        project.tasks.create("MineSdkTask", MineTask)
                    }
                }
                ```
            3. 执行gradle project右边栏的upload/uploadArchives，在本地仓库更新自定义Plugin信息
        5. 使用自定义Plugin
            1. 在根build.gradle引入maven地址和classpath
                ```groovy
                buildscript {
                    repositories {
                        maven { url uri('./repo') }
                        jcenter()
                    }
                    dependencies {
                        classpath 'com.android.tools.build:gradle:3.0.1'
                        //取名规则 group:module:version
                        classpath 'com.hensen.plugin:mine-sdk-plugin:1.0.0'
                    }
                }
                allprojects {
                    repositories {
                        maven { url uri('./repo') }
                        jcenter()
                    }
                }
                ```
            2. 在project的build.gradle中引入自定义Plugin，然后使用MineSdkExtension
                ```groovy
                apply plugin: 'com.android.application'
                apply plugin: 'com.hensen.plugin' //引入自定义Plugin
                android {
                    ......
                }
                dependencies {
                    implementation fileTree(dir: 'libs', include: ['*.jar'])
                }
                // 使用自定义Extension
                MineSdkExtension {
                    appId "10010"
                    appVersion "1.0.1"
                    autoBackUp true
                }
                ```
            3. 执行gradle project右边栏的mine/MineSdkTask，在gradle console就能看到输出结果
                ```groovy
                // 输出
                Executing tasks: [MineSdkTask]

                Configuration on demand is an incubating feature.
                Hello Gradle Plugin
                :app:MineSdkTask
                10010
                1.0.1
                true

                BUILD SUCCESSFUL in 1s
                1 actionable task: 1 executed
                ```
    14. others
        1. Plugin: Gradle的核心代码，只提供了一个框架，具体的功能(如构建Android工程)是通过插件机制来实现的。Gradle 提供了大量官方的插件，如Maven、Groovy、Java、Publishing、Signing等，也有大量第三方的插件(Android)，甚至每个人都可以自己实现一个插件(如笔者开发的Bugtags插件，这个将在最后一篇讲述)。
            1. 这些plugin定义了一系列的task、DSL和约定，在build.gradle文件使用这些plugin：
                ```groovy
                apply plugin: java
                ```
            2. 当你写了一个独立的 file_uri.gradle 文件，你可以通过来引入你的 gradle 文件，这个文件甚至可以在某个服务器上。
                ```groovy
                apply from: 'file_uri.gradle'
                ```
        2. 
6. Proguard语法基础
    1. 启用混淆
        1. minifyEnabled: 混淆开关
        2. proguard-android.txt: SDK中默认proguard的配置规则
        3. proguard-rules.pro: 自定义proguard的配置规则
        4. 例子
            ```groovy
            buildTypes {
                debug {
                    minifyEnabled true
                    proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
                }
            }
            ```
    2. 工作流程
        1. 图
            ![Proguard工作流程图](https://img-blog.csdn.net/2018081118154346?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMwMzc5Njg5/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
        2. 简介
            1. Proguard的工作流程由Shrink(压缩)、Optimize(优化)、Obfuscate(混淆)、Preverify(预验证)四个步骤组成，每个步骤都是可选的，我们可以通过配置脚本决定执行其中的哪几个步骤。
            2. 这里引入一个EntryPoint概念，EntryPoint是在ProGuard过程中保存不会被处理的类或方法。
            3. 在压缩过程中，Proguard从EntryPoint出发，递归检索，删除那些没有使用到的类和类的成员。
            4. 在优化过程中，那些非EntryPoint的类和方法会被设置成private，static或final，没有使用到的参数会被移除，有些方法可能会被标记为内联的。
            5. 在混淆过程中，会对非EntryPoint的类和类的成员进行重命名，也就是用其它无意义的名称代替。
            6. 我们在配置文件中用-keep保留的部分属于EntryPoint，所以不会被重命名。
        3. **压缩**: 压缩会移除未被使用的类和成员，并且会在优化动作执行之后再次执行
            ```py
            # 关闭压缩，默认打开
            -dontshrink
            ```
        4. **优化**: 优化会在字节码级别上做优化，让应用运行的更快
            ```py
            # 关闭优化，默认打开
            -dontoptimize
            # 表示对代码优化的次数，一般为5
            -optimizationpasses n
            # 指定更精细级别的优化
            -optimizations !code/simplification/arithmetic,!field/*,!class/merging/*
            ```
        5. **混淆**: 混淆会将简短的无意义的名称，对类，字段和方法进行重命名
            ```py
            # 关闭混淆，默认打开
            -dontobfuscate
            ```
        6. **预编译**: 预验证将对Java class进行预验证，Android中没有预验证过程
            ```py
            # 关闭预验证，默认关闭
            -dontpreverify
            ```
    3. 混淆基础
        1. **类名**: 对类名进行keep操作只是将类名keep住，但方法和变量仍然会被混淆
            ```py
            # 一颗星表示keep当前本包下的类名，子包下的类名是会被混淆的
            -keep class com.example.hensen.*
            # 两颗星表示keep当前本包下的类名和子包下的类名
            -keep class com.example.hensen.**
            # 表示keep当前类名
            -keep class com.example.hensen.net.NetWorkCache
            # 表示keep当前类的内部类的类名
            -keep class com.example.hensen.net.NetWorkCache$NetWorkBean
            ```
        2. **内容**: 对内容进行keep操作不仅可以将类名keep住，还可以对方法和变量keep住
            ```py
            # 一颗星表示keep当前本包下的类名、类的内容
            -keep class com.example.hensen.*{*;}
            # 两颗星表示keep当前本包下的类名、类的内容和子包下的类名、类的内容
            -keep class com.example.hensen.**{*;}
            # 表示keep当前类名、类的内容
            -keep class com.example.hensen.net.NetWorkCache{*;}
            # 表示keep当前类的内部类的类名、内部类的内容
            -keep class com.example.hensen.net.NetWorkCache$NetWorkBean{*;}
            ```
        3. **特定内容**
            ```py
            -keep class com.example.hensen.net.NetWorkCache{
                <init>;# 匹配所有构造器
                <fields>;# 匹配所有变量
                <methods>;# 匹配所有方法

                public <methods>;# 匹配所有共有的方法
                private <methods>;# 匹配所有私有的方法
                public *;# 匹配所有共有的内容
                private *;# 匹配所有私有的内容
                public <init>(java.lang.String);# 匹配特定参数的构造函数
                public void getCache(...);# 匹配任意长度类型参数的方法
            }
            ```
        4. **类成员**: 对类名不需要keep，只需要对类下的方法进行keep操作
            ```py
            # 表示keep特定类下的特定参数的方法，但类名不会被keep
            -keepclassmembernames class com.example.hensen.net.NetWorkCache{
                public void getCache(java.lang.String);
            }
            ```
        5. **类和类成员**
            作用范围 | keep所指定类、成员 | keep所指定类、成员(前提是在压缩阶段没有被删除)
            :-|:-|:-
            类和类成员 | -keep | -keepnames
            仅类成员 | -keepclassmembers | -keepclassmembernames
            类和类成员(前提是成员都存在) | -keepclasseswithmembers | -keepclasseswithmembernames
    4. 应用场景
        1. **安卓底层组件和类名不可混淆**: 将底层的keep住，插件化才能准确的hook到底层组件
            ```py
            -keep public class * extends android.app.Activity
            -keep public class * extends android.app.Application
            -keep public class * extends android.app.Service
            -keep public class * extends android.content.ContentProvider
            -keep public class * extends android.content.BroadcastReceiver
            -keep public class * extends android.view.View
            -keep public class * extends android.preference.Preference
            ```
        2. **jni方法不可混淆**: native方法要完整的包名类名方法来定义，不可修改，否则找不到
            ```py
            -keepclasswithmembernames class *{
                native <methods>;
            }
            ```
        3. **反射用到的类名和方法不可混淆**: 反射要根据类名才能拿到反射的实体
            ```py
            -keep public class com.example.hensen.** {
                public void set*(***);
                public *** get*();
                public *** is*();
            }
            ```
        4. **自定义View不可混淆**: 只要是继承自系统组件，都要keep住
            ```py
            -keep public class * extend android.view.View{
                *** get*();
                void set*(***);
                public <init>(android.content.Context);
                public <init>(android.content.Context, android.util.AttributeSet);
                public <init>(android.content.Context, android.util.AttributeSet, int);
            }
            ```
        5. **第三方框架不可混淆**: 将第三方框架当作为系统组件即可
            ```py
            -keep class android.support.** { *; }
            -keep class android.support.v4.** { *; }
            -keep class android.support.v7.** { *; }
            -keep class * extends android.support.v4.**
            -keep class * extends android.support.v7.**
            -keep class * extends android.support.annotation.**
            ```
        6. **WebView和Js互调接口不可混淆**
            ```py
            -keepclassmembers class ** {
                @android.webkit.JavascriptInterface public *;
            }
            ```
        7. **序列化的类不可混淆**
            ```py
            -keepclassmembers class * implements android.os.Parcelable {
                static ** CREATOR;
                <fields>;
                <methods>;
            }
            -keepclassmembers class * implements java.io.Serializable {
                static final long serialVersionUID;
                private static final java.io.ObjectStreamField[] serialPersistentFields;
                private void writeObject(java.io.ObjectOutputStream);
                private void readObject(java.io.ObjectInputStream);
                java.lang.Object writeReplace();
                java.lang.Object readResolve();
            }
            ```
        8. **enum类的特殊性**: 以下方法会被发射调用
            ```py
            -keepclassmembers enum * {
                public static **[] values();
                public static ** valueOf(java.lang.String);
                public static ** valueOf(int);
            }
            ```
        9. **其他场景**
            ```py
            # 指定文件为映射文件，包括类和类成员的混淆名称，文件未提及的类和类成员将生成新的名称
            -applymapping mapping.txt
            # 指定一个文本文件，其中所有有效字词都用作混淆字段和方法名称
            -obfuscationdictionary obfuscationdictionary.txt
            # 指定一个文本文件，其中所有有效词都用作混淆类名
            -classobfuscationdictionary obfuscationdictionary.txt

            # 混淆时不生成大小写混合的类名
            -dontusemixedcaseclassnames
            # 不忽略指定jars中的非public calsses
            -dontskipnonpubliclibraryclasses
            # 不忽略指定类库的public类成员(变量和方法)
            -dontskipnonpubliclibraryclassmembers

            # 混淆过程中打印详细信息，如果异常终止则打印整个堆栈信息
            -verbose
            # 忽略警告继续处理
            -ignorewarnings

            # 不对指定的类、包中的不完整的引用发出警告
            -dontwarn android.support.v4.**
            -dontwarn All

            # 避免混淆内部类、泛型、匿名类
            -keepattributes InnerClasses,Signature,EnclosingMethod
            # 抛出异常时保留代码行号    
            -keepattributes SourceFile,LineNumberTable
            # 保留注释成员变量，如Activity被@Override注释的方法onCreate、onDestroy方法
            -keepattributes *Annotation*
            # 资源类变量需要保留
            -keep public class **.R$*{
                public static final int *;
            }
            ```
    5. Android混淆机制
        1. Java代码的混淆
            1. 原因: 为了防止apk被反编译后，很容易被其他人看懂。
            2. 混淆机制的本质是什么: 把原来有具体含义的类名，变量名，方法名，修改成让人看不懂的名字
            3. 如何混淆代码:  Android工程目录下有两个文件，project.properties，proguard-project.txt。project.properties(工程目录下)有一行注释了的``proguard.config=${sdk.dir}/tools/proguard/proguard-android.txt:proguard-project.txt``，取消对该行的注释就可以了。
            4. 常见的混淆的方式有两种， **Proguard (免费)和 DexGuard (要钱)**。DexGuard 是基于 ProGuard 的。这就是为什么它是如此的原因很容易升级到DexGuard。但是这两种产品提供广泛不同的功能。ProGuard的是Java字节码通用的优化，同时 DexGuard 提供了先进的 Android 应用程序的保护。在这篇博客中，你会发现 ProGuard，并将 DexGuard 之间的差别的概述。
        2. C/C++层的混淆: native层混淆并没有统一的标准方案，常见的方法是使用**花指令**。使得native层在被反编译时出错。
        3. 资源文件的混淆: 和native层一样并没有统一的标准方案，目前有两个方案，美团和微信两种。微信的已开源 [AndResGuard](https://github.com/shwenzhang/AndResGuard/blob/master/README.zh-cn.md)
7. Gradle深入学习
    1. Gradle不单单是一个配置脚本，它的背后是几门语言，如果硬让我说，我认为是三门语言。
        1. Groovy Language
        2. Gradle DSL
        3. Android DSL
        4. DSL的全称是Domain Specific Language，即领域特定语言，或者直接翻译成"特定领域的语言"，算了，再直接点，其实就是这个语言不通用，只能用于特定的某个领域，俗称"小语言"。因此DSL也是语言。
    2. 介绍
        1. 一个像 Ant 一样的非常灵活的通用构建工具 
        2. 一种可切换的, 像 maven 一样的基于合约构建的框架 
        3. 支持强大的多工程构建 
        4. 支持强大的依赖管理(基于 ApacheIvy ) 
        5. 支持已有的 maven 和 ivy 仓库 
        6. 支持传递性依赖管理, 而不需要远程仓库或者 pom.xml 或者 ivy 配置文件 
        7. 优先支持 Ant 式的任务和构建 
        8. 基于 groovy 的构建脚本 
        9. 有丰富的领域模型来描述你的构建
    3. 如果你本地安装了Gradle，那么你就可以使用gradle命令来直接构建。如果本地没有安装，那么可以通过gradle wrapper来构建，Linux和MAC使用./gradlew，而Windows上面则使用gradlew，还可以在 gradle/gradle-wrapper.properties 中配置 Gradle 版本。
    4. doLast还有一个等价的操作leftShift，leftShift还可以缩写为<<。通过@TaskAction操作符也可以指定一个Task执行时要做的事情，它区别于doFirst和doLast，不过@TaskAction平时用的较少。
8. Gradle for Android 读书笔记
    1. Gradle和AS入门
    2. 基本自定义构建
    3. **依赖管理**
        1. 如果项目中有个依赖，而且它有自己的依赖，则Gradle会自己处理，这个称为**传递依赖**
        2. 依赖仓库可以看做是文件的集合，Gradle支持三种不同的依赖仓库: **maven / ivy 和 静态文件或文件夹**。
            ```groovy
            repositories {
                maven {
                    url "https://repo..."
                    credentials {
                        username 'user'
                        password '...'
                    }
                }
                ivy { url "http://repo..." } // 也可以使用 credentials
                flatDir { dirs 'arrs' }
            }
            ```
        3. 一个依赖通常由 **group name version** 指定。如
            ```groovy
            dependencies {
                compile 'com.google.code.gson:gson:2.3'
                compile group: 'com.squareup.retrofit', name: 'retrofit', version: '1.9.0'
            }
            ```
        4. 为了方便，Gradle预定义了三个Maven仓库: **JCenter / Maven Central / 本地Maven仓库**。
            ```groovy
            repositories {
                mavenCentral()
                jcenter()
                mavenLocal()
            }
            ```
        5. **文件依赖**
            ```groovy
            dependencies {
                compile fileTree(dirs: 'libs', include: ['*.jar'])
                compile files('libs/dem.jar')
            }
            ```
        6. **原生依赖**: 即C++/C写的依赖库，通常包含几个.so文件，可用于所有平台。
            1. Android插件默认支持原生依赖库，只要在**模块层创建一个jniLibs文件夹(默认位置)**。然后为每个平台创建子文件夹，添加.so文件到适当位置即可。
            2. 使用**脚本添加**
                ```groovy
                android {
                    sourceSets.main {
                        // jniLibs.srcDir 'src/main/libs'
                        jniLibs.srcDirs=['src/main/libs']
                    }
                }
                ```
            3. aar包里面也可以包含so文件，但依赖这种包含so文件的aar包时不需要做特定的配置，编译时so文件会自动包含到引用AAR压缩包的APK中。
            4. 比较特殊的一点是，so文件需要放到**具体的ABI目录**(如 arm64-v8a / armeabi / x86)下，不能直接放libs目录下。所有的x86/x86_64/armeabi-v7a/arm64-v8a设备都支持armeabi架构的so文件。所以为了减小包体积，为了减小apk体积，可以只保留armeabi一个文件夹。但如果你想引入多个平台的，那么需要保持so文件的数量一致，就是说armeabi文件下的每个so文件都要在armeabi-v7a下找到对应的so文件，但这样apk包的体积就会增大。
            5. 还有一种做法是生成指定ABI版本的APK，然后按需上传到应用商店，让用户自己选择下载适合自己手机的版本，这个可能更多的用在安卓游戏APP上，build.gradle配置如下：
                ```groovy
                android {
                    ...
                    splits {
                        abi {
                            enable true  // 启用ABI拆分机制
                            reset()  // 重置ABI列表为只包含一个空字符串
                            include 'x86', 'x86_64', 'armeabi-v7a', 'arm64-v8a'  // 与include一起使用来可以表示要使用哪一个ABI
                            universalApk true  // 是否打包一个通用版本(包含所有的ABI)。默认值为 false。
                        }
                    }
                    // ABI的code码
                    project.ext.versionCodes = ['armeabi': 1, 'armeabi-v7a': 2, 'arm64-v8a': 3, 'mips': 5, 'mips64': 6, 'x86': 8, 'x86_64': 9]
                    android.applicationVariants.all { variant ->
                        // 最终标记
                        variant.outputs.each { output ->
                            output.versionCodeOverride = project.ext.versionCodes.get(output.getFilter(com.android.build.OutputFile.ABI), 0) * 1000000 + android.defaultConfig.versionCode
                        }
                    }
                }
                ```
        7. **依赖项目**: 类似于应用项目，可使用相同的任务来构建和测试依赖项目，且它们有不同的构建Variants，不同之处在于输出，一个是apk，另一个则是aar(可直接被Android应用项目用作依赖库)。
            1. 创建: ``apply plugin 'com.android.library'``
            2. 使用: 一种是在项目中做一个模块(这种叫依赖库)，另一种是创建一个可以在多个应用中复用的aar文件。
            3. **依赖库的使用**
                ```groovy
                include ':app' ':library'
                ```
                ```groovy
                dependencies {
                    compile project(':library')
                }
                ```
            4. **aar使用** 路径声明和依赖引入 ``repositories.flatDir.dirs: 'aars'`` ``compile(name: 'libraryname', ext: 'aar')`` 。如果aar包有很多，也可以一样象jar包统一添加一个文件夹下的所有包。
                ```groovy
                repositories {
                    flatDir {
                        dirs: 'app/libs'
                    }
                }
                def dir = new File('app/libs')
                dir.traverse(nameFilter: ~/.*\.aar/) { file ->
                    def name = file.getName().replace('.aar', '')
                    implementation(name: name, ext: 'aar')
                }
                ```
            5. 当一个library类型的module需要引用aar文件时，也要在所在模块的build.gradle文件中加入上面的话，但是当其他Module引用此library的module时，也需要在他的build.gradle中加入如下配置，否则会提示找不到文件。
                ```groovy
                repositories {
                    flatDir {
                        dirs 'libs', '../包含aar包的模块名/libs'
                    }
                }
                ```
            6. 即如果当前Module需要一个aar包内容，不论aar包是不是在当前Module中，都需要在build.gradle中声明它所在的路径。如果项目中这样的Module比较多，每个都需要声明路径，不便于管理的话，推荐在项目的根build.gradle中统一添加,将所有包含aar包的模块名列出，这样不论是本Module或其他Module都不需要单独配置路径了。
                ```groovy
                allprojects {
                    repositories {
                        jcenter()
                        google()
                        flatDir {
                            dirs: "../moudle-A/libs,../moudle-B/libs,../moudle-C/libs".split(",")
                        }
                    }
                }
                ```
        8. **依赖配置**: 括号中是3.0版本的依赖方式
            1. **compile(api)**: 默认配置，编译主应用时包含的依赖，不仅会将依赖添加至类路径，而且会生成对应的apk。
            2. **apk(runtimeOnly)**: 只会被打包到apk，不会添加到类路径。只在生成apk的时候参与打包，编译时不会参与，很少用。
            3. **provide(compileOnly)**: 依赖只会添加到类路径，不会打包到对应的apk。只在编译时有效，不会参与打包，可以在自己的moudle中使用该方式依赖。比如com.android.support，gson这些使用者常用的库，避免冲突。。apk与provided配置只适用于jar依赖。
            5. **testCompile(testImplementation)**: 只在单元测试代码的编译以及最终打包测试apk时有效。
            6. **androidTestCompile**: ...
            7. **implementation**: 使用了该命令编译的依赖，对该项目有依赖的项目将无法访问到使用该命令编译的依赖中的任何程序，也就是将该依赖隐藏在内部，而不对外部公开。比如我在一个libiary中使用implementation依赖了gson库，然后我的主项目依赖了libiary，那么，我的主项目就无法访问gson库中的方法。这样的好处是编译速度会加快，推荐使用implementation的方式去依赖，如果你需要提供给外部访问，那么就使用api依赖即可。在Google IO 相关话题的中提到了一个建议，就是依赖首先应该设置为implementation的，如果没有错，那就用implementation，如果有错，那么使用api指令，这样会使编译速度增快。
            8. 此外，Android插件为每个构建variant生成一份配置，如**debugCompile(debugImplementation)**(只在debug模式的编译和最终的debug apk打包时有效)/releaseProvided。
        9. **语义化版本**: 版本数字的格式一般为 **major.minor.patch**。
            1. 做不兼容的api变化时，major版本添加。
            2. 以向后兼容的方式添加功能时，minor版本添加。
            3. 修复一些bug时，patch版本添加。
        10. **动态化版本**: 构建应用或依赖时能获取最新的依赖。
            ```groovy
            compile 'com.android.support: supprot-v4:22.2.+'  // 获取最新的 patch 版本
            compile 'com.android.support: appcompact-v7:22.2+'  // 获取最新的 minor 版本，且最低是 2
            compile 'com.android.support: recyclerview-v7:+'  // 获取最新依赖
            ```
        11. **others**
            1. **force / exclude / transitive**: 同样的配置下的版本冲突，会自动使用最新版；而不同配置(如debug和release或者test与非test)下的版本冲突，gradle同步时会直接报错。可使用exclude、force解决冲突。
                ```groovy
                implementation 'commons-lang:commons-lang:2.6'
                implementation group: 'com.google.code.guice', name: 'guice', version: '1.0'
                implementation('org.hibernate:hibernate:3.1') {
                    // 不同版本同时被依赖时，那么强制依赖这个版本的，默认false
                    force = true
                    // exclude可以设置不编译指定的模块，有三种写法:
                    exclude module: 'cglib' 
                    exclude group: 'org.jmock' 
                    exclude group: 'org.unwanted', module: 'iAmBuggy' 
                    // 禁止依赖的传递，gradle自动添加子依赖项(依赖包所需的依赖)，设置为false，则需要手动添加每个子依赖项，默认为true。
                    transitive = false
                }
                ```
                ```groovy
                // or
                configurations {
                    compile.exclude module: 'cglib'
                    all*.exclude group:'org.unwanted', module: 'iAmBuggy'
                }
                configurations.all {
                    transitive = false
                    resolutionStrategy {
                        force 'org.hamcrest:hamcrest-core:1.3'
                    }
                }
                ```
            2. 除了可以用exclude、force解决外，也**可以自己统一为所有依赖指定support包的版本**，不需要为每个依赖单独排除了：
                ```groovy
                configurations.all {
                    resolutionStrategy.eachDependency { DependencyResolveDetails details ->
                        def requested = details.requested
                        if (requested.group == 'com.android.support') {
                            if (!requested.name.startsWith("multidex")) {
                                details.useVersion '26.1.0'
                            }
                        }
                    }
                }
                ```
            3. **编译期注解的依赖--annotationProcessor**: 用过butterknife或者Dagger的同学可能对这种annotationProcessor引入方式有所印象，这种方式是只在编译的时候执行依赖的库，但是库最终不打包到apk中。**结合编译期注解的作用，他是用来生成代码的，本身在运行时是不需要的**。
        12. **问题和小结**
            1. **aar包中的资源文件重复了**: 资源文件重复了，主工程的资源文件会直接覆盖aar包中的文件，并且不会有任何报错或者提示，最终aar包中也会直接用主工程的资源文件，所以需要注意命名方式。暂时没有更好的解决方法。
            2. **AndroidManifest合并错误**: 同样也是发生在aar包上， Android Studio 项目每个module中都可以有一个AndroidManifest.xml文件，但最终的APK 文件只能包含一个 AndroidManifest.xml 文件。在构建应用时，Gradle 构建会将所有清单文件合并到一个封装到 APK 的清单文件中。aar包的清单文件和我们的app清单文件属性冲突时：用tools:replace="属性名"解决。
            3. **annotationProcessor与compileOnly的区别**: 上文说了annotationProcessor与compileOnly都是只编译并不打入apk中，他俩到底有什么区别呢？扮演的角色不一样，annotationProcessor作用是编译时生成代码，编译完真的就不需要了，compileOnly是有重复的库，为的是剃除只保留一个库，最终还是需要的。
            4. **重复的aar包**: 如果本地同时存在两个不同的jar包，或者本地已有jar包，再去远程依赖不同版本的jar包，就会报错。**解决方式**：将其中的一个采用compileOnly替换implementation。顾名思义，compileOnly只在编译时起作用，不会包含到APK里面，在运行时也就避免找到重复的类了。
            5. **模块的依赖分析**: 如果我们的项目如果间接依赖了相同库的不同版本，在编译时就直接会报错。**解决方法**很简单，用exclude就行了，但我们并不知道哪两个依赖他们依赖了相同库的不同版本，该把exclude放到哪里呢？这就可以用到一个命令 ``.\gradlew -q <模块名>:dependencies`` 就能打印出该模块所有的依赖树信息。
    4. **创建构建Variant**
        1. 引入
            1. 一个应用可以有 debug 和 release 版，也可以有 免费版 和 付费版。这样的组合就有四种了，甚至还可以有更多的版本组合更多的配置。不同版本的不同配置会让项目变的复杂。
            2. Gradle中有一些便捷和可扩展的概念可用来定位这些问题。首先第一个概念是每个由AS创建的新项目都会生成 **debug 和 release** 版本的构建类型。另一个概念是 **product flavor(不同定制的产品)** 。构建类型与product flavor通常一起使用，可以容易的处理测试和生产应用的免费和付费版本。构建类型与product_flavor的结合结果被称为**构建variant**。
        2. **构建类型**
            1. 新模块默认build.gradle配置了一个构建类型release，用于禁用无用的资源(通过设置minifyEnabled为false)和定义默认Proguard配置文件的位置。
            2. 默认情况下每个模块也有debug构建类型，且是默认构建类型。但可以将其包含到buildTypes代码块，然后覆写任何你想改变的属性来修改配置。
            3. **创建**: 默认的构建类型不够用时，拉下面在staging自定义构建类型
                ```groovy
                android {
                    buildTypes {
                        staging {
                            applicationIdSuffix ".staging"  // 针对 applicationID 定义了一个新的后缀，使其和debug与release版本的applicationID不一样，即可以同时安装release版本与staging版本。
                            versionNameSuffix "-staging"   // 
                            buildConfigField "String", "API_URL", "\"https://staging.example.com/api\""  // 使用了构建配置变量
                        }
                        // 还可以通过另一个构建类型的属性来初始化该构建类型
                        staging2.initWith(buildTypes.debug)  // 复制已有构建类型的所有属性
                        staging2 {
                            applicationIdSuffix ".staging"
                            versionNameSuffix "-staging"
                            debuggable = false
                        }
                    }
                }
                ```
            4. **源集**: 创建新构建时，Gradle也会创建新源集。源集目录名称默认和构建类型相同。该目录不是在定义新构建类型时自动创建的，需要手动创建。如
                ```
                app
                    src
                        debug
                            java
                                com.package
                                    Constants.java
                            res
                                layout
                                    activity_main.java
                            AndroidManifest.xml
                        main
                            java
                                com.package
                                    MainActivity.java
                            res
                                drawable
                                layout
                                    activity_main.java
                            AndroidManifest.xml
                        staging
                            java
                                com.package
                                    Constants.java
                            res
                                layout
                                    activity_main.java
                            AndroidManifest.xml
                        release
                            java
                                com.package
                                    Constants.java
                            AndroidManifest.xml
                ```
            5. **main**: 各个构建类型共享 main 源集。使用不同源集时，资源处理也不一样。
                1. drawables 和 layout 将覆盖 main源集 中同名资源。
                2. values 文件夹中的文件将合并。(如果有相同id的则其他源集的优先)
                3. mainfest 文件类似，会合并起来。
            6. **依赖**: 每个构建类型都可以有自己的依赖，Gradle会自动为每个构建添加新的依赖位置。
        3. **product flavor**
            1. 与被用来配置相同App或Library的不同构建类型相反，product flavor被用来创建不同的版本。典型的例子是一个应用有免费和付费的。
            2. **创建**: 通过在 productFlavor 中添加
                ```groovy
                android {
                    productFlavors {
                        red {
                            applicationId 'com.gradleforandroid.red'
                            versionCode 3
                        }
                        blue {
                            applicationId 'com.gradleforandroid.blue'
                            minSdkVersion 14
                            versionCode 4
                        }
                    }
                }
                ```
            3. **源集**: product flavor 也可以有与构建类型类似的源集。而且该源集的文件夹命令应与 product flavor 一样，而且可以与构建类型组合，如 blueRelease 。合并文件夹的组合将比构建类型文件夹和 product flavor 文件夹拥有更高优先级。
            4. **多种定制的版本**: 可以有更多的组合。
                ```groovy
                android {
                    flavorDimensions "color", "price"
                    productFlavor {
                        red { flavorDimension "color" }
                        blue { flavorDimension "color" }
                        free { flavorDimension "price" }
                        paid { flavorDimension "price" }
                    }  // 现在可以组合出 redFree / blueFree / redPaid / bluePaid 四种 Product Flavor 了。加上构建类型，总共有 8 种 构建Variant了。
                }
                ```
        4. **构建Variant**
            1. 构建Variant是构建类型与ProductFlavor结合的结果，无论添加构建类型还是添加ProductFlavor，都会有新的Variant被创建。
            2. **任务**: Gradle的Android插件会为你配置的每个构建Variant创建任务。一个新的Android应用默认有debug或release两种构建类型，可以用assembleDebug和assembleRelease创建两个apk，即用单个assemble创建两个apk。当添加flavor时，新的任务系统也会被创建。如assembleBlueDebug和assembleRed(可以同时创建debug和release版本)。
            3. **源集**
            4. **源集合并资源和Mainfest**
                1. Gradle的Android插件在打包前将main源集和构建类型源集合并在一起。
                2. library项目也可以提供额外的资源，这些也需要合并。这同样适合于manifest文件。
                3. 如你在debug variant中需要额外的Android权限来存储log文件，但不想在main源集中申请该权限(避免吓跑潜在用户)，就可以在debug构建类型的源集中额外添加一个manifest文件来申请额外的权限。
                4. 资源和manifest的**优先顺序**: buildType > flavor > main > dependencies 。在library项目中申明的资源通常具有最低的优先级。
            5. **variant过滤器**: 在app或library的根目录下的build.gradle文件添加
                ```groovy
                android.variantFilter { variant ->
                    if (variant.buildType.name.equals('release')) {
                        variant.getFlavors().each() { flavor ->
                            if (flavor.name.equals('blue')) {
                                variant.getIgnore(true)
                            }
                        }
                    }
                }
                ```
            6. **签名配置**: 将应用发布到Google Play或任何其他应用商店前需要私钥给它签名。如果你有一个付费版和免费版或针对不同用户的不同应用，就需要为每个flavor使用不同的私钥签名了，这就是签名配置出现的原因。签名配置如下
                ```groovy
                android {
                    signingConfigs {
                        staging.initWith(signingConfigs.debug)
                        release {
                            storeFile file("release.keystore")
                            storePassword "secretPassword"
                            keyAlias "gradleforandroid"
                            keyPassword "secretPassword"
                        }
                    }
                }
                ```
        5. 
    5. **管理多模块创建**
        1. 
        2. 
        3. 
        4. 
        5. 
    6. **运行测试**
        1. 
        2. 
        3. 
        4. 
        5. 
    7. **创建任务和插件**
        1. 
        2. 
        3. 
        4. 
        5. 
    8. **设置持续集成**
        1. 
        2. 
        3. 
        4. 
        5. 
    9. **高级自定义创建**
        1. 
        2. 
        3. 
        4. 
        5. 
9. others
    1. **Android Debug与Release环境切换**
        1. 在Android开发中，通常会有Debug和Release环境，比如：Debug环境用测试接口，Release环境用正式接口；Debug环境打印Log，Release环境不打印Log等等。
        2. **BuildConfig文件**: BuildConfig文件是项目编译后自动生成的，它存在于module的 \build\generated\source\buildConfig 文件夹下面。
            1. 其实BuildConfig文件是一个java类，在debug中是这样的：
                ```java
                public final class BuildConfig {
                    public static final boolean DEBUG = Boolean.parseBoolean("true");
                    public static final String APPLICATION_ID = "com.wj.study";
                    public static final String BUILD_TYPE = "debug";
                    public static final String FLAVOR = "";
                    public static final int VERSION_CODE = 1;
                    public static final String VERSION_NAME = "1.0";
                }
                ```
            2. 在release中是这样的
                ```java
                public final class BuildConfig {
                    public static final boolean DEBUG = false;
                    public static final String APPLICATION_ID = "com.wj.study";
                    public static final String BUILD_TYPE = "release";
                    public static final String FLAVOR = "";
                    public static final int VERSION_CODE = 1;
                    public static final String VERSION_NAME = "1.0";
                }
                ```
            3. 默认有六个参数，其中boolean值的DEBUG参数标志了debug包与release包的区别。在debug包中DEBUG=true,release包中DEBUG=false。那么，在module中就可以通过**BuildConfig.DEBUG**的值来区分debug和release。当然，如果要添加额外的参数来区分debug和release也是可以的，在module的build.gradle文件中添加
                ```groovy
                buildTypes {
                    debug {
                        buildConfigField "Boolean", "DEBUG_MODE", "true"
                    }
                    release {
                        buildConfigField "Boolean", "DEBUG_MODE", "false"
                    }
                }
                ```
            4. 编译后，在debug和release的BuildConfig.java中会自动添加一行
                ```java
                /* debug的BuildConfig.java */
                // Fields from build type: debug
                public static final Boolean DEBUG_MODE = false;
                /* release的BuildConfig.java */
                // Fields from build type: release
                public static final Boolean DEBUG_MODE = true;
                ```
            5. 从上面可以看出，编译自动生成的BuildConfig文件可以区分debug和release包，但如果在项目中有多个module(通常有很多个module)，每个module都会生成自己的BuildConfig文件，那么就需要每个module自己各行处理debug和release的区别。这样就导致不统一，比如打开和关闭打印Log，就得各自管理。现在在项目的非主module "Lib module base"中建立一个打印Log的类LogUtil：
                ```java
                public class LogUtil {
                    private final static boolean DEBUG = BuildConfig.DEBUG;
                    public static void d(String tag, String msg) {
                        Log.d(tag, "d-->DEBUG=" + DEBUG);
                        if (DEBUG) { Log.d(tag, msg); }
                    }
                }
                ```
            6. 再在主module中引用这个LogUtil类，从实际的测试结果上看，无论是debug包还是release包，结果LogUtil.DEBUG的值都是false。因为编译时被依赖的 module 默认会提供 Release 版给其它 module 或工程使用，这就导致该 BuildConfig.DEBUG 会始终为 false。接下来用Application的FLAG_DEBUGGABLE来解决这个问题。
        3. **通过Application的FLAG_DEBUGGABLE来判断**: 元素application有一个属性debuggable，在debug构建的时候会设置成false，在release构建的时候会设置成ture。这些都是自动设置，并不需要在元素application中设置android:debuggable="false|true"。
            1. 所以可以这样写：
                ```java
                public static void init(Context context) {
                    DEBUG = context.getApplicationInfo() != null &&
                            (context.getApplicationInfo().flags & ApplicationInfo.FLAG_DEBUGGABLE) != 0;
                }
                ```
            2. 但在调用的时候要在Application的onCreate方法中调用：
                ```java
                public class Study extends Application {
                    @Override
                    public void onCreate() {
                        super.onCreate();
                        LogUtil.init(getApplicationContext());
                    }
                }
                ```
    2. 
10. gradle
    ```groovy
    // 顶层的 build.gradle
    
    ```

## Adb等工具

1. 一般指令
    1. adb version
    2. adb help
    3. adb devices [-l\]
        ```cmd
        C:\Users\Administrator>adb devices
        List of devices attached
        WTKDU16709028638        device

        C:\Users\Administrator>adb devices -l
        List of devices attached
        WTKDU16709028638       device product:FRD-AL00 model:FRD_AL00 device:HWFRD transport_id:1
        ```
2. global options
    ```
    -a         listen on all network interfaces, not just localhost
    -d         use USB device (error if multiple devices connected)
    -e         use TCP/IP device (error if multiple TCP/IP devices available)
    -s SERIAL  use device with given serial (overrides $ANDROID_SERIAL)
    -t ID      use device with given transport id
    -H         name of adb server host [default=localhost]
    -P         port of adb server [default=5037]
    -L SOCKET  listen on given socket for adb server [default=tcp:localhost:5037]
    ```
3. 网络
    ```
    connect HOST[:PORT]      connect to a device via TCP/IP [default port=5555]
    disconnect [HOST[:PORT]]
        disconnect from given TCP/IP device [default port=5555], or all
    forward --list           list all forward socket connections
    forward [--no-rebind] LOCAL REMOTE
        forward socket connection using:
        tcp:<port> (<local> may be "tcp:0" to pick any open port)
        localabstract:<unix domain socket name>
        localreserved:<unix domain socket name>
        localfilesystem:<unix domain socket name>
        dev:<character device name>
        jdwp:<process pid> (remote only)
    forward --remove LOCAL   remove specific forward socket connection
    forward --remove-all     remove all forward socket connections
    ppp TTY [PARAMETER...]   run PPP over USB
    reverse --list           list all reverse socket connections from device
    reverse [--no-rebind] REMOTE LOCAL
        reverse socket connection using:
        tcp:<port> (<remote> may be "tcp:0" to pick any open port)
        localabstract:<unix domain socket name>
        localreserved:<unix domain socket name>
        localfilesystem:<unix domain socket name>
    reverse --remove REMOTE  remove specific reverse socket connection
    reverse --remove-all     remove all reverse socket connections from device
    ```
100. adb help
    ```
    file transfer:
    push [--sync] LOCAL... REMOTE
        copy local files/directories to device
        --sync: only push files that are newer on the host than the device
    pull [-a] REMOTE... LOCAL
        copy files/dirs from device
        -a: preserve file timestamp and mode
    sync [all|data|odm|oem|product_services|product|system|vendor]
        sync a local build from $ANDROID_PRODUCT_OUT to the device (default all)
        -l: list but don't copy

    shell:
    shell [-e ESCAPE] [-n] [-Tt] [-x] [COMMAND...]
        run remote shell command (interactive shell if no command given)
        -e: choose escape character, or "none"; default '~'
        -n: don't read from stdin
        -T: disable PTY allocation
        -t: force PTY allocation
        -x: disable remote exit codes and stdout/stderr separation
    emu COMMAND              run emulator console command

    app installation (see also `adb shell cmd package help`):
    install [-lrtsdg] [--instant] PACKAGE
        push a single package to the device and install it
    install-multiple [-lrtsdpg] [--instant] PACKAGE...
        push multiple APKs to the device for a single package and install them
    install-multi-package [-lrtsdpg] [--instant] PACKAGE...
        push one or more packages to the device and install them atomically
        -r: replace existing application
        -t: allow test packages
        -d: allow version code downgrade (debuggable packages only)
        -p: partial application install (install-multiple only)
        -g: grant all runtime permissions
        --instant: cause the app to be installed as an ephemeral install app
        --no-streaming: always push APK to device and invoke Package Manager as separate steps
        --streaming: force streaming APK directly into Package Manager
        --fastdeploy: use fast deploy
        --no-fastdeploy: prevent use of fast deploy
        --force-agent: force update of deployment agent when using fast deploy
        --date-check-agent: update deployment agent when local version is newer and using fast deploy
        --version-check-agent: update deployment agent when local version has different version code an
    d using fast deploy
    uninstall [-k] PACKAGE
        remove this app package from the device
        '-k': keep the data and cache directories

    debugging:
    bugreport [PATH]
        write bugreport to given PATH [default=bugreport.zip];
        if PATH is a directory, the bug report is saved in that directory.
        devices that don't support zipped bug reports output to stdout.
    jdwp                     list pids of processes hosting a JDWP transport
    logcat                   show device log (logcat --help for more)

    security:
    disable-verity           disable dm-verity checking on userdebug builds
    enable-verity            re-enable dm-verity checking on userdebug builds
    keygen FILE
        generate adb public/private key; private key stored in FILE,

    scripting:
    wait-for[-TRANSPORT]-STATE
        wait for device to be in the given state
        STATE: device, recovery, rescue, sideload, bootloader, or disconnect
        TRANSPORT: usb, local, or any [default=any]
    get-state                print offline | bootloader | device
    get-serialno             print <serial-number>
    get-devpath              print <device-path>
    remount [-R]
        remount partitions read-write. if a reboot is required, -R will
        will automatically reboot the device.
    reboot [bootloader|recovery|sideload|sideload-auto-reboot]
        reboot the device; defaults to booting system image but
        supports bootloader and recovery too. sideload reboots
        into recovery and automatically starts sideload mode,
        sideload-auto-reboot is the same but reboots after sideloading.
    sideload OTAPACKAGE      sideload the given full OTA package
    root                     restart adbd with root permissions
    unroot                   restart adbd without root permissions
    usb                      restart adbd listening on USB
    tcpip PORT               restart adbd listening on TCP on PORT

    internal debugging:
    start-server             ensure that there is a server running
    kill-server              kill the server if it is running
    reconnect                kick connection from host side to force reconnect
    reconnect device         kick connection from device side to force reconnect
    reconnect offline        reset offline/unauthorized devices to force reconnect

    environment variables:
    $ADB_TRACE
        comma-separated list of debug info to log:
        all,adb,sockets,packets,rwx,usb,sync,sysdeps,transport,jdwp
    $ADB_VENDOR_KEYS         colon-separated list of keys (files or directories)
    $ANDROID_SERIAL          serial number to connect to (see -s)
    $ANDROID_LOG_TAGS        tags to be used by logcat (see logcat --help)
    $ADB_LOCAL_TRANSPORT_MAX_PORT max emulator scan port (default 5585, 16 emus)
    ```

## Android权限系统

## Android bugclose

## Java Process/Runtime

0. links
    * [How to Run a Shell Command in Java](https://www.baeldung.com/run-shell-command-in-java)
    * [java调用shell命令并获取执行结果](https://blog.csdn.net/arkblue/article/details/7897396)
    * [java中调用shell脚本的方法总结](https://my.oschina.net/u/1540325/blog/645255)
    * []()
    * []()

* [Jenkins中文网](https://jenkins.io/zh/)