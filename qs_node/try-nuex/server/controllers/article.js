// 中间件函数 ctx表示context 上下文环境 next 交给下一个中间件
import mongoose from 'mongoose'
const Acticle = mongoose.model('Article')
export const getArticles = async(ctx, next) => {
    // articles 通过 await article.find()获取  返回的是游标 默认mongodb返回20条数据
    // 进行分页page 每页多少条limit

    // let page = ctx.params.page || 0
    // let limit = ctx.params.limit || 0  优化
    let { page = 1, limit = 15} = ctx.params
    // 查询从多少条开始查
    page = Number((page - 1)*limit) || 0
    limit = Number(limit) || 15

    // 数据库查询
    try {
        let total = await Article.find({
            publish: true
        }).exec()
        total = total.length
        // 有多少篇 查询真正的数据
        const data = await Acticle.find({
            publish: true
        })
        .skip(page) 
        .limit(limit)
        .sort({ 'createdAt': -1 })   //按更新排序
        .exec()
        ctx.body = {
            success: true,
            data: data,
            total: total
        }
    } catch(e) {
        ctx.body = {
            success: false,
            err: e,
            total: 0
        }
    }
}