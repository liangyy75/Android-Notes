- [links](#links)
- [基础](#基础)
- [常量与变量](#常量与变量)
- [类型](#类型)
- [操作符](#操作符)
- [控制语句](#控制语句)
- [函数](#函数)
- [异常](#异常)
- [导包](#导包)
- [级联调用](#级联调用)
- [异步支持](#异步支持)
- [类](#类)
- [注解](#注解)
- [collection](#collection)
- [regex](#regex)
- [io](#io)
- [time](#time)
- [thread](#thread)
- [process](#process)
- [socket](#socket)
- [json](#json)
- [xml](#xml)
- [database](#database)
- [作业: 贪吃蛇](#作业-贪吃蛇)
- [作业: dart client / dart server](#作业-dart-client--dart-server)
- [作业: dart charts](#作业-dart-charts)

### links

* [dart学习笔记](http://www.cndartlang.com/user/2) -- 暂时不行了
* [github dart 学习笔记](https://github.com/konieshadow/dart-tour)
* [dart 官网](https://dart.dev/guides)
* [语法基础——Dart语法基础](https://blog.csdn.net/qq_30379689/article/details/87260932)
* [Flutter中文网](https://book.flutterchina.club)
* [flutter 菜鸟教程](https://blog.csdn.net/duo_shine/column/info/25090)
* [Flutter 入门系列](https://blog.csdn.net/mengks1987/article/details/84868953)
* [Flutter中文网](https://flutterchina.club/) -- Dart语言
* [Flutter文档汇总](https://segmentfault.com/a/1190000014722308)

### 基础

1. 主函数
    ```dart
    void main(List<String> args) { print("Hello World"); }
    ```
2. 注释: // /**/
3. 别名: typedef能对方法进行重命名，且只能使用在function类型，在构造函数中也可以传递方法
    ```dart
    typedef int Compare(Object a, Object b);
    class SortedCollection {
        Compare compare;
        SortedCollection(this.compare);
    }
    int sort(Object a, Object b) => 0;
    main() {
        SortedCollection coll = new SortedCollection(sort);
        assert(coll.compare is Function);
        assert(coll.compare is Compare);
    }
    ```

### 常量与变量

1. 如果未初始化的变量，其默认值为null
    ```dart
    const a = 10;
    var b = 10;
    ```
2. Dart没有public、protected、和private关键字，标识符(_)表示私有的意思，其余默认表示public
3. final和const都表示常量的意思，其值都不可修改，两者最大的区别
    1. final属于运行时变量，在初始化的时候去创建的变量，可以用变量来初始化
    2. const属于编译时变量，在编译期间就被创建的变量，只能用编译时常量来初始化
    3. 示例
        ```dart
        final a = 10;
        const b = 10;
        class Main() {
            final a = 10;
            // 如果const变量在类中，需要加上static
            // 因为类未初始化，该值无法被视为编译时变量，否则会报错
            static const b = 10;
        }
        void main() {
            const a = [1, 2, 3, Point()];  // Error
            const b = [1, 2, 3, 4, ];  // Success
            final c = [1, 2, 3, Point()];  // Success
        }
        ```
4. dart语法的const相当于java这种写法
    ```java
    private static final int a = 10;
    ```
5. 若干个表达式引用为编译时常量，其结果也是编译时常量
    ```java
    const a = "Hello";
    const b = "World";
    const c = "$a $b";
    ```

### 类型

1. 基本类型
    * numbers: 只支持int、double
    * strings
    * booleans
    * lists
    * maps
    * runes
    * symbols
    * "abc" is String
2. number
    * 运算符: +、-、*、/、~/、%
    * 常用属性: isNaN、isEven、isOdd
    * 常用方法: abs()、round()、floor()、ceil()、toInt()
    * 特殊运算符: ?.、??、??=
    * /和~/的区别
        ```dart
        int a = 10;
        int b = 2;
        print(a / b);  // 5.0
        print(a ~/ b);  // 5
        ```
    * ??和??=的区别
        ```dart
        // ??属于条件表达式
        // 如果b是null，则执行toString()并返回其结果，如果不是null，则返回其值
        b ?? b.toString();
        // ??=属于赋值表达式
        // 如果b是null，则赋值给b，如果不是null，则b的值保持不变
        b ??= value;
        ```
    * 16进制 -- final a = 0x100;
3. boolean: true和false所创建的对象都是编译时常量。当Dart需要一个布尔值的时候，只有true对象才被认为是true，所有其他的值都是false
4. string
    ```dart
    String str1 = 'Hello World';  // 普通字符串
    String str2 = """<html>
        <a href="">go</a>
    </html>""";  // 段落
    String str3 = r' Hello /n Word';  // 不转义
    print(str3 * 5);  // 重复5次
    print(str3 == str4);  // 相等
    print(str3[0]);  // 获取字符
    print('a + b = c ==> $a + $b = ${a + b}');  // 插值表达式
    // --- StringBuffer
    StringBuffer sb = new StringBuffer();
    sb.write("Use a StringBuffer ");
    sb.writeAll(['for ', 'efficient ', 'string ', 'creation ']);
    sb..write('if you are ')..write('building lots of string.');
    print(sb.toString());
    sb.clear();
    ```
5. list
    ```dart
    var list = [1,2,3];
    var list = const [1,2,3];  // 定义不可变列表
    var list = new List();
    var list = new List<String>.generate(1000, (i) => "Item $i");
    list..add(4)..addAll([5, 6]);
    assert(list.length == 6);
    assert(list[0] == 1);
    assert(list.indexOf(6) == 5);
    list.sort((a, b) => a.compareTo(b));  // return <0 表示小于，0表示相同，>0表示大于
    list..removeAt(5)..clear();
    ```
6. set // 其实与java/c++中的set非常类似
    ```dart
    var ingredients = new Set();
    ingredients.addAll(['gold', 'titanium', 'xenon']);
    // 添加已存在的元素无效
    ingredients.add('gold');
    assert(ingredients.length == 3);
    // 删除元素
    ingredients.remove('gold');
    // 检查在Set中是否包含某个元素
    assert(ingredients.contains('titanium'));
    // 检查在Set中是否包含多个元素
    assert(ingredients.containsAll(['titanium', 'xenon']));
    ingredients.addAll(['gold', 'titanium', 'xenon']);
    // 获取两个集合的交集
    var nobleGases = new Set.from(['xenon', 'argon']);
    var intersection = ingredients.intersection(nobleGases);
    assert(intersection.contains('xenon') && intersection.length == 1);
    // 检查一个Set是否是另一个Set的子集
    var allElements = ['hydrogen', 'helium', 'lithium', 'beryllium', 'gold', 'titanium', 'xenon'];
    assert(ingredients.isSubsetOf(allElements));
    ```
7. map
    ```dart
    var map = {'1':'c','2':'java'};
    var map = const {'1':'c','2':'java'};  // 定义不可变映射
    var map = new Map();
    var map = new Map<int, String>();
    ```
8. Set、List、Map都继承自Iterable，是可以迭代的
    1. collection.forEach((x) => print(x));//forEach的参数为Function
9.  dynamic
    ```dart
    dynamic a = 10;  // 任意类型变量
    var list = new List<dynamic>();  // 任意类型列表
    ```
10. runes: 代表字符串的Unicode编码
    ```dart
    Runes input = new Runes('\u2665  \u{1f605}  \u{1f60e}  \u{1f47b}  \u{1f596}  \u{1f44d}');
    print(new String.fromCharCodes(input));  //输出一排表情
    ```
11. enum
    ```dart
    enum Color {red,green,blue}  // 枚举的定义
    assert(Color.red.index == 0);  // 枚举索引获取
    List<Color> colors = Color.values;  // 枚举列表获取
    ```

### 操作符

1. links
    1. [Dart学习-操作符](https://www.jianshu.com/p/64a6ed7581aa)
2. 操作符: 操作符表中，操作符的优先级由其所在行定义，上面行内的操作符优先级大于下面行内的操作符

    | 类型           | 操作符                                     |
    | :------------- | :----------------------------------------- |
    | 一元后缀       | expr++ expr-- () [] . ?.                   |
    | 一元前缀       | -expr ！expr ~expr ++expr --expr           |
    | 乘法类型       | * / % ~/                                   |
    | 加法类型       | + -                                        |
    | 移动位运算     | << >>                                      |
    | 与位运算       | &                                          |
    | 异或位运算     | ^                                          |
    | 或位运算       | \|                                         |
    | 关系和类型测试 | >= <= > < as is is!                        |
    | 等式           | == !=                                      |
    | 逻辑与         | &&                                         |
    | 逻辑或         | \|\|                                       |
    | 条件           | expr1 ? expr2 : expr3                      |
    | 级联           | ..                                         |
    | 赋值           | = *= /= ~/= %= += -= <<= >>= &= ^= \|= ??= |

3. 在极少数情况下，您需要知道两个对象是否是完全相同的对象，请改用experation()函数
4. 类型测试操作符: is is! as
5. operator关键字可以复写操作符
    ```dart
    class Vector {
        final int x;
        final int y;
        const Vector(this.x, this.y);
        /// Overrides + (a + b).
        Vector operator +(Vector v) {
            return new Vector(x + v.x, y + v.y);
        }
        /// Overrides - (a - b).
        Vector operator -(Vector v) {
            return new Vector(x - v.x, y - v.y);
        }
    }
    ```

### 控制语句

```dart
if (false) {
    print("a");
} else if (false) {
    print("b");
} else {
    print("c");
}

for (int i = 0; i < 3; i++) {
    print("$i");
}
var list = [0, 1, 2];
list.forEach(print);
for (var x in list) {
    print(x);
}

import 'dart:math';
Random r = new Random();
while (true) {
    if (r.nextInt(2) == 0) break; else continue;
}
do {
    print("do ... while (false);");
} while (false);

String command = "OPEN";
switch (command) {
    case 'CLOSED':
        print('CLOSED')
        continue nowClosed
    nowClosed:
    case 'NOW_CLOSED':
        print('NOW_CLOSED')
        break;
    case 'OPEN':  // 会 fall-through ，即执行 'NOW_OPEN' 块的内容
    case 'NOW_OPEN':
        print('OPEN');
        break;
    default:
        print('Default');
}
```

### 函数

1. 函数的返回类型和参数类型都是可以省略的。函数的实现体还可以通过符号进行表示
    ```dart
    getPerson(name, age) {
        return new Person(name, age);
    }
    /// getPerson(name, age) => new Person(name, age);
    ```
2. 可选参数（重载函数）。
    ```dart
    // 花括号参数表示可选命名参数。
    getPerson(name, {age=18, weight}) => new Person(name, age, weight);  // weight默认为null
    getPerson("张三", weight: 55);
    // 方括号参数表示可选位置参数，不需要别名，但是位置必须是固定的参数
    getPerson(name, [age, weight]) => new Person(name, age, weight);
    getPerson("张三", 18, 55);
    ```
3. 默认参数
    ```dart
    getPerson(name,age=18) => new Person(name,age);
    ```
4. 构造函数
    1. @required表示必须传参
        ```dart
        class Person {
            var name;
            var age;
            // 这里默认等同于this.name=name，this.age=age
            Person({@required this.name, this.age});
        }
        ```
    2. 当前为StatelessWidget组件中的构造方法
        ```dart
        class MyApp extends StatelessWidget {
            final List<String> items;
            MyApp({Key key, @required this.items}): super(Key: key);
        }
        ```
    3. 常量构造函数
        ```dart
        class Point {
            const Point(this.x, this.y);
        }
        ```
    4. 命名构造函数
        ```dart
        class Point {
            num x;
            num y;
            Point(this.x, this.y);
            // 可以直接命名的构造函数，命名构造函数也是可以直接实例化的
            Point.fromJson(Map json) {
                x = json['x'];
                y = json['y'];
            }
        }
        ```
    5. 默认情况下，子类的构造函数会自动调用超类的无名无参数的默认构造函数，如果超类没有无名无参数构造函数，则你需要手工的调用超类的其他构造函数，在构造函数参数后使用冒号可以调用超类构造函数。如果提供了一个initializer list（初始化参数列表），则初始化参数列表在超类构造函数执行之前执行。下面是构造函数执行顺序：
        1. initializer list（初始化参数列表）
        2. superclass’s no-arg constructor（超类的无名构造函数）
        3. main class’s no-arg constructor（主类的无名构造函数）
    6. smg
        ```dart
        class Point {
            num x;
            num y;
            Point(this.x, this.y);
            // 初始化参数列表用冒号展开
            // 初始化表达式等号右边的部分不能访问this
            Point.fromJson(Map jsonMap)
                : x = jsonMap['x'],
                    y = jsonMap['y'] {
                print('In Point.fromJson(): ($x, $y)');
            }
        }
        ```
    7. 重定向构造函数
        ```dart
        class Point {
            num x;
            num y;
            Point(this.x, this.y);
            // 类似于重载
            Point.alongXAxis(num x) : this(x, 0);
        }
        ```
    8. 工厂方法构造函数
        ```dart
        class Logger {
            static final Map<String, Logger> _cache = <String, Logger>{};
            // 使用factory关键字表示工厂方法，其实现类似于单例模式的实现
            factory Logger(String name) {
                if (_cache.containsKey(name)) {
                    return _cache[name];
                } else {
                    final logger = new Logger._internal(name);
                    _cache[name] = logger;
                    return logger;
                }
            }
        }
        ```
5. get和set
    ```dart
    num get right             => left + width;
        set right(num value)  => left = value - width;
    num get bottom            => top + height;
        set bottom(num value) => top = value - height;
    ```
6. 函数参数
    1. 函数可以作为参数
        ```dart
        final values = [1, 2, 3, 5, 10, 50];
        values.skip(1).take(3).map(func).forEach(print);  // map和forEach参数里面可以传递函数
        ```
    2. forEach的源码实现
        ```dart
        var forEach = (void f(E element)) = for (E element in this) f(element);
        ```
7. 匿名方法
    ```dart
    var fun = () { print("Hello World!"); }
    var add = (a, b) => a + b;
    ```
8. 闭包: 闭包最大的作用是可以访问方法体中的成员变量
    ```dart
    count() {
        int count = 0;
        return (){ print(count++); };
    }
    void main(){
        var fun = count();
        fun();  // 1
        fun();  // 2
        fun();  // 3
    }
    ```
9. 所有的函数都返回一个值，如果没有指定返回值，则默认把语句return null;作为函数的最后一个语句执行
10. 静态函数不再类实例上执行，所以无法访问this

### 异常

1. 异常的捕获可以用on关键字进行捕获对应的异常，或者用rethrow关键字进行重新抛出异常
    ```dart
    try {
        breedMoreLlamas();
    } on OutOfLlamasException {
        // 指定捕获OutOfLlamasException
        buyMoreLlamas();
    } on Exception catch (e) {
        // 指定捕获Exception类型的异常
        print('Unknown exception: $e');
    } catch (e) {
        // 任意异常
        print('Something really unknown: $e');
        rethrow; // 重新抛出该异常
    } finally {
        // ...
    }
    ```
2. 抛出异常
    ```dart
    throw new ExpectException('值必须大于0！');
    throw '值必须大于0!';
    ```

### 导包

1. 指定别名
    ```dart
    import 'package:lib1/lib1.dart';
    import 'package:lib2/lib2.dart' as lib2;
    Element element1 = new Element();  // 使用lib1的Element类
    lib2.Element element2 = new lib2.Element();  // 使用lib2的Element类
    ```
2. 导入指定功能: 如果你只使用库的一部分功能，则可以选择需要导入的内容
    ```dart
    import 'package:lib1/lib1.dart' show foo;  // 只导入foo库
    import 'package:lib2/lib2.dart' hide foo;  // 导入除foo库的所有其他库
    ```
3. 延迟导入。下面是一些使用延迟加载库的场景
    * 减少APP的启动时间
    * 执行A/B测试，例如尝试各种算法的不同实现
    * 加载很少使用的功能，例如可选的屏幕和对话框
    ```dart
    import 'package:deferred/hello.dart' deferred as hello;
    // 当需要使用的时候，使用库标识符调用 loadLibrary()函数来加载库，使用 await 关键字暂停代码执行一直到库加载完成
    greet() async {
        await hello.loadLibrary();
        hello.printGreeting();
    }
    ```
4. library 定义这个库的名字，但并不影响导入，因为import语句用的是字符串Uri
5. part和part of
    1. 为了维护一个库，我们可以把各个功能放到各个dart文件中。但part of所在文件不能包括import、library等关键字，可以包含在part关键字所在文件中
    2. 建议避免使用part和part of语句，因为那样会使代码很难阅读、修改，可以多用library。part加字符串类型的Uri类似include，表示包含某个文件。part of加库名表示该文件属于那个库
    3. 例子
        ```dart
        // math.dart文件开头
        library math;
        part 'point.dart';
        part 'random.dart';
        // point.dart文件开头
        part of math;
        // random.dart文件开头
        part of math;
        ```
6. export
    1. 你可以使用export关键字导出一个更大的库
        ```dart
        library math;
        export 'random.dart';
        export 'point.dart';
        ```
    2. 也可以导出部分组合成一个新库
        ```dart
        library math;
        export 'random.dart' show Random;
        export 'point.dart' hide Sin;
        ```
7. 利用Pub管理自己的库
    1. 一种方式：import 'lib/student/student.dart';
    2. 另一种使用yaml来管理版本的
        1. 新建库student。其中根目录的命名为”库名-版本号“，如student-0.0.1。根目录中包含一个pubspec.yaml文件和一个lib文件夹
            ```yaml
            name: student
            version: 0.0.1
            ```
        2. lib文件夹中有一个dart文件，命名为”库名.dart”(如student.dart)，以及一个src文件夹
            ```dart
            library student;
            export 'src/person.dart';
            export 'src/student.dart';
            ```
        3. 在src文件夹中，包含两个dart文件
            ```dart
            // person.dart
            library student.src.person;
            class Person {
                String name;
                Person(this.name);
                String toString() => name;
            }
            // student.dart
            library student.src.student;
            import 'person.dart';
            class Student extends Person {
                Student(String name): super(name);
                String id = '';
                String toString() => 'Name:$name  ID:$id';
            }
            ```
    3. 在其他项目中配置方法
        1. main.dart
            ```dart
            import 'dart:math';
            import 'package:args/args.dart';
            import 'package:student/student.dart';
            void main(List<String> args) {
                Point point = new Point(0, 0);
                print(point);
                var parser = new ArgParser();
                var results = parser.parse(args);
                print(results.arguments);
                Student student = new Student('Wang');
                student.id = '060806110006';
                print(student);
            }
            ```
        2. pubspec.yaml中添加student库，并连接库的路径  http://www.cndartlang.com/696.html  TODO:
        3. 当配置好yaml后，目录树中就可以看到新添加的包以及版本号了
    4. 这里只是理了一下库的引用方法，没有放到Pub\Cache\hosted\pub.dartlang.org文件夹中。如果放到缓存文件夹中，yaml设置hosted，可以更好的控制版本

### 级联调用

1. 对象的方法和成员变量都可以进行级联调用，类似于Java的链式调用
2. 案例1
    ```dart
    void main(List<String> args){
        num x = 10;
        num y = 42; // not used
        var p = new Point();
        p
            ..log('start')
            ..x = x
            ..scale(10)
            ..log('scaled')
            ..x = x + 1
            ..y = x + p.x + p.y;
        print('p.x = ${p.x}, p.y = ${p.y}. x = $x');
    }
    ```
3. 案例二
    ```dart
    front
        ..beginPath()
        ..fillStyle = penColor
        ..arc(tx, ty, penWidth/2+2, 0, PI2, true)
        ..fill()
        ..moveTo(wx, wy)
        ..strokeStyle = "black"
        ..lineTo(tx, ty)
        ..closePath()
        ..stroke();
    ```
4. 案例三
    ```dart
    querySelector('#button')  // Get an object.
        ..text = 'Confirm'  // Use its members.
        ..classes.add('important')
        ..onClick.listen((e) => window.alert('Confirmed!'));
    ```
5. 案例四
    ```dart
    // 级联调用也可以嵌套
    final addressBook = (new AddressBookBuilder()
        ..name = 'jenny'
        ..email = 'jenny@example.com'
        ..phone = (new PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
            .build())
        .build();
    ```

### 异步支持

1. 使用async和await的代码是异步的，要使用await，其方法必须带有async关键字
    ```dart
    checkVersion() async { var version = await lookUpVersion(); }
    ```
2. 可以使用try-catch,和finally来处理使用await的异常
    ```dart
    try {
        server = await HttpServer.bind(InternetAddress.LOOPBACK_IP_V4, 4044);
    } catch (e) {} finally {}
    ```
3. 异步方法返回值为Future类型
    ```dart
    String lookUpVersionSync() => '1.0.0';
    Future<String> lookUpVersion() async => '1.0.0';
    ```
4. 在循环中使用异步
    ```dart
    await for (var request in requestServer) {
        handleRequest(request);
    }
    ```

### 类

1. 可调用类
    ```dart
    // 可以把类当做方法使用
    class WannabeFunction {
        call(String a, String b, String c) => '$a $b $c!';
    }
    void main() {
        var wf = new WannabeFunction();
        var out = wf("Hi", "there,", "gang");
        print('$out');  // Hi there, gang!
    }
    ```
2. Dart是一门使用类和单继承的面向对象语言，所有的对象都是类的实例，并且所有的类都是Object的子类
3. 类的定义用class关键字，如果未显式定义构造函数，会默认一个空的构造函数，使用new关键字和构造函数来创建对象，未定义父类的时候，默认继承自Object
4. 如果只是简单的参数传递，可以在构造函数的参数前加this关键字定义，或者参数后加 : 再赋值
    ```dart
    class MyPoint {
        num x, y, z;
        MyPoint(this.x, this.y, z) {
            this.z = z;
        }
        MyPoint.fromList(var list): this.x = list[0], y = list[1], z = list[2] {}
        String toString() => 'x: $x, y: $y, z: $z';
    }
    main(List<String> args) {
        print("${new MyPoint(1, 2, 3)}, ${new MyPoint.fromList([1, 2, 3])}, ${MyImmutablePoint.origin}");
    }
    ```
5. 如果你要创建一个不可变的对象，你可以定义编译时常量对象，需要在构造函数前加const
    ```dart
    class MyImmutablePoint {
        final num x, y, z;
        const MyImmutablePoint(this.x, this.y, this.z);  // 常量构造函数
        static final MyImmutablePoint origin = const MyImmutablePoint(1, 2, 3); // 创建一个常量对象不能用new，要用const
    }
    ```
6. 在Dart中类和接口是统一的，类就是接口，如果你想重写部分功能，那么你可以继承一个类，如果你想实现某些功能，那么你也可以实现一个类。使用abstract关键字来定义抽象类，并且抽象类不能被实例化，抽象方法不需要关键字，直接以分号 ; 结束即可
    ```dart
    abstract class Shape { // 定义了一个 Shape 类/接口
        num perimeter(); // 这是一个抽象方法，不需要abstract关键字，是隐式接口的一部分。
    }
    class Rectangle implements Shape { // Rectangle 实现了 Shape 接口
        final num height, width;
        Rectangle(num this.height, num this.width);  // 紧凑的构造函数语法
        num perimeter() => 2 * height + 2 * width;       // 实现了 Shape 接口要求的 perimeter 方法
    }
    class Square extends Rectangle { // Square 继承 Rectangle
        Square(num size) : super(size, size); // 调用超类的构造函数
    }
    ```
7. 

### 注解

1. 系统自带注解: @deprecated、 @override、@proxy
2. 自定义注解
    ```dart
    library todo;
    class todo {
        final String who;
        final String what;
        const todo(this.who, this.what);
    }
    import 'todo.dart';
    @todo('xuyingjun', 'make this do something')
    void doSomething() {
        print('do something');
    }
    ```
3. 

### collection

### regex

### io

### time

### thread

### process

### socket

### json

### xml

### database

### 作业: 贪吃蛇

### 作业: dart client / dart server

### 作业: dart charts
