const path = require("path");
// const webpack = require("webpack");
const merge = require('webpack-merge');
const commonConfig = require('./webpack.base.config.js');
const PurifyCSS = require('purifycss-webpack');
const glob = require('glob-all');
const WorkboxPlugin = require('workbox-webpack-plugin'); // 引入 PWA 插件


module.exports = merge(commonConfig, {
    mode: "production", // 在生产环境下，代码会自动压缩
    output: {
        // 输出目录
        path: path.resolve(__dirname, "../dist"),
        // 文件名称
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },
    // source map就是帮助我们定位到错误信息位置的文件
    devtool: 'cheap-module-source-map', //线上环境配置
    // 代码分割按需加载、提取公共代码
    optimization: { 
        // 清除到代码中无用的js代码，只支持import方式引入，不支持commonjs的方式引入
        // 只要mode是production就会生效，develpoment的tree shaking是不生效的，因为webpack为了方便你的调试
        usedExports: true,
        splitChunks: {
            chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
            cacheGroups: {
                // 公共代码打包分组配置
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors'
                },
                // styles: { // 将css文件分割到单独的css chunk中
                //     name: 'styles',
                //     test: /\.css$/,
                //     chunks: 'all',
                //     enforce: true
                // }
            }
        },
    },
    plugins: [
        // 清除无用 css---生产环境---css-tree-shaking
        // new PurifyCSS({
        //     paths: glob.sync([
        //         // 要做 CSS Tree Shaking 的路径文件
        //         path.resolve(__dirname, '..', 'src/*.html'), // 需要对 html 文件进行 tree shaking
        //         path.resolve(__dirname, '..', 'src/*.js'),
        //         // path.resolve(__dirname, '..', 'src/**/*.jsx'),
        //     ])
        // }),
        // PWA配置，生产环境才需要，解决此情况：当第一次访问成功后，进行缓存，突然服务器挂了，仍然能够访问，起到预防
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true, // Service Worker 被激活后使其立即获得页面控制权
            skipWaiting: true  // 强制等待中的 Service Worker 被激活
        }),
     
    ]
});
