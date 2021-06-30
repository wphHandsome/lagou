# lagou
学习
* 多重判断时使用 Array.includes
* 更少的嵌套，尽早 return
* 使用默认参数和解构
* 倾向于遍历对象而不是 Switch 语句
* 对 所有/部分 判断使用 Array.every & Array.some

* 例子 *
# function test(fruit) {
#  if (fruit == 'apple' || fruit == 'strawberry') {
#    console.log('red');
#  }
# }

# function test(fruit) {
#  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
#  if (redFruits.includes(fruit)) {
#    console.log('red');
#  }
# }

# 接口代理配置
# proxyTable: {
    '/api': {// '/api':匹配项
        target: 'http://192.168.10.183:8103',// 接口的域名
　　　　 // secure: false,// 如果是https接口，需要配置这个参数
        changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
　　　　　// pathRewrite: {// 如果接口本身没有/api需要通过pathRewrite来重写了地址
　　　　　//   '^api': ''
        // }
    }
# }