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