const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let devConfig = {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: [
                    "style-loader",
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
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ],

            },
        ]
    },
   
    devtool: 'inline-source-map', //开启js位置调试
    devServer: {
        contentBase: path.join(__dirname, 'dist'), 
        compress: true,
        hot: true,
        overlay: true, 
        open:true,
        publicPath: '/',
        host: 'localhost',
        port: '1200'
     },
     plugins: [
        new webpack.NamedModulesPlugin(), // 更容易查看（patch）的以来
        new webpack.HotModuleReplacementPlugin(), // 替换插件
        new BundleAnalyzerPlugin()
     ]
}

module.exports = merge(common, devConfig)