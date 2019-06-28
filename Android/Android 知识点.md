<!-- GFM-TOC -->
* [Android 基础知识](###Android%20基础知识)
* [Android 基础知识2](###Android%20基础知识2)
* [Android 基础知识3](###Android%20基础知识3)
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
* [Android 系统启动](###Android%20系统启动) 未完成
* [Android 消息](###Android%20消息) 未完成
* [Android 数据存储](###Android%20数据存储) 未完成
* [Android ORM](###Android%20ORM) 未完成
* [Android 事件响应](###Android%20事件响应) 未完成
* [Android 函数响应式](###Android%20函数响应式) 未完成
* [Android 网络请求](###Android%20网络请求)
* [Android 网络请求2](###Android%20网络请求2) 未完成
* [Android 网络请求3](###Android%20网络请求3) 未完成
* [Android 图片请求](###Android%20图片请求) 未完成
* [Android 消息通知](###Android%20消息通知) 未完成
* [Android 视频音频](###Android%20视频音频) 未完成
* [Android 依赖注入](###Android%20依赖注入) 未完成
* [Android 动画](###Android%20动画) 未完成
* [Android Drawable](###Android%20Drawable) 未完成
* [Android 自定义View](###Android%20自定义View) 未完成
* [Android 性能优化](###Android%20性能优化)
* [Android 内存泄露](###Android%20内存泄露)
* [Android 安全漏洞](###Android%20安全漏洞) 未完成
* [Android 源码阅读](###Android%20源码阅读)
* [Android Android NDK 与 Java JNI](###Android%20Android%20NDK%20与%20Java%20JNI)
* [Android Support Annotation Library](###Android%20Support%20Annotation%20Library)
* [Androidx](###Androidx)
* [Android 5678新特性](###Android%205678新特性)
* [Android 新特性](###Android%20新特性)
* [Android Groovy](###Android%20Groovy)
* [Android Glide](###Android%20Glide)
* [Android View](###Android%20View)
* [Android 综合技术](###Android%20综合技术)
<!-- GFM-TOC -->

保活后台服务(priority persistent startForeground Android系统广播Intent.action_time_tick start_sticky ondestroy中重启)
广播接收器回调的context
Android Binder

### Android 基础知识

1. **五种布局**: FrameLayout 、 LinearLayout 、 AbsoluteLayout 、 RelativeLayout 、 TableLayout 全都继承自ViewGroup，各自特点及绘制效率对比。
2. **如何判断应用被强杀**: 在Application中定义一个static常量，赋值为－1，在欢迎界面改为0，如果被强杀，application重新初始化，在父类Activity判断该常量的值。
3. **应用被强杀如何解决**: 如果在每一个Activity的onCreate里判断是否被强杀，冗余了，封装到Activity的父类中，如果被强杀，跳转回主界面，如果没有被强杀，执行Activity的初始化操作，给主界面传递intent参数，主界面会调用onNewIntent方法，在onNewIntent跳转到欢迎页面，重新来一遍流程。
4. **应用被强杀的原因**: 
    1. 按了home键、系统内存不足
    2. Android 6.0新特性中，在电源管理中新加了两个特性,导致挂在后台的应用更容易被回收: 
        1. 应用待机(App standby) -- 检测: 不充电，且没有直接或间接启动该应用; 退出: 应用激活，或设备充电时
        2. 休眠(Doze) -- 检测: 不充电，且设备静止且灭屏一段时间; 特性: 让系统进入一个休眠状态，周期性的进入一个窗口恢复正常工作，然后进入更长时间的休眠状态
4. **Json/Xml有什么优劣势**: 
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
    1. 建立一个全局容器，把所有的Activity存储起来，退出时循环遍历finish所有Activity: 这种方法比较简单，但是可以看到activityStack持有这Activity的强引用，也就是说当某个Activity异常退出时，Activity生命周期方法没有被执行，activityStack没有及时释放掉引用，就会导致内存问题。
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
    3. 耗时任务异步处理
    4. 布局文件优化 ViewStub
    5. 不可见视图需要时加载，如AnimationDrawable
    6. 应用内慎用多进程
9. **Bitmap的四种属性，与每种属性队形的大小**: <span style="color: red; font-style: bold;">???</span>
10. **View与View Group分类。自定义View过程: onMeasure()、onLayout()、onDraw()**: <span style="color: red; font-style: bold;">???</span>
11. **Android长连接，怎么处理心跳机制**: <span style="color: red; font-style: bold;">???</span>
12. **View树绘制流程**: <span style="color: red; font-style: bold;">???</span>
13. **下拉刷新实现原理**: <span style="color: red; font-style: bold;">???</span>
13. **你用过什么框架，是否看过源码，是否知道底层原理**: <span style="color: red; font-style: bold;">???</span>
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
    - Activity和Service以及Application的Context是不一样的，Activity继承自ContextThemeWraper，其他的继承自ContextWrapper
    - 每一个Activity和Service以及Application的Context都是一个新的ContextImpl对象
    - getApplication用来获取Application实例的，但是这个方法只有在Activity和Service中才能调用的到。那么在绝大多数情况下我们都是在Activity或者Service中使用Application的，
        - 但在一些其它的场景，比如BroadcastReceiver中也想获得Application的实例，这时就可以借助getApplicationContext方法，它比getApplication方法的作用域会更广一些，
        - 任何一个Context的实例，只要调用getApplicationContext()方法都可以拿到我们的Application对象。
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
18. **ListView原理与优化**: 
19. **ContentProvider实现原理**: 
20. **匿名共享内存，使用场景**: https://blog.csdn.net/goodlixueyong/article/details/53151959
    1. 什么是匿名共享内存(Ashmem)。Ashmem是一种共享内存机制，它利用Linux的mmap系统调用，将不同进程中的同一段物理内存映射到进程各自的虚拟地址空间，从而实现高效的进程间共享。
    2. 它以驱动程序的形式实现在内核空间。它有两个特点，一是能够辅助内存管理系统来有效地管理不再使用的内存块，二是它通过Binder进程间通信机制来实现进程间的内存共享。Ashmem的两个特点就是共享和高效。共享是指可以在不同进程间共享信息，高效则是因为不同进程都是直接进行的内存操作，相对于其他的进程间通信方式来讲，这种方式会更快一些。
    3. 在Android中，主要提供了**MemoryFile**这个类来供应用使用匿名共享内存。在Android应用程序框架层，提供了一个MemoryFile接口来封装了匿名共享内存文件的创建和使用，通过JNI调用底层C++方法。
    4. 使用Binder在进程间传递数据的时候，有时候会抛出TransactionTooLargeException这个异常，这个异常的产生是因为Binder驱动对内存的限制引起的。也就是说，我们不能通过Binder传递太大的数据。官方文档里有说明，最大通常限制为1M。 但是这个Binder的1M缓存是被当前进程中所有正在通过Binder传递数据的过程共享的，因此实际可用的大小要小于等于这个值。也就是说如果大于1M数据的话，就应该分开传。既然大数据不能通过Binder直接传递，我们就要想其他的办法。我们想到可以通过文件来跨进程传递数据，但是普通文件的效率太低，更优的方法是通过MemoryFile传递。
21. **Socket和LocalSocket**: 
22. **如何加载大图片**: 
    1. BitmapFactory.Options里面的inSampleSize可以压缩图片。
    2. 
23. **HttpClient和URLConnection的区别，怎么使用https**: 
24. **ListView里的ViewType机制**: https://blog.csdn.net/modurookie/article/details/80213192
25. **TextView怎么改变局部颜色(SpannableString或者HTML)**: 

### Android 基础知识2

1. **ListView**: 继承于AbsListView，依靠Adapter在数据源与它之间建立桥梁，重点是**RecycleBin机制**(实现成百上千条数据都不会OOM)
    1. RecycleBin当中使用mActiveViews这个数组来存储View，调用这个方法后就会根据传入的参数来将ListView中的指定元素存储到mActiveViews中。
    2. mActiveViews当中所存储的View，一旦被获取了之后就会从mActiveViews当中移除，下次获取同样位置的时候将会返回null，所以mActiveViews不能被重复利用。
    3. addScrapView()用于缓存一个废弃的View，该方法接收一个View，当有某个View确定要废弃掉的时候(比如滚动出了屏幕)就应该调用这个方法来对View进行缓存。
    4. RecycleBin当中使用mScrapViews和mCurrentScrap这两个List来存储废弃View。
    5. getScrapView 用于从废弃缓存中取出一个View，这些View是没有顺序可言的，因此getScrapView()方法就是直接从mCurrentScrap当中获取尾部的一个scrap view进行返回。
    6. Adapter当中可以重写一个getViewTypeCount()来表示ListView中有几种类型的数据项，而setViewTypeCount()方法的作用就是为每种类型的数据项都单独启用一个RecycleBin缓存机制。
2. **RecyclerView和ListView的异同**
    1. ViewHolder: ListView中**ViewHolder**非必须，而RecyclerView中是必需的
    2. 滚动: ListView只能垂直**滚动**，而RecyclerView可以水平或垂直滚动
    3. 动画: ListView通过ViewPropertyAnimator属性**动画**来实现动画，RecyclerView可以有动画，可以自己实现RecyclerView.ItemAnimator
    4. Adapter: ListView的**Adapter**: SimpleAdapter/ArrayAdapter/CursorAdapter/SimpleCursorAdapter，而RecyclerView.Adapter
    5. OnItemClickListener: ListView通过**AdapterView.OnItemClickListener**接口来探测点击事件。而RecyclerView则通过**RecyclerView.OnItemTouchListener**接口来探测触摸事件。它虽然增加了实现的难度，但是却给予开发人员拦截触摸事件更多的控制权限。
    6. 选择模式: ListView可以设置**选择模式**，并添加MultiChoiceModeListener，而RecyclerView没有
3. **ANR**
    1. 类型: 
        1. KeyDispatchTimeout(5 seconds) --主要是类型按键或触摸事件在特定时间内无响应
        2. BroadcastTimeout(10 seconds) --BroadcastReceiver在特定时间内无法处理完成
        3. ServiceTimeout(20 secends) --小概率事件 Service在特定的时间内无法处理完成
    2. 示例: 
        1. 主线程 ("事件处理线程" / "UI线程") 在5秒内没有响应输入事件
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
        3. 使用新线程执行耗时操作，然后使用runOnUiThread(Runnable)来执行更新
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
8. **第一次调用setContentView方法为例总结一下整体的流程。**
    1. 第一次调用setContentView()方法时会去创建一个DecorView，这就是整个窗口的根布局。
    2. 接着回去根据我们设置的对应主题，来加载与之对应的布局文件并将其添加到DecorView中，然后找到该布局中id=content的ViewGroup赋值给mContentParent。
    3. 将我们要设置的Activity对应的布局添加到mContentParent中。
9. **非UI线程是可以跟新UI的，当ViewRoot没有被实例化之前子线程是可以直接更新UI的，这是我的理解，只不过不建议这么做。**???
10. **volatile与synchronized**: 
	- 原理: volatile本质是在告诉jvm当前变量在寄存器(工作内存)中的值是不确定的，需要从主存中读取；synchronized则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。
	- 范围: volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的
	- 原子性: volatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见性和原子性
	- 阻塞: volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。
	- 优化: volatile标记的变量不会被编译器优化；synchronized标记的变量可以被编译器优化
    - volatile原理:
        1. 保证可见性，不保证原子性(当写一个volatile变量时，JMM会把该线程本地内存中的变量强制刷新到主内存中去；这个写会操作会导致其他线程中的缓存无效)
        2. 禁止指令重排(重排序操作不会对存在数据依赖关系的操作进行重排序；)
    - 复合操作: 而且volatile还不适合复合操作，当出现volatile修饰的变量最终的值依赖自身时，可能有并发问题，如多个线程调用volatile_num++这种，可以由读取、加、赋值3步组成。即它不具备操作的原子性。
11. 单例模式的双重锁为什么要加volatile: https://blog.csdn.net/u012723673/article/details/80682208
    - ...
12. App启动过程: https://www.jianshu.com/p/dab1fcf0109d
13. **HttpClient与HttpUrlConnection的区别**: https://www.jianshu.com/p/a32d6980227b https://blog.csdn.net/amosjob/article/details/82782546
    1. 来源: 
        1. HttpClient是Apache公司提供的库，提供高效的、最新的、功能丰富的支持HTTP协议工具包，支持HTTP协议最新的版本和建议，是个很不错的开源框架，封装了Http的请求，参数，内容体，响应等，拥有众多API；
        2. HttpUrlConnection是Sun公司提供的库，也是Java的标准类库java.net中的一员，但这个类什么都没封装，用起来很原始，若需要高级功能，则会显得不太方便，比如重访问的自定义，会话和cookie等一些高级功能。
    2. 功能上: 
        1. Http Client适用于web浏览器，拥有大量灵活的API，实现起来比较稳定，且其功能比较丰富，提供了很多工具，封装了http的请求头，参数，内容体，响应，还有一些高级功能，代理、COOKIE、鉴权、压缩、连接池的处理。但是，正因此，在不破坏兼容性的前提下，其庞大的API也使人难以改进，因此Android团队对于修改优化Apache Http Client并不积极。(并在Android 6.0中抛弃了Http Client，替换成OkHttp)。
        2. HttpURLConnection对于大部分功能都进行了包装，Http Client的高级功能代码会较复杂，另外，HttpURLConnection在Android 2.3中增加了一些Https方面的改进(包括Http Client，两者都支持https)。且在Android 4.0中增加了response cache。
    3. 性能上: https://wj98127.iteye.com/blog/617014
        1. HttpURLConnection直接支持GZIP压缩，默认添加"Accept-Encoding: gzip"头字段到请求中，并处理相应的回应，而Http Client虽然支持，但需要自己写代码处理。但在2.3中，由于Http的Content-Length头字段返回的是压缩后的大小，直接使用getContentLength()方法得到的数据大小是错误的，应该使用InputStream.read()直到返回值是-1为止。
        2. HttpURLConnection直接在系统层面做了缓存策略处理(Android 4.0以上)，Http请求将在以下三种中选择: 
            1. 完全的cache的response将直接从本地存储中获取。因为不需要网络连接，此类response可以立即得到。
            2. 有条件cache的response必须在Web服务器验证一下cache的有效性。客户端发送一个请求，比如“如果/foo.png从昨天起有变化则给我新的图片” , 服务端的response要么是更新后的内容，要么是304没有修改状态码。如果内容是没有改变的，就不需要下载了。
            3. 没有cache的response将从服务器上获取。得到这些response之后会存储到cache以便将来使用。
    4. 选择: 
        1. HttpURLConnect是一个通用的、适合大多数应用的轻量级组件。这个类起步比较晚，很容易在主要API上做稳步的改善。但是HttpURLConnection在在Android 2.2及以下版本上存在一些令人厌烦的bug，尤其是在读取 InputStream时调用 close()方法，就有可能会导致连接池失效了。
        2. 因此，在2.2之前的版本，Http Client会是一个比较好的选择，而自2.3起，HttpURLConnection将是最佳选择，其API简单，小巧，非常适合于Android。透明的压缩及response cache减少了网络流量，改进了网络速度，也就更省电。
14. java虚拟机和Dalvik虚拟机的区别: 
15. java垃圾回收机制: https://blog.csdn.net/justloveyou_/article/details/71216049
16. JVM内存模型解析: https://blog.csdn.net/justloveyou_/article/details/71189093
17. 关于URL.openConnection()得到的连接对象问题: https://blog.csdn.net/yzpbright/article/details/51099623
    1. URL底层是使用流协议处理程序和流协议处理程序工厂实现找到某协议对应的正确的HttpURLConnection的子类的。
        1. 创建HttpURLConnection的子类: HttpURLConnectionImpl
        2. 创建流协议处理程序: HttpURLStreamHandler
        3. 可以继续创建https协议的HttpURLConnection实现类: HttpsURLConnectionImpl 和 流处理程序:HttpsURLStreamHandler
        4. 创建流协议处理程序工厂: URLStreamHandlerFactoryImpl
        5. 在程序启动时，设置URL类的流协议处理程序工厂: URL.setURLStreamHandlerFactory(new URLStreamHandlerFactoryImpl());
18. **ListView使用过程中是否可以调用addView**: 不能，因为？？？
19. **Application类的作用**: https://www.jianshu.com/p/b0dee36af8d0
    1. 初始化资源
    2. 数据共享
    3. 监听App所处状态，锁屏开屏，退到后台回到前台，手机内存状态，横竖屏切换，Activity的生命周期，退出应用(不稳定)，这些都可以通过Application监听。
20. **广播注册后不解除注册会有什么问题？**: 内存泄露，因为AMS等系统服务、管理器还持有广播的引用，所以不解除注册，广播是无法回收的，而且还会持有Activity，造成更大的内存泄露。
21. **属性动画(Property Animation)和补间动画(Tween Animation)的区别，为什么在3.0之后引入属性动画**: 因为[调用简单](http://android-developers.blogspot.com/2011/05/introducing-viewpropertyanimator.html)，所以引入 ？？？
22. **有没有使用过EventBus或者Otto框架，主要用来解决什么问题，内部原理**: 
23. **设计一个网络请求框架(可以参考Volley框架)**: 
24. **网络图片加载框架(可以参考BitmapFun)**: 
25. **Android里的LRU算法原理**: 使用ListHashMap实现的。

### Android 基础知识3

1. **解决android应用被强杀或应用被回收导致的空指针问题**: https://blog.csdn.net/lvzishen123/article/details/51519451
2. **onSaveInstanceState**相关: 
    - 任何使得activity变为StoppedState，大部分会调用onSaveInstanceState。
    - 按了back或者调用finish导致的StoppedState，是不掉onSaveInstanceState，因为activity马上要销毁了，根本不需要恢复。
    - 其他情况导致activity变为StoppedState都会调用onSaveInstanceState，如切换到其他activity，home，锁屏，旋转等等。该方法的调用频率远远高于onRestoreInstanceState
    - onsaveinstance回调是在onpause之前，在Api11之后调整到了opause之后onstop之前
    - 在onStart之后，onResume之前会调用一个onRestoreInstanceState，如果之前调用了onSaveInstanceState
    - 序列化尽量使用Parcelable而不是Serializable，后者速度不如前者，而且可能会导致ClassNotFound
    - onSaveInstanceState建议只用来恢复activity用，别把数据存储什么的放到这里来，数据存储可以放到onPause里，最好开线程保存。
3. **前台进程永远不存在activity被回收的情况。如果内存不足了，宁愿抛出OOM**
4. **activity恢复原则**: 
    1. 单个activity:
        1. 在创建时: onCreate -> onStart -> onResume
        2. 点home键: onPause -> onSaveInstanceState -> onStop
        3. 进程被杀死，很暴力的，不会有任何生命周期函数被调用
        4. 从最近程序列表中打开刚才的进程，进程会再次启动，activity会恢复: onCreate -> onStart -> onRestoreInstanceState -> onResume
        5. 从activity1跳到activity2时: 1onPause -> 2onCreate -> 2onStart -> 2onResume -> 1onSaveInstanceState -> 1onStop
    2. 多个activity: 
        1. 多个activity的进程被回收时，重启后只会恢复栈顶的activity，但是栈是恢复了的，在按backspace之后，会创建activity实例。
        2. 如我们现在有MainActivity、SecondActivity、ThirdActivity三个activity，然后进程被回收，然后用户从最近列表点击，导致进程重启，activity恢复，第一步是恢复activity ThirdActivity(栈顶的): 3onCreate hasInstanceState=True -> 3onStart -> 3onRestoreInstanceState -> 4onResume
        3. 此时只有activity3，1，2都没有。但是activity record里是有记录的，用adb shell dumpsys activity activities可以看到相关记录。可以看到此时ThirdActivity的state是RESUMED，而MainActivity、SecondActivity的state为DESTYOYED。
        4. 此时点击back，会导致ThirdActivity结束，退回到SecondActivity，但是此时SecondActivity的实例都没有，所以会重新创建并恢复SecondActivity: 3onPause -> 2onCreate hasInstanceState=True -> 2onStart -> 2onRestoreInstance -> 2onResume -> 3onSaveInstanceState -> 3onStop -> 3onDestroy
        5. 同理，在点击back，会导致MainActivity被恢复: 2onPause -> 1onCreate hasInstanceState=True -> 1onStart -> 1onRestoreInstanceState -> 1onResume -> 2onSaveInstanceState -> 2onStop -> 2onDestroy
    3. **进程回收之后，再从历史程序里点击的时候，进程会重启，然后只恢复栈顶的activity，其他栈内的activity只有在需要的时候被恢复**
    4. 刚才我们说的是由于系统内存不足而回收进程，导致进程死亡的，但是实际上导致进程死亡的还有崩溃(比如空指针)，ddms杀进程。这2种方式杀进程之后的恢复和回收进程的不太一样。
        1. 因为这2种方式导致进程死亡，此时进程一般是前台进程，前台进程死亡，然后恢复并不会恢复栈顶activity，而是恢复栈顶前面的那个activity。
        2. 如果是崩溃导致进程死亡，那崩溃发生在栈顶的那个activity，此activity根本没调用 onSaveInstanceState，那怎么恢复？没法恢复，只能恢复上一个activity。
        3. **前台进程死亡后恢复，恢复的是当前显示的activity的上一个activity，记住activity要想被恢复，必须是经历过onSaveInstanceState的activity**。
5. **SharedPreference.Editor的apply和commit方法异同**
    1. apply没有返回值而commit返回boolean表明修改是否提交成功
    2. apply是将修改数据原子提交到内存, 而后异步真正提交到硬件磁盘, 而commit是同步的提交到硬件磁盘，因此，在多个并发的提交commit的时候，他们会等待正在处理的commit保存到磁盘后在操作，从而降低了效率。而apply只是原子的提交到内容，后面有调用apply的函数的将会直接覆盖前面的内存数据，这样从一定程度上提高了很多效率。 
    3. apply方法不会提示任何失败的提示。
    4. 由于在一个进程中，sharedPreference是单实例，一般不会出现并发冲突，如果对提交的结果不关心的话，建议使用apply，当然需要确保提交成功且有后续操作的话，还是需要用commit的。
6. **android应用检测anr的方法**: https://www.sohu.com/a/220647552_741445 https://www.jianshu.com/p/8ae173c9fb08
    1. **开启线程给ui线程发送一个带有计数器的message**，并且在这个message中让计数器+1(使用Runnable来作为message)，保存上一次计数器。线程休眠5秒。如果两次计数器的值不想等，则没有阻塞。如果相等主线程阻塞。但是，为了检测界面，不能每一个activity，或者fragment都开启一个访问ui的线程吧。后来，了解到service也同属于ui线程。可以开启service后台服务，然后访问ui线程，采用上面的方法来探测anr产生。
        ```java
        public class ANRService extends Service {
            // ...
            @Override
            public void onCreate() {
                super.onCreate();
                Log.e("gac","ANRService");
                exception();
            }
            private int lasttick, mTick;// 两次计数器的值
            private Handler mHandler = new Handler();
            private boolean flag = true;
            private void exception() {
                new Thread(new Runnable() {
                    @Override
                    public void run() {
                        while(flag){
                            lasttick = mTick;
                            mHandler.post(tickerRunnable);// 向主线程发送消息 计数器值+1
                            try {
                                Thread.sleep(5000);
                            } catch (InterruptedException e) {
                                e.printStackTrace();
                            }
                            if(mTick == lasttick) {
                                flag = false;
                                Log.e("gac","anr happned in here");
                                handleAnrError();
                            }
                        }
                    }
                }).start();
            }
            // 发生anr的时候，在此处写逻辑
            private void handleAnrError() {}
            private final Runnable tickerRunnable = new Runnable() {
                @Override public void run() {
                    mTick = (mTick + 1) % 10;
                }
            };
        }
        ```
    2. 有ANR的流程就可以知道/data/anr文件夹的变化代表着ANR的发生，AMS在dumpStackTrace方法中给了我们一些提示。按照这个思路，当ANR发生的时候，我们是可以通过监听该文件的写入情况来判断是否发生了ANR，看起来这是一个不错的时机。需要注意的是，所有应用发生ANR的时候都会进行回调，因此需要做一些过滤与判断，如包名、进程号等。5.0以后基本已经使低权限应用无法监听到**trace文件**了。
    3. **BlockCanary**是国内开发者markzhai开发的一款非侵入式的轻量性能监控组件，原理巧妙的利用了Android原生Looper.loop中的一个log打印逻辑。这个log打印逻辑正是在Message消息分发前后，大部分的性能卡顿问题都是在这里发生的，监控这两个逻辑之间的时间差就可以得到当前主线程的卡顿状态，如果超时则获取trace信息并上报。
    4. **SafeLooper**是个比较新奇的思路，本身就是一个堵塞的消息，在自己内部进行消息的处理，通过反射接管主线程Looper的功能。此方案使用反射进行message管理会有很大的性能损耗，但可以自由定制。
7. **android检测oom的方法**: 
    1. 堆内存溢出: 查看报的是什么错误，查看出错的代码位置。 java.lang.OutOfMemoryError: Java heap space
    2. 方法区溢出: java.lang.OutOfMemoryError: PermGen space
    3. 栈溢出(虚拟机栈、本地方法栈): java.lang.StackOverflowError
    4. 本地直接内存溢出(就是内存不足): 直接内存可以通过 -XX: MaxDirectMemorySize 指定。如果本地直接内存溢出，我们可以发现堆转储快照中无明显异常指示，并且快照文件很小，而程序中又使用了NIO等技术，则可以检查是否直接内存溢出了。
8. **如何防止oom**: 
    1. 合理使用weekReference/softReference
    2. 记得释放申请的资源
    3. 优化算法
    4. 尽量少使用非静态且与外部类生命周期不一致的内部类
    5. 尽量循环回收资源，如message.obtain，使用线程池，viewholder等
    6. 使用viewstub等来替代还不需要显示的view
    7. 申请更多的内存
    8. 小心单例模式与static属性等
9. **Android跨应用调用组件与Uid机制**:
    1. ActivityA启动ActivityB有显式和隐式两种，都有可能引发NoFoundException与Permission Denied。特别是跨应用调用时，也许什么Exception都不会得到，也可能直接Force Close掉。
    2. startActivity时的permission检验(只要满足一条): 
        1. 同一个application下
        2. uid相同
        3. permission匹配
        4. 目标Activity的android:exported="true"
        5. 目标Activity具有相应的IntentFilter，存在Action动作或其他过滤器并且没有设置exported=false
        6. 启动者的Pid是一个系统服务(System Server)的Pid【也就是系统服务前来调用普通App的Activity等】
        7. 启动者的Uid是一个System Uid(Android规定android.system.uid=1000，具有该Uid的application，我们称之为获得Root权限)
    3. Pid表示进程id，Uid表示用户id，只是Android和计算机不一样，计算机每个用户都具有一个Uid，哪个用户start的程序，这个程序的Uid就是那个那个用户，而Android中每个程序都有一个Uid，默认情况下，Android会给每个程序分配一个普通级别互不相同的Uid。如果用互相调用，只能是Uid相同才行，这就使得共享数据具有了一定安全性，每个软件之间是不能随意获得数据的。而同一个application只有一个Uid，所以application下的Activity之间不存在访问权限的问题。让你的App将它里面含有的某些activity、service、provider等的数据进行共享
        1. 完全暴露: android:exported="true"(设置了intent-filter后默认为true)
        2. 权限提示暴露: B中android:permission="xxx.xxx"，A中uses-permission="xxx.xxx"。
        3. 私有暴露: 设置相同的sharedUserId，让两个apk使用相同的userID，这样它们就可以看到对方的文件。为了节省资源，具有相同ID的apk也可以在相同的linux进程中进行(注意，并不是一定要在一个进程里面运行)，共享一个虚拟机。android:sharedUserId="com.abc.share"。
10. **Android屏幕适配**:
    1. [【Android】不写一句代码解决屏幕适配问题](https://www.jianshu.com/p/21eadaf65207)
    2. [Android屏幕适配方案(出自今日头条)](https://www.jianshu.com/p/1eeb0d8d1c86)
11. **getWidth()和getMeasuredWidth()之间的区别**: getMeasuredWidth()获取的是view原始的大小，也就是这个view在XML文件中配置或者是代码中设置的大小。getWidth()获取的是这个view最终显示的大小，这个大小有可能等于原始的大小也有可能不等于原始大小。
12. **pendingIntent与intent**: 
    1. **概念**:
        1. 一种特殊的Intent，Intent的执行是立刻的，而pendingIntent的执行不是立刻的。pendingIntent执行的操作实质上是参数传进来的Intent的操作，但是使用pendingIntent的目的在于它所包含的Intent的操作的执行是需要满足某些条件的。
        2. 主要的使用的地方和例子: 通知Notification的发送，AppWidget的更新，短消息SmsManager的发送和警报器AlarmManager的执行等等。
        3. 由于pendingintent中保存有当前App的Context，使它赋予外部App一种能力，使得外部App可以如同当前App一样的执行pendingintent里的Intent，就算在执行时当前App已经不存在了，也能通过存在pendingintent里的Context照样执行Intent。
    2. **创建**: 
        - pendingIntent1 = PendingIntent.getActivity(context, int requestCode, intent, int flags); 跳转到一个activity组件
        - pendingIntent2 = PendingIntent.getBroadcast(context, int, intent, int); 打开一个广播组件
        - pendingIntent3 = PendingIntent.getService(context, int, intent, int); 打开一个服务组件
    3. **注意**:
        1. 当你把PendingIntent递交给别的程序进行处理时,PendingIntent仍然拥有PendingIntent原程序所拥有的权限。当你从系统取得一个PendingIntent时，一定要非常小心才行。比如，通常，如果Intent目的地是你自己的component(Activity/Service/BroadcastReceiver)的话，你最好采用在Intent中显示指定目的component名字的方式，以确保Intent最终能发到目的，否则Intent最后可能不知道发到哪里了。一个PendingIntent就是Android系统中的一个token(节点，这个应该是Linux或C\C++用语)的一个对象引用，它描述了一些将用于retrieve的数据(这里，这些数据描述了Intent及其最终的行为)。
        2. 这就意味着即使PendingIntent原进程结束了的话, PendingIntent本身仍然还存在，可在其他进程(PendingIntent被递交到的其他程序)中继续使用。如果我在从系统中提取一个PendingIntent的，而系统中有一个和你描述的PendingIntent对等的PendingInent, 那么系统会直接返回和该PendingIntent其实是同一token的PendingIntent，而不是一个新的token和PendingIntent。然而你在从提取PendingIntent时，通过*FLAG_CANCEL_CURRENT*参数，让这个老PendingIntent的先cancel()掉，这样得到的pendingInten和其token的就是新的了。
        3. 通过*FLAG_UPDATE_CURRENT*参数的话，可以让新的Intent会更新之前PendingIntent中的Intent对象数据，例如更新Intent中的Extras。另外，我们也可以在PendingIntent的原进程中调用PendingIntent的cancel()把其从系统中移除掉。
    4. **主要常量**: 
        1. FLAG_CANCEL_CURRENT: 如果当前系统中已经存在一个相同的PendingIntent对象，那么就将先将已有的PendingIntent取消，然后重新生成一个PendingIntent对象。
        2. FLAG_NO_CREATE: 如果当前系统中不存在相同的PendingIntent对象，系统将不会创建该PendingIntent对象而是直接返回null。
        3. FLAG_ONE_SHOT: 该PendingIntent只作用一次。在该PendingIntent对象通过send()方法触发过后，PendingIntent将自动调用cancel()进行销毁，那么如果你再调用send()方法的话，系统将会返回一个SendIntentException。
        4. FLAG_UPDATE_CURRENT: 如果系统中有一个和你描述的PendingIntent对等的PendingInent，那么系统将使用该PendingIntent对象，但是会使用新的Intent来更新之前PendingIntent中的Intent对象数据，例如更新Intent中的Extras。
    5. **相同**
        1. 如果两个PendingIntent他们内部的Intent相同并且requestCode也相同，那么这两个PendingIntent就是相同的。
        2. 如果两个Intent的ComponentName和intent-filter都相同；那么这两个Intent也是相同的。
13. **Android Vituls**
14. **Android 控件显示在最上层的方法**: 
    1. 在XML文件中，可以使用FramLayout或RelativeLayout来布局，每个控件都是覆盖显示的，后加进来的控件覆盖前面的控件。可以把控件写在最后，从而实现显示在最上层的效果。
    2. view.bringToFront() 可以将布局在下层的控件放到上层，不被其他控件挡住。
15. **Android中build target，minSdkVersion，targetSdkVersion，maxSdkVersion概念区分** https://blog.csdn.net/zhangjg_blog/article/details/17142395 https://chinagdg.org/2016/01/picking-your-compilesdkversion-minsdkversion-targetsdkversion/
    1. **api level** : android的系统版本和API level之间并不是一一对应的，比如Android 2.3， Android 2.3.1， Android 2.3.2对应API level 9， 而Android 2.3.3， Android 2.3.4对应API level 10。API level是Android向开发者提供的一套Framework(android.jar)的代号，可能发布了新的系统版本，但是这一套接口并没有变化，所以就不必提供新的Framework开发包，所以API level也不必改变。由此可知Android系统版本和API level是多对一的关系。由于API level就是发布的android.jar(一套接口)的代号，所以API level和sdk中platforms目录中的各个android.jar是一一对应的。说白了，**Android系统版本是给Android用户看的，而API level是给应用程序开发者看的**。 https://developer.android.com/guide/topics/manifest/uses-sdk-element.html#provisional
    2. **build target** : build target并不存在于manifest文件中，而是存在于项目根目录中的project.properties文件中。如果使用Eclipse构建项目的话，那么每个项目的根目录下都会有一个project.properties文件，这个文件中的内容用于告诉构建系统，怎样构建这个项目。打开这个文件，除了注释之外，还有以下一行：``target=android-18``。每当修改了build target，就会将另一个android.jar加入到build path中替换原来的jar。一般情况下，应该使用最新的API level作为build target。这也是eclipse生成项目时的默认行为。
    3. **android:minSdkVersion** : 指明应用程序运行所需的最小API level。如果不指明的话，默认是1。也就是说该应用兼容所有的android版本。我们应该总是声明这个属性。如果系统的API level低于android:minSdkVersion设定的值，那么android系统会阻止用户安装这个应用。如果指明了这个属性，并且在项目中使用了高于这个API level的API， 那么会在编译时报错。将build target设为最新的android-19，那么就会使用最新的android-19下的android.jar来编译项目。将minSdkVersion设置为8。在使用的android.jar中，肯定会有和ActionBar相关的API， 但是在项目中调用ActionBar API， 项目会报错。因为minSdkVersion指明的API level 8中不存在ActionBar相关的API。如果没有设置minSdkVersion这个属性，那么默认是1。表明程序兼容所有的Android系统，能够在所有Android系统上运行。
    4. **android:targetSdkVersion** : 标明应用程序目标API Level的一个整数。如果不设置，默认值和minSdkVersion相同。这个属性通知系统，你已经针对这个指定的目标版本测试过你的程序，系统不必再使用兼容模式来让你的应用程序向前兼容这个目标版本。应用程序仍然能在低于targetSdkVersion的系统上运行。由于Android不断向着更新的版本进化，一些行为甚至是外观可能会改变。然而，如果平台的API Level高于你的应用程序中的targetSdkVersion属性指定的值，系统会开启兼容行为来确保你的应用程序继续以期望的形式来运行。你可以通过指定targetSdkVersion来匹配运行程序的平台的 API level来禁用这种兼容性行为。举例来说，设置这个值为11或更高，当你的应用运行在Android3.0或更高的系统上时，系统会为你的应用使用新的默认主题(Holo主题)，并且当运行在大屏幕的设备上时会禁用屏幕兼容模式(screen compatibility mode)，因为支持了 API level 11就暗示了支持大屏幕。为了让你的应用程序支持每个Android版本，你应当提高targetSdkVersion的值到最新的API level，然后在对应的平台上彻底的测试你的应用。从上面的论述可知，targetSdkVersion这个属性是在程序运行时期起作用的，系统根据这个属性决定要不要以兼容模式运行这个程序。
    5. **android:maxSdkVersion** : 标明可以运行你的应用的最高API Level版本。在Android1.5，1.6，2.0 和2.0.1，在安装应用或系统升级时，系统会检查这个值。在这两种情况下，如果应用设置的maxSdkVersion 值低于系统本身使用的API Level，系统将不会允许安装该应用。在系统升级后，新系统会重新校验这个值，如果新系统的API Level高于这个值，新系统会删除你的应用。在高于2.0.1的系统上，安装应用时不会再检验应用中设置的maxSdkVersion值，在系统升级后也不会重新校验这个值。但是在向用户展示可用的应用时，Google Play会继续使用这个属性进行过滤。**maxSdkVersion这个属性本来是在程序安装时和系统升级后起作用的。但是根据官方文档中的说明， 已经不再推荐使用这个属性**。
    6. **向前兼容**是 Android 非常关注的事情。用户在升级到新版 Android 的时候，用以前版本的 SDK 构建的现有应用应该不会出问题。这就是 compileSdkVersion, minSdkVersion 和 targetSdkVersion 的作用：他们分别控制可以使用哪些 API ，要求的 API 级别是什么，以及应用的兼容模式。
    7. **compileSdkVersion** : compileSdkVersion 告诉 Gradle 用哪个 Android SDK 版本编译你的应用。使用任何新添加的 API 就需要使用对应 Level 的 Android SDK。需要强调的是修改 compileSdkVersion 不会改变运行时的行为。当你修改了 compileSdkVersion 的时候，可能会出现新的编译警告、编译错误，但新的 compileSdkVersion 不会被包含到 APK 中：它纯粹只是在编译的时候使用。（你真的应该修复这些警告，他们的出现一定是有原因的）。因此我们强烈推荐总是使用最新的 SDK 进行编译。在现有代码上使用新的编译检查可以获得很多好处，避免新弃用的 API ，并且为使用新的 API 做好准备。注意，如果使用 Support Library ，那么使用最新发布的 Support Library 就需要使用最新的 SDK 编译。例如，要使用 23.1.1 版本的 Support Library ，compileSdkVersion 就必需至少是 23 （大版本号要一致！）。通常，新版的 Support Library 随着新的系统版本而发布，它为系统新增加的 API 和新特性提供兼容性支持。
    8. minSdkVersion 和 targetSdkVersion 与 compileSdkVersion 的另一个不同之处是它们会被包含进最终的 APK 文件中，如果你查看生成的 AndroidManifest.xml 文件，你会看到类似下面这样的标签：``<uses-sdk android:targetSdkVersion="23" android:minSdkVersion="7" />``。如果你在 manifest 文件中手工设置，你会发现 Gradle 在构建时会忽略它们（尽管其它构建系统可能会明确依赖它们）。**注意**: ``minSdkVersion <= targetSdkVersion <= compileSdkVersion``。理想上，在稳定状态下三者的关系应该更像这样：``minSdkVersion (lowest possible) <= targetSdkVersion == compileSdkVersion (latest SDK)``。用较低的 minSdkVersion 来覆盖最大的人群，用最新的 SDK 设置 target 和 compile 来获得最好的外观和行为。
16. **awesome adb** https://blog.csdn.net/u010610691/article/details/77663770
17. **Instant run** https://www.jianshu.com/p/2e23ba9ff14b
18. **android 签名** 

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
    2. Parcelables 与 Bundle: 旨在跨进程使用，性能比Serializable好
        1. class T implements Parcelable
        2. public static final Parcelable.Creator CREATOR = new Parcelable.Creator() { public T createFromParcel(Parcel in){} public T[] newArray(int size) {} }
        3. public void writeToParcel(Parcel dest, int flags) {} 与 private void readFromParcel(Parcel in) {} 与 public T(Parcel in) { readFromParcel(in); }

### Android Service

1. **概念**: Android程序中四大基础组件之一，它和Activity一样都是Context的子类，只不过它没有UI界面，是在后台运行的组件。
2. **生命周期**: Service对象不能自己启动，需要通过某个Activity、Service或者其他Context对象来启动。
    1. Context.startService: 启动时 startService->onCreate->onStart->onStartCommand 停止时 stopService->onDestroy
    2. Context.bindService: 绑定时 bindService->onCreate->onBind 解绑定时 unbindService->onUnBind->onDestroy
3. **Service与Thread**: Service也是运行在主线程的，不可以在Service中执行耗时操作，如果需要下载等耗时操作，仍需要在Service中开启新线程去执行。
4. **重要方法**:
    1. ``onStartCommand``: 当另一个组件通过调用startService()请求启动服务时，系统将调用此方法。一旦执行此方法，服务即会启动并可在后台无限期运行。在服务工作完成后，需要调用stopSelf()或stopService()来停止服务。onStartCommand()方法必须返回整型数的值，用于描述系统应该如何在服务终止的情况下继续运行服务:
        - START_NOT_STICKY: 在运行onStartCommand后service进程被kill后，并且没有新的intent传递给它。Service将移出开始状态，并且直到新的明显的方法(startService)调用才重新创建。因为如果没有传递任何未决定的intent那么service是不会启动，也就是期间onstartCommand不会接收到任何null的intent。
        - START_STICKY: 在运行onStartCommand后service进程被kill后，那将保留在开始状态，但是不保留那些传入的intent。不久后service就会再次尝试重新创建，因为保留在开始状态，在创建service后将保证调用onstartCommand。如果没有传递任何开始命令给service，那将获取到null的intent。
        - START_REDELIVER_INTENT: 在运行onStartCommand后service进程被kill后，系统将会再次启动service，并传入最后一个intent给onstartCommand。直到调用stopSelf(int)才停止传递intent。如果在被kill后还有未处理好的intent，那被kill后服务还是会自动启动。因此onstartCommand不会接收到任何null的intent。
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
    2. android:persistent="true" 把service写成系统服务，将不会被回收。这种应用会顽固地运行于系统之中，从系统一启动，一直到系统关机，很耗费资源，不推荐。
    3. 将服务改成前台服务foreground service: 重写onStartCommand，使用startForeground(int, Notification)方法来启动service。
        同时，对于通过startForeground启动的service，onDestory方法中需要通过stopForeground(true)来取消前台运行状态。
    4. 利用Android的系统广播: 利用ANDROID的系统广播检查Service的运行状态，如果被杀掉，就再起来，系统广播是Intent.ACTION_TIME_TICK，这个广播每分钟发送一次，
        我们可以每分钟检查一次Service的运行状态，如果已经被结束了，就重新启动Service。
    5. return START_STICKY: kill 后会被重启(等待5秒左右)，重传Intent，保持与重启前一样
    6. onDestroy方法里重启service
        1. service + broadcast 方式，就是当service走onDestory()的时候，发送一个自定义的广播，当收到广播的时候，重新启动service
        2. 也可以直接在onDestroy()里startService
        3. 使用类似口口管家等第三方应用或是在setting里-应用-强制停止时，APP进程可能就直接被干掉了，onDestroy方法都进不来，所以还是无法保证
9. **为何后台服务会被回收**: 因为**ANR**，主要注意以下几点会导致ANR的发生
    1. 主线程 ("事件处理线程" / "UI线程") 在5秒内没有响应输入事件
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
7. **动态注册与静态注册**
    1. 动态注册广播时只有在注册广播之后取消注册之前的有效期内才能接收到广播。 
    2. 静态注册广播时就算应用没有启动也能接收到广播，会执行Application的OnCreate()，但不会执行Actvity的onCreate()。

### Android ContentProvider

[使用ContentProvider](https://blog.csdn.net/a992036795/article/details/51610936)
[ContentProvider原理分析](https://blog.csdn.net/a992036795/article/details/51612425)
[Android 进阶11：进程通信之 ContentProvider 内容提供者](https://blog.csdn.net/u011240877/article/details/72848608)

1. 使用: 
    1. **简介**: ContentProvider在android中的作用是对外共享数据，也就是说可以通过ContentProvider把应用中的数据共享给其他应用访问，其他应用可以通过ContentProvider对应用中的数据进行增、删、该、查。使用ContentProvider的好处是，统一了数据的访问方式。ContentProvider的低层实现实际是Binder。
    2. **使用**: 一般ContentProvider的实现都是对SqliteOpenHelp的进一步包装，通过Uri映射来判断选择需要操作数据库中的那个表，并且进行增、删、改、查处理。
        1. 我们自定义一个ContentProvider，需要实现它的onCreate、query、insert、update、delete、getType方法。 因为它底层实现是Binder、其实对源码进行分析的话、可以看到如果是夸进程调用的话，OnCreate将发生在主线程、而其他方法将发生在Binder线程池中。 
    3. **示例**: 
        1. 我们先定义个SQLiteOpenHelp，来创建1个数据库，其中存在2张表。 
            ```java
            public class UserInfoDbHelper extends SQLiteOpenHelper {
                private static final String TAG = "UserInfoDbHelper";
                private static final String DB_NAME = "userinfo.db"; /*数据库名*/
                private static final int DB_VERSION = 1;/*版本号*/
                public static final String TABLE_USER_INFO = "userinfo";/*用户信息表*/
                public static final String TABLE_COMPANY = "company";/*公司表*/
                public static final String TEL_COLUMN = "tel_num";/*电话号码*/
                public static final String DESC_COLUMN = "desc";/*描述*/
                public static final String COMP_ID_COLUMN = "comp_id";/*公司id*/
                public static final String ID_COLUMN = "id";/*公司的id*/
                public static final String BUSINESS_COLUMN = "business";/*公司的业务*/
                public static final String ADDR_COLUMN = "addr";/*公司位置*/
                //  表 userinfo
                //  | 字段名            | 类型          |意义             |
                //  | Tel_num           | TEXT         |电话号码          |
                //  | Desc              | TEXT         |描述              |
                //  | comp_id           | INTEGER      |公司id            |
                //
                //  表 company
                //  | 字段名            |类型           |意义              |
                //  | Id                |INTEGER        |公司的id         |
                //  | Business          | TEXT          |公司的业务        |
                //  | Addr              | TEXT          |公司位置          |
                private static final String POSTCODE_TABLE_SQL ="CREATE TABLE IF NOT EXISTS " + TABLE_USER_INFO + " ("
                        + TEL_COLUMN+" TEXT ,"
                        + COMP_ID_COLUMN+" INTEGER ,"
                        + DESC_COLUMN+" TEXT"
                        + ")" ;
                private static final String COMPANY_TABLE_SQL ="CREATE TABLE IF NOT EXISTS " + TABLE_COMPANY + " ("
                        + ID_COLUMN + " INTEGER PRIMEARY KEY ,"
                        + BUSINESS_COLUMN + " TEXT ,"
                        + ADDR_COLUMN +" TEXT" + ")" ;
                public UserInfoDbHelper(Context context) {
                    super(context, DB_NAME , null, DB_VERSION);
                }
                @Override
                public void onCreate(SQLiteDatabase db) {
                    db.execSQL(POSTCODE_TABLE_SQL);
                    db.execSQL(COMPANY_TABLE_SQL);
                }
                @Override
                public void onUpgrade(SQLiteDatabase db, int oldVersion, int newVersion) {}
            }
            ```
        2. 下面继续给出自定一ContentProvider的定义
            ```java
            public class SimpleContentProvider extends ContentProvider {
                private static final String TAG = "SimpleContentProvider";
                public static final String AUTHORITY = "com.blueberry.test08.provider";
                /* 该ContentProvider返回的数据类型定义，数据集合 */
                private static final String CONTENT_TYPE = "vnd.android.cursor.dir/vnd." + AUTHORITY;
                /* 单项数据 */
                private static final String CONTNET_TYPE_ITEM = "vnd.android.cursor.item/vnd." + AUTHORITY ;
                public static final Uri USERINFO_CONTENT_URI = Uri.parse("content://" + AUTHORITY + "/" + UserInfoDbHelper.TABLE_USER_INFO);
                public static final Uri COMPANY_CONTENT_URI = Uri.parse("content://" + AUTHORITY + "/" + UserInfoDbHelper.TABLE_COMPANY);
                public static final int USERINFO_CODE = 0;
                public static final int USERINFO_ITEM_CODE = 1;
                public static final int COMPANY_CODE = 2;
                public static final int COMPANY_ITEM_CODE = 3;
                private static final UriMatcher sUriMatcher = new UriMatcher(UriMatcher.NO_MATCH);
                static {
                    /**
                    * 这里使用2种通配符 "*"表示匹配任意长度的任意字符，"#"表示匹配任意长度的数字
                    * 因此，content://com.blueberry.test08.provider/company 表示查询company表中的所有数据
                    * 而 conent://com.blueberry.test08.provider/company/# 表示根据一个数字id查询一条信息
                    */
                    sUriMatcher.addURI(AUTHORITY, "userinfo", USERINFO_CODE);
                    sUriMatcher.addURI(AUTHORITY, "userinfo/*", USERINFO_ITEM_CODE);
                    sUriMatcher.addURI(AUTHORITY, "company", COMPANY_CODE);
                    sUriMatcher.addURI(AUTHORITY, "company/#", COMPANY_ITEM_CODE);
                }
                private SQLiteDatabase mDatabase;
                @Override public boolean onCreate() {
                    Log.i(TAG, "onCreate: current thread: " + Thread.currentThread().getName());
                    /* 返回一个可读写的数据库 */
                    mDatabase = new UserInfoDbHelper(getContext()).getWritableDatabase();
                    return true;
                }
                @Nullable @Override public Cursor query(Uri uri, String[] projection, String selection, String[] selectionArgs, String sortOrder) {
                    Log.i(TAG, "query: current thread: " + Thread.currentThread().getName());
                    Cursor cursor = null;
                    switch (sUriMatcher.match(uri)) {
                        case USERINFO_CODE:
                            cursor = mDatabase.query(UserInfoDbHelper.TABLE_USER_INFO, projection, selection, selectionArgs, null, null, sortOrder);
                            break;
                        case USERINFO_ITEM_CODE:
                            String tel = uri.getPathSegments().get(1);
                            cursor = mDatabase.query(UserInfoDbHelper.TABLE_USER_INFO, projection, "tel_num = ?", new String[]{tel}, null, null, sortOrder);
                            break;
                        case COMPANY_CODE:
                            cursor = mDatabase.query(UserInfoDbHelper.TABLE_COMPANY, projection, selection, selectionArgs, null, null, sortOrder);
                            break;
                        case COMPANY_ITEM_CODE:
                            String cid = uri.getPathSegments().get(1);
                            cursor = mDatabase.query(UserInfoDbHelper.TABLE_COMPANY, projection, "id = ?", new String[]{cid}, null, null, sortOrder);
                            break;
                    }
                    return cursor;
                }
                @Nullable @Override public Uri insert(Uri uri, ContentValues values) {
                    Log.i(TAG, "insert: current thread: " + Thread.currentThread().getName());
                    long newId = 0;
                    Uri newUri = null;
                    switch (sUriMatcher.match(uri)) {
                        case USERINFO_CODE:
                            newId = mDatabase.insert(UserInfoDbHelper.TABLE_USER_INFO, null, values);
                            newUri = Uri.parse("content://" + AUTHORITY + "/" + UserInfoDbHelper.TABLE_USER_INFO + "/" + newId);
                            break;
                        case COMPANY_CODE:
                            newId = mDatabase.insert(UserInfoDbHelper.TABLE_COMPANY, null, values);
                            newUri = Uri.parse("content://" + AUTHORITY + "/" + UserInfoDbHelper.TABLE_COMPANY + "/" + newId);
                            break;
                    }
                    if (newId > 0) return newUri;
                    throw new IllegalArgumentException("Failed to insert row info" + uri);
                }
                @Nullable @Override public String getType(Uri uri) {
                    Log.i(TAG, "getType: current thread: " + Thread.currentThread().getName());
                    switch (sUriMatcher.match(uri)){
                        case USERINFO_CODE:
                        case COMPANY_CODE:
                            return CONTENT_TYPE;
                        case USERINFO_ITEM_CODE:
                        case COMPANY_ITEM_CODE:
                            return CONTNET_TYPE_ITEM;
                        default:
                            throw new RuntimeException("错误的 uri");
                    }
                }
                @Nullable @Override public Bundle call(String method, String arg, Bundle extras) {
                    return super.call(method, arg, extras);
                }
                @Override public int delete(Uri uri, String selection, String[] selectionArgs) {
                    Log.i(TAG, "delete: current thread: " + Thread.currentThread().getName());
                    return 0;
                }
                @Override public int update(Uri uri, ContentValues values, String selection, String[] selectionArgs) {
                    Log.i(TAG, "update: current thread: " + Thread.currentThread().getName());
                    return 0;
                }
            }
            ```
        3. 这里只是测试，所以只实现了query和inser方法。这里主要用了一个 UriMatcher类。我们先来简要看一下Uri，Uri代表了要操作的数据表的绝对路径，Uri主要包含两部分信息，一是需要操作的ContentProvider，二是对ContentProvider中的哪个表进行操作。一个Uri的组成为: Schema:authority:path:id。ContentProvider的Schema已经由Android固定设置为content://, Authority用于唯一标示这个ContentProvider，外部调用者可以根据这个标示来找到它，这里的path就是要查询的数据表，最后的id是可选字段，例如，我们操作特定的数据项时就会指定一个查询条件，如果所有联系人的uri为content://contacts/people，某个联系人的Uri:content://contacts/people/5，这个5 就是联系人的id，也就对应了查询的关键字。这里我们的Authority为 com.blueberry.test08.provider。
        4. 接下来我们看以UriMatcher，UriMather会根据uri来匹配出对应的code来使得我们判断该查询那张表，这里我们定义了四个code。分别对用与 用户信息查询、单个用户信息查询、公司查询、单个公司查询。我们通过addURI对应信息添加进去。
        5. 最后我们来看以下在清单文件中的注册: 
            ```xml
            <provider
                android:authorities="com.blueberry.test08.provider"
                android:name=".SimpleContentProvider"
                android:permission="com.blueberry.permission.provider"
                android:process="com.blueberry.process1"
                android:multiprocess="false"
                ></provider>
            <!-- multiprocess如为true标识每个调用进程都拥有一个实例，否则所有进程只有一个示例。process字段使得它运行在一个名为com.blueberry.process1的进程中。 -->
            ```
        6. 最后我们来看一下调用程序: 
            ```java
            public class MainActivity extends AppCompatActivity {
                private EditText etUserDesc,etUserPhoneNumber,etUserCompanyId;
                private EditText etCompanyId,etCompanyBussiness,etCompanyAddress ;
                private Button btnSubmitUserInfo,btnSubmitCompany;
                @Override protected void onCreate(Bundle savedInstanceState) {
                    super.onCreate(savedInstanceState);
                    setContentView(R.layout.activity_main);
                    etUserDesc = (EditText) findViewById(R.id.et_user_desc);
                    etUserPhoneNumber = (EditText) findViewById(R.id.et_user_phone_number);
                    etUserCompanyId = (EditText) findViewById(R.id.et_user_company_id);
                    etCompanyId = (EditText) findViewById(R.id.et_company_id);
                    etCompanyBussiness  = (EditText) findViewById(R.id.et_company_bussiness);
                    etCompanyAddress = (EditText) findViewById(R.id.et_company_address);
                    btnSubmitUserInfo = (Button) findViewById(R.id.btn_save_userinfo);
                    btnSubmitCompany = (Button) findViewById(R.id.btn_save_company);
                    btnSubmitUserInfo.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            // 存数用户信息数据
                            saveUserInfoRecord();
                            btnSubmitUserInfo.postDelayed(new Runnable() {
                                @Override
                                public void run() {
                                    queryUserInfo();
                                }
                            }, 1000);
                        }
                    });
                    btnSubmitCompany.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            saveCompanyInfo();
                            btnSubmitCompany.postDelayed(new Runnable() {
                                @Override
                                public void run() {
                                queryCompanyInfo();
                                }
                            },1000) ;
                        }
                    });
                }
                private void saveUserInfoRecord() {
                    ContentValues newRecord = new ContentValues();
                    newRecord.put(UserInfoDbHelper.DESC_COLUMN,etUserDesc.getText().toString());
                    newRecord.put(UserInfoDbHelper.COMP_ID_COLUMN,etUserCompanyId.getText().toString());
                    newRecord.put(UserInfoDbHelper.TEL_COLUMN,etUserPhoneNumber.getText().toString());
                    getContentResolver().insert(SimpleContentProvider.USERINFO_CONTENT_URI,newRecord) ;
                }
                private void queryUserInfo() {
                    Uri queryUri = Uri.parse("content://com.blueberry.test08.provider/userinfo/123456") ;
                    Cursor cursor = getContentResolver().query(queryUri,
                            new String[]{UserInfoDbHelper.DESC_COLUMN,UserInfoDbHelper.COMP_ID_COLUMN,UserInfoDbHelper.TEL_COLUMN}
                            ,null,null,null);
                    if (cursor.moveToFirst()) {
                        Toast.makeText(this, " 描述信息"+cursor.getString(0)
                                + " 公司id"+cursor.getString(1)
                                + " 电话来自"+cursor.getString(2),Toast.LENGTH_SHORT).show();
                    }
                    cursor.close();
                }
                private void saveCompanyInfo() {
                    ContentValues newRecord = new ContentValues();
                    newRecord.put(UserInfoDbHelper.ID_COLUMN,etCompanyId.getText().toString());
                    newRecord.put(UserInfoDbHelper.BUSINESS_COLUMN,etCompanyBussiness.getText().toString());
                    newRecord.put(UserInfoDbHelper.ADDR_COLUMN,etCompanyAddress.getText().toString());
                    getContentResolver().insert(SimpleContentProvider.COMPANY_CONTENT_URI,newRecord);
                }
                private void queryCompanyInfo(){
                    Cursor cursor = getContentResolver().query(SimpleContentProvider.COMPANY_CONTENT_URI,
                            new String[]{UserInfoDbHelper.ID_COLUMN,UserInfoDbHelper.BUSINESS_COLUMN,UserInfoDbHelper.ADDR_COLUMN}
                            ,null,null,null);
                    StringBuffer sb = new StringBuffer();
                    while (cursor.moveToNext()){
                        sb.append("id: "+cursor.getString(0)+" business: "+cursor.getString(1)+" address: "+cursor.getString(2));
                        sb.append("\n");
                    }
                    Toast.makeText(this,sb.toString(),Toast.LENGTH_LONG).show();
                }
            }
            ```
2. 原理: 
    1. 我们知道要访问一个ContentProvider要使用到ContentResolver。一般在Activity中使用getContentReselover()方法，然后调用query、insert等方法。而getContentResolver方法是继承于ContextWrapper的，返回的是 mBase.getContentResolver() 。这个mBase其实是ContextImpl类的实例，它返回了一个成员变量mContentResolver，该成员变量是在ContextImpl的构造方法中创建的，实际是一个ApplicationContentResolver，它实际上继承自ContentResolve，里面提供了acquireProvider/releaseProvider等方法。
    2. 以ContextResolver里的insert为例，可以看到这个方法主要调用acquireProvider(url)方法，然后调用provider.insert(mPackageName, url, values)进行插入数据。
    3. 。。。 https://blog.csdn.net/a992036795/article/details/51612425
3. 

### Android Fragment

0. links
    * **[《Android基础：Fragment，看这篇就够了》](https://cloud.tencent.com/developer/article/1071779)**
    * **[Fragment全解析系列](https://www.jianshu.com/p/d9143a92ad94)**
    * [Android系列之Fragment(一)----Fragment加载到Activity当中](https://www.cnblogs.com/smyhvae/p/3978989.html)
    * [fragment清除页面数据(重新加载布局)](https://blog.csdn.net/yuzhiqiang_1993/article/details/76152454)
    * [fragment重叠的完美解决方案](https://blog.csdn.net/yuzhiqiang_1993/article/details/75014591)
    * [Android碎片Fragment之多标签切换效果(微信和QQ底部多标签切换)](https://www.jianshu.com/p/69a47152c3a2)
    * [viewpager中彻底性动态添加、删除Fragment](https://www.cnblogs.com/zhujiabin/p/5382740.html)
1. **为何产生**: 同时适配手机和平板、UI和逻辑的共享。
2. **介绍**: 
    1. Fragment也会被加入回退栈中。
    2. Fragment拥有自己的生命周期和接受、处理用户的事件的能力
    3. 可以动态的添加、替换和移除某个Fragment
3. **生命周期**: 必须依赖于Activity Fragment依附于Activity的生命状态  **https://blog.csdn.net/asdf717/article/details/51383750**
    1. Created
        1. onAttach: fragment与窗口关联后立刻调用，从这里开始可以调用fragment.getActivity
        2. onCreate: onAttach后立即调用，可以在Bundle对象中获取一些在Activity中传过来的数据(不执行耗时操作，不然窗口不显示)
        3. onCreateView: 创建view
        4. onViewCreated: 创建view后立即调用，它之后Activity才会调用onCreate
        5. onActivityCreated: 在Activity的onCreate调用后调用，从这一个时候开始，就可以在Fragment中使用getActivity().findViewById(Id);来操控Activity中的view了。
    2. Started: onStart
    3. Resumed: onResume
    4. Paused: onPause: onPause后的方法都在Activity相应的方法前调用
    5. Stopped: onStop
    6. Destroy:
        1. onDestroyView
        2. onDestroy
        3. onDetach: 它之后才是Activity的onDestroy
    7. **注意**: 除了onCreateView，其他的所有方法如果你重写了，必须调用父类对于该方法的实现
4. **Fragment与Activity之间的交互**:
    1. Fragment与Activity之间的交互可以通过Fragment.setArguments(Bundle args)以及Fragment.getArguments()来实现。
    2. 在Fragment中声明接口，Activity实现该接口，然后Fragment将绑定的Activity作为该接口的实例，就可以通信了。
    3. sdk26的API引入了Activity.onAttachFragment(Fragment fragment),可以将Activity的数据传递给Fragment。
    4. eventbus。
    5. 使用广播。
    6. Fragment/Activity直接调用Activity/Fragment中的方法。
5. **Fragment状态的持久化**: 由于Activity会经常性的发生配置变化，所以依附它的Fragment就有需要将其状态保存起来问题。下面有两个常用的方法去将Fragment的状态持久化。
    1. 可以通过``protected void onSaveInstanceState(Bundle outState), protected void onRestoreInstanceState(Bundle savedInstanceState)``将状态持久化。
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
        transaction.remove()  //从Activity中移除一个Fragment，如果被移除的Fragment没有添加到回退栈(回退栈后面会详细说)，这个Fragment实例将会被销毁。
        transaction.replace()  //使用另一个Fragment替换当前的，实际上就是remove()然后add()的合体~
        transaction.hide()  //隐藏当前的Fragment，仅仅是设为不可见，并不会销毁
        transaction.show()  //显示之前隐藏的Fragment
        detach()  //当fragment被加入到回退栈的时候，该方法与*remove()*的作用是相同的，反之，该方法只是将fragment从视图中移除，
            //之后仍然可以通过*attach()*方法重新使用fragment，而调用了*remove()*方法之后，不仅将Fragment从视图中移除，fragment还将不再可用。
        attach()  //重建view视图，附加到UI上并显示。
        transaction.commit()  //提交一个事务(异步)
        transaction.commitNow()  //同步
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
8. **注意点**
    1. 如果在创建Fragment时要传入参数，必须要通过setArguments(Bundle bundle)方式添加，而不建议通过为Fragment添加带参数的构造函数，因为通过setArguments()方式添加，在由于内存紧张导致Fragment被系统杀掉并恢复(re-instantiate)时能保留这些数据。
    2. inflate()的第三个参数是false，因为在Fragment内部实现中，会把该布局添加到container中，如果设为true，那么就会重复做两次添加，则会抛异常。
    3. 我们可以在Fragment的onAttach()中通过getArguments()获得传进来的参数，并在之后使用这些参数。如果要获取Activity对象，不建议调用getActivity()，而是在onAttach()中将Context对象强转为Activity对象。
    4. 在Activity中添加Fragment的方式有两种
        1. 静态添加：在xml中通过的方式添加，缺点是一旦添加就不能在运行时删除。
        2. 动态添加：运行时添加，这种方式比较灵活，因此建议使用这种方式。
            ```java
            public class Fragment1 extends Fragment{  
            private static String ARG_PARAM = "param_key"; 
                private String mParam; 
                private Activity mActivity; 
                public void onAttach(Context context) {
                    mActivity = (Activity) context;
                    mParam = getArguments().getString(ARG_PARAM);  //获取参数
                }
                public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
                    View root = inflater.inflate(R.layout.fragment_1, container, false);
                    TextView view = root.findViewById(R.id.text);
                    view.setText(mParam);
                        return root;
                }    
                public static Fragment1 newInstance(String str) {
                    Fragment1 frag = new Fragment1();
                    Bundle bundle = new Bundle();
                    bundle.putString(ARG_PARAM, str);
                    fragment.setArguments(bundle);   //设置参数
                    return fragment;
                }
            }
            ```
            ```java
            if (bundle == null) {
                getSupportFragmentManager().beginTransaction()
                    .add(R.id.container, Fragment1.newInstance("hello world"), "f1")  // .addToBackStack("fname")
                    .commit();
            }
            ```
            ```xml
            <FrameLayout
                android:id="@+id/container"
                android:layout_width="match_parent"
                android:layout_height="match_parent"/>
            ```
        3. 虽然Fragment能在XML中添加，但是这只是一个语法糖而已，Fragment并不是一个View，而是和Activity同一层次的。
    5. Fragment有个常见的异常：java.lang.IllegalStateException: Can not perform this action after onSaveInstanceState。该异常出现的原因是：commit()在onSaveInstanceState()后调用。首先，onSaveInstanceState()在onPause()之后，onStop()之前调用。onRestoreInstanceState()在onStart()之后，onResume()之前。因此避免出现该异常的方案有：
        1. 不要把Fragment事务放在异步线程的回调中，比如不要把Fragment事务放在AsyncTask的onPostExecute()，因此onPostExecute()可能会在onSaveInstanceState()之后执行。
        2. 逼不得已时使用commitAllowingStateLoss()。
    6. 生命周期。共有两个Fragment：F1和F2，F1在初始化时就加入Activity，点击F1中的按钮调用replace替换为F2。
        ```java
        // 当F1在Activity的onCreate()中被添加时，日志如下：
        BasicActivity: [onCreate] BEGIN
        BasicActivity: [onCreate] END
        BasicActivity: [onStart] BEGIN
        Fragment1: [onAttach] BEGIN 
        Fragment1: [onAttach] END
        BasicActivity: [onAttachFragment] BEGIN
        BasicActivity: [onAttachFragment] END
        Fragment1: [onCreate] BEGIN
        Fragment1: [onCreate] END
        Fragment1: [onCreateView]
        Fragment1: [onViewCreated] BEGIN
        Fragment1: [onViewCreated] END
        Fragment1: [onActivityCreated] BEGIN
        Fragment1: [onActivityCreated] END
        Fragment1: [onStart] BEGIN
        Fragment1: [onStart] END
        BasicActivity: [onStart] END
        BasicActivity: [onPostCreate] BEGIN
        BasicActivity: [onPostCreate] END
        BasicActivity: [onResume] BEGIN
        BasicActivity: [onResume] END
        BasicActivity: [onPostResume] BEGIN
        Fragment1: [onResume] BEGIN
        Fragment1: [onResume] END
        BasicActivity: [onPostResume] END
        BasicActivity: [onAttachedToWindow] BEGIN
        BasicActivity: [onAttachedToWindow] END
        ```
        ```java
        // 当点击F1的按钮，调用replace()替换为F2，且不加addToBackStack()时
        Fragment2: [onAttach] BEGIN
        Fragment2: [onAttach] END
        BasicActivity: [onAttachFragment] BEGIN
        BasicActivity: [onAttachFragment] END
        Fragment2: [onCreate] BEGIN
        Fragment2: [onCreate] END
        Fragment1: [onPause] BEGIN
        Fragment1: [onPause] END
        Fragment1: [onStop] BEGIN
        Fragment1: [onStop] END
        Fragment1: [onDestroyView] BEGIN
        Fragment1: [onDestroyView] END
        Fragment1: [onDestroy] BEGIN
        Fragment1: [onDestroy] END
        Fragment1: [onDetach] BEGIN
        Fragment1: [onDetach] END
        Fragment2: [onCreateView]
        Fragment2: [onViewCreated] BEGIN
        Fragment2: [onViewCreated] END
        Fragment2: [onActivityCreated] BEGIN
        Fragment2: [onActivityCreated] END
        Fragment2: [onStart] BEGIN
        Fragment2: [onStart] END
        Fragment2: [onResume] BEGIN
        Fragment2: [onResume] END
        ```
        ```java
        // 当点击F1的按钮，调用replace()替换为F2，且加addToBackStack()时
        Fragment2: [onAttach] BEGIN
        Fragment2: [onAttach] END
        BasicActivity: [onAttachFragment] BEGIN
        BasicActivity: [onAttachFragment] END
        Fragment2: [onCreate] BEGIN
        Fragment2: [onCreate] END
        Fragment1: [onPause] BEGIN
        Fragment1: [onPause] END
        Fragment1: [onStop] BEGIN
        Fragment1: [onStop] END
        Fragment1: [onDestroyView] BEGIN
        Fragment1: [onDestroyView] END
        Fragment2: [onCreateView]
        Fragment2: [onViewCreated] BEGIN
        Fragment2: [onViewCreated] END
        Fragment2: [onActivityCreated] BEGIN
        Fragment2: [onActivityCreated] END
        Fragment2: [onStart] BEGIN
        Fragment2: [onStart] END
        Fragment2: [onResume] BEGIN
        Fragment2: [onResume] END
        ```
    7. FragmentTransaction有一些基本方法，下面给出调用这些方法时，Fragment生命周期的变化：
        1. add(): onAttach()->…->onResume()。
        2. remove(): onPause()->…->onDetach()。
        3. replace(): 相当于旧Fragment调用remove()，新Fragment调用add()。
        4. show(): 不调用任何生命周期方法，调用该方法的前提是要显示的Fragment已经被添加到容器，只是纯粹把Fragment UI的setVisibility为true。
        5. hide(): 不调用任何生命周期方法，调用该方法的前提是要显示的Fragment已经被添加到容器，只是纯粹把Fragment UI的setVisibility为false。
        6. detach(): onPause()->onStop()->onDestroyView()。UI从布局中移除，但是仍然被FragmentManager管理。
        7. attach(): onCreateView()->onStart()->onResume()。
    8. 回退栈的使用。共有三个Fragment：F1, F2, F3，F1在初始化时就加入Activity，点击F1中的按钮跳转到F2，点击F2的按钮跳转到F3，点击F3的按钮回退到F1。
        ```java
        // 在Activity的onCreate()中，将F1加入Activity中：
        getSupportFragmentManager().beginTransaction().add(R.id.container, f1, "f1").addToBackStack(Fragment1.class.getSimpleName()).commit();
        // F1按钮的onClick()内容如下：
        getFragmentManager().beginTransaction().replace(R.id.container, f2, "f2").addToBackStack(Fragment2.class.getSimpleName()).commit();
        // F2按钮的onClick()如下：
        getFragmentManager().beginTransaction().replace(R.id.container, f3, "f3").addToBackStack(Fragment3.class.getSimpleName()).commit();
        // F3按钮的onClick()如下：
        getFragmentManager().popBackStack(Fragment2.class.getSimpleName(), FragmentManager.POP_BACK_STACK_INCLUSIVE);
        ```
9. **FABridge** https://github.com/hongyangAndroid/FABridge
10. **懒加载Fragment**
    1. 懒加载主要依赖Fragment的setUserVisibleHint(boolean isVisible)方法，当Fragment变为可见时，会调用setUserVisibleHint(true)；当Fragment变为不可见时，会调用setUserVisibleHint(false)，且该方法调用时机：
        1. onAttach()之前，调用setUserVisibleHint(false)。
        2. onCreateView()之前，如果该界面为当前页，则调用setUserVisibleHint(true)，否则调用setUserVisibleHint(false)。
        3. 界面变为可见时，调用setUserVisibleHint(true)。
        4. 界面变为不可见时，调用setUserVisibleHint(false)。
    2. 示例
        ```java
        public class LazyFragment extends Fragment {
            private View mRootView;
            private boolean mIsInited;
            private boolean mIsPrepared;

            @Override
            public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
                mRootView = inflater.inflate(R.layout.fragment_lazy, container, false);
                mIsPrepared = true;
                lazyLoad();
                return mRootView;
            }
                    
            public void lazyLoad() {
                if (getUserVisibleHint() && mIsPrepared && !mIsInited) {
                    // mIsPrepared：表示UI是否准备好，因为数据加载后需要更新UI，如果UI还没有inflate，就不需要做数据加载，
                    // 因为setUserVisibleHint()会在onCreateView()之前调用一次，如果此时调用，UI还没有inflate，因此不能加载数据。
                    loadData();
                    // mIsInited：表示是否已经做过数据加载，如果做过了就不需要做了。因为setUserVisibleHint(true)在界面可见时都会调用，
                    // 如果滑到该界面做过数据加载后，滑走，再滑回来，还是会调用setUserVisibleHint(true)，此时由于mIsInited=true，因此不会再做一遍数据加载。
                }
            }
                    
            private void loadData() {
                new Thread() {
                public void run() {
                        // 1. 加载数据
                        // 2. 更新UI
                        // 3. mIsInited = true
                    }
                }.start();
            }   
        
            @Override
            public void setUserVisibleHint(boolean isVisibleToUser) { 
                super.setUserVisibleHint(isVisibleToUser);
                if (isVisibleToUser)
                    lazyLoad();
            }
        
            public static LazyFragment newInstance() {
                return new LazyFragment();
            }
        }
        ```
        ```xml
        <!-- 布局XML主要分两个container，一个是初始显示的状态，即R.id.container_empty，当数据加载完成，就显示R.id.container -->
        <RelativeLayout
            android:id="@+id/container_empty"
            android:layout_width="match_parent"
            android:layout_height="match_parent">
            <TextView
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_centerInParent="true"
                android:text="正在加载"/>
        </RelativeLayout>
        <RelativeLayout
            android:id="@+id/container"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:visibility="gone">
            ...
        </RelativeLayout>
        ```
11. **fragment重叠的完美解决方案** https://blog.csdn.net/yuzhiqiang_1993/article/details/75014591(**懒创建**)
    1. 原因: 当我们旋转屏幕的时候，activity会被销毁并重新创建，并且在销毁之前执行了onSaveInstanceState(Bundle outState)这个方法。这个方法会保存activity的一些信息，其中就包括添加过的fragment，当activity被重新创建时，会初始化其中的变量，这个时候点击底部导航的话会重新去添加fragment，也就导致了重叠的问题。
    2. 解决方案
        1. 想办法不让activity保存信息。(不推荐)。如重写onSaveInstanceState，但不使用super
        2. 旋转屏幕时不让activity走生命周期方法(推荐)。这个方法最简单也最省事，只需要在相应的activity中声明android:configChanges=“keyboardHidden|orientation|screenSize”> 即可。声明这个属性后，当我们切换屏幕时，也就不会在走activity的生命周期方法了，也就不会造成fragment重叠的问题了。
        3. 还有一种可能也会造成fragment重叠的问题，就是当内存不足时activity被系统回收时，再次进入也会造成重叠的问题，原因也是因为onSaveInstanceState(outState);方法保存了activity的一些数据。因为是系统回收的activity，所以，我们就没法去控制activity不让他走生命周期方法，我们可以从另一个方面着手去解决。解决办法：在onSaveInstanceState(outState);中去保存fragment，当activity被恢复时，取出这些fragment即可。使用getSupportFragmentManager的putFragment方法。然后oncreate的时候判断一下savedInstanceState是为空，不为空的话就是有保存的fragment信息，使用getSupportFragmentManager的getFragment方法。
12. [fragment清除页面数据(重新加载布局)](https://blog.csdn.net/yuzhiqiang_1993/article/details/76152454)

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
    1. 执行方式: post(Runnable), new Handler(new Handler.Callback(){ public void handleMessage(msg){...} }), sendMessage(Message)

### Android Loader

1. 3.0之后最推荐的异步操作就是Loader。它可以方便我们在Activity和Fragment中异步加载数据，而不是用线程或AsyncTask，他的优点如下: 
    1. 提供异步加载数据机制；
    2. 对数据源变化进行监听，实时更新数据；
    3. 在Activity配置发生变化(如横竖屏切换)时不用重复加载数据；
    4. 适用于任何Activity和Fragment；
2. 如下是我们开发中常用的一些Loader相关接口: 
    1. LoaderManager: 与Activity、Fragment关联的抽象类，用于管理一个或多个Loader实例。每个Activity或Fragment只能有一个LoaderManager，一个LoaderManager可以有多个Loader。
    2. LoaderManager.LoaderCallbacks: 用于和LoaderManager交互的回调接口。譬如，可以使用onCreateLoader()创建一个新的Loader。
    3. AsyncTaskLoader: 抽象的Loader，提供一个AsyncTask继承实现。
    4. CursorLoader: AsyncTaskLoader的子类，用于向ContentResover请求返回一个Cursor。该类以标准游标查询实现了Loader协议，使用后台线程进行查询，使用这个Loader是从ContentProvider加载异步数据最好的方式。
3. 使用: 
    1. Activity.onCreate/Fragment.onActivityCreated中getLoaderManager().initLoader(0, null, this);// id,提供给Loader构造函数的可选参数,LoaderManager.LoaderCallbacks
        1. 如果代表该Loader的ID已经存在，则后面创建的Loader将直接复用已经存在的。
        2. 如果代表该Loader的ID不存在，initLoader()会触发LoaderManager.LoaderCallbacks回调的onCreateLoader()方法创建一个Loader。
        3. 可以看见通过initLoader()方法可以将LoaderManager.LoaderCallbacks实例与Loader进行关联，且当Loader的状态变化时就被回调。所以说，如果调用者正处于其开始状态并且被请求的Loader已经存在，且已产生了数据，那么系统会立即调用onLoadFinished()(在initLoader()调用期间)，所以你必须考虑到这种情况的发生。
        4. intiLoader()会返回一个创建的Loader，但你不用获取它的引用，因为LoadeManager会自动管理该Loader的生命周期，你只用在它回调提供的生命周期方法中处理自己的数据逻辑。
    2. 有时我们想丢弃旧数据然后重新开始创建一个新Loader，调用getLoaderManager().restartLoader(0, null, this);即可。例如，SearchView.OnQueryTextListener的实现重启了Loader，当用户查询发生变化时Loader需要重启。
    3. LoaderManager.LoaderCallbacks包含如下三个方法: 
        1. onCreateLoader() 实例化并返回一个新创建给定ID的Loader对象；
            1. 只有对应id的Loader不存在才会调用。
            2. 创建新Loader实例典型的做法就是通过CursorLoader类创建，不过你也可以自定义一个继承自Loader的子类来实现自己的Loader。
        2. onLoadFinished() 当创建好的Loader完成了数据的load之后回调此方法；
            1. Loader一旦知道App不再使用旧数据就会释放掉。例如，如果数据来自CursorLoader里的一个Cursor，我们不应该自己在代码中调用close()方法；如果一个Cursor正在被放置到一个CursorAdapter时我们应当使用swapCursor()进行新数据交换，这样正在被放置的旧的Cursor就不会被关掉，也就不会导致Adapter的加载异常。
                ```java
                // This is the Adapter being used to display the list's data.
                SimpleCursorAdapter mAdapter;
                public void onLoadFinished(Loader<Cursor> loader, Cursor data) {
                    // Swap the new cursor in.  (The framework will take care of closing the
                    // old cursor once we return.)
                    mAdapter.swapCursor(data);
                }
                ```
        3. onLoaderReset() 当创建好的Loader被reset时调用此方法，这样保证它的数据无效；
            1. 这个回调方法其实就是为了告诉我们啥时候数据要被释放掉，所以我们应该在这个时候移除对它的引用。如下移除实例: 
                ```java
                // This is the Adapter being used to display the list's data.
                SimpleCursorAdapter mAdapter;
                public void onLoaderReset(Loader<Cursor> loader) {
                    // This is called when the last Cursor provided to onLoadFinished()
                    // above is about to be closed.  We need to make sure we are no
                    // longer using it.
                    mAdapter.swapCursor(null);
                }
                ```
4. 实例 https://blog.csdn.net/yanbober/article/details/48861457 android.test.loader.CursorLoaderListFragment.java
5. 源码解析 https://blog.csdn.net/yanbober/article/details/48861457

### Android Binder

**https://www.jianshu.com/p/04a034cbbc27**

1. **背景**:
    1. Android团队想要实现进程之间的通信，需要解决以下几个问题
        1. 如何知道客户端需要调用哪个进程以及该进程中的函数
        2. 客户端如何将函数形参发送给远程进程中的函数，以及如何将远程进程函数计算结果返回客户端
        3. 如何去屏蔽底层通信细节，让实现客户端调用远程函数就像调用本地函数一样
    2. 答案
        1. 第一个问题，很容易解决，只要给每个需要远程通信的类唯一标识就可以通过包名+类名的字符串就可以做到，然后在类里面给每个函数编号即可对函数唯一编码。
        2. 第二个问题，定义一个可打包的接口Parcelable，这个接口提供2个重要函数，分别是将对象中的属性写入到数组和从数组中的数据还原对象，每个可以发送到远程函数作为形参的对象只需实现Parcelable对象即可。
        3. 第三个问题，为了屏蔽进程之间的通信细节，那么Android团队肯定在想，定义一个类，由这个类来实现这些细节。首先，这个类得帮用户发送远程请求并将拿到返回结果提交给用户。其次，如果我想实现服务端，什么时候客户端调用我了，这些细节不用用户操心。当然，这个类还要帮用户封装更多细节。
    3. Binder简单示例:
        ```java
        // 我们的程序跨进程调用系统服务的简单示例，实现浮动窗口部分代码:
        // 获取WindowManager服务引用
        WindowManager wm = (WindowManager)getSystemService(getApplication().WINDOW_SERVICE);
        // 布局参数layoutParams相关设置略...
        View view = LayoutInflater.from(getApplication()).inflate(R.layout.float_layout, null);
        // 添加view
        wm.addView(view, layoutParams);
        ```
2. **概念**: Android系统中进程间通讯(IPC)的一种方式，也是Android系统中最重要的特性之一。是Android各组件的桥梁
3. **Binder驱动**: Android系统通过Linux的动态可加载内核模块(Loadable Kernel Module，LKM)机制将Binder驱动这个内核模块运行在内核空间。用户进程通过它使用Binder机制在用户进程间通信。
4. **原因**: Android使用的Linux内核拥有着非常多的跨进程通信机制，比如说，socket，管道之类的，那么为什么还要单独为Android创造一个Binder呢
    1. 性能: Android是移动设备，相比于PC机的性能会有差距，在移动设备上进行频繁的跨进程通信本身就是一个极大的考验，Binder相比较于传统的socket/管道通信而言，更加高效，它在IPC时，只需要数据拷贝1次，而传统的socket之类的需要2次。因为Android中有一块物理页是用户虚拟地址空间和内核虚拟地址空间都可以看到的。
    2. 安全: 传统的进程间通信对于通信双方的身份没有进行严格的验证，只有上层协议才会进行架构，比如说，socket通信时，IP地址是手动填写的，可以进行人为的伪造，而Binder支持通信双方进行身份校验，极大的保障了安全性
5. **Binder机制**: A和B相当于两个进程，他们要打电话就相当于要进行通信，其中电话基站就想到与Binder驱动，而通信录则相当于其中的一个ServerManager
    1. ServerManager其实就是一个进程，它里面维护了一张表，表里面存储的是向他注册过的进程信息，在通信之初，首先需要有一个进程向驱动申请成为ServerManager，当内核驱动同意之后，
        这个成为ServerManager的进程就负责管理所有需要通信的进程信息，当客户端进程要访问服务端进程时，服务端进程首先会向ServerManager注册，让ServerManager保存自己的有关信息，
        当ServerManger保存完毕后，客户端进程就会通过Binder驱动向ServerManger查询服务端进程的信息，ServerManage就会将服务端进程的信息返回给客户端进程，
        客户端与服务端进程之间就可以通过这些信息，利用Binder驱动来进行通信了
    2. Binder通信机制分三步:
        1. ServerManager在内部维护一张表
        2. 服务端进程向ServerManager注册信息
        3. 客户端进程向ServerManager取得信息，通过Binder驱动与服务端进程通信
    3. **代码调用过程**: https://upload-images.jianshu.io/upload_images/2154124-bd83d477ef791b81.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/520/format/webp
        <div align="center"><img src="./images/代码调用过程.webp"/></div>
        1. 客户端MyClient调用Binder驱动，发送相关的实现了Parcelable接口的数据给Binder驱动，然后客户端被挂起。如果远程进程是执行长时间的运算，请不要使用主线程去调用远程函数，以防止ANR。
        2. Binder驱动会从线程池中取出线程来查找MyService，并执行客户端指定的函数，并等待MyService的执行结果。
        3. MyService会执行客户端需要的函数func，并将计算结果返回给Binder驱动线程。
        4. Binder驱动线程会唤醒客户端线程，并返回执行结果，让客户端线程继续执行。
    4. 客户端持有远程进程的某个对象引用，然后调用引用类中的函数，远程进程的函数就执行了。但是学过操作系统的都知道两个进程的资源是不共享的，客户端持有的这个对象跟远程进程中的实际对象完全是两个不同的对象。所以，客户端与服务端间的通信实际上是通过**虚拟共享内存**(Binder与客户端有共享内存、Binder与服务端也有共享内存)来实现的。
        1. 服务端跨进程的类都要继承Binder类。我们所持有的Binder引用(即服务端的类引用)并不是实际真实的远程Binder对象，我们的引用在Binder驱动里还要做一次映射。也就是说，设备驱动根据我们的引用对象找到对应的远程进程。
        2. 客户端要调用远程对象函数时，只需把数据写入到Parcel，在调用所持有的Binder引用的transact()函数，transact函数执行过程中会把参数、标识符(标记远程对象及其函数)等数据放入到Client的共享内存，Binder驱动从Client的共享内存中读取数据，根据这些数据找到对应的远程进程的共享内存，把数据拷贝到远程进程的共享内存中，并通知远程进程执行onTransact()函数，这个函数也是属于Binder类。远程进程Binder对象执行完成后，将得到结果的写入自己的共享内存中，Binder驱动再将远程进程的共享内存数据拷贝到客户端的共享内存，并唤醒客户端线程。
6. **更多**: https://blog.csdn.net/pgg_cold/article/details/79393839 https://mp.weixin.qq.com/s?__biz=MzIxNjM4NDM2NA==&mid=2247483934&idx=1&sn=27848058e8790f2cbb0d22d101640ce3&chksm=9788941da0ff1d0b9ff2d5468ec6d33b42df5d59aaf4d264d7d199207a5be087232e673dee49&mpshare=1&scene=1&srcid=0304PoUC2aKh0EdmbUnKhj3z#rd
7. **Parcelable**: 
    1. 与Seriablizable相比: Serializable是Java为我们提供的一个标准化的序列化接口,那什么是序列化呢? —- 简单来说就是将对象转换为可以传输的二进制流(二进制序列)的过程,这样我们就可以通过序列化,转化为可以在网络传输或者保存到本地的流(序列),从而进行传输数据 ,那反序列化就是从二进制流(序列)转化为对象的过程。Parcelable是Android为我们提供的序列化的接口,Parcelable相对于Serializable的使用相对复杂一些,但Parcelable的效率相对Serializable也高很多。
    2. Parcel提供了一套机制，可以将序列化之后的数据写入到一个共享内存中，其他进程通过Parcel可以从这块共享内存中读出字节流，并反序列化成对象。
    3. 内存序列化上选择Parcelable, 存储到设备或者网络传输上选择Serializable(当然Parcelable也可以但是稍显复杂)。
    4. Serizaliable使用了反射，所以速度很慢，而且需要创建很多的临时对象，容易触发垃圾回收。而Paraelable则是将对象切割为Intent能够接受的单位，是直接通过静态的Creator创建的，很快。
8. **Intent**: 实现了Parcelable
9. **Bundle**: 
    1. 使用场景: Activity状态数据的保存与恢复涉及到的两个回调; Fragment的set/getArguments方法; 消息机制中的Message的setData方法等等
    2. 实现了Parcelable与Clonable接口，可以方便的在不同进程间传输，使用final修饰，所以不可以被继承。
    3. 使用的是ArrayMap，这个集合类存储的也是键值对，但是与Hashmap不同的是，hashmap采用的是“数组+链表”的方式存储，而Arraymap中使用的是两个数组进行存储，一个数组存储key，一个数组存储value，内部的增删改查都将会使用二分查找来进行，这个和SparseArray差不多，只不过sparseArray的key值只能是int型的，而Arraymap可以是map型，所以在数据量不大的情况下可以使用这两个集合代替hashmap去优化性能；
    4. Bundle提供了很多get/put方法，包括基本类型以及实现了Parcelable/Serializable接口的。
    5. mParcelledData的取值有3种情况: 
        1. mParcelledData = EMPTY_PARCEL
        2. mParcelledData = Parcel.obtain()
        3. mParcelledData = null
    6. 在unparcel()方法中就对上述几种情况做了不同的处理，当mParcelledData为null时，直接返回；当mParcelledData为EMPTY_PARCEL时，会创建一个容量为1的ArrayMap对象；当mParcelledData为Parcel.obtain()时，则会将里面的数据读出，并创建一个ArrayMap，并将数据存储到ArrayMap对象里面，同时将mParcelledData回收并置为null；

### Android Messenger

https://cloud.tencent.com/developer/article/1199115
https://blog.csdn.net/lmj623565791/article/details/47017485
https://blog.csdn.net/u011240877/article/details/72836178

### Android AIDL

https://developer.android.google.cn/guide/components/aidl  
https://www.jianshu.com/p/375e3873b1f4
https://blog.csdn.net/u011240877/article/details/72765136

### Android 系统启动

[Android源码-深入理解Window和WindowManager](https://www.jianshu.com/p/1c4059d3865b?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation)
[Window和WindowManager理解](https://blog.csdn.net/yhaolpz/article/details/68936932)

1. **window与windowManager介绍**: 
    1. 有时候我们需要在桌面上显示一个类似悬浮窗的东西，这种效果就需要用抽象类Window来实现，Window表示一个窗口，它的具体实现类是PhoneWindow，实现位于WindowManagerService中
    2. WindowManagerService(WMS)就是位于Framework层的窗口管理服务，它的职责就是管理系统中的所有窗口。窗口其实就是一块显示区域，在Android中就是绘制的画布: Surface，当一块Surface显示在屏幕上时，就是用户所看到的窗口了。WMS添加一个窗口的过程，其实就是WMS为其分配一块Surface的过程，一块块Surface在WMS的管理下有序的排列在屏幕上，Android才得以呈现出多姿多彩的界面。
    3. 根据对Surface的操作类型可以将Android的显示系统分为三个层次，如图: https://img-blog.csdn.net/20170401210007652?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQveWhhb2xweg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast
    4. Window有三种类型，分别是应用Window、子Window和系统Window。应用Window对应一个Acitivity，子Window不能单独存在，需要依附在特定的父Window中，比如常见的一些Dialog就是一个子Window。系统Window是需要声明权限才能创建的Window，比如Toast和系统状态栏都是系统Window。
    5. Window是分层的，每个Window都有对应的z-ordered，层级大的会覆盖在层级小的Window上面。在三种Window中，应用Window层级范围是1~99，子Window层级范围是1000~1999，系统Window层级范围是2000~2999。这些层级范围对应着WindowManager.LayoutParams的type参数，如果想要Window位于所有Window的最顶层，那么采用较大的层级即可，很显然系统Window的层级是最大的，当我们采用系统层级时，需要声明权限。
2. **WindowManager使用、内部原理**
    1. 我们对Window的操作是通过WindowManager来完成的，WindowManager是一个接口，它继承自只有三个方法的ViewManager接口: 
        ```java
        public interface ViewManager{
            public void addView(View view, ViewGroup.LayoutParams params);
            public void updateViewLayout(View view, ViewGroup.LayoutParams params);
            public void removeView(View view);
        }
        ```
        ```java
        // 使用例子
        public class MainActivity extends AppCompatActivity {
            @Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                Button floatingButton = new Button(this);
                floatingButton.setText("button");
                WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams(
                        WindowManager.LayoutParams.WRAP_CONTENT,
                        WindowManager.LayoutParams.WRAP_CONTENT,
                        0, 0,
                        PixelFormat.TRANSPARENT
                );
                // flag 设置 Window 属性
                layoutParams.flags= WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL;
                // type 设置 Window 类别(层级)
                layoutParams.type = WindowManager.LayoutParams.TYPE_SYSTEM_OVERLAY;  // 最高级的系统Window，而且在所有Window的最顶层
                layoutParams.gravity = Gravity.CENTER;
                WindowManager windowManager = getWindowManager();
                windowManager.addView(floatingButton, layoutParams);
            }
        }
        // 添加系统权限: <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
        ```
    2. 在实际使用中无法直接访问Window，对Window的访问必须通过WindowManager。WindowManager提供的三个接口方法addView、updateViewLayout以及removeView都是针对View的，这说明View才是Window存在的实体。WindowManager是一个接口，它的真正实现是WindowManagerImpl类。WindowManagerImpl并没有直接实现Window的三大操作，而是交给了WindowManagerGlobal来处理。以addView为例，分析一下WindowManagerGlobal中的实现过程: 
        1. 检查参数合法性，如果是子Window做适当调整，调整它的LayoutParams。
        2. 创建ViewRootImpl并将View添加到集合中，在WindowManagerGlobal内部有如下几个集合比较重要: 
            1. ArrayList<View> mViews: Window所对应的View
            2. ArrayList<ViewRootImpl> mRoots: Window所对应的ViewRootImpl
            3. ArrayList<WindowManager.LayoutParams> mParams: Window所对应的布局参数
            4. ArraySet<View> mDyingViews: 正在被删除的View对象
        3. addView操作时会将相关对象添加到对应集合中
    3. ViewRootImpl中的scheduleTraversals或者performTraversals中使用继承了Binder的IWindowSession类型的mWindowSession来调用WMS，IWindowSession的实现类是Session。也就是说 WindowManager --> WindowManagerImpl.addView --> WindowManagerGlobal.addView --> ViewRootImpl.scheduleTraversals --> IWindowSession.addToDisplay --> Session.addToDisplay --> WindowManagerService。
    4. WindowManager的添加、删除、更新都会通过一个IPC过程将操作移交给WindowManagerService这个位于Framework层的窗口管理服务来处理。
3. **Window的创建过程**
    1. View是Android中的视图的呈现方式，但是View不能单独存在，它必须附着在Window这个抽象的概念上面，因此有视图的地方就有Window。哪些地方有视图呢？Android可以提供视图的地方有Activity、Dialog、Toast，除此之外，还有一些依托Window而实现的视图，比如PopUpWindow(自定义弹出窗口)、菜单，它们也是视图，有视图的地方就有Window，因此Activity、Dialog、Toast等视图都对应着一个Window。这也是面试中常问到的一个知识点：一个应用中有多少个Window？下面分别分析Activity、Dialog以及Toast的Window创建过程。
    2. **Activity的Window创建过程**
        1. Activity的启动过程很复杂，最终会由ActivityThread中的performLaunchActivity()来完成整个启动过程，在这个方法内部会通过类加载器创建Activity的实例对象，并调用其attach方法为其关联运行过程中所依赖的一系列上下文环境变量。Activity的Window创建就发生在attach方法里，系统会创建Activity所属的Window对象并为其设置回调接口，代码如下: 
            ```java
            mWindow = PolicyManager.makeNewWindow(this)；
            mWindow.setCallback(this);
            mWindow.setOnWindowDismissedCallback(this);
            mWindow.getLayoutInflater().setPrivateFactory(this);
            ...
            ```
        2. 可以看到，Window对象的创建是通过PolicyManager的makeNewWindow方法实现的，由于Activity实现了Window的Callback接口，因此当Window接受到外界的状态改变时就会回调Activity的方法。Callback接口中的方法很多，有几个是我们非常熟悉的，如onAttachedToWindow、onDetachedFromWindow、dispatchTouchEvent等等。
        3. Activity的Window是通过PolicyManager的一个工厂方法来创建的，但是在PolicyManager的实际调用中，PolicyManager的真正实现是Policy类，Policy类中的makeNewWindow方法的实现如下: return new PhoneWindow(context);
        4. 之后是分析Activity的视图是怎么附属到Window上的。从setContentView入手: getWindow().setContentView(layoutResID)，Activity将具体实现交给了Window，而Window的具体实现是PhoneWindow，所以只需要看PhoneWindow的相关逻辑即可，它的处理步骤如下: 
            1. 如果没有DecorView就创建一个
            2. 将View添加到DecorView的mContentParent中
            3. 回调Activity的onContentChanged方法通知Activity视图已经发生改变
    3. **Dialog的Window创建过程**
        1. Dialog中Window同样是通过PolicyManager的makeNewWindow方法来完成的，创建后的对象也是PhoneWindow。
        2. 在创建Dialog的时候初始化DecorView并将Dialog的视图添加到DecorView中。
        3. 在Dialog的show方法中，会通过WindowManager将DecorView添加到Window中
        4. 当Dialog关闭时，它会通过WindowManager来移除DecorView。普通的Dialog必须采用Activity的Context，如果采用Application的Context就会报错。这是因为没有应用token导致的，而应用token一般只有Activity拥有，另外，系统Window比较特殊，可以不需要token。
    4. **Toast的Window创建过程**
        1. Toast与Dialog不同，它的工作过程稍显复杂，首先Toast也是基于Window来实现的，但是由于Toast具有定时取消这一功能，所以系统采用了Handler。在Toast内部有两类IPC过程，一是Toast访问NotificationManagerService(NMS)，第二类是NMS回调Toast里的TN接口。NMS同WNS一样，都是位于Framework层的服务。
        2. Toast属于系统Window，它内部的视图可以是系统默认样式也可以通过setView方法自定义View，不管如何，它们都对应Toast的内部成员mNextView，Toast提供show和cancel分别用于显示和隐藏Toast，它们内部是一个IPC过程，代码如下: 
            ```java
            public void show() {
                if (mNextView == null) {
                    throw new RuntimeException("setView must have been called");
                }
                INotificationManager service = getService();
                String pkg = mContext.getOpPackageName();
                TN tn = mTN;
                tn.mNextView = mNextView;
                try {
                    service.enqueueToast(pkg, tn, mDuration);
                } catch (RemoteException e) {
                    // Empty
                }
            }
            public void cancel() {
                mTN.hide();
                try {
                    getService().cancelToast(mContext.getPackageName(), mTN);
                } catch (RemoteException e) {
                    // Empty
                }
            }
            ```
        3. 可以看到，显示和隐藏Toast都需要通过NMS来实现，TN是一个Binder类，当NMS处理Toast的显示或隐藏请求时会跨进程回调TN中的方法。由于TN运行在Binder线程池中，所以需要通过 Handler将其切换到当前线程中，这里的当前线程指的是发送Toast请求所在的线程。
        4. enqueueToast方法内部将Toast请求封装为ToastRecord对象并将其添加到一个名为mToastQueue的队列中，对于非系统应用来说，mToastQueue中最多同时存在50个ToastRecord，用于防止DOS(Denial of Service 拒绝服务)。
        5. 当ToastRecord添加到mToastQueue中后，NMS就会通过showNextToastLocked方法来顺序显示Toast，但是Toast真正的显示并不是在NMS中完成的，而是由ToastRecord的callback来完成的。
        6. 从上面的分析，可以知道NMS只是起到了管理Toast队列及其延时的效果，Toast的显示和隐藏过程实际上是通过Toast的TN类来实现的，TN类的两个方法show和hide，是被NMS以跨进程的方式调用的，因此它们运行在Binder线程池中，为了将执行环境切换到Toast请求所在的线程，在它们内部使用了Handler。
        7. Toast毕竟是要在Window中实现的，因此它最终还是要依附于WindowManager。TN的handleShow/handleHide方法需要通过WindowManager来实现视图的移除
4. **application**: https://blog.csdn.net/totond/article/details/72782031 https://www.jianshu.com/p/b0dee36af8d0
    1. **每个APP都有一个Application实例**：如果我们没有继承Application子类自定义它的话，APP会创建一个默认的实例。
    2. **Application实例拥有着与APP一样长的生命周期**：在APP开启的时候首先就会实例化它，然后才是入口的Activity或者Service等。
    3. **Application与APP“同生共死”**，在一个APP的生命周期只实例化一次，所以它“天生”就是一个单例，不需要使用单例模式去实现它。
    4. Application是**继承自ContextWarpper**的，继承来的方法就不在这里说了，下面来看看**Application的方法**：
        1. onCreate
        2. onConfigurationChanged(Configuration newConfig)
        3. onLowMemory(): Android系统整体内存较低时，当APP处于前台时，但是所有后台程序都被kill光了，但是还是内存不足时，系统就会调用这个方法告诉APP，兄弟轮到你了。我们可以在这个方法里面释放一些不重要的资源，来保证到时候内存足够而让APP进程不被系统杀掉，或者提醒用户清一下垃圾，让内存清一点空位出来。
        4. onTrimMemory(int level): 当Android系统内存不足时调用这个方法告诉启动的APP，让它们减低点内存，否则就根据优先级调用onLowMemory来回收了。level是内存不足的严重性。假如这时候系统内存不足，运行着前台和后台一共几个APP，这些不同的APP会收到系统老妈不同的“劝告信息”: 
            1. TRIM_MEMORY_RUNNING_MODERATE=5: 轻量级的警告前台。告诉前台APP让它释放一下内存，但只会清理了其他后台APP与其他进程，而不会清除该前台APP。
            2. TRIM_MEMORY_RUNNING_LOW=10: 中级警告前台APP。
            3. TRIM_MEMORY_RUNNING_CRITICAL=15: 严重警告前台APP，甚至可能会调用onLowMemory来回收前台APP的资源了。
            4. TRIM_MEMORY_UI_HIDDEN=20: 轻量静态后台APP。内存不足时告诉后台APP我要回收你了。
            5. TRIM_MEMORY_BACKGROUND=40: 中级警告后台APP。
            6. TRIM_MEMORY_MODERATE=60: 严重警告后台APP。该后台APP已进入LRU缓存列表的中间位置，如果后面的APP进程资源都被回收的话，下一个就是轮到它了。
            7. TRIM_MEMORY_COMPLETE=80: 严重警告后台APP。该后台APP已处于LRU缓存列表的后面位置，APP随时都有被回收的风险
        5. onTerminate: 这个方法在程序结束的时候会调用。但是这个方法只用于Android仿真机测试的时候，在Android产品机是不会调用的。所以这个方法并没什么用。
        6. registerActivityLifecycleCallbacks()和unregisterActivityLifecycleCallbacks(): 用于注册或者注销对APP内所有Activity的生命周期监听，当APP内Activity的生命周期发生变化的时候就会调用ActivityLifecycleCallbacks里面的方法。
            ```java
            new ActivityLifecycleCallbacks() {
                @Override public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
                    Log.d(TAG,"onActivityCreated: " + activity.getLocalClassName());
                }
                @Override public void onActivityStarted(Activity activity) {}
                @Override public void onActivityResumed(Activity activity) {}
                @Override public void onActivityPaused(Activity activity) {}
                @Override public void onActivityStopped(Activity activity) {}
                @Override public void onActivitySaveInstanceState(Activity activity, Bundle outState) {}
                @Override public void onActivityDestroyed(Activity activity) {}
            }
            ```
        7. registerComponentCallbacks()和unregisterComponentCallbacks(): 
            ```java
            new ComponentCallbacks2() {
                @Override public void onTrimMemory(int level) {}
                @Override public void onConfigurationChanged(Configuration newConfig) {}
                @Override public void onLowMemory() {}
            }
            ```
        8. registerOnProvideAssistDataListener()和unregisterOnProvideAssistDataListener(): 不知道有什么用
        9. onScreenOff()：锁屏回调与onScreenOn()：解锁回调
    5. **Application类的使用**: 
        1. android:name=".BaseApplication"
        2. **初始化资源**: 由于Application类是在APP启动的时候就启动，启动在所有Activity之前，所以可以使用它做资源的初始化操作，如图片资源初始化，WebView的预加载，推送服务的注册等等，注意不要执行耗时操作，会拖慢APP启动速度。
        3. **数据全局共享**: 可以设置一些全局的共享常量，可以设置一些全局使用的共享变量数据，可以设置一些静态方法来让其他类调用。
        4. **监听App所处状态**: 锁屏开屏，退到后台回到前台，手机内存状态，横竖屏切换，Activity的生命周期，退出应用(不稳定)，这些都可以通过Application监听。
5. 

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
            2. 生命周期: 在Activity的onDestroy()中调用cancel()方法
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
            2. 理想情况下，AsyncTasks应该用于短操作(最多几秒钟。)如果需要保持线程长时间运行，强烈建议您使用java.util.concurrent提供的各种API。如果需要保持线程长时间运行，强烈建议您使用java.util.concurrent包提供的各种API，例如Executor，ThreadPoolExecutor和FutureTask。
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
		MotionEvent.ACTION_POINTER_UP;				// 当屏幕上有多个点被按住，松开其中一个点时触发(即非最后一个点被放开时)。
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
		// firstVisibleItem:  当前屏幕显示的第一个item的位置(下标从0开始)
		// visibleItemCount: 当前屏幕可以见到的item总数，包括没有完整显示的item
		// totalItemCount: Item的总数，** 包括通过addFooterView添加的那个item **
		// 在listview的item发生变化的时候(初始化/notifyDataSetChanged())，onScroll会被调用
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
    3. **Fastjson**: 采用了一种"假定有序、快速匹配"的算法，把JSON Parse的性能提升到极致，是目前Java语言中最快的JSON库。
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

1. **Bitmap的高效加载**
    1. BitmapFactory类提供四种方法: decodeFile、decodeResource、decodeStream和decodeByteArray；其中decodeFile和decodeResource间接的调用了decodeStream方法；这四个方法最终在Android底层实现。
    2. 如何高效的加载Bitmap？核心思想: 按需加载；很多时候ImageView并没有原始图片那么大，所以没必要加载原始大小的图片。采用BitmapFactory.Options来加载所需尺寸的图片。通过BitmapFactory.Options来缩放图片，主要是用到了它的inSampleSize参数，即采样率。inSampleSize应该为2的指数，如果不是系统会向下取整并选择一个最接近2的指数来代替；缩放比例为1/(inSampleSize的二次方)。
    3. Bitmap内存占用: 拿一张1024x1024像素的图片来说，假定采用ARGB8888格式存储，那么它占用的内存为1024\*1024\*4，即4MB。
    4. 
2. **Android的缓存策略**
    1. 如何减少流量消耗？缓存。当程序第一次从网络上加载图片后，将其缓存在存储设备中，下次使用这张图片的时候就不用再从网络从获取了。一般情况会把图片存一份到内存中，一份到存储设备中，如果内存中没找到就去存储设备中找，还没有找到就从网络上下载。
    2. 目前常用的缓存算法是LRU，是近期最少使用算法，当缓存满时，优先淘汰那些近期最少使用的缓存对象。采用LRU算法的缓存有两种: LRUCache(内存缓存)和DiskLruCache(存储缓存)。
    3. LruCache是Android3.1所提供的一个缓存类，通过support-v4兼容包可以兼容到早期的Android版本。LruCache是一个泛型类，是线程安全的，内部采用LinkedHashMap以强引用的方式存储外界缓存对象，并提供get和put方法来完成缓存的获取和添加操作，当缓存满时，LruCache会移除较早的使用的缓存对象。LruCache初始化时需重写sizeOf方法，用于计算缓存对象的大小。
    4. DiskLruCache用于实现磁盘缓存，DiskLruCache得到了Android官方文档推荐，但它不属于Android SDK的一部分，https://android.googlesource.com/platform/libcore/+/android-4.1.1_r1/luni/src/main/java/libcore/io/DiskLruCache.java
    5. 自己实现一个ImageLoader，包含 https://github.com/singwhatiwanna/android-art-res/blob/master/Chapter_12/src/com/ryg/chapter_12/loader/ImageLoader.java
        1. 图片压缩功能
        2. 内存缓存和磁盘缓存
        3. 同步加载和异步加载的接口设计
3. 

### Android 消息通知

1. Toast
2. AlertDialog
3. Notification
4. 

### Android 视频音频

1. [Android 集成 FFmpeg](https://blog.csdn.net/yhaolpz/article/details/76408829)

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
    3. **Attribute Animation 属性动画**，这也是在android3.0之后引进的动画，在手机的版本上是android4.0就可以使用这个动画，通过动态的改变对象的属性从而达到动画效果。动画默认间隔0.3s。默认帧率10ms/帧。
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
    1. **补间动画只是改变了View的显示效果而已，并不会真正的改变View的属性。而属性动画可以改变View的显示效果和属性，可以对任何对象做动画，动画的效果也也得到了加强，可以实现更加绚丽的动画效果**。。举个例子: 例如屏幕左上角有一个Button按钮，使用补间动画将其移动到右下角，此刻你去点击右下角的Button，它是绝对不会响应点击事件的，因此其作用区域依然还在左上角。只不过是补间动画将其绘制在右下角而已，而属性动画则不会。
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
                    //注意: 由于配置了opts并且是仅仅获取图片边界的属性，因此该方法返回的对象永远为null
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
3. 其他
    1. **自定义View动画**只需要继承Animation这个抽象类，并重写initialize和applyTransformation方法，在initialize方法中做一些初始化工作，在applyTransformation中进行相应的矩形变换，很多时候需要采用Camera来简化矩形变换过程。
    2. Animation通过**setAnimationListener**方法可以给View动画添加过程监听。
    3. **LayoutAnimation**作用于ViewGroup,为ViewGroup指定一个动画，当他的子元素出场的时候都会具有这种动画，ListView上用的多，LayoutAnimation也是一个View动画。
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <layoutAnimation xmlns:android="http://schemas.android.com/apk/res/android"
            android:animationOrder="normal" android:delay="0.3" android:animation="@anim/anim_item"/>
        <!-- delay 表示动画开始的时间延迟，比如子元素入场动画的时间周期为300ms, 那么0.5表示每个子元素都需要延迟150ms才开始播放入场动画。 -->
        <!-- animationOrder 表示子元素的动画的顺序，有三种选项: normal(顺序显示)、reverse(逆序显示)和random(随机显示)。 -->
        <!-- res/anim/anim_item.xml -->
        <?xml version="1.0" encoding="utf-8"?>
        <set xmlns:android="http://schemas.android.com/apk/res/android"
            android:duration="300" android:shareInterpolator="true">
            <alpha android:fromAlpha="0.0" android:toAlpha="1.0" />
            <translate android:fromXDelta="300" android:toXDelta="0" />
        </set>
        <!-- 使用方法一 -->
        <ListView
            android:id="@+id/lv"
            android:layout_width="match_parent"
            android:layout_height="0dp"
            android:layout_weight="1"
            android:layoutAnimation="@anim/anim_layout"/>
        ```
        ```java
        Animation animation = AnimationUtils.loadAnimation(this, R.anim.anim_item);
        LayoutAnimationController controller = new LayoutAnimationController(animation);
        controller.setDelay(0.5f);
        controller.setOrder(LayoutAnimationController.ORDER_NORMAL);
        listview.setLayoutAnimation(controller);
        ```
    4. Activity/Fragment的切换效果
        1. 在startActivity(Intent)或finish()之后调用override PendingTransition(int enterAnim,int exitAnim)方法。
        2. Fragment也可以添加切换动画，通过FragmentTransaction中的setCustomAnimations()方法来添加；需考虑兼容性使用View动画，属性动画是API11新引入的。
    5. 实际开发中建议使用代码来实现属性动画，代码来实现比较简单，而且很多时候一个熟悉的初始值无法提前知道，需在代码中动态获取。
    6. **属性动画的工作原理**: 通过反射调用get/set方法；属性动画需要运行在有Looper的线程中。
4. **实例**: 
    1. 
5. **注意点**: 
    1. 使用帧动画时，当图片数量较多且图片分辨率较大的时候容易出现OOM，需注意，尽量避免使用帧动画。
    2. 使用无限循环的属性动画时，在Activity退出时及时停止，否则将导致Activity无法释放从而造成内存泄露。
    3. View动画是对View的影像做动画，并不是真正的改变了View的状态，因此有时候会出现动画完成后View无法隐藏(setVisibility(View.GONE)失效)，这时候调用view.clearAnimation()清理View动画即可解决。
    4. 不要使用px，使用px会导致不同设备上有不同的效果。
    5. View动画是对View的影像做动画，View的真实位置没有变动，也就导致点击View动画后的位置触摸事件不会响应，属性动画不存在这个问题。
    6. 使用动画的过程中，使用硬件加速可以提高动画的流畅度。android:hardwareAccelerated="true"
    7. 动画在3.0以下的系统存在兼容性问题，特殊场景可能无法正常工作，需做好适配工作。
6. 

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

布局优化、绘制优化、内存泄漏优化、响应速度优化、ListView优化、Bitmap优化、线程优化等

[android 开发中需要注意内存泄露的地方](https://blog.csdn.net/tianxuhong/article/details/47394601)

1. **合理管理内存**:
    1. **节制的使用Service**: 启动一个Service时，系统会倾向于将该Service所依赖的进程进行保留，系统可以在LRUcache当中缓存的进程数量也会减少，导致切换程序的时候耗费更多性能。推荐使用IntentService
    2. **当界面不可见时释放内存**: 重写Activity的onTrimMemory()方法，在这个方法中监听TRIM_MEMORY_UI_HIDDEN这个级别(触发就说明用户离开了程序，此时就可以进行资源释放操作了)
    3. **当内存紧张时释放内存**: onTrimMemory()方法还有很多种其他类型的回调，可以在手机内存降低的时候及时通知我们，我们应该根据回调中传入的级别来去决定如何释放应用程序的资源。
    4. **避免在Bitmap上浪费内存**:  读取一个Bitmap图片的时候，千万不要去加载不需要的分辨率。可以压缩图片等操作
    5. **使用优化过的数据集合**: Android提供了一系列优化过后的数据集合工具类，如SparseArray、SparseBooleanArray、LongSparseArray，使用这些API可以让我们的程序更加高效。HashMap工具类会相对比较低效，因为它需要为每一个键值对都提供一个对象入口，而SparseArray就避免掉了基本数据类型转换成对象数据类型的时间。
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
    7. **采用内存缓存和磁盘缓存**
    8. **适当的使用软引用和弱引用**
    9. **使用一些Android特有的数据结构，比如SparseArray和Pair等，他们都具有更好的性能**
    10. **不要过多的使用枚举，枚举占用的内存空间比整形大**
4. **布局优化技巧**:
    1. **重用布局文件**: 如果我们要在标签中覆写layout属性，必须要将layout_width和layout_height这两个属性也进行覆写，否则覆写效果将不会生效。
    2. **仅在需要时才加载布局**: 用VISIBLE性能表现一般，可以用ViewStub。ViewStub所加载的布局是不可以使用标签的，因此这有可能导致加载出来出来的布局存在着多余的嵌套结构。
    3. **ListView的ViewHandler类声明**: 
5. **绘制优化**
    1. onDraw中**不要创建大量的局部对象**，因为onDraw方法会被频繁调用，这样就会在一瞬间产生大量的临时对象，不仅会占用过多内存还会导致系统频繁GC，降低程序执行效率。
    2. onDraw也**不要做耗时的任务**，也不能执行成千上万的循环操作，尽管每次循环都很轻量级，但大量循环依然十分抢占CPU的时间片，这会造成View的绘制过程不流畅。根据Google官方给出的标准，View绘制保持在60fps是最佳的，这也就要求每帧的绘制时间不超过16ms(1000/60)；所以要尽量降低onDraw方法的复杂度。
6. **响应速度优化**: 
    1. 响应速度优化的核心思想就是避免在主线程中去做耗时操作，将耗时操作放在其他线程当中去执行。Activity如果5秒无法响应屏幕触摸事件或者键盘输入事件就会触发ANR，而BroadcastReceiver如果10秒还未执行完操作也会出现ANR。当一个进程发生ANR以后系统会在/data/anr的目录下创建一个文件traces.txt，通过分析该文件就能定位出ANR的原因。

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
    2. jstat -gccapacity pid: 可以显示，VM内存中三代(young,old,perm)对象的使用和占用大小，如: PGCMN显示的是最小perm的内存使用量，PGCMX显示的是perm的内存最大使用量，
        PGC是当前新生成的perm内存占用量，PC是但前perm内存占用量。��他的可以根据这个类推，OC是old内纯的占用量。
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
6. AsyncTask<Param, Progress, Result>: 
    1. 成员变量: 
        1. private static final int: CPU_COUNT/CORE_POOL_SIZE(5)/MAXIMUM_POOL_SIZE(128)/KEEP_ALIVE_SECONDS
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
8. IntentService: 
    1. 成员变量
        1. private volatile Looper mServiceLooper
        2. private volatile ServiceHandler mServiceHandler;
        3. private String mName;  // Used to name the worker thread, important only for debugging.
        4. private boolean mRedelivery;
    2. public void setIntentRedelivery(boolean enabled);  // true后onStartCommand返回START_REDELIVERY_INTENT，否则返回START_NOT_STICKY
    3. public void abstract onHandleIntent(Intent intent);
    4. 对比Service: 
        1. 继承于Service，拥有与Service一样的生命周期和启动销毁方法。
        2. 内部含有HandlerThread作为工作线程，可以处理耗时任务。
        3. 所有请求经过onHandleIntent处理后，自动调用stopSelf(msg.arg1)。
        4. 默认实现onBind，返回null。
        5. 默认实现onStartCommand，调用onStart，将intent放置到MessageQueue队列中。
9. Bitmap(粗浅解析): https://blog.csdn.net/qq_30993595/article/details/84109226 https://www.cnblogs.com/punkisnotdead/p/4881771.html https://blog.csdn.net/qq_30993595/article/details/84025632 https://blog.csdn.net/androidstarjack/article/details/64538419
    1. 成员变量: 
        1. public int mDensity: 密度 https://blog.csdn.net/hn_lgc/article/details/51314644 https://blog.csdn.net/Just_keep/article/details/42457059
            1. 直接缩放是对尺寸进行缩放，Bitmap的密度不会变；使用Matrix缩放Bitmap，缩放之后的密度是不变的。
            2. 缩放密度之后就相当于在Bitmap里面增删像素pix，所占的内存会相应的变化。
            3. 创建空Bitmap的默认的density是屏幕的显示密度。 
            4. Bitmap与canvas密度之间的关系: canvas有自己的密度，除了使用将Bitmap绘制到矩形内这个方法drawBitmap(Bitmap, Rect, RectF, Paint)之外，其它的drawBitmap方法缩放Bitmap到相同的密度再进行绘制。
            5. BitmapFactory解析Bitmap时对密度的处理: BitmapFactory解析Bitmap时，默认进行缩放的。通过indensity，inTargetDensity 等控制缩放，让其在屏幕上现显示出合适的物理尺寸合适。比如同样大小的屏幕，其密度不一致，就会进行缩放，然后显示出的大小就相同了；还有如果同一个图片放到mipmap或Drawable的不同目录下，缩放倍数也不相同。。。。
10. BitmapFactory: 
11. Bundle(粗浅解析): 
    1. 成员变量: 
        1. public static final Bundle EMPTY/STRIPPED
        2. private ArrayMap mMap
        3. private int mFlags
        4. 
        5. 
    2. 构造函数: ...
    3. 一些有用的方法: 
        1. public static forPair(String key, String value)
        2. public Bundle deepCopy()
        3. public void clear()/remove(String key)/putAll(Bundle)/putXxx(String key, Xxx value)/getXxx(String key, Xxx defaultValue)/
        4. public boolean hasFileDescriptors()
12. 

### Android Android NDK 与 Java JNI

* [Android：JNI 与 NDK到底是什么？(含实例教学，入门)](https://blog.csdn.net/carson_ho/article/details/73250163)
* [Android: JNI 入门](https://www.cnblogs.com/rocomp/p/4892866.html)
* **[Oracle JNI系列](https://docs.oracle.com/javase/10/docs/specs/jni/index.html)**
* **[JNI系列1](https://www.zybuluo.com/cxm-2016/note/566623)**
* [JNI系列2](https://www.jianshu.com/p/87ce6f565d37)
* [NDK系列1](https://blog.csdn.net/xyang81/column/info/blogjnindk)
* [NDK系列2](https://www.cnblogs.com/skywang12345/archive/2013/05/23/3095013.html)
* **[NDK系列3](https://github.com/googlesamples/android-ndk)**
* []()
* [Android NDK开发之引入第三方库](https://juejin.im/post/5b3588976fb9a00e36427131)

0. Jni实例
    1. java 调用 c++
        1. 新建java文件
            ```java
            package jni;
            public class JniTestOne {
                public native void testHello();
                public static void main(String[] args) {
                    System.loadLibrary("JniTestOne");
                    new JniTestOne().testHello();
                }
            }
            ```
        2. 在bin目录下通过命令 ``javah -classpath . -jni jni.JniTestOne`` 来为JniTestOne生成C++的h头文件: jni_JniTestOne.h，然后到jdk的include下找到 ./jni.h 和 ./win32/jni_mod.h，将它们放到新建的visual studio的DLL项目(项目名为JniTestOne)的头文件中。然后将JniTestOne.cpp修改为
            ```cpp
            #include <stdio.h>
            #include <iostream>
            #include "stdafx.h"
            #include "jni_JniTestOne.h"

            JNIEXPORT void JNICALL Java_jni_JniTestOne_testHello(JNIEnv * env, jobject obj) {
                // 这里的 jobject 类型的obj相当于java对象的this指针，后面可以是该native方法的参数，如 jstring s, jint i
                printf("this is C++ project.");
            }
            ```
        3. 之后在菜单栏中将 "Debug" 一栏改为 "Release" ，将 "x86" 改为 "x64"，同时右键解决方案，选择属性，选择配置，将配置中的 "Debug" 和 "x86" 改为 "Release" 和 "x64" (这里是因为我的平台和jdk都是64位的)，然后右键项目(不是解决方案)，选择生成。之后在项目根目录的 x64/Release/ 文件夹下取 JniTestOne.dll 。
        4. 现在将 JniTestOne.dll 放到项目根目录(或者是C:/windows/system32/目录)下，之后运行 JniTestOne.java 就行了。
    2. c++ 调用 java
        1. 在 /java/test/utils/ 下添加 JniDemo.java
            ```java
            package utils;

            public class JniDemo {

                public static int COUNT = 8;

                public static String getHelloWorld() {
                    return "Hello World: from java static method";
                }

                private String msg;
                private int[] counts;

                public JniDemo() {
                    this("default constructor");
                }

                public JniDemo(String msg) {
                    this.msg = msg;
                    this.counts = null;
                }

                public String getMessage() {
                    return this.msg + ": from java getter method";
                }

                public int[] getCounts() {
                    return this.counts;
                }

                public void setCounts(int[] counts) {
                    this.counts = counts;
                }

                public String append(String str, int i) {
                    return str + i;
                }
            }
            ```
        2. 在 /cpp/test/jni/ 目录下添加 test.cpp
            ```cpp
            #include <iostream>
            #include <string>
            #include <cstdio>
            #include <windows.h>
            #include "jni.h"

            using namespace std;

            int main(int argc, char const *argv[]) {
                JavaVM *jvm;
                JNIEnv *env;
                JavaVMOption *options = new JavaVMOption[3];
                JavaVMInitArgs vm_args;

                options[0].optionString = "-Djava.compiler=NONE";
                options[1].optionString = "-Djava.class.path=.;..\\..\\..\\java\\test\\";
                options[2].optionString = "-verbose:gc,class";

                vm_args.version = JNI_VERSION_1_8;
                vm_args.nOptions = 3;
                vm_args.options = options;
                vm_args.ignoreUnrecognized = JNI_FALSE;

                HMODULE hLibModule = LoadLibrary("D:\\software\\Java\\jdk1.8.0_181\\jre\\bin\\server\\jvm.dll");
                typedef jint(WINAPI * PFunCreateJavaVM)(JavaVM **, void **, void *);
                PFunCreateJavaVM funCreateJavaVM = (PFunCreateJavaVM)GetProcAddress(hLibModule, "JNI_CreateJavaVM");
                (*funCreateJavaVM)(&jvm, (void **)&env, &vm_args);
                delete[] options;

                jclass cls = env->FindClass("utils/JniDemo");
                jobject obj = env->AllocObject(cls);
                jmethodID appendMethodId = env->GetMethodID(cls, "append", "(Ljava/lang/String;I)Ljava/lang/String;");
                const char *cstr = "from C: ";
                jstring jstr = env->NewStringUTF(cstr);
                jstring jmsg = (jstring)env->CallObjectMethod(obj, appendMethodId, jstr, 12);
                const char *cmsg = env->GetStringUTFChars(jmsg, JNI_FALSE);  // 使用中文会有中文乱码
                printf("%s\n", cmsg);

                jvm->DestroyJavaVM();
                FreeLibrary(hLibModule);
            }
            ```
        3. 在 /java/test/ 目录下打开命令行，使用 ``javac -classpath . utils.JniDemo.java`` 生成 JniDemo.class ，然后使用 ``javap -s -p -classpath. .\utils\JniDemo.java`` 查看JniDemo中每个字段方法的签名，可以用在env->GetFieldId或者env->GetMethodId上。
        4. 在 /cpp/test/jni/ 目录下打开命令行，使用 ``g++ test.cpp -o test.exe; .\test.exe`` 来执行c++程序。最后输出 ``from c: 12`` 。
1. Jni基本知识
    1. JNI是Java与C、C++、Objective-C、Objective-C++等静态编译语言以及汇编语言相交互的接口。尽管目前而言，Java提供了诸多运行时性能较高的运行时库，但是在很多方面，尤其是高性能计算领域，Java提供的高效库还不是很多，因此我们可以通过JNI接口将我们用静态语言以及汇编编译连接为动态库后给Java应用程序加载调用。而且
        1. 有时候
            1. 标准Java类库不支持应用程序所需的与平台相关的功能。
            2. 您已经有一个用另一种语言编写的库，并希望通过JNI使其可以访问Java代码。
            3. 您希望在较低级别的语言(如汇编语言)中实现一小部分时间关键代码。
        2. 或者通过Jni
            1. 创建，检查和更新Java对象(包括数组和字符串)。
            2. 调用Java方法。
            3. 捕获并抛出异常。
            4. 加载类并获取类信息。
            5. 执行运行时类型检查。
    2. 类型
        1. boolean <--> jboolean <--> unsigned 8 bits
            1. ``#define JNI_FALSE  0``
            2. ``#define JNI_TRUE   1``
        2. byte <--> jbyte <--> char(signed 8 bits)
        3. char <--> jchar <--> wchar_t(unsigned 16 bits)
        4. short <--> jshort <--> short(signed 16 bits)
        5. int <--> jint <--> int(signed 32 bits)
            1. ``typedef jint jsize;``
        6. long <--> jlong <--> long(signed 64 bits)
        7. float <--> jfloat <--> float(32 bits)
        8. double <--> jdouble <--> double(64 bits)
        9. String <--> char*
        10. void  <--> void <--> not appliable
        11. jobject
            1. jclass
            2. jstring
            3. jarray
                1. jobjectArray (对象数组)
                2. jbooleanArray(boolean数组)
                3. jbyteArray(byte数组)
                4. jcharArray(char数组)
                5. jshortArray(short数组)
                6. jintArray(int数组)
                7. jlongArray(long数组)
                8. jfloatArray(float数组)
                9. jdoubleArray(double数组)
            4. jthrowable(java.lang.Throwable对象)
            5. 在C中，所有其他JNI引用类型都定义为与jobject相同。例如：``typedef jobject jclass;`` 。在C ++中，JNI引入了一组虚拟类来强制执行子类型关系。例如：
                ```cpp
                class _jobject {};
                class _jclass : public _jobject {};
                // ...
                typedef _jobject *jobject;
                typedef _jclass *jclass;
                ```
        12. 方法和字段ID是常规C指针类型
            ```cpp
            struct _jfieldID;              /* opaque structure */
            typedef struct _jfieldID *jfieldID;   /* field IDs */
            struct _jmethodID;              /* opaque structure */
            typedef struct _jmethodID *jmethodID; /* method IDs */
            ```
        13. jvalue作为自变量阵列的元素类型。
            ```cpp
            typedef union jvalue {
                jboolean z;
                jbyte    b;
                jchar    c;
                jshort   s;
                jint     i;
                jlong    j;
                jfloat   f;
                jdouble  d;
                jobject  l;
            } jvalue;
            ```
        14. **类型签名**
            ```cpp
            Type Signature <--> Java Type
            Z <--> boolean
            B <--> byte
            C <--> char
            S <--> short
            I <--> int
            J <--> long
            F <--> float
            D <--> double
            L fully-qualified-class ; <--> fully-qualified-class
            [ type <--> type[]
            ( arg-types ) ret-type <--> method type
            // 如方法 long f(int n, String s, int[] arr); 拥有签名 "(ILjava/lang/String;[)J"
            ```
        15. https://docs.oracle.com/en/java/javase/11/docs/specs/jni/types.html#modified-utf-8-strings
    3. jni_md.h提供了依赖于平台的头文件；jni.h提供了jni所需要的接口声明以及各种类型的定义。我们创建项目时应该将工程的输出目标设置为动态连接库(windows下为.dll，Unix-like下为.so，OS X下为.dylib)。
2. Jni基本使用: 可以通过JNIEnv参数以固定偏移量访问每个函数。JNIEnv的类型是一个指向存储所有JNI函数指针的结构。它的定义如下：``typedef const struct JNINativeInterface *JNIEnv;`` 。VM初始化函数表，如以下代码示例所示。请注意，前三个条目保留用于将来与COM的兼容性。此外，我们在函数表的开头附近保留了许多附加NULL条目，因此，例如，可以在FindClass之后而不是在表的末尾添加与类相关的未来JNI操作。请注意，函数表可以在所有JNI接口指针之间共享。
    1. class | reflected | extends
        ```cpp
        const struct JNINativeInterface ... = {
            NULL,
            NULL,
            NULL,
            NULL,
            GetVersion,

            DefineClass,
            FindClass,
            GetSuperclass,
            IsAssignableFrom,
            GetObjectClass,
            IsInstanceOf,

            FromReflectedMethod,  // jmethodID fromReflectedMethod(jobject method)
            FromReflectedField,  // jfieldID fromReflectedField(jobject field)
            ToReflectedMethod,  // jobject toReflectedMethod(jclass cls, jmethodID fieldId, bool isStatic)
            ToReflectedField,  // jobject toReflectedField(jclass cls, jfieldID fieldId, bool isStatic)
        ```
    2. **error** | **alloc** | **ref**  https://docs.oracle.com/en/java/javase/11/docs/specs/jni/functions.html
        ```cpp
            Throw,
            ThrowNew,
            ExceptionOccurred,
            ExceptionDescribe,
            ExceptionClear,
            ExceptionCheck,
            FatalError,

            EnsureLocalCapacity,
            PushLocalFrame,  // Push/PopLocalFrame函数对提供了对局部引用的生命周期更方便的管理。你可以在本地函数的入口处调用PushLocalFrame，然后在出口处调用PopLocalFrame，这样的话，在两个函数之间任何位置创建的局部引用都会被释放。而且，这两个函数是非常高效的。如果你在函数的入口处调用了PushLocalFrame，那么一定要在函数返回时调用PopLocalFrame。注意PushLocalFrame用于申请可创建的引用数
            PopLocalFrame,

            NewGlobalRef,
            DeleteGlobalRef,
            NewWeakGlobalRef,
            DeleteWeakGlobalRef,
            NewLocalRef,
            DeleteLocalRef,
            IsSameObject,
            GetObjectRefType,
            
            // JNIInvalidRefType    = 0
            //  JNILocalRefType      = 1  // 局部引用是JVM负责的引用类型，其被JVM分配管理，并占用JVM的资源。局部引用在native方法返回后被自动回收。局部引用只在创建它们的线程中有效，不能跨线程传递。
            //  JNIGlobalRefType     = 2  // 全局引用可以跨方法(本地方法返回后仍然有效)，跨线程使用，直到手动释放才会失效。该引用不会被GC回收。
            //  JNIWeakGlobalRefType = 3  // 弱全局引用是一种特殊的全局引用。跟普通的全局引用不同的是，一个弱全局引用允许Java对象被垃圾回收器回收。当垃圾回收器运行的时候，如果一个对象仅被弱全局引用所引用，则这个引用将会被回收。一个被回收了的弱引用指向NULL，开发者可以将其与NULL比较来判定该对象是否可用。

            AllocObject,
            NewObject,
            NewObjectV,
            NewObjectA,
            // jobject NewObject(jclass cls, jmethodID method, ...)
            // jobject NewObjectA(jclass cls, jmethodID method, const jvalue *args)
            // jobject NewObjectV(jclass cls, jmethodID method, va_list args)
        ```
    3. call_method | call_methodV | call_methodA | nonvirtual
        ```cpp
            GetMethodID,
            Call<Type>Method
            Call<Type>MethodV
            Call<Type>MethodA
            // Type分别有
            //     Object
            //     Boolean
            //     Byte
            //     Char
            //     Short
            //     Int
            //     Long
            //     Float
            //     Double
            //     Void
            CallNonvirtual<Type>Method,
            CallNonvirtual<Type>MethodV,
            CallNonvirtual<Type>MethodA,

            GetStaticMethodID,
            CallStatic<Type>Method,
            CallStatic<Type>MethodV,
            CallStatic<Type>MethodA,
        ```
    4. get_field | set_field
        ```cpp
            GetFieldID,
            Get<PrimitiveType>Field,
            Set<PrimitiveType>Field,
            // PrimitiveType是指除去了Void的Type

            GetStaticFieldID,
            GetStatic<PrimitiveType>Field,
            SetStatic<PrimitiveType>Field,
        ```
    5. string
        ```cpp
            NewString,
            NewStringUTF,
            GetStringLength,
            GetStringUTFLength,
            GetStringChars,
            GetStringUTFChars,
            GetStringCritical,  // const jchar * GetStringCritical(JNIEnv *env, jstring string, jboolean *isCopy)  类似GetStringChars，但有很严重的限制
            GetStringRegion,  // void GetStringRegion(jstring str, jsize start, jsize len, jchar *buf)  用于复制/如果是Set则是拷贝回来
            GetStringUTFRegion,
            ReleaseStringChars,
            ReleaseStringUTFChars,  // void ReleaseStringUTFChars(jstring s, const char* strs)  拷贝回来
            ReleaseStringCritical,
        ```
    6. array
        ```cpp
            GetArrayLength,
            GetPrimitiveArrayCritical,
            ReleasePrimitiveArrayCritical,

            NewObjectArray,
            GetObjectArrayElement,
            SetObjectArrayElement,

            New<PrimitiveType>Array,
            Get<PrimitiveType>ArrayElements,
            Release<PrimitiveType>ArrayElements,  // void releaseBooleanArrayElements(JNIEnv *env, ArrayType array, NativeType *elems, jint mode)  复制函数(其实不一定复制，看mode), mode分为
            //     0    复制内容并释放elems缓冲区
            //     JNI_COMMIT	复制内容但不释放elems缓冲区
            //     JNI_ABORT	不复制内容但释放elems缓冲区
            // 在某些情况下，我们需要原始数据指针来进行一些操作。调用GetPrimitiveArrayCritical可以获得一个指向原始数据的指针，但是在调用ReleasePrimitiveArrayCritical函数之前，我们要保证不能进行任何可能会导致线程阻塞的操作。由于GC的运行会打断线程，所以在此期间任何调用GC的线程都会被阻塞。
            Get<PrimitiveType>Region,
            Set<PrimitiveType>Region,
        ```
    7. others
        ```cpp
            RegisterNatives,  // jint RegisterNatives(jclass cls, const JNINativeMethod *methods, jint nMethods)  好处(https://blog.csdn.net/qiuxiaolong007/article/details/7860610)
            // 1. 不用那么拘泥名字
            // 2. 效率高
            // 3. 运行时动态调整本地函数与Java函数值之间的映射关系，只需要多次call RegisterNatives()方法，并传入不同的映射表参数即可。
            // 4. 为了使用RegisterNatives，我们需要了解JNI_OnLoad和JNI_OnUnload函数。JNI_OnLoad()函数在VM执行System.loadLibrary(xxx)函数时被调用，它有两个重要的作用：
            //  4.1 指定JNI版本：告诉VM该组件使用那一个JNI版本(若未提供JNI_OnLoad()函数，VM会默认该使用最老的JNI 1.1版)，如果要使用新版本的JNI，则须由JNI_OnLoad()函数返回常量JNI_VERSION_1_4(该常量定义在jni.h中)来告知VM。
            //  4.2 初始化设定，当VM执行到System.loadLibrary()函数时，会立即先呼叫JNI_OnLoad()方法，因此在该方法中进行各种资源的初始化操作最为恰当，RegisterNatives也在这里进行。
            // 5. JNI_OnUnload()当VM释放该组件时被调用，JNI_OnUnload()函数的作用与JNI_OnLoad()对应，因此在该方法中进行善后清理，资源释放的动作最为合适。

            // JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *reserved) { ; }
            // JNIEXPORT void JNICALL JNI_OnUnLoad(JavaVM *vm, void *reserved) { ; }
            UnregisterNatives,

            MonitorEnter,  // jint MonitorEnter(jobject obj)  相当于 synchronized(obj) {
            MonitorExit,  // 相当于 synchronized 后的 }

            GetJavaVM,

            GetModule,

            NewDirectByteBuffer,  // NIO接口，比如这个 jobject NewDirectByteBuffer(void* address, jlong capacity)  可以返回java.nio.ByteBuffer对象的局部引用，当发生异常时返回NULL。
            GetDirectBufferAddress,  // 返回直接缓冲区的地址指针，发生异常时返回NULL
            GetDirectBufferCapacity,  // 返回缓冲区容量，发生异常时返回-1
        };
        ```
    8. 常量
        ```cpp
        #define JNI_FALSE        0
        #define JNI_TRUE         1
        #define JNI_OK           0                 /* success */
        #define JNI_ERR          (-1)              /* unknown error */
        #define JNI_EDETACHED    (-2)              /* thread detached from the VM */
        #define JNI_EVERSION     (-3)              /* JNI version error */
        #define JNI_ENOMEM       (-4)              /* not enough memory */
        #define JNI_EEXIST       (-5)              /* VM already created */
        #define JNI_EINVAL       (-6)              /* invalid arguments */
        ```
    9. 版本
        ```cpp
        // 在JDK / JRE 1.1中，GetVersion()返回JNI_VERSION_1_1。
        // 在JDK / JRE 1.2中，GetVersion()返回JNI_VERSION_1_2。
        // 在JDK / JRE 1.4中，GetVersion()返回JNI_VERSION_1_4。
        // 在JDK / JRE 1.6中，GetVersion()返回JNI_VERSION_1_6。
        // 在JDK / JRE 1.8中，GetVersion()返回JNI_VERSION_1_8。
        // 在JDK / JRE 9中，GetVersion()返回JNI_VERSION_9。
        // 在JDK / JRE 10中，GetVersion()返回JNI_VERSION_10。
        #define JNI_VERSION_1_1 0x00010001
        #define JNI_VERSION_1_2 0x00010002
        #define JNI_VERSION_1_4 0x00010004
        #define JNI_VERSION_1_6 0x00010006
        #define JNI_VERSION_1_8 0x00010008
        #define JNI_VERSION_9   0x00090000
        #define JNI_VERSION_10  0x000a0000
        ```
    10. registerNatives | unregisterNatives 实例
        ```cpp
        JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM *vm, void *reserved) {
            char methodName[15] = "testParameter";
            char methodSignature[24] = "(ILjava/lang/String;)D";
            JNINativeMethod methods[] = {
                {methodName, methodSignature, (void*)Java_jni_JniTestTwo_testParameter}
            };

            JNIEnv *env = nullptr;
            if (vm->GetEnv((void**)&env, JNI_VERSION_1_8) != JNI_OK) {
                return JNI_ERR;
            }
            jclass cls = env->FindClass("Ljni/JniTestTwo;");
            if (cls == nullptr) {
                return JNI_ERR;
            }
            int len = sizeof(methods) / sizeof(methods[0]);
            if (env->RegisterNatives(cls, methods, len) < 0) {
                return JNI_ERR;
            }
            return JNI_VERSION_1_8;
        }
        ```
    11. JNI_OnLoad_<L> | JNI_OnUnLoad_<L> | ... https://docs.oracle.com/en/java/javase/11/docs/specs/jni/invocation.html#jni_onload_l
    12. 多线程实现
        ```cpp
        // 1. 可以用原生cpp高效率实现
        // 2. java的低效率调用
        static jmethodID THREAD_WAIT;
        static jmethodID THREAD_NOTIFY;
        static jmethodID THREAD_NOTYFY_ALL;
        void initThread(JNIEnv *env, jobject lock) {
            jclass cls = env->GetObjectClass(lock);
            THREAD_WAIT = env->GetMethodID(cls, "wait", "(J)V");
            THREAD_NOTIFY = env->GetMethodID(cls, "notify", "(V)V");
            THREAD_NOTYFY_ALL = env->GetMethodID(cls, "notifyAll", "(V)V");
        }
        void wait(JNIEnv *env, jobject lock, jlong timeout) {
            env->CallVoidMethod(lock, THREAD_WAIT, timeout);
        }
        void notify(JNIEnv *env, jobject lock) {
            env->CallVoidMethod(lock, THREAD_NOTIFY);
        }
        void notifyAll(JNIEnv *env, jobject lock) {
            env->CallVoidMethod(lock, THREAD_NOTYFY_ALL);
        }
        ```
    13. C++调用Java
        ```cpp
        #include <jni.h>       /* where everything is defined */
        ...
        JavaVM *jvm;       /* denotes a Java VM */
        JNIEnv *env;       /* pointer to native method interface */
        JavaVMOption* options = new JavaVMOption[1];
        options[0].optionString = "-Djava.class.path=/usr/lib/java";
        JavaVMInitArgs vm_args;  /* JDK/JRE 10 VM initialization arguments */
        vm_args.version = JNI_VERSION_10;
        vm_args.nOptions = 1;
        vm_args.options = options;
        vm_args.ignoreUnrecognized = false;
        /* load and initialize a Java VM, return a JNI interface pointer in env */
        JNI_CreateJavaVM(&jvm, (void**)&env, &vm_args);
        delete options;
        /* invoke the Main.test method using the JNI */
        jclass cls = env->FindClass("Main");
        jmethodID mid = env->GetStaticMethodID(cls, "test", "(I)V");
        env->CallStaticVoidMethod(cls, mid, 100);  // 调用了Main类的test方法
        /* We are done. */
        jvm->DestroyJavaVM();
        ```
3. Jnative(对JNI技术的封装库)
2. NDK的用途和优点：
    1. 代码的保护。由于apk的java层代码很容易被反编译，而C/C++库反汇难度较大。
    2. 可以方便地使用C/C++开源库。
    3. 便于移植，用C/C++写的库可以方便在其他的嵌入式平台上再次使用。NDK(Native Development Kit)是Google提供的一套工具，其中一个特性是提供了交叉编译，即C或者C++不是跨平台的，但通过NDK配置生成的动态库却可以兼容各个平台。
    4. 速度快
3. 

### Android Support Annotation Library

[Android进阶系列之Support Annotation Library使用详解](https://blog.csdn.net/sw5131899/article/details/53842362)

### Androidx

1. Android 迁移到 Androidx
    1. 最近 Google 发布了 Android support library 28，同时也发布了 androidx 1.0.0 第一个正式版本，然后得知支持库的 "28.0.0" 将会是最后一次更新，之后的更新都会迁移到 Androidx 中，所以没办法，只能把项目依赖也迁移到 Androidx 了。
    2. 迁移步骤
        1. 首先在 gradle.properties 文件中添加
            ```java
            // 表示使用 androidx
            android.useAndroidX=true
            // 表示将第三方库迁移到 androidx 。如果取值为false,表示不迁移依赖包到androidx，但在使用依赖包中的内容时可能会出现问题，当然了，如果你的项目中没有使用任何三方依赖，那么，此项可以设置为false
            android.enableJetifier=true
            ```
        2. 然后菜单栏 Refactor -> Migrate to Androidx 就可以了，Android Studio 会自动把你项目中的依赖切换到 Androidx，并且修改项目中使用到依赖库的路径。
    3. 迁移中的坑
        1. 首先，项目中使用到的依赖库路径修改有很多事错误的，或者是没有修改的，这个没办法，只能每个文件都打开，一个一个的修改了╥﹏╥...
        2. 然后，使用android.enableJetifier=true可以将项目中使用的第三方库也迁移到 Androidx，但是，迁移后使用还是会报错，这时你需要 Flie -> Invalidate Caches/Restart 一下就可以了。
        3. 接着就是项目中用到了 databinding 和 dagger 的，使用 dagger 的最新版本 2.17，注解处理器会产生冲突，导致项目无法编译成功，到处找解决方案都没有，最后只好退回 2.16 这个版本才解决了这个问题。
        4. https://mp.weixin.qq.com/s/JcviqDZ8To3ZEL2H0kVukA
2. 新特性

### Android 5678新特性

[Android5,6,7,8新特性](https://blog.csdn.net/Calvin_zhou/article/details/79262254)

### Android 新特性

1. 9.0新特性 https://blog.csdn.net/GenlanFeng/article/details/79496359
2. 2019年8个最新移动APP开发技术趋势 https://www.kingwins.com.cn/content-10384.html
3. 身为Android开发者，理当知晓的2019开发趋势及需要掌握的技术 https://www.jianshu.com/p/10874f05df9a?tdsourcetag=s_pcqq_aiomsg
4. Flutter 与 Material Design 双剑合璧。
5. Android Jetpack分页控件库入门 https://www.jianshu.com/p/90bee6b63f90
6. Android Pie(Android 9啊) http://baijiahao.baidu.com/s?id=1598192073316919149&wfr=spider&for=pc https://blog.csdn.net/weixin_40599987/article/details/80645488
    1. 引入了keystore新特性，增强了安全防护(键盘锁锁定密码、安全秘钥导入、)。
    2. 支持室内定位，支持IEEE 802.11mc Wi-Fi协议，从而实现室内定位的功能。
    3. 支持最新的全面屏以及为摄像头和扬声器预留空间的凹口屏幕。
    4. 支持多通知增强功能。
    5. 提升短信体验: 短信支持显示图片，将回复另存为草稿，这样有效避免用户无意关闭短信造成文字丢失的问题。
    6. 多摄像头支持和摄像头更新: 此功能优化了对多摄像头的支持，另外还支持外置USB/UVC摄像头。
    7. HDR和HEIF支持: Android P支持HDR VP9配置文件，也就是说可以使用任何媒体播放器观看使用此配置的文件和HDR视频。同样支持HEIF图像压缩格式，HEIF是拥有高效率图像格式，可以显示更加高质量的图片，优于JPEG格式。况且HDR VP9和HEIF正变得非常流行，如果手机不支持这类格式文件，用户体验严重下降。
    8. 一键旋转: 该款功能适合睡前看手机的人，Android P新增了一项新的功能，它能有效控制显示器旋转，不管你的手机如何倾斜都能保持垂直状态。
    9. 设置变化: 在安装了Android P的Pixel系列的手机上，会看到诸如按下音量键出现按不同场景显示的情况。
7. Android Q Beta 2(其实就是Android 10) 以上线，更强大的用户位置权限管理、全新的媒体解码器、摄像头新功能、折叠屏增强项、分区存储、提升用户隐私。 https://www.jianshu.com/p/80b491ccc787
    1. 黑暗模式: Android Q 的暗黑模式和 Android Pie 的暗黑模式不同，在 Android Q 中，暗黑模式适用于任何地方，如果应用不支持暗黑模式，那么系统将自动设置一个暗黑模式。
    2. 桌面模式: Android Q 将支持桌面模式，类似三星 Dex 和华为的投影模式。它提供类似一个类似于 PC 的体验，但是远远不能代替 PC。
    3. 隐私增强: Android Q 还将更多地使用 Android Pie 中推出的隐私功能。 在 Android Q中，您可以选择应用程序在后台运行时是否可以访问该位置。此外，当应用程序使用您的位置数据、麦克风或摄像头时，您将在通知栏中看到相应的图标。 它会告诉你哪个应用程序正在使用该权限。Android Q 中还有一个新的专用隐私页面。它显示了您的联系人、短信和其他敏感信息的应用程序的确切数量。
    4. 超级锁定模式: 现在，Android Pie 有一个锁定模式，可以禁用指纹传感器，但我猜 Android Q 将会有某种超级锁定模式。
    5. 屏幕录制: Android Q 支持屏幕录制，就想 iOS 一样。在泄漏信息中我们发现。录屏功能还不完善，可以通过长时间按下“电源”菜单中的“屏幕快照”来开启。
    6. 移除 Android Beam: 用于在设备之间共享文件的 Android Beam 选项消失了。这个功能基本上没有什么人用，移除了很多人也没什么感觉吧。但如果我的假设是正确的，那么谷歌可能正在为 Android 开发一个新的文件共享功能，类似于苹果的 AirDrop 和 Windows10 上的共享功能。 希望能在 Chromebook 上看到它，那也就不足为奇了。
    7. 运营商锁定: 如果你从运营商那里购买锁定的 Android Q 设备，他们将有能力阻止你使用其他特定运营商的SIM卡。
    8. 面部识别: XDA 团队发现了一串字符串，这些字符串表明 Android 10 将具有内部面部识别功能。 这意味着谷歌官方支持面部解锁系统。
    9. 不允许从后台读取剪贴板信息: Android Q 包含了名为“READ_CLIPBOARD_IN_BACKGROUND”的新权限。顾名思义，新的权限将阻止随机的后台应用程序访问剪贴板内容。
    10. 降级应用程序更新: 许多关于泄露的代码和命令行表明，Android Q 将有将应用程序回滚到以前的版本的功能。
    11. 新字体、图标形状和提示颜色: Android Pie的一个特点是能够改变背景主题。有了AndroidQ，谷歌计划增加更多的定制功能。 泄露的 Android 信息中展示了新的两种新字体，图标形状，如正方形、松鼠、TearDrop，新的提示颜色：黑色、绿色和蓝色。
8. Android vitals可以帮助我们精确诊断应用崩溃 https://mp.weixin.qq.com/s?__biz=MzAwODY4OTk2Mg==&mid=2652047285&idx=1&sn=7b5b574b29d37a1819bdb6950eec01c0&chksm=808ca7f0b7fb2ee60417e528ebccb5f70a4b9e9ef0e6834458f15c3789551982fe51188c78c9&scene=21#wechat_redirect

### Android Groovy

[Groovy脚本基础全攻略](https://blog.csdn.net/yanbober/article/details/49047515)

### Android Glide

[Gradle脚本基础全攻略](https://blog.csdn.net/yanbober/article/details/49314255)

### Android View

1. 坐标系
    1. Android坐标系: 左上角为原点，往右是x轴正方向，往下是y轴正方向。MotionEvent提供的getRawX()和getRawY()获取的坐标都是Android坐标系的坐标。
    2. 视图坐标系: view四个属性left/right/top/bottom，相对于父view而言的。3.0后view添加了四个属性x/y/translationX/translationY，x与y是左上角左边，translationX与translationY是左上角相对于父view偏移。x=left+translationX,y=top+translationY。其中x/y在view平移时会改变，而left/top不会，会保留原来的位置。注意x/y其实是抽象概念，view中没有这样的属性
    3. 要获取view的坐标，要等view绘制好了才行。可以: 
        1. handler.post();  // 绘制了view后才执行这个Runnable
        2. postOnUiThread();
        3. view.post();
        4. view.getViewTreeObserver().setOnLayoutListener();
        5. Activity.onWindowFocusChanged();
        6. 重写view.measure/layout
    4. 改变left/x的方法: 
        ```java
        ViewGroup.MarginLayoutParams params = (ViewGroup.MarginLayoutParams) button.getLayoutParams();
        params.leftMargin +=300;
        button.requestLayout();
        // button.setLayoutParams(params);
        ```
        ```java
        // 使用属性动画
        ObjectAnimator.ofFloat(button, "translationX", 0, 100).setDuration(2000).start();
        ```
    5. view常用api
        1. 获取自身宽高: getHeight/getWidth
        2. 自身坐标: getTop/getLeft/getRight/getBottom Right是右边距离父view左边的距离
        3. MotionEvent提供的方法: getX/getY/getRawX/getRawY 这里的点都是以触摸点出发。x是该点与view左边的距离。rawx是该点距离整个屏幕左边距离。
2. view滑动的实现方法
    1. layout+onTouchEvent: view会通过onLayout设置显示的位置，而我们也可以通过修改left等属性控制view的坐标。
        ```java
        public boolean onTouchEvent(MotionEvent event) {
            int x = (int) event.getX();
            int y = (int) event.getY();
            switch(event.getAction()) {
                case MotionEvent.ACTION_DOWN:
                    lastX = x;
                    lastY = y;
                    break;
                case MotionEvent.ACTION_MOVE:
                    int offsetX = x - lastX;
                    int offsetY = y - lastY;
                    layout(getLeft() + offsetX, getTop() + offsetY, getRight() + offsetX, getBottom() + offsetY);
                    break;
            }
            return true;
        }
        ```
    2. offsetLeftAndRight+offsetTopAndBottom+onTouchEvent: offsetLeftAndRight()与offsetTopAndBottom(): 
        ```java
        offsetLeftAndRight(offsetX);
        offsetTopAndBottom(offsetY);
        ```
    3. setLayoutParams+onTouchEvent: LayoutParams(改变布局参数): 
        ```java
        LinearLayout.LayoutParams layoutParams= (LinearLayout.LayoutParams) getLayoutParams();
        // ViewGroup.MarginLayoutParams layoutParams = (ViewGroup.MarginLayoutParams) getLayoutParams();
        // RelativeLayout.LayoutParams layoutParams= (RelativeLayout.LayoutParams) getLayoutParams();
        layoutParams.leftMargin = getLeft() + offsetX;
        layoutParams.topMargin = getTop() + offsetY;
        setLayoutParams(layoutParams);
        ```
    4. view.setAnimation/Object.ofFloat: 动画
        ```xml
        <?xml version="1.0" encoding="utf-8"?>
        <set xmlns:android="http://schemas.android.com/apk/res/android">
            <translate android:fromXDelta="0" android:toXDelta="300" android:duration="1000"/>
        </set>
        ```
        ```java
        mCustomView.setAnimation(AnimationUtils.loadAnimation(this, R.anim.translate));
        // ObjectAnimator.ofFloat(mCustomView, "translateX", 0, 300).setDuration(1000).start();
        ```
    5. scrollTo/scrollBy: scrollTo与scrollBy: scollTo(x,y)表示移动到一个具体的坐标点，而scollBy(dx,dy)则表示移动的增量为dx、dy。其中scollBy最终也是要调用scollTo的。scollTo、scollBy移动的是View的内容，如果在ViewGroup中使用则是移动他所有的子View。我们将ACTION_MOVE中的代码替换成如下代码
        ```java
        ((View)getParent()).scrollBy(-offsetX,-offsetY);
        // 这里要实现CustomView随着我们手指移动的效果的话，我们就需要将偏移量设置为负值。
        ```
    6. Scroller+scrollTo: Scroller: scollTo/scollBy方法是瞬间完成的，所以
        ```java
        public CustomView(Context context, AttributeSet attrs) {
            super(context, attrs);
            mScroller = new Scroller(context);
        }
        ...
        @Override public void computeScroll() {
            super.computeScroll();
            if(mScroller.computeScrollOffset()) {
                ((View) getParent()).scrollTo(mScroller.getCurrX(), mScroller.getCurrY());
                // 通过不断的重绘不断的调用computeScroll方法
                invalidate();
            }
        }
        ...
        public void smoothScrollTo(int destX, int destY) {
            int scrollX = getScrollX();
            int delta = destX - scrollX;
            // 1000秒内滑向destX
            mScroller.startScroll(scrollX, 0, delta, 0, 2000);  // 只是保存参数而已，并不会滑动，主要还是invalidate导致view重绘。
            // 而view的重绘会调用view的draw()方法，draw()方法又会调用view的computescroll()方法。
            invalidate();
        }
        ```
        ```java
        // 最后我们在ViewSlideActivity.java中调用CustomView的smoothScrollTo()方法: 
        mCustomView.smoothScrollTo(-400,0);
        ```
3. 从源码解析View的事件分发机制 http://liuwangshu.cn/application/view/5-dispatchingevents.html https://www.jianshu.com/p/d3758eef1f72
    1. view的层级: View的结构是树形的结构，View可以放在ViewGroup中，这个ViewGroup也可以放到另一个ViewGroup中，这样层层的嵌套就组成了View的层级。
    2. 点击事件分发: 当我们点击屏幕，就产生了触摸事件，这个事件被封装成了一个类: MotionEvent。而当这个MotionEvent产生后，那么系统就会将这个MotionEvent传递给View的层级，MotionEvent在View的层级传递的过程就是点击事件分发。基本会遵从 Activity => ViewGroup => View 的顺序进行事件分发，然后通过调用 onTouchEvent() 方法进行事件的处理。
    3. 点击事件分发的重要方法
        1. dispatchTouchEvent(MotionEvent ev): 用来进行事件的分发。返回结果受当前View的onTouchEvent和下级View的dispatchTouchEvent方法影响，表示是否消耗该事件。
        2. onInterceptTouchEvent(MotionEvent ev): 用来进行事件的拦截，在dispatchTouchEvent()中调用，需要注意的是View没有提供该方法。如果当前View拦截了某个事件，那在同一个事件序列中，此方法不会再次调用。
        3. onTouchEvent(MotionEvent ev): 用来处理点击事件，在dispatchTouchEvent()方法中进行调用。返回结果表示是否消耗当前事件，如果不消耗，在同一事件序列里，当前View无法再次接收到事件。
    4. 三者关系可以用如下伪代码表示
        ```java
        public boolean dispatchTouchEvent(MotionEvent ev) {
            boolean consume = false;
            if(onInterceptTouchEvent(ev)) {
                consume = onTouchEvent(ev);
            } else {
                consume = child.dispatchTouchEvent(ev);
            }
            return consume;
        }
        ```
    5. 流程: 
        1. Activity的dispatchTouchEvent(最先触发)
            1. 如果是ACTION_DOWN，会触发onUserIntersection
            2. 之后调用getWindow().superDispatchTouchEvent(ev)，将ev传给继承了抽象类Window的PhoneWindow的superDispatchTouchEvent，而PhoneWindow的该方法其实是调用了DecorView的superDispatchTouchEvent，DecoreView是最外层界面，是所有view的祖先view，继承于FrameLayout，所以是将事件分发给了ViewGroup的dispatchTouchEvent。
            3. 如果superDispatchTouchEvent返回true，表示消费了该事件，dispatchTouchEvent也返回true。
            4. 否则调用Activity的onTouchEvent。
        2. ViewGroup的dispatchTouchEvent
            1. 如果是ACTION_DOWN，会进行状态的还原和初始化
            2. 然后检查拦截，一般会调用自己的onInterceptTouchEvent(ev)来决定是否拦截，一般返回false，当然，我们也可以重写该方法。
            3. 如果不拦截也没有其他原因而取消的话，会倒序遍历ViewGroup下的子view，一个一个判断点击位置是否是该子View的布局区域，之后会调用这些子view的dispatchTouchEvent方法
            4. 如果拦截就自己处理该事件
        3. View的dispatchTouchEvent
            1. 调用onTouch，如果onTouch返回true，则事件被消费，不继续执行
            2. 否则调用onTouchEvent，返回值就是onTouchEvent的返回值。而且在onTouchEvent中调用了performClick，调用了onClick方法。
            3. onTouchEvent中只要 View 的 CLICKABLE 和 LONG_CLICKABLE 有一个为 true，那么 onTouchEvent() 就会返回 true 消耗这个事件。CLICKABLE 和 LONG_CLICKABLE 代表 View 可以被点击和长按点击，我们通常都会采用 setOnClickListener() 和 setOnLongClickListener() 做设置。接着在 ACTION_UP 事件中会调用 performClick() 方法
    6. 一个事件序列只能被一个View拦截且消耗，同一个事件序列所有事件都会直接交给它处理，并且它的onInterceptTouchEvent不会再被调用。
    7. 某个View一旦开始处理事件，如果它不消耗ACTION_DOWN(onTouchEvent返回了false)，那么同一事件序列中其他事件都不会再交给它来处理，事件将重新交给他的父元素处理，即父元素的onTouchEvent会被调用。
    8. 如果某个View不消耗除ACTION_DOWN以外的其他事件，那么这个点击事件会消失，此时父元素的onTouchEvent并不会被调用，并且当前View可以收到后续事件，最终这些消失的点击事件会传递给Activity处理。
    9. View的onTouchEvent方法默认消耗事件(返回true),除非他是不可点击的(clickable和longClickable同时为false)。View的longClickable属性默认都为false,clickable属性分情况，Button默认为true，TextView默认为false。
    10. onClick发生的前提是View可点击，并且它收到了down和up事件。
4. View的滑动冲突
    1. 场景: 
        1. 外部滑动方向与内部滑动方向不一致，比如ViewPager中包含ListView
        2. 外部滑动方向与内部滑动方向一致，比如ScrollView中包含ListView
        3. 上面两种情况的嵌套
    2. 滑动冲突处理规则: 通过判断是水平滑动还是竖直滑动来判断到底应该谁来拦截事件；可以根据水平和竖直两个方向的距离差或速度差来做判断
    3. 滑动冲突解决方式:
        1. 外部拦截法 —— 即点击事件先经过父容器的拦截处理，如果父容器需要此事件就拦截，不需要就不拦截，需要重写父容器的onInterceptTouchEvent方法；在onInterceptTouchEvent方法中，首先ACTION_DOWN这个事件，父容器必须返回false,即不拦截ACTION_DOWN事件，因为一旦父容器拦截了ACTION_DOWN,那么后续的ACTION_MOVE/ACTION_UP都会直接交给父容器处理；其次是ACTION_MOVE,根据需求来决定是否要拦截;最后ACTION_UP事件,这里必须要返回false,在这里没有多大意义。
        2. 内部拦截法 —— 所有事件都传递给子元素,如果子元素需要就消耗掉,不需要就交给父元素处理,需要子元素配合requestDisallowInterceptTouchEvent方法才能正常工作;父元素需要默认拦截除ACTION_DOWN以外的事件,这样子元素调用parent.requestDisallowInterceptTouchEvent(false)方法时，父元素才能继续拦截需要的事件。(ACTION_DOWN事件不受requestDisallowInterceptTouchEvent方法影响,所以一旦父元素拦截ACTION_DOWN事件,那么所有元素都无法传递到子元素去)。
5. View的绘制
    1. Activity的构成: 
        ```
        -- Activity
            -- PhoneWindow
                -- DecorView
                    -- ViewStub(ActionBar)  不一定有
                    -- FrameLayout
                        -- TextView  标题
                    -- FrameLayout  内容
        ```
    2. 三个重要方法: 
        1. measure用来测量View的宽高
        2. layout用来确定View的位置
        3. draw则用来绘制View
    2. 从源码解析measure流程 http://liuwangshu.cn/application/view/7-measure-sourcecode.html
        1. View的measure
            1. measure会调用onmeasure来真正确定view的大小，它里面还有一些检验避免不必要的onmeasure调用。
            2. onmeasure有必要被子类重写，它调用setMeasureDimension来设置View的宽高。这里它又调用了getDefaultSize方法，在MeasureSpec辅助类的帮助下根据View的测量模式与测量大小来决定宽高的真正的值。MeasureSpec将一个int的高两位分为specMode(测量模式)，低30位分为specSize(测量大小)。
                1. 测量模式分为
                    1. UNSPECIFIED(unspecified): 未指定模式，View想多大就多大，父容器不做限制，一般用于系统内部的测量。
                    2. AT_MOST: 最大模式，对应于wrap_comtent属性，只要尺寸不超过父控件允许的最大尺寸就行。
                    3. EXACTLY(exactly): 精确模式，对应于match_parent属性和具体的数值，父容器测量出View所需要的大小，也就是specSize的值。
                2. 在最大模式和精确模式下getDefaultSize返回测量大小，在未指定模式下getDefaultSize返回getSuggestedMinimumWidth/getSuggestedMinimumHeight的大小。
                    1. getSuggestedMinimumXXX在没有背景时取mMinWidth(android:minWidth这个属性设置的值或者View的setMinimumWidth的值，默认0)
                    2. 有背景时取背景的宽与mMinWidth中的最大值
        2. ViewGroup的measure
            1. ViewGroup并没有提供onMeasure()方法，而是让其子类来各自实现测量的方法，究其原因就是ViewGroup有不同的布局的需要很难统一。
            2. 自身的绘制与view的measure一样，但它还要绘制孩子节点，有measureChildren/measureChild/measureChildWithMargins/getChildMeasureSpec等方法
            3. measureChildren中遍历子view，对每个子view调用measureChild
            4. measureChild中会调用子view的measure方法，传入的宽高由调用getChildMeasureSpec方法并传入子view的LayoutParams、parentWidthMeasureSpec、padding等来决定
            5. getChildMeasureSpec方法中根据ViewGroup自己的MeasureSpec、padding以及child的layoutParams来决定子view的策略模式和策略大小。
        3. LinearLayout的measure
            1. onmeasure中根据orientation属性确定调用measureVertical或者measureHorizontal
            2. 在measureVertical中遍历子view，根据子view的MeasureSpec分别计算每个子元素的高度，如果是wrap_content则将每个子元素的高度和margin垂直高度等值相加并赋值给mTotalLength得出整个LinearLayout的高度。如果布局高度设置为match_parent者具体数值则和View的测量方法一样。
    3. 从源码解析View的layout流程 https://www.jianshu.com/p/a5b1e778744f http://liuwangshu.cn/application/view/8-layout-sourcecode.html
        1. view的layout
            1. layout传进来里面的四个参数分别是View的四个点的坐标，它的坐标不是相对屏幕的原点，而且相对于它的父布局来说的。l和t是子控件左边缘和上边缘相对于父类控件左边缘和上边缘的距离；r和b是子控件右边缘和下边缘相对于父类控件左边缘和上边缘的距离。然后根据isLayoutModeOptical判断是否有光学边界，并决定调用setFrame还是setOpticalFrame。
            2. setOpticalFrame最终还是调用了setFrame，而setFrame中对比新旧的left/top/right/bottom四个属性决定更改并决定宽高是否变化，如果宽高有变化，则调用sizeChanged。
            3. 最后又回到layout方法中调用onLayout方法，该方法应该由子类实现，这个方法用于布局子view的位置，即ViewGroup才需要重写该方法。
        2. LinearLayout的onLayout
            1. 根据orientation调用layoutVertical还是layoutHorizontal
            2. layoutVertical中遍历子元素并调用setChildFrame()方法，在setChildFrame()方法中调用子元素的layout()方法来确定自己的位置。我们看到childTop这个值是逐渐增大的，这是为了在垂直方向，子元素是一个接一个排列的而不是重叠的。
    4. 从源码解析View的draw流程
        1. 如果有设置背景，则绘制背景
        2. 保存canvas层
        3. 绘制自身内容，调用onDraw方法
        4. 如果有子元素则绘制子元素
        5. 绘制效果
        6. 绘制装饰品(scrollbars)
6. ViewRoot和DecorView、ViewStub
    1. ViewRoot
        1. 对应于ViewRootImpl类，是连接WindowManager和DecorView的纽带，View的三大流程均是通过ViewRoot来完成的。在ActivityThread中，当Activity对象被创建完毕后，会将DecorView添加到Window中，同时会创建ViewRootImpl对象，并将ViewRootImpl对象和DecorView建立关联。
        2. View的绘制流程从ViewRoot的performTraversals开始，经过measure、layout和draw三个过程才可以把一个View绘制出来。
        3. performTraversals会依次调用performMeasure、performLayout和performDraw三个方法，这三个方法分别完成顶级View的measure、layout和draw这三大流程。
        4. 当View采用固定宽/高的时候，不管父容器的MeasureSpec的是什么，View的MeasureSpec都是精确模式兵其大小遵循Layoutparams的大小。当View的宽/高是match_parent时，如果他的父容器的模式是精确模式，那View也是精确模式并且大小是父容器的剩余空间；如果父容器是最大模式，那么View也是最大模式并且起大小不会超过父容器的剩余空间。当View的宽/高是wrap_content时，不管父容器的模式是精确还是最大化，View的模式总是最大化并且不能超过父容器的剩余空间。
    2. <ViewStub>标签实质上是一个宽高都为0的不可见View. 通过延迟加载布局的方式优化布局提升渲染性能。
        1. 通常用于不常使用的控件. 比如
            1. 网络请求失败的提示
            2. 列表为空的提示
            3. 新内容、新功能的引导, 因为引导基本上只显示一次
            4. 又或者我们写了一个通用的自定义 View. 但其中部分子 View 只在部分情况下才显示.
        2. 使用: 布局文件直接将当前的 <ViewStub> 替换掉. 但这里的替换并不是完全意义上的替换, 布局文件的 layout params 是以 ViewStub 为优先
            ```xml
            <ViewStub
                android:id="@+id/view_stub"
                android:layout="@layout/layout_to_show"
                android:layout_width="match_parent"
                android:layout_height="match_parent" />
            ```
            ```java
            view_stub.inflate();
            ```
        3. 还可以设定 Visibility 为 VISIBLE 或 INVISIBLE, 也会触发 inflate(). 但只有直接使用 inflate() 方法能返回布局文件的根 View.  但是这里只会在首次使用 setVisibility() 会加载要渲染的布局文件. 再次使用只是单纯的设置可见性。
        4. 对 inflate() 操作也只能进行一次, 因为 inflate() 的时候是其指向的布局文件替换掉当前 <ViewStub> 标签. 之后, 原来的布局文件中就没有 <ViewStub> 标签了. 因此, 如果多次 inflate() 操作, 会报错: ViewStub must have a non-null ViewGroup viewParent
7. 自定义view
    1. 直接继承View或ViewGroup的控件，需要在onmeasure中对wrap_content做特殊处理。
    2. 直接继承View的控件，如果不在draw方法中处理padding，那么padding属性就无法起作用。直接继承ViewGroup的控件也需要在onMeasure和onLayout中考虑padding和子元素margin的影响，不然padding和子元素的margin无效。
    3. View内部提供了post系列的方法，完全可以替代Handler的作用。
    4. View中有线程和动画，需要在View的onDetachedFromWindow中停止。
8. RemoteViews是一种远程View，可以在其他进程中显示，为了能够更新它的界面，RemoteViews提供了一组基础操作用于跨进程更新它的界面。
    1. RemoteViews主要用于通知栏和桌面小部件的开发。通知栏主要通过NotificationManager的notify方法来实现；桌面小部件则是通过AppWidgetProvider来实现的，AppWidgetProvider本质上是一个广播。因为RemoteViews运行在其他进程(SystemService进程)，所以无法直接更新界面。
    2. RemoteViews在通知栏上的应用
        ```java
        Notification notification = new Notification();
        notification.icon = R.mipmap.ic_launcher;
        notification.tickerText = "hello notification";
        notification.when = System.currentTimeMillis();
        notification.flags = Notification.FLAG_AUTO_CANCEL;
        Intent intent = new Intent(this, RemoteViewsActivity.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, PendingIntent.FLAG_UPDATE_CURRENT);
        RemoteViews remoteViews = new RemoteViews(getPackageName(), R.layout.layout_notification);//RemoveViews所加载的布局文件
        remoteViews.setTextViewText(R.id.tv, "这是一个Test");//设置文本内容
        remoteViews.setTextColor(R.id.tv, Color.parseColor("#abcdef"));//设置文本颜色
        remoteViews.setImageViewResource(R.id.iv, R.mipmap.ic_launcher);//设置图片
        PendingIntent openActivity2Pending = PendingIntent.getActivity
                (this, 0, new Intent(this, MainActivity.class), PendingIntent.FLAG_UPDATE_CURRENT);//设置RemoveViews点击后启动界面
        remoteViews.setOnClickPendingIntent(R.id.tv, openActivity2Pending);
        notification.contentView = remoteViews;
        notification.contentIntent = pendingIntent;
        NotificationManager manager = (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);
        manager.notify(2, notification);
        ```
        ```
        如果notify方法的id是常量，那么不管PendingIntent是否匹配，后面的通知都会替换掉前面的通知。
        如果notify的方法id每次都不一样，那么当PendingIntent不匹配的时候，不管在何种标记为下，这些通知都不会互相干扰。
        如果PendingIntent处于匹配阶段，分情况: 
        采用FLAG_ONE_SHOT标记位，那么后续通知中的PendingIntent会和第一条通知保持一致，包括其中的Extras，单击任何一条通知后，其他通知均无法再打开；当所有通知被清除后。
        采用FLAG_CANCEL_CURRENT标记位，只有最新的通知可以打开，之前弹出的所有通知均无法打开。
        采用FLAG_UPDATE_CURRENT标记位，那么之前弹出的PendingIntent会被更新，最终它们和最新的一条保存完全一致，包括其中的Extras，并且这些通知都是可以打开的。
        ```
    3. RemoveViews在桌面小部件上的应用
        ```xml
        <!-- res/layout/widget.xml -->
        <?xml version="1.0" encoding="utf-8"?>
        <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
            android:layout_width="match_parent"
            android:layout_height="match_parent"
            android:orientation="vertical">
            <ImageView
                android:id="@+id/iv"
                android:layout_width="360dp"
                android:layout_height="360dp"
                android:layout_gravity="center" />
        </LinearLayout>
        <!-- res/xml/appwidget_provider_info.xml -->
        <?xml version="1.0" encoding="utf-8"?>
        <appwidget-provider xmlns:android="http://schemas.android.com/apk/res/android"
            android:initialLayout="@layout/widget"
            android:minHeight="360dp"
            android:minWidth="360dp"
            android:updatePeriodMillis="864000"/>
        ```
        ```java
        // 定义小部件的实现类
        public class ImgAppWidgetProvider extends AppWidgetProvider {
            public static final String TAG = "ImgAppWidgetProvider";
            public static final String CLICK_ACTION = "cn.hudp.androiddevartnote.action.click";
            private static int index;
            @Override public void onReceive(Context context, Intent intent) {
                super.onReceive(context, intent);
                if (intent.getAction().equals(CLICK_ACTION)) {
                    RemoteViews remoteViews = new RemoteViews(context.getPackageName(), R.layout.widget);
                    AppWidgetManager appWidgetManager = AppWidgetManager.getInstance(context);
                    updateView(context, remoteViews, appWidgetManager);
                }
            }
            @Override public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
                super.onUpdate(context, appWidgetManager, appWidgetIds);
                RemoteViews remoteViews = new RemoteViews(context.getPackageName(), R.layout.widget);
                updateView(context, remoteViews, appWidgetManager);
            }
            // 由于onReceive 和 onUpdate中部分代码相同 则抽成一个公用方法
            public void updateView(Context context, RemoteViews remoteViews, AppWidgetManager appWidgetManager) {
                index = (int) (Math.random() * 3);
                if (index == 1) {
                    remoteViews.setImageViewResource(R.id.iv, R.mipmap.haimei1);
                } else if (index == 2) {
                    remoteViews.setImageViewResource(R.id.iv, R.mipmap.haimei2);
                } else {
                    remoteViews.setImageViewResource(R.id.iv, R.mipmap.haimei3);
                }
                Intent clickIntent = new Intent();
                clickIntent.setAction(CLICK_ACTION);
                PendingIntent pendingIntent = PendingIntent.getBroadcast(context, 0, clickIntent, 0);
                remoteViews.setOnClickPendingIntent(R.id.iv, pendingIntent);
                appWidgetManager.updateAppWidget(new ComponentName(context, ImgAppWidgetProvider.class), remoteViews);
            }
        }
        ```
        ```xml
        <!-- 在AndroidManifest.xml中声明小部件 -->
        <receiver android:name=".RemoveViews_5.ImgAppWidgetProvider">
            <meta-data
                android:name="android.appwidget.provider"
                android:resource="@xml/appwidget_provider_info">
            </meta-data>
            <intent-filter>
                <action android:name="cn.hudp.androiddevartnote.action.click" />
                <action android:name="android.appwidget.action.APPWIDGET_UPDATE" />
            </intent-filter>
        </receiver>
        <!-- 两个action，一个是用于识别小部件的单击行为，一个则是作为小部件的标识必须存在的；如果不加这个receiver就不是一个桌面小部件并且也无法显示在手机的小部件中。 -->
        ```
        ```
        广播到来的时候，AppWidgetProvider会自动根据广播的Action通过onReceive方法来分发广播，也就是调用
        onEnable: 当该窗口小部件第一次添加到桌面时调用的方法，可添加多次但只在第一次调用。
        onUpdate: 小部件被添加时或者每次小部件更新时都会调用一次该方法，小部件的更新时机是有updatePeriodMillis来指定，每个周期小部件就会自动更新一次。
        onDeleted: 每删除一次桌面小部件就调用一次。
        onDisabled: 当最后一个该类型的小部件被删除时调用该方法。
        onReceive: 这是广播的内置方法，用于分发具体事件给其他方法。
        ```
    4. RemoteViews内部机制
        1. RemoteViews的构造方法: public RemoteViews(String packageName,int layoutId),第一个参数表示当前应用的包名，第二个参数表示待加载的布局文件。
        2. RemoveViews并不能支持所有View类型，支持以下: 
            1. Layout: FrameLayout、LinearLayout、RelativeLayout、GridLayout
            2. View: Button、ImageButton、ImageView、ProgressBar、TextView、ListView、GridView、ViewStub等(如EditText是不允许在RemoveViews中使用的，使用会抛异常)
        3. RemoteView没有findViewById方法，因此无法访问里面的View元素，而必须通过RemoteViews所提供的一系列set方法来完成，这是通过反射调用的。
        4. 通知栏和小组件分别由NotificationManager(NM)和AppWidgetManager(AWM)管理，而NM和AWM通过Binder分别和SystemService进程中的NotificationManagerService以及AppWidgetService中加载的，而它们运行在系统的SystemService中，这就和我们进程构成了跨进程通讯。
        5. **工作流程**: 首先RemoteViews会通过Binder传递到SystemService进程，因为RemoteViews实现了Parcelable接口，因此它可以跨进程传输，系统会根据RemoteViews的包名等信息拿到该应用的资源；然后通过LayoutInflater去加载RemoteViews中的布局文件。接着系统会对View进行一系列界面更新任务，这些任务就是之前我们通过set来提交的。set方法对View的更新并不会立即执行，会记录下来，等到RemoteViews被加载以后才会执行。
        6. 为了**提高效率**，系统没有直接通过Binder去支持所有的View和View操作。而是提供一个Action概念，Action同样实现Parcelable接口。系统首先将View操作封装到Action对象并将这些对象跨进程传输到SystemService进程，接着SystemService进程执行Action对象的具体操作。远程进程通过RemoteViews的apply方法来进行View的更新操作，RemoteViews的apply方法会去遍历所有的Action对象并调用他们的apply方法。这样避免了定义大量的Binder接口，也避免了大量IPC操作。
        7. apply和reApply的区别在于: apply会加载布局并更新界面，而reApply则只会更新界面。
        8. 关于单击事件，RemoteViews中只支持发起PendingIntent，不支持onClickListener那种模式。setOnClickPendingIntent用于给普通的View设置单击事件，不能给集合(ListView/StackView)中的View设置单击事件(开销大，系统禁止了这种方式)。如果要给ListView/StackView中的item设置单击事件，必须将setPendingIntentTemplate和setOnClickFillInIntent组合使用才可以。
    5. RemoteViews意义
        1. 当一个应用需要更新另一个应用的某个界面，我们可以选择用AIDL来实现，但如果更新比较频繁，效率会有问题，同时AIDL接口就可能变得很复杂。如果采用RemoteViews就没有这个问题，但RemoteViews仅支持一些常用的View，如果界面的View都是RemoteViews所支持的，那么就可以考虑采用RemoteViews。
        2. 利用RemoteViews加载其他App的布局文件与资源。
            ```java
             final String pkg = "cn.hudp.remoteviews";//需要加载app的包名
            Resources resources = null;
            try {
                resources = getPackageManager().getResourcesForApplication(pkg);
            } catch (PackageManager.NameNotFoundException e) {
                e.printStackTrace();
            }
            if (resources != null) {
                int layoutId = resources.getIdentifier("activity_main", "layout", pkg); //获取对于布局文件的id
                RemoteViews remoteViews = new RemoteViews(pkg, layoutId);
                View view = remoteViews.apply(this, llRemoteViews);//llRemoteViews是View所在的父容器
                llRemoteViews.addView(view);
            }
            ```
9. 
10. 

### Android 综合技术

1. 使用CrashHandler来获取应用的crash信息
    1. 如何检测崩溃并了解详细的crash信息？首先需实现一个uncaughtExceptionHandler对象，在它的uncaughtException方法中获取异常信息并将其存储到SD卡或者上传到服务器中，然后调用Thread的setDefaultUncaughtExceptionHandler为当前进程的所有线程设置异常处理器。
        ```java
        public class CrashHandler implements Thread.UncaughtExceptionHandler {
            private static final String TAG = "CrashHandler";
            private static final boolean DEBUG = true;
            private static final String PATH = Environment.getExternalStorageDirectory().getPath() + "/CrashTest/log/";
            private static final String FILE_NAME = "crash";
            private static final String FILE_NAME_SUFFIX = ".trace";
            private static CrashHandler sInstance = new CrashHandler();
            private Thread.UncaughtExceptionHandler mDefaultCrashHandler;
            private Context mContext;
            private CrashHandler() {}
            public static CrashHandler getInstance() { return sInstance; }
            public void init(Context context) {
                mDefaultCrashHandler = Thread.getDefaultUncaughtExceptionHandler();
                Thread.setDefaultUncaughtExceptionHandler(this);
                mContext = context.getApplicationContext();
            }
            /**
             * 这个是最关键的函数，当程序中有未被捕获的异常，系统将会自动调用#uncaughtException方法
             * thread为出现未捕获异常的线程，ex为未捕获的异常，有了这个ex，我们就可以得到异常信息。
             */
            @Override
            public void uncaughtException(Thread thread, Throwable ex) {
                try {
                    // 导出异常信息到SD卡中
                    dumpExceptionToSDCard(ex);
                    // 这里可以通过网络上传异常信息到服务器，便于开发人员分析日志从而解决bug
                    uploadExceptionToServer();
                } catch (IOException e) {
                    e.printStackTrace();
                }
                ex.printStackTrace();
                // 如果系统提供了默认的异常处理器，则交给系统去结束我们的程序，否则就由我们自己结束自己
                if (mDefaultCrashHandler != null) {
                    mDefaultCrashHandler.uncaughtException(thread, ex);
                } else {
                    Process.killProcess(Process.myPid());
                }
            }
            private void dumpExceptionToSDCard(Throwable ex) throws IOException {
                // 伪代码 本方法用于实现将错误信息存储到SD卡中
            }
            private void uploadExceptionToServer() {
                // 伪代码 本方法用于将错误信息上传至服务器
            }
        }
        ```
    2. 然后在Application初始化的时候为线程设置CrashHandler，这样之后，Crash就会通过我们自己的异常处理器来处理异常了。
        ```java
        public class BaseApplication extends Application {
            @Override
            public void onCreate() {
                super.onCreate();
                CrashHandler crashHandler = CrashHandler.getInstance();
                crashHandler.init(this);
            } 
        }
        ```
2. 使用multidex来解决方法数越界
    1. 在Android中单个dex文件所能包含的最大方法数为65536，这个是包含Android FrameWork、依赖jar包以及应用本身代码中的所有方法。达到这个65536后，编译器编译时会抛出DexIndexOverflowException异常。
    2. **如何解决？**Google提供了multidex解决方案。在Android5.0之前需要引入Google提供的android-support-multidex.jar；从5.0开始系统默认支持了multidex，它可以从apk文件中加载多个dex文件。
    3. **使用步骤**: 
        1. 修改对应工程目录下的build.gradle文件，在defaultConfig中添加multiDexEnabled true这个配置项。
        2. 在build.gradle的dependencies中添加multidex的依赖: compile 'com.android.support:multidex:1.0.0'
        3. 代码中加入支持multidex功能。
            1. 第一种方案，在manifest文件中指定Application为MultiDexApplication。
            2. 第二种方案，让应用的Application继承MultiDexApplication。
            3. 第三种方案，重写attachBaseContext方法，这个方法比onCreate还要先执行。
                ```java
                public class BaseApplication extends Application {
                    @Override protected void attachBaseContext(Context base) {
                        super.attachBaseContext(base);
                        MultiDex.install(this);
                    }
                }
                ```
    4. 采用上面的配置项后，如果这个应用方法数没有越界，那么Gradle是不会生成多个dex文件的，当方法数越界后，Gradle就会在apk中打包2个或多个dex文件。当需要指定主dex文件中所包含的类，这时候就需要通过--multi-dex-list来选项来实现这个功能。
        ```
        //在对应工程目录下的build.gradle文件，加入
        afterEvaluate {
            println "afterEvaluate"
            tasks.matching {
                it.name.startsWith('dex')
            }.each { dx ->
                def listFile = project.rootDir.absolutePath + '/app/maindexlist.txt'
                println "root dir:" + project.rootDir.absolutePath
                println "dex task found: " + dx.name
                if (dx.additionalParameters == null) {
                    dx.additionalParameters = []
                }
                dx.additionalParameters += '--multi-dex'
                dx.additionalParameters += '--main-dex-list=' + listFile
                dx.additionalParameters += '--minimal-main-dex'
            }
        } 
        // maindexlist.txt
        com/ryg/multidextest/TestApplication.class
        com/ryg/multidextest/MainActivity.class
        // multidex 这9个类必须在主Dex中
        android/support/multidex/MultiDex.class
        android/support/multidex/MultiDexApplication.class
        android/support/multidex/MultiDexExtractor.class
        android/support/multidex/MultiDexExtractor$1.class
        android/support/multidex/MultiDex$V4.class
        android/support/multidex/MultiDex$V14.class
        android/support/multidex/MultiDex$V19.class
        android/support/multidex/ZipUtil.class
        android/support/multidex/ZipUtil$CentralDirectory.class
        // 需要注意multidex的jar中的9个类必须要打包到主dex中，因为Application的attachBaseContext方法中需要用到MultiDex.install(this)需要用到MultiDex。
        ```
    5. Multidex的缺点: 
        1. 启动速度会降低，由于应用启动时会加载额外的dex文件，这将导致应用的启动速度降低，甚至产生ANR现象。
        2. 因为Dalvik linearAlloc的bug，可以导致使用multidex的应用无法在Android4.0之前的手机上运行，需要做大量兼容性测试。
3. 动态加载技术
    1. 各种插件化方案都需要解决3个基础性问题: 
        1. 资源访问，因为插件中凡是以R开头的资源文件都不能访问了。
        2. Activity的生命周期管理，因为宿主动态将Activity.java加载到内存的时候，是不具备Activity的任何特性的，只是一个普通的java类。
        3. ClassLoader的管理，为了避免多个ClassLoader加载了同一个类所引发的类型转换错误。
    2. 介绍两个具有代表性的插件化解决方案: 
        1. [dynamic-load-apk](https://link.jianshu.com/?t=https://github.com/singwhatiwanna/dynamic-load-apk): DL方案对Framework的表层做了处理，依赖that语法，编写插件代码和主程序代码需单独区分。
        2. [Droid Plugin](https://link.jianshu.com/?t=https://github.com/Qihoo360/DroidPlugin): 通过Hook增强了Framework层的很多系统服务，开发插件就跟开发独立app差不多；就拿Activity生命周期的管理来说，DL的代理方式就像是牵线木偶，插件是操纵傀儡；而DroidPlugin则是借尸还魂，插件是有血有肉的系统管理的真正组件；DroidPlugin Hook了系统几乎所有的Sevice，欺骗了大部分的系统API；
4. 反编译
    1. 使用dex2jar和jd-gui反编译apk
    2. 使用apktool对apk进行二次打包

### end

"android 控件.md" "android 布局.md" "android 资源类型详解.md" "android 架构组件学习.md" "android appwidget.md" "android media.md" "android OkHttp_NoHttp_Retrofit_.md" "android Glide_Fresco_Picasso.md" "android RxJava_RxAndroid_EventBus.md" 

// android View
// android Binder
android 综合技术
// android 性能优化
android Window/WindowManager
android ContentProvider