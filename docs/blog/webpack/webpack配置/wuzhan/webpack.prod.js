const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//4版本后，可以使用MiniCssExtractPlugin
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const meerge = require('webpack-merge')
const common = require('./webpack.common')

let prodConfig = {
    // mode: process.env.NODE_ENV || 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true, //开始sourceMap
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss', //唯一标志overrideBrowserList
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({overrideBrowserslist: ['> 0.15% in CN']}) //为css样式添加前缀
                            ]
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
    plugins: [
        new MiniCssExtractPlugin({ //引入MiniCssExtractPlugin 替代style-loader，做css抽离。
            filename: '[name].[hash].css', // 设置最终输出的文件名
            chunkFilename: '[id].[hash].css'
        }),

    ],
    optimization: { //优化
        splitChunks: {
            //minSize > maxSize > maxInitialRequest/maxAsyncRequests
            // test:"",//选择特定模块
            chunks: "all",  //  还可以改为函数，返回boolean  initial async all
            minSize: 20000,
            maxSize: 200000,//小于这个标准不做抽离合并进其他js内
            minChunks: 1, //分割前模块被引用次数，不需要多次引用也可以被分割
            maxInitialRequests: 3, //一个入口的最大并行请求数量
            maxAsyncRequests: 5, //按需加载最大并行请求数量
            automaticNameDelimiter: '~',
            cacheGroups: {
                commons: {
                    name: 'commons',    //提取出来的文件命名
                    chunks: 'initial',  //initial表示提取入口文件的公共部分
                    minChunks: 2,       //表示提取公共部分最少的文件数
                    minSize: 0          //表示提取公共部分最小的大小
                },
                vue: {
                    test: /vue/,
                    filename: "[name].js",
                    chunks: "all", //
                    reuseExistingChunk: true, //缓存服用
                    priority: 0 //等级
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),//用于压缩和优化CSS 的处理器，默认是 cssnano.
                cssProcessorOptions: {safe: true, discardComments: {removeAll: true}},//discardComments 去除注释
                canPrint: true//表示插件能够在console中打印信息，默认值是true
            }),//css压缩

        ],
    }
}
module.exports = meerge(common, prodConfig);
