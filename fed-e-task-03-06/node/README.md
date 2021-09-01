# vue的路由懒加载，打包默认生成1.js,2.js，可以使用 component:() => import(/* webpackChunkName:'home' */) '@/views/index.vue'打包成注释名home.js

# vue @click.native 原生点击事件：
* 给vue组件绑定事件时候，必须加上native ，不然不会生效（监听根元素的原生事件，使用 .native 修饰符）
* 等同于在自组件中：子组件内部处理click事件然后向外发送click事件：$emit("click".fn)

# token过期时间是由后端设置的，默认24小时

# HTML5 中新增上传响应事件 原生叫：progress；axios包装的叫onUploadProgress
 
 # 基于RBAC的权限控制（角色控制）