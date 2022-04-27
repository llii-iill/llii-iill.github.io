---
title: Linux-3
tags: [Linux]
index_img: "https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220427100447.png"
categories:
- [Linux]
sticky: 1.3
excerpt: Linux入门的第三课，包含【组的介绍】、【权限】、【任务调度】、【磁盘分区】、【进程】、【服务管理】、【RPM】等内容。
---





# Linux组的介绍

在linux中的每个用户必须属于一个组，不能独立于组外。在linux中每个文件有所有者、所在组、其它组的概念。
1.所有者
2.所在组
3.其它组
4.改变用户所在的组

### 组的创建

基本指令：`groupadd 组名`

```
应用实例：
创建一个组monster，然后创建一个用户fox，并放入monster组中。
groupadd  monster
useradd -g monster fox
id fox
```



### 文件目录所有者

一般为文件的创建者，谁创建了该文件，谁就是文件的所有者。



查看文件的所有者、所在组：`ls -ahl`

修改文件所有者：`chown 用户名 文件名`

```
应用实例：使用root，创建一个文件apple.txt，然后将其所有者修改成tom
chown tom apple.txt
```



### 文件目录所在组

当用户创建了文件之后，文件所在的组就是该用户所在的组。



```
应用实例：使用fox创建一个文件，看该文件属于哪个组
pwd（查看当前是否属于fox用户）
touch xxx（文件名）（创建一个文件）
ls -ahl（查看文件的所在组）
```



### 修改文件所在组

`chgrp 组名 文件名`



```
应用实例：root用户创建文件orange.txt，看该文件属于哪个组，然后将文件所在组修改到fruit组。
groupadd fruit
touch orange.txt
chgrp fruit orange.txt
```



### 其他组

出文件所有者和所在组的用户外，系统的其他用户都是文件的其他组。

### 改变用户所在组

在添加用户时，可以指定将该用户添加到哪个组中，同样的用root的管理权限也可以改变某个用户所在的组。



1. usermod -g 新组名 用户名

2. usermod -d 目录名 用户名 （改变该用户登录的初始目录）

   说明：用户需要有进入到新目录的权限。

```
应用实例：
将zwj用户从原来所在组修改到wudang组。
id zwj 
cat /etc/group | grep wudang
usermod -g wudang zwj
```



# 权限

### 权限基本介绍

