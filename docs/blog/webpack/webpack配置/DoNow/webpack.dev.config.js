const path = require("path");
const merge = require('webpack-merge')
const commonConfig = require('./webpack.base.config.js')
const webpack = require("webpack");

module.exports = merge(commonConfig, {
    mode: "development",
    entry: ["react-hot-loader/patch"],
    // 正确的配置source map，能够提高开发效率，更快的定位到错误位置。
    devtool: 'cheap-module-eval-soure-map', //开发环境配置
    output: {
        // 输出目录
        path: path.resolve(__dirname, "../dist"),
        // 文件名称
        filename: "bundle.js",
        chunkFilename: '[name].js'
    },
    plugins: [
        //开启HMR(热替换功能,替换更新部分,不重载页面！) 相当于在命令行加 --hot
        new webpack.HotModuleReplacementPlugin(),
        // 指定环境,定义环境变量
        new webpack.DefinePlugin({
            'process.env': {
                VUEP_BASE_URL: '/'
            }
        })
    ],
    // 解决 Entrypoint undefined = index.html 问题
    // stats: {
    //     children: false
    // },

    // 在本地为搭建了一个小型的静态文件服务器，有实时重加载的功能，为将打包生成的资源提供了web服务
    devServer: {
        hot: true, // 实现局部更改，而不会影响其他部分的状态，eg. 更改按钮文字，不会影响到经过点击添加到 6 的模块，使其初始化为 0
        contentBase: path.resolve(__dirname, "../dist"),
        host: "localhost", // 可以使用手机访问
        port: 3000,
        historyApiFallback: true, //  该选项的作用所有的404都连接到index.html
        proxy: {
            // 代理到后端的服务地址
            "/api": "http://localhost:3000"
        }
    }
});
