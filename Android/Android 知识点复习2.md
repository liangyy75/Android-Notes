* [Android Flutter](##Android%20Flutter)

[你还在被触摸事件困扰吗？看看这篇吧](https://www.jianshu.com/p/06574d8f10bf)


## Android 热更新/热修复

## Android 自定义View

0. 链接
    0. [Android layout属性大全](https://blog.csdn.net/ican87/article/details/37566679)
1. 从种类上看所有View:
    1. View:
        1. id/size: id / layout_height / layout_width / maxheight / minheight / maxwidth / minwidth / layout_margin / layout_padding
        2. 内容: 
            0. foregroundGravity / background / contentDescription / theme / tag / gravity / layout_gravity / saveEnabled(是否保存内容，需要设置id) / visibility
            1. **foreground**(只在Android6版本以上以及FrameLayout本身及其子类才有效，可以设置单击时的前景)
            2. **drawingCacheQuality**(绘制view时需要的质量:auto/high/low)
            3. **duplicateParentState**(是否直接从父容器中获取绘图状态(光标，按下等，但不包括事件))
            4. **fitsSystemWindows**(设置布局调整时是否考虑系统窗口(如状态栏))
        3. scroll: 
            0. fadingEdgeLength / scrollbars(none/vertical/horizontal) / scrollbarSize / scrollbarStyle / scrollbarThumbVertical / scrollbarTrackVertical / scrollbarAlwaysDrawVerticalTrack
            1. **fadingEdge**(设置滚动时边框渐变的方向:none/horizontal/vertical)
            2. **requiresFadingEdge**(定义滚动时边缘是否褪色)
            3. **fadeScrollbars**(滚动条是否自动隐藏)
            4. **overScrollMode**(滑动到边界时样式)
            5. **verticalScrollbarPosition**(垂直滚动条的位置:left/right/none/defaultPosition)
            6. **scrollbarFadeDuration**
            7. **scrollbarThumbHorizontal**(设置水平滚动条的drawable)
            8. **scrollbarTrackHorizontal**(设置水平滚动条背景(轨迹)的色drawable)
            9. **scrollbarAlwaysDrawHorizontalTrack**(设置水平滚动条是否含有轨道) 
        4. focus:
            0. focusable / nextFocusUp / nextFocusLeft / nextFocusRight / nextFocusForward(设置指定视图获得下一个焦点，必须是id)
            1. **focusableInTouchMode**(https://blog.csdn.net/u010015108/article/details/52796785 https://www.jianshu.com/p/c90c8e502028)
            2. **nextFocusDown**
        6. touch: 
            1. **soundEffectsEnabled**(点击或触摸是否有声音效果)
            2. **hapticFeedbackEnabled**(触力反馈https://blog.csdn.net/love_xsq/article/details/50290485)
            3. **importantForAccessibility**(控制View是否能启用无障碍功能，false是不能启用无障碍功能，为视觉障碍用户提供朗读服务子类的)
            4. **filterTouchesWhenObscured**(https://www.jianshu.com/p/06574d8f10bf 如果该view被一个view覆盖了，则点击上面的view时不会发生点击穿透bug)
        7. child: 
            0. layout_gravity
            1. **clipChildren**(设置为false后子控件的绘制可以超出父控件的范围)
            2. **clipToPadding**(false后子控件可以在父控件padding内绘制)
        5. 属性: 
            0. clickable / longClickable / onClick / onLongClick / alpha / rotation / rotationX / rotationY / scaleX / scaleY / scrollX / scrollY / style / transformX / transformY / transformPivotY / 
            2. **transformPivotX**(相对于一点的水平方向偏转量)
        6. 应用:
            1. View淡入淡出设置(ScrollView/ListView等都适用): lvArticle.setVerticalFadingEdgeEnabled(true); lvArticle.setFadingEdgeLength(100);
            2. listview在拖动的时候背景图片消失变成黑色背景。等到拖动完毕我们自己的背景图片才显示出来: android:scrollingCache="false" / android:cacheColorHint="#00000000"
            3. listview的上边和下边有黑色的阴影: android:fadingEdge="none" / android:overScrollMode="never"
            4. lsitview的每一项之间需要设置一个图片做为间隔: android:divider="@drawable/list_driver"
            5. 默认会显示选中的item为橙黄底色，有时候我们需要去掉这种效果: listSelector="@android:color/transparent"
            6. 在项目中，一进入一个页面, EditText默认就会自动获取焦点: 在EditText的父级控件中找一个，设置成android:focusable="true"; android:focusableInTouchMode="true"; 可以截断EditText默认的行为
    2. Common:
        1. TextView extends View [Android 9.0关于字体的新特性](https://blog.csdn.net/u013894711/article/details/81532638)
            1. drawable: drawableBottom / drawableTop / drawableStart / drawableEnd / drawableRight / drawableLeft / drawablePadding
            2. style:
                1. **textAllCaps**(自动将字符变为大写，但是Spannable就会失效???)
                2. **bufferType**(normal/spannable/editable 指定getText()方式取得的文本类别，其中editable可通过获取文本为textview追加内容???)
                3. **capitalize**(设置英文字母大写类型。此处无效果，需要弹出输入法才能看得到)
                4. **cursorVisible**(光标是否显示)
            3. font:
                0. fontFamily
            3. text1:
                0. editable | enable | lastBaselineToBottomHeight | inputType | marqueenRepeatLimit | maxEms | minEms | maxLength
                1. **digits**(设置允许输入哪些字符，如“1234567890.+-*/% ()”)
                2. **editorExtras**(设置文本的额外的输入数据)
                3. **ellipsize**(start(省略号位置)/end/middle/marquee(跑马灯) 当文字过长时,该控件该如何显示)
                4. **ems**(将对应的控件宽度设为指定个数字符的宽度)
                5. **firstBaselineToTopHeight**(https://blog.csdn.net/u013894711/article/details/81532638 TextView上边界和第一条baseline间的距离，该属性可替代top padding)
                6. **inputMethod**(为文本指定输入法，需要完全限定名(完整的包名))
                7. **scrollHorizontally**(文本超出TextView的宽度的情况下，是否出现横拉条)
            4. text2:
                0. hint | text | textColor | textColorHint | textColorLink | textSize | textStyle | textCursorDrawable | textIsSelectable | textScaleX
                1. **freezesText**(设置保存文本的内容以及光标的位置)
                2. **numeric**(如果被设置，该TextView有一个数字输入法。此处无用，设置后唯一效果是TextView有点击效果)
                3. **password**(以小点”.”显示文本)
                4. **phoneNumber**(设置为电话号码的输入方式)
                5. **selectAllOnFocus**(如果文本是可选择的，让他获取焦点而不是将光标移动为文本的开始位置或者末尾位置。 TextView中设置后无效果)
                6. **textColorHighlight**(被选中文字的底色，默认为蓝色)
                7. **typeface**(设置文本字体)
            5. ime(软键盘):
                1. **imeActionId**(设置要获取的软键盘的view的id)
                2. **imeActionLabel**(设置获取的id的值)
                3. **imeOptions**(actionGo/actionSend/actionSearch/actionDone/normal/actionUnspecified/actionPrevious/actionNext/actionNone/... https://blog.csdn.net/lastdream/article/details/24365633)
                4. **privatedImeOptions**(设置输入法选项，此处无用，在EditText将进一步讨论)
            6. line:
                0. lineHight(API 28) | maxLines | minLines | singleLine
                1. **lineSpacingExtra**(行间距，而且是不包括字体大小等等的，是添加的间距，5.0后对最后一行无效)
                2. **lineSpacingMultiplier**(将行间距设定为行高的倍数，5.0后对最后一行无效 https://blog.csdn.net/etwge/article/details/72818859)
                3. **lines**(设置文本的行数，设置两行就显示两行，即使第二行没有数据)
            7. auto: 
                0. autoSizeMinTextSize | linksClickable
                1. **autoText**(如果设置，将自动执行输入值的拼写纠正。此处无效果，在显示输入法并输入的时候起作用)
                2. **autoLink**(none/web/email/phone/map/all https://www.jianshu.com/p/d3bef8449960)
                3. **autoSizeMaxTextSize**(自动设置字体大小时最大的字体大小，需要配合autoSizeStepGranularity与autoSizeTextType)
                4. **autoSizePresetSizes**(@array/autosize_text_sizes，配合autoSizeTextType使用)
                5. **autoSizeStepGranularity**(字体大小变化的粒度)
                6. **autoSizeTextType**(none/uniform(字体大小自适应width与height，如果没有其他属性会占据整个width与height))
            8. shadow:
                0. shadowColor(需要与shadowRadius一起使用) | shadowDy
                1. **shadowDx**(设置阴影横向坐标开始位置)
                2. **shadowRadius**(设置阴影的半径。设置为0.1就变成字体的颜色了，一般设置为3.0的效果比较好)
        2. Button extends TextView
            1. 
2. 从继承上看所有View:
    1. 

## Android 蓝牙/wifi

[android wifi操作大全](https://blog.csdn.net/q908555281/article/details/48546417)
[android开发中Wifi功能总结](https://blog.csdn.net/qq_34773981/article/details/79163579)
[android wifi/蓝牙系列](https://blog.csdn.net/a1533588867/article/list/2?)
[Android 蓝牙开发之搜索、配对、连接、通信大全](https://www.cnblogs.com/lanzhi/p/6467243.html) [android bluetooth——蓝牙的开启、搜索、配对与连接](https://blog.csdn.net/yehui928186846/article/details/52710112)
[Android 蓝牙篇](https://blog.csdn.net/zqf_888/article/details/81060606)
[Android蓝牙开发系列文章](https://blog.csdn.net/huangliniqng/article/details/82185635)

## Android 地图



## Android 插件化



## Android APT

[【Android】APT](https://www.jianshu.com/p/7af58e8e3e18)

## Android Flutter

[Flutter中文网](https://flutterchina.club/) -- Dart语言
[Flutter文档汇总](https://segmentfault.com/a/1190000014722308)

## Android Kotlin

[抛弃 Java 改用 Kotlin 的六个月后，我后悔了](https://cloud.tencent.com/developer/news/249347)
[Kotlin中文网](https://www.kotlincn.net/)

## Android QPython

[Python on Android](http://www.qpython.com/)

## Android EventBus源码阅读

[浅析EventBus 3.0实现思想](https://www.jianshu.com/p/7f982f294fc2)
[EventBus后续深入知识点整理](https://www.jianshu.com/p/f8fd67eef9aa)
[EventBus中HandlerPoster,BackgroundPoster,AsyncPoster的执行流程](https://blog.csdn.net/qq_18242391/article/details/81030270)
[EventBus3.0注意事项](https://blog.csdn.net/zhangquanit/article/details/52817332)

1. Poster 接口: enqueue(Subscription, Object Event)
    1. AsyncPoster 类: 实现了 Runnable 接口与 Poster 接口
        1. 成员: PendingPostQueue queue; EventBus eventBus;
        2. 方法: AsyncPoster(EventBus eventBus); enqueue(会调用eventBus.getExecutorService().execute(this)进而将run方法放入队列); run;
    2. BackgroundPoster 类: 实现了 Runnable 接口与 Poster 接口
        1. 成员: PendingPostQueue queue; EventBus eventBus; boolean executorRunning(用于判断现在是否还在陷入while的run中，如果没有了就run一下);
        2. 方法: BackgroundPoster(EventBus eventBus); enqueue; run;
        3. 与 AsyncPoster 对比: enqueue后每一秒都会poll一个出来invokeSubscriber，如果poll到null了才会又在enqueue中调用eventBus.getExecutorService().execute(this)，否则甚至不用调用，速度应该会更快些，适合**持续的长期的event**。
    3. HandlerPoster 类: 实现了 Handler 抽象类与 Poster 接口
        1. 成员: PendingPostQueue queue; EventBus eventBus; int **maxMillisInsideHandleMessage**(当处理Message时长超过这个时就不会再处理了???); boolean handlerActive;
        2. 方法: HandlerPoster(EventBus, Looper, int maxMillisInsideHandleMessage); enqueue; handleMessage(Message); 
2. Subscription 接口: 
    1. 成员: Object subscriber; SubscriberMethod method; boolean active;
    2. 方法: Subscription(Object subscriber, SubscriberMethod); boolean equals(Object other); int hashCode();
3. SubscriberMethod 类: 
    1. 成员: 
        1. String methodString; Method method; Class<?> eventType;
        2. ThreadMode mode; boolean sticky; int priority;
    2. 方法: equals / hashCode
4. SubscriberMethodFinder 类: 
    1. 成员: 
        1. static final int MODIFIERS_IGNORE = Modifier.ABSTRACT | Modifier.STATIC | BRIDGE | SYNTHETIC;
        2. static final Map<Class<?>, List<SubscriberMethod>> METHOD_CACHE = new ConcurrentHashMap<>();
        3. List<SubscriberInfoIndex> subscriberInfoIndexes;
        4. final boolean strictMethodVerification;
        5. final boolean ignoreGeneratedIndex;
        6. static final int POOL_SIZE = 4;
        7. static final FindState[] FIND_STATE_POOL = new FindState[POOL_SIZE];
    2. 方法: 
        1. SubscriberMethodFinder(List<SubscriberInfoIndex> subscriberInfoIndexes, boolean strictMethodVerification, boolean ignoreGeneratedIndex);
        2. private FindState prepareFindState(); private SubscriberInfo getSubscriberInfo(FindState findState); private List<SubscriberMethod> getMethodsAndRelease(FindState findState);
        2. List<SubscriberMethod> findSubscriberMethods(Class<?> subscriberClass);
        3. private List<SubscriberMethod> findUsingInfo(Class<?> subscriberClass);  // 在**apt**中查找
        4. private List<SubscriberMethod> findUsingReflection(Class<?> subscriberClass);  // 通过反射获取
        5. private void findUsingReflectionInSingleClass(FindState findState);  // 通过反射在一个类中获取
        6. static void clearCaches();
        6. 
    3. 静态内部类 FindState 
        1. 成员: 
            1. List<SubscriberMethod> subscriberMethods = new ArrayList<>();
            2. Map<Class, Object> anyMethodByEventType = new HashMap<>();
            3. Map<String, Class> subscriberClassByMethodKey = new HashMap<>();
            4. StringBuilder methodKeyBuilder = new StringBuilder(128);
            5. Class<?> subscriberClass; Class<?> clazz; boolean skipSuperClasses; SubscriberInfo subscriberInfo;
        2. 方法: 
            1. void initForSubscriber(Class<?> subscriberClass); void recycle();
            2. boolean checkAdd(Method method, Class<?> eventType); private boolean **checkAddWithMethodSignature**(Method method, Class<?> eventType);
            3. void moveToSuperclass();
5. 辅助类: 
    1. SubscriberInfo 接口:
        1. Class<?> getSubscriberClass();
        2. SubscriberMethod[] getSubscriberMethods();
        3. SubscriberInfo getSuperSubscriberInfo();
        4. boolean shouldCheckSuperclass();
    2. SubscriberInfoIndex 接口: SubscriberInfo getSubscriberInfo(Class<?> subscriberClass);
    3. AbstractSubscriberInfo 抽象类: 实现了 SubscriberInfo 接口
        1. 成员: Class subscriberClass; Class<? extends SubscriberInfo> superSubscriberInfoClass; boolean shouldCheckSuperclass;
        2. 方法: 
            1. AbstractSubscriberInfo(Class subscriberClass, Class<? extends SubscriberInfo> superSubscriberInfoClass, boolean shouldCheckSuperclass);
            2. Class getSubscriberClass(); SubscriberInfo getSuperSubscriberInfo(); boolean shouldCheckSuperclass();
            3. protected: SubscriberMethod createSubscriberMethod(String methodName, Class<?> eventType); SubscriberMethod createSubscriberMethod(String methodName, Class<?> eventType, ThreadMode threadMode); SubscriberMethod createSubscriberMethod(String methodName, Class<?> eventType, ThreadMode threadMode, int priority, boolean sticky);
    4. SimpleSubscriberInfo 类: 继承了 AbstractSubscriberInfo 抽象类
        1. 成员: final SubscriberMethodInfo[] methodInfos;
        2. 方法: 
            1. public SimpleSubscriberInfo(Class subscriberClass, boolean shouldCheckSuperclass, SubscriberMethodInfo[] methodInfos);
            2. synchronized SubscriberMethod[] getSubscriberMethods();
    5. SubscriberMethodInfo 类: 
        1. 成员: String methodName; ThreadMode threadMode; Class<?> eventType; int priority; boolean sticky;
        2. 方法: 
            1. public SubscriberMethodInfo(String methodName, Class<?> eventType, ThreadMode threadMode, int priority, boolean sticky);
            2. public SubscriberMethodInfo(String methodName, Class<?> eventType);
            3. public SubscriberMethodInfo(String methodName, Class<?> eventType, ThreadMode threadMode);
6. ThreadMode 枚举: POSTING / MAIN / MAIN ORDERED / BACKGROUND / ASYNC
7. Subscribe 注释: ThreadMode threadMode() default ThreadMode.POSTING; boolean sticky() default false; int priority() default 0; 
8. PendingPost 类: 
    1. 成员: Object event; Subscription subscription; PendingPost next;
    2. 方法: PendingPost(Object event, Subscription); static obtainPendingPost(Subscription , Object event); static releasePendingPost(PendingPost pendingPost);
9. PendingPostQueue 类: 
    1. 成员: PendingPost head, tail;
    2. 方法: synchronized enqueue(PendingPost pendingPost); synchronized PendingPost poll(); synchronized PendingPost poll(int maxMillisToWait);
10. Logger 接口: 
    1. 方法: log(Level level, String msg); log(Level level, String msg, Throwable th);
    2. 内部实现类: 
        1. JavaLogger:
            1. 成员: java.util.logging.Logger logger;
            2. 方法: JavaLogger(String tag); ...
        2. SystemOutLogger: 使用 System.out
    3. 外部实现类: 
        1. AndroidLogger
            1. final boolean ANDROID_LOG_AVAILABLE; final String tag;
            2. static boolean isAndroidLogAvailable(); ...; private int mapLevel(Level level);
11. MainThreadSupport 接口: 
    1. 方法: boolean isMainThread(); Poster createPoster(EventBus eventBus);
    2. 内部实现类: AndroidHandlerMainThreadSupport
        1. 成员: Looper looper;
        2. 方法: AndroidHandlerMainThreadSupport(Looper looper); boolean isMainThread(); Poster createPoster(EventBus eventBus){HandlerPost(eventBus, looper, 10)};
12. 异常: 
    1. EventBusException 类: 继承了 RuntimeException
        1. 方法: EventBusException(String detailMessage); EventBusException(Throwable throwable); EventBusException(String detailMessage, Throwable throwable);
    2. NoSubscriberEvent 类: 其实不是异常，只是无法找到 subscriber 的event与对应的eventBus
        1. 属性: EventBus eventBus; Object originalEvent;
        2. 方法: NoSubscriberEvent(EventBus eventBus, Object originalEvent);
    3. SubscriberExceptionEvent 类: 其实也不是异常，只是 subscriber 处理改event时有错误抛出而已
        1. 属性: EventBus eventBus; Throwable throwable; Object causingEvent; Object causingSubscriber;
        2. 方法: SubscriberExceptionEvent(EventBus eventBus, Throwable throwable, Object causingEvent, Object causingSubscriber);
13. EventBusBuilder 类: 
    1. 成员: 
        1. static ExecutorService DEFAULT_EXECUTOR_SERVICE = Executors.newCachedThreadPool();
        2. boolean logSubscriberExceptions = true;
        3. boolean logNoSubscriberMessages = true;
        4. boolean sendSubscriberExceptionEvent = true;
        5. boolean sendNoSubscriberEvent = true;
        6. boolean throwSubscriberException;
        7. boolean **eventInheritance** = true;
        8. boolean **ignoreGeneratedIndex**;
        9. boolean **strictMethodVerification**;
        10. ExecutorService executorService = DEFAULT_EXECUTOR_SERVICE;
        11. List<Class<?>> skipMethodVerificationForClasses;
        12. List<SubscriberInfoIndex> subscriberInfoIndexes;
        13. Logger logger;
        14. MainThreadSupport mainThreadSupport;
    2. 方法: 
        1. EventBusBuilder(){ /\*nothing\*/ }
        2. logSubscriberExceptions(boolean); logNoSubscriberMessages(boolean); sendSubscriberExceptionEvent(boolean); sendNoSubscriberEvent(boolean); throwSubscriberException(boolean); eventInheritance(boolean); ignoreGeneratedIndex(boolean); strictMethodVerification(boolean);
        3. executorService(ExecutorService); skipMethodVerificationFor(Class<?>); addIndex(SubscriberInfoIndex); logger(Logger); 
        4. Logger getLogger(); MainThreadSupport getMainThreadSupport(); Object getAndroidMainLooperOrNull(); 
        5. EventBus installDefaultEventBus(); EventBus build(); 
14. EventBus 类: 
    1. 成员: 
        1. static String TAG = "EventBus"; 
        2. static volatile EventBus defaultInstance;
        3. static final EventBusBuilder DEFAULT_BUILDER = new EventBusBuilder();
        4. static final Map<Class<?>, List<Class<?>>> eventTypesCache = new HashMap<>();
        5. final Map<Class<?>, CopyOnWriteArrayList<Subscription>> subscriptionsByEventType;
        6. final Map<Object, List<Class<?>>> typesBySubscriber;
        7. final Map<Class<?>, Object> stickyEvents;
        8. final ThreadLocal<PostingThreadState> currentPostingThreadState;
        9. 
        10. final MainThreadSupport mainThreadSupport;
        11. final Poster mainThreadPoster;
        12. final BackgroundPoster backgroundPoster;
        13. final AsyncPoster asyncPoster;
        14. final SubscriberMethodFinder subscriberMethodFinder;
        15. final ExecutorService executorService;
        16. 
        17. final boolean logSubscriberExceptions;
        18. final boolean logNoSubscriberMessages;
        19. final boolean sendSubscriberExceptionEvent;
        20. final boolean sendNoSubscriberEvent;
        21. final boolean throwSubscriberException;
        22. final boolean eventInheritance;
        23. 
        24. final int indexCount;
        25. final Logger logger;
    2. 方法: 
        1. static: EventBus getDefault(); EventBusBuilder builder(); clearCaches();
        2. EventBus(); EventBus(EventBusBuilder); 
        3. register(Object subscriber); synchronized void unregister(Object subscriber); synchronized boolean isRegistered(Object subscriber);
        4. private void subscribe(Object subscriber, SubscriberMethod); private void checkPostStickyEventToSubscription(Subscription, Object stickyEvent); private void unsubscribeByEventType(Object subscriber, Class<?> eventType);
        5. void post(Object event); void cancelEventDelivery(Object event);
        6. void postSticky(Object event); T getStickyEvent(Class<T> eventType); T removeStickyEvent(Class<T> eventType); boolean removeStickyEvent(Object event); removeAllStickyEvents();
        7. boolean hasSubscriberForEvent(Class<?> eventClass);
        8. private void postSingleEvent(Object event, PostingThreadState postingState); private boolean postSingleEventForEventType(Object event, PostingThreadState postingState, Class<?> eventClass); private void postToSubscription(Subscription subscription, Object event, boolean isMainThread);
        9. void invokeSubscriber(PendingPost pendingPost); void invokeSubscriber(Subscription subscription, Object event);
        10. private void handleSubscriberException(Subscription subscription, Object event, Throwable cause);
        11. private static List<Class<?>> lookupAllEventTypes(Class<?> eventClass); static void addInterfaces(List<Class<?>> eventTypes, Class<?>[] interfaces);
        12. ExecutorService getExecutorService(); Logger getLogger(); toString();
    3. 内部: 
        1. final static class PostingThreadState:
            1. final List<Object> eventQueue = new ArrayList<>();
            2. boolean isPosting;
            3. boolean isMainThread;
            4. Subscription subscription;
            5. Object event;
            6. boolean canceled;
        2. interface PostCallback: void onPostCompleted(List<SubscriberExceptionEvent> exceptionEvents); 还未实现
15. **注意事项**
    1. @Subscribe method must have exactly 1 parameter;
    2. @Subscribe method: must be public, non-static, and non-abstract;
    3. 父类中定义的订阅方法不能被重写，因为 SubscriberMethodFinder.FindState 类中的 checkAdd();
    4. EventBus是支持事件继承的订阅的
        ```java
        public interface EventInterface {}
        public class FatherEvent implements EventInterface {}
        public class ChildEvent extends FatherEvent {}

        @Subscribe(threadMode = ThreadMode.MAIN)
        public void onEventFather(FatherEvent fatherEvent) {}
        @Subscribe(threadMode = ThreadMode.MAIN)
        public void onEventChild(ChildEvent childEvent) {}
        @Subscribe(threadMode = ThreadMode.MAIN)
        public void onEventInterface(EventInterface eventInterface) {}

        // 当我们调用EventBus.getDefault().post(new ChildEvent())事件时，上面三个方法都可以监听到。因为ChildEvent继承FatherEvent，FatherEvent又实现了EventInterface接口。
        // 当我们调用 EventBus.getDefault().post(new FatherEvent()); 事件时,则订阅了FatherEvent和EventInterface接口的方法可以监听到。
        // 也就是说，发送的事件时，如果该事件的父类或实现的接口被订阅，则也可以监听到。
        ```
    5. 事件过滤: EventBus是基于事件的，也就是订阅方法参数，用户要关心不同的事件，就需要定义不同的事件对象。
    6. 不支持跨进程: 目前EventBus只支持跨线程，而不支持跨进程。如果一个app的service起到了另一个进程中，那么注册监听的模块则会收不到另一个进程的EventBus发出的事件。

## Retrofit2

[Retrofit关键概念解析](https://www.jianshu.com/p/f085be1c302c)
[Retrofit解析3之反射](https://www.jianshu.com/p/2216475cddfe)

## OKHttp

## Android Hermes

[](https://github.com/Xiaofei-it/Hermes)
[Hermes--新颖巧妙易用的Android进程间通信IPC框架](https://www.jianshu.com/p/c18befa71e28)
[](https://github.com/Xiaofei-it/HermesEventBus)
[HermesEventBus-饿了么开源的Android跨进程事件分发框架](https://blog.csdn.net/jdsjlzx/article/details/52279314)

## Android 适配

1. 屏幕适配
    * [](https://github.com/yatoooon/AndroidScreenAdaptation)
    * [Android屏幕适配全攻略(最权威的官方适配指导)](https://blog.csdn.net/jdsjlzx/article/details/45891551)
2. 状态栏适配 https://www.jianshu.com/p/353074f1d155
    1. 调用系统API直接实现
        ```xml
        <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
            <item name="colorPrimaryDark">#339df5</item>
        </style>
        <!-- 该styles.xml需要放置到values-19还是valuse-21中才能生效(具体哪个版本开始支持有点忘了，自己试下就知道)。 -->
        ```
        ```java
        // 或者直接使用java代码
        getWindow().setStatusBarColor(Color.parseColor("#339df5"));
        setContentView(R.layout.activity_main);
        ```
    2. styles.xml配置+代码调用
        ```xml
        <style name="StatusBarTheme" parent="Theme.AppCompat.Light.NoActionBar">
            <item name="android:windowTranslucentStatus">true</item> <!-- 该属性的作用就是将整体布局延伸到状态栏的底部 -->
        </style>
        ```
        ```java
        // 此时还需要配合代码让整体布局往下移动状态栏高度的位移，代码很简单
        findViewById(R.id.title).setPadding(0,statuBarHeight,0,0);
        ```
    3. 开源项目中使用到的方法
        ```xml
        <android.support.v4.widget.DrawerLayout
            android:id="@+id/drawerLayout"
            android:fitsSystemWindows="true"
            android:layout_width="match_parent"
            android:layout_height="match_parent">
            <include
                layout="@layout/main_pager"
                android:layout_width="match_parent"
                android:layout_height="match_parent" />
            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:layout_gravity="start"
                android:background="#ff0000"
                android:orientation="vertical">
            </LinearLayout>
        </android.support.v4.widget.DrawerLayout>
        ```
        ```java
        // 然后在java中
        findViewById(R.id.drawerLayout).setFitsSystemWindows(false);
        getWindow().setStatusBarColor(Color.TRANSPARENT);
        findViewById(R.id.title).setPadding(0, statusBarHeight, 0, 0);
        ```

## Android KLog

[](https://github.com/ZhaoKaiQiang/KLog)

## Android 工具

* [UETool](https://github.com/eleme/UETool)
* [uiautomatorviewer](Android自带的工具吧，可以解析ui)

## Android 大项目

* [CloudReader仿网易云音乐](https://jingbin.me/CloudReader/)
    * [github](https://github.com/youlookwhat/CloudReader)
    * [《云阅》一个仿网易云音乐UI，使用Gank.Io及豆瓣Api开发的开源项目](https://www.jianshu.com/p/69a229fb6e1d)
    * [Android 关于WebView全方面的使用（项目应用篇）](https://www.jianshu.com/p/163d39e562f0)
    * [Android - 仿网易云音乐歌单详情页](https://www.jianshu.com/p/1995b7135073)
    * [Android 水波纹效果的探究](https://www.jianshu.com/p/13eb4574e988)