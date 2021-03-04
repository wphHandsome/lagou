1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。
答：
entry，指定了模块的入口，output输出结果。module，配置处理规则和解析策略。rosolve，配置webpack寻找模块的规则。plugin，配置扩展插件，扩展webpack的更多功能。devServer，配置DevServer，实现本地http服务、模块热替换、source map调试等。
Webpack构建是运行在node.js环境下，配置文件遵循CommonJS规范，webpack.config.js可以导出对象、Function、Promise函数、数组。Webpack从入口文件开始，识别出源码中的模块化导入语句，递归地找出所有依赖，然后把入口文件和所有依赖打包到一个单独的文件中
主要流程：初始化项目
配置文件webpack.config.js
配置项目入口、输出路径、开发模式等
配置不同资源处理的loader
配置plugin
执行打包命令


2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。
Loader用于对模块文件进行编译转换和加载处理，在module.rules数组中进行配置，它用于告诉Webpack在遇到哪些文件时使用哪些Loader去加载和转换，比如转换css和es6

module.exports导出一个函数，该函数默认参数一个参数source，在函数体中处理资源，通过return返回最终打包后的结果(这里返回的结果需为字符串形式)

Plugin用于扩展Webpack功能，实现原理是在构建流程里注入钩子函数。在plugins数组中进行配置。

插件必须是一个函数或包含apply方法的对象
在方法体内通过webpack提供的API获取资源做响应处理
将处理完的资源通过webpack提供的方法返回该资源