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
  * setup 这个函数是在beforeCreate和created之前运行的,所以你可以用它来代替这两个钩子函数。
  * 在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用
  * data() 变为 setUp()
  * 生命周期的函数只能写在setUp中
  * provide/inject 只能写在setUp

# trim方法去除前后空格

# vue双击按钮显示相应内容 ，@dblclick=“事件名”

# ref和reactive的区别
 * ref可以把基本数据类型转换成响应式数据
 * ref返回的对象，重新赋值成对象也是响应式的
 * reactive返回的对象，重新赋值丢失响应式
 * reactive返回的对象不可以结构

# WeakMap和Map的区别
  * 如果是普通的值类型则不允许。比如：字符串，数字，null，undefined，布尔类型。而Map结构是允许的，这就是两者的不同之处，谨记。
  * 跟Map一样，WeakMap也拥有get、has、delete方法，用法和用途都一样。不同地方在于，WeakMap不支持clear方法，不支持遍历，也就没有了keys、values、entries、forEach这4个方法，也没有属性size。
  * 键名中的引用类型是弱引用，你永远不知道这个引用对象什么时候会被垃圾回收机制回收了，如果这个引用类型的值被垃圾机制回收了，WeakMap实例中的对应键值对也会消失。

# instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。
