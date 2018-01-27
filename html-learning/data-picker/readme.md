# 日历组件
  mocha 测试框架
  should 断言库 assertion 应该安装在devDependencies
  测试驱动开发 TDD
  git branch 新建某分支
  git checkout 
  master 默认分支 dev test 还有个人开发分支
  test 将进入我们的业务开发流程

  js babel 编译
  css stylus|sass|less
  预编译 stylus做的是减少我们的体力活， 有变量  for 和函数
  .styl => .css
  stylus兼容css语法  可以直接用css写stylus

  stylus -w -m styl/ -o css/
  生成css 的map文件 ，有了它，便于调试

  body magin 0 padding 0 称为 css 的 reset
  这个就是 normalize.css 一个npm包  安装一下就可以啦
  colors.css 提供了颜色
  前端 后端无界限

  stylus 模块化方式， @import 将任务模块化划分， 以_.styl 将会编译到原文件，不会生成新文件
  stylus 为了方便省写选择器 提供结构嵌套。 
  以tab 作为缩进， 不结束缩进 里面所有的代码单元都可以引用到父类选择器
  父子
  .parent
    .child
      .sun
  .parent .child
  css 的一个作用域块
  .parent
    &.parent_other_class
      ....
    
    ...
