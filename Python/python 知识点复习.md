<!-- [TOC] -->

## 爬虫

### link

* [Selenium+phantomjs使用大全](https://www.cnblogs.com/shaosks/category/964915.html)
* [Selenium大全](https://www.cnblogs.com/wanghaihong200/category/1088466.html)
* [appnium大全](https://www.cnblogs.com/wanghaihong200/category/1095077.html)
* [Scrapy爬虫](https://www.cnblogs.com/shaosks/category/976410.html)

## python2与python3

0. https://www.cnblogs.com/Mjonj/p/7395578.html
1. 版本问题: 
    1. python2与python3是目前主要的两个版本。
        1. python3.0版本较之前的有很大变动，而且不向下兼容。
        2. Python 2.6作为一个过渡版本，基本使用了Python 2.x的语法和库，同时考虑了向Python 3.0的迁移。即2.6版本兼容2.x和3.0的语法。Python 2.6保持了对之前版本的全兼容，而且还包含了Python 3.0的新玩意(一些新特性需要通过``from __future__ import ...``来启用)。如，在Python2.6要使用3.0的打印,得写上`` from __future__ import print_function``。
        3. 基于早期Python版本而能正常运行于Python 2.6并无警告的程序可以通过一个2 to 3的转换工具无缝迁移到Python 3.0。
    2. 部分函数和语句的改变:
        1. 最引人注意的改变是print语句没有了，取而代之的是print函数。
        2. 同样的还有exec语句，已经改为exec()函数。python2中的execfile(filename)被exec(compile(open(filename, 'rb').read(), filename, 'exec'))代替。至于python中的eval只能执行单条语句。
        3. 去除了<>，全部改用!=。
        4. raw_input被input代替，且会获取结尾输入的换行符
    3. 用迭代器来替代列表:
        1. 一些知名的API将不再返回列表。
        2. 而字典的dict.iterkeys()、dict.itervalues()和dict.iteritems()方法将会移除，而你可以使用.keys()、.values()和.items()，它们会返回更轻量级的、类似于集合的容器对象，而不是返回一个列表来复制键值。这样做的优点是，可以直接在键和条目上进行集合操作，而不需要再复制一次。
    4. 整型数:
        1. 移除了含糊的除法符号('/')，而只返回浮点数。
        2. 在以前的版本中，如果参数是int或者是long的话，就会返回相除后结果的向下取整(floor)，而如果参数是float或者是complex的话，那么就会返回相除后结果的一个恰当的近似。在2.6版本中可以通过``from __future__ import division``来启用这项特性。
2. python2 to python3 问题
    1. print 语句
        ```py
        # 2.x                      3.x                          说明
        print                      print()                      # 输出一个空白行
        print 1                    print(1)                     # 输出一个单独的值
        print 1, 2                 print(1, 2)                  # 输出多个值，以空格分割
        print 1, 2,                print(1, 2, end=' ')         # 输出时取消在末尾输出回车符。
        print >> sys.stderr, 1, 2   print(1, 2, file=sys.stderr)# 把输出重定向到一个管道
        ```
    2. 被重命名或者重新组织的模块
        1. http: 在Python 3里，几个相关的HTTP模块被组合成一个单独的包，即http。
            ```py
            # 2.x                     3.x
            import httplib          import http.client     # http.client 模块实现了一个底层的库，可以用来请求HTTP资源，解析HTTP响应。
            import Cookie           import http.cookies    # http.cookies 模块提供一个蟒样的(Pythonic)接口来获取通过HTTP头部(HTTP header)Set-Cookie发送的cookies
            import cookielib        import http.cookiejar  # 常用的流行的浏览器会把cookies以文件形式存放在磁盘上，http.cookiejar 模块可以操作这些文件。
            import BaseHTTPServer   import http.server     # http.server 模块实现了一个基本的HTTP服务器
            import SimpleHTTPServer
            import CGIHttpServer
            ```
        2. urllib: Python 2有一些用来分析，编码和获取URL的模块，但是这些模块就像老鼠窝一样相互重叠。在Python 3里，这些模块被重构、组合成了一个单独的包，即urllib。
            ```py
            # 2.x                                 3.x
            ①  import urllib                       import urllib.request, urllib.parse, urllib.error
            ②  import urllib2                      import urllib.request, urllib.error
            ③  import urlparse                     import urllib.parse
            ④  import robotparser                  import urllib.robotparser
            ⑤  from urllib import FancyURLopener   from urllib.request import FancyURLopener
                from urllib import urlencode        from urllib.parse import urlencode
            ⑥  from urllib2 import Request         from urllib.request import Request
                from urllib2 import HTTPError       from urllib.error import HTTPError
            '''
            以前，Python 2里的 urllib 模块有各种各样的函数，包括用来获取数据的 urlopen()，还有用来将URL分割成其组成部分的 splittype(), splithost()和 splituser()函数。
            在python3的 urllib 包里，这些函数被组织得更有逻辑性。2to3将会修改这些函数的调用以适应新的命名方案。
            在Python 3里，以前的 urllib2 模块被并入了 urllib 包。同时，以 urllib2 里各种你最喜爱的东西将会一个不缺地出现在Python 3的 urllib 模块里，比如 build_opener()方法, Request 对象， HTTPBasicAuthHandler 和 friends 。
            Python 3里的 urllib.parse 模块包含了原来Python 2里 urlparse 模块所有的解析函数。
            urllib.robotparse 模块解析 robots.txt 文件。
            处理HTTP重定向和其他状态码的 FancyURLopener 类在Python 3里的 urllib.request 模块里依然有效。 urlencode()函数已经被转移到了 urllib.parse 里。
            Request 对象在 urllib.request 里依然有效，但是像HTTPError这样的常量已经被转移到了 urllib.error 里。
            '''
            ```
        3. dbm: 所有的DBM克隆(DBM clone)现在在单独的一个包里，即dbm。如果你需要其中某个特定的变体，比如GNU DBM，你可以导入dbm包中合适的模块。
            ```py
            # 2.x                3.x
            import dbm         import dbm.ndbm
            import gdbm        import dbm.gnu
            import dbhash      import dbm.bsd
            import dumbdbm     import dbm.dumb
            import anydbm      import dbm
            import whichdb
            ```
        4. xmlrpc: XML-RPC是一个通过HTTP协议执行远程RPC调用的轻重级方法。一些XML-RPC客户端和XML-RPC服务端的实现库现在被组合到了独立的包，即xmlrpc。
            ```py
            # 2.x                        3.x
            import xmlrpclib           import xmlrpc.client
            import DocXMLRPCServer     import xmlrpc.server
            import SimpleXMLRPCServer
            ```
        5. 其他模块
            ```py
            # 2.x                               3.x
            ①  try:                              import io
                    import cStringIO as StringIO  # 在Python 2里，你通常会这样做，首先尝试把cStringIO导入作为StringIO的替代，如果失败了，再导入StringIO。
                except ImportError:               # 不要在Python 3里这样做；io模块会帮你处理好这件事情。它会找出可用的最快实现方法，然后自动使用它。
                    import StringIO
            ②  try:                              import pickle
                    import cPickle as pickle      # 在Python 2里，导入最快的pickle实现也与上边 io 相似。在Python 3里，pickle模块会自动为你处理，所以不要再这样做。
                except ImportError:
                    import pickle
            ③  import __builtin__                import builtins
            ④  import copy_reg                   import copyreg # copyreg模块为用C语言定义的用户自定义类型添加了pickle模块的支持。
            ⑤  import Queue                      import queue   # queue模块实现一个生产者消费者队列(multi-producer, multi-consumer queue)。
            ⑥  import SocketServer               import socketserver # socketserver模块为实现各种socket server提供了通用基础类。
            ⑦  import ConfigParser               import configparser # configparser模块用来解析INI-style配置文件。
            ⑧  import repr                       import reprlib # reprlib 模块重新实现了内置函数 repr()，并添加了对字符串表示被截断前长度的控制。
            ⑨  import commands                   import subprocess # subprocess 模块允许你创建子进程，连接到他们的管道，然后获取他们的返回值。
            ''' builtins模块包含了在整个Python语言里都会使用的全局函数，类和常量。重新定义builtins模块里的某个函数意味着在每处都重定义了这个全局函数。这听起来很强大，但是同时也是很可怕的。 '''
            ```
3. 关键字
    ```py
    and    assert    break         class    continue    def    elif    else    except    exec
    eval    finally    for    from    global    if    import    in    is    lambda    not
    nonlocal    or    pass    print    raise    return    try    with   while   yield
    False   None    True
    ```
4. 对象
    1. Python 将 "一切皆对象" 贯彻得非常彻底，不区分什么 "值类型" 和 "引用类型"。所谓变量，实质就是一个通用类型指针 (PyObject*)，它仅仅负责指路，至于目标是谁，一概不管。
    2. Python Object 对象的自身结构了。任何对象，就算一个最简单的整数，它的头部都会拥有 2 个特殊的附加信息，分别是："引用计数" 和 "类型 (type) 指针" 。前者指示 GC 何时回收，而后者标明了对象的身份，如此我们就可以在运行期动态执行对象成员调用。
    3. 连同附加头，一个 "普通" 的整数起码得 12 字节：
        ```py
        import sys
        import numpy as np
        print(sys.getsizeof(''))  # 49; print(sys.getsizeof('a'))  # 50; print(sys.getsizeof('ab'))  # 51;
        print(sys.getsizeof(10))  # 28
        print(sys.getsizeof(True))  # 28
        print(sys.getsizeof(10.1))  # 24
        print(sys.getsizeof(None))  # 16
        print(sys.getsizeof(Decimal(10.2)))  # 104
        print(sys.getsizeof(print))  # 72
        print(sys.getsizeof(np.ceil))  # 216  # np.ceil是np.ufunc类型的对象
        print(sys.getsizeof(np.int))  # 400
        print(sys.getsizeof(float))  # 400
        ```

## built-in

1. [python项目中不同文件夹py源文件之间如何相互调用--Python import中相对路径的问题](https://blog.csdn.net/helloxiaozhe/article/details/76578096)
2. [Python系列之反射、面向对象](https://www.cnblogs.com/yyyg/p/5554111.html)
3. [python基础_格式化输出（%用法和format用法）](https://www.cnblogs.com/fat39/p/7159881.html)
4. [Python format 格式化函数](https://www.runoob.com/python/att-string-format.html)
5. f字符串

## tensorflow

* [TensorFlow教程：TensorFlow快速入门教程（非常详细）](http://c.biancheng.net/tensorflow/)

## sanic

* [sanic教程](https://www.yuanrenxue.com/sanic)

## pytorch

### link

* [人人都能看懂的LSTM](https://zhuanlan.zhihu.com/p/32085405)
* [人人都能看懂的GRU](https://zhuanlan.zhihu.com/p/32481747)
* [机器学习算法与自然语言处理](https://zhuanlan.zhihu.com/qinlibo-ml)
* [](https://github.com/BIGBALLON)
* [](https://keras.io/zh/)
* [AI算法工程师手册](http://www.huaxiaozhuan.com/)
* []()

### start

#### deep learning with pytorch: a 60 minute blitz

```py
from __future__ import print_funcion
import torch
import numpy as np

def Tesnsors():
    x = torch.empty(5, 3)  # 未初始化
    torch.rand(5, 3)  # 随机初始化，在[0, 1]间
    torch.zeros(5, 3, dtype=torch.long)
    torch.ones(5, 3)
    torch.tensor([5.5, 3])  # torch.Tensor([5.5, 3])
    x.new_ones(5, 3, dtype=torch.double)  # new_*类的方法会根据x的属性新建一个torch，除非方法有参数提供了
    torch.randn_like(x)  # 结果有相同的参数，如size
    x.size()  # 返回结果是相当于tuple的torch.Size([5, 3])，因此也支持下标读取x.size(1) ==> 3

def Operations(x, y):
    z = x + y  # ...
    torch.add(x, y, out=z)  # ...
    x.add_(y)  # 相当于 x += y，任何*_方法都会改变原来的tensor，如x.copy_(y)和x.t_()
    print(x[:, 1])  # 切片
    x = torch.randn(4, 4).view(-1, 8)  # resize
    x = torch.randn(1).item()

def bridge():
    a = torch.ones(5)
    b = a.numpy()
    a.add_(1)
    print(a, b, sep='\n')  # tensor([2., 2., 2., 2., 2.]) \n  [2. 2. 2. 2. 2.]
    b = np.ones(5)
    a = torch.from_numpy(b)
    np.add(b, 1, out=b)
    print(a, b, sep='\n')  # tensor([2., 2., 2., 2., 2.], dtype=torch.float64) \n  [2. 2. 2. 2. 2.]
    # All the Tensors on the CPU except a CharTensor support converting to NumPy and back.

if torch.cuda.is_available():
    device = torch.device("cuda")
    y = torch.ones_like(x, device=device)  # directly create a tensor on GPU
    x = x.to(device)  # or just use strings ``.to("cuda")``
    z = x + y
    print(z, z.to("cpu", torch.double), sep='\n')
```

#### data loading and processing tutorial

```py
from __future__ import print_function
import os
import torch
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from skimage import io, transform
from torch.utils.data import Dataset, DataLoader
from torchvision import transforms, utils

# Ignore warnings
import warnings
warnings.filterwarnings("ignore")

plt.ion()   # interactive mode


```

### end

## flask

1. [用 Flask 来写个轻博客 (25) — 使用 Flask-Principal 实现角色权限功能](https://blog.csdn.net/jmilk/article/details/53542686)
2. [django开发例子](https://www.jianshu.com/u/49d1b159b16d)

## end