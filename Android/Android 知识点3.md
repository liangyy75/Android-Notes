<style>
img {
    margin: 0 auto;
    display: block;
}
</style>

- [Adb等工具](#adb%e7%ad%89%e5%b7%a5%e5%85%b7)
- [Android权限系统](#android%e6%9d%83%e9%99%90%e7%b3%bb%e7%bb%9f)
- [bugclose](#bugclose)
- [Process/Runtime](#processruntime)
- [KLog](#klog)
- [buildSrc](#buildsrc)
- [firstpublish](#firstpublish)
- [dexknife](#dexknife)
- [build-timer](#build-timer)
- [AndroidShell](#androidshell)

## Adb等工具

0. links
    1. ddms
        * [在Android Studio下使用Hierarchy Viewer](https://www.jianshu.com/p/e9e05ce5b0c9)
        * [Android UI性能优化详解](http://mrpeak.cn/android/2016/01/11/android-performance-ui)
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
10. adb help
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
11. git help
    ```
    usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
            [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
            [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
            [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
            <command> [<args>]

    These are common Git commands used in various situations:

    start a working area (see also: git help tutorial)
    clone      Clone a repository into a new directory
    init       Create an empty Git repository or reinitialize an existing one

    work on the current change (see also: git help everyday)
    add        Add file contents to the index
    mv         Move or rename a file, a directory, or a symlink
    reset      Reset current HEAD to the specified state
    rm         Remove files from the working tree and from the index

    examine the history and state (see also: git help revisions)
    bisect     Use binary search to find the commit that introduced a bug
    grep       Print lines matching a pattern
    log        Show commit logs
    show       Show various types of objects
    status     Show the working tree status

    grow, mark and tweak your common history
    branch     List, create, or delete branches
    checkout   Switch branches or restore working tree files
    commit     Record changes to the repository
    diff       Show changes between commits, commit and working tree, etc
    merge      Join two or more development histories together
    rebase     Reapply commits on top of another base tip
    tag        Create, list, delete or verify a tag object signed with GPG

    collaborate (see also: git help workflows)
    fetch      Download objects and refs from another repository
    pull       Fetch from and integrate with another repository or a local branch
    push       Update remote refs along with associated objects
    ```
12. git help -g
    ```
    The common Git guides are:
    attributes          Defining attributes per path
    cli                 Git command-line interface and conventions
    core-tutorial       A Git core tutorial for developers
    cvs-migration       Git for CVS users
    diffcore            Tweaking diff output
    everyday            A useful minimum set of commands for Everyday Git
    glossary            A Git Glossary
    hooks               Hooks used by Git
    ignore              Specifies intentionally untracked files to ignore
    modules             Defining submodule properties
    namespaces          Git namespaces
    repository-layout   Git Repository Layout
    revisions           Specifying revisions and ranges for Git
    tutorial            A tutorial introduction to Git
    tutorial-2          A tutorial introduction to Git: part two
    workflows           An overview of recommended workflows with Git
    ```
20. layout inspector
21. [深入理解Android Instant Run运行机制](http://www.androidchina.net/6714.html)
22. [Android APK反编译就这么简单 详解（图文详解）](http://www.androidchina.net/6974.html) [2018年支持java8的Java反编译工具汇总](https://blog.csdn.net/yannqi/article/details/80847354)
23. [快速集成Android最常用八种加密算法](http://www.androidchina.net/7137.html)
24. [使用Android Studio Lint静态分析](http://www.androidchina.net/9919.html)
25. [Android:你好,androidX！再见,android.support](https://www.jianshu.com/p/41de8689615d)
26. [如何下载Android源码](https://github.com/foxleezh/AOSP/issues/1) https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/ [windows环境下repo下载Android源代码](https://segmentfault.com/a/1190000015279330)
27. [How to Install Python Anaconda 5 on Arch Linux 2017](https://linoxide.com/linux-how-to/install-python-anaconda-5-arch-linux-4-11-7-1/)
28. [常用android资源](https://huangtianyu.gitee.io/%E8%B5%84%E6%BA%90/)
29. as使用快捷键 https://blog.csdn.net/yy1300326388/article/details/46411775
    1. ``Ctrl + Shift + F`` 全局查询
    2. ``Ctrl + Shift + N`` 查询文件/类/模块/...
    3. ``Ctrl + E`` 最近文件
    4. ``Alt + home`` 导航栏
    5. ``Ctrl + Alt + L`` 代码格式化
    6. ``Ctrl + Alt + O`` 清除无效包引用
    7. ``Ctrl + Shift + R`` 全局替换
    8. ``Ctrl + R`` 替换
    9. ``Alt + F7`` 查找使用
    10. ``Ctrl + F4`` 关闭
    11. ``Ctrl + Shift + C`` 复制路径
    12. ``Ctrl + Shift + ↑/↓`` 移动代码行
    13. ``Ctrl + ←/→`` 在打开的文件间跳跃
    14. ``Alt + ←/→`` 在单词间跳跃
    15. ``Ctrl + Y`` 删除行
    16. ``Ctrl + X`` 剪切行(如果什么都不选中)
    17. ``Ctrl + (Shift + )W`` 扩大/缩小选中范围
    18. ``Ctrl + Alt + T`` 快速生成结构体
    19. ``Ctrl + Shift + T`` 生成test文件
    20. ``Ctrl + O`` 快速选中重写的方法
    21. ``Ctrl + \+/-`` 打开/折叠代码块
    22. ``Ctrl + Shift + \+/-`` 打开/折叠全部代码块
    23. ``Alt + 数字`` 打开/关闭工具窗口
    24. ``Ctrl + Alt + H`` 查找调用的位置
    25. ``Ctrl + Shift + U`` 大小写转换
    26. ``Alt+Insert``
    27. ``Ctrl +Alt+T`` try catch/if/while等
    28. ``Ctrl + L`` 跳到指定的行数
    29. ``Ctrl + Alt + M`` 提取方法

## Android权限系统

## bugclose

## Process/Runtime

0. links
    * [How to Run a Shell Command in Java](https://www.baeldung.com/run-shell-command-in-java)
    * [java调用shell命令并获取执行结果](https://blog.csdn.net/arkblue/article/details/7897396)
    * [java中调用shell脚本的方法总结](https://my.oschina.net/u/1540325/blog/645255)
    * []()
    * []()

* [Jenkins中文网](https://jenkins.io/zh/)
* [Android Jenkins+Git+Gradle持续集成-实在太详细](https://www.jianshu.com/p/38b2e17ced73)
* [（2.2.11.1）Android全新CI平台——Jenkins构建入门](https://blog.csdn.net/fei20121106/article/details/73810802)
* [android版本列表](https://zh.wikipedia.org/wiki/Android%E7%89%88%E6%9C%AC%E5%88%97%E8%A1%A8)

## KLog

1. Environment类是一个提供访问环境变量的类。
    1. **getExternalStorageState()**: 返回String 获取外部存储设备的当前状态。返回值如下表
		1. Environment.MEDIA_BAD_REMOVAL : 表明 SDCard 被卸载前己被移除 
		2. Environment.MEDIA_CHECKING : 表明对象正在磁盘检查。 
		3. Environment.MEDIA_MOUNTED : 表明对象是否存在并具有读/写权限 
		4. Environment.MEDIA_MOUNTED_READ_ONLY : 表明对象权限为只读 
		5. Environment.MEDIA_NOFS : 表明对象为空白或正在使用不受支持的文件系统。
		6. Environment.MEDIA_SHARED : 如果 SDCard 未安装 ，并通过 USB 大容量存储共享
		7. Environment.MEDIA_UNMOUNTABLE : SDCard 不可被安装 如果 SDCard 是存在但不可以被安装
		8. Environment.MEDIA_UNMOUNTED : SDCard 已卸掉如果 SDCard 是存在但是没有被安装 
		9. Environment.MEDIA_REMOVED : 不存在 SDCard
    2. **getExternalStoragePublicDirectory(String type)**: 返回 File ，获取一个公用的外部存储器目录（标准目录）来摆放某些类型的文件 。参数type值如下：
        1. Environment.DIRECTORY_MUSIC : 音乐存放  
		2. Environment.DIRECTORY_PODCASTS : 系统广播
		3. Environment.DIRECTORY_RINGTONES : 系统铃声
		4. Environment.DIRECTORY_ALARMS : 系统提醒铃声
		5. Environment.DIRECTORY_NOTIFICATIONS : 系统通知铃声
		6. Environment.DIRECTORY_PICTURES : 图片存放
		7. Environment.DIRECTORY_MOVIES : 电影存放
		8. Environment.DIRECTORY_DOWNLOADS : 下载
		9. Environment.DIRECTORY_DCIM : 相机拍摄照片和视频
    3. **getDataDirectory()**: 返回 File ，获取 Android 数据目录。即data的目录 (/data) 
    4. **getDownloadCacheDirectory()**: 返回 File ，获取 Android 下载/缓存内容目录。即 (/cache)
    5. **getExternalStorageDirectory()**:返回 File ，获取外部存储目录即 SDCard (/storage/sdcard)
    6. **getRootDirectory()**: 返回 File ，获取 Android 的根目录 即系统主目录 (/system)
2. java.text.SimpleDateFormat: 它允许格式化（日期→文本），解析（文本→日期）和规范化。
    1. pattern
        | Letter | Date or Time Component                           | Presentation       | Examples                                    |
        | ------ | ------------------------------------------------ | ------------------ | ------------------------------------------- |
        | `G`    | Era designator                                   | Text               | `AD`                                        |
        | `y`    | Year                                             | Year               | `1996`; `96`                                |
        | `Y`    | Week year                                        | Year               | `2009`; `09`                                |
        | `M`    | Month in year (context sensitive)                | Month              | `July`; `Jul`; `07`                         |
        | `L`    | Month in year (standalone form)                  | Month              | `July`; `Jul`; `07`                         |
        | `w`    | Week in year                                     | Number             | `27`                                        |
        | `W`    | Week in month                                    | Number             | `2`                                         |
        | `D`    | Day in year                                      | Number             | `189`                                       |
        | `d`    | Day in month                                     | Number             | `10`                                        |
        | `F`    | Day of week in month                             | Number             | `2`                                         |
        | `E`    | Day name in week                                 | Text               | `Tuesday`; `Tue`                            |
        | `u`    | Day number of week (1 = Monday, ..., 7 = Sunday) | Number             | `1`                                         |
        | `a`    | Am/pm marker                                     | Text               | `PM`                                        |
        | `H`    | Hour in day (0-23)                               | Number             | `0`                                         |
        | `k`    | Hour in day (1-24)                               | Number             | `24`                                        |
        | `K`    | Hour in am/pm (0-11)                             | Number             | `0`                                         |
        | `h`    | Hour in am/pm (1-12)                             | Number             | `12`                                        |
        | `m`    | Minute in hour                                   | Number             | `30`                                        |
        | `s`    | Second in minute                                 | Number             | `55`                                        |
        | `S`    | Millisecond                                      | Number             | `978`                                       |
        | `z`    | Time zone                                        | General time zone  | `Pacific Standard Time`; `PST`; `GMT-08:00` |
        | `Z`    | Time zone                                        | RFC 822 time zone  | `-0800`                                     |
        | `X`    | Time zone                                        | ISO 8601 time zone | `-08`; `-0800`; `-08:00`                    |
    2. getDateTimeInstance / getTimeInstance / getDateInstance
    3. examples
        | Date and Time Pattern            | Result                                 |
        | -------------------------------- | -------------------------------------- |
        | `"yyyy.MM.dd G 'at' HH:mm:ss z"` | `2001.07.04 AD at 12:08:56 PDT`        |
        | `"EEE, MMM d, ''yy"`             | `Wed, Jul 4, '01`                      |
        | `"h:mm a"`                       | `12:08 PM`                             |
        | `"hh 'o''clock' a, zzzz"`        | `12 o'clock PM, Pacific Daylight Time` |
        | `"K:mm a, z"`                    | `0:08 PM, PDT`                         |
        | `"yyyyy.MMMMM.dd GGG hh:mm aaa"` | `02001.July.04 AD 12:08 PM`            |
        | `"EEE, d MMM yyyy HH:mm:ss Z"`   | `Wed, 4 Jul 2001 12:08:56 -0700`       |
        | `"yyMMddHHmmssZ"`                | `010704120856-0700`                    |
        | `"yyyy-MM-dd'T'HH:mm:ss.SSSZ"`   | `2001-07-04T12:08:56.235-0700`         |
        | `"yyyy-MM-dd'T'HH:mm:ss.SSSXXX"` | `2001-07-04T12:08:56.235-07:00`        |
        | `"YYYY-'W'ww-u"`                 | `2001-W27-3`                           |
    4. 
10. Log: 定义了 LogImpl 接口与日志等级，内部有默认实现的LogImpl的实例，有方法可以控制日志等级以及打印日志，还可以获取系统信息。
    1. 字段
        1. private static final String TAG = "mars.xlog.log";
        2. log level
            * public static final int LEVEL_VERBOSE = 0;
            * public static final int LEVEL_DEBUG = 1;
            * public static final int LEVEL_INFO = 2;
            * public static final int LEVEL_WARNING = 3;
            * public static final int LEVEL_ERROR = 4;
            * public static final int LEVEL_FATAL = 5;
            * public static final int LEVEL_NONE = 6;
        3. private static int level = LEVEL_NONE;  // 默认日志等级
        4. public static Context toastSupportContext = null;
        5. private static LogImp logImp = debugLog;  // 默认LogImp
        6. private static final String SYS_INFO;  // 系统信息，有一个static块用于初始化它
    2. 内部接口 public interface LogImp
        * void logV(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log);
        * void logI(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log);
        * void logD(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log);
        * void logW(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log);
        * void logE(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log);
        * void logF(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log);
        * int getLogLevel();
        * void appenderClose();  // ???
        * void appenderFlush(boolean isSync);  // ???
    3. 内部实现类实例 private static LogImp debugLog = new LogImp() { ... }
        * private Handler handler = new Handler(Looper.getMainLooper());
        * LogImp的实现中是使用android.util.Log来打印 tag 和 log 的。
    4. 方法
        1. setLogImp / getImpl
        2. appenderClose / appenderFlush  // ???
        3. getLogLevel / setLevel
        4. 打印1: 调用对应的打印2中的方法
            * public static void v(final String tag, final String msg)
            * public static void d(final String tag, final String msg)
            * public static void i(final String tag, final String msg)
            * public static void w(final String tag, final String msg)
            * public static void e(final String tag, final String msg)
            * public static void f(final String tag, final String msg)
        5. 打印2: 调用logImp的logXXX方法
            * public static void v(String tag, final String format, final Object... obj)
            * public static void d(String tag, final String format, final Object... obj)
            * public static void i(String tag, final String format, final Object... obj)
            * public static void w(String tag, final String format, final Object... obj)
            * public static void e(String tag, final String format, final Object... obj)
            * public static void f(String tag, final String format, final Object... obj)
        6. public static void printErrStackTrace(String tag, Throwable tr, final String format, final Object... obj)
        7. private static final String SYS_INFO;
11. XLog implements Log.LogImpl: native层实现的Log.LogImpl，被 KLog 与 XLogProxy 使用。
    1. 字段
        1. 日志等级
            * public static final int LEVEL_ALL = 0;
            * public static final int LEVEL_VERBOSE = 0;
            * public static final int LEVEL_DEBUG = 1;
            * public static final int LEVEL_INFO = 2;
            * public static final int LEVEL_WARNING = 3;
            * public static final int LEVEL_ERROR = 4;
            * public static final int LEVEL_FATAL = 5;
            * public static final int LEVEL_NONE = 6;
        2. AppednerMode
            * public static final int AppednerModeAsync = 0;
	        * public static final int AppednerModeSync = 1;
    2. 内部类 static class XLoggerInfo
		* public int level;
		* public String tag;
		* public String filename;
		* public String funcname;
		* public int line;
		* public long pid;
		* public long tid;
		* public long maintid;
    3. 方法
        1. public static void open(boolean isLoadLib, int level, int mode, String cacheDir, String logDir, String nameprefix)  // System.loadLibrary("marsxlog");
        2. private static String decryptTag(String tag)  // ???
        3. 使用 native 层方法 logWrite2 实现的日志打印
            * public void logV(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log)
            * public void logD(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log)
            * public void logI(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log)
            * public void logW(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log)
            * public void logE(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log)
            * public void logF(String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log)
    4. native:
        * public native int getLogLevel();
        * public static native void setLogLevel(int logLevel);
        * public static native void setAppenderMode(int mode);
        * public static native void setConsoleLogOpen(boolean isOpen);
        * public static native void setErrLogOpen(boolean isOpen);
        * public static native void appenderOpen(int level, int mode, String cacheDir, String logDir, String nameprefix);
        * public native void appenderClose();
        * public native void appenderFlush(boolean isSync);
        * public static native void logWrite(XLoggerInfo logInfo, String log);
        * public static native void logWrite2(int level, String tag, String filename, String funcname, int line, int pid, long tid, long maintid, String log);
12. KLog: 综合日志类，可以打印日志以及写入日志文件
    1. 字段
        1. public static int LOG_LEVEL = Log.INFO;
        2. public static String TAG = "kiwi";
        3. private static final String DEBUG_TAG = "ARK_DEBUG";
        4. public static boolean sLineNumEnabled = false;  // 是否带行号
        5. public static int sPid = 0;  // 本进程pid
        6. public static boolean isStoreExist = Environment.getExternalStorageState().equalsIgnoreCase(Environment.MEDIA_MOUNTED);  // 表明外部存储设备是否存在并具有读/写权限
        7. private static final SimpleDateFormat TIME_FORMAT = new SimpleDateFormat("HH:mm:ss.SSS");  // 时时:分分:秒秒.毫秒x3
        8. 超时限制
            * public static long sPauseDelay = Long.MAX_VALUE;  // 最长暂停时间
            * private static volatile int pauseLogState = 0;  // 暂停日志的开关,支持重入,不支持多线程。值>=0
            * private static long sPauseStartedTime = 0;  // 开始暂停时间
        9. public static boolean mLogEnable = true;  // 是否允许打印日志
        10. private static long msMaxWait = 3000;  // 
    2. 方法
        1. private
            * nativeLogLevel(int level)
            * static void doLog(final int logLevel, Object tag, final String message, final Throwable t, boolean needStackTrace)
            * static String getLogInfo(Object tag, String message, Throwable t)
            * static String objClassName(Object obj)
            * static String getLogInfo(Object tag, String message, Throwable t, boolean needStackTrace)
            * static String msgForTextLog(Object tag, String filename, int line, String msg, Throwable t, boolean needStackTrace)
            * static void logByLevel(final int logLevel, final String msg)  // 被 logEmptyMsg 和 doLog 使用
            * static void logByLevel(final LogInfo info)  // 被 flushToDisk 和 doLog 使用
        2. setTag
        3. setIsStorageExist
        4. isLogEnable / setLogEnable
        5. setLogLevel / getLogLevel / isLogLevelEnabled(int logLevel)
        6. setSysLogEnabled
        7. public static void pause()  // 暂停打印日志，暂存到缓存中 && public static void resume()  // 恢复打印日志。恢复写入等操作
        8. 日志打印/写入
            * public static void verbose(String msg)  // verbose / debug / info / warning / error / fatal
            * public static void verbose(Object tag, String format)
            * public static void verbose(Object tag, String format, Object... args)
            * public static void verbose(Object tag, String message, Throwable t)
            * public static void verbose(Object tag, Throwable t)
            * public static void log(int logLevel, Object tag, String message, Throwable t, boolean needStackTrace)
            * public static void uncaughtException(Throwable t)
        9. public static void flushToDisk()
        10. public static void logEmptyMsg()  // app启动时触发一下xlog初始化
13. LogProxy: 代理类，被 KLog 使用
    1. 内部接口与类
        1. interface Logger
            * void logByLevel(int type, String msg, String TAG, String fileName);
        2. static class XLogger implements Logger
            * logByLevel  // 内部调用了 XLogProxy.logByLevel ，而 XLogProxy 内部是调用了 XLog 。
    2. 字段
        1. public static boolean sIsSnapshot = false;
        2. private static Logger mLog = new XLogger();
        3. private static final Handler mLogHandler;  // 默认的handler，是一个HandlerThread的
        4. private static Handler sDispatcherHandler;
        5. private static Queue<LogInfo> sLogCacheQueue = new LinkedList<>();
    3. 方法
        1. public static: 初始化与设置/获取日志路径/文件名
            * void init(boolean mainProcess, String processName)
            * void resetRoot(File root)  // XLogProxy 与 LogToES 相关
            * void resetLogPath(String path)  // XLogProxy 与 LogToES 相关
            * void resetLogName(String name)  // XLogProxy 相关
            * void setSysLogEnabled(boolean b)  // XLogProxy 相关
            * String getLogPath()  // XLogProxy 相关
            * String getLogName()  // XLogProxy 相关
            * File getRoot()  // XLogProxy 相关
            * String getFullLogName()  // XLogProxy 相关
            * String getLastLogName()  // XLogProxy 相关
            * String getFullUELogName()  // LogToES 相关
            * String getUELogName()  // LogToES 相关
            * String[] getFullLogNames(int logCount)  // XLogProxy 与 LogToES 相关
            * String[] getFullLogNamesByTime(long logBeginTime, long logEndTime)
            * List<File> getRenamedLogFiles()
            * List<File> getRenamedXLogFiles()
            * List<File> getRenamedNonXLogFiles()
        2. public static Handler getDispatcher()
        3. public static void offer(LogInfo log) / public static LogInfo poll() / public static boolean isCacheEmpty()  // 与 sLogCacheQueue 相关
        4. public static void flushToDisk()  // XLogProxy 相关
        5. private static List<File> getFiles(String folderDir, FilenameFilter filenameFilter)
        6. public static void close()  // XLogProxy 相关
        7. static void logByLevel(int type, String msg, String TAG, String fileName)  // 调用 mLog(->XLogger.logByLevel->XLogProxy.logByLevel->XLog.xxx) 的 logByLevel() 方法
        8. static void uncaughtException(String msg, String TAG, String fileName) throws IOException  // 调用 LogToES 的 writeLogToFileReal 方法
14. XLogProxy: 代理类，调用了XLog作为Native层，被 LogProxy 使用
    1. 字段
        1. public static int MAX_FILE_SIZE = 4;  // MB
        2. private static final
            * int MAX_ONCE_DELETE_FILE_COUNT = 10;  // 每次最多可以删除MAX_ONCE_DELETE_FILE_COUNT个重命名的xlog文件
            * int DELETE_SCHEDULE_DELAY = 5000;  // 如果有超过MAX_ONCE_DELETE_FILE_COUNT个重命名的xlog文件，文件将分成组，每DELETE_SCHEDULE_DELAY ms删除一个组 
            * int SNAPSHOT_MIN_KEEP_COUNT = 20;  // 最少在kiwi/logs/中保存的日志数量
            * int NONSNAPSHOT_MIN_KEEP_COUNT = 3;
            * int SNAPSHOT_DELETE_FILE_THRESHOLD = 30;  // 触发删除的阈值
            * int NONSNAPSHOT_DELETE_FILE_THRESHOLD = 10;
            * String XLOG = ".xlog";
        3. private static int currentRenamedFileCount = 0;
        4. public static File sRootDir;
        5. 一些相关设置  // rewrite in App
            * public static String sLogPath = "/kiwi/logs";
            * public static String LOG_NAME = "logs";
            * public static String LOG_PATH = LOG_NAME + XLOG;
            * public static String LAST_LOG_NAME = "logs-last";
            * public static String LAST_LOG_PATH = LAST_LOG_NAME + XLOG;
            * public static boolean sysLogEnabled = true;
            * public static Handler mHandler = null;
        6. private static long msMaxWait = 3000;
        7. private static final int msMaxCount = 4000;  // 当日志长度超过4k时，Xlog将丢弃日志，因此我们需要拆分日志。
        8. private volatile static String mCurrentLog = null;
        9. private volatile static boolean isFilesDeleting = false;
    2. 方法
        1. private
            * static void switchOutputFile(String file)
            * static void renameFileIfNeed()  // make sure logs.xlog is less than 3MB
            * static void renameReal(File file)
            * static void deleteOldFileIfNeed()  // 如果是 Snapshot 版本：删除后，只保留20个oldRenameXLog文件；如果是 非Snapshot 版本：删除后，只保留3个oldRenameXLog文件
            * static void closeIfNeed()
            * static boolean isOverThreshold()
        2. static void loadLibrary()  // 三次尝试加载库(stlport_shared / marsxlog)
        3. static void logByLevel(final int type, final String msg, final String TAG, final String fileName)
        4. static void logByLevelReal(int type, String msg, String TAG)
        5. public static boolean copyFile(String inFileName, String outFileName)
        6. public static void flushToDisk()
        7. public static void close()
15. LogToES: 将日志写入文件，可以控制路径和文件名，被 LogProxy 使用，现在相当于被抛弃了，应该使用 XLogProxy 的
    1. 字段
        1. public static final int MAX_FILE_SIZE = 2;  // M bytes
        2. 文件路径  // can overwrite this path by ark.config(ark.common.path)
            * public static File sRootDir;
            * public static String sLogPath = "/kiwi/logs";
            * public static final String UE_LOG_NAME = "uncaught_exception.txt";
        3. public static Handler mLogHandler;
        4. private
            * static final SimpleDateFormat LOG_FORMAT = new SimpleDateFormat("yyyy:MM:dd HH:mm:ss.SSS");
            * static final long DAY_DELAY = 5 * 24 * 60 * 60 * 1000;
    2. 方法
        1. private
            * private synchronized static void writeLogToFileReal(String path, String fileName, String msg, Date date, boolean immediately) throws IOException
            * static void deleteOldLogs()
        2. public synchronized static void writeLogToFileReal(String path, String fileName, String msg) throws IOException  // 调用了 private 的 writeLogToFileReal
        3. public static File getRootDir()
16. LogInfo: 日志信息结构，被 KLog 和 LogProxy 引用
    1. String msg;
    2. int logLevel;
17. LogFileWriter: 有缓存机制的日志文件写入器，被 LogToES 使用
    1. 内部类
        1. private static class Buffer
            * public final StringBuilder buffer;
            * public int current = 0;
    2. 字段
        1. private static Map<String, Buffer> mBuffer = new HashMap<>();
        2. protected static int mBufferCount = 15;
        3. private String mFileName;
    3. 方法
        1. public LogFileWriter(String file)  // 将file加入mBuffer
        2. public void write(StringBuffer msg) throws IOException
        3. public void write(String msg) throws IOException
        4. public void flush() throws IOException
        5. private static void flush(String name) throws IOException
        6. public static void flushAll() throws IOException
18. RenamedLogFilenameFilter implements FilenameFilter: 用于过滤日志名称(符合固定长度、开头、结尾)，找到对应的日志，如XLog和非XLog日志，被 LogProxy 使用
    1. 字段
        1. private String startLable = null;
        2. private String endLable = null;
        3. private int length = 0;
    2. 方法
        1. public boolean accept(File dir, String name)
        2. setLength / setEndLable / setStartLable
19. public class LogFileComparator implements Comparator<File>: 文件名比较器，被使用在 LogProxy 和 XLogProxy 中
    1. 字段
        * public static final int ASC_SORT_BY_LAST_MODIFIED_TIME = 0;  // 顺序
        * public static final int DESC_SORT_BY_LAST_MODIFIED_TIME = 1;  // 逆序
    2. 方法
        1. compare
20. Tags: 被 KLog 使用
    1. public final Object[] mTags;
    2. public Tags(Object... tags)
    3. toString

## buildSrc

## firstpublish

1. public class FirstPublishPlugin implements Plugin<Project>: 主要就是调用了 Repack
    1. void apply(Project project)
    2. private static void generateFirstPublishApk(Project project)
2. class Repack
    1. private static String findLogoPath(File unzipDir)
    2. private static void replaceLogo(String tempPath, String channelName)
    3. static void copyFile(String name, String destPath) throws IOException
    4. private static final int BUFFER = 8192
    5. private static void zipFile(String tempOutDir, File resFile, ZipOutputStream zipout, String rootpath, HashMap<String, Integer> compressData) throws IOException
    6. static void zipFiles(String tempOutDir, Collection<File> resFileList, File zipFileOutput, HashMap<String, Integer> compressData) throws IOException
    7. private static String getSignPropertiesFile()
    8. private static void signApk(String dir, String baseFileName)
    9. private static byte[] readContents(final File file) throws IOException
    10. private static void zipFirstPublishApk(String srcDir, String targetFilePath, String baseFileName)
    11. private static void zipAlignFirstPublishApk(String dir, String baseFileName)
    12. static void generateFirstPublishApk(Project project)
    13. private static void _generateFirstPublishApk(String apkSrcfilePath, String channelName)
    14. static HashMap<String, Integer> unZipAPk(String fileName, String filePath) throws IOException
    15. private static String getZipAlignPath()
    16. private static void packerNg(String dir, String baseFileName, String channelName)
3. public class FirstPublishPacker
    1. main

## dexknife

## build-timer

## AndroidShell

public static CommandResult run(@NonNull String shell, @NonNull String... commands)
public static CommandResult run(@NonNull String shell, @NonNull String[] commands, @Nullable String[] env)