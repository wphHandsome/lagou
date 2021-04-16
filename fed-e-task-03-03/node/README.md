少用ref，会导致数据混乱
Mutation内部改变状态的时候都要调用
Action可以进行异步

非必要情况不使用vuex
大型的单页应用程序（是个视图依赖一个状态，来自不同的视图需要变更同一状态）

单页面应用首屏渲染时间长，不利于SEO,解决办法ssr（服务端渲染，也叫同构渲染）

搜索引擎搜到内容，客户端的搜不到

linux的scp命令可以将本地文件传输到服务器

pm2官方文档 https://pm2.io/
pm2常用命令
pm2 list  查看应用列表
pm2 start 启动应用
pm2 stop 停止应用
pm2 reload 重载应用（启动新的实例，原有的慢慢消灭）
pm2 restart 重启应用
pm2 delete 删除应用 