---
title: Linux-1
tags: [Linux]
index_img: "https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220427100447.png"
categories:
- [Linux]
sticky: 1.0
excerpt: Linux入门的第一课，包含【Linux的安装与配置】、【VI和VIM】、【用户管理】等内容。
---

# 简介和环境配置

## 下载VMWare

详情参见老师的文档。

> 补充：
>
> Linux一共有三个分区，东西都放在根分区
>
> 交换分区：可以临时作为内存的补充，但是速度没有真实内存快。
>
> boot：1G
>
> swap：2G
>
> \

## 下载CentOS

详情请见老师的文档。

CentOS细节介绍

> **软件选择：**![image-20220223174716248](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426231926.png)软件选择之后会检查安装源，需要等待一会儿。
>
> **配置分区：**
>
> 选择【我要配置分区】，点击【完成】，后弹出界面。![image-20220223175032299](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426231932.png)
>
> 接下来配置![image-20220223175441323](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426231936.png)然后点击【接受更改】。
>
> **KDUMP：**
>
> 是一种内核崩溃转储机制，再系统崩溃的时候用于捕获系统信息。
>
> 如果是实际的生产环境中，可以开启KDUMP。
>
> **设置网络：**
>
> 打开即可。
>
> **提醒**：
>
> 实际生活中密码一定要复杂一点。可以使用随机密码生成的。
>
> 输入tar vm之后输入tab，可以自动补全



## 网络连接的三种方式

![image-20220223174232519](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426231940.png)

## 虚拟机的克隆

如果已经安装了一台虚拟机，就没必要重新安装，直接克隆即可。

1. 直接拷贝一份已经安装好的虚拟机文件。

   在文件夹里面复制粘贴。然后再VM里面选择【打开】。![image-20220223182419425](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426231945.png)

2. 使用vm的安装操作

   注意：**克隆时需要先关闭linux系统**![image-20220223182150269](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426231948.png)

## 虚拟机快照

如果在使用虚拟机的时候，想回到原来的某一个正常的状态（担心某些误操作造成系统异常），需要快照管理。

![image-20220223182746020](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426231950.png)

返回某快照：在【快照管理】界面，选择需要回到的快照，点击【转到】。

## 虚拟机的迁移和删除

虚拟机的迁移：其实就是文件夹整体的剪切。

虚拟机的删除：VMWare右键选择【移除】，然后在文件夹中删除整个文件夹。

## 安装VMware Tools

**场景：**如果想在windows主机和linux虚拟机上都操作同一个文件夹，需要安装VMTools。

**提示：**需要用rooot用户来操作。

**技巧：**VMware Tools安装是灰色的，需要在虚拟机开机之后，没有完全开机之前点击。

1. 进入CentOS桌面，然后弹出桌面上的驱动。
2. 点击Vmware菜单【虚拟机】，点击【安装VMTools】，然后桌面上会出现一个光盘名为【VMTools】。
3. 打开光盘会出现一个文件夹，将文件夹【VMwareTools-10.3.22-15902021.tar.gz】拷贝到【其他位置】【计算机】的/opt文件夹下。
4. 打开终端，进入opt文件夹，使用解压命令`tar`得到一个安装文件![image-20220223200001696](C:\Users\LXR\AppData\Roaming\Typora\typora-user-images\image-20220223200001696.png)
5. `cd vmware-tools-distrib/`进入vm解压后的文件夹下，执行`./vmware-install.pl`，然后一路回车即可。
6. 注意：安装的时候需要有gcc，可以通过`gcc -v`查看自己的gcc版本。

**设置共享文件夹：**

1. 设置一个共享文件夹，比如`F:\WorkSpace\linux\myshare`在文件夹下建立一个`a.txt`

2. 打开设置，![image-20220223200736307](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426231958.png)

   ![image-20220223200911235](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232001.png)

   在【主机路径】【浏览】下选择刚刚的共享文件夹，然后【下一步】，默认【启用此共享】即可。

3. 在`计算机/mnt/hgfs`下，可以查看共享文件夹。

但是在实际开发中，文件的上传下载是通过远程方式完成的。（经典白学预警 ）

