# h5-panel-isv

## 开发前必看
- [Hejia js-sdk 接口文档](https://open.home.10086.cn/jssdk/doc/andlink.html#.onMessage)
- [涂鸦云服务 API](https://developer.tuya.com/cn/docs/cloud)
- [涂鸦IoT开发平台 名词解释](https://developer.tuya.com/cn/docs/iot/terms?id=K914joq6tegj4)

## 项目信息
- 版本： 1.0.0
- 开发人：
- PM：
- UI：
- 测试：
- 需求文档地址：
- 项目中心地址：

---

## 地址
### 预发地址
### 线上地址
---

## 项目支持框架

- UI框架 [Antd Mobile](https://mobile.ant.design/zh/guide/quick-start) 
- 语法支持 [Typescript](https://www.tslang.cn/docs/home.html) 
- 路由 [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)

## 项目架构  
已省略一些不重要的文件，可以根据自己的习惯修改文件名，尽量按照当前结构
|--src   
&emsp;&emsp;|-- asset 资源  
&emsp;&emsp;|-- component 展示组件  
&emsp;&emsp;|-- container 容器组件    
&emsp;&emsp;|-- model 状态管理  
&emsp;&emsp;|-- router 路由配置  
&emsp;&emsp;|-- server 接口  
&emsp;&emsp;|-- util 通用方法
&emsp;&emsp;&emsp;&emsp;|-- common.ts 通用方法
&emsp;&emsp;&emsp;&emsp;|-- dp.ts 下发dp点的方法集合
&emsp;&emsp;&emsp;&emsp;|-- events.ts 事件中心
&emsp;&emsp;&emsp;&emsp;|-- hejia.ts 和家亲提供的接口二次封装
&emsp;&emsp;|-- index.tsx 入口文件  
|--.gitignore  
|--package.json  
|--README.md  
|--yarn.lock  

## 建议
1. 使用 yarn 作为包管理工具
2. 项目在 `node v16.4.0 (npm v7.18.1)` 下执行无误
