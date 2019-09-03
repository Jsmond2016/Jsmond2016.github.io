const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
    entry:  [path.resolve(__dirname,"..", "src/index.js")],
    output: {
        // 输出目录
        path: path.resolve(__dirname, "../dist")
    },
    resolve: {
        //指定extension之后可以不用在require或是import的时候加文件扩展名,会依次尝试添加扩展名进行匹配
        extensions: ["*",".js", ".jsx"],
        // 配置别名可以加快webpack查找模块的速度
        alias: {
            "@": path.resolve(__dirname, "../src"),
            // pages: path.resolve(__dirname, "../src/pages"),
            // router: path.resolve(__dirname, "../src/router")
        }
    },
    module: {
        rules: [
            {
                // yarn add babel-loader @babel/core @babel/preset-env --dev
                // @babel/core-babel核心模块    @babel/preset-env-编译ES6等   @babel/preset-react-转换JSX
                // @babel/plugin-transform-runtime: 避免 polyfill 污染全局变量，减小打包体积
                // @babel/polyfill: ES6 内置方法和函数转化垫片，比如Map，Set，Promise等新的全局对象
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "happypack/loader?id=happyBabel" // 一个loader对应一个id
                    }
                ]
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,  // 编译css文件后单独抽离，不会编译进js文件
                    "css-loader", // 编译css
                    "postcss-loader", // 使用 postcss 为 css 加上浏览器前缀
                    "sass-loader" // 编译scss
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico)/,
                use: {
                    loader: "url-loader",
                    options: {
                        outputPath: "images/", // 图片输出的路径
                        limit: 10 * 1024
                    }
                }
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,  // 编译字体
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].min.[ext]',
                            limit: 5000, // fonts file size <= 5KB, use 'base64'; else, output svg file
                            publicPath: 'fonts/',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //每次打包时清除 dist 目录下旧版本文件
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ // 将js css 文件自动引入html
            filename: "index.html", // 最终创建的文件名
            template: path.resolve(__dirname,'..','public/index.html') , // 指定模板路径
            minify: {
                collapseWhitespace: true // 去除空白
            }
        }),
        // 因为node之上的webpack是单线程模型
        // Happy Pack 就能让Webpack做到这一点，它将任务分解给多个子进程去并发执行，子进程处理完后再将结果发送给主进程
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyBabel',
            //如何处理  用法和loader 的配置一样
            loaders: ['babel-loader'],
            //共享进程池threadPool: HappyThreadPool 代表共享进程池，即多个 HappyPack 实例都使用同一个共享进程池中的子进程去处理任务，以防止资源占用过多。
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true,
        }),
        // css单独提取
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        })
    ],
    performance: false // 关闭性能提示
};