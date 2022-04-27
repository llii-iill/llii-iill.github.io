---
title: Linux-4
tags: [Linux]
index_img: "https://cdn.jsdelivr.net/gh/llii-iill/cd_images@main/img/20220427100447.png"
categories:
- [Linux]
sticky: 1.4
excerpt: Linux入门的第四课，包含【shell编程】等内容。
---

# Shell编程

**介绍**

shell是命令行解释器，为用户提供了一个向Linux内核发送请求来运行程序的界面系统和程序

**脚本格式要求**

以`#!/bin/bash`开头

脚本需要有可执行权限

**编写第一个shell脚本**

```
创建一个shell脚本，输出hello world
vim hello.sh
#!/bin/bash
echo "hello world"
```

**脚本常用的执行方式**

1. 输入脚本的绝对路径或相对路径

   首先要赋予hello.sh脚本的+x权限，再执行脚本

2. sh+脚本

   可以不用赋予脚本+x权限，直接执行即可

   例如：sh hello.sh（也可使用绝对路径）

> ```
> mkdir /root/shcode
> cd /root/shcode/
> ls
> vim hello.sh
> 【文件中】
> #!/bin/bash
> echo "hello,world~"
> 【退出文件】
> ```
>
> ![image-20220227160802938](https://gitee.com/li-il/pic_bed/raw/master/img/20220315204926.png)
>
> ![image-20220226151427317](https://gitee.com/li-il/pic_bed/raw/master/img/20220315204930.png)



## shell的变量

**介绍**

shell变量分为系统变量和用户自定义变量

系统变量：$HOME，$PWD等

显示当前shell中所有变量：`set`

**shell变量的定义**

定义变量 ： `变量=值`

撤销变量 ： `unset 变量`

声明静态变量 ：`readonly 变量`（注意：不能unset）

**应用实例**

> 创建文件
>
> `vim var.sh`
>
> 执行脚本
>
> `./var.sh`
>
> ![image-20220226151637198](https://gitee.com/li-il/pic_bed/raw/master/img/20220315204938.png)

**shell变量的定义规则**

变量名称可以由字母、数字和下划线组成，但是不能以数字开头

等号两侧不能有空格

变量名称一般习惯为大写

**将命令的返回值赋给变量**

A=\`date\` 反引号，运行里面的命令，把结果返回给变量Ａ

A=$(date) 等价上面的写法 

```
C=`date`
D=$(date)
echo "C=$C"
echo "D=$D"
```

### 设置环境变量

**基本语法**

将shell变量输出为环境变量（全局变量）

让修改后的配置信息立刻生效

查询环境变量的值

**应用案例**

在/etc/profile文件中定义TOMCAT_HOME环境变量

查看环境变量TOMCAT_HOME的值

在另一个shell程序中使用TOMCAT_HOME

> 注意：在输出TOMCAT_HOME之前，需要让其生效
>
> ```
> cd /opt/
> vim /etc/profile
> ```
>
> ![image-20220226212829099](https://gitee.com/li-il/pic_bed/raw/master/img/20220315204946.png)
>
> ```
> echo $TOMCAT_HOME
> source /etc/profile
> echo $TOMCAT_HOME
> ```
>
> ![image-20220226212908467](https://gitee.com/li-il/pic_bed/raw/master/img/20220315204950.png)
>
> 

**shell的多行注释**：

```
:<<!
……
!
```



### 位置参数变量

**介绍**

当我们执行shell脚本时，如果希望获取到命令行的参数信息，就要使用位置参数变量

例如：`./myshell.sh 100 200`， 就是一个执行shell的命令行，可以在myshell脚本中获取到参数信息

**基本语法**

![image-20220227162629961](https://gitee.com/li-il/pic_bed/raw/master/img/20220315204954.png)

**位置参数变量**

编写一个shell脚本position.sh，在脚本中获取到命令行的各个参数信息

```
vim position.sh
【文件中】
#!/bin/bash
echo "0=$0 1=$1 2=$2"
echo "所有的参数=$*"
echo "$@"
echo "参数的个数=$#"
【退出文件】
chmod u+x position.sh
./position.sh 100 200
```

### 预定义变量

**介绍**

预定义变量就是shell设计者定义好的变量，可以直接在shell脚本中调用

**基本语法**

`$$`	当前进程的进程号（PID）

`$!`	后台运行的最后一个进程的进程号（PID）

`$?`	最后一次执行的命令的返回状态，如果这个变量的值为0，则上一个命令正确执行；如果非0，则执行不正确。

**应用实例**

在shell脚本中简单实用预定义变量

```
vim perVar.sh
【文件中】
#!/bin/bash
echo "当前执行的进程id=$$"
# 以后台的方式运行一个脚本，并获取他的进程号
/root/shcode/position.sh &
echo "最后一个后台方式运行的进程id=$!"
echo "执行的结果是$?"
【退出文件】
chmod u+x perVar.sh
./ preVar.sh
```

## shell运算符

**基本语法**

1. `$((运算式))`   或   `$[运算式]`   或者  `expr m + n` 

2. expr运算符之间<u>要有空格</u>，如果希望将expr的值赋给某个变量，使用``

   如果没有空格，会被当成一个整体

3. `expr m - n` 

4. <u>\\*</u>  /  % 乘、除、取余

**应用实例**

```
计算（2+3）×4的值
请求出命令行的两个参数的和
```

```
vim oper.sh
【文件中】
#!/bin/bash
# 案例一
RES1=$(((2+3)*4))
echo "res1=$RES1"

RES2=$[(2+3)*4]
echo "res2=$RES2"

TEMP=`expr 2 + 3`
RES3=`expr $TEMP \* 4`
echo "res3=$RES3"

# 案例二
SUM=[$1+$2]
echo "sum=$SUM"

【退出文件】
chmod u+x oper.sh
./oper.sh
```

## 循环和判断

### 条件判断



**基本语法**

`[ condition ]` 

注意condition前后都有空格

非空返回true，可使用$?验证（0为true，大于1为false）



**常见判断**

1. 字符串比较 `=` 

2. 两个整数的比较

   | -lt  | 小于     |
   | ---- | -------- |
   | -le  | 小于等于 |
   | -eq  | 等于     |
   | -gt  | 大于     |
   | -ge  | 大于等于 |
   | -ne  | 不等于   |

3. 按照文件的权限进行判断

   | -r   | 有读的权限   |
   | ---- | ------------ |
   | -w   | 有写的权限   |
   | -x   | 有执行的权限 |

4. 按照文件类型进行判断

   | -f   | 文件存在并且是一个常规的文件 |
   | ---- | ---------------------------- |
   | -e   | 文件存在                     |
   | -d   | 文件存在并且是一个目录       |

**应用实例**

> `vim ifdemo.sh`
>
> 【文件中】
>
> ![image-20220226214023550](https://gitee.com/li-il/pic_bed/raw/master/img/20220315205000.png)
>
> 【退出文件】
>
> `chmod u+x ifdemo.sh`
>
> `./ifdemo.sh`



### 流程控制

#### if

**应用案例**

编写一个shell程序，如果输入的参数大于等于60则输出“及格了”，否则输出“不及格”

```
vim ifCase.sh
【文件中】
#！/bin/bash
if [ $1 -ge 60 ]
then 
	echo "及格了"
elif [ $1 -lt 60 ]
then 
	echo "不及格"
fi
【退出文件】
chmod u+x ifCase.sh
./ifCase.sh 70
```

#### case

**应用案例**

当命令行参数是1就输出“周一”，如果是2就输出“周二”，其他情况输出“other”

```
vim testCase.sh
【文件中】
#！/bin/bash
case $1 in
"1")
echo "周一"
;;
"2")
echo "周二"
;;
*)
echo "其他"
;;
esac
【退出文件】
chmod u+x testCase.sh
./testCase.sh 2
```

#### for

**案例一**：

打印命令行输入的参数

可以看出$*和$@的区别



```
vim testFor1.sh
【文件中】
#！/bin/bash
for i in "$*"
do
	echo "num is $1"
