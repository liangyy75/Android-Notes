<!-- GFM-TOC -->
* [Android 基础知识](###Android%20基础知识)
* [Android 基础知识2](###Android%20基础知识2)
* [Android Activity](###Android%20Activity)
* [Android Service](###Android%20Service)
* [Android BroadcastReceiver](###Android%20BroadcastReceiver)
* [Android ContentProvider](###Android%20ContentProvider) 未完成
* [Android Fragment](###Android%20Fragment) 未完成
* [Android Handler](###Android%20Handler)
* [Android Loader](###Android%20Loader)
* [Android Binder](###Android%20Binder)
* [Android Messenger](###Android%20Messenger) 未完成
* [Android AIDL](###Android%20AIDL) 未完成
* [Android 消息](###Android%20消息) 未完成
* [Android 事件响应](###Android%20事件响应) 未完成
* [Android 函数响应式](###Android%20函数响应式) 未完成
* [Android 数据存储](###Android%20数据存储) 未完成
* [Android ORM](###Android%20ORM) 未完成
* [Android 网络请求](###Android%20网络请求)
* [Android 网络请求2](###Android%20网络请求2) 未完成
* [Android 网络请求3](###Android%20网络请求3) 未完成
* [Android 图片请求](###Android%20图片请求) 未完成
* [Android 视频音频](###Android%20视频音频) 未完成
* [Android 依赖注入](###Android%20依赖注入) 未完成
* [Android 动画](###Android%20动画) 未完成
* [Android Drawable](###Android%20Drawable) 未完成
* [Android 自定义View](###Android%20自定义View) 未完成
* [Android 性能优化](###Android%20性能优化)
* [Android 内存泄露](###Android%20内存泄露)
* [Android 安全漏洞](###Android%20安全漏洞) 未完成
<!-- GFM-TOC -->

### Android 基础知识

1. **五种布局**: FrameLayout 、 LinearLayout 、 AbsoluteLayout 、 RelativeLayout 、 TableLayout 全都继承自ViewGroup，各自特点及绘制效率对比。
2. **如何判断应用被强杀**: 在Application中定义一个static常量，赋值为－1，在欢迎界面改为0，如果被强杀，application重新初始化，在父类Activity判断该常量的值。
3. **应用被强杀如何解决**: 如果在每一个Activity的onCreate里判断是否被强杀，冗余了，封装到Activity的父类中，如果被强杀，跳转回主界面，如果没有被强杀，执行Activity的初始化操作，
    给主界面传递intent参数，主界面会调用onNewIntent方法，在onNewIntent跳转到欢迎页面，重新来一遍流程。
4. **Json/XML有什么优劣势**: 
    1. xml: Extensible Markup Language，用于标记电子文件使其具有结构性的标记语言，可以用来标记数据、定义数据类型，是一种允许用户对自己的标记语言进行定义的源语言
    2. json: JavaScript Object Notation，轻量级的数据交换格式，具有良好的可读和便于快速编写的特性。可在不同平台之间进行数据交换。JSON采用兼容性很高的、完全独立于语言文本格式，同时也具备类似于C语言的习惯体系的行为。这些特性使JSON成为理想的数据交换语言。
    3. XML的优点
        1. 格式统一，符合标准；
        2. 容易与其他系统进行远程交互，数据共享比较方便。
    4. XML的缺点
        1. XML文件庞大，文件格式复杂，传输占带宽；
        2. 服务器端和客户端都需要花费大量代码来解析XML，导致服务器端和客户端代码变得异常复杂且不易维护；
        3. 客户端不同浏览器之间解析XML的方式不一致，需要重复编写很多代码；
        4. 服务器端和客户端解析XML花费较多的资源和时间。
    5. JSON的优点: 
        1. 数据格式比较简单，易于读写，格式都是压缩的，占用带宽小；
        2. 易于解析，客户端JavaScript可以简单的通过eval()进行JSON数据的读取；
        3. 支持多种语言，包括ActionScript, C, C#, ColdFusion, Java, JavaScript, Perl, PHP, Python, Ruby等服务器端语言，便于服务器端的解析；
        4. 在PHP世界，已经有PHP-JSON和JSON-PHP出现了，偏于PHP序列化后的程序直接调用，PHP服务器端的对象、数组等能直接生成JSON格式，便于客户端的访问提取；
        5. 因为JSON格式能直接为服务器端代码使用，大大简化了服务器端和客户端的代码开发量，且完成任务不变，并且易于维护。
    6. JSON的缺点
        1. 没有XML格式这么推广的深入人心和喜用广泛，没有XML那么通用性；
        2. JSON格式目前在Web Service中推广还属于初级阶段。=
5. **怎样退出终止App**: 
    1. 建立一个全局容器，把所有的Activity存储起来，退出时循环遍历finish所有Activity: 这种方法比较简单， 但是可以看到activityStack持有这Activity的强引用，也就是说当某个Activity异常退出时，Activity 生命周期方法没有被执行，activityStack没有及时释放掉引用，就会导致内存问题。
    2. 通过在BaseActivity中注册一个广播，当退出时发送一个广播，finish退出
    3. 通过直接杀死当前应用的进程来结束应用，非常简单粗暴，但是有很多问题。
        1. 杀进程: android.os.Process.killProcess(android.os.Process.myPid());
        2. 退出虚拟机: System.exit(0);
        3. ActivityManager杀死后台进程: ((ActivityManager) getSystemService(ACTIVITY_SERVICE)).killBackgroundProcesses(getPackageName());
            需要添加权限: ``<uses-permission android:name="android.permission.KILL_BACKGROUND_PROCESSES" />``
        4. ActivityManager的killBackgroundProcesses 是AMS提供的杀死后台进程的方法,不能杀死自己。Process.killProcess和System.exit(0)两个都会kill掉当前进程。<br>
            如果是在第一个Activity调用 Process.killProcess或System.exit(0)都会kill掉当前进程。但是如果不是在第一个Activity中调用，如ActivityA启动ActivityB，
            你在ActivityB中调用。Process.killProcess或System.exit(0)当前进程确实也被kill掉了，但app会重新启动，又创建了一个新的进程，APP生命周期重新执行。其实Process.killProcess或System.exit(0)都不建议直接调用，进程是由os底层进行管理的，android系统会自己进行处理回收进程。
        5. Receiver+singleTask:
            1. 在HomeActivity注册一个退出广播，和第二个广播式一样，但是这里只需要在HomeActivity一个页面注册即可。
            2. 设置HomeActivity的启动模式为singleTask。
            3. 退出时只要: startActivity(this,HomeActivity,class)，再发送一个退出广播。
        6. OnNewIntent+singleTask
6. **Android内存优化方法**: ListView优化，及时关闭资源，图片缓存等等。
7. **Asset目录与res目录的区别**: res目录下面有很多文件，例如drawable,mipmap,raw等。res下面除了raw文件不会被压缩外，其余文件都会被压缩。同时res目录下的文件可以通过R文件访问。Asset也是用来存储资源，但是asset文件内容只能通过路径或者AssetManager读取。
8. **Android怎么加速启动Activity**: 分两种情况，启动应用和普通Activity启动应用:
    1. Application的构造方法，onCreate方法中不要进行耗时操作，数据预读取(例如init数据)放在异步中操作
    2. 启动普通的Activity: A启动B时不要在A的onPause中执行耗时操作。因为B的onResume方法必须等待A的onPause执行完成后才能运行
9. **Bitmap的四种属性，与每种属性队形的大小**: 
10. **View与View Group分类。自定义View过程: onMeasure()、onLayout()、onDraw()**: 
11. **Android长连接，怎么处理心跳机制**: 
12. **View树绘制流程**: 
13. **下拉刷新实现原理**: 
13. **你用过什么框架，是否看过源码，是否知道底层原理**: 
13. **Android新特性**: 
    1. Android5.0新特性: 
        - MaterialDesign设计风格
        - 支持多种设备
        - 支持64位ART虚拟机
    2. Android6.0新特性
        - 大量漂亮流畅的动画
        - 支持快速充电的切换
        - 支持文件夹拖拽应用
        - 相机新增专业模式
    3. Android7.0新特性
        - 分屏多任务
        - 增强的Java8语言模式
        - 夜间模式
14. **Context区别**: 
    - Activity和Service以及Application的Context是不一样的,Activity继承自ContextThemeWraper.其他的继承自ContextWrapper
    - 每一个Activity和Service以及Application的Context都是一个新的ContextImpl对象
    - getApplication用来获取Application实例的，但是这个方法只有在Activity和Service中才能调用的到。那么在绝大多数情况下我们都是在Activity或者Service中使用Application的，
        但在一些其它的场景，比如BroadcastReceiver中也想获得Application的实例，这时就可以借助getApplicationContext方法，它比getApplication方法的作用域会更广一些，
        任何一个Context的实例，只要调用getApplicationContext()方法都可以拿到我们的Application对象。
    - Activity在创建的时候会new一个ContextImpl对象并在attach方法中关联它，Application和Service也差不多。ContextWrapper的方法内部都是转调ContextImpl的方法
    - 创建对话框传入Application的Context是不可以的
    - 尽管Application、Activity、Service都有自己的ContextImpl，并且每个ContextImpl都有自己的mResources成员，但是由于它们的mResources成员都来自于唯一的ResourcesManager实例，所以它们看似不同的mResources其实都指向的是同一块内存
    - Context的数量等于Activity的个数 + Service的个数 + 1，这个1为Application
15. **图片缓存**: 
    1. 查看每个应用程序最高可用内存: ``Log.d("TAG", "Max memory is " + (int) (Runtime.getRuntime().maxMemory() / 1024) + "KB");``
16. **Gradle**:
    1. 构建工具、Groovy语法、Java
    2. Jar包里面只有代码，aar里面不光有代码还包括代码还包括资源文件，比如 drawable 文件，xml 资源文件。对于一些不常变动的Android Library，我们可以直接引用aar，加快编译速度
17. **你是如何自学Android**: 首先是看书和看视频敲代码，然后看大牛的博客，做一些项目，向github提交代码，觉得自己API掌握的不错之后，开始看进阶的书，以及看源码，看完源码学习到一些思想，开始自己造轮子，开始想代码的提升，比如设计模式，架构，重构等。

### Android 基础知识2

1. **ListView**: 继承于AbsListView，依靠Adapter在数据源与它之间建立桥梁，重点是**RecycleBin机制**(实现成百上千条数据都不会OOM)
    1. RecycleBin当中使用mActiveViews这个数组来存储View，调用这个方法后就会根据传入的参数来将ListView中的指定元素存储到mActiveViews中。
    2. mActiveViews当中所存储的View，一旦被获取了之后就会从mActiveViews当中移除，下次获取同样位置的时候将会返回null，所以mActiveViews不能被重复利用。
    3. addScrapView()用于缓存一个废弃的View，该方法接收一个View，当有某个View确定要废弃掉的时候(比如滚动出了屏幕)就应该调用这个方法来对View进行缓存。
    4. RecycleBin当中使用mScrapViews和mCurrentScrap这两个List来存储废弃View。
    5. getScrapView 用于从废弃缓存中取出一个View，这些View是没有顺序可言的，因此getScrapView()方法就是直接从mCurrentScrap当中获取尾部的一个scrap view进行返回。
    6. Adapter当中可以重写一个getViewTypeCount()来表示ListView中有几种类型的数据项，而setViewTypeCount()方法的作用就是为每种类型的数据项都单独启用一个RecycleBin缓存机制。
2. **RecyclerView和ListView的异同**
    1. ListView中**ViewHolder**非必须，而RecyclerView中是必需的
    2. ListView只能垂直**滚动**，而RecyclerView可以水平或垂直滚动
    3. ListView通过ViewPropertyAnimator属性**动画**来实现动画，RecyclerView可以有动画，可以自己实现RecyclerView.ItemAnimator
    4. ListView的**Adapter**: SimpleAdapter/ArrayAdapter/CursorAdapter/SimpleCursorAdapter，而RecyclerView.Adapter
    5. ListView通过**AdapterView.OnItemClickListener**接口来探测点击事件。而RecyclerView则通过**RecyclerView.OnItemTouchListener**接口来探测触摸事件。它虽然增加了实现的难度，但是却给予开发人员拦截触摸事件更多的控制权限。
    6. ListView可以设置**选择模式**，并添加MultiChoiceModeListener，而RecyclerView没有
3. **ANR**
    1. 类型: 
        1. KeyDispatchTimeout(5 seconds) --主要是类型按键或触摸事件在特定时间内无响应
        2. BroadcastTimeout(10 seconds) --BroadcastReceiver在特定时间内无法处理完成
        3. ServiceTimeout(20 secends) --小概率事件 Service在特定的时间内无法处理完成
    2. 示例: 
        1. 主线程 (“事件处理线程” / “UI线程”) 在5秒内没有响应输入事件
        2. BroadcastReceiver 没有在10秒内完成返回 
        3. 在主线程内进行网络操作、高耗时的操作，如图像变换
        4. 在主线程内进行一些缓慢的磁盘操作(I/O操作或数据库操作)
        5. 大量的创建新对象
    3. 避免: 
        1. UI线程尽量只做跟UI相关的工作
        2. 耗时的操作(比如数据库操作，I/O，连接网络或者别的有可能阻塞UI线程的操作)把它放在单独的线程处理
        3. 尽量用Handler来处理UIThread和别的Thread之间的交互
    4. 解决的逻辑
        1. 使用AsyncTask: 在doInBackground()方法中执行耗时操作 在onPostExecuted()更新UI
        2. 使用Handler实现异步任务: 
            1. 在子线程中处理耗时操作
            2. 处理完成之后，通过handler.sendMessage()传递处理结果
            3. 在handler的handleMessage()方法中更新UI
            4. 或者使用handler.post()方法将消息放到Looper中
    5. 如何排查:
        1. 首先分析log
        2. 从trace.txt文件查看调用stack，adb pull data/anr/traces.txt ./mytraces.txt
        3. 看代码
        4. 仔细查看ANR的成因(iowait?block?memoryleak?)
    6. FC(Force Close)什么时候会出现:
        1. Error
        2. OOM，内存溢出
        3. StackOverFlowError
        4. Runtime,比如说空指针异常
4. OOM解决方法: [Android 内存泄露](###Android%20内存泄露) [Android 性能优化](###Android%20性能优化)
    1. 在内存引用上做些处理，常用的有软引用、强化引用、弱引用
    2. 在内存中加载图片时直接在内存中作处理，如边界压缩
    3. 动态回收内存
    4. 优化Dalvik虚拟机的堆内存分配
    5. 自定义堆内存大小
5. HashMap的面试题解答
    1. 你用过HashMap吗？什么是HashMap？你为什么用到它:
        - 用过，HashMap是基于哈希表的Map接口的非同步实现，它允许null键和null值，且HashMap依托于它的数据结构的设计，存储效率特别高，这是我用它的原因
	2. 你知道HashMap的工作原理吗？你知道HashMap的get()方法的工作原理吗:
        - HashMap是基于hash算法实现的，通过put(key,value)存储对象到HashMap中，也可以通过get(key)从HashMap中获取对象。
        - 当我们使用put的时候，首先HashMap会对key的hashCode()的值进行hash计算，根据hash值得到这个元素在数组中的位置，将元素存储在该位置的链表上。
        - 当我们使用get的时候，首先HashMap会对key的hashCode()的值进行hash计算，根据hash值得到这个元素在数组中的位置，将元素从该位置上的链表中取出
	3. 当两个对象的hashcode相同会发生什么:
        - hashcode相同，说明两个对象HashMap数组的同一位置上，接着HashMap会遍历链表中的每个元素，通过key的equals方法来判断是否为同一个key，如果是同一个key，则新的value会覆盖旧的value，并且返回旧的value。如果不是同一个key，则存储在该位置上的链表的链头
	4. 如果两个键的hashcode相同，你如何获取值对象:
        - 遍历HashMap链表中的每个元素，并对每个key进行hash计算，最后通过get方法获取其对应的值对象
	5. 如果HashMap的大小超过了负载因子(load factor)定义的容量，怎么办:
        - 负载因子默认是0.75，HashMap超过了负载因子定义的容量，也就是说超过了threhold(HashMap的大小*负载因子)这个值，那么HashMap将会创建为原来HashMap大小两倍的数组大小，作为自己新的容量，这个过程叫resize或者rehash
	6. 你了解重新调整HashMap大小存在什么问题吗:
        - 当多线程的情况下，可能产生条件竞争。当重新调整HashMap大小的时候，确实存在条件竞争，如果两个线程都发现HashMap需要重新调整大小了，它们会同时试着调整大小。
        - 在调整大小的过程中，存储在链表中的元素的次序会反过来，因为移动到新的数组位置的时候，HashMap并不会将元素放在LinkedList的尾部，而是放在头部，这是为了避免尾部遍历(tail traversing)。如果条件竞争发生了，那么就死循环了。
	7. 我们可以使用自定义的对象作为键吗:
        - 可以，只要它遵守了equals()和hashCode()方法的定义规则，并且当对象插入到Map中之后将不会再改变了。如果这个自定义对象时不可变的，那么它已经满足了作为键的条件，因为当它创建之后就已经不能改变了。
6. textView跑马灯效果:
    1. android:ellipsize="marquee" android:marqueeRepeatLimit="marquee_forever" android:singleLine="true" android:focusable="true"
    2. 重写textView，重写isFocused方法，让其一直返回true
7. BroadcastReceiver安全问题: 对单个应用程序而言BroadcastReceiver是存在安全性问题的(恶意程序脚本不断的去发送你所接收的广播)
    1. **保证发送的广播要发送给指定的对象**: 当应用程序发送某个广播时系统会将发送的Intent与系统中所有注册的BroadcastReceiver的IntentFilter进行匹配，
        若匹配成功则执行相应的onReceive函数。可以通过类似sendBroadcast(Intent, String)的接口在发送广播时指定接收者必须具备的permission或通过Intent.setPackage
        设置广播仅对某个程序有效。
    2. **保证我接收到的广播是指定对象发送过来的**: 当应用程序注册了某个广播时，即便设置了IntentFilter还是会接收到来自其他应用程序的广播进行匹配判断。
        对于动态注册的广播可以通过类似registerReceiver(BroadcastReceiver, IntentFilter, String, android.os.Handler)的接口指定发送者必须具备的permission，
        对于静态注册的广播可以通过android:exported="false"属性表示接收者对外部应用程序不可用，即不接受来自外部的广播。
    3. android.support.v4.content.LocalBroadcastManager工具类，可以实现在自己的进程内进行局部广播发送与注册，使用它比直接通过sendBroadcast(Intent)发送系统全局广播有以下几个好处: 
        1. 因广播数据在本应用范围内传播，你不用担心隐私数据泄露的问题。
        2. 不用担心别的应用伪造广播，造成安全隐患。
        3. 相比在系统内发送全局广播，它更高效。
8. 第一次调用setContentView方法为例总结一下整体的流程。
    1. 第一次调用setContentView()方法时会去创建一个DecorView，这就是整个窗口的根布局。
    2. 接着回去根据我们设置的对应主题，来加载与之对应的布局文件并将其添加到DecorView中，然后找到该布局中id=content的ViewGroup赋值给mContentParent。
    3. 将我们要设置的Activity对应的布局添加到mContentParent中。
9.  非UI线程是可以跟新UI的，当ViewRoot没有被实例化之前子线程是可以直接更新UI的，这是我的理解，只不过不建议这么做。???
10. volatile与synchronized: 
	- volatile本质是在告诉jvm当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取；synchronized则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。
	- volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的
	- volatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见性和原子性
	- volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。
	- volatile标记的变量不会被编译器优化；synchronized标记的变量可以被编译器优化
    - volatile原理:
        1. 保证可见性，不保证原子性(当写一个volatile变量时，JMM会把该线程本地内存中的变量强制刷新到主内存中去；这个写会操作会导致其他线程中的缓存无效)
        2. 禁止指令重排(重排序操作不会对存在数据依赖关系的操作进行重排序；)
    - 而且volatile还不适合复合操作，当出现volatile修饰的变量最终的值依赖自身时，可能有并发问题，如多个线程调用volatile_num++这种。即它不具备操作的原子性。
11. 单例模式的双重锁为什么要加volatile: https://blog.csdn.net/u012723673/article/details/80682208
    - ...
12. App启动过程: https://www.jianshu.com/p/dab1fcf0109d
13. HttpClient与HttpUrlConnection的区别: 
14. java虚拟机和Dalvik虚拟机的区别: 

### Android Activity

1. **概念**: Android开发中提供给用户进行滑动触摸等操作的界面。
2. **Activity四种状态**:
    1. *running*: 正在活动状态
    2. *paused*: 暂停状态，失去与用户交互的能力
    3. *stop*: 停止状态，被另一个Activity完全覆盖
    4. *killed*: 销毁状态，已被回收
3. **生命周期**: 
    1. 正常状态:
        1. Activity启动: onCreated()->onStarted()->onResume()，被创建->正在启动，此时可见但不可访问->启动成功，此时可见并且可以访问
        2. Home(Activity不可见): onPuase()->onStop()
        3. 再点击图标回到Activity: onRestart()->onStart()->onResume()
        4. 退出当前Activity: onPause()->onStop()->onDestroy()
    2. 旧的Activity的onPause比新的Activity的onResume先启动
    3. 非正常情况: 
        1. 资源相关的系统配置发生改变导致Activity被杀死并重新创建(如横竖屏的切换): onSavedInstanceState()保存数据->onCreate()重新创建->onRestoreInstanceState()恢复数据
        2. 恢复哪些数据: 视图结构 文本框中输入内容 ListView滚动的位置
        3. 保存和恢复View层次结构的工作流程: 首先调用onSavedInstanceSate，然后Activity会委托Window去保存数据，Window再委托它上面的顶层容器(ViewGroup)，一般来说是DecorView，最后由DecorView会通知它的子元素去保存数据。
        4. 资源内存不足导致低优先级的Activity被杀死
        5. 防止Activity在屏幕旋转是重新创建，给ConfigChanges添加orientation
4. **进程优先级**: 
    1. *前台进程*: 正在与用户交互的进程，或者是与前台Activity绑定的Service(onCreate|onStart|onDestroy)，或者是正在运行的BroadcastReceiver
    2. *可见进程*: 不可交互但可见的进程，或者前台服务(startForeground)，或者正在托管系统用于用户知道的特定功能的服务，例如动态壁纸，输入法服务等的进程
    3. *服务进程*: 后台不可见正在运行的进程，如调用了startService()方法的Service进程
    4. *后台进程*: 已经被暂停的Activity
    5. *空进程*: 优先级最低
5. **Android任务栈(Android启动模式)**: 
    1. **Standard**: 标准启动模式，每启动一个Activity就创建一个新实例
    2. **SingleTop**: 栈顶复用模式，如果新的Activity已经位于任务栈内的栈顶，那么此Activity不会被重新创建，调用onNewIntent()方法
    3. **SingleTask**: 栈内复用模式，只要Activity在一个栈内存在，那么多次启动此Activity都不会重新创建实例，调用onNewIntent()方法
    4. **SingleInstance**: 单实例模式，加强版的SingleTask，具有此种模式的Activity只能单独位于一个任务栈中
    5. **FLAG_ACTIVITY_NEW_TASK**: 在新任务中启动活动，如果这个Activity已在任务上运行，则该任务将被带到前台，并恢复其上一个状态，并且调用onNewIntent()方法
    6. **FLAG_ACTIVITY_CLEAR_TOP**: 如果正在启动的活动已在当前任务中运行，则不会启动该活动的新实例，而是销毁在堆栈上它上面的所有其他活动，并调用onNewIntent()方法
    7. **FLAG_ACTIVITY_SINGLE_TOP**: 如果正在启动的活动是当前活动(在后台堆栈的顶部)，则现有实例将接收调用onNewIntent()，而不是创建活动的新实例
6. **清理后台堆栈**: 如果用户长时间离开任务，系统将清除除根活动之外的所有活动的任务。当用户再次返回任务时，仅还原根活动。
    1. alwaysRetainTaskState="true": 不会发生默认行为，即使经过很长一段时间，任务仍会保留堆栈中的所有活动。
    2. clearTaskOnLaunch="true": 与alwaysRetainTaskState相反，只要用户离开任务并返回到该任务，就会将堆栈清除为根活动。
    3. finishOnTaskLaunch="true": 类似clearTaskOnLaunch，但它在单个活动上运行，而不是在整个任务上运行。它还可以导致任何活动消失，包括根活动。当它设置为"true"时，活动仍然是当前会话的任务的一部分。如果用户离开然后返回任务，它将不再存在。
7. **URLSchema(页面内跳转协议？？？)**
    1. 是一种页面内跳转协议，是一种非常好的实现机制，通过定义自己的Schema协议，可以非常方便的跳转App中的各个页面；
    2. 完整的URL Schema协议格式: ``xl://goods:8888/goodsDetail?goodsId=10011002 ``
        - xl代表该Schema 协议名称
        - goods代表Schema作用于哪个地址域
        - goodsDetail代表Schema指定的页面
        - goodsId代表传递的参数
        - 8888代表该路径的端口号
    3. 应用场景:
        1. 服务器下发跳转路径，客户端根据服务器下发的路径跳转到相应页面；
        2. H5页面点击锚点，根据锚点具体跳转路径，App跳转到具体的页面；
        3. App端收到服务器端下发的PUSH通知栏消息，根据消息跳转到相应页面；
    4. 应用实例:
        1. 在AndroidManifest.xml文件中声明: 要想在别的App上成功调用起App，必须设置Intent过滤器
        ```xml
        <data android:scheme="Http" android:port="8080" android:path="/goodsDetails"/>
        <catagory android:name="android.intent.catagory.DEFAULT"/>
        <action android:name="android.intent.action.VIEW"/>
        <catagory android:name="android.intent.catagory.BrowScale"/>
        2. 获取Scheme跳转参数: ```Uri uri = getIntent().getData();```
        3. 网页上: ``<a herf="Http://good:8080/goodsDetails?goodsId=10002"/>``
8. **Serializable|Parcelables**:
    1. Serializable: 直接继承，让java自动序列化，但消耗性能
    2. Parcelables与Bundle: 旨在跨进程使用，性能比Serializable好
        1. class T implements Parcelable
        2. public static final Parcelable.Creator CREATOR = new Parcelable.Creator() { public T createFromParcel(Parcel in){} public T[] newArray(int size) {} }
        3. public void writeToParcel(Parcel dest, int flags) {} 与 private void readFromParcel(Parcel in) {} 与 public T(Parcel in) { readFromParcel(in); }

### Android Service

1. **概念**: Android程序中四大基础组件之一，它和Activity一样都是Context的子类，只不过它没有UI界面，是在后台运行的组件。
2. **生命周期**: Service对象不能自己启动，需要通过某个Activity、Service或者其他Context对象来启动。
    1. Context.startService: 启动时startService->onCreate->onStart 停止时stopService->onDestroy
    2. Context.bindService: 绑定时bindService->onCreate->onBind 解绑定时unbindService->onUnBind->onDestroy
3. **Service与Thread**: Service也是运行在主线程的，不可以在Service中执行耗时操作，如果需要下载等耗时操作，仍需要在Service中开启新线程去执行。
4. **重要方法**:
    1. ``onStartCommand``: 当另一个组件通过调用startService()请求启动服务时，系统将调用此方法。一旦执行此方法，服务即会启动并可在后台无限期运行。在服务工作完成后，需要调用stopSelf()或stopService()来停止服务。onStartCommand()方法必须返回整型数的值，用于描述系统应该如何在服务终止的情况下继续运行服务:
        - START_NOT_STICKY: 如果系统在onStartCommand()返回后终止服务，则除非有挂起Intent要传递，否则系统不会重建服务。这是最安全的选项，可以避免在不必要时以及应用能够轻松重启所有未完成的作业时运行服务。
        - START_STICKY: 如果系统在onStartCommand()返回后终止服务，则会重建服务并调用onStartCommand()，但不会重新传递最后一个Intent。相反，除非有挂起Intent要启动服务(在这种情况下，将传递这些Intent)，否则系统会通过空Intent调用onStartCommand()。这适用于不执行命令、但无限期运行并等待作业的媒体播放器(或类似服务)。
        - START_REDELIVER_INTENT: 如果系统在onStartCommand()返回后终止服务，则会重建服务，并通过传递给服务的最后一个Intent调用onStartCommand()。任何挂起Intent均依次传递。这适用于主动执行应该立即恢复的作业(例如下载文件)的服务。
    2. ``onBind``: 当另一个组件想通过调用bindService()与服务绑定(例如执行RPC)时，系统将调用此方法。在此方法的实现中，您必须通过返回IBinder接口实现的对象，供客户端用来与服务进行通信。
    3. ``onUnbind``
    4. ``onCreate``: 首次创建服务时，系统将调用此方法来执行一次性设置程序(在调用onStartCommand()或onBind()之前)
    5. ``onDestroy``: 当服务不再使用且将被销毁时，系统将调用此方法。服务应该实现此方法来清理所有资源，如线程、注册的侦听器、接收器等。 这是服务接收的最后一个调用。
	请务必实现此方法，但如果您并不希望允许绑定，则应返回 null。
5. **startService**:
    1. 定义一个类继承Service
    2. 在AndroidManifest.xml文件中配置Service
    3. 使用Context的StartService(Intent)启动Service
    4. 不再使用时，直接调用StopService(Intent)
6. **bindService**:
    1. 创建BindService服务端，继承Service并在类中创建一个实现IBinder接口的实例对象，并提供公共方法给客户端调用
    2. 从onBind回调方法返回此Binder实例
    3. 在客户端中，调用bindService(new Intent(Activity.this, TestService.class), serviceConnection, Service.BIND_AUTO_CREATE)。其中serviceConnection是一个接口:
        1. 从onServiceConnect()回调方法接收Binder，并使用提供的方法调用绑定服务
        2. unBind时，调用onServiceDisconnectted()回调方法
7. **前台服务**:
    1. startForeground(ONGOING_NOTIFICATION_ID, notification);
    2. stopForeground(bool_是否移除通知)
    3. android O 要求:
        ```java 
        if (Build.VERSION.SDK_INT > Build.VERSION_CODES.N_MR1) {
            mContext.startForegroundService(myIntent);
        } else {
            mContext.startService(myIntent);
        }
        ```
8. **保活后台服务**:
    1. android:priority="1000" 最高优先级
    2. android:persistent="true" 把service写成系统服务，将不会被回收
    3. 将服务改成前台服务foreground service: 重写onStartCommand，使用startForeground(int, Notification)方法来启动service。
        同时，对于通过startForeground启动的service，onDestory方法中需要通过stopForeground(true)来取消前台运行状态。
    4. 利用Android的系统广播: 利用ANDROID的系统广播检查Service的运行状态，如果被杀掉，就再起来，系统广播是Intent.ACTION_TIME_TICK，这个广播每分钟发送一次，
        我们可以每分钟检查一次Service的运行状态，如果已经被结束了，就重新启动Service。
    5. return START_STICKY: kill 后会被重启(等待5秒左右)，重传Intent，保持与重启前一样
    6. onDestroy方法里重启service
        1. service +broadcast 方式，就是当service走onDestory()的时候，发送一个自定义的广播，当收到广播的时候，重新启动service
        2. 也可以直接在onDestroy()里startService
        3. 使用类似口口管家等第三方应用或是在setting里-应用-强制停止时，APP进程可能就直接被干掉了，onDestroy方法都进不来，所以还是无法保证
9. **为何后台服务会被回收**: 因为**ANR**，主要注意以下几点会导致ANR的发生
    1. 主线程 (“事件处理线程” / “UI线程”) 在5秒内没有响应输入事件
    2. BroadcastReceiver 没有在10秒内完成返回 
    3. 在主线程内进行网络操作
    4. 在主线程内进行一些缓慢的磁盘操作(I/O操作或数据库操作)
10. **在需要Service处于较高优先级而又不希望显示通知**时，可以使用特殊技巧。如我们需要某一ServiceX后台运行并且不能被杀掉，同时不希望被用户察觉，可以这样:
    1. 启动ServiceX并startForeground(id, notification)
    2. 立刻启动另一个ServiceY，也startForeground(id, notification)，这里的id与ServiceX中startForeground的id一致；然后关闭在ServiceY中stopForeground(true)。
11. **绑定服务通信的方法**
    1. Binder: 服务仅供自己应用使用时
        1. Binder中重写 protected boolean onTransact(int code, Parcel data, Parcel reply, int flags) {}
        2. 客服端中调用 binder.transcat(MyService.CUSTOM_PARAMETER, data, replay, 0);
    2. Messenger: 如需让接口跨不同的进程工作
        - 服务实现一个Handler，由其接收来自客户端的每个调用的回调
        - Handler用于创建Messenger对象(对Handler的引用): new Messenger(new MyHandler())
        - Messenger创建一个IBinder，服务通过onBind()使其返回客户端: messenger.getBinder()
        - 客户端使用IBinder将Messenger(引用服务的Handler)实例化，然后使用后者将Message对象发送给服务: serviceMessenger = new Messenger(iBinder_from_onServiceConnected)
        - 服务在其Handler中(具体地讲，是在handleMessage()方法中)接收每个Message。
        - 在onServiceConnected中将客户端的Messenger发给服务:
            ```java
            Message msgToServer = Message.obtain(null, MusicService.MSG_CLIENT_MESSENGER, 0, 0);
            msgToServer.replyTo = clientMessager;
            serviceMessenger.send(msgToServer);
            ```
    3. AIDL: AIDL(Android接口定义语言)执行所有将对象分解成原语的工作，操作系统可以识别这些原语并将它们编组到各进程中，以执行IPC。纯粹的AIDL接口会同时向服务发送多个请求，随后服务必须应对多线程处理。
12. **IntentService的使用场景与特点**: IntentService是Service的子类，是一个异步的，会自动停止的服务，很好解决了传统的Service中处理完耗时操作忘记停止并销毁Service的问题
    1. 一方面不需要自己去new Thread
    2. 另一方面不需要考虑在什么时候关闭该Service
    3. onStartCommand中回调了onStart，onStart中通过mServiceHandler发送消息到该handler的handleMessage中去。最后handleMessage中回调onHandleIntent(intent)。

### Android BroadcastReceiver

1. **概念**: 是一种广泛运用于应用程序之间传输信息的机制。从本质上来说，广播内容就是一个Intent，在Intent中携带数据。
2. **使用场景**: 同一个App内具有多个进程的不同组件之间的消息通信 不同App内的通信 多线程通信 与Android系统在特定情况下的通信，如电话呼入、网络可用
3. **种类**: 
    1. 普通广播: 开发者自身定义Intent的广播 sendBroadcast(intent)
    2. 系统广播: Android中内置了的系统广播，都有特定的Intent-Filter(包括具体的action)，Android系统广播action如下:
    	| 系统操作 | action |
		| -------- | ------ |
		| 监听网络变化 | android.net.conn.CONNECTIVITY_CHANGE |
		| 关闭或打开飞行模式 | Intent.ACTION_AIRPLANE_MODE_CHANGED |
		| 充电时或电量发生变化 | Intent.ACTION_BATTERY_CHANGED |
		| 电池电量低 | Intent.ACTION_BATTERY_LOW |
		| 电池电量充足(即从电量低变化到饱满时会发出广播 | Intent.ACTION_BATTERY_OKAY |
		| 系统启动完成后(仅广播一次) | Intent.ACTION_BOOT_COMPLETED |
		| 按下照相时的拍照按键(硬件按键)时 | Intent.ACTION_CAMERA_BUTTON |
		| 屏幕锁屏 | Intent.ACTION_CLOSE_SYSTEM_DIALOGS |
		| 设备当前设置被改变时(界面语言、设备方向等) | Intent.ACTION_CONFIGURATION_CHANGED |
		| 插入耳机时 | Intent.ACTION_HEADSET_PLUG |
		| 未正确移除SD卡但已取出来时(正确移除方法:设置--SD卡和设备内存--卸载SD卡) | Intent.ACTION_MEDIA_BAD_REMOVAL |
		| 插入外部储存装置(如SD卡) | Intent.ACTION_MEDIA_CHECKING |
		| 成功安装APK | Intent.ACTION_PACKAGE_ADDED |
		| 成功删除APK | Intent.ACTION_PACKAGE_REMOVED |
		| 重启设备 | Intent.ACTION_REBOOT |
		| 屏幕被关闭 | Intent.ACTION_SCREEN_OFF |
		| 屏幕被打开 | Intent.ACTION_SCREEN_ON |
		| 关闭系统时 | Intent.ACTION_SHUTDOWN |
		| 重启设备 | Intent.ACTION_REBOOT |
    3. 有序广播: 发送出去的广播被广播接收者按照先后顺序接收，有序是针对广播接收者而言的。
		1. 顺序规则是: 按照Priority属性值从大-小排序；Priority属性相同者，动态注册的广播优先。  
		2. 有序广播的特点: 接收广播按顺序接收；先接收的广播接收者可以对广播进行截断，即后接收的广播接收者不再接收到此广播;
		3. 先接收的广播接收者可以对广播进行修改，那么后接收的广播接收者将接收到被修改后的广播。  
		4. 有序广播的使用过程与普通广播非常类似，差异仅在于广播的发送方式: ``sendOrderedBroadcast(intent, string);``。
    4. App应用内广播: LocalBroadcastManager
        1. 静态广播通过 exported="false" 变为动态广播
        2. 使用封装好的LocalBroadcastManager注册
    5. 粘性广播: 由于在Android5.0 & API 21中已经失效，所以不建议使用，在这里也不作过多的总结
4. **广播接收器回调的context**: 不同注册方式的广播接收器回调``onReceive(Context context, Intent intent)``中的context返回值是不一样的: 
    - 对于静态注册(全局+应用内广播)，回调onReceive(context, intent)中的context返回值是: ReceiverRestrictedContext；
    - 对于全局广播的动态注册，回调onReceive(context, intent)中的context返回值是: Activity Context；
    - 对于应用内广播的静态注册(LocalBroadcastManager方式)，回调onReceive(context, intent)中的context返回值是: Application Context；
    - 对于应用内广播的动态注册(非LocalBroadcastManager方式)，回调onReceive(context, intent)中的context返回值是: Activity Context。
5. **实现原理**:
    1. AMS: Activity Manager Service ，它是贯穿Android系统组件的核心服务，负责四大组件的启动，运行和调度，应用程序的管理和调度工作
    2. Binder机制: Android进程间通信的核心，整体架构采用C/S架构，客户端进程可以获取服务端的代理，并通过相应的方法去进行进程间通信。
    3. 观察者模式: 一个目标物件管理所有相依于它的观察者物件，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实现事件处理系统。
    4. 广播的内部实现就是采用观察者模式，将广播的发送者与接收者完全解耦，使得系统易于扩展，方便集成。
        - 消息订阅者: 广播接收者；
        - 消息发送者: 广播发送者；
        - 消息中心: AMS；
    5. 具体流程:
        1. 广播接受者通过Binder机制在AMS注册
        2. 广播发送者通过Binder机制向AMS发送广播
        3. AMS根据广播发送者要求(intentFilter|permission)，在注册列表中寻找适合的广播接受者
        4. AMS将广播发送到合适的广播接受者相应的消息循环队列中
        5. 广播接受者通过消息循环拿到此广播，回调onReceive
6. **本地广播优势**: 
    1. 只在自身App内传播，不必担心泄露隐私数据
    2. 其他App无法对你的App发送该广播，因为你的App根本就不可能接收到非自身应用发送的该广播
    3. 比系统广播更加高效，主要原因是因为他内部是通过Handler实现的，它的sendBroadcast方法其实是通过handler发送一个message实现的，其内部协作是靠mReceivers,mActions这两个Map集合和一个List集合mPendingBroadcasts，这个list集合存储的就是带接收的广播对象；也就是因为它是通过Handler实现的，所以别的APP无法对我们的应用发送广播，其他的广播是通过Binder机制实现的

### Android ContentProvider



### Android Fragment

1. **为何产生**: 同时适配手机和平板、UI和逻辑的共享。
2. **介绍**: 
    1. Fragment也会被加入回退栈中。
    2. Fragment拥有自己的生命周期和接受、处理用户的事件
    3. 可以动态的添加、替换和移除某个Fragment
3. **生命周期**: 必须依赖于Activity Fragment依附于Activity的生命状态
    1. Created
        1. onAttach: fragment与窗口关联后立刻调用，从这里开始可以调用fragment.getActivity
        2. onCreate: onAttach后立即调用，可以在Bundle对象中获取一些在Activity中传过来的数据(不执行耗时操作，不然窗口不显示)
        3. onCreateView: 创建view
        4. onViewCreated: 创建view后立即调用，它之后Activity才会调用onCreate
        5. onActivityCreated: 在Activity的onCreate调用后调用，从这一个时候开始，就可以在Fragment中使用getActivity().findViewById(Id);来操控Activity中的view了。
    2. Stated: onStart
    3. Resumed: onResume
    4. Paused: onPause: onPause后的方法都在Activity相应的方法前调用
    5. Stopped: onStop
    6. Destroy:
        1. onDestroyView
        2. onDestroy
        3. onDetach: 它之后才是Activity的onDestroy
    7. **注意**: 除了onCreateView，其他的所有方法如果你重写了，必须调用父类对于该方法的实现
4. **Fragment与Activity之间的交互**: Fragment与Activity之间的交互可以通过Fragment.setArguments(Bundle args)以及Fragment.getArguments()来实现。
5. **Fragment状态的持久化**: 由于Activity会经常性的发生配置变化，所以依附它的Fragment就有需要将其状态保存起来问题。下面有两个常用的方法去将Fragment的状态持久化。
    1. 可以通过``protected void onSaveInstanceState(Bundle outState),protected void onRestoreInstanceState(Bundle savedInstanceState)``将状态持久化。
    2. 更方便,让Android自动帮我们保存Fragment状态: 我们只需要将Fragment在Activity中作为一个变量整个保存，只要保存了Fragment，那么Fragment的状态就得到保存了
        1. ``FragmentManager.putFragment(Bundle bundle, String key, Fragment fragment)``是在Activity中保存Fragment的方法。FragmentManager是通过Bundle去保存Fragment的。但是，这个方法仅仅能够保存Fragment中的控件状态，比如说EditText中用户已经输入的文字(注意！在这里，控件需要设置一个id)，而Fragment中需要持久化的变量依然会丢失，但依然有解决办法，就是利用方法一！
        2. ``FragmentManager.getFragment(Bundle bundle, String key)``是在Activity中获取所保存的Frament的方法。
6. **Fragment常用的API**:
    1. android.support.v4.app.Fragment 主要用于定义Fragment
    2. android.support.v4.app.FragmentManager 主要用于在Activity中操作Fragment，可以使用FragmentManager.findFragmenById，FragmentManager.findFragmentByTag等方法去找到一个Fragment
    3. android.support.v4.app.FragmentTransaction 保证一些列Fragment操作的原子性，熟悉事务这个词<br>
        ``getFragmentManager() // Fragment若使用的是support.v4包中的，那就使用getSupportFragmentManager代替``
    4. 主要的操作都是FragmentTransaction的方法 (一般我们为了向下兼容，都使用support.v4包里面的Fragment)
        ```java
        FragmentTransaction transaction = fm.benginTransatcion();  //开启一个事务
        transaction.add()  //往Activity中添加一个Fragment
        transaction.remove()  //从Activity中移除一个Fragment，如果被移除的Fragment没有添加到回退栈（回退栈后面会详细说），这个Fragment实例将会被销毁。
        transaction.replace()  //使用另一个Fragment替换当前的，实际上就是remove()然后add()的合体~
        transaction.hide()  //隐藏当前的Fragment，仅仅是设为不可见，并不会销毁
        transaction.show()  //显示之前隐藏的Fragment
        detach()  //当fragment被加入到回退栈的时候，该方法与*remove()*的作用是相同的，反之，该方法只是将fragment从视图中移除，
            //之后仍然可以通过*attach()*方法重新使用fragment，而调用了*remove()*方法之后，不仅将Fragment从视图中移除，fragment还将不再可用。
        attach()  //重建view视图，附加到UI上并显示。
        transatcion.commit()  //提交一个事务
        ```
7. **管理Fragment回退栈**:
    1. 跟踪回退栈状态: 通过实现FragmentManager.OnBackStackChangedListener接口来实现回退栈状态跟踪。
        1. override onBackStackChanged()方法
        2. getSupportFragmentManager().addOnBackStackChangedListener(this);
    2. 管理回退栈
        1. FragmentTransaction.addToBackStack(String) --将一个刚刚添加的Fragment加入到回退栈中
        2. getSupportFragmentManager().getBackStackEntryCount() －获取回退栈中实体数量
        3. getSupportFragmentManager().popBackStack(String name, int flags) －根据name立刻弹出栈顶的fragment
        4. getSupportFragmentManager().popBackStack(int id, int flags) －根据id立刻弹出栈顶的fragment

### Android Handler

[Android源码系列(16) -- MessageQueue](https://www.codercto.com/a/36074.html)
https://blog.csdn.net/pgg_cold/article/details/79400435
https://github.com/francistao/LearningNotes/blob/master/Part1/Android/线程通信基础流程分析.md

1. **概念**: handler机制是Android的消息机制的上层接口，通过发送和处理Message和Runnable对象来关联相对应的的线程MessageQueue
    1. 可以让对应的Message和Runnable在未来的某个时间点进行相应处理
    2. 让自己想要处理的耗时操作放在子线程，让更新UI的操作放在主线程
2. handler的使用方法: ``post(Runnable); sendMessage(Message.Obtain()|new Message(...))``
3. Android的线程间通信就靠Handler、Looper、Message、MessageQueue这四个麻瓜兄弟了
4. **Looper**: 维持一个Thread对象以及MessageQueue，每一个线程只有一个Looper。主线程中，ActivityThread默认会把Looper初始化好，prepare以后，当前线程就会变成一个Looper线程。
    1. ``Looper.loop``: 在当前线程启动一个Message loop机制，此段代码将直接分析出Looper、Handler、Message、MessageQueue的关系 ...
        looper中最重要的部分都是由Message、MessageQueue组成的！这段最重要的代码中涉及到了四个对象,他们与彼此的关系如下:
        1. MessageQueue: 装食物的容器
        2. Message: 被装的食物
        3. Handler(msg.target实际上就是Handler): 食物的消费者
        4. looper: 负责分发食物的人
    2. ``Looper.prepare``: 在当前线程关联一个looper对象
    3. 为什么主线程不会因为Looper.loop方法卡死: 因为在主线程中所有的ui操作都是通过Handler来执行的，而且Activity生命流程的相应事件也是在Hanlder中用case来完成的，所以在有消息时Handler处理，没有时Message msg = queue.next()会阻塞，却不会卡死，因为所有逻辑都是在Handler中处理了。
5. **MessageQueue**: 消息队列，也是Message对象池
    1. **IdleHandler**: 空闲时才执行的Handler，可以实现它，然后Looper.myQueue().addIdleHandler(...) https://blog.csdn.net/tencent_bugly/article/details/78395717
        返回false代表在这个IdleHandler被回调一次后就会被销毁。true代表可以一直被回调。
6. **Message**: 推荐使用Message.obtain获取，而不是new
    1. Message中一个static的spool，作为池，而Message中有类型是Message的成员变量next，所以spool->next->next...的形式存储
    2. 继承了Parcelable，能够跨进程传输
    3. 拥有方法writeToPtoto(ProtoOutputStream s, long fieldId)，可以socket传输
7. **流程**: 当我们调用handler.sendMessage(msg)方法发送一个Message时，实际上这个Message是发送到与当前线程绑定的一个MessageQueue中，然后与当前线程绑定的Looper将会不断的从MessageQueue中取出新的Message，调用msg.target.dispathMessage(msg)方法将消息分发到与Message绑定的handler.handleMessage()方法中。<br>
    一个Thread对应多个Handler，一个Thread对应一个Looper和一个MessageQueue，Handler与Thread共享Looper和MessageQueue。Message只是消息的载体，将会被发送到与线程绑定的唯一的MessageQueue中，并且被与线程绑定的唯一的Looper分发，被与其自身绑定的Handler消费。
8. **handler引起的内存泄漏**: 
    1. 原因: handler非静态内部类持有外部类的匿名引用，导致外部类无法被回收
    2. 解决办法: handler内部持有外部Activity的弱引用，并把handler改为静态内部类，然后在onDestroy方法中调用handler的removeCallBack()方法
9. **Handler**: 
    1. 执行方式: post(Runnable), new Handler(new Handler.Callback(){...}), sendMessage(Message)

### Android Loader



### Android Binder

- **概念**: Android系统中进程间通讯(IPC)的一种方式，也是Android系统中最重要的特性之一。是Android各组件的桥梁
- **Binder驱动**: Android系统通过Linux的动态可加载内核模块(Loadable Kernel Module，LKM)机制将Binder驱动这个内核模块运行在内核空间。用户进程通过它使用Binder机制在用户进程间通信。
- **原因**: Android使用的Linux内核拥有着非常多的跨进程通信机制，比如说，socket，管道之类的，那么为什么还要单独为Android创造一个Binder呢
    1. 性能: Android是移动设备，相比于PC机的性能会有差距，在移动设备上进行频繁的跨进程通信本身就是一个极大的考验，Binder相比较于传统的socket/管道通信而言，更加高效，它在IPC时，只需要数据拷贝1次，而传统的socket之类的需要2次
    2. 安全: 传统的进程间通信对于通信双方的身份没有进行严格的验证，只有上层协议才会进行架构，比如说，socket通信时，IP地址是手动填写的，可以进行人为的伪造，而Binder支持通信双方进行身份校验，极大的保障了安全性
- **Binder机制**: A和B相当于两个进程，他们要打电话就相当于要进行通信，其中电话基站就想到与Binder驱动，而通信录则相当于其中的一个ServerManager
    1. ServerManager其实就是一个进程，它里面维护了一张表，表里面存储的是向他注册过的进程信息，在通信之初，首先需要有一个进程向驱动申请成为ServerManager，当内核驱动同意之后，
        这个成为ServerManager的进程就负责管理所有需要通信的进程信息，当客户端进程要访问服务端进程时，服务端进程首先会向ServerManager注册，让ServerManager保存自己的有关信息，
        当ServerManger保存完毕后，客户端进程就会通过Binder驱动向ServerManger查询服务端进程的信息，ServerManage就会将服务端进程的信息返回给客户端进程，
        客户端与服务端进程之间就可以通过这些信息，利用Binder驱动来进行通信了
    2. Binder通信机制分三步:
        1. ServerManager在内部维护一张表
        2. 服务端进程向ServerManager注册信息
        3. 客户端进程向ServerManager取得信息，通过Binder驱动与服务端进程通信
- **更多**: https://blog.csdn.net/pgg_cold/article/details/79393839

### Android Messenger

https://cloud.tencent.com/developer/article/1199115

### Android AIDL

https://developer.android.google.cn/guide/components/aidl  
https://www.jianshu.com/p/375e3873b1f4

### Android 消息

Android 信息.md

### Android 数据存储

1. **分类**:
    1. SQLite: SQLite是一个轻量级的数据库，支持基本的SQL语法，是常被采用的一种数据存储方式。 Android为此数据库提供了一个名为SQLiteDatabase的类，封装了一些操作数据库的api
    2. SharedPreference:  除SQLite数据库外，另一种常用的数据存储方式，其本质就是一个xml文件，常用于存储较简单的参数设置。
    3. File:  即常说的文件(I/O)存储方法，常用语存储大数量的数据，但是缺点是更新数据将是一件困难的事情。
    4. ContentProvider: Android系统中能实现所有应用程序共享的一种数据存储方式，由于数据通常在各应用间的是互相私密的，所以此存储方式较少使用，但是其又是必不可少的一种存储方式。例如音频，视频，图片和通讯录，一般都可以采用此种方式进行存储。每个Content Provider都会对外提供一个公共的URI(包装成Uri对象)，如果应用程序有数据需要共享时，就需要使用Content Provider为这些数据定义一个URI，然后其他的应用程序就通过Content Provider传入这个URI来对数据进行操作。
2. **Android文件操作**: 
    1. **data/data/应用包名/file目录下文件存储读写**: openFileOutput与openFileInput方法获取的都是data/data/应用包名/file目录下文件的输入输出流
        1. **文件操作模式**:
            1. MODE_PRIVATE 只能由创建程序读写，写入即覆盖
            2. MODE_APPEND 文件存在则追加内容，否则创建后追加
            3. MODE_WORLD_READABLE 创建程序可读写，且其他应用可读取
            4. MODE_WORLD_WRITEABLE 创建程序可读写，且其他应用可写入
            5. ``openFileOutput("test.txt", Context.MODE_WROLD_READABLE + Context.MODE_WORLD_WRITABLE``
        2. **相关文件操作**:
            - openFileOutput(String filename, int mode); 打开文件输出流，往文件中写入数据。
            - openFileInput(String filename); 打开文件输入流，从文件中读取数据。
            - getDir(String dirname, int mode); 在app的data目录下获取或创建dirname对应的子目录。
            - getFileDir(); 获取app的data目录的file目录的绝对路径。
            - String[] filelist(); 返回app的data目录下的全部文件。
            - deleteFile(String filename); 删除app的data目录下的指定文件。
    2. **sd卡上文件存储读写**: 
        - 读写前先判断sd卡是否存在，且可读写: ``Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)``。
        - 获取sd卡的路径: ``File sdcard = Environment.getExternalStorageDirectory()``。同时获取sd卡外部目录: ``sdcard.getCanonicalPath``。
        - 使用FileOutputStream、FileInputStream或FileReader、FileWriter读写sd卡的文件。
        - 添加sd卡权限: 创建删除文件权限和写入数据权限。在Android6.0及以上版本，权限管理更加严格，需要动态申请SD卡权限
            ```xml
            <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
            <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
            <!-- 从API等级19开始，读取函数``getExternalFilesDir getExternalCacheDir``得到的外部存储路径中的文件时，不再需要读写权限 -->
            ```
            ```java
            private static final int REQUEST_EXTERNAL_STORAGE = 1;
            private static String[] PERMISSIONS_STORAGE = {"android.permission.READ_EXTERNAL_STORAGE", "android.permission.WRITE_EXTERNAL_STORAGE"};
            // 检测是否有权限
            if (ActivityCompact.checkSelfPermission(activity, "android.permission.WRITE_EXTERNAL_STORAGE") != PackageManager.PERMISSION_GRANTED)
                ActivityCompact.requestPermissions(activity, PERMISSIONS_STORAGE, REQUEST_EXTERNAL_STORAGE);
            ```
        - 可以直接返回外部存储主目录: ``String mainDir = Environment.getExternalStorageDirectory().getAbsolutePath();``
        - 访问专用目录: Android 在外部存储中将一些相同文件类型的文件放置在了同一个目录下，比如图片，视频，文档，音乐等
            ```java
            public static final String[] STANDARD_DIRECTORIES = {
                directory_music, directory_movies, directory_alarms, directory_pictures, directory_downloads, directory_documents, directory_notifications, directory_dcim, directory_podcasts, directory_ringtones
            };
            String dcimDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DCIM).getAbsolutePath();
            String picDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES).getAbsolutePath();
            ```
        - 访问私有区域: ``getExternalFilesDir(String);`` 参数为空表示返回外部存储上应用的专用目录的根目录: ``String fileDir = getExternalFilesDir(null).getAbsolutePath();`` 也可以创建标准目录: ``String movieDir = getExternalFilesDir(Environment.DIRECTORY_MOVIES).getAbsolutePath();``
    3. **raw、assets、xml目录下文件存储读写**: 
        - res/raw: 文件会被映射到R.java文件中，访问的时候直接通过资源ID即可访问，而且他不能有目录结构，就是不能再创建文件夹 getResources().openRawResource(R.raw.data)
        - assets: 不会映射到R.java文件中，通过AssetManager来访问，能有目录结构，即，可以自行创建文件夹 getAssets().open("data.csv")
        - res/xml: 与raw文件一样，般用来保存格式化的数据，在应用程序编译和打包时会将XML文件转换为高效的二进制格式，应用程序运行时会以特殊的方式进行访问。
            XmlPullParser parser = getResources().getXML(R.xml.filename);
    4. **FileProvider**: https://blog.csdn.net/lmj623565791/article/details/72859156 https://blog.csdn.net/yy1300326388/article/details/52787853
3. **SharedPreferences**: 
    1. ``/data/data/<package name>/shared_prefs/``
    2. SharedPreferences.Editor editor = context.getSharedPreferences("mysp", Context.MODE_PRIVATE).edit(); editor.putXXX(); editor.apply(); editor.commit();
    3. apply与commit: 
        1. apply没有返回值而commit返回boolean表明修改是否提交成功
        2. apply是将修改数据原子提交到内存, 而后异步真正提交到硬件磁盘, 而commit是同步的提交到硬件磁盘，因此，在多个并发的提交commit的时候，他们会等待正在处理的commit保存到磁盘后在操作，从而降低了效率。而apply只是原子的提交到内容，后面有调用apply的函数的将会直接覆盖前面的内存数据，这样从一定程度上提高了很多效率
        3. apply方法不会提示任何失败的提示
4. **SQLite数据库**: 
    1. **理由**: 
        1. SQLite是一个轻量级的关系型数据库，运算速度快，占用资源少，很适合在移动设备上使用
        2. 不仅支持标准SQL语法，还遵循ACID(数据库事务)原则，无需账号，使用起来很方便
        2. 适合并发
    2. SQLite支持五种数据类型: NULL, INTEGER, REAL(浮点数), TEXT(字符串文本) 和 BLOB(二进制对象); 虽然只有五种，但是对于varchar、char等其他数据类型都是可以保存的。
        因为SQLite有个最大的特点: **你可以各种数据类型的数据保存到任何字段中而不用关心字段声明的数据类型是什么**。比如你可以在Integer类型的字段中存放字符串，
        当然**除了声明为主键INTEGER PRIMARYKEY的字段只能够存储64位整数！**。另外，SQLite在解析CREATE TABLE语句时，会忽略CREATE TABLE语句中跟在字段名后面的数据类型信息。如下面语句会忽略name字段的类型信息: ``CREATE TABLE person (personid integer primary key autoincrement, name varchar(20))``。
    3. 相关类: 
        - SQLiteOpenHelper: 抽象类，我们通过继承该类，然后重写数据库创建以及更新的方法，我们还可以通过该类的对象获得数据库实例，或者关闭数据库！
        - SQLiteDatabase: 数据库访问类: 我们可以通过该类的对象来对数据库做一些增删改查的操作。
        - Cursor: 游标，有点类似于JDBC里的resultset，结果集！可以简单理解为指向数据库中某一个记录的指针！
    4. ``data/data/<包名>/database/``

### Android ORM

### Android 事件响应

![Android事件分发机制](./images/Android%20事件分发.png)

- 基于监听的事件处理机制
- 基于回调的事件处理机制
	- 自定义View。常见View组件的回调方法: 
		- 在该组件上触发屏幕事件: ``boolean onTouchEvent(MotionEvent event);``
		- 在该组件上按下某个按钮时: ``boolean onKeyDown(int keyCode,KeyEvent event);``
		- 松开组件上的某个按钮时: ``boolean onKeyUp(int keyCode,KeyEvent event);``
		- 长按组件某个按钮时: ``boolean onKeyLongPress(int keyCode,KeyEvent event);``
		- 键盘快捷键事件发生: ``boolean onKeyShortcut(int keyCode,KeyEvent event);``
		- 在组件上触发轨迹球屏事件: ``boolean onTrackballEvent(MotionEvent event);``
		- 当组件的焦点发生改变,和前面的6个不同,这个方法只能够在View中重写哦！
			``protected void onFocusChanged(boolean gainFocus, int direction, Rectpreviously FocusedRect);``
	- 基于回调的事件传播。
		上面几个回调方法返回值都是boolean类型，用于标识这个方法是否已经完全处理完该活动了，如果为false，则会将事件传播出去，否则不会。
		而事件处理的先后顺序是: ①组件绑定的事件监听器；②组件提供的回调方法；③传播到该组件所在的Activity。但如果事件处理方法返回true，后面的就不会执行了。
- Handler消息传递机制浅析
- 多线程
	- Thread:
		```java
		synchronized 
		new Thread(){
			public void run() { /* ... */ }
		}.start();
		object.wait();
		object.notify();
		object.notifyAll();
		thread.start();
		thread.run();
		thread.join();
		thread.yield();
		thread.interrupt();
		thread.interrupted();
		thread.isInterrupted();
		thread.setName(String); thread.getName();
		thread.setPriority(int); thread.getPriority();
		thread.setDaemon(boolean); thread.isDaemon();
		thread.isAlive();
		Thread.sleep(long millis);
		Thread.getCurrentThread();
		```
	- Runable:
		```java
		new Thread(() -> { /* ... */ }).start();	// or
		new Thread(new Runnable() {
			public void run() { /* ... */ }
		}).start();
		```
	- Callable:
		```java
		FutureTask<T> task = new FutureTask<>(new Callable<T>() -> { /* ... */ });
		new Thread(task).start();	// or
		ExecutorService service = Executors.newFixedThreadPool(3);
		Future future = service.submit(task);
		service.execute(new Runnable() -> { /* ... */ } );
		T result = task.get();		// 如果还没计算完，也是必须等待的
		task.cancel();				// 还没计算完，可以取消计算过程
		task.isDone();				// 判断是否计算完
		task.isCancelled();			// 判断计算是否被取消
		service.shutdown();
		```
	- runOnUiThread(Runnable runnable);
	- Handler
		```java
		void handleMessage(Message msg);	// 处理消息的方法,通常是用于被重写!
		sendEmptyMessage(int what);			// 发送空消息
		sendEmptyMessageDelayed(int what, long delayMillis);// 指定延时多少毫秒后发送空信息
		sendMessage(Message msg);			// 立即发送信息
		sendMessageDelayed(Message msg);	// 指定延时多少毫秒后发送信息
		final boolean hasMessage(int what);	// 检查消息队列中是否包含what属性为指定值的消息
		final boolean hasMessage(int what,Object object);	//除了判断what属性,还需要判断Object属性是否为指定对象的消息
		```
	- AnsyncTask
        1. **重要方法**: 
            ```java
            // public abstract class AsyncTask<Params, Progress, Result>;
            // Params是启动任务执行的输入参数，如URL；
            // Progress是后台任务执行的百分比；
            // Result是后台执行任务后返回的结果，如String等。
            void onPreExecute();	// 执行后台耗时任务前调用，通常用于初始化操作，如进度条的显示。
            Result doInBackground(Params... params);	// onPreExecute方法执行后马上执行，运行于后台中，主要负责执行很耗时的后台处理工作，
                // 可调用**publishProgress**方法更新实时任务进度。
            void publishProgress(Progress... values);	// 更新任务进度。
            void onPostExecute(Result result);	// doInBackground方法执行完后，UI线程会调用这个方法，后台计算结果将传给UI线程。
            void onProgressUpdate(Progress ...values);	// 在**publishProgress**方法调用后，UI线程将调用这个方法。
            void onCanclled(Result result);	// 用户取消线程操作时调用，在主线程调用onCanclled时调用。另外还有onCancelled
            // Task的实例必需在UI线程中创建。
            // execute方法必需在UI线程中调用。
            // 不要手动的调用onPreExecute(), onPostExecute(Result)，doInBackground(params...)，onProgressUpdate(progress...)方法。
            // 一个Task实例只能执行一次。
            ```
        2. **机制原理**:
            1. 本质上是一个静态线程池，AsyncTask派生出来的子类可以实现不同的异步任务，这些任务都是提交到静态线程池中执行的
            2. 线程池中的工作线程执行doInBackground()执行异步任务 
            3. 当任务状态改变后，工作线程会向UI线程发送消息，AsyncTask内部的InternalHandler响应这些消息，并调用相关回调函数
        3. **AsyncTask的注意事项:** 
            1. 内存泄漏，原理和上一篇的handler相同，都是非静态内部类持有外部类的引用，导致外部类无法及时回收；
            2. 生命周期: 在Activity的onDestroy（）中调用cancel（）方法
            3. 结果丢失: 在屏幕旋转/Activity意外结束时，Activity被创建，而AsyncTask会拥有之前Activity的引用，会导致结果丢失；
        4. **非常适合短时间异步操作。如果要执行长时间操作，最好使用线程池Executor**: 
            1. AsyncTask的生命周期没有跟Activity的生命周期同步
            2. 容易内存泄露
	- HandlerThread:
        1. **概念**: **handler+Thread+looper**；就相当于Thread中维护了一个looper轮循器，可以进行looper循环
        2. **特点**:
            1. 通过获取HandlerThread的looper对象传递给Handler对象，可以在handlerMessage方法中执行异步任务
            2. 优点是不会有阻塞，减少了对性能的消耗，缺点是不能同时进行多任务的处理，需要等待处理
            3. 与线程池注重并发不同，HandlerThread是一个串行队列，HandlerThread背后只有一个线程，而且可以从HandlerThread中获取Handler，进而可以remove/send(Message/Runnable)，甚至可以重新开始
        3. **源码解读**: ...
        4. 需要先HandlerThread.start，然后通过getThreadHandler获取Handler，然后可以通过send/remove来管理Message/Runnable了。当然，要记得quit。
    - 各自应用场景: 
        1. Handler:
            1. 线程间传递消息，还可以用于跨进程；
            2. 注意一般不要在MainLooper的Handler里使用耗时过长的操作，否则容易ANR；但其他线程的可以。一般用于子线程往UI主线程发送信息以更新UI。可以在子线程中执行耗时操作。
            3. 有IMessage.Stub接口，使用getIMessager方法后获得的IMessage.Stub对象其实是对Handler对象的包装，但可以与Messenger通信了。
            4. 可以传入SyncBarrier，可以阻塞同步(只是一个flag)的信息而轮番执行异步的信息
            5. 可以传入IdleHandler，这个可以执行一次(内部queueIdle返回false)或者执行无数次。它是在所有Message都执行后或者当前Message在待处理时执行。
        2. HandlerThread: 内部建立了Looper的Thread，可以提供Handler
            1. HandlerThread将loop转到子线程中处理，说白了就是将分担MainLooper的工作量，降低了主线程的压力，使主界面更流畅。
            2. 开启一个线程起到多个线程的作用。处理任务是串行执行，按消息发送顺序进行处理。HandlerThread本质是一个线程，在线程内部，代码是串行处理的。
            3. 但是由于每一个任务都将以队列的方式逐个被执行到，一旦队列中有某个任务执行时间过长，那么就会导致后续的任务都会被延迟处理。
            4. HandlerThread拥有自己的消息队列，它不会干扰或阻塞UI线程。
            5. 对于网络IO操作，HandlerThread并不适合，因为它只有一个线程，还得排队一个一个等着。
        3. runOnUiThread: 用于在内部子线程中执行耗时操作后，通过这个方法将一个消息传回给MainLooper，即UI主线程。
        4. AsyncTask: 
            1. 可以正确，方便地使用UI线程。此类允许您执行后台操作并在UI线程上发布结果，而无需操作线程和/或处理程序。
            2. 理想情况下，AsyncTasks应该用于短操作（最多几秒钟。）如果需要保持线程长时间运行，强烈建议您使用java.util.concurrent提供的各种API。如果需要保持线程长时间运行，强烈建议您使用java.util.concurrent包提供的各种API，例如Executor，ThreadPoolExecutor和FutureTask。
            3. 异步任务由在后台线程上运行的计算定义，其结果在UI线程上发布。异步任务由3种泛型类型定义，称为Params，Progress和Result，以及4个步骤，称为onPreExecute，doInBackground，onProgressUpdate和onPostExecute。除了doInBackground外，其他方法都涉及UI线程。
            4. 只能在UI线程创建实例以及调用execute方法。
            5. 一个task只能执行一次。
            6. 如果不需要泛型类型，可以class Task extends AsyncTask<void, void, void\>
            7. 1.6前AsyncTask在单个线程上执行；1.6~2.9改为线程池；3.0开始又变为单个线程。除非使用THREAD_POOL_EXECUTOR调用executeOnExecutor(Executor，Object [])，而使用这个并行线程池就无法担保线程执行的先后顺序了。
            8. AsyncTask用的是线程池机制，容量是128，最多同时运行5个core线程，剩下的排队。
        5. view.post(Runnable)/view.postDelayed(Runnable, long): 通过view里面在attachToWindow时获得的AttachInfo里的Handler将操作放入到message队列中，如果放入成功，该操作将会在ui线程中执行，并返回true，否则返回false
- Listener
	- view.setOnTouchListener((View v, MotionEvent event) -> {});
		```java
		event.getX();
		event.getY();
		event.getX(int);
		event.getY(int);
		event.getAction == MotionEvent.ACTION_DOWN;	// 按下事件
		event.getAction == MotionEvent.ACTION_MOVE;	// 移动事件
		event.getAction == MotionEvent.ACTION_UP;	// 弹起事件
		MotionEvent.ACTION_POINTER_DOWN;			// 当屏幕上已经有一个点被按住，此时再按下其他点时触发。
		MotionEvent.ACTION_POINTER_UP;				// 当屏幕上有多个点被按住，松开其中一个点时触发（即非最后一个点被放开时）。
		```
	- view.setOnClickListener((View v) -> {});
	- view.setOnLongClickListener((View v) -> {});
	- editText.addTextChangedListener(new EditText.TextWatcher() { /* ... */ });
		```java
		public void beforeTextChanged(CharSequence s, int start, int count, int after);
		public void onTextChanged(CharSequence s, int start, int before, int count);
		public void afterTextChanged(Editable s);
		```
	- listView.setOnScrollListener(new AbsListView.OnScrollListener() { /* ... */ });
		```java
		public void onScrollStateChanged(AbsListView view, int scrollState);
		// scrollState有三种状态: 
		// SCROLL_STATE_TOUCH_SCROLL: 开始滚动的时候调用，调用一次
		// SCROLL_STATE_IDLE: 滚动事件结束的时候调用，调用一次
		// SCROLL_STATE_FLING: 当手指离开屏幕，并且产生惯性滑动的时候调用，可能会调用<=1次
		public void onScroll(AbsListView view, int firstVisibleItem, int visibleItemCount, int totalItemCount);
		// firstVisibleItem:  当前屏幕显示的第一个item的位置（下标从0开始）
		// visibleItemCount: 当前屏幕可以见到的item总数，包括没有完整显示的item
		// totalItemCount: Item的总数，** 包括通过addFooterView添加的那个item **
		// 在listview的item发生变化的时候（初始化/notifyDataSetChanged()），onScroll会被调用
		```
- 响应系统设置的事件(Configuration类)
	```java
	Configuration cfg = getResources().getConfiguration();
	cfg.densityDpi	// 屏幕密度
	cfg.fontScale	// 当前用户设置的字体的缩放因子
	cfg.hardKeyboardHidden	// 硬键盘是否可见: HARDKEYBOARDHIDDEN_NO、HARDKEYBOARDHIDDEN_YES，分别是十六进制的0和1
	cfg.keyboard	// 当前关联额键盘类型: KEYBOARD_12KEY(只有12个键的小键盘)、KEYBOARD_NOKEYS、KEYBOARD_QWERTY(普通键盘)
	cfg.keyboardHidden		// 当前键盘是否可用。该属性不仅会判断系统的硬件键盘，也会判断系统的软键盘(位于屏幕)
	cfg.locale		// 获取用户当前的语言环境
	cfg.mcc			// 获取移动信号的国家码
	cfg.mnc			// 获取移动信号的网络码，ps: 国家代码和网络代码共同确定当前手机网络运营商
	cfg.navigation	// 判断系统上方向导航设备的类型: NAVIGATION_NONAV(无导航)、NAVIGATION_DPAD(DPAD导航)、
		// NAVIGATION_TRACKBALL(轨迹球导航)、NAVIGATION_WHEEL(滚轮导航)
	cfg.navigationHidden
	cfg.orientation	// 获取系统屏幕的方向: ORIENTATION_LANDSCAPE(横屏)、ORIENTATION_PORTRAIT(竖屏)
	cfg.screenHeightDp, screenWidthDp	// 屏幕可用高和宽，用dp表示
	cfg.screenLayout
	cfg.touchscreen	//获取系统触摸屏的触摸方式: TOUCHSCREEN_NOTOUCH(无触摸屏)、TOUCHSCREEN_STYLUS(触摸笔式触摸屏)、
		// TOUCHSCREEN_FINGER(接收手指的触摸屏)
	```
- Gestures(手势)

### Android 函数响应式

### Android 网络请求

1. **权限**: android.permission.INTERNET(使用网络)/android.permission.CHANGE_NETWORK_STATE(管理网络状态)
2. **URL**: 没有很好的错误处理: 如手机没有网络、服务器关闭、URL无效、用户操作超时，因此，从一个URL读取数据值之前，往往需要了解更多的信息，例如，需要读取的数据到底有多大
    ```java
    InputStream inputStream = new URL("http://sysu.github.io/").openStream();
    byte[] bytes = new byte[250];
    int readSize = inputStream.read(bytes);
    Log.i("HTTP", "readSize = " + readSize + "; bText = " + new String(bytes));
    inputStream.close();
    ```
3. **HttpClient**: 已弃用，用于接收/发送Http请求/响应，但不缓存服务器响应，不执行HTML页面潜入的JS代码，不会对页面内容进行任何解析，处理！
    ```java
    HttpGet get = new HttpGet(String url);  // 用于get
    HttpPost post = new HttpPost(String url);  // 用于post
    get/post.setParams(HttpParams);
    post.setEntity(HttpEntity);
    HttpResponse response =  new DefaultHttpClient().execute(get/post);
    response.getAllHeaders();  // 响应头
    response.getHeader(String name);  // 响应头
    HttpEntity resEntity = response.getEntity();  // 响应内容
    String detail = EntityUtils.toString(resEntity, "utf-8");
    httpResponse.getStatusLine().getStatusCode();
    // 另外，如果是带有参数的GET请求的话，我们可以将参数放到一个List集合中，再对参数进行URL编码，最后和URL拼接下就好了: 
    List<BasicNameValuePair> params = new LinkedList<BasicNameValuePair>();
    params.add(new BasicNameValuePair("user", "猪小弟"));
    params.add(new BasicNameValuePair("pawd", "123"));
    String param = URLEncodedUtils.format(params, "UTF-8");
    HttpGet httpGet = new HttpGet("http://www.baidu.com" + "?" + param);
    // POST请求比GET稍微复杂一点，创建完HttpPost对象后，通过NameValuePair集合来存储等待提交的参数，
    // 并将参数传递到UrlEncodedFormEntity中，最后调用setEntity(entity)完成，HttpClient.execute(HttpPost)即可；
    ```
4. **HttpURLConnection**:
    - HttpURLConnection可以对URL进行检查，避免错误地传输过多的数据。
    - HttpURLConnection获取一些有关URL对象所引用的资源信息，如: HTTP状态、头信息、内容的长度、类型和日期时间等。
    - 使用:
        ```java
        HttpURLConnection conn = (HttpURLConnection) new URL("http://sysu.github.io/").openConnection();
        // 请求
        conn.setRequestMethod("GET");
        conn.setConnectTimeout(6 * 1000);
        conn.setReadTimeout(6 * 1000);
        // 用于post
        conn.setDoOutput(true);  // 设置允许输出
        conn.setDoInput(true);  // 设置允许输入
        conn.setUseCaches(false);  // POST方法不能缓存，要手动设置为false
        OutputStream out = conn.getOutputStream();
        String data = "passwd="+ URLEncoder.encode(passwd, "UTF-8") + "&number="+ URLEncoder.encode(number, "UTF-8");
        out.write(data.getBytes());
        out.flush();
        // session && cookie
        conn.getHeaderField("Set-Cookie");  // 获取cookie
        conn.setRequestProperty("Cookie", cookie);  // 请求时带上cookie
        // 响应
        InputStream in = conn.getInputStream();
        String html = new String(in, "UTF-8");
        conn.disconnect();
        conn.getResponseCode();
        conn.getContentType();
        conn.getContent();
        // url重写示例(put or post or ...)
        HttpPut httpPut = new HttpPut(String url);
        httpPut.setHeader("Content-Type", "application/json; charset=UTF-8");
        List<NameValuePair> params = new ArrayList<NameValuePair>();
        params.add(new BasicNameValuePair("activation_code", actCode));
        params.add(new BasicNameValuePair("session", new JSONObject().put("id", cookie).toString()));
        UrlEncodedFormEntity entity = new UrlEncodedFormEntity(params, "UTF-8");
        entity.setContentType("application/json");
        httpPut.setEntity(entity);
        HttpResponse response = new DefaultHttpClient().execute(httpPut);
        // webview
        webView.loadDataWithBaseURL("", html, "text/html", "UTF-8", "");
        ```
5. **解析数据(原生xml解析)**: 
    1. sax:
        - 对文档顺序扫描，扫描到文档开始与结束、元素开始与结束标签时通知事件处理函数，然后继续扫描
        - 解析速度快，占用内存少，每需要解析一类xml，就需要编写新的适合该类xml的处理类，用起来麻烦，使用流式解析(读哪解哪)，解析是同步的
        - 常用接口: ContentHelper; 常用类: DefaultHelper(startDocument endDocument startElement endElement characters)
    2. dom:
        - 先将xml文档读到内存中，再用dom api访问树形结构并获取数据
        - 使用简单，但很消耗内存，数据量太大的话，手机内存不够就可能卡死，不建议在Android设备使用，解析简单的xml文件倒还行
        - 常用的5接口与类: Document Element Node NodeList DOMParser
    3. pull: 
        - 元素开始时可以调用parset.nextText0从xml文档中提取所有数据
        - 和sax差不多，但代码实现较为简单，非常适合移动设备
        - 常用接口: XmlPullParser XmlSreializer XmlPullParserFactory
6. **解析数据(json)**: 
    1. Java原生: JSONObject ... JSONArray ...
    2. **Gson框架**: 解析没那么麻烦，代码量简洁，可以很方便地解析复杂的Json数据
        - 要记得创建对象的JavaBean类；要求json对象中的key的名称与Java对象的JavaBean类中的属性名要相同，否则解析不成功！
        - 将json字符串变为bean或者List<bean\>: Gson gson = new Gson(); MyBean b = gson.fromJson(jsonStr, MyBean.class); List<MyBean> bs = gson.fromJson(jsonStr, new TypeToken<List<MyBean>>(){}.getType());
        - Gson还可以将Java对象、Java对象的List转换为json字符串{}
    3. **Fastjson**: 采用了一种“假定有序、快速匹配”的算法，把JSON Parse的性能提升到极致，是目前Java语言中最快的JSON库。
        - 一样要bean，一样要求json对象中的key的名称与Java对象的JavaBean类中的属性名要相同
        - MyBean b = JSON.parseObject(jsonStr, MyBean.class); List<MyBean> bs = JSON.parseArray(jsonStr, MyBean.class);

### Android 网络请求2
        
1. **Ksoap2**: 
2. **REST**: 

### Android 网络请求3

1. **OkHttp**: 
2. **Retrofit**: 
3. **NoHttp**: 
4. **android-async-http**: 

### Android 图片请求

### Android 视频音频

### Android 依赖注入

### Android 动画

1. **分类**: https://blog.csdn.net/xuepeng0728119/article/details/50592819
    1. **Tween Animation 补间动画(又叫view动画)**，是通过对场景里的对象不断做图像变换(透明度、缩放、平移、旋转)从而产生动画效果，是一种渐进式动画，并且View动画支持自定义。
        ```java
        AlphaAnimation | ScaleAnimation | TranslateAnimation | RotateAnimation | AnimationSet
        LinearInterpolator | CycleInterpolator | AccelerateInterpolator | DecelerateInterpolator | AccelerateDecelerateInterpolator | 
        AnticipateInterpolator | BounceInterpolator | OvershootInterpolator | AnticipateOvershootInterpolator | PathInterpolator | TimeInterpolator(接口)
        AnimationUtils
        ```
    2. **Frame Animation 帧动画**，通过顺序播放一系列图像从而产生动画效果，。图片过多时容易造成OOM(Out Of Memory内存用完)异常。
        ```java
        boolean setVisible(boolean_visible, boolean_restart)
        void start()  // void run()
        void stop()
        boolean isRunning()
        void unscheduleSelf(Runnable)  // ???
        int getNumberOfFrames()
        Drawable getFrame(int index)
        void addFrame(Drawable, int_duration)
        int getDuration(int index)
        boolean isOneShot()
        void setOneShot(boolean_oneshot)
        Drawable mutate()  // ???
        ```
    3. **Attribute Animation 属性动画**，这也是在android3.0之后引进的动画，在手机的版本上是android4.0就可以使用这个动画，通过动态的改变对象的属性从而达到动画效果。
        ```java
        ValueAnimator
        ObjectAnimator
        AnimationSet
        AnimatorInflater
        Keyframes
        Animator.AnimatorListener/AnimatorListenerAdapter
        **ViewPropertyAnimator**
        ```
2. **注意**: 
    1. **补间动画只是改变了View的显示效果而已，并不会真正的改变View的属性。而属性动画可以改变View的显示效果和属性，可以对任何对象做动画，动画的效果也也得到了加强，可以实现更加绚丽的动画效果**。。举个例子：例如屏幕左上角有一个Button按钮，使用补间动画将其移动到右下角，此刻你去点击右下角的Button，它是绝对不会响应点击事件的，因此其作用区域依然还在左上角。只不过是补间动画将其绘制在右下角而已，而属性动画则不会。
    2. **frame动画只能start和stop，而且stop后不会恢复到原来状态。除非:** 
        1. img.setBackgroundDrawable(null); img.setBackgroundResource(R.drawable.animation);
        2. animationDrawable.selectDrawable(0);
        3. animationDrawable.setVisible(boolean_visible: true, boolean_restart: true)
    3. **frame动画的start不能在onCreate中调用，因为这时这时drawable可能还未attach到view上，建议**: (前三个本质应该是由于这个执行动画的Message在MainLooper中排在了onCreate/onStart/onResume等的后面)
        1. view.getViewTreeObserver().addOnDrawListener(() -> animationDrawable.start());
        2. view.post(() -> animationDrawable.start());
        3. 使用AsyncTask/Handler(可能也行): 
            ```java
            class TempTask extends AsyncTask<void, void, void> {
                public void doInBackground() {
                    if (!animationDrawable.isRunning()) animationDrawable.start();
                }
            }
            new TempTask().execute();
            ```
        4. public void onWindowFocusChanged(boolean_hasFocus) { animationDrawable.start(); super.onWindowFocusChanged(hasFocus); }
        5. onClick
    4. **frame动画可能由于图片太多导致OOM: 既然一次性读取所有的图片资源会导致内存溢出，那么我们能想到的解决方法就是按照动画的顺序，每次只读取一帧动画资源，读取完毕再显示出来，如果图片过大，我们还需要对图片进行压缩处理**。
        1. first
            ```java
            public class myAnimation {
                private ImageView mImageView;   // 播放动画的相应布局
                private int[] mImageRes;
                private int[] durations;      

                public myAnimation(ImageView pImageView, int[] pImageRes, int[] durations) {
                    this.mImageView = pImageView;
                    this.durations = durations;
                    this.mImageRes= pImageRes;       
                    mImageView.setImageResource(mImageRes[1]);
                    play(1);
                }

                private void play(final int pImageNo) {
                    mImageView.postDelayed(new Runnable() {     // 采用延迟启动子线程的方式
                        public void run() {
                            mImageView.setImageResource(mImageRes[pImageNo]);
                            if (pImageNo == mImageRes.length - 1)
                                return;
                            else
                                play(pImageNo + 1);
                        }
                    }, durations[pImageNo-1]);
                }         
            }
            ```
        2. second
            ```java
            // 使用: AnimationManager.getInstance().initDrawableList(80, R.drawable.i0, ..., R.drawable.i20).into(close).start();
            public class AnimationManager {
                private static AnimationManager sAnimationManager;
                private long  fps;
                private int[] res;
                private int   oneImage;
                private int count  = 1;
                private int length = 0;
                private ImageView  intoView;
                private Bitmap     nextBitmap;
                private Bitmap     currentBitmap;
                private Disposable mSubscribe;

                private AnimationManager() {}

                public static AnimationManager getInstance() {
                    if (sAnimationManager == null)
                        sAnimationManager = new AnimationManager();
                    return sAnimationManager;
                }

                public AnimationManager initDrawableList(long fps, int... Res) {
                    this.fps = fps;
                    this.res = Res;
                    count = 1;
                    if (Res.length == 0)
                        throw new RuntimeException("不能是空数组");
                    this.oneImage = Res[0];
                    length = Res.length;
                    return this;
                }

                public AnimationManager into(ImageView view) {
                    this.intoView = view;
                    // 加载第一张
                    Observable.just(oneImage)
                            .observeOn(Schedulers.io())
                            .map(new Function<Integer, Bitmap>() {
                                @Override
                                public Bitmap apply(Integer integer) throws Exception {
                                    BitmapFactory.Options opts = getOptions(integer);
                                    // 加载下一张
                                    if (res.length > 1)
                                        nextBitmap = BitmapFactory.decodeResource(intoView.getResources(), res[count++], opts);
                                    return BitmapFactory.decodeResource(intoView.getResources(), integer, opts);
                                }
                            })
                            .observeOn(AndroidSchedulers.mainThread())
                            .subscribe(new Consumer<Bitmap>() {
                                @Override
                                public void accept(Bitmap bitmap) throws Exception {
                                    intoView.setImageBitmap(bitmap);
                                }
                            });
                    return this;
                }

                @NonNull
                private BitmapFactory.Options getOptions(Integer integer) {
                    /**
                     * 先获取图片的和IamgeView各自的宽高
                     */
                    BitmapFactory.Options opts = new BitmapFactory.Options();
                    //给opts配置只获取图片的元数据
                    opts.inJustDecodeBounds = true;
                    //注意：由于配置了opts并且是仅仅获取图片边界的属性，因此该方法返回的对象永远为null
                    BitmapFactory.decodeResource(intoView.getResources(), integer, opts);
                    //从opts对象上获取图片的宽高
                    int width  = opts.outWidth;
                    int height = opts.outHeight;
            
                    int width1 = ScreenUtils.getScreenWidth(intoView.getContext());
                    int height1 = ScreenUtils.getScreenHeight(intoView.getContext());
            
                    int sampleSize = Math.max(width / width1, height / height1);
            
            
                    opts.inJustDecodeBounds = false;//必须配置为加载图片，而不是仅仅获取图片的尺寸
                    opts.inSampleSize = sampleSize; //配置等比例缩放的倍数
                    return opts;
                }

                public synchronized void start() {
                    mSubscribe = Observable.interval(fps, TimeUnit.MILLISECONDS)
                            .observeOn(Schedulers.io())
                            .map(new Function<Long, Boolean>() {
                                @Override
                                public Boolean apply(Long aLong) throws Exception {
                                    count++;
                                    if (nextBitmap != null) {
                                        currentBitmap = nextBitmap;
                                    }
                                    if (count > res.length - 1) {
                                        return false;
                                    }
                                    BitmapFactory.Options opts = getOptions(res[count]);
                                    nextBitmap = BitmapFactory.decodeResource(intoView.getResources(), res[count], opts);
                                    return true;
                                }
                            })
                            .observeOn(AndroidSchedulers.mainThread())
                            .subscribe(new Consumer<Boolean>() {
                                @Override
                                public void accept(Boolean flag) throws Exception {
                                    if (flag) {
                                        intoView.setImageBitmap(currentBitmap);
                                    } else {
                                        mSubscribe.dispose();
                                    }
            
                                }
                            });
                }
            }
            ```
        3. https://blog.csdn.net/qq_25804863/article/details/65634864 ...
3. **实例**: 
    1. 

### Android Drawable

1. **实例**: 
    1. **shapeDrawable**: 
        1. **实线/虚线**: shape="line" + stroke
            ```xml
            <shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="line" android:useLevel="true">
                <!-- <stroke android:width="@dimen/dimen_10" android:color="@color/white"/> -->
                <stroke android:width="@dimen/dimen_10" android:color="@color/white" android:dashWidth="@dimen/dimen_5" android:dashGap="@dimen/dimen_5"/>
            </shape>
            ```
        2. **矩形**:
            1. **矩形实线/虚线边框内部无填充**: shape="rectangle" + stroke
            ```xml
            <shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="rectangle" android:useLevel="true">
                <!-- <stroke android:width="@dimen/dimen_10" android:color="@color/white"/> -->
                <stroke android:width="@dimen/dimen_10" android:color="@color/white" android:dashWidth="@dimen/dimen_5" android:dashGap="@dimen/dimen_5"/>
            </shape>
            ```
            2. **矩形实线/虚线边框-内部填充**: shape="rectangle" + stroke + solid
            3. **圆角矩形-只有边框** **圆角矩形-只有内部填充** **圆角矩形-有边框有填充** **圆角矩形-左边圆角为一个半圆弧** **圆角矩形-左右两边都是半圆弧** **圆角矩形-左右两边都是半圆弧-带边框** **圆角矩形-圆** **圆角矩形-上下两边半圆弧**: shape="rectangle" + stroke + solid + corners
        3. **渐变**:
            1. **垂直线性渐变**: gradient(angle="90", angle正数指从左边开始逆时针变换的角度，变换的是startColor所在位置) **水平线性渐变** **对角线线性渐变**
            2. **径向渐变** **扫描渐变**
        4. **圆**: shape="oval" ... **椭圆**: shape="oval" ...
        5. **圆环**: shape="ring" ...

### Android 自定义View

1. **如何自定义控件**: 
    1. 自定义属性的声明和获取
        1. 分析需要的自定义属性
        2. 在res/values/attrs.xml定义声明
        3. 在layout文件中进行使用
        4. 在View的构造方法中进行获取
    2. 测量onMeasure: 测量View的大小
    3. 布局onLayout(ViewGroup): 确定View的布局
    4. 绘制onDraw: 将View绘制到界面上
    5. onTouchEvent
    6. onInterceptTouchEvent(ViewGroup)
    7. 状态的恢复与保存
2. **View绘制流程**: 
    1. PhoneWindow是Android系统中最基本的窗口系统，每个Activity会创建一个。PhoneWindow是Activity和View系统交互的接口。DecorView本质上是一个FrameLayout，是Activity中所有 View的祖先。
    2. ViewGroup使用ViewRoot的performTraversals()方法开始，从上到下遍历整个视图树，每个View控制负责绘制自己，而ViewGroup还需要负责通知自己的子View进行绘制操作。视图操作的过程可以分为三个步骤，分别是测量(Measure)、布局(Layout)和绘制(Draw)。performTraversals方法在类ViewRootImpl内。
        ```java
        int childWidthMeasureSpec = getRootMeasureSpec(mWidth, lp.width);
        int childHeightMeasureSpec = getRootMeasureSpec(mHeight, lp.height);
        ...
        // 测量
        performMeasure(childWidthMeasureSpec, childHeightMeasureSpec);
        ...
        // 布局
        performLayout(lp, mWidth, mHeight);
        ...
        // 绘制
        performDraw();
        ```
    3. MeasureSpec表示的是一个32位的整数值，它的高2位表示测量模式SpecMode，低30位表示某种测量模式下的规格大小SpecSize。MeasureSpec是View类的一个静态内部类，用来说明应该如何测量这个View。三种测量模式。
        - UNSPECIFIED: 不指定测量模式，父视图没有限制子视图的大小，子视图可以是想要的任何尺寸，通常用于系统内部，应用开发中很少使用到。
        - EXACTLY: 精确测量模式，当该视图的layout_width或者layout_height指定为具体数值或者match_parent时生效，表示父视图已经决定了子视图的精确大小，这种模式下View的测量值就是SpecSize的值。
        - AT_MOST: 最大值模式，当前视图的layout_width或者layout_height指定为wrap_content时生效，此时子视图的尺寸可以是不超过父视图运行的最大尺寸的任何尺寸。
        - 对DecorView而言，它的MeasureSpec由窗口尺寸和其自身的LayoutParams共同决定；对于普通的View，它的MeasureSpec由父视图的MeasureSpec和其本身的LayoutParams共同决定。
    4. Measure用来计算View的实际大小。页面的测量流程从performMeasure方法开始。具体操作是分发给ViewGroup的，由ViewGroup在它的measureChild方法中传递给子View。ViewGroup通过遍历自身所有的子View，并逐个调用子View的measure方法实现测量操作。View(ViewGroup)的Measure方法，最终的测量是通过回调onMeasure方法实现的，这个通常由View的特定子类自己实现，可以通过重写这个方法实现自定义View。
    5. Layout过程用来确定View在父容器的布局位置，他是父容器获取子View的位置参数后，调用子View的layout方法并将位置参数传入实现的。
    6. Draw操作用来将控件绘制出来，绘制的流程从performDraw方法开始。performDraw方法在类ViewRootImpl内。最终调用到每个View的draw方法绘制每个具体的View，绘制基本上可以分为六个步骤。
        1. 绘制背景
        2. 保存canvas图层
        3. 绘制自身内容
        4. 绘制子View
        5. draw the fade effect and restore layers
        6. draw decorations (foreground, scrollbars)

### Android 性能优化

1. **合理管理内存**:
    1. **节制的使用Service**: 启动一个Service时，系统会倾向于将该Service所依赖的进程进行保留，系统可以在LRUcache当中缓存的进程数量也会减少，导致切换程序的时候耗费更多性能。推荐使用IntentService
    2. **当界面不可见时释放内存**: 重写Activity的onTrimMemory()方法，在这个方法中监听TRIM_MEMORY_UI_HIDDEN这个级别(触发就说明用户离开了程序，此时就可以进行资源释放操作了)
    3. **当内存紧张时释放内存**: onTrimMemory()方法还有很多种其他类型的回调，可以在手机内存降低的时候及时通知我们，我们应该根据回调中传入的级别来去决定如何释放应用程序的资源。
    4. **避免在Bitmap上浪费内存**:  读取一个Bitmap图片的时候，千万不要去加载不需要的分辨率。可以压缩图片等操作
    5. **有优化过的数据集合**: Android提供了一系列优化过后的数据集合工具类，如SparseArray、SparseBooleanArray、LongSparseArray，使用这些API可以让我们的程序更加高效。HashMap工具类会相对比较低效，因为它需要为每一个键值对都提供一个对象入口，而SparseArray就避免掉了基本数据类型转换成对象数据类型的时间。
    6. **知晓内存的开支情况**: 
        1. 使用枚举通常会比使用静态常量消耗两倍以上的内存，尽可能不使用枚举
        2. 任何一个Java类，包括匿名类、内部类，都要占用大概500字节的内存空间
        3. 任何一个类的实例要消耗12-16字节的内存开支，因此频繁创建实例也是会在一定程序上影响内存的
        4. 使用HashMap时，即使你只设置了一个基本数据类型的键，比如说int，但是也会按照对象的大小来分配内存，大概是32字节，而不是4字节，因此最好使用优化后的数据集合
    7. **谨慎使用抽象编程**: 在Android使用抽象编程会带来额外的内存开支，因为抽象的编程方法需要编写额外的代码，虽然这些代码根本执行不到，但是也要映射到内存中，不仅占用了更多的内存，在执行效率上也会有所降低。所以需要合理的使用抽象编程。
    8. **尽量避免使用依赖注入框架**: 使用依赖注入框架貌似看上去把findViewById()这一类的繁琐操作去掉了，但是这些框架为了要搜寻代码中的注解，通常都需要经历较长的初始化过程，并且将一些你用不到的对象也一并加载到内存中。这些用不到的对象会一直站用着内存空间，可能很久之后才会得到释放，所以可能多敲几行代码是更好的选择。
    9. **谨慎使用多进程**: 多数应用程序不该在多个进程中运行的，一旦使用不当，它甚至会增加额外的内存而不是帮我们节省内存。这个技巧比较适用于哪些需要在后台去完成一项独立的任务，和前台是完全可以区分开的场景。比如音乐播放，关闭软件，已经完全由Service来控制音乐播放了，系统仍然会将许多UI方面的内存进行保留。在这种场景下就非常适合使用两个进程，一个用于UI展示，另一个用于在后台持续的播放音乐。关于实现多进程，只需要在Manifast文件的应用程序组件声明一个android:process属性就可以了。进程名可以自定义，但是之前要加个冒号，表示该进程是一个当前应用程序的私有进程。
2. **分析内存的使用情况**: 系统不可能将所有的内存都分配给我们的应用程序，每个程序都会有可使用的内存上限，被称为堆大小。不同的手机堆大小不同，如下代码可以获得堆大小:
    ```java
    ActivityManager manager = (ActivityManager)getSystemService(Context.ACTIVITY_SERVICE);
    int heapSize = manager.getMemoryClass();
    ```
    结果以MB为单位进行返回，我们开发时应用程序的内存不能超过这个限制，否则会出现OOM。<br>
    1. **Android的GC操作**: Android系统会在适当的时机触发GC操作，一旦进行GC操作，就会将一些不再使用的对象进行回收。GC操作会从一个叫做Roots的对象开始检查，所有它可以访问到的对象就说明还在使用当中，应该进行保留，而其他的对系那个就表示已经不再被使用了。
    2. **Android中内存泄漏**: 可借助一系列工具，比如LeakCanary。
3. **高性能编码优化**: 都是一些微优化，在性能方面看不出有什么显著的提升的。使用合适的算法和数据结构是优化程序性能的最主要手段。
    1. **避免创建不必要的对象(如短生命周期的临时对象)，不必要的对象我们应该避免创建**
        1. StringBuffer/StringBuilder代替字符串的加号
        2. 尽量使用基本数据类型来代替封装数据类型
        3. 如果明确知道调用方会将返回的String再进行拼接操作的话，可以考虑返回一个StringBuffer对象来代替
        4. 基本数据类型的数组也要优于对象数据类型的数组。另外两个平行的数组要比一个封装好的对象数组更加高效，举个例子，Foo[]和Bar[]这样的数组，使用起来要比Custom(Foo,Bar)[]这样的一个数组高效的多。
    2. **静态优于抽像**: 如果你并不需要访问一个类中的某些字段，只是想调用它的某些方法来去完成一项通用的功能，那么可以将这个方法设置成静态方法，调用速度提升15%-20%，同时也不用为了调用这个方法去专门创建对象了，也不用担心调用这个方法后是否会改变对象的状态(静态方法无法访问非静态字段)。
    3. **对常量使用static final修饰符**: 这种优化方式只对基本数据类型以及String类型的常量有效，对于其他数据类型的常量是无效的。
    4. **使用增强型for循环语法**: for(T a : list) 优于 for(int i = 0; i < len; ++i) 优于 for(int i = 0; i < arr.len; ++i)。ArrayList手写的循环比增强型for循环更快，其他的集合没有这种情况。因此默认情况下使用增强型for循环，而遍历ArrayList使用传统的循环方式。
    5. **多使用系统封装好的API**: 直接使用系统中提供的System.arraycopy()方法会让执行效率快9倍以上，因为调用底层汇编
    6. **避免在内部调用Getters/Setters方法**: 字段搜寻比方法调用效率高得多，我们直接访问某个字段可能要比通过getters方法来去访问这个字段快3到7倍
4. **布局优化技巧**:
    1. **重用布局文件**: 如果我们要在标签中覆写layout属性，必须要将layout_width和layout_height这两个属性也进行覆写，否则覆写效果将不会生效。
    2. **仅在需要时才加载布局**: 用VISIBLE性能表现一般，可以用ViewStub。ViewStub所加载的布局是不可以使用标签的，因此这有可能导致加载出来出来的布局存在着多余的嵌套结构。
    3. **ListView的ViewHandler类声明**

### Android 内存泄露

1. **静态集合类引起内存泄漏**: 静态变量的生命周期和应用程序一致，他们所引用的所有的对象Object也不能被释放
<!-- 2. **当集合里面的对象属性被修改后，再调用remove()方法时不起作用**: 集合根据hashCode来保证对象的唯一性，而如果修改了对象属性，对象的hashCode改变，就无法根据hashCode来remove -->
3. **监听器**: 在释放对象的时候却没有记住去删除这些监听器
4. **各种连接**: 比如数据库连接(dataSourse.getConnection())，网络连接(socket)和io连接，除非其显式的调用了其close()方法将其连接关闭，否则是不会自动被GC回收的。
    对于Resultset和Statement对象可以不进行显式回收，但Connection一定要显式回收，因为Connection在任何时候都无法自动回收，而Connection一旦回收，
    Resultset和Statement对象就会立即为NULL。但是如果使用连接池，情况就不一样了，除了要显式地关闭连接，还必须显式地关闭Resultset与Statement对象(关闭其中一个，
    另外一个也会关闭)，否则就会造成大量的Statement对象无法释放，从而引起内存泄漏。这种情况下一般都会在try里面去的连接，在finally里面释放连接。
5. **内部类和外部模块的引用**
6. **单例模式**
7. **匿名内部类/非静态内部类和异步线程**
8. **尽量避免使用static成员变量**
9. **避免 override finalize()**: 
    1. finalize 方法被执行的时间不确定，不能依赖与它来释放紧缺的资源。时间不确定的原因是:  虚拟机调用GC的时间不确定 Finalize daemon线程被调度到的时间不确定
    2. finalize 方法只会被执行一次，即使对象被复活，如果已经执行过了 finalize 方法，再次被 GC 时也不会再执行了。含有 finalize 方法的 object 是在 new 的时候由虚拟机生成了一个 finalize reference 在来引用到该Object的，而在 finalize 方法执行的时候，该 object 所对应的 finalize Reference 会被释放掉，即使在这个时候把该 object 复活(即用强引用引用住该 object )，再第二次被 GC 的时候由于没有了 finalize reference 与之对应，所以 finalize 方法不会再执行。
    3. 含有finalize方法的object需要至少经过两轮GC才有可能被释放
10. **资源未关闭造成的内存泄漏**: BraodcastReceiver，ContentObserver，File，游标 Cursor，Stream，Bitmap等资源
11. **一些不良代码造成的内存压力**: 如Bitmap没有recycle()释放C代码内存

常见内存泄露解决:

1. handler: weakReference + static
2. 内部类: 外部类啊或者static

发现内存泄露: 

1. Eclipse MAT: https://blog.csdn.net/lc0817/article/details/67014499
    1. jstat -gc pid: 可以显示gc的信息，查看gc的次数，及时间。其中最后五项，分别是young gc的次数，young gc的时间，full gc的次数，full gc的时间，gc的总时间。
    2. jstat -gccapacity pid: 可以显示，VM内存中三代（young,old,perm）对象的使用和占用大小，如: PGCMN显示的是最小perm的内存使用量，PGCMX显示的是perm的内存最大使用量，
        PGC是当前新生成的perm内存占用量，PC是但前perm内存占用量。其他的可以根据这个类推，OC是old内纯的占用量。
    3. jstat -gcutil pid: 统计gc信息统计。
    4. jstat -gcnew pid: 年轻代对象的信息。
    5. jstat -gcnewcapacity pid: 年轻代对象的信息及其占用量。
    6. jstat -gcold pid: old代对象的信息。
    7. jstat -gcoldcapacity pid: old代对象的信息及其占用量。
    8. jstat -gcpermcapacity pid: perm对象的信息及其占用量。
    9. jstat -class pid: 显示加载class的数量，及所占空间等信息。
    10. jstat -compiler pid: 显示VM实时编译的数量等信息。
2. MemoryAnalyzer.exe: java内存泄漏检查工具利器 https://blog.csdn.net/fishinhouse/article/details/80781673
3. 

### Android 安全漏洞

1. **WebView**:
    1. Android API level 16以及之前的版本存在远程代码执行安全漏洞，该漏洞源于程序没有正确闲置使用WebView.addJavascriptInterface方法，远程攻击者可通过使用反射机制利用该漏洞执行任意java对象的方法
    2. webView写在其他容器时，销毁webview时，需要先将容器中的webviewremove之后，在调用webview.removeallViews和webview.onDestory()才能真正销毁不会导致内存泄露问题
    3. jsbridge: 让本地native端调用远程js代码，也可以逆向使用
    4. 后台耗电问题，由于webView加载网页时，会单独开启一个线程，所以如果webview没有被彻底销毁的话，会导致你的App耗电量居高不下，可以在Activity中的onDestroy方法中直接调用System.exit方法直接将虚拟机关闭
    5. webView硬件加速导致页面渲染问题，易导致页面白块，解决方法是暂时关闭硬件加速
    6. 当页面加载完成时会回调webviewClient.onPageFinished()方法，这个方法会判断当前页面有没有被加载完毕，但是当你发生页面跳转的时候，这个方法会被调用无数次，所以当你的webview需要加载各种网页，并且需要在网页上操作时，调用WebChromeClient.onProgressChanged方法更好

### Android 源码阅读

1. Message: 
    1. 成员变量: 
        1. 常用: 
            1. int what/arg1/arg2/
            2. Object obj
            3. Messenger replyTo
            4. Bundle data
            5. Handler target
            6. Runnable callback
        2. 排队:
            1. Message next
            2. long when
        3. 静态排队相关的:
            1. Object锁: sPoolSync
            2. Message sPool
            3. int sPoolSize/MAX_POOL_SIZE
            4. boolean gCheckRecycle
        3. 获取: getWhen/getTarget/getCallback/getData/peekData/isAsynchronous
        4. 设置: setTarget/setCallback/setData/setWhat/setAsynchronous
    2. 创建: obtain/copyFrom
    3. 回收: recycle
    4. 发送: sendToTarget
2. MessageQueue:
    1. 成员变量: 
        1. boolean mQuitAllowed/mQuitting
        2. Message mMessages
        3. ArrayList<IdleHandler\> mIdleHandlers
        4. IdleHandler[] mPendingIdleHandlers
        5. SparseArray<FileDescriptorRecord\> mFileDescriptorRecords
        6. boolean mBlocked
        7. int mNextBarrierToken
    2. 构造: MessageQueue(boolean)
    3. 空闲: isIdle/addIdleHandler(IdleHandler)/removeIdleHandler(IdleHandler)
    4. 是否可以放入message(不quit，也不...): isPolling
    5. FileDescriptorEventListener: addOnFileDescriptorEventListener/removeOnFileDescriptorEventListener
    6. 同步屏障: postSyncBarrier/removeSyncBarrier(int_token)
    7. 内部: next/quit(boolean_safe)/enqueueMessage(message, when)/hasMessages/removeMessages/removeCallbacksAndMessages/dump/writeToProto/...
        1. next中: 如果没有同步屏障，所有的同步与异步的Message根据when来排队执行；如果有同步屏障，那么排队执行异步的Message，直到同步屏障被清除；如果找不到Message，continue；只有quit才能退出。
        2. quit中有分安全与非安全的removeAllFutureMessagesLocked/removeAllMessagesLocked
    8. interface: IdleHandler(boolean queueIdle())/OnFileDescriptorEventListener(int onFileDescriptorEvents(FileDescriptor, int events))
3. Looper: 
    1. 成员变量: 
        1. static ThreadLocal<Looper> sThreadLocal
        2. Looper sMainLooper
        3. MessageQueue mQueue
        4. Thread mThread
    2. static prepare: 在这个线程准备一个Looper
    3. static prepareMainLooper/getMainLooper
    4. static loop: 无限循环(可能因为mQueue.next而阻塞)处理信息
    5. static myLooper/myQueue: 获取该线程的Looper/该Looper的MessageQueue
    7. isCurrentThread/getThread/getQueue
    8. quit/quitSafely: 停止loop
4. Handler: 
    1. 成员变量: 
        1. static Handler MAIN_THREAD_HANDLER
    2. interface Callback(boolean handleMessage(Message msg))/class MessengerImpl
    3. should be override: handleMessage(msg)
    4. 构造函数: Handler([Looper], [Callback], [boolean_async])/static createAsync(Looper[, Callback])/static getMain/static mainIfNull
    5. 创建Message: obtainMessage([int what, [int arg1, int arg2], [Object obj]])
    6. 放入: post(Runnable)/postAtTime(Runnable, [Object token], uptimeMillis)/postDelayed(Runnable, [Object token], delayMillis)/postAtFrontOfQueue(Runnable)
    7. 清除: removeCallbacks(r, [token])/removeMessages(what, [obj])/removeCallbacksAndMessages(token)
    8. 查询: hasCallbacks(r)/hasMessages(what, [obj])/hasMessagesOrCallbacks
    9. 发送: sendMessage(msg)/sendMessageDelayed(msg, delayMillis)/sendMessageAtTime(msg, uptimeMillis)/sendEmptyMessage(what)/sendEmptyMessageDelayed(what, delayMillis)/sendEmptyMessageAtTime(what, uptimeMillis)/sendMessageAtFrontOfQueue(msg)/
    10. 执行或...: executeOrSendMessage(msg)
    11. getLooper/getIMessenger/dump(Printer, String_prefix)/dumpMine(Printer, String_prefix)
    12. private static getPostMessage(r, [token])/handleCallback(msg)
    13. dispatchMessage: 
        1. 如果传入的msg带有callback，则立刻执行msg.callback.run
        2. 如果mCallback不为空，则立刻执行mCallback.handleMessage(msg)
        3. 否则执行重写的handleMessange(msg)
5. HandlerThread: 
    1. 变量: int mPriority/int mTid/Looper mLooper/Handler mHandler
    2. 构造函数: HandlerThread(name, [priority])
    3. should be override: onLooperPrepared
    4. run: Looper.prepare/mlooper=Looper.myLooper/Looper.loop
    5. getLooper/getThreadHandler/quit/quitSafely/getThreadId
6. AsyncTask: 
    1. 成员变量: 
        1. private static final int: CPU_COUNT/CORE_POOL_SIZE/MAXIMUM_POOL_SIZE/KEEP_ALIVE_SECONDS
        2. private static final ThreadFactory sThreadFactory
        3. private static final BlockingQueue<Runnable> sPoolWorkQueue = new LinkedBlockingQueue<Runnable>(128)
        4. public/private static final Executor: THREAD_POOL_EXECUTOR/SERIAL_EXECUTOR/sDefaultExecutor: 注意默认串行，串行其实是调用并行的executor来执行的
        5. private static InternalHandler sHandler(初始化后是Looper.getMainLooper的)
        6. private final WorkerRunnable<Params, Result> mWorker: 是一个带有Params[]的Callback，是工作线程，而不是UI线程
        7. private final FutureTask<Result> mFuture: 执行mWorker的结果
        8. private final AtomicBoolean: mCancelled/mTaskInvoked
        9. private final Handler mHandler: 如果没有传入Looper或者传入null的或者传入非MainLooper的Looper，则是new Handler(传入的Looper)，否则是getMainLooper
    2. Status:
        1. PENDING: 执行前
        2. RUNNING: 执行中
        3. FINISHED: onPostExecute完成
        4. AsyncTaskInstance.getStatus
    3. 构造函数: AsyncTask([Handler(根据这个Handler来获取Looper而已)/Looper])
    4. doInBackground/onPreExecute/onPostExecute/onProgressUpdate/onCancelled
    5. isCancelled/cancel(boolean_mayInterruptIfRunning)/get/get(long_timeout, TimeUnit_unit)
    6. 执行: 
        1. execute(Params... params): 使用默认的static串行Exector来执行
        2. executeOnExecutor(Executor, Params...): 可以使用static的并行THREAD_POOL_EXECUTOR来执行，也可以传入别的Exector
        3. execute(Runnable): 使用默认的串行线程池来执行Runnable
    7. class InternalHandler/AsyncTaskResult/WorkerRunnable
7. runOnUiThread: Thread.currentThread() != mUiThread ? mHandler.post(r) : r.run()

### end

"android 控件.md" "android 布局.md" "android 资源类型详解.md" "android 架构组件学习.md" "android appwidget.md" "android media.md" "android OkHttp_NoHttp_Retrofit_.md" "android Glide_Fresco_Picasso.md" "android RxJava_RxAndroid_EventBus.md" 