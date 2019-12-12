const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //模板不用每次手动引入hashjs和css了
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //清除dist

module.exports = {
    entry: './src/index',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                include: [path.resolve(__dirname, 'src/')],
                use: [
                    {
                        loader: 'url-loader', //图片会转成base64
                        options: { limit: 10000 }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: { progressive: true, quality: 65 },
                            optipng: { enable: false },
                            pngquant: { quality: '65-90', speed: 4 },
                            gifsicle: { interlaced: false },
                            webp: { quality: 75 }
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|eto|ttf|otf)$/,
                include: [path.resolve(__dirname, "src/")],
                use: ["file-loader"]
            }
        ]
    },
    //配置别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname,'src/')
        }
    },
    externals: {
        jquery: 'jQuery', //不把jquery打包进来而使用cdn节点
        lodash: '-'
    },
    plugins: [  
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'main.html',
            minify: {}
        }),
        new CleanWebpackPlugin({})
    ]
}