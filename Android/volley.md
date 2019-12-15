## 接口层

1. interface RetryPolicy: package default
    1. int getCurrentTimeout()
    2. int getCurrentRetryCount()
    3. void retry(VolleyError error) throws VolleyError
2. interface ResponseDelivery: package default
    1. void postResponse(Request<?> request, Response<?> response)
    2. void postResponse(Request<?> request, Response<?> response, Runnable runnable)
    3. void postError(Request<?> request, VolleyError error)
3. Response<T>
    1. listener
        1. interface Listener<T>: package default
            1. void onResponse(T response)
        2. interface ErrorListener: package default
            1. void onErrorResponse(VolleyError error)
    2. 默认结果
        1. static <T> Response<T> success(T result, Cache.Entry cacheEntry)
        2. static <T> Response<T> error(VolleyError error)
    3. 关键字段
        1. final T result
        2. final Cache.Entry cacheEntry
        3. final VolleyError error
        4. boolean intermediate = false
    4. 属性
        1. boolean isSuccess()
4. abstract Request<T>
    1. inner
        1. interface Method: package default
            1. int DEPRECATED_GET_OR_POST = -1;
            2. int GET = 0;
            3. int POST = 1;
            4. int PUT = 2;
            5. int DELETE = 3;
            6. int HEAD = 4;
            7. int OPTIONS = 5;
            8. int TRACE = 6;
            9. int PATCH = 7;
        2. package default interface NetworkRequestCompleteListener: package default
            1. void onResponseReceived(Request<?> request, Response<?> response)
            2. void onNoUsableResponseReceived(Request<?> request)
        3. enum Priority { LOW, NORMAL, HIGH, IMMEDIATE }
    1. 关键字段: private
        1. final int mMethod
        2. final String mUrl
        3. final int mDefaultTrafficStatsTag
        4. final Object mLock = new Object()
        5. Response.ErrorListener mErrorListener
        6. Integer mSequence
        7. RequestQueue mRequestQueue
        8. boolean mShouldCache = true
        9. boolean mCanceled = false
        10. boolean mResponseDelivered = false
        11. boolean mShouldRetryServerErrors = false
        12. RetryPolicy mRetryPolicy
        13. Cache.Entry mCacheEntry = null
        14. Object mTag
        15. NetworkRequestCompleteListener mRequestCompleteListener
    2. 构造
        1. @Depreated Request(String url, Response.ErrorListener listener)
        2. Request(int method, String url, @Nullable Response.ErrorListener listener)
    3. getter / setter -- 配置
    4. logging
        1. void addMarker(String tag)
        2. abstract Response<T> parseNetworkResponse(NetworkResponse response)
        3. VolleyError parseNetworkError(VolleyError volleyError)
        4. abstract void deliverResponse(T response)
        5. void deliverError(VolleyError error)
    5. 操作
        1. package default void finish(final String tag)
        2. void cancel()
        3. ``Map<String, String> getHeaders()``
        4. ``protected @Depreated Map<String, String> getPostParams()``
        5. ``protected @Depreated String getPostParamsEncoding()``
        6. ``@Depreated String getPostBodyContentType()``
        7. ``@Depreated byte[] getPostBody()``
        8. ``Map<String, String> getParams()``
        9. String getParamsEncoding()
        10. String getBodyContentType()
        11. byte[] getBody()
5. interface Network
    1. package default NetworkResponse performRequest(Request<?> request)
6. final Header
    1. Header(String name, String value)
    2. getter / setter / hashCode / equals / toString
7. interface Cache
    1. Entry get(String key)
    2. void put(String key, Entry entry)
    3. void initialize()
    4. void invalidate(String key, boolean fullExpire)
    5. void remove(String key)
    6. void clear()
    7. package default Entry
        1. byte[] data
        2. String etag
        3. long serverDate
        4. long lastModified
        5. long ttl
        6. long softTtl
        7. ``Map<String, String> responseHeaders = Collections.emptyMap()``
        8. ``List<Header> allResponseHeaders``
        9. boolean isExpired()
        10. boolean refreshNeeded()
8. NetworkResponse
    1. 关键字段
        1. final byte[] data
        2. final int statusCode
        3. final long networkTimeMs
        4. final boolean notModified
        5. ``final Map<String, String> headers``
        6. ``final List<Header> allHeaders``
    2. 一系列构造函数
