const webpack = require('webpack');
const path = require('path');
// 输出webpack的配置文件
module.exports = {
    // 入口 配置入口时取个别名 entry 为开始 output 为结束
    entry: {
        // bundle 打包
        'tqb-date-picker': './app/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        // 放在 /dist 目录下 windows的路径C:\  linux的路径为/var/root
        // __dirname得到绝对路径 是node的一个常量 dirname为目录名字

        path: path.resolve(__dirname, './dist')
    },
    module: {
        // 加载器 import .js bael-loader babel编译的功能 加载在entry和output之间
        // 当代码中需要用到 stylus 时，这时需要 stylus-loader 进行加载
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,  // 不管node_modules这个文件夹
                loaders: ["babel-loader", "eslint-loader"]

            }
        ]
    },
    // 不把jquery打包到自己的项目里
    externals: {
        'jquery': 'jQuery'
    },
    // 监听文件改变 docs为文本  build为编译文件
    watch: true,
    watchOptions: {
            ignored: /node_modules|dist|build|docs|css/,
            // 每秒监测文件
            poll: 1000
        }

}