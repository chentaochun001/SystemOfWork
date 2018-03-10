mongodb NOSQL 数据库
文档数据库 区别于关系型数据库
doc 里的内容是json，数据以json进行存储
支持全面JavaScript的解析，它的shell命令行可以进行增删改查

D:/mongodb/bin/mongo.exe
mongod.exe

mongod -v
mongod --dbpath ../db/  启动进程
默认端口27017 把bin目录添加环境变量

mongo shell  
对数据库执行增删改查用mongo

show dbs 展示数据库，列出
use tutorial 选用数据库 
use test 切换到test数据库  使用数据库
use tutorial 切换回来
show collections 展示表格 users
$and
update $set修改
$unset


用命名空间的方式
数据表 collection 表示集合
mongodb不需要先申明，直接保存就可以创建
mongodb不用新建表格  只需建数据就行
column 可以冗余
一个集合以s复数结束
db.users.insert({username: 'amy'});

基本概念：
db.users.find({})  表示在users表里查找所有数据
db.users.find({})
show collections 查询数据表
db.users.count()  查询users里有多少条数据
db.users.insert({username: 'amy'}); 插入数据
退出后，要先进入数据库   use test

MongoDB基本操作：
显示所有数据库： show dbs
显示所有数据表： show collections
选用一个数据库 ： use + 数据库名
插入users里面的一条数据 ：db>+数据库名+.insert({数据}); 比如：  db.users.insert({username:'smith'});
查找某个数据库的 数据 ： db.+数据库名+.find({条件});  比如： db.users.find({});
多行查询 ：
      > db.users.find({
      ... $and:[
      ... {_id:ObjectId("5aa34e26b74577826bcdd650")},
      ... {username: 'Ashley'}
      ... ]});
更新某个数据表（新增数据）：
      > db.users.update({username:"F"}
      ... ,{$set:
      ... {country: "Canada"}
      ... })
更改某个数据表的一行数据：
      > db.users.update({username:"F"} 
      ... ,{$set: 
      ... {username: "Fan"} 
      ... });
删除某个数据里面的一行数据：
      > db.users.update(
      ... {username:'Fan'},
      ... {$unset:{country:1}}
      ... );


