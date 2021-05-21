## webpack-merge是用来合并webpack配置信息的

* webpack配置中的entry入口文件地址是相对于打包文件来算的地址

## node中有两种监视文件变换的方法，fs.watch 和 fs.watchFile，第三方包用chkidar比较好

* require加载有缓存，会把结果缓存，如果在更新不会重新调用了

* nuxt项目路由配置模式一定要配置成histroy模式，兼容前后端，服务端不兼容hash模式

* 服务端渲染只支持beforeCreate 和 created 

* serverPrefetch 是vue ssr 特殊为服务端渲染提供的一个生命周期钩子函数 