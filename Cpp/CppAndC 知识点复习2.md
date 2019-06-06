[2018 C++开发工程师面试题大合集(持续更新)](https://blog.csdn.net/Damage233/article/details/81116115)
[c++常见面试题30道](https://blog.csdn.net/wdzxl198/article/details/9102759)
[]()

## Linux Shell学习

1. Shell基础1
    1. **Shell 提示符**。在UNIX系统下有两种主要类型的shell
        1. Bourne shell. 如果您使用的是Bourne类型的shell，默认提示符为$字符。
        2. C shell.如果您使用的是C型的shell，默认的提示字符％。
    2. **Shell 脚本**。其实就是将Shell命令行中的指令写入文件中重复使用。例子 test.sh
        ```sh
        #!/bin/sh
        pws
        ls
        ```
    3. **Shell 注释**
        1. 单行: #
        2. 多行
            ```sh
            :<<EOF
            注释内容...
            注释内容...
            注释内容...
            EOF
            # EOF 也可以使用其他符号
            :<<'
            注释内容...
            注释内容...
            注释内容...
            '
            ```
    4. **执行 Shell**: ``chmod +x test.sh`` 之后可以随时使用 ``./test.sh`` 来执行。
    5. 深入了解些
        ```sh
        #!/bin/sh
        echo "What is your name?"
        read PERSON
        echo "Hello, $PERSON"
        ```
2. Shell基础2
    1. 变量
        1. 变量是一个字符串，我们分配一个值。分配的值可以是一个数字，文本，文件名，设备，或任何其他类型的数据。	变量是没有超过实际数据的指针。shell，可以创建，分配和删除变量。
        2. 变量的名称可以包含只有字母(a到z或A到Z)，数字(0〜9)或下划线(_)。按照惯例，UNIX的shell变量将有自己的名称以大写字母。只能以字母或者下划线开头。
        3. 定义变量: variable_name=variable_value  # 注意=周围不能有空格
        4. 访问变量: 变量名+前缀($)。
        5. 只读变量
            ```sh
            NAME="liangyy75"
            readonly NAME  # 现在NAME是只读了
            NAME="readonly"  # 会报错
            ```
        6. 删除变量: ``unset variable_name`` 。不能使用unset命令取消只读变量。下面不会打印任何东西，除了换行。
            ```sh
            NAME="liangyy75"
            unset NAME
            echo $NAME
            ```
        7. 变量类型: 当一个shell运行，存在三种主要类型的变量
            1. 局部变量: 局部变量是一个变量所做的是在当前实例中的shell。这不是程序由shell开始。在命令提示符下设置。
            2. 环境变量: 环境变量是一个变量所做的是任何子进程的shell。有些程序需要以正常的环境变量。通常一个shell脚本定义，只有那些环境变量所需要的程序没有运行。
            3. Shell 变量: shell变量是一个特殊的变量，由shell设置，也是shell正常需要。一些合成变量环境变量，而其他局部变量。
        8. 单引号字符串的限制
            1. 单引号里的任何字符都会原样输出，单引号字符串中的变量是无效的，转义失效；
            2. 单引号字串中不能出现单独一个的单引号(对单引号使用转义符后也不行)，但可成对出现，作为字符串拼接使用。
        9. 拼接字符串
            ```sh
            your_name="runoob"
            # 使用双引号拼接
            greeting="hello, "$your_name" !"
            greeting_1="hello, ${your_name} !"
            echo $greeting  $greeting_1
            # 使用单引号拼接
            greeting_2='hello, '$your_name' !'
            greeting_3='hello, ${your_name} !'
            echo $greeting_2  $greeting_3
            ```
        10. 获取字符串长度 ``string="abcdef"`` ``echo ${#string} # 输出6``
        11. 提取子字符串(start与length) ``echo ${string:1:4}  # 输出bcdg``
        12. 查找子字符串: 查找字符 c 或 e 的位置(哪个字母先出现就计算哪个) ``echo `expr index "$string" io`  # 输出3``
    2. 特殊变量
        1. 特殊变量使用特殊字符。如$字符表示进程ID号，或PID，在当前shell ``echo $$  # 将写入在当前shell的PID``
        2. 一些特殊变量
            - $0 : 当前脚本的文件名。
			- $n : 这些变量对应于调用脚本的参数。这里n是对应于参数位置的正十进制数(第一个参数是$ 1，第二个参数是$ 2，依此类推)。
			- $# : 提供给脚本的参数数量。 
			- $\* : 以一个单字符串显示所有向脚本传递的参数。如"$*"用「"」括起来的情况、以"$1 $2 … $n"的形式输出所有参数。
			- $@ : 与$*相同，但是使用时加引号，并在引号中返回每个参数。如"$@"用「"」括起来的情况、以"$1" "$2" … "$n" 的形式输出所有参数。
			- $? : 上条指令执行完后的状态码/返回码
			- $$ : 脚本运行的当前进程ID号
			- $! : 后台运行的最后一个进程的ID号
            - $- : 显示Shell使用的当前选项，与set命令功能相同。
        3. 实例1
            ```sh
            #!/bin/sh
            echo "File Name: $0"
            echo "First Parameter : $1"
            echo "First Parameter : $2"
            echo "Quoted Values: $@"
            echo "Quoted Values: $*"
            echo "Total Number of Parameters : $#"
            ```
            ```shell
            $./test.sh Zara Ali
            File Name : ./test.sh
            First Parameter : Zara
            Second Parameter : Ali
            Quoted Values: Zara Ali
            Quoted Values: Zara Ali
            Total Number of Parameters : 2
            ```
        4. 实例2
            ```sh
            #!/bin/sh
            for TOKEN in $*
            do
                echo $TOKEN
            done
            ```
        5. $? 变量表示前一个命令的退出状态。退出状态是一个数值，在一个命令完成后返回。作为一项规则，大多数命令返回，如果他们成功退出则状态为0。
    3. 数组/Arrays
        1. 创建数组: ``NAME[0]="liuwang"`` ``NAME[1]="liangy75"`` 。
            1. ksh shell初始化数组: ``set -A array_name value1 value2 ... valuen``
            2. bash shell初始化数组: ``array_name=(value1 ... valuen)``
        2. 访问数组: ``${NAMES[0]}`` ``${NAMES[*]}`` ``${NAMES[@]}`` ``$NAMES  # 相当于${NAMES[0]}``
        3. 实例1
            ```sh
            #!/bin/sh
            NAMES[0]="name1"
            NAMES[1]="name2"
            NAMES[2]="name3"
            NAMES[3]="name4"
            echo "name0: ${NAMES[0]}"
            echo "name1: ${NAMES[1]}"
            echo "all names: ${NAMES[*]}"
            echo "all names: ${NAMES[@]}"
            echo "names: $NAMES"  # 只输出了name1
            ```
        4. 获取数组长度 ``length=${#ARRAY[*]}  # or ${#ARRAY[@]}``
    4. 算术运算符
        1. 示例1
            ```sh
            val=`expr 2 + 2`  # 注意 val=$[a + b] 等价于 val=`expr $a + $b`
            echo "Total value : $val"
            ```
        2. 运算符和表达式之间必须有空格，例如2+2是不正确的，因为它应该写成2 + 2。
        3. ``，称为倒逗号之间应包含完整的表达。
        4. 示例2
            ```sh
            a=30
            b=20
            echo `expr $a + $b`  # 50
            echo `expr $a - $b`  # 10
            echo `expr $a \* $b`  # 600
            echo `expr $a / $b`  # 1
            echo `expr $a % $b`  # 10
            echo `expr $a == $b`  # 0
            echo `expr $a != $b`  # 1
            a=$b
            if [ $a == $b ]
            then
                echo `expr $a == $b`  # 1
                echo `expr $a != $b`  # 0
            fi
            ```
    5. 关系运算符
        ```sh
        if [ $a -eq $b ]
        then
            echo "$a -eq $b: a is equal to b"
        else
            echo "$a -eq $b: a is not equal to b"
        fi
        # [ $a -eq $b ]
        # [ $a -ne $b ]
        # [ $a -gt $b ]
        # [ $a -lt $b ]
        # [ $a -ge $b ]
        # [ $a -le $b ]
        ```
    6. 布尔运算符
        ```sh
        # [ !false ]
        # [ $a -lt 20 -o $b -gt 10 ]  # -o表示or
        # [ $a -lt 20 -a $b -gt 100 ]  # -a表示and
        ```
    7. 字符串运算
        ```sh
        a="abc"
        b="def"
        # [ $a = $b ]  # 检查两个字符串是否相等
        # [ $a != $b ]
        # [ -z $a ]  # 字符串长度是否为0
        # [ -n $a ]  # 字符串长度不为0
        # [ $a ]  # 检查字符串是否为空
        ```
    8. 文件测试符
        ```sh
        # 假设有一个变量file表示文件，现有文件名"test"，其大小为100字节，有读，写和执行权限
        file="/var/www/yiibai/unix/test.sh"
        # [ -b $file ]  # 检查文件是否为块特殊文件
        # [ -c $file ]  # 检查文件是否是字符特殊文件
        # [ -d $file ]  # 检查文件是否是目录
        # [ -f $file ]  # 检查文件是否是普通文件而不是目录或特殊文件

        # [ -g $file ]  # 检查文件是否设置了其组ID(SGID)位 group ID (SGID) bit
        # [ -k $file ]  # 检查文件是否设置了其粘滞位 sticky bit
        # [ -p $file ]  # 检查文件是否为命名管道
        # [ -t $file ]  # 检查文件描述符是否打开并与终端关联
        # [ -u $file ]  # 检查文件是否设置了其设置用户ID(SUID)位

        # [ -r $file ]  # 是否可读
        # [ -w $file ]  # 是否可写
        # [ -x $file ]  # 是否可执行
        # [ -s $file ]  # 算法不为空
        # [ -e $file ]  # 是否存在

        # [ -S $file ]  # 判断某文件是否 socket。
        # [ -L $file ]  # 检测文件是否存在并且是一个符号链接。
        ```
    9. C Shell运算符
        1. 算术与逻辑运算符
            ```sh
            # ()改变优先级
            # ~二进制反码
            # ++ -- = (自增、自减、赋值)
            # + - * / % += -= *= /= %= ^= &= |=
            # <<左移 >>右移
            # == != =~ (字符串相等、字符串不等、模式匹配)
            # & ^ | (位上的与、异或、或)
            # && ! || (逻辑上的and not or)
            ```
        2. 文件操作符
            ```sh
            -r -w -x -s -e
            -f -d -b -c
            -g -k -p -t -u
            ```
    10. Korn Shell运算符
        1. 算术与逻辑运算符
            ```sh
            # + - * / %
            # + - (一元)
            # !~  # Logical negation; binary inversion (one's complement) 逻辑否定;二进制反转(一个补码)
            # << >>
            # == != =~
            # & ^ |
            # && ||
            # ++ -- =
            ```
        2. 文件操作符
            ```sh
            -r -w -x -s -e
            -f -d
            ```
3. Shell基础3
    1. Shell条件语句
        ```sh
        # case 1
        if [ $str ]
        then
            echo "\$str is not empty"
        fi
        # case 2
        if [ -z $str ]
        then
            echo "\$str is emtpy"
        else
            echo "\$str is not emtpy"
        fi
        # case 3
        if [ $intVal == 1 ]
        then
            echo "\$intVal is 1"
        elif [ $intVal == 2 ]
        then
            echo "\$intVal is 2"
        elif [ $intVal == 3 ]
        then
            echo "\$intVal is 3"
        else
            echo "\$intVal is not in [1, 2, 3]"
        fi
        # case 4
        FRUIT="kiwi"
        case "$FRUIT" in
            "apple")
                echo "Apple pie is quite tasty"
                ;;
            "banana") echo "I like banana nut bread." 
            ;;
            "kiwi") echo "New Zealand is famous for kiwi." 
            ;;
        esac
        ```
    2. Shell循环语句
        1. while
            ```sh
            while command1 ; # this is loop1, the outer loop
            do
                Statement(s) to be executed if command1 is true
                while command2 ; # this is loop2, the inner loop
                do
                    Statement(s) to be executed if command2 is true
                done
                Statement(s) to be executed if command1 is true
            done
            ```
            ```sh
            a=0
            while [ "$a" -lt 10 ]
            do
                b="$a"
                while [ "$b" -gt 0 ]
                do
                    echo -n "$b "
                    b=`expr $b - 1`
                done
                echo "0"
                a=`expr $a + 1`
            done
            ```
        2. for
            ```sh
            for var in word1 word2 ... wordN
            do
                Statement(s) to be executed for every word.
            done
            # or
            for ((assignment;condition;next)); do
                list of commands
            done
            ```
            ```sh
            # example1
            for var in 0 1 2 3 4 5 6 7 8 9 10
            do
                echo $var
            done
            # example2
            for FILE in $HOME/.bash*
            do
                echo $FILE
            done
            # example3
            for ((i=1;i<5;i++)); do
                echo "这是第 $i 次调用"
            done
            ```
        3. util
            ```sh
            until command
            do
                Statement(s) to be executed until command is true
            done
            ```
        4. select
            ```sh
            select var in word1 word2 ... wordN
            do
                Statement(s) to be executed for every word.
            done
            ```
            ```sh
            select DRINK in tea cofee water juice appe all none
            do
                case $DRINK in
                    tea|cofee|water|all) 
                        echo "Go to canteen"
                        ;;
                    juice|appe)
                        echo "Available at home"
                        ;;
                    none) 
                        break 
                        ;;
                    *) echo "ERROR: Invalid selection" 
                        ;;
                esac
            done
            # 与for不同在于它提供菜单给用户，用户不断选择 DRINK ，直到break
            ```
            ```shell
            $./test.sh
            1) tea
            2) cofee
            3) water
            4) juice
            5) appe
            6) all
            7) none
            #? juice
            Available at home
            #? none
            $
            ```
            ```shell
            $PS3="Please make a selection => " ; export PS3
            $./test.sh
            1) tea
            2) cofee
            3) water
            4) juice
            5) appe
            6) all
            7) none
            Please make a selection => juice
            Available at home
            Please make a selection => none
            $
            ```
    3. Shell循环控制
        1. break
            1. break n: 指定的第n个封闭的循环退出。即可以跳出多个循环。
            2. break: 从当前循环跳出。
        2. continue
            1. continue
            2. continue n
    4. Shell常用指令
        1. echo
            ```sh
            echo -e "开启转义，支持\n、\r等
            和多行字符串了"
            echo -e "显示不换行:\c"  # -e开启转义 \c不换行
            echo '原样输出字符串，不进行转义或取变量(用单引号)'
            echo "显示命令执行结果: `date`"
            echo "It is a test" > myfile  # 重定向
            ```
        2. read
            ```sh
            read firstStr secondStr  # read 命令一个一个词组地接收输入的参数，每个词组需要使用空格进行分隔；如果输入的词组个数大于需要的参数个数，则多出的词组将被作为整体为最后一个参数接收。
            read -p "请输入一段文字:" -n 6 -t 5 -s password
            # -p 输入提示文字
            # -n 输入字符长度限制(达到6位，自动结束)
            # -t 输入限时
            # -s 隐藏输入内容
            ```
        3. printf
            ```sh
            # 模仿 POSIX C
            printf  format-string  [arguments...]  # printf 使用引用文本或空格分隔的参数，外面可以在 printf 中使用格式化字符串，还可以制定字符串的宽度、左右对齐方式等。默认 printf 不会像 echo 自动添加换行符，我们可以手动添加 \n。
            printf "%-10s %-8s %-4s\n" 姓名 性别 体重kg  # -表示左对齐，没有则表示右对齐
            printf "%-10s %-8s %-4.2f\n" 郭靖 男 66.1234
            printf "%-10s %-8s %-4.2f\n" 杨过 男 48.6543
            printf "%-10s %-8s %-4.2f\n" 郭芙 女 47.9876
            ```
        4. test
            ```sh
            if test $[num1] -eq $[num2]; then
                echo "两个数相等"
            elif [ $[num1] -lt $[num2] ]; then
                echo "数字1小于数字2"
            else
                echo "数字1大于数字2"
            fi
            ```
        5. 变量替换
            ```sh
            ${var}  # 使用var的值来替换该表达式
            ${var:-word}  # 如果var为null或未设置，则该表达式的值为word，而var依然是unset
            ${var:=word}  # 如果var为null或未设置，则var的值变为word
            ${var:+word}  # ???
            ${var:?message}  # 如果var为null或未设置，message将作为错误信息输出
            # example
            echo ${var:-"Variable is not set"}
            echo "1 - Value of var is ${var}"
            echo ${var:="Variable is not set"}
            echo "2 - Value of var is ${var}"
            unset var
            echo ${var:+"This is default value"}
            echo "3 - Value of var is $var"
            var="Prefix"
            echo ${var:+"This is default value"}
            echo "4 - Value of var is $var"
            echo ${var:?"Print this message"}
            echo "5 - Value of var is ${var}"
            # output
            :<<EOF
            Variable is not set
            1 - Value of var is
            Variable is not set
            2 - Value of var is Variable is not set

            3 - Value of var is
            This is default value
            4 - Value of var is Prefix
            Prefix
            5 - Value of var is Prefix
            EOF
            ```
    5. Shell输入输出重定向
        1. 输出重定向至文件 ``echo line 1 > myfile`` ``who > users; cat users;  # 如果命令输出到一个有数据的文件，该文件的原有数据会丢失`` ``echo line 2 >> myfile  # 追加结果``
        2. 输入重定向至文件 ``wc -l myfile  # 输出 2 myflie ，计算行数`` ``wc -l < myfile  # 输出 2 ，这里只以为是从终端输入的，而不是从文件输入，所以算出2行，但是没有文件名``
        3. 在一个shell脚本中，我们可以运行一个交互式程序，无需用户操作，通过提供互动程序或交互式shell脚本所需的输入。这里的文件的一般形式是
            ```sh
            $ command << delimiter
            line 1
            line 2
            ...
            line n
            delimiter
            # 相当于多行文本了

            # example1
            $ wc -l << EOF
            > line1
            > line2
            > line3
            > EOF
            3

            # example2
            #!/bin/sh
            cat << EOF
            This is a simple lookup program 
            for good (and bad) restaurants
            in Cape Town.
            EOF
            $ ./test.sh

            # example3
            #!/bin/sh
            filename=test.txt
            vi $filename <<EndOfCommands
            i
            This file was created automatically from
            a shell script
            ^[
            ZZ
            EndOfCommands
            $ ./test.sh
            ```
        4. 丢弃输出: 有时会需要执行命令，但不想显示在屏幕上的输出。在这种情况下，可以丢弃的输出重定向到文件 /dev/null:
            ```sh
            $ command > /dev/null
            # 这里 command 是要执行的命令的名字。文件/dev/null 是一个特殊的文件自动放弃其所有的输入。
            ```
        5. 同时要放弃一个命令的输出和错误输出，使用标准的重定向到STDOUT 到 STDERR重定向：``command > /dev/null 2>&1  # 2代表stderr和1代表STDOUT``
        6. https://www.yiibai.com/shell/unix-io-redirections.html
        7. 同时替换输入输出 ``command < infile > outfile``
        8. 重定向深入讲解: 一般情况下，每个 Unix/Linux 命令运行时都会打开三个文件
            1. 标准输入文件(stdin)：stdin的文件描述符为0，Unix程序默认从stdin读取数据。
            2. 标准输出文件(stdout)：stdout 的文件描述符为1，Unix程序默认向stdout输出数据。
            3. 标准错误文件(stderr)：stderr的文件描述符为2，Unix程序会向stderr流中写入错误信息。
    6. Shell函数
        1. 函数允许您对分解成更小的，逻辑子部分，然后可以被要求执行各项任务时，它需要一个脚本的整体功能。使用函数来执行重复性的任务，是一个很好的方式来创建代码的重用。代码重用是现代面向对象编程的原则的重要组成部分。Shell函数是类似于其他编程语言中的子程序，过程和函数。
        2. 语法
            ```sh
            function_name () {
                list of commands
                # 函数参数用 $1 $2 $* $@ 这些指代
                exit  # 直接退出
                return code  # 可以返回整数
            }
            function_name  # 函数调用
            echo $?
            ```
        3. 函数更有趣的功能之一是，他们可以调用本身以及调用其他函数。被称为递归函数调用自身的函数。
        4. 你可以把常用功能定义在.profile中，这样每次进入命令行，在命令提示符下就可以使用它们。或者，你可以在一个文件test.sh中定义，然后通过键入当前shell中执行该文件 ``$. test.sh`` 来将常用功能加入。
        5. 要删除 shell 中的函数定义，可以使用unset命令 .f 选项 ``$ unset .f function_name``
    7. Shell联机
        1. 所有的Unix命令来与一些可选的和强制性的选择。忘记这些命令的完整语法，这是很常见。因为没有人能记得每一个UNIX命令和选项，一直提供在线帮助，因为在Unix 早期的时候。Unix的版本的帮助文件，被称为手册页。如果你知道任何命令的名字，但你不知道如何使用它，那么手册页来帮助你。联机语法: ``$man command  # 如man pwd``
    8. Shell文件包含
        1. 和其他语言一样，Shell 也可以包含外部脚本。这样可以很方便的封装一些公用的代码作为一个独立的文件。Shell 文件包含的语法格式如下：
            ```sh
            . filename   # 注意点号(.)和文件名中间有一空格
            # or
            source filename
            ```
        2. 被包含的文件不需要可执行权限，即不需要 chmod +x test.sh。
4. 深入
    1. [Shell学习笔记第一版](http://birdteam.net/132227)
    2. [Linux运维人员最常用166个命令汇总](https://birdteam.net/26166)
    3. [[Bash Shell] Shell学习笔记](https://blog.csdn.net/xiaoyida11/article/details/52240376)
    4. [《linux命令行与shell编程大全》--读书笔记](https://blog.csdn.net/qq_36337149/article/details/80418063)
    5. [Shell脚本：Linux Shell脚本学习指南(超详细)](http://c.biancheng.net/shell/)
    6. [shell脚本输出带颜色字体](https://blog.csdn.net/andylauren/article/details/60873400)
    6. []()
    6. []()

## PowerShell学习

* [PowerShell控制台输出符号](https://www.pstips.net/using-symbols-in-console-output.html)
* [PowerShell教程](https://www.pstips.net/powershell-online-tutorials)
* [PowerShell上百篇博客](https://blog.csdn.net/itanders/article/category/325591/1?)
* [[命令行] 配置颜色(windows cmd，powershell，linux console)](https://blog.csdn.net/gogdizzy/article/details/7197857)
* [官方学习教程](https://docs.microsoft.com/zh-cn/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-5.1)
* []()

## Linux学习

* https://www.centos.org/download/
* https://studio.dev.tencent.com/
* [《linux命令行与shell编程大全》--读书笔记](https://blog.csdn.net/qq_36337149/article/details/80418063)
* [Linux就该怎么学](https://www.linuxprobe.com/chapter-01.html)
* [Unix 易百教程](https://www.yiibai.com/unix/unix-getting-started.html)
* [Linux 易百教程](https://www.runoob.com/linux/linux-install.html)
* [Linux学习教程，Linux入门教程(超详细)](http://c.biancheng.net/linux_tutorial/)
* [Linux命令简写和全称](https://blog.csdn.net/chinayuan/article/details/51291666)
* [Linux命令大全](https://www.runoob.com/linux/linux-command-manual.html)
* [Linux命令必知必会](https://github.com/mylxsw/growing-up)
* [每天一个Linux命令](https://www.cnblogs.com/peida/archive/2012/12/05/2803591.html)
* []()

1. 常用指令1
    1. date --help (powershell / msys2) (时间工具)
    2. cal --help
    3. uname --help
    4. echo2 --help
    5. ls2 --help
    6. cd2 --help
    7. cp2 --help
    8. mv2 --help
    9. set --help (msys2)  [Bash 脚本 set 命令教程](http://www.ruanyifeng.com/blog/2017/11/bash-set.html?utm_source=tool.lu)
    10. df --help
    11. &和&&，|和||
        1. &  表示任务在后台执行，如要在后台运行redis-server,则有 redis-server &
        2. && 表示前一条命令执行成功时，才执行后一条命令 ，如 echo '1' && echo '2'
        3. | 表示管道，上一条命令的输出，作为下一条命令参数，如 echo 'yes' | wc -l
        4. || 表示上一条命令执行失败后，才执行下一条命令，如 cat nofile || echo "fail"
    12. expr --help
    13. 
2. 常用指令2
    1. git --help
    2. curl2 --help
    3. wget2 --help
    4. tar --help (压缩工具)
    5. zip -help (压缩工具)
    6. unzip -help (解压工具)
    7. gzip --help
    8. pacman --help
    9. 
3. 常用指令3: 文本编辑
    1. grep --help
    2. head --help
    3. tail --help
    4. sed --help
    5. tr --help (字符串转换工具)
    6. wc --help (字数统计工具)
    7. sort2 --help (文本行排序工具)
    8. csplit --help
    9. vim --help
    10. tac --help (倒序输出工具)
    11. nl --help
    12. 
4. 常用指令4: 文档管理
    1. cat2 --help
        1. cat的全称是Conctaenate，用于将一个档案的内容连续的打印在屏幕上
        2. -A :相当于-vTE的整合选项，可列出一些特殊字符而不是空白而已
        3. -b :列出行号，仅针对非空白行进行行号展示
        4. -E :将结尾的断行字符$展示出来
        5. -n :打印行号，连同空白行也会有行号
        6. -T :将【TAB】按键以^I显示出来
        7. -v : 列出一些看不出来的特殊字符
        8. https://www.cnblogs.com/OliverQin/category/881532.html
    2. awk --help
    3. split --help
    4. diff2 --help
    5. touch --help
    6. file --help (文件属性工具)
    7. 
5. 三剑客之一: awk(aho, weinberger & kernighan interpreted language) : 复杂文本处理，适合文本格式化和其他复杂文本格式处理
    1. link
        * [三十分钟学会AWK](http://blog.jobbole.com/109089/)
        * [Linux三大剑客之awk](https://blog.csdn.net/solaraceboy/article/details/79407090)
        * [awk 教程（自己整理的，应该是最全的）](https://blog.csdn.net/u010632125/article/details/79661809)
        * [awk从放弃到入门系列](http://www.zsythink.net/archives/tag/awk)
        * [AWK Tutorial](https://www.tutorialspoint.com/awk/index.htm)
        * [awk官方](https://www.gnu.org/software/gawk/manual/gawk.html)
    2. 知识1
        1. 来源: AWK是一门解释型的编程语言。在文本处理领域它是非常强大的，它的名字来源于它的三位作者的姓氏：Alfred Aho， Peter Weinberger 和 Brian Kernighan。
        2. 类型
            1. AWK – 原先来源于 AT & T 实验室的的AWK
            2. NAWK – AT & T 实验室的AWK的升级版
            3. GAWK – 这就是GNU AWK。所有的GNU/Linux发布版都自带GAWK，它与AWK和NAWK完全兼容
        3. 用途
            1. 文本处理
            2. 输出格式化的文本报表
            3. 执行算数运算
            4. 执行字符串操作等等
        4. 执行过程: 读一行执行一行
        5. 基本使用: AWK的使用非常简单，我们可以直接在命令行中执行AWK的命令，也可以从包含AWK命令的文本文件中执行。
        6. 程序结构
            1. BEGIN 语句块: ``BEGIN {awk-commands}`` 在程序开始的使用执行，它只执行一次，在这里可以初始化变量。BEGIN是AWK的关键字，因此它必须为大写，注意，这个语句块是可选的。
            2. BODY 语句块: ``/pattern/ {awk-commands}`` BODY语句块中的命令会对输入的每一行执行，我们也可以通过提供模式来控制这种行为。注意，BODY语句块没有关键字。
            3. END 语句块: ``END {awk-commands}`` 在程序的最后执行，END是AWK的关键字，因此必须为大写，它也是可选的。
        7. 实例
            ```
            // marks.txt
            1)	Amit	Physics	80
            2)	Rahul	Maths	90
            3)	Shyam	Biology	87
            4)	Kedar	English	85
            5)	Hari	History	89
            ```
            ```cmd
            d:\temporary\ShellTest> awk 'BEGIN{printf "Sr No\tName\tSub\tMarks\n"} {print}' marks.txt
            Sr No   Name    Sub     Marks
            1)      Amit    Physics 80
            2)      Rahul   Maths   90
            3)      Shyam   Biology 87
            4)      Kedar   English 85
            5)      Hari    History 89
            # 在程序的开始，AWK在BEGIN语句中打印出标题。然后再BODY语句中，它会读取文件的每一行然后执行AWK的print命令将每一行的内容打印到标准输出。这个过程会一直重复直到文件的结尾。
            ```
    3. 知识2
        1. 脚本命令
            ```cmd
            cmd> echo -n {print} > command.awk
            cmd> awk -f command.awk marks.txt
            ```
        2. 标准选项
            1. -v 变量赋值 : ``$ awk -v name=Jerry 'BEGIN{printf "Name = %s\n", name}'  # 输出 Name = Jerry`` 在powershell下使用 ``PS> awk -v name=Jerry 'BEGIN{printf \"Name = %s\n\", name}'``
            2. --dump-variables[=file\] : 该选项会输出排好序的全局变量列表和它们最终的值到文件中，默认的文件是 awkvars.out 。 ``$ awk --dump-varibles ''`` ``$ cat awkvars.out``
            3. --help
            4. --lint[=fatal|invalid\] : 该选项允许检查程序的不兼容性或者模棱两可的代码，当提供参数 fatal的时候，它会对待Warning消息作为Error。 ``awk --lint '' /bin/ls``
            5. --posix : 该选项开启严格的POSIX兼容。
            6. --profile[=file\] : 该选项会输出一份格式化之后的程序到文件中，默认文件是 awkprof.out 。 ``$ awk --profile 'BEGIN{printf "---|Header|--\n"} {print} END{printf"---|Footer|---\n"}' marks.txt > /dev/null`` ``$ cat awkprof.out`` 。最后输出如下
                ```awk
                # gawk 配置, 创建 Wed Oct 26 15:05:49 2016
                # BEGIN 块
                BEGIN {
                    printf "---|Header|--\n"
                }
                # 规则
                {
                    print $0
                }
                # END 块
                END {
                    printf "---|Footer|---\n"
                }
                ```
            7. --traditional : 该选项会禁止所有的gawk规范的扩展。
            8. --version
        3. 基本使用
            1. 打印某列或者字段，甚至可以多次某列或者是不按顺序来。如只打印第三列和第四列。 ``PS> awk '{print $3 \"\t\" $4}' marks.txt``
            2. 打印某行。默认情况下，AWK会打印出所有匹配模式的行。但我们可以指定 ``PS> awk '/a/ {print}' marks.txt`` ，上述命令会判断每一行中是否包含a，如果包含则打印该行，如果BODY部分缺失则默认会执行打印，因此，上述命令和下面这个是等价的 ``PS> awk '/a/' marks.txt``
            3. 统计匹配模式的行数。 ``PS> awk '/a/ {++cnt} END {print \"Count = \", cnt}' marks.txt``
            4. 打印超过18个字符的行。 ``PS> awk 'length($0) > 18' marks.txt``
        4. 标准AWK变量
            1. ARGC 命令行参数个数 : ``PS> awk 'BEGIN{print \"Arguments = \", ARGC}' One Two Three Four  # Arguments = 5``
            2. ARGV 命令行参数数组 : ``PS> awk 'BEGIN{for(i=0;i<ARGC-1;++i){printf \"Argv[%d] = %s\n\", i, ARGV[i]}}' one two three four``
                ```输出
                Argv[0] = awk
                Argv[1] = one
                Argv[2] = two
                Argv[3] = three
                ```
            3. CONVFMT 数字的约定格式 : 代表了数字的约定格式，默认值是%.6g ``PS> awk 'BEGIN { print \"Conversion Format =\", CONVFMT }'``
            4. ENVIRON 环境变量 : ``PS> awk 'BEGIN { print ENVIRON[\"PATH\"] }'``
            5. FILENAME 当前文件名 : ``PS> awk 'END { print FILENAME }' marks.txt  # marks.txt``
            6. FS 输入字段的分隔符 : ``$ awk 'BEGIN {print "FS = " FS}' | cat -vte  # FS =  $`` 代表了输入字段的分隔符，默认值为空格，可以通过-F选项在命令行选项中修改它 ``$ awk -F , 'BEGIN {print "FS = " FS}' | cat -vte  # FS = ,$``, ``awk -F "," 'BEGIN{print \"FS = .\" FS}'`` 注意cat不兼容windows下powershell的管道，但兼容cmd的。
            7. NF 字段数目 : 代表了当前行中的字段数目，例如下面例子打印出了包含大于两个字段的行 ``$ echo -e "One Two\nOne Two Three\nOne Two Three Four" | awk 'NF > 2'  # 输出两行 One Two Three \n One Two Three Four`` 在windows下: ``PS> vim temp.txt  # 然后输入echo那些`` ``awk 'NF > 2' temp.txt``
            8. NR 行号 : ``PS> awk 'NR < 3' temp.txt``
            9. FNR 行号(相对于当前文件) : 与NR相似，不过在处理多文件时更有用，获取的行号相对于当前文件。
            10. OFMT 输出格式数字 : 默认值为%.6g
            11. OFS 输出字段分隔符 : 默认为空格
            12. ORS 输出行分隔符 : 默认值为换行符
            13. RS 输入记录分隔符
            14. RLENGTH 代表了 match 函数匹配的字符串长度 : ``PS> awk 'BEGIN { if (match(\"One Two Three\", \"re\")) { print RLENGTH } }'  # 2``
            15. RSTART match函数匹配的第一次出现位置 : ``PS> awk 'BEGIN { if (match(\"One Two Three\", \"Thre\")) { print RSTART } }'  # 9``
            16. SUBSEP 数组子脚本的分隔符 : 默认为\034 ``PS> awk 'BEGIN { print \"SUBSEP = .\" SUBSEP }'  # SUBSEP = .``
            17. $0 代表了当前行
            18. $n 当前行中的第n个字段
        5. GNU AWK的变量
            1. ARGIND 当前被处理的ARGV的索引 : ``PS> awk '{ printf \"ARGIND = %s; Filename = %s; FNR = %s; NR = %s\n\", ARGIND, ARGV[ARGIND], FNR, NR }' temp.txt marks.txt myfile``
                ```输出
                ARGIND = 1; Filename = temp.txt; FNR = 1; NR = 1
                ARGIND = 1; Filename = temp.txt; FNR = 2; NR = 2
                ARGIND = 1; Filename = temp.txt; FNR = 3; NR = 3
                ARGIND = 2; Filename = marks.txt; FNR = 1; NR = 4
                ARGIND = 2; Filename = marks.txt; FNR = 2; NR = 5
                ARGIND = 2; Filename = marks.txt; FNR = 3; NR = 6
                ARGIND = 2; Filename = marks.txt; FNR = 4; NR = 7
                ARGIND = 2; Filename = marks.txt; FNR = 5; NR = 8
                ARGIND = 3; Filename = myfile; FNR = 1; NR = 9
                ARGIND = 3; Filename = myfile; FNR = 2; NR = 10
                ```
            2. BINMODE 在非POSIX系统上指定对所有的文件I/O采用二进制模式。
            3. ERRORNO 一个代表了getline跳转失败或者是close调用失败的错误的字符串 : ``PS> awk 'BEGIN { ret = getline < \"junk.txt\"; if (ret == -1) print \"Error:\", ERRNO }'  # Error: No such file or directory``
            4. FIELDWIDTHS 设置了空格分隔的字段宽度变量列表的话，GAWK会将输入解析为固定宽度的字段，而不是使用FS进行分隔。
            5. IGNORECASE 设置了这个变量的话，AWK会忽略大小写 : ``awk 'BEGIN{IGNORECASE = 1} /amit/' marks.txt  # 1) Amit  Physics   80``
            6. LINT 提供了对–lint选项的动态控制 : ``awk 'BEGIN {LINT = 1; a}'  # awk: cmd. line:1: warning: reference to uninitialized variable `a' \n awk: cmd. line:1: warning: statement has no effect``
            7. PROCINFO 包含进程信息的关联数组，例如UID，进程ID等 : ``PS> awk 'BEGIN { print PROCINFO[\"pid\"] }'``
            8. TEXTDOMAIN 代表了AWK的文本域，用于查找字符串的本地化翻译。
    4. 知识3
        1. 操作符
            1. 算数操作符: +-*/%
                ```
                awk 'BEGIN { a = 50; b = 20; print \"(a + b) = \", (a + b) }'  # a + b = 70
                awk 'BEGIN { a = 50; b = 20; print \"(a - b) = \", (a - b) }'  # a - b = 30
                awk 'BEGIN { a = 50; b = 20; print \"(a * b) = \", (a * b) }'  # a * b = 1000
                awk 'BEGIN { a = 50; b = 20; print \"(a / b) = \", (a / b) }'  # a / b = 2.5
                awk 'BEGIN { a = 50; b = 20; print \"(a % b) = \", (a % b) }'  # a % b = 10
                ```
            2. 增减运算符: ++ --
                ```
                awk 'BEGIN { a = 10; b = a++; printf \"a = %d, b = %d\n\", a, b }'  # a = 11, b = 10
                awk 'BEGIN { a = 10; b = a--; printf \"a = %d, b = %d\n\", a, b }'  # a = 9, b = 10
                awk 'BEGIN { a = 10; b = ++a; printf \"a = %d, b = %d\n\", a, b }'  # a = 11, b = 11
                awk 'BEGIN { a = 10; b = --a; printf \"a = %d, b = %d\n\", a, b }'  # a = 9, b = 9
                ```
            3. 赋值操作符: = += -= *= /= %= ^= **=
                ```
                awk 'BEGIN { name = \"Jerry\"; print \"My name is\", name }'
                awk 'BEGIN { a = 50; printf \"a = %d\", a; a += 20; print \"; a += 20; a =\", a; }'
                awk 'BEGIN { a = 50; printf \"a = %d\", a; a -= 20; print \"; a -= 20; a =\", a; }'
                awk 'BEGIN { a = 50; printf \"a = %d\", a; a *= 20; print \"; a *= 20; a =\", a; }'
                awk 'BEGIN { a = 50; printf \"a = %d\", a; a /= 20; print \"; a /= 20; a =\", a; }'
                awk 'BEGIN { a = 50; printf \"a = %d\", a; a %= 20; print \"; a %= 20; a =\", a; }'
                awk 'BEGIN { a = 5; printf \"a = %d\", a; a ^= 4; print \"; a ^= 4; a =\", a; }'
                awk 'BEGIN { a = 5; printf \"a = %d\", a; a **= 4; print \"; a **= 4; a =\", a; }'
                ```
            4. 关系操作符: == != <= >= < >
            5. 逻辑操作符: && || !
            6. 三元操作符: ? : ``awk 'BEGIN { a = 10; b = 5; (a > b) ? max = a : max = b; printf \"Max between a(%d) and b(%d) is %d\n\", a, b, max }'``
            7. 一元操作符: - + ``awk 'BEGIN { a = -10; b = -10; a = +a; b = -b; printf \"a = %d; b = %d\n\", a, b }'``
            8. 指数操作符: ^ **
            9. 字符串连接操作符: str3 = str1 str2;
            10. 数组成员操作符: ``awk 'BEGIN { arr[0] = 1; arr[1] = 2; arr[2] = 3; for (i in arr) printf \"arr[%d] = %d\n\", i, arr[i] }'``
            11. 正则表达式操作符: 使用 ~ 和 !~ 分别代表匹配和不匹配 ``awk '$0 ~ 9' marks.txt`` 匹配正则表达式需要在表达式前后添加反斜线，与js类似吧
        2. 正则表达式
            ```
            $ echo -e "cat\nbat\nfun\nfin\nfan" | awk '/f.n/'
            fun
            fin
            fan
            $ echo -e "This\nThat\nThere\nTheir\nthese" | awk '/^The/'
            There
            Their
            $ echo -e "knife\nknow\nfun\nfin\nfan\nnine" | awk '/n$/'
            fun
            fin
            fan
            $ echo -e "Call\nTall\nBall" | awk '/[CT]all/'
            Call
            Tall
            $ echo -e "Call\nTall\nBall" | awk '/[^CT]all/'
            Ball
            $ echo -e "Call\nTall\nBall\nSmall\nShall" | awk '/Call|Ball/'
            Call
            Ball
            $ echo -e "Colour\nColor" | awk '/Colou?r/'
            Colour
            Color
            $ echo -e "ca\ncat\ncatt" | awk '/cat*/'
            ca
            cat
            catt
            $ echo -e "111\n22\n123\n234\n456\n222"  | awk '/2+/'
            22
            123
            234
            222
            $ echo -e "Apple Juice\nApple Pie\nApple Tart\nApple Cake" | awk '/Apple (Juice|Cake)/'
            Apple Juice
            Apple Cake
            ```
        3. 数组
            1. AWK支持关联数组，也就是说，不仅可以使用数字索引的数组，还可以使用字符串作为索引，而且数字索引也不要求是连续的。数组不需要声明可以直接使用，语法如下： ``array[index] = value;``
            2. 创建数组的方式非常简单，直接为变量赋值即可 ``awk 'BEGIN { dict[\"red\"] = 0; dict[\"green\"] = 1; dict[\"blue\"] = 2; print \"dict["red"] =\", dict[\"red\"] }'``
            3. 删除数组元素使用delete语句: delete dict["red"]
            4. 在AWK中，只支持一维数组，但是可以通过一维数组模拟多维，例如
                ```
                awk 'BEGIN {
                    array["0,0"] = 100;
                    array["0,1"] = 200;
                    array["0,2"] = 300;
                    array["1,0"] = 400;
                    array["1,1"] = 500;
                    array["1,2"] = 600;
                    # print array elements
                    print "array[0,0] = " array["0,0"];
                    print "array[0,1] = " array["0,1"];
                    print "array[0,2] = " array["0,2"];
                    print "array[1,0] = " array["1,0"];
                    print "array[1,1] = " array["1,1"];
                    print "array[1,2] = " array["1,2"];
                }'
                ```
        4. 流程控制
            1. if (condition) statement;
            2. if (condition) { statements }
            3. if (condition) { statements } else if (condition) { statements } else { statements }
        5. 循环
            1. for (initialisation; condition; increment/decrement) { actions }
            2. while (condition) { actions }
            3. do { actions } while (condition)
            4. break
            5. continue
            6. exit(退出程序，直接执行END)
            7. for (var in arr) { actions }
    5. 函数 https://www.gnu.org/software/gawk/manual/gawk.html#Built_002din
        1. 数学函数
            1. atan2(y, x) cos(expr) sin(expr) tan(expr) ...
            2. exp(expr) log(expr)
            3. int(expr)
            4. rand() srand([expr])
            5. sqrt(expr)
        2. 字符串函数 https://blog.csdn.net/u010632125/article/details/79661809
            0. index(str, sub) length(str) sub(regex, sub, string) substr(str, start, length) match(str, regex) tolower(str) toupper(str)
            1. blength(str)  以字节为单位，而 length 以字符为单位。
            2. gsub(regex, sub, string)  除了正则表达式所有具体值被替代这点，它和 sub 函数完全一样地执行。 而 sub 只替换第一个值。
            3. split(str, arr, regex)  将 String 参数指定的参数分割为数组元素 A[1], A[2], . . ., A[n]，并返回 n 变量的值。此分隔可以通过 Ere 参数指定的扩展正则表达式进行，或用当前字段分隔符（FS 特殊变量）。
            4. sprintf(format, expr-list)  根据 Format 参数指定的 printf 子例程格式字符串来格式化 Expr 参数指定的表达式并返回最后生成的字符串。 
                ```cpp
                %d 十进制有符号整数 | %f 浮点数 | %s 字符串 | %c 单个字符
                %u 十进制无符号整数
                %X 无符号十六进制整数
                %o 无符号八进制整数
                %e 指数形式的浮点数
                %p 指针的值
                %g 自动选择合适的表示法
                ```
            5. asort(arr [, d [, how] ])  对数组进行排序
            6. asorti(arr [, d [, how] ])
            9. strtonum(str)
        3. 时间函数
            1. systime
            2. mktime(datespec)
            3. strftime([format [, timestamp[, utc-flag]]])
                ```cpp
                %a	星期几的缩写(Sun)
				%A	星期几的完整写法(Sunday)
				%b	月名的缩写(Oct)
				%B	月名的完整写法(October)
				%c	本地日期和时间(Sun Aug 19 02:56:02 2012)
				%d	十进制日期(0-31)
				%D	日期 08/20/99
				%e	日期，如果只有一位会补上一个空格 ??
				%H	用十进制表示24小时格式的小时(00-23)
				%I	用十进制表示12小时格式的小时(01-12)
				%j	从1月1日起一年中的第几天(001-366)
				%m	十进制表示的月份(01-12)
				%M	十进制表示的分钟(00-59)
				%p	12小时表示法(AM/PM)
				%S	十进制表示的秒(00-59)
				%U	十进制表示的一年中的第几个星期(星期天作为一个星期的开始)(00-53)
				%w	十进制表示的星期几(星期天是0)
				%W	十进制表示的一年中的第几个星期(星期一作为一个星期的开始)(00-53)
				%x	重新设置本地日期(08/20/99)
				%X	重新设置本地时间(12：00：00)
				%y	两位数字表示的年(99)
				%Y	当前年份(1999)
				%Z	时区(PDT)
				%%	百分号(%)
                ```
        4. 字节操作函数
            1. and or xor
            2. compl lshift rshift
        5. others
            1. close(expr) 关闭管道
                ```
                awk 'BEGIN {
                    cmd = "tr [a-z] [A-Z]"  # 要进行的转换
                    print "hello, world !!!" |& cmd  # 使用 |& 建立双向连接
                    close(cmd, "to")  # 表明执行完后关闭to进程
                    cmd |& getline out  # 使用getline函数存储输出到out变量
                    print out; close(cmd);  # 接下来打印变量out的内容，然后关闭cmd
                }'
                HELLO, WORLD !!!
                ```
                ``awk 'BEGIN { cmd = \"tr [a-z] [A-Z]\"; print \"hello, world !!!\" |& cmd; close(cmd, \"to\"); cmd |& getline out; print out; close(cmd); }'``
                ``awk 'BEGIN { cmd = "tr [a-z] [A-Z]"; print "hello, world !!!" |& cmd; close(cmd, "to"); cmd |& getline out; print out; close(cmd); }'``
            2. print
            3. printf
            4. getline
                1. 该命令让awk读取下一行内容 ``awk '{getline; print $0}' marks.txt``
                2. 使用getline var 可以从file中读取输入，存储到变量var中
                    ```
                    {
                        if (NF == 2 && $1 == "@include") {
                            while ((getline line  0)
                                print line
                            # 这里的close确保如果文件中两个@include，可以让其读取两次
                            close($2)
                        } else
                            print
                    }
                    ```
                3. 命令的输出也可以通过管道输入到getline，使用command | getline这种方式。在这种情况下，字符串命令会作为shell命令执行，其标准输出会通过管道传递个awk作为其输入，这种形式的getline会从管道中一次读取一条记录。例如下面的命令会从输入中逐行读取，如果遇到@execute，则将该行作为命令执行，将命令的输出作为最终的输出内容
                    ```
                    {
                        if ($1 == "@execute") {
                            tmp = substr($0, 10)        # Remove "@execute"
                            while ((tmp | getline) > 0)
                                # 这里实际上设置了$0为这一行的内容
                                print
                            close(tmp)
                        } else
                            print
                    }
                    ```
                4. 使用command | getline var可以实现将命令的输出写入到变量var。 ``awk 'BEGIN{"date" | getline current_time; close("date"); print "Report printed on " current_time}'`` ``awk 'BEGIN{\"date\" | getline current_time; close(\"date\"); print \"Report printed on \" current_time}'``
                5. getline使用管道读取输入是一种单向的操作，在某些场景下，你可能希望发送数据到另一个进程，然后从这个进程中读取处理后的结果， 这就用到了协同进程，我们可以使用|&打开一个双向管道。 ``print "some query" |& "db_server"; "db_server" |& getline``
                6. 同样，我们也可以使用command |& getline var将协同进程的输出写入到变量var。
            5. delete variable
            6. exit
            7. fflush ???
            8. next  能够导致读入下一个输入行，并返回到脚本的顶部。这可以避免对当前输入行执行其他的操作过程。
            9. nextfile
            10. return用于用户自定义函数的返回值 ``awk 'function addition(num1, num2) { return num1 + num2; } BEGIN {print \"10 + 20 =\", addition(10, 20)}'``
            11. system该函数用于执行指定的命令并且返回它的退出状态，返回状态码0表示命令成功执行。 ``awk 'BEGIN { ret = system(\"date\"); print \"Return value = \" ret }'``
        6. 自定义 function (arg1, arg2) { statements; return ...; }
            1. 如果想要使得函数对变量的修改不改变原变量的值，那么需要通过参数传递的方式来实现
            2. 函数中定义的变量默认也是全局的，如果想要使其作为局部变量，可以使用在参数中定义，但调用时不传入该参数的方式（shell函数中可以使用local关键字来定义局部变量）；
            3. 函数返回值使用 ret = FuncName(arg1, arg2, arg3, ...)；
            4. 函数的参数如果是标量则是传值，数组则是传引用，函数中改变数组的值可以改变全局数组中的值。
    6. 知识5
        1. 输出重定向: 到目前为止，我们所有的程序都是直接显示数据到了标准输出流，其实，我们也可以将输出重定向到文件。重定向操作符跟在print和printf函数的后面，与shell中的用法基本一致。 print/printf "DATA" >/>> "file"
        2. 管道: 除了将输出重定向到文件之外，我们还可以将输出重定向到其它程序，与shell中一样，我们可以使用管道操作符|。AWK中可以使用|&进行双向连接，那么什么是双向连接呢？一种常见的场景是我们发送数据到另一个程序处理，然后读取处理结果，这种场景下就需要打开一个到另外一个进程的双向管道了。第二个进程会与gawk程序并行执行，这里称其为协作进程。与单向连接使用|操作符不同的是，双向连接使用|&操作符。
            1. ``awk 'BEGIN { print \"hello, world !!!\" | \"tr [a-z] [A-Z]\" }'``
            2. ``awk '{do { print data |& \"subprogram\"; \"subprogram\" |& getline results; } while (data left ot process); close(\"subprogram\")}'``
            3. 注意：目前协同进程的标准错误输出将会和gawk的标准错误输出混杂在一起，无法单独获取标准错误输出。另外，I/O缓冲可能存在问题，gawk程序会自动的刷新所有输出到下游的协同进程的管道。但是，如果协同进程没有刷新其标准输出的话，gawk将可能会在使用getline函数从协同进程读取输出的时候挂起，这就可能引起死锁。
            4. 我们可以使用close函数关闭双向管道的to或者from一端，这两个字符串值告诉gawk发送数据到协同进程完成时或者从协同进程读取完毕时关闭管道。在使用系统命令sort的时候是这样做是非常必要的，因为它必须等所有输出都读取完毕时才能进行排序。
                ```
                BEGIN {
                    command = "LC_ALL=C sort"
                    n = split("abcdefghijklmnopqrstuvwxyz", a, "")
                    for (i = n; i > 0; i--)
                        print a[i] |& command
                    close(command, "to")
                    while ((command |& getline line) > 0)
                        print "got", line
                    close(command)
                }
                ```
        3. 美化输出: printf与C语言的差不多，非常强大。
        4. 执行shell指令: 在AWK中执行shell命令有两种方式
            1. 使用system函数: ``awk 'BEGIN { system(\"date\") }'``
            2. 使用管道: ``awk '{print command | \"/bin/sh\"} END{close(\"/bin/sh\")}' my.sh``
    7. 知识6
        1. 一些例子
            ```powershell
            awk '{ sub(/([1-9])/, \"Block Number \\1\");print}' books.txt
            echo2 "123abc" | awk '{a = gensub(/([0-9]+)(.+)/, \"\\1\", 1, $0); print a}'
            echo "123abc" | awk '{a = gensub(/([0-9]+)(.+)/, "\\1", 1, $0); print a}'
            ```
        2. 正则
            1. +表示至少一个
            2. ?表示0个或1个
            3. *表示0或多个
            4. |表示或者
            5. (aaa)组合表示连着
            6. {3}有三个前面的字符，{3,5}3到5个，{3,}表示至少3个
            7. [a-h\],[1-9\]表示1个a到h或者1到9中的字符，[^String\]表示不匹配String
            8. ^ 表示开头  $表示结尾
            9. ～匹配上
            10. .一个字符
            11. \转义
            12. [[:digit\:\]\] 表示数字
            13. 被替代的字符串中使用 & 表示被匹配的文本
6. 三剑客之二: sed(stream editor) : 更适合编辑匹配到的文本
    1. link
        * [三十分钟学会SED](http://blog.jobbole.com/109088/)
        * [Linux三大剑客之sed](https://blog.csdn.net/solaraceboy/article/details/79272344)
        * [shell脚本--sed的用法](https://blog.csdn.net/wdz306ling/article/details/80087889)
        * [sed官方](https://www.gnu.org/software/sed/manual/sed.html)
        * [Sed Tutorial](http://www.tutorialspoint.com/sed/index.htm)
        * [Linux命令行与shell脚本编程大全（第3版）](http://www.ituring.com.cn/book/1698)
    2. 知识1
        1. 简介: SED的英文全称是 Stream EDitor，它是一个简单而强大的文本解析转换工具，在1973-1974年期间由贝尔实验室的Lee E. McMahon开发，今天，它已经运行在所有的主流操作系统上了。
        2. 用途
            1. 文本替换
            2. 选择性的输出文本文件
            3. 从文本文件的某处开始编辑
            4. 无交互式的对文本文件进行编辑等
        3. 工作流。在本章中，我们将会探索SED是如何工作的，要想成为一个SED专家，你需要知道它的内部实现。SED遵循简单的工作流：读取，执行和显示。
            1. 读取： SED从输入流（文件，管道或者标准输入）中读取一行并且存储到它叫做 模式空间（pattern buffer） 的内部缓冲区
            2. 执行： 默认情况下，所有的SED命令都在模式空间中顺序的执行，除非指定了行的地址，否则SED命令将会在所有的行上依次执行
            3. 显示： 发送修改后的内容到输出流。在发送数据之后，模式空间将会被清空。
            4. 在文件所有的内容都被处理完成之前，上述过程将会重复执行
        4. 需要注意的几点
            1. 模式空间 （pattern buffer） 是一块活跃的缓冲区，在sed编辑器执行命令时它会保存待检查的文本
            2. 默认情况下，所有的SED命令都是在模式空间中执行，因此输入文件并不会发生改变
            3. 还有另外一个缓冲区叫做 保持空间 （hold buffer），在处理模式空间中的某些行时，可以用保持空间来临时保存一些行。在每一个循环结束的时候，SED将会移除模式空间中的内容，但是该缓冲区中的内容在所有的循环过程中是持久存储的。SED命令无法直接在该缓冲区中执行，因此SED允许数据在 保持空间 和 模式空间之间切换
            4. 初始情况下，保持空间 和 模式空间 这两个缓冲区都是空的
            5. 如果没有提供输入文件的话，SED将会从标准输入接收请求
            6. 如果没有提供地址范围的话，默认情况下SED将会对所有的行进行操作
        5. 示例
            1. ``sed '' quote.txt`` sed将会读取quote.txt文件中的一行内容存储到它的模式空间中，然后会在该缓冲区中执行SED命令。在这里，没有提供SED命令，因此对该缓冲区没有要执行的操作，最后它会删除模式空间中的内容并且打印该内容到标准输出。
            2. ``sed ''`` 这里sed会从键盘获取输入，然后直接输出。
    3. 知识2
        1. 启动方式
            1. ``sed [-n] [-e] 'command(s)' files``
            2. ``sed [-n] -f scriptfile files``
            3. ``sed [-n] [-e] 'command(s)' -f scripfile files``
        2. 多个sed命令的例子。sed提供了delete命令用于删除某些行，这里让我们删除第一行，第二行和第五行。books.txt共有6行。``sed -e '1d' -e '2d' -e '5d' books.txt`` 或者使用文件中的 ``echo2 -e "1d\n2d\n5d" > commands.txt; cat2 commands.txt;  # 在powershell下好像有问题，需要在shell下，之后`` ``sed -f .\mycommands.txt .\books.txt``
        3. 标准选项
            1. -n 默认情况下，模式空间中的内容在处理完成后将会打印到标准输出，该选项用于阻止该行为
            2. -e 指定要执行的命令，使用该参数，我们可以指定多个命令，让我们打印每一行两次 ``sed --expression='' --expression='p' quote.txt``
            3. -f 指定包含要执行的命令的脚本文件
        4. GNU选项
            * -n， -quiet, -slient：与标准的-n选项相同
			* -e script，-expression=script：与标准的-e选项相同
			* -f script-file， -file=script-file：与标准的-f选项相同
			* -follow-symlinks：如果提供该选项的话，在编辑的文件是符号链接时，SED将会跟随链接
			* -i[SUFFIX]，-in-place[=SUFFIX]：该选项用于对当前文件进行编辑，如果提供了SUFFIX的话，将会备份原始文件，否则将会覆盖原始文件
			* -l N， -line-lenght=N：该选项用于设置行的长度为N个字符
			* -posix：该选项禁用所有的GNU扩展
			* -r，-regexp-extended：该选项将启用扩展的正则表达式
			* -u， -unbuffered：指定该选项的时候，SED将会从输入文件中加载最少的数据，并且更加频繁的刷出到输出缓冲区。在编辑tail -f命令的输出，你不希望等待输出的时候该选项是非常有用的。
			* -z，-null-data：默认情况下，SED对每一行使用换行符分割，如果提供了该选项的话，它将使用NULL字符分割行
        5. 循环: SED中的循环有点类似于goto语句，可以使用 :label 这样的语法创建标签，要跳转到指定的标签，使用 b 命令后面跟着标签名，如果忽略标签名的话，SED将会跳转到SED文件的结尾。``sed -n 'h;n;H;x;s/\n/, /;/Paulo/!b Print;s/^/- /;:Print;p' books2.txt``
            ```powershell
            ➜ sed -n '
            >> h;n;H;x
            >> s/\n/, /
            >> /Paulo/!b Print
            >> s/^/- /
            >> :Print
            >> p' books2.txt
            A Storm of Swords , George R. R. Martin
            The Two Towers , J. R. R. Tolkien
            - The Alchemist , Paulo Coelho
            The Fellowship of the Ring , J. R. R. Tolkien
            - The Pilgrimage , Paulo Coelho
            A Game of Thrones , George R. R. Martin
            # 第一个h是指将当前模式空间中的内容覆盖到 保持空间中，n用于提前读取下一行，并且覆盖当前模式空间中的这一行，H将当前模式空间中的内容追加到 保持空间 中，最后的x用于交换模式空间和保持空间中的内容。因此这里就是指每次读取两行放到模式空间中交给下面的命令进行处理
            # 接下来是 s/\n/, / 用于将上面的两行内容中的换行符替换为逗号
            # 第三个命令在不匹配的时候跳转到Print标签，否则继续执行第四个命令
            # :Print仅仅是一个标签名，而p则是print命令
            # 或者将所有命令放到一行中 sed -n 'h;n;H;x;s/\n/, /;/Paulo/!b Print;s/^/- /;:Print;p' books2.txt
            ```
        6. 分支: 使用 t 命令创建分支。只有当前置条件成功的时候，t 命令才会跳转到该标签。t命令只有在前一个替换（s）命令执行成功的时候才会执行。``sed -n 'h;n;H;x;s/\n/, /;:Loop;/Paulo/s/^/-/;/----/!t Loop;s/^----/---- /;p' books2.txt``
    4. 知识3
        1. 模式空间和保持空间
            1. 模式空间: 默认情况下，SED将会输出模式空间中的内容，sed提供了-n参数用于禁止自动输出模式空间的每一行的行为。
            2. 行寻址: 默认情况下，在SED中使用的命令会作用于文本数据的所有行。如果只想将命令作用于特定的行或者某些行，则需要使用行寻址功能。在SED中包含两种形式的行寻址：以数字形式表示的行区间；以文本模式来过滤行。两种形式都使用相同的语法格式``[address]command``。
                1. 数字方式的行寻址 ``sed -n '3p' books.txt  # 只输出第三行了`` 或者 ``sed -n '3,5p' books.txt  # 输出了第三行到第五行`` 。特殊字符$代表了文件的最后一行，输出文件的最后一行 ``sed -n '3,$p' books.txt`` 。SED还提供了另外两种操作符用于指定地址范围，第一个是加号（+）操作符，它可以与逗号（,）操作符一起使用，例如 M, +n 将会打印出从第M行开始的下n行。我们还可以使用波浪线操作符（~）指定地址范围，它使用M~N的形式，它告诉SED应该处理M行开始的每N行。例如，50~5匹配行号50，55，60，65等。
                2. 文本方式的行寻址 ``sed -n '/Pau/p' books.txt`` 。模式匹配也可以与数字形式的寻址同时使用，在下面的示例会从第一次匹配到Alchemist开始输出，直到第5行为止 ``sed -n '/Alchemist/,5p' books.txt`` 。在使用文本模式过滤器的时候，与数字方式的行寻址类似，可以使用加号操作符 +，它会输出从当前匹配位置开始的某几行。但（~）会失效。
            3. 保持空间: 在处理模式空间中的某些行时，可以用保持空间来临时保存一些行。有5条命令可用来操作保持空间。
                1. h	将模式空间复制到保持空间
                2. H	将模式空间附加到保持空间
                3. g	将保持空间复制到模式空间
                4. G	将保持空间附加到模式空间
                5. x	交换模式空间和保持空间的内容
        2. 基本命令
            1. 删除命令 d : ``[address1[,address2]]d`` 。注意的是，该命令只会移除模式空间中的行，这样该行就不会被发送到输出流，但原始内容不会改变。SED的地址范围并不仅仅限于数字，我们也可以指定模式匹配作为地址。
            2. 文件写入命令 w : ``[address1[,address2]]w file`` 。使用file操作符的时候要小心，当提供了文件名但是文件不存在的时候它会自动创建，如果已经存在的话则会覆盖原文件的内容。在w和file之间只能有一个空格。假设你希望存储所有独立作者的书到单独的文件。如果你希望备份文件(当然cp也可以做到)。
            3. 追加命令 a : ``[address]a Append Text``
            4. 行替换命令 c : SED通过 c 提供了 change 和 replace 命令，该命令帮助我们使用新文本替换已经存在的行，当提供行的地址范围时，所有的行都被作为一组被替换为单行文本，下面是该命令的语法 ``[address1[address2]]c Replace Text``
            5. 插入命令 i : ``[address]i Insert Text`` 类似于追加命令，但是在匹配的位置前插入新的一行。
            6. 转换命令 y : ``[address]y/inchars/outchars/`` 是唯一可以处理单个字符的sed编辑器命令。转换命令会对inchars和outchars值进行一对一的映射。inchars中的第一个字符会被转换为outchars中的第一个字符，第二个字符会被转换成outchars中的第二个字符。这个映射过程会一直持续到处理完指定字符。如果inchars和outchars的长度不同，则sed编辑器会产生一条错误消息。 ``echo2 "1 5 15 20" | sed 'y/151520/IVXVXX/'  # X V XV XX``
            7. 输出隐藏字符命令 l : 你能通过直接观察区分出单词是通过空格还是tab进行分隔的吗？显然是不能的，但是SED可以为你做到这点。使用l命令（英文字母L的小写）可以显示文本中的隐藏字符（例如\t或者$字符） 。 ``[address1[address2]]l`` ``[address1[address2]]l [len]`` ``sed -n 's/ /\t/g;l' .\books.txt`` 。 使用l命令的时候，一个很有趣的特性是我们可以使用它来实现文本按照指定的宽度换行。 ``sed -n 'l 25' books.txt`` 。l命令是GNU-SED的一部分，其它的一些变体中可能无法使用该命令。
                ```powershell
                [address1[,address2]]l 
                [address1[,address2]]l [len]
                # sed -n 's/ /\t/g;l' .\books.txt
                ```
            8. 退出命令 q : ``[address]q [value]`` 。需要注意的是，q命令不支持地址范围，只支持单个地址匹配。默认情况下SED会按照读取、执行、重复的工作流执行，但当它遇到q命令的时候，它会退出当前的执行流。q命令也支持提供一个value，这个value将作为程序的返回代码返回。
            9. 文件读取命令 r : ``[address]r file`` r命令和文件名之间必须只有一个空格。r命令也支持地址范围，例如3,5r junk.txt会在第三行，第四行，第五行后面分别插入junk.txt的内容。
            10. 执行外部命令 e : ``[address1[,address2]]e [command]`` 会在address1~address2间插入command执行的结果。
            11. 排除命令 ! : 让原本会起作用的命令不起作用。 ``sed -n '/Paulo/p' books.txt`` ``sed -n '/Paulo/!p' books.txt`` ``sed -n '1!G;h;$p' books.txt``
                ```powershell
                # 1!G 这句的意思是出了第一行之外，处理每一行的时候都将保持空间中的内容追加到模式空间（正序->倒序）
                # h 将模式空间中的内容复制到保持空间以备下一行匹配的时候追加到下一行的后面
                # $p 如果匹配到最后一行的话则输出模式空间中的内容
                # 上述步骤不断重复直到文本结束刚好将文件内容翻转了一次
                ```
        3. 多行命令
            1. N：将数据流中的下一行加进来创建一个多行组来处理 : ``[address1[,address2]]N``
            2. D：删除多行组中的一行 : 只删除模式空间中的第一行。该命令会删除到换行符（含 换行符）为止的所有字符。``echo2 -e '\nThis is the header line.\nThis is a data line.\nThis is the last line.' | sed '/^$/{N;/header/D}'``
            3. P：打印多行组中的一行 : ``[address1[,address2]]P`` 。例如下面的命令只输出了图书的标题 ``sed -n 'N;P' books2.txt``
        4. 其他指令
            1. n – 单行next : 小写的n命令会告诉sed编辑器移动到数据流中的下一文本行，并且覆盖当前模式空间中的行。
            2. v – SED版本检查 : ``[address1[,address2]]v [version]`` v命令用于检查SED的版本，如果版本大于参数中的版本则正常执行，否则失败。
        5. 特殊字符
            1. 在SED中提供了两个可以用作命令的特殊字符：= 和 & 。
            2. =命令 : 用于输出行号，语法格式为 ``[/pattern/]=`` ``[address1[,address2]]=`` 注意行号也是有换行符的。
                ```powershell
                sed '=' books2.txt
                sed -n '$=' books2.txt # 最后一行输出行号，这个命令比较有意思了，可以用于输出文件总共有多少行
                ```
            3. &命令 : 用于存储匹配模式的内容，通常与替换命令s一起使用。 ``sed 's/[[:digit:]]/Book number &/' books.txt`` 匹配每一行第一个数字，在其前面添加 Book number 。而下面这个命令则匹配最后一个数字，并修改为Pages =。其中``[[:digit:]]* *$``可能比较费解，这一部分其实是：匹配0个或多个数字+0个或多个空格+行尾。
    5. 知识4
        1. 字符串
            1. 替换命令 s : ``[address1[,address2]]s/pattern/replacement/[flags]``
                1. 数字n: 只替换第n次匹配，比如sed ‘s/,/ | /2’ books.txt，只替换每行中第二个逗号
                2. p：只输出改变的行，比如sed -n ‘s/Paulo Coelho/PAULO COELHO/p’ books.txt
                3. w：存储改变的行到文件，比如sed -n ‘s/Paulo Coelho/PAULO COELHO/w junk.txt’ books.txt
                4. i：匹配时忽略大小写
                5. g：全局匹配
                6. 在SED中还可以使用|，@，^，!作为命令的分隔符，即|可以替换/
            2. 匹配子字符串: 在SED中，使用\(?\)对匹配的内容进行分组，使用\N的方式进行引用。请看下面示例 ``echo "Three One Two" | sed 's|\(\w\+\) \(\w\+\) \(\w\+\)|\2 \3 \1|'``
        2. **管理模式**
        3. 正则表达式
            1. ^ $ . [] [^] [-] \? \\+ \\* {n} {n,} {n,m} |
            2. POSIX兼容的正则: 主要包含[:alnum:\]，[:alpha:\]，[:blank:\]，[:digit:\]，[:lower:\]，[:upper:\]，[:punct:\]，[:space:\]，这些基本都见名之意，不在赘述。
            3. 元字符: \s \S \d \D \w \W(非单词)
        4. 常用代码段
            1. 模拟cat: ``sed --expression='' books.txt`` ``sed -n 'p' books.txt``
            2. 模拟tac: ``sed -n '1!G;h;$p' books.txt``
            3. 移除空行: ``echo2 -e "Line #1\n\n\nLine #2" | sed '/^$/d'``
            4. 删除连续空行: ``echo2 -e "Line #1\n\n\nLine #2" | sed '/./,/^$/!d'  # 意思是从开始/./匹配到/^$/。区间的开始会匹配至少包含一个字符的行，结束会匹配一个空行，在这个区间中的行不会被删除。``
            5. 删除开头的空行: ``echo2 -e "\nLine #1\n\nLine #2" | sed '/./,$!d'``
            6. 删除结尾的空行: ``echo -e "\nLine #1\nLine #2\n\n" | sed ':start /^\n*$/{$d; N; b start }'``
            7. 过滤所有的html标签: ``sed 's/]*>//g ; /^$/d' books.txt``
            8. 从C++程序中移除注释: ``sed 's|//.*||g;/^( |\t)+$/d' hello.cpp``
            9. 为某些行添加注释: ``sed '3,5 s/^/#/' hello.sh``
            10. 实现Wc -l命令(统计行数): ``sed -n '$=' books.txt``
            11. 模拟实现head命令(输出前10行): ``sed '10q' books.txt``
            12. 模拟tail -1命令(输出最后一行): ``sed $ sed -n '$p' test.txt``
            13. 模拟Dos2unix命令(在DOS环境中，换行符是使用CR/LF两个字符一起表示的，下面命令模拟了dos2unix命令转换这些换行符为UNIX换行符)(在GNU/Linux环境中，CR/LF通常使用”^M”（不是简单的两个符号组合，请使用快捷键Ctrl+v,Ctrl+m输入）进行表示):
                ```
                echo2 -e "Line #1\r\nLine #2\r" > test.txt
                file test.txt
                sed 's/^M$//' test.txt > new.txt
                file new.txt
                cat -vte new.txt
                ```
            14. 模拟Unix2dos命令: ``sed 's/$/\r/' new.txt > new2.txt``
            15. 模拟cat -E命令(在每一行的行尾输出一个$符号): ``echo -e "Line #1\nLine #2" | sed 's|$|&$|'``
            16. 模拟cat -ET命令(cat -ET命令不仅对每一行的行尾添加$，还会将每一行中的TAB显示为I): ``echo -e "Line #1\tLine #2" | sed -n 'l' | sed 'y/\\t/^I/'``
            17. 模拟nl命令(可以为输入内容的每一行添加行号): ``echo -e "Line #1\nLine #2" | sed = |  sed 'N;s/\n/\t/'``
            18. 模拟cp命令(拷贝文件): ``sed -n 'w dup.txt' data.txt``
            19. 模拟expand命令(转换输入中的TAB为空格): ``sed 's/\t/    /g' test.txt``
            20. 模拟tee命令(将数据输出到标准输出的同时写入文件): ``echo -e "Line #1\nLine #2" | tee test.txt`` ``sed -n 'p; w new.txt' test.txt``
            21. 模拟cat -s命令(将输入文件中的多行空格合并为一行): ``echo -e "Line #1\n\n\n\nLine #2\n\n\nLine #3" | cat -s`` ````
    6. 知识5
    7. 知识6
7. 三剑客之三: grep(globally search given regular expression and print) : 更适合单纯的查找或匹配文本
    1. link
        * [Linux三剑客之grep](https://blog.csdn.net/solaraceboy/article/details/79242650)
        * [grep官方](https://www.gnu.org/software/grep/manual/grep.html)
    2. 知识1
    3. 知识2
    4. 知识3
5. 

## Nginx学习

https://www.runoob.com/linux/nginx-install-setup.html

## makefile学习

0. link
    * [make官方](https://www.gnu.org/software/make/manual/make.html)
    * [跟我一起学Makefile](https://blog.csdn.net/haoel/article/details/2886)
    * []()
1. 例子
    1. 新建文件夹test，使用 touch max.h max.c main.c Makefile新建四个文件，其中Makefile如下
        ```makefile
        mainDependent = main.o max.o  # 变量
        main.exe    : $(mainDependent)  # 要生成的main.exe文件的依赖文件，这些依赖文件也可以有依赖文件，使用make就能通过目标文件追踪依赖文件并最终通过依赖文件生成目标文件
            gcc -o main.exe $(mainDependent)  # 如何生成main.exe
        main.o      : main.c max.h
            gcc -c main.c
        max.o       : max.c max.h
            gcc -c max.c
        clean       :  # 相当于一个指令，后面没有依赖文件，在下面是真正执行的指令，在执行时使用make clean
            rm main.exe $(mainDependent)
        ```
    2. max.h
        ```c
        int max(int a, int b);
        ```
    3. max.c
        ```c
        #include "max.h"
        int max(int a, int b) {
            return a < b ? a : b;
        }
        ```
    4. main.c
        ```c
        #include <stdio.h>
        #include <stdlib.h>
        #include "max.h"
        int main(int argc, char const *argv[]) {
            printf("Hello World: the bigger one between 3 and 5 is %d.\n", max(3, 5));
        }
        ```
    5. 现在在命令行中执行make指令，会生成max.o和main.o以及main.exe，而执行make clean会清除生成的文件。修改部分文件再次执行make指令后会只执行与修改文件相关部分的指令。
    6. 简化。因为makefile中main.o与main.c是自动关联的，而cc -c main.o在关联时也是自动执行的，所以我们只要将gcc.exe复制出一份重命名为cc.exe就可以自动执行了。(cc是linux中gcc的别名，是为了和unix中收费的cc兼容而弄出来的，但我们这里是windows环境，所以就复制并重命名一份cc.exe并保证在PATH环境变量中就行了)。现在Makefile可以简化为
        ```makefile
        mainDependent = main.o max.o
        main.exe    : $(mainDependent)
            gcc -o main.exe $(mainDependent)
        main.o      : max.h
        max.o       : max.h
        clean       :
            rm main.exe $(mainDependent)
        ```
    7. 再完善一下，使用.PHONY: clean将clean指令声明为伪目标，为rm添加-表示即使某些文件出现了问题但不用管。clean的规则不要放在文件的开头，不然，这就会变成 make 的默认目标
        ```makefile
        mainDependent = main.o max.o
        main.exe    : $(mainDependent)
            gcc -o main.exe $(mainDependent)
        main.o      : max.h
        max.o       : max.h
        .PHONY      : clean
        clean       :
            -rm main.exe $(mainDependent)
        ```
2. 基本知识
    1. **文件名**: 默认的情况下，make 命令会在当前目录下按顺序找寻文件名为"GNUmakefile"、"makefile"、"Makefile"的文件，找到了解释这个文件。在这三个文件名中，最好使用"Makefile"这个文件名，因为，这个文件名第一个字符为大写，这样有一种显目的感觉。最好不要用"GNUmakefile"，这个文件是 GNU 的 make 识别的。当然，你可以使用别的文件名来书写  Makefile ，比如："Make.Linux"，"Make.Solaris"，"Make.AIX"等，如果要指定特定的 Makefile，你可以使用 make 的"-f"和"--file"参数，如：**make -f Make.Linux 或 make --file Make.AIX** or **make -f=Make.Linux** or **make --file=Make.Linux**。
    2. **文件引入**: 可以使用 include filename 来引用其他makefile文件，而且这些文件在执行时是会将全部内容直接放入的。举个例子，你有这样几个Makefile：a.mk、b.mk、c.mk，还有一个文件叫 foo.make，以及一个变量$(bar)，其包含了 e.mk 和 f.mk，那么，下面的语句：**include foo.make *.mk $(bar)**等价于：include foo.make a.mk b.mk c.mk e.mk f.mk
    3. **文件位置**: make 命令开始时，会把找寻 include 所指出的其它 Makefile，并把其内容安置在当前的位置。就好像 C/C++的#include 指令一样。如果文件都没有指定绝对路径或是相对路径的话，make 会在当前目录下首先寻找，如果当前目录下没有找到，那么，make 还会在下面的几个目录下找：
        1. 如果 make 执行时，**有"-I"或"--include-dir"**参数，那么 make 就会在这个参数所指定的目录下去寻找。
        2. 如果**目录<prefix\>/include**(一般是：/usr/local/bin 或/usr/include)存在的话，make 也会去找。
        3. 如果有文件没有找到的话，make 会生成一条警告信息，但不会马上出现致命错误。它会继续载入其它的文件，一旦完成 makefile 的读取，make 会再重试这些没有找到，或是不能读取的文件，如果还是不行，make 才会出现一条致命信息。如果你想让 make 不理那些无法读取的文件，而继续执行，你可以在 include 前加一个**减号"-"**。如：-include filename
    4. GNU 的 make 工作时的**执行步骤**入下：(想来其它的 make 也是类似)
        1. 读入所有的 Makefile。
        2. 读入被 include 的其它 Makefile。
        3. 初始化文件中的变量。
        4. 推导隐晦规则，并分析所有规则。
        5. 为所有的目标文件创建依赖关系链。
        6. 根据依赖关系，决定哪些目标要重新生成。
        7. 执行生成命令。
    5. **1-5 步为第一个阶段，6-7 为第二个阶段**。第一个阶段中，如果定义的变量被使用了，那么，make 会把其展开在使用的位置。但 make 并不会完全马上展开，make 使用的是拖延战术，如果变量出现在依赖关系的规则中，那么仅当这条依赖被决定要使用了，变量才会在其内部展开。
3. 书写规则
    1. 规则介绍
        1. 规则包含两个部分，一个是依赖关系，一个是生成目标的方法。在 Makefile 中，规则的顺序是很重要的，因为，Makefile 中只应该有一个**最终目标**，其它的目标都是被这个目标所连带出来的，所以一定要让 make 知道你的最终目标是什么。一般来说，定义在 Makefile 中的目标可能会有很多，但是第一条规则中的目标将被确立为最终的目标。如果第一条规则中的目标有很多个，那么，第一个目标会成为最终的目标。make 所完成的也就是这个目标。
    2. 规则举例
        1. 例子
            ```makefile
            max.o : max.c max.h  # max模块
                cc -c -g max.o
            ```
        2. 文件的依赖关系， max.o 依赖于 max.c 和 max.h 的文件，如果 max.c 和 max.h 的文件日期要比 max.o 文件日期要新，或是 max.o 不存在，那么依赖关系发生。
        3. 如果生成(或更新) max.o 文件。也就是那个 cc 命令，其说明了，如何生成 max.o 这个文件。(当然 max.c 文件 include 了 max.h 文件)
    3. 规则的语法
        1. 语法
            ```makefile
            targets : prerequisites
                command  # 命令必须在前面有 [Tab]
            # or
            targets : prerequisites; command
                command
            ```
        2. 解释
            1. targets 是文件名，以空格分开，可以使用通配符。一般来说，我们的目标基本上是一个文件，但也有可能是多个文件。
            2. command 是命令行，如果其不与"target rerequisites"在一行，那么，必须以[Tab 键]开头，如果和 prerequisites 在一行，那么可以用分号做为分隔。
            3. prerequisites 也就是目标所依赖的文件(或依赖目标)。如果其中的某个文件要比目标文件要新，那么，目标就被认为是"过时的"，被认为是需要重生成的。
            4. 如果命令太长，你可以使用反斜框(‘\’)作为换行符。make 对一行上有多少个字符没有限制。规则告诉 make 两件事，文件的依赖关系和如何成成目标文件。
            5. 一般来说，make 会以 UNIX 的标准 Shell，也就是/bin/sh 来执行命令。
    4. **通配符**
        1. make 支持**三种通配符："*"，"?"和"[...]"**。
        2. **波浪号("~")**字符在文件名中也有比较特殊的用途。如果是"~/test"，这就表示当前用户的$HOME目录下的 test 目录。而"~hchen/test"则表示用户 hchen 的宿主目录下的 test 目录。(这些都是 Unix 下的小知识了，make 也支持)而在 Windows 或是 MS-DOS 下，用户没有宿主目录，那么波浪号所指的目录则根据环境变量"HOME"而定。
        3. 通配符代替了你一系列的文件，如"\*.c"表示所以后缀为 c 的文件。一个需要我们注意的是，如果我们的文件名中有通配符，如："\*"，那么可以用转义字符"\"，如"\\*"来表示真实的"\*"字符，而不是任意长度的字符串。
        4. 通配符用在变量上 ``objects := $(wildcard *.o)  # 如果是直接的将 objects = *.o ，则 objects 真的只是指代 *.o``
    5. **文件搜索**
        1. 在一些大的工程中，有大量的源文件，我们通常的做法是把这许多的源文件分类，并存放在不同的目录中。所以，当 make 需要去找寻文件的依赖关系时，你可以在文件前加上路径，但最好的方法是把一个路径告诉 make，让 make 在自动去找。Makefile 文件中的**特殊变量"VPATH"**就是完成这个功能的，如果没有指明这个变量，make 只会在当前的目录中去找寻依赖文件和目标文件。如果定义了这个变量，那么，make 就会在当当前目录找不到的情况下，到所指定的目录中去找寻文件了。
        2. 语法: ``VPATH = src:../headers`` 定义指定两个目录，"src"和"../headers"，make 会按照这个顺序进行搜索。目录由"冒号"分隔。(当然，当前目录永远是最高优先搜索的地方)
        3. 另一个设置文件搜索路径的方法是使用 make 的"**vpath"关键字**(注意，它是全小写的)，这不是变量，这是一个 make 的关键字，这和上面提到的那个 VPATH 变量很类似，但是它更为灵活。它可以指定不同的文件在不同的搜索目录中。这是一个很灵活的功能。它的使用方法有三种：
            1. vpath <pattern\> <directories\> 为符合模式<pattern\>的文件指定搜索目录<directories\>。
            2. vpath <pattern\> 清除符合模式<pattern\>的文件的搜索目录。
            3. vpath 清除所有已被设置好了的文件搜索目录。
        4. vapth 使用方法中的<pattern\>需要包含"%"字符。"%"的意思是匹配零或若干字符，例如，"%.h"表示所有以".h"结尾的文件。<pattern\>指定了要搜索的文件集，而<directories\>则指定了<pattern\>的文件集的搜索的目录。例如： ``vpath %.h ../headers`` 表示，要求 make 在"../headers"目录下搜索所有以".h"结尾的文件。(如果某文件在当前目录没有找到的话)。
        5. 我们可以连续地使用 vpath 语句，以指定不同搜索策略。如果连续的vpath 语句中出现了相同的<pattern\>，或是被重复了的<pattern\>，那么，make 会按照 vpath 语句的先后顺序来执行搜索。
    6. **伪目标**
        1. "伪目标"并不是一个文件，只是一个标签，由于"伪目标"不是文件，所以 make 无法生成它的依赖关系和决定它是否要执行。我们只有通过显示地指明这个"目标"才能让其生效。当然，"伪目标"的取名不能和文件名重名，不然其就失去了"伪目标"的意义了。
        2. 当然，为了避免和文件重名的这种情况，我们可以使用一个**特殊的标记".PHONY"**来显示地指明一个目标是"伪目标"，向 make 说明，不管是否有这个文件，这个目标就是"伪目标"。
        3. 伪目标一般没有依赖的文件。但是，我们也可以为伪目标指定所依赖的文件。伪目标同样可以作为"默认目标"，只要将其放在第一个。一个示例就是，如果你的 Makefile 需要一口气生成若干个可执行文件，但你只想简单地敲一个 make 完事，并且，所有的目标文件都写在一个 Makefile 中，那么你可以使用"伪目标"这个特性：
            ```makefile
            all     : prog1 prog2 prog3
            .PHONY  : all
            prog1   : prog1.o utils.o
                cc -o prog1 prog1.o utils.o
            prog2   : prog2.o
                cc -o prog2 prog2.o
            prog3   : prog3.o sort.o utils.o
                cc -o prog3 prog3.o sort.o utils.o
            ```
        4. 从上面的例子我们可以看出，目标也可以成为依赖。所以，伪目标同样也可成为依赖。看下面的例子：
            ```makefile
            .PHONY      : cleanall cleanobj cleandiff
            cleanall    : cleanobj cleandiff 
                rm program
            cleanobj    :
                rm *.o
            cleandiff   :
                rm *.diff
            ```
    7. **多目标**
        1. Makefile 的规则中的目标可以不止一个，其支持多目标，有可能我们的多个目标同时依赖于一个文件，并且其生成的命令大体类似。于是我们就能把其合并起来。当然，多个目标的生成规则的执行命令是同一个，这可能会可我们带来麻烦，不过好在我们的可以使用一个自动化变量"$@"(关于自动化变量，将在后面讲述)，这个变量表示着目前规则中所有的目标的集合，这样说可能很抽象，还是看一个例子吧。
        2. 例子
            ```makefile
            bigoutput littleoutput  : text.g
            generate text.g -$(subst output,,$@) > $@
            # 上述规则等价于：
            bigoutput       : text.g
            generate text.g -big > bigoutput
            littleoutput    : text.g
            generate text.g -little > littleoutput
            # $(subst ) 表示函数，后面的 output,,$@表示参数
            # $@表示目标的集合，即target的集合。$@依次取出目标并执行指令
            ```
    8. **静态模式**
        1. 静态模式可以更加容易地定义多目标的规则，可以让我们的规则变得更加的有弹性和灵活。我们还是先来看一下语法：
            ```makefile
            <targets ...> : <target-pattern> : <prereq-patterns ...> 
                <commands>
            ```
        2. targets 定义了一系列的目标文件，可以有通配符。是目标的一个集合。
        3. target-parrtern 是指明了 targets 的模式，也就是的目标集模式。
        4. prereq-parrterns 是目标的依赖模式，它对 target-parrtern 形成的模式再进行一次依赖目标的定义。
        5. 如果我们的<target-parrtern\>定义成"%.o"，意思是我们的<target\>集合中都是以".o"结尾的，而如果我们的<prereq-parrterns\>定义成"%.c"，意思是对<target-parrtern\>所形成的目标集进行二次定义，其计算方法是，取<target-parrtern\>模式中的"%"(也就是去掉了[.o\]这个结尾)，并为其加上[.c\]这个结尾，形成的新集合。
        6. 所以，我们的"目标模式"或是"依赖模式"中都应该有"%"这个字符，如果你的文件名中有"%"那么你可以使用反斜杠"\"进行转义，来标明真实的"%"字符。
        7. 例子1
            ```makefile
            objects = foo.o bar.o
            all: $(objects)
            $(objects): %.o: %.c
                $(CC) -c $(CFLAGS) $< -o $@
            # 目标从$object 中获取，"%.o"表明要所有以".o"结尾的目标，也就是"foo.o bar.o"，也就是变量$object集合的模式，
            # 而依赖模式"%.c"则取模式"%.o"的"%"，也就是"foo bar"，并为其加下".c"的后缀，于是，我们的依赖目标就是"foo.c bar.c"。
            # 而命令中的"$<"和"$@"则是自动化变量，"$<"表示所有的依赖目标集(也就是"foo.c bar.c")，"$@"表示目标集(也就是"foo.o bar.o")。
            # 所以上述指令 <==>
            foo.o : foo.c
                $(CC) -c $(CFLAGS) foo.c -o foo.o
            bar.o : bar.c
                $(CC) -c $(CFLAGS) bar.c -o bar.o
            ```
        8. 例子2
            ```makefile
            files = foo.elc bar.o lose.o
            $(filter %.o,$(files)): %.o: %.c
                $(CC) -c $(CFLAGS) $< -o $@
            $(filter %.elc,$(files)): %.elc: %.el
                emacs -f batch-byte-compile $<
            ```
    9. **自动生成依赖性**
        1. 在 Makefile 中，我们的依赖关系可能会需要包含一系列的头文件，比如，如果我们的 main.c 中有一句`#include "defs.h"`，那么我们的依赖关系应该是：`main.o : main.c defs.h` 。但是，如果是一个比较大型的工程，你必需清楚哪些 C 文件包含了哪些头文件，并且，你在加入或删除头文件时，也需要小心地修改Makefile，这是一个很没有维护性的工作。为了避免这种繁重而又容易出错的事情，我们可以使用 C/C++编译的一个功能。大多数的C/C++编译器都支持一个"-M"的选项，即自动找寻源文件中包含的头文件，并生成一个依赖关系。
        2. gcc -M main.c × gcc -MM main.c √
        3. 于是由编译器自动生成的依赖关系，这样一来，你就不必再手动书写若干文件的依赖关系，而由编译器自动生成了。需要提醒一句的是，如果你使用 GNU 的 C/C++编译器，你得用"-MM"参数，不然，"-M"参数会把一些标准库的头文件也包含进来。
        4. 那么，编译器的这个功能如何与我们的 Makefile 联系在一起呢。因为这样一来，我们的Makefile 也要根据这些源文件重新生成，让Makefile自已依赖于源文件？这个功能并不现实，不过我们可以有其它手段来迂回地实现这一功能。GNU 组织建议把编译器为每一个源文件的自动生成的依赖关系放到一个文件中，为每一个"name.c"的文件都生成一个"name.d"的 Makefile 文件，[.d]文件中就存放对应[.c]文件的依赖关系。
        5. 于是，我们可以写出[.c]文件和[.d]文件的依赖关系，并让 make 自动更新或自成[.d]文件，并把其包含在我们的主 Makefile 中，这样，我们就可以自动化地生成每个文件的依赖关系了。这里，我们给出了一个模式规则来产生[.d]文件：
            ```makefile
            %.d : %.c
                @set -e; rm -f $@; \
                $(CC) -M $(CPPFLAGS) $< > $@.$$$$; \
                sed 's,\($*\)\.o[ :]*,\1.o $@ : ,g' < $@.$$$$ > $@; \
                rm -f $@.$$$$
                # set -e 放在顶部表示如果任何语句的执行结果不是true则应该退出，防止错误像滚雪球般变大导致一个致命的错误。加上 @ 表示makefile执行这条命令时不显示出来。
                # rm -f $@ 表示删除所有目标文件，即[.d]文件。
                # $(CC) -M $(CPPFLAGS) $< > $@.$$$$ 表示为每个依赖文件"$<"，即[.c]生成依赖文件。"$@"表示模式"%.d"文件，如果有一个C文件是name.c，那么"%"就是"name"，"$$$$"意为一个随机编号，第二行生成的文件有可能是"name.d.12345"。
                # 第三行使用sed命令做了一个替换。
                # 第四行删除临时文件。
            ```
4. 书写命令
5. 条件判断
6. 函数
    1. $(variable_name); $(subst output,,$@) | $(subst postfix,,strList); $(filter %.o,$(files)) | $(filter pattern,strList);
    2. @; $@; $<; set -e; $(CC) -M $(CFLAGS); $(CPPFLAGS);
7. make 的运行
8. 隐含规则
9. 使用 make 更新函数库文件

## cmake学习

