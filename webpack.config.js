const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //抽出css文件插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //模板不用每次手动引入hashjs和css了
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //清除dist

module.exports = {
    entry: './src/index',
    mode: "development",
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true

                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')()
                            ]
                        }
                    },
                    { loader: "less-loader", options: { sourceMap: true } }
                ],

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                include: [path.resolve(__dirname, 'src/')],
                use: [
                    "file-loader",
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
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
        }),
        new OptimizeCssAssetsPlugin({}),
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true

        }),
        new HtmlWebpackPlugin({
            title: 'demo',
            filename: 'main.html',
            minify: {}
        }),
        new CleanWebpackPlugin({})
    ]
}