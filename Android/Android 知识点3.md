<style>
img {
    margin: 0 auto;
    display: block;
}
</style>

- [Vector](#vector)
- [Adb等工具](#adb等工具)
- [Android权限系统](#android权限系统)
- [bugclose](#bugclose)
- [Process/Runtime](#processruntime)
- [KLog](#klog)
- [buildSrc](#buildsrc)
- [firstpublish](#firstpublish)
- [dexknife](#dexknife)
- [自定义view](#自定义view)
    - [links](#links)
    - [Paint](#paint)
    - [Canvas](#canvas)
    - [矩形工具类RectF与Rect](#矩形工具类rectf与rect)
    - [Path](#path)
    - [Range](#range)
    - [FontMetrics与FontMetricsInt](#fontmetrics与fontmetricsint)
    - [贝塞尔曲线与手势轨迹、水波纹效果](#贝塞尔曲线与手势轨迹水波纹效果)
    - [ColorMatrix与滤镜效果](#colormatrix与滤镜效果)
    - [ColorFilter](#colorfilter)
    - [setXfermode](#setxfermode)
- [build-timer](#build-timer)
- [进程保活](#进程保活)
- [AndroidShell](#androidshell)

## Vector

1. links
    1. [Android Vector曲折的兼容之路](https://www.jianshu.com/p/e3614e7abc03)
2. 注意点
    1. vector中的width/height不能用?attr/actionBarSize这样的表示

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

## 自定义view

### links

1. [Android中Attributes、defStyleAttr、defStyleRes关系理解与应用](https://www.jianshu.com/p/f1fd2d8d5536)
2. [Android自定义控件三部曲文章索引](http://blog.csdn.net/harvic880925/article/details/50995268)
3. [android绘图](https://blog.csdn.net/u010126792/article/details/85102394)
4. [Android必知必会——Canvas](https://juejin.im/post/5e943d2451882573c15ee1be)
5. [Android灵魂画家的18种混合模式](https://www.jianshu.com/p/4bdf7d034dee)
6. [你好， SuperTextView](https://www.jianshu.com/p/1b91e11e441d)
7. [android-动画、图像混合模式](https://juejin.im/post/5d689358f265da03992987b2)

### Paint

常用函数

* paint.setAntiAlias(true);  //抗锯齿功能
* paint.setColor(Color.RED);  //设置画笔颜色
* paint.setARGB(int a, int r, int g, int b)
* paint.setAlpha(int a)
* paint.setStyle(Style.FILL);  //设置填充样式
    * Paint.Style.FILL : 填充内部
    * Paint.Style.FILL_AND_STROKE : 填充内部和描边
    * Paint.Style.STROKE : 仅描边
    * FILL与FILL_AND_STROKE其实是有区别的 当画笔较粗的时候比如setStrokeWidth(80);时就会看出很明显的区别
* paint.setStrokeColor(Color.BLACK);  //设置stroke颜色
* paint.setStrokeCap(Paint.Cap cap)
    * Cap.ROUND(圆形线帽)
    * Cap.SQUARE(方形线帽)
    * Paint.Cap.BUTT(无线帽)
* paint.setStrokeJoin(Paint.Join join)
    * Join.MITER（结合处为锐角）
    * Join.Round(结合处为圆弧)
    * Join.BEVEL(结合处为直线)
* paint.setStrokeMiter(float miter)  // 设置笔画的倾斜度，90度拿画笔与30拿画笔，画出来的线条样式肯定是不一样的吧。（事实证明，根本看不出来什么区别好吗……囧……）
* paint.setStrokeWidth(30);  //设置画笔宽度
* paint.setShadowLayer(float radius, float dx, float dy, int color);  //设置阴影
    * radius:阴影的倾斜度
    * dx:水平位移
    * dy:垂直位移
* paint.setPathEffect(PathEffect effect)  设置路径样式;取值类型是所有派生自PathEffect的子类
    * CornerPathEffect 圆形拐角效果，原来Path生硬的直线拐角，变成圆形拐角。 public CornorPathEffect(float radius) https://blog.csdn.net/harvic880925/article/details/51010839
    * DashPathEffect 虚线效果 public DashPathEffect(float intervals[], float phase) intervals[]数组长度必须大于等于2；因为必须有一个实线段和一个空线段来组成虚线。phase：开始绘制的偏移值
    * DiscretePathEffect 离散路径效果。将原来路径分隔成定长的线段，然后将每条线段随机偏移一段位置，我们可以用它来模拟一种类似生锈铁丝的效果。 public DiscretePathEffect(float segmentLength, float deviation)
        * segmentLength：表示将原来的路径切成多长的线段。如果值为2，那么这个路径就会被切成一段段由长度为2的小线段。所以这个值越小，所切成的小线段越多；这个值越大，所切成的小线段越少。
        * deviation：表示被切成的每个小线段的可偏移距离。值越大，就表示每个线段的可偏移距离就越大，就显得越凌乱，值越小，每个线段的可偏移原位置的距离就越小。
    * PathDashPathEffect 印章路径效果。用另一个路径图案做为印章，沿着指定路径一个个盖上去。public PathDashPathEffect(Path shape, float advance, float phase,Style style)
        * Path shape:表示印章路径，比如我们下面示例中的三角形加右上角一个点；
        * float advance：表示两个印章路径间的距离,很容易理解，印章间距离越大，间距就越大。
        * float phase：路径绘制偏移距离，与上面DashPathEffect中的float phase参数意义相同
        * Style style：表示在遇到转角时，如何操作印章以使转角平滑过渡，取值有：Style.ROTATE，Style.MORPH，Style.TRANSLATE;Style.ROTATE表示通过旋转印章来过渡转角；Style.MORPH表示通过变形印章来过渡转角；Style.TRANSLATE表示通过位移来过渡转角。这三个效果的具体意义，上面会通过具体示例来分别讲解。
    * ComposePathEffect 合并特效，但是特效有先后顺序的，它会先将第二个参数的特效作用于路径上。public ComposePathEffect(PathEffect outerpe, PathEffect innerpe)
    * SumPathEffect 合并特效。分别对原始路径分别作用第一个特效和第二个特效。然后再将这两条路径合并，做为最终结果。public SumPathEffect(PathEffect first, PathEffect second)
* paint.reset()

常用flags -- new Paint(flags) | paint.setFlags(flags)

* Paint.ANTI_ALIAS_FLAG ：抗锯齿标志 0x01
* Paint.FILTER_BITMAP_FLAG : 使位图过滤的位掩码标志 0x02
* Paint.DITHER_FLAG : 使位图进行有利的抖动的位掩码标志 0x04
* Paint.UNDERLINE_TEXT_FLAG : 下划线 0x08
* Paint.STRIKE_THRU_TEXT_FLAG : 中划线 0x10
* Paint.FAKE_BOLD_TEXT_FLAG : 加粗 0x20
* Paint.LINEAR_TEXT_FLAG : 使文本平滑线性扩展的油漆标志 0x40
* Paint.SUBPIXEL_TEXT_FLAG : 使文本的亚像素定位的绘图标志 0x80
* Paint.EMBEDDED_BITMAP_TEXT_FLAG : 绘制文本时允许使用位图字体的绘图标志 0x400
* Paint.DEV_KERN_TEXT_FLAG : 0x100 @deperated
* Paint.LCD_RENDER_TEXT_FLAG : 0x200 @hide
* Paint.AUTO_HINTING_TEXT_FLAG : 0x800 @hide
* Paint.VERTICAL_TEXT_FLAG : 0x1000 @hide

与path/text相关的配置

1. 普通设置
    * paint.setStrokeWidth (5);//设置画笔宽度
    * paint.setAntiAlias(true); //指定是否使用抗锯齿功能，如果使用，会使绘图速度变慢
    * paint.setStyle(Paint.Style.FILL);//绘图样式，对于设文字和几何图形都有效
    * paint.setTextAlign(Paint.Align.CENTER);//设置文字对齐方式(在x坐标的左侧|中间|右侧，相对位置是根据所要绘制文字所在矩形来计算的)，取值：align.CENTER、align.LEFT或align.RIGHT
    * paint.setTextSize(12);//设置文字大小
2. 样式设置
    * paint.setFakeBoldText(true);//设置是否为粗体文字
    * paint.setUnderlineText(true);//设置下划线
    * paint.setTextSkewX((float) -0.25);//设置字体水平倾斜度，普通斜体字是-0.25
    * paint.setStrikeThruText(true);//设置带有删除线效果
    * paint.setTextScaleX(2);//只会将水平方向拉伸，高度不会变
3. 其它设置
    * paint.setLinearText(boolean linearText);//设置是否打开线性文本标识；由于文本想要快速绘制出来，必然是需要提前缓存在显存中的，一般而言每个文字需要一个字节的大小来存储它（当然具体需要多少字节与编码方式有关），那如果是长篇文章，可见所需的大小可想而知。我们可以通过setLinearText (true)告诉Android我们不需要这样的文本缓存。但如果我们不用文本缓存，虽然能够省去一些内存空间，但这是以显示速度为代价的。由于这个是API 1的函数，由于当时的android手机的内存大小还是很小的，所以尽量减少内存使用是每个应用的头等大事，在当时的的环境下这个函数还是很有用的。但在今天，内存动不动就是4G以上了，文本缓存的所占的那点内存就微不足道了，没有哪个APP会牺牲性能来减少这点这内存占用了，所以这个函数基本没用了。
    * paint.setSubpixelText(boolean subpixelText);//表示是否打开亚像素设置来绘制文本。亚像素的概念比较难理解，首先，我们都知道像素，比如一个android手机的分辨率是1280\*720，那就是指它的屏幕在垂直方向有1280个像素点，水平方向上有720个像素点。我们知道每个像素点都是一个独立显示一个颜色的个体。所以如果一副图片，在一个屏幕上用了300\*100个相素点，而在另一个屏幕上却用了450\*150个像素来显示。那么，请问在哪个屏幕上这张图片显示的更清晰？当然是第二个屏幕，因为它使用的像素点更多，所显示的细节更精细。那么问题来了，android设置在出厂时，设定的像素显示都是固定的几个范围：320*480，480*800，720*1280，1080*1920等等；那么如何在同样的分辨率的显示器中增强显示清晰度呢？亚像素的概念就油然而生了，亚像素就是把两个相邻的两个像素之间的距离再细分，再插入一些像素，这些通过程序加入的像素就是亚像素。在两个像素间插入的像素个数是通过程序计算出来的，一般是插入两个、三个或四个。所以打开亚像素显示，是可以在增强文本显示清晰度的，但由于插入亚像素是通过程序计算而来的，所以会耗费一定的计算机性能。注意：亚像素是通过程序计算出来模拟插入的，在没有改变硬件构造的情况下，来改善屏幕分辨率大小。亚像素显示，是仅在液晶显示器上使用的一种增强字体清晰度的技术。但这种技术有时会出现问题，用投影仪投射到白色墙壁上，会出出字体显示不正常的情况，而且对于老式的CRT显示器是根本不支持的。在android还没有出现时，windows已经能够支持亚像素显示了，在windows机器中，这个功能叫做ClearType，在以前讲述windows的GDI绘图时，也曾经讲过ClearType的应用效果。

图像处理

* setShader(Shader shader)
* setShadowLayer(float radius, float dx, float dy, int shadowColor)
* setDither(boolean dither)
* setColorFilter(ColorFilter filter)
* setXfermode(Xfermode xfermode)
* setFilterBitmap(boolean filter)
* clearShadowLayer()

measure测量相关

* breakText(char[] text, int index, int count, float maxWidth, float[] measuredWidth)
* measureText(String text)

### Canvas

常用函数

* canvas.drawColor(Color.BLUE);
* canvas.drawRGB(255, 255, 0);  //这两个功能一样，都是用来设置背景颜色的。
* void drawPaint(Paint paint)

基本绘图

* 直线
    * 一条: void drawLine (float startX, float startY, float stopX, float stopY, Paint paint)
    * 多条: void drawLines (float[] pts, Paint paint)
    * 多条: void drawLines (float[] pts, int offset, int count, Paint paint)
* 点
    * void drawPoint (float x, float y, Paint paint)
    * void drawPoints (float[] pts, Paint paint)
    * void drawPoints (float[] pts, int offset, int count, Paint paint)
        * offset:集合中跳过的数值个数，注意不是点的个数！一个点是两个数值；
* 矩形
    * void drawRect (float left, float top, float right, float bottom, Paint paint)
    * void drawRect (RectF rect, Paint paint)
    * void drawRect (Rect r, Paint paint)
* 圆角矩形
    * void drawRoundRect (RectF rect, float rx, float ry, Paint paint)
    * void drawRoundRect(float left, float top, float right, float bottom, float rx, float ry, Paint paint)
    * void drawDoubleRoundRect(RectF outer, float outerRx, float outerRy, RectF inner, float innerRx, float innerRy, Paint paint)
    * void drawDoubleRoundRect(RectF outer, float[] outerRadii, RectF inner, float[] innerRadii, Paint paint)
* 圆形
    * void drawCircle (float cx, float cy, float radius, Paint paint)
* 椭圆
    * void drawOval (RectF oval, Paint paint)。以矩形的长为椭圆的X轴，矩形的宽为椭圆的Y轴，建立的椭圆图形
* 弧线
    * void drawArc (RectF oval, float startAngle, float sweepAngle, boolean useCenter, Paint paint)
    * void drawArc(float left, float top, float right, float bottom, float startAngle, float sweepAngle, boolean useCenter, Paint paint)
    * boolean useCenter:是否有弧的两边，True，还两边，False，只有一条弧
    * float startAngle：弧开始的角度，以X轴正方向为0度
    * float sweepAngle：弧持续的角度
* paint
    * void drawPaint(Paint paint)
* patch -- 九点图 ???
    * void drawPatch(NinePatch patch, Rect dst, Paint paint)
    * void drawPatch(NinePatch patch, RectF dst, Paint paint)
* path
    * void drawPath(Path path, Paint paint)
* text https://blog.csdn.net/harvic880925/article/details/38926877 ???
    * 这里的y坐标都是基线的y坐标
    * 普通水平绘制
        * void drawText(char[] text, int index, int count, float x, float y, Paint paint)
        * void drawText(String text, float x, float y, Paint paint)
        * void drawText(String text, int start, int end, float x, float y, Paint paint)
        * void drawText(CharSequence text, int start, int end, float x, float y, Paint paint)
    * 指定个个文字位置
        * void drawPosText(char[] text, int index, int count, @Size(multiple = 2) float[] pos, Paint paint)
        * void drawPosText(String text, @Size(multiple = 2) float[] pos, Paint paint)
    * 沿路径绘制
        * void drawTextOnPath(char[] text, int index, int count, Path path, float hOffset, float vOffset, Paint paint)
        * void drawTextOnPath(String text, Path path, float hOffset, float vOffset, Paint paint)
            * float hOffset  : 与路径起始点的水平偏移距离
            * float vOffset  : 与路径中心的垂直偏移量
    * ???
        * void drawTextRun(char[] text, int index, int count, int contextIndex, int contextCount, float x, float y, boolean isRtl, Paint paint)
        * void drawTextRun(CharSequence text, int start, int end, int contextStart, int contextEnd, float x, float y, boolean isRtl, Paint paint)
        * void drawTextRun(MeasuredText text, int start, int end, int contextStart, int contextEnd, float x, float y, boolean isRtl, Paint paint)
* verties ???
    * void drawVertices(VertexMode mode, int vertexCount, float[] verts, int vertOffset, float[] texs, int texOffset, int[] colors, int colorOffset, short[] indices, int indexOffset, int indexCount, Paint paint)
* renderNode ???
    * oid drawRenderNode(RenderNode renderNode)
* color -- 背景、图片mode
    * void drawRGB(int r, int g, int b)
    * void drawARGB(int a, int r, int g, int b)
    * void drawColor(@ColorInt int color)
    * void drawColor(@ColorLong long color)
    * void drawColor(@ColorInt int color, PorterDuff.Mode mode)
    * void drawColor(@ColorInt int color, BlendMode mode)
    * void drawColor(@ColorLong long color, BlendMode mode)
* bitmap ???
    * void drawBitmap(Bitmap bitmap, float left, float top, Paint paint)
    * void drawBitmap(Bitmap bitmap, Rect src, RectF dst, Paint paint)
    * void drawBitmap(Bitmap bitmap, Rect src, Rect dst, Paint paint)
    * void drawBitmap(int[] colors, int offset, int stride, float x, float y, int width, int height, boolean hasAlpha, Paint paint) ???
    * void drawBitmap(int[] colors, int offset, int stride, int x, int y, int width, int height, boolean hasAlpha, Paint paint) ???
    * void drawBitmap(Bitmap bitmap, Matrix matrix, Paint paint) ???
    * void drawBitmapMesh(Bitmap bitmap, int meshWidth, int meshHeight, float[] verts, int vertOffset, int[] colors, int colorOffset, Paint paint) ???
* picture ???
    * void drawPicture(Picture picture) ???
    * void drawPicture(Picture picture, RectF dst) ???
    * void drawPicture(Picture picture, Rect dst) ???

变换

0. 前置
    1. 每次调用canvas.drawXXXX系列函数来绘图进，都会产生一个全新的Canvas画布。
    2. 如果在DrawXXX前，调用平移、旋转等函数来对Canvas进行了操作，那么这个操作是不可逆的！每次产生的画布的最新位置都是这些操作后的位置。（关于Save()、Restore()的画布可逆问题的后面再讲）
    3. 在Canvas与屏幕合成时，超出屏幕范围的图像是不会显示出来的。
1. 平移: canvas中有一个函数void translate(float dx, float dy)是用来实现画布平移的，画布的原状是以左上角为原点，向左是X轴正方向，向下是Y轴正方向
2. 旋转: void rotate(float degrees) | void rotate (float degrees, float px, float py) 画布的旋转是默认是围绕坐标原点来旋转的，这里容易产生错觉，看起来觉得是图片旋转了，其实我们旋转的是画布
    1. 第一个构造函数直接输入旋转的度数，正数是顺时针旋转，负数指逆时针旋转，它的旋转中心点是原点（0，0）
    2. 第二个构造函数除了度数以外，还可以指定旋转的中心点坐标（px,py）
3. 缩放
    1. public void scale (float sx, float sy)
    2. public final void scale (float sx, float sy, float px, float py)
4. 斜切: void skew (float sx, float sy)
    1. float sx:将画布在x方向上倾斜相应的角度，sx倾斜角度的tan值，
    2. float sy:将画布在y轴方向上倾斜相应的角度，sy为倾斜角度的tan值，
    3. 注意，这里全是倾斜角度的tan值哦，比如我们打算在X轴方向上倾斜60度，tan60=根号3，小数对应1.732 。math.atan(math.tan(math.pi / 3)) / math.pi == 1 / 3 。 math.tan(math.pi / 3) == 1.732xxx
5. 裁剪画布: 裁剪画布是利用Clip系列函数，通过与Rect、Path、Region取交、并、差等集合运算来获得最新的画布形状。除了调用Save、Restore函数以外，这个操作是不可逆的，一但Canvas画布被裁剪，就不能再被恢复！
    1. boolean clipPath(Path path)
    2. boolean clipPath(Path path, Region.Op op)
    3. boolean clipRect(Rect rect, Region.Op op)
    4. boolean clipRect(RectF rect, Region.Op op)
    5. boolean clipRect(int left, int top, int right, int bottom)
    6. boolean clipRect(float left, float top, float right, float bottom)
    7. boolean clipRect(RectF rect)
    8. boolean clipRect(float left, float top, float right, float bottom, Region.Op op)
    9. boolean clipRect(Rect rect)
    10. boolean clipRegion(Region region)
    11. boolean clipRegion(Region region, Region.Op op)
6. 恢复画布: 前面我们讲的所有对画布的操作都是不可逆的，这会造成很多麻烦，比如，我们为了实现一些效果不得不对画布进行操作，但操作完了，画布状态也改变了，这会严重影响到后面的画图操作。如果我们能对画布的大小和状态（旋转角度、扭曲等）进行实时保存和恢复就最好了。
    1. int save () 每调用一次Save（）操作就会将当前的画布状态保存到栈中
    2. void restore()把栈中最顶层的画布状态取出来，并按照这个状态恢复当前的画布，并在这个画布上做画。

### 矩形工具类RectF与Rect

### Path

https://blog.csdn.net/harvic880925/article/details/38926877

void drawPath (Path path, Paint paint)

1. 直线
    1. void moveTo (float x1, float y1):直线的开始点；即将直线路径的绘制点定在（x1,y1）的位置；
    2. void lineTo (float x2, float y2)：直线的结束点，又是下一次绘制直线路径的开始点；lineTo（）可以一直用；
    3. void close ():如果连续画了几条直线，但没有形成闭环，调用Close()会将路径首尾点连接起来，形成闭环；
2. 矩形路径
    1. void addRect (float left, float top, float right, float bottom, Path.Direction dir)
    2. void addRect (RectF rect, Path.Direction dir)
    3. 这里Path类创建矩形路径的参数与上篇canvas绘制矩形差不多，唯一不同的一点是增加了Path.Direction参数；
        1. Path.Direction有两个值：
        2. Path.Direction.CCW：是counter-clockwise缩写，指创建逆时针方向的矩形路径；
        3. Path.Direction.CW：是clockwise的缩写，指创建顺时针方向的矩形路径；
        4. 生成方式的区别在于，依据生成方向排版的文字！后面我们会讲到文字，文字是可以依据路径排版的，那文字的行走方向就是依据路径的生成方向；
3. 圆角矩形路径
    1. void addRoundRect (RectF rect, float[] radii, Path.Direction dir)
    2. void addRoundRect (RectF rect, float rx, float ry, Path.Direction dir)
        1. float[] radii：必须传入8个数值，分四组，分别对应每个角所使用的椭圆的横轴半径和纵轴半径，如｛x1,y1,x2,y2,x3,y3,x4,y4｝，其中，x1,y1对应第一个角的（左上角）用来产生圆角的椭圆的横轴半径和纵轴半径，其它类推……
4. 圆形路径
    1. void addCircle (float x, float y, float radius, Path.Direction dir)
5. 椭圆路径
    1. void addOval (RectF oval, Path.Direction dir)
6. 弧形路径
    1. void addArc (RectF oval, float startAngle, float sweepAngle)
7. 线段轨迹---待补充
    1. void quadTo (float x1, float y1, float x2, float y2)

```java
// 1
Paint paint=new Paint();
paint.setColor(Color.RED);  //设置画笔颜色
paint.setStyle(Style.STROKE);//填充样式改为描边
paint.setStrokeWidth(5);//设置画笔宽度
Path path = new Path();
path.moveTo(10, 10); //设定起始点
path.lineTo(10, 100);//第一条直线的终点，也是第二条直线的起点
path.lineTo(300, 100);//画第二条直线
path.lineTo(500, 100);//第三条直线
path.close();//闭环
canvas.drawPath(path, paint);
// 2.3.4
Path CCWRectpath = new Path();//第一个逆向生成
RectF rect1 =  new RectF(50, 50, 240, 200);
CCWRectpath.addRect(rect1, Direction.CCW);
Path CWRectpath = new Path();//第二个顺向生成
RectF rect2 =  new RectF(290, 50, 480, 200);
CWRectpath.addRect(rect2, Direction.CW);
canvas.drawPath(CCWRectpath, paint);//先画出这两个路径
canvas.drawPath(CWRectpath, paint);
String text="风萧萧兮易水寒，壮士一去兮不复返";//依据路径写出文字
paint.setColor(Color.GRAY);
paint.setTextSize(35);
canvas.drawTextOnPath(text, CCWRectpath, 0, 18, paint);//逆时针生成
canvas.drawTextOnPath(text, CWRectpath, 0, 18, paint);//顺时针生成
```

在Paint中设置字体样式：paint.setTypeface(typeface); Typeface相关 -- 概述：Typeface是专门用来设置字体样式的，通过paint.setTypeface()来指定。可以指定系统中的字体样式，也可以指定自定义的样式文件中获取。要构建Typeface时，可以指定所用样式的正常体、斜体、粗体等，如果指定样式中，没有相关文字的样式就会用系统默认的样式来显示，一般默认是宋体。

创建Typeface：

* Typeface create(String familyName, int style) //直接通过指定字体名来加载系统中自带的文字样式
* Typeface create(Typeface family, int style)     //通过其它Typeface变量来构建文字样式
* Typeface createFromAsset(AssetManager mgr, String path) //通过从Asset中获取外部字体来显示字体样式
* Typeface createFromFile(String path)//直接从路径创建
* Typeface createFromFile(File path)//从外部路径来创建字体样式
* Typeface defaultFromStyle(int style)//创建默认字体

上面的各个参数都会用到Style变量,Style的枚举值如下:

* Typeface.NORMAL  //正常体
* Typeface.BOLD //粗体
* Typeface.ITALIC //斜体
* Typeface.BOLD_ITALIC //粗斜体

从上面创建Typeface的所有函数中可知，使用系统中自带的字体有下面两种方式来构造Typeface：

* Typeface defaultFromStyle(int style)//创建默认字体
* Typeface create(String familyName, int style) //直接通过指定字体名来加载系统中自带的文字样式 --> Typeface.create("宋体", Typeface.NORMAL);

自定义字体的话，我们就需要从外部字体文件加载我们所需要的字形的，从外部文件加载字形所使用的Typeface构造函数如下面三个：

* Typeface createFromAsset(AssetManager mgr, String path) //通过从Asset中获取外部字体来显示字体样式
* Typeface createFromFile(String path)//直接从路径创建
* Typeface createFromFile(File path)//从外部路径来创建字体样式

后面两个从路径加载难度不大，而我们一般也不会用到，这里我们说说从Asset文件中加载；首先在Asset下建一个文件夹，命名为Fonts，然后将字体文件jian_luobo.ttf放入其中。Typeface.createFromAsset(mgr, "fonts/jian_luobo.ttf");

### Range

构造函数

* public Region() //创建一个空的区域
* public Region(Region region) //拷贝一个region的范围
* public Region(Rect r) //创建一个矩形的区域
* public Region(int left, int top, int right, int bottom) //创建一个矩形的区域

间接构造

* public void setEmpty() //置空
* public boolean set(Region region)
* public boolean set(Rect r)
* public boolean set(int left, int top, int right, int bottom)
* public boolean setPath(Path path, Region clip)//构造不规则区域
    * Path path：用来构造的区域的路径
    * Region clip：与前面的path所构成的路径取交集，并将两交集设置为最终的区域
    * 由于路径有很多种构造方法，而且可以轻意构造出非矩形的路径，这就摆脱了前面的构造函数只能构造矩形区域的限制。但这里有个问题是要指定另一个区域来取共同的交集，当然如果想显示路径构造的区域，Region clip参数可以传一个比Path范围大的多的区域，取完交集之后，当然是Path参数所对应的区域喽。

对于特定的区域，我们都可以使用多个矩形来表示其大致形状。事实上，如果矩形足够小，一定数量的矩形就能够精确表示区域的形状，也就是说，一定数量的矩形所合成的形状，也可以代表区域的形状。RegionIterator类，实现了获取组成区域的矩形集的功能，其实RegionIterator类非常简单，总共就两个函数，一个构造函数和一个获取下一个矩形的函数；

* RegionIterator(Region region) //根据区域构建对应的矩形集
* boolean next(Rect r) //获取下一个矩形，结果保存在参数Rect r中

由于在Canvas中没有直接绘制Region的函数，我们想要绘制一个区域，就只能通过利用RegionIterator构造矩形集来逼近的显示区域。用法如下：

```java
RegionIterator iter = new RegionIterator(region);
Rect r = new Rect();
while (iter.next(r)) {
    canvas.drawRect(r, paint);
}  // 可以将画笔Style从FILL改为STROKE，重新绘制椭圆路径，会看得更清楚
```

区域的合并、交叉等操作：无论是区域还是矩形，都会涉及到与另一个区域的一些操作，比如取交集、取并集等，涉及到的函数有：

* public final boolean union(Rect r)
* public boolean op(Rect r, Op op) {
* public boolean op(int left, int top, int right, int bottom, Op op)
* public boolean op(Region region, Op op)
* public boolean op(Rect rect, Region region, Op op)

除了Union(Rect r)是指定合并操作以外，其它四个op（）构造函数，都是指定与另一个区域的操作。其中最重要的指定Op的参数，Op的参数有下面四个：

```java
// 假设用region1  去组合region2
public enum Op {
    DIFFERENCE(0), //最终区域为region1 与 region2不同的区域
    INTERSECT(1), // 最终区域为region1 与 region2相交的区域
    UNION(2),      //最终区域为region1 与 region2组合一起的区域
    XOR(3),        //最终区域为region1 与 region2相交之外的区域
    REVERSE_DIFFERENCE(4), //最终区域为region2 与 region1不同的区域
    REPLACE(5); //最终区域为为region2的区域
}
```

Region类除了上面的一些重要的方法以外，还有一些比较容易理解的方法

```java
/**几个判断方法*/
public native boolean isEmpty();//判断该区域是否为空
public native boolean isRect(); //是否是一个矩阵
public native boolean isComplex();//是否是多个矩阵组合
/**一系列的getBound方法，返回一个Region的边界*/
public Rect getBounds()
public boolean getBounds(Rect r)
public Path getBoundaryPath()
public boolean getBoundaryPath(Path path)
/**一系列的判断是否包含某点 和是否相交*/
public native boolean contains(int x, int y);//是否包含某点
public boolean quickContains(Rect r)   //是否包含某矩形
public native boolean quickContains(int left, int top, int right, int bottom) //是否没有包含某矩阵形
public boolean quickReject(Rect r) //是否没和该矩形相交
public native boolean quickReject(int left, int top, int right, int bottom); //是否没和该矩形相交
public native boolean quickReject(Region rgn);  //是否没和该矩形相交
/**几个平移变换的方法*/
public void translate(int dx, int dy)
public native void translate(int dx, int dy, Region dst);
public void scale(float scale) //hide
public native void scale(float scale, Region dst);//hide
```

### FontMetrics与FontMetricsInt

除了基线，系统在绘制Text时，还是有其它线的

* ascent: 系统建议的，绘制单个字符时，字符应当的最高高度所在线
* descent:系统建议的，绘制单个字符时，字符应当的最低高度所在线
* top: 可绘制的最高高度所在线
* bottom: 可绘制的最低高度所在线

用过视频处理工具的同学（比如premiere,AE,绘声绘影等）,应该都会知道，在制作视频时，视频显示位置都会有一个安全区域框。这个安全框就是系统推荐给我们的显示区域，虽然说我们可以讲电视屏幕是每个区域都是可以显示图像的，但由于制式的不同，每个国家的屏幕大小并不一定我们这里的屏幕大小一致，当遇到不一致时，就会裁剪。但系统给我们推荐的显示区域是无论哪种制式都是可以完整显示出来的，所以我们在制作视频时，尽量要把要显示的图像放在所推荐的显示区域内。同样，在这里，我们在绘制文字时，ascent是推荐的绘制文字的最高高度，就表示在绘制文字时，尽力要在这个最高高度以下绘制文字。descent是推荐的绘制文字的最底高度线，同样表示是在绘制文字时尽量在这个descent线以上来绘制文字。而top线则指该文字可以绘制的最高高度线，bottom则是表示该文字可以绘制的最低高度线。ascent,descent是系统建议上的绘制高度，而top,bottom则是物理上屏幕最高，最低可以画的高度值。他们的差别与我们上面说的视频处理的安全框和屏幕的道理是一样的。

上面我们讲了，系统在画文字时的五条线，baseline、ascent、descent、top、bottom我们知道baseline的位置是我们在构造drawText()时的参数y来决定的，那ascent,descent,top,bottom这些线的位置要怎么计算出来呢？Android给我们提供了一个类：FontMetrics，它里面有四个成员变量：

* FontMetrics::ascent; = ascent线的y坐标 - baseline线的y坐标；
* FontMetrics::descent; = descent线的y坐标 - baseline线的y坐标；
* FontMetrics::top; = top线的y坐标 - baseline线的y坐标；
* FontMetrics::bottom; = bottom线的y坐标 - baseline线的y坐标；

所以

* ascent线Y坐标 = baseline线的y坐标 + fontMetric.ascent；
* descent线Y坐标 = baseline线的y坐标 + fontMetric.descent；
* top线Y坐标 = baseline线的y坐标 + fontMetric.top；
* bottom线Y坐标 = baseline线的y坐标 + fontMetric.bottom；

获取FontMetrics对象是根据paint对象来获取的：

```java
Paint paint = new Paint();
Paint.FontMetrics fm = paint.getFontMetrics();
Paint.FontMetricsInt fmInt = paint.getFontMetricsInt();
```

字符串所占高度很容易得到，直接用bottom线所在位置的Y坐标减去top线所在位置的Y坐标就是字符串所占的

* 高度：fm.bottom - fm.top
* 宽度：paint.measureText(String text)
* 最小矩形：void getTextBounds(String text, int start, int end, Rect bounds) 没有给getTextBounds（）传递基线位置。那它就是以（0，0）为基线来得到这个最小矩形的！

### 贝塞尔曲线与手势轨迹、水波纹效果

在Path中有四个函数与贝赛尔曲线有关：

* 二阶贝赛尔
    * public void quadTo(float x1, float y1, float x2, float y2)
    * public void rQuadTo(float dx1, float dy1, float dx2, float dy2)  传入相对上一个终点X/Y坐标
* 三阶贝赛尔
    * public void cubicTo(float x1, float y1, float x2, float y2,float x3, float y3)
    * public void rCubicTo(float x1, float y1, float x2, float y2,float x3, float y3)  传入相对上一个终点X/Y坐标

https://blog.csdn.net/harvic880925/article/details/50995587

* 一阶贝塞尔：B(t) = (1 - t) * p0 + t * p1
    * P0为起点、P1为终点，t表示当前时间，B(t)表示公式的结果值。注意，曲线的意义就是公式结果B(t)随时间的变化，其取值所形成的轨迹。在动画中，黑色点表示在当前时间t下公式B(t)的取值。而红色的那条线就不在各个时间点下不同取值的B(t)所形成的轨迹。总而言之：对于一阶贝赛尔曲线，大家可以理解为在起始点和终点形成的这条直线上，匀速移动的点。
* 二阶贝塞尔：B(t) = (1 - t)<sup>2</sup> * p0 + 2t(1 - t) * P1 + t<sup>2</sup> * p2 = （1 - t) * ((1 - t) * p0 + t * p1) + t * ((1 - t) * p1 + t * p2) = (1 - t) * Q0 + t * Q1
    * 在这里P0是起始点,P2是终点，P1是控制点
    * 首先，P0点和P1点形成了一条贝赛尔曲线，还记得我们上面对一阶贝赛尔曲线的总结么：就是一个点在这条直线上做匀速运动；所以P0-P1这条直线上的移动的点就是Q0；
    * 同样，P1,P2形成了一条一阶贝赛尔曲线，在这条一阶贝赛尔曲线上，它们的随时间移动的点是Q1
    * 最后，动态点Q0和Q1又形成了一条一阶贝赛尔曲线，在它们这条一阶贝赛尔曲线动态移动的点是B。而B的移动轨迹就是这个二阶贝赛尔曲线的最终形态。从上面的讲解大家也可以知道，之所以叫它二阶贝赛尔曲线是因为，B的移动轨迹是建立在两个一阶贝赛尔曲线的中间点Q0,Q1的基础上的。
* 三阶贝塞尔：B(t) = (1 - t)<sup>3</sup> * p0 + 3t(1 - t)<sup>2</sup> * P1 + t<sup>2</sup> * 3(1 - t) * p2 + t<sup>3</sup> * p3
    * 同样，P0是起始点，P3是终点；P1是第一个控制点，P2是第二个控制点；
    * 首先，这里有三条一阶贝赛尔曲线，分别是P0-P1,P1-P2,P2-P3;
    * 他们随时间变化的点分别为Q0，Q1，Q2
    * 然后是由Q0，Q1，Q2这三个点，再次连接，形成了两条一阶贝赛尔曲线，分别是Q0—Q1,Q1—Q2;他们随时间变化的点为R0,R1
    * 同样，R0和R1同样可以连接形成一条一阶贝赛尔曲线，在R0—R1这条贝赛尔曲线上随时间移动的点是B
    * 而B的移动轨迹就是这个三阶贝赛尔曲线的最终形状。
    * 从上面的解析大家可以看出，所谓几阶贝赛尔曲线，全部是由一条条一阶贝赛尔曲线搭起来的；

整条线的起始点是通过Path.moveTo(x,y)来指定的，而如果我们连续调用quadTo()，前一个quadTo()的终点，就是下一个quadTo()函数的起点；如果初始没有调用Path.moveTo(x,y)来指定起始点，则默认以控件左上角(0,0)为起始点；

**【Demo: 手指轨迹】**

```java
open class PaintView2 : View {
    constructor(context: Context) : super(context)
    constructor(context: Context, attrs: AttributeSet) : super(context, attrs)
    constructor(context: Context, attrs: AttributeSet, defStyleAttr: Int) : super(context, attrs, defStyleAttr)
    protected open val mPath = Path()
    protected open val mPaint = Paint()
    protected open var mPreX = 0f
    protected open var mPreY = 0f
    init {
        mPaint.style = Paint.Style.STROKE
        mPaint.color = Color.GREEN
        mPaint.strokeWidth = 2f
    }
    @SuppressLint("ClickableViewAccessibility")
    override fun onTouchEvent(event: MotionEvent?): Boolean {
        when (event?.action) {
            MotionEvent.ACTION_DOWN -> {
                mPreX = event.x
                mPreY = event.y
                mPath.lineTo(mPreX, mPreY)
                return true
            }
            MotionEvent.ACTION_MOVE -> {
                val endX = (mPreX + event.x) / 2
                val endY = (mPreY + event.y) / 2
                mPath.quadTo(mPreX, mPreY, endX, endY)
                mPreX = event.x
                mPreY = event.y
                postInvalidate()
            }
        }
        return super.onTouchEvent(event)
    }
    override fun onDraw(canvas: Canvas?) {
        super.onDraw(canvas)
        canvas?.drawPath(mPath, mPaint)
    }
    open fun reset() {
        mPath.reset()
        invalidate()
    }
}
```

**【Demo: 波浪效果】**

```java
open class PaintView3 : View {
    constructor(context: Context) : super(context)
    constructor(context: Context, attrs: AttributeSet) : super(context, attrs)
    constructor(context: Context, attrs: AttributeSet, defStyleAttr: Int) : super(context, attrs, defStyleAttr)
    protected open val mPath = Path()
    protected open val mPaint = Paint()
    protected open var mOriginX = 0f
    protected open var mOriginY = 0f
    protected open var mItemWaveLength = 400f
    protected open var dx = 0
    open fun setOrigin(x: Float, y: Float) {
        mOriginX = x
        mOriginY = y
    }
    init {
        mPaint.style = Paint.Style.STROKE
        mPaint.color = Color.GREEN
    }
    override fun onDraw(canvas: Canvas?) {
        super.onDraw(canvas)
        canvas ?: return
        mPath.reset()
        val halfWaveLen = mItemWaveLength / 2
        mPath.moveTo(-mItemWaveLength + dx, mOriginY)
        var i = -mItemWaveLength
        while (i <= width + mItemWaveLength) {
            mPath.rQuadTo(halfWaveLen / 2, -50f, halfWaveLen, 0f)
            mPath.rQuadTo(halfWaveLen / 2, 50f, halfWaveLen, 0f)
            i += mItemWaveLength
        }
        mPath.lineTo(width.toFloat(), height.toFloat())
        mPath.lineTo(0f, height.toFloat())
        mPath.close()
        canvas.drawPath(mPath, mPaint)
    }
    open fun startAnim() = ValueAnimator.ofInt(0, mItemWaveLength.toInt()).apply {
        duration = 2000
        duration = 2000
        repeatCount = ValueAnimator.INFINITE
        interpolator = LinearInterpolator()
        addUpdateListener(object : ValueAnimator.AnimatorUpdateListener {
            override fun onAnimationUpdate(animation: ValueAnimator) {
                dx = animation.animatedValue as Int
                postInvalidate()
            }
        })
        start()
    }
}
```

### ColorMatrix与滤镜效果

https://blog.csdn.net/harvic880925/article/details/51187277

m行n列数表成为m\*n的矩阵。m\*p与p\*n的矩阵可以相乘，意思就是将第一个矩阵A的第一行，与第二个矩阵B的第一列的数字分别相乘，得到的结果相加，最终的值做为结果矩阵的第(1,1)位置的值（即第一行，第一列）。A矩阵的列数必须与B矩阵的行数相同，才能相乘！因为我们需要把A中的一行中的各个数字与B矩阵中的一列中的各个数字分别相乘，所以A的列数与B的行数必须相同才行！矩阵A乘以矩阵B和矩阵B乘以矩阵A的结果必然是不一样的。

对于色彩的存储，Bitmap类使用一个32位的数值来保存。红、绿、蓝及透明度各占8位，每一个色彩分量的取值范围是0-255。透明度为0表示完全透明，为255时，色彩完全可见。由于一个色彩信息包含R、G、B、Alpha信息，所以，我们必然要使用一个4阶色彩变换矩阵(4\*4)来修改色彩的每一个分量值：[00 = Red, 11 = Green, 22 = Blue, 33 = Alpha, others = 0]。注意：对于色彩变换矩阵，这里的色彩顺序是R、G、B、A而不是A、R、G、B！！！如果想将色彩（0，255，0，255）更改为半透明时，可以使用下面的的矩阵运算来表示：[00 = 11 = 22 = 1, 33 = 0.5, others = 0] \* [00 = r, 10 = g, 20 = b, 30 = a] = [00 = r, 10 = g, 20 = b, 30 = 0.5a]

上面使用四阶矩阵完全可以改变图片的RGBA值了，但考虑一种情况，如果我们只想在原有的R色上增加一些分量呢？这时，我们就得再多加一阶来表示平移变换。所以，一个既包含线性变换，又包含平移变换的组合变换，称为仿射变换。使用四阶的色彩变换矩阵来修改色彩，只能够对色彩的每一个分量值进行乘（除）运算，如果要对这些分量值进行加减法的运算（平移变换），只能通过五阶矩阵来完成。考虑下面这个变换：1、红色分量值更改为原来的2倍；2、绿色分量增加100。需要：[00 = 2, 11 = 1, 14 = 100, 22 = 1, 33 = 1, others = 0]{4\*5} \* [00 = r, 10 = g, 20 = b, 30 = a, 40 = 1]{5\*1} = [00 = 2r, 10 = g + 100, 20 = b, 30 = a]{4\*1}

Android中的色彩矩阵是用ColorMatrics类来表示的。使用ColorMatrix的方法如下
```java
// 生成色彩矩阵
ColorMatrix colorMatrix = new ColorMatrix(new float[] {
    1, 0, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 0, 1, 0, 0,
    0, 0, 0, 0.5, 0,
});
mPaint.setColorFilter(new ColorMatrixColorFilter(colorMatrix));
```

色彩矩阵最后一列用于**色彩平移**(增加指定颜色饱和度、色彩反转/反相功能)。单纯在最后一列将0变为其他数字则是增加指定颜色饱和度，色彩反转就是求出每个色彩的补值来做为目标图像的对应颜色值：
```java
-1,0,0,0,255,
0,-1,0,0,255,
0,0,-1,0,255,
0,0,0,1,0
```

**色彩的缩放运算**其实就是色彩的乘法运算。在色彩矩阵对角线上的分别代表R、G、B、A的几个值，将其分别乘以指定的值。这就是所谓的缩放变换。缩放变换的特殊应用（通道输出）

**色彩的旋转运算**RGB色是如何旋转的呢，首先用R、G、B三色建立立体坐标系，所以，我们可以把一个色彩值看成三维空间里的一个点，色彩值的三个分量可以看成该点的坐标（三维坐标）。我们先不考虑，在三个维度综合情况下是怎么旋转的，我们先看看，在某个轴做为Z轴，在另两个轴形成的平面上旋转的情况，下图分析了，在将蓝色轴做为Z轴，仅在红—绿平面上旋转a度的情况。在图中，我们可以看到，在旋转后，原R在R轴的分量变为:原R\*cosa，但原G分量在旋转后，在R轴上也有了分量，但分量落在了负轴上，所以我们要减去这部分分量，所以最终的结果是最终的R=原R*cosa-原G*sina;下面就看下关于几种旋转计算及结果矩阵，（注意：这几个图只标记了原X轴色彩分量的旋转，没有把Y轴色彩分量的旋转标记出来）

* 绕蓝色轴旋转a度对应的色彩变换矩阵是
* 绕红色轴旋转a度对应的色彩变换矩阵是
* 绕绿色轴旋转a度对应的色彩变换矩阵是

```java
new float[] {
    cos(a),  sin(a), 0, 0, 0,
    -sin(a), cos(a), 0, 0, 0,
    0,       0,      1, 0, 0,
    0,       0,      0, 1, 0,
};
new float[] {
    1, 0,       0,      0, 0,
    0, cos(a),  sin(a), 0, 0,
    0, -sin(a), cos(a), 0, 0,
    0, 0,       0,      1, 0,
};
new float[] {
    cos(a), 0, -sin(a), 0, 0,
    0,      1, 0,       0, 0,
    sin(a), 0, cos(a),  0, 0,
    0,      0, 0,       1, 0,
};
```
当围绕红色轴进行色彩旋转时，由于当前红色轴的色彩是不变的，而仅利用三角函数来动态的变更绿色和蓝色的颜色值。这种改变就叫做色相调节！当围绕红色轴旋转时，是对图片就行红色色相的调节；同理，当围绕蓝色颜色轴旋转时，就是对图片就行蓝色色相调节；当然，当围绕绿色轴旋转时，就是对图片进行绿色色相的调节.

**色彩的投射运算**

* newR = a00 * R + a01 * G + a02 * B + a03 * A + a04
* newG = a10 * R + a11 * G + a12 * B + a13 * A + a14
* newB = a20 * R + a21 * G + a22 * B + a23 * A + a24
* newA = a30 * R + a31 * G + a32 * B + a33 * A + a34
* 其中 a01 * G + a02 * B + a03 * A / a10 * R + a12 * B + a13 * A / a20 * R + a21 * G + a23 * A / a30 * R + a31 * G + a32 * B 即是投影。利用其它色彩分量的倍数来更改自己色彩分量的值，这种运算就叫投射运算。色彩投射的一个最简单应用就是变为黑白图片：

    ```java
    new float[] {
        0.213f, 0.715f, 0.072f, 0, 0,
        0.213f, 0.715f, 0.072f, 0, 0,
        0.213f, 0.715f, 0.072f, 0, 0,
        0,      0,      0,      1, 0,
    };
    // 首先了解一下去色原理：只要把RGB三通道的色彩信息设置成一样；即：R＝G＝B，那么图像就变成了灰色，并且，为了保证图像亮度不变，同一个通道中的R+G+B=1:如：0.213+0.715+0.072＝1；
    // 三个数字的由来：0.213, 0.715, 0.072；
    // 按理说应该把RGB平分，都是0.3333333。三个数字应该是根据色彩光波频率及色彩心理学计算出来的（本人是这么认为，当然也查询了一些资料，目前尚未找到准确答案）。在作用于人眼的光线中，彩色光要明显强于无色光。对一个图像按RGB平分理论给图像去色的话，人眼就会明显感觉到图像变暗了（当然可能有心理上的原因，也有光波的科学依据）另外，在彩色图像中能识别的一下细节也可能会丢失。所以google最终给我们的颜色值就是上面的比例：0.213, 0.715, 0.072；所以，在给图像去色时我们保留了大量的G通道信息，使得图像不至于变暗或者绿色信息不至于丢失（我猜想）。
    ```

    投射运算的另一个应用是：色彩反色。当我们利用色彩矩阵将两个颜色反转，这种操作就叫做色彩反色。比如，下面的的将红色和绿色反色（红绿反色）

    ```java
    new float[] {
        0,1,0,0,0,
        1,0,0,0,0,
        0,0,1,0,0,
        0,0,0,1,0
    };
    ```

    投射运算的另一个应用是照片变旧

    ```java
    new float[] {
        1/2f,1/2f,1/2f,0,0,
        1/3f,1/3f,1/3f,0,0,
        1/4f,1/4f,1/4f,0,0,
        0,0,0,1,0
    };
    ```

上面讲了利用色彩矩阵的来做一些运算，但这些都是需要特定的色彩设计基础的，Android中ColorMatrix自带了一些函数来帮我们完成一些调整饱和度、色彩旋转等操作的函数，我们就一一来看看

* 构造
    * ColorMatrix()
    * ColorMatrix(float[] src)
    * ColorMatrix(ColorMatrix src)
* 设置、重置函数
    * public void set(ColorMatrix src)
    * public void set(float[] src)
    * public void reset()
* 设置饱和度 public void setSaturation(float sat) 参数float sat：表示把当前色彩饱和度放大的倍数。取值为0表示完全无色彩，即灰度图像（黑白图像）；取值为1时，表示色彩不变动；当取值大于1时，显示色彩过度饱和。
* 色彩缩放 public void setScale(float rScale, float gScale, float bScale,float aScale)
* 色彩旋转 public void setRotate(int axis, float degrees)； 将旋转围绕某一个颜色轴旋转
    * axis=0 围绕红色轴旋转
    * axis=1 围绕绿色轴旋转
    * axis=2 围绕蓝色轴旋转
* ColorMatrics相乘
    * public void setConcat(ColorMatrix matA, ColorMatrix matB) 乘法规则为matA*matB，然后将结果做为当前ColorMatrix的值
    * public void preConcat(ColorMatrix prematrix) 假如当前矩阵的A，而preConcat的意思就是将当前的矩阵A乘以prematrix
    * public void postConcat(ColorMatrix postmatrix) postmatrix*当前矩阵A
* getArray()获取当前矩阵数组

### ColorFilter

上篇给大家讲了在setColorFilter中使用ColorMatrix的过程，其实setColorFilter除了使用ColorMatrix还有其它的用法，这节我们就具体来看看setColorFilter的用法。setColorFilter的完整声明为：``public ColorFilter setColorFilter(ColorFilter filter)``。

* ColorMatrixColorFilter，其实就是上面的ColorMatrix
* LightingColorFilter，ColorMatrix纵然很强大，但太！过！难！用，所以Android为我们提供了一个简单过滤颜色和增强色彩的函数，就是LightingColorFilter。这个叫做光照颜色过滤器，可以简单的完成色彩过滤和色彩增强功能。整个类就只有一个函数，还是构造函数：``public LightingColorFilter(int mul, int add)``。这里有两个参数,mul是乘法multiply的缩写，add是加法的意思。mul和add取值都是0xRRGGBB,分别对应R、G、B颜色，注意哦，这里是没有透明度A的，透明度在这里是不起作用的，LightingColorFilter只针对RGB色值起作用。
    * 结果R值 = (r*mul.R+add.R)%255;
    * 结果G值 = (g*mul.G+add.G)%255;
    * 结果B值 = (b*mul.B+add.B)%255;
    * 利用mul进行颜色值放大并不好控制，所以更多的是用来过滤颜色，即当对应的颜色值取0时，就不会将对应的颜色显示出来，而把要显示出来的颜色对应的mul值设置为ff,即255;从公式中可以知道设置为255不会对原始的这个颜色分量产生任何影响。所以这样就可以把想要的颜色给显示出来，把不想要的颜色给过滤掉。比如，**【Demo】**下面这个蓝色按钮可以在点击时让它变成绿色，这要怎么做呢？直接使用LightingColorFilter把其它颜色都过滤掉，只显示绿色就可以了 new LightingColorFilter(0x00ff00,0x000000)。好像这样会有点问题，因为普通我们在点击按钮的时候，不可能会直接把它改变成另一个颜色，而只是增加它的颜色深浅值。比如下面我们增强颜色的蓝色值，将整个图片变得更蓝 new LightingColorFilter(0xffffff,0x0000f0)。
* PorterDuffColorFilter，图形混合滤镜。``public PorterDuffColorFilter(int srcColor, PorterDuff.Mode mode)``。int srcColor：0xAARRGGBB类型的颜色值。PorterDuff.Mode mode：表示混合模式，枚举值有18个，表示各种图形混合模式,有：
    * Mode.CLEAR
    * Mode.SRC
    * Mode.DST
    * Mode.SRC_OVER
    * Mode.DST_OVER
    * Mode.SRC_IN
    * Mode.DST_IN
    * Mode.SRC_OUT
    * Mode.DST_OUT
    * Mode.SRC_ATOP
    * Mode.DST_ATOP
    * Mode.XOR
    * Mode.DARKEN
    * Mode.LIGHTEN
    * Mode.MULTIPLY
    * Mode.SCREEN
    * Mode.OVERLAY
    * Mode.ADD
    * 在这里跟我们相关的只有六个：Mode.ADD(饱和度相加)，Mode.DARKEN（变暗），Mode.LIGHTEN（变亮），Mode.MULTIPLY（正片叠底），Mode.OVERLAY（叠加），Mode.SCREEN（滤色）。当然还有其他三组。
    * 第一组：清空模式 Mode.CLEAR和Mode.XOR他们在这里的效果是完成一致的，就是把图像清空，所以一旦应用他们两个中的任何一个，所得到的结果图像就是一个空图
    * 第二组：目标图像模式 在Mode模式中，有一组DST相关的模式，DST所代表的意义就是被应用模式的图像，即我们这里的小狗图片。这些模式有：Mode.DST、Mode.DST_IN、Mode.DST_OUT、Mode.DST_OVER、Mode.DST_ATOP
    * 第三组：源图模式 在Mode模式中，有一组SRC相关的模式,SRC表示的颜色值所代表的图像，这些模式有：Mode.SRC、Mode.SRC_IN、Mode.SRC_OUT、Mode.SRC_OVER、Mode.SRC_ATOP
* BlendModeColorFilter，public BlendModeColorFilter(@ColorInt int color, @NonNull BlendMode mode)

### setXfermode

* PorterDuffXfermode -- PorterDuff.Mode
    * CLEAR (\alpha_{out} = 0) (C_{out} = 0)
    * SRC (\alpha_{out} = \alpha_{src}) (C_{out} = C_{src})
    * DST (\alpha_{out} = \alpha_{dst}) (C_{out} = C_{dst})
    * SRC_OVER
        * (\alpha_{out} = \alpha_{src} + (1 - \alpha_{src}) * \alpha_{dst})
        * (C_{out} = C_{src} + (1 - \alpha_{src}) * C_{dst})
    * DST_OVER
        * (\alpha_{out} = \alpha_{dst} + (1 - \alpha_{dst}) * \alpha_{src})
        * (C_{out} = C_{dst} + (1 - \alpha_{dst}) * C_{src})
    * SRC_IN
        * (\alpha_{out} = \alpha_{src} * \alpha_{dst})
        * (C_{out} = C_{src} * \alpha_{dst})
    * DST_IN
        * (\alpha_{out} = \alpha_{src} * \alpha_{dst})
        * (C_{out} = C_{dst} * \alpha_{src})
    * SRC_OUT
        * (\alpha_{out} = (1 - \alpha_{dst}) * \alpha_{src})
        * (C_{out} = (1 - \alpha_{dst}) * C_{src})
    * DST_OUT
        * (\alpha_{out} = (1 - \alpha_{src}) * \alpha_{dst})
        * (C_{out} = (1 - \alpha_{src}) * C_{dst})
    * SRC_ATOP
        * (\alpha_{out} = \alpha_{dst})
        * (C_{out} = \alpha_{dst} * C_{src} + (1 - \alpha_{src}) * C_{dst})
    * DST_ATOP
        * (\alpha_{out} = \alpha_{src})
        * (C_{out} = \alpha_{src} * C_{dst} + (1 - \alpha_{dst}) * C_{src})
    * XOR
        * (\alpha_{out} = (1 - \alpha_{dst}) * \alpha_{src} + (1 - \alpha_{src}) * \alpha_{dst})
        * (C_{out} = (1 - \alpha_{dst}) * C_{src} + (1 - \alpha_{src}) * C_{dst})
    * DARKEN
        * (\alpha_{out} = \alpha_{src} + \alpha_{dst} - \alpha_{src} * \alpha_{dst})
        * (C_{out} = (1 - \alpha_{dst}) * C_{src} + (1 - \alpha_{src}) * C_{dst} + min(C_{src}, C_{dst}))
    * LIGHTEN
        * (\alpha_{out} = \alpha_{src} + \alpha_{dst} - \alpha_{src} * \alpha_{dst})
        * (C_{out} = (1 - \alpha_{dst}) * C_{src} + (1 - \alpha_{src}) * C_{dst} + max(C_{src}, C_{dst}))
    * MULTIPLY
        * (\alpha_{out} = \alpha_{src} * \alpha_{dst})
        * (C_{out} = C_{src} * C_{dst})
    * SCREEN
        * (\alpha_{out} = \alpha_{src} + \alpha_{dst} - \alpha_{src} * \alpha_{dst})
        * (C_{out} = C_{src} + C_{dst} - C_{src} * C_{dst})
    * ADD
        * (\alpha_{out} = max(0, min(\alpha_{src} + \alpha_{dst}, 1)))
        * (C_{out} = max(0, min(C_{src} + C_{dst}, 1)))
    * OVERLAY
        * (\alpha_{out} = \alpha_{src} + \alpha_{dst} - \alpha_{src} * \alpha_{dst})
        * (\begin{equation} C_{out} = \begin{cases} 2 * C_{src} * C_{dst} & 2 * C_{dst} \lt \alpha_{dst} \\ \alpha_{src} * \alpha_{dst} - 2 (\alpha_{dst} - C_{src}) (\alpha_{src} - C_{dst}) & otherwise \end{cases} \end{equation})

## build-timer

## 进程保活

1. [重拾android路(十六) 进程保活](https://www.dazhuanlan.com/2019/11/08/5dc4e004d2b8c/)
2. [DaemonLibrary](https://github.com/ShihooWang/DaemonLibrary)
3. [Android进程保活](https://www.zybuluo.com/946898963/note/1158768)
4.

## AndroidShell

public static CommandResult run(String shell, String... commands)
public static CommandResult run(String shell, @NonNull String[] commands, @Nullable String[] env)