import Router from 'koa-router'
import config from '../config'
import db from '../models'

const user = require('../controllers/user')
const article = require('../controllers/article')
const router = new Router ({
    prefix: config.app.routerBaseApi
})
// url为 /api/user 把它交给路由进行相应的匹配
// => 再交给后端 controller 业务逻辑
// => model view 通信
router.get('/user', user.getUserInfo)
    .get('/articles/:page?/:limit?', article.getArticles)

export default router