## linux目录结构

### 一切皆文件

1. 在linux中，一切皆文件，并把硬件映射成文件形式，且目录无法修改。

2. linux的文件系统是采用<u>级层式的树状目录结构</u>，在此结构中的最上层是根目录`/`，然后在此目录下再创建其他的目录。

### 具体的目录结构

![image-20220223214801594](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232007.png)![image-20220223214951427](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232010.png)

![](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232132.png)

![image-20220223214827389](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232014.png)



### 远程

情景：在公司中开发时，就有以下特点

1) linux 服务器是开发小组共享
2) 正式上线的项目是运行在公网
3) 因此程序员需要远程登录到 Linux 进行项目管理或者开发
4) 画出简单的网络拓扑示意图(帮助理解)

#### 远程登陆

1. 下载XShell

2. 测试

在Linux系统下打开终端，查看ip

![image-20220223215708994](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232018.png)

然后在Windows系统下打开终端，尝试连接

![image-20220223215741625](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232020.png)

打开XShell，【新建】，名称可以随便写但是主机必须正确。![image-20220223215824277](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232137.png)

就可以连接到Linux系统了![image-20220223215953859](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232143.png)

#### 远程传输

打开Xftp，点击【新建】，<u>注意端口号也是22</u>

![image-20220223220130019](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232027.png)

> 乱码解决：左上角文件 - 当前会话属性 - 左上角 常规，点击旁边的“选项”，将“编码”改为UTF-8

 ![image-20220223220410675](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232032.png)

> windows和linux之间的文件传输是双向的。
>
> 点击【传输】即可。

# VI和VIM
1. Linux 系统会内置 vi 文本编辑器
2. Vim 具有程序编辑的能力，可以看做是 Vi 的增强版本，可以主动的以字体颜色辨别语法的正确性，方便程序设计。
代码补完、编译及错误跳转等方便编程的功能
## VI和VIM的三种常用模式
**正常模式**
VM打开直接进入默认模式，可以使用『上下左右』按键来移动光标，『删除字符』或『删除整行』来处理档案内容， 『复制、粘贴』来处理文件数据。

**插入模式**

按下 i, I, o, O, a, A, r, R 等任何一个字母之后才会进入编辑模式, 一般来说按 i 即可

**命令行模式**

先输入esc，在输入`:`，可以完成一系列命令操作。

## VI和VIM的基本使用

使用VIM开发Helloworld.java程序

在控制台输入`vim Hello.java`，表示开启一个vim编辑器。

然后写入java程序后，按住`esc`，输入`:wq`表示写入并退出， `:q!`强制退出不保存。

## 各种模式之间的相互切换

![image-20220223223707481](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232040.png)

### 快捷键使用练习

1. 拷贝当前行`yy` , 拷贝当前行向下的 5 行`5yy`，并粘贴（输入 p）。

2. 删除当前行`dd`, 删除当前行向下的 5 行 `5dd`

3. 在文件中查找某个单词 [命令行下` /关键字`， 回车 查找 ,输入`n` 就是查找下一个 ]

4) 设置文件的行号，取消文件的行号
	命令行下 `:set nu` 和`:set nonu`
	
5. 编辑 /etc/profile 文件，在一般模式下, 使用快捷键到该文档的最末行`G`和最首行`gg`

6. 在一个文件中输入 "hello" ,在一般模式下, 然后又撤销这个动作`u`

7. 编辑/etc/profile 文件，在一般模式下,并将光标移动到 , 输入` 20`,再输入` shift+g`

8. > yy：在正常模式下输入，表示拷贝，但是如果是输入模式下，就是输入yy
   >
   > 输入yy p，表示拷贝

![image-20220224120333362](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232046.png)

## 登陆注销

**介绍：**

登录时尽量少用root账号登录，因为他是系统管理员，最大的权限，避免操作失误，可以利用普通用户登录，登录后再用  `su - 用户名`  命令切换成系统管理员身份

在提示符下输入  `logout `  可注销用户

**注意**：

logout注销指令在运行级别3下有效，在图形级别下无效。



# 用户管理

Linux系统是一个多用户多任务的操作系统，任何一个要使用系统资源的用户都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统



