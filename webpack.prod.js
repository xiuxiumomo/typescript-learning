const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //抽出css文件插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


let prodConfig = {
    mode: "production",
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
        })
        
    ]
}
module.exports = merge(common,prodConfig)
