---
title: Linux-2
tags: [Linux]
index_img: "https://gitee.com/li-il/pic_bed/raw/master/img/20220301230133.jpeg"
categories:
- [Linux]
sticky: 1.2
excerpt: Linux入门的第二课，包含【帮助指令】、【常用指令】等内容。
---

# 帮助指令

## 帮助信息类

![image-20220224184447524](https://gitee.com/li-il/pic_bed/raw/master/img/20220315204505.png)

例如：

`man ls`：查看目录信息（按住空格键展示更多信息）

`ls -al /root`：指定root目录，查看下面的所有内容



# 文件目录类

## pwd

显示当前工作目录的绝对路径



## ls

`ls [选项] [目录或文件]`

| 选项 | 功能                                     |
| ---- | ---------------------------------------- |
| -a   | 显示当前目录所有的文件和目录，包括隐藏的 |
| -l   | 以列表的方式显示信息                     |

## cd

`cd [参数]`	切换到指定目录

参数可以是相对路径或绝对路径

`cd ~` 或 `cd` 回到自己的家目录

`cd ..` 回到当前目录的上一级目录

## 文件

### mkdir

`mkdir [选项] 要创建的目录`  用于创建目录

| 选项 | 功能         |
| ---- | ------------ |
| -p   | 创建多级目录 |

**应用案例**

1. 创建一个目录 /home/dog
2. 创建多级目录 /home/animal/tiger

**提示**：

案例2，如果没有animal目录，使用`mkdir /home/animal/tiger`会报错`没有那个文件或目录`，应该使用 **`mkdir -p /home/animal/tiger`**

### rmdir

`rmdir [选项] 要删除的目录`  用于删除空目录

| 选项 | 功能         |
| ---- | ------------ |
| -p   | 创建多级目录 |

**应用案例**

删除一个目录 /home/dog

**提示**：

如果要删除`/home/animal`，但是其下还有tiger文件夹，会删除失败`目录非空`，需要 **`rm -rf /home/animal`**

`rf`代表递归

### touch

`touch 文件名称`  用于创建空文件

应用案例：

在/home目录下，创建一个空文件hello.txt



### cp

**基本语法**

`cp [选项] source dest`  用于创建空文件

| 选项 | 功能               |
| ---- | ------------------ |
| -r   | 递归复制整个文件夹 |

**应用案例**：

1，将 /home/hello.txt 拷贝到/home/bbb 目录下

`cp hello.txt /home/bbb`

在home目录下，只需输入`cp hello.txt bbb/`

2，递归复制整个文件夹，举例, 比如将 /home/bbb 整个目录， 拷贝到 /opt

`cp -r /home/bbb /opt`

**细节**

强制覆盖不提示的方法：`\cp`

例如：`\cp -r /home/bbb /opt`

### rm

**基本语法**

`rm [选项] 要删除的文件或目录`  用于移除文件或目录

| 选项 | 功能               |
| ---- | ------------------ |
| -r   | 递归删除整个文件夹 |
| -f   | 强制删除不提示     |

**应用案例**：

1，将 /home/hello.txt 删除

`rm /home/hello.txt`

2，递归删除整个文件夹/home/bbb，并且不提示

`rm -r /home/hello.txt`（每删一个文件都会提示一次）

`rm -rf /home/hello.txt`（删除文件不提示）

### mv

**基本语法**

`mv oldNameFile newNameFile`  重命名

`mv /temp/movefile /targetFolder`   移动文件



**应用案例**：

1，将 /home/cat.txt 文件 重新命名为 pig.txt

`mv cat.txt pig.txt`

2，将 /home/pig.txt 文件 移动到 /root 目录下

`mv pig.txt /root/`

移动并且重命名：`mv pig.txt /root/cow.txt`

3，移动整个目录 , 比如将 /opt/bbb 移动到 /home 下 mv /opt/bbb /home/

`mv bbb/ /home/`

移动bbb文件并且重命名为uuu：`mv bbb/ /home/uuu`

> 如果文件在同一个目录，就是重命名。
>
> 如果不在，就是移动文件。

### cat

**基本语法**

`cat [选项] 要查看的文件`  查看文件内容

| 选项 | 功能     |
| ---- | -------- |
| -n   | 显示行号 |

**应用案例**

查看 /etc/profile 文件内容，并显示行号

**使用细节**
cat 只能浏览文件，而不能修改文件，为了浏览方便，一般会带上管道命令 `| more`
`cat -n /etc/profile | more`

> 管道命令：类似于把前面的结果交给后面处理

## 查看文件

### more

`more 要查看的文件`

more 指令是一个基于 VI 编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more 指令中内置了若干快捷键用于交互。

![image-20220227195131619](https://gitee.com/li-il/pics/raw/master/20220228184753.png)



### less

`less 要查看的文件`

less 指令用来分屏查看文件内容，它的功能与 more 指令类似，但是比 more 指令更加强大，支持各种显示终端。

less指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率。

![image-20220227195230358](https://gitee.com/li-il/pics/raw/master/20220228184757.png)

## echo

**基本语法**

`echo [选项] [输出内容]`  输出内容到控制台

**应用实例**

在控制台输出hello world

`echo "hello,world!"`

## head

head 用于显示文件的开头部分内容，默认情况下 head 指令显示文件的前 10 行内容

**基本语法**

`head 文件`  查看文件头 10 行内容

`head -n 5 文件`  查看文件头 5 行内容，5 可以是任意行数

**应用实例**

查看/etc/profile 的前面 5 行代码

`head -n 5 /etc/profile`



## tail

tail 用于输出文件中尾部的内容，默认情况下 tail 指令显示文件的前 10 行内容。

**基本语法**

`tail 文件`  查看文件尾 10 行内容

`tail -n 5 文件`  查看文件尾 5 行内容，5 可以是任意行数

`tail -f 文件`  实时追踪该文档的所有更新

**应用实例**

实时监控 mydate.txt , 看看到文件有变化时，是否看到实时的追加 hello,world

`tail -f /home/mydate.txt`

> 案例会导致当前终端陷入监控状态，需要再打开另一个终端查看效果。
>
> 查看效果举例：打开另一个终端，通过重定向`echo "hello" > /home/mydate.txt`将"hello"输入到mydate.txt
>
> 暂停监控：`ctrl+C`

## 输出重定向> 和 追加>>

**基本语法**

`ls -l >文件`  列表的内容写入文件 a.txt 中（覆盖写）

`ls -al >>文件`  列表的内容追加到文件的末尾

`cat 文件 1 > 文件 2`  将文件 1 的内容覆盖到文件 2

`echo "内容">> 文件`  追加

**应用实例**

1， 将 /home 目录下的文件列表 写入到 /home/info.txt 中, 覆盖写入

`ls -l /home > /home/info.txt`（如果没有info.txt，则会创建）

2，将当前日历信息 追加到 /home/mycal 文件中

`cal >> /home/mycal`

3，在info.txt里面写入"ok"

`echo "ok" > /home/info.txt`

4，文件内容覆盖

`cat /etc/profile > /home/myprofile`



## In

软链接也称为符号链接，类似于 windows 里的快捷方式，主要存放了链接其他文件的路径

**基本语法**

`ln -s [原文件或目录] [软链接名]`  给原文件创建一个软链接

**应用实例**

1， 在/home 目录下创建一个软连接 myroot，连接到 /root 目录

`ln -s /root /home/myroot`

可以使用`ls -l`查看当前的目录

2，删除软连接 myroot

`rm /home/myroot`

> 注意：
>
> 删除的时候不能写`rm /home/myroot/`，不要加最后的斜杠，否则会报错`……是一个目录`
>
> 当我们使用 pwd 指令查看目录时，仍然看到的是软链接所在目录。

## history

**基本语法**

`history`  查看已经执行过历史命令

**应用实例**

1， 显示所有的历史命令

`history`

2，显示最近使用过的 10 个指令

`history 10`

3， 执行历史编号为 5 的指令

`!5`

## date

### 显示时间

**基本语法**

`date`	显示当前时间

`date +%Y`	显示当前年份

`date +%m`	显示当前月份

`date +%d`	显示当前是哪一天

`date "+%Y-%m-%d %H:%M:%S"`	显示年月日时分秒

### 设置时间

**基本语法**

`date -s 字符串时间`	显示当前时间

**应用实例**

设置系统当前时间 ， 比如设置成 2020-11-03 20:02:10
`date -s “2020-11-03 20:02:10”`

## cal

**基本语法**

`cal`    不加选项，显示本月日历

**应用实例**

案例 1: 显示当前日历     `cal`
案例 2: 显示 2020 年日历    `cal 2020`



## find

find 指令将从指定目录向下递归地遍历其各个子目录，将满足条件的文件或者目录显示在终端。

**基本语法**

`find [搜索范围] [选项]`    

![image-20220227201254477](https://gitee.com/li-il/pics/raw/master/20220228184807.png)

**应用实例**

1， 按文件名：根据名称查找/home 目录下的 hello.txt 文件

`find /home -name hello.txt`

2，按拥有者：查找/opt 目录下，用户名称为 nobody 的文件

`find /opt -user nobody`

3，查找整个 linux 系统下大于 200M 的文件（+n 大于 -n 小于 n 等于, 单位有 k,M,G）

`find / -size +200M`

## locate

locate 指令可以快速定位文件路径。

locate 指令利用<u>事先建立的系统</u>中所有文件名称及路径的 locate 数据库实现快速定位给定的文件。

Locate 指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确度，管理员必须定期更新 locate。

**基本语法**

`locate`   

**应用实例**

1，请使用 locate 指令快速定位 hello.txt 文件所在目录

2， which 指令，可以查看某个指令在哪个目录下，比如 ls 指令在哪个目录

`which ls`

**说明**

由于 locate 指令基于数据库进行查询，所以第一次运行前，必须使用 updatedb 指令创建 locate 数据库。



## grep

grep 过滤查找 ， 管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理。

**基本语法**

`grep [选项] 查找内容 源文件`

 ![image-20220227201621226](https://gitee.com/li-il/pics/raw/master/20220228184812.png) 

**应用实例**

1，请在 hello.txt 文件中，查找 "yes" 所在行，并且显示行号

两种写法：

`car /home/hello.txt | grep -n "yes"`

`grep -n "yes" /home/hello.txt`

## 压缩

### gzip/gunzip

**基本语法**

`gzip 文件`   压缩文件，只能将文件压缩为*.gz 文件

`gunzip 文件.gz `   解压缩

**应用实例**

1，gzip 压缩， 将 /home 下的 hello.txt 文件进行压缩

`gzip /home/hello.txt`
2， gunzip 压缩， 将 /home 下的 hello.txt.gz 文件进行解压缩
`gunzip /home/hello.txt.gz`

### zip/unzip

**基本语法**

`zip [选项] XXX.zip`   

`unzip [选项] XXX.zip `   

> zip常用选项
>
> `-r`    递归压缩，即压缩目录
>
> unzip  常用选项
>
> -d<目录>   指定解压后文件的存放目录

**应用实例**

1，将 /home 下的 所有文件/文件夹进行压缩成 myhome.zip
`zip -r myhome.zip /home/`
2，将 myhome.zip 解压到 /opt/tmp 目录下
`mkdir /opt/tmp`
`unzip -d /opt/tmp /home/myhome.zip`



### tar

tar 指令 是打包指令，最后打包后的文件是 .tar.gz 的文件。

**基本语法**

`tar [选项] XXX.tar.gz 打包的内容  `  打包目录，压缩后的文件格式.tar.gz

![image-20220227202301503](https://gitee.com/li-il/pics/raw/master/20220228184816.png)

**应用实例**

1，压缩多个文件，将 /home/pig.txt 和 /home/cat.txt 压缩成 pc.tar.gz
`tar -zcvf pc.tar.gz /home/pig.txt /home/cat.txt`
2，将/home 的文件夹 压缩成 myhome.tar.gz
`tar -zcvf myhome.tar.gz /home/`
3，将 pc.tar.gz 解压到当前目录
`tar -zxvf pc.tar.gz`
4，将 myhome.tar.gz 解压到 /opt/tmp2目录下
`mkdir /opt/tmp2`

`tar -zxvf /home/myhome.tar.gz -C /opt/tmp2`

