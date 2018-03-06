const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const captchapng = require('captchapng');
// 中间件 koa和expres都有中间件概念  use为使用一个东西将二进制文件转化为可识别的json文件
// 表单提交的parser解析
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(cookieParser())
app.set('view engine', 'ejs') // 模版引擎

class VerificationCode {
    constructor(len=4, w = 80, h = 30) {
        this.w = w;
        this.h = h;
        this.len = len;
        this.randomNumber = null;
    }
    getRandomNumber() {
        let i = 0,
        res = [];
        while (i < this.len) {
            i++;
            res.push(Math.floor(Math.random()*10))
        }
        return  res.join('');
    }
    getImgbase64() {
        let cap;
        this.randomNumber = this.getRandomNumber();
        cap = new captchapng(this.w, this.h, this.randomNumber);
        cap.color(0,0,0,0);
        cap.color(80,80,80,255);
        let img = cap.getBase64(),
            imgbase64 = new Buffer(img, 'base64'); //二进制流
            return imgbase64;
    }
    // 显示的文字
    // 生成图片
    getJSON () {
        let imgbase64 = this.getImgbase64();
        return {
            number: this.randomNumber,
            base64: 'data:image/png;base64,' + imgbase64.toString('base64')
        }
    }
}
// let vercode = new VerificationCode();
// console.log(vercode.getImgbase64().toString('base64'));

app.get('/api', function(req, res) {
    res.json({
        data: [{
            moive: '女人国'
        }, {
            movie: '唐人街探案'
        }]
    })
})
app.post('/login', function(req,  res) {
    // 表单的数据在哪？ 
    // 如何将表单的数据跟随机的图形验证码的数据比较，若一样则完成验证
    console.log(req.cookies);
    console.log(req.body); 
    if(req.cookies.yzm === req.body.code) {
        res.send('验证码输入正确');
    } else {
        res.send('验证码输入失败');
    }
    
})

app.get('/', function(req, res) {
    // req 请求 res 返回 app为全局运用
    // 数据库查询 m 
    // 业务处理 c 
    // view v
    let code = new VerificationCode(),
        code_data = code.getJSON();
    // 种cookie
    res.cookie('yzm', code_data.number, { maxAge: 60000 })
    res.render('index', {
        title: '图形验证码',
        pic: code_data.base64   
    });
})
app.listen(3000);