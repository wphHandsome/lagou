## webpack-merge是用来合并webpack配置信息的

* webpack配置中的entry入口文件地址是相对于打包文件来算的地址

## node中有两种监视文件变换的方法，fs.watch 和 fs.watchFile，第三方包用chkidar比较好

* require加载有缓存，会把结果缓存，如果在更新不会重新调用了

* nuxt项目路由配置模式一定要配置成histroy模式，兼容前后端，服务端不兼容hash模式

* 服务端渲染只支持beforeCreate 和 created 

* serverPrefetch 是vue ssr 特殊为服务端渲染提供的一个生命周期钩子函数 

## vue获取父组件可以$parent,获取特定的子组件$ref,获取所有的子组件可以使用$children,组件嵌套过多，想获取父组件成员可以使用依赖注入的成员
## 依赖注入（父组件提供provide，需要使用父组件中的子组件成员使用inject注入）不是响应性的
 
* 如果父组件给子组件传递的数据，子组件没有用prop接收的话，会自动设置到子组件内部的最外层标签，如果是class或者style的话，会合并到最外层标签的class和style，在prop不能接收class和style会报错

* 如果子组件中不想继承父组件传入的非 prop 属性，可以使用 inheritAttrs 禁用继承，然后通过 v-bind="$attrs" 把外部传入的非 prop 属性设置给希望的标签上，但是这不会改变 class 和 style，$attrs 把父组件中的非prop属性绑定到内部组件

* v-on="$listeners"父组件给子组件传递的事件， 展开给子组件需要的元素，注意是DOM元素本身的事件，$listeners把父组件中的DOM对象的原生事件绑定到内部组件 

# storybook可视化组件展示平台，已交互式的方式展示组件 自动安装npx -p @storybook/cli sb init --type vue

# npm 不支持workspace(工作区)，yarn 支持 
# yarn 开启工作区 在项目的根目录的package.json添加  "private": true,"workspaces":["packages/*"]
# private": true意思是以后提交到github或者发布npm上时禁止把当前目录的根目录的内容提交
# "workspaces":["packages/*"]是指这个目录下的所有目录安装依赖
# 主要用于管理多个包

# lerna 是一个优化使用git 和 npm 管理多包仓库的工作流工具
# 用于管理具有多个包的javascript项目
# 他可以一键把代码提交到git和npm仓库

# npm config get registry查看当前的镜像源

# 安装依赖 -D是开发依赖，-W 是安装工作区的根目录中

# rimraf依赖可以删除指定文件