![image-20220225201648459](https://gitee.com/li-il/pics/raw/master/20220228184841.png)



文件及目录权限应用实例：

`ls -l` 中显示的内容如下：

`-rwxrw-r-- 1 root root 1213 Feb 2 09:39 abc`

第一个字符代表文件类型：`- l d c b`

其余三个字符每3个一组（rwx）：读（r）写（w）执行（x）

- 第一组rwx：文件拥有者的权限是读、写和执行

- 第二组rw-：与文件拥有者同一组的用户的权限是读、写，但不能执行

- 第三组r--：不与文件拥有者同组的其他用户的权限是读，不能写和执行

可用数字表示为：`r=4 w=2 x=1`，因此rwx=4+2+1=7

其他说明：

![image-20220227132345761](https://gitee.com/li-il/pics/raw/master/20220228184844.png)

### rwx权限详解

- rwx作用到文件

  1. 【r】代表可读：可以读取、查看。

  2. 【w】代表可写：可以修改，不能删除。

     （删除的前提是对该文件所在的目录有写权限）

  3. 【x】代表可执行：可以被执行。

- rwx作用到目录

  1. 【r】代表可读：可以被读取，ls查看目录内容。
  2. 【w】代表可写：可以修改，对目录内创建、删除、重命名目录。
  3. 【x】代表可执行：可以进入该目录。

### 修改权限

`chmod`可以修改文件或目录的权限。

- 通过+、-、=变更权限

  u：所有者     g：所在组    o：其他人    a：所有人（ugo的总和）
  
  例：`chmod u=rwx,g=rx,o=x 目录/目录名`
  
  ```
  应用案例：
  1. 给abc文件的所有者读写执行的权限，给所在组读执行权限，给其他组读执行权限。
  chmod u=rwx,g=rx,o=rx abc
  2. 给abc文件的所有者除去执行的权限，增加读写的权限
  chmod u-x,g+w abc
  3. 给abc文件的所有用户添加读的权限
  chmod a+r abc
  ```
  
  
  
- 通过数字变更权限

  r=4    w=2    x=1    rwx=4+2+1=7

  例：`chmod u=rwx,g=rx,o=x 目录/目录名` == `chmod 751 文件目录名`

  ```
  应用案例：
  1. 将/home/abc.txt文件的权限修改成rwxr-xr-x
  chmod 755 /home/abc.txt
  ```

### 修改文件所有者

`chown 新所有者 文件或目录`  改变所有者

`chown 新所有者:新组 文件或目录`  改变所有者和所在组

`-R` 如果是目录，则使其下所有的子文件或目录递归生效



```
应用案例：
1. 将 /home/abc.txt 文件的所有者修改成 tom
chown tom /home/abc.txt
2. 将 /home/test 目录下所有的文件和目录的所有者都修改成tom
chown -R tom /home/test
```



### 修改文件、目录所在组

`chgrp 新组 文件或目录`



```
应用案例：
1. 将 /home/abc.txt 文件的所在组改成 shaolin
gruopadd shaolin
chgrp shaolin /home/abc.txt
2. 将 /home/test 目录下的所有文件和目录 的所在组都改成shaolin
chgrp -R shaolin /home/test
```



# crond任务调度

任务调度：是指系统在某个时间执行的特定的命令或程序

任务调度分类：系统工作如病毒扫描等某些周而复始的工作，或个别用户工作如数据库的备份等。

`crontab`   进行定时任务的设置

- -e		编辑crontab定时任务

- -l		 查询crontab任务

- -r		 删除当前用户所有的crontab任务

### 快速入门

设置任务调度文件：`/etc/crontab`

设置个人任务调度，执行 `crontab -e` 命令

输入任务到调度文件

`*/1 * * * * ls -l /etc/ >/tmp/to.txt`

意思是每小时的每分钟执行`ls -l /etc/ >/tmp/to.txt`命令

### 占位符及特殊符号的说明

![image-20220225203025679](https://gitee.com/li-il/pics/raw/master/20220228184851.png)

![image-20220225203039641](https://gitee.com/li-il/pics/raw/master/20220228184853.png)

### 案例

`cronrtab -r`：终止任务调度

`cronrtab -l`：列出当前有哪些任务调度

`service crond restart`：重启任务调度



![image-20220225203103951](https://gitee.com/li-il/pics/raw/master/20220228184855.png)



```
应用案例：
1. 每隔1分钟，就将当前的日期信息追加到/tmp/mydate文件中
*/1 * * * * date >> /tmp/mydate
2. 每隔1分钟，将当前日期和日历都追加到/home/mycal文件中
vim /home/my.sh 
date >> /home/mycal 和 cal >> /home/mycal（写入内容）
chmod u+x /home/my.sh （给my.sh增加执行权限）
crontab -e 
*/1 * * * * /home/my.sh
3. 每天凌晨两点将mysql数据库testdb备份到文件中
crontab -e
0 2 * * * mysqldump -uroot -proot testdb >> /home/db.bak

```

> 说明：
>
> 可以通过写一个脚本，直接执行脚本
>
> `vim my.sh`
>
> 打开文件之后写入：
>
> `date >> /home/mycal`
>
> `cal >> /home/mycal`
>
> 更改权限：
>
> `chmod u+x my.sh`
>
> 执行脚本：`./my.sh`

### at定时任务

1. at是<u>一次性</u>定时计划任务。

2. at的守护进程atd会以后台模式运行，检查作业队列运行。

3. 默认情况下，atd守护进程每60秒检查作业队列，有作业时，会检查作业运行时间，如果时间与当前时间匹配，则运行此作业。

4. 在使用at命令的时候，一定要保证atd进程的启动

5. 查看atd进程是否启动：`ps -ef | grep atd`

6. at 命令格式：

   `at [选项] [时间]`

   `ctrl+D` 结束at命令的输入

![image-20220225203643172](https://gitee.com/li-il/pics/raw/master/20220228184858.png)

# 磁盘分区机制

原理：

1. Linux只有一个根目录，一个独立且唯一的文件结构，每个分区都是用来组成整个文件系统的一部分。

2. Linux采用了一种叫“载入”的处理方法，它将一个分区和一个目录联系起来。

![image-20220225204003514](https://gitee.com/li-il/pics/raw/master/20220228184900.png)

### Linux分区

查看所有设备挂载情况：`lsblk` 或者 `lsblk -f`

![image-20220225204057400](https://gitee.com/li-il/pics/raw/master/20220228184902.png)

### 硬盘说明

![image-20220225204131928](https://gitee.com/li-il/pics/raw/master/20220228184919.png)

![image-20220225204214815](https://gitee.com/li-il/pics/raw/master/20220228184923.png)

### 增加磁盘案例

（P59）此处没有进行实操。

1. 虚拟机添加硬盘
2. 分区
3. 格式化
4. 挂载
5. 设置可以自动挂载

![image-20220225204947122](https://gitee.com/li-il/pics/raw/master/20220228184926.png)

### 查询系统整体磁盘使用情况

**整体磁盘查询**

`df -h`

![image-20220225205228173](https://gitee.com/li-il/pics/raw/master/20220228184929.png)

----------------------------------------------------------



**特定磁盘查询**

`du -h 目录`  查询指定目录的磁盘占用情况，默认为当前目录

-s 						指定目录占用大小汇总

-h						 带计量单位

-a 						含文件

-c 						列出明细的同时，增加汇总值

--max-depth=1	子目录深度

```
1. 查询 /opt 目录的磁盘占用情况，深度为1：
du -h --max-depth=1 /opt

2. 包含文件夹：
du -ha --max-depth=1 /opt

3. 列出明细，增加汇总值：
du -hac --max-depth=1 /opt
```

----------------------------------------------------------------



**磁盘情况指令**

1. 统计 /opt 文件夹下文件的个数

   `ls`

   `ls -l /opt`

   `ls -l /opt | grep "^-"`

   `ls -l /opt | grep "^-" | wc -l`

2. 统计 /opt 文件夹下目录的个数

   `ls -l /opt | grep "^d" | wc -l`

3. 统计 /opt 文件夹下文件的个数，包括子文件夹里的

   `ls -lR /opt | grep "^-" | wc -l`

4. 统计 /opt 文件夹下目录的个数，包括子文件夹里的

   `ls -lR /opt | grep "^d" | wc -l`

5. 以树状显示目录结构

   `tree 目录`

# 进程基本介绍

1. 在Linux中，每一个执行的程序都称为一个<u>进程</u>，每一个进程都分配一个ID号（pid，进程号）

2. 每个进程都是以两种方式存在的，<u>前台与后台</u>。

   前台：用户目前屏幕上可以操作的

   后台：实际在操作，但是屏幕上无法看到，通常以后台方式进行

3. 一般系统的服务都是以后台进程的方式存在，都会常驻在系统中，直到关机才结束

### 显示系统执行的进程

ps指令是用来查看目前系统中，有哪些正在执行，以及他们执行的状况，可以不加任何参数

ps显示的信息选项：

| 字段 | 说明                   |
| ---- | ---------------------- |
| PID  | 进程识别号             |
| TTY  | 终端机号               |
| TIME | 此进程所消耗的CPU时间  |
| CMD  | 正在执行的命令或进程名 |

`ps -a` 显示当前终端的所有进程信息

`ps -u` 以用户的格式显示进程信息

`ps -x` 显示后台进程运行的参数

### ps详解

#### 进程详解信息

可以使用 `ps -aux | more`查看进程详细信息

也可以使用grep进行过滤 `ps -aux | grep xxx`

![image-20220226123736480](https://gitee.com/li-il/pics/raw/master/20220228184941.png)

![image-20220226123617462](https://gitee.com/li-il/pics/raw/master/20220228184944.png)

#### 全格式详解所有进程

![image-20220226123844202](https://gitee.com/li-il/pics/raw/master/20220228184948.png)

以全格式显示当前的所有进程：`ps -ef | grep xxx`

### 终止进程

某个进程执行到一半需要停止时，或是已经消耗了很大的系统资源时，可以考虑关掉该进程

`kill [选项] 进程号` ：通过进程号杀死进程

`killall 进程名称` ：通过进程名称杀死进程，也支持通配符
`-9` 表示强迫进程立即停止

![image-20220226124209244](https://gitee.com/li-il/pics/raw/master/20220228184950.png)

案例一：需要踢掉某个非法登录用户

<img src="https://gitee.com/li-il/pics/raw/master/20220228184953.png" alt="image-20220226124523588" style="zoom:200%;" />



```
1. 踢掉某个非法登录用户
kill 进程号，比如kill 11421
说明：因为priv是先导进程，所以杀掉父进程，子进程也会被杀掉
2. 终止远程登陆服务sshd，在适当的时候再次重启sshd服务
kill sshd对应的进程号
/bin/systemctl start sshd.service
3. 终止多个gedit
killall gedit
4. 强制杀掉一个终端
kill -9 bash对应的进程号
```



### pstree指令

pstree [选项]：更加直观的查看进程信息

-p 		 显示进程的PID

-u		  显示进程的所属用户

```
应用实例：
1. 以树状的形式显示进程的pid
pstree -p
2. 以树状的形式显示进程的用户
pstree -u
3. 额外小知识 在root用户下，查看所有的用户和密码
cat /etc/passwd
```



# 服务管理

- 介绍

服务：本质就是进程，但是运行在后台，通常会监听某个端口，等待其他程序的请求，比如mysqld，sshd，防火墙等，又称为守护进程。



- service 管理指令

1. service 服务名【start、stop、restart、reload、status】

2. 在centOS7.0后服务大多数使用`systemctl`

3. service指令管理的服务在`/etc/init.d`查看

   `ls -l /etc/init.d`

4. 需要使用service指令，查看，关闭，启动network

   （需要在虚拟系统演示，因为网络连接会关闭）

5. 原理解释：在系统中，mysql客户端会去找Linux的端口号（3306），然后开启对应的后台进程

![image-20220226125639370](https://gitee.com/li-il/pics/raw/master/20220228184959.png)

### 查看服务名

- 使用`setup` 就可以看到所有的系统服务
- `ls -l /etc/init.d` 查看service指令管理的服务

### 服务的运行级别

![image-20220226125949280](https://gitee.com/li-il/pics/raw/master/20220228185001.png)

### 服务管理

- 介绍

  chkconfig指令可以给服务的各个运行级别设置自启动或自关闭

  chkconfig指令管理的服务在/etc/init.d上查看

- 基本语法

   `chkconfig --list` 

  `chkconfig --list | grep xxx`

  `chkconfig --level 5 服务名 on/off`

- 应用实例

  ```
  对network服务进行各种操作，把network在3运行级别关闭自启动
  chkconfig --level 3 network off
  ```

- chkconfig重新设置服务自启动或者关闭，需要重启reboot生效



### systemctl

- systemctl管理指令

  `systemctl 【start、stop、restart、status】 服务名`

  systemctl指令管理的服务可以在/usr/lib/systemd/system查看

  

- systemctl设置服务的自启动状态

  `systemctl list-unit-files [| grep 服务名]` 查看服务开机启动状态

  `systemctl enable 服务名` 设置服务开机启动

  `systemctl disable 服务名` 关闭服务开机启动

  `systemctl is-enabled 服务名` 查询某个服务是否是自启动的

- 应用案例

  ```
  查看当前防火墙的状况，关闭和重启防火墙
  systemctl status firewalld
  systemctl stop firewalld
  systemctl start firewalld
  上课演示，查看服务
  ls -l /usr/lib/systemd/system | grep fire
  systemctl list-unit-files | grep firewalld
  systemctl is-enabled firewalld
  systemctl is-enabled sshd.service
  ```

- 细节讨论

  关闭或重启防火墙后，立即生效。（telent 测试某个端口即可）。

  这种方式是临时生效，重启系统后，回归以前对服务的设置。

  如果希望某服务启动或关闭永久生效，就使用`systemctl [enabled/disabled] 服务名`。

### 打开或关闭指定端口

- firewall指令

​	`firewall-cmd --permanent --add-port=端口号/协议` 	打开端口

​	`	firewall-cmd --permanent --remove-port=端口号/协议`	关闭端口

​	`	firewall-cmd --reload`	重新载入，才能生效

​	`	firewall-cmd --permanent --query-port=端口号/协议	`查询端口是否开放

- 应用案例

  ```
  1. 启用防火墙，测试111端口是否能telent
  netstat -anp | more 查看对应的协议
  telnet 192.168.200.130 111
  2. 开放111端口
  firewall-cmd --permanent --add-port=111/tcp
  firewall-cmd --reload
  firewall-cmd --permanent --query-port=111/tcp
  3. 关闭111端口
  firewall-cmd --permanent --remove-port=111/tcp
  ```

### 动态监控进程

top与ps命令很相似，都是用来显示正在执行的进程，但是top在执行一段时间后，可以更新正在运行的进程。

`top【选项】`

| 选项    | 功能                                   |
| ------- | -------------------------------------- |
| -d 秒数 | 指定top命令每隔几秒更新，默认是3秒     |
| -i      | 使top不显示任何限制或僵死进程          |
| -p      | 指定监控进程ID来仅仅监视某个进程的状态 |



> ![image-20220226143535876](https://gitee.com/li-il/pics/raw/master/20220228185007.png)
>
> 三个值加起来除以三，如果在0.7以上，就需要注意了，说明系统负载比较大
>
> 在终端输入top，然后观察进程（P78）
>

### 动态监控

**交互操作说明**

| 操作 | 功能                          |
| ---- | ----------------------------- |
| P    | 以CPU使用率排序，默认就是此项 |
| M    | 以内存的使用率排序            |
| N    | 以PID排序                     |
| q    | 退出top                       |

**应用案例**

```
1. 监视特定用户，例如tom
top：输入此命令，然后回车，查看执行的进程
u：然后输入u，回车，在输入用户名，即可
2. 终止指定的进程，例如结束tom登录
top
k
输入要结束的进程ID号
9 （输入信号量，强制关闭）
3. 指定系统状态更新的时间（每隔10秒自动更新），默认是3秒
top -d 10
```

### 查看系统网络情况netstat

`netstat [选项]`

| 选项 | 功能                 |
| ---- | -------------------- |
| -an  | 按一定顺序排序输出   |
| -p   | 显示哪个进程正在调用 |

```
应用案例
查看服务名为sshd的服务的信息
netstat -anp | grep sshd
```

### 检测主机连接命令ping

是一种网络检测工具，主要是用于检测远程主机是否正常，或者是两部主机间的网线或网卡故障。

`ping 对方ip地址`



> ![image-20220226144452971](https://gitee.com/li-il/pics/raw/master/20220228185011.png)
>
> ESTABLISHED：已经成功建立连接的
>
> LISTEN：正在等待建立连接的
>
> 如果是tom用户logout，那么不会立刻断开，而是会有一个timewait的过程









# RPM管理

查看已安装的rpm列表 `rpm -qa | grep xxx`

举例：查看当前系统是否安装了firefox

![image-20220227154138600](https://gitee.com/li-il/pics/raw/master/20220228185014.png)

### rpm包的其他查询指令

`rpm -qa`	查询所安装的所有rpm软件包

`rpm -qa | more	`

`rpm -qa | grep xxx	`

`rpm -q 软件包名`	查询软件包是否安装

`rpm -qi 软件包名`	查询软件包信息

`rpm -ql 软件包名`	查询软件包中的文件

`rpm -qf 文件全路径名	`	查询文件所属的软件包

`rpm -qf /etc/passwd`	

`rpm -qf /root/install.log`	

（例如：软件包名=firefox）



### 卸载rpm包

`rpm -e RPM包名 //erase`

```
应用案例
删除firefox 软件包
rpm -e firefox
```

**细节讨论**

如果其他软件包依赖于要卸载的软件包，则卸载时会出现错误信息。

![image-20220227155157344](https://gitee.com/li-il/pics/raw/master/20220228185018.png)

如果要删除foo，可以使用`$rpm -e --nodeps foo`强制删除，但是一般不推荐，因为依赖于该软件包的程序可能无法运行

### 安装rpm包

`rpm -ivh RPM包全路径名称`

> i=install	安装
>
> v=verbose	提示
>
> h=hash	进度条

> **应用实例**
> 卸载和安装firefox
>
> 打开桌面上的驱动，然后进入Packages文件夹
>
> ![image-20220226145128664](https://gitee.com/li-il/pics/raw/master/20220228185021.png)
>
> 可以搜索，然后将要安装的软件（如firefox）粘贴到某个文件夹下（如/opt）
>
> ![image-20220226145149161](https://gitee.com/li-il/pics/raw/master/20220228185024.png)

### yum

**介绍**

yum是一个shell前端软件包管理器，基于rpm包管理，能够从指定的服务器自动下载rpm包并安装，可以自动处理依赖性关系，并且一次性安装所有以来的软件包

**yum的基本指令**

`yum list | grep xx软件列表`	查询yum服务器是否有需要安装的软件

`yum install xxx	`	安装指定的yum包

**应用实例**

```
使用yum的方式来安装firefox
rpm -r firefox
yum list | grep firefox
yum install firefox
```



