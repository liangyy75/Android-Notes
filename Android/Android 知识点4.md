<style>
img {
    margin: 0 auto;
    display: block;
}
</style>

- [Android App Bundle](#android-app-bundle)
- [Android MultiDex](#android-multidex)
- [Android 声明式UI](#android-%e5%a3%b0%e6%98%8e%e5%bc%8fui)
- [Android debugger](#android-debugger)
- [Android 优化](#android-%e4%bc%98%e5%8c%96)
- [Android i18n](#android-i18n)
- [Android 小知识](#android-%e5%b0%8f%e7%9f%a5%e8%af%86)
- [Android java.net](#android-javanet)

### Android App Bundle

### Android MultiDex

### Android 声明式UI

### Android debugger

1. links
    1. [Android Studio 掌握这些调试技巧，Debug能力不能再高啦](https://www.jianshu.com/p/985f788fae2c) finished
    2. [你所不知道的Android Studio调试技巧](https://www.jianshu.com/p/011eb88f4e0d)
    3. [Android Studio Debug调试详解](https://www.jianshu.com/p/9fbf316582e3)

### Android 优化

1. links
    1. [Facebook安卓Feed流的内存优化实践](https://blog.csdn.net/lpjishu/article/details/73478676)

### Android i18n

1. links
    1. [Android获取语言及地区总结](https://blog.csdn.net/dreamsever/article/details/80973300)
2. language
    1. 获取语言和地区
        1. 获取系统语言
            ```java
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) { // Android 7.0以后
                LocaleListCompat listCompat=ConfigurationCompat.getLocales(Resources.getSystem().getConfiguration());
                for (int i = 0; i < listCompat.size(); i++) {
                    Log.d("LOCALE_GET", i + " ------1> " + listCompat.get(i).getLanguage() + "-" + listCompat.get(i).getCountry());
                }
            } else { // Android 7.0以前
                Locale locale = Locale.getDefault();
                Log.d("LOCALE_GET", "------------" + locale.getLanguage() + "-" + locale.getCountry());
            }
            ```
        2. 获取当前资源配置的语言
            ```java
            Locale locale；
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                locale = getResources().getConfiguration().getLocales().get(0);
            } else {
                locale = getResources().getConfiguration().locale;
            }
            Log.d("LOCALE_GET", "------------" + locale.getLanguage() + "-" + locale.getCountry());
            ```
        3. ``String lang = locale.getLanguage() + “-” + locale.getCountry();``
3. 

### Android 小知识

1. 冷启动和热启动: https://www.jianshu.com/p/1d2e55f1d393

### Android java.net

1. error
    1. BindException: 发生在将socket与本地address/port绑定的时候，一般是由于该port正在使用中，或者由于该地址无法绑定。
    2. ConnectException: 发生在将socket与远程address/port绑定的时候，一般是因为连接被远程拒绝了(比如远程根本就没有对那个接口进行监听)。
    3. HttpRetryException: http请求需要自动重连的时候由于处于streaming模式而无法进行。
    4. MalformedURLException: 网络地址格式错误。
    5. NoRouteToHostException: 发生在将socket与远程address/port绑定的时候，一般是因为两者不在同一网域内，或者由于防火墙。
    6. PortUnreachableException: 在连接的数据报上已收到ICMP端口不可达消息。
    7. ProtocolException
    8. SocketException: 创建或访问socket时。
    9. SocketTimeoutException: 连接超时。
    10. UnknownHostException
    11. UnknownServiceException: 表明发生了未知的服务异常。比如URL连接返回的MIME类型没有任何意义，或者应用程序正尝试写入只读URL连接。
    12. URISyntaxException
2. cache
    1. interface CacheRequest
        1. OutputStream getBody()
        2. void abort()
    2. interface CacheResponse
        1. ``Map<String, List<String>> getHeaders()``
        2. InputStream getBody()
    3. interface ResponseCache
        1. synchronized static ResponseCache **getDefault**()
        2. synchronized static void **setDefault**(ResponseCache responseCache)
        3. ``abstract CacheResponse get(URI uri, String rqstMethod, Map<String, List<String>> rqstHeaders)``
        4. abstract CacheRequest put(URI uri, URLConnection conn)
    4. abstract class SecureCacheResponse : ResponseCache
        1. abstract String getCipherSuite()
        2. ``abstract List<Certificate> getLocalCertificateChain()``
        3. ``abstract List<Certificate> getServerCertificateChain()``
        4. ``abstract Principal getPeerPrincipal()``
        5. ``abstract Principal getLocalPrincipal()``
3. 内容
    1. interface ContentHandler
        1. Object getContent(URLConnection urlc)
        2. Object getContent(URLConnection urlc, Class[] classes)
    2. interface ContentHandlerFactory
        1. ContentHandler createContentHandler(String mimetype)
4. interface/address
    1. NetworkInterface: 表示本地网关(网卡？反正就是像Windows中一般以eth开头的那些)，由名字和一系列网关地址组成
        1. 属性
            1. String getName()
            2. ``Enumeration<InetAddress> getInetAddresses()``
            3. ``java.util.List<InterfaceAddress> getInterfaceAddresses()``
            4. ``Enumeration<NetworkInterface> getSubInterfaces()``
            5. NetworkInterface getParent()
            6. int getIndex()
            7. String getDisplayName()
            8. byte[] getHardwareAddress()
            9. int getMTU()
            10. boolean isVirtual()
        2. 静态构造
            1. static NetworkInterface getByName(String name)
            2. static NetworkInterface getByIndex(int index)
            3. static NetworkInterface getByInetAddress(InetAddress addr)
            4. ``static Enumeration<NetworkInterface> getNetworkInterfaces()``
            5. static NetworkInterface[] getAll()
        3. 状态
            1. boolean isUp()
            2. boolean isLoopback()
            3. boolean isPointToPoint()
            4. boolean supportsMulticast()
    2. InterfaceAddress: 表示本地网关的ip地址
        1. InetAddress getAddress()
        2. InetAddress getBroadcast()
        3. short getNetworkPrefixLength()
    3. InetAddress: 表示ip地址(32位或者64位的数字组成的地址)
        1. 静态构造
            1. InetAddress getByAddress(byte[])
            2. InetAddress getByAddress(String, byte[])
            3. InetAddress getAllByName(String)
            4. InetAddress getByName(String)
            5. InetAddress getLocalHost()
            6. InetAddress getLoopbackAddress()
            7. InetAddress getByNameOnNet(String host, int netId)
            8. InetAddress[] getAllByNameOnNet(String host, int netId)
        2. 工具方法
            1. static boolean isNumeric(String address)
            2. static InetAddress parseNumericAddress(String numericAddress)
            3. static void clearDnsCache()
        3. 各种属性
            1. boolean isMulticastAddress()
            2. boolean isAnyLocalAddress()
            3. boolean isLoopbackAddress()
            4. boolean isLinkLocalAddress()
            5. boolean isSiteLocalAddress()
            6. boolean isMCGlobal()
            7. boolean isMCNodeLocal()
            8.  boolean isMCLinkLocal()
            9.  boolean isMCSiteLocal()
            10. boolean isMCOrgLocal()
            11. boolean isReachable(int timeout)
            12. boolean isReachable(NetworkInterface netif, int ttl, int timeout)
            13. String getHostName()
            14. String getCanonicalHostName()
            15. byte[] getAddress()
            16. String getHostAddress()
    4. Inet4Address : InetAddress
        1. static final InetAddress ANY(0.0.0.0), ALL(255.255.255.255), LOOPBACK(127.0.0.1)
    5. Inet6Address : InetAddress
        1. static final InetAddress ANY, LOOPBACK
        2. 构造
            1. static Inet6Address getByAddress(String host, byte[] addr, NetworkInterface nif)
            2. static Inet6Address getByAddress(String host, byte[] addr, int scope_id)
        3. 属性
            1. int getScopeId()
            2. NetworkInterface getScopedInterface()
    6. abstract SocketAddress
    7. InetSocketAddress : SocketAddress
        1. 构造
            1. InetSocketAddress()
            2. InetSocketAddress(int port)
            3. InetSocketAddress(InetAddress addr, int port)
            4. InetSocketAddress(String hostname, int port)
            5. static InetSocketAddress createUnresolved(String host, int port)
        2. 属性
            1. int getPort()
            2. InetAddress getAddress()
            3. String getHostName()
            4. boolean isUnresolved()
5. cookie
    1. abstract class CookieHandler
        1. synchronized static CookieHandler **getDefault**()
        2. synchronized static void **setDefault**(CookieHandler cHandler)
        3. ``abstract Map<String, List<String>> get(URI uri, Map<String, List<String>> requestHeaders)``
        4. ``abstract void put(URI uri, Map<String, List<String>> responseHeaders)``
    2. final class HttpCookie
        1. 注意：一些名称不能作为httpCookie的名称，目前存储在 RESERVED_NAMES 里面。
        2. 构造
            1. HttpCookie(String name, String value)
            2. ``static List<HttpCookie> parse(String header)``
        3. 状态
            1. boolean hasExpired()
            2. String comment; getter / setter
            3. String commentURL; getter / setter
            4. boolean toDiscard; getter / setter
            5. String portlist; getter / setter
            6. String domain; getter / setter
            7. long maxAge; getter / setter
            8. String uri; getter / setter
            9. boolean flag; getter / setter
            10. String name; getter
            11. String value; getter / setter
            12. int version; getter / setter
            13. boolean httpOnly; getter / setter
        4. 工具方法
            1. static boolean domainMatches(String domain, String host)
    3. interface CookiePolicy
        1. boolean shouldAccept(URI uri, HttpCookie cookie)
        2. static final CookiePolicy ACCEPT_ALL, ACCEPT_NONE, ACCEPT_ORIGINAL_SERVER
    4. interface CookieStore
        1. void add(URI uri, HttpCookie cookie)
        2. ``List<HttpCookie> get(URI uri)``
        3. ``List<HttpCookie> getCookies()``
        4. ``List<URI> getURIs()``
        5. ``boolean remove(URI uri, HttpCookie cookie)``
        6. ``boolean removeAll()``
    5. InMemoryCookieStore : CookieStore
        1. 构造
            1. InMemoryCookieStore()
            2. InMemoryCookieStore(int targetSdkVersion)
        2. 操作
            1. 继承自 CookieStore 的
    6. CookieManager : CookieHandler
        1. 构造
            1. CookieManager()
            2. CookieManager(CookieStore store, CookiePolicy cookiePolicy)
        2. 操作
            1. 继承自 CookieHandler 的
            2. void setCookiePolicy(CookiePolicy cookiePolicy)
            3. CookieStore getCookieStore()
6. socket_base
    1. interface SocketOption<T>
        1. String name()
        2. Class<T> type()
    2. interface SocketOptions: 设置socket的选项的接口类
        1. void setOption(int optID, Object value)
        2. Object getOption(int optID)
        3. 定义类很多 optID ，可以设置底层(native)的网络选项
7. udp
    1. DatagramPacket: 表示tcp/udp传输的一个包
        1. 字段
            1. byte[] buf;
            2. int offset;
            3. int length;
            4. int bufLength;
            5. InetAddress address; synchronized getter / synchronized setter
            6. int port; synchronized getter / synchronized setter
        2. 构造
            1. DatagramPacket(byte buf[], int offset = 0, int length)
            2. DatagramPacket(byte buf[], int offset = 0, int length, InetAddress address, int port)
            3. DatagramPacket(byte buf[], int offset = 0, int length, SocketAddress address)
        3. 设置
            1. synchronized byte[] getData()
            2. synchronized int getOffset()
            3. synchronized int getLength()
            4. synchronized void setLength(int length)
            5. synchronized void setData(byte[] buf, int offset = 0, int length = buf.length)
            6. synchronized SocketAddress getSocketAddress()
            7. synchronized void setSocketAddress(SocketAddress address)
            8. void setReceivedLength(int length)
    2. abstract DatagramSocketImpl : SocketOptions
        1. 字段
            1. int localPort; protected getter
            2. FileDescriptor fd; protected getter
            3. DatagramSocket socket; default getter / default setter
        2. 操作
            1. abstract void create()
            2. abstract void bind(int lport, InetAddress laddr)
            3. abstract void send(DatagramPacket p)
            4. abstract void connect(InetAddress address, int port)
            5. abstract void disconnect()
            6. abstract int peek(InetAddress i)
            7. abstract int peekData(DatagramPacket p)
            8. abstract void receive(DatagramPacket p)
            9. abstract void setTTL(byte ttl)
            10. abstract byte getTTL()
            11. abstract void setTimeToLive(int ttl)
            12. abstract int getTimeToLive()
            13. abstract void join(InetAddress inetaddr)
            14. abstract void leave(InetAddress inetaddr)
            15. abstract void joinGroup(SocketAddress mcastaddr, NetworkInterface netIf)
            16. abstract void leaveGroup(SocketAddress mcastaddr, NetworkInterface netIf)
            17. abstract void close()
            18. ``<T> void setOption(SocketOption<T> name, T value)``
            19. ``<T> T getOption(SocketOption<T> name)``
    3. interface DatagramSocketImplFactory
        1. DatagramSocketImpl createDatagramSocketImpl()
    4. DefaultDatagramSocketImplFactory: 默认创建 PlainDatagramSocketImpl ，但也会通过 impl.prefix 这一系统属性来创建别的 datagramSocketImpl
    5. DatagramSocket: udp的socket？
        1. 状态
            1. private boolean created = false;
            2. private boolean bound = false;
            3. private boolean closed = false;
            4. private Object closeLock = new Object();
            5. boolean isBound()
            6. boolean isClosed()
            7. boolean isConnected()
        2. 其他字段
            1. DatagramSocketImpl impl
            2. boolean oldImpl = false
            3. boolean explicitFilter = false
            4. int bytesLeftToFilter
            5. int connectState
            6. InetAddress connectedAddress;
            7. int connectedPort = -1;
        3. 工具方法
            1. InetAddress getInetAddress()
            2. int getPort()
            3. SocketAddress getRemoteSocketAddress()
            4. SocketAddress getLocalSocketAddress()
            5. InetAddress getLocalAddress()
            6. int getLocalPort()
        4. 构造
            1. public DatagramSocket(SocketAddress bindaddr = new InetSocketAddress(0))
            2. DatagramSocket(int port, InetAddress laddr = null)
        5. 操作
            1. synchronized void bind(SocketAddress addr)
            2. void connect(InetAddress address, int port)
            3. void connect(SocketAddress addr)
            4. void disconnect()
            5. void send(DatagramPacket p)
            6. void close()
        6. 配置方法
            1. synchronized void receive(DatagramPacket p)
            2. synchronized void setSoTimeout(int timeout)
            3. synchronized int getSoTimeout()
            4. synchronized void setSendBufferSize(int size)
            5. synchronized int getSendBufferSize()
            6. synchronized int getReceiveBufferSize()
            7. synchronized void setReceiveBufferSize(int size)
            8. synchronized void setReuseAddress(boolean on)
            9. synchronized boolean getReuseAddress()
            10. synchronized void setBroadcast(boolean on)
            11. synchronized boolean getBroadcast()
            12. synchronized void setTrafficClass(int tc)
            13. synchronized int getTrafficClass()
            14. DatagramChannel getChannel()
            15. static synchronized void setDatagramSocketImplFactory(DatagramSocketImplFactory fac)
    6. MulticastSocket : DatagramSocket 
        1. 构造
            1. MulticastSocket()
            2. MulticastSocket(int port)
            3. MulticastSocket(SocketAddress bindaddr)
        2. 属性
            1. boolean interfaceSet
            2. Object ttlLock
            3. Object infLock
            4. InetAddress infAddress
        3. 配置
            1. @Depreated void setTTL(byte ttl) / getTTL
            2. void setTimeToLive(int ttl) / getTimeToLive
        4. 操作
            1. void joinGroup(InetAddress mcastaddr)
            2. void leaveGroup(InetAddress mcastaddr)
            3. void joinGroup(SocketAddress mcastaddr, NetworkInterface netIf)
            4. void leaveGroup(SocketAddress mcastaddr, NetworkInterface netIf)
            5. void setInterface(InetAddress inf)
            6. InetAddress getInterface()
            7. void setNetworkInterface(NetworkInterface netIf)
            8. NetworkInterface getNetworkInterface()
            9. void setLoopbackMode(boolean disable) -- 是否发回给自己
            10. boolean getLoopbackMode()
            11. @Depreated void send(DatagramPacket p, byte ttl)
8. tcp
    1. class Proxy
        1. enum Type: DIRECT / HTTP / SOCKS
        2. 字段
            1. Type type; getter
            2. SocketAddress sa; getter
            3. final static Proxy NO_PROXY = new Proxy()
        3. 构造
            1. Proxy(Type type, SocketAddress sa)
    2. abstract ProxySelector: server端的proxy选择器
        1. static ProxySelector **getDefault**()
        2. static void setDefault(ProxySelector ps)
        3. ``abstract List<Proxy> select(URI uri)``
        4. abstract void connectFailed(URI uri, SocketAddress sa, IOException ioe)
    3. 
9. http
    1. interface FileNameMap
        1. String getContentTypeFor(String fileName)
    2. DefaultFileNameMap : FileNameMap
    3. IDN
        1. static String toUnicode(String input, int flag = 0)
        2. static String toASCII(String input, int flag = 0)
    4. interface ProtocolFamily
        1. String name()
    5. enum StandardProtocolFamily : INET / INET6
    6. 

使用的一些例子

```java
CookieManager manager = new CookieManager();
CookieHandler.setDefault(manager);

String urlString = "http://58.215.195.18:10010/jcaptcha?date=" + new Date().getTime();
URL url = new URL(urlString);
HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
try {
    InputStream is = conn.getInputStream();
    FileOutputStream fos = new FileOutputStream(fullPath);
    byte[] b = new byte[1024];
    int len = 0;
    while((len = is.read(b)) != -1){
        fos.write(b,0,len); 
    }
    fos.flush();
    fos.close();
    is.close();
} catch (Exception e) {
    e.printStackTrace();
}

CookieStore cookieJar = manager.getCookieStore();
List<HttpCookie> cookies = cookieJar.getCookies();
for (HttpCookie cookie : cookies) {
    System.out.println(cookie);
}
```

```
```
