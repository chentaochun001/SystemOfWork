const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname + "/src/main.js"),
    output: {
        path: path.resolve(__dirname + "/dist/js"),
        filename: "bundle.js",
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
    },
    // 开发时的webserver
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        inline: true  //实时刷新
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}