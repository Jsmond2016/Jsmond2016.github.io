const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//4版本后，可以使用MiniCssExtractPlugin
const webpack = require('webpack'); //开启热更新
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); //识别特定类别的webpack错误，并对它们进行清理、聚合和优先级排序，以提供更好的开发人员体验。
const meerge = require('webpack-merge')
const common = require('./webpack.common')

const devServerUrl = {
    host: 'localhost',
    port: '3301'
}

let devConfig = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss/,
                use: [
                    {
                        loader:'style-loader',//因为MiniCssExtractPlugin插件使用目前会导致HMR功能缺失。因此在平常的开发模式中，我们还是使用style-loader。
                        options: {
                            sourceMap: true //开始sourceMap
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true //开始sourceMap
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    devtool: 'inline-source-map', //js source-map
    devServer: {
        clientLogLevel: 'warning', // 可能的值有 none, error, warning 或者 info（默认值)
        hot: true,  // 启用 webpack 的模块热替换特性, 这个需要配合： webpack.HotModuleReplacementPlugin插件
        contentBase: path.join(__dirname, "dist"), // 告诉服务器从哪里提供内容， 默认情况下，将使用当前工作目录作为提供内容的目录
        compress: true, // 一切服务都启用gzip 压缩
        host: devServerUrl.host, // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问 0.0.0.0
        port: devServerUrl.port, // 端口
        open: true, // 是否打开浏览器
        overlay: {  // 出现错误或者警告的时候，是否覆盖页面线上错误消息。
            warnings: true,
            errors: true
        },
        publicPath: '/', // 此路径下的打包文件可在浏览器中访问。
        proxy: {  // 设置代理
            "/api": {  // 访问api开头的请求，会跳转到  下面的target配置
                target: "http://192.168.0.102:8080",
                pathRewrite: {"^/api" : "/mockjsdata/5/api"}
            }
        },
        quiet: true, // necessary for FriendlyErrorsPlugin. 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
        watchOptions: { // 监视文件相关的控制选项
            poll: true,   // webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询. poll: true。当然 poll也可以设置成毫秒数，比如：  poll: 1000
            ignored: /node_modules/, // 忽略监控的文件夹，正则
            aggregateTimeout: 300 // 延迟防抖，默认值，当第一个文件更改，会在重新构建前增加延迟
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),  // 更容易查看(patch)的依赖 热加载的
        new webpack.HotModuleReplacementPlugin(),  // 替换插件

        new FriendlyErrorsWebpackPlugin({ //识别特定类别的webpack错误，并对它们进行清理、聚合和优先级排序，以提供更好的开发人员体验。
            compilationSuccessInfo: {
                messages: [
                    `Your application is running here: http://${devServerUrl.host}:${devServerUrl.port}`
                ]
            },
            clearConsole: true
        }),
    ]
}

module.exports = meerge(common, devConfig);
