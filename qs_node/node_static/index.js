// node 的核心模块
const http = require('http');
const url = require('url');
const fs = require('fs');   //fs读取某个文件
const path = require('path');  //文件在哪
const config = require('./config');  //端口配置
const mime = require('mime');
const handlebars =  require('handlebars');

const server = http.createServer();  //创建web server 服务器
server.on('request', request.bind(this));

function request(req, res) {
    const { pathname } = url.parse(req.url);
    let filepath = path.join(config.root, pathname); 
    // filepath 为static\
    // config.root为 /static
    //rootPath为static\index.html
    //返回头部信息 mime.getType(rootPath)为text/html
    if(pathname === '/') {
        const rootPath = path.join(config.root, 'index.html')  
        // 获取文件的类型 有text/html png text/css  mime  mime.getType获取文件类型
        // header http 响应头 状态码， 响应体
        res.setHeader('Content-Type', mime.getType(rootPath)+';charset=utf-8');  
        return fs.createReadStream(rootPath).pipe(res);
    }

    // 文件或目录 打开文件系统 接口  stats文件的详情
    fs.stat(filepath, (err, stats) => {
        if(err) {
            res.end('not found');
            return;
        }
        if (stats.isDirectory()) {
            console.log('目录');
            // 得到所有文件
            let files = fs.readdirSync(filepath);
            // console.log(files);
            files = files.map(file => ({
                name: file,
                url: path.join(pathname, file),  //join把路径连接
            }));
            // 如何输出文件列表 handlebars
            // 先读取html 塞进去变量 compile
            // list函数返回compile之后的模板
            let html = list()({
                title: pathname,
                files
            })
            res.setHeader('Content-Type', 'text/html');
            res.end(html);

            // console.log(files);
            // readFile异步 readFileSync阻塞 node为异步无阻塞
        } else {
            res.setHeader('Content-Type', mime.getType(filepath) + ';charset=utf8');
            fs.createReadStream(filepath).pipe(res);
        }
    })

    function list() {
        // __dirname 当前项目的绝对路径
        let tmpl = fs.readFileSync(path.resolve(__dirname, 'template', 'list.html'), 'utf8');
        return handlebars.compile(tmpl);
        console.log(tmpl);
    }
    // const url.parse(req.url);
    // 访问/时 => 访问index.html
    // 识别出/ 是path
    // js 熟悉DOM 不熟悉后端的global
    // http://localhost:3000/index.html?a=c
    // /images/a.png  /template/*.html
    
}
server.listen(3000, () => {
    console.log(`静态文件服务器启动成功，访问localhost:${config.port}`)
})
