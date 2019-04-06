https://www.cnblogs.com/skyus/articles/8524408.html<br>
http://www.cplusplus.com/reference/<br>

[TOC]

**继承**<br>
**多态**<br>
**引用**<br>
**异常**<br>
[在Windows上实现运行Linux程序，附示例代码](https://www.linuxidc.com/Linux/2017-05/143807.htm)<br>
[如何在Windows10上直接运行Linux？](https://baijiahao.baidu.com/s?id=1607159570058814753&wfr=spider&for=pc)<br>
[windows上运行使用linux下面的命令](https://blog.csdn.net/darren2015zdc/article/details/78813811)<br>
[Windows下开发、调试Linux C/C++程序](https://blog.csdn.net/dzhq1984/article/details/77141079)<br>

### C语言基础

#### 常量与变量

- C语言常量的声明有两种方式: define/const，区别: 
    - define是在编译时，会自动将声明的变量替换到程序中；
    - const是在运行时，会自动将声明的变量替换到程序中，同时，const可以很容易知道常量的类型。
- C语言基本数据类型有: short、int、long、char、float、double。这里可以提前说(char *)这个类型，这个是字符指针，我们可以把它当作Java的String类型。
- 自定义变量类型名称: 使用typedef关键字可以自定义数据类型的名称。
```c
typedef int my_int;
```

#### 流程控制与循环

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

#### 运算符

1. 算术运算符: <、<=、>、>=、==、!=、赋值运算符(=)
2. 逻辑运算符: &&(与)、||(或)、!(非)
3. 位运算符: &(位与)、|(位或)、~(位反)、^(异或)、>>(右移)、<<(左移)
4. 三目运算符: 条件表达式  ?  结果1  :  结果2
5. sizeof运算符: 用来计算变量、常量、数据类型所占用存储空间的字节数
6. 自增自减运算符: ++a，a++，–a，a–

#### 输出和输入

```c
//输出字符
char ch = 'a'; putchar(ch);
ch = getchar();
scanf("%c", &ch);
//输出字符串
puts("hello word");
printf("hello c");
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

#### 数组

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
char str[10] = {'H','e','l','l','o','/0'};
str[0] = "h";
// 字符数组的第二种表现形式，其值是不可以修改的
char *str = "Hello";
// 输出字符串
printf("%s",str);
```
    这里需要注意字符数组凡是遇到有’/0’出现就判定该字符数组已经到结尾，默认结尾是会自动补上的，否则输出时会出现中文乱码

#### 函数

- 无返回值: ```void print(){}```
- 有返回值: ```int add(int a, int b){ return a + b; }```
- 可变参数函数: 
```c
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

#### 指针

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

#### 结构体

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

#### 共同体(联合体)

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

#### 枚举

枚举只是用来列举所有情况，枚举默认的值从1开始
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

#### 文件操作

```c
File *file = fopen(fileName, mode);
char ch = 'A';
char *str = "Hello World";
fputc(ch, file);
fputs(str, file);
char buff[1024];
fgets(buff, 1024, file);
ch = fgetc(file);
int intBuff[1024];
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
    - 写文本时，每遇到一个’\n’，会将其转换成’\r\n’
    - 读文件时，每遇到一个’\r\n’，会将其转换成’\n’
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

#### 内存分配

1. C语言内存分配: 
    - 堆区(手动分配、释放): 操作系统80%内存
    - 栈区(自动分配、释放): windows下，栈内存分配2M(确定的常数)，超出了限制，提示stack overflow错误
    - 全局区或静态区
    - 字符常量区
    - 程序代码区
2. 分配内存的两种方法
```c
int len = 10;
int *p = calloc(len, sizeof(int));
int *p = malloc(sizeof(int) * len);

//realloc方法
//参数一: 原来的指针
//参数二: 重新分配的总长度
//重新分配内存的两种情况: 
//缩小，缩小的那一部分数据会丢失
//扩大，有以下三种情况
//1. 如果当前内存段后面有需要的内存空间，直接扩展这段内存空间，realloc返回原指针
//2. 如果当前内存段后面的空闲字节不够，那么使用堆中的第一个能够满足这一要求的内存块，将目前的
//数据复制到新的位置，并将原来的数据释放掉，返回新的内存地址
//3. 如果申请失败，返回NULL，原来的指针仍然有效
printf("%#x", p);
int *p2 = realloc(p, sizeof(int) * (len + 5));
printf("%#x", p2);
if (p2 == NULL) {
    printf("重新分配内存失败");
}
```
3. 动态分配内存的注意点
    - 不能多次释放
    - 释放完之后（指针仍然有值），给指针置NULL，标志释放完成
    - 内存泄露（p重新赋值之后，再free，并没有真正释放内存）

#### 预编译处理

1. define指令作用
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
`#pragma once`
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
#define LOG(LEVEL, FORMAT, ...) printf(##LEVEL); printf(##FORMAT, __VA_ARGS__);
#define LOG_I(FORMAT, ...) LOG("INFO:", ##FORMAT, __VA_ARGS__);
#define LOG_E(FORMAT, ...) LOG("ERROR:", ##FORMAT, __VA_ARGS__);
#define LOG_W(FORMAT, ...) LOG("WARN:", ##FORMAT, __VA_ARGS__);
//使用的时候
void main() {
    LOG_E("%s%d", "大小: ", 89);
}
```

#### 常用例子

1. 获取0-100随机数
```c
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
void openMspaint() {
    system("mspaint");
    system("pause");
}
```
3. 注入Dll
```c
__declspec(dllexport) void injectDll(){
    // 属性（项目右键）-> 常规（配置类型）-> .dll类型
    // 生成（选择栏）-> 生成解决方案
    // 使用DLLInject工具
    int *p = 0x2ff9d8;
    *p = 99999;
}
```

### Cpp语言基础

#### 命名空间

1命名空间属性访问和结构体访问以及命名空间的嵌套
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

#### 类

```cpp
#define _CRT_SECURE_NO_WARNINGS
#include <stdlib.h>
#include <iostream>
#include <stdarg.h>
using namespace std;
#define PI 3.14
class MyCircle {
// 属性（共用权限访问修饰符）
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

类的大小: 类的大小只计算普通属性的大小，其他都不包括在内

#### 继承

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
    Man(char *brother, char *s_name, int s_age, char *h_name, int h_age) : Human(s_name, s_age), h(h_name,h_age){
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
//这里面加了virtual关键字
class A1 : virtual public A{};
//这里面加了virtual关键字
class A2 : virtual public A{};
class B : public A1, public A2{};
int main() {
    B b;    
    // 如果程序不加virtual关键字就会导致二义性，系统无法辨识哪个类的name属性，会报错
    b.name = "Hensen";
    // 这里通过指定父类显示调用是可以的
    b.A1::name = "Hensen";
    b.A2::name = "Hensen";
}
```

#### 多态

```cpp
/Plane.h文件
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
    //直升飞机
    Jet p2;
    bizPlay(p2);
}
```

#### 引用

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
    cout << t->name << "," << t->age << endl;   
    //(*t).name 
}
//带有结构体引用的写法
void myprint2(Teacher &t){
    cout << t.name << "," << t.age << endl;
    t.age = 21;
}
//指针值交换
void swap_1(int *a, int *b){
    int c = *a;
    *a = *b;
    *b = c;
}
//引用值交换
void swap_2(int &a, int &b){
    int c = a;
    a = b;
    b = c;
}
void main(){
    Teacher t;
    t.name = "Hensen";
    t.age = 20;
    //指针的写法
    myprint(&t);
    //引用的写法
    myprint2(t);

    int x = 10;
    int y = 20;
    //指针的写法
    swap_1(&x, &y);
    //引用的写法
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
    //结果是4，指针只是存放的地址
    cout << sizeof(p) << endl;
}
```

#### 异常

1. C++异常处理，会根据抛出的异常数据类型，进入到相应的catch块中
```cpp
int main(){
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
3. 抛出对象
```cpp
class MyException{};
void mydiv(int a, int b){
    if (b == 0){
        throw MyException();
        // 不要抛出异常指针
        // throw new MyException;        
    }
}
void main(){
    try{
        mydiv(8,0);
    } catch (MyException& e2){
        cout << "MyException引用" << endl;
    } catch (MyException* e1){
        cout << "MyException指针" << endl;        
        //指针的话需要手动释放内存
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
5. 标准异常
```cpp
//需要导入标准异常的依赖库
#include <stdexcept>
class NullPointerException : public exception{
public:
    NullPointerException(char* msg) : exception(msg){}
};
void mydiv(int a, int b){
    if (b > 10){
        throw out_of_range("超出范围");
    } else if (b == NULL){
        throw NullPointerException("为空");
    } else if (b == 0){
        throw invalid_argument("参数不合法");
    }
}
void main(){
    try{
        mydiv(8, NULL);
    } catch (out_of_range e1){
        cout << e1.what() << endl;
    } catch (NullPointerException& e2){
        cout << e2.what() << endl;
    } catch (...){
        cout << "未知异常" << endl;
    }
}
```
6. 外部类异常
```cpp
class Err{
public:
    class MyException{
        public: MyException(){}
    };
};
void mydiv(int a, int b){
    if (b > 10) throw Err::MyException();
}
```

#### IO流

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

#### 函数

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
class Teacher{
public:
    // 计数器
    static int total;
public:
    Teacher(){     
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
void main(){
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

#### 虚函数

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
    virtual void draw();
}
```

#### 模板函数与模板类

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

#### 构造函数

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
2. 析构函数:当对象要被系统释放时，析构函数被调用，一般使用于程序的善后工作
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
// - 声明时赋值: Teacher t2 = t1;
// - 作为参数传入，实参给形参赋值: 上面的写法就是
// - 作为函数返回值返回，给变量初始化赋值: Teacher t3 = func1(t1);
```
4. 拷贝函数的问题，浅拷贝（值拷贝）问题
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

#### 友元函数

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

#### 类型转换

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

#### 内存分配

C++ 通过new(delete)动态内存分配

- 使用new的方式: 和malloc一样的功能，但是会自动调用构造函数
- 使用delete的方式: 和free一样的功能，但是会自动调用析构函数
- 指针的malloc、free可以和new、delete互相掺杂使用，但是malloc、free不会调用构造函数和析构函数

#### 运算符重载

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
class Point{
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

#### 其他

1. 布尔类型（bool）: 布尔类型的值大于0的都为true，布尔类型的值小于等于0的都为false
2. 三目运算符: 三目运算符可以作为参数进行赋值
```cpp
int a = 10, b = 20;
((a > b) ? a : b) = 30 ;
```
3. 指针常量与常量指针
    - 指针常量（int *const p）: 指针的常量，表示不可以修改p的地址，但是可以修改p的内容
    - 常量指针（const int *p）: 指向常量的指针，表示不可以修改p的内容，但是可以修改p的地址
4. 指针函数与函数指针
    - 指针函数（int *fun(x,y)）: 指向指针的函数，其实可以说是返回指针的函数
    - 函数指针（int (*fun)(x,y); funa = fun; funb = fun;）: 指向函数的指针

### 高级

#### 多线程

[pthread线程深入理解](https://blog.csdn.net/lovecodeless/article/details/24468107)<br>

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

int pthread_mutex_init(pthread_mutex *mutex, const pthread_mutexattr_t* mutexattr);
// 互斥量指针; 互斥量属性指针（一般设为NULL）
int pthread_mutex_lock(pthread_mutex *mutex);
int pthread_mutex_unlock(pthread_mutex *mutex);
int pthread_mutex_destroy(pthread_mutex *mutex);

int sem_init(sem_t *sem, int pshared, unsigned int val);
// 信号量指针; 信号量类型（一般设置为0）; 信号量初始值。第二个参数pshared为0时，该进程内所有线程可用，不为0时不同进程间可用。
int sem_wait(sem_t *sem);
// 该函数申请一个信号量，当前无可用信号量则等待，有可用信号量时占用一个信号量，对信号量的值减1。
int sem_post(sem_t *sem);
// 该函数释放一个信号量，信号量的值加1。
int sem_destory(sem_t *sem);
// 该函数销毁信号量。
// 例子: https://blog.csdn.net/lovecodeless/article/details/24919511
// 采用信号量机制，解决苹果橙子问题: 一个能放N（这里N设为3）个水果的盘子，爸爸只往盘子里放苹果，妈妈只放橙子，女儿只吃盘子里的橙子，儿子只吃苹果。

// 互斥能很好的处理共享资源访问的协调问题，是多线程同步必不可少的机制。互斥机制也有其缺陷，当线程在等待共享资源满足某个条件，互斥机制下，必须不断地加锁和解锁，
// 其间查询共享资源是否满足条件，这将带来巨大的消耗。此时，需要新的机制来解决这个问题，即条件变量。
// 条件变量机制弥补了互斥机制的缺陷，允许一个线程向另一个线程发送信号（这意味着共享资源某种条件满足时，可以通过某个线程发信号的方式通知等待的线程），
// 允许阻塞等待线程（当线程等待共享资源某个条件时，可让该线程阻塞，等待其他线程发送信号通知）。
// 条件变量机制在处理等待共享资源满足某个条件问题时，具有非常高的效率，且空间消耗相比互斥机制也有优势。
// 条件变量机制，所有等待一个条件变量的线程会形成一个队列，这个队列显然是全局的共享队列。当线程进入等待状态，将线程添加到队列就需要使用互斥量，
// 防止多个线程同时使用pthread_cond_wait，在调用pthread_cond_wait前加锁互斥量，进入阻塞前解锁互斥量。这也解释了pthread_cond_wait函数参数需要互斥量。
int pthread_cond_init(pthread_cond_t *cond, pthread_condattr_t *cond_attr);
// 条件变量指针; 条件变量属性指针（一般设为NULL）
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

// 线程私有数据TSD（Thread-specific Data）是被所有线程共享的，处于功能与安全的需求，有必要为线程提供线程全局变量。线程全局变量便是线程私有数据，仅在某个线程内有效。
// 线程私有数据通过关联的键值key识别，创建时将私有数据与key关联，通过key向线程私有数据写入内容，也通过key读取线程私有数据的内容，最后通过key 删除线程私有数据。 
// 线程私有数据创建后，该进程内所有的线程都可以使用这个key向线程私有数据写入与读取数据。对不同的线程而言，同一个key值，分别访问线程自己的私有数据，互不影响。
int pthread_key_create(pthread_key_t *key, void (*destr_function) (void *));    // 创建线程私有数据
// 键值key; 销毁函数（一般设为NULL）
int pthread_setspecific(pthread_key_t  key,  void  *pointer);   // 写入数据
void* pthread_getspecific(pthread_key_t key);   // 读取数据
int pthread_key_delete(pthread_key_t key);      // 销毁线程私有数据
// 例子: https://blog.csdn.net/lovecodeless/article/details/24983131
// 线程child1,child2均把自己的线程ID写入自己的线程私有数据中，写入的是一个指针，在读出的数据是void *型的指针，需要对其进行强制类型转换
```

[C++11 多线程](https://www.cnblogs.com/52why/p/7629290.html)<br>
[C/C++ 多线程（程序猿面试重点）CodeBlocks-CB的pthreads使用](https://www.cnblogs.com/52why/p/7629285.html)<br>

1. ``<atomic>``: 提供原子操作功能，该头文主要声明了两个类, std::atomic 和 std::atomic_flag，另外还声明了一套 C 风格的原子类型和与 C 兼容的原子操作的函数。
2. ``<thread>``: 线程模型封装，该头文件主要声明了 std::thread 类，另外 std::this_thread 命名空间也在该头文件中。
3. ``<mutex>``: 互斥量封装，该头文件主要声明了与互斥量(mutex)相关的类，包括 std::mutex 系列类，std::lock_guard, std::unique_lock, 以及其他的类型和函数。
4. ``<condition_variable>``: 条件变量，该头文件主要声明了与条件变量相关的类，包括 std::condition_variable 和 std::condition_variable_any。
5. ``<future>``: 实现了对指定数据提供者提供的数据进行异步访问的机制。该头文件主要声明了 std::promise, std::package_task 两个 Provider 类，以及 std::future 和 std::shared_future 两个 Future 类，另外还有一些与之相关的类型和函数，std::async() 函数就声明在此头文件中。

```cpp
#include <thread>
void test1() { /* ... */ }
void test2(int index) { /* ... */ }
std::thread first(test1);
std::thread second(test2, 0);
first.join();
first.detach();
first.get_id();
first.joinable();
```

#### 常用API

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

#### 网络

### 常见问题

#### 常见问题1

1. new和malloc的区别: (将new看做方法，则需要看 头文件 参数 返回类型 分配失败 是否可重载 内存区域 自定义类型)
    1. 属性: new/delete是C++关键字，需要编译器支持。malloc/free是库函数，需要头文件支持。
    2. 参数: 使用new操作符申请内存分配时无须指定内存块的大小，编译器会根据类型信息自行计算。而malloc则需要显式地指出所需内存的尺寸。
    3. 返回类型: new操作符内存分配成功时，返回的是对象类型的指针，类型严格与对象匹配，无须进行类型转换，故new是符合类型安全性的操作符。而malloc内存分配成功则是返回void * ，需要通过强制类型转换将void*指针转换成我们需要的类型。
    4. 分配失败: new内存分配失败时，会抛出bac_alloc异常。malloc分配内存失败时返回NULL。
    5. 自定义类型: new会先调用operator new函数，申请足够的内存(通常底层使用malloc实现)。然后调用类型的构造函数，初始化成员变量，最后返回自定义类型指针。delete先调用析构函数，然后调用operator delete函数释放内存(通常底层使用free实现)。malloc/free是库函数，只能动态的申请和释放内存，无法强制要求其做自定义类型对象构造和析构工作。
    6. 重载: C++允许重载new/delete操作符，特别的，布局new的就不需要为对象分配内存，而是指定了一个地址作为内存起始区域，new在这段内存上为对象调用构造函数完成初始化工作，并返回此地址。而malloc不允许重载。
    7. 内存区域: new操作符从自由存储区（free store）上为对象动态分配内存空间，而malloc函数从堆上动态分配内存。自由存储区是C++基于new操作符的一个抽象概念，凡是通过new操作符进行内存申请，该内存即为自由存储区。而堆是操作系统中的术语，是操作系统所维护的一块特殊内存，用于程序的内存动态分配，C语言使用malloc从堆上分配内存，使用free释放已分配的对应内存。自由存储区不等于堆，如上所述，布局new就可以不位于堆中。

### end