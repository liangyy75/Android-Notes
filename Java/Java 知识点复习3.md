<!-- [TOC] -->

- [异常](#%E5%BC%82%E5%B8%B8)
- [配置](#%E9%85%8D%E7%BD%AE)
- [zip](#zip)
- [jar](#jar)
- [function](#function)
- [security](#security)
- [math](#math)
- [io](#io)
- [nio](#nio)
- [regex](#regex)
- [网络](#%E7%BD%91%E7%BB%9C)
- [Java5 Annotation](#Java5-Annotation)
- [反射](#%E5%8F%8D%E5%B0%84)
- [工具类](#%E5%B7%A5%E5%85%B7%E7%B1%BB)
- [Java8 Stream](#Java8-Stream)
- [Java9 Module](#Java9-Module)
- [lucene](#lucene)
- [ElasticSearch](#ElasticSearch)
- [end](#end)

## 异常

1. java se7 中新增的 try-with ，可以自动关闭实现了 java.lang.AutoCloseable 或者 java.io.Closeable 的类可以在代码块结束后自动关闭。
    1. 例子
        ```java
        try (InputStream in = new FileInputStream(src);
             OutputStream out = new FileOutputStream(dst)) {
            byte[] buf = new byte[1024];
            int len = 0;
            while ((len = in.read(buf)) != -1) {
                out.write(buf, 0, len);
            }
        }
        ```
    2. 目前java.lang.AutoCloseable接口的子接口或实现类如下：
        ```java
        AsynchronousByteChannel, AsynchronousChannel, BaseStream, ByteChannel, CachedRowSet, CallableStatement, Channel, Clip, Closeable, Connection, DataLine, DirectoryStream, DoubleStream, FilteredRowSet, GatheringByteChannel, ImageInputStream, ImageOutputStream, InterruptibleChannel, JavaFileManager, JdbcRowSet, JMXConnector, JoinRowSet, Line, LongStream, MidiDevice, MidiDeviceReceiver, MidiDeviceTransmitter, Mixer, MulticastChannel, NetworkChannel, ObjectInput, ObjectOutput, Port, PreparedStatement, ReadableByteChannel, Receiver, RMIConnection, RowSet, ScatteringByteChannel, SecureDirectoryStream, SeekableByteChannel, Sequencer, SourceDataLine, StandardJavaFileManager, Statement, Stream, SyncResolver, Synthesizer, TargetDataLine, Transmitter, WatchService, WebRowSet, WritableByteChannel
        ```
        ```java
        AbstractInterruptibleChannel, AbstractSelectableChannel, AbstractSelector, AsynchronousFileChannel, AsynchronousServerSocketChannel, AsynchronousSocketChannel, AudioInputStream, BufferedInputStream, BufferedOutputStream, BufferedReader, BufferedWriter, ByteArrayInputStream, ByteArrayOutputStream, CharArrayReader, CharArrayWriter, CheckedInputStream, CheckedOutputStream, CipherInputStream, CipherOutputStream, DatagramChannel, DatagramSocket, DataInputStream, DataOutputStream, DeflaterInputStream, DeflaterOutputStream, DigestInputStream, DigestOutputStream, FileCacheImageInputStream, FileCacheImageOutputStream, FileChannel, FileImageInputStream, FileImageOutputStream, FileInputStream, FileLock, FileOutputStream, FileReader, FileSystem, FileWriter, FilterInputStream, FilterOutputStream, FilterReader, FilterWriter, Formatter, ForwardingJavaFileManager, GZIPInputStream, GZIPOutputStream, ImageInputStreamImpl, ImageOutputStreamImpl, InflaterInputStream, InflaterOutputStream, InputStream, InputStream, InputStream, InputStreamReader, JarFile, JarInputStream, JarOutputStream, LineNumberInputStream, LineNumberReader, LogStream, MemoryCacheImageInputStream, MemoryCacheImageOutputStream, MLet, MulticastSocket, ObjectInputStream, ObjectOutputStream, OutputStream, OutputStream, OutputStream, OutputStreamWriter, Pipe.SinkChannel, Pipe.SourceChannel, PipedInputStream, PipedOutputStream, PipedReader、, PipedWriter, PrintStream, PrintWriter, PrivateMLet, ProgressMonitorInputStream, PushbackInputStream, PushbackReader, RandomAccessFile, Reader, RMIConnectionImpl, RMIConnectionImpl_Stub, RMIConnector, RMIIIOPServerImpl, RMIJRMPServerImpl, RMIServerImpl, Scanner, SelectableChannel,ServerSocket, ServerSocketChannel, Socket, SocketChannel, SSLServerSocket, SSLSocket, StringBufferInputStream, StringReader, StringWriter, URLClassLoader, Writer, XMLDecoder, XMLEncoder, ZipFile, ZipInputStream, ZipOutputStream
        ```
    3. 注意: try-finally可能导致有两次异常抛出，前一次的异常会被supress，而try-with中后一次的异常会被supress，后续抛出的异常其实可以用Throwable.getSupressed()重新获取
2. **StackTraceElement**
    0. 意义: 代表错误跟踪堆栈中的帧，错误跟踪堆栈中顶层帧表示错误发生位置，而其他位置表示抛出错误涉及到的方法。
    1. 成员变量
        1. private String declaringClass, methodName, fileName;
        2. private int lineNumber;
    2. 成员方法
        1. public StackTraceElement(String declaringClass, String methodName, String fileName, int lineNumber)
        2. public String getClassName(); public String getMethodName(); public String getFileName(); public int getLineNumber();
        3. public boolean isNativeMethod();
        4. public String toString(); public boolean equals(Object obj); public int hashCode();
3. **Throwable** implements Serializable
    1. 成员变量
        1. private transient Object backtrace;
        2. private String detailMessage;
        3. private Throwable cause = this;
        4. private static final StackTraceElement[] UNASSIGNED_STACK = new StackTraceElement[0];  // 表示空堆栈
        5. private StackTraceElement[] stackTrace = UNASSIGNED_STACK;
        6. private static final List<Throwable> SUPPRESSED_SENTINEL = Collections.unmodifiableList(new ArrayList<Throwable>(0));  // 表示默认的suppressed的throwable
        7. private List<Throwable> suppressedExceptions = SUPPRESSED_SENTINEL;
        8. private static final Throwable[] EMPTY_THROWABLE_ARRAY = new Throwable[0];  // 用于在suppress的throwable为空的时候返回
        9. others: 一些字符串，如private static final String NULL_CAUSE_MESSAGE = "Cannot suppress a null exception.";之类的
    2. 成员方法
        1. public Throwable(); public Throwable(String message); public Throwable(String message, Throwable cause); public Throwable(Throwable cause);
        2. protected Throwable(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace);
        3. public String getMessage(); public String getLocalizedMessage(); /* 默认返回getMessage，但子类可以有自己的实现 */
        4. public synchronized Throwable getCause(); public synchronized Throwable initCause(Throwable cause);
        5. public String toString();
        6. public void printStackTrace(); /* 默认调用printStackTrace(System.err) */ public void printStackTrace(PrintStream s); public void printStackTrace(PrintWriter s); private void printStackTrace(PrintStreamOrWriter s); private void printEnclosedStackTrace(PrintStreamOrWriter s, StackTraceElement[] enclosingTrace, String caption, String prefix, Set<Throwable> dejaVu);
        7. public synchronized Throwable fillInStackTrace(); private native Throwable fillInStackTrace(int dummy);  // 这两个方法都是用于初始化堆的
        8. public StackTraceElement[] getStackTrace(); private synchronized StackTraceElement[] getOurStackTrace(); native StackTraceElement getStackTraceElement(int index); native int getStackTraceDepth();
        9. public void setStackTrace(StackTraceElement[] stackTrace);
        10. private void readObject(ObjectInputStream s); private synchronized void writeObject(ObjectOutputStream s);
        11. public final synchronized void addSuppressed(Throwable exception); public final synchronized Throwable[] getSuppressed();
    3. 内部类
        1. private static class SentinelHolder
            0. 意义: 为了推迟初始化以及序列化
            1. 成员变量
                1. public static final StackTraceElement STACK_TRACE_ELEMENT_SENTINEL = new StackTraceElement("", "", null, Integer.MIN_VALUE);
                2. public static final StackTraceElement[] STACK_TRACE_SENTINEL = new StackTraceElement[] {STACK_TRACE_ELEMENT_SENTINEL};
        2. private abstract static class PrintStreamOrWriter
            0. 意义: 为了兼容 java.io.PrintStream 与 java.io.PrintWriter
            1. abstract Object lock();
            2. abstract void println(Object o);
        3. private static class WrappedPrintStream extends PrintStreamOrWriter
        4. private static class WrappedPrintWriter extends PrintStreamOrWriter
4. **Error** extends Throwable
    1. public Error(); public Error(String Message); public Error(String message, Throwable cause); public Error(Throwable cause); protected Error(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace);
5. **Exception** extends Throwable
    1. public Exception(); public Exception(String Message); public Exception(String message, Throwable cause); public Exception(Throwable cause); protected Exception(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace);
6. **RuntimeException** extends Exception
    1. public RuntimeException(); public RuntimeException(String Message); public RuntimeException(String message, Throwable cause); public RuntimeException(Throwable cause); protected RuntimeException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace);

## 配置

0. https://docs.oracle.com/javase/tutorial/essential/environment/index.html
1. APP配置相关API
    1. 
2. 系统相关API
    1. 
3. PATH和CLASSPATH
    1. 
1. String newLine = System.getProperty("line.separator");
2. **System**

## zip

0. links
    * [易百javazip](https://www.yiibai.com/javazip) finished
    * [[Java 基础] 使用java.util.zip包压缩和解压缩文件](https://www.cnblogs.com/0616--ataozhijia/p/5022028.html) finished
1. java.util.zip.Adler32 implements Checksum: 可用于计算数据流的Adler-32校验和的类。 Adler-32校验和与CRC-32几乎一样可靠，但可以更快地计算。
    1. long getValue(): 返回校验和值。
    2. void reset(): 将校验和重置为初始值。
    3. void update(byte[] b): 使用指定的字节数组更新校验和。
    4. void update(byte[] b, int off, int len): 使用指定的字节数组更新校验和。
    5. void update(int b): 使用指定的字节(参数b的低8位)更新校验和。
2. java.util.zip.CRC32 implements Checksum: 是一个可用于计算数据流的CRC-32的类。
    1. long getValue(): 返回CRC-32值。
    2. void reset(): 将CRC-32重置为初始值。
    3. void update(byte[] b): 用指定的字节数组更新CRC-32校验和。
    4. void update(byte[] b, int off, int len): 用指定的字节数组更新CRC-32校验和。
    5. void update(int b): 用指定字节(参数b的低8位)更新CRC-32校验和。
3. java.util.zip.Deflater: 为使用流行的ZLIB压缩库的通用压缩提供支持。ZLIB压缩库最初是作为PNG图形标准的一部分开发的，不受专利保护。
    1. 字段
        * static int BEST_COMPRESSION - 最佳压缩的压缩级别。
		* static int BEST_SPEED - 压缩级别最快的压缩。
		* static int DEFAULT_COMPRESSION - 默认压缩级别。
		* static int DEFAULT_STRATEGY - 默认压缩策略。
		* static int DEFLATED - 压缩算法的压缩方法(目前唯一支持的压缩方法)。
		* static int FILTERED - 压缩策略最适用于大部分数值较小且数据分布随机分布的数据。
		* static int FULL_FLUSH - 压缩刷新模式，用于清除所有待处理的输出并重置拆卸器。
		* static int HUFFMAN_ONLY - 仅用于霍夫曼编码的压缩策略。
		* static int NO_COMPRESSION - 不压缩的压缩级别。
		* static int NO_FLUSH - 用于实现最佳压缩结果的压缩刷新模式。
		* static int SYNC_FLUSH - 用于清除所有未决输出的压缩刷新模式; 可能会降低某些压缩算法的压缩率。
    2. 构造方法
        * Deflater(): 用默认的压缩级别创建一个新的压缩器。
        * Deflater(int level): 使用指定的压缩级别创建一个新的压缩器。
        * Deflater(int level, boolean nowrap): 使用指定的压缩级别创建一个新的压缩器。
    3. 类方法
        1. int deflate(byte[] b): 压缩输入数据并用压缩数据填充指定的缓冲区。
		2. int deflate(byte[] b, int off, int len): 压缩输入数据并用压缩数据填充指定的缓冲区。
		3. int deflate(byte[] b, int off, int len, int flush): 压缩输入数据并用压缩数据填充指定的缓冲区。
		4. void end(): 关闭压缩器并丢弃任何未处理的输入。
		5. void finish(): 当被调用时，表示压缩应该以输入缓冲区的当前内容结束。
		6. boolean finished(): 如果已达到压缩数据输出流的结尾，则返回true。
		7. int getAdler(): 返回未压缩数据的ADLER-32值。
		8. long getBytesRead(): 返回到目前为止输入的未压缩字节的总数。
		9. long getBytesWritten(): 返回迄今为止输出的压缩字节总数。
		10. int getTotalIn(): 返回到目前为止输入的未压缩字节的总数。
		11. int getTotalOut(): 返回迄今为止输出的压缩字节总数。
		12. boolean needsInput(): 如果输入数据缓冲区为空，并且应该调用setInput()以提供更多输入，则返回true。
		13. void reset(): 重置deflater，以便可以处理一组新的输入数据。
		14. void setDictionary(byte[] b): 设置预设字典进行压缩。
		15. void setDictionary(byte[] b, int off, int len): 设置预设字典进行压缩。
		16. void setInput(byte[] b): 设置压缩输入数据。
		17. void setInput(byte[] b, int off, int len): 设置压缩输入数据。
		18. void setLevel(int level): 将当前压缩级别设置为指定值。
		19. void setStrategy(int strategy): 将压缩策略设置为指定的值。
4. java.util.zip.Inflater: 为使用流行的ZLIB压缩库的通用解压缩提供支持。
    1. 构造方法
        1. Inflater(): 创建一个新的解压缩器。
		2. Inflater(boolean nowrap): 创建一个新的解压缩器。
    2. 类方法
        1. void end(): 关闭解压缩器并丢弃任何未处理的输入。
		2. boolean finished(): 如果已到达压缩数据流的末尾，则返回true。
		3. int getAdler(): 返回未压缩数据的ADLER-32值。
		4. long getBytesRead(): 返回迄今为止输入的压缩字节总数。
		5. long getBytesWritten(): 返回到目前为止输出的未压缩字节的总数。
		6. int getRemaining(): 返回输入缓冲区中剩余的字节总数。
		7. int getTotalIn(): 返回迄今为止输入的压缩字节总数。
		8. int getTotalOut(): 返回到目前为止输出的未压缩字节的总数。
		9. int inflate(byte[] b): 将字节解压缩到指定的缓冲区中。
		10. int inflate(byte[] b, int off, int len): 将字节解压缩到指定的缓冲区中。
		11. boolean needsDictionary(): 如果解压缩需要预设字典，则返回true。
		12. boolean needsInput(): 如果输入缓冲区中没有数据，则返回true。
		13. void reset(): 重置inflater，以便可以处理一组新的输入数据。
		14. void setDictionary(byte[] b): 将预设字典设置为给定的字节数组。
		15. void setDictionary(byte[] b, int off, int len): 将预设字典设置为给定的字节数组。
		16. void setInput(byte[] b): 设置解压缩的输入数据。
		17. void setInput(byte[] b, int off, int len): 设置解压缩的输入数据。
5. java.util.zip.DeflaterOutputStream extends FilterOutputStream: 实现输出流过滤器，用于压缩“deflate”压缩格式的数据。它也被用作其他类型压缩过滤器的基础，例如GZIPOutputStream。
    1. 字段
        * protected byte[] buf - 用于写入压缩数据的输出缓冲区。
        * protected Deflater def  - 这个流的压缩器。
    2. 构造方法
        1. DeflaterOutputStream(OutputStream out): 用默认的压缩器和缓冲区大小创建一个新的输出流。
		2. DeflaterOutputStream(OutputStream out, boolean syncFlush): 使用默认压缩器，默认缓冲区大小和指定的刷新模式创建新的输出流。
		3. DeflaterOutputStream(OutputStream out, Deflater def): 用指定的压缩器和默认缓冲区大小创建一个新的输出流。
		4. DeflaterOutputStream(OutputStream out, Deflater def, boolean syncFlush): 用指定的压缩器，刷新模式和默认缓冲区大小创建新的输出流。
		5. DeflaterOutputStream(OutputStream out, Deflater def, int size): 用指定的压缩器和缓冲区大小创建一个新的输出流。
		6. DeflaterOutputStream(OutputStream out, Deflater def, int size, boolean syncFlush): 用指定的压缩器，缓冲区大小和刷新模式创建一个新的输出流。
    3. 类方法
        1. void close(): 将剩余的压缩数据写入输出流并关闭基础流。
		2. void finish(): 完成将压缩数据写入输出流而不关闭底层流。
		3. void flush(): 刷新压缩的输出流。
		4. void write(byte[] b, int off, int len): 将一个字节数组写入压缩输出流。
		5. void write(int b): 将一个字节写入压缩的输出流。
6. java.util.zip.DeflaterInputStream extends FilterInputStream: 实现输入流过滤器，用于压缩“deflate”中的数据压缩格式。
    1. 字段
        * protected final byte[] buf - 输入缓冲区用于读取压缩数据。
        * protected final Deflater def - 此流的压缩器。
        * private byte[] rbuf = new byte[1] - 临时读缓冲区。
        * private boolean usesDefaultDeflater = false
        * private boolean reachEOF = false
    2. 构造方法
        * DeflaterInputStream(InputStream in)
        * DeflaterInputStream(InputStream in, Deflater defl)
        * DeflaterInputStream(InputStream in, Deflater defl, int bufLen)
    3. 类方法
        * void ensureOpen(): 检查以确保此流尚未关闭。
        * void close()
        * int read()
        * int read(byte[] b, int off, int len)
        * long skip(long n)
        * int available()
        * boolean markSupported()
7. java.util.zip.InflaterOutputStream extends FilterOutputStream: 实现输出流过滤器，用于解压缩以“deflate”压缩格式存储的数据。
    1. 字段
        * protected byte[] buf - 用于写入未压缩数据的输出缓冲区。
        * protected Inflater inf - 这个流的解压缩器。
    2. 构造方法
        1. InflaterOutputStream(OutputStream out): 使用默认的解压缩器和缓冲区大小创建一个新的输出流。
		2. InflaterOutputStream(OutputStream out, Inflater infl): 使用指定的解压缩器和默认缓冲区大小创建新的输出流。
		3. InflaterOutputStream(OutputStream out, Inflater infl, int bufLen): 使用指定的解压缩器和缓冲区大小创建一个新的输出流。
    3. 类方法
        1. void close(): 将剩余的压缩数据写入输出流并关闭基础流。
		2. void finish(): 完成将未压缩的数据写入输出流而不关闭底层流。
		3. void flush(): 刷新此输出流，强制写入任何未决的缓冲输出字节。
		4. void write(byte[] b, int off, int len): 将一个字节数组写入压缩输出流。
		5. void write(int b): 将一个字节写入压缩的输出流。
8. java.util.zip.InflaterInputStream extends FilterInputStream: 实现输入流过滤器，用于解压缩以“deflate”压缩格式存储的数据。
    1. 字段
        * protected byte[] buf - 用于解压缩的输入缓冲区。
        * protected Inflater inf - 用于此流的解压缩器。
        * protected int len - 输入缓冲区的长度。
    2. 构造函数
        1. InflaterInputStream(InputStream in): 使用默认的解压缩器和缓冲区大小创建一个新的输入流。
		2. InflaterInputStream(InputStream in, Inflater inf): 使用指定的解压缩器和默认缓冲区大小创建一个新的输入流。
		3. InflaterInputStream(InputStream in, Inflater inf, int size): 使用指定的解压缩器和缓冲区大小创建一个新的输入流。
    3. 类方法
        1. int available(): 文件结尾(EOF)达到后返回0，否则返回1。
		2. void close(): 关闭此输入流并释放与该流关联的所有系统资源。
		3. void mark(int readlimit): 标记此输入流中的当前位置。
		4. boolean markSupported(): 测试此输入流是否支持mark()和reset()方法。
		5. int read(): 读取一个未压缩的数据字节。
		6. void reset(): 将此流重新定位到上次在此输入流上调用mark()方法时的位置。
		7. long skip(long n): 跳过未压缩数据的指定字节数。
9. java.util.zip.GZIPOutputStream extends DeflaterOutputStream: 实现了用于以GZIP文件格式写入压缩数据的流过滤器。
    1. protected CRC32 crc - CRC-32用于未压缩的数据。
    2. 构造方法
        1. GZIPOutputStream(OutputStream out): 用默认缓冲区大小创建一个新的输出流。
		2. GZIPOutputStream(OutputStream out, boolean syncFlush): 使用默认缓冲区大小和指定的刷新模式创建新的输出流。
		3. GZIPOutputStream(OutputStream out, int size): 用指定的缓冲区大小创建一个新的输出流。
		4. GZIPOutputStream(OutputStream out, int size, boolean syncFlush): 用指定的缓冲区大小和刷新模式创建一个新的输出流。
    3. 类方法
        1. void close(): 完成将压缩数据写入输出流而不关闭底层流。
		2. int write(byte[] buf, int off, int len)): 将字节数组写入压缩输出流。
10. java.util.zip.GZIPInputStream extends InflaterInputStream: 实现了用于读取GZIP文件格式的压缩数据的流过滤器。
    1. 字段
        * protected CRC32 crc - CRC-32用于未压缩的数据。
        * protected boolean eos - 表示输入流的结束。
        * static int GZIP_MAGIC - GZIP头幻数。
    2. 构造方法
        1. GZIPInputStream(InputStream in): 用默认缓冲区大小创建一个新的输入流。
		2. GZIPInputStream(InputStream in, int size): 用指定的缓冲区大小创建一个新的输入流。
    3. 类方法
        1. void close(): 关闭此输入流并释放与该流关联的所有系统资源。
		2. int read(byte[] buf, int off, int len): 将未压缩的数据读入一个字节数组。
11. java.util.zip.ZipEntry implements Clonable: 表示ZIP文件条目。
    1. 字段
        * protected byte[] buf - 用于写入未压缩数据的输出缓冲区。
		* protected Inflater inf - 这个流的解压缩器。
		* static int CENATT
		* static int CENATX
		* static int CENCOM
		* static int CENCRC
		* static int CENDSK
		* static int CENEXT
		* static int CENFLG
		* static int CENHDR
		* static int CENHOW
		* static int CENLEN
		* static int CENNAM
		* static int CENOFF
		* static long CENSIG
		* static int CENSIZ
		* static int CENTIM
		* static int CENVEM
		* static int CENVER
		* static int DEFLATED - 压缩(压缩)条目的压缩方法。
		* static int ENDCOM
		* static int ENDHDR
		* static int ENDOFF
		* static long ENDSIG
		* static int ENDSIZ
		* static int ENDSUB
		* static int ENDTOT
		* static int EXTCRC
		* static int EXTHDR
		* static int EXTLEN
		* static long EXTSIG
		* static int EXTSIZ
		* static int LOCCRC
		* static int LOCEXT
		* static int LOCFLG
		* static int LOCHDR
		* static int LOCHOW
		* static int LOCLEN
		* static int LOCNAM
		* static long LOCSIG
		* static int LOCSIZ
		* static int LOCTIM
		* static int LOCVER
		* static int STORED - 未压缩条目的压缩方法。
    2. 构造函数
        1. ZipEntry(String name): 使用指定的名称创建一个新的zip条目。
		2. ZipEntry(ZipEntry e): 创建一个新的zip条目，其中包含从指定的zip条目中获取的字段。
    3. 类方法
        1. Object clone(): 返回此条目的副本。
		2. String getComment(): 返回条目的注释字符串;如果没有，则返回null。
		3. long getCompressedSize(): 返回压缩条目数据的大小，如果未知，则返回-1。
		4. long getCrc(): 返回未压缩条目数据的CRC-32校验和，如果未知，则返回-1。
		5. byte[] getExtra(): 返回条目的额外字段数据，如果没有，则返回null。
		6. int getMethod(): 返回条目的压缩方法，如果未指定，则返回-1。
		7. String getName(): 返回条目的名称。
		8. long getSize(): 返回条目数据的未压缩大小，如果未知，则返回-1。
		9. long getTime(): 返回条目的修改时间，如果未指定，则返回-1。
		10. int hashCode(): 返回此条目的哈希码值。
		11. boolean isDirectory(): 如果这是一个目录条目，则返回true。
		12. void setComment(String comment): 设置条目的可选注释字符串。
		13. void setCrc(long crc): 设置未压缩条目数据的CRC-32校验和。
		14. void setExtra(byte[] extra): 为条目设置可选的额外字段数据。
		15. void setMethod(int method): 设置条目的压缩方法。
		16. void setSize(long size): 设置条目数据的未压缩大小。
		17. void setTime(long time): 设置条目的修改时间。
		18. String toString(): 返回ZIP条目的字符串表示形式。
12. java.util.zip.ZipFile implements Clonable: 用于读取zip文件中的条目。
    1. 字段
        * static int CENATT
		* static int CENATX
		* static int CENCOM
		* static int CENCRC
		* static int CENDSK
		* static int CENEXT
		* static int CENFLG
		* static int CENHDR
		* static int CENHOW
		* static int CENLEN
		* static int CENNAM
		* static int CENOF
		* static long CENSIG
		* static int CENSIZ
		* static int CENTIM
		* static int CENVEM
		* static int CENVER
		* static int ENDCOM
		* static int ENDHDR
		* static int ENDOFF
		* static long ENDSIG
		* static int ENDSIZ
		* static int ENDSUB
		* static int ENDTOT
		* static int EXTCRC
		* static int EXTHDR
		* static int EXTLEN
		* static long EXTSIG
		* static int EXTSIZ
		* static int LOCCRC
		* static int LOCEXT
		* static int LOCFLG
		* static int LOCHDR
		* static int LOCHOW
		* static int LOCLEN
		* static int LOCNAM
		* static long LOCSIG
		* static int LOCSIZ
		* static int LOCTIM
		* static int LOCVER
		* static int OPEN_DELETE - 模式标志打开一个zip文件并将其标记为删除。
		* static int OPEN_READ - 模式标志打开一个zip文件进行读取。
    2. 构造函数
        1. ZipFile(File file): 给定指定的File对象，打开ZIP文件进行读取。
		2. ZipFile(File file, Charset charset): 给定指定的File对象，打开ZIP文件进行读取。
		3. ZipFile(File file, int mode): 打开一个新的ZipFile以指定的模式从指定的File对象读取。
		4. ZipFile(File file, int mode, Charset charset): 从指定的File对象以指定的模式打开一个新的ZipFile读取。
		5. ZipFile(String name): 打开一个zip文件进行读取。
		6. ZipFile(String name, Charset charset): 打开一个zip文件进行读取。
    3. 类方法
        1. void close(): 关闭ZIP文件。
		2. Enumeration<? extends ZipEntry> entries(): 返回ZIP文件条目的枚举。
		3. String getComment(): 返回压缩文件注释，如果没有，则返回null。
		4. ZipEntry getEntry(String name): 返回指定名称的zip文件条目，如果未找到，则返回null。
		5. InputStream getInputStream(ZipEntry entry): 返回用于读取指定zip文件条目内容的输入流。
		6. String getName(): 返回ZIP文件的路径名称。
		7. int size(): 返回ZIP文件中的条目数。
13. java.util.zip.ZipInputStream extends InflaterInputStream: 实现用于读取ZIP文件格式文件的输入流过滤器。包括对压缩和未压缩条目的支持。
    1. 字段
        * static int CENATT
		* static int CENATX
		* static int CENCOM
		* static int CENCRC
		* static int CENDSK
		* static int CENEXT
		* static int CENFLG
		* static int CENHDR
		* static int CENHOW
		* static int CENLEN
		* static int CENNAM
		* static int CENOFF
		* static long CENSIG
		* static int CENSIZ
		* static int CENTIM
		* static int CENVEM
		* static int CENVER
		* static int ENDCOM
		* static int ENDHDR
		* static int ENDOFF
		* static long ENDSIG
		* static int ENDSIZ
		* static int ENDSUB
		* static int ENDTOT
		* static int EXTCRC
		* static int EXTHDR
		* static int EXTLEN
		* static long EXTSIG
		* static int EXTSIZ
		* static int LOCCRC
		* static int LOCEXT
		* static int LOCFLG
		* static int LOCHDR
		* static int LOCHOW
		* static int LOCLEN
		* static int LOCNAM
		* static long LOCSIG
		* static int LOCSIZ
		* static int LOCTIM
		* static int LOCVER
    2. 构造函数
        1. ZipInputStream(InputStream in): 创建一个新的ZIP输入流。
		2. ZipInputStream(InputStream in, Charset charset): 创建一个新的ZIP输入流。
    3. 类方法
        1. int available(): 达到当前输入数据结尾(EOF)之后返回0，否则返回1。
		2. void close(): 关闭此输入流并释放与该流关联的所有系统资源。
		3. void closeEntry(): 关闭当前的ZIP条目并定位流以读取下一个条目。
		4. ZipEntry getNextEntry(): 读取下一个ZIP文件条目并将该流定位在条目数据的开头。
		5. int read(byte[] b, int off, int len): 从当前的ZIP条目读入一个字节数组。
		6. long skip(long n): 跳过当前ZIP条目中指定的字节数。
14. java.util.zip.ZipOutputStream extends DeflaterOutputStream: 实现一个输出流过滤器，用于以ZIP文件格式写入文件。包括对压缩和未压缩条目的支持。
    1. 字段 ...
    2. 构造函数
        1. ZipOutputStream(OutputStream out): 创建一个新的ZIP输出流。
		2. ZipOutputStream(OutputStream out, Charset charset): 使用指定字符我们要创建一个新的ZIP输出流。
    3. 类方法
        1. void close(): 关闭ZIP输出流以及正在过滤的流。
		2. void closeEntry(): 关闭当前的ZIP条目并定位写入下一个条目的流。
		3. void finish(): 完成编写ZIP输出流的内容而不关闭底层流。
		4. void putNextEntry(ZipEntry e): 开始编写新的ZIP文件条目并将流定位到条目数据的开头。
		5. void setComment(String comment): 设置ZIP文件的注释
		6. void setLevel(int level): 为后续的DEFLATED条目设置压缩级别。
		7. void setMethod(int method): 为后续条目设置默认压缩方法。
		8. void write(byte[] b, int off, int len): 将一个字节数组写入当前ZIP条目数据。
15. 实例
    1. ZipFile
        ```java
        File file = new File("F:/zippath.zip");
        ZipFile zipFile = new ZipFile(file);
        System.out.println("压缩文件的名称为：" + zipFile.getName());
        ```
    2. 压缩单个文件
        ```java
        public static void ZipFile(String filepath ,String zippath) {
            try {
                File file = new File(filepath);
                File zipFile = new File(zippath);
                InputStream input = new FileInputStream(file);
                ZipOutputStream zipOut = new ZipOutputStream(new FileOutputStream(zipFile));
                zipOut.putNextEntry(new ZipEntry(file.getName()));
                int temp = 0;
                while((temp = input.read()) != -1){
                    zipOut.write(temp);
                }
                input.close();
                zipOut.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        // ZipFile("d:/hello.txt", "d:/hello.zip");
        ```
    3. 压缩多个文件（文件夹）
        ```java
        public static void ZipMultiFile(String filepath ,String zippath) {
            try {
                File file = new File(filepath);  // 要被压缩的文件夹
                File zipFile = new File(zippath);
                InputStream input = null;
                ZipOutputStream zipOut = new ZipOutputStream(new FileOutputStream(zipFile));
                if (file.isDirectory()) {
                    File[] files = file.listFiles();
                    for (int i = 0; i < files.length; ++i) {
                        input = new FileInputStream(files[i]);
                        zipOut.putNextEntry(new ZipEntry(file.getName() + File.separator + files[i].getName()));
                        int temp = 0;
                        while ((temp = input.read()) != -1) {
                            zipOut.write(temp);
                        }
                        input.close();
                    }
                }
                zipOut.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        // ZipMultiFile("f:/uu", "f:/zippath.zip");
        ```
    4. 解压缩单个文件
        ```java
        public static void ZipContraFile(String zippath ,String outfilepath ,String filename) {
            try {
                File file = new File(zippath);  // 压缩文件路径和文件名
                File outFile = new File(outfilepath);  // 解压后路径和文件名
                ZipFile zipFile = new ZipFile(file);
                ZipEntry entry = zipFile.getEntry(filename);  // 所解压的文件名
                InputStream input = zipFile.getInputStream(entry);
                OutputStream output = new FileOutputStream(outFile);
                int temp = 0;
                while((temp = input.read()) != -1){
                    output.write(temp);
                }
                input.close();
                output.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        // ZipContraFile("d:/hello.zip","d:/eee.txt", "hello.txt");
        ```
    5. 解压缩多个文件: 当我们需要解压缩多个文件的时候，ZipEntry就无法使用了。如果想操作更加复杂的压缩文件，我们就必须使用ZipInputStream类。
        ```java
        public static void ZipContraMultiFile(String zippath ,String outzippath){
            try {
                File file = new File(zippath);
                File outFile = null;
                ZipFile zipFile = new ZipFile(file);
                ZipInputStream zipInput = new ZipInputStream(new FileInputStream(file));
                ZipEntry entry = null;
                InputStream input = null;
                OutputStream output = null;
                while ((entry = zipInput.getNextEntry()) != null) {
                    System.out.println("解压缩" + entry.getName() + "文件");
                    outFile = new File(outzippath + File.separator + entry.getName());
                    if (!outFile.getParentFile().exists()) {
                        outFile.getParentFile().mkdir();
                    }
                    if (!outFile.exists()) {
                        outFile.createNewFile();
                    }
                    input = zipFile.getInputStream(entry);
                    output = new FileOutputStream(outFile);
                    int temp = 0;
                    while ((temp = input.read()) != -1) {
                        output.write(temp);
                    }
                    input.close();
                    output.close();
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        // ZipContraMultiFile("f:/zippath.zip", "d:/");
        // ZipContraMultiFile("d:/hello.zip", "d:/");
        ```
    6. 

## jar

## function

## security

## math

## io

## nio

## regex

## 网络

[原生java http方式上传大文件(含文件流分段上传问题、base64分段转码问题解决思路)](https://blog.csdn.net/u014248939/article/details/53205030)<br>

1. **URL**
    ```java
    URL url = new URL(urlStr);
    // new URL(protocol, host, file)
    // new URL(protocol, host, port)
    // new URL(protocol, host, port, file, urlStreamHandler)
    InputStream in = url.openStream();
    HttpURLConnection huc = (HttpURLConnection) url.openConnection();
    url.getProtocol/getHost/getPort/getFile/getQuery/getAuthority/getRef();
    url.getContent/getDefaultPort();
    URL.setURLStreamHandlerFactory();
    ```
2. **HttpURLConnection**  https://www.cnblogs.com/libertycode/p/5979260.html
    ```java
    HttpURLConnection huc = (HttpURLConnection) url.openConnection();
    huc.setRequestMethod("request_method");
    huc.setConnectTimeout(5 * 1000);
    huc.setReadTimeout(5 * 1000);
    huc.setChunkedStreamingMode(1024);  // 设置分块流模式 也就是分块上传 1024是getOutputStream维护的本地缓冲区的大小。调用该方法后，只要本地缓存区满了，HttpURLConnection就会自动把缓冲区里的数据发送到服务器，同时清空本地缓存
    huc.setDoInput(boolean);  // default: true  // huc.getInputStream();
    huc.setDoOutput(boolean);  // default: false -- post  // huc.getOutputStream();
    huc.setIfModifiedSince(long);  // 设置缓存页面的最后修改时间  // huc.getLastModified();
    huc.setUserCachee(boolean);  // setDefaultUseCaches(boolean)
    huc.setRequestProperty(String key, String value);  // 会覆盖之前的设置
    huc.addRequestProperty(String key, String value);
    huc.setAllowUserInteraction(boolean);  // huc.setDefaultAllowUserInteraction(boolean);
    huc.connect();
    huc.getResponseCode();  // HttpURLConnection.HTTP_OK
    huc.getDate();
    huc.getExpiration();
    huc.getHeaderField(int);  // huc.getHeaderField(String key); huc.getHeaderFields();
    huc.getContent();  // huc.getContentType(); huc.getContentLength(); huc.getContentEncoding();
    huc.getErrorStream();
    huc.disconnect();
    ```
    ```java
    // URLConnection 和 HttpURLConnection 里面的 static 方法(挺有用的)
    ```
3. **Socket**
4. **DatagramSocket**
5. 

## Java5 Annotation

https://www.cnblogs.com/skywang12345/p/3344137.html
https://www.cnblogs.com/be-forward-to-help-others/p/6846821.htm
https://blog.csdn.net/briblue/article/details/73824058

1. Annotation 有许多实现类，包括: Deprecated, Documented, Inherited, Override, Retention, Target, SuppressWarnings 等等。 Annotation 的每一个实现类，都"和1个RetentionPolicy关联"并且"和1~n个ElementType关联"。
2. Annotation 组成部分: 
    1. **Annotation**.java
        ```java
        package java.lang.annotation;
        public interface Annotation {
            boolean equals(Object obj);
            int hashCode();
            String toString();
            Class<? extends Annotation> annotationType();
        }
        ```
    2. **ElementType**.java
        ```java
        package java.lang.annotation;
        public enum ElementType {
            TYPE,               /* 类、接口（包括注释类型）或枚举声明  */
            FIELD,              /* 字段声明（包括枚举常量）  */
            METHOD,             /* 方法声明  */
            PARAMETER,          /* 参数声明  */
            CONSTRUCTOR,        /* 构造方法声明  */
            LOCAL_VARIABLE,     /* 局部变量声明  */
            ANNOTATION_TYPE,    /* 注释类型声明  */
            PACKAGE             /* 包声明  */
        }
        ```
    3. **RetentionPolicy**.java
        ```java
        package java.lang.annotation;
        public enum RetentionPolicy {
            SOURCE,         /* Annotation信息仅存在于编译器处理期间，编译器处理完之后就没有该Annotation信息了  */
            CLASS,          /* 编译器将Annotation存储于类对应的.class文件中。默认行为  */
            RUNTIME         /* 编译器将Annotation存储于class文件中，并且可由JVM读入 */
        }
        ```
3. Java常用的Annotation: 
    1. @Deprecated  -- @Deprecated 所标注内容，不再被建议使用。
    2. @Override    -- @Override 只能标注方法，表示该方法覆盖父类中的方法。
    3. @Documented  -- @Documented 所标注内容，可以出现在javadoc中。
    4. @Inherited   -- @Inherited只能被用来标注“Annotation类型”，它所标注的Annotation具有继承性。如@Inherited修饰了注解A，而注解A修饰了类B，类B是类C的父类，那么类C也具有注解A了。
    5. @Retention   -- @Retention只能被用来标注“Annotation类型”，而且它被用来指定Annotation的RetentionPolicy属性。
    6. @Target      -- @Target只能被用来标注“Annotation类型”，而且它被用来指定Annotation的ElementType属性。
    7. @SuppressWarnings -- @SuppressWarnings 所标注内容产生的警告，编译器会对这些警告保持静默。SuppressWarnings 常用的关键字的表格。
        1. deprecation  -- 使用了不赞成使用的类或方法时的警告
        2. unchecked    -- 执行了未检查的转换时的警告，例如当使用集合时没有用泛型 (Generics) 来指定集合保存的类型。
        3. fallthrough  -- 当 Switch 程序块直接通往下一种情况而没有 Break 时的警告。
        4. path         -- 在类路径、源文件路径等中有不存在的路径时的警告。
        5. serial       -- 当在可序列化的类上缺少 serialVersionUID 定义时的警告。
        6. finally      -- 任何 finally 子句不能正常完成时的警告。
        7. all          -- 关于以上所有情况的警告。
    8. 
        ```java
        @Documented @Retention(RetentionPolicy.RUNTIME) public @interface Deprecated {}
        @Documented @Retention(RetentionPolicy.RUNTIME) @Target(ElementType.ANNOTATION_TYPE) public @interface Inherited {}
        @Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE}) @Retention(RetentionPolicy.SOURCE) public @interface SuppressWarnings { String[] value(); }  // 使用示例: @SuppressWarnings(value={"deprecation", "unchecked"})
        ```
    9. @Repeatable  -- 只有使用了@Repeatable的注解才可以在一个元素上多次修饰，如 @Repeatable(MyTest.class) public @interface MyTest {}
4. 

## 反射

[Java 反射 图](http://www.xwood.net/_site_domain_/_root/5870/5874/t_c276566.html) ../images/java/reflect/reflect.png
[](https://blog.csdn.net/HiGson/article/details/54934887)
[我眼中的Java-Type体系(2)1.ParameterizedType2.GenericArrayType3.TypeVariable4.Class5.WildcardType](https://cloud.tencent.com/developer/article/1121268-)

0. 基本描述
    1. Annotation: 所有注解的父接口
    2. AnnotatedElement: 表示被注解修饰的元素
    3. Type: ??? 表示类型
        1. ParameterizedType: 表示一种参数化的类型，比如Collection<?>，可以通过getActualTypeArguments获取?代表的具体类型
        2. TypeVariable: 表示泛型类型
        3. GenericArrayType: 表示一种元素类型是参数化类型或者类型变量的数组类型
        4. WildcardType: 代表一种通配符类型表达式，比如?, ? extends Number, ? super Integer【wildcard是一个单词：就是“通配符”】
        5. Class
    4. AnnotatedType: ??? 表示注解类型吗???
    5. GenericDeclaration: 表示可能使用了泛型的元素
    6. Member: 表示成员变量
    7. AccessibleObject: 表示可访问的元素
    8. Executable: 表示可执行的元素
    9. Parameter: 表示传参
1. 辅助
    1. Annotation 接口
        1. equals | hashCode | toString
        2. Class<? extends Annotation> annotationType();  // 因为我们获取所有 Annotation 时是不清楚他们的类型的，只能依赖这个
    2. AnnotatedElement 接口
        1. default boolean isAnnotationPresent(Class<? extends Annotation> annotationClass)  // 是否被指定的注解修饰
        2. Annotation[] getAnnotations();
        3. Annotation[] getDeclaredAnnotations();
        4. <T extends Annotation> T getAnnotation(Class<T> annotationClass);
        5. default <T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)
        6. default <T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)
        7. default <T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)
    3. Type 接口: default String getTypeName()
    4. GenericDeclaration 接口: extends AnnotatedElement
        1. public TypeVariable<?>[] getTypeParameters();  // Class中可以用于返回泛型类型，如 ArrayList.class.getTypeParameters() 返回 TypeVariable 类型数据且 getName 方法返回值是 E 。
    5. TypeVariable<D extends GenericDeclaration> 接口: extends Type, AnnotatedElement
        1. Type[] getBounds();  // ArrayList.class.getTypeParameters()[0].getBounds()[0] ==> java.lang.Object
        2. AnnotatedType[] getAnnotatedBounds();
        3. String getName();  // ArrayList.class.getTypeParameters()[0].getName() ==> "E"
        4. D getGenericDeclaration();  // ArrayList.class.getTypeParameters()[0].getGenericDeclaration() ==> class java.util.ArrayList
    6. Member 接口: 
        1. public static final int PUBLIC = 0, DECLARED = 1;
        2. public Class<?> getDeclaringClass(); public String getName(); public int getModifiers(); public boolean isSynthetic();
    7. AccessibleObject 类: implements AnnotatedElement
        1. public static void setAccessible(AccessibleObject[] array, boolean flag);
        2. public void setAccessible(boolean flag);
        3. public boolean isAccessible();
        4. // AnnotatedElement 内的实现方法(该类基本没实现，都是使用原生的)
    8. Executable 抽象类: extends AccessibleObject implements Member, GenericDeclaration
        1. // Member 的抽象方法，没实现
        2. // GenericDeclaration 的抽象方法，没实现
        3. 传参相关: 
            1. public int getParameterCount();
            2. public Type[] getGenericParameterTypes();
            3. public Parameter[] getParameters();
            4. public abstract Annotation[][] getParameterAnnotations();
            5. public AnnotatedType[] getAnnotatedParameterTypes();
        4. 属性相关: 
            1. public boolean isSynthetic();
            2. public boolean isVarArgs();
            3. public abstract String toGenericString();
        5. 异常相关: 
            1. public abstract Class<?>[] getExceptionTypes();
            2. public Type[] getGenericExceptionTypes();
            3. public AnnotatedType[] getAnnotatedExceptionTypes();
        6. 返回类型、Receiver类型 ???
            1. public abstract AnnotatedType getAnnotatedReturnType();
            2. public AnnotatedType getAnnotatedReceiverType();  // ???
    9. AnnotatedType 接口: extends AnnotatedElement
        1. public Type getType();
    10. Parameter 类: implements AnnotatedElement
        2. public Executable getDeclaringExecutable();
        3. public int getModifiers();
        4. public String getName();
        5. public String toString();
        6. public Type getParameterizedType();
        7. public Class<?> getType();
        8. public AnnotatedType getAnnotatedType();
        1. public boolean isNamePresent();  // ???
        9. public boolean isImplicit();  // ???
        10. public boolean isSynthetic();
        11. public boolean isVarArgs();  // 是否是可变参数
        12. // AnnotatedElement 的实现
2. **Modifier**
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
3. **Class** 类: implements GenericDeclaration, Type, AnnotatedElement, Serializable
    1. 属性判断
        ```java
        public native boolean isInterface();
        public native boolean isArray();
        public native boolean isPrimitive();  // 是否是基本类型
        public boolean isEnum();  // public T[] getEnumConstants()
        public boolean isAnnotation();
        public boolean isSynthetic();
        public boolean isAnonymousClass();  // 是否是匿名类
        public boolean isLocalClass();
        public boolean isMemberClass();
        public native int getModifiers();
        ```
    2. 类基本属性
        ```java
        String toString();  // "class java.util.ArrayList" | "interface java.util.Map"
        String toGenericString();  // "public class java.util.ArrayList<E>" | "public abstract interface java.util.Map<K,V>"
        String getName();  // "java.lang.String"
        String getSimpleName();  // "String"
        public String getCanonicalName();
        ```
    3. 加载资源
        ```java
        public static Class<?> forName(String className);
        public static Class<?> forName(String name, boolean initialize, ClassLoader loader);
        ClassLoader getClassLoader();  // 获取该类的类加载器
        InutStream getResourceAsStream(String name);  // 用指定名查找资源。与 URL getResource(String name); 方法类似
            // Class.getResourceAsStream(String path): path不以'/'开头时默认是从此类所在的包下取资源，以'/'开头则是从ClassPath根下获取。该方法只是通过path构造一个绝对路径，最终还是由ClassLoader获取资源。
            // Class.getClassLoader.getResourceAsStream(String path): 默认则是从ClassPath根下获取，path不能以'/'开头，最终是由ClassLoader获取资源。
            // ServletContext.getResourceAsStream(String path): 默认从WebAPP根目录下取资源，Tomcat下path是否以'/'开头无所谓。
        ```
    4. 类型转换、判断
        ```java
        public T newInstance();
        public T cast(Object);  // 强制类型转换
        public <U> Class<? extends U> asSubclass(Class<U> clazz);  // 变为子类
        public native boolean isInstance(Object obj);
        public native boolean isAssignableFrom(Class<?> cls);  // List.class.isAssignableFrom(ArrayList.class) ==> true
        ```
    5. 继承、实现相关
        ```java
        public native Class<? super T> getSuperclass();  // class Temp2 extends ArrayList<Integer> {}; Temp2.class.getSuperclass() ==> class java.util.ArrayList
        public Type getGenericSuperclass();  // Temp2.class.getGenericSuperclass() ==> java.util.ArrayList<java.lang.Integer>
        public Class<?>[] getInterfaces();
        public Type[] getGenericInterfaces();  // 与 getGenericSuperclass 类似
        public Package getPackage();
        public TypeVariable<Class<T>>[] getTypeParameters();
        public native Class<?> getComponentType();  // (new int[]{1, 2, 3}).getClass().getComponentType() ==> int | new ArrayList<Integer>().getClass().getComponentType() ==> null
        ```
    6. 判断类定义位置
        ```java
        public Method getEnclosingMethod();  // 该类是在哪个方法中定义的，比如方法中定义的匿名内部类
        public Constructor getEnclosingConstructor();  // 该类是在哪个构造函数中定义的，比如构造方法中定义的匿名内部类
        public Class getEnclosingClass();  // 该类是在那个类中定义的，比如直接定义的内部类或匿名内部类
        public Class<?> getDeclaringClass();  // 获取当前类定义所在的类
        ```
    7. 获取类内部定义
        ```java
        public Field[] getDeclaredFields();  // 获取只在当前类中声明或者重写的成员。比如当前类中定义的内部类、构造函数、成员变量、方法。
        public Field getDeclaredField(String name);
        public Method[] getDeclaredMethods();
        public Method getDeclaredMethod(String name, Class<?>... parameterTypes);
        public Constructor<?>[] getDeclaredConstructors();
        public Constructor<T> getDeclaredConstructor(Class<?>... parameterTypes);
        public Class<?>[] getDeclaredClasses();
        ```
    8. 获得类public定义
        ```java
        public Field[] getFields();
        public Field getField(String name);
        public Method[] getMethods();
        public Method getMethod(String name, Class<?>... parameterTypes);
        public Constructor<?>[] getConstructors();
        public Constructor<T> getConstructor(Class<?>... parameterTypes)
        public Class<?>[] getClasses();
        ```
    9. 注解相关
        ```java
        // AnnotatedElement的实现
        public AnnotatedType getAnnotatedSuperclass();
        public AnnotatedType[] getAnnotatedInterfaces();
        ```
    10. other
        ```java
        public String getTypeName();
        public boolean desiredAssertionStatus();
        ```
4. **Field** 类: extends AccessibleObject implements Member
    1. 基本属性
        ```java
        public Class<?> getType();  // 字段类型
        public Type getGenericType();  // ???
        public boolean isEnumConstant();
        public String toGenericString();
        ```
    2. get: get/getBoolean/getByte/getChar/getShort/getInt/getLong/getFloat/getDouble
    3. set: set/setBoolean/setByte/setChar/setShort/setInt/setLong/setFloat/setDouble
    4. AnnotatedElement 的基本实现
5. **Constructor** 类: extends Executable
    1. // Member 中的基础实现
        ```java
        public Class<T> getDeclaringClass();
        public String getName();
        public int getModifiers();
        ```
    2. // GenericDeclaration 中的基础实现: public TypeVariable<Constructor<T>>[] getTypeParameters();
    3. // Executable 中的基础实现
        ```java
        public int getParameterCount();
        public Class<?>[] getParameterTypes();
        public Type[] getGenericParameterTypes();
        public Annotation[][] getParameterAnnotations();
        public Class<?>[] getExceptionTypes();
        public Type[] getGenericExceptionTypes();
        public boolean isSynthetic();
        public boolean isVarArgs();
        public String toGenericString();
        public AnnotatedType getAnnotatedReturnType();
        public AnnotatedType getAnnotatedReceiverType();
        ```
    4. others
        ```java
        public T newInstance(Object ... initargs);
        ```
6. **Method** 类: extends Executable
    1. // Member 中的基础实现
        ```java
        public Class<T> getDeclaringClass();
        public String getName();
        public int getModifiers();
        ```
    2. // GenericDeclaration 中的基础实现: public TypeVariable<Constructor<T>>[] getTypeParameters();
    3. // Executable 中的基础实现
        ```java
        public int getParameterCount();
        public Class<?>[] getParameterTypes();
        public Type[] getGenericParameterTypes();
        public Annotation[][] getParameterAnnotations();
        public Class<?>[] getExceptionTypes();
        public Type[] getGenericExceptionTypes();
        public boolean isVarArgs();
        public boolean isSynthetic();
        public String toGenericString();
        public AnnotatedType getAnnotatedReturnType();
        ```
    4. 返回类型
        ```java
        public Type getGenericReturnType();
        public Class<?> getReturnType();
        ```
    5. 调用: public Object invoke(Object obj, Object... args)
    6. 属性相关: 
        ```java
        public boolean isBridge();
        public boolean isVarArgs();
        public boolean isSynthetic();
        public boolean isDefault();
        ```
    7. others
        ```java
        public Object getDefaultValue();
        ```
7. **Array** 类: 
    1. 新实例
        ```java
        public static Object newInstance(Class<?> componentType, int length);  // 一维
        public static Object newInstance(Class<?> componentType, int... dimensions);  // 多维
        ```
    2. 长度: public static native int getLength(Object array);
    3. get: get/getBoolean/getByte/getChar/getShort/getInt/getLong/getFloat/getDouble
    4. set: set/setBoolean/setByte/setChar/setShort/setInt/setLong/setFloat/setDouble
8. **Package** 类: implements AnnotatedElement
    1. 基本属性
        ```java
        public String getName();
        public String getSpecificationTitle();
        public String getSpecificationVersion();
        public String getSpecificationVendor();
        public String getImplementationTitle();
        public String getImplementationVersion();
        public String getImplementationVendor();
        public boolean isSealed();
        public boolean isSealed(URL url);
        public boolean isCompatibleWith(String desired);
        ```
    2. 获取Package:
        ```java
        public static Package getPackage(String name);
        public static Package[] getPackages();
        static Package getPackage(Class<?> c);
        ```
    3. // AnnotatedElement 的基本实现
9. **Proxy** 类: ../../java/source/java/lang/reflect/Proxy.java
    1. 相关接口 InvocationHandler:
        1. public Object invoke(Object proxy, Method method, Object[] args);
    2. 

## 工具类

0. others
    1. java.util.function.Supplier<T> 接口
        1. T get();
    2. java.lang.Comparable<T> 接口
        1. public int compareTo(T o);  // 必须保证 sgn(x.compareTo(y)) = -sgn(y.compareTo(x)); (x.compareTo(y)>0 && y.compareTo(z)>0) ==> x.compareTo(z)>0 && x.compareTo(y)==0 ==> sgn(x.compareTo(z)) == sgn(y.compareTo(z)), for all z; 并强烈推荐 (x.compareTo(y)==0) == (x.equals(y))
    3. java.util.Comparator<T> 抽象类
        1. 
    4. java.util.DualPivotQuicksort default final类 [新的快速排序算法: 《Dual-Pivot QuickSort》阅读笔记](https://www.jianshu.com/p/2c6f79e8ce6e) [为什么快速排序在数组的情况下比归并排序快](https://blog.csdn.net/love_fdu_llp/article/details/52288171)
        1. private static final int MAX_RUN_COUNT = 67; private static final int MAX_RUN_LENGTH = 33;
        2. private static final int QUICKSORT_THRESHOLD = 286; /* 如果数组长度低于286，使用Dual快排比归并更快 */
        3. private static final int INSERTION_SORT_THRESHOLD = 47; /* 如果数组长度低于47，则插入排序优先 */
        4. private static final int COUNTING_SORT_THRESHOLD_FOR_BYTE = 29; /* 如果byte数组长度大于29，则计数排序优于插入排序 */
        5. private static final int COUNTING_SORT_THRESHOLD_FOR_SHORT_OR_CHAR = 3200; /* 如果short/char数组长度大于此值，计数排序优于快排 */
        6. static void sort(int[] a, int left, int right, int[] work, int workBase, int workLen); private static void sort(int[] a, int left, int right, boolean leftmost);
        7. 还有其他版本的，如 sort(long[] a, ...); 包括byte/char/short/long/float/double/
    5. java.util.TimSort<T> 类 [Timsort——自适应、稳定、高效排序算法](https://blog.csdn.net/sinat_35678407/article/details/82974174)
        1. private static final int MIN_MERGE = 32;  // 数组长度低于32，则进行二分查找插入排序
        2. private final T[] a;  // 进行排序的数组
        3. private final Comparator<? super T> c;  // 进行排序的比较器
        4. private static final int  MIN_GALLOP = 7;  // 进入 gallop mode 的默认的最小比较次数(当一个数组中连续min_gallop个数字比另一个数组第一个数小时，就应该一直读到比另一个数组第一个数字大时，将这些数字一次性拷贝到新合并数组中，然后再重新开始)，如果二分效率比它高，就会进入二分。
        5. private int minGallop = MIN_GALLOP;  // 可以动态调整的 gallop_mode 数字
        6. private static final int INITIAL_TMP_STORAGE_LENGTH = 256;  // tmp数组(用于合并的临时存储空间)的初始长度
        7. private T[] tmp; private int tmpBase; private int tmpLen;
        8. private int stackSize = 0; private final int[] runBase; private final int[] runLen; 多少个run，run的开始位置，run的长度
        9. private TimSort(T[] a, Comparator<? super T> c, T[] work, int workBase, int workLen);
        10. static <T> void sort(T[] a, int lo, int hi, Comparator<? super T> c, T[] work, int workBase, int workLen);
            private static <T> void binarySort(T[] a, int lo, int hi, int start, Comparator<? super T> c);
            private static <T> int countRunAndMakeAscending(T[] a, int lo, int hi, Comparator<? super T> c);
            private static void reverseRange(Object[] a, int lo, int hi);
            private static int minRunLength(int n); private void pushRun(int runBase, int runLen);
            private void mergeCollapse(); private void mergeForceCollapse(); private void mergeAt(int i);
            private static <T> int gallopLeft(T key, T[] a, int base, int len, int hint, Comparator<? super T> c);
            private static <T> int gallopRight(T key, T[] a, int base, int len, int hint, Comparator<? super T> c);
            private void mergeLo(int base1, int len1, int base2, int len2); private void mergeHi(int base1, int len1, int base2, int len2);
            private T[] ensureCapacity(int minCapacity);
    6. java.util.ComparableTimSort 类
        1. 
    7. java.util.ArraysParallelSortHelpers default 类
        1. 
1. **java.util.Objects**
    1. public static boolean equals(Object a, Object b); public static boolean deepEquals(Object a, Object b);
    2. public static int hashCode(Object o); public static int hash(Object... values);
    3. public static String toString(Object o); /* 这里的nullDefault="null" */ public static String toString(Object o, String nullDefault);
    4. public static <T> int compare(T a, T b, Comparator<? super T> c);
    5. public static <T> T requireNonNull(T obj); public static <T> T requireNonNull(T obj, String message); public static boolean isNull(Object obj); public static boolean nonNull(Object obj); public static <T> T requireNonNull(T obj, Supplier<String> messageSupplier);
2. **java.util.Arrays**
    1. private static final int MIN_ARRAY_SORT_GRAN = 1 << 13;  // 执行 并行排序 的数组的最小长度，因为长度太小的通常导致内存争用，不太可能速度优化
    2. static final class NaturalOrder implements Comparator<Object>;  // compare中使用compareTo比较，是默认比较器
    3. 私有方法: 
        1. private static void rangeCheck(int arrayLength, int fromIndex, int toIndex);
    4. 排序:
        1. public static void sort(int[] a);  // 调用了 DualPivotQuicksort
        2. public static void sort(int[] a, int fromIndex, int toIndex);  // 调用了 DualPivotQuicksort 与 rangeCheck
        3. 还有其他基本类型的: byte/char/short/long/float/double
        4. public static void parallelSort(byte[] a);  // 调用了 
    5. 
3. **java.util.Collections**
4. **java.nio.file.Paths**
5. **java.nio.file.Files**
6. **java.lang.reflect.Array**
7. **java.lang.reflect.Proxy**
8. **java.util.stream.StreamSupport**
9. **java.util.zip.ZipUtils**
1. [java十六大常用工具类](https://segmentfault.com/a/1190000012419912)

## Java8 Stream

1. 创建流
    1. 从迭代到流
        ```java
        String contents = new String(Files.readAllBytes(Paths.get("alice.txt")), StandardCharsets.UTF_8);
        List<String> words = Arrays.asList(contents.split("\\PL+"));
        long count = 0; for (String w : words) if (w.length() > 12) count++;  // 等价于
        long count = words.stream().filter(w -> w.length() > 12).count();  // 等价于
        long count = words.parallelStream().filter(w -> w.length() > 12).count();  // 并行版本
        ```
2. 流的基本功能

## Java9 Module

Java9 提供了一个交互式环境，你不用再创建一个 project 或是其他的模块，就可以直接用来执行 Java 代码，所见即所得；

1. 可以动态修改正在运行中的程序，
2. 减少和Scala等语言之间的切换；
3. 方便测试。

## lucene

[lucene笔记](https://blog.csdn.net/qq_36059561/article/category/8090392/3?)
[跟我一步一步的学习lucene](https://blog.csdn.net/wuyinggui10000/article/category/3173543)
[lucene易百教程](https://www.yiibai.com/lucene/lucene_first_application.html)
[Lucene之模糊、精确、匹配、范围、多条件查询](https://blog.csdn.net/qq_30725371/article/details/81089427)
[lucene拼写检查模块](https://www.cnblogs.com/blog-zuo/p/4819983.html)
[Lucene7.2.1系列（一）快速入门](https://blog.csdn.net/qq_34337272/article/details/79764305)
[lucene学习笔记](https://zhuanlan.zhihu.com/p/33691471)
[爬虫（二）：Lucene](https://blog.csdn.net/qq_36499475/article/details/83587961)

[Java9](https://www.cnblogs.com/IcanFixIt/tag/Java%209/default.html?page=4)

[Module](https://www.cnblogs.com/IcanFixIt/p/7161615.html#top)

## ElasticSearch

[ElasticSearch系列](https://www.cnblogs.com/shaosks/category/1073135.html)

## end

[Java8~9核心功能](https://blog.csdn.net/neweastsun/column/info/14382)
[Effective Java Third Edition](https://www.cnblogs.com/IcanFixIt/tag/Effective%20Java%20Third%20Edition/)
