[HTTPS协议，SSL协议及完整交互过程](https://blog.csdn.net/dfsaggsd/article/details/50910999)
[Https的交互流程](https://blog.csdn.net/github_37855556/article/details/70231535)

[TOC]

### 1. 基础概念

#### URI

URI(统一资源标识符 Uniform Resource Identifier)包括

- **URL**(统一资源定位符 Uniform Resource Locator http://www.google.com): **scheme://host[:port#]/path/…/[?query-string][#anchor]** ，代表资源的地址信息
    - scheme: 协议(例如: http, https, ftp)
    - host: 服务器的IP地址或者域名
    - port#: 服务器的端口(如果是走协议默认端口，缺省端口80)
    - path: 访问资源的路径
    - query-string: 参数，发送给http服务器的数据
    - anchor: 锚(跳转到网页的指定锚点位置)
- **URN**(统一资源名称 Uniform Resource Name urn:isbn:0451450523)，代表某个资源独一无二的名称。举个例子来说，“JSP&Servlet学习笔记(第2版)”的国家标准书号(International Standard Book Number，ISBN)为 ISBN 978-7-302-28366-9

#### Http请求的完整流程

1. TCP三次握手
2. Web浏览器向Web服务器发送请求 Get/sample/hello.jsp HTTP/1.1
3. Web浏览器发送请求头信息如user-agent、host等关于自身的信息，最后一个空请求头代表请求头信息发送完毕，如果是Post还会继续发送请求体
4. Web服务器应答状态行信息如HTTP/1.1 200 OK
5. Web服务器发送应答头信息即关于它自身的信息和请求的文档，最后一个空白行代表应答头信息发送完毕
6. Web服务器以Content-type等应答头信息描述的格式发送用户所请求的实际数据
7. TCP四次挥手

#### 客户端HTTP请求

URL只是标识资源的位置，而HTTP是用来提交和获取资源。客户端发送一个HTTP请求到服务器的请求消息，包括以下格式: **请求行、请求头部、空行、请求数据**。
```
GET https://www.baidu.com/ HTTP/1.1
Host: www.baidu.com
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0(Windows NT 6.1; Win64; x64)AppleWebKit/537.36(KHTML, like Gecko)Chrome/60.0.3112.101 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
Accept-Encoding: gzip, deflate, br
Accept-Language: zh,zh-CN;q=0.8,ar;q=0.6,zh-TW;q=0.4
Cookie: BAIDUID=AE4D1DA6B2D6689BB8C557B3436893E3:FG=1; BIDUPSID=AE4D1DA6B2D6689BB8C557B3436893E3; PSTM=1501466227; BD_UPN=12314353; BD_CK_SAM=1; PSINO=1; H_PS_PSSID=1420_25548_21080_20929; BDORZ=B490B5EBF6F3CD402E515D22BCDA1598; BDSVRTM=0
```

#### HTTP首部

有4种类型的首部字段：通用首部字段、请求首部字段、响应首部字段和实体首部字段。

##### 常用请求报头

1. Host(主机和端口号): 对应网址URL中的Web名称和端口号，用于指定被请求资源的Internet主机和端口号，通常属于URL的一部分。
2. Connection(链接类型): 表示客户端与服务连接类型
	Client发起一个包含 Connection:keep-alive 的请求，HTTP/1.1使用 keep-alive 为默认值。
	Server收到请求后: 
		如果 Server 支持 keep-alive，回复一个包含 Connection:keep-alive 的响应，不关闭连接；
		如果 Server 不支持 keep-alive，回复一个包含 Connection:close 的响应，关闭连接。
	如果client收到包含 Connection:keep-alive 的响应，向同一个连接发送下一个请求，直到一方主动关闭连接。
	keep-alive在很多情况下能够重用连接，减少资源消耗，缩短响应时间。
	比如当浏览器需要多个文件时(比如一个HTML文件和相关的图形文件)，不需要每次都去请求建立连接。
3. Upgrade-Insecure-Requests(升级为HTTPS请求): 升级不安全的请求，意思是会在加载http资源时自动替换成https请求，
	让浏览器不再显示https页面中的http请求警报。HTTPS是以安全为目标的HTTP通道，所以在HTTPS承载的页面上不允许出现HTTP请求，
	一旦出现就是提示或报错。
4. User-Agent(浏览器名称): 是客户浏览器的名称，以后会详细讲。
5. Accept(传输文件类型): 指浏览器或其他客户端可以接受的MIME(Multipurpose Internet Mail Extensions(多用途互联网邮件扩展))
	文件类型，服务器可以根据它判断并返回适当的文件格式。
	举例: Accept: */*: 表示什么都可以接收。
		Accept: image/gif: 表明客户端希望接受GIF图像格式的资源；
		Accept: text/html: 表明客户端希望接受html文本。
		Accept: text/html, application/xhtml+xml;q=0.9, image/*;q=0.8: 表示浏览器支持的 MIME 类型分别是 html文本、
			xhtml和xml文档、所有的图像格式资源。q是权重系数，范围 0 =< q <= 1，q 值越大，请求越倾向于获得其“;”之前的
			类型表示的内容。若没有指定q值，则默认为1，按从左到右排序顺序；若被赋值为0，则用于表示浏览器不接受此内容类型。
		Text: 用于标准化地表示的文本信息，文本消息可以是多种字符集和或者多种格式的；Application: 用于传输应用程序数据或
		者二进制数据。
6. Referer(页面跳转处): 表明产生请求的网页来自于哪个URL，用户是从该 Referer 页面访问到当前请求的页面。
	这个属性可以用来跟踪Web请求来自哪个页面，是从什么网站来的等。有时候下载某网站图片，需要对应的referer，否则无法下载图
	片。那是因为人家做了防盗链，原理就是根据referer去判断是否是本网站的地址，如果不是，则拒绝，如果是，就可以下载；
7. Accept-Encoding(文件编解码格式): 指出浏览器可以接受的编码方式。编码方式不同于文件格式，它是为了压缩文件并加速文件传递速度。
	浏览器在接收到Web响应之后先解码，然后再检查文件格式，许多情形下这可以减少大量的下载时间。
	举例: Accept-Encoding:gzip;q=1.0, identity; q=0.5, *;q=0
	如果有多个Encoding同时匹配, 按照q值顺序排列，本例中按顺序支持 gzip, identity压缩编码，支持gzip的浏览器会返回经过gzip
	编码的HTML页面。如果请求消息中没有设置这个域服务器假定客户端对各种内容编码都可以接受。
8. Accept-Language(语言种类): 指出浏览器可以接受的语言种类，如en或en-us指英语，zh或者zh-cn指中文，当服务器能够提供一种以上的语言版本时要用到。
9. Accept-Charset(字符编码): 指出浏览器可以接受的字符编码。
	举例: Accept-Charset:iso-8859-1,gb2312,utf-8
		ISO8859-1: 通常叫做Latin-1。Latin-1包括了书写所有西方欧洲语言不可缺少的附加字符，英文浏览器的默认值是ISO-8859-1.
		gb2312: 标准简体中文字符集;
		utf-8: UNICODE 的一种变长字符编码，可以解决多种语言文本显示问题，从而实现应用国际化和本地化。
	如果在请求消息中没有设置这个域，缺省是任何字符集都可以接受。
10. Cookie(Cookie): 浏览器用这个属性向服务器发送Cookie。Cookie是在浏览器中寄存的小型数据体，它可以记载和服务器相关的用户
	信息，也可以用来实现会话功能，以后会详细讲。
11. Content-Type(POST数据类型): POST请求里用来表示的内容类型。
	举例: Content-Type = Text/XML; charset=gb2312: 
	指明该请求的消息体中包含的是纯文本的XML类型的数据，字符编码采用“gb2312”。
12. Content-length(数据长度)

##### 通用首部字段

首部字段名 | 说明
:- |:-
Cache-Control | 控制缓存的行为
Connection | 控制不再转发给代理的首部字段、管理持久连接
Date | 创建报文的日期时间
Warning | 错误通知
Upgrade | 升级为其他协议
Transfer-Encoding | 指定报文主体的传输编码方式
**Via** | 代理服务器的相关信息
**Pragma** | 报文指令
**Trailer** | 报文末端的首部一览

##### 请求首部字段

首部字段名 | 说明
:- |:-
Accept | 用户代理可处理的媒体类型
Accept-Charset | 优先的字符集
Accept-Encoding | 优先的内容编码
Accept-Language | 优先的语言(自然语言)
If-Match | 比较实体标记(ETag)
If-Modified-Since | 比较资源的更新时间
If-None-Match | 比较实体标记(与 If-Match 相反)
If-Unmodified-Since | 比较资源的更新时间(与 If-Modified-Since 相反)
If-Range | 资源未更新时发送实体 Byte 的范围请求
Host | 请求资源所在服务器
Referer | 对请求中 URI 的原始获取方
User-Agent | HTTP 客户端程序的信息
Authorization | Web 认证信息
Proxy-Authorization | 代理服务器要求客户端的认证信息
From | 用户的电子邮箱地址
Max-Forwards | 最大传输逐跳数
Range | 实体的字节范围请求
**Expect** | 期待服务器的特定行为
**TE** | 传输编码的优先级

##### 响应首部字段

首部字段名 | 说明
:- |:-
Accept-Ranges | 是否接受字节范围请求
Age | 推算资源创建经过时间
ETag | 资源的匹配信息
Location | 令客户端重定向至指定URI
Proxy-Authenticate | 代理服务器对客户端的认证信息
WWW-Authenticate | 服务器对客户端的认证信息
Retry-After | 对再次发起请求的时机要求
Server | HTTP 服务器的安装信息
Vary | 代理服务器缓存的管理信息

##### 实体首部字段

首部字段名 | 说明
:- |:-
Allow | 资源可支持的 HTTP 方法
Content-Encoding | 实体主体适用的编码方式
Content-Language | 实体主体的自然语言
Content-Length | 实体主体的大小
Content-Location | 替代对应资源的 URI
Content-MD5 | 实体主体的报文摘要
Content-Range | 实体主体的位置范围
Content-Type | 实体主体的媒体类型
Expires | 实体主体过期的日期时间
Last-Modified | 资源的最后修改日期时间

#### HTTP请求方法

1. GET: 请求指定的页面信息，并返回实体主体。
2. HEAD: 类似于get请求，只不过返回的响应中没有具体的内容，用于获取报头，主要用于确认URL的有效性以及资源更新的日期时间等。
3. POST: 向指定资源提交数据进行处理请求(例如提交表单或者上传文件)，数据被包含在请求体中。POST请求可能会导致新的资源的建立和/或已有资源的修改。
4. PUT: 从客户端向服务器传送的数据取代指定的文档的内容，不带验证机制(任何人可以上传)，不安全。
5. DELETE: 请求服务器删除指定的页面，不带验证机制。
6. PATCH: 对资源进行部分修改。PUT也可以用于修改资源，但是只能完全替代原始资源，PATCH 允许部分修改。
7. OPTIONS: 允许客户端查看服务器支持的HTTP请求方法。查询指定的URL能够支持的方法: 会返回``Allow: GET, POST, HEAD, OPTIONS``这样的内容。
8. CONNECT: HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。使用SSL(Secure Sockets Layer，安全套接层)和TLS(Transport Layer Security，传输层安全)协议把通信内容加密后经网络隧道传输。
9. TRACE: 回显服务器收到的请求，主要用于测试或诊断。服务器会将通信路径返回给客户端。通常不会使用TRACE，并且它容易受到XST攻击(Cross-Site Tracing，跨站追踪)。发送请求时，在Max-Forwards首部字段中填入数值，每经过一个服务器就会减1，当数值为0时就停止传输。

#### GET和POST比较

1. 作用: GET是从服务器上获取数据，POST是向服务器传送数据
2. 参数: GET的参数是以查询字符串出现在URL中，而POST的参数存储在实体主体中(消息长度没有限制且更隐蔽)。但POST的安全性并不更高，因为照样可以通过一些抓包工具(Fiddler)查看。<br>
	因为URL只支持ASCII码，因此GET的参数中如果存在中文等字符就需要先进行编码。例如中文会转换为%E4%B8%AD%E6%96%87，而空格会转换为%20。POST参考支持标准字符集。
3. 安全: 安全的HTTP方法不会改变服务器状态，也就是说它只是可读的。GET方法是安全的，而POST却不是，因为POST的目的是传送实体主体内容，这个内容可能是用户上传的表单数据，
	上传成功之后，服务器可能把这个数据存储到数据库中，因此状态也就发生了改变。安全的方法除了GET之外还有：HEAD、OPTIONS。不安全的方法除了POST之外还有PUT、DELETE、PATCH。
4. 幂等性: 幂等的HTTP方法，同样的请求被执行一次与连续执行多次的效果是一样的，服务器的状态也是一样的。所有的安全方法也都是幂等的。<br>
	在正确实现的条件下，GET，HEAD，PUT和DELETE等方法都是幂等的，而POST方法不是。
	- GET /pageX HTTP/1.1 是幂等的，连续调用多次，客户端接收到的结果都是一样的：
	```
	GET /pageX HTTP/1.1
	GET /pageX HTTP/1.1
	GET /pageX HTTP/1.1
	```
	- POST /add_row HTTP/1.1 不是幂等的，如果调用多次，就会增加多行记录：
	```
	POST /add_row HTTP/1.1   -> Adds a 1nd row
	POST /add_row HTTP/1.1   -> Adds a 2nd row
	POST /add_row HTTP/1.1   -> Adds a 3rd row
	```
	- DELETE /idX/delete HTTP/1.1 是幂等的，即便不同的请求接收到的状态码不一样：
	```
	DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
	DELETE /idX/delete HTTP/1.1   -> Returns 404 as it just got deleted
	DELETE /idX/delete HTTP/1.1   -> Returns 404
	```
5. 可缓存: 如果要对响应进行缓存，需要满足以下条件
	- 请求报文的 HTTP 方法本身是可缓存的，包括 GET 和 HEAD，但是 PUT 和 DELETE 不可缓存，POST 在多数情况下不可缓存的。
	- 响应报文的状态码是可缓存的，包括：200, 203, 204, 206, 300, 301, 404, 405, 410, 414, and 501。
	- 响应报文的 Cache-Control 首部字段没有指定不进行缓存。
6. XMLHttpRequest: XMLHttpRequest是一个API，它为客户端提供了在客户端和服务器之间传输数据的功能。它提供了一个通过URL来获取数据的简单方式，并且不会使整个页面刷新。
	这使得网页只更新一部分页面而不会打扰到用户。XMLHttpRequest在AJAX中被大量使用。在使用XMLHttpRequest的POST方法时，浏览器会先发送Header再发送Data。
	但并不是所有浏览器会这么做，例如火狐就不会。而GET方法Header和Data会一起发送。

#### HTTP响应状态码

- 1xx: 消息
    - 100 Continue 服务器仅接收到部分请求，但是一旦服务器并没有拒绝该请求，客户端应该继续发送其余的请求
    - 101 Switching Protocols 服务器转换协议: 服务器将遵从客户的请求转换到另外一种协议
- 2xx: 成功
    - 200 OK 请求成功(其后是对GET和POST请求的应答文档)
    - 201 Created 请求被创建完成，同时新的资源被创建
    - 202 Accepted 供处理的请求已被接受，但是处理未完成。
	- 204 No Content 请求经成功处理，但返回的响应报文不包含实体的主体部分。一般在只需要从客户端往服务器发送信息，而不需要返回数据时使用
	- 206 Partial Content 表示客户端进行了范围请求，响应报文包含由 Content-Range 指定范围的实体内容
- 3xx: 重定向
    - 300 Multiple Choices 多重选择。链接列表。用户可以选择某链接到达目的地。最多允许五个地址
    - 301 Moved Permanently 所请求的页面已经转移至新的url
    - 302 Moved Temporarily 所请求的页面已经临时转移至新的url
	- 303 See Other 和302有着相同的功能，但是303明确要求客户端应该采用GET方法获取资源
	- 注：虽然 HTTP 协议规定 301、302 状态下重定向时不允许把 POST 方法改成 GET 方法，但是大多数浏览器都会在 301、302 和 303 状态下的重定向把 POST 方法改成 GET 方法。
	- 304 Not Modified 如果请求报文首部包含一些条件，如If-Match，If-Modified-Since，If-None-Match，If-Range，If-Unmodified-Since，如果不满足条件，则服务器会返回304状态码
	- 307 Temporary Redirect 临时重定向，与 302 的含义类似，但是 307 要求浏览器不会把重定向请求的 POST 方法改成 GET 方法
- 4xx: 客户端错误
    - 400 Bad Request 服务器未能理解请求
    - 401 Unauthorized 被请求的页面需要用户名和密码
    - 403 Forbidden 对被请求页面的访问被禁止
    - 404 Not Found 服务器无法找到被请求的页面
- 5xx: 服务器错误
    - 500 Internal Server Error 请求未完成。服务器遇到不可预知的情况
    - 501 Not Implemented 请求未完成。服务器不支持所请求的功能
    - 502 Bad Gateway 请求未完成。服务器从上游服务器收到一个无效的响应    
	- 503 Service Unavailable 服务器暂时处于超负载或正在进行停机维护，现在无法处理请求

### 2. 具体应用

#### 连接管理

- 非持续连接(短连接)
- 持续连接(长连接)
- 管道连接(流水线)

<div class="align"><img alt="连接类型" src="https://github.com/CyC2018/CS-Notes/raw/master/docs/notes/pics/HTTP1_x_Connections.png"/></div>

当浏览器访问一个包含多张图片的 HTML 页面时，除了请求访问 HTML 页面资源，还会请求图片资源。如果每进行一次 HTTP 通信就要新建一个 TCP 连接，那么开销会很大。长连接只需要建立一次 TCP 连接就能进行多次 HTTP 通信。

从 HTTP/1.1 开始默认是长连接的，如果要断开连接，需要由客户端或者服务器端提出断开，使用 Connection : close；
在 HTTP/1.1 之前默认是短连接的，如果需要使用长连接，则使用 Connection : Keep-Alive。

默认情况下，HTTP 请求是按顺序发出的，下一个请求只有在当前请求收到响应之后才会被发出。由于会受到网络延迟和带宽的限制，在下一个请求被发送到服务器之前，可能需要等待很长时间。流水线是在同一条长连接上发出连续的请求，而不用等待响应返回，这样可以避免连接延迟。

#### Cookie和Session

服务器和客户端的交互仅限于请求/响应过程，结束之后便断开，在下一次请求时，服务器会认为新的客户端。
为了维护他们之间的链接，让服务器知道这是前一个用户发送的请求，必须在一个地方保存客户端的信息。

- Cookie: 在客户端保持HTTP状态信息 会话Cookie保存在内存中 持久Cookie保存在硬盘中
    1. 第一次访问还不存在目标服务器的Cookie
    2. 第一次响应 set-cookie: name=value; 让浏览器写入该父母器的Cookie到一个Cookie保存文本中
    3. 后续访问该服务器时会自带该Cookie: cookie: name=value&...
- Session: 在服务器端保持HTTP状态信息(session cookie针对某一次会话而言，会话结束session cookie也就随着消失了，而persistent cookie只是存在于客户端硬盘上的一段文本)
    1. 第一次访问还不存在目标服务器关于sessionId的Cookie
    2. 第一次响应 set-cookie: jsessionid: ...
    3. 后续访问该服务器时会自带该sessionId: cookie: jessionid: ...
- Cookie用途:
	- 会话状态管理(如用户登录状态、购物车、游戏分数或其它需要记录的信息)
	- 个性化设置(如用户自定义设置、主题等)
	- 浏览器行为跟踪(如跟踪分析用户行为等)
- 作用域:
	- Domain标识指定了哪些主机可以接受Cookie。如果不指定，默认为当前文档的主机(不包含子域名)。如果指定了Domain，则一般包含子域名。
	例如，如果设置Domain=mozilla.org，则Cookie也包含在子域名中(如developer.mozilla.org)。
	- Path标识指定了主机下的哪些路径可以接受Cookie(该URL路径必须存在于请求URL中)。以字符%x2F("/")作为路径分隔符，子路径也会被匹配。
	例如，设置 Path=/docs，则以下地址都会匹配：/docs /docs/Web/ /docs/Web/HTTP
- JavaScript: 通过 document.cookie 属性可创建新的 Cookie，也可通过该属性访问非 HttpOnly 标记的 Cookie。
	```js
	document.cookie = "yummy_cookie=choco";
	document.cookie = "tasty_cookie=strawberry";
	console.log(document.cookie);
	```
- HttpOnly: 标记为HttpOnly的Cookie不能被JavaScript脚本调用。跨站脚本攻击(XSS)常常使用JavaScript的document.cookie API窃取用户的Cookie信息，因此使用HttpOnly标记可以在一定程度上避免XSS攻击。
	```Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly```
- Secure: 标记为Secure的Cookie只能通过被HTTPS协议加密过的请求发送给服务端。但即便设置了Secure标记，敏感信息也不应该通过Cookie传输，因为Cookie有其固有的不安全性，Secure标记也无法提供确实的安全保障。
- 浏览器禁用Cookie: 此时无法使用Cookie来保存用户信息，只能使用Session。另外还能使用URL重写技术，将SessionID作为URL的参数进行传递。
- Cookie与Session选择
	- Cookie只能存储ASCII码字符串，而Session则可以存取任何类型的数据，因此在考虑数据复杂性时首选Session；
	- Cookie存储在浏览器中，容易被恶意查看。如果非要将一些隐私数据存在Cookie中，可以将Cookie值进行加密，然后在服务器进行解密；
	- 对于大型网站，如果用户所有的信息都存储在Session中，那么开销是非常大的，因此不建议将所有的用户信息都存储到Session中。

#### 缓存

- 优点: 缓解服务器压力；降低客户端获取资源的延迟：缓存通常位于内存中，读取速度更快。并且缓存在地理位置上也有可能比源服务器来得近，如浏览器缓存。
- 实现: 让代理服务器进行缓存；让客户端浏览器进行缓存。
- Cache-Control: HTTP/1.1 通过 Cache-Control 首部字段来控制缓存。
	- 禁止缓存 no-store 规定不能对请求或响应的任何一部分进行缓存。Cache-Control: no-store
	- 强制确认缓存 no-cache 规定缓存服务器需要先向源服务器验证缓存资源的有效性，只有当缓存资源有效才将能使用该缓存对客户端的请求进行响应。
	- 私有缓存 private 规定了将资源作为私有缓存，只能被单独用户所使用，一般存储在用户浏览器中。
	- 公有缓存 public 规定了将资源作为公共缓存，可以被多个用户所使用，一般存储在代理服务器中。
	- 缓存过期机制 max-age 出现在请求报文中，并且缓存资源的缓存时间小于该指令指定的时间，那么就能接受该缓存；出现在响应报文中，表示缓存资源在缓存服务器中保存的时间。Expires 首部字段也可以用于告知缓存服务器该资源什么时候会过期。
		- 在HTTP/1.1中，会优先处理max-age指令；
		- 在HTTP/1.0中，max-age指令会被忽略掉。
- 验证:
	- 需要先了解ETag首部字段的含义，它是资源的唯一标识。URL不能唯一表示资源，例如http://www.google.com/有中文和英文两个资源，只有ETag才能对这两个资源进行唯一标识。``ETag: "82e22293907ce725faf67773957acd12"``。
	- 可以将缓存资源的ETag值放入If-None-Match首部，服务器收到该请求后，判断缓存资源的ETag值和资源的最新ETag值是否一致，如果一致则表示缓存资源有效，返回304 Not Modified。
	- Last-Modified首部字段也可以用于缓存验证，它包含在源服务器发送的响应报文中，指示源服务器对资源的最后修改时间。但是它是一种弱校验器，因为只能精确到一秒，
		所以它通常作为ETag的备用方案。如果响应首部字段里含有这个信息，客户端可以在后续的请求中带上If-Modified-Since来验证缓存。
		服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回，状态码为200OK。如果请求的资源从那时起未经修改，
		那么返回一个不带有消息主体的304 Not Modified响应。

#### 内容协商、编码

通过内容协商返回最合适的内容，例如根据浏览器的默认语言选择返回中文界面还是英文界面。

- 类型
	- 服务端驱动型: 客户端设置特定的HTTP首部字段，例如Accept、Accept-Charset/Encoding/Language，服务器根据这些字段返回特定的资源。但
		服务器很难知道客户端浏览器的全部信息；
		客户端提供的信息相当冗长(HTTP/2协议的首部压缩机制缓解了这个问题)，并且存在隐私风险(HTTP指纹识别技术)；
		给定的资源需要返回不同的展现形式，共享缓存的效率会降低，而服务器端的实现会越来越复杂。
	- 代理驱动型: 服务器返回300 Multiple Choices或者406 Not Acceptable，客户端从中选出最合适的那个资源。
- Vary: 在使用内容协商的情况下，只有当缓存服务器中的缓存满足内容协商条件时，才能使用该缓存，否则应该向源服务器请求该资源。<br>
	例如，一个客户端发送了一个包含Accept-Language首部字段的请求之后，源服务器返回的响应包含Vary:Accept-Language内容，缓存服务器对这个响应进行缓存之后，在客户端下一次访问同一个URL资源，并且Accept-Language与缓存中的对应的值相同时才会返回该缓存。

内容编码将实体主体进行压缩，从而减少传输的数据量。常用的内容编码有：gzip、compress、deflate、identity。<br>
浏览器发送Accept-Encoding首部，其中包含有它所支持的压缩算法，以及各自的优先级。服务器则从中选择一种，使用该算法对响应的消息主体进行压缩，
并且发送Content-Encoding首部来告知浏览器它选择了哪一种算法。由于该内容协商过程是基于编码类型来选择资源的展现形式的，在响应的Vary首部至少要包含Content-Encoding。

#### 范围请求

如果网络出现中断，服务器只发送了一部分数据，范围请求可以使得客户端只请求服务器未发送的那部分数据，从而避免服务器重新发送所有数据。

1. Range: 请求首部字段Range指定请求的范围。请求成功的话服务器返回的响应包含 206 Partial Content 状态码。
	```
	GET /z4d4kWk.jpg HTTP/1.1
	Host: i.imgur.com
	Range: bytes=0-1023
	```
	```
	HTTP/1.1 206 Partial Content
	Content-Range: bytes 0-1023/146515
	Content-Length: 1024
	...
	(binary content)
	```
2. Accept-Ranges: 响应首部字段Accept-Ranges告知客户端是否能处理范围请求，可以处理使用bytes，否则使用none。
3. 响应状态码
	- 在请求成功的情况下，服务器会返回 206 Partial Content 状态码。
	- 在请求的范围越界的情况下，服务器会返回 416 Requested Range Not Satisfiable 状态码。
	- 在不支持范围请求的情况下，服务器会返回 200 OK 状态码。

#### 通信数据转发

1. 代理: 代理服务器接受客户端的请求，并且转发给其它服务器。使用代理的主要目的是: 缓存; 负载均衡; 网络访问控制; 访问日志记录;<br>
	代理服务器分为正向代理和反向代理两种：
	- 用户察觉得到正向代理的存在。<div class="align"><img alt="正向代理" src="https://github.com/CyC2018/CS-Notes/raw/master/docs/notes/pics/a314bb79-5b18-4e63-a976-3448bffa6f1b.png"/></div>
	- 而反向代理一般位于内部网络中，用户察觉不到。<div class="align"><img alt="反向代理" src="https://github.com/CyC2018/CS-Notes/raw/master/docs/notes/pics/2d09a847-b854-439c-9198-b29c65810944.png"/></div>
2. 网关: 与代理服务器不同的是，网关服务器会将 HTTP 转化为其它协议进行通信，从而请求其它非 HTTP 服务器的服务。
3. 隧道: 使用 SSL 等加密手段，在客户端和服务器之间建立一条安全的通信线路。

#### 其他

1. **分块传输编码**: Chunked Transfer Coding，可以把数据分割成多块，让浏览器逐步显示页面。
2. **多部分对象集合**: 一份报文主体内可含有多种类型的实体同时发送，每个部分之间用boundary字段定义的分隔符进行分隔，每个部分都可以有首部字段。例如，上传多个表单时可以使用如下方式：
	```
	Content-Type: multipart/form-data; boundary=AaB03x

	--AaB03x
	Content-Disposition: form-data; name="submit-name"

	Larry
	--AaB03x
	Content-Disposition: form-data; name="files"; filename="file1.txt"
	Content-Type: text/plain

	... contents of file1.txt ...
	--AaB03x--
	```
3. **虚拟主机**: HTTP/1.1使用虚拟主机技术，使得一台服务器拥有多个域名，并且在逻辑上可以看成多个服务器。

### 3. HTTPS

#### HTTP与HTTPS

- HTTP协议(HyperText Transfer Protocol，超文本传输协议): 是一种发布和接收HTML页面的方法。
- HTTPS(Hypertext Transfer Protocol over Secure Socket Layer): 简单讲是HTTP的安全版，在HTTP下加入SSL层。
- SSL(Secure Sockets Layer 安全套接层): 主要用于Web的安全传输协议，在传输层对网络连接进行加密，保障在Internet上数据传输的安全。

HTTP有以下安全性问题：使用明文进行通信；不验证通信方的身份；无法证明报文的完整性，报文有可能遭篡改。<br>
HTTPS并不是新协议，而是让HTTP先和SSL(Secure Sockets Layer)通信，再由SSL和TCP通信，也就是说HTTPS使用了隧道进行通信。
通过使用SSL，HTTPS具有了加密（防窃听）、认证（防伪装）和完整性保护（防篡改）。<br>
HTTPS的缺点: 因为需要进行加密解密等过程，因此速度会更慢；需要支付证书授权的高额费用。

#### 加密

1. 对称密钥加密(Symmetric-Key Encryption)，加密和解密使用同一密钥。优点：运算速度快；缺点：无法安全地将密钥传输给通信方。
2. 非对称密钥加密，又称公开密钥加密(Public-Key Encryption)。公开密钥人人都可以获得，发送方可以使用公开密钥进行加密，接收方收到通信内容后使用私有密钥解密。<br>
	非对称密钥除了用来加密，还可以用来进行签名。因为私有密钥无法被其他人获取，因此通信发送方使用其私有密钥进行签名，通信接收方使用发送方的公开密钥对签名进行解密，就能判断这个签名是否正确。优点：可以更安全地将公开密钥传输给通信发送方；缺点：运算速度慢。
3. HTTPS采用的加密方式: 使用非对称密钥加密用于传输对称密钥来保证传输过程的安全性，之后使用对称密钥加密进行通信来保证通信过程的效率。(下图中的Session Key就是对称密钥)<div class="align"><img alt="混合的加密机制" src="https://github.com/CyC2018/CS-Notes/raw/master/docs/notes/pics/How-HTTPS-Works.png"/></div>

#### 认证

通过使用**证书**来对通信方进行认证。<br>数字证书认证机构(CA，CertificateAuthority)是客户端与服务器双方都可信赖的第三方机构。<br>
服务器的运营人员向CA提出公开密钥的申请，CA在判明提出申请者的身份之后，会对已申请的公开密钥做数字签名，然后分配这个已签名的公开密钥，并将该公开密钥放入公开密钥证书后绑定在一起。<br>
进行HTTPS通信时，服务器会把证书发送给客户端。客户端取得其中的公开密钥之后，先使用数字签名进行验证，如果验证通过，就可以开始通信了。

#### 完整性保护

SSL提供报文摘要功能来进行完整性保护。<br>HTTP也提供了MD5报文摘要功能，但不是安全的。例如报文内容被篡改之后，同时重新计算MD5的值，通信接收方是无法意识到发生了篡改。<br>
HTTPS的报文摘要功能之所以安全，是因为它结合了加密和认证这两个操作。试想一下，加密之后的报文，遭到篡改之后，也很难重新计算报文摘要，因为无法轻易获取明文。

### 4. HTTPS/2.0

#### HTTP/1.x 缺陷

- HTTP/1.0中客户端与web服务器建立连接后，只能获得一个web资源！
- HTTP/1.1中允许客户端与web服务器建立连接后，在一个连接上获取多个web资源！

HTTP/1.x实现简单是以牺牲性能为代价的：

- 客户端需要使用多个连接才能实现并发和缩短延迟；
- 不会压缩请求和响应首部，从而导致不必要的网络流量；
- 不支持有效的资源优先级，致使底层 TCP 连接的利用率低下。

#### HTTP/1.1 新特性

详细内容请见上文

- 默认是长连接
- 支持流水线
- 支持同时打开多个 TCP 连接
- 支持虚拟主机
- 新增状态码 100
- 支持分块传输编码
- 新增缓存处理指令 max-age

#### 二进制分帧层

HTTP/2.0将报文分成HEADERS帧(HTTP1.x的首部行)和DATA帧(实体体)，它们都是二进制格式的。在通信过程中，只会有一个TCP连接存在，它承载了任意数量的双向数据流(Stream)。

- 每个数据流(Stream)都有一个唯一标识符和可选的优先级信息，用于承载双向信息。
- 消息(Message)是与逻辑请求或响应对应的完整的一系列帧。
- 帧(Frame)是最小的通信单位，来自不同数据流的帧可以交错发送，然后再根据每个帧头的数据流标识符重新组装。

<div class="align"><img alt="二进制分帧层" src="https://github.com/CyC2018/CS-Notes/raw/master/docs/notes/pics/af198da1-2480-4043-b07f-a3b91a88b815.png"/></div>

#### 服务端推送

HTTP/2.0在客户端请求一个资源时，会把相关的资源一起发送给客户端，客户端就不需要再次发起请求了。例如客户端请求page.html页面，服务端就把script.js和style.css等与之相关的资源一起发给客户端。<div class="align"><img alt="服务端推送" src="https://github.com/CyC2018/CS-Notes/raw/master/docs/notes/pics/e3f1657c-80fc-4dfa-9643-bf51abd201c6.png"/></div>

#### 首部压缩

HTTP/1.1的首部带有大量信息，而且每次都要重复发送。HTTP/2.0要求客户端和服务器同时维护和更新一个包含之前见过的首部字段表，从而避免了重复传输。不仅如此，HTTP/2.0也使用Huffman编码对首部字段进行压缩。<div class="align"><img alt="首部压缩" src="https://github.com/CyC2018/CS-Notes/raw/master/docs/notes/pics/_u4E0B_u8F7D.png"/></div>

### 附录

#### 浏览器内核

```
浏览器			内核
IE				Trident
Chrome			Webkit
Firefox			Gecho
Opera			Pesto
Safari(Apple)	Webkit
```

#### 工具

HTTP代理工具Fiddler: Fiddler是一款强大Web调试工具，它能记录所有客户端和服务器的HTTP请求。

#### Request部分详解

```
1.Headers —— 显示客户端发送到服务器的 HTTP 请求的 header，显示为一个分级视图，包含了 Web 客户端信息、Cookie、传输状态等。
2.Textview —— 显示 POST 请求的 body 部分为文本。
3.WebForms —— 显示请求的 GET 参数 和 POST body 内容。
4.HexView —— 用十六进制数据显示请求。
5.Auth —— 显示响应 header 中的 Proxy-Authorization(代理身份验证)和 Authorization(授权)信息.
6.Raw —— 将整个请求显示为纯文本。
7.JSON —— 显示JSON格式文件。
8.XML —— 如果请求的 body 是 XML 格式，就是用分级的 XML 树来显示它。
```

#### Responser部分详解

```
1.Transformer —— 显示响应的编码信息。
2.Headers —— 用分级视图显示响应的 header。
3.TextView —— 使用文本显示相应的 body。
4.ImageVies —— 如果请求是图片资源，显示响应的图片。
5.HexView —— 用十六进制数据显示响应。
6.WebView —— 响应在 Web 浏览器中的预览效果。
7.Auth —— 显示响应 header 中的 Proxy-Authorization(代理身份验证)和 Authorization(授权)信息。
8.Caching —— 显示此请求的缓存信息。
9.Privacy —— 显示此请求的私密(P3P)信息。
10.Raw —— 将整个响应显示为纯文本。
11.JSON —— 显示JSON格式文件。
12.XML —— 如果响应的 body 是 XML 格式，就是用分级的 XML 树来显示它 。
```

#### 响应码

```
1xx:信息
	100 Continue
	服务器仅接收到部分请求，但是一旦服务器并没有拒绝该请求，客户端应该继续发送其余的请求。
	101 Switching Protocols
	服务器转换协议: 服务器将遵从客户的请求转换到另外一种协议。
2xx:成功
	200 OK
	请求成功(其后是对GET和POST请求的应答文档)
	201 Created
	请求被创建完成，同时新的资源被创建。
	202 Accepted
	供处理的请求已被接受，但是处理未完成。
	203 Non-authoritative Information
	文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝。
	204 No Content
	没有新文档。浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是
	很有用的。
	205 Reset Content
	没有新文档。但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容。
	206 Partial Content
	客户发送了一个带有Range头的GET请求，服务器完成了它。
3xx:重定向
	300 Multiple Choices
	多重选择。链接列表。用户可以选择某链接到达目的地。最多允许五个地址。
	301 Moved Permanently
	所请求的页面已经转移至新的url。
	302 Moved Temporarily
	所请求的页面已经临时转移至新的url。
	303 See Other
	所请求的页面可在别的url下被找到。
	304 Not Modified
	未按预期修改文档。客户端有缓冲的文档并发出了一个条件性的请求(一般是提供If-Modified-Since头表示客户只想比指定日期更
	新的文档)。服务器告诉客户，原来缓冲的文档还可以继续使用。
	305 Use Proxy
	客户请求的文档应该通过Location头所指明的代理服务器提取。
	306 Unused
	此代码被用于前一版本。目前已不再使用，但是代码依然被保留。
	307 Temporary Redirect
	被请求的页面已经临时移至新的url。
4xx:客户端错误
	400 Bad Request
	服务器未能理解请求。
	401 Unauthorized
	被请求的页面需要用户名和密码。
        401.1
        登录失败。
        401.2
        服务器配置导致登录失败。
        401.3
        由于 ACL 对资源的限制而未获得授权。
        401.4
        筛选器授权失败。
        401.5
        ISAPI/CGI 应用程序授权失败。
        401.7
        访问被 Web 服务器上的 URL 授权策略拒绝。这个错误代码为 IIS 6.0 所专用。
	402 Payment Required
	此代码尚无法使用。
	403 Forbidden
	对被请求页面的访问被禁止。
        403.1
        执行访问被禁止。
        403.2
        读访问被禁止。
        403.3
        写访问被禁止。
        403.4
        要求 SSL。
        403.5
        要求 SSL 128。
        403.6
        IP 地址被拒绝。
        403.7
        要求客户端证书。
        403.8
        站点访问被拒绝。
        403.9
        用户数过多。
        403.10
        配置无效。
        403.11
        密码更改。
        403.12
        拒绝访问映射表。
        403.13
        客户端证书被吊销。
        403.14
        拒绝目录列表。
        403.15
        超出客户端访问许可。
        403.16
        客户端证书不受信任或无效。
        403.17
        客户端证书已过期或尚未生效。
        403.18
        在当前的应用程序池中不能执行所请求的 URL。这个错误代码为 IIS 6.0 所专用。
        403.19
        不能为这个应用程序池中的客户端执行 CGI。这个错误代码为 IIS 6.0 所专用。
        403.20
        Passport 登录失败。这个错误代码为 IIS 6.0 所专用。
	404 Not Found
	服务器无法找到被请求的页面。
        404.0
        没有找到文件或目录。
        404.1
        无法在所请求的端口上访问 Web 站点。
        404.2
        Web 服务扩展锁定策略阻止本请求。
        404.3
        MIME 映射策略阻止本请求。
	405 Method Not Allowed
	请求中指定的方法不被允许。
	406 Not Acceptable
	服务器生成的响应无法被客户端所接受。
	407 Proxy Authentication Required
	用户必须首先使用代理服务器进行验证，这样请求才会被处理。
	408 Request Timeout
	请求超出了服务器的等待时间。
	409 Conflict
	由于冲突，请求无法被完成。
	410 Gone
	被请求的页面不可用。
	411 Length Required
	"Content-Length" 未被定义。如果无此内容，服务器不会接受请求。
	412 Precondition Failed
	请求中的前提条件被服务器评估为失败。
	413 Request Entity Too Large
	由于所请求的实体的太大，服务器不会接受请求。
	414 Request-url Too Long
	由于url太长，服务器不会接受请求。当post请求被转换为带有很长的查询信息的get请求时，就会发生这种情况。
	415 Unsupported Media Type
	由于媒介类型不被支持，服务器不会接受请求。
	416 Requested Range Not Satisfiable
	服务器不能满足客户在请求中指定的Range头。
	417 Expectation Failed
	执行失败。
	423
	锁定的错误。
5xx:服务器错误
	500 Internal Server Error
	请求未完成。服务器遇到不可预知的情况。
        500.12
        应用程序正忙于在 Web 服务器上重新启动。
        500.13
        Web 服务器太忙。
        500.15
        不允许直接请求 Global.asa。
        500.16
        UNC 授权凭据不正确。这个错误代码为 IIS 6.0 所专用。
        500.18
        URL 授权存储不能打开。这个错误代码为 IIS 6.0 所专用。
        500.100
        内部 ASP 错误。
	501 Not Implemented
	请求未完成。服务器不支持所请求的功能。
	502 Bad Gateway
	请求未完成。服务器从上游服务器收到一个无效的响应。
        502.1
        CGI 应用程序超时。　·
        502.2
        CGI 应用程序出错。
	503 Service Unavailable
	请求未完成。服务器临时过载或当机。
	504 Gateway Timeout
	网关超时。
	505 HTTP Version Not Supported
	服务器不支持请求中指明的HTTP协议版本
```

#### end
