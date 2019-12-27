const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.argv.indexOf('--mode==production') === -1;
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        filename: 'output.[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['cache-loader', 'thread-loader', {
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false
                        }
                    }
                }]
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    {
                        loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../dist/css',
                            hmr: devMode
                        }
                    },
                    'css-loader', 'postcss-loader','less-loader']
            },
            
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10240,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': path.resolve(__dirname, '../src')
        },
        extensions: ['*', '.js', '.json', '.vue']
    },
    devServer: {
        port: 3000,
        hot: true,
        contentBase: '../dist/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].css",
        }),
        new vueLoaderPlugin(),
        

    ]

}