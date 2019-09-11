<!-- [TOC] -->

- [Java基础知识1](#java%e5%9f%ba%e7%a1%80%e7%9f%a5%e8%af%861)
- [Java基础知识2](#java%e5%9f%ba%e7%a1%80%e7%9f%a5%e8%af%862)
- [多线程面试问题集锦](#%e5%a4%9a%e7%ba%bf%e7%a8%8b%e9%9d%a2%e8%af%95%e9%97%ae%e9%a2%98%e9%9b%86%e9%94%a6)
- [](#)

## Java基础知识1

1. equals、==、hasCode: 
    1. ==是运算符，用于比较两个变量是否相等。
    2. equals，是Objec类的方法，用于比较两个对象是否相等，默认Object类的equals方法是比较两个对象的地址，跟==的结果一样。Object的equals方法如下: 
        ```java
        public boolean equals(Object obj) {
            return (this == obj);
        }
        ```
    3. hashCode也是Object类的一个方法。返回一个离散的int型整数。在集合类操作中使用，为了提高查询速度。(HashMap，HashSet等)
    4. java中的数据类型，可分为两类: 
        1. 基本数据类型，也称原始数据类型。byte,short,char,int,long,float,double,boolean。他们之间的比较，应用双等号(==),比较的是他们的值。 
        2. 复合数据类型(类): 当他们用(==)进行比较的时候，比较的是他们在内存中的存放地址，所以，除非是同一个new出来的对象，他们的比较后的结果为true，
            否则比较后结果为false。 JAVA当中所有的类都是继承于Object这个基类的，在Object中的基类中定义了一个equals的方法，这个方法的初始行为是比较对象的内存地址，
            但在一些类库当中这个方法被覆盖掉了，如String,Integer,Date在这些类当中equals有其自身的实现，而不再是比较类在堆内存中的存放地址了。
            对于复合数据类型之间进行equals比较，在没有覆写equals方法的情况下，他们之间的比较还是基于他们在内存中的存放位置的地址值的，
            因为Object的equals方法也是用双等号(==)进行比较的，所以比较后的结果跟双等号(==)的结果相同。
    5. 如果两个对象根据equals()方法比较是相等的，那么调用这两个对象中任意一个对象的hashCode方法都必须产生同样的整数结果。如果两个对象根据equals()方法比较是不相等的，那么调用这两个对象中任意一个对象的hashCode方法，则不一定要产生相同的整数结果
    6. 从而在集合操作的时候有如下规则: 将对象放入到集合中时，首先判断要放入对象的hashcode值与集合中的任意一个元素的hashcode值是否相等，如果不相等直接将该对象放入集合中。如果hashcode值相等，然后再通过equals方法判断要放入对象与集合中的任意一个对象是否相等，如果equals判断不相等，直接将该元素放入到集合中，否则不放入。回过来说get的时候，HashMap也先调key.hashCode()算出数组下标，然后看equals如果是true就是找到了，所以就涉及了equals。
2. **类的生命周期及其初始化时机**
    1. **类的生命周期主要包括加载、链接、初始化、使用和卸载五个阶段**。其中，虚拟机规范指明有且只有五种情况必须立即对类进行初始化(即调用static代码块以及一些赋值属性的初始化): 
        1. **对类进行反射调用时**
        2. **遇到new、getstatic、putstatic或invokestatic这四条字节码指令时**。注意，newarray指令触发的只是数组类型本身的初始化，而不会导致其相关类型的初始化，比如，new String[\]只会直接触发String[]类的初始化，也就是触发对类[Ljava.lang.String的初始化，而直接不会触发String类的初始化时，如果类没有进行过初始化，则需要先对其进行初始化。生成这四条指令的最常见的Java代码场景是: 
            1. **使用new关键字实例化对象的时候**
            2. **读取或设置一个类的静态字段(被final修饰，已在编译器把结果放入常量池的静态字段除外)的时候**
            3. **调用一个类的静态方法的时候**
        3. **初始化子类时**
        4. **虚拟机启动时**
        5. 当使用jdk1.7动态语言支持时，如果一个java.lang.invoke.MethodHandle实例最后的解析结果REF_getstatic,REF_putstatic,REF_invokeStatic的方法句柄，并且这个方法句柄所对应的类没有进行初始化，则需要先出触发其初始化。
    2. **类加载过程中各阶段的作用**
        1. **加载**: 
            1. 通过一个类的全限定名来获取定义此类的二进制字节流(并没有指明要从一个Class文件中获取，可以从其他渠道，譬如: 网络、动态生成、数据库等)；
            2. 将这个字节流所代表的静态存储结构转化为方法区的运行时数据结构；
            3. 在内存中(对于HotSpot虚拟就而言就是方法区)生成一个代表这个类的java.lang.Class对象，作为方法区这个类的各种数据的访问入口；
        2. **验证**(Verification): 验证是连接阶段的第一步，这一阶段的目的是为了确保Class文件的字节流中包含的信息符合当前虚拟机的要求，并且不会危害虚拟机自身的安全。
        3. **准备**(Preparation): 准备阶段是正式为类变量(static 成员变量)分配内存并设置类变量初始值(零值)的阶段，这些变量所使用的内存都将在方法区中进行分配。
        4. **解析**(Resolution): 解析阶段是虚拟机将常量池内的符号引用替换为直接引用的过程。
        5. **初始化**(Initialization): 初始化阶段是执行类构造器<clinit\>()方法的过程。虚拟机会保证一个类的类构造器<clinit\>()在多线程环境中被正确的加锁、同步，如果多个线程同时去初始化一个类，那么只会有一个线程去执行这个类的类构造器<clinit\>()，其他线程都需要阻塞等待，直到活动线程执行<clinit\>()方法完毕。特别需要注意的是，在这种情形下，其他线程虽然会被阻塞，但如果执行<clinit\>()方法的那条线程退出后，其他线程在唤醒之后不会再次进入/执行<clinit\>()方法，因为 在同一个类加载器下，一个类型只会被初始化一次。
    3. 通过子类来引用父类中定义的静态字段，只会触发父类初始化而不会触发子类的初始化。至于是否要触发子类的加载和验证，这个在虚拟机规范中并没有明确规定，这取决于虚拟机的具体实现。
    4. 通过数组定义来引用类，不会触发此类的初始化。
    5. 常量在编译阶段会存入调用类的常量池，本质上并没有直接引用到定义常量的类，因此不会触发定义常量的类的初始化。
3. **对象的创建过程**
    1. 父类的类构造器
    2. 子类的类构造器
    3. 父类的实例构造器(成员变量和实例代码块，父类的构造函数)
    4. 子类的实例构造器(成员变量和实例代码块，子类的构造函数)
    5. 类构造器由静态变量和静态语句块组成，而类的实例构造器由类的实例变量/语句块以及其构造函数组成
4. **双亲委派模型**
5. **异常机制**
    1. Java体系中所有异常类型的根类为 Throwable，具体包括两大类: Error 与 Exception。其中，**Error是指程序无法处理的错误，表示运行应用程序中较严重问题；Exception是指程序本身可以处理的错误，具体可分为运行时异常(派生于 RuntimeException 的异常) 和 其他异常**。
6. **六大设计原则**
    1. 单一职责原则: 高内聚，一个类只做它该做的事情；
    2. 接口隔离原则:接口小而专，避免大而全；
    3. 依赖倒置原则: 依赖抽象而非实现，面向接口编程；
    4. 里氏替换原则: 子类可以扩展父类的功能，但不能改变父类原有的功能；
    5. 开闭原则: Open for Extension, Closed for Modification，例如 AOP，代理模式，适配器模式就是其经典应用；
    6. 迪米特法则: 高内聚，低耦合；
7. **迭代器模式**
    1. 封装容器的内部实现细节，对于不同的集合，可以提供统一的遍历方式，简化客户端的访问和获取容器内数据。
    2. 具体迭代器角色和具体容器角色是耦合在一起的 —— 遍历算法是与容器的内部细节紧密相关的。
    3. 为什么一定要去实现 Iterable 这个接口呢？ 为什么不直接实现 Iterator接口 呢？ 因为我们可以有多个 Iterable 去迭代同一个容器了。
8. **代理模式**
    1. 增强被代理类
    2. 管理对被代理类的访问
    3. 实现InvocationHandler接口的invoke方法
9. 适配器模式: Binder与Messenger
10. 模板方法模式: Adapter
    1. 定义一个操作中算法的框架，而将一些步骤延迟到子类中。模板方法模式使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。
11. **策略模式**: Comparator/Comparable
    1. 面向接口编程
    2. 算法可以自由切换，避免使用多重条件判断；
    3. 扩展性良好。
    4. 对于策略模式而言，一个“策略”是一个整体的(完整的)算法，算法是可以被整体替换的；而模板方法只能被替换其中的特定点，算法流程是固定不可变的。
12. **Java 自动装箱、拆箱机制**
    1. 装箱过程是通过调用包装器的valueOf方法实现的，而拆箱过程是通过调用包装器的 xxxValue方法实现的(xxx代表对应的基本数据类型)。
    2. 什么时候装箱，什么时候拆箱主要取决于: 在当前场景下，你需要的是引用类型还是原生类型。若需要引用类型，但传进来的值是原生类型，则自动装箱(例如，使用equals方法时传进来原生类型的值)；若需要的是原生类型，但传进来的值是引用类型，则自动拆箱(例如，使用运算符进行运算时，操作数是包装类型)。
13. **内部类**
    1. 在Java中，内部类是一个编译时的概念，一旦编译成功，内部类和外部类就会成为两个完全不同的类，共有四种类型: 
        1. 成员内部类: 是外围类的一个成员，依附于外围类，所以只有先创建了外围类对象才能够创建内部类对象。也正由于该原因，成员内部类也不能含有static的变量(除非加了final)和方法；
        2. 静态内部类: 静态内部类，就是修饰为static的内部类，该内部类对象不依赖于外部类对象，就是说我们可以直接创建内部类对象，但其只可以直接访问外部类的所有静态成员和静态方法；
        3. 局部内部类: 作用域发生了改变，只能在所在方法和属性中被使用
        4. 匿名内部类: 内部类必须要继承一个类或者实现接口
    2. 内部类作用: 
        1. 可以隐式的实现多继承
        2. 可以很好的隐藏实现细节，因为内部类可以是private与protected的
14. **什么是不可变对象**
    1. 值不可变；
    2. 引用不可改，只有重新创建；
    3. 状态不可变；
    4. 除了构造函数之外，不应该有其它任何函数(至少是任何public函数)修改任何成员变量；
    5. 任何使成员变量获得新值的函数都应该将新的值保存在新的对象中，而保持原来的对象不被修改。
15. **Java的序列化/反序列化机制**
    1. Serializable: 将实现了Serializable接口的对象转换成一个字节序列，并能够在以后将这个字节序列完全恢复为原来的对象，序列化可以弥补不同操作系统之间的差异。
        1. 需要序列化的对象必须实现Serializable接口；
        2. 只有非静态字段和非transient字段进行序列化，与字段的可见性无关；
        3. 序列化/反序列化的实质上操纵的是一个对象图；
        4. https://blog.csdn.net/mengtuoling111/article/details/50156307
    2. Externalizable: 是Serializable的子接口，
        1. 使用: 
            ```java
            // 必须还要有默认构造函数，而且要是public的
            private int i;
            private String s;
            public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
                s = (String) in.readObject();
                i = in.readInt();
            }
            public void writeExternal(ObjectOutput out) throws IOException {
                out.writeObject(s);
                out.writeInt(i);
            }
            ```
        2. 与Serializable对比: 
            1. 实现Externalizable的类必须有public修饰的默认构造函数
            2. 实现Externalizable的类必须实现两个方法readExternl与writeExternal
            3. 实现Externalizable的类可以决定自己改序列化的属性，而且transient在这里无效
    3. xml
    4. json
    5. Parcelable(Android)
16. **垃圾收集器**: 垃圾收集器就是上面讲的理论知识的具体实现了。不同虚拟机所提供的垃圾收集器可能会有很大差别，我们使用的是HotSpot，HotSpot这个虚拟机所包含的所有收集器如图: 
    <div align="center"><img alt="hotspot" src="https://images2015.cnblogs.com/blog/249993/201703/249993-20170308202431391-1323581863.png"/></div>
    上图展示了7种作用于不同分代的收集器，如果两个收集器之间存在连线，那说明它们可以搭配使用。虚拟机所处的区域说明它是属于新生代收集器还是老年代收集器。
    多说一句，我们必须明确一个观点: 没有最好的垃圾收集器，更加没有万能的收集器，只能选择对具体应用最合适的收集器。这也是HotSpot为什么要实现这么多收集器的原因。
    OK，下面一个一个看一下收集器。
    1. Serial收集器(复制算法): 新生代单线程收集器，标记和清理都是单线程，优点是简单高效
    2. Serial Old收集器(标记-整理算法): 老年代单线程收集器，Serial收集器的老年代版本
    3. ParNew收集器(复制算法): 新生代收并行集器，实际上是Serial收集器的多线程版本，在多核CPU环境下有着比Serial更好的表现
    4. Parallel Scavenge收集器(复制算法): 新生代并行收集器，追求高吞吐量，高效利用CPU。吞吐量=用户线程时间/(用户线程时间+GC线程时间)，高吞吐量可以高效率的利用CPU时间，
        尽快完成程序的运算任务，适合后台应用等对交互相应要求不高的场景
    5. Parallel Old收集器(标记-整理算法): 老年代并行收集器，吞吐量优先，Parallel Scavenge收集器的老年代版本
    6. CMS(Concurrent Mark Sweep)收集器(标记-清除算法): 老年代并行收集器，以获取最短回收停顿时间为目标的收集器，具有高并发、低停顿的特点，追求最短GC回收停顿时间
    7. G1(Garbage First)收集器 (标记-整理算法): Java堆并行收集器，G1收集器是JDK1.7提供的一个新收集器，G1收集器基于"标记-整理"算法实现，也就是说不会产生内存碎片。
        此外，G1收集器不同于之前的收集器的一个重要特点是: G1回收的范围是整个Java堆(包括新生代，老年代)，而前六种收集器回收的范围仅限于新生代或老年代
17. **谈谈int、Integer和Integer缓存**
    1. Integer是int的包装类；int是基本数据类型；
    2. Integer变量必须实例化后才能使用；int变量不需要；
    3. Integer实际是对象的引用，指向此new的Integer对象；int是直接存储数据值；
    4. Integer的默认值是null；int的默认值是0。
    1. 由于Integer变量实际上是对一个Integer对象的引用，所以两个通过new生成的Integer变量永远是不相等的(因为new生成的是两个对象，其内存地址不同)。
    2. Integer变量和int变量比较时，只要两个变量的值是向等的，则结果为true(有自动拆箱)
    3. 非new生成的Integer变量和new Integer()生成的变量比较时，结果为false。(因为非new生成的Integer变量指向的是java常量池中的对象，而new Integer()生成的变量指向堆中新建的对象，两者在内存中的地址不同)
    4. 对于两个非new生成的Integer对象，进行比较时，如果两个变量的值在区间-128到127之间，则比较结果为true，如果两个变量的值不在此区间，则比较结果为false。因为Integer.valueOf是会从IntegerCache中获取-128~127的数据
18. **谈谈多线程的Sempo...**
19. **谈谈String、StringBuilder和StringBuffer**
    1. String是不可变类，StringBuilder是线程不安全的拼接类，StringBuffer是线程安全的拼接类(使用了synchronized)
    2. 三者都是final的，不可被继承
    3. String连接操作的底层是StringBuilder
    4. StringBuilder 以及 StringBuffer 都是抽象类AbstractStringBuilder的子类，它们的接口是相同的。
    1. 不可变类String的原因
        1. String主要的三个成员变量 char value[]， int offset, int count均是private，final的，并且没有对应的 getter/setter;
        2. String 对象一旦初始化完成，上述三个成员变量就不可修改；并且其所提供的接口任何对这些域的修改都将返回一个新对象；
20. **重载，重写，隐藏**
    1. 重载: 类内多态，静态绑定机制(编译时已经知道具体执行哪个方法)，方法同名，参数不同
    2. 重写: 类间多态，动态绑定机制(运行时确定)，实例方法，两小两同一大(方法签名相同，子类的方法所抛出的异常、返回值的范围不大于父类的对应方法，子类的方法可见性不小于父类的对应方法)方法签名相同，子类的方法所抛出的异常、返回值的范围不大于父类的对应方法，子类的方法可见性不小于父类的对应方法
    3. 隐藏: 编译期绑定，静态方法和成员变量
    4. 隐藏和覆盖是不同的。隐藏是针对成员变量和静态方法的，而覆盖是针对普通方法的。
21. java特性: 封装 继承 多态 抽象 健壮 跨平台 简单
22. **组合，继承，代理**
23. 容器中判断两个对象是否相等的步骤
    1. 判断两个对象的hashCode是否相等: 如果不相等，认为两个对象也不相等，完毕；如果相等，转入2)；
    2. 判断两个对象用equals运算是否相等: 如果不相等，认为两个对象也不相等；如果相等，认为两个对象相等。
24. **BIO, NIO, AIO**
    1. 一个IO操作其实分成了两个步骤: 发起IO请求和处理IO请求。阻塞IO和非阻塞IO的区别在于发起IO请求是否阻塞。同步IO和异步IO的区别就在于处理IO请求是否阻塞：
        如果实际的IO请求处理由应用内线程完成，那么就是同步IO；如果实际的IO请求处理由操作系统帮你做完IO操作再将结果返回给你，那么就是异步IO。
    2. **BIO**是同步阻塞IO(一个线程处理一个链接，双方阻塞等待数据准备好，因此会受到网络延迟等因素的影响)，服务端通过一个独立的Acceptor线程监听客户端的连接请求，
        当它收到客户端的连接请求后，就为每一个客户端创建一个新的线程去处理请求，处理结束后，将处理结果返回给客户端。可以通过线程池技术改良，
        避免了为每个请求都创建一个新的线程造成的线程资源耗尽问题，但仍然是同步阻塞模型，解决不了根本问题。由于IO请求的处理工作是由应用内线程完成的，因此是同步的。
        适用于**链接数目比较小**的架构。
    3. **NIO**是同步非阻塞IO(数据准备好了再通知我，因此不会受到网络延迟等因素的影响)，客户端发起的每个IO连接都注册到多路复用器Selector上，
        同时Selector会不断轮询注册在其上的Channel，当其中的某些Channel发生读或者写事件时，这些channel就会处于就绪状态，多路复用器Selector就会将这些Channel
        选择出来逐个处理请求，处理结束后，将处理结果返回到客户端。NIO模型中只需要一个线程负责Selector的轮询就可以接入成千上万的客户端，这相对于BIO来说无疑是巨大的进步。
        由于IO请求的处理工作是由应用内线程完成的，因此是同步的。适用于**链接数目多且短**的架构。
    4. **AIO**是异步非阻塞IO (IO请求处理完成后再通知我)：服务器端异步的处理客户端的连接，并且客户端的IO请求都是由操作系统先完成了，再通知应用内线程进行处理，
        因此更适合**连接数多且连接比较长**的架构，例如相册服务器。
25. **System.gc() 与 Object.finallize()**
    1. System.gc()方法的作用是发出通知让垃圾回收器启动垃圾回收，但垃圾回收器不一定会真正工作，实际上调用的是Runtime.getRuntime.gc()方法。
    2. Object.finallize()方法的作用为，当对象没有与GC Roots相连接的引用链时，若该对象重写了该方法并且还没有被垃圾回收器调用过，垃圾回收器将调用此方法，这也是对象垃圾回收前最后一次自我解救(重新与GC Roots连上)的方式。实际上，每个对象的finallize方法只会被垃圾回收器调用一次。其方法签名为 ``protected void finalize() throws Throwable { }``
26. **函数式接口**
    1. 函数式接口(functional interface，也叫功能性接口)，简单来说，函数式接口是只有一个抽象方法的接口，其用于支持Lamda表达式，是Lamda表达式的类型。比如，Java标准库中的java.lang.Runnable、java.util.concurrent.Callable、java.util.Comparator都是典型的函数式接口。
    2. Java 8提供注解@FunctionalInterface标识函数式接口，但这个注解是非必须的，只要接口符合函数式接口的标准(即只包含一个方法的接口)，虚拟机会自动判断，但最好在接口上使用注解@FunctionalInterface进行声明，以免团队的其他人员错误地往接口中添加新的方法。
    3. Java中的lambda无法单独出现，它需要一个函数式接口来支持，lambda表达式方法体其实就是函数接口的实现。
27. **双亲委派模型 与 反双亲委派模型**
28. **为什么新生代内存需要有两个Survivor区？**
    1. **为什么要有Survivor区** 如果没有Survivor，Eden区每进行一次Minor GC，存活的对象就会被送到老年代。老年代很快被填满，从而触发Major GC(因为Major GC一般伴随着Minor GC，
        也可以看做触发了Full GC)。由于老年代的内存空间一般是新生代的2倍，因此进行一次Full GC消耗的时间比Minor GC长得多，这样，频繁的Full GC消耗的时间是非常可观的，
        这一点会影响大型程序的执行和响应速度。Survivor的存在意义就在于，减少被送到老年代的对象，进而减少Full GC的发生，Survivor的预筛选保证只有经历16次Minor GC
        还能在新生代中存活的对象，才会被送到老年代。
    2. **为什么要有两个Survivor区** 设置两个Survivor区最大的好处就是解决了碎片化。在第一部分中，我们知道了必须设置Survivor区。假设现在只有一个survivor区，我们来模拟一下流程：
        刚刚新建的对象在Eden中，一旦Eden满了，触发一次Minor GC，Eden中的存活对象就会被移动到Survivor区。这样继续循环下去，下一次Eden满了的时候，问题来了，此时进行Minor GC，
        Eden和Survivor各有一些存活对象，如果此时把Eden区的存活对象硬放到Survivor区，很明显这两部分对象所占有的内存是不连续的，也就导致了内存碎片化。
        现在大多数JVM虚拟机将新生代与老年代按照如下比例来分配：Eden ：Survivor(to，from) = 8 ：2(1:1)。在这里，Eden区理所当然大一些，否则新建对象很快就导致Eden区满，
        进而触发Minor GC，有悖于初衷。
29. **JDK 1.8相对于之前版本中HashMap中的实现的变化？**
    1. hash
    2. index
    3. 红黑树 + 链表 + 数组
    4. 插入与删除时可能会从链表变为红黑树或者从红黑树变为链表
30. **能否创建一个包含可变对象的不可变对象?**
    1. 当然可以创建一个包含可变对象的不可变对象的，你只需要谨慎一点，不要共享可变对象的引用就可以了，如果需要变化时，就返回原对象的一个拷贝。最常见的例子就是对象中包含一个日期对象的引用。
31. **java 创建对象的几种方式**
    1. 采用new
    2. 通过反射
    3. 采用clone
    4. 通过序列化机制
32. **JAVA方法调用过程**
    1. 编译器查看对象的声明类型和方法名
    2. 编译器将匹配参数类型，可以进行类型转换(这里的类型转换以不丢失精度为标准)
    3. 如果是private、static、final方法或者构造器，编译器会准确的知道应该调用那个方法，这种调用方式成为静态绑定，与此对应的是，调用方法依赖于隐式参数的实际类型，并且在运行时实现动态绑定。
    4. 当程序运行时，并且采用动态绑定的调用方法时，虚拟机一定会调用与x所引用的对象的实际类型最合适的那个类的方法。
33. Object中重要方法: wait notify notifyAll equals hashcode toString clone
34. **验证java中char数据类型在内存中的二进制形式为Unicode编码**: 
    1. https://blog.csdn.net/lan_bing2013/article/details/52864635
    2. 
35. **死锁的各种情况**: 
    1. https://www.jb51.net/article/157757.htm
36. **开发调用**: 

## Java基础知识2

1. **java反射机制实现拦截器**: https://www.cnblogs.com/panxuejun/p/7719413.html
2. **lock与synchronized**: 
    1. 尝试获取
    2. 定时获取
    3. 中断获取
    4. 更灵活，多个Condition，条件释放，条件唤醒
    5. 读写锁
    6. 公平锁
3. **Java那些不为人知的特殊方法**
    1. getDeclaredMethods中会获取很多源代码里没有的方法。而且可能会发现里面有些方法是**volatile**的。Java当然没有volatile方法。但getDeclaredMethods()或者getMethods()返回的这些方法，Modifier.isVolatile(method.getModifiers())的结果却是true。
    2. 嵌套类的私有变量和方法对上层的类是可见的。但JVM不知道什么是内部类或者嵌套类的，都认为是顶级类，而那些内部类编译完后会生成…$…class的类文件。那这些私有变量又是如何被外部类访问的呢？javac是这样解决这个问题的，对于任何private的字段，方法或者构造函数，如果它们也被其它顶层类所使用，就会生成一个**synthetic**方法。这些synthetic方法是用来访问最初的私有变量/方法/构造函数的。这些方法的生成也很智能：只有确实被外部类用到了，才会生成这样的方法。
    3. **bridge/virtual**: http://ifeve.com/syntethic-and-bridge-methods/ volatile方法就是指bridge方法。由于在修饰符中volatile和bridge是同一个值，在之前版本的javap中存在一个BUG，一个bridge方法在反编译后会显示成volatile，所以存在”volatile方法”的说法。
4. **Modifier**: 
    ```java
    public static boolean isPublic(int mod) {}  // 0x00000001
    public static boolean isPrivate(int mod) {}  // 0x00000002
    public static boolean isProtected(int mod) {}  // 0x00000004

    public static boolean isStatic(int mod) {}  // 0x00000008
    public static boolean isFinal(int mod) {}  // 0x00000010
    public static boolean isAbstract(int mod) {}  // 0x00000400

    public static boolean isSynchronized(int mod) {}  // 0x00000020
    public static boolean isVolatile(int mod) {}  // 0x00000040
    public static boolean isTransient(int mod) {}  // 0x00000080

    public static boolean isNative(int mod) {}  // 0x00000100
    public static boolean isInterface(int mod) {}  // 0x00000200
    public static boolean isStrict(int mod) {}  // 0x00000800

    public static String toString(int mod) {}
    
    static boolean isSynthetic(int mod) {}  // 0x00001000  // 就是外部类访问内部类时需要用到的临时方法
    static boolean isMandated(int mod) {}  // 0x00008000
    static final int BRIDGE    = 0x00000040;  // 包内部私有的，并不对外开放
    static final int VARARGS   = 0x00000080;
    static final int ANNOTATION  = 0x00002000;
    static final int ENUM      = 0x00004000;
    ```
    ```java
    private static final int CLASS_MODIFIERS =
        Modifier.PUBLIC         | Modifier.PROTECTED    | Modifier.PRIVATE |
        Modifier.ABSTRACT       | Modifier.STATIC       | Modifier.FINAL   |
        Modifier.STRICT;  // public static int classModifiers()
    private static final int INTERFACE_MODIFIERS =
        Modifier.PUBLIC         | Modifier.PROTECTED    | Modifier.PRIVATE |
        Modifier.ABSTRACT       | Modifier.STATIC       | Modifier.STRICT;  // public static int interfaceModifiers()
    private static final int CONSTRUCTOR_MODIFIERS =
        Modifier.PUBLIC         | Modifier.PROTECTED    | Modifier.PRIVATE;  // public static int constructorModifiers()
    private static final int METHOD_MODIFIERS =
        Modifier.PUBLIC         | Modifier.PROTECTED    | Modifier.PRIVATE |
        Modifier.ABSTRACT       | Modifier.STATIC       | Modifier.FINAL   |
        Modifier.SYNCHRONIZED   | Modifier.NATIVE       | Modifier.STRICT;  // public static int methodModifiers()
    private static final int FIELD_MODIFIERS =
        Modifier.PUBLIC         | Modifier.PROTECTED    | Modifier.PRIVATE |
        Modifier.STATIC         | Modifier.FINAL        | Modifier.TRANSIENT |
        Modifier.VOLATILE;  // public static int fieldModifiers()
    private static final int PARAMETER_MODIFIERS =
        Modifier.FINAL;  // public static int parameterModifiers()
    static final int ACCESS_MODIFIERS =
        Modifier.PUBLIC | Modifier.PROTECTED | Modifier.PRIVATE;
    ```
5. **获取Class**:
    1. String.class: 编译时期就确定了
    2. new String("abc").getClass(): 运行时才确定
    3. Class.forName("com.wtf.Test"): 会加载静态变量
6. **普通类为什么不能用static修饰？**: 
    1. static修饰的东西被我们成为类成员,它会随着类的加载而加载,比如静态代码块,静态成员,静态方法(这里只是加载,并没有调用)等等,可以假象一下,如果把一个Class文件中的外部类设为static,那目的何在呢？难道让这个类随着应用的启动而加载吗？如果我在这次使用过程中根本没有使用过这个类,那么是不是就会浪费内存。这样来说设计不合理,总而言之,设计不合理的地方,Java是不会让它存在的。
    2. 而为什么内部类可以使用static修饰呢,因为内部类算是类的成员了,如果我们没有使用静态来修饰,那么我们在创建内部类的时候就需要先有一个外部类的对象,如果我们一直在使用内部类,那么内存中就会一直存在外部类的引用,而我们有时候只需要使用内部类,不需要外部类,那么还是会浪费内存,甚至会造成内存溢出。使用static修饰内部类之后,内部类在创建对象时就不需要有外部类对象的引用了。

## 多线程面试问题集锦

1. **如何停止一个线程**
    1. 使用volatile变量终止正常运行的线程 + 抛异常法/Return法
    2. 组合使用interrupt方法与interruptted/isinterrupted方法终止正在运行的线程 + 抛异常法/Return法
    3. 使用interrupt方法终止*正在阻塞中的*线程
2. **何为线程安全的类**: 在线程安全性的定义中，最核心的概念就是**正确性**。当多个线程访问某个类时，不管运行时环境采用何种调度方式或者这些线程将如何交替执行，并且在主调代码中不需要任何额外的同步或协同，这个类都能表现出正确的行为，那么这个类就是线程安全的。
3. **为什么线程通信的方法wait(), notify()和notifyAll()被定义在Object类里**: wait-notify机制是在获取对象锁的前提下不同线程间的通信机制。在Java中，任意对象都可以当作锁来使用，由于锁对象的任意性，所以这些通信方法需要被定义在Object类里。
4. **为什么wait(), notify()和notifyAll()必须在同步方法或者同步块中被调用**: wait/notify机制是依赖于Java中Synchronized同步机制的，其目的在于确保等待线程从wait()返回时能够感知通知线程对共享变量所作出的修改。如果不在同步范围内使用，就会抛出java.lang.IllegalMonitorStateException的异常。
5. **并发三准则**: 
    1. 异常不会导致死锁现象: 当线程出现异常且没有捕获处理时，JVM会自动释放当前线程占用的锁，因此不会由于异常导致出现死锁现象，同时还会释放CPU；
    2. 锁的是对象而非引用；
    3. 有wait必有notify；
6. **如何确保线程安全**: 
    1. 通过加锁(Lock/Synchronized)保证对临界资源的同步互斥访问
    2. 使用volatile关键字，轻量级同步机制，但不保证原子性
    3. 使用不变类 和 线程安全类(原子类，并发容器，同步容器等)
7. **volatile与synchronized**: 原理 阻塞 原子性 优化 性能 范围
8. volatile关键字在Java中有什么作用: volatile的特殊规则保证了新值能立即同步到主内存，以及每次使用前立即从主内存刷新，即保证了内存的可见性，除此之外还能 禁止指令重排序。
    此外，synchronized关键字也可以保证内存可见性。指令重排序问题在并发环境下会导致线程安全问题，volatile关键字通过禁止指令重排序来避免这一问题。
    而对于Synchronized关键字，其所控制范围内的程序在执行时独占的，指令重排序问题不会对其产生任何影响，因此无论如何，其都可以保证最终的正确性。
9. **ThreadLocal及其引发的内存泄露**: 
    1. ThreadLocal是Java中的一种线程绑定机制，可以为每一个使用该变量的线程都提供一个变量值的副本，并且每一个线程都可以独立地改变自己的副本，而不会与其它线程的副本发生冲突。
    2. 每个线程内部有一个 ThreadLocal.ThreadLocalMap 类型的成员变量 threadLocals，这个 threadLocals 存储了与该线程相关的所有 ThreadLocal 变量及其对应的值，也就是说，ThreadLocal 变量及其对应的值就是该Map中的一个 Entry，更直白地，threadLocals中每个Entry的Key是ThreadLocal 变量本身，而Value是该ThreadLocal变量对应的值。
    3. **内存泄露**: 每个thread中都存在一个map，map的类型是上文提到的ThreadLocal.ThreadLocalMap，该map中的key为一个ThreadLocal实例。这个Map的确使用了弱引用，不过弱引用只是针对key，每个key都弱引用指向ThreadLocal对象。一旦把threadlocal实例置为null以后，那么将没有任何强引用指向ThreadLocal对象，因此ThreadLocal对象将会被 Java GC 回收。但是，与之关联的value却不能回收，因为存在一条从current thread连接过来的强引用。 只有当前thread结束以后， current thread就不会存在栈中，强引用断开，Current Thread、Map及value将全部被Java GC回收。
    4. 只要这个线程对象被Java GC回收，就不会出现内存泄露。但是如果只把ThreadLocal引用指向null而线程对象依然存在，那么此时Value是不会被回收的，这就发生了我们认为的内存泄露。比如，在使用线程池的时候，线程结束是不会销毁的而是会再次使用的，这种情形下就可能出现ThreadLocal内存泄露。
    5. 所以最怕的情况就是，ThreadLocal对象设null了，开始发生"内存泄露"，然后使用线程池，线程结束后被放回线程池中而不销毁，那么如果这个线程一直不被使用或者分配使用了又不再调用get/set方法，那么这个期间就会发生真正的内存泄露。因此，最好的做法是: 在不使用该ThreadLocal对象时，及时调用该对象的remove方法去移除ThreadLocal.ThreadLocalMap中的对应Entry。
10. **什么是死锁(Deadlock)？如何分析和避免死锁？**: 
    1. 死锁是两个以上的线程由于互相需要对方占有的资源而永远阻塞
    2. JDK自带的死锁检测工具: 
        1. Jconsole: JDK自带的图形化界面工具，主要用于对 Java 应用程序做性能分析和调优
        2. Jstack: JDK自带的命令行工具，主要用于线程Dump分析
        3. VisualVM: JDK自带的图形化界面工具，主要用于对 Java 应用程序做性能分析和调优
11. **什么是Java Timer类？如何创建一个有特定时间间隔的任务？**
    1. Timer是一个调度器，可以用于安排一个任务在未来的某个特定时间执行或周期性执行。TimerTask是一个实现了Runnable接口的抽象类，我们需要去继承这个类来创建我们自己的定时任务并使用Timer去安排它的执行。
        ```java
        new Timer().schedule(new TimerTask() {
            public void run() {
                // #TODO
            }
        }, 20000, 1000);
        ```
12. **什么是线程池？如何创建一个Java线程池？**
    1. 一个线程池管理了一组工作线程，同时它还包括了一个用于放置等待执行的任务的队列。线程池可以避免线程的频繁创建与销毁，降低资源的消耗，提高系统的反应速度。java.util.concurrent.Executors 提供了几个 java.util.concurrent.Executor 接口的实现用于创建线程池，其主要涉及四个角色: 
        1. 线程池: Executor
        2. 工作线程: Worker线程，Worker的run()方法执行Job的run()方法
        3. 任务Job: Runable和Callable
        4. 阻塞队列: BlockingQueue
    2. **线程池**: Executor及其实现类是用户级的线程调度器，也是对任务执行机制的抽象，其将任务的提交与任务的执行分离开来，核心实现类包括ThreadPoolExecutor(用来执行被提交的任务)和ScheduledThreadPoolExecutor(可以在给定的延迟后执行任务或者周期性执行任务)。Executor的实现继承链条为: (父接口)Executor -> (子接口)ExecutorService -> (实现类)[ ThreadPoolExecutor + ScheduledThreadPoolExecutor ]。
        1. **FixedThreadPool**: 用于创建使用固定线程数的ThreadPool，corePoolSize = maximumPoolSize = n(固定的含义)，阻塞队列为LinkedBlockingQueue。线程会一直存在，直到调用shutdown。
        2. **SingleThreadExecutor**: 用于创建一个单线程的线程池，corePoolSize = maximumPoolSize = 1，阻塞队列为LinkedBlockingQueue。与newFixedThreadPool(1)不同是不能重新配置加入线程，使用FinalizableDelegatedExecutorService进行包装。能**保证执行顺序**，先提交的先执行。当线程执行中出现异常，去创建一个新的线程替换之。
        3. **CachedThreadPool**: 创建一个可缓存的线程池，corePoolSize = 0， maximumPoolSize = Integer.MAX_VALUE，阻塞队列为SynchronousQueue(没有容量的阻塞队列，每个插入操作必须等待另一个线程对应的移除操作，反之亦然)，默认为60s未使用就被终止和移除。适用于服务器负载较轻，**执行很多短期异步任务**。
        4. **WorkStealingPool**: 创建持有足够线程的线程池来支持给定的并行级别，并通过使用多个队列，减少竞争，它需要传入一个并行级别的参数，如果不传，则被设定为默认的CPU数量。适用于**大耗时**的操作，可以并行来执行。
        5. **ScheduledThreadPool**: 创建一个大小无限的线程池，此线程池支持定时以及周期性执行任务的需求。维护了一个延迟队列DelayedBlockingQueue。
        6. **unconfigurableExecutorService**: 未配置的线程池。
        7. **ForkJoinPool**: 支持大任务分解成小任务的线程池，这是Java8新增线程池，通常配合ForkJoinTask接口的子类RecursiveAction或RecursiveTask使用。
        1. **corePoolSize**: 没有任务需要执行的时候线程池的大小，并且只有在工作队列满了的情况下才会创建超出这个数量的线程。在刚刚创建ThreadPoolExecutor的时候，线程并不会立即启动，而是要等到有任务提交时才会启动，除非调用了prestartCoreThread/prestartAllCoreThreads事先启动核心线程。再考虑到keepAliveTime和allowCoreThreadTimeOut超时参数的影响，所以没有任务需要执行的时候，线程池的大小不一定是corePoolSize。
        2. **maximumPoolSize**: 线程池中允许的最大线程数。线程池创建之后，可以调用setMaximumPoolSize()改变运行的最大线程的数目。largestPoolSize记录了线程池在整个生命周期中曾经出现的最大线程个数。
        3. **poolSize**: 线程池中当前线程的数量，当该值为0的时候，意味着没有任何线程，线程池会终止；同一时刻，poolSize不会超过maximumPoolSize。
        4. **allowCoreThreadTimeOut**: 是否允许核心线程超时退出。
        5. **keepAliveTime**: 如果一个线程处在空闲状态的时间超过了该属性值，就会因为超时而退出。
        1. **常用方法**: execute/submit/schedule/shutdown/shutdownNow/invoke
        2. **常用接口与类**: Callback/Runnable/Future/FutureTask/ForkJoinTask/RecursiveAction(用于没有返回结果的任务)/RecursiveTask(用于有返回结果的任务)
        3. **常用机制**: 
            1. **work-stealing(工作窃取)**: ForkJoinPool提供了一个更有效的利用线程的机制，当ThreadPoolExecutor还在用单个队列存放任务时，ForkJoinPool已经分配了与线程数相等的队列，当有任务加入线程池时，会被平均分配到对应的队列上，各线程进行正常工作，当有线程提前完成时，会从队列的末端"窃取"其他线程未执行完的任务，当任务量特别大时，CPU多的计算机会表现出更好的性能。
            2. **线程池的饱和策略**: 当阻塞队列满了，且没有空闲的工作线程，如果继续提交任务，必须采取一种策略处理该任务，线程池提供了4种策略: 
                1. AbortPolicy: 直接抛出异常，默认策略；
                2. CallerRunsPolicy: 用调用者所在的线程来执行任务；
                3. DiscardOldestPolicy: 丢弃阻塞队列中最老的任务，并执行当前任务；
                4. DiscardPolicy: 直接丢弃任务；
                5. 当然也可以根据应用场景实现RejectedExecutionHandler接口，自定义饱和策略，如记录日志或持久化存储不能处理的任务。
            3. **线程池的回收策略**: 与allowCoreThreadTimeOut和keepAliveTime相关
        4. **线程池调优**: 
            1. 设置最大线程数，防止线程资源耗尽；
            2. 使用有界队列，从而增加系统的稳定性和预警能力(饱和策略)；
            3. 根据任务的性质设置线程池大小: CPU密集型任务(CPU个数个线程)，IO密集型任务(CPU个数两倍的线程)，混合型任务(拆分)。
    3. **任务**: Runnable(run)和Callable(call)都是对任务的抽象，但是Callable可以返回任务执行的结果或者抛出异常。
    4. **任务状态**: Future是对任务执行状态和结果的抽象，核心实现类是furtureTask(所以它既可以作为Runnable被线程执行，又可以作为Future得到Callable的返回值)。
        ```java
        Task task = new Task();
        Future<Integer> result = executor.submit(task);
        System.out.println("task运行结果" + result.get());
        // FutureTask<Integer> futureTask = new FutureTask<Integer>(task);
        // executor.submit(futureTask)
        // System.out.println("task运行结果" + futureTask.get())
        class Task implements Callable<Integer> {
            @Override
            public Integer call() throws Exception {
                System.out.println("子线程在进行计算");
                Thread.sleep(3000);
                int sum = 0;
                for(int i = 0; i < 100; i++)
                    sum += i;
                return sum;
            }
        }
        ```
13. **CAS: CAS自旋volatile变量，是一种很经典的用法**
    1. CAS，Compare and Swap即比较并交换，设计并发算法时常用到的一种技术。CAS有3个操作数，内存值V，旧的预期值A，新值B。当且仅当预期值A和内存值V相同时，将内存值V修改为B，
        否则什么都不做，重新开始CAS(while)。
    2. CAS虽然很高效的解决原子操作，但是CAS仍然存在三大问题: ABA问题、循环时间长开销大和只能保证一个共享变量的原子操作。
        1. **ABA问题**: 因为CAS需要在操作值的时候检查下值有没有发生变化，如果没有发生变化则更新，但是如果一个值原来是A，变成了B，又变成了A，那么使用CAS进行检查时会发现它的值没有发生变化，但是实际上却变化了。ABA问题的解决思路就是使用版本号。在变量前面追加上版本号，每次变量更新的时候把版本号加一，那么A－B－A 就会变成1A-2B－3A。
        2. **不适用于竞争激烈的情形中**: 并发越高，失败的次数会越多，CAS如果长时间不成功，会极大的增加CPU的开销。因此CAS不适合竞争十分频繁的场景。
        3. **只能保证一个共享变量的原子操作**: 当对一个共享变量执行操作时，我们可以使用循环CAS的方式来保证原子操作，但是对多个共享变量操作时，循环CAS就无法保证操作的原子性，这个时候就可以用锁，或者有一个取巧的办法，就是把多个共享变量合并成一个共享变量来操作。比如有两个共享变量i＝2,j=a，合并一下ij=2a，然后用CAS来操作ij。从Java1.5开始JDK提供了AtomicReference类来保证引用对象之间的原子性，因此可以把多个变量放在一个对象里来进行CAS操作。
14. **AQS: 队列同步器** 实现 意义 模板方法模式 主要重写方法 两种资源共享方式  [深入理解AbstractQueuedSynchronizer(AQS)](https://www.jianshu.com/p/cc308d82cc71)
    1. **技术**: 队列同步器(AbstractQueuedSynchronizer)是用来构建锁和其他同步组件的基础框架，技术是**CAS自旋Volatile变量**: 它使用了一个Volatile成员变量表示同步状态，
        通过CAS修改该变量的值，修改成功的线程表示获取到该锁；若没有修改成功，或者发现状态state已经是加锁状态，则通过一个Waiter对象封装线程，添加到等待队列中，并挂起等待被唤醒。
        主要的改变方法为getState/setState/compareAndSetState()。
    2. **意义**: 同步器是实现锁的关键，子类通过继承同步器并实现它的抽象方法来管理同步状态，利用同步器实现锁的语义。特别地，锁是面向锁使用者的，它定义了使用者与锁交互的接口，
        隐藏了实现细节；同步器面向的是锁的实现者，它简化了锁的实现方式，屏蔽了同步状态管理、线程排队、等待与唤醒等底层操作。
        **锁和同步器很好地隔离了锁的使用者与锁的实现者所需关注的领域**。
    3. 同步器的设计是基于**模板方法模式**的，也就是说，使用者需要继承同步器并重写指定的方法，随后将同步器组合在自定义同步组件的实现中，并调用同步器提供的模板方法，
        而这些**模板方法将会调用使用者重写的方法**。
    4. **主要重写方法**: 一般来说，自定义同步器要么是独占方式，要么是共享方式，他们也只需实现tryAcquire-tryRelease、tryAcquireShared-tryReleaseShared中的一种即可。
        但AQS也支持自定义同步器同时实现独占和共享两种方式，如ReentrantReadWriteLock。而AQS中的模板方法acquire会调用tryAcquire等需要子类方法。
    5. AQS定义了**两种资源共享方式**: Exclusive(独占，只有一个线程能执行，如ReentrantLock)和Share(共享，多个线程可同时执行，如Semaphore/CountDownLatch)。
        不同的自定义同步器用共享资源的方式也不同。自定义同步器在实现时只需要实现共享资源state的获取与释放方式即可，至于具体线程等待队列的维护(如获取资源失败入队/唤醒出队等)，
        AQS已经在顶层实现好了。自定义同步器实现时主要实现以下几种方法: 
        1. isHeldExclusively(): 该线程是否正在独占资源。只有用到condition才需要去实现它；
        2. tryAcquire(int): 独占方式。尝试获取资源，成功则返回true，失败则返回false；
        3. tryRelease(int): 独占方式。尝试释放资源，成功则返回true，失败则返回false；
        4. tryAcquireShared(int): 共享方式。尝试获取资源。负数表示失败；0表示成功，但没有剩余可用资源；正数表示成功，且有剩余资源；
        5. tryReleaseShared(int): 共享方式。尝试释放资源，成功则返回true，失败则返回false。
        6. 以ReentrantLock为例，state初始化为0，表示未锁定状态。A线程lock()时，会调用tryAcquire()独占该锁并将state+1。此后，其他线程再tryAcquire()时就会失败，直到A线程unlock()到state=0(即释放锁)为止，其它线程才有机会获取该锁。当然，释放锁之前，A线程自己是可以重复获取此锁的(state会累加)，这就是可重入的概念。但要注意，获取多少次就要释放多少次，这样才能保证state是能回到零态的。
    6. **队列管理**: AQS中Node类有Node类型的prev/next，所以同步队列是双向队列，AQS实际上通过头尾指针来管理同步队列，同时实现包括获取锁失败的线程进行入队，释放锁时对同步队列中的线程进行通知等核心方法。
15. **Java Concurrency API中的Lock接口(Lock interface)是什么？对比同步它有什么优势？**
    1. synchronized是Java的关键字，是Java的内置特性，在JVM层面实现了对临界资源的同步互斥访问。Synchronized的语义底层是通过一个monitor对象来完成的，线程执行monitorenter/
        monitorexit指令完成锁的获取与释放。而Lock是一个Java接口(API如下图所示)，是基于JDK层面实现的，通过这个接口可以实现同步访问，它提供了比synchronized关键字更灵活、
        更广泛、粒度更细的锁操作，底层是由AQS实现的。二者之间的差异总结如下: 实现层面 响应中断 尝试获取 读写锁 公平锁 显式获取与释放
        1. **实现层面**: synchronized(JVM层面)、Lock(JDK层面)
        2. **响应中断**: Lock可以让等待锁的线程响应中断，而使用synchronized时，等待的线程会一直等待下去，不能够响应中断；
        3. **立即返回**: 可以让线程尝试获取锁，并在无法获取锁的时候立即返回或者等待一段时间，而synchronized却无法办到；
        4. **读写锁**: Lock可以提高多个线程进行读操作的效率
        5. **可实现公平锁**: Lock可以实现公平锁，而sychronized天生就是非公平锁
            1. **公平锁**: 加锁前先查看是否有排队等待的线程，有的话优先处理排在前面的线程，先来先得。
            2. **非公平锁**: 线程加锁时直接尝试获取锁，获取不到就自动到队尾等待。非公平锁比公平锁性能高5-10倍，因为公平锁需要在多核情况下维护一个队列，如果当前线程不是队列的第一个无法获取锁，增加了线程切换次数。
            1. **悲观锁**: 假设一定会发生并发冲突，通过阻塞其他所有线程来保证数据的完整性。如Synchronized多线程同步，具有排他性，也会容易产生死锁。悲观锁适用于数据争用严重/重试代价大的场景。
            2. **乐观锁**: 假设不会发生并发冲突，直接不加锁去完成某项更新，如果冲突就返回失败。如CAS机制，内存值V，预期值A，更新值B。乐观锁适用于数据争用不严重/重试代价不大/需要相应速度快的场景。
        6. **显式获取和释放**: synchronized在发生异常时，会自动释放线程占有的锁，因此不会导致死锁现象发生；而Lock在发生异常时，如果没有主动通过unLock()去释放锁，则很可能造成死锁现象，因此使用Lock时需要在finally块中释放锁；
16. **Condition**可以用来实现线程的分组通信与协作。以生产者/消费者问题为例
    1. wait/notify/notifyAll: 在队列为空时，通知所有线程；在队列满时，通知所有线程，防止生产者通知生产者，消费者通知消费者的情形产生。
    2. await/signal/signalAll: 将线程分为消费者线程和生产者线程两组: 在队列为空时，通知生产者线程生产；在队列满时，通知消费者线程消费。
    3. 区别: 
        1. notify无法决定通知那一个线程，只能随机的一个线程，而condition却可以指定线程来通知。
        2. notify等是在jni层面实现的，而condition是在java层面实现的。
17. **什么是阻塞队列？如何使用阻塞队列来实现生产者-消费者模型？**
    1. java.util.concurrent.BlockingQueue的特性是: 当队列是空的时，从队列中获取或删除元素的操作将会被阻塞，或者当队列是满时，往队列里添加元素的操作会被阻塞。特别地，阻塞队列不接受空值，当你尝试向队列中添加空值的时候，它会抛出NullPointerException。另外，阻塞队列的实现都是线程安全的，所有的查询方法都是原子的并且使用了内部锁或者其他形式的并发控制。
    2. BlockingQueue接口是java collections框架的一部分，它主要用于实现生产者-消费者问题。特别地，SynchronousQueue是一个没有容量的阻塞队列，每个插入操作必须等待另一个线程的对应移除操作，反之亦然。CachedThreadPool使用SynchronousQueue把主线程提交的任务传递给空闲线程执行。
18. **同步容器(强一致性)**
    1. 同步容器指的是Vector、Stack、HashTable及Collections类中提供的静态工厂方法创建的类。其中，Vector实现了List接口，Vector实际上就是一个数组，和ArrayList类似，但是Vector中的方法都是synchronized方法，即进行了同步措施；Stack也是一个同步容器，它的方法也用synchronized进行了同步，它实际上是继承于Vector类；HashTable实现了Map接口，它和HashMap很相似，但是HashTable进行了同步处理，而HashMap没有。
    2. Collections类是一个工具提供类，注意，它和Collection不同，Collection是一个顶层的接口。在Collections类中提供了大量的方法，比如对集合或者容器进行排序、查找等操作。最重要的是，在它里面提供了几个静态工厂方法来创建同步容器类。
    1. **强一致性**: 更新过的数据能被后续的访问都能看到
    2. **弱一致性**: 能容忍后续的部分或者全部访问不到更新后的数据
    3. **最终一致性**: 经过一段时间后要求能访问到更新后的数据
19. **什么是CopyOnWrite容器(弱一致性)？**
    1. CopyOnWrite容器即写时复制的容器，适用于读操作远多于修改操作的并发场景中。通俗的理解是当我们往一个容器添加元素的时候，不直接往当前容器添加，而是先将当前容器进行Copy，
        复制出一个新的容器，然后新的容器里添加元素，添加完元素之后，再将原容器的引用指向新的容器。这样做的好处是我们可以对CopyOnWrite容器进行并发的读，而不需要加锁，
        因为当前容器不会添加任何元素。所以CopyOnWrite容器也是一种读写分离的思想，读和写不同的容器。
    2. 从JDK1.5开始Java并发包里提供了两个使用CopyOnWrite机制实现的并发容器，它们是CopyOnWriteArrayList和CopyOnWriteArraySet。CopyOnWrite容器主要存在两个弱点: 
        1. 容器对象的复制需要一定的开销，如果对象占用内存过大，可能造成频繁的YoungGC和Full GC；
        2. CopyOnWriteArrayList不能保证数据实时一致性，只能保证最终一致性。
    3. 读写操作
        1. 读操作(get, …)：不使用锁，弱一致性 (效率与安全性的一个平衡)
        2. 写操作(add, set, …)：使用lock锁(concurrent包下的实现，若使用到锁，均为lock锁)实现
20. **ConcurrentHashMap(弱一致性)**
    1. ConcurrentHashMap的弱一致性主要是为了提升效率，也是一致性与效率之间的一种权衡。要成为强一致性，就得到处使用锁，甚至是全局锁，这就与Hashtable和同步的HashMap一样了。ConcurrentHashMap的弱一致性主要体现在以下几方面: 
        1. get操作是弱一致的: get操作只能保证一定能看到已完成的put操作；
        2. clear操作是弱一致的: 在清除完一个segments之后，正在清理下一个segments的时候，已经清理的segments可能又被加入了数据，因此clear返回的时候，ConcurrentHashMap中是可能存在数据的。
        3. ConcurrentHashMap中的迭代操作是弱一致的(未遍历的内容发生变化可能会反映出来): 在遍历过程中，如果已经遍历的数组上的内容变化了，迭代器不会抛出ConcurrentModificationException异常。如果未遍历的数组上的内容发生了变化，则有可能反映到迭代过程中。
21. **happens-before**
    1. happens-before 指定了两个操作间的执行顺序: 如果 A happens before B，那么Java内存模型将向程序员保证 —— A 的执行顺序排在 B 之前，并且 A 操作的结果将对 B 可见，其具体包括如下8条规则: 
        1. **程序顺序规则**: 单线程内，按照程序代码顺序，书写在前面的操作先行发生于书写在后面的操作；
        2. **管程锁定规则**: 一个unlock操作先行发生于对同一个锁的lock操作；
        3. **volatile变量规则**: 对一个Volatile变量的写操作先行发生于对这个变量的读操作；
        4. **线程启动规则**: Thread对象的start()方法先行发生于此线程的其他动作；
        5. **线程中断规则**: 对线程interrupt()方法的调用先行发生于被中断线程的代码检测到中断事件的发生；
        6. **线程终止规则**: 线程中所有的操作都先行发生于线程的终止检测，我们可以通过Thread.join()方法结束、Thread.isAlive()的返回值手段检测到线程已经终止执行；
        7. **对象终结规则**: 一个对象的初始化完成先行发生于它的finalize()方法的开始；
        8. **传递规则**: 如果操作A先行发生于操作B，而操作B又先行发生于操作C，则可以得出操作A先行发生于操作C；
22. **锁优化技术**: 锁优化技术的目的在于线程之间更高效的共享数据，解决竞争问题，更好提高程序执行效率。
    1. **自旋锁**(上下文切换代价大): 互斥锁 -> 阻塞 –> 释放CPU，线程上下文切换代价较大 + 共享变量的锁定时间较短 == 让线程通过自旋等一会儿，自旋锁
    2. **锁粗化**(一个大锁优于若干小锁): 一系列连续操作对同一对象的反复频繁加锁/解锁会导致不必要的性能损耗，建议粗化锁。一般而言，同步范围越小越好，这样便于其他线程尽快拿到锁，但仍然存在特例。
    3. **偏向锁**(有锁但当前情形不存在竞争): 消除数据在无竞争情况下的同步原语，提高带有同步但无竞争的程序性能。
    4. **锁消除**(有锁但不存在竞争，锁多余): JVM编译优化，将不存在数据竞争的锁消除。
23. **主线程等待子线程运行完毕再运行的方法**
    1. join
    2. CountDownLatch: latch = new CountDownLatch(int); latch.countDown(); latch.await();  /* 阻塞 */
    3. sleep
    4. LockSupport
24. **CopyOnWriteArraySet 与 CopyOnWriteArrayList 的对比**
    - CopyOnWriteArraySet容器也是基于CopyOnWriteArrayList容器实现的，只需要在写操作时判断元素不可重复即可。
25. **并发容器(CopyOnWriteArrayList/CopyOnWriteArraySet)与同步容器(Collections.synchronizedList / Collections.synchronizedSet)的区别**
    - CopyOnWriteArrayList和Collections.synchronizedList是实现线程安全的列表的两种方式。两种实现方式分别针对不同情况有不同的性能表现，其中CopyOnWriteArrayList的写操作性能较差(复制数组)，而多线程的读操作性能较好；而Collections.synchronizedList的写操作性能比CopyOnWriteArrayList在多线程操作的情况下要好很多，而读操作因为是采用了synchronized关键字的方式，其读操作性能并不如CopyOnWriteArrayList。因此在不同的应用场景下，应该选择不同的多线程安全实现类。
26. **ConcurrentHashMap**: 
    1. put: 定位段 —> 对段加锁 ——> 扩容检查 ——> Key检查 ——> 链头插入
    2. remove: 定位段 —> 对段加锁 ——> Key检查 ——> Entry链复制(原始链表并没有被修改) ——> 删除成功
    3. clear: 对segments数组中的每个段进行清空 -> 每个Segments中的桶置空(原始链表任然存在)
    4. **为什么可以不加锁进行读？** 具体分两种情况对待: 对ConcurrentHashMap做非结构性修改和对ConcurrentHashMap做结构性修改。
        1. 非结构性修改操作只是更改某个HashEntry的value字段的值。由于对Volatile变量的写入操作将与随后对这个变量的读操作进行同步，所以当一个写线程修改了某个HashEntry的value字段后，Java内存模型能够保证读线程一定能读取到这个字段更新后的值。所以，写线程对链表的非结构性修改能够被后续不加锁的读线程看到。
        2. 对ConcurrentHashMap做结构性修改时，实质上是对某个桶指向的链表做结构性修改。如果能够确保在读线程遍历一个链表期间，写线程对这个链表所做的结构性修改不影响读线程继续正常遍历这个链表，那么读/写线程之间就可以安全并发访问这个ConcurrentHashMap。在ConcurrentHashMap中，结构性修改操作包括put操作、remove操作和clear操作，下面我们分别分析这三个操作: 
            1. clear操作只是把ConcurrentHashMap中所有的桶置空，每个桶之前引用的链表依然存在，只是桶不再引用这些链表而已，而链表本身的结构并没有发生任何修改。因此，正在遍历某个链表的读线程依然可以正常执行对该链表的遍历。
            2. 关于put操作的细节我们在上文已经单独介绍过，我们知道put操作如果需要插入一个新节点到链表中时会在链表头部插入这个新节点，此时链表中的原有节点的链接并没有被修改。也就是说，插入新的健/值对到链表中的操作不会影响读线程正常遍历这个链表。
            3. 在执行remove操作时，原始链表并没有被修改，也就是说，读线程不会受同时执行 remove 操作的并发写线程的干扰。
        3. 跨段操作， size、contains
27. **ConcurrentHashMap，HashMap 与 HashTable**: 本质 线程安全性 键值约束 哈希策略 扩容机制 初始容量
    1. **本质**: 三者都实现了Map接口，ConcurrentHashMap和HashMap是AbstractMap的子类，HashTable是Dictionary的子类；
    2. **线程安全性**: HashMap 是线程不安全的，但 ConcurrentHashMap 和 HashTable 是线程安全的，但二者保证线程安全的策略不同;前者采用的是分段锁机制，默认理想情况下，可支持16个线程的并发写和任意线程的并发读，效率较高；HashTable 采用的是同步操作，效率较低
    3. **键值约束**: HashMap 允许键、值为 null，但 ConcurrentHashMap 和 HashTable 既不允许键为null，也不允许值为 null;
    4. **哈希策略**: HashTable是key.hashCode取余；ConcurrentHashMap与HashMap都是先对hashCode进行再哈希，然后再与(桶数-1)进行取余运算，但二者的再哈希算法不同；
    5. **扩容机制**: 扩容检查机制不同， ConcurrentHashMap 和 HashTable 在插入元素前检查，HashMap 在元素插入后检查；
    6. **初始容量**: HashTable 初始容量 11，扩容 2倍 + 1；HashMap初始容量16，扩容2倍
28. **为什么Hashtable ConcurrentHashmap不支持key或者value为null**: 
    1. ConcurrentHashmap和Hashtable都是支持并发的，这样会有一个问题，当你通过get(k)获取对应的value时，如果获取到的是null时，你无法判断，它是put(k,v)的时候value为null，还是这个key从来没有做过映射。HashMap是非并发的，可以通过contains(key)来做这个判断。而支持并发的Map在调用m.contains(key)和m.get(key),m可能已经不同了。
29. **notify与notifyall**: 
    1. **锁池**: 假设线程A已经拥有了某个对象(注意:不是类)的锁，而其它的线程想要调用这个对象的某个synchronized方法(或者synchronized块)，由于这些线程在进入对象的synchronized方法之前必须先获得该对象的锁的拥有权，但是该对象的锁目前正被线程A拥有，所以这些线程就进入了该对象的锁池中。
    2. **等待池**: 假设一个线程A调用了某个对象的wait()方法，线程A就会释放该对象的锁后，进入到了该对象的等待池中
    3. **notify**: 如果线程调用了对象的 wait()方法，那么线程便会处于该对象的等待池中，等待池中的线程不会去竞争该对象的锁
    4. **notifyAll**: 当有线程调用了对象的 notifyAll()方法（唤醒所有wait线程）或 notify()方法（只随机唤醒一个wait线程），被唤醒的的线程便会进入该对象的锁池中，锁池中的线程会去竞争该对象锁。也就是说，调用了notify后只要一个线程会由等待池进入锁池，而notifyAll会将该对象等待池内的所有线程移动到锁池中，等待锁竞争
    5. 优先级高的线程竞争到对象锁的概率大，假若某线程没有竞争到该对象锁，它还会留在锁池中，唯有线程再次调用 wait()方法，它才会重新回到等待池中。而竞争到对象锁的线程则继续往下执行，直到执行完了 synchronized 代码块，它会释放掉该对象锁，这时锁池中的线程会继续竞争该对象锁
    6. 所以，如果其他线程都在wait，而notify只能唤醒一个正在wait的线程进入锁池，如果它又继续wait了，或者说没有notify其他的线程，那么**notify将会导致死锁**，其他线程一直在等待池等待。所以，生产者消费者问题才更好解决。
    7. **notify/notifyAll() 的执行只是唤醒沉睡的线程，而不会立即释放锁**，锁的释放要看代码块的具体执行情况。所以在编程中，尽量在使用了notify/notifyAll() 后立即退出临界区或者调用wait主动释放锁，以唤醒其他线程。
    8. **注意条件**: 
        1. 永远在while循环里而不是if语句下使用wait。这样，循环会在线程睡眠前后都检查wait的条件，并在条件实际上并未改变的情况下处理唤醒通知。
        2. 永远在synchronized的函数或对象里使用wait、notify和notifyAll，不然Java虚拟机会生成 IllegalMonitorStateException。
        3. 可以使用wait和notify函数来实现线程间通信。你可以用它们来实现多线程（>3）之间的通信。
        4. 永远在多线程间共享的对象（在生产者消费者模型里即缓冲区队列）上使用wait。
    9. 你应该只在你知道自己要做什么的情况下使用这些函数，不然Java里还有很多其它的用来解决同步问题的方案。例如，如果你想使用生产者消费者模型的话，你也可以使用BlockingQueue，它会帮你处理所有的线程安全问题和流程控制。如果你想要某一个线程等待另一个线程做出反馈再继续运行，你也可以使用CycliBarrier或者CountDownLatch。如果你只是想保护某一个资源的话，你也可以使用Semaphore。
30. **Java 中15种锁的介绍：公平锁，可重入锁，独享锁，互斥锁，乐观锁，分段锁，自旋锁等等**: https://segmentfault.com/a/1190000017766364#articleHeader0

## 

[JVM解析系列](https://blog.csdn.net/u014629433/column/info/jvmby2b)
[深入理解AbstractQueuedSynchronizer(AQS)](https://www.jianshu.com/p/cc308d82cc71)
[详解Condition的await和signal等待/通知机制](https://www.jianshu.com/p/28387056eeb4)
《java并发编程的艺术》

https://blog.csdn.net/justloveyou_/article/details/78653929 -- 面试/笔试第五弹 —— Java面试问题集锦(下篇)
https://www.cnblogs.com/noteless/category/1394612.html -- 多线程与Java
https://blog.csdn.net/linzhiqiang0316/article/details/80473906 -- 史上最全Java面试题(带全部答案)
https://blog.csdn.net/u011240877/article/details/72860483 -- Android 进阶12: 进程通信之 Socket (顺便回顾 TCP UDP)
https://www.jianshu.com/p/fb5d63bd1948 -- Android2018面试题总结(真的很全面哦~ java篇)
https://www.jianshu.com/p/dab1fcf0109d -- Android2018面试题总结(真的很全面哦~ Android篇)

https://blog.csdn.net/pgg_cold/article/category/7470645/2?
https://blog.csdn.net/u013651026/article/details/79184106
https://blog.csdn.net/johnwcheung/article/category/7005332/2?
https://blog.csdn.net/ClAndEllen/article/details/79257663

https://docs.oracle.com/en/java/javase/11/