9. NetworkDispatcher
    1. 关键字段: private
        1. ``final BlockingQueue<Request<?>> mQueue``
        2. final Network mNetwork
        3. final Cache mCache
        4. final ResponseDelivery mDelivery
        5. volatile boolean mQuit = false
    2. NetworkDispatcher(BlockingQueue<Request<?>> queue, Network network, Cache cache, ResponseDelivery delivery)
    3. void quit()
10. CacheDispatcher
    1. 关键字段
        1. ``final BlockingQueue<Request<?>> mCacheQueue``
        2. ``final BlockingQueue<Request<?>> mNetworkQueue``
        3. final Cache mCache
        4. final ResponseDelivery mDelivery
        5. volatile boolean mQuit = false
        6. final WaitingRequestManager mWaitingRequestManager
        7. CacheDispatcher(BlockingQueue<Request<?>> cacheQueue, BlockingQueue<Request<?>> networkQueue, Cache cache, ResponseDelivery delivery)
        8. void quit()
        9. static WaitingRequestManager : NetworkRequestCompleteListener
            1. ``final Map<String, List<Request<?>>> mWaitingRequests = new HashMap<>()``
            2. final CacheDispatcher mCacheDispatcher
            3. 
11. RequestQueue
    1. interface
        1. RequestFinishedListener<T>
            1. package default void onRequestFinished(Request<T> request)
        2. RequestFilter
            1. boolean apply(Request<?> request)
    2. 关键字段
        1. final AtomicInteger mSequenceGenerator = new AtomicInteger()
        2. final Set<Request<?>> mCurrentRequests = new HashSet<>()
        3. final PriorityBlockingQueue<Request<?>> mCacheQueue = new PriorityBlockingQueue<>()
        4. final PriorityBlockingQueue<Request<?>> mNetworkQueue = new PriorityBlockingQueue<>()
        5. static final int DEFAULT_NETWORK_THREAD_POOL_SIZE = 4
        6. final Cache mCache
        7. final Network mNetwork
        8. final ResponseDelivery mDelivery
        9. final NetworkDispatcher[] mDispatchers
        10. CacheDispatcher mCacheDispatcher
        11. final List<RequestFinishedListener> mFinishedListeners = new ArrayList<>()
        12. 
12. 

## 实现层

1. DefaultRetryPolicy : RetryPolicy
    1. DefaultRetryPolicy(int initialTimeoutMs, int maxNumRetries, float backoffMultiplier)
2. ExecutorDelivery : ResponseDelivery
    1. private final Executor mResponsePoster = new Executor() { public void execute(Runnable command) { handler.post(command); } }  // 其实是委托给了 handler
    2. public ExecutorDelivery(final Handler handler)
3. BasicNetwork : Network
    1. 
4. DiskBasedCache : Cache
    1. 
5. 

## 重点

1. 重传(重传次数、超时时间) -- 即便超时了也只是新建一个请求，原有请求继续等待。
    1. 默认实现: 每一次重传都会让超时时间翻倍(默认是翻倍，其实是由backoffMultiplier控制的)，超过最大重试次数就抛出异常
2. response
    1. 成功(结果(网络中/缓存中))
    2. 失败(原因)
    3. 结果listener
    4. header
3. response 派发(派发从网络/缓存中获取的 response ，并在派发后执行某个 runnable ，或者是派发一个 error )
4. request
    1. 支持的 http 请求方法
    2. 网络结果listener --> 会调用 response 的 listener ，即调用
    3. 批量取消
    4. 流量监控
    5. 获取/缓存/更新
    6. 重传
    7. 支持配置
    8. 优先级
5. request 队列
    1. 一个集合该有的方法 -- 增 / 删 / 改 / 查 / filter
    2. 缓存
    3. 网络请求
    4. response 派发 -- from cache or network
    5. 
6. 缓存
    1. 条目
        1. 有效期
        2. key / value / equals / hashCode
    2. 增删改查
7. 网络请求执行
    1. 
8. network response
    1. 

## my 接口层

1. Request
2. Response
3. RequestQueue
4. ResponseCache
5. RequestExecutor
6. 

## my 实现层1

## my 实现层2

## my 实现层3
