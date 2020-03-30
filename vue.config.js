const path = require('path');

module.exports = {
    publicPath:'/',    // 公共路径
    // outputDir: process.env.NODE_ENV === "dev" ? 'devdist' : 'dist', // 不同的环境打不同包名
    outputDir: 'dist',
    lintOnSave:false,  // 关闭eslint
    productionSourceMap: true,  // 生产环境下css 分离文件
    devServer:{   // 配置服务器
        port:8081,
        open:true,
        https:false
    },
    // configureWebpack:{  // 覆盖webpack默认配置的都在这里
    //     resolve:{   // 配置解析别名
    //         alias:{
    //             '@':path.resolve(__dirname, './src'),
    //             '@h':path.resolve(__dirname, './src/assets/hotcss'),
    //             '@s':path.resolve(__dirname, './src/assets/style'),
    //             '@i':path.resolve(__dirname, './src/assets/images'),
    //         } 
    //     }
    // }
}