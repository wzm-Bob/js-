1. cd. / xx 切换当前目录的xx下 cd..退回上级目录
2. ls
xx - l： 列出长数据串， 包含文件的属性与权限数据等
xx - a： 列出全部的文件， 连同隐藏文件（ 开头为.的文件） 一起列出来（ 常用）
xx - d： 仅列出目录本身， 而不是列出目录的文件数据
xx - h： 将文件容量以较易读的方式（ GB， kB等） 列出来
xx - R： 连同子目录的内容一起列出（ 递归列出）， 等于该目录下的所有文件都会显示出来
3. grep查找筛选命令
xx - a： 将binary文件以text文件的方式查找数据
xx - c： 计算找到‘ 查找字符串’ 的次数
xx - i： 忽略大小写的区别， 即把大小写视为相同
xx - v： 反向选择， 即显示出没有‘ 查找字符串’ 内容的那一行
xx ls - l | grep - i file 配合管道符
# 取出文件 / etc / man.config中包含MANPATH的行， 并把找到的关键字加上颜色
grep--color = auto 'MANPATH' / etc / man.config
4. find 查找命令 参数较多强大
6. cp
xx - a： 将文件的特性一起复制
xx - p： 连同文件的属性一起复制， 而非使用默认方式， 与 - a相似， 常用于备份
xx - i： 若目标文件已经存在时， 在覆盖时会先询问操作的进行
xx - r： 递归持续复制， 用于目录的复制行为
xx - u： 目标文件与源文件有差异时才会复制
7. mv移动
8. rm 删除
9. ps将某个时间点的进程运行情况选取下来并输出
10. kill 杀死
11. fill 用于判断接在file命令后的文件的基本数据
12. tar命令 对文件进行打包， 默认情况并不会压缩
13. cat命令 查看文本文件的内容
14. chgrp命令 用于改变文件所属用户组
15. chown命令 用于改变文件的所有者， 与chgrp命令的使用方法相同， 只是修改的文件属性不同
16. chmod命令 该命令用于改变文件的权限

进入root sudo - i
cp - r a.js dir
tar - zxvf 解压
yum - y install 安装
cp JZFP - web.war_20200421 JZFP - web.war
进入bin. / shuntdown.sh 停服务. / startup.sh 启动服务
ps - ef | grep tomcat 查看端口号 kill 端口号 杀死进程