done
echo "================="
for j in "$@"
do 
	echo "num is $j"
done
【退出文件】
chmod u+x testFor1.sh
./testFor1.sh 100 200 300
```

**案例二**：

从1加到100的输出显示

```
vim testFor2.sh
【文件中】
#！/bin/bash
SUM=0
for(( i=1;i<=100;i++))
do
	SUM=$[$SUM+$i]
done
echo "总和SUM=$SUM"

echo "================="
SUM=0
for(( i=1;i<=$1;i++))
do
	SUM=$[$SUM+$i]
done
echo "自定义总和SUM=$SUM"
【退出文件】
chmod u+x testFor2.sh
./testFor2.sh
```

#### while

案例一：

从命令行输入一个数n，统计从1+…+n的值是多少

```
vim testWhile.sh
【文件中】
#！/bin/bash
SUM=0
i=0
while [ $i -le $1 ]
do
	SUM=$[$SUM+$i]
	i=$[$i+1]
done
echo "执行结果=$SUM"
【退出文件】
chmod u+x testWhile.sh
./testWhile.sh 10
```

#### read从控制台输入

read [选项] 参数

-p  指定读取值时的提示符

-t  指定读取值时等待的时间，如果没有在指定的时间输入，就不再等待了

**应用实例**

案例：

读取控制台输入的num值，在10秒内输入

```
vim testRead.sh
【文件中】
#！/bin/bash
read -t 10 -p "请输入一个数NUM1=" NUM1
echo "你输入的NUM1=$NUM1"
【退出文件】
chmod u+x testRead.sh
./testRead.sh
```

## 函数

shell有系统函数，也可以自定义函数

#### 系统函数

- basename

  功能：返回完整路径最后/部分，常用于获取文件名

  ```
  basename /home/aaa/test.txt
  返回test.txt
  basename /home/aaa/test.txt .txt
  返回test
  ```

- dirname

  功能：返回完整路径最后/前面的部分，常用于返回路径部分

  ```
  dirname /home/aaa/test.txt
  返回/home/aaa
  ```



#### 自定义函数

案例：计算两个参数的和

```
vim testFun.sh
【文件中】
#！/bin/bash
function getSum() {
	SUM=$[$n1+$n2]
	echo "和=$SUM"
}
read -p "请输入一个数n1=" n1
read -p "请输入一个数n2=" n2
getSum $n1 $n2
【退出文件】
chmod u+x testFun.sh
./testFun.sh 1 3
```

## Shell编程综合案例 数据库备份

**需求分析**

1. 每天凌晨2:30备份数据库hspedu到/data/backup/db
2. 备份开始和备份结束能够给出相应的提示信息
3. 备份后的文件要求以备份时间为文件名，并打包成.tar.gz的形式，比如:2021-03-12_230201.tar.gz
4. 在备份的同时，检查是否有10天前备份的数据库文件，如果有就将其删除。

**代码**

```
pwd （显示工作目录）
vim mysql_db_backup.sh
【文件中】
#！/bin/bash
# 备份目录
BACKUP=/data/backup/db
# 当前时间
DATETIME=$(date +%Y-%m-%d_%H%M%S)
# 数据库的地址
HOST=localhost
# 数据库用户名
DB_USER=root
# 数据库密码
DB_PW=root
# 备份的数据库名
DATABASE=hspedu

# 创建备份目录，如果不存在，就创建
[ ! -d "${BACKUP}/${DATETIME}" ] && mkdir -p "${BACKUP}/${DATETIME}"
# 备份数据库
mysqldump -u${DB_USER} -p${DB_PW} --host=${HOST} -q -R --databases ${DATABASE} | gzip > ${BACKUP}/${DATETIME}/$DATETIME.sql.gz

# 将文件处理成tar.gz
cd ${BACKUP}
tar -zcvf $DATETIME.tar.gz ${DATETIME}
# 删除对应的备份目录
rm -rf ${BACKUP}/${DATETIME}

# 删除10天前的备份文件
find ${BACKUP} -atime +10 -name "*.tar.gz" -exec rm -rf {} \;
echo "备份数据库${DATABASE} 成功~"
【退出文件】
chmod u+x mysql_db_backup.sh
./mysql_db_backup.sh 
```

