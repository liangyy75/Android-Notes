- [基本语法1](#%e5%9f%ba%e6%9c%ac%e8%af%ad%e6%b3%951)
- [基本语法2](#%e5%9f%ba%e6%9c%ac%e8%af%ad%e6%b3%952)
- [基本语法3](#%e5%9f%ba%e6%9c%ac%e8%af%ad%e6%b3%953)
- [string](#string)
- [regex](#regex)
- [container](#container)
- [io](#io)
- [sys](#sys)
- [date](#date)
- [thread](#thread)
- [process](#process)
- [socket](#socket)
- [database](#database)
- [json](#json)
- [xml](#xml)
- [logging](#logging)
- [runtime](#runtime)
- [error](#error)
- [shell](#shell)

### 基本语法1

1. 

### 基本语法2

1. 

### 基本语法3

1. 使用%@输出，实际上是输出description方法的返回值，desctiption方法是Object类的方法。我们可以重写该方法，类验证自己的想法。

### string

1. NSString / NSMutableString

### regex

1. NS

### container

1. NSArray / NSMutableArray
    1. 创建
        ```objective-c
        NSArray *array1 = [[NSArray alloc] initWithObjects:@"one", @"two", @"three", nil];
        NSArray *array4 = @[@"g",@"h",@"i"];  // 简写
        NSArray *arr = [NSArray array];
        NSMutableArray *mutableArray = [[NSMutableArray alloc] initWithObjects:@"one", @"two", nil];
        NSMutableArray *mutableArray2 =[[NSMutableArray alloc] init];
        ```
    2. 遍历
        ```objective-c
        // NSEnumerator *enu2 = [array1 reverseObjectEnumerator];
        NSEnumerator *enu = [array1 objectEnumerator];
        NSString *str;
        while (str = [enu nextObject]) {
            NSLog(@"枚举器法：%@", str);
        }
        for (id obj in array1) {
            NSLog(@"快速枚举法：%@",obj2);
        }
        id obj1;
        int i;
        int count1 = [array1 count];
        for (i = 0 ; i < count1; i++) {
            obj1 = [array1 objectAtIndex:i];  // obj1 = array1[i];
            NSLog(@"使用i值遍历：%@", obj1);
        }
        ```
    3. mutable 增
        ```objective-c
        [mutableArray addObject:@"three"];
        [mutableArray insertObject:@"f" atIndex:0];
        [mutableArray addObjectsFromArray:array4];
        ```
    4. mutable 删
        ```objective-c
        [mutableArray removeAllObjects];
        [mutableArray removeLastObject];
        [mutableArray removeObjectAtIndex:0];
        [mutableArray removeObjectsInRange:NSMakeRange(0, 2)];
        [mutableArray removeObject:@"e"];
        NSRange range = {0, 5};
        [mutableArray removeObject:@"g" inRange:range];
        [mutableArray removeObjectsInArray:arr];
        ```
    5. mutable 改
        ```objective-c
        [mutableArray exchangeObjectAtIndex:0 withObjectAtIndex:2];
        [mutableArray setObject:@"one_changed" atIndexedSubscript:0];
        [mutableArray replaceObjectAtIndex:2 withObject:@"hhh"];
        [mutableArray setArray:arr];
        ```
    6. mutable 查
        ```
        ```
    7. 字符串与数组相互转换
        ```objective-c
        NSString *string = @"I am a very happy boy";
        NSArray *array3 = [string componentsSeparatedByString:@" "];
        NSLog(@"字符串分割数组:%@", array3);
        NSString *newStirng =[array3 componentsJoinedByString:@"-"];
        NSLog(@"%@", newStirng);
        ```
    8. 文件与数组相互转换
        ```objective-c
        BOOL isSuccess = [arr writeToFile:path atomically:YES];
        ```
    9. 排序
        ```objective-c
        NSSortDescriptor *sort = [NSSortDescriptor sortDescriptorWithKey:@"self" ascending:YES];  // key是属性?
        [array sortUsingDescriptors:[NSArray arrayWithObjects:sort, nil]];
        // ...
        NSSortDescriptor *sortByNumber = [NSSortDescriptor sortDescriptorWithKey:@"number" ascending:YES];
        NSSortDescriptor *sortByOrder = [NSSortDescriptor sortDescriptorWithKey:@"order" ascending:YES];
        [numberArray sortUsingDescriptors:[NSArray arrayWithObjects:sortByNumber, sortByOrder, nil]];
        // ...
        - (NSComparisonResult) compare:(Person *)otherObject {
            return [self.birthDate compare:otherObject.birthDate];
        }
        NSArray *sortedArray = [drinkDetails sortedArrayUsingSelector:@selector(compare:)];
        // or
        NSSortDescriptor *sortDescriptor = [[NSSortDescriptor alloc] initWithKey:@"birthDate" ascending:YES];
        NSArray *sortedArray = [drinkDetails sortedArrayUsingDescriptors:@[sortDescriptor]];
        // or
        NSArray *sortedArray = [drinkDetails sortedArrayUsingComparator:^NSComparisonResult(id a, id b) {
            NSDate *first = [(Person*)a birthDate];
            NSDate *second = [(Person*)b birthDate];
            return [first compare:second];
        }];
        ```
    10. 有用方法
        ```
        id obj1 = [array firstObject];
        id obj2 = [array lastObject];
        unsigned long count = [array count];
        ```
2. NSDictionary / NSMutableDectionary
    1. 创建
        ```objective-c
        NSDictionary *dictionary = [[NSDictionary alloc] initWithObjectsAndKeys:@"One", @"1", @"Two", @"2", @"Three", @"3", nil];
        NSDictionary *dict = @{@"zbz": @"zhangbozhi", @"cgx": @"chenguanxi", @"xzmly": @"hello"};  // 简写
        NSDictionary *dict1 = [NSDictionary dictionary];  // 空字典(不可修改/添加/删除)
        ```
    2. 遍历
        ```objective-c
        // 使用objectEnumerator值枚举器输出值，使用keyEnumerator键枚举器输出键
        NSEnumerator *enumerator = [dictionary objectEnumerator];
        id obj;
        while (obj = [enumerator nextObject]){
            NSLog(@"枚举器法:%@", obj);
        }
        for (id obj in dictionary) {
            NSLog(@"快速枚举法键:%@", obj);
            NSLog(@"快速枚举法值:%@", [dictionary objectForKey: obj]);
        }
        ```
    3. 查
        ```objective-c
        NSString *str = [dictionary objectForKey:@"1"];
        NSArray *keyArray = dictionary.allKeys;
        NSArray *valueArray = dictionary.allValues;
        ```
    4. 排序
        ```objective-c
        NSSortDescriptor *sortByNumber = [NSSortDescriptor sortDescriptorWithKey:@"number" ascending:YES];
        [numberArray sortUsingDescriptors:[NSArray arrayWithObjects:sortByNumber, nil]];
        ```
    5. mutable 增 / 改
        ```objective-c
        // setobject时，值必须是非空对象类型，如果值是非对象类型，则报错
        [mutableDictionary setObject:@"one" forKey:@"1"];
        // setvalue时，不管值是不是对象类型，都不会报错，但对象不会添加到字典中
        [mutableDictionary setValue:@"two" forKey:@"2"];
        [mutableDictionary setDictionary:mutableDictionary2];
        ```
    6. mutable 删
        ```objective-c
        [mutableDictionary removeObjectForKey:@"key"];
        [mutableDictionary removeObjectForKeys:keys];
        [mutableDictionary removeAllObjects];
        ```
    7. 文件与dictionary的转换
        ```
        BOOL isWrite = [dict writeToFile:@"/Users/zhaoxiaohu/Desktop/dict.plist" atomically:YES];
        NSDictionary *readDict = [NSDictionary dictionaryWithContentsOfFile:@"/Users/zhaoxiaohu/Desktop/dict.plist"];
        ```
    8. string与dictionary的转换
        ```objective-c
        NSDictionary *infoDict = @{@"name": @"taoyali", @"password": @"taoyali"}；
        NSData *jsonData = [NSJSONSerialization dataWithJSONObject:infoDict options:0 error:0];
        NSString *dataStr = [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
        // ...
        + (NSDictionary *)dictionaryWithJsonString:(NSString *)jsonString {
            if (jsonString == nil) {
                return nil;
            }
            NSData *jsonData = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
            NSError *err;
            NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:jsonData options:NSJSONReadingMutableContainers error:&err];
            if (err) {
                NSLog(@"json解析失败：%@",err);
                return nil;
            }
            return dic;
        }
        ```
    9. 有用方法
3. NSSet / NSMutableSet / NSIndexSet / NSMutableIndexSet
    1. create
        ```objective-c
        NSSet *set = [[NSSet alloc] initWithObjects: @"one", @"two", @"three", @"four", nil];
        NSArray *array = [[NSArray alloc] initWithObjects:@"one", @"two", @"three", @"four", nil];
        NSSet *set2 = [[NSSet alloc] initWithArray:array];
        NSMutableSet *mutableSet = [[NSMutableSet alloc] initWithObjects: @"one", @"two", @"three", nil];
        NSMutableSet *mutableSet2 = [[NSMutableSet alloc] init];
        // ...
        NSIndexSet *indexSet = [[NSIndexSet alloc] initWithIndexesInRange: NSMakeRange(1, 3)];
        NSArray *array = [[NSArray alloc] initWithObjects:@"one", @"two", @"three", @"four", nil];
        NSArray *array2 = [array objectsAtIndexes: indexSet];  // indexSet的元素如果超出了array的索引范围，会发生数组越界错误。
        NSMutableIndexSet *indexSet = [[NSMutableIndexSet alloc] init];
        ```
    2. add
        ```objective-c
        [mutableSet2 addObject:@"one"];
        [mutableSet unionSet:set];
        // ...
        [indexSet addIndex: 0];
        ```
    3. remove
        ```objective-c
        [mutableSet removeObject:@"one"];
        [mutableSet minusSet:set];
        [mutableSet removeAllObjects];
        ```
    4. query
        ```objective-c
        BOOL ret = [set containsObject: @"one"];
        BOOL ret2 = [set isEqual:set2];
        BOOL ret3 = [set isSubsetOfSet:set2];
        NSArray *array2 = [set allObjects];
        ```
    5. iterator
        ```objective-c
        NSEnumerator * enumerator = [set objectEnumerator];
        id obj;
        while (obj = [enumerator nextObject]) {
            NSLog(@"%@", obj);
        }
        ```
    6. string相互转换
        ```objective-c
        // TODO:
        ```
    7. file相互转换
        ```objective-c
        // TODO:
        ```
    8. others
        ```objective-c
        NSInteger nsi = [set count];
        ```
4. 

### io

1. links
    1. [ios中NSString、NSArray、NSData、NSDictionary本地读写](https://blog.csdn.net/wanna_love/article/details/25021823)
    2. [Ios一行一行读取大文件](https://blog.csdn.net/yiyunhzy/article/details/27103867)
    3. [iOS开发——使用NSInputStream逐行读入大文件](https://blog.csdn.net/u013604612/article/details/40517767)
2. NSFileManager
    1. create(都是文件或者文件夹)
    2. destroy
    3. copy
    4. move
    5. write
    6. read
    7. append
    8. find
    9. list
    10. attrs

### sys

### date

### thread

### process

### socket

### database

### json

### xml

### logging

### runtime

1. links
    1. [[转载]【OC刨根问底】-Runtime简单粗暴理解](https://www.jianshu.com/p/c6d1482ba9bc)
    2. [OC-Runtime的理解和简单使用](https://www.jianshu.com/p/54f0311104c7)
    3. [OC-RunTime: 总结消息转发中用到的知识点](http://www.veryitman.com/2018/04/05/OC-RunTime-%E6%80%BB%E7%BB%93%E6%B6%88%E6%81%AF%E8%BD%AC%E5%8F%91%E4%B8%AD%E7%94%A8%E5%88%B0%E7%9A%84%E7%9F%A5%E8%AF%86%E7%82%B9/)
    4. [OC Runtime 学习笔记](http://renyijie.top/2018/07/05/OC-Runtime-%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/)
    5. [OC Runtime](https://perphet.com/2019/08/OC-Runtime/)
    6. [iOS 消息发送之 objc_msgSend](https://www.jianshu.com/p/53edb8572df4) finished
    7. [runtime使用篇: class_copyMethodList](https://www.jianshu.com/p/b30c2580d977) finished
    8. [iOS -Runtime method](https://www.jianshu.com/p/02b8e2f0e021)
    9. [OC的类和元类](https://github.com/FrizzleFur/DailyLearning/wiki/OC%E7%9A%84%E7%B1%BB%E5%92%8C%E5%85%83%E7%B1%BB)
2. 类的本质
    1. 类相关：
        1. 数据类型：class，object；
            * isa 元类
            * superClass 根类
        2. 操作函数: class_：
            * get: 类名，父类; 实例变量，成员变量；属性；实例方法，类方法，方法实现；
            * copy: 成员变量列表；属性列表；方法列表；协议列表；
            * add: 成员变量；属性；方法；协议；
            * replace：属性；方法；
            * respond:响应方法判断（内省）
            * isMetaclass:元类判断（内省）
            * conform:遵循协议判断（内省）
            * objc_：
            * get: 实例变量；成员变量；类名；类；元类；关联对象；
            * copy: 对象；类；类列表；协议列表；
            * set: 实例变量；成员变量；类；类列表；协议；关联对象；
            * dispose: 对象；
    2. 动态创建/销毁类、对象
    3. 成员变量、属性相关：
        1. 数据类型：Ivar；objc_property_t；objc_property_attribute_t；
        2. 操作函数：
            * ivar_：
            * property_：
    4. 方法消息相关：
        1. 数据类型：SEL；IMP; Method；方法缓存
        2. 操作函数:
            * method_：method_
            * invoke: 方法实现的返回值；
            * get: 方法名；方法实现；参数与返回值相关；
            * set：方法实现；
            * exchange：交换方法实现
            * 方法调用：msgSend函数（找到方法实现）
            * 消息转发：
                * Method Resolution
                * Fast Forwarding
                * Normal Forwarding
    5. 协议相关：
        1. 数据类型：Protocol；
        2. 操作函数：protocol_
            * get: 协议；属性；
            * copy：协议列表；属性列表；
            * add：属性；方法；协议；
            * isEqual：判断两协议等同；
            * comform：判断是否遵循协议；
    6. 其他：类名；版本号；类信息；（忽略）
3. 动态实现：
    1. Method Swizzling;
    2. ISA Swizzling;
4. isa 与 Class
    1. 在arm64架构之前，isa就是一个普通的指针，存储着Class、Meta-Class对象的内存地址。从arm64架构开始，对isa进行了优化，变成了一个共用体（union）结构，还使用位域来存储更多的信息。
        ```c++
        union isa_t  {
            isa_t() {}
            isa_t(uintptr_t value) : bits(value) {}
            Class cls;
            uintptr_t bits;
        #if __arm64__
        #define ISA_MASK        0x0000000ffffffff8ULL
        #define ISA_MAGIC_MASK  0x000003f000000001ULL
        #define ISA_MAGIC_VALUE 0x000001a000000001ULL
            struct {
                uintptr_t nonpointer        : 1;  // 0，代表普通的指针，存储着Class、Meta-Class对象的内存地址；1，代表优化过，使用位域存储更多的信息。
                uintptr_t has_assoc         : 1;  // 是否有设置过关联对象，如果没有，释放时会更快。
                uintptr_t has_cxx_dtor      : 1;  // 是否有C++的析构函数（.cxx_destruct），如果没有，释放时会更快。
                uintptr_t shiftcls          : 33; // MACH_VM_MAX_ADDRESS 0x1000000000 -- 存储着Class、Meta-Class对象的内存地址信息。
                uintptr_t magic             : 6;  // 用于在调试时分辨对象是否未完成初始化。
                uintptr_t weakly_referenced : 1;  // 是否有被弱引用指向过，如果没有，释放时会更快。
                uintptr_t deallocating      : 1;  // 对象是否正在释放。
                uintptr_t has_sidetable_rc  : 1;  // 引用计数器是否过大无法存储在isa中，如果为1，那么引用计数会存储在一个叫SideTable的类的属性中。
                uintptr_t extra_rc          : 19; // 里面存储的值是引用计数器减1。
        #define RC_ONE   (1ULL<<45)
        #define RC_HALF  (1ULL<<18)
        };
        ```
    2. Class结构体
        ```c++
        struct objc_class : objc_object {
            // Class ISA;
            Class superclass;
            cache_t cache;           // formerly cache pointer and vtable （方法缓存）
            class_data_bits_t bits;  // class_rw_t * plus custom rr/alloc flags（用于获取具体类信息）
        };
        ```
    3. class_rw_t
        ```c++
        // bits & FAST_DATA_MASK 得到 class_rw_t 结构体实例
        struct class_rw_t { // rw 代表 readwrite
            // Be warned that Symbolication knows the layout of this structure. 请注意，符号化知道此结构的布局。
            uint32_t flags;
            uint32_t version;
            const class_ro_t *ro;
            method_array_t methods;      // 方法列表
            property_array_t properties; // 属性列表
            protocol_array_t protocols;  // 协议列表
            Class firstSubclass;
            Class nextSiblingClass;
            char *demangledName;
        };
        // class_rw_t里面的methods、properties、protocols是二维数组，是可读可写的，包含了类的初始内容、分类的内容
        // method_array_t方法列表数据结构如下表格，数组中嵌套method_list_t数组，method_list_t数组中存着method_t，因此可以动态添加方法，我们还可以猜测一个分类中的方法相当于一个method_list_t数组。
        ```
    4. class_ro_t
        ```c++
        // class_ro_t 存着类的原始信息
        struct class_ro_t { // ro 代表 readonly
            uint32_t flags;
            uint32_t instanceStart;
            uint32_t instanceSize;   // instance 对象占用的内存空间
        #ifdef __LP64__
            uint32_t reserved;
        #endif
            const uint8_t * ivarLayout;
            const char * name;       // 类名
            method_list_t * baseMethodList;
            protocol_list_t * baseProtocols;
            const ivar_list_t * ivars;  // 成员变量列表
            const uint8_t * weakIvarLayout;
            property_list_t *baseProperties;
        };
        ```
    5. method_t
        ```c++
        struct method_t {
            SEL name;	// 方法名
            const char *types;  // 编码（返回值类型，参数类型）
            IMP imp;    // 指向函数的指针（函数地址）
        };
        // A pointer to the function of a method implementation.
        typedef id _Nullable (*IMP)(id _Nonnull, SEL _Nonnull, ...);  // IMP代表函数的具体实现
        // SEL代表方法\函数名，一般叫做选择器，底层结构跟char *类似，可以通过@selector()和sel_registerName()获得，可以通过sel_getName()和NSStringFromSelector()转成字符串。不同类中相同名字的方法，所对应的方法选择器是相同的
        typedef struct objc_selector *SEL;
        // types -- 包含了函数返回值、参数编码的字符串
        ```
    6. cache_t
        ```c++
        // Class内部结构中有个方法缓存（cache_t），用散列表（哈希表）来缓存曾经调用过的方法，可以提高方法的查找速度
        struct cache_t {
            struct bucket_t *_buckets;	// 散列表
            mask_t _mask;			   // 散列表的长度 - 1
            mask_t _occupied;           // 已缓存的方法数量
        };
        struct bucket_t {
            cache_key_t _key;
            IMP _imp;
        };
        ```
5. 消息机制
    1. objc_msgSend
        ```objective-c
        NSObject *object = [NSObject alloc];
        object = [object init];
        // objc_msgSend(object, sel_registerName("init"));
        // 消息接收者（receiver）：object
        // 消息名称：init
        [NSObject initialize];
        // objc_msgSend(objc_getClass("NSObject"), sel_registerName("initialize"));
        // 消息接收者（receiver）：[NSObject class]
        // 消息名称：initialize
        // sel_registerName("init") = @selector(init);
        // objc_getClass("NSObject") = [NSObject class];
        ```
    2. OC的方法调用：消息机制，给方法调用者发送消息。所以OC中的方法调用，其实都是转换为objc_msgSend函数的调用。objc_msgSend的执行流程可以分为3大阶段
        1. 消息发送
        2. 动态方法解析
        3. 消息转发
        4. 如果三个阶段都没找不到合适的方法进行调用，会报错 unrecognized selector sent to instance。
    3. 创建并初始化对象
        ```objective-c
        // NSObject *p = [[NSObject alloc] init];
        NSObject *p1 = ((NSObject *(*)(id, SEL))obj_msgSend)((id)[NSObject class], @selector(alloc));
        p1 = ((NSObject *(*)(id, SEL))obj_msgSend)((id)p1, @selector(init));
        ```
    4. 发送无参数无返回值消息
        ```objective-c
        - (void) testObjc {
            ((void (*)(id, SEL))obj_msgSend)(self, @selector(test1));
        }
        - (void) test1 {
            NSLog(@"test1");
        }
        ```
    5. 发送有参数无返回值
        ```objective-c
        - (void) testObjc2:(id)arg {
            ((void (*)(id, SEL))obj_msgSend)(self, @selector(test2:), arg);
        }
        - (void) test2:(id)arg {
            NSLog(@"test2 -- %@", arg);
        }
        ```
    6. 发送无参数有返回值的
        ```objective-c
        - (id) testObjc3 {
            return ((id (*)(id, SEL))obj_msgSend)(self, @selector(test3));
        }
        - (id) test3 {
            NSLog(@"test3");
            return @"msg from test3";
        }
        ```
    7. 发送有参数有返回值的
        ```objective-c
        - (id) testObjc4:(id)arg {
            return ((id (*)(id, SEL))obj_msgSend)(self, @selector(test4:), arg);
        }
        - (id) test4:(id)arg {
            NSLog(@"test4 -- %@", arg);
            return @"msg from test4";
        }
        ```
    8. 除了以上几种方法，我们还可以使用block和objc_msgSend 一起使用，来回调所需要的参数，可以写一个总的方法来分发函数的调用。
        ```objective-c
        #import <objc/message.h>
        - (void) requestAPIName:(APIName)name parameters:(NSDictionary *)parameters callBack:(void(^)(id response, id data))callBack {
            NSArray *functionList = [self createFunctionListArray];
            NSString *selectorStr = functionList[name];
            SEL selector = NSSelectorFromString(selectorStr);
            if ([self respondsToSelector:selector]) {
                NSArray *tempArray = [selectorStr componentsSeparatedByString:@":"];
                if (tempArray.count - 1 == 2) {  // 有参数有返回值
                    ((void (*)(id, SEL, id, void(^)(id response, id data)))objc_msgSend)(self, selector, parameters, callBack);
                } else if (tempArray.count - 1 == 1) {
                    NSString *tempStr = @"CallBack:";
                    if ([self string:selectorStr containsOtherString:tempStr]) {
                        ((void (*)(id, SEL, void(^)(id response, id data)))objc_msgSend)(self, selector, callBack);
                    } else {
                        ((void (*)(id, SEL, id))objc_msgSend)(self, selector, parameters);
                    }
                } else if (tempArray.count - 1 == 0) {
                    ((void (*)(id, SEL))obj_msgSend)(self, selector);
                }
            }
        }
        - (NSArray *)createFunctionListArray {
            unsigned int count;
            NSMutableArray *arr = [NSMutableArray array];
            Method *methods = class_copyMethodList(object_getClass([Person class]), &count);
            for (int i = 0; i < count; i++) {
                // NSLog(@"%s", sel_getName(method_getName(methods[i])));
                // ... TODO:
            }
            free(methods);
            return arr;
        }
        - (BOOL)string:(NSString *)string containsOtherString:(NSString*)other {
            if (![string isKindOfClass:[NSString class]]) {
                return NO;
            }
            NSRange range = [string rangeOfString:other];
            return range.location != NSNotFound;
        }
        - (SEL)getTargetSEL:(NSString *)selName {
            unsigned int count;
            SEL target = nil;
            Method *methods = class_copyMethodList(object_getClass([Person class]), &count);
            for (int i = 0; i < count; i++) {
                if (strcmp(sel_getName(method_getName(methods[i])), [selName UTF8String]) == 0) {
                    target = method_getName(*methods[i]);
                    break;
                }
            }
            free(methods);
            return target;
        }
        ```
6. runtime api -- class
    1. class
        ```objective-c
        // 通过字符串来获取Class
        Class clazz = NSClassFromString(@"NSDate");
        NSLog(@"%@", clazz);
        // 直接使用Class来创建对象
        id date = [[clazz alloc] init];
        NSLog(@"%@", date);
        // 通过类来获取Class
        NSLog(@"%d", clazz == NSDate.class);
        // 通过对象来获取Class
        NSLog(@"%@", [date class]);
        ```
    2. 判断
        1. isKindOfClass：该方法需要传入一个Class参数，判断是否是指定类及其子类的实例对象
        2. isMemberOfClass：该方法也需要传入一个Class参数，判断是否是指定类的实例对象
        3. conformsToProtocol：该方法需要传入一个Protocol参数，为了在程序中获取Protocol对象，通常通过两种方法来获取
            1. 使用@Protocol（协议名）来实现
            2. 可调用Protocol * NSProtocolFromString(NSString *namestr);函数来根据协议名字符串来获取对应的协议
    3. 如果程序需要动态地调用对象的setter、getter方法，则可通过OC提供的KVC机制来实现。如果程序需要访问对象的实例变量的值，那么不管这个实例变量是否在类的接口部分定义，也不管该变量使用哪种访问控制符修饰，或者是否在类的实现部分定义，程序都可通过KVC机制来设置、访问实例变量的值。
    4. [OC的类和元类](https://github.com/FrizzleFur/DailyLearning/wiki/OC%E7%9A%84%E7%B1%BB%E5%92%8C%E5%85%83%E7%B1%BB)
7. runtime api -- method
    1. getMethodList1
        ```objective-c
        unsigned int count;
        Method *methods = class_copyMethodList([Person class], &count);
        for (int i = 0; i < count; i++) {
            NSLog(@"%s", sel_getName(method_getName(methods[i])));
        }
        free(methods);
        ```
    2. getMethodList2
        ```objective-c
        unsigned int count;
        Method *methods = class_copyMethodList(object_getClass([Person class]), &count);
        for (int i = 0; i < count; i++) {
            NSLog(@"%s", sel_getName(method_getName(methods[i])));
        }
        free(methods);
        ```
    3. 
8. mime
    ```objective-c
    - (void) requestAPIName:(NSString *)name parameters:(NSDictionary *)parameters callBack:(void(^)(id response, id data))callBack {
        SEL selector = [self getTargetSEL:name];
        if ([self respondsToSelector:selector]) {
            NSArray *tempArray = [selectorStr componentsSeparatedByString:@":"];
            if (tempArray.count - 1 == 2) {  // 有参数有返回值
                ((void (*)(id, SEL, id, void(^)(id response, id data)))objc_msgSend)(self, selector, parameters, callBack);
            } else if (tempArray.count - 1 == 1) {
                NSString *tempStr = @"CallBack:";
                if ([self string:selectorStr containsOtherString:tempStr]) {
                    ((void (*)(id, SEL, void(^)(id response, id data)))objc_msgSend)(self, selector, callBack);
                } else {
                    ((void (*)(id, SEL, id))objc_msgSend)(self, selector, parameters);
                }
            } else if (tempArray.count - 1 == 0) {
                ((void (*)(id, SEL))objc_msgSend)(self, selector);
            }
        }
    }
    - (SEL)getTargetSEL:(NSString *)selName {
        unsigned int count;
        SEL target = nil;
        Method *methods = class_copyMethodList(object_getClass([Person class]), &count);
        for (int i = 0; i < count; i++) {
            if (strcmp(sel_getName(method_getName(methods[i])), [selName UTF8String]) == 0) {
                target = method_getName(methods[i]);
                break;
            }
        }
        free(methods);
        return target;
    }
    ```

### error

### shell