由一个root用户可以创建多个用户（例如tom）。

## 添加用户

**基本语法**

`useradd 用户名`

**应用案例**

添加一个用户milan

> 1. 当创建米兰用户成功的时候，自动创建该用户的家目录`/home/milan`，并且在登陆的时候会默认进入该用户的家目录下。
>
> 2. 也可以通过 `useradd -d 指定目录 新的用户名`来给新创建的用户指定家目录
>
> > 例如  `useradd -d /home/kkk king`意为：创建一个用户king，用户的家目录为kkk。

## 指定或修改密码

**基本语法**

`passwd 用户名`

**应用案例**

给米兰指定密码

> 补充：
>
> `pwd`：显示当前所在目录
>
> `id 用户名`：查看该用户的信息。

### 删除用户

**基本语法**

`userdel 用户名`

``userdel -r 用户名`

**应用案例**

删除用户milan，但是保留家目录 `userdel milan`

删除用户milan以及用户主目录 `userdel -r milan`

> 需要切换root用户，自己不能删除自己
>
> 一般情况下，建议保留用户主目录

### 切换用户

在Linux中，如果当前用户的权限不够，可以通过`su - 用户名`指令，切换到高权限用户，比如root

**基本语法**

`su - 用户名`

**应用案例**

创建一个用户jack，指定密码，然后切换到jack

> 1. 从权限高的用户切换到权限低的用户，不需要输入密码，反之需要
> 2. 当需要切换到原来的用户时候，需要使用`exit`或者`logout`指令
> 3. 查看当前<u>登录</u>用户`whoami`或`who am i`

### 用户组

系统可以对有共性（权限）的多个用户进行统一的管理

**应用案例**

添加组：`groupadd wudang`

删除组：`groupdel wudang`

创建用户的时候加上组：`useradd -g wudang zwj`

修改组：`usermod -g mojiao zwj`

> 如果创建用户的时候没有指定组，就会默认创建一个和用户名相同的组并且把用户放进去

> 补充：
>
> ![image-20220224123103176](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232058.png)

# Linux实操篇 实用指令

## 指定运行级别

![image-20220224123648038](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232150.png)

![image-20220224124500877](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232105.png)

查看当前运行级别：`systemctl get-default`

设置当前运行级别为3：`systemctl set-default multi-user.target`

如果改变之后再重启，就会进入运行级别为3的界面。

### Linux找回root用户的密码

**方法：**

1.	首先，启动系统，进入开机界面，在界面中按“e”进入编辑界面。如图![image-20220224125015927](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232108.png)
2.	进入编辑界面，使用键盘上的上下键把光标往下移动，找到以““Linux16”开头内容所在的行数”，在行的最后面输入：init=/bin/sh。如图![image-20220224125032894](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232112.png)
1.	接着，输入完成后，直接按快捷键：`Ctrl+x` 进入单用户模式。
4.	接着，在光标闪烁的位置中输入：`mount -o remount,rw /`（注意：各个单词间有空格），完成后按键盘的回车键（Enter）。
5.	在新的一行最后面输入：passwd， 完成后按键盘的回车键（Enter）。输入密码，然后再次确认密码即可(韩顺平提示: 密码长度最好8位以上,但不是必须的), 密码修改成功后，会显示passwd.....的样式，说明密码修改成功![image-20220224131459675](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232117.png)
1.	接着，在鼠标闪烁的位置中（最后一行中）输入：touch /.autorelabel（注意：touch与 /后面有一个空格），完成后按键盘的回车键（Enter）
2.	继续在光标闪烁的位置中，输入：exec /sbin/init（注意：exec与 /后面有一个空格），完成后按键盘的回车键（Enter）,等待系统自动修改密码(韩顺平提示：这个过程时间可能有点长，耐心等待)，完成后，系统会自动重启, 新的密码生效了![image-20220224131533785](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232121.png)

# 帮助指令

## 帮助信息类

![image-20220224184447524](https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220426232125.png)

例如：

`man ls`：查看目录信息（按住空格键展示更多信息）

`ls -al /root`：指定root目录，查看下面的所有内容

