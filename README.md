lagou

# github wphHandsome 的令牌 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
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

学习

- 多重判断时使用 Array.includes
- 更少的嵌套，尽早 return
- 使用默认参数和解构
- 倾向于遍历对象而不是 Switch 语句
- 对 所有/部分 判断使用 Array.every & Array.some

# 例子

function test(fruit) {
if (fruit == 'apple' || fruit == 'strawberry') {
console.log('red');
}
}

function test(fruit) {
const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
if (redFruits.includes(fruit)) {
console.log('red');
}
}

# 接口代理配置

proxyTable: {
'/api': {// '/api':匹配项
target: 'http://192.168.10.183:8103',// 接口的域名
　　　　 // secure: false,// 如果是 https 接口，需要配置这个参数
changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
　　　　　// pathRewrite: {// 如果接口本身没有/api 需要通过 pathRewrite 来重写了地址
　　　　　// '^api': ''
// }
}
}

# get 请求传参长度的误区、get 和 post 请求在缓存方面的区别

误区：我们经常说 get 请求参数的大小存在限制，而 post 请求的参数大小是无限制的。
参考答案
实际上 HTTP 协议从未规定 GET/POST 的请求长度限制是多少。对 get 请求参数的限制是来源与浏览器或 web 服务器，浏览器或 web 服务器限制了 url 的长度。为了明确这个概念，我们必须再次强调下面几点:
HTTP 协议 未规定 GET 和 POST 的长度限制
GET 的最大长度显示是因为 浏览器和 web 服务器限制了 URI 的长度
不同的浏览器和 WEB 服务器，限制的最大长度不一样
要支持 IE，则最大长度为 2083byte，若只支持 Chrome，则最大长度 8182byte
补充补充一个 get 和 post 在缓存方面的区别：
get 请求类似于查找的过程，用户获取数据，可以不用每次都与数据库连接，所以可以使用缓存。
post 不同，post 做的一般是修改和删除的工作，所以必须与数据库交互，所以不能使用缓存。因此 get 请求适合于请求缓存。

# npm 模块安装机制，为什么输入 npm install 就可以自动安装对应的模块？

参考答案

1. npm 模块安装机制：
   发出 npm install 命令
   查询 node_modules 目录之中是否已经存在指定模块
   npm 向 registry 查询模块压缩包的网址
   下载压缩包，存放在根目录下的.npm 目录里
   解压压缩包到当前项目的 node_modules 目录
   若存在，不再重新安装
   若不存在
2. npm 实现原理
   输入 npm install 命令并敲下回车后，会经历如下几个阶段（以 npm 5.5.1 为例）：
   执行工程自身 preinstall
   当前 npm 工程如果定义了 preinstall 钩子此时会被执行。
   确定首层依赖模块
   首先需要做的是确定工程中的首层依赖，也就是 dependencies 和 devDependencies 属性中直接指定的模块（假设此时没有添加 npm install 参数）。
   工程本身是整棵依赖树的根节点，每个首层依赖模块都是根节点下面的一棵子树，npm 会开启多进程从每个首层依赖模块开始逐步寻找更深层级的节点。
   获取模块
   获取模块是一个递归的过程，分为以下几步：
   获取模块信息。在下载一个模块之前，首先要确定其版本，这是因为 package.json 中往往是 semantic version（semver，语义化版本）。此时如果版本描述文件（npm-shrinkwrap.json 或 package-lock.json）中有该模块信息直接拿即可，如果没有则从仓库获取。如 packaeg.json 中某个包的版本是 ^1.1.0，npm 就会去仓库中获取符合 1.x.x 形式的最新版本。
   获取模块实体。上一步会获取到模块的压缩包地址（resolved 字段），npm 会用此地址检查本地缓存，缓存中有就直接拿，如果没有则从仓库下载。
   查找该模块依赖，如果有依赖则回到第 1 步，如果没有则停止。
   模块扁平化（dedupe）
   上一步获取到的是一棵完整的依赖树，其中可能包含大量重复模块。比如 A 模块依赖于 loadsh，B 模块同样依赖于 lodash。在 npm3 以前会严格按照依赖树的结构进行安装，因此会造成模块冗余。
   从 npm3 开始默认加入了一个 dedupe 的过程。它会遍历所有节点，逐个将模块放在根节点下面，也就是 node-modules 的第一层。当发现有重复模块时，则将其丢弃。
   这里需要对重复模块进行一个定义，它指的是模块名相同且 semver 兼容。每个 semver 都对应一段版本允许范围，如果两个模块的版本允许范围存在交集，那么就可以得到一个兼容版本，而不必版本号完全一致，这可以使更多冗余模块在 dedupe 过程中被去掉。
   比如 node-modules 下 foo 模块依赖 lodash@^1.0.0，bar 模块依赖 lodash@^1.1.0，则 ^1.1.0 为兼容版本。
   而当 foo 依赖 lodash@^2.0.0，bar 依赖 lodash@^1.1.0，则依据 semver 的规则，二者不存在兼容版本。会将一个版本放在 node_modules 中，另一个仍保留在依赖树里。
   举个例子，假设一个依赖树原本是这样：
   node_modules
   -- foo
   ---- lodash@version1
   -- bar
   ---- lodash@version2
   假设 version1 和 version2 是兼容版本，则经过 dedupe 会成为下面的形式：
   node_modules
   -- foo
   -- bar
   -- lodash（保留的版本为兼容版本）
   假设 version1 和 version2 为非兼容版本，则后面的版本保留在依赖树中：
   node_modules
   -- foo
   -- lodash@version1
   -- bar lodash@version2

----安装模块
这一步将会更新工程中的 node_modules，并执行模块中的生命周期函数（按照 preinstall、install、postinstall 的顺序）。
执行工程自身生命周期
当前 npm 工程如果定义了钩子此时会被执行（按照 install、postinstall、prepublish、prepare 的顺序）。
最后一步是生成或更新版本描述文件，npm install 过程完成。
