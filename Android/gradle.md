- [links](#links)
- [简介](#%e7%ae%80%e4%bb%8b)
- [常见配置](#%e5%b8%b8%e8%a7%81%e9%85%8d%e7%bd%ae)
- [Gradle: 基本项目](#gradle-%e5%9f%ba%e6%9c%ac%e9%a1%b9%e7%9b%ae)
- [Gradle: 生命周期](#gradle-%e7%94%9f%e5%91%bd%e5%91%a8%e6%9c%9f)
- [Gradle: Project](#gradle-project)
- [Gradle: File](#gradle-file)
- [Gradle: 依赖与外部命令](#gradle-%e4%be%9d%e8%b5%96%e4%b8%8e%e5%a4%96%e9%83%a8%e5%91%bd%e4%bb%a4)
- [Gradle: Task](#gradle-task)
- [Gradle: Setting与SourceSets与Variants](#gradle-setting%e4%b8%8esourcesets%e4%b8%8evariants)
- [Gradle: 自定义Plugin](#gradle-%e8%87%aa%e5%ae%9a%e4%b9%89plugin)
- [Gradle: Others](#gradle-others)
- [Gradle for Android 读书笔记: 依赖管理](#gradle-for-android-%e8%af%bb%e4%b9%a6%e7%ac%94%e8%ae%b0-%e4%be%9d%e8%b5%96%e7%ae%a1%e7%90%86)
- [Gradle for Android 读书笔记: Variant](#gradle-for-android-%e8%af%bb%e4%b9%a6%e7%ac%94%e8%ae%b0-variant)
- [Gradle for Android 读书笔记: 管理多模块构建](#gradle-for-android-%e8%af%bb%e4%b9%a6%e7%ac%94%e8%ae%b0-%e7%ae%a1%e7%90%86%e5%a4%9a%e6%a8%a1%e5%9d%97%e6%9e%84%e5%bb%ba)
- [Gradle for Android 读书笔记: 运行测试](#gradle-for-android-%e8%af%bb%e4%b9%a6%e7%ac%94%e8%ae%b0-%e8%bf%90%e8%a1%8c%e6%b5%8b%e8%af%95)
- [Gradle for Android 读书笔记: 创建任务和插件](#gradle-for-android-%e8%af%bb%e4%b9%a6%e7%ac%94%e8%ae%b0-%e5%88%9b%e5%bb%ba%e4%bb%bb%e5%8a%a1%e5%92%8c%e6%8f%92%e4%bb%b6)
- [Gradle for Android 读书笔记: 设置持续集成](#gradle-for-android-%e8%af%bb%e4%b9%a6%e7%ac%94%e8%ae%b0-%e8%ae%be%e7%bd%ae%e6%8c%81%e7%bb%ad%e9%9b%86%e6%88%90)
- [Gradle for Android 读书笔记: 高级自定义创建](#gradle-for-android-%e8%af%bb%e4%b9%a6%e7%ac%94%e8%ae%b0-%e9%ab%98%e7%ba%a7%e8%87%aa%e5%ae%9a%e4%b9%89%e5%88%9b%e5%bb%ba)
- [Gradle: Others](#gradle-others-1)
- [Proguard](#proguard)
- [interface org.gradle.api.Script](#interface-orggradleapiscript)
- [interface](#interface)
- [end](#end)

### links

1. Gradle
    * 参考博客
        * [十分钟理解Gradle](https://www.cnblogs.com/Bonker/p/5619458.html) finished
        * [语法基础——Gradle语法基础](https://blog.csdn.net/qq_30379689/article/details/81432291) finished
        * [深入理解Android之Gradle](http://blog.csdn.net/Innost/article/details/48228651)
        * [Gradle构建最佳实践](http://www.figotan.org/2016/04/01/gradle-on-android-best-practise/)
        * [Gradle从入门到实战 - Groovy基础](https://blog.csdn.net/singwhatiwanna/article/details/76084580)
        * [Gradle脚本基础全攻略](https://blog.csdn.net/yanbober/article/details/49314255)
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
2. Proguard
    * [语法基础——Proguard语法基础](https://blog.csdn.net/qq_30379689/article/details/81589428) finished
    * [Android混淆机制](https://juejin.im/post/58c39774da2f605609693761) finished
    * [Android混淆机制](http://www.voidcn.com/article/p-kiqaofhe-bsc.html) finished
3. Gradle配置
    * [Android local.properties配置文件的使用](https://www.jianshu.com/p/f891fa3eadd8)
    * [Android Studio3.0中dependencies依赖由compile变为implementation的区别](https://blog.csdn.net/silenceoo/article/details/78735687) finished
    * [Android依赖导入全攻略](https://juejin.im/post/5acd6daaf265da238a30ca73) finished
    * [Gradle依赖排除](https://www.zhyea.com/2018/02/08/gradle-exclude-dependencies.html) finished
    * [Gradle依赖项学习总结，dependencies、transitive、force、exclude的使用与依赖冲突解决](http://www.paincker.com/gradle-dependencies)
    * [教你如何使用android studio发布release 版本（完整版）](https://blog.csdn.net/to_perfect/article/details/69048419)
    * [Gradle Kotlin DSL迁移指南](https://juejin.im/post/5c4190276fb9a049fe3570b6)
    * [Gradle基础 构建生命周期和Hook技术](https://juejin.im/post/5afec54951882542715001f2)

### 简介

1. **构建工具——Gradle**: Gradle是一个**构建工具**，它是用来**帮助我们构建app**的，**构建包括编译、打包等过程**。我们可以为Gradle指定构建规则，然后它就会根据我们的"命令"自动为我们构建app。Android Studio中默认就使用Gradle来完成应用的构建。有些同学可能会有疑问："我用AS不记得给Gradle指定过什么构建规则呀，最后不还是能搞出来个apk。" 实际上，app的构建过程是大同小异的，有一些过程是"通用"的，也就是每个app的构建都要经历一些公共步骤。因此，在我们在创建工程时，Android Studio自动帮我们生成了一些通用构建规则，很多时候我们甚至完全不用修改这些规则就能完成我们app的构建。
2. **自定义——Groovy**: 有些时候，我们会有一些个性化的构建需求，比如我们引入了第三方库，或者我们想要在通用构建过程中做一些其他的事情，这时我们就要自己在系统默认构建规则上做一些修改。这时候我们就要自己向Gradle"下命令"了，这时候我们就**需要用Gradle能听懂的话了，也就是Groovy。Groovy是一种基于JVM的动态语言**。
3. 我们在开头处提到"Gradle是一种构建工具"。实际上，当我们想要更灵活的构建过程时，Gradle就成为了一个编程框架——我们可以通过编程让构建过程按我们的意愿进行。也就是说，当我们把Gradle作为构建工具使用时，我们只需要掌握它的配置脚本的基本写法就OK了；而当我们需要对构建流程进行高度定制时，就务必要掌握Groovy等相关知识了。
4. **Project与Task**: 在Gradle中，**每一个待构建的工程是一个Project，构建一个Project需要执行一系列Task，比如编译、打包**这些构建过程的子过程都对应着一个Task。具体来说，**一个apk文件的构建包含以下Task：Java源码编译、资源文件编译、Lint检查、打包以生成最终的apk文件等等**。
5. **插件**: 插件的核心工作有两个，一是定义Task；二是执行Task。也就是说，我们想让Gradle能正常工作，完成整个构建流程中的一系列Task的执行，必须导入合适的插件，这些插件中定义了构建Project中的一系列Task，并且负责执行相应的Task。在新建工程的app模块的build.gradle文件的第一行，往往都是如下这句: ``apply plugin: 'com.android.application'``。这句话的意思就是应用"com.android.application"这个插件来构建app模块，app模块就是Gradle中的一个Project。也就是说，这个插件负责定义并执行Java源码编译、资源文件编译、打包等一系列Task。实际上"com.android.application"整个插件中定义了如下4个顶级任务
    1. **assemble**: 构建项目的输出(apk)
    2. **check**: 进行校验工作
    3. **build**: 执行assemble任务与check任务
    4. **clean**: 清除项目的输出
    5. 当我们执行一个任务时，会自动执行它所依赖的任务。比如，执行assemble任务会执行assembleDebug任务和assembleRelease任务，这是因为**一个Android项目至少要有debug和release这两个版本的输出**。
6. **Gradle配置文件**: Android Studio中的一个Module即为Gradle中的一个Project。上图的app目录下，存在一个build.gradle文件，代表了app Module的构建脚本，它定义了应用于本模块的构建规则。我们可以看到，工程根目录下也存在一个build.gradle文件，它代表了整个工程的构建，其中定义了适用于这个工程中所有模块的构建规则。接下来我们介绍一下上图中其他几个Gradle配置文件
    1. **gradle.properties**: 从它的名字可以看出，这个文件中定义了一系列"属性"。实际上，这个文件中定义了一系列供build.gradle使用的常量，比如keystore的存储路径、keyalias等等。
    2. **gradlew与gradlew.bat**: gradlew为Linux下的shell脚本，gradlew.bat是Windows下的批处理文件。gradlew是gradle wrapper的缩写，也就是说它对gradle的命令进行了包装，比如我们进入到指定Module目录并执行"gradlew.bat assemble"即可完成对当前Module的构建(Windows系统下)。
    3. **local.properties**: 从名字就可以看出来，这个文件中定义了一些本地属性，比如SDK的路径。
    4. **settings.gradle**: 假如我们的项目包含了不只一个Module时，我们想要一次性构建所有Module以完成整个项目的构建，这时我们需要用到这个文件。比如我们的项目包含了ModuleA和ModuleB这两个模块，则这个文件中会包含这样的语句：include ':ModuleA', ':ModuleB'。
7. **构建脚本**
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
8. Gradle不单单是一个配置脚本，它的背后是几门语言，如果硬让我说，我认为是三门语言。
        1. Groovy Language
        2. Gradle DSL
        3. Android DSL
        4. DSL的全称是Domain Specific Language，即领域特定语言，或者直接翻译成"特定领域的语言"，算了，再直接点，其实就是这个语言不通用，只能用于特定的某个领域，俗称"小语言"。因此DSL也是语言。
    1. 介绍
        1. 一个像 Ant 一样的非常灵活的通用构建工具 
        2. 一种可切换的, 像 maven 一样的基于合约构建的框架 
        3. 支持强大的多工程构建 
        4. 支持强大的依赖管理(基于 ApacheIvy ) 
        5. 支持已有的 maven 和 ivy 仓库 
        6. 支持传递性依赖管理, 而不需要远程仓库或者 pom.xml 或者 ivy 配置文件 
        7. 优先支持 Ant 式的任务和构建 
        8. 基于 groovy 的构建脚本 
        9. 有丰富的领域模型来描述你的构建
    2. 如果你本地安装了Gradle，那么你就可以使用gradle命令来直接构建。如果本地没有安装，那么可以通过gradle wrapper来构建，Linux和MAC使用./gradlew，而Windows上面则使用gradlew，还可以在 gradle/gradle-wrapper.properties 中配置 Gradle 版本。
    3. doLast还有一个等价的操作leftShift，leftShift还可以缩写为<<。通过@TaskAction操作符也可以指定一个Task执行时要做的事情，它区别于doFirst和doLast，不过@TaskAction平时用的较少。

### 常见配置

1. 整个工程的build.gradle通常不需我们改动，这里我们介绍下一些对模块目录下build.gradle文件的常见配置。
2. **依赖第三方库**: 当我们的项目中用到了了一些第三方库时，我们就需要进行一些配置，以保证能正确导入相关依赖。设置方法很简单，比如我们在app模块中中用到了Fresco，只需要在build.gradle文件中的dependencies块添加如下语句``compile 'com.facebook.fresco:fresco:0.11.0'``。这样一来，Gradle会自动从jcenter仓库下载我们所需的第三方库并导入到项目中。
3. **导入本地jar包**: 在使用第三方库时，除了像上面那样从jcenter仓库下载，我们还可以导入本地的jar包。配置方法也很简单，只需要先把jar文件添加到app\libs目录下，然后在相应jar文件上单击右键，选择"Ad As Library"。然后在build.gradle的dependencies块下添加如下语句 ``compile files('libs/xxx.jar')``。实际上我们可以看到，系统为我们创建的build.gradle中就已经包含了如下语句 ``compile fileTree(dir: 'libs', include: ['*.jar'])``。这句话的意思是，将libs目录下的所有jar包都导入。所以实际上我们只需要把jar包添加到libs目录下并"Ad As Library"即可。
4. **依赖其它模块**: 假设我们的项目包含了多个模块，并且app模块依赖other模块，那么我们只需app\build.gradle的denpendencies块下添加如下语句 ``compile project(':other')``
5. **构建输出为aar文件**: 通常我们构建的输出目标都是apk文件，但如果我们的当前项目时Android Library，我们的目标输出就是aar文件。要想达到这个目的也很容易，只需要把build.gradle的第一句改为如下 ``apply plugin:'com.android.library'``。这话表示我们使用的插件不再是构建Android应用的插件，而是构建Android Library的插件，这个插件定义并执行用于构建Android Library的一系列Task。
6. **自动移除不再使用的资源**: 只需进行如下配置
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
7. **忽略Lint错误**: 在我们构建Android项目的过程中，有时候会由于Lint错误而终止。当这些错误来自第三方库中时，我们往往想要忽略这些错误从而继续构建进程。这时候，我们可以只需进行如下配置
    ```groovy
    android {
        ...
        lintOptions {
            abortOnError false
        }
    }
    ```
8. **集成签名配置**: 在构建release版本的Android项目时，每次都手动导入签名文件，键入密码、keyalias等信息十分麻烦。通过将签名配置集成到构建脚本中，我们就不必每次构建发行版本时都手动设置了。
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

### Gradle: 基本项目

1. 创建项目
    ```bat
    > mkdir groovy-demo
    > cd groovy-demo
    > gradle init
    REM 选择 basic 与 groovy
    > cd ..
    > mkdir kotlin-demo
    > cd kotlin-demo
    > gradle init --dsl kotlin
    REM 选择 basic
    ```
2. 目录结构
    ```
    ├── build.gradle(build.gradle.kts)  // 用于配置当前项目的Gradle构建脚本
    ├── gradle
    │   └── wrapper
    │       ├── gradle-wrapper.jar  // Gradle Wrapper可执行JAR
    │       └── gradle-wrapper.properties  // Gradle Wrapper配置属性
    ├── gradlew  // 基于Unix的系统的Gradle Wrapper脚本
    ├── gradlew.bat  // 适用于Windows的Gradle Wrapper脚本
    └── settings.gradle(settings.gradle.kts)  // 用于配置Gradle构建的Gradle设置脚本
    // gradle init可以生成各种不同类型的项目，甚至知道如何将简单的pom.xml文件转换为Gradle.
    ```
3. 新建任务
    ```bat
    > echo Hello, World > src\myfile.txt
    > vim build.gradle
    REM 添加代码: task copy(type: Copy, group: "Custom", description: "Copies sources to the dest directory", { from("src"); into("dest") })
    > .\gradle copy
    > ls
    build.gradle  dest  gradle  gradlew  gradlew.bat  settings.gradle  src
    > rm -rf dest
    ```
4. 使用插件
    ```groovy
    plugins { id('base') }
    // ...
    task zip(type: Zip, group: "Archive", description: "Archives sources in a zip file", { from("src"); setArchiveName("basic-demo-1.0.zip") })
    // > .\gradlew zip
    // > cd .\build\distributions && ls && cd ..\..
    // basic-demo-1.0.zip
    // > rm -rf .\build
    ```
5. 查看任务
    ```bat
    D:\workspaces\Gradle\demos\groovy-demo> .\gradlew tasks
    > Task :tasks

    ------------------------------------------------------------
    Tasks runnable from root project
    ------------------------------------------------------------

    Archive tasks
    -------------
    zip - Archives sources in a zip file

    Build tasks
    -----------
    assemble - Assembles the outputs of this project.
    build - Assembles and tests this project.
    clean - Deletes the build directory.

    Build Setup tasks
    -----------------
    init - Initializes a new Gradle build.
    wrapper - Generates Gradle wrapper files.

    Custom tasks
    ------------
    copy - Copies sources to the dest directory

    Help tasks
    ----------
    buildEnvironment - Displays all buildscript dependencies declared in root project 'groovy-demo'.
    components - Displays the components produced by root project 'groovy-demo'. [incubating]
    dependencies - Displays all dependencies declared in root project 'groovy-demo'.
    dependencyInsight - Displays the insight into a specific dependency in root project 'groovy-demo'.
    dependentComponents - Displays the dependent components of components in root project 'groovy-demo'. [incubating]
    help - Displays a help message.
    model - Displays the configuration model of root project 'groovy-demo'. [incubating]
    projects - Displays the sub-projects of root project 'groovy-demo'.
    properties - Displays the properties of root project 'groovy-demo'.
    tasks - Displays the tasks runnable from root project 'groovy-demo'.

    Verification tasks
    ------------------
    check - Runs all checks.

    Rules
    -----
    Pattern: clean<TaskName>: Cleans the output files of a task.
    Pattern: build<ConfigurationName>: Assembles the artifacts of a configuration.
    Pattern: upload<ConfigurationName>: Assembles and uploads the artifacts belonging to a configuration.

    To see all tasks and more detail, run gradlew tasks --all

    To see more detail about a task, run gradlew help --task <task>

    BUILD SUCCESSFUL in 1s
    1 actionable task: 1 executed
    ```
6. 查看属性
    ```bat
    D:\workspaces\Gradle\demos\groovy-demo>.\gradlew properties
    REM ...
    REM 这些属性可以在 .\gradle.properties 里面修改
    ```

### Gradle: 生命周期

1. 生命周期: Gradle的构建依次会执行下面的三个生命周期
    1. 初始化阶段(Initialization)：解析整个工程中的所有Project，构建出所有的project对象。主要是依靠settings.gradle。
    2. 配置阶段(Configuration)：解析所有的projects对象中的task，构建好所有task的拓扑图。执行各项目下的build.gradle脚本，完成Project的配置，并且构造Task任务依赖关系图以便在执行阶段按照依赖关系执行Task。另外一点，无论执行Gradle的任何命令，初始化阶段和配置阶段的代码都会被执行。
    3. 执行阶段(Execution)：执行具体的task及其依赖task
2. 生命周期监听
    1. 在项目的build.gradle中，监听配置阶段和执行阶段的生命周期
        ```groovy
        this.gradle.beforeProject { println "配置阶段开始之前(一)" }
        this.beforeEvaluate { println "配置阶段开始之前(二)" }
        this.gradle.afterProject { println "配置阶段执行完毕(一)" }
        this.afterEvaluate { println "配置阶段执行完毕(二)" }
        this.gradle.buildFinished { println "执行阶段执行完毕" }
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

### Gradle: Project

1. Project对象
    1. 项目中的工程或Module都可以看成Project对象，根工程称为Root Project，Module称为子Project
        1. 如果在工程中或Module中存在build.gradle文件，那么它就是Project对象
        2. 如果在工程中或Module中不存在build.gradle文件，那么它就是个文件夹
    2. 对于子Project来说，一个子Project对应一个输出，输出类型是根据build.gradle文件来确定的
        1. 如果build.gradle定义application类型，则输出为apk
        2. 如果build.gradle定义library类型，则输出为aar/jar
    3. 每一个构建都是由一个或多个projects构成的。一个project到底代表什么取决于你想用Gradle做什么。举个例子，一个project可以代表一个JAR或者一个网页应用。它也可能代表一个发布的ZIP压缩包，这个ZIP可能是由许多其他项目的JARs构成的。但是一个project不一定非要代表被构建的某个东西。它可以代表一件要做的事，比如部署你的应用。每一个project是由一个或多个tasks构成的。一个task代表一些更加细化的构建。可能是编译一些classes，创建一个JAR，生成javadoc，或者生成某个目录的压缩文件。
2. Project相关Api
    1. 获取所有的Project
        ```groovy
        this.getAllprojects().eachWithIndex { Project project, int index -> println "${index == 0 ? 'Root' : '+---'} Project :${project.name}" }
        ```
    2. 获取所有的子Project
        ```groovy
        this.getSubprojects().eachWithIndex { Project project, int index -> println "+--- Project :${project.name}" }
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
        subprojects { Project project -> if (project.plugins.hasPlugin('com.android.library')) { apply from: '../publishToMaven.gradle' } }
        ```
3. Project属性Api
    1. 在根工程或gradle文件中定义全局扩展属性
        ```groovy
        // 在根工程或gradle文件中定义扩展属性
        ext { android = [compileSdkVersion : 25, buildToolsVersion : '25.0.0', versionCode : 1, versionName : '1.0.0'] }
        // 如果在gradle文件中定义扩展属性，需要在子工程引入该gradle文件，然后在子工程使用扩展属性
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
        // 在gradle.properties文件中定义全局扩展属性
        isIncludeTestModule = false
        mCompileSdkVersion = 25
        // 在settings.gradle中使用扩展属性
        if (hasProperty('isIncludeTestModule') ? isIncludeTestModule.toBoolean() : false) { include ':Test' }
        // 在build.gradle中使用扩展属性
        android {
            compileSdkVersion mCompileSdkVersion.toInteger()
            ......
        }
        ```

### Gradle: File

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
            return file(path).text
        } catch (GradleException e) {
            println 'file not found'
            return null
        }
    }
    ```
3. 文件拷贝
    ```groovy
    copy { from('build/outputs/apk/app-debug.apk'); into(getRootProject().getBuildDir()) }
    ```
4. 文件夹拷贝
    ```groovy
    copy {
        from file('build/outputs/apk/')
        into getRootProject().getBuildDir().path + '/apk/'
        exclude {}  // 可以对不需要拷贝的文件进行移除
        rename {}  // 可以对文件进行重命名
    }
    ```
5. 文件树遍历
    ```groovy
    fileTree('build/outputs/apk/') { FileTree fileTree ->
        fileTree.visit { FileTreeElement element -> println "$element.file, $element.file.name" }
    }
    ```

### Gradle: 依赖与外部命令

1. 根工程的第三方依赖
    ```groovy
    buildscript {
        // 配置工程的仓库地址
        repositories {
            google()
            jcenter()
            mavenCentral()
            mavenLocal()
            maven {
                name 'netWork'
                url 'http://localhost:8080/nexus/repositories'
                credentials { username = 'Hensen'; password = '123456' }
            }
        }
        // 配置工程的插件依赖地址
        dependencies { classpath('com.android.tools.build:gradle:3.0.1') }
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
            transitive = false // 禁止传递依赖
            force = true  // 强制使用该版本的依赖，即使有其他的相同的但版本不同的依赖
        }
        provided 'com.android.support:support-v4:26.1.0'
    }
    ```
3. 概念梳理
    1. 传递依赖: A依赖B，B依赖C，如果允许传递依赖，那么A可以使用C的内容，否则为禁止传递依赖
    2. compile(api): 参与编译时期和参与打包过程，可以通过 transitive = false 这个属性设置不传递依赖
    3. provided(compileOnly): 参与编译时期，但不参与打包过程
    4. provided应用场景
        1. 当前依赖的库只适用于编译时期生成代码的工具库
        2. 当前依赖的库已经存在于根工程的依赖，在子工程中只参与编译
    5. implementation: 类似与compile，但是不传递依赖
    6. apk: 
    7. annotationProcessor: 只在编译的时候执行依赖的库，但是库最终不打包到apk中。结合编译期注解的作用，他是用来生成代码的，本身在运行时是不需要的，如bufferknife和dagger。annotationProcessor作用是编译时生成代码，编译完真的就不需要了，compileOnly是有重复的库，为的是剃除只保留一个库，最终还是需要的。
    8. 本地aar
        ```groovy
        repositories { flatDir { dir("../${targetProject.name}/libs", "libs") } }
        dependencies { implementation(name: 'junit', ext: 'aar') }  // 单个
        new File('./app/libs').traverse(nameFilter: ~/.*\.aar/) { implementation(name: file.name.replace('.aar', ''), ext: 'aar') }  // 多个，应放入dependencies中
        ```
    9. 本地jar
        ```groovy
        implementation(files('./libs/srping.jar', './libs/hibernate.jar'))  // 文件形式
        implementation(fileTree(dir: './libs', include: ['*.jar']))  // 文件夹形式
        ```
    10. 本地so
        ```groovy
        sourceSets { main { jniLibs.srcDirs = ['libs'] } }
        // 或者直接在main目录下新建jniLibs目录，这是so文件默认的放置目录，不过不常用。值得一提的是aar包里面也可以包含so文件，但依赖这种包含so文件的aar包时不需要做特定的配置，编译时so文件会自动包含到引用AAR压缩包的APK中。
        // 但比较特殊的一点是，so文件需要放到具体的ABI目录下，不能直接放libs目录下。
        // 所有的x86/x86_64/armeabi-v7a/arm64-v8a设备都支持armeabi架构的so文件。所以为了减小包体积，为了减小apk体积，可以只保留armeabi一个文件夹。但如果你想引入多个平台的，那么需要保持so文件的数量一致，就是说armeabi文件下的每个so文件都要在armeabi-v7a下找到对应的so文件，但这样apk包的体积就会增大。
        ```
4. 调用系统指令
    ```groovy
    task(name: 'apkcopy') { doLast { exec {
                try {
                    executable('bash');
                    args('-c', "mv -f ${this.buildDir.path + '/outputs/apk'} ${'./target/apk'}");
                    println 'this command exec success'
                } catch(GradleException e) {
                    println 'this command exec error'
                }
    } } }
    ```
5. 调用脚本
    ```groovy
    task stopTomcat(type: Exec) {
        // dir
        workingDir '../tomcat/bin'
        // windows
        commandLine 'cmd', '/c', 'stop.bat'
        // linux
        commandLine './stop.sh'
    }
    ```

### Gradle: Task

1. 定义: 由于task运行于配置阶段中，因此在gradle文件中，只要执行其中一个task，则其他task都会执行一遍
    ```groovy
    // 第一种定义方式
    task helloword(group: 'hensen', description :'hello'){
        println "Hello World"
    }
    // 第二种定义方式
    this.tasks.create(name: 'helloword'){
        setGroup('hensen')
        setDescription('hello')
        println "Hello Word"
    }
    // 第三种
    task('hello') << {
        println 'Hello World'
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

### Gradle: Setting与SourceSets与Variants

1.  Setting对象: Setting对象对应项目中的工程的**settings.gradle**文件，它是gradle的初始化阶段时运行的文件
2.  SourceSets对象: sourceSets可以指定当前的工程**使用哪套资源配置**来进行不同模版的切换，比如经常用到的是闪屏界面的特效切换等
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
3.  Variants相关Api: Variants指的是**多渠道打包**出来的apk的一种统称
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

### Gradle: 自定义Plugin

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

### Gradle: Others

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

### Gradle for Android 读书笔记: 依赖管理

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
    4. **testCompile(testImplementation)**: 只在单元测试代码的编译以及最终打包测试apk时有效。
    5. **androidTestCompile**: ...
    6. **implementation**: 使用了该命令编译的依赖，对该项目有依赖的项目将无法访问到使用该命令编译的依赖中的任何程序，也就是将该依赖隐藏在内部，而不对外部公开。比如我在一个libiary中使用implementation依赖了gson库，然后我的主项目依赖了libiary，那么，我的主项目就无法访问gson库中的方法。这样的好处是编译速度会加快，推荐使用implementation的方式去依赖，如果你需要提供给外部访问，那么就使用api依赖即可。在Google IO 相关话题的中提到了一个建议，就是依赖首先应该设置为implementation的，如果没有错，那就用implementation，如果有错，那么使用api指令，这样会使编译速度增快。
    7. 此外，Android插件为每个构建variant生成一份配置，如**debugCompile(debugImplementation)**(只在debug模式的编译和最终的debug apk打包时有效)/releaseProvided。
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

### Gradle for Android 读书笔记: Variant

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
    6. **签名配置**: 将应用发布到Google Play或任何其他应用商店前需要私钥给它签名。如果你有一个付费版和免费版或针对不同用户的不同应用，就需要为每个flavor使用不同的私钥签名了，这就是签名配置出现的原因。
        1. 签名配置定义如下
            ```groovy
            android {
                signingConfigs {
                    staging.initWith(signingConfigs.debug)
                    release {
                        storeFile file("release.keystore")  // 制定了keystore文件位置
                        storePassword "secretPassword"
                        keyAlias "gradleforandroid"  // 密码别名
                        keyPassword "secretPassword"
                    }
                    // Android插件使用一个通用keystore和一个已知密码自动创建了debug配置，所以没必要为该构建类型创建一个签名配置了。
                }
            }
            ```
        2. 在构建配置文件中存储凭证不是一个好主意，更好的方式是使用Gradle配置文件。
        3. 构建类型和flavor都有一个叫signingConfig的属性，签名配置使用如下
            ```groovy
            android { buildTypes { release { signingConfig signingConfigs.release } } }
            android { productFlavors { blue { signingConfig signingConfigs.release } } }  // productFlavor的signingConfig会覆盖buildTypes的
            android { buildTypes { release {
                productFlavors.red.signingConfig signingConfigs.red
                productFlavors.blue.signingConfig signingConfigs.blue  // 但可以这样组合
            } } }
            ```

### Gradle for Android 读书笔记: 管理多模块构建

1. **解析多模块构建**
    1. 通常一个多模块项目有一个根目录，在其子文件夹中包含所有模块，这时需要settings.gradle。而每个模块可以提供自己的build.gradle文件。如果有一个library并不位于根目录，而是在根目录的libraries文件夹下，那么就需要在setting.gralde中: ``include ':app', ':libraries:library1'``。冒号是替换目录中的斜线。当在一个子目录中添加一个模块作为另一个模块的依赖时，应该总是从根目录引用它。即如果app模块依赖library1，则app的build.gradle中: ``dependencies { compile project(':libraries:library1') }``
    2. 可以通过切换到对应模块目录下来执行../gradlew taskName来执行任务(那么其他模块即使有同名任务也不会执行了)。当然也可以通过gradlew :wear:assembleDebug来只执行wear模块的assembleDebug任务。
2. **将模块添加到项目**
    1. java依赖库
        ```groovy
        // java依赖模块的build.gradle下
        apply plugin 'java'
        dependencies { compile fileTree(dir: 'libs', include: ['*.jar']) }
        // app下
        dependencies { compile project(':javalib') }
        ```
    2. android依赖库
        ```groovy
        // android依赖模块的build.gradle下
        apply plugin 'com.android.library'
        // app下
        dependencies { compile project(':androidlib') }  // 可以在app中使用该依赖库的所有类和资源了
        ```
    3. android wear
        ```groovy
        // 与常规的android app模块相比，build.gradle唯一的不同是依赖配置
        dependencies {
            compile fileTree(dir: 'libs', include: ['*.jar'])
            compile 'com.google.android.support:wearable:1.1.0'
            compile 'com.google.android.gms:play-services-wearable:6.5.87'
        }
        // 为了在android引用中使用android wear应用，需要和app一起打包。可以通过添加依赖来做到
        dependencies { wearApp project(':wear') }
        ```
    4. google app engine  // TODO:
3. **提示和最佳实践**
    1. Gradle工具窗
    2. 加速多模块构建: gradle.properties中配置 parallel 属性: ``org.gradle.parallel = true``
4. **模块耦合**

### Gradle for Android 读书笔记: 运行测试

1. **单元测试**
    1. JUnit
        ```groovy
        dependencies {
            testCompile 'junit:junit:4.12'
            testPaidCompile 'junit:junit:4.12'
        }
        ```
        ```
        app
            src
                main
                    java
                        com.example.app
                test
                    java
                        com.example.app
        然后只要运行gradlew test即可运行所有测试了。也可以针对某个variant: gradlew testDebug。
        为了避免一个测试案例失败使得整个终止，可以使用指令 gradlew test -continue。
        如果只想运行特定测试类，也可以: gradlew testDebug --tests="*.LogicTest"
        ```
    2. Robolectric: 可以测试Android SDK的功能，不需要设备或模拟器，而Junit不能
        ```groovy
        apply plugin 'org.robolectric'
        dependencies {
            compile fileTree(dir: 'libs', includes: ['*.jar'])
            compile 'com.android.support:appcompact-v7:22.2.0'
            testCompile 'junit:junit:4.12'
            testCompile 'org.robolectric:robolectirc:3.0'
            testCompile 'org.robolectric:shadows-support:3.0'
        }
        ```
        ```java
        // 也是可以在 app/src/test/java/com.example.app下的测试类下
        @RunWith(RobolectricTestRunner.class)
        @Config(mainfest = "app/src/main/AndroidManifest.xml", sdk = 18)
        public class MainActivityTest {
            @Test
            public void clickingButtonShouldChangeText() {
                AppCompactActivity activity = Robolectric.buildActivity(MainActivity.class).create().get();
                Button button = (Button)activity.findViewById(R.id.button);
                TextView text = (TextView)activity.findViewById(R.id.textview);
                button.performClick();
                assertThat(text.getText().toString(), equalTo(activity.getString(R.string.hello_robolectric)));
            }
        }
        ```
2. **功能测试**
    1. Espresso
        ```groovy
        dependencies {
            compile fileTree(dir: 'libs', includes: ['*.jar'])
            compile 'com.android.support:appcompact-v7:22.2.0'
            androidTestCompile 'com.android.support.test:runner:0.3'
            androidTestCompile 'com.android.support.test:rules:0.3'
            androidTestCompile 'com.android.support.test.espresso:espresso-core:2.2'
            androidTestCompile 'com.android.support.test.espresso:espresso-contrib:2.2'  // androidTestCompile用于功能测试，而testCompile用于单元测试
        }  // 1. 设置依赖
        defaultConfig { testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner" }  // 2. 设置测试执行器
        android { packagingOptions { exclude 'LICENSE.txt' } }  // 3. 去除去可证描述
        // 4. 测试目录改为 src/AndroidTest/java/com.example.app 。
        ```
        ```java
        // 5. 测试类示例
        @RunWith(AndroidJUnit4.class)
        @SmallTest
        public class TestingEspressoMainActivityTest {
            @Rule
            public ActivityTestRule<MainActivity> mActivityRelu = new ActivityTestRule<>(MainActivity.class);
            @Test
            public void testHelloWorldIsShown() {
                onView(withText("hello world!")).check(matches(isDisplayed));
            }
        }
        ```
        ```groovy
        // 6. 执行测试
        gradlew connectedCheck  // 会执行connectedAndroidTest和createDebugConverageReport两个任务
        ```
3. **测试覆盖率**
    1. Jacoco  // TODO:

### Gradle for Android 读书笔记: 创建任务和插件

1. **Gradle中的Groovy**
    1. Android插件被应用到构建时: ``apply plugin: 'com.android.application'`` 这段代码完全是Groovy的简写。完整版是 ``project.apply([plugin: 'com.android.application'])``
    2. dependencies代码块: ``dependencies { compile 'com.google.code.gson:gson:2.3' }`` -> ``project.denpendies({ add('compile', 'com.google.code.gson:gson:2.3'), { // configuration statements } })``
2. **任务入门**
    1. 单纯使用task来创建任务，则是设置了任务的配置，任务会在配置阶段执行，即使执行了其他任务，该任务也会执行。
        ```groovy
        task hello {
            println 'Hello, world!'
        }
        ```
    2. 为了避免在配置阶段执行，而是在执行阶段执行，可以
        ```groovy
        task hello << {
            println 'Hello, world!'
        }
        ```
    3. 多个doFirst和多个doLast是可以并存的，每个doFirst都尽量将动作添加到task的最前面，而doLast都尽量将动作添加到task的最后面。所以越需要前面的doFirst action越要写在下面，而越需要在后面的doLast action越要写在下面。
    4. mustRunAfter(注意只是执行顺序，没有真实依赖的) / dependsOn 可以用于构建依赖关系图。
    5. 使用任务优化后的签名
        ```groovy
        task getReleasePassword << {
            def password = ''
            if (rootProject.file('private.properties').exists()) {
                Properties properties = new Properties();
                properties.load(rootProject.file('private.properties').newDataInputStream());
                password = properties.getProperty('release.password');
            }
            // 如果密码仍为空则可以访问控制台
            if (!password?.trim()) {
                password = new String(System.console().readPassword("\nWhat's the secret password? "))  // readPassword返回的是字符数组
            }
            // 现在可以配置了
            android.signingConfigs.release.storePassword = password
            android.signingConfigs.release.keyPassword = password
        }
        // 在build.gradle中添加
        tasks.whenTaskAdded { task ->
            if (task.name.equals('packageRelease')) {
                task.dependsOn "getReleasePassword"
            }
        }
        ```
3. **Hook到Android插件**
    1. 方式一
        ```groovy
        android.applicationVariants.all { variant ->  /* do something */ }
        // 如果想要对Android依赖库使用相同逻辑，请使用 libraryVariants 来代替 applicationVariants
        ```
    2. 应用一: 自动重命名APK
        ```groovy
        android.applicationVariants.all { variant ->
            variant.outputs.each { output ->
                def file = output.outputFile
                output.outputFile = new File(file.parent, file.name.replace(".apk", "-${variant.versionName}.apk"))
            }
        }
        ```
    3. 应用二: 动态创建新的任务
        ```groovy
        android.applicationVariants.all { variant ->
            if (variant.install) {
                tasks.create(name: "run${variant.name.capitalize()}", dependsOn: variant.install) {
                    description "Installs the ${variant.description} and run the main launcher activity."
        } } }
        ```
    4. // TODO:
4. **创建自己的插件**
    1. **创建**
        ```groovy
        class RunPlugin implements Plugin<Project> {
            void apply(Project project) {
                project.android.applicationVariants.all { variant ->
                    if (variant.install) {
                        project.tasks.create(name: "run${variant.name.capitalize()}", dependsOn: variant.install) { /* Task definition */ }
        } } } }
        ```
    2. 使用
        ```groovy
        apply plugin: 'RunPlugin'
        ```
    3. **分发插件**: 为了分发插件，并与他人分享，需要将它转移到独立模块中，该模块会产生一个包含插件类和属性的jar文件。
        1. build.gradle文件配置
            ```groovy
            apply plugin 'groovy'
            dependencies {
                compile gradleApi()
                compile localGroovy()
            }
            group = ...
            version = ...
            // 如果想把插件推到maven仓库，需要
            apply plugin 'maven'
            uploadArchives {
                repositories {
                    mavenDeployer {
                        repository { url: uri('...') }
            } } }
            ```
        2. 文件结构
            ```
            src
                main
                    groovy
                        com
                            package
                                name
                    resources
                        META-INF
                            gradle-plugins/com.gradleforandroid.run.properties
            ```
        3. com.gradleforandroid.run.properties文件: 为了使得Gradle能找到该插件
            ```properties
            implementation-class=com.gradleforandroid.RunPlugin
            ```
        4. 在包目录下创建一个叫 RunPlugin.groovy 的文件
            ```groovy
            package com.gradleforandroid
            import org.gradle.api.Project
            import org.gradle.api.Plugin
            class RunPlugin implements Plugin<Project> {
                void apply(Project p) {
                    p.android.applicationVariant.all { variant ->
                    // Task code
            } } }
            ```
        5. 使用自定义插件
            ```groovy
            buildscript {
                repositories { flatDir { dirs 'build_libs' } }
                dependencies { classpath 'com.gradleforandroid:plugin' }
            }
            // 或者在插件上传到maven/ivy后有所不同
            apply plugin: com.gradleforandroid.RunPlugin
            ```

### Gradle for Android 读书笔记: 设置持续集成

1. jenkins / teamcity / travis ci

### Gradle for Android 读书笔记: 高级自定义创建

1. **减小apk大小**
    ```groovy
    android {
        buildTypes { release {
            minifyEnabled true  // 混淆资源
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
            shrinkResources true  // 缩减资源: 自动缩减(可能有意外，移除了过多资源，甚至移除了动态使用(现在不使用以后使用)的资源，为了避免，可以在res/raw/keep.xml中定义一些例外)
        }
        defaultConfig { resConfigs "en", "da", "nl"  // 自己手动缩减，这里是只保留 英语/丹麦语/荷兰语 的字符串。
        // 也可以处理密度集合 resConfigs "hdpi", "xhdpi", "xxhdpi", "xxxhdpi"
    } } }
    ```
    ```xml
    <!-- keep.xml示例，keep.xml最终也会从结果中剔除 -->
    <?xml version="1.0" encoding="utf-8"?>
    <resources xmlns:tools="http://..." tools:keep="@layout/keep_me,@layout/also_used_*">
    ```
2. **加速构建**
    1. 修改参数
        ```groovy
        // 在gradle.properties中添加
        org.gradle.parallel=true  // 并行构建
        org.gradle.daemon=true  // 启动并复用守护线程(android studio中默认开启，但命令行中默认关闭)
        org.gradle.jvmargs=-Xms256m -Xmx1024m  // 设置初始内存大小与最大内存大小，单位有 k/m/g
        org.gradle.configureondemand=true  // 在多模块项目中有用，可以忽略不需要的模块
        ```
    2. 通过Andoid Studio配置: Settings -> Build,Execution,Deployment -> Compiler 就能找到相关参数了
    3. Profiling: gradle [taskName\] --profile 可以指出构建中速度变慢的具体位置。会生成一份报告到 build/reports/profile 下。
    4. Jack和Jill: Jack为新的Android构建工具，可直接编译java源码为Android Dalvik的可执行格式，有自己的.jack依赖库格式，也采用了打包和缩减。Jill可以将.aar和.jar文件转换成.jack依赖库。2016年的时候还是实验阶段。只要设置了jack就不能通过proguard来缩小和混淆了。但proguardfiles依然可以用来指定某些规则与异常。
        ```groovy
        android {
            buildToolsRevison '22.0.1'
            defaultConfig { useJack = true }
            productFlavors {  // 也可以这样
                f1 { useJack = false }
                f2 { useJack = true }
            }
        }
        ```
3. **忽略Lint**
    1. Lint是静态代码分析工具，执行release构建时默认执行Lint检查，会在布局和java代码中标记潜在bug。某些时候会阻塞构建过程(其实相当于pylint等等，并非必须)，如果以前没有用过Lint的项目迁移到Gradle可能有一堆错误，这时需要禁用它。但只是临时方案，因为忽略Lint检查可能导致一些问题，如缺失翻译会导致应用崩溃。当然，更平滑的方式是在Gradle中使用ant。
        ```groovy
        android { lintOptions { abortOnError false } }
        ```
4. **Gradle中使用Ant**
    1. **在Gradle中运行Ant任务**: 直接在任务名称前面加上ant.即可。
        ```groovy
        task archive << {
            ant.echo "Ant is archiving..."
            ant.zip(destfile: "archive.zip") { fileset(dir: 'zipme') }
        }
        // 当然如果足够了解Gradle，则可以
        task gradleArchive(type: Zip) << {
            from 'zipme/'
            archiveName 'grarchive.zip'
        }
        ```
    2. **导入整个Ant脚本**: 如果已经创建了一个ant脚本来创建应用了，则可以通过ant.importBuild来导入整个构建配置。所有目标ant会自动转化为Gradle任务。这时甚至可以使用doLast和doFirst来扩展它。甚至dependsOn / mustRunAfter 之类的。
        ```xml
        <!-- ant脚本示例 -->
        <project> <target name="hello"> <echo>Hello, Ant</echo> </target> </project>
        ```
        ```groovy
        ant.importBuild 'build.xml'
        ```
        ```shell
        $ gradlew hello
        :hello
        [ant:echo] Hello, Ant
        ```
    3. **属性**: Gradle和Ant不仅可以共享Task，而且可以在Gradle定义属性，以便在Ant构建文件中使用。
        ```xml
        <target name="appVersion"><echo>${version}</echo></target>
        ```
        ```groovy
        ant.version = '1.0'
        ```
        ```shell
        $ gradlew appVersion
        :appVersion
        [ant:echo] 1.0
        ```
5. **高级应用部署**
    1. 分割apk  // TODO:

### Gradle: Others

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

### Proguard

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
3. 混淆基础1: 类名 / 内容 / 特定内容
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
4. 混淆基础2: 类成员 / 类和类成员
    1. **类成员**: 对类名不需要keep，只需要对类下的方法进行keep操作
        ```py
        # 表示keep特定类下的特定参数的方法，但类名不会被keep
        -keepclassmembernames class com.example.hensen.net.NetWorkCache{
            public void getCache(java.lang.String);
        }
        ```
    2. **类和类成员**
        | 作用范围                     | keep所指定类、成员      | keep所指定类、成员(前提是在压缩阶段没有被删除) |
        | :--------------------------- | :---------------------- | :--------------------------------------------- |
        | 类和类成员                   | -keep                   | -keepnames                                     |
        | 仅类成员                     | -keepclassmembers       | -keepclassmembernames                          |
        | 类和类成员(前提是成员都存在) | -keepclasseswithmembers | -keepclasseswithmembernames                    |
5. 应用场景1: 安卓系统本身 / jni / reflect / 自定义view / 第三方框架
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
6. 应用场景2: WebView / 序列化 / enum / ohters
    1. **WebView和Js互调接口不可混淆**
        ```py
        -keepclassmembers class ** {
            @android.webkit.JavascriptInterface public *;
        }
        ```
    2. **序列化的类不可混淆**
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
    3. **enum类的特殊性**: 以下方法会被发射调用
        ```py
        -keepclassmembers enum * {
            public static **[] values();
            public static ** valueOf(java.lang.String);
            public static ** valueOf(int);
        }
        ```
    4. **其他场景**
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
7. Android混淆机制
    1. Java代码的混淆
        1. 原因: 为了防止apk被反编译后，很容易被其他人看懂。
        2. 混淆机制的本质是什么: 把原来有具体含义的类名，变量名，方法名，修改成让人看不懂的名字
        3. 如何混淆代码:  Android工程目录下有两个文件，project.properties，proguard-project.txt。project.properties(工程目录下)有一行注释了的``proguard.config=${sdk.dir}/tools/proguard/proguard-android.txt:proguard-project.txt``，取消对该行的注释就可以了。
        4. 常见的混淆的方式有两种， **Proguard (免费)和 DexGuard (要钱)**。DexGuard 是基于 ProGuard 的。这就是为什么它是如此的原因很容易升级到DexGuard。但是这两种产品提供广泛不同的功能。ProGuard的是Java字节码通用的优化，同时 DexGuard 提供了先进的 Android 应用程序的保护。在这篇博客中，你会发现 ProGuard，并将 DexGuard 之间的差别的概述。
    2. C/C++层的混淆: native层混淆并没有统一的标准方案，常见的方法是使用**花指令**。使得native层在被反编译时出错。
    3. 资源文件的混淆: 和native层一样并没有统一的标准方案，目前有两个方案，美团和微信两种。微信的已开源 [AndResGuard](https://github.com/shwenzhang/AndResGuard/blob/master/README.zh-cn.md)

### interface org.gradle.api.Script

1. 每个gradle脚本都实现了Script接口，有一些通用的方法和属性由委托对象(delegate)提供，如构建脚本的Project对象实例和初始化脚本的Gradle对象实例
2. 通用属性
    ```groovy
    // ScriptHandler buildscript: 此脚本的脚本处理程序。您可以使用此处理程序来管理用于编译和执行此脚本的类路径。
    // Logger logger: 此脚本的记录器。您可以在脚本中使用它来编写日志消息。
    // LoggingManager logging: 在LoggingManager其可以被用于接收日志记录和控制此脚本标准输出/错误捕获。默认情况下，System.out将重定向到QUIET日志级别的Gradle日志记录系统，System.err将重定向到ERROR日志级别。
    // ResoureHandler resources: 提供对特定于资源的实用程序方法的访问，例如创建各种资源的工厂方法。
    ```
3. 通用方法
    ```groovy
    /*
     * apply / copy / copySpec / delete / exec / file / fileTree / files / javaexec / mkdir / relativePath / tarTree / zipTree / uri
     */
    // apply(closure): 使用插件或脚本为此脚本配置委托对象。delegate是**org.gradle.api.plugins.ObjectConfigurationAction**的对象
    // apply(options): 使用插件或脚本为此脚本配置委托对象。与上面一样的，只是将方法[from, to, plugin, type]变成属性了而已
    // copy(closure): 复制指定的文件。给定的闭包用于配置一个CopySpec，然后用于复制文件。例：
    // copySpec(closure): 创建一个CopySpec稍后可用于复制文件或创建存档的文件。给定闭包用于配置CopySpec此方法返回之前的闭包。
    // delete(paths): 删除文件和目录。
    // exec(closure): 执行外部命令。闭包配置一个ExecSpec。
    // exec(action): 执行外部命令。
    // file(path): 解析相对于包含此脚本的目录的文件路径。这适用于描述Project.file(java.lang.Object)
    // file(path, validation): 解析相对于包含此脚本的目录的文件路径，并使用给定的方案对其进行验证。请参阅PathValidation可能的验证列表。
    // fileTree(baseDir): ConfigurableFileTree使用给定的基目录创建新的。给定的baseDir路径按照计算Script.file(java.lang.Object)。
    // fileTree(baseDir, configureClosure): ConfigurableFileTree使用给定的基目录创建新的。给定的baseDir路径按照计算Script.file(java.lang.Object)。闭包将用于配置新文件树。文件树作为其委托传递给闭包。例：
    // fileTree(args): ConfigurableFileTree使用提供的参数映射创建一个新的。该地图将作为新文件树的属性应用。例：
    // files(paths, configureClosure): ConfigurableFileCollection使用给定路径创建新的。使用给定的闭包配置文件集合。该方法的工作原理如下所述Project.files(java.lang.Object, groovy.lang.Closure)。相对路径相对于包含此脚本的目录进行解析。
    // files(paths): 返回ConfigurableFileCollection包含给定文件的a。这适用于描述Project.files(java.lang.Object[])。相对路径相对于包含此脚本的目录进行解析。
    // javaexec(closure): 执行Java主类。闭包配置一个JavaExecSpec。
    // javaexec(action): 执行Java主类。
    // mkdir(path): 创建一个目录并返回指向它的文件。
    // relativePath(path): 返回从包含此脚本的目录到给定路径的相对路径。给定的路径对象（逻辑上）如所描述的那样被解析Script.file(java.lang.Object)，从中计算相对路径。
    // tarTree(tarPath): 创建一个FileTree包含给定TAR文件内容的new 。给定的tarPath路径可以是：
    // uri(path): 解析相对于包含此脚本的目录的URI的文件路径。按照描述评估提供的路径对象Script.file(java.lang.Object)，但支持任何URI方案，而不仅仅是'file：'URI。
    // zipTree(zipPath): 创建一个FileTree包含给定ZIP文件内容的新内容。给定的zipPath路径按照计算Script.file(java.lang.Object)。您可以将此方法与Script.copy(groovy.lang.Closure) 解压缩ZIP文件的方法结合使用。
    ```
4. org.gradle.api.logging
    ```groovy
    interface org.gradle.api.logging.ScriptHandler
    project.getBuildScript() / script.getBuildScript()
    /*
        * repositories / dependencies / getDependencies / getRepositories
        * getClassLoader / getConfigurations / getSourceFile / getSourceURI
        */
    // void dependencies​(Closure configureClosure): 配置脚本的依赖项。
    // ClassLoader getClassLoader(): 返回ClassLoader包含此脚本的类路径的内容。
    // ConfigurationContainer getConfigurations(): 返回此处理程序的配置。
    // DependencyHandler getDependencies(): 返回脚本的依赖项。
    // RepositoryHandler getRepositories(): 返回创建存储库的处理程序，用于检索脚本类路径的依赖关系。
    // File getSourceFile(): 返回包含脚本源的文件（如果有）。
    // URI getSourceURI(): 返回脚本源的URI（如果有）。
    // void repositories​(Closure configureClosure): 配置脚本依赖项的存储库。
    /// static final String CLASSPATH_CONFIGURATION  // 用于组装脚本类路径的配置的名称。
    ```
    ```groovy
    interface org.gradle.api.logging.Logging
    Logging.getLogger(Class) / Logging.getLogger(String) / project.getLogger() / task.getLogger() / script.getLogger()
    /*
        * quiet / lifecycle / debug / info / warn / error / trace / log(LogLevel, ...)
        * isLifecycleEnabled() / isQuietEnabled() / isEnabled​(LogLevel level) / isDebugEnabled / isErrorEnabled / isInfoEnabled / isTraceEnabled / isWarnEnabled / getName
        */
    // LogLevel -- DEBUG / ERROR / INFO / LIFECYCLE / QUIET / WARN
    // 部分方法 inherited from SEL4j里面的logger接口，额外添加了lifecycle/quiet
    ```
    ```groovy
    interface org.gradle.api.logging.LoggingManager
    // LoggingManager captureStandardError​(LogLevel level): 请求写入System.err的输出被路由到Gradle的日志记录系统。
    // LoggingManager captureStandardOutput​(LogLevel level): 请求写入System.out的输出路由到Gradle的日志记录系统。
    // LogLevel getLevel(): 返回当前日志记录级别。
    // LogLevel getStandardErrorCaptureLevel(): 返回写入System.err的输出将映射到的日志级别。
    // LogLevel getStandardOutputCaptureLevel(): 返回写入System.out的输出将映射到的日志级别。
    // addStandardErrorListener, addStandardOutputListener, removeStandardErrorListener, removeStandardOutputListener  --  inherited from interface org.gradle.api.logging.LoggingOutput
    ```
    ```groovy
    interface org.gradle.api.logging.StandardOutputListener
    void onOutput​(CharSequence output)
    ```
5. ResourceHandler
    1. TextResourceFactory text: Returns a factory for creating ``TextResources`` from various sources such as strings, files, and archive entries.
    2. ReadableResource bzip2(Object path): 创建指向给定路径上的bzip2压缩文件的资源。根据Project.file(java.lang.Object)计算路径。
    3. ReadableResource gzip(Object path): 创建指向给定路径上的gzip压缩文件的资源。根据Project.file(java.lang.Object)计算路径。
6. org.gradle.api.plugins
    ```groovy
    interface org.gradle.api.plugins.ObjectConfigurationAction
    // ObjectConfigurationAction from​(Object script): Adds a script to use to configure the target objects.
    // ObjectConfigurationAction plugin​(Class<? extends Plugin> pluginClass): Adds a Plugin to use to configure the target objects.
    // ObjectConfigurationAction plugin​(String pluginId): Adds a Plugin to use to configure the target objects.
    // ObjectConfigurationAction to​(Object... targets): Specifies some target objects to be configured.
    // ObjectConfigurationAction type​(Class<?> pluginClass): Adds the plugin implemented by the given class to the target.
    ```
7. org.gradle.api.file
    ```groovy
    interface org.gradle.api.file.CopySpec
    /*
     * eachFile / expand / filesMatching / filesNoMatching / filter / exclude / include / from / into / with​ / rename / setExcludes​ / setIncludes
     * isCaseSensitive / setCaseSensitive​ / getDuplicatesStrategy / setDuplicatesStrategy / getFilteringCharset / setFilteringCharset​​ / getIncludeEmptyDirs / setIncludeEmptyDirs​
     **/
    // CopySpec eachFile​(Closure closure)
    // CopySpec eachFile​(Action<? super FileCopyDetails> action)
    // CopySpec exclude​(Closure excludeSpec)
    // CopySpec exclude​(Spec<FileTreeElement> excludeSpec)
    // CopySpec exclude​(Iterable<String> excludes): Adds an ANT style exclude pattern.
    // CopySpec exclude​(String... excludes): Adds an ANT style exclude pattern.
    // CopySpec expand​(Map<String,​?> properties): Expands property references in each file as it is copied.
    // CopySpec filesMatching​(Iterable<String> patterns, Action<? super FileCopyDetails> action): Configure the FileCopyDetails for each file whose path matches any of the specified Ant-style patterns.
    // CopySpec filesMatching​(String pattern, Action<? super FileCopyDetails> action): Configure the FileCopyDetails for each file whose path matches the specified Ant-style pattern.
    // CopySpec filesNotMatching​(Iterable<String> patterns, Action<? super FileCopyDetails> action): Configure the FileCopyDetails for each file whose path does not match any of the specified Ant-style patterns.
    // CopySpec filesNotMatching​(String pattern, Action<? super FileCopyDetails> action): Configure the FileCopyDetails for each file whose path does not match the specified Ant-style pattern.
    // CopySpec filter​(Closure closure): Adds a content filter based on the provided closure.
    // CopySpec filter​(Class<? extends FilterReader> filterType): Adds a content filter to be used during the copy.
    // CopySpec filter​(Map<String,​?> properties, Class<? extends FilterReader> filterType): Adds a content filter to be used during the copy.
    // CopySpec filter​(Transformer<String,​String> transformer): Adds a content filter based on the provided transformer.
    // CopySpec from​(Object... sourcePaths): Specifies source files or directories for a copy.
    // CopySpec from​(Object sourcePath, Closure c): Specifies the source files or directories for a copy and creates a child CopySourceSpec.
    // CopySpec from​(Object sourcePath, Action<? super CopySpec> configureAction): Specifies the source files or directories for a copy and creates a child CopySpec.
    // DuplicatesStrategy getDuplicatesStrategy(): Returns the strategy to use when trying to copy more than one file to the same destination.
    // String getFilteringCharset(): Gets the charset used to read and write files when filtering.
    // boolean getIncludeEmptyDirs(): Tells if empty target directories will be included in the copy.
    // CopySpec include​(Closure includeSpec): Adds an include spec.
    // CopySpec include​(Iterable<String> includes): Adds an ANT style include pattern.
    // CopySpec include​(String... includes): Adds an ANT style include pattern.
    // CopySpec include​(Spec<FileTreeElement> includeSpec): Adds an include spec.
    // CopySpec into​(Object destPath): Specifies the destination directory for a copy.
    // CopySpec into​(Object destPath, Closure configureClosure): Creates and configures a child CopySpec with the given destination path.
    // CopySpec into​(Object destPath, Action<? super CopySpec> copySpec): Creates and configures a child CopySpec with the given destination path.
    // boolean isCaseSensitive(): Specifies whether case-sensitive pattern matching should be used.
    // CopySpec rename​(Closure closure): Renames a source file.
    // CopySpec rename​(String sourceRegEx, String replaceWith): Renames files based on a regular expression.
    // CopyProcessingSpec rename​(Pattern sourceRegEx, String replaceWith): Renames files based on a regular expression.
    // CopySpec rename​(Transformer<String,​String> renamer): Renames a source file.
    // void setCaseSensitive​(boolean caseSensitive): Specifies whether case-sensitive pattern matching should be used for this CopySpec.
    // void setDuplicatesStrategy​(DuplicatesStrategy strategy): The strategy to use when trying to copy more than one file to the same destination.
    // CopySpec setExcludes​(Iterable<String> excludes): Set the allowable exclude patterns.
    // void setFilteringCharset​(String charset): Specifies the charset used to read and write files when filtering.
    // void setIncludeEmptyDirs​(boolean includeEmptyDirs): Controls if empty target directories should be included in the copy.
    // CopySpec setIncludes​(Iterable<String> includes): Set the allowable include patterns.
    // CopySpec with​(CopySpec... sourceSpecs): Adds the given specs as a child of this spec.
    ```
    ```groovy
    interface org.gradle.api.file.DeleteSpec
    // DeleteSpec delete(Object ...file)
    // void setFollowSymlinks​(boolean followSymlinks): Specifies whether or not symbolic links should be followed during deletion.
    ```
    ```groovy
    interface org.gradle.api.file.CopySourceSpec
    // CopySourceSpec from(Object ...sourcePaths)
    // CopySourceSpec from(Object sourcePaths, Closure configureClosure)
    // CopySourceSpec from(Object sourcePaths, Action<? super CopySpec> configureAction)
    ```
    ```groovy
    interface org.gradle.api.file.CopyProcessingSpec
    // CopyProcessingSpec eachFile​(Closure closure): Adds an action to be applied to each file as it about to be copied into its destination.
    // CopyProcessingSpec eachFile​(Action<? super FileCopyDetails> action): Adds an action to be applied to each file as it is about to be copied into its destination.
    // Integer getDirMode(): Returns the Unix permissions to use for the target directories.
    // Integer getFileMode(): Returns the Unix permissions to use for the target files.
    // CopyProcessingSpec into​(Object destPath): Specifies the destination directory for a copy.
    // CopyProcessingSpec rename​(Closure closure): Renames a source file.
    // CopyProcessingSpec rename​(String sourceRegEx, String replaceWith): Renames files based on a regular expression.
    // CopyProcessingSpec rename​(Pattern sourceRegEx, String replaceWith): Renames files based on a regular expression.
    // CopyProcessingSpec rename​(Transformer<String,​String> renamer): Renames a source file.
    // CopyProcessingSpec setDirMode​(Integer mode): Sets the Unix permissions to use for the target directories.
    // CopyProcessingSpec setFileMode​(Integer mode): Sets the Unix permissions to use for the target files.
    //// inherited from org.gradle.api.file.ContentFilterable: expand, filter, filter, filter, filter
    //// org.gradle.api.Transformer: OUT transform(IN in)
    ```
    ```groovy
    //// ... ////
    ```
8. org.gradle.process
    ```groovy
    /*
     * org.gradle.process.ExecSpec
     * args / commandLine / getArgs / getArgumentProviders / setArgs / setCommandLine
     * inherited from org.gradle.process.BaseExecSpec:
     * getErrorOutput, setErrorOutput, getStandardInput, setStandardInput, getStandardOutput, setStandardOutput, isIgnoreExitValue, setIgnoreExitValue, getCommandLine
     * inherited from org.gradle.process.ProcessForkOptions:
     * copyer: copyTo
     * addter: environment, environment, executable, workingDir
     * getter: getEnvironment, getExecutable, getWorkingDir, setEnvironment
     * setter: setExecutable, setExecutable, setWorkingDir, setWorkingDir
     */
    // ExecSpec	args​(Iterable<?> args): Adds arguments for the command to be executed.
    // ExecSpec	args​(Object... args): Adds arguments for the command to be executed.
    // ExecSpec	commandLine​(Iterable<?> args): Sets the full command line, including the executable to be executed plus its arguments.
    // ExecSpec	commandLine​(Object... args): Sets the full command line, including the executable to be executed plus its arguments.
    // List<String>	getArgs(): Returns the arguments for the command to be executed.
    // List<CommandLineArgumentProvider> getArgumentProviders(): Argument providers for the application.
    // ExecSpec	setArgs​(Iterable<?> args): Sets the arguments for the command to be executed.
    // ExecSpec	setArgs​(List<String> args): Sets the arguments for the command to be executed.
    // void	setCommandLine​(Iterable<?> args): Sets the full command line, including the executable to be executed plus its arguments.
    // void	setCommandLine​(Object... args): Sets the full command line, including the executable to be executed plus its arguments.
    // void	setCommandLine​(List<String> args): Sets the full command line, including the executable to be executed plus its arguments.
    /*
     * org.gradle.process.CommandLineArgumentProvider: Iterable<String> asArguments()
     * org.gradle.process.JavaExecSpec:
     *   args / getArgs / setArgs / classpath / getClassPath / setClassPath / getArgumentProviders / getMain / setMain
     *     JavaExecSpec args​(Iterable<?> args): Adds args for the main class to be executed.
     *     JavaExecSpec args​(Object... args): Adds args for the main class to be executed.
     *     JavaExecSpec classpath​(Object... paths): Adds elements to the classpath for executing the main class.
     *     List<String> getArgs(): Returns the arguments passed to the main class to be executed.
     *     List<CommandLineArgumentProvider> getArgumentProviders(): Argument providers for the application.
     *     FileCollection getClasspath(): Returns the classpath for executing the main class.
     *     String getMain(): Returns the fully qualified name of the Main class to be executed.
     *     JavaExecSpec setArgs​(Iterable<?> args): Sets the args for the main class to be executed.
     *     JavaExecSpec setArgs​(List<String> args): Sets the args for the main class to be executed.
     *     JavaExecSpec setClasspath​(FileCollection classpath): Sets the classpath for executing the main class.
     *     JavaExecSpec setMain​(String main): Sets the fully qualified name of the main class to be executed.
     *     inherited from org.gradle.process.BaseExecSpec
     *     inherited from org.gradle.process.ProcessForkOptions
     *     inherited from org.gradle.process.JavaForkOptions
    ```
    ```groovy
    /*
     * org.gradle.process.JavaForkOptions:
     *   getBootstrapClasspath / getAllJvmArgs / getDebug / getDefaultCharacterEncoding / getEnableAssertions / getJvmArgs / getMaxHeapSize / getMinHeapSize / getSystemProperties
     *   setBootstrapClasspath / setAllJvmArgs / setDebug / setDefaultCharacterEncoding​ / setEnableAssertions​ / setJvmArgs​ / setMaxHeapSize​ / setMinHeapSize​ / setSystemProperties​
     *   bootstrapClasspath / jvmArgs / getJvmArgumentProviders / copyTo / systemProperties / systemProperty
     *     JavaForkOptions bootstrapClasspath​(Object... classpath): Adds the given values to the end of the bootstrap classpath for the process.
     *     JavaForkOptions copyTo​(JavaForkOptions options): Copies these options to the given options.
     *     List<String> getAllJvmArgs(): Returns the full set of arguments to use to launch the JVM for the process.
     *     FileCollection getBootstrapClasspath(): Returns the bootstrap classpath to use for the process.
     *     boolean getDebug(): Determines whether debugging is enabled for the test process.
     *     String getDefaultCharacterEncoding(): Returns the default character encoding to use.
     *     boolean getEnableAssertions(): Returns true if assertions are enabled for the process.
     *     List<String> getJvmArgs(): Returns the extra arguments to use to launch the JVM for the process.
     *     List<CommandLineArgumentProvider> getJvmArgumentProviders(): Command line argument providers for the java process to fork.
     *     String getMaxHeapSize(): Returns the maximum heap size for the process, if any.
     *     String getMinHeapSize(): Returns the minimum heap size for the process, if any.
     *     Map<String,​Object> getSystemProperties(): Returns the system properties which will be used for the process.
     *     JavaForkOptions jvmArgs​(Iterable<?> arguments): Adds some arguments to use to launch the JVM for the process.
     *     JavaForkOptions jvmArgs​(Object... arguments): Adds some arguments to use to launch the JVM for the process.
     *     void setAllJvmArgs​(Iterable<?> arguments): Sets the full set of arguments to use to launch the JVM for the process.
     *     void setAllJvmArgs​(List<String> arguments): Sets the full set of arguments to use to launch the JVM for the process.
     *     void setBootstrapClasspath​(FileCollection classpath): Sets the bootstrap classpath to use for the process.
     *     void setDebug​(boolean enabled): Enable or disable debugging for the process.
     *     void setDefaultCharacterEncoding​(String defaultCharacterEncoding): Sets the default character encoding to use.
     *     void setEnableAssertions​(boolean enabled): Enable or disable assertions for the process.
     *     void setJvmArgs​(Iterable<?> arguments): Sets the extra arguments to use to launch the JVM for the process.
     *     void setJvmArgs​(List<String> arguments): Sets the extra arguments to use to launch the JVM for the process.
     *     void setMaxHeapSize​(String heapSize): Sets the maximum heap size for the process.
     *     void setMinHeapSize​(String heapSize): Sets the minimum heap size for the process.
     *     void setSystemProperties​(Map<String,​?> properties): Sets the system properties to use for the process.
     *     JavaForkOptions systemProperties​(Map<String,​?> properties): Adds some system properties to use for the process.
     *     JavaForkOptions systemProperty​(String name, Object value): Adds a system property to use for the process.
     * org.gradle.process.ExecResult:
     *     ExecResult assertNormalExitValue(): Throws an ExecException if the process exited with a non-zero exit value.
     *     int getExitValue(): Returns the exit value of the process.
     *     ExecResult rethrowFailure(): Re-throws any failure executing this process.
     */
    ```
9.  org.gradle.api
    ```groovy
    enum PathValidation { DIRECTORY, FILE, EXISTS, NONE }
    ```
10. 

### interface 



### end

```groovy
// org.gradle: Classes for embedding Gradle.
// org.gradle.api: Start Here: Gradle's Project API, which is available from your build files.
// org.gradle.api.artifacts: Classes for declaring and using artifacts and artifact dependencies.
// org.gradle.api.artifacts.component: Classes that provide meta-data about software components.
// org.gradle.api.artifacts.dsl: Classes used in the artifact DSL.
// org.gradle.api.artifacts.ivy: Classes for declaring and using Ivy modules.
// org.gradle.api.artifacts.maven: Maven specific classes for dependency management.
// org.gradle.api.artifacts.query: Classes used for querying the artifacts.
// org.gradle.api.artifacts.repositories: Classes for declaring and using artifact repositories.
// org.gradle.api.artifacts.result: Classes that compose the resolution result
// org.gradle.api.artifacts.transform: Provides classes, interfaces and annotations for registering and implementing artifact transforms.
// org.gradle.api.artifacts.type: Types related to artifact type definitions.
// org.gradle.api.attributes: Classes for dealing with configuration and artifact attributes.
// org.gradle.api.attributes.java: Attributes specific to the Java ecosystem.
// org.gradle.api.capabilities: Classes for dealing with capabilities.
// org.gradle.api.component: Types for declaring and using Software Components.
// org.gradle.api.credentials: general credentials related classes.
// org.gradle.api.distribution: The main interfaces and classes of the distribution plugin.
// org.gradle.api.distribution.plugins: The the distribution plugin itself.
// org.gradle.api.dsl: DSL related classes.
// org.gradle.api.execution: Classes for managing and monitoring build execution.
// org.gradle.api.file: Classes for working with files.
// org.gradle.api.initialization: Classes for managing and monitoring build initialization.
// org.gradle.api.initialization.definition: Types related to the build definition for included builds.
// org.gradle.api.initialization.dsl: Classes used in the initialization DSL.
// org.gradle.api.invocation: Classes for invoking and monitoring gradle builds.
// org.gradle.api.java.archives: Classes for working with JAR manifests.
// org.gradle.api.logging: Classes for managing logging in Gradle.
// org.gradle.api.logging.configuration: Classes for logging configuration.
// org.gradle.api.model: Classes that operate on the Gradle model.
// org.gradle.api.plugins: The standard Plugin implementations.
// org.gradle.api.plugins.announce: A Plugin for generating announcements from your build.
// org.gradle.api.plugins.antlr: A Plugin for generating parsers from Antlr grammars.
// org.gradle.api.plugins.buildcomparison.gradle: Build comparision classes that are specific to Gradle, including comparing Gradle upgrades.
// org.gradle.api.plugins.osgi: The OSGi Plugin implementation.
// org.gradle.api.plugins.quality: Plugins which measure and enforce code quality.
// org.gradle.api.plugins.scala: A Plugin which compiles and tests Scala sources.
// org.gradle.api.provider: The interfaces for value providers.
// org.gradle.api.publish: Classes that deal with publishing artifacts.
// org.gradle.api.publish.ivy: Types that deal with publishing in the Ivy format.
// org.gradle.api.publish.ivy.plugins: Plugins for Ivy publishing.
// org.gradle.api.publish.ivy.tasks: Tasks for Ivy publishing.
```
```groovy
// org.gradle.api.publish.maven: Types that deal with publishing in the Maven format.
// org.gradle.api.publish.maven.plugins: Plugins for publishing in the Maven format.
// org.gradle.api.publish.maven.tasks: Tasks for publishing in the Maven format.
// org.gradle.api.publish.plugins: Publishing plugin.
// org.gradle.api.publish.tasks: Tasks used for publishing to a binary repository.
// org.gradle.api.reflect: Classes and API for the reflection and types.
// org.gradle.api.reporting: Classes for reporting
// org.gradle.api.reporting.components: Component reporting tasks.
// org.gradle.api.reporting.dependencies: Types responsible for generating dependency reports.
// org.gradle.api.reporting.dependents: Types responsible for generating dependents components reports.
// org.gradle.api.reporting.model: Configuration model reporting tasks.
// org.gradle.api.reporting.plugins: Plugins for reporting
// org.gradle.api.resources: Interfaces and API for the 'Resources' concept.
// org.gradle.api.specs: Classes for defining general purpose criteria.
// org.gradle.api.tasks: The standard Task implementations.
// org.gradle.api.tasks.ant: The Ant integration Task implementations.
// org.gradle.api.tasks.application
// org.gradle.api.tasks.bundling: The archive bundling Task implementations.
// org.gradle.api.tasks.compile: The compilation Task implementations.
// org.gradle.api.tasks.diagnostics: The diagnostic Task implementations.
// org.gradle.api.tasks.incremental: API classes for implementing incremental tasks.
// org.gradle.api.tasks.javadoc: The documentation generation Task implementations.
// org.gradle.api.tasks.options: Annotations for exposing task properties as command line options.
// org.gradle.api.tasks.scala: Scala Task implementations.
// org.gradle.api.tasks.testing: The unit testing Task implementations.
// org.gradle.api.tasks.testing.junit: JUnit specific testing classes.
// org.gradle.api.tasks.testing.junitplatform
// org.gradle.api.tasks.testing.logging: Types related to logging of test related information to the console.
// org.gradle.api.tasks.testing.testng: TestNG specific testing classes.
// org.gradle.api.tasks.util: Utility classes used by the standard task implementations.
// org.gradle.api.tasks.wrapper: The Gradle wrapper Task.
// org.gradle.authentication: Classes related to transport authentication protocols.
// org.gradle.authentication.aws: Classes related to transport authentication protocols for S3.
// org.gradle.authentication.http: Classes related to transport authentication protocols for HTTP.
// org.gradle.buildinit.plugins: Build init plugins.
// org.gradle.buildinit.tasks: Build init plugins.
// org.gradle.caching: Classes for build caches.
// org.gradle.caching.configuration: Classes for configuring build caches.
// org.gradle.caching.http: Classes for HTTP build cache service.
// org.gradle.caching.local: Classes for local build cache services.
// org.gradle.concurrent: Classes related to Gradle parallelism and concurrency.
// org.gradle.external.javadoc: Classes to run Javadoc.
```
```groovy
// org.gradle.ide.visualstudio: Model classes for visual studio.
// org.gradle.ide.visualstudio.plugins: Plugins for Visual Studio integration.
// org.gradle.ide.visualstudio.tasks: Task classes for visual studio.
// org.gradle.ide.xcode: Model classes for XCode.
// org.gradle.ide.xcode.plugins: Plugins for XCode integration.
// org.gradle.ide.xcode.tasks: Task classes for XCode.
// org.gradle.ivy: Component types for Ivy modules.
// org.gradle.jvm: Types for support of JVM runtime.
// org.gradle.jvm.application.scripts: Classes that enable JVM application script generation.
// org.gradle.jvm.application.tasks: Tasks for the JVM application plugin.
// org.gradle.jvm.platform: Classes for managing platform variance
// org.gradle.jvm.plugins: Base plugins that add support for JVM runtime.
// org.gradle.jvm.tasks: Tasks that add support for JVM runtime.
// org.gradle.jvm.tasks.api: Tasks supporting Gradle's "compile avoidance" feature through the generation and use of API classes and ApiJar files.
// org.gradle.jvm.test: Types for the JVM testing plugin.
// org.gradle.jvm.toolchain: Defines tools that can build things that run on the JVM.
// org.gradle.language: Model classes for managing language sources.
// org.gradle.language.assembler: Model classes for building from Assembler language sources.
// org.gradle.language.assembler.plugins: Plugins for building from Assembler language sources.
// org.gradle.language.assembler.tasks: Tasks for assembling Assembler sources for a native runtime.
// org.gradle.language.base: General purpose types for language support.
// org.gradle.language.base.artifact: Classes representing artifacts relevant to languages in general.
// org.gradle.language.base.compile: General purpose types for related to compiling.
// org.gradle.language.base.plugins: Base plugins for language support.
// org.gradle.language.base.sources: General purpose types for language sources support.
// org.gradle.language.c: Model classes for building from C language sources.
// org.gradle.language.c.plugins: Plugins for building from C language sources.
// org.gradle.language.c.tasks: Tasks for compiling C sources for a native runtime.
// org.gradle.language.coffeescript: Language support classes for CoffeeScript
// org.gradle.language.cpp: Model classes for building from C++ language sources.
// org.gradle.language.cpp.plugins: Plugins for building from C++ language sources.
// org.gradle.language.cpp.tasks: Tasks for compiling C++ sources for a native runtime.
// org.gradle.language.java: Types for Java language support.
// org.gradle.language.java.artifact: Classes representing artifacts relevant to the Java language.
// org.gradle.language.java.plugins: Base plugins that add support for Java language.
// org.gradle.language.java.tasks: Tasks that add support for Java language.
// org.gradle.language.javascript: Language support classes for javascript
// org.gradle.language.jvm: Types for support for JVM languages.
// org.gradle.language.jvm.plugins: Base plugins that add language support for JVM resources.
// org.gradle.language.jvm.tasks: Tasks for support for JVM languages.
// org.gradle.language.nativeplatform: Model classes for managing language sources.
// org.gradle.language.nativeplatform.tasks: Base classes for native language compile tasks.
```
```groovy
// org.gradle.language.objectivec: Model classes for building from Objective-C language sources.
// org.gradle.language.objectivec.plugins: Plugins for building from Objective-C language sources.
// org.gradle.language.objectivec.tasks: Tasks for compiling Objective-C sources for a native runtime.
// org.gradle.language.objectivecpp: Model classes for building from Objective-C++ language sources.
// org.gradle.language.objectivecpp.plugins: Plugins for building from Objective-C++ language sources.
// org.gradle.language.objectivecpp.tasks: Tasks for compiling Objective-C++ sources for a native runtime.
// org.gradle.language.plugins: Base plugins for the native languages.
// org.gradle.language.rc: Model classes for building from Windows Resource scripts.
// org.gradle.language.rc.plugins: Plugins for building from Windows Resource scripts.
// org.gradle.language.rc.tasks: Tasks for compiling Windows resources for a native runtime.
// org.gradle.language.routes: Language support classes for routes
// org.gradle.language.scala: Types for Scala language support.
// org.gradle.language.scala.plugins: Base plugins that add support for Scala language.
// org.gradle.language.scala.tasks: Tasks that add support for Scala language.
// org.gradle.language.scala.toolchain: Defines tools that can build scala applications.
// org.gradle.language.swift: Model classes for building from Swift language sources.
// org.gradle.language.swift.plugins: Plugins for building from Swift language sources.
// org.gradle.language.swift.tasks: Tasks for compiling Swift sources for a native runtime.
// org.gradle.language.twirl: Language support classes for twirl
// org.gradle.maven: Component types for Maven modules.
// org.gradle.model: Classes that operate upon the Gradle model.
// org.gradle.nativeplatform: Classes that model aspects of native component projects.
// org.gradle.nativeplatform.platform: Classes that allow defining a native binary platform.
// org.gradle.nativeplatform.plugins: Plugins for building native component projects.
// org.gradle.nativeplatform.tasks: Tasks for building native component projects.
// org.gradle.nativeplatform.test: API classes for testing native binaries.
// org.gradle.nativeplatform.test.cpp: API classes for C++ test integration.
// org.gradle.nativeplatform.test.cpp.plugins: Plugins for C++ test integration.
// org.gradle.nativeplatform.test.cunit: API classes for cunit integration.
// org.gradle.nativeplatform.test.cunit.plugins: Plugins for cunit testing.
// org.gradle.nativeplatform.test.cunit.tasks: Tasks for cunit integration.
// org.gradle.nativeplatform.test.googletest: API classes for Google Test integration.
// org.gradle.nativeplatform.test.googletest.plugins: Plugins for Google Test testing.
// org.gradle.nativeplatform.test.plugins: Plugin classes for generic support for testing native binaries.
// org.gradle.nativeplatform.test.tasks: Tasks for test execution.
// org.gradle.nativeplatform.test.xctest: Model classes for the XCTest plugins.
// org.gradle.nativeplatform.test.xctest.plugins: Plugins for XCTest testing.
// org.gradle.nativeplatform.test.xctest.tasks: Tasks for XCTest execution.
// org.gradle.nativeplatform.toolchain: Classes that allow C++ tool chains to be configured.
// org.gradle.nativeplatform.toolchain.plugins: Built-in tool chain support.
// org.gradle.normalization: Interfaces and API for input normalization.
// org.gradle.platform.base: General purpose types for runtime support.
// org.gradle.platform.base.binary: General purpose types for binary support.
// org.gradle.platform.base.component: General purpose types for library support.
// org.gradle.platform.base.plugins: Base plugins for software model support.
```
```groovy
// org.gradle.play: Classes that model aspects of the Play Framework support in Gradle.
// org.gradle.play.distribution: Classes related to creating a Play distribution.
// org.gradle.play.platform: Classes for managing play platform
// org.gradle.play.plugins: Plugins that add support for the Play framework.
// org.gradle.play.plugins.ide: Plugins that add support using IDEs with the Play framework.
// org.gradle.play.tasks: Task classes used for the Play Framework support in Gradle.
// org.gradle.play.toolchain: Defines tools that can build play applications.
// org.gradle.plugin.devel: Classes for assisting with plugin development.
// org.gradle.plugin.devel.plugins: Plugins for assisting with plugin development.
// org.gradle.plugin.devel.tasks: Tasks for assisting with plugin development.
// org.gradle.plugin.management: APIs to influence how plugins are resolved.
// org.gradle.plugin.use: Classes for managing plugin resolution and use.
// org.gradle.plugins.ear: Support for generating EAR archives in a Gradle build
// org.gradle.plugins.ear.descriptor: Classes for working with EAR deployment descriptors.
// org.gradle.plugins.ide: General purpose IDE types.
// org.gradle.plugins.ide.api: General ide plugin api.
// org.gradle.plugins.ide.eclipse: A Plugin for generating Eclipse files.
// org.gradle.plugins.ide.eclipse.model: Classes for the model used by the EclipsePlugin.
// org.gradle.plugins.ide.idea: A Plugin for generating IDEA files.
// org.gradle.plugins.ide.idea.model: Classes for the model used by the IdeaPlugin.
// org.gradle.plugins.javascript.base
// org.gradle.plugins.javascript.coffeescript
// org.gradle.plugins.javascript.envjs
// org.gradle.plugins.javascript.envjs.browser
// org.gradle.plugins.javascript.envjs.http
// org.gradle.plugins.javascript.envjs.http.simple
// org.gradle.plugins.javascript.jshint
// org.gradle.plugins.javascript.rhino
// org.gradle.plugins.signing: The signing plugin.
// org.gradle.plugins.signing.signatory: The signing plugin signatory types.
// org.gradle.plugins.signing.signatory.pgp: PGP signing support.
// org.gradle.plugins.signing.type: The signing plugin signature types.
// org.gradle.plugins.signing.type.pgp: PGP signing support.
// org.gradle.process: Classes for executing system and Java processes.
// org.gradle.swiftpm: Model classes that describe a Swift Package Manager package.
// org.gradle.swiftpm.plugins: Plugins that produce Swift Package Manager manifests from the Gradle model.
// org.gradle.swiftpm.tasks: Tasks that produce Swift Package Manager manifests from the Gradle model.
// org.gradle.testfixtures: Classes and interfaces for testing custom task and plugin implementations.
// org.gradle.testing.base: General purpose types for test suite support.
// org.gradle.testing.base.plugins: Plugin classes for generic support for testing.
// org.gradle.testing.jacoco.plugins: Plugins to work with the JaCoCo code coverage library.
// org.gradle.testing.jacoco.tasks: Tasks to work with the JaCoCo code coverage library.
// org.gradle.testing.jacoco.tasks.rules: Implementations for Jacoco code coverage rules.
// org.gradle.testkit.runner: Support for executing contrived Gradle builds for the purpose of testing build logic.
```
```groovy
// org.gradle.tooling: The main interfaces and classes of the Gradle tooling API.
// org.gradle.tooling.events: The interfaces and classes related to registering for event notifications and listening to dispatched events.
// org.gradle.tooling.events.configuration: Project configuration specific interfaces and classes related to event notifications.
// org.gradle.tooling.events.task: Task execution specific interfaces and classes related to event notifications.
// org.gradle.tooling.events.task.java: Task execution result interfaces specific to Java projects.
// org.gradle.tooling.events.test: Test execution specific interfaces and classes related to event notifications.
// org.gradle.tooling.events.transform: Artifact transform execution specific interfaces and classes related to event notifications.
// org.gradle.tooling.events.work: Work item execution specific interfaces and classes related to event notifications.
// org.gradle.tooling.exceptions: Exceptions thrown when using the tooling API.
// org.gradle.tooling.model: The general-purpose tooling model types, provided by the tooling API.
// org.gradle.tooling.model.build: Tooling models for the build environment, which includes information such as Gradle or Java versions.
// org.gradle.tooling.model.cpp: Types that represent the tooling model for C++ projects.
// org.gradle.tooling.model.eclipse: Eclipse-centric tooling models.
// org.gradle.tooling.model.gradle: The tooling models for Gradle builds and projects.
// org.gradle.tooling.model.idea: IntelliJ IDEA centric tooling models.
// org.gradle.tooling.model.java: Java-specific details for tooling models.
// org.gradle.tooling.provider.model: Interfaces and classes that allow tooling models to be made available to the tooling API client.
// org.gradle.vcs: Packages for version control systems.
// org.gradle.vcs.git: The API for dealing with Version Control Systems in Gradle.
// org.gradle.work: Classes used for implementing units of work.
// org.gradle.workers: Workers allow running pieces of work in the background, either in-process in isolated classloaders or out-of-process in reusable daemons.
```
