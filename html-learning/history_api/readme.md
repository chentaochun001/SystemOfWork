restful 网站的本质就是提供资源访问
url => 资源  是一一对应关系
?queryString1=a&queryString2=b
backend 来做 路由规则 route
mvc 解析url ，url会映射路由的一个route 跟后端脚本对应的controller
url:
/book/123456
/api

fontend 接管一切
前端跟服务器的相关性
url => 资源 缺点， http是个短连接
href 点击资源 ，每次点击都要刷新页面 用户体验不OK PC时代没有问题 在移动时代就存在问题
https://m.taobao.com/#index  前端url
https://m.taobao.com/#home
html5 historyAPI 
vue的核心为提高用户体验
前端url 每一次的url不是刷新式的跳转  而是切换一张小卡片 好像整个页面都没动  
也称为单页应用 SPA single page application
如何动态更新界面？
当url 启动后，前端url规则启动，交给ajax
与vue的联系？ url => page => 组件


