const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require("vue-loader");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//自动删除

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    module: {
        noParse: /jquery/,//不去解析jquery中的依赖库
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,// 加快编译速度，不包含node_modules文件夹内容
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/transform-runtime']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000,
                            outputPath: "image"
                        }
                    },
                    {
                        loader: 'image-webpack-loader', // 先进行图片优化
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js', //这里需要设置别名，index.js 和 main.js内才可以访问。
            '@': path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),//清空插件
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,//删除空白符
                removeComments: true,//删除注释
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new VueLoaderPlugin(),//vue插件
    ],
    externals: { //剥离了那些不需要改动的依赖模块
        jquery: 'jQuery',
        // vue: 'Vue',
    },
}
