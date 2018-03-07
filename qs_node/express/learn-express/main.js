var express = require('express');
var app = express();
// 这两行代码只执行一次
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
// middleware(中间件)拿出来 会循环执行多次，从上到下，执行一次，伺候好用户，像个薯片串
// 验证身份 log bodyparser cookie session 错误处理 路由处理
// 中间件除非遇到res

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1>');
});
// XX的小家
router.get('/:name', function(req, res) {
    res.send('<h1>Hello ' + req.params.name + '</h1>');
});
router.post('/', function(req, res) {
    var name = req.body.name;
    res.json({message: 'Hello ' + name});
})

//启动 使用一个中间件，有顺序
app.use('/home', router);

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// });

app.listen(port, function() {
    console.log(`web server在${port}端口伺服`);
});



