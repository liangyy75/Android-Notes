- [links](#links)
- [basic1](#basic1)
- [数组与函数](#%e6%95%b0%e7%bb%84%e4%b8%8e%e5%87%bd%e6%95%b0)
- [函数进阶](#%e5%87%bd%e6%95%b0%e8%bf%9b%e9%98%b6)
- [Lambda表达式](#lambda%e8%a1%a8%e8%be%be%e5%bc%8f)
- [关键字表达式](#%e5%85%b3%e9%94%ae%e5%ad%97%e8%a1%a8%e8%be%be%e5%bc%8f)
- [闭包](#%e9%97%ad%e5%8c%85)
- [运算符](#%e8%bf%90%e7%ae%97%e7%ac%a6)
- [字符串](#%e5%ad%97%e7%ac%a6%e4%b8%b2)
- [区间语句](#%e5%8c%ba%e9%97%b4%e8%af%ad%e5%8f%a5)
- [集合与映射](#%e9%9b%86%e5%90%88%e4%b8%8e%e6%98%a0%e5%b0%84)
- [构造方法](#%e6%9e%84%e9%80%a0%e6%96%b9%e6%b3%95)
- [类与对象1](#%e7%b1%bb%e4%b8%8e%e5%af%b9%e8%b1%a11)
- [类与对象2](#%e7%b1%bb%e4%b8%8e%e5%af%b9%e8%b1%a12)
- [类与对象3](#%e7%b1%bb%e4%b8%8e%e5%af%b9%e8%b1%a13)
- [常用操作符](#%e5%b8%b8%e7%94%a8%e6%93%8d%e4%bd%9c%e7%ac%a6)
- [特性](#%e7%89%b9%e6%80%a7)
- [Android相关](#android%e7%9b%b8%e5%85%b3)
- [xml](#xml)
- [json](#json)
- [file](#file)
- [http/tcp/udp](#httptcpudp)
- [工具](#%e5%b7%a5%e5%85%b7)
- [basic2](#basic2)

### links

* [Kotlin 知识梳理(1) - Kotlin 基础](https://www.jianshu.com/p/f9e78d6c54bd)
* [Kotlin学习资料汇总(持续更新...)](https://juejin.im/post/5aa64556f265da238c3a51d3)
* [语法基础——Kotlin语法基础](https://blog.csdn.net/qq_30379689/article/details/81984443) finished
* [Kotlin 易百](https://www.yiibai.com/kotlin)
* [抛弃 Java 改用 Kotlin 的六个月后，我后悔了](https://cloud.tencent.com/developer/news/249347)
* [Kotlin中文网](https://www.kotlincn.net/)

### basic1

1. 主函数
    ```kt
    fun main(args: Array<String>) { println("Hello World") }
    ```
2. 可以省略分号
3. 注释
    1. 单行: //
    2. 多行: /**/，而且支持嵌套
4. 常量: val修饰常量，编译器规定常量必须初始化，若不想初始化，可用by lazy{}对常量进行懒加载。有类型推断
    ```kt
    val a: Int = 1                     // 强类型常量
    val b = 2                          // 弱类型常量
    const val c = "Hello"              // 编译器常量
    val a: String by lazy{"lazy init"} // 懒加载常量
    ```
5. 变量: var修饰变量，编译器规定变量必须初始化，若不想初始化，可用lateinit关键字限制报错。有类型推断
    ```kt
    lateinit var a: Int                  // 未初始化变量，必须声明类型
    var x = 5                            // 初始化变量
    var x1 = "x is $x"                   // 获取变量的值：$变量
    var x2 = "${x1.replace("is", "was")}"// 内嵌表达式：${表达式}
    var str = """<html>
            <a href="">go</a>
        </html>"""                       // 段落
    ```
6. 空值检测
    ```kt
    fun main(args: Array<String>) {
        println(args?.size)                //if not null
        println(args?.size ?: "empty")     //if not null and else
        val value = "str"
        println(value.firstOrNull() ?: "")  //if not null and get first
        val a : Int = 1
        val b : Int = 2
        val values : Map<String, String> = HashMap<String, String>()
        values.plus(Pair<String, String>("key", "value"))
        println(values["key"] ?: a + b)     //if not null and else + 表达式
        value?.let{ }                       //if not null + 代码块
        value!!.let{ }                      //告诉编译器不需要判空
    }
    ```
7. 字符串比较
    * ==：在kt中相当于java的equals()
    * ===：在kt中相当于java的==
8. 不支持将较小数据类型隐式转换为较大数据类型(在java中支持)。例如，Int不能分配转换为Long或Double，会在编译阶段出错。但又非常明显的转换函数
    ```kt
    toByte()
    toShort()
    toInt()
    toLong()
    toFloat()
    toDouble()
    toChar()
    ```
9.  输入输出
    ```kt
    print(obj: Any?): Unit
    println(obj: Any? = null): Unit
    readLine(): String
    // java.util.Scanner
    val read = Scanner(System.`in`)
    read.next()  // nextByte / nextShort / nextInt / nextLong / nextDouble / nextFloat / next / nextChar / nextBoolean
    // java.io.Console
    ```

### 数组与函数

1. 数组定义
    ```kt
    // 每种基本类型都有对应的数组创建方法，类似于定制版
    var array: IntArray = intArrayOf(1, 3, 5, 7)
    var array: CharArray = charArrayOf('H', 'E', 'L', 'L', 'O')
    // 基于泛性的创建方法，泛型也可省略，类似于通用版
    var array: Array<Char> = arrayOf('H', 'E', 'L', 'L', 'O')
    var array: Array<Any?> = Array(5, { null })
    ```
2. 数组和字符串转换
    ```kt
    // 第一种形式
    var array: Array<Char> = arrayOf('H', 'E', 'L', 'L', 'O')
    println(array.joinToString(""))
    // 第二种形式
    var array: CharArray = charArrayOf('H', 'E', 'L', 'L', 'O')
    println(String(array))
    ```
3. 数组遍历
    ```kt
    // 第一种形式
    array.forEach { println(": $it") }
    // 第二种形式
    // array.forEach { ::println }  // error: overload resolution ambiguity
    // 第三种形式
    for ((index, value) in array.withIndex()) {
        println("$index -> $value")
    }
    for (index in array.indices) {
        println("marks[$index]: " + marks[index])
    }
    ```
4. 有返回值的函数
    ```kt
    // 第一种形式
    fun sum1(a: Int, b: Int): Int { return a + b }
    // 第二种形式
    fun sum2(a: Int, b: Int) = println("a + b = ${a + b}")  // return 不允许出现在 = 的函数中
    // 第三种形式
    fun sum3(a: Int, b: Int) = a + b
    // test
    fun main(args: Array<String>) {
        println(sum1(10, 20))
        println(sum2(10, 20))
        println(sum3(10, 20))
    }
    ```
5. 无返回值的函数
    ```kt
    fun printSum(a: Int, b: Int): Unit { /**/ }
    fun printSum(a: Int, b: Int) { /**/ }  // 只要里面没有return就是Unit了，相当于java的void
    ```

### 函数进阶

1. 默认参数的函数: ``fun foo(a: Int = 0, b: String = "") { /**/ }``
2. 变长参数的函数: 变长参数由vararg关键字决定，数组参数可通过*方式传参，前面的参数可以不使用名字指定，后面的参数必须使用具名参数
    ```kt
    fun say(double: Double, vararg ints: Int, string: String) { /**/ }
    val array = intArrayOf(1, 3, 4, 5)
    say(2.0, *array, string = "Hi")
    ```
3. 扩展函数: 你可以给父类添加一个方法，这个方法将可以在所有子类中使用
    ```kt
    fun Activity.toast(message: CharSequence, duration: Int = Toast.LENGTH_SHORT) {
        Toast.makeText(this, message, duration).show()
    }
    ```
4. 智能类型推测: 判断一个对象是否为一个类的实例，可以使用is关键字与Java中的instanceof关键字类似，但在Kotlin中如果已经确定了一个对象的类型，可以在接下来的代码块中直接作为这个确定类型使用
    ```kt
    fun getStringLength(obj: Any): Int? {
        if (obj is String) { return obj.length }   // 类型判断后，obj会被系统自动转换为String类型
        if (obj !is String) {  }                    // 同时还可以使用!is，来取反
        return null                              // 代码块外部的obj仍然是Any类型的引用
    }
    ```
5. 复合函数
    ```kt
    infix fun <P1, P2, R> Function1<P1, P2>.andThen(function: Function1<P2, R>): Function1<P1, R> {
        return fun(p1: P1): R { return function.invoke(this.invoke(p1)) }
    }
    var add = { i: Int -> i + 5 }
    var plus = { i: Int -> i * 2 }
    var addAndPlus = add andThen plus
    println(addAndPlus(8))  // (8 + 5) * 2 = 26
    ```
6. 函数的科理化: 指的是函数中传递的多个参数可转换为多个函数来进行链接
    ```kt
    // 科理化前的函数
    fun log(tag: String, target: OutputStream, message: Any?) = target.write("$tag $message\n".toByteArray())
    log("Hensen", System.out, "HelloWorld")
    // 科理化后的函数
    fun log(tag: String)
        = fun(target: OutputStream)
        = fun(message: Any?)
        = target.write("$tag $message\n".toByteArray())
    log("Hensen")(System.out)("HelloWorld")
    ```
7. 尾递归
    1. 一般递归
        ```kt
        fun recursiveSum(n: Long): Long {
            return if (n <= 1) n else (recursiveSum(n - 1) + n)
        }
        ```
    2. 尾递归声明
        ```kt
        tailrec fun recursiveSum(n: Long, semiResult: Long = 0): Long {
            return if (n <= 0) semiResult else recursiveSum(n - 1, n + semiResult)
        }
        ```
8. 内联函数
    1. 内联函数使用关键字内联声明，内联函数的使用增强了高阶函数的性能。内联函数告诉编译器将参数和函数复制到调用站点。虚函数或局部函数不能声明为内联。 以下是内联函数内部不支持的一些表达式和声明：
        - 局部类声明
        - 内部嵌套类的声明
        - 函数表达式
        - 声明局部函数
        - 局部可选参数的默认值
    2. 基本示例
        ```kt
        fun main(args: Array<String>) {
            inlineFunc({ println("调用内联函数") })
        }
        inline fun inlineFunc(myFunc: () -> Unit) {
            myFunc()  // 这里会被替换为上面传入的代码
            println("内联函数内的代码")
        }
        // 调用内联函数
        // 内联函数内的代码
        ```
    3. 非局部控制流程
        ```kt
        fun main(args: Array<String>) {
            inlineFunc({ println("调用内联函数"); return }, { println("内联函数中的下一个参数") })
        }
        inline fun inlineFunc(myFunc: () -> Unit, nextFunc: () -> Unit) {
            myFunc()
            nextFunc()
            println("内联函数内的代码")
        }
        // 调用内联函数
        ```
    4. 不希望内联，希望保留函数特征时，可以
        ```kt
        inline fun inlineFunc(myFunc: () -> Unit, noinline nextFunc: () -> Unit) { /* ... */ }  // 这时nextFunc不可以使用return语句了，除非不是Unit
        ```
    5. crossinline: https://blog.csdn.net/u013009899/article/details/78584994
9. 函数返回:  一个函数中，如果存在一个lambda表达式，在该lambda中不支持直接进行return退出该函数，但一个内部函数可以，当然如果是。
    ```kt
    intArrayOf(1, 3, 4, 6).forEach label1@{
        if (it % 2 == 1) return@label1
        println(it)
    }
    ```

### Lambda表达式

1. 定义Lambda表达式
    ```kt
    var sum: (Int, Int) -> Int = { arg1: Int, arg2: Int -> arg1 + arg2 }
    sum(1,2)  // 使用第一种方式
    sum.invoke(1,2)  // 第二种
    ```
2. 带有return的Lambda表达式: Lambda表达式并不是函数，如果直接return，会退出当前调用Lambda表达式的函数，而不是退出当前的Lambda表达式，可以使用@别名的方式退出
    ```kt
    var array: Array<Char> = arrayOf('H','E','L','L','O')
    array.forEach ForEach@{
        if (it == 'L') return@ForEach
        println(it)
    }
    ```
3. 带有run的Lambda表达式: 调用某对象的run函数，在函数块内可以通过this指代该对象。返回值为函数块的最后一行或指定return表达式
    ```kt
    val a = "string".run { println(this); 3 }
    println(a)  // 3
    ```
4. 带有let的Lambda表达式
    ```kt
    val a = "string".let { println(it); 3 }
    println(a)  // 3
    ```
5. 带有with的Lambda表达式
    ```kt
    val a = with("string") { println(this); 3 }
    println(a)  // 3
    ```
6. 带有apply的Lambda表达式
    ```kt
    val a = "str".apply { println(this)  /* str */ }
    println(a)  // str
    ```
7. 带有also的Lambda表达式
    ```kt
    val a = "str".also { println(it)  /* str */ }
    println(a)  // str
    ```
8. 小结
    1. run：使用this指定当前对象，最后一行为返回值
    2. with：使用this指定当前对象，最后一行为返回值，写法上有区别
    3. let：使用it指定当前对象，最后一行为返回值
    4. apply：使用this指定当前对象，返回值为该对象自己
    5. also：使用it指定当前对象，返回值为该对象自己

### 关键字表达式

1. when
    ```kt
    fun transform(x: Any) {
        return when (x) {
            is Int -> {
                println("line1: $x is Int")
                println("line2: $x is Int")
            }
            in 1..100 -> println("$x is in 1-100")
            0, -1, -2 -> println("$x is 0 or -1 or -2")
            "Hello" -> println("Greeting")
            !in 0..100 -> println("$x is not in 0-100")
            // else不写则不做默认操作
            else -> throw IllegalArgumentException("Invalid x param value")
        }
    }
    ```
2. try-catch
    ```kt
    fun test() {
        return try {
            count()
        } catch (e: ArithmeticException) {
            // throw IllegalStateException(e)
            -1
        } finally {
            // ...，不影响 return
            // 注意：如果程序退出(通过调用exitProcess(Int)或导致进程中止的任何错误)，将不执行finally块。
        }
    }
    ```
3. if
    ```kt
    fun foo (param: Int) {
        return if (param == 1) { "one"
        } else if (param == 2) { "two"
        } else { "three" }
    }
    a = if (a1 > a2) a1 else a2
    ```
4. with
    ```kotlin
    class Turtle {
        fun penDown()
        fun penUp()
        fun turn(degrees: Double)
        fun forward(pixels: Double)
    }
    val myTurtle = Turtle()
    with (myTurtle) { // 画一个 100 像素的正方形
        penDown()
        for(i in 1..4) { forward(100.0); turn(90.0); }
        penUp()
    }
    ```
5. for
    ```kt
    val items = listOf("apple", "banana", "kiwifruit")
    for (item in items) { println(item) }
    for (i in 1..5) print(i)
    for (i in 1..5 step 2) print(i)
    for (i in 5..1) print(i)  // nothing
    for (i in 5 downTo 1) print(i)
    for (i in 5 downTo 1 step 2) print(i)
    val items = listOf("apple", "banana", "kiwifruit")
    for (index in items.indices) {
        println("item at $index is ${items[index]}")
    }
    ```
6. while
    ```kt
    val items = listOf("apple", "banana", "kiwifruit")
    var index = 0
    while (index < items.size) {
        println("item at $index is ${items[index]}")
        index++
    }
    ```
7. do...while: 类似于while，但会先执行一次
8. break/continue
    ```kt
    for (i in 1..5) {
        if (i == 2) {
            continue
        }
        if (i == 4) {
            break
        }
        print(i)
    }
    // 重点
    println()
        loop@ for (i in 1..5) {
        println()
        for (j in 1..5) {
            print("($i, $j);")
            if ((i + j) > 5) {
                break@loop
            }
        }
    }
    println()
    loop@ for (i in 1..5) {
        println()
        for (j in 1..5) {
            print("($i, $j);")
            if ((i + j) > 5) {
                continue@loop
            }
        }
    }
    // (1, 1);(1, 2);(1, 3);(1, 4);(1, 5);
    //
    // (1, 1);(1, 2);(1, 3);(1, 4);(1, 5);
    // (2, 1);(2, 2);(2, 3);(2, 4);
    // (3, 1);(3, 2);(3, 3);
    // (4, 1);(4, 2);
    // (5, 1);
    ```
9. 中缀表达式 infix
    ```kt
    Class Book{
        infix fun on(any: Any): Boolean{
            return false
        }
    }
    Class Desk{}
    if (Book on Desk) {
        println("book on the desk")
    }
    ```
10. is / !is / as / as?
    ```kt
    if (a is String) a.length else -1  // 不用将a转换为类型String再来获取length了，默认转化
    if (a !is String) -1 else a.length  // 不用将a转换为类型String再来获取length了，默认转化
    val str: String = obj as String  // obj不能是可空类型，但可以是Any/CharSequence等
    val str: String? = obj as? String?  // 如果无法进行转换，则返回null
    ```

### 闭包

1. 函数内部可以定义函数，属于闭包
    ```kt
    fun add(x: Int): (Int) -> Int {
        return fun(y: Int): Int {
            return x + y
        }
    }
    ```
2. 闭包持有函数内部的运行状态
    ```kt
    fun justCount(): () -> Unit {
        var count = 0  // 被函数内部持有
        return {
            println(count++)
        }
    }
    fun main(args: Array<String>) {
        val count = justCount()
        count()  // 输出结果：0
        count()  // 输出结果：1
        count()  // 输出结果：2
    }
    ```
3. 自行闭包: 定义闭包的同时直接执行闭包，一般用于初始化上下文环境
    ```kt
    println(({ x: Int, y: Int ->
        println("${x + y}")
        x + y
    })(1, 3))
    ```

### 运算符

1. 算数运算符
    ```kt
    + plus
    - minus
    * times
    / div
    % rem
    ```
2. 关系运算符
    ```kt
    > a.compareTo(b) > 0
    < a.compareTo(b) < 0
    >= a.compareTo(b) >= 0
    <= a.compareTo(b) <= 0
    == a?.equals(b) ?: (b === null)
    != !(a?.equals(b) ?: (b === null))
    ```
3. 赋值运算符
    ```kt
    += plusAssign
    -= minusAssign
    *= timesAssign
    /= divAssign
    %= remAssign
    ```
4. 一元运算符
    ```kt
    + unaryPlus()
    - unaryMinus()
    ++ inc()
    -- dec()
    ! not()
    ```
5. 按位运算符
    ```kt
    && a and b
    || a or b
    ! a.not()
    ```
6. 逻辑运算符
    ```kt
    a.shl(b)  // 符号左移，没有 << 这样的表示形式
    a.shr(b)  // 符号右移
    a.ushr(b) // 无符号右移
    a.and(b)  // 按位与
    a.or(b)   // 按位或
    a.xor(b)  // 按位异或
    a.inv()   // 按位取反
    ```
7. 自定义运算符
    ```kt
    class Complex(var arg1: Double,var arg2: Double){
        operator fun plus(other: Complex): Complex{
            return Complex(arg1 + other.arg1, arg2 + other.arg2)
        }
        operator fun plus(other: Int): Complex{
            return Complex(arg1 + other,arg2)
        }
        operator fun invoke(): Double{
            return Math.hypot(arg1,arg2)
        }
        overide fun toString(): String{
            return "${arg1} and ${arg2}"
        }
    }
    val c1 = Complex(3.0,4.0)
    val c1 = Complex(2.0,5.0)
    println(c1 + c2) //5.0 and 9.0
    println(c1 + 5) //8.0 and 4.0
    println(c1()) //5
    ```

### 字符串

1. 声明
    ```kt
    val a = "Hello, Kotlin"
    val b = """line1
    line2"""  // 不可转义的原始字符串
    ```
2. 属性
    ```kt
    length: Int
    indices: IntRange
    lastIndex: Int
    ```
3. 函数
    ```kt
    // compareTo / get / getOrElse / getOrNull / plus / subSequence / contains / count / elementAt / indexOf / indexOfFirst / indexOfLast / trimMargin
    drop(n: Int): String  // 返回删除了前面的n个字符的字符串
    dropLast(n: Int): String
    dropWhile(predicate: (Char) -> Boolean): String  // 返回一个包含所有字符的字符序列，但满足给定谓词的第一个字符除外。
    ```
4. 特殊字符串
    1. 一般字符串: ``val a: String = "abc"``
    2. 模板字符串: ``val b: String = "abc ${"abc"}"``
    3. 原始字符串
        ```kt
        val c: String = """line3
        line2
        line1"""
        ```

### 区间语句

1. 定义区间
    ```kt
    var range = 0..1024 //[0,1024]闭区间
    var range = 0 until 1024 //[0,1024)半开区间
    var range = 0..-1 //空区间
    ```
2. 检查x是否在指定区间里面
    ```kt
    val x = 10
    val y = 9
    if (x in 1..y+1) {
        println("fits in range")
    }
    ```
3. 检查list.size是否在list的索引上
    ```kt
    val list = listOf("a", "b", "c")
    if (-1 !in 0..list.lastIndex) {
        println("-1 is out of range")
    }
    if (list.size !in list.indices) {
        println("list size is out of valid list indices range too")
    }
    ```
4. 区间遍历
    ```kt
    for (x in 1..10 step 2) {
        print(x) //13579
    }
    for (x in 9 downTo 0 step 3) {
        print(x) //9630
    }
    ```

### 集合与映射

1. 初始化
    ```kt
    // 可修改
    val mutableList = mutableListOf()
    val arrayList = arrayListOf()
    val arrayList2 = ArrayList<String>(10)
    val map1 = HashMap<String, String>()
    val map2 = hashMapOf()
    val map3 = mutableMapOf()
    val set1 = hashSetOf()
    val set2 = mutableSetOf()
    // 不可修改
    var list = listOf(0, 1, 2)
    val set = setOf(1, 2, 4)
    val map = mapOf<Int, String>(1 to "Java", 4 to "Kotlin", 3 to "Python")
    ```
2. 遍历
    ```kt
    val items = listOf("a", "b", "c")
    for (item in items) {
        println(item)
    }
    for ((k, v) in map) {
        println("$k -> $v")
    }
    for (e in map) {
        println("${e.key} -> ${e.value}")
    }
    ```
3. 集合判断
    ```kt
    val items = listOf("apple", "balanace", "coffee")
    when {
        "orange" in items -> println("juicy")
        "apple" in items -> println("apple is fine too")
    }
    val flag: boolean = items.contains("apple")
    val flag: boolean = items.containsAll(listOf("apple", "balanace"))
    ```
4. List常用函数
    ```kt
    public interface List<out E> : Collection<E> (source)
    // abstract fun contains(element: E): Boolean
	// abstract fun containsAll(elements: Collection<E>): Boolean
	// abstract operator fun get(index: Int): E
	// abstract fun indexOf(element: E): Int
	// abstract fun isEmpty(): Boolean
	// abstract fun iterator(): Iterator<E>
	// abstract fun lastIndexOf(element: E): Int
	// abstract fun listIterator(): ListIterator<E>
	// abstract fun listIterator(index: Int): ListIterator<E>
	// abstract fun subList(fromIndex: Int, toIndex: Int): List
    // drop dropLast dropWhile
    // indexOf indexOfFirst indexOfLast
    ```
5. MutableList常用函数
    ```kt
    public interface MutableList<E> : List<E>, MutableCollection<E> (source)
    // abstract fun add(element: E): Boolean
	// abstract fun add(index: Int, element: E)
	// abstract fun addAll(elements: Collection<E>): Boolean
	// abstract fun clear()
	// abstract fun listIterator(): MutableListIterator<E>
	// abstract fun listIterator(index: Int): MutableListIterator<E>
	// abstract fun remove(element: E): Boolean
	// abstract fun removeAll(elements: Collection<E>): Boolean
	// abstract fun removeAll(action: (E) -> Boolean): Boolean
	// abstract fun removeAt(index: Int): E
	// abstract fun retainAll(elements: Collection<E>): Boolean  // 只保留的对象，Boolean表示是否需要修改该链表
    // abstract fun retainAll(action: (E) -> Boolean): Boolean
	// abstract operator fun set(index: Int, element: E): E
	// abstract fun subList(fromIndex: Int, toIndex: Int): MutableList<E>
    ```
6. ArrayList常用函数
    ```kt
    // ArrayList<E>()
	// ArrayList(capacity: Int)
	// ArrayList(elements: Collection<E>)
	// open fun add(element: E): Boolean
	// open fun add(index: Int, element: E)
	// open fun addAll(elements: Collection<E>): Boolean
	// open fun addAll(index: Int, elements: Collection<E>): Boolean
	// open fun clear()
	// open fun get(index: Int): E
	// open fun indexOf(element: E): Int
	// open fun lastIndexOf(element: E): Int
	// open fun remove(element: E): Boolean
	// open fun removeAt(index: Int): E
	// open fun removeRange(startIndex: Int, endIndex: Int)
	// open fun set(index: Int, element: E): E
	// open fun toArray(): Array<Any?>
	// open fun toString(): String
	// fun trimToSize()
    ```
7. Map常用函数
    ```kt
    public interface Map<K, out V> (source)
    // abstract val entries: Set<Entry<K, V>>
	// abstract val keys: Set<K>
	// abstract val values: Collection<V>
	// fun <K, V> Map<key, value>.getValue(key: K): V
	// operator fun <V, V1 : V> Map<in String,V>.getValue( thisRef: Any?, property: KProperty<*>): V1
	// operator fun <K, V> Map<out K, V>.contains(key: K): Boolean
	// fun <K> Map<out K, *>.containsKey(key: K): Boolean
	// fun <K, V> Map<K, V>.containsValue(value: V): Boolean
    // fun <K, V> Map<K, V>.get(key: K): V
	// fun <K, V> Map<out K, V>.getOrDefault(key: K, defaultValue: V ): V
	// fun <K, V> Map<out K, V>.asIterable(): Iterable<Entry<K, V>>
	// fun <K, V> Map<out K, V>.asIterable(): Iterable<Entry<K, V>>
	// fun <K, V> Map<out K, V>.asSequence(): Sequence<Entry<K, V>>
	// operator fun <K, V> Map<out K, V>.iterator(): Iterator<Entry<K, V>>
	// operator fun Map.minus(key: K): Map
	// operator fun <K, V> Map<out K, V>.minus(keys: Iterable<K>): Map<K, V>
	// operator fun <K, V> Map<out K, V>.minus(keys: Sequence<K>): Map<K, V>
	// operator fun <K, V> Map<out K, V>.plus(pair: Pair<K, V>): Map<K, V>
	// operator fun <K, V> Map<out K, V>.plus(pairs: Iterable<Pair<K, V>>): Map<K, V>
	// operator fun <K, V> Map<out K, V>.plus(pairs: Sequence<Pair<K, V>>): Map<K, V>
    ```
8. 

### 构造方法

1. 主构造函数
    1. Kotlin的构造函数可以写在类头中，跟在类名后面，如果有注解还需要加上关键字constructor
        ```kt
        class Person(private val name: String) {
            fun sayHello() {
                println("hello $name")
            }
        }
        ```
    2. 在主构造函数中不能有任何代码实现，如果有额外的代码需要在构造方法中执行，你需要放到init代码块中执行
        ```kt
        class Person(private var name: String) {
            init {
                name = "Zhang Tao"
            }
            fun sayHello() {
                println("hello $name")
            }
        }
        ```
2. 次构造函数: 存在两个或两个以上的构造方法时，可以增加次构造方法
    ```kt
    class Person(private var name: String) {
        private var description: String? = null
        init {
            name = "Zhang Tao"
        }
        constructor(name: String, description: String) : this(name) {
            this.description = description
        }
        fun sayHello() {
            println("hello $name")
        }
    }
    ```

### 类与对象1

1. 输出类名
    ```kt
    println(HelloWorld::class.java.simpleName)  // 输出类名: java的
    println(HelloWorld::class.java.name)  // 输出包名+类名: java的
    println(HelloWorld.class)
    println(HelloWorld.javaClass.kotlin)
    ```
2. 创建对象
    ```kt
    val rectangle = Rectangle(5.0, 2.0)
    val triangle = Triangle(3.0, 4.0, 5.0)
    ```
3. 数据类: data修饰的类称之为数据类，当data修饰后，会自动将所有成员用operator声明，即为这些成员生成getter()和setter()
    ```kt
    data class Customer(val name: String, val email: String)
    // 编译器自动从主构造函数中的属性导入下面这些成员函数
    // equals()
    // hashCode()
    // toString()
    // componentN()：函数返回对应着声明的参数顺序
    // copy()
    ```
4. 内部类: Kt默认的内部类为静态内部类，可以使用inner关键字将内部类变为非静态内部类，且可使用注解去获取外部类的成员属性
    ```kt
    class Outter {
        var a = 5
        inner class Inner {
            var a = 6
            fun getOutterA () = println(this@Outter.a)
        }
    }
    ```
5. 单例类: object关键字表示该类是单例
    ```kt
    class Single private constructor() {
        companion object {
            fun get(): Single = return Holder.instance
        }
        private object Holder { val instance = Single() }
    }
    // or
    object Resource { val name = "Name" }
    Resource.INSTANCE.name
    ```

### 类与对象2

1. 枚举类: 枚举默认没有数值，如果需要固定类型的数值，可在类名后声明参数类型
    ```kt
    enum class Programer (val id: Int) {
        JAVA(0), KOTLIN(1), C(2), CPP(3), ANDROID(4);
        fun getTag(): String{
            return "$id + $name"
        }
    }
    // 使用
    println(Programer.JAVA.getTag())
    ```
2. 密封类
    1. sealed修饰的类称为密封类，用来表示受限的类层次结构
        ```kt
        sealed class BaseClass {
            class Test1 : BaseClass() {
                override fun test() { println("Test1实例") }
            }
            class Test2 : BaseClass() {
                override fun test() { println("Test2实例") }
            }
            object Test3 : BaseClass() {
                override fun test() { println("Test3实例") }
            }
            open fun test() { println("BaseClass实例") }
        }
        ```
    2. 密封类与枚举的区别：
        * 密封类是枚举类的扩展
        * 枚举类型的值集合是受限的，且每个枚举常量只存在一个实例
        * 密封类的一个子类可以有可包含状态的多个实例
3. 继承: 在class中加open关键字即可被继承
    ```kt
    open class Person (var name:String, var age:Int) {}
    ```
4. 接口代理: 接口代理表示代理人可直接调用接口代理的方法
    ```kt
    // 代理driver和writer，当执行manager.driver()，Manager类会去调用代理的driver.driver()
    class Manager(val driver: Driver, val writer: Writer) : Driver by driver, Writer by writer
    interface Driver{ fun driver() }
    interface Wirter{ fun wirter() }
    ```

### 类与对象3

1. 伴生对象: 用companion关键字修饰对象内的方法，我们称companion修饰的对象为伴生对象，本质是静态方法。如果在Java文件中想通过类名的方式去调用静态方法，则需要加入注解才可以使用
    ```kt
    class StringUtils {
        companion object {
            @JvmStatic
            fun isEmpty(str: String): Boolean {
                return "" == str
            }
            @JvmField
            var TAG = "StringUtils"
        }
    }
    ```
2. 方法重载: 由于Kt中有默认参数的性质，所以方法的重载可以用默认参数来实现，如果在Java文件中想使用Kt重载的话，就需要加入注解才可以使用
    ```kt
    class StringUtils {
        @JvmOverloads
        fun a(int: Int = 0): Int{
            return int
        }
    }
    ```
3. 匿名对象: 使用object对象表示匿名对象
    ```kt
    btn?.setOnClickListener(object : View.OnClickListener{
        override fun onClick(v: View?) {}
    })
    ```

### 常用操作符

1. 下标操作类
    * contains：判断是否有指定元素
    * elementAt：返回对应的元素，越界会抛IndexOutOfBoundsException
    * indexOf：返回指定元素的下标，没有返回-1
    * firstOrNull：返回符合条件的第一个元素，没有返回null
    * lastOrNull：返回符合条件的最后一个元素，没有返回null
    * singleOrNull：返回符合条件的单个元素，如有没有符合或超过一个，返回null
2. 判断类
    * any：判断集合中 是否有满足条件的元素
    * all：判断集合中的元素是否都满足条件
    * none：判断集合中是否都不满足条件，是则返回true
    * count：查询集合中满足条件的元素个数
    * reduce：从第一项到最后一项进行累计
3. 过滤类
    * filter：过滤 掉所有满足条件的元素
    * filterNot：过滤所有不满足条件的元素
    * filterNotNull：过滤NULL
    * take：返回前n个元素
4. 转换类
    * map：转换成另一个集合
    * mapIndexed：除了转换成另一个集合，还可以拿到Index
    * mapNotNull：执行转换前过滤掉 为 NULL 的元素
    * flatMap：自定义逻辑合并两个集合
    * groupBy：按照某个条件分组，返回Map
5. 排序类
    * reversed：反序
    * sorted：升序
    * sortedBy：自定义排序
    * sortedDescending：降序
6. 实战操作符
    ```kt
    val fruits = listOf("banana", "avocado", "apple", "kiwifruit")
    fruits
        .filter { it.startsWith("a") }
        .sortedBy { it }
        .map { it.toUpperCase() }
        .forEach { println(it) }
    ```

### 特性

1. 懒加载: ``val p : String by lazy { /* 计算该字符串 */ }``
2. 安全类型转换: 父类转成子类会抛出类型转换失败的错误，如果采用as?的方式，则返回null ``var child : Child = parent as? Child``
3. 输出可执行文件: 在Gradle添加依赖指定main函数文件，后缀名为Kt。刷新Gradle，在Gradle右边栏点击distribution/installDist，生成的程序在build/install目录下
    ```kt
    apply plugin:'application'
    mainClassName = "com.hensen.android.MyCalcKt"
    ```
4. internal关键字: 在变量中使用internal关键字表示成员变量只允许在模块内能被访问到 ``internal val a``
5. 尾递归: 对于递归函数，如果递归函数并未对递归的结果进行操作，则可以使用 tailrec 关键字将递归声明为尾递归，尾递归会优化代码，将递归转换成迭代
    ```kt
    data class ListNode(val value: Int, var next: ListNode?)
    // 对递归的结果并未操作，属于尾递归
    tailrec fun findListNode(head: ListNode?, value: Int): ListNode? {
        head ?: return null
        if(head.value == value) return head
        return findListNode(head.next, value)
    }
    // 对递归的结果进行乘法运算，不属于尾递归
    fun factorial(n: Long): Long {
        return n * factorial(n - 1)
    }
    ```

### Android相关

1. view.find: 使用Ktolin的拓展函数，view.find替代findViewById ``var textView = view.find(R.id.textView)``
2. observable: Delegates.observable可以监听当前的变量值的变化，改变变量的值，即可触发observable
    ```kt
    private var mCurrentState: Int by Delegates.observable(-1) { _, old, new ->
        if (old != new) {
            RxBus.getDefault().post(ChannelPK_OnModelChange_Rank_EventArgs(new == 1))
            MLog.info(PKModelManager.TAG, "rank mode : $old -> $new")
        }
    }
    fun onModelChange() {
        mCurrentState = 1 //改变变量的值，即可触发observable
    }
    ```
3. bundle: 创建bundle已经不需要再去执行其各种put方法
    ```kt
    val bundle = bundleOf(
        "KET_INT" to 1,
        "KET_LONG" to 2L,
        "KET_BOOLEAN" to true,
        "KEY_NULL" to null,
        "KEY_ARRAY" to arrayOf(1, 2)
    )
    ```
4. Parcelize
    1. Parcelize已经不需要再写什么代码了，只需要继承和注解
        ```kt
        @Parcelize
        data class User(val name: String, val age: Int): Parcelize
        ```
    2. @Parcelize的使用需要在gradle声明变量
        ```kt
        androidExtensions {
            experimental = true
        }
        ```
5. Serializable: 指定Serializable的名字 ``class Book(@SerializedName(TXT) var txt: String)``
6. postDelay: 支持闭包和lambda表达式 ``handler.postDelay(50) {  }``
7. 注解: 如果说在Java文件中需要使用到KT的变量、静态方法、重载方法等，就需要注解声明
    * @JvmField：将属性编译为Java变量
    * @JvmStatic：将伴生对象编译为Java静态方法
    * @JvmOverloads：默认参数生成重载方法
    * @file:JvmName：指定Kotlin文件编译后的类名

### xml


### json


### file


### http/tcp/udp


### 工具

1. kotlinc
    ```
    C:\Users\liangyy75>kotlinc -help
    Usage: kotlinc-jvm <options> <source files>
    where possible options include:
    -classpath (-cp) <path>    Paths where to find user class files
    -d <directory|jar>         Destination for generated class files
    -include-runtime           Include Kotlin runtime in to resulting .jar
    -java-parameters           Generate metadata for Java 1.8 reflection on method parameters
    -jdk-home <path>           Path to JDK home directory to include into classpath, if differs from default JAVA_HOME
    -jvm-target <version>      Target version of the generated JVM bytecode (1.6, 1.8, 9, 10, 11 or 12), default is 1.6
    -module-name <name>        Name of the generated .kotlin_module file
    -no-jdk                    Don't include Java runtime into classpath
    -no-reflect                Don't include kotlin-reflect.jar into classpath
    -no-stdlib                 Don't include kotlin-stdlib.jar or kotlin-reflect.jar into classpath
    -script                    Evaluate the script file
    -script-templates <fully qualified class name[,]>
                                Script definition template classes
    -Werror                    Report an error if there are any warnings
    -api-version <version>     Allow to use declarations only from the specified version of bundled libraries
    -X                         Print a synopsis of advanced options
    -help (-h)                 Print a synopsis of standard options
    -kotlin-home <path>        Path to Kotlin compiler home directory, used for runtime libraries discovery
    -language-version <version> Provide source compatibility with specified language version
    -P plugin:<pluginId>:<optionName>=<value>
                                Pass an option to a plugin
    -progressive               Enable progressive compiler mode.
                                In this mode, deprecations and bug fixes for unstable code take effect immediately,
                                instead of going through a graceful migration cycle.
                                Code written in the progressive mode is backward compatible; however, code written in
                                non-progressive mode may cause compilation errors in the progressive mode.
    -nowarn                    Generate no warnings
    -verbose                   Enable verbose logging output
    -version                   Display compiler version
    @<argfile>                 Expand compiler arguments from the given file, containing one argument or file path per line
    ```
2. javac
    ```
    C:\Users\liangyy75>javac -help
    用法: javac <options> <source files>
    其中, 可能的选项包括:
    -g                         生成所有调试信息
    -g:none                    不生成任何调试信息
    -g:{lines,vars,source}     只生成某些调试信息
    -nowarn                    不生成任何警告
    -verbose                   输出有关编译器正在执行的操作的消息
    -deprecation               输出使用已过时的 API 的源位置
    -classpath <路径>            指定查找用户类文件和注释处理程序的位置
    -cp <路径>                   指定查找用户类文件和注释处理程序的位置
    -sourcepath <路径>           指定查找输入源文件的位置
    -bootclasspath <路径>        覆盖引导类文件的位置
    -extdirs <目录>              覆盖所安装扩展的位置
    -endorseddirs <目录>         覆盖签名的标准路径的位置
    -proc:{none,only}          控制是否执行注释处理和/或编译。
    -processor <class1>[,<class2>,<class3>...] 要运行的注释处理程序的名称; 绕过默认的搜索进程
    -processorpath <路径>        指定查找注释处理程序的位置
    -parameters                生成元数据以用于方法参数的反射
    -d <目录>                    指定放置生成的类文件的位置
    -s <目录>                    指定放置生成的源文件的位置
    -h <目录>                    指定放置生成的本机标头文件的位置
    -implicit:{none,class}     指定是否为隐式引用文件生成类文件
    -encoding <编码>             指定源文件使用的字符编码
    -source <发行版>              提供与指定发行版的源兼容性
    -target <发行版>              生成特定 VM 版本的类文件
    -profile <配置文件>            请确保使用的 API 在指定的配置文件中可用
    -version                   版本信息
    -help                      输出标准选项的提要
    -A关键字[=值]                  传递给注释处理程序的选项
    -X                         输出非标准选项的提要
    -J<标记>                     直接将 <标记> 传递给运行时系统
    -Werror                    出现警告时终止编译
    @<文件名>                     从文件读取选项和文件名
    ```

### basic2

1. 整数类型与位数: Byte(8) / Short(16) / Int(32) / Long(64) / Float(32) / Double(64)
2. kotlin优秀的类型推断例子
    ```kt
    var i = 32  // Int
    var l = 123L  // Long
    var d = 12.34  // Double
    var f = 56.78f  // Float
    var x = 0xACF  // 16进制数
    var b = 0b0100  // 2进制数
    // kotlin不支持8进制数
    ```
3. 如果整数太多，可以用下画线分隔出千分位或者万分位。如 var a = 1000_1000_1000;
4. Kotlin不支持自动扩展数字范围，转换必须手动进行。每一种数字都有一个转换成其他数字类型的函数。 ``toByte() / toShort() / toInt() /toLong() / toFloat() / toDouble() / toChar()``
5. toInt 方法只是截取整数部分，并非四舍五入，四舍五入需要Math.round。
6. 元组类型 Triple 和 Pair ，各自支持 3 个与 2 个 成员。如
    ```kt
    val a = Triple(3, "smg", true)
    val b = Pair(1, false)
    a.third
    b.second
    ```
7. 可空类型: Int? ，在所有类型后面加上 ? 。
8. package a.b.c; import a.b.c.Test as MyTest;
