## webpack配置less 
~~~
//自动添加前缀postcss-loader autoprefixer
//sourceMap作用查看样式是来自哪个文件的。
 module: {
        rules: [
            {
                test: /\.(le|c)ss$/,
                use: ["style-loader",
                    { loader: "css-loader", options: { sourceMap: true } },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')() //自动添加前缀
                            ]
                        }
                    },
                    { loader: "less-loader", options: { sourceMap: true } } //引入less-loader
                ]
            }
        ]
    }
~~~


## 1.webpack开启sourceMap和添加css3前缀
- 安装postcss npm install postcss-loader autoprefixer -D
- 在package.json中配置 
~~~

 //package.json
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
  
  //webpack中配置
     module: {
            noParse: function(content) {
                return /jquery|lodash/.test(content)
            },
            rules: [
                {
                    test: /\.(le||sc|c|sa)ss$/,
                    use: [
                        'style-loader',
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                sourceMap: true,
                                plugins: loader => [
                                    require('autoprefixer')()
                                ]
    
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
    
            ]
        }
~~~
## 2.webpack将css抽取成单独文件 不抽的话只有一个main.js
> 在src/index.js中import的css/scss文件都会在html中写入style,还可以单独打包成css文件
npm install mini-css-extract-plugin --save-dev引入成功后就不可以使用style-loader,替换成 MiniCssExtractPlugin.loader,

~~~
module: {
        noParse: function(content) {
            return /jquery|lodash/.test(content)
        },
        rules: [
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')()
                            ]

                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
~~~
## 3.压缩css和js
### 3.1压缩css
为了压缩打包后的体积，我们经常需要优化css和js文件，使用optimize-css-assets-webpack-plugin 压缩css
npm install optimize-css-assets-webpack-plugin --save-dev
引入const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
 
 
### 3.2压缩js
使用 uglifyjs-webpack-plugin npm install uglifyjs-webpack-plugin --save-dev
引入const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


其中 UglifyJsPlugin 的参数：

cache：当 JS 没有发生变化则不压缩；
parallel：是否启用并行压缩；
sourceMap：是否启用 sourceMap；

## 4.为文件名添加hash值
打包出来的css,js都是静态文件，就存在缓存问题，可以给文件添加hash值，防止文件缓存

### 4.1添加hash值
直接在webpack.config.js中添加[hash]
~~~
module.exports = {

    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: {
         new MiniCssExtractPlugin({
              filename: '[name].[hash].css',
              chunkFilename: '[id].[hash].css'
         }),
    }
}
~~~
### 4.2动态引入打包后的文件
由于文件名字是动态的，不可能index.html中手动去修改,HtmlWebpackPlugin插件，可以帮助我们引入动态的文件
~~~
npm install html-webpack-plugin --save-dev
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    title: "leo study!",   // 生成的文件标题
    filename: "main.html", // 最终生成的文件名
    minify: { // 压缩选项
      collapseWhitespace: true, // 移除空格
      removeComments: true, // 移除注释
      removeAttributeQuotes: true, // 移除双引号
    }
  })
],
~~~
## 5.webpack清理目录插件
在每一次的打包都会新生成带hash的js和css文件，导致越来越多，使用clean-webpack-plugin插件来说清空dist
~~~
npm install clean-webpack-plugin --save-dev
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
plugins: [
  new CleanWebpackPlugin()
],
~~~

## 6.webpack图片优化处理
### 6.1图片处理
直接引入图片会报错，需要使用 npm install file-loader -D
~~~
npm install file-loader --save-dev
module: {
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/,
    use: ["file-loader"]
  }]
},

.box{
background: url('./../assets/logo.jpg)
}
~~~
### 6.2图片优化
对图片压缩和优化使用image-webpack-loader插件来处理（25k->15k）
~~~
npm install image-webpack-loader --save-dev

module: {
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/,
    include: [path.resolve(__dirname, 'src/')],
    use: ["file-loader",{
        loader: "image-webpack-loader",
        options: {
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: '65-90', speed: 4 },
          gifsicle: { interlaced: false },
          webp: { quality: 75 }
        }
      },
    ]
  }]
},
~~~

## 7.webpack图片base64和字体处理
###7.1图片base64处理
url-loader类似于file-loader,可以将url地址对应的文件，打包成base64的DataURL,提高访问效率。
~~~
注意：这里需要将前面配置的 image-webpack-loader 先删除掉，在使用 url-loader。
npm install url-loader --save-dev
module: {
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/,
    include: [path.resolve(__dirname, 'src/')],
    use: [
      {
        loader: 'url-loader', // 根据图片大小，把图片转换成 base64
          options: { limit: 10000 }, 
      },
      {
        loader: "image-webpack-loader",
        options: {
          mozjpeg: { progressive: true, quality: 65 },
          optipng: { enabled: false },
          pngquant: { quality: '65-90', speed: 4 },
          gifsicle: { interlaced: false },
          webp: { quality: 75 }
        }
      },
    ]
  }]
},

~~~
### 7.2字体处理

~~~
module: {
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    include: [path.resolve(__dirname, 'src/')],
    use: [ 'file-loader' ]
  }
},
~~~
## 8webpack配置合并和提取公共配置
> 在开发环境和线上环境中development和production中配置文件有很多得不同，但也有部分的相同使用webpack-merge工具将两份文件合并

~~~
npm install webpack-merge -D
~~~

