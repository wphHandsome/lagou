# vue2.0响应式核心defineproperty
# vue3.0响应式核心Proxy
  * 可以监听动态新增属性
  * 可以监听删除的属性
  * 可以监听数组的索引和length属性

# vue2.0通过标记静态根节点，优化diff过程
# vue3.0标记和提升所有静态跟节点，diff的时候只需要对比动态节点的内容
  * fragments(升级vetur插件)
  * 静态提升
  * Patch flag
  * 缓存事件处理函数

# DomContentLoaded 事件的触发
   * DOMContentLoaded 事件在 html文档加载完毕，并且 html 所引用的内联 js、以及外链 js 的同步代码都执行完毕后触发。

# load 事件的触发
   * 当页面 DOM 结构中的 js、css、图片，以及 js 异步加载的 js、css 、图片都加载完成之后，才会触发 load 事件。

# 浏览器加载模块并执行是在DOM创建之后，并在DomContentLoaded之前

# vite特点
 * 快速冷启动
 * 按需编译
 * 模块热更新 （与模块总数无关）
 * vite 生产环境使用Rollup打包（基于ES Module的方式） 

# setup函数是 Composition API（组合API）的入口
  * 在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用
  * data() 变为 setUp()
  * 生命周期的函数只能写在setUp中
  * provide/inject 只能写在setUp


