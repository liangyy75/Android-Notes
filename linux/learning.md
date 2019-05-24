[Lua 菜鸟](https://www.runoob.com/lua/lua-environment.html)
[luarocks](https://luarocks.org)
[Lua 易百](https://www.yiibai.com/lua/lua_environment.html)
[ubuntu下安装lua和luarocks](https://blog.csdn.net/kgzhang/article/details/72885199)
[使用Lua做Web开发](https://www.jianshu.com/p/94342efd9467)

[VMware虚拟机不能联网的解决办法](https://blog.csdn.net/zhyulo/article/details/78730009)
[VMware下载地址](https://www.vmware.com/products/workstation-pro.html)
[linux全系列发行版](http://www.linuxdown.net/)
[Ubuntu下载地址](https://www.ubuntu.com/download/desktop)
[CentOS下载地址](https://www.centos.org/download/) [](http://isoredirect.centos.org/centos/7/isos/x86_64/CentOS-7-x86_64-DVD-1810.iso) [](https://www.centos.org/) [](https://wiki.centos.org/zh/Manuals/ReleaseNotes/CentOS7.1810)
[VMware Workstation 15 Pro 永久激活密钥 下载](https://blog.csdn.net/felix__h/article/details/82853501)
[VMware 15 安装 Ubuntu 18.04.2](https://www.jianshu.com/p/37d0fd0fbbc1)
[VMware 14 安装CentOS 7.6 Minimal版本（DVD版也类似）](https://blog.csdn.net/alw2009/article/details/85485263) [VMwear安装Centos7超详细过程](https://www.jianshu.com/p/ce08cdbc4ddb?utm_source=tuicool&utm_medium=referral)
[CentOS 版本选择：DVD、Everything、LiveCD、Minimal、NetInstall（转）](https://blog.csdn.net/frank1998819/article/details/84774176)
[ubuntu16.04系统设置](https://blog.csdn.net/gsl371/article/details/79376327)
[ubuntu 如何更换适合自己版本的镜像源](https://blog.csdn.net/qq_29719097/article/details/79281107)
[MSYS2的源配置](https://www.cnblogs.com/findumars/p/4878396.html)
[Pacman使用手册](https://wiki.archlinux.org/index.php/Pacman_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))
[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/)
[开源软件镜像站](https://mirror.bjtu.edu.cn/ubuntu-releases/)
[开源软件镜像站](https://mirrors.ustc.edu.cn/repogen/)
[开源软件镜像站](https://mirrors.ustc.edu.cn/ubuntu-releases/)
[阿里巴巴开源软件镜像站](https://opsx.alibaba.com/mirror)
[安装Ubuntu后必须要做的几件事(一)](https://blog.csdn.net/day_to_die/article/details/78689999)
[Ubuntu18.04 安装后应该做的事（更新中）](https://blog.csdn.net/hymanjack/article/details/80285400)
[Ubuntu 18.04配置及美化](https://blog.csdn.net/ice__snow/article/details/80152068)
[Ubuntu18.04（Gnome桌面）主题美化，Mac私人定制](https://blog.csdn.net/zyqblog/article/details/80152016)
[安装好Ubuntu18.04之后要做的事！！大全、详细教程！](https://blog.csdn.net/haeasringnar/article/details/81809040)

[如何在Ubuntu 18.04/18.10中安装Oracle Java 11](https://www.linuxidc.com/Linux/2018-11/155562.htm)
安装java11: sudo add-apt-repository ppa:linuxuprising/java; sudo apt-get update; sudo apt-get install oracle-java11-installer; 
删除java11: sudo apt-get remove oracle-java11-installer
安装gcc/g++: sudo apt install gcc/g++
删除gcc/g++: sudo apt remove gcc/g++
安装cmake/vim: sudo apt instal cmake/vim
安装lua5.1: sudo apt install lua luarocks;  只有5.1版本的支持该luarocks，5.2+的要自己弄
安装lua5.3: 
安装mysql: sudo apt-get install mysql-server; sudo apt-get install mysql-client; sudo apt-get install libmysqlclient-dev;
    mysql默认密码在 /etc/mysql/debian.cnf:
        ```
        [client]
        host     = localhost
        user     = debian-sys-maint
        password = FCH5WyVGuNBfdHKJ
        socket   = /var/run/mysqld/mysqld.sock
        [mysql_upgrade]
        host     = localhost
        user     = debian-sys-maint
        password = FCH5WyVGuNBfdHKJ
        socket   = /var/run/mysqld/mysqld.sock
        ```
安装graphviz: sudo apt-get install graphviz; sudo apt-get install graphviz-dev graphviz-doc libgraphviz-dev;
安装expat: sudo apt install expat; sudo apt install libexpat1-dev;
sudo apt install libzzip-dev; https://github.com/gdraheim/zziplib

sudo rm /var/cache/apt/archives/lock  
sudo rm /var/lib/dpkg/lock
sudo apt-get update; sudo apt-get upgrade;

pip3: sudo apt-get install python3-pip; sudo pip3 install --upgrade pip; sudo apt install python3-testresources; 修改/usr/bin/pip3里面的文件内容; sudo apt-get remove -purge python3-pip;
pip: sudo apt-get install python2.7; curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py; sudo python2.7 get-pip.py; sudo apt install python-testresources;
git: sudo apt-get install git
zsh: sudo apt-get install zsh; chsh -s /bin/zsh liangyy75; sudo reboot; apt-get install ssl-cert; sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"; cd ~/.oh-my-zsh/custom/plugins; git clone git://github.com/zsh-users/zsh-syntax-highlighting.git; vim ~/.zshrc; sudo apt-get install autojump; 
https://www.cnblogs.com/insomniazz/p/7841440.html https://blog.csdn.net/amoscykl/article/details/80616873 https://www.jianshu.com/p/4e3c55b16d05

windows下用mingw编译linux项目

1.下载安装mingw32
2.将mingw下bin和msys\1.0下bin设置为系统path
3.启动msys.bat
4.cd到项目目录
5.输入./configure
6.输入make
7.输入make install
8.cd C:\MinGW\msys\1.0\local\lib
9.ar x ***.a
10.ar r ***.lib *.o
即生成***.lib,头文件在C:\MinGW\msys\1.0\local\include

在msys的cmd中使用pacman -Syu来Update the package database and core system packages

msys2配置记录 -- https://www.jianshu.com/p/c740b71e7775
pacman使用 -- https://wiki.archlinux.org/index.php/Pacman_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)
MSYS2的源配置 -- http://www.cnblogs.com/pasuka/p/4204427.html

>> pacman -S zsh git  # zsh的提示很suang的，所以推荐用zsh把默认的bash换掉。oh my zsh是简化zsh配置的工具。首先通过pacman安装zsh，因为一会安装oh my zsh的时候会用到git，所以也一并装了。
>> sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
>> pacman -Syu  # 更新软件包
>> pacman -Sg  # 列出软件组情况
>> https://www.jianshu.com/p/7279840624ea

在ConEmu64的task中使用set CHERE_INVOKING=1 & %ConEmuDrive%\msys64\usr\bin\zsh.exe --login -i -new_console:D:"%ConEmuDrive%\msys64\msys2.ico"  # 因为msys2没有chsh，所以直接在conemu里更改默认shell（我没找到其他好办法orz）