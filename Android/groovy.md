- [links](#links)
- [特性1](#%e7%89%b9%e6%80%a71)
- [变量](#%e5%8f%98%e9%87%8f)
- [字符串](#%e5%ad%97%e7%ac%a6%e4%b8%b2)
- [布尔求值](#%e5%b8%83%e5%b0%94%e6%b1%82%e5%80%bc)
- [特性2](#%e7%89%b9%e6%80%a72)
- [逻辑控制](#%e9%80%bb%e8%be%91%e6%8e%a7%e5%88%b6)
- [函数](#%e5%87%bd%e6%95%b0)
- [闭包(groovysh_evaluate$_run_closure1)](#%e9%97%ad%e5%8c%85groovyshevaluaterunclosure1)
- [列表(java.lang.ArrayList)](#%e5%88%97%e8%a1%a8javalangarraylist)
- [映射(java.util.LinkedHashMap)](#%e6%98%a0%e5%b0%84javautillinkedhashmap)
- [范围(groovy.lnag.IntRange)](#%e8%8c%83%e5%9b%b4groovylnagintrange)
- [类/接口/抽象类](#%e7%b1%bb%e6%8e%a5%e5%8f%a3%e6%8a%bd%e8%b1%a1%e7%b1%bb)
- [元编程](#%e5%85%83%e7%bc%96%e7%a8%8b)
- [Json操作](#json%e6%93%8d%e4%bd%9c)
- [xml操作](#xml%e6%93%8d%e4%bd%9c)
- [文件操作](#%e6%96%87%e4%bb%b6%e6%93%8d%e4%bd%9c)
- [正则表达式](#%e6%ad%a3%e5%88%99%e8%a1%a8%e8%be%be%e5%bc%8f)
- [数据库](#%e6%95%b0%e6%8d%ae%e5%ba%93)
- [特性3](#%e7%89%b9%e6%80%a73)
- [扩展的方法1: io](#%e6%89%a9%e5%b1%95%e7%9a%84%e6%96%b9%e6%b3%951-io)
- [扩展的方法2: collection](#%e6%89%a9%e5%b1%95%e7%9a%84%e6%96%b9%e6%b3%952-collection)
- [扩展的方法3: lang](#%e6%89%a9%e5%b1%95%e7%9a%84%e6%96%b9%e6%b3%953-lang)
- [扩展的方法5: sql](#%e6%89%a9%e5%b1%95%e7%9a%84%e6%96%b9%e6%b3%955-sql)
- [扩展的方法6: time](#%e6%89%a9%e5%b1%95%e7%9a%84%e6%96%b9%e6%b3%956-time)
- [扩展的方法7: awt](#%e6%89%a9%e5%b1%95%e7%9a%84%e6%96%b9%e6%b3%957-awt)

### links

* 参考博客
    * [语法基础——Groovy语法基础](https://blog.csdn.net/qq_30379689/article/details/81200026) finished
    * [groovy了解](https://blog.csdn.net/u011861874/article/category/8297824)
    * [拥抱 Android Studio 之三：溯源，Groovy 与 Gradle 基础](http://blog.bugtags.com/2016/01/04/embrace-android-studio-groovy-gradle/) finished
    * [Groovy脚本基础全攻略](https://blog.csdn.net/yanbober/article/details/49047515)
* 参考文档
    * [Groovy Documentation：Groovy 的详细介绍文档](http://www.groovy-lang.org/documentation.html)
    * [Groovy API Reference：Groovy 的 API 文档，必要的时候查阅](http://www.groovy-lang.org/api.html)
    * [Groovy脚本基础全攻略](https://blog.csdn.net/yanbober/article/details/49047515)
    * [Groovy中文官网](http://groovy-lang0org.icopy.site/groovy-dev-kit.html)
    * [Groovy中文文档1](http://docs.groovy-lang.org/latest/html/groovy-jdk/java)
    * [Groovy中文文档2](http://docs.groovy-lang.org/latest/html/gapi/groovy/)
    * [Groovy中文文档3](https://docs.groovy-lang.org/docs/latest/html/documentation/)

### 特性1

1. 使用groovy的groovysh工具可以获得代码提示，获得提示的方法就是输入``'abc'.``，然后按tab键
2. groovyConsole 图形工具
3. groovy -e "println 'smg'" 简单的指令执行
4. groovy自动导入一些常用包: java.util.\*; java.lang.\*; java.io.\*; java.net.\*; java.math.BigDecimal; java.math.BigInteger; groovy.lang.\*; groovy.util.\*;
5. 安全导航操作符 ``?.``
6. 我们不想处理的或者不适合在代码的当前层次处理的错误异常可以不处理，不像java一定得catch或者throws
7. 函数最后一行就是返回值，不一定得有 return
8. 类和方法默认是 public
9. 静态方法中 this 指代 Class 对象，如下面的 learn 方法就可以使用链式调用了
    ```groovy
    class Wizard { def static learn(trick, action) { /* ... */; this } }
    Wizard.learn(...).learn(...).learn(...)
    ```
10. 可以使用具体参数初始化 JavaBean。下面两个是等价的
    ```java
    public class Car {
        private int miles;
        private final int year;
        public Car(year) { this.year = year; }
        // 省略了 // getYear // getMiles // setMiles
    }
    ```
    ```groovy
    class Car {
        def miles = 0  // 如果想让 miles 变为 private ，即 setter 只能在类内进行，那么可以自己写 setter 来抛出错误(不知道需不需要一起重写 getter)
        final year
        Car(year) { this.year = year }
        // 默认提供了 getYear | getMiles | setMiles
    }
    ```
11. 注意使用 getClass 好于使用 class ，因为 Map 等类对其进行了特殊化处理
12. ``import java.nio.file.Files as JFiles``
13. ==即equals或者是实现了Comparable接口的compareTo，而is才表示引用是否相等: a.is(b)
14. 编译时类型检查默认关闭: groovy编译器不会验证类型，相反它只是强制类型转换，然后将其留给运行时处理。即x=y等价于x=(ClassOfx)y
15. groovy中的{}不是新作用域而是闭包
16. 类型初始化器
    ```groovy
    class Test {
        def a = 3;  // 这个分号必不可少，否则下面的初始化器会被误认为是闭包
        { println 'Instance Initializer called' }
    }
    println new Test()
    ```
17. groovy创建基本类型的数组
    ```groovy
    // int[] a = new int[]{1, 2, 3}  // 报错
    int[] a = [1, 2, 3]
    def b = [1, 2, 3] as int[]
    ```
18. **多方法机制**: 导致不同的多态
19. **静态类型检查**: @groovy.transform.TypeChecked(可以修饰类、方法、闭包)，并指定方法或者闭包的形参类型；如果使用instanceof检查类型，之后不必进行类型转换。修饰类时如果不想检查某些方法，可以给该方法添加@groovy.transform.TypeChecked(@groovy.transform.TypeCheckingMode.SKIP)来跳过
20. **静态编译**: @groovy.transform.CompileStatic
21. 类静态字段: ``class Person { @PackageScope String name }``

### 变量

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

### 字符串

1. 无格式定义的字符串: 指的是输出的时候，字符串不会带有原本输入的格式 ``def name='Hensen'``
2. 有格式定义的字符串: 输出的时候，会按照原本定义的格式进行输出
    ```groovy
    def name = '''line one
    line two'''
    ```
3. GString: groovy提供新的字符串类型GString，用双引号定义的字符串表示可拓展的字符串
    ```groovy
    def val = 'John'
    def name = /Hensen ${val}/
    def say = "${name} say : Hello groovy"
    println say  // Hensen John say : Hello groovy
    println say.class  // class org.codehaus.groovy.runtime.GStringImpl
    def sum = "${2 + 3}"
    println sum  // 5
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
    println 'It\'s a rainy day in Seattle'
    println 'It\'s a rainy day in Seattle' - 'rainy'  // String重载了minus方法
    ```
5. 注意 execute
    ```groovy
    println 'git --help'.execute().text  // 输出在命令行执行 git --help 的结果
    // execute 会创建一个 groovy 的扩展类 java.lang.ProcessImpl 的实例，相当于对 Runtime.getRuntime().exec 创建的 Process 的一层封装。
    // .text 相当于 .getText 方法
    // .execute().getClass().name 是 java.lang.UNIXProcess(unix) | java.lang.ProcessImpl(win)
    // 如果只是想等指令执行完毕 .execute().waitFor() 或者 .execute().waitForOrKill(millisecond_timeout)
    // 另外如果在 windows 下想执行 dir 指令，需要 'cmd /C dir'.execute() ，因为 dir 不是程序，而在 unix 上 'ls -l'.execute() 却可以，因为 ls 就是一个程序。
    ```

### 布尔求值

1. groovy 中对象如果为 null 则算是 false ，如果对象类型是集合或者数组之类的且为空这也算是 false，否则可以算是 true
2. 主要如表
    | 类型         | 真                |
    | :----------- | :---------------- |
    | Boolean      | true              |
    | Collection   | 不空              |
    | Map          | 不空              |
    | Matcher      | 至少一个匹配      |
    | Character    | 值不为0           |
    | CharSequence | 长度大于0         |
    | Object[]     | 长度大于0         |
    | Number       | Double值不为0     |
    | Enumeration  | hasMoreElements() |
    | Iterator     | hasNext()         |
    | 其他引用类型 | 引用不为null      |
3. 除了groovy内建的布尔求值约定，在自己的类中，还可以通过 asBoolean 方法来编写自己的布尔求值

### 特性2

1. 操作符重载
    ```groovy
    for (ch = 'a'; ch < 'd'; ch++) println(ch)
    for (ch in 'a'..'c') println(ch)  // ++ 操作符和 for-in 映射的都是 String 类的 next 方法
    ['hello'] << 'there'  // << 操作符转换为 Collection 类上的 leftShift 方法
    // >> 映射为 rightShift 方法
    // + 映射为 plus 方法
    // - 映射为 minus 方法
    // * multiply
    // -- preivous
    for (str in 'held'..'helm') println(str)
    ```
2. 自动装箱: groovy的动态类型特性，groovy会根据实例的使用方式来决定将其视为基本类型还是包装类型。
    ```groovy
    int a = 5
    println a.getClass().name  // Integer
    ```
3. enum与java5基本一致，即类型安全、可打印、可序列化等特性。
4. 变长参数: 类似java的...；数组作为末尾形参
5. groovy中定义和使用注解的方法与java相同，但groovy对java中与编译相关的注解的处理方式不同，如groovy会忽略@Override
6. 静态导入特性与java一致
7. 方便使用的注解
    1. ``@Canonical``: 如果需要重写的toString方法只是简单的显示以逗号风格的字段值
        ```groovy
        import groovy.transform.*
        enum SEX { WOMAN, MAN, UNKNOWN }
        @Canonical(excludes="lastName, age")
        class Person { def firstName, lastName, age, sex }
        println new Person(firstName: 'Sara', lastName: 'Walker', age: 49, sex: SEX.MAN)  // Person(Sara, MAN)
        ```
    2. ``@Delegate``: 当派生类是真正可替换的且可代替基类使用时，继承才显示出其优势。存粹的代码复用的角度来看，委托要优于继承。
        ```groovy
        class Worker {
            def work = { println 'get work done' }
            def analyze = { println 'analyze...' }
            def writeReport = { println 'get report written' }
        }
        class Expert { def analyze = { println 'expert analyze...' } }
        class Manager {
            @Delegate Expert expert = new Expert()
            @Delegate Worker worker = new Worker()  // 这里引入的analyze会被已有的覆盖
        }
        def bernie = new Manager()
        bernie.analyze()  // expert analyze...
        bernie.work()  // get work done
        bernie.writeReport()  // get report written
        ```
    3. ``@Immutable``: 不可变对象天生是线程安全的，将其字段标记为final是很好的实践选择。使用@Immutable修饰的类的字段会被groovy标记为final，而且额外添加toString、equals、hashCode方法
    4. ``@Lazy``: 推迟创建耗时对象，而且对象变为volatile，且确保创建期间是线程安全的
        ```groovy
        class Heavy { def size = 10; Heavy() { println "creating Heavy with size: $size" } }
        class AsNeeded {
            def value
            @Lazy Heavy heavy1 = new Heavy()
            @Lazy Heavy heavy2 = { new Heavy(size: value) }()
            AsNeeded() { println "created AsNeeded with value: $value" }
        }
        def asNeeded = new AsNeeded(value: 1000)
        println "$asNeeded.heavy1.size\n$asNeeded.heavy1.size\n$asNeeded.heavy2.size"
        // created AsNeeded with value: null
        // creating Heavy with size: 10
        // creating Heavy with size: 10
        // 10
        // 10
        // 1000
        ```
    5. ``@Newify``: 实现Ruby或Python风格的构造器(new变成方法和根本不需要new)
        ```groovy
        @Newify([Person, CreditCard])
        def fluentCreate() {
            println Person.new(firstName: 'John', lastName: 'Doe', age: 20)
            println Person(firstName: 'John', lastName: 'Doe', age: 20)
            println CreditCard('1234-5678-1234-5678', 2000)
        }
        fluentCreate()
        ```
    6. ``@Singleton``: 增加静态字段instance和静态方法getInstance以及默认的私有构造函数(自己添加其他构造函数需要加上strict=false)，instance字段类型与类相同，且是线程安全的，而且可以惰性创建，在第一次调用时创建
        ```groovy
        @Singleton(lazy=true, strict=false)
        class TheUnique {
            private TheUnique() { println 'Instance created' }
            def hello = { println 'hello' }
        }
        println 'Accessing TheUnique'  // Accessing TheUnique
        TheUnique.instance.hello()  // Instance created\nhello
        TheUnique.instance.hello()  // hello
        ```
    7. ``@InheritConstructors``: 默认实现父类相关的多个构造函数
8. 如果方法形参最后一个是闭包，那么可以使用这样的方式调用 ``0.upto(2) { println "$it " }``
9. groovy不支持``try(BufferedReader reader = Files.newBufferedReader(Paths.get("/path/to/file"), Charset.forName("UTF-8"))) { /*...*/ } catch()...``这样的语法，但可以这样
    ```groovy
    new File('/path/to/file').eachLine('UTF-8') { println it }
    new File('/path/to/file').withReader('UTF-8') { reader -> reader.eachLine { println it } }
    ```
10. 静态类基本与Java一致，但是非静态内部类的初始化有差别
    ```groovy
    // 静态内部类
    class A { static class B {} }
    new A.B()
    // 匿名内部类
    import java.util.concurrent.CountDownLatch
    import java.util.concurrent.TimeUnit
    CountDownLatch called = new CountDownLatch(1)
    Timer timer = new Timer()
    timer.schedule(new TimerTask() { void run() { called.countDown() } }, 0)
    assert called.await(10, TimeUnit.SECONDS)
    // 非静态内部类
    public class X {
        public class X {}
        public X foo() { return new X() }
        public static X createX(Y y) { return new X(y) }
    }
    ```
11. java/groovy的lambda/闭包与方法引用
    ```java
    Runnable run = () -> System.out.println("Run");
    list.forEach(System.out::println);
    ```
    ```groovy
    Runnable run = { println 'run' }
    list.each { println it } // or list.each(this.&println)
    ```
12. 类型转换
       ```groovy
        println ((char) 'cx') == 'c'  // org.codehaus.groovy.runtime.typehandling.GroovyCastException
        assert ((char) "c").class == Character
        assert ("c" as char).class == Character
        assert ("c".asType(char)).class == Character
        assert ('cx' as char) == 'c'
        assert 'cx'.asType(char) == 'c'
       ```
13. groovy中装箱由于扩展，java中相反
       ```groovy
       void m(long i) { println "in m(long)" }  // java中优先调用
       void m(Integer i) { println "in m(Integer)" }  // groovy中优先调用
       int i
       m(i)
       ```
14. conversion: http://groovy-lang0org.icopy.site/differences.html

### 逻辑控制

1. switch-case
    ```groovy
    def x = 5.2
    def result
    switch (x){
        case 'you': result = "you"; break
        case [3,4,5,"list"]: result = "inList"; break
        case 12..30: result = "12 to 30"; break
        case Integer: result = "Integer Params"; break
        case BigDecimal: result = "BigDecimal Params"; break
        default: result = "default result"
    }
    println result //BigDecimal Params
    ```
2. for
    ```groovy
    // 遍历范围
    for (i in 0..9) println i
    // 遍历集合
    for (i in [0,1,2,3,4,5]) println i
    // 遍历Map
    for (i in ["one":1,"two":2,"three":3]) println i.key + " " + i.value
    // 普通遍历
    for (int i = 0; i < 3; i++) println i
    // 特殊遍历
    0.upto(2) { print "$it " }  // upto产生的方法接受一个闭包，等价于 0.upto(2, { print "$it " })
    3.times { print "$it " }
    0.step(10, 2) { print "$it " }
    // for-each: 注意必须有类型声明或者def声明
    for (String a : ['a', 'b', 'c']) println a
    ```
3. if / else if / else
4. 三元运算符
5. while
6. try-catch
    ```groovy
    def openFile(fileName) {
        new FileInputStream(fileName)
    }
    try {
        openFile('./nonExistFile.txt')
    } catch (FileNotFoundException ex) {  // 如果没有类型声明，则捕获所有Exception，但不包括Error和Throwable，需要 catch (Throwable th)
        println 'deal with: ' + ex
    }
    ```

### 函数

1. 函数创建
    ```groovy
    def method1 = { println("Hello World") }
    def method2(int a) { println "get $a" }
    int method3(int b) { a + 10 }
    ```
2. 具名实参与多余参数处理: 多余的参数如果是键值对形式会假设第一个参数是Map，然后交给它
    ```groovy
    class Robot {
        def type, height, width  // 一个个的使用 def 来声明也可以
        def access = { location, weight, fragile -> println("Received fragile: $fragile, weight: $weight, location: $location") }
    }
    Robot robot = new Robot(height: 15, width: 21, type: "Robot Type 1")  // 这里的初始化是必须有对应的构造函数或者无参构造函数的时候执行
    println "$robot.type, $robot.height, $robot.width"  // Robot Type 1, 15, 21
    robot.access(x: 30, y: 20, z: 10, 50, true)  // Received fragile: true, weight: 50, location: [x:30, y:20, z:10]
    robot.access(50, true, x: 30, y: 20, z: 10)  // Received fragile: true, weight: 50, location: [x:30, y:20, z:10]
    robot.access(1, 2, 3)  // Received fragile: 3, weight: 2, location: 1
    robot.access(1, 2, a: 3, b: 4)  // Received fragile: 2, weight: 1, location: [a:3, b:4]
    robot.access(1, a: 3, b: 4, 2)  // Received fragile: 2, weight: 1, location: [a:3, b:4]
    robot.access(2, a: 3, b: 4, 1)  // Received fragile: 1, weight: 2, location: [a:3, b:4]
    // 这种特性有点混乱，最好还是有类型声明的，或者直接将第一个形参显式的指定为 Map
    ```
3. 可以有默认参数，但默认参数一定得在其他参数后面。groovy会将末尾的数组与具有默认值的参数视为可选参数
4. 多返回值: 可以返回一个数组，然后多个接受者以 (rec1, rec2, ..., recn) = splitStr("a,b,c", ",") 这样的形式来接受。还可以使用这样的特性来交换变量 (a, b) = [b, a]。多余的接受者会收到 null ，多余的返回值会丢弃。还可以声明类型，如 def (String a, int b) = ... 。如果多余的变量不能设为 null ，那么会抛出错误。在 groovy 中，一个数字会尽可能的视为 int ，而不是 Integer。

### 闭包(groovysh_evaluate$_run_closure1)

1. 闭包
    ```groovy
    def method = {println "Hello groovy"}  // 无参闭包
    def method2 = {String name -> println "Hello ${name}"}  // 有参闭包
    def method3 = {println "Hello ${it}"}  // 默认参数闭包
    def method4 = {return "Hello ${it}"}  // 带返回值闭包
    def name = "groovy"  // 闭包的调用
    method.call()
    method2(name)
    ```
2. 闭包函数
    ```groovy
    int fab (int number) {
        int result = 1
        1.upto(number, { num -> result *= num })  // 执行1-number的闭包
        // number.downto(1, { num -> result *= num })  // 执行number-1的闭包
        // number.times { num -> num == 0 ? result += 0 : result *= num }  // 执行0-number的闭包
        result
    }
    ```
3. 字符串闭包函数
    ```groovy
    def intro = "my name is Hensen,my age is 18"
    // 找到第一个符合条件的字符
    println intro.find { String s -> s.isNumber() }  // 1
    // 找到所有符合条件的字符
    println intro.findAll { String s -> s.isNumber() }  // [1, 8]
    // 有一项字符符合即可
    println intro.any { String s -> s.isNumber() }  // true
    // 所有字符必须符合条件
    println intro.every { String s -> s.isNumber() }  // false
    //将字符串转换成集合
    println intro.collect { it.toUpperCase() }  // [M, Y,  , N, A, M, E,  , I, S,  , H, E, N, S, E, N, ,, M, Y,  , A, G, E,  , I, S,  , 1, 8]
    //遍历所有字符
    intro.each { print it.toUpperCase() }  // MY NAME IS HENSEN,MY AGE IS 18
    ```
4. 闭包关键字
    1. this: 代表当前闭包定义处的类
    2. owner: 代表当前闭包定义处的类或者对象
    3. delegate: 代表任意对象，默认与owner一致
5. outer里的this、owner、delegate表示同一个对象，inner的this表示outer，owner与delegate表示inner
    ```groovy
    def outer = {
        println "outer this:" + this
        println "outer owner:" + owner
        println "outer delegate:" + delegate
        def inner = {
            println "inner this:" + this
            println "inner owner:" + owner
            println "inner delegate:" + delegate
        }
        inner.call()
    }
    outer.call()
    // outer this:Chapter4o4@f48007e
    // outer owner:Chapter4o4@f48007e
    // outer delegate:Chapter4o4@f48007e
    // inner this:Chapter4o4@f48007e
    // inner owner:Chapter4o4$_run_closure2@11cfefda
    // inner delegate:Chapter4o4$_run_closure2@11cfefda
    ```
6. 委托策略: delegate关键字跟委托策略有关，委托策略有四种
    1. DELEGATE_FIRST: 先从Delegate去找委托属性，再从Owner去找委托属性
    2. DELEGATE_ONLY: 只从Delegate去找委托属性
    3. OWNER_FIRST: 先从Owner去找委托属性，再先从Delegate去找委托属性
    4. OWNER_ONLY: 只从Owner去找委托属性
    5. 例子
        ```groovy
                class Student {
            String name
            def content = { "this.name: ${this.name}, owner.name: ${owner.name}, delegate.name: ${delegate.name}, name: ${name}" }
            // def content = { name = 10; "this.name: ${this.name}, owner.name: ${owner.name}, delegate.name: ${delegate.name}, name: ${name}" }  // 所有的 name 都变成了 10，输出是 this.name: 10, owner.name: 10, delegate.name: 10, name: 10
            String toString() { content.call() }
        }
        class Teacher { String name }
        def stu = new Student(name: "HensenStudent")
        def tea = new Teacher(name: "HensenTeacher")
        println stu.toString()  // this.name: HensenStudent, owner.name: HensenStudent, delegate.name: HensenStudent, name: HensenStudent
        stu.content.delegate = tea
        stu.content.resolveStrategy = Closure.DELEGATE_FIRST
        println Closure.OWNER_FIRST + ", " + Closure.DELEGATE_FIRST + ", " + Closure.OWNER_ONLY + ", " + Closure.DELEGATE_ONLY + ", " + Closure.TO_SELF  // 0, 1, 2, 3, 4
        println stu.toString()  // this.name: HensenStudent, owner.name: HensenStudent, delegate.name: HensenTeacher, name: HensenTeacher
        ```
7. 科里化
    ```groovy
    def tellFortunes(closure) {
        Date date = new Date("09/20/2012")
        postFortune = closure.curry(date)
        postFortune "Your day is filled with ceremony"
        postFortune "They're features, not bugs"
    }
    tellFortunes() { date, fortune -> println "Fortune for ${date} is '${fortune}'" }
    // curry可以科里化前面的k个参数，如果想要科里化中间或者后面的参数需要使用ncurry传入参数位置与参数值
    ```
8. 重要属性: maximumNumberOfParameters / parameterTypes / owner / delegate / this / resolveStrategy
9.  重要方法: rcurry(val) / ncurry(n, val) / ncurry(n, Object... vals) / curry(val) / call() / call(params)
    ```groovy
    c = { println 'execute c' }
    b = c << { println 'before c' }
    a = b >> { println 'after c' }
    a()
    ```
10. 如果明确希望闭包不接受参数，得使用``{ -> /*...*/ }``这样的语法，否则像``{ /*...*/ }``这样的默认会有一个参数it传入
11. 尾递归
    ```groovy
    def factorisl
    factorial = { int number, BigInteger theFactorial ->
        number == 1 ? theFactorial : factorial.trampoline(number - 1, theFactorial * number)
    }.trampoline()
    ```
12. 记忆化: memoize() / memoizeAtMost / memoizeAtLeast / memoizeAtLeastBetween ，而且是线程安全的

### 列表(java.lang.ArrayList)

1. 定义
    ```groovy
    def list = [1, 2, 3, 4, 5, 6, 7]  // 定义列表
    def array = [1, 2, 3, 4, 5, 6, 7] as int[]  // 定义数组
    int[] array = [1, 2, 3, 4, 5, 6, 7]  // 定义数组
    println "${list.toListString()}; ${list[-1]}; ${list[1..4]}; ${list[-6..-3]}"
    def subList = list[2..5]  // 不是副本，连浅复制都算不上
    println subList.dump()  // 列出详细信息
    println list.join(' ')
    println [['Be', 'Productive'], 'In', 'Groovy'].flatten()  // 拉平的数组，即 ['Be', 'Productive', 'In', 'Groovy']
    println list.reverse().join(' ')
    ```
2. 增
    ```groovy
    def list = [1, 2, 3, 4]
    list.add(5)
    list << 6
    def list2 = list + 7
    ```
3. 删
    ```groovy
    def list = [1, 2, 3, 4]
    list.remove(0)
    list.remove((Object)4)
    list.removeAt(0)
    list.removeElement(4)
    list.removeAll { it % 2 == 0 }
    def list2 = list - [2, 3]
    ```
4. 排
    ```groovy
    def list = [1, 5, -4, 8, 6, 2]
    list.sort()
    list.sort { a, b -> a == b ? 0 : Math.abs(a) > Math.abs(b) ? 1 : -1 }
    ['abc', '2', 'qwe', 'apple', 'java'].sort { it.size() }
    ```
5. 列表查操作
    ```groovy
    def list = [1,5,-4,8,6,2]
    println list.find { it % 2 == 0 }
    println list.findAll { it % 2 == 0 }
    println list.any { it % 2 == 0 }
    println list.every { it % 2 == 0 }
    println list.min()
    println list.max()
    println list.count { it % 2 == 0 }
    ```
6. 遍历
    ```groovy
    [1, 2, 3].each { println "$it " }
    [3, 2, 1].reverseEach { println "$it " }
    [1, 2, 3].eachWithIndex { element, index -> println "$index: $element" }
    def resultList = list.collect { it * 2 }  // 相当于python的map
    def firstTargetElement = list.find { it == 2 }
    def targetList = list.findAll { it % 2 == 0 }
    ['abc', 'cdef', 'ghissmg'].collect({ it.size() }).sum()  // 使用each需要三行
    println(['abc', 'cdef', 'ghissmg'].inject(0) { carryOver, element -> carryOver + element.size() })
    println ['abc', 'cdef', 'ghissmg']*.size()  // 3, 4, 7 ，即类似于list.collect {it.size()}
    def words = { a, b, c, d -> println "$a $b $c $d" };  words(*list)
    list.collectEntries({it.key, it.val})  // list to map
    list.inject([:], { map, item -> map << [(item.key): item.val] })  // list to map
    ```

### 映射(java.util.LinkedHashMap)

1. 定义
    ```groovy
    def colors = [red: '#ff0000', green: '#00ff00', blue: '#0000ff']  // 如果有特殊符号的名称作为key，则需要加引号
    colors.yellow = '#ffff00'  // 默认找不到字段则为新增字段
    colors.complex = [a: 1, b: 2]
    println colors.blue + "\n" + colors.yellow
    def key = 'C++'
    def map2 = [key: 'value']
    println "${colors["red"]}, ${colors.green}, ${map2.'C++'}"
    ```
2. 遍历
    ```groovy
    def map = [1: [name : 'Hensen', age: '20'], 2: [name : 'Jack', age: '22'], ]
    map.each { def person -> println "the person name : ${person.key}" + "the person age : ${person.value}" }
    map.eachWithIndex{ person, index -> println "the index : ${index}" + "the person name : ${person.key}" + "the person age : ${person.value}" }
    map.eachWithIndex{ key, value, int index -> println "the index : ${index}" + "the person name : ${key}" + "the person age : ${value}" }
    map.collect
    map.reverseEach
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
4. 其他的一些便捷方法
    ```groovy
    println(map.any { false })  // false
    println(map.every { true })  // true
    map = [a1: 'aa', a2: 'ab', a3: 'ac', b1: 'ba', b2: 'bb', b3: 'bc', c1: 'ca', c2: 'cb', c3: 'cc']
    groupMap = map.groupBy { it.value[0] }
    groupMap.each { label, map -> println "$label: ${map.collect { key, element -> element }.join(', ')}" }
    // a: aa, ab, ac
    // b: ba, bb, bc
    // c: ca, cb, cc
    ```

### 范围(groovy.lnag.IntRange)

1. 定义
    ```groovy
    def range = 1..10
    def range2 = 1..<11
    println "$range[0]\n$range.contains(2)\n$range.from\n$range.to"
    ```
2. 循环
    ```groovy
    range.each { println it }
    for (i in range) { println i }
    ```
3. 匹配
    ```groovy
    def getGrade(Number number) {
        def result
        switch (number){
            case 0..<60: result = "不及格"; break
            case 60..<90: result = "优秀"; break
            case 90..100: result = "接近满分"; break
        }
        return result
    }
    ```

### 类/接口/抽象类

1. 默认是 public
2. 实现接口(抽象类也是这样的方法)
    1. 匿名接口 ``new Thread( { println Thread.currentThread().name } as Runnable ).start()``
    2. 重复使用
        ```groovy
        def showThreadName = { println Thread.currentThread().name }
        new Thread(showThreadName as Runnable).start()
        import java.util.concurrent.*
        ExecutorService service = Executors.newCachedThreadPool()
        Future<String> result2 = service.submit(showThreadName as Callable<Void>)
        result2.get()
        service.shutdown()
        def timer = new Timer()
        timer.schedule(showThreadName as TimerTask, 1000)  // TimerTask 就是抽象类
        new Thread({ Thread.sleep(2000); timer.cancel() } as Runnable).start()
        ```
    3. 如果一个接口有多个方法，也可以使用一个闭包，这种情况下该接口所有的方法实现都是相同的
    4. 实现多个方法
        ```groovy
        def handleFocus = [focusGained: { msgLabel.setText("Good to see you!") }, focusLost: { msgLabel.setText("Come back soon!") }]
        button.addFocusListener(handleFocus as FocusListener)
        ```
    5. 动态
        ```groovy
        events = ['WindowListener', 'ComponentListener',]
        handler = { msgLabel.setText("$it") }
        for (event in events) frame."add${event}"(handler.asType(Class.forName("java.awt.event.${event}")))
        ```
3. 定义
    ```groovy
    interface MyInterface { def interMehtod() }
    abstract class MyAbstract { abstract def absMethod() }
    class MyClass extends MyAbstract implements MyInterfac { /* ... */ }
    ```

### 元编程

1. 捕获未声明的方法: 如果在调用对象的方法时，该方法未被声明的情况下
    1. 会被优先级高的 methodMissing() 捕获
    2. 其次会被优先级低的 invokeMethod() 捕获
    3. 如果这两个方法都未声明，则程序会报错
    4. 示例
        ```groovy
        class Person {
            String name
            Integer age
            @Override Object invokeMethod(String s, Object arg) { "[invokeMethod] the method is " + s + ", and the params is " + arg }
            def methodMissing(String s, Object arg) { "[methodMissing] the method is " + s + ", and the params is " + arg }
        }
        Person p = new Person(name: "Hensen", age: 22)
        println p.say("Hello")  // [methodMissing] the method is say, and the params is [Hello]
        ```
2. 动态添加属性和方法
    ```groovy
    class Person {
        String name
        Integer age
    }
    Person.metaClass.sex = "male"  // 动态添加一个属性
    Person.metaClass.getUpperName = { name.toUpperCase() }  // 动态添加方法
    Person.metaClass.static.createPerson = { String name, Integer age-> new Person(name: name, age: age) }  // 动态添加静态方法
    Person p = new Person(name: "Hensen", age: 22)
    String name = Person.createPerson('Jack',20).name
    println "$p.sex\n$p.getUpperName()\n$name"
    ```
3. 为第三方类添加属性和方法
    ```groovy
    ExpandoMetaClass.enableGlobally()
    String.metaClass.static.sayHello = { String str -> return "Hello" + str}
    println String.sayHello("Hensen")
    ```

### Json操作

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

### xml操作

0. https://www.ibm.com/developerworks/cn/java/j-pg05199/index.html
1. 解析xml
    ```groovy
    import groovy.util.XmlSlurper
    import groovy.util.XmlParser
    String xml =
    '''<person>
    <name id="2">Hensen</name><age>23</age>
    <name id="3">Jack</name><age>20</age>
    </person>'''
    def xmlSlurper = new XmlSlurper()
    def person = xmlSlurper.parseText(xml)
    // def person = new XmlParser().parseText(xml)
    // 获取值
    println person.name[0].text()
    // 获取属性
    println person.name[0].@id
    // 遍历获取
    person.each { println it.name.text() }
    ```
2. 遍历xml
    ```groovy
    // 深度遍历
    def names = person.depthFirst().findAll { it.@id == "2" }
    println names
    // 广度遍历
    def namess = person.children().findAll { it.@id == "2" }.collect{ it.@id }
    println namess
    ```
3. 生成xml1
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
        // 遍历所有子节点
        computer.languages.each{ language(version: it.version, it.value) }
    }
    println sw
    ```
4. DOMCategory
    ```groovy
    // Arrays.stream(groovy.xml.dom.DOMCategory.class.getMethods()).map(java.lang.reflect.Method::getName).forEach(System.out::println)  // 适用于java
    testXmlPath = "./languages_${Math.round(Math.random() * 100)}.xml"
    fileWriter = new FileWriter(testXmlPath)
    fileWriter.write("""<languages>
        <language name="C++">
            <author>Stroustrup</author>
        </language>
        <language name="Java">
            <author>Gosling</author>
        </language>
        <language name="Lisp">
            <author>McCarthy</author>
        </language>
        <language name="Modula-2">
            <author>Wirth</author>
        </language>
        <language name="Oberon-2">
            <author>Wirth</author>
        </language>
        <language name="Pascal">
            <author>Wirth</author>
        </language>
    </languages>""")
    fileWriter.flush()
    fileWriter.close()
    document = groovy.xml.DOMBuilder.parse(new FileReader(testXmlPath))
    rootElement = document.documentElement
    use(groovy.xml.dom.DOMCategory) {
        println 'Languages and authors'
        languages = rootElement.language
        languages.each { println "${it.'@name'} authored by ${it.author[0].text()}" }
        def languagesByAuthor = { authorName -> languages.findAll({ it.author[0].text() == authorName }).collect({ it.'@name' }).join(', ') }
        authorName = 'Wirth'
        println "${authorName}'s languages are: ${languagesByAuthor(authorName)}"
    }
    new File(testXmlPath).delete()
    ```
5. XmlSlurper
    ```groovy
    languages = new XmlSlurper().parse('languages.xml')  // 或者.parseText("""....""")
    // XmlParser与XmlSlurper非常类似，但是XmlParser对大文档时的内存要求高
    languages.language.each { println "${it.'@name'} authored by ${it.author[0].text()}" }
6. 生成xml2
    ```groovy
    languages = ['C++': 'Stroustrp', 'Java': 'Gosling', 'Lisp': 'McCarthy', 'Modula-2': 'Wirth', 'Oberon-2': 'Wirth', 'Pascal': 'Wirth']
    content = languages.collect({ language, author -> "    <language name=${language}>\n        <author>${author}</author>\n    </language>" }).join('\n')
    content = "<languages>\n${content}\n</languages>"
    println content
    // or
    String getPrettyFormattedXml(String xml) {
        if (xml) {
            def stringWriter = new StringWriter()
            def node = new XmlParser().parseText(xml.toString());
            new XmlNodePrinter(new PrintWriter(stringWriter)).print(node)
            return stringWriter.toString()
        } else {
            return ''
        }
    }
    def xmlDocument = new StreamingMarkupBuilder().bind {
        mkp.xmlDeclaration()
        mkp.declareNamespace(computer: "Computer")
        languages {
            comment << "created using StreamingMarkupBuilder"
            langs.each { key, value -> computer.language(name: key) { author(value) } }
        }
    }
    println getPrettyFormattedXml(xmlDocument.toString())
    ```

### 文件操作

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

### 正则表达式

1. 使用字符串创建匹配
    ```groovy
    obj = ~'Hello'
    println obj.getClass().name  // java.util.regex.Pattern
    pattern = ~"(G|g)roovy"
    text = 'Goovy is Hip'
    println (text =~ pattern) ? 'match' : 'no match'  // match
    println (text ==~ pattern) ? 'match' : 'no match'  // no match
    // =~执行Regex部分匹配，而==~执行Regex精确匹配。=~返回java.util.regex.Matcher对象
    ```
2. replaceFirst和replaceAll方法也是接受正则的
    ```groovy
    str = 'Groovy is groovy, really groovy'
    println str  // Groovy is groovy, really groovy
    result = (str =~ /groovy/).replaceAll('hip')
    println str.repleaceAll(~/[groovy]/, { Object[] objs -> 'hip' })  // objs中第一个是整个匹配，后面的是一个个的[]匹配
    println result  // Groovy is hip, really groovy
    ```

### 数据库



### 特性3

1. Trait: Groovy 提供了一个叫做 Trait 特性实现了多继承，还有很多强大的功能。
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
2. 字符串插值
    ```groovy
    def method = 'toString'
    new Date()."$method"()  // 因为只包含一个变量，所以占位符表达式可以只有$前缀，而没有花括号包裹
    ```
3. groovy对Object类的扩展
    - dump(): 任何对象的实例的详细信息
    - inspect(): 默认实现是返回toString，但可以自己实现用来说明这个对象/类
    - with():
        ```groovy
        lst = [1, 2]
        lst.with {
            add(3)  // 相当于调用了 lst.add(3)
            add(4)  // 相当于调用了 lst.add(4)
            println size()  // 相当于调用了 lst.size()
            println contains(2)  // 相当于调用了 lst.contains(2)
        }  // 原理是"闭包的delegate属性被设置为了lst"
        ```
    - sleep(long milliseconds): 不会响应中断，需要中断请用Thread.sleep(long)
    - sleep(long milliseconds, interruptedAction)
        ```groovy
        def playWithSleep(boolean flag) {
            Thread.start({  // Thread.startDeamon
                println "Thread started"
                startTime = Systerm.nanoTime()
                new Object().sleep(2000) {
                    println "Interrupted ... $it"
                    flag
                }
                endTime = Systerm.nanoTime()
                println "Thread done in ${(endTime - startTime) / 10 ** 9} seconds"
            }).with {
                interrupt()
                join()
            }
        }
        playWithSleep(true)  // 0.00437 seconds
        playWithSleep(false)  // 1.999077 seconds
        ```
    - 间接访问属性: ``[]`` (可以动态设定属性了，无论获取还是设置值，会映射到Object里面的getAt与putAt方法中)
        ```groovy
        class Car { int miles, fuelLevel }
        car = new Car(fuelLevel: 80, miles: 25)
        properties = ['miles', 'fuelLevel']  // 这个是动态的
        properties.each { println "$it = ${car[it]}" }
        car[properties[1]] = 100
        properties.each { println "$it = ${car[it]}" }
        ```
    - properties属性: 可以获得对象的所有属性
    - 间接调用方法: invokeMethod
        ```groovy
        class Person {
            def walk() { println "walking ..." }
            def walk(int miles) { println "walking $mile miles ..." }
            def walk(int miles, String where) { println "walking $mile miles $where ..." }
        }
        new Person().with {
            invokeMethod("walk", null)  // walking ...
            invokeMethod("walk", 10)  // walking 10 miles ...
            invokeMethod("walk", [2, 'uphill'] as Object[])  // walking 2 miles uphill
        }
        ```
    - getMetaClass
4. groovy的其他扩展
    1. 数组
        ```groovy
        println [1, 2, 3, 4, 5][2..4]
        ```
    2. java.lang
        ```groovy
        String[] command = ['groovy', '-e', '"print \'Groovy\'"']
        println "Calling ${command.join(' ')}"
        println command.execute()  // List或者String[]的第一个元素成为了要执行的命令，其他元素视为参数
        ```
        ```groovy
        process = 'wc'.execute()
        process.out.withWriter {
            it << 'Let the world know ...\n'
            it << 'Groovy rocks.\n'
        }
        println process.in.text  // 2  6 36(表示2行，6单词，36字符)
        // Thread.start
        // Thread.startDeamon
        ```
    3. java.io
        ```groovy
        println new File('D:\\temp.log').text  // 所有的BufferedReader/InputStream/File都有text属性
        new File('D:\\temp.log').eachLine { line -> println line }
        println new File('D:\\temp.log').filterLine({ it =~ /life/ })
        new File('')
        ```
    4. java.util
5. 使用扩展模块定制方法
    ```groovy
    package com.liangyy75.extension
    class PriceExtension {
        public static double getPrice(String self) {
            def url = "http://ichart.finance.yahao.com/table.csv?s=$self".toURL()
            def data = url.readLines()[1].split(',')
            Double.parseDouble(data[-1])
        }
    }
    package com.liangyy75.extension
    class PriceStaticExtension {
        public static double getPrice(String selfType, String ticker) {
            def url = "http://ichart.finance.yahao.com/table.csv?s=$ticker".toURL()
            def data = url.readLines()[1].split(',')
            Double.parseDouble(data[-1])
        }
    }
    // 下面内容放在 META-INF/services 目录下的 org.codehaus.groovy.runtime.ExtensionModule 文件中
    moduleName=price-module
    moduleVersion=1.0-test
    extensionClasses=com.liangyy75.extension.PriceExtension
    staticExtensionClasses=com.liangyy75.extension.PriceStaticExtension  // 可以用逗号分隔
    // 之后用下面的目录编译该这两个辅助类，并创建必要的jar文件
    // groovyc -d classes com/liangyy75/extension/*.groovy
    // jar -cf priceExtensions.jar -C classes com -C manifest .
    // 然后是示例的 test.groovy
    def ticker = "ORCL"
    println "price for $ticker using instance method is ${String.getPrice(ticker)}"
    println "price for $ticker using instance method is ${ticker.getPrice()}"
    // 执行指令: groovy -classpath priceExtensions.jar test.groovy
    ```

### 扩展的方法1: io

0. links
    1. http://docs.groovy-lang.org/latest/html/groovy-jdk/java/io/
    2. http://docs.groovy-lang.org/latest/html/groovy-jdk/java/nio/file/
1. java.io.File
    ```groovy
    /*
     * append / asWritable / createTempDir / deleteDir / directorySize / eachByte / eachDir / eachDirMatch / eachDirRecurse / eachFile / eachFileMatch / eachFileRecurse / 
     * eachLine / eachObject / filterLine / getBytes / getText / leftShift / newDataInputStream / newObjectOutputStream / newInputStream / newObjectInputStream / 
     * newObjectOutputStream / newOutputStream / newPrintWriter / newReader / newWriter / readBytes / readLines / relativePath / renameTo / setBytes / setText / size / 
     * spltEachLine / traverse / withDateInputStream / withDataOutputStream / withInputStream / withOutputStream / withObjectInputStream / withObjectOutputStream / 
     * withPrintWriter / withReader / withWriterAppend / write
     */
    // http://docs.groovy-lang.org/latest/html/groovy-jdk/java/io/File.html#traverse(java.util.Map,%20groovy.lang.Closure)
    ```
    ```groovy
    // void append(byte[] bytes)
	// void append(InputStream stream)
	// void append(Reader reader)
	// void append(Reader reader, boolean writeBom)
	// void append(Reader reader, String charset)
	// void append(Reader reader, String charset, boolean writeBom)
	// void append(Writer writer)
	// void append(Writer writer, boolean writeBom)
	// void append(Writer writer, String charset)
	// void append(Writer writer, String charset, boolean writeBom)
	// void append(Object text)
	// void append(Object text, boolean writeBom)
	// void append(Object text, String charset)
	// void append(Object text, String charset, boolean writeBom)
	// File asWritable()
	// File asWritable(String encoding)
	// static File createTempDir()
    // static File createTempDir(String prefix, String suffix)
	// boolean deleteDir()
	// long directorySize()
	// void eachByte(Closure closure)
	// void eachByte(int bufferLen, Closure closure)
	// void eachDir(Closure closure)
	// void eachDirMatch(Object nameFilter, Closure closure)
	// void eachDirRecurse(Closure closure)
	// void eachFile(FileType fileType, Closure closure)
	// void eachFile(Closure closure)
	// void eachFileMatch(FileType fileType, Object nameFilter, Closure closure)
	// void eachFileMatch(Object nameFilter, Closure closure)
	// void eachFileRecurse(FileType fileType, Closure closure)
	// void eachFileRecurse(Closure closure)
	// Object eachLine(Closure closure)
	// Object eachLine(int firstLine, Closure closure)
	// Object eachLine(String charset, Closure closure)
	// Object eachLine(String charset, int firstLine, Closure closure)
	// void eachObject(Closure closure)
	// Writable filterLine(Closure closure)
	// void filterLine(Writer writer, Closure closure)
	// void filterLine(Writer writer, String charset, Closure closure)
	// Writable filterLine(String charset, Closure closure)
    ```
    ```groovy
	// byte[] getBytes()
	// String getText()
	// String getText(String charset)
	// File leftShift(byte[] bytes)
	// File leftShift(InputStream data)
	// File leftShift(Object text)
	// DataInputStream newDataInputStream()
	// DataOutputStream newDataOutputStream()
	// BufferedInputStream newInputStream()
	// ObjectInputStream newObjectInputStream()
	// ObjectInputStream newObjectInputStream(ClassLoader classLoader)
	// ObjectOutputStream newObjectOutputStream()
	// BufferedOutputStream newOutputStream()
	// PrintWriter newPrintWriter()
	// PrintWriter newPrintWriter(String charset)
	// BufferedReader newReader()
	// BufferedReader newReader(String charset)
	// BufferedWriter newWriter()
	// BufferedWriter newWriter(boolean append)
	// BufferedWriter newWriter(String charset)
	// BufferedWriter newWriter(String charset, boolean append)
	// BufferedWriter newWriter(String charset, boolean append, boolean writeBom)
	// byte[] readBytes()
	// List readLines()
	// List readLines(String charset)
	// String relativePath(File to)
	// boolean renameTo(String newPathName)
	// void setBytes(byte[] bytes)
	// void setText(String text)
	// void setText(String text, String charset)
	// long size()
    ```
    ```groovy
	// Object splitEachLine(String regex, Closure closure)
	// Object splitEachLine(String regex, String charset, Closure closure)
	// Object splitEachLine(Pattern pattern, Closure closure)
	// Object splitEachLine(Pattern pattern, String charset, Closure closure)
	// void traverse(Closure closure)
	// void traverse(Map options)
	// void traverse(Map options, Closure closure)
	// Object withDataInputStream(Closure closure)
	// Object withDataOutputStream(Closure closure)
	// Object withInputStream(Closure closure)
	// Object withObjectInputStream(Closure closure)
	// Object withObjectInputStream(ClassLoader classLoader, Closure closure)
	// Object withObjectOutputStream(Closure closure)
	// Object withOutputStream(Closure closure)
	// Object withPrintWriter(Closure closure)
	// Object withPrintWriter(String charset, Closure closure)
	// Object withReader(Closure closure)
	// Object withReader(String charset, Closure closure)
	// Object withWriter(Closure closure)
	// Object withWriter(String charset, Closure closure)
	// Object withWriterAppend(Closure closure)
	// Object withWriterAppend(String charset, Closure closure)
	// void write(String text)
	// void write(String text, boolean writeBom)
	// void write(String text, String charset)
	// void write(String text, String charset, boolean writeBom)
    ```
2. java.io.InputStream
3. java.io.OutputStream
4. java.io.Reader
5. java.io.Writer
    ```groovy
    // Writer leftShift(Object value)
	// PrintWriter newPrintWriter()
	// Object withPrintWriter(Closure closure)
	// Object withWriter(Closure closure)
	// void write(Writable writable)
    ```
6. java.nio.file.Path

### 扩展的方法2: collection

0. http://docs.groovy-lang.org/latest/html/groovy-jdk/java/util/
1. java.util.ArrayList / java.lang.Iterable / java.util.Collection
    ```groovy
    a = [1, 2, 3, 4]
    splitStr = '-' * 10
    // 增: addAll / add / << / + / push / plus
    println "${splitStr}add"
    a.addAll([5, 6, 7])
    a.add(8)
    a << 9
    a = a + 10
    a.push(0)
    println "    a.plus(10, [1, 2, 3]) ---- ${a.plus(10, [1, 2, 3])}"
    println "    a.plus(0, [0]) ---- ${a.plus(0, 0)}"
    println "    a.plus([11, 12, 13]) ---- ${a.plus([11, 12, 13])}"
    // 删: remove / removeAt / removeElement / removeAll / - / clear / drop / dropRight / dropWhile / pop / removeLast
    println "${splitStr}delete"
    b = a - [10]  // a - 10 也可以
    b.remove(9 - 1)
    b.remove((Object)8)
    b.removeAt(7 - 1)
    b.removeElement(6)
    b.removeAll({ it % 2 == 0 })
    b = b.drop(1).dropRight(1).dropWhile({ it % 3 == 0 })  // drop是从头部删除数字
    println "    b.pop() ---- ${b.pop()}"
    println "    b.removeLast() ---- ${b.removeLast()}"
    b.clear()
    // 改: putAt / = / 
    println "${splitStr}update"
    a[10] = 0
    a.putAt(3, 23)
    // 查: contains / containsAll / get / count / countBy / bufferedIterator / find / findAll / first / getAt / head / init / last / tail / take / findIndexValues / findIndexOf / findLastIndexOf
    println "${splitStr}search"
    println "    a.contains(9) ---- ${a.contains(9)}"
    println "    a.containsAll([4, 5, 6]) ---- ${a.containsAll([4, 5, 6])}"
    println "    a.get(6) ---- ${a.get(6)}"
    println "    a[6] ---- ${a[6]}"
    println "    a[2..6] ---- ${a[2..6]}"
    println "    a.count(3) ---- ${a.count(3)}"
    println "    a.count([3, 4, 5]) ---- ${a.count([3, 4, 5])}"
    println "    a.count({ it % 3 }) ---- ${a.count({ it % 3 })}"
    println "    a.countBy({ it % 3 }) ---- ${a.countBy({ it % 3 })}"
    assert [1, 2, 3, 4].bufferedIterator().with { [head(), toList()] } == [1, [1, 2, 3, 4]]
    println "    a.find({ it > 2 }) ---- ${a.find({ it > 2 })}"
    println "    a.findAll({ it > 2 }) ---- ${a.findAll({ it > 2 })}"
    println "    a.first() ---- ${a.first()}"
    println "    a.getAt(1..<4) ---- ${a.getAt(1..<4)}"
    println "    a.getAt([1, 2, 10]) ---- ${a.getAt([1, 2, 10])}"
    println "    a.head(), a.init(), a.last(), a.tail() ---- ${a.head()}, ${a.init()}, ${a.last()}, ${a.tail()}"  // init是除去最后一个元素的list
    println "    a.take(3), a.takeRight(3), a.takeWhile({ it % 3 == 0 }) ---- ${a.take(3)}, ${a.takeRight(3)}, ${a.takeWhile({ it % 3 == 0 })}"  // take是获取头部的num个元素, takewhile是满足要求的前缀
    println "    a.findIndexValues({ it % 3 == 0 }).collect({ a[it as int] }) ---- ${a.findIndexValues({ it % 3 == 0 }).collect({ a[it as int] })}"
    // 条件: any / every / grep
    println "${splitStr}condition"
    println "    a.any() ---- ${a.any()}"
    println "    a.any({ it == 1 }) ---- ${a.any({ it == 1 })}"
    println "    a.every() ---- ${a.every()}"
    println "    a.every({ it > 0 }) ---- ${a.every({ it > 0 })}"
    println "    a.grep() ---- ${a.grep()}"  // 只有true的值返回
    println "    a.grep({ it % 3 == 0 }) ---- ${a.grep({ it % 3 == 0 })}"  // 这里还可以用 a.grep(Object) / a.grep(/a+/)
    // 转变: asImmutable / asSynchronized / asUnmodifiable / collate / split / flatten / collect / collectEntries / collectMany / collectNested / combinations / join / toSpreadMap / toUnique / reverse
    println "${splitStr}transform"
    println "    a.asImmutable() ---- ${a.asImmutable()}"  // 不可修改
    println "    a.asSynchronized() ---- ${a.asSynchronized()}"
    println "    a.asUnmodifiable() ---- ${a.asUnmodifiable()}"
    println "    a.collate(3), a.collate(3, 2) ---- ${a.collate(3)}, ${a.collate(3, 2)}"
    println "    a.collate(3, 2, false) ---- ${a.collate(3, 2, false)}"
    println "    a.collate(3, 3, false).flatten() ---- ${a.collate(3, 3, false).flatten()}"
    println "    a.split({ it % 3 }) ---- ${a.split({ it % 3 })}"
    println "    a.collect({ \"\$it\" }) ---- ${a.collect({ "$it" })}"
    println "    a.combinations() ---- ${a.combinations()}"
    println "    a.join(', ') ---- ${a.join(', ')}"
    println "    a[0..3].toSpreadMap() ---- ${a[0..3].toSpreadMap()}"
    println "    a.toUnique(), a.toUnique({ a, b -> a - b }) ---- ${a.toUnique()}, ${a.toUnique({ a, b -> a - b })}"
    println "    a.unique(), a.unique({ a, b -> a - b }) ---- ${a.unique()}, ${a.unique({ a, b -> a - b })}"  // 还有 unique(bool,Xxx) 类型的，bool表示是否修改原来的数组，而且也会返回
    println "    a.reverse() ---- ${a.reverse()}"
    // 遍历: each / reverseEach / eachWithIndex
    println "${splitStr}iter"
    print '    a.each { print "$it, " } ---- '
    a.each { print "$it, " }
    println()
    print '    a.reverseEach { print "$it, " } ---- '
    a.reverseEach { print "$it, " }
    println()
    print '    a.eachWithIndex { num, index -> print "$index: $num, " } ---- '
    a.eachWithIndex { num, index -> print "$index: $num, " }
    println()
    // 特殊: execute / intersect / * / swap / subsequences / chop
    println "${splitStr}special"
    print "    ['git', '--version'].execute().text ---- ${['git', '--version'].execute().text}"
    println "    [1, 2, 3, 4].intersect([2, 4, 6, 8]) ---- ${[1, 2, 3, 4].intersect([2, 4, 6, 8])}"  // 交集
    println "    [1, 2, 3] * 2 ---- ${[1, 2, 3] * 2}"
    println "    a.swap(0, 1)  ---- ${a.swap(0, 1)}"
    println "    a[0..2].subsequences() ---- ${a[0..2].subsequences()}"
    println "    [['a', 'b'], [1, 2]].transpose() ---- ${[['a', 'b'], [1, 2]].transpose()}"
    println "    a.chop(2, 4, -1) ---- ${a.chop(2, 4, -1)}"
    /*
     * inherited from interface java.uitl.Collection:
     * addAll, addAll, addAll, asBoolean, asImmutable, asSynchronized, asType, asUnmodifiable, collectNested, each, eachWithIndex, find, find, findAll, findAll, flatten, getAt, getIndices, grep,
     * grep, inject, inject, intersect, intersect, isCase, leftShift, minus, plus, plus, plus, removeAll, removeAll, removeElement, retainAll, retainAll, split, toListString, toListString, toSet,
     * unique, unique, unique, unique, unique, unique
     */
    /*
     * inherited from interface java.lang.Iterable:
     * any, asCollection, asList, asType, bufferedIterator, chop, collate, collate, collate, collate, collect, collect, collect, collectEntries, collectEntries, collectEntries, collectEntries,
     * collectMany, collectMany, collectNested, collectNested, combinations, combinations, contains, containsAll, count, count, countBy, disjoint, drop, dropRight, dropWhile, each, eachCombination,
     * eachPermutation, eachWithIndex, every, findIndexOf, findIndexOf, findIndexValues, findIndexValues, findLastIndexOf, findLastIndexOf, findResult, findResult, findResults, first, flatten,
     * flatten, getAt, groupBy, groupBy, groupBy, head, indexed, indexed, init, inits, intersect, intersect, isEmpty, join, last, max, max, max, min, min, min, minus, minus, multiply, permutations,
     * permutations, plus, plus, size, sort, sort, sort, sort, sort, sum, sum, sum, sum, tail, tails, take, takeRight, takeWhile, toList, toSet, toSorted, toSorted, toSorted, toSpreadMap, toUnique,
     * toUnique, toUnique, withIndex, withIndex
     */
    // collectNested / getIndices / isCase / retainAll / chop / collectMany / disjoint / eachCombination / eachPermutation / findIndexValues / findResult / findResults / groupBy / indexed / init /
    // inits / join / permutations / tails / withIndex
    ```
2. java.util.Collection
3. java.util.Date

### 扩展的方法3: lang

1. links
    1. http://docs.groovy-lang.org/latest/html/groovy-jdk/java/lang/
    2. http://docs.groovy-lang.org/latest/html/groovy-jdk/java/math/
    3. https://mrhaki.blogspot.com/2009/09/groovy-goodness-use-categories-to-add.html
2. java.lang.**Object**
    ```groovy
    /*
     * any / asBoolean / asType / collect / contains / count / dump / each / eachWithIndex / equals / every / find / findAll / findIndexOf / findIndexValues / findLastIndexOf
     *  / findResult / flatten / getAt / grep / groupBy / identity / inject / inspect / invokeMethods / is / isCase / iterator / join / print / printf / println / putAt / size
     *  / sleep / split / sprintf / sum / toArrayString / toSpreadMap / toString / use / with / **withTraits**
     * 集合: any / collect / contains / count / each / eachWithIndex / every / find / findAll / findIndexOf / findIndexValues / findLastIndexOf / findResult / flatten / getAt /
     *       groupBy / inject / iterator / join / putAt / size / split / sum / toArrayString / toSpreadMap
     * Other: asBoolean / asType / dump / equals / identity / inspect / invokeMethods / is / isCase / print / printf / println / sleep / sprintf / toString / use / with / withTraits
     */
    /*
     * void: addShutdownHook(Closure closure)
     * List: getMetaPropertyValues()
     * Map: getProperties()
     * MetaProperty: hasProperty(String name)
     * MetaClass: metaClass(Closure closure)
     * List: respondsTo(String name)
     * List: respondsTo(String name, Object[] argTypes)
     * void: setMetaClass(MetaClass metaClass)
     */
    assert [1, 2, 3, 4].findIndexValues({ it % 2 == 0 }) == [1, 3]  // 返回下标，而且是long，需要as int
    assert [1, 2, 3].findResult({ if(it > 1) return it }) == 2
    [1, 2, 3].identity({ println(it) })  // 等同于[1, 2, 3].with，但与tap有区别，tap会返回it，而且注意闭包的委托其实应该都是it，即可以随便使用it的方法与属性，而不必使用it.
    Object f = new Object(), g = new Object()
    println "${f.is(f)}, ${f.is(g)}"  // true, false
    println "${1.isCase(Integer)}, ${1.isCase(0..10)}, ${1.isCase(1)}"  // false, false, true
    printf("%s", sprintf("%d %d", 100, 20))  // 100 20
    // use语法: https://mrhaki.blogspot.com/2009/09/groovy-goodness-use-categories-to-add.html
    ```
    ```groovy
    void addShutdownHook(Closure closure)
	// boolean any()
	// boolean any(Closure predicate)
	// boolean asBoolean()
	// Object asType(Class clazz)
	// Collection collect()
	// List collect(Closure transform)
	// Collection collect(Collection collector, Closure transform)
	// boolean contains(Object value)
	// Number count(Object value)
	// String dump()
	// Object each(Closure closure)
	// Object eachWithIndex(Closure closure)
	// boolean equals(List right)
	// boolean every()
	// boolean every(Closure predicate)
	// Object find()
	// Object find(Closure closure)
	// Collection findAll()
	// Collection findAll(Closure closure)
	// int findIndexOf(Closure condition)
	// int findIndexOf(int startIndex, Closure condition)
	// List findIndexValues(Closure condition)
	// List findIndexValues(Number startIndex, Closure condition)
	// int findLastIndexOf(Closure condition)
	// int findLastIndexOf(int startIndex, Closure condition)
	// Object findResult(Closure condition)
	// Object findResult(Object defaultResult, Closure condition)
	// Collection flatten()
	// Object getAt(String property)
	// MetaClass getMetaClass()
	// List getMetaPropertyValues()
	// Map getProperties()
	// Collection grep()
	// Collection grep(Object filter)
	// Map groupBy(Object closures)
	// Map groupBy(List closures)
	// MetaProperty hasProperty(String name)
	// Object identity(Closure closure)
	// Object inject(Closure closure)
	// Object inject(Object initialValue, Closure closure)
    ```
    ```groovy
	// String inspect()
	// Object invokeMethod(String method, Object arguments)
	// boolean is(Object other)
	// boolean isCase(Object switchValue)
	// Iterator iterator()
	// String join(String separator)
	// MetaClass metaClass(Closure closure)
	// void print(PrintWriter out)
	// void print(Object value)
	// void printf(String format, Object arg)
	// void printf(String format, Object[] values)
	// void println()
	// void println(PrintWriter out)
	// void println(Object value)
	// void putAt(String property, Object newValue)
	// List respondsTo(String name)
	// List respondsTo(String name, Object[] argTypes)
	// void setMetaClass(MetaClass metaClass)
	// int size()
	// static void sleep(long milliseconds)
	// static void sleep(long milliseconds, Closure onInterrupt)
	// Collection split(Closure closure)
	// String sprintf(String format, Object arg)
	// String sprintf(String format, Object[] values)
	// Object sum()
	// Object sum(Object initialValue)
	// Object tap(Closure closure)
	// String toArrayString()
	// SpreadMap toSpreadMap()
	// String toString()
	// Object use(Class categoryClass, Closure closure)
	// Object use(Object[] array)
	// Object use(List categoryClassList, Closure closure)
	// Object with(boolean returning, Closure closure)
	// Object with(Closure closure)
	// Object withTraits(Class traits)
    ```
2. java.lang.**Object[]**
    ```groovy
    /*
     * any / chop / collate / collect / collectEntries / collectMany / count / countBy / drop / dropRight / dropWhile / each / eachWithIndex / every / find / findAll / 
     * findIndexOf / findIndexValues / findLastIndexOf / findResult / findResults / first / getAt / getIndices / grep / groupBy / head / init / inject / iterator / last
     *  / max / min / minus / plus / reverse / reverseEach / sort / split / stream / sum / swap / tail / take / takeRight / takeWhile / toList / toSorted / toUnique
     */
    ```
    ```groovy
    // boolean any(Closure predicate)
	// List chop(int chopSizes)
	// List collate(int size)
	// List collate(int size, boolean keepRemainder)
	// List collate(int size, int step)
	// List collate(int size, int step, boolean keepRemainder)
	// List collect(Closure transform)
	// Collection collect(Collection collector, Closure transform)
	// Map collectEntries()
	// Map collectEntries(Closure transform)
	// Map collectEntries(Map collector)
	// Map collectEntries(Map collector, Closure transform)
	// List collectMany(Closure projection)
	// Number count(Closure closure)
	// Map countBy(Closure closure)
	// Object[] drop(int num)
	// Object[] dropRight(int num)
	// Object[] dropWhile(Closure condition)
	// Object[] each(Closure closure)
	// Object[] eachWithIndex(Closure closure)
	// boolean every(Closure predicate)
	// Object find(Closure condition)
	// Collection findAll()
	// Collection findAll(Closure condition)
	// int findIndexOf(Closure condition)
	// int findIndexOf(int startIndex, Closure condition)
	// List findIndexValues(Closure condition)
	// List findIndexValues(Number startIndex, Closure condition)
	// int findLastIndexOf(Closure condition)
	// int findLastIndexOf(int startIndex, Closure condition)
	// Object findResult(Closure condition)
	// Object findResult(Object defaultResult, Closure condition)
	// Collection findResults(Closure filteringTransform)
	// Object first()
	// List getAt(EmptyRange range)
	// List getAt(ObjectRange range)
	// Support the range subscript operator for an Array
	// List getAt(Collection indices)
	// IntRange getIndices()
	// Collection grep()
	// Collection grep(Object filter)
	// Map groupBy(Closure closure)
	// Object head()
	// Object[] init()
    ```
    ```groovy
	// Object inject(Closure closure)
	// Object inject(Object initialValue, Closure closure)
	// Iterator iterator()
	// Object last()
	// Object max()
	// Object max(Closure closure)
	// Object max(Comparator comparator)
	// Object min()
	// Object min(Closure closure)
	// Object min(Comparator comparator)
	// Object[] minus(Iterable removeMe)
	// Object[] minus(Object removeMe)
	// Object[] minus(Object[] removeMe)
	// Object[] plus(Iterable right)
	// Object[] plus(Object right)
	// Object[] plus(Object[] right)
	// Object[] plus(Collection right)
	// Object[] reverse()
	// Object[] reverse(boolean mutate)
	// Object[] reverseEach(Closure closure)
	// Object[] sort()
	// Object[] sort(boolean mutate)
	// Object[] sort(boolean mutate, Closure closure)
	// Object[] sort(boolean mutate, Comparator comparator)
	// Object[] sort(Closure closure)
	// Object[] sort(Comparator comparator)
	// Collection split(Closure closure)
	// Stream stream()
	// Object sum(Closure closure)
	// Object sum(Object initialValue, Closure closure)
	// Object[] swap(int i, int j)
	// Object[] tail()
	// Object[] take(int num)
	// Object[] takeRight(int num)
	// Object[] takeWhile(Closure condition)
	// List toList()
	// Object[] toSorted()
	// Object[] toSorted(Closure condition)
	// Object[] toSorted(Comparator comparator)
	// Object[] toUnique()
	// Object[] toUnique(Closure condition)
	// Object[] toUnique(Comparator comparator)
    ```
3. java.lang.Throwable
    ```groovy
    class MyException extends Throwable { /* ... */ }
    println new MyException().asString()  // 相当于 printStackTrace
    ```
4. java.lang.**Thread**
    ```groovy
    // start(Closure closure)
    // start(String name, Closure closure)
    // startDaemon(Closure closure)
    // startDaemon(String name, Closure closure)
    ```
5. java.lang.**System**
    ```groovy
    println System.currentTimeMillis()
    println System.currentTimeSeconds()  // 添加的
    ```
6. java.lang.**StringBuilder** / java.lang.StringBuffer
    ```groovy
    // leftShift(Object value)
    // plus(String value)
    // putAt(EmptyRange range, Object value)
    // putAt(IntRange range, Object value)
    // size()
    a = new StringBuilder()
    a << "a1" << "a3" << "a3"
    a.putAt(2..<2, "a2")
    a.putAt(8..9, "a3")
    println a  // a1a2a3a3a3
    ```
7. java.lang.**CharSequence**
    ```groovy
    /*
     * asBoolean / asType / bitwiseNegate /capitalize / center / contains / count / denormalize(\n替换为lf/crlf/cr等等可跨平台的换行符) / digest / drop / dropWhile / eachLine / 
     * eachMatch / endsWithAny / expand / expandLine / find / findAll / getAt / getChars / isAllWhitespace / isBigDecimal / isBigInteger / isBlank / isCase / isDouble / 
     * isFloat / isInteger / isLong / isNumber / leftShift / matches / md5 / minus / multiply / next / normalize / padLeft / padRight / plus / previous / readLines / replace 
     * / replaceAll / replaceFirst / reverse / sha256 / size / split / splitEachLine / startsWithAny / stripIndent / stripMargin / take / takeWhile / toBigDecimal / 
     * toBigInteger / toDouble / toFloat / toInteger / toList / toLong / toSet / toURI / toURL / tokenize / **tr** / uncapitalize / unexpand
     */
    ['A', 'BB', 'CCC', 'DDDD'].each{ println '|' + it.center(6) + '|' }  // |  A   |\n|  BB  |\n| CCC  |\n| DDDD |\n
    ['A', 'BB', 'CCC', 'DDDD'].each{ println '|' + it.center(6, '+') + '|' }  // |++A+++|\n|++BB++|\n|+CCC++|\n|+DDDD+|\n
    println "${'IamASecret'.md5()}, ${'IamASecret'.digest('MD2')}, ${'IamASecret'.digest('SHA-1'}, ${'IamASecret'.digest('SHA-256')}}"  // md2/md5/sha-1/sha-256/sha-384/sha-512
    println('abcd|abdc|acbd|acdb'.eachMatch(~/a(.*?)\|/, { print "$it, " }))  // [abcd|, bcd], [abdc|, bdc], [acbd|, cbd], abcd|abdc|acbd|acdb
    println("${'ab'.endsWithAny('ab')}, ${'ab'.endsWithAny('b')}, ${'ab'.endsWithAny('a')}, ${'ab'.endsWithAny('ba')}")  // true, true, false, false
    println("${'ab\tcd\nab\tcd\n'.expand()}${'ab\tcd\nab\tcd\n'.expand(6)}${'ab\tcd\nab\tcd\nab\tcd\n'.expandLine(15)}ab\tcd")  // expand将tab变为8空格，expand(n)则是n空格，但expand
        // Line(n)则只能扩展第一行的tab，其他的tab变成的空格数无法确定
    assert '  A\n B\nC' == '   A\n  B\n C'.stripIndent()
    assert 'DEF\n456' == '''ABCDEF\n123456'''.stripIndent(3)
    assert 'ABC\n123\n456' == '''ABC
                            |123
                            |456'''.stripMargin()
    assert 'ABC\n123\n456' == '''ABC
                            *123
                            *456'''.stripMargin('*')
    println("${'abc acb cab cba bac bca'.tokenize()}, ${'abc$acb$cab$cba$bac$bca'.tokenize('$')}")  // [abc, acb, cab, cba, bac, bca]  // 空格切分，或者设置成别的
    // http://docs.groovy-lang.org/latest/html/groovy-jdk/java/lang/CharSequence.html#tr(java.lang.CharSequence,%20java.lang.CharSequence)
    ```
    ```groovy
    // boolean asBoolean()
	// Object asType(Class c)
	// Pattern bitwiseNegate()
	// String capitalize()
	// String center(Number numberOfChars)
	// String center(Number numberOfChars, CharSequence padding)
	// boolean contains(CharSequence text)
	// int count(CharSequence text)
	// String denormalize()
	// String digest(String algorithm)
	// CharSequence drop(int num)
	// String dropWhile(Closure condition)
	// Object eachLine(Closure closure)
	// Object eachLine(int firstLine, Closure closure)
	// Object eachMatch(CharSequence regex, Closure closure)
	// Object eachMatch(Pattern pattern, Closure closure)
	// boolean endsWithAny(CharSequence suffixes)
	// String expand()
	// String expand(int tabStop)
	// String expandLine(int tabStop)
	// String find(CharSequence regex)
	// String find(CharSequence regex, Closure closure)
	// String find(Pattern pattern)
	// String find(Pattern pattern, Closure closure)
	// List findAll(CharSequence regex)
	// List findAll(CharSequence regex, Closure closure)
	// List findAll(Pattern pattern)
	// List findAll(Pattern pattern, Closure closure)
	// String getAt(EmptyRange range)
	// CharSequence getAt(IntRange range)
	// CharSequence getAt(Range range)
	// CharSequence getAt(int index)
	// String getAt(Collection indices)
	// char[] getChars()
	// boolean isAllWhitespace()
	// boolean isBigDecimal()
	// boolean isBigInteger()
	// boolean isBlank()
	// boolean isCase(Object switchValue)
	// boolean isDouble()
	// boolean isFloat()
	// boolean isInteger()
    ```
    ```groovy
	// boolean isLong()
	// boolean isNumber()
	// StringBuilder leftShift(Object value)
	// boolean matches(Pattern pattern)
	// String md5()
	// String minus(Object target)
	// String minus(Pattern pattern)
	// String multiply(Number factor)
	// String next()
	// String normalize()
	// String padLeft(Number numberOfChars)
	// String padLeft(Number numberOfChars, CharSequence padding)
	// String padRight(Number numberOfChars)
	// String padRight(Number numberOfChars, CharSequence padding)
	// String plus(Object value)
	// String previous()
	// List readLines()
	// String replace(int capacity, Map replacements)
	// String replace(Map replacements)
	// String replaceAll(CharSequence regex, Closure closure)
	// String replaceAll(CharSequence regex, CharSequence replacement)
	// String replaceAll(Pattern pattern, Closure closure)
	// String replaceAll(Pattern pattern, CharSequence replacement)
	// String replaceFirst(CharSequence regex, Closure closure)
	// String replaceFirst(CharSequence regex, CharSequence replacement)
	// String replaceFirst(Pattern pattern, Closure closure)
	// String replaceFirst(Pattern pattern, CharSequence replacement)
	// String reverse()
	// String sha256()
	// int size()
	// String[] split()
	// Object splitEachLine(CharSequence regex, Closure closure)
	// Object splitEachLine(Pattern pattern, Closure closure)
	// boolean startsWithAny(CharSequence prefixes)
	// String stripIndent()
	// String stripIndent(int numChars)
	// String stripMargin()
	// String stripMargin(char marginChar)
	// String stripMargin(CharSequence marginChar)
	// CharSequence take(int num)
	// String takeWhile(Closure condition)
    ```
    ```groovy
	// BigDecimal toBigDecimal()
	// BigInteger toBigInteger()
	// Double toDouble()
	// Float toFloat()
	// Integer toInteger()
	// List toList()
	// Long toLong()
	// Set toSet()
	// Short toShort()
	// URI toURI()
	// URL toURL()
	// List tokenize()
	// List tokenize(CharSequence delimiters)
	// List tokenize(Character delimiter)
	// String tr(CharSequence sourceSet, CharSequence replacementSet)
	// String uncapitalize()
	// String unexpand()
	// String unexpand(int tabStop)
	// String unexpandLine(int tabStop)
    ```
8. java.lang.**String**
    ```groovy
    // String collectReplacements(Closure transform)
    // byte[] decodeBase64()
    // byte[] decodeBase64Url()
    // byte[] decodeHex()
    // Process execute()
    // Process execute(String[] envp, File dir)
    // Process execute(List envp, File dir)
    // Boolean toBoolean()
    // Character toCharacter()
    assert "Groovy".collectReplacements{ it == 'o' ? '_O_' : null } == 'Gr_O__O_vy'
    assert "Groovy".collectReplacements{ it.equalsIgnoreCase('O') ? '_O_' : null } == 'Gr_O__O_vy'
    assert "Groovy".collectReplacements{ char c -> c == 'o' ? '_O_' : null } == 'Gr_O__O_vy'
    assert "Groovy".collectReplacements{ Character c -> c == 'o' ? '_O_' : null } == 'Gr_O__O_vy'
    assert "B&W".collectReplacements{ it == '&' ? '&' : null } == 'B&W'
    ```
9. java.lang.**Process**
    ```groovy
    // void closeStreams()
    // Thread consumeProcessErrorStream(OutputStream err)
    // Thread consumeProcessErrorStream(Appendable error)
    // void consumeProcessOutput()
    // void consumeProcessOutput(OutputStream output, OutputStream error)
    // void consumeProcessOutput(Appendable output, Appendable error)
    // Thread consumeProcessOutputStream(OutputStream output)
    // Thread consumeProcessOutputStream(Appendable output)
    // InputStream getErr()
    // InputStream getIn()
    // OutputStream getOut()
    // String getText()
    // OutputStream leftShift(byte[] value)
    // Writer leftShift(Object value)
    // Process or(Process right)
    // Process pipeTo(Process right)
    // void waitForOrKill(long numberOfMillis)
    // void waitForProcessOutput()
    // void waitForProcessOutput(OutputStream output, OutputStream error)
    // void waitForProcessOutput(Appendable output, Appendable error)
    // void withOutputStream(Closure closure)
    // void withWriter(Closure closure)
    def out = new ByteArrayOutputStream()
    def err = new ByteArrayOutputStream()
    def proc = command.execute()
    proc.consumeProcessOutput(out, err)
    proc.waitFor()
    println "error stream was ${err.toString()}"
    ```
10. java.lang.**Number**
    ```groovy
    // int abs()
    // Number and(Number right)
    // boolean asBoolean()
    // Object asType(Class c)
    // Number bitwiseNegate()
    // int compareTo(Character right)
    // int compareTo(Number right)
    // Number div(Character right)
    // Number div(Number right)
    // void downto(Number to, Closure closure)
    // Number intdiv(Character right)
    // Number intdiv(Number right)
    // boolean isCase(Number switchValue)
    // Number leftShift(Number operand)
    // Number minus(Character right)
    // Number minus(Number right)
    // Number mod(Number right)
    // Number multiply(Character right)
    // Number multiply(Number right)
    // Number next()
    // Number or(Number right)
    // Number plus(Character right)
    // Number plus(Number right)
    // String plus(String right)
    // Number power(Number exponent)
    // Number previous()
    // Number rightShift(Number operand)
    // Number rightShiftUnsigned(Number operand)
    // void step(Number to, Number stepNumber, Closure closure)
    // void times(Closure closure)
    // BigDecimal toBigDecimal()
    // BigInteger toBigInteger()
    // Double toDouble()
    // Float toFloat()
    // Integer toInteger()
    // Long toLong()
    // Number unaryMinus()
    // Number unaryPlus()
    // void upto(Number to, Closure closure)
    // Number xor(Number right)
    ```
11. java.lang.Long
    ```groovy
    // abs()
    // power(Integer exponent)
    // downto(Number to, Closure closure)
    // upto(Number to, Closure closure)
    /* inherited from Number */
    ```
12. java.lang.Integer
    ```groovy
    // power(Integer exponent)
    /* inherited from Number */
    ```
13. java.lang.Float / java.lang.Double
    ```groovy
    // abs / upto / downto / round() / round(int precision) / trunc() / trunc(int precision)
    /* inherited from Number */
    ```
14. java.lang.Comparable
    ```groovy
    // int numberAwareCompareTo(Comparable other)
    println 12.numberAwareCompareTo(15)  // -1
    ```
15. java.lang.**Enum**
    ```groovy
    // next / previous
    /* inherited from Comparable */
    ```
16. java.lang.ClassLoader
    ```groovy
    // getRootLoader()
    ```
17. java.lang.Class
    ```groovy
    // URL getLocation()
    // boolean isCase(Object switchValue)  // 用于switch -- 可以比较Class了，而继承Object的也可以重写来实现自己的逻辑，如Integer对IntegerRange做了适配吧
    // Object newInstance()
    // Object newInstance(Object[] args)
    // void setMetaClass(MetaClass metaClass)
    // MetaClass getMetaClass()
    // MetaClass metaClass(Closure closure)  // 将给定类的元类设置/更新为闭包
    // void mixin(Class categoryClass)  // 将目标类的方法拷贝一份到自己类中
    // void mixin(Class[] categoryClass)
    // void mixin(List categoryClasses)
    class A {
        def name = "A"
        def a(text) { println "${this.name}, $name: $text" }
    }
    @Mixin(A)  // 编译时
    class B { def name = "B" }
    class C { def name = "C" }
    C.mixin(A)  // 运行时
    A.newInstance().a('text')
    new B().a('text')
    new C().a('text')  // 都是"A, A: text"
    ```
18. java.lang.**Character**
    ```groovy
    // boolean asBoolean()
	// int compareTo(Character right)
	// int compareTo(Number right)
	// Number div(Character right)
	// Number div(Number right)
	// Number intdiv(Character right)
	// Number intdiv(Number right)
	// boolean isDigit()
	// boolean isLetter()
	// boolean isLetterOrDigit()
	// boolean isLowerCase()
	// boolean isUpperCase()
	// boolean isWhitespace()
	// Number minus(Character right)
	// Number minus(Number right)
	// Number multiply(Character right)
	// Number multiply(Number right)
	// Character next()
	// Number plus(Character right)
	// Number plus(Number right)
	// Character previous()
	// char toLowerCase()
	// char toUpperCase()
    ```
19. java.lang.Byte
    ```groovy
    // void eachByte(Closure closure)
    // Writable encodeBase64()
    // Writable encodeBase64(bool chunked)
    // Writable encodeBase64Url()
    // Writable encodeBase64Url(bool pad)
    // Writable encodeHex()
    a = [127, 67, 91] as byte[]
    a.eachByte { print "$it, " }
    println a.encodeBase64()  // 127, 67, 91, f0Nb
    origin = 'Yeah'
    encoded = origin.bytes.encodeBase64().toString()
    decoded = encoded.decodeBase64()
    println "${origin} -- ${encoded} -- ${decoded} -- ${new String(decoded)}"  // Yeah -- WWVhaA== -- [89, 101, 97, 104] -- Yeah
    hexEncoded = origin.bytes.encodeHex().toString()
    hexDecoded = hexEncoded.decodeHex()
    println "${origin} -- ${hexEncoded} -- ${hexDecoded} -- ${new String(hexDecoded)}"  // Yeah -- 59656168 -- [89, 101, 97, 104] -- Yeah
    ```
20. java.lang.Boolean
    ```groovy
    // Boolean and(Boolean right)
    // Boolean or(Boolean right)
    // Boolean implies(Boolean right)  // A真B真 | A假B假 | A假B真 -- 这些情况就为真
    // Boolean xor(Boolean right)
    // boolean asBoolean()
    // Boolean toBoolean()
    println "${false.and(true)}, ${true.or(false)}, ${true.xor(false)}, ${true.implies(false)}"  // false, true, true, false
    ```
21. java.lang.AutoCloseable
    ```groovy
    // Object withCloseable(Closure action)
    class TestCloseable implements AutoCloseable {
        void execute() { print('execute -- ') }
        void close() { println('close') }
    }
    new TestCloseable().withCloseable { it.execute() }  // execute -- close
    ```
22. java.lang.Appendable
    ```groovy
    // Appendable leftShift(Object value)
    // Appendable withFormatter(Closure closure)
    // Appendable withFormatter(Locale locale, Closure closure)
    final Appendable appendable = new StringWriter()
    appendable << 'Groovy is Gr8!' << newLine
    appendable.withFormatter { formatter -> formatter.format(/m r %3$1s %2$1s %1$1s %4$1s%n/, 'k', 'a', 'h', 'i') }
    appendable.withFormatter(Locale.US) { formatter -> formatter.format("US: " + datePattern, date) }
    appendable.withFormatter(new Locale('nl')) { formatter -> formatter.format("Dutch: $datePattern", date) }
    println appendable
    String getNewLine() { System.getProperty('line.separator') }
    java.time.LocalDate getDate() { java.time.LocalDate.parse('2013-01-27', 'yyyy-MM-dd') }
    String getDatePattern() { '%1$tB %1$te, %1$tY%n' }
    /* Groovy is Gr8!
    m r h a k i
    US: January 27, 2013
    Dutch: januari 27, 2013*/  // https://www.baeldung.com/groovy-string-to-date
    ```
    ```xml
    <dependency>
        <groupId>org.codehaus.groovy</groupId>
        <artifactId>groovy-all</artifactId>
        <version>2.5.7</version>
    </dependency>
    <dependency>
        <groupId>org.codehaus.groovy</groupId>
        <artifactId>groovy-dateutil</artifactId>
        <version>2.5.7</version>
    </dependency>
    ```### 扩展的方法4: net -- http://docs.groovy-lang.org/latest/html/groovy-jdk/java/net/



### 扩展的方法5: sql

0. http://docs.groovy-lang.org/latest/html/groovy-jdk/java/sql/

### 扩展的方法6: time

0. http://docs.groovy-lang.org/latest/html/groovy-jdk/java/time/

### 扩展的方法7: awt

0. http://docs.groovy-lang.org/latest/html/groovy-jdk/java/awt/
