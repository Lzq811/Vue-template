# vue-demo

## 为项目实现不同的运行后台地址

1. 在项目根目录增加 ***.env.[定义的后台地址简称]** 文件，本例中增加的文件为 **.env.test**, **.env.prod**, **.env.dev** 如图所示,然后再对应不同的文件里面写上不同的地址。

2. 在根目录新建文件 **vue.config.js**, 代码内容如下

  ```bash
    const path = require('path');
    module.exports = {
      publicPath:'/',  // 公共路径
      // outputDir: process.env.NODE_ENV === "dev" ? 'devdist' : 'dist', // 不同的环境打不同包名
      outputDir: 'dist',
      lintOnSave:false,  // 关闭eslint
      productionSourceMap: true,  // 生产环境下css 分离文件
      devServer:{  // 配置服务器
        port:8081,
        open:true,
        https:false
      }
    }
  ```

3. 在项目的 *config/api/index.js* 中修改项目的  **BASE**

  ```bash
    # 注释次静态值
    // const BASE = 'http://xxxx:8080'
    # 换成下面的动态值
    const BASE = process.env.VUE_APP_URL
  ```

4. 根据不同的指令运行不同的地址
  "serve": "vue-cli-service serve --mode test"
  "serve--test": "vue-cli-service serve --mode test"
  "serve--dev": "vue-cli-service serve --mode dev"
  "serve--prod": "vue-cli-service serve --mode prod"

```bash
# 默认是test,根据下面指令运行不同的后台地址
yarn serve/serve--test/serve--dev/serve--prod
```

## 为项目配置不同的build地址

1. 同上(在上面已经完成，此处不用做更改)

2. 同上(在上面已经完成，此处不用做更改)

3. 同上(在上面已经完成，此处不用做更改)

4. 根据不同的指令运行不同的地址
  "build": "vue-cli-service build --mode prod"
  "build--test": "vue-cli-service build --mode test"
  "build--prod": "vue-cli-service build --mode prod"
