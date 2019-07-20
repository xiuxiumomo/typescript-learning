const path = require('path');
function resolveSrc(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: '0.0.0.0',
        port: 8080, // 服务端口
        https: false,
        hotOnly: false,
        proxy: {
            "/api": {
                target: "https://cnodejs.org",
                changeOrigin: true,
                ws: true,
                pathRequiresRewrite: {
                    "^/api": "/"
                  }
              },
        },
        before: app => { }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolveSrc('src'))
    }

}
