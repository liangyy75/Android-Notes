https://www.cnblogs.com/skyus/articles/8524408.html<br>
http://www.cplusplus.com/reference/<br>

[在Windows上实现运行Linux程序，附示例代码](https://www.linuxidc.com/Linux/2017-05/143807.htm)<br>
[如何在Windows10上直接运行Linux？](https://baijiahao.baidu.com/s?id=1607159570058814753&wfr=spider&for=pc)<br>
[windows上运行使用linux下面的命令](https://blog.csdn.net/darren2015zdc/article/details/78813811)<br>
[Windows下开发、调试Linux C/C++程序](https://blog.csdn.net/dzhq1984/article/details/77141079)<br>

[【C++拾遗】 从内存布局看C++虚继承的实现原理](https://blog.csdn.net/Xiejingfa/article/details/48028491)
[C++中的虚函数(表)实现机制以及用C语言对其进行的模拟实现](https://blog.twofei.com/496/)
[C和C++的输入输出](https://www.cnblogs.com/yangykaifa/p/6837294.html)
[c++中的操纵符](https://blog.csdn.net/will130/article/details/53816305)
[C/C++基础知识点](https://dablelv.blog.csdn.net/column/info/c-cplusplus)
[最小C++标准](https://www.boost.org/)
[Effective C++笔记](https://blog.csdn.net/caoshangpa/article/category/7478576)

* [C语言基础](##C语言基础)
    * [常量与变量](###常量与变量)
    * [流程控制与循环](###流程控制与循环)
    * [运算符](###运算符)
    * [输出和输入](###输出和输入)
    * [数组](###数组)
    * [函数](###函数)
    * [指针](###指针)
    * [结构体](###结构体)
    * [共同体(联合体)](###共同体(联合体))
    * [枚举](###枚举)
    * [文件操作](###文件操作)
    * [内存分配](###内存分配)
    * [预编译处理](###预编译处理)
    * [常用例子](###常用例子)
* [Cpp语言基础](##Cpp语言基础)
    * [命名空间](###命名空间)
    * [类](###类)
    * [继承](###继承)
    * [多态](###多态)
    * [类大小](###类大小)
    * [引用](###引用)
    * [异常](###异常)
    * [文件IO流](###文件IO流)
    * [函数](###函数)
    * [虚函数](###虚函数)
    * [模板函数与模板类](###模板函数与模板类)
    * [构造函数](###构造函数)
    * [友元函数/类](###友元函数)
    * [类型转换](###类型转换)
    * [内存分配](###内存分配)
    * [运算符重载](###运算符重载)
    * [其他](###其他)
* [高级](##高级)
    * [位域](###位域)
    * [可重入函数](###可重入函数)
    * [bitset](###bitset)
    * [正则表达式](###正则表达式)
    * [多线程](###多线程)
    * [常用API](###常用API)
    * [C++11新特性(未完成)](###C++11新特性%28未完成%29)
    * [C++14新特性(未完成)](###C++14新特性%28未完成%29)
    * [C++17新特性(未完成)](###C++17新特性%28未完成%29)
    * [关键字(19)](###关键字%2819%29)
    * [STL(未完成)](###STL%28未完成%29)
    * [网络(未完成)](###网络%28未完成%29)
    * [C/C++与其他语言交互](###C%2fC++与其他语言交互)
    * [进制转化](###进制转换)
    * [](###)
* [常见问题](##常见问题)
    * [常见问题1](###常见问题1)
    * [常见问题2](###常见问题2)
    * [常见问题3](###常见问题3)
    * [](###)
    * [](###)

**注入DDL**
**类大小**

## C语言基础

### 常量与变量

- C语言常量的声明有两种方式: define/const，区别: 
    - define是在编译时，会自动将声明的变量替换到程序中；
    - const是在运行时，会自动将声明的变量替换到程序中，同时，const可以很容易知道常量的类型。
- C语言基本数据类型有: short、int、long、char、float、double。这里可以提前说(char *)这个类型，这个是字符指针，我们可以把它当作Java的String类型。
- 自定义变量类型名称: 使用typedef关键字可以自定义数据类型的名称。
```c
typedef int my_int;
```

### 流程控制与循环

```c
if ... else if ... else
while ...
do ... while ...
for ...
switch .... case ... default ...
loop: if(i <= 100){
    sum = sum + i++;
    goto loop;
}
```

### 运算符

1. 算术运算符: <、<=、>、>=、==、!=、赋值运算符(=)
2. 逻辑运算符: &&(与)、||(或)、!(非)
3. 位运算符: &(位与)、|(位或)、~(位反)、^(异或)、>>(右移)、<<(左移)
4. 三目运算符: 条件表达式  ?  结果1  :  结果2
5. sizeof运算符: 用来计算变量、常量、数据类型所占用存储空间的字节数
6. 自增自减运算符: ++a，a++，–a，a–

### 输出和输入

[C和C++的输入输出](https://www.cnblogs.com/yangykaifa/p/6837294.html)

```c
// 输出字符
char ch = 'a';
char s[20];
ch = getchar();  // 等用户按下回车后才有输入
// ch = getch();  // 用户每按下一个按键就有输入，输入的字符不会回显在屏幕上。但是getch是非标准函数，需要加载头文件#include<conio.h>
scanf("%c %d %32lf %s", &ch, &i, &l, s);
gets(s);  // 直至接受到换行符或EOF时停止(会读取空格)，要包含#incldue<string>头文件中。换行符不作为读取串的内容，读取的换行符被转换为null值，并由此来结束字符串，一般用来读取用字符数组存储的字符串。
string s2;
std::getline(std::cin, s2);
// cin.get(...);
// cin.getline(...);
fgets(s, 20, stdin);  // 可以用strlen(s)==19或者s[strlen(s) - 1]!='\n'来控制结束一行输入

// 输出字符串
putchar(ch);
puts("hello word");
printf("hello c");
// cout.put(...)
fputs(s, stdout);
```

数据类型 | 数据格式
:- |:-
int | %d
short | %d
long | %ld
float | %f
double | %lf
char | %c
十六进制 | %X
八进制 | %o
字符串 | %s

### 数组

- 一维数组: 
    ```c
    // 创建指定大小一维数组
    int arr[10];
    // 创建自动指定大小一维数组
    int arr[] = {5,6,8,9};
    ```
    - 二维数组: 
    ```c
    int arr[3][4] = {
        {1,2,3,4},
        {5,6,7,8},
        {9,10,11,12}
    };
    ```
- 字符数组
    ```c
    // 字符数组的第一种表现形式，其值是可以修改的
    char str[10] = {'H','e','l','l','o','\0'};
    str[0] = "h";
    // 字符数组的第二种表现形式，其值是不可以修改的
    char *str = "Hello";
    // 输出字符串
    printf("%s",str);
    ```
    这里需要注意字符数组凡是遇到有'\0'出现就判定该字符数组已经到结尾，默认结尾是会自动补上的，否则输出时会出现中文乱码

### 函数

- 无返回值: ```void print(){}```
- 有返回值: ```int add(int a, int b){ return a + b; }```
- 可变参数函数: 
    ```c
    #include <stdarg.h>
    int sum(int len, ...) {
        int i;
        int all = 0;
        va_list args;
        va_start(args, len);
        for(i = 0; i < len; i++) {
            all += va_arg(args, int);
        }
        va_end(args);
        return all;
    }
    ```

### 指针

1. 变量指针: 指针可以理解为Java里面数组，它指向数据存储的内存地址，默认指针是指向数组的第一个数据
    ```c
    int a = 10;
    //定义指针，指向a的存储地址
    int *pa = &a;
    //获取数据的两种方式，输出都是10
    printf("%d", *pa);
    printf("%d", pa[0]);
    //获取数据的内存地址
    printf("%#x", pa);
    ```
2. 无类型指针变量: 无类型指针可以指向任何类型的变量
    ```c
    void *str = "hello world";
    void *a = 5;
    printf("%s", str);
    printf("%d", a);
    ```
3. 函数指针: 指针指向的是一个内存地址，不仅是变量内存地址，函数内存地址也可以
    ```c
    #include <stdio.h>
    #include <stdlib.h>
    void say(int a, int b) {
        printf("Hello");
    }
    int main() {
        void(*func_p)(int, int) = &say;
        func_p(0, 0);
    }
    ```
4. 自定义函数名: 使用typedef关键字自定义函数名
    ```c
    #include <stdio.h>
    #include <stdlib.h>
    void say(int a, int b){
        printf("Hello");
    }
    typedef void(*Func)(int, int);
    int main(){
        Func method = &say;
        method(0, 0);
    }
    ```
5. 指针总结
    - 指针有类型，地址没有类型
    - 地址只是开始的位置，类型表示在什么地方结束
    - 空指针默认值为0，但系统不允许访问空指针地址

### 结构体

1. 结构体: 相当于Java的Bean对象，可以把(struct+结构体名)当作实体对象，进行对象的声明
    ```c
    struct File{
        char *name;
        int size;
    };
    int main(){
        //第一种赋值方式
        struct File file;
        file.name = "abc.txt";
        file.size = 10;
        //第二种赋值方式
        struct File file = {"abc.txt", 10};
    }
    ```
2. 指针结构体
    ```c
    //实体对象
    typedef struct{
        char *name;
        int size;
    } File, *File_p;
    //创建文件
    File* createFile(char *name, int size){
        // 第一种写法
        File *f = malloc(sizeof(File));
        f->name = name;
        f->size = size;
        return f;
        // 第二种写法
        File_p file_p = malloc(sizeof(File_p));
        file_p->name = name;
        file_p->size = size;
        return file_p;
    }
    int main(){
        File *f = createFile("abc.txt", 10);
        printf("%s,%d", f->name, f->size);
        free(f);
    }
    ```
3. 嵌套结构体
    ```c
    // 第一种写法
    struct Teacher{
        char *name;
    };
    struct Student{
        char *name;
        // 嵌套结构体声明
        struct Teacher t;
    };
    // 第二种写法
    struct Student{
        char *name;
        // 嵌套结构体声明
        struct Teacher{
            char *name;
        }t;
    };
    struct Student s1;
    s1.name = "hensen";
    // 嵌套结构体赋值
    s1.t.name = "hensen's teacher";
    ```
4. 结构体数组
    ```c
    struct Teacher ts[] = { {"hensen",21}, {"hensen2",22} };
    // 遍历结构体数组
    struct Teacher *t = ts;
    for (; t < ts + 2; t++){
        printf("%s, %d\n", t->name, t->age);
    }
    ```
5. 结构体大小(字节对齐)
    ```c
    // 大小为16字节，其大小是最宽的基本数据类型的整数倍
    // 提升读取效率
    struct Man{
        int age;
        double weight;
    };
    ```

### 共同体(联合体)

共同体从字面上可以理解使用共同内存地址的一种结构，即共同体里面的属性所存储的值都是一样的，因为它们的内存地址都指向一个地方
(共同体内存地址最大长度 = 所有属性中内存地址长度最大的那个属性)。
```c
typedef union _Fmaily {
    char a;
    int b;
} Fmaily;
int main() {
    Fmaily f;
    f.b = 97;
    // 输出97的ASCLL值，即a
    printf("%c", f.a);
    // 输出97
    printf("%d", f.b);
    return 0;
}
```

### 枚举

枚举只是用来列举所有情况，枚举默认的值从0开始
```c
typedef enum Day{
    Monday,
    Tuesday,
    Webnesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
} MyDay;
int main(){
    //枚举的值，必须是括号中的值
    //值为1
    MyDay day = Monday;
}
```

### 文件操作

```c
File *file = fopen(fileName, mode);
    // r  只读，文件必须存在
    // r+ 可读写，文件必须存在
    // rb+可读写，打开二进制文件
    // rw+可读写，打开文本文件
    // w  只写，文件存在则内容清空，否则新建文件
    // w+ 可读写，文件存在则内容清空，否则新建文件
    // a  以附加的方式打开只写文件。文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾，即文件原先的内容会被保留。(EOF符保留)
    // a+ 以附加方式打开可读写的文件。文件不存在，则会建立该文件，如果文件存在，写入的数据会被加到文件尾，即文件原先的内容会被保留。(原来的EOF符不保留)
    // wb 只写打开或新建一个二进制文件；只允许写数据。
    // wb+读写打开或建立一个二进制文件，允许读和写。
    // ab+读写打开一个二进制文件，允许读或在文件末追加数据。
    // at+打开一个叫string的文件，a表示append，即写入处理的时候是接着原来文件已有内容写入，不是从头写入覆盖掉，t表示打开文件的类型是文本文件，+号表示对文件既可以读也可以写。
char ch = 'A';
char *str = "Hello World";
char buff[1024];
int intBuff[1024];

fputc(ch, file);
fputs(str, file);
fprintf(file， ...);

ch = fgetc(file);
fgets(buff, 1024, file);
fscanf(file, ...);
feof(file);  // 判断是否到文件末尾，如果是其值为真，否则为假

fseek(FILE *stream, long offset, int origin);  // 从origin开始偏移offset字节。origin可能取值为 SEEK_CUR、 SEEK_END 或 SEEK_SET(开头)
int len = fread(intBuff, sizeof(int), 1024, file);
fwrite(intBuff, sizeof(int), len, file);
fseek(file, 0, SEEK_END);
long fileSize = ftell(file);
fclose(file);
```

1. 写文件
    ```c
    FILE * f = fopen("abc.txt", "w");
    if(f != NULL){
        // 写进字符
        fputc('A', f);
        // 写进字符串
        fputs("Hello \nWord", f);
        // 关闭文件流
        fclose(f);
    }
    ```
2. 读文件
    - 通过一串一串的读取
        ```c
        #define _CRT_SECURE_NO_WARNINGS
        // ...
        char buff[1024];
        while (fgets(buff, 1024, file)){
            printf("%s", buff);
        }
        ```
    - 通过一个一个字符读取
        ```c
        char buff[100];
        memset(buff, 0, 100);   // 清空
        for (int i = 0; i < 100; ++i) {
            char ch = fgetc(file);
            if (ch != EOF) {
                buff[i] = ch;
            } else {
                break;
            }
        }
        ```
3. 文件的加密和解密
    ```c
    // 加密
    void crpypt(char normal_path[], char crypt_path[]){
        FILE *normal_fp = fopen(normal_path, "r");
        FILE *crypt_fp = fopen(crypt_path, "w");
        int ch;
        while ((ch = fgetc(normal_fp)) != EOF){
            fputc(ch ^ 9, crypt_fp);
        }
        fclose(crypt_fp);
        fclose(normal_fp);
    }
    // 解密
    void decrpypt(char crypt_path[], char decrypt_path[]){
        FILE *normal_fp = fopen(crypt_path, "r");
        FILE *crypt_fp = fopen(decrypt_path, "w");
        int ch;
        while ((ch = fgetc(normal_fp)) != EOF){
            fputc(ch ^ 9, crypt_fp);
        }
        fclose(crypt_fp);
        fclose(normal_fp);
    }
    ```
4. 二进制文件的复制: 计算机文件存储在物理上都是二进制，读写文本文件与二进制文件的区别体现在回车换行符中。
    - 写文本时，每遇到一个'\n'，会将其转换成'\r\n'
    - 读文件时，每遇到一个'\r\n'，会将其转换成'\n'
    ```c
    void copyFile(){
        char *path = "D:\\workspaceweb\\CSDNMovie\\assets\\imgs\\bg.jpg";
        char *new_path = "D:\\workspaceweb\\CSDNMovie\\assets\\imgs\\new_bg.jpg";
        FILE * file = fopen(path, "rb");
        FILE * new_file = fopen(new_path, "wb");
        int buff[1024];
        int len = 0;
        while ((len = fread(buff, sizeof(int), 1024, file)) != 0){
            fwrite(buff, sizeof(int), len, new_file);
        }
        fclose(file);
        fclose(new_file);
    }
    ```
5. 获取文件的大小
    ```c
    void readFileSize(){
        char *path = "D:\\workspaceweb\\CSDNMovie\\assets\\imgs\\bg.jpg";
        FILE *file = fopen(path, "r");
        // fseek: 移动文件流的读写位置
        // 0是偏移量，SEEK_END表示文件末尾
        fseek(file, 0, SEEK_END);
        // ftell: 取得文件流的读取位置
        long fileSize = ftell(file);
        printf("%d", fileSize);
    }
    ```

### 内存分配

1. C语言内存分配: 
    - 堆区(手动分配、释放): 操作系统80%内存(一般new/delete/malloc/free在这里，而自由存储区可以是堆，也可以是栈(重载new/delete))
    - 栈区(自动分配、释放): windows下，栈内存分配2M(确定的常数)，超出了限制，提示stack overflow错误
    - 全局区或静态区
    - 字符常量区
    - 程序代码区
2. 分配内存的两种方法
    ```c
    int len = 10;
    int *p = calloc(len, sizeof(int));
    int *p = malloc(sizeof(int) * len);
    // realloc方法
    // 参数一: 原来的指针
    // 参数二: 重新分配的总长度
    // 重新分配内存的两种情况: 
    // 缩小，缩小的那一部分数据会丢失
    // 扩大，有以下三种情况
    // 1. 如果当前内存段后面有需要的内存空间，直接扩展这段内存空间，realloc返回原指针
    // 2. 如果当前内存段后面的空闲字节不够，那么使用堆中的第一个能够满足这一要求的内存块，将目前的
    // 数据复制到新的位置，并将原来的数据释放掉，返回新的内存地址
    // 3. 如果申请失败，返回NULL，原来的指针仍然有效
    printf("%#x", p);
    int *p2 = realloc(p, sizeof(int) * (len + 5));
    printf("%#x", p2);
    if (p2 == NULL) {
        printf("重新分配内存失败");
    }
    ```
3. 动态分配内存的注意点
    - 记得free
    - 不能多次释放
    - 释放完之后(指针仍然有值)，给指针置nullptr，标志释放完成
    - 内存泄露(p重新赋值之后，再free，并没有真正释放内存)

### 预编译处理

- 定义标识
    ```c
    // 1、标识支持C++语法
    #ifdef __cplusplus
    // 2.1、防止文件重复引入，老版写法
    #ifndef AH
    #define AH
    #include "B.H"
    void printA();
    #endif
    //2.2、防止文件重复引入，新版写法
    #pragma once
    #include "B.h"
    void printA();
    ```
- 定义常数
    ```c
    #define MAX 100
    ```
- 定义宏函数
    ```c
    void com_jni_read(){
        printf("read\n");
    }
    void com_jni_write(){
        printf("write\n");
    }
    // NAME是参数
    #define jni(NAME) com_jni_##NAME();
    // 使用的时候
    void main() {
        jni(write);
    }
    ```
- 定义多参数的宏函数
    ```c
    #define LOG(LEVEL, FORMAT, ...) printf(##LEVEL); printf(##FORMAT, \_\_VA_ARGS\_\_);
    #define LOG_I(FORMAT, ...) LOG("INFO:", ##FORMAT, __VA_ARGS__);
    #define LOG_E(FORMAT, ...) LOG("ERROR:", ##FORMAT, __VA_ARGS__);
    #define LOG_W(FORMAT, ...) LOG("WARN:", ##FORMAT, __VA_ARGS__);
    //使用的时候
    void main() {
        LOG_E("%s%d", "大小: ", 89);
    }
    ```

### 常用例子

1. 获取0-100随机数
    ```c
    #include <stdlib.h>
    #include <time.h>
    void getRandom(){
        // 生成随机种子
        int len = 10;
        int i = 0;
        int *p = malloc(sizeof(int) * len);
        srand((unsigned)time(NULL));
        for (; i < len; i++) {
            // 生成0-100的随机数
            p[i] = rand() % 100;
            printf("%d\n", p[i]);
        }
        if (p !=  NULL) {
            free(p);
            p = NULL;
        }
        getchar();
    }
    ```
2. 操作cmd
    ```c
    #include <windows.h>
    void openMspaint() {
        system("mspaint");
        system("pause");
    }
    ```
3. **注入Dll**
    ```c
    __declspec(dllexport) void injectDll(){
        // 属性(项目右键)-> 常规(配置类型)-> .dll类型
        // 生成(选择栏)-> 生成解决方案
        // 使用DLLInject工具
        int *p = 0x2ff9d8;
        *p = 99999;
    }
    ```

## Cpp语言基础

### 命名空间

命名空间属性访问和结构体访问以及命名空间的嵌套
```cpp
namespace NSP_A{
    int a = 9;
    struct Student{
        char name[20];
        int age;
    };
    namespace NSP_B{
        int c = 90;
    }
}
void main(){
    //使用命名空间
    cout << NSP_A::a << endl;
    //使用命名空间中的结构体
    using NSP_A::Student;
    Student t;
    cout << NSP_A::NSP_B::c << endl;
}
```

### 类

```cpp
// #define _CRT_SECURE_NO_WARNINGS
#include <stdlib.h>
#include <iostream>
#include <stdarg.h>
#define PI 3.14

using namespace std;

class MyCircle {
private:
    double r;
    double s;
public:
    void setR(double r) {
        this->r = r;
    }
    // 获取面积
    double getS() {
        return PI * r * r;
    }
};
void main() {
    MyCircle c;
    c.setR(4);
    cout << "圆的面积: " << c.getS() << endl;
}
```

**类的大小**: 类的大小只计算普通属性的大小，其他都不包括在内

### 继承

- 向父类构造方法传参
    ```cpp
    class Human {
    public:
        Parent(char* name, int age) {
            this->name = name;
            this->age = age;
        }
    protected:
        char* name;
        int age;
    }
    class Man : public Human {
    public:
        // 给父类构造函数传参，同时给属性h对象赋值
        Man(char *brother, char *s_name, int s_age, char *h_name, int h_age) : Human(s_name, s_age), h(h_name, h_age){
            this->brother = brother;
        }
    private:
        Human h;
    }
    ```
- 多继承的实现
    ```cpp
    class c1 {}
    class c2 {}
    class c3 : public c1, public c2 {}
    ```
- 继承间的访问修饰符
    ```
    基类中        继承方式        子类中
    public     ＆ public继承 = > public
    public     ＆ protected继承 = > protected
    public     ＆ private继承 = > private

    protected  ＆ public继承 = > protected
    protected  ＆ protected继承 = > protected
    protected  ＆ private继承 = > private

    private    ＆ public继承 = > 子类无权访问
    private    ＆ protected继承 = > 子类无权访问
    private    ＆ private继承 = > 子类无权访问
    ```
- 继承的二义性: virtual: 表示虚继承，不同路径继承来的同名成员只有一份拷贝，解决不明确的问题
    ```cpp
    class A{
    public:
        char* name;
    };
    // 这里面加了virtual关键字
    class A1 : virtual public A {};
    // 这里面加了virtual关键字
    class A2 : virtual public A {};
    class B : public A1, public A2 {};
    int main() {
        B b;    
        // 如果程序不加virtual关键字就会导致二义性，系统无法辨识哪个类的name属性，会报错
        b.name = "Hensen";
        // 这里通过指定父类显示调用是可以的
        b.A1::name = "Hensen1";
        b.A2::name = "Hensen2";  // 最终结果会是Hensen2
    }
    ```

### 多态

[C++中的虚函数(表)实现机制以及用C语言对其进行的模拟实现](https://blog.twofei.com/496/)

只有指针或者引用配合virtual才能起到多态的作用

```cpp
// Plane.h文件
#pragma once
// 普通飞机
class Plane{
public:
    virtual void fly();
    virtual void land();
};
// Plane.cpp文件
#include "Plane.h"
#include <iostream>
using namespace std;
void Plane::fly(){
    cout << "起飞" << endl;
}
void Plane::land(){
    cout << "着陆" << endl;
}
```
```cpp
// Jet.h文件
#pragma once
#include "Plane.h"
// 直升飞机
class Jet : public Plane{
    virtual void fly();
    virtual void land();
};
// Jet.cpp文件
#include "Jet.h"
#include <iostream>
using namespace std;
void Jet::fly(){
    cout << "直升飞机在原地起飞..." << endl;
}
void Jet::land(){
    cout << "直升飞机降落在女神的屋顶..." << endl;
}
```
```cpp
#include "Plane.h"
#include "Jet.h"
//业务函数
void bizPlay(Plane& p){
    p.fly();
    p.land();
}
void main(){
    Plane p1;
    bizPlay(p1);
    // 直升飞机
    Jet p2;
    bizPlay(p2);
}
```

1. 用virtual关键字申明的函数叫做虚函数，虚函数肯定是类的成员函数。
2. 存在虚函数的类都有一个一维的虚函数表叫做**虚表**，类的对象有一个指向虚表开始的虚指针。虚表是和类对应的，虚表指针是和对象对应的。
3. 多态性是一个接口多种实现，是面向对象的核心，分为类的多态性和函数的多态性。
4. 多态用虚函数来实现，结合动态绑定。
5. 纯虚函数是虚函数再加上 = 0；
6. 抽象类是指包括至少一个纯虚函数的类。(抽象类不能创建对象)

编译时，会找到所有对象的非虚函数的地址，进行绑定，称为早绑定(这时如果父类型引用的子对象调用父对象和子对象都有的非虚函数时，会调用父对象的那一个)；
运行时，才会去虚表查看所有对象的虚函数的地址(即使使用父类型引用(指针或者引用)，但是指针指向的仍然是子类型的虚函数表)。

一个类的实例要么在堆上，要么在栈上。也就是说一个类可以有很多很多个实例。但是！一个类只能有一个虚函数表。在编译时，一个类的虚函数表就确定了，这也是为什么它放在了只读数据段中。
虚函数表中有很多指向代码段中的虚函数的虚函数指针。

C++中基类采用virtual虚析构函数是为了防止内存泄漏。具体地说，如果派生类中申请了内存空间，并在其析构函数中对这些内存空间进行释放。假设基类中采用的是非虚析构函数，当删除基类指针指向的派生类对象时就不会触发动态绑定，因而只会调用基类的析构函数，而不会调用派生类的析构函数。那么在这种情况下，派生类中申请的空间就得不到释放从而产生内存泄漏。所以，为了防止这种情况的发生，C++中基类的析构函数应采用virtual虚析构函数。

基类的虚函数表和子类的虚函数表不是同一个表。如果子类没有重写任何父类虚函数或者没有新的虚函数，那么子类的虚函数表和父类的虚函数表在内容上是一致的。**之所以实现了多态完全是因为子类的虚函数表指针与虚函数表的内容与基类不同**。

**在多继承情况下，有多少个基类就有多少个虚函数表指针，前提是基类要有虚函数才算上这个基类**。当子类有多出来的虚函数时，添加在第一个虚函数表中。
当有多个虚函数表时，虚函数表的结尾是0代表没有下一个虚函数表。" * "号位置在不同操作系统中实现不同，代表有下一个虚函数表。

注意：

1. 子类虚函数会覆盖每一个父类的每一个同名虚函数。
2. 父类中没有的虚函数而子类有，填入第一个虚函数表中，且用父类指针是不能调用。
3. 父类中有的虚函数而子类没有，则不覆盖。仅子类和该父类指针能调用。

### 类大小

类的大小: 

1. 虚表需要一个指针，所以多8byte。
2. 多继承比较复杂: 
    ```cpp
    // Base加了虚表后
    // Base: 8;
    // Child0(Base): 8;
    // Child1(virtual Base): 8;
    // Child2(virtual Base): 8;
    // Child3(Child1, Child2, Base2): 16;
    // Child4(virtual Base, Child1): 8;
    // Child5(Base, Child1): 16;
    // Child6(Base, Base2, Base3): 8;
    // Child7(virtual Base): 8;
    // Child8(Child1, Child2, Child7): 24;
    // Child9(Base, Child0) 16;
    // GrandChild0(Child0): 8;
    // GrandChild1(Child4): 8;

    // Base: 1;
    // Child0(Base): 1;
    // Child1(virtual Base): 8;
    // Child2(virtual Base): 8;
    // Child3(Child1, Child2, Base2): 16;
    // Child4(virtual Base, Child1): 8;
    // Child5(Base, Child1): 16;
    // Child6(Base, Base2, Base3): 1;
    // Child7(virtual Base): 8;
    // Child8(Child1, Child2, Child3): 32;
    // Child9(Base, Child0) 2;
    // GrandChild0(Child0): 1;
    // GrandChild1(Child4): 8;

    // 
    ```
3. 剩下的计算字段大小，没有字段的就有基本的1byte。
4. **为什么结构体/类/联合体/嵌套结构体/嵌套联合体等要内存对齐**: 
    1. 经过内存对齐之后，CPU的内存访问速度大大提升。内存空间按照byte划分，从理论上讲似乎对任何类型的变量的访问可以从任何地址开始，但实际情况是在访问特定变量的时候经常在特定的内存地址访问，这就需要各类型数据按照一定的规则在空间上排列，而不是顺序的一个接一个的排放，这就是对齐。
    2. 特别注意的是: c结构体中不允许定义static变量; C++结构体中可以定义static变量,sizeof时不计算该变量, 但需注意初始化格式。

### 引用

- 引用的使用: ``int a = 10; int &b = a; cout << b << endl;``
- 引用与指针的区别
    - 不存在空引用，引用必须连接到一块合法的内存。
    - 一旦引用被初始化为一个对象，就不能被指向到另一个对象。指针可以在任何时候指向到另一个对象。
    - 引用必须在创建时被初始化。指针可以在任何时间被初始化。
- 引用与指针写法上的差异
    ```cpp
    struct Teacher{
        char* name;
        int age;
    };
    //带有结构体指针的写法
    void myprint(Teacher *t){
        cout << t->name << ", " << t->age << endl;   
        // (*t).name 
    }
    //带有结构体引用的写法
    void myprint2(Teacher &t){
        cout << t.name << ", " << t.age << endl;
        t.age = 21;
    }
    // 指针值交换
    void swap_1(int *a, int *b){
        int c = *a;
        *a = *b;
        *b = c;
    }
    // 引用值交换
    void swap_2(int &a, int &b){
        int c = a;
        a = b;
        b = c;
    }
    void main(){
        Teacher t;
        t.name = "Hensen";
        t.age = 20;
        myprint(&t);
        myprint2(t);

        int x = 10;
        int y = 20;
        swap_1(&x, &y);
        swap_2(x,y);
    }
    ```
- 引用的作用
    - 把引用作为参数: C++支持把引用作为参数传给函数，这比传一般的参数更安全
    - 把引用作为返回值: 可以从C++函数中返回引用，就像返回其他数据类型一样
- 指针引用，代替二级指针
    ```cpp
    struct Teacher{
        char* name;
        int age;
    };
    // 引用的写法
    void getTeacher(Teacher* &p){
        p = (Teacher*)malloc(sizeof(Teacher));
        p->age = 20;
    }
    // 二级指针的写法，原本应该这样写，但是已经被引用的写法代替了
    void getTeacher(Teacher **p){
        Teacher *tmp = (Teacher*)malloc(sizeof(Teacher));
        tmp->age = 20;
        *p = tmp;
    }
    int main(){
        Teacher *t = NULL;
        // 传递引用的指针t，相当于二级指针
        getTeacher(&t);
    }
    ```
- 常引用，类似于java中final: 如果是一个对象，则这个对象中的数据属性只能使用而不能修改了。
    ```cpp
    //常引用在方法中的引用
    void myprint(const int &a){
        cout << a << endl;
    }
    int main(){    
        // 引用必须要有值，不能为空，下面写法是错误的
        // const int a;
        // int &a = NULL;

        // 常引用属性使用一
        int a = 10, b = 9;
        const int &c = a;
        //常引用属性使用二
        const int &d = 70;
    }
    ```
- 引用与指针的大小
    ```cpp
    struct Teacher{
        char name[20];
        int age;
    };
    int main(){
        Teacher t;
        //引用
        Teacher &t1 = t;
        //指针
        Teacher *p = &t;
        //结果是24，引用相当于变量的别名
        cout << sizeof(t1) << endl;
        //结果是8，指针只是存放的地址
        cout << sizeof(p) << endl;
    }
    ```
- 右值引用: int && a = 1(只能是右值，即能立刻计算出来的东西吧);

### 异常

1. C++异常处理，会根据抛出的异常数据类型，进入到相应的catch块中
    ```cpp
    int main() {
        try {
            if (300 > 200) throw 9.8;
        } catch (int a) {
            cout << "int异常" << endl;
        } catch (char* b) {
            cout << b << endl;
        } catch (...) {
            cout << "未知异常" << endl;
        }
    }
    ```
2. 向下抛出异常
    ```cpp
    void mydiv(int a, int b) {
        if (b == 0) throw "除数为零";
    }
    void func() {
        try {
            mydiv(8, 0);
        } catch (char* a) {
            throw a;
        }
    }
    int main() {
        try {
            func();
        } catch(char* a) {
            cout << a << endl;
        }
    }
    ```
3. 抛出对象(指针或者引用捕获)
    ```cpp
    class MyException {};
    void mydiv(int a, int b) {
        if (b == 0) {
            throw MyException();
            // 不要抛出异常指针
            // throw new MyException;        
        }
    }
    int main() {
        try {
            mydiv(8,0);
        } catch (MyException& e2) {
            cout << "MyException引用" << endl;
        } catch (MyException* e1) {
            cout << "MyException指针" << endl;        
            // 指针的话需要手动释放内存
            delete e1;
        }
    }
    ```
4. 方法抛出异常
    ```
    void mydiv(int a, int b) throw (char*, int) {
        if (b == 0) throw "除数为零";
    }
    ```
5. 标准异常以及捕获所有异常
    ```cpp
    //需要导入标准异常的依赖库
    #include <stdexcept>
    class NullPointerException : public exception {
    public:
        NullPointerException(char* msg) : exception(msg){}
    };
    void mydiv(int a, int b) {
        if (b > 10) {
            throw out_of_range("超出范围");
        } else if (b == NULL) {
            throw NullPointerException("为空");
        } else if (b == 0) {
            throw invalid_argument("参数不合法");
        }
    }
    int main() {
        try {
            mydiv(8, NULL);
        } catch (out_of_range e1) {
            cout << e1.what() << endl;
        } catch (NullPointerException& e2) {
            cout << e2.what() << endl;
        } catch (...) {
            cout << "未知异常" << endl;
        }
    }
    ```
6. 外部类异常
    ```cpp
    class Err {
    public:
        class MyException{
            public: MyException(){}
        };
    };
    void mydiv(int a, int b) {
        if (b > 10) throw Err::MyException();
    }
    ```

### 文件IO流

```cpp
ios_base::in 可读
ios_base::out 可写
ios_base::app 写前定位到文件末尾(只要没有trunc就可以设定)
ios_base::ate 打开后定位到文件末尾
ios_base::trunc 截短文件(只有out的时候才能设定，默认会清空文件，所以一般打开文件都是ios::in | ios::out | ios::app，这样就不会清空文件了)
ios_base::binary 二进制形式进行IO

fstream f("path", ios_base::in | ios::base::out);
f.close();
f.open("path", ios::in | ios::out | ios::app);
f.is_open(); f.bad();  // 都是打开失败时设置true/false
f.eof();  // 当f >> s不能时(即发现不能写入数据时)就将eof_flag置为true
f.fail();  // 文件不存在时 | 文件不能创建时 | eof_flag=true时 | 非法的格式，例如当你期望数字的时候，而文件里面却是字母

f.get(ch);
f.read(buf, size).readsome(buf, size);
f.getline(buf, size).getline(buf, size, _delim);

f.put(ch);
f.write(buf, size);
```

[c++中的操纵符](https://blog.csdn.net/will130/article/details/53816305)

```cpp
// 普通文件
#include <fstream>
ofstream fout(fname);   // 输出流
if (fout.bad()) return; // 创建失败
fout << "写入文件" << endl;
fout.close();           // 关闭输出流
ifstream fin(fname);
if (fin.bad()) return;
char ch;
while (fin.get(ch)) cout << ch;
fin.close();
// 二进制文件
ifstream fin(fname, ios::binary);
ofstream fout(fname, ios::binary);
if (fin.bad() || fout.bad()) return;
while (!fin.eof()) {
    char buff[1024] = {0};
    fin.read(buff, 1024);
    fout.write(buff, 1024);
}
fin.close();
fout.close();
// C++对象的持久化
class Person {
public:
    Person(){}
    Person(char *n, int a): name(n), age(a) {}
    void print() { cout << name << "," << age << endl; }
private:
    char *name;
    int age;
}
int main() {
    Person p1("Hensen", 22);
    Person p2("HensenBoy", 18);
    //输出流
    ofstream fout("c://c_obj.data", ios::binary);
    fout.write((char*)(&p1), sizeof(Person));
    fout.write((char*)(&p2), sizeof(Person));
    fout.close();
    //输入流
    ifstream fin("c://c_obj.data", ios::binary);
    Person tmp;
    fin.read((char*)(&tmp), sizeof(Person));
    tmp.print();
    fin.read((char*)(&tmp), sizeof(Person));
    tmp.print();
}
```

### 函数

- 函数的重载、重写
    - 重载
        - 要在同一作用域
        - 子类无法重载父类函数，父类同名函数将被隐藏
        - 重载是在编译期间根据参数类型和个数决定的
    - 重写
        - 在子类中定义与父类中原型相同的函数
        - 函数重写只发生在父类与子类之间
        - 使用virtual关键字申明后能产生多态
        - 运行期间根据具体对象类型决定调用的函数
- 可变参数函数
    ```cpp
    #include <stdarg.h>
    void test(int i, ...) {
        va_list args_p;         // 可变参数指针
        va_start(args_p, i);    // 可变参数设置开始位置: i表示可变参数的前一位参数，从i开始，后面的就是可变参数
        int a = va_arg(args_p, int);
        char b = va_arg(args_p, char);
        int c = va_arg(args_p, int);
        cout << a << endl << b << endl << c << endl;
        va_end(args_p);         // 可变参数设置结束
    }
    int main() {
        test(9, 20, 'b', 30);
    }
    // 可变参数也可以循环读取，但是必须保证所有数大于0使用
    void test2(int i, ...) {
        va_list args_p;
        va_start(args_p, i);
        int value;
        while (1) {
            value = va_arg(args_p, int);
            if (value <= 0) break;
            cout << value << endl;
        }
        va_end(args_p);
    }
    ```
- 静态属性和方法
    ```cpp
    class Teacher {
    public:
        // 计数器
        static int total;
    public:
        Teacher() {
            cout << "Teacher有参构造函数" << endl;
        }
        //计数，静态函数
        static void count(){
            total++;        
            cout << total << endl;
        }
    };
    //静态属性初始化赋值
    int Teacher::total = 9;
    void main() {
        //静态变量的使用
        Teacher::total++;
        cout << Teacher::total << endl;
        //静态方法的使用一
        Teacher::count();
        //静态方法的使用二
        Teacher t1();
        t1.count();
    }
    ```
- 常量对象和常函数
    ```cpp
    // 常函数，当前对象不能被修改，防止数据成员被非法访问(象征意义，一个不修改当前对象的成员方法可以用const修饰)
    class Test {
    private:
        int num;
    public:
        void test1() const { cout << "test1: " << num << endl; }
        void test2() { cout << "test2: " << num << endl; }
    }
    int main() {
        Test t1 = Test();
        t1.test1();
        t1.test2();
        const Test t2 = Test();
        t2.test1();
        // t2.test2();  // 常量对象只能调用常量函数，不能调用非常量函数
    }
    ```

### 虚函数

1. 纯虚函数(类似于抽象类)
    - 当一个类具有一个纯虚函数，这个类就是抽象类
    - 抽象类不能实例化对象
    - 子类继承抽象类，必须要实现纯虚函数，如果没有，子类也是抽象类
    ```cpp
    class Shape {
    public:
        virtual void sayArea() = 0;
        void print() { cout << "hi" << endl; }
    }
    ```
2. 接口
    ```cpp
    class Drawable {
        virtual void draw() { printf("virtual method can have body"); }
    }
    ```

### 模板函数与模板类

1. 模板函数使用，相当于泛型
    ```cpp
    template <typename T>
    void mySwap(T& a, T& b) {
        T temp = a;
        a = b;
        b = temp;
    }
    // 使用
    mySwap<int>(a, b);
    ```
2. 模板类使用
    - 基本
        ```cpp
        template<class T>
        class Test {
        public:
            Test(T _a): a(_a) {}
        private:
            T a;
        }
        // 使用
        Test<int> a(6);
        ```
    - 普通类继承模板类
        ```cpp
        class Test2 : public Test<int> {
        public:
            Test2(int a, int _b): Test<int>(a), b(_b) {}
        private:
            int b;
        }
        ```
    - 模板类继承模板类
        ```cpp
        template <class T, class E>
        class Test3 : public Test<T> {
        public:
            Test3(E _b, T _a) : Test<T>(_a), b(_b) {}
        private:
            E b;
        };
        ```

### 构造函数

函数分为三种

- 构造函数
- 析构函数
- 拷贝函数

1. 无参构造函数和有参构造函数
    ```cpp
    // 无参构造函数会覆盖默认的无参构造函数
    // 有参构造函数会覆盖默认的构造函数
    // 有两种构造函数调用方式: 
    Test3<int, char> a(6, 'a');
    Test3<int, char> b = Test3<int, char>(6, 'a');
    ```
2. 析构函数: 当对象要被系统释放时，析构函数被调用，一般使用于程序的善后工作
3. 拷贝构造函数
    ```cpp
    // 默认拷贝构造函数，就是值拷贝
    // 拷贝构造函数写法如下
    class Test4 {
    public:
        Test4(int n) : num(n) {}
        Test4(const Test& t) : num(t.num) {} // 注意这个num(t.num)这个写法只能用于派生类，而无法用于像 Test3(cosnt Test3& t) : Test<T>(t.a) 这样的操作，因为这里是**Test3**的类范围，无法使用Test的属性a。
    private:
        int num;
    }
    // 使用
    void test(Test4 t) {}
    Test4 t1(1);
    Test4 t2(t1);   // 这个就是自己实现的拷贝构造函数了
    test(t2);       // 这个也是调用自己实现的拷贝构造函数了，因为覆盖了
    t1 = t2;        // 这个不会调用拷贝函数
    // 拷贝构造函数被调用的场景: 
    // - 声明时直接调用: Teacher t2(t1);
    // - 声明时赋值: Teacher t2 = t1;
    // - 作为参数传入，实参给形参赋值: 上面的写法就是
    // - 作为函数返回值返回，给变量初始化赋值: Teacher t3 = func1(t1);
    ```
4. 拷贝函数的问题，浅拷贝(值拷贝)问题
    ```cpp
    #include <string.h>
    #include <stdlib.h>
    class Test5 {
    private:
        char *str;
    public:
        Test5(char *s) {
            str = (char*)malloc(100);
            strcpy(str, s);
        }
        // Test5(const Test5& t) : str(t.str) {}    // 相当于默认的
        ~Test5() { free(str); }
    };
    int main() {
        Test5 t1("wtf");
        Test5 t2 = t1;
    }
    // 这样的使用，会导致t1和t2都调用析构函数，导致同一份内存被释放两次，结果程序会报错
    ```
5. 解决浅拷贝问题，使用深拷贝: 深拷贝很好理解，其实就是将参数进行再一次分配内存，这样的程序就不会出错
    ```cpp
    class Test5 {
    private:
        char *str;
    public:
        Test5(char *s) {
            str = (char*)malloc(strlen(s));
            strcpy(str, s);
        }
        Test5(const Test5& t) {
            str = (char*)malloc(strlen(t.str));
            strcpy(str, t.str);
        }
        ~Test5() { free(str); }
    };
    ```
6. 构造函数初始化属性写法: ``Test6(char *s) : str(s) {}``
7. 析构函数和构造函数的执行顺序: 父类构造函数先调用，子类的析构函数先调用
8. 类字段的初始化顺序: 按照类中字段属性的顺序来初始化。

### 友元函数

1. 友元函数: 使得类的私有属性可以通过友元函数进行访问
    ```cpp
    class A {
        // 友元函数声明
        friend void modify_i(A *p, int a);
    private:
        int i;
    public:
        A(int i) : i(i) {}  // 原来可以同名
        void printi() { cout << i << endl; }
    }
    // 友元函数的实现
    void modify_i(A *p, int a) { p->i = a; }
    int main() {
        A* a = new A(10);
        a->printi();
        modify_i(a, 20);
        a->printi();
        delete a;
    }
    ```
2. 友元类
    ```cpp
    class A {
        friend class B; // 友元类声明，表示B这个友元类可以访问A类的任何成员
    private:
        int i;
    public:
        // ...
    }
    class B {
    private:
        A a;
    public:
        void modify_A() { a.i = 10; }
    }
    ```

### 类型转换

C++类型转换分为4种

- static_cast: 类型转换，意图明显，增加可阅读性
- const_cast: 常量的转换，将常量取出，并可以对常量进行修改
- dynamic_cast: 父类类型转为子类类型
- reinterpret_cast: 函数指针转型，不具备移植性

```cpp
int a = 'X';
// C的写法
char *c_p = (char*)a;
// C++的写法
char *cpp_p = static_cast<char*>(a);

void func(const char c[]) {
    // C的写法
    char *c_p = (char*)c;
    c_p[0] = 'X';
    // C++的写法
    char *cpp_p = const_cast<char*>(c);
    cpp_p[1] = 'Y';
    cout << c << endl;
}

void func(Person *obj) {
    // C的写法，C只会调用传递过来的对象方法，并不知道转型失败这回事
    // Man *m = (Man*)obj; m->print();
    // C++的写法，dynamic_cast如果转型失败，会返回NULL，保证了代码的安全性
    Man *m = dynamic_cast<Man*>(obj);
    if (m != NULL) m->chasing();
    Woman *w = dynamic_cast<Woman*>(obj);
    if (w != NULL) w->carebaby();
}

void func1(){
    cout << "func1" << endl;
}
char* func2(){
    cout << "func2" << endl;
    return "abc";
}
typedef void(*f_p)();
int main() {
    // 函数指针数组
    f_p f_array[6];
    f_array[0] = func1;
    // C的写法
    // f_array[1] = (f_p)(func2);
    // C++方式
    f_array[1] = reinterpret_cast<f_p>(func2);
    // 调用方法
    f_array[1]();
}
```

### 内存分配

C++ 通过new(delete)动态内存分配

- 使用new的方式: 和malloc一样的功能，但是会自动调用构造函数
- 使用delete的方式: 和free一样的功能，但是会自动调用析构函数
- 指针的malloc、free可以和new、delete互相掺杂使用，但是malloc、free不会调用构造函数和析构函数

### 运算符重载

1. 运算符重载的写法一
    ```cpp
    class Point{
    public:
        int x, y;
    public:
        Point(int x = 0, int y = 0) : x(x), y(y) {}
        void myprint(){ cout << x << "," << y << endl; }
    };
    Point operator+(Point &p1, Point &p2){
        return Point(p1.x + p2.x, p1.y + p2.y);
    }
    int main(){
        Point p1(10, 20);
        Point p2(20, 10);
        Point p3 = p1 + p2;
        // 输出结果30，30
        p3.myprint();
    }
    ```
2. 运算符重载的写法二
    ```cpp
    class Point{
    public:
        int x, y;
    public:
        Point(int x = 0, int y = 0) : x(x), y(y) {}
        Point operator+(Point &p2){
            return Point(this->x + p2.x, this->y + p2.y);
        }
        void myprint(){ cout << x << "," << y << endl; }
    };
    int main(){
        Point p1(10, 20);
        Point p2(20, 10);
        // 运算符的重载，本质还是函数调用
        // p1.operator+(p2)
        Point p3 = p1 + p2;
        p3.myprint();
    }
    ```
3. 通过友元函数和运算符重载访问私有变量
    ```cpp
    class Point {
        friend Point operator+(Point &p1, Point &p2);
    private:
        int x, y;
    public:
        Point(int x = 0, int y = 0) : x(x), y(y) {}   
        void myprint(){ cout << x << "," << y << endl; }
    };
    Point operator+(Point &p1, Point &p2){
        return Point(p1.x + p2.x, p1.y + p2.y);
    }
    int main(){
        Point p1(10, 20);
        Point p2(20, 10);
        // 运算符的重载，本质还是函数调用
        // p1.operator+(p2)
        Point p3 = p1 + p2;
        p3.myprint();
    }
    ```

### 其他

1. 布尔类型(bool): 布尔类型的值非0的都为true，布尔类型的值等于0的都为false
<!-- 2. 三目运算符: 三目运算符可以作为参数进行赋值
    ```cpp
    // int a = 10, b = 20;
    // ((a > b) ? a : b) = 30 ;
    ``` -->
3. 指针常量与常量指针
    - 指针常量(int *const p): 指针的常量，表示不可以修改p的地址，但是可以修改p的内容
    - 常量指针(const int *p): 指向常量的指针，表示不可以修改p的内容，但是可以修改p的地址
4. 指针函数与函数指针
    - 指针函数(int *fun(x,y)): 指向指针的函数，其实可以说是返回指针的函数
    - 函数指针(int (*fun)(x,y); funa = fun; funb = fun;): 指向函数的指针

## 高级

### 位域

在C语言的结构体中如果包含了位域，**如果位域A定义在位域B之前，那么位域A总是出现在低序的比特位**。

从上面的输出可以看到同样的代码在不同的机器中输出了不同的结果，也就是说我们的代码在不同的平台不能直接移植，导致这个问题的原因就是我们前面提到的关于位域的一个约定，定义在前面的位域总是出现在低地址的bit位中，因为不同的平台的比特序是不同的，但是我们定义的位域没有根据平台的大小端进行转换，最后就导致了问题。那么如何解决这个问题，那就是在定义结构体中的位域时判断平台的大小端：

```cpp
#include<asm/byteorder.h>  // 好像要导入什么
struct bit_order{
#if defined(__LITTLE_ENDIAN_BITFIELD)
    unsigned char a: 2,
                  b: 3,
                  c: 3;
#elif defined(__BIG_ENDIAN_BITFIELD)
    unsigned char c: 3,
                  b: 3,
                  a: 2;
#else
#error "Please fix <asm/byteorder.h>"
#endif
};

// 或者

#define IS_LITTLE ({  \
    float a = -1; \
    (((((char *)(&a))[sizeof(float) - 1] >> 7) & 1) ? true : false); })
```

```cpp
union FloatNumber {
    float f;
    struct {
        unsigned d : 23;
        unsigned e : 8;
        unsigned s : 1;
    };
};

union DoubleNumber {
    double d_num;
    struct {
        unsigned d2 : 32;  // 这些就是位域，取小端存储的d_num中前32位，注意必须为32位，否则会认为是unsigned long类型，与d_num无关。
        unsigned d1 : 20;
        unsigned e : 11;
        unsigned s : 1;
    };
};
// 注意，必须按照这种顺序，因为double/float按小端存储(可以看看操作系统原理.md)，数据位在前，指数位在中，符号位在后。

#define TO_BINARY(num, val) ({ \
    int i = 0x01; \
    char r[num + 1]; \
    for (int j = 0; j < num; j++, i <<= 1) { \
        r[num - j - 1] = (val & i ? '1' : '0'); \
    }; \
    r[num] = '\0'; \
    r; })

#define MY_FLOAT_S_TO_BINARY(val) TO_BINARY(1, int(val))

#define MY_FLOAT_E_TO_BINARY(val) TO_BINARY(8, int(val))

#define MY_FLOAT_D_TO_BINARY(val) TO_BINARY(23, int(val))

#define MY_DOUBLE_S_TO_BINARY(val) TO_BINARY(1, int(val))

#define MY_DOUBLE_E_TO_BINARY(val) TO_BINARY(11, int(val))

#define MY_DOUBLE_D1_TO_BINARY(val) TO_BINARY(20, int(val))

#define MY_DOUBLE_D2_TO_BINARY(val) TO_BINARY(32, int(val))
```

### 可重入函数

[C语言函数重入](https://www.cnblogs.com/pukaifei/p/5475626.html)

### bitset

```cpp
#include <bitset>

using namespace std;

bitset<4> a;  // 无参构造函数，长度为4，全0
bitset<8> b(12);  // 长度为8，二进制保存数据，前面用0补充
bitset<10> c("1011");  // 长度为10，二进制保存数据，这里的数据是0b1011，前面用0补全。用字符串构造时，字符串只能包含 '0' 或 '1' ，否则会抛出异常。
printf("%d %d %d\n", a, b, c);  // 输出 0 12 11
cout << a << " " << b << " " << c << endl;  // 输出 0000 00001100 0000001011
// 在进行有参构造时，若参数的二进制表示比bitset的size小，则在前面用０补充(如上面的栗子)；若比bitsize大，参数为整数时取后面部分，参数为字符串时取前面部分

a ^ b; a & b; a | b; a ^= b; a &= b; a |= b;
a << 2; a >> 2; a <<= 2; a >>= 2; ~a;
a == b; a != b;
cout << a[0] << a[1] << a[2] << endl;  // 000，注意a[index]这样的不能用%d来表示

a.size();  // 求bitset的大小，一共有4位
a.count();  // 求bitset中1的位数
a.test(index);  // 如果a[index]=1，那么返回true。test函数会对下标越界作出检查，而通过[]访问元素却不会经过下标检查，所以，在两种方式通用的情况下，选择test函数更安全一些
a.any();  // 检查bitset中是否有1
a.none();  // 检查bitset中是否没有１
a.all();  // 检查bitset中是否全为1

a.flip();  // 将a完全反转
a.flip(index);  // 将a[index]反转，即1变0，0变1
a.set();  // 将a中全部位置置为1
a.set(index);  // a[index]=1
a.set(index, value);  // a[index]=value
a.reset();  // 将a中全部位置置为0
a.reset(index);  // 将a[index]=0
// 上面的操作不仅修改a，还返回修改后的a，所以 a.set(1).reset(2) ==> a为2
// 同样，它们也都会检查下标是否越界，如果越界就会抛出异常

string s = a.to_string();
unsigned long ul = a.to_ulong();
unsigned long long ull = a.to_ullong();
```

### 正则表达式

```cpp
regex regInstance("\\w+day");
regex_match(string, smatch, regex);
regex_search(string, smatch, regex);
sregex_iterator it(str.begin(), str.end(), regex);
sregex_iterator end;
smatchInstance.str(index=0);  // 注意regex中的分组以遇到的括号顺序排序
smatchInstance[index];
it.str();
```

```cpp
#include <regex>

regex reg1("\\w+day");
string s1 = "saturday";
string s2 =  "saturday and sunday";

// 全字符串匹配
smatch r1;
smatch r2;
cout << boolalpha << regex_match(s1, r1, reg1) << endl;  // true  // 匹配整个字符串
cout << boolalpha << regex_match(s2, r2, reg1);  // false
cout << r1.str() << endl << r2.str() << endl;  // saturday\n空

// 返回第一个匹配的结果
smatch r3;
smatch r4;
cout << boolalpha << regex_search(s1, r3, reg1) << endl;  // true
cout << boolalpha << regex_search(s2, r4, reg1) << endl;  // true
cout << r3.str() << endl << r4.str() << endl;  // saturday\\nsaturday

// 返回所有匹配的结果
sregex_iterator it(s2.begin(), s2.end(), regex);
sregex_iterator end;
while (it != end) {
    cout << it->str() << endl;
    it++;
}

// 子表达式匹配
regex reg2("(\\d{1,3}):(\\d{1,3}):(\\d{1,3}):(\\d{1,3})");
string ip = "0:11:222:333";
smatch m1;
regex_match(ip, m1, reg2);
cout << m1.str() << endl << m1.str(1) << endl << m1.str(2) << endl << m1.str(3) << endl << m1.str(4) << endl;  // 0:11:222:333\\n0\\n11\\n222\\n333
cout << m1[0] << endl << m1[1] << endl << m1[2] << endl << m1[3] << endl << m1[4] << endl;  // 0:11:222:333\\n0\\n11\\n222\\n333

// 所有匹配结果的子表达式
string ip2 = "0:11:222:333 4:55:66:7";
sregex_iterator it2(ip2.begin(), ip2.end(), reg2);
while (it2 != end) {
    cout << it2.str() << endl << it2.str(1) << endl << it2.str(2) << endl << it2.str(3) << endl << it2.str(4) << endl;
    // cout << it2[0] << endl << it2[1] << endl << it2[2] << endl << it2[3] << endl << it2[4] << endl;  // sregex_iterator没有重载it
    it2++;
}
```

### 多线程

[pthread线程深入理解](https://blog.csdn.net/lovecodeless/article/details/24468107)<br>

1. 线程
    ```c
    #include <pthread.h>
    #include <semaphore.h>

    int error_code = pthread_create(pthread_t *thread, const pthread_attr_t, void *(*start_function)(void*), void *arg);
    // 线程ID指针，本质上是线程ID的写入地址；线程属性参数；线程运行函数地址；运行时函数参数；
    // pthread_t原型是unsigned long int ，用于存储线程的ID。在系统中，每个线程都有唯一的线程ID，用于管理线程。
    // error_code 为 0 就正常
    void pthread_exit(void *ret);   // ret: 地址指针，本质上是返回值写入的地址。
    // 终止线程是线程的主动行为，一个线程调用pthread_exit，终止线程自身。线程终止会释放**线程特定数据**，线程特定数据为线程专有。
    // 由于线程共享全局数据，故线程退出不会释放进程的全局数据。所以如果main线程使用了这个方法，则在main退出了其他线程还会执行，而不是像正常的守护线程与用户线程那样。
    int pthread_join(pthread_t thread, void **value_ptr);
    // 等待线程终止pthread_join会阻塞调用线程，直到其指定的线程终止。pthread_join通过第一个参数: 线程ID来指定线程。调用者调用pthread_jion等待一个特定线程终止，
    // 在这种情况下，调用者可能需要这个特定线程的返回值，pthread_join通过将value_ptr的地址赋值给特定线程的pthread_exit的ret获取**返回值**。
    int pthread_detach(pthread_t thread);
    // http://www.runoob.com/cplusplus/cpp-multithreading.html
    ```
2. 互斥量/锁
    ```c
    int pthread_mutex_init(pthread_mutex *mutex, const pthread_mutexattr_t* mutexattr);
    // 互斥量指针; 互斥量属性指针(一般设为NULL)
    int pthread_mutex_lock(pthread_mutex *mutex);
    int pthread_mutex_unlock(pthread_mutex *mutex);
    int pthread_mutex_destroy(pthread_mutex *mutex);
    ```
3. 信号量
    ```c
    int sem_init(sem_t *sem, int pshared, unsigned int val);
    // 信号量指针; 信号量类型(一般设置为0); 信号量初始值。第二个参数pshared为0时，该进程内所有线程可用，不为0时不同进程间可用。
    int sem_wait(sem_t *sem);
    // 该函数申请一个信号量，当前无可用信号量则等待，有可用信号量时占用一个信号量，对信号量的值减1。p
    int sem_post(sem_t *sem);
    // 该函数释放一个信号量，信号量的值加1。v
    int sem_destory(sem_t *sem);
    // 该函数销毁信号量。
    // 例子: https://blog.csdn.net/lovecodeless/article/details/24919511
    // 采用信号量机制，解决苹果橙子问题: 一个能放N(这里N设为3)个水果的盘子，爸爸只往盘子里放苹果，妈妈只放橙子，女儿只吃盘子里的橙子，儿子只吃苹果。
    ```
4. 条件变量
    ```c
    // 互斥能很好的处理共享资源访问的协调问题，是多线程同步必不可少的机制。互斥机制也有其缺陷，当线程在等待共享资源满足某个条件，互斥机制下，必须不断地加锁和解锁，
    // 其间查询共享资源是否满足条件，这将带来巨大的消耗。此时，需要新的机制来解决这个问题，即条件变量。
    // 条件变量机制弥补了互斥机制的缺陷，允许一个线程向另一个线程发送信号(这意味着共享资源某种条件满足时，可以通过某个线程发信号的方式通知等待的线程)，
    // 允许阻塞等待线程(当线程等待共享资源某个条件时，可让该线程阻塞，等待其他线程发送信号通知)。
    // 条件变量机制在处理等待共享资源满足某个条件问题时，具有非常高的效率，且空间消耗相比互斥机制也有优势。
    // 条件变量机制，所有等待一个条件变量的线程会形成一个队列，这个队列显然是全局的共享队列。当线程进入等待状态，将线程添加到队列就需要使用互斥量，
    // 防止多个线程同时使用pthread_cond_wait，在调用pthread_cond_wait前加锁互斥量，进入阻塞前解锁互斥量。这也解释了pthread_cond_wait函数参数需要互斥量。
    int pthread_cond_init(pthread_cond_t *cond, pthread_condattr_t *cond_attr);
    // 条件变量指针; 条件变量属性指针(一般设为NULL)
    int pthread_cond_wait(pthread_cond_t *cond, pthread_mutex_t *mutex);
    // 无条件等待: 条件变量指针; 互斥量指针
    int pthread_cond_signal(pthread_cond_t *cond);
    // 通知一个线程: 
    int pthread_cond_broadcast(pthread_cond_t *cond);
    // 通知所有线程: 
    int pthread_cond_destroy(pthread_cond_t *cond);
    // 销毁条件变量: 
    // 例子: https://blog.csdn.net/lovecodeless/article/details/24929273
    // 共享资源i，线程1对i进行无限加1操作，并输出所有非5倍数的i值。当i的值为5的倍数时，通过条件变量机制，通知线程2，线程2输出此时的i值。
    ```
5. 读写锁
    ```c
    // pthread读写锁把对共享资源的访问者分为读者和写者，读者只对共享资源进行读访问，写者只对共享资源进行写操作。在互斥机制，读者和写者都需要独立独占互斥量以独占共享资源，
    // 在读写锁机制下，允许同时有多个读者读访问共享资源，只有写者才需要独占资源。相比互斥机制，读写机制由于允许多个读者同时读访问共享资源，进一步提高了多线程的并发度。
    // 写者: 写者使用写锁，如果当前没有读者，也没有其他写者，写者立即获得写锁；否则写者将等待，直到没有读者和写者。
    // 读者: 读者使用读锁，如果当前没有写者，读者立即获得读锁；否则读者等待，直到没有写者。
    int pthread_rwlock_init(pthread_rwlock_t * rwlock, const pthread_rwlockattr_t *  attr); // 读写锁初始化
    int pthread_rwlock_rdlock(pthread_rwlock_t *rwlock);    // 加读锁
    int pthread_rwlock_wrlock(pthread_rwlock_t *rwlock);    // 加写锁
    int pthread_rwlock_unlock(pthread_rwlock_t *rwlock);    // 释放读写锁
    int pthread_rwlock_destroy(pthread_rwlock_t *rwlock);   // 销毁读写锁
    // 例子: https://blog.csdn.net/lovecodeless/article/details/24968369
    // 使用读写锁，对共享资源data进行读写同步，线程readerM，readerN为读者线程，线程writerA，writerB为写者线程。
    ```
6. C++的thread_local
    ```c
    // 线程私有数据TSD(Thread-specific Data)是被所有线程共享的，处于功能与安全的需求，有必要为线程提供线程全局变量。线程全局变量便是线程私有数据，仅在某个线程内有效。
    // 线程私有数据通过关联的键值key识别，创建时将私有数据与key关联，通过key向线程私有数据写入内容，也通过key读取线程私有数据的内容，最后通过key 删除线程私有数据。 
    // 线程私有数据创建后，该进程内所有的线程都可以使用这个key向线程私有数据写入与读取数据。对不同的线程而言，同一个key值，分别访问线程自己的私有数据，互不影响。
    int pthread_key_create(pthread_key_t *key, void (*destr_function) (void *));    // 创建线程私有数据
    // 键值key; 销毁函数(一般设为NULL)
    int pthread_setspecific(pthread_key_t key, void *pointer);   // 写入数据
    void* pthread_getspecific(pthread_key_t key);   // 读取数据
    int pthread_key_delete(pthread_key_t key);      // 销毁线程私有数据
    // 例子: https://blog.csdn.net/lovecodeless/article/details/24983131
    // 线程child1,child2均把自己的线程ID写入自己的线程私有数据中，写入的是一个指针，在读出的数据是void *型的指针，需要对其进行强制类型转换
    ```

[C++11 多线程](https://www.cnblogs.com/52why/p/7629290.html)<br>
[C/C++ 多线程(程序猿面试重点)CodeBlocks-CB的pthreads使用](https://www.cnblogs.com/52why/p/7629285.html)<br>
[基于C++11的线程池(threadpool),简洁且可以带任意多的参数](https://www.cnblogs.com/lzpong/p/6397997.html)

1. ``<atomic>``: 提供原子操作功能，该头文主要声明了两个类, std::atomic 和 std::atomic_flag，另外还声明了一套 C 风格的原子类型和与 C 兼容的原子操作的函数。
2. ``<thread>``: 线程模型封装，该头文件主要声明了 std::thread 类，另外 std::this_thread 命名空间也在该头文件中。
3. ``<mutex>``: 互斥量封装，该头文件主要声明了与互斥量(mutex)相关的类，包括 std::mutex 系列类，std::lock_guard, std::unique_lock, 以及其他的类型和函数。
4. ``<condition_variable>``: 条件变量，该头文件主要声明了与条件变量相关的类，包括 std::condition_variable 和 std::condition_variable_any。
5. ``<future>``: 实现了对指定数据提供者提供的数据进行异步访问的机制。该头文件主要声明了 std::promise, std::package_task 两个 Provider 类，以及 std::future 和 std::shared_future 两个 Future 类，另外还有一些与之相关的类型和函数，std::async() 函数就声明在此头文件中。

```cpp
#include <thread>
void test1() {
    /* ... */
    std::this_thread::sleep_for(std::chrono::seconds(1));
    std::this_thread::yield();
}
void test2(int index) { /* ... */ }
std::thread first(test1);
std::thread second(test2, 0);
first.join();
first.detach();
first.get_id();
first.joinable();
```

### 常用API

- iterator
    - 通用: begin end rbegin rend
    - 通用const: cbegin cend crbegin crend
- string:
    - string, string(const string&), string(const char*)
        - string(const string& str, size_t pos, size_t len): 在str中从pos开始复制len长度的字符串
        - string(const char* s, size_t n): 从s中复制n长度的字符串
        - string(size_t n, char c): n长度的由c组成的字符串
    - size, length, max_size, capacity, resize(size_t[, char]), reverse, clear, empty
        - shrink_to_fit: 减少申请的内存直到刚刚好
    - operator[], at, front, back, data
    - operator+=, append, push_back, pop_back, swap
        - assign(...): 重赋值，参数与构造函数类似
        - insert(size_t pos, const char*/const string&/char/...)
        - erase(size_t pos, size_t len)/erase(iterator)
        - replace(size_t pos, size_t len, const char*/const string&/(size_t n, char c))/
            replace(iterator i1, iterator i2, ...)
    - c_str, find/rfind(const string&/const char*/char/..., size_t startPos), substr(startPos, len), compare(...)
        - find_first_of/find_last_of/find_first_not_of/find_last_not_of(...): 参数与find基本差不多，但是以find_first_of为例比较，
            在一个字符串str1中查找另一个字符串str2，如果str1中含有str2中的任何字符，则就会查找成功，返回的值是str2的字符中任何一个首次在str1中出现的位置。
- vector:
    - size/length/max_size/capacity/resize/reverse/clear/empty/shrink_to_fit
    - operator[]/at/front/back/data
    - assign/push_back/pop_back/insert/erase/swap
- stack: empty/size/top/push/pop/swap
- queue/priority_queue: empty/size/front/back/push_back/pop_front
- set/multiset:
    - size/max_size/empty
    - insert/erase/swap/clear
    - key_comp, value_comp
    - find/count/lower_bound/upper_bound
- map/multimap:
    - size/max_size/empty
    - insert/erase/swap/clear
    - key_comp, value_comp
    - find/count/lower_bound/upper_bound
- list:
    - size/max_size/empty/resize
    - front/back
    - assign/push_front/push_back/pop_front/pop_back
    - insert/erase/swap/clear
    - splice(iterator beginInsertPos, const list& insertData[, iterator first[, iterator last]])/reverse/merge/unique/sort/remove/remove_if(funcName/lambda)
- deque:
- forward_list:
- ...

### C++11新特性(未完成)

```cpp
shared_ptr<ClassType> sp = make_shared<ClassType>(...);
sp->ClassType_Method1();
(*sp).ClassType_Method2();
sp.use_count();
sp.swap(other_sp);
sp.reset();
sp.reset(new ClassType(...));
ClassType* ct = sp.get();
class ClassB : enable_shared_from_this<ClassB> { shared_ptr<ClassB> getSharePtr(); }

unique_ptr<ClassType> sp1(new ClassType(...));
unique_ptr<ClassType> sp2 = move(sp1);
sp1.swap(sp2);
sp2.reset();
ClassType* ct = sp1.release();

weak_ptr<ClassType> sp3;
sp3 = sp;
shared_ptr<ClassType> sp4 = sp3.lock();
sp3.expired();

ClassType* p = new ClassType(...);
auto_ptr<ClassType> sp5(p);
sp5.reset()
sp5.get()
sp5.release()
```

1. 智能指针
    1. 理由: C++程序设计中使用堆内存是非常频繁的操作，堆内存的申请和释放都由程序员自己管理。程序员自己管理堆内存可以提高了程序的效率，但是整体来说堆内存的管理是麻烦的，C++11中引入了智能指针的概念，方便管理堆内存。使用普通指针，容易造成堆内存泄露(忘记释放)，二次释放，程序发生异常时内存泄露等问题等，使用智能指针能更好的管理堆内存。
    2. 原理: 从较浅的层面看，智能指针是利用了一种叫做RAII(资源获取即初始化)的技术对普通的指针进行封装，这使得智能指针实质是一个对象，行为表现的却像一个指针。
    3. 作用: 智能指针的作用是防止忘记调用delete释放内存和程序异常的进入catch块忘记释放内存。另外指针的释放时机也是非常有考究的，多次释放同一个指针会造成程序崩溃，这些都可以通过智能指针来解决。智能指针还有一个作用是把值语义转换成引用语义。在Java中Animal a=b;是创建一个引用，而C++中则是新建一个对象。
    4. 使用: 智能指针在C++11版本之后提供，包含在头文件<memory\>中，shared_ptr、unique_ptr、weak_ptr、auto_ptr
    5. shared_ptr: 多个指针指向相同的对象。使用引用计数，每一个shared_ptr的拷贝都指向相同的内存。每使用他一次，内部的引用计数加1，每析构一次，内部的引用计数减1，减为0时，自动删除所指向的堆内存。shared_ptr内部的引用计数是线程安全的，但是对象的读取需要加锁。
        1. 使用
            ```cpp
            std::shared_ptr<A> sp1 = std::make_shared<A>(10, "Hello c++");  // 或者 sp1(new A(10, "Hello c++"));
            std::shared_ptr<A> sp2 = std::make_shared<A>(8, "Hello java");
            printf("%d %s\n", sp1->a, (*sp1).b);
            std::shared_ptr<A> sp3 = sp1;
            sp3.swap(sp2);  // 这之后sp1指向"Hello java"的那一个，而sp2指向"Hello c++"的那个
            sp2.reset();  // 这之后sp2不指向任何对象，会引起原有对象的引用计数的减少
            printf("%d %d\n", sp1.use_count(), sp2.use_count());  // 它们指向的对象的引用计数: 1, 0
            printf("%d %d\n", sp1, sp2);  // 指向对象的地址, 0
            sp2.reset(new A(12, "Hello python"));
            sp2 = sp1;  // 这之后"Hello python"的对象的计数变为0了，被清除
            A* a = sp1.get();  // 获得原始指针
            ```
            ```cpp
            class B : public enable_shared_from_this<B> {
            public:
                shared_ptr<B> getSharePtr() {
                    return shared_from_this();
                }
            };
            // 使用
            Y y;
            std::shared_ptr<Y> spy = y.getSharePtr();  // 错误, y 根本不是 new 创建的
            Y* y = new Y;
            std::shared_ptr<Y> spy = y->getSharePtr();  // 错误, 问题依旧存在, 程序直接崩溃
            std::shared_ptr<Y> spy(new Y);
            std::shared_ptr<Y> p = spy->getSharePtr();  // 正确用法
            ```
        2. 作用: 可以共享数据和管理内存。
        3. 注意事项: 
            1. 需要注意互相引用导致的计数永远降不到0而引起的内存泄露。解决方法是用weak_ptr代替shared_ptr。
            2. 小心对象内部生成 shared_ptr
            3. 小心多线程对引用计数的影响: 首先, 如果是轻量级的锁, 比如 InterLockIncrement 等, 对程序影响不大; 如果是重量级的锁, 就要考虑因为 share_ptr 维护引用计数而造成的上下文切换开销。其次, 多线程同时对 shared_ptr 读写时, 行为不确定, 因为shared_ptr本身有两个成员px，pi. 多线程同时对 px 读写要出问题, 与一个 int 的全局变量多线程读写会出问题的原因一样.
            4. 与 weak_ptr 一起工作时, weak_ptr 在使用前需要检查合法性。
                ```cpp
                std::weak_ptr<A> wp;
                {
                    std::shared_ptr<A> sp(new A);  //sp.use_count()==1
                    wp = sp; //wp不会改变引用计数，所以sp.use_count()==1
                    std::shared_ptr<A> sp2 = wp.lock(); //wp没有重载->操作符。只能这样取所指向的对象
                }
                printf("expired:%d\n", wp.expired()); // 1
                std::shared_ptr<A> sp_null = wp.lock(); //sp_null .use_count()==0;
                // 上述代码中 sp 和 sp2 离开了作用域, 其容纳的对象已经被释放了. 得到了一个容纳 NULL 指针的 sp_null 对象.
                // 在使用 wp 前需要调用 wp.expired() 函数判断一下. 因为 wp 还仍旧存在, 虽然引用计数等于0，仍有某处“全局”性的存储块保存着这个计数信息. 
                // 直到最后一个 weak_ptr 对象被析构, 这块“堆”存储块才能被回收, 否则 weak_ptr 无法知道自己所容纳的那个指针资源的当前状态.
                ```
            5. shared_ptr 不支持数组, 如果使用数组, 需要自定义删除器, 如下是一个利用 lambda 实现的删除器。对于数组元素的访问, 需使要使用 get 方法取得内部元素的地址后, 再加上偏移量取得。
                ```cpp
                std::shared_ptr<int> sps(new int[10], [](int *p){delete[] p;});
                for (int i = 0; i < 10; i++)
                    *((int*)sps.get() + i) = i + 1;
                ```
    6. unique_ptr: unique_ptr“唯一”拥有其所指对象，同一时刻只能有一个unique_ptr指向给定对象(通过禁止拷贝语义、只有移动语义来实现)。
        1. 相比与原始指针unique_ptr用于其RAII的特性，使得在出现异常的情况下，动态资源能得到释放。
        2. unique_ptr指针本身的生命周期: 从unique_ptr指针创建开始，直到离开作用域。离开作用域时，若其指向对象，则将其所指对象销毁(默认使用delete操作符，用户可指定其他操作)
        3. unique_ptr指针与其所指对象的关系: 在智能指针生命周期内，可以改变智能指针所指对象，如创建智能指针时通过构造函数指定、通过reset方法重新指定、通过release方法释放所有权、通过移动语义move转移所有权。
        4. 标准库早期版本中定义了 auto_ptr, 它具有 unique_ptr 的部分特征, 但不是全部, 例如, 不能在容器中保存 auto_ptr, 也不能从函数中返回 auto_ptr。虽然 unique_ptr 不支持拷贝, 但是可以从函数中返回, 甚至返回局部对象。
        5. 基本使用
            ```cpp
            unique_ptr<int> uptr(new int(10));
            // unique_ptr<int> uptr2 = uptr;  // 报错
            // unique_ptr<int> uptr3(uptr);  // 报错
            unique_ptr<int> uptr4 = move(uptr);  // 这时uptr没有指向对象了
            // uptr_1.swap(uptr_2)是交换两个 shared_ptr 对象(即交换所拥有的对象)
            // uptr4.reset();  // 与uptr4.release作用相同，但没有返回值，也可以是uptr4=nullptr
            int *a = uptr4.release();  // 这时uptr4也没有了
            delete a;  // 或者离开uptr4作用域后就自动释放了
            ```
        6. 自定义删除器: 重载一个 unique_ptr 的删除器会影响到 unique_ptr 类型以及如何构造该类的对象, 必须在尖括号中指定删除器类型. 然后在创建或 reset 时提供删除器对象.
            ```cpp
            // unique_ptr<T, D> up;
            // 可以使用 decltype 来指明函数指针的类型.
            class A {
                void Disconnect() { PRINT_FUN(); }
            };
            void Deleter(CConnnect* obj) {
                obj->Disconnect();  // 做其它释放或断开连接等工作
                delete obj;  // 删除对象指针
            }
            // std::unique_ptr<CConnnect, decltype(Deleter)*> up(new CConnnect, Deleter);
            ```
            ```cpp
            class Deleter {
            public:
                void operator() (CConnnect* obj) {
                    PRINT_FUN();
                    delete obj;
                }
            };
            std::unique_ptr<CConnnect, Deleter> up1(new CConnnect);
            std::unique_ptr<CConnnect, Deleter> up2(new CConnnect, up1.get_deleter());
            ```
    7. weak_ptr: 为了配合shared_ptr而引入的一种智能指针，因为它不具有普通指针的行为，没有重载operator*和->，它的作用在于协助shared_ptr工作，像旁观者那样观测资源的使用情况。
        1. weak_ptr可以从一个shared_ptr或者另一个weak_ptr对象构造，获得资源的观测权。但weak_ptr没有共享资源，它的构造不会引起指针引用计数的增加。
        2. 使用weak_ptr的成员函数use_count()可以观测资源的引用计数，另一个成员函数expired()的功能等价于use_count()==0，但更快，表示被观测的资源(也就是shared_ptr的管理的资源)已经不复存在。
        3. weak_ptr可以使用一个非常重要的成员函数lock()从被观测的shared_ptr获得一个可用的shared_ptr对象，从而操作资源。但当expired()==true的时候，lock()函数将返回一个存储空指针的shared_ptr。
        4. reset 将 weak_ptr 置空。
        5. weak_ptr 支持拷贝或赋值, 但不会影响对应的 shared_ptr 内部对象的计数。
        6. 使用 weak_ptr 解决 shared_ptr 因循环引有不能释放资源的问题。
    8. auto_ptr: 是一个轻量级的智能指针，适合用来管理生命周期比较短或者不会被远距离传递的动态对象, 最好是局限于某个函数内部或者是某个类的内部。也有reset/get/release等重要方法
        1. get 获得内部对象的指针, 由于已经重载了()方法, 因此和直接使用对象是一样的。如 auto_ptr<int\> sp(new int(1)); sp 与 sp.get()是等价的
        2. release 放弃内部对象的所有权，将内部指针置为空, 返回所内部对象的指针, 此指针需要手动释放。
        3. reset 销毁内部对象并接受新的对象的所有权(如果使用缺省参数的话，也就是没有任何对象的所有权)
        4. auto_ptr 的对象所有权是独占性的。auto_ptr 的拷贝构造和赋值操作符所接受的参数类型都是非const的引用类型(而一般都应该使用的const引用类型), 其原因在于为了使其内部能调用了 release 方法将原有的对象进行释放, 然后使用新对象替换原有的对象。因此导致动态对象的所有权被转移了, 新的 auto_ptr 独占了动态对象的所有权. 被拷贝对象在拷贝过程中被修改, 拷贝物与被拷贝物之间是非等价的。
        5. 不能将 auto_ptr 放入到标准容器中. 标准库容器无准备的拷贝行为, 会导致原 auto_ptr 内的对象被释放, 造成难以发觉的错误。
        6. 使用 auto_ptr 的注意事项
            1. auto_ptr 不能指向数组
            2. auto_ptr 不能共享所有权
            3. auto_ptr 不能通过复制操作来初始化
            4. auto_ptr 不能放入容器中使用
            5. auto_ptr 不能作为容器的成员
            6. 不能把一个原生指针给两个智能指针对象管理(对所有的智能指针)
                ```cpp
                int* p = new int;
                auto_ptr<int> ap1(p);
                auto_ptr<int> ap2(p); // 错误, p不能给第二个智能指针对象. 会引起两次释放p
                ```
            7. 可以使用函数传参，但是有条件: void fun(auto_ptr<int>& p) 或者 void fun(int& i)
            8. 不能用于从函数中返回 auto_ptr
2. std::function、std::bind封装可执行对象
    1. 类Test中的Add方法要使用外部的方法来实现: 
        ```cpp
        // Test.h
        class Test {
        public:
            typedef int(*FunType)(int, int)
            void Add(FunType ft, int a, int b) {
                cout << ft(a, b) << endl;
            }
        };
        // main.cpp
        #include <functional>
        #include <iostream>
        #include "Test.h"
        int add(int a, int b) { return a + b + 100; }
        int main() {
            Test().Add(add, 10, 30);
        }
        ```
    2. 类Test中的Add方法需要传入其他类中的方法来实现: 
        ```cpp
        // Test.h
        class Test {
        public:
            void Add(function<int(int, int)\> fun, int a, int b) { cout << fun(a, b) << endl; }
        }
        // main.cpp
        // ...
        class TestAdd {
        public:
            int Add(int a, int b) { cout << "TestAdd::Add" << endl; return a + b + 100; }
        };
        int main() {
            Test().Add(add, 10, 30);
            TestAdd testAdd;
            Test().Add(bind(&TestAdd::Add, testAdd, std::placeholders::_1, std::placeholders::_2), 10, 30);
        }
        ```
3. lambda: 
    1. 
4. __func__: 返回当前函数名字符串的宏
5. **#pragma**:
    1. #pargma once: 等价于_Pragma("once");
    2. ...
6. __VA_ARGS__: 变长参数的宏定义是指宏定义中参数列表的最后一个参数为...， 而实现部分可以用__VA_ARGS__替换
7. 新的整型long long/unsigned long long(长度不小于64位)
8. 类成员变量的快速初始化和新的列表初始化，在C++11中，除了静态变量，对于其它变量也允许使用等号或{}进行就地初始化。
9. 非静态成员的sizeof，sizeof作为运算符，对于处理数组，类和对象时经常用到，不过在之前的C++98中，对于非静态成员是不能直接编译的，需要借用对像实例。
10. 扩展的friend用法，friend时C++中比较特别的关键字，一方面它让程序员省下了很多代码，另一方面也破坏了OOP中的封装性，在C++11中做了改进，以保证更好的运用。
11. final和override控制，final用来限制基类虚函数的对应的派生类不能重写该虚函数，从而避免了某些接口被重写覆盖； override则指定了函数必须覆盖基类的虚函数，否则编译通不过，这就避免了某些输入名或者原型不匹配等错误的发生。
12. 默认的模板参数，C++11中模板和函数一样，支持默认参数。

### C++14新特性

### C++17新特性

### 关键字(19)

1. extern
2. explicit/implicit
3. const/**constexpr**
    1. 初始化: constexpr: const 变量的初始化可以延迟到运行时，而 constexpr 变量必须在编译时进行初始化。所有 constexpr 变量均为常量，因此必须使用常量表达式初始化。
        ```cpp
        constexpr float x = 42.0;
        constexpr float y{108};
        constexpr float z = exp(5, 3);
        constexpr int i; // Error! Not initialized
        int j = 0;
        constexpr int k = j + 1; //Error! j not a constant expression
        ```
    2. 函数: constexpr 函数是在使用需要它的代码时，可以在编译时计算其返回值的函数。当其参数为 constexpr 值并且在编译时使用代码需要返回值时(例如，初始化一个 constexpr 变量或提供一个非类型模板参数)，它会生成编译时常量。使用非constexpr 参数调用时，或编译时不需要其值时，它将与正则函数一样，在运行时生成一个值。而const成员函数指不会修改属性。
    3. 指针: 与const不同，在constexpr声明中如果定义了一个指针，限定符constexpr仅对指针有效，与指针所指对象无关。<br>
        如果关键字const出现在星号左边，表示被指物是常量；如果出现在星号右边，表示指针本身是常量；如果出现在星号两边，表示被指物和指针两者都是常量。
4. inline https://www.cnblogs.com/xkfz007/articles/2370640.html
5. friend
6. **auto**: auto在C++14中可以作为函数的返回值。auto作为函数返回值时，只能用于定义函数，不能用于声明函数。但如果把实现写在头文件中，可以编译通过，因为编译器可以根据函数实现的返回值确定auto的真实类型。而且可以与for一起实现foreach了。
7. **lambda**: https://www.cnblogs.com/DswCnblog/p/5629165.html
8. virtual/private/public/protected
9. NULL/nullptr: NULL在c++里表示空指针，但是它可以传给test_null(int)和test_null(int*)。而我们希望调用test_null(int*)时就需要nullptr了。
10. mutable: 被mutable修饰的变量将永远处于可变的状态。mutable也是为了突破const的限制而设置的。
    1. 保持常量对象中大部分数据成员仍然是“只读”的情况下，实现对个别数据成员的修改；
    2. 使类的const函数可以修改对象的mutable数据成员。
    3. 但要注意: mutable只能作用于类的**非静态和非常量数据成员**；在一个类中，应尽量或者不用mutable，大量使用mutable表示程序设计存在缺陷。
11. volatile
12. enum: 默认从0开始
13. import: 
14. static:
15. **decltype**: https://blog.csdn.net/YhL_Leo/article/details/50865552

### STL(未完成)

1. std::array: 类似数组。std::array除了有传统数组支持随机访问、效率高、存储大小固定等特点外，还支持迭代器访问、获取容量、获得原始指针等高级功能。而且它还不会退化成指针T *给开发人员造成困惑。用std::array后，可以更简便地进行初始化、修改、遍历，所以推荐使用std::array代替数组。
2. std::forward_list: 新增的线性表，与list区别在于它是单向链表。我们在学习数据结构的时候都知道，链表在对数据进行插入和删除是比顺序存储的线性表有优势，因此在插入和删除操作频繁的应用场景中，使用list和forward_list比使用array、vector和deque效率要高很多。
3. std::unordered_map: 与std::map用法基本差不多，但STL在内部实现上有很大不同，std::map使用的数据结构为二叉树，而std::unordered_map内部是哈希表的实现方式，哈希map理论上查找效率为O(1)。但在存储效率上，哈希map需要增加哈希表的内存开销。[btHashMap vs std::unodered_map ——两种hashmap的性能对比测试](https://blog.csdn.net/xusiwei1236/article/details/45845127)
4. std::unordered_set: 也是哈希表的方式结构，除此之外，std::unordered_set在插入时不会自动排序，这都是std::set表现不同的地方。

### 网络(未完成)

### C/C++与其他语言交互

[c/c++再学习：C与Python相互调用](https://www.cnblogs.com/langzou/p/8982426.html)

### 进制转化

## 常见问题

### 常见问题1

1. **new和malloc的区别**: (将new看做方法，则需要看 头文件 参数 返回类型 分配失败 是否可重载 内存区域 自定义类型)
    1. 属性: new/delete是C++关键字，需要编译器支持。malloc/free是库函数，需要头文件支持。
    2. 参数: 使用new操作符申请内存分配时无须指定内存块的大小，编译器会根据类型信息自行计算。而malloc则需要显式地指出所需内存的尺寸。
    3. 返回类型: new操作符内存分配成功时，返回的是对象类型的指针，类型严格与对象匹配，无须进行类型转换，故new是符合类型安全性的操作符。而malloc内存分配成功则是返回void * ，需要通过强制类型转换将void*指针转换成我们需要的类型。
    4. 分配失败: new内存分配失败时，会抛出bac_alloc异常。malloc分配内存失败时返回NULL。
    5. 自定义类型: new会先调用operator new函数，申请足够的内存(通常底层使用malloc实现)。然后调用类型的构造函数，初始化成员变量，最后返回自定义类型指针。delete先调用析构函数，然后调用operator delete函数释放内存(通常底层使用free实现)。malloc/free是库函数，只能动态的申请和释放内存，无法强制要求其做自定义类型对象构造和析构工作。
    6. 重载: C++允许重载new/delete操作符，特别的，布局new的就不需要为对象分配内存，而是指定了一个地址作为内存起始区域，new在这段内存上为对象调用构造函数完成初始化工作，并返回此地址。而malloc不允许重载。
    7. 内存区域: new操作符从自由存储区(free store)上为对象动态分配内存空间，而malloc函数从堆上动态分配内存。自由存储区是C++基于new操作符的一个抽象概念，凡是通过new操作符进行内存申请，该内存即为自由存储区。而堆是操作系统中的术语，是操作系统所维护的一块特殊内存，用于程序的内存动态分配，C语言使用malloc从堆上分配内存，使用free释放已分配的对应内存。自由存储区不等于堆，如上所述，布局new就可以不位于堆中。
2. C++设计一个类：只能在堆上创建对象、只能在栈上创建对象、只能创建一个对象
    1. 只能在堆上创建对象
        ```cpp
        class A {
        protected:
            A(){};
            ~A(){};
        public:
            static A* createA() { return new A(); }
            static void DestroyA(A* p) { delete p; p = NULL; }
        };
        ```
        ```cpp
        class A {
        public:
            A(){}
        private:
            ~A(){}
        };
        // 对象建立在栈上面时，是由编译器分配空间的，调用构造函数来构造栈对象，当对象使用完之后，编译器会调用析构函数来释放栈对象所占的空间，编译器管理了对象的整个生命周期，编译器为对象分配空间的时候，只要是非静态的函数都会检查，包括析构函数，但是此时析构函数不可访问，编译器无法调用类的析构函数来释放内存，那么编译器将无法在栈上为对象分配内存。
        ```
    2. 只能在栈上创建对象
        ```cpp
        class A {
        private:
            void* operator new(size_t) {}
            void operator delete(void*) {}
        public:
            A(){}
            ~A(){}
        };
        ```
    3. 只能创建一个对象
        ```cpp
        class A {
        private:
            static A* a;
            A(){}
            A(const B& b){}
        public:
            A* getInstance() { return a; }
        };
        static A A::a = new A();
        ```
3. **C语言和C++的区别与联系** https://blog.csdn.net/cherrydreamsover/article/details/81835976
    1. C是面向过程，C++是面向对象。
        1. 面向过程语言需要分析出解决问题的步骤，然后把这些步骤一步一步的实现，使用的时候一个一个的依次调用就可以了。 如五子棋: 开始游戏，白子先走，绘制画面，判断输赢，轮到黑子，绘制画面，判断输赢，重复前面的过程，输出最终结果。 
        2. 面向对象语言需要把问题分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描述某个事物在整个解决问题的步骤中的行为。如五子棋: 黑白双方(两者的行为是一样的)、棋盘系统(负责绘制画面)、规定系统(规定输赢、犯规等)、输出系统(输出赢家)。 
        3. 面向对象就是高度实物抽象化(功能划分)、面向过程就是自顶向下的编程(步骤划分)。面向对象的耦合度更低，易维护、易复用、易扩展。但面向过程的性能更高，因为类调用时需要实例化，开销比较大。
    2. 关键字不同: C99有32个关键字；C++98有63个关键字
        1. struct: 在C语言中struct定义的变量中不能有函数，而在C++中可以有函数。 
        2. malloc: malloc函数的返回值为void*，在C语言中可以赋值给任意类型的指针，在C++中必须强制类型转换，否则报错。 
        3. struct和class: class是对struct的扩展，struct默认的访问权限是public，而class默认的访问权限是private。
    3. 后缀名不同
    4. 返回值: C语言中，如果一个函数没有指定返回值类型，默认返回int类型；C++中，如果一个函数没有返回值则必须指定为void。
    5. 参数列表: 在C语言中，函数没有指定参数列表时，默认可以接收任意多个参数；但在C++中，因为严格的参数类型检测，没有参数列表的函数，默认为 void，不接收任何参数。 
    6. 类的各种默认成员函数，C不支持。
    7. 函数重载: C语言没有函数重载，C++支持函数重载。
4. C++类的六个默认成员函数
    1. 构造函数
    2. 拷贝构造函数
    3. 析构函数
    4. 赋值操作符重载
    5. 取地址操作符重载
    6. const修饰的取地址操作符重载
5. 类的初始化顺序: 
    1. 数据成员在类中定义的顺序就是参数列表中的初始化顺序；
    2. 初始化列表仅用于初始化数据成员，并不指定这些数据成员的初始化顺序；
    3. 每个成员在初始化列表中只能出现一次；
    4. 尽量避免使用成员初始化成员，成员初始化顺序最好和成员的定义顺序保持一致。
6. 类中包含以下成员必须要放在初始化列表中初始化: 
    1. 引用数据类型 
    2. const数据类型 
    3. 类类型成员(该类没有缺省的构造函数)
    4. 父类初始化
7. **数组和指针的区别与联系** 数据 赋值 存储形式 拷贝 大小 初始化 传参
    1. 数据: 数组可以存储多个数据；而指针只是指向一个对象，存放的是一个对象的地址。
    2. 赋值: 同类型指针变量可以相互赋值；数组不行，只能一个一个元素的赋值或拷贝
    3. 存储方式: 数组在内存中连续存放，数组名就是数组的开始地址，多维数组在内存中是按照一维数组存储的，只是在逻辑上是多维的；而指针是存放数据的地址。
    4. 大小: sizeof可以得到数组的长度；sizeof(pointer)只能获得8byte。
    5. 初始化: 指针可以指向数组(用new或者赋值)
    6. 传参: 数组传参时，会退化为指针，C语言只会以值拷贝的方式传递参数，参数传递时，如果只拷贝整个数组，效率会大大降低，并且在参数位于栈上，太大的数组拷贝将会导致栈溢出。 因此，C语言将数组的传参进行了退化。将整个数组拷贝一份传入函数时，将数组名看做常量指针，传数组首元素的地址。 https://blog.csdn.net/cherrydreamsover/article/details/81741459
8. **extern**: https://blog.csdn.net/u012718537/article/details/73109991#_62
    1. 修饰符extern用在变量或者函数的声明前，用来说明“此变量/函数是在别处定义的，要在此处引用”。extern声明不是定义，即不分配存储空间。
    2. 在一个文件中定义了变量和函数， 在其他文件中要使用它们，可以有两种方式：
        1. 使用头文件，然后声明它们，然后其他文件去包含头文件。
        2. 在其他文件中直接extern。
    3. ????
9. **不能被声明为虚函数的函数**: 
    1. 普通函数
    2. 友元函数
    3. 构造函数
    4. 内联成员函数
    5. 静态成员函数
10. **嵌套类与局部类**: https://dablelv.blog.csdn.net/article/details/49432227
11. 普通函数会屏蔽模板函数: C++编译器将按照如下的顺序寻找对应的函数定义。 
    1. 寻找一个参数完全匹配的函数，如果找到了就调用它。 
    2. 寻找一个函数模板，并根据调用情况进行参数推演，如果推演成功则将其实例化，并调用相应的模板函数。
    3. 如果前面两种努力都失败了，则试着低一级的函数匹配方法，如通过类型转换能否达到参数匹配，如果可以，则调用它。
12. **C++抛出异常与传递参数的区别与联系**
    1. 调用函数时，程序的控制权最终还会返回到函数的调用处，但是当抛出一个异常时，**控制权**永远不会回到抛出异常的地方。
    2. C++标准要求被作为异常抛出的对象**必须被拷贝复制**。
    3. 因为异常对象被抛出时需要拷贝，所以抛出异常**运行速度一般会比参数传递要慢**。当异常对象被拷贝时，拷贝操作是由对象的拷贝构造函数完成的。该拷贝构造函数是对象的静态类型(static type)所对应的类的拷贝构造函数，而不是对象的动态类型(dynamic type)对应类的拷贝构造函数。
    4. 参数传递和异常传递的类型匹配过程不同，catch子句在类型匹配时比函数调用时**类型匹配的要求要更加严格**。它不允许从int到double之类的隐式类型转换。不过，在catch子句中进行异常匹配时可以进行两种类型转换。第一种是继承类与基类见的抓换。即一个用来捕获基类的catch子句可以处理派生类类型的异常。这种派生类与基类间的异常类型转换可以作用于数值、引用以及指针。第二种是允许从一个类型化指针(typed pointer)转变成无类型指针(untyped pointer)，所以带有const void*指针的catch子句能捕获任何类型的指针类型异常。
    5. **catch子句匹配顺序**总是取决于它们在程序中出现的顺序。**函数匹配**过程则需要按照更为复杂的匹配规则来顺序来完成。
    1. 相同点就是传递参数和传递异常**都可以是传值、传引用或传指针**。
13. **内存泄露**: 
    1. 自己忘记给new加delete了。
    2. 在栈展开: 在栈展开(stack unwinding)是指，如果在一个函数内部抛出异常，而此异常并未在该函数内部被捕捉，就将导致该函数的运行在抛出异常处结束，所有已经分配在栈上的局部变量都要被释放。如果被释放的变量中有指针，而该指针在此前已经用new运算申请了空间，就有可能导致内存泄露。因为栈展开的时候并不会自动对指针变量执行delete(或delete[])操作。可以使用智能指针unique_ptr。
    3. 使用shared_ptr时小心相互引用。
    4. malloc的忘记加free了。
    5. 申请的资源没有释放。
14. **C++对象产生和销毁的顺序**
    1. 全局对象或全局静态对象不管是在什么位置定义的，它的构造函数都在main()函数之前执行。
    2. 局部静态对象的构造函数是当程序执行到定义该对象时才被调用。 
    3. 所有在栈(stack)上的对象都比在全局或静态对象早销毁。 
    4. 管是在栈上的对象，还是全局或静态对象，都遵循这样的顺序：越是先产生的对象越是后被销毁。
15. **C++作用域与生命周期** https://dablelv.blog.csdn.net/article/details/48048965
16. **野指针出现的情况**: 
    1. 指针未初始化
    2. malloc/realloc后没有关注它是否变为了nullptr
    3. 指针指向的对象释放了，但指针没有置为nullptr
17. 按值传递很浪费时间和性能，建议const与reference代替。否则可能要调用拷贝构造函数与析构函数。
18. 必须返回对象时，别妄想返回引用(因为栈中的数据已被销毁，但可以用new的堆来返回)。绝对不要返回一个指针或者引用指向一个 local static 对象而有可能同时需要多个这样的对象。当然，返回new也有问题: 
    ```cpp
    const Rational& operator* (const Rational& lhs, const Rational& rhs) {
        Rational* result = new Rational(lhs.n * rhs.n, lhs.d * rhs.d);
        return *result;
    }
    即使如此，我们还是需要付出代价，因未分配所得的内存将会以一个适当的构造函数进行初始化，既然 new 了一个对象，那么谁来对它进行 delete呢？
    // 这种情况下，如何 delete?
    Rational w,x,y,z;
    w = x*y*z;   // 与operator*(operator*(x,y),z) 相同，要调用两次new Rational
    ```
19. 头文件的const: 
    1. 通过包含头文件，可把const定义单独放在一个地方并把它分配给一个编译单元，C++中的 const 默认为内部连接，const 仅在const被定义过的文件里才是可见的，而在连接时不能被其他编译单元看到。 
    2. extern const int bufsize ; 编译器并不会为const 创建存储空间，相反它把这个定义保存在符号表中。但是，extern 强制进行了存储空间分配，由于 extern 意味着外部连接，因此必须分配存储空间
20. **临时对象**: 
    1. 对象赋值: 建立一个没有命名的非堆(non-heap)对象，也就是无名对象时，会产生临时对象。``Integer inte= Integer(5); //用无名临时对象初始化一个对象``
    2. 函数传参
    3. 函数返回: 函数返回一个对象时，会产生临时对象。以返回的对象最作为拷贝构造函数的实参构造一个临时对象。
    4. Integer re=testFunc(10);时，编译器会自动优化，以返回的临时对象来构造新的对象。
21. **CC++的全缓冲、行缓冲和无缓冲** https://dablelv.blog.csdn.net/article/details/63259524
    1. 全缓冲。输入或输出缓冲区被填满，会进行实际I/O操作。其他情况，如强制刷新、进程结束也会进行实际I/O操作。
    2. 行缓冲。输入或输出缓冲区遇到换行符会进行实际I/O操作。其他与全缓冲相同。
    3. 无缓冲。没有缓冲区，数据会立即读入内存或者输出到外存文件和设备上。标准错误输出stderr是无缓冲的，这样能够保证错误信息及时反馈给用户，供用户排除错误。
    ```cpp
    //@header:stdio.h
    //@brief:设置指定的缓冲区或关闭缓冲
    //@param:stream:文件指针；buffer：缓冲区地址
    //@notice:使用默认缓冲大小BUFSIZ(在stdio.h中定义)
    void setbuf ( FILE * stream, char * buffer );
    //@header:stdio.h
    //@brief:更改缓冲模式并设置缓冲区
    //@param:stream:文件指针；buf缓冲区地址；type：缓冲区模式(定义在stdio.h中，_IOFBF(全缓冲)/_IOLBF(行缓冲)/_IONBF(无缓冲))；size：缓冲区大小
    //@ret:0成功，非0失败
    int setvbuf(FILE *stream, char *buf, int type, unsigned size);
    ```
22. **引用**
    1. 将rodents初始化为*pt使得rodents指向rats。接下来将pt改为指向bunnies，并不能改变这样的事实，即rodents引用的是rats。
        ```cpp
        int rats=101；
        int *pt =&rats；
        int &rodents=*pt；
        int bunnies=50;
        pt = &bunnies;
        ```
    2. 引用底层是用const指针实现的，分配额外的内存空间。
    3. const &a = 1;
    4. && 和左值引用的区别 
        1. 绑定的对象(引用的对象)不同，左值引用绑定的是返回左值引用的函数、赋值、下标、解引用、前置递增递减 
        2. 左值持久，右值短暂，右值只能绑定到临时对象，所引用的对象将要销毁或该对象没有其他用户 
        3. 使用右值引用的代码可以自由的接管所引用对象的内容，可以用左值表达式修改右值引用的所引用临时对象的值。int &&a=1;和const int &a=1;是完全一样的操作，先在数据区开辟一个值为1的无名整型量，再将引用a与这个整型量进行绑定。但是右值引用直接支持rebind。
23. **C++中将一个程序编译成可执行程序的步骤** http://www.cnblogs.com/skynet/p/3372855.html
    1. 预编译: gcc -e hello.c -o hello.i 或者 gcc hello.c > hello.i
        1. 将所有的#define删除，并且展开所有的宏定义
        2. 处理所有的条件预编译指令，比如#if #ifdef #elif #else #endif等
        3. 处理#include 预编译指令，将被包含的文件插入到该预编译指令的位置。
        4. 删除所有注释 “//”和”/* */”.
        5. 添加行号和文件标识，以便编译时产生调试用的行号及编译错误警告行号。
        6. 保留所有的#pragma编译器指令，因为编译器需要使用它们
    2. 编译: gcc -S hello.i -o hello.s 把预处理完的文件进行一系列的词法分析，语法分析，语义分析及优化后生成相应的汇编代码。
    3. 汇编: gcc -c hello.s -o hello.o 将汇编代码转变成机器可以执行的命令，每一个汇编语句几乎都对应一条机器指令。汇编相对于编译过程比较简单，根据汇编指令和机器指令的对照表一一翻译即可。
    4. 链接: 通过调用链接器ld来链接程序运行需要的一大堆目标文件，以及所依赖的其它库文件，最后生成可执行文件。如: ld -static crt1.o crti.o crtbeginT.o hello.o -start-group -lgcc -lgcc_eh -lc-end-group crtend.o crtn.o (省略了文件的路径名) 或者 gcc hello1.o hello2.o -o hello.o(好像不用？？？)
        1. 静态链接: 在编译时期完成的；程序在运行时与函数库再无瓜葛，移植方便； 浪费空间和资源，因为所有相关的目标文件与牵涉到的函数库被链接合成一个可执行文件；修改库函数，所有要更新的程序都得重新编译。
        2. 动态链接: 把对一些库函数的链接载入推迟到程序运行的时期；可以实现进程之间的资源共享；将一些程序升级变得简单；甚至可以真正做到链接载入完全由程序员在程序代码中控制。
24. **C++对象模型**: https://www.cnblogs.com/skynet/p/3343726.html
25. **elf文件**: https://blog.csdn.net/Linux_ever/article/details/78210089
26. **C++内存模型**: 
    1. 栈区(stack)  由编译器自动分配释放，存放为运行函数而分配的局部变量、函数参数、返回数据、返回地址等。其操作方式类似于数据结构中的栈；
    2. 堆区(heap)  一般由程序员分配释放，若程序员不释放，程序结束时可能由OS回收。分配方式类似于链表；
    3. 全局区(静态区)(static)  存放全局变量、静态数据。初始化的数据放在一块区域，未初始化的数据放在相邻的另一块区域。程序结束后由系统释放；加了static修饰符后不管在哪里都存放在全局区；
    4. 文字常量区  常量字符串就是放在这里的。程序结束后由系统释放；类的虚表应该是作为一个静态数据，由编译链接等这些系统工具生成。在所有函数体外定义的是全局变量；
    5. 程序代码区  存放函数体(类成员函数和全局函数)的二进制代码。
    1. 在所有函数体外定义的static变量表示在该文件中有效，不能extern到别的文件用。在函数体内定义的static表示只在该函数体内有效。函数中的常量字符串存放在常量区。
27. **堆和栈的比较** 申请方式 申请后系统的响应 申请大小的限制 申请效率的比较 存放的内容 存放效率的比较
    1. 申请方式: 栈由系统申请，而堆由程序猿申请、指定大小。
    2. 申请后系统的响应: 只要栈的剩余空间大于所申请空间，系统将为程序提供内存，否则将报异常提示栈溢出；操作系统有一个记录空闲内存地址的链表，当系统收到程序的申请时，会遍历该链表，寻找第一个空间大于所申请空间的堆结点，然后将该结点从空闲结点链表中删除，并将该结点的空间分配给程序。对于大多数系统，会在这块内存空间中的首地址处记录本次分配的大小，这样，代码中的 delete 语句才能正确的释放本内存空间。由于找到的堆结点的大小不一定正好等于申请的大小，系统会自动的将多余的那部分重新放入空闲链表中。
    3. 申请大小的限制: 
        - 在Windows下，栈是向低地址扩展的数据结构，是一块连续的内存的区域。意思是栈顶的地址和栈的最大容量是系统预先规定好的，在Windows下，栈的大小是2M(也有的说是1M，总之是一个编译时就确定的常数)，如果申请的空间超过栈的剩余空间时，将提示overflow。因此，能从栈获得的空间较小。
        - 堆是向高地址扩展的数据结构，是不连续的内存区域。这是由于系统是用链表来存储的空闲内存地址的，自然是不连续的，而链表的遍历方向是由低地址向高地址。堆的大小受限于计算机系统中有效的虚拟内存。由此可见，堆获得的空间比较灵活，也比较大。
    4. 申请效率的比较: 由系统申请的栈会比由程序猿管理的堆更快，而且堆中还有内存碎片，但是堆更灵活。
    5. 堆和栈中的存储内容: 
        - 在函数调用时，第一个进栈的是主函数中后的下一条指令(函数调用语句的下一条可执行语句)的地址，然后是函数的各个参数，在大多数的C编译器中，参数是由右往左入栈的，然后是函数中的局部变量。注意静态变量是不入栈的。当本次函数调用结束后，局部变量先出栈，然后是参数，最后栈顶指针指向最开始存的地址，也就是主函数中的下一条指令，程序由该点继续运行。
        - 一般是在堆的头部用一个字节存放堆的大小。堆中的具体内容有程序员安排。
    6. 存取效率的比较: 栈会更快。因为栈的定位比随机分配的空间。栈是由CPU提供指令支持的, 在指令的处理速度上, 对栈数据进行处理的速度自然要优于由操作系统支持的堆数据。
28. 
29. 
30. 

### 常见问题2

[c++常见面试题30道](https://blog.csdn.net/wdzxl198/article/details/9102759)
[2018 C++开发工程师面试题大合集(持续更新)](https://blog.csdn.net/Damage233/article/details/81116115)
[C++11新特性总结 (一)](http://www.cnblogs.com/wangqiguo/p/5635441.html)
[C++17新属性详解](https://blog.csdn.net/fanyun_01/article/details/80471626)
[C++14 常用新特性总结](https://blog.csdn.net/qq_27175513/article/details/79937845)
[C++14的新特性](https://blog.csdn.net/HQ354974212/article/details/70894083)
[]()
[]()
[]()

## end