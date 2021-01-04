# 《gigi 识字》客户端

##### 简介

小孩认字的 app

##### 如何使用

```js
npm i

npm run dev
```

##### 打包

```bash
npm run build
```

##### 部署

```shell
npm run publish
```

# 开发历程

- [x] OCR 生成 1000 个中文的字库。毕竟认字总归要有字典吧
- [x] 利用 node 的网络爬虫,把中文的读音爬下来。认字总归要有读音吧
- [x] 初期搭建项目骨架, 前后端分离。
- [x] 前端技术栈: webpack, react hook, ts, axios
- [x] 后端技术栈：node, nest，占时先不用数据库，数据先以 json 的文本存放
- [x] 基本的 UI，交互，流程跑通，部署上线
- [x] 优化翻页动画
- [x] 优化 UI，适配 ipad 端和 iphone 端，
- [x] 优化交互，减少按钮
- [ ] 优化加载，减少加载等待的时间
