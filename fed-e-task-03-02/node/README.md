了解Flow
官网 https: //flow.org/
javascript的静态类型检查器
Flow的静态类型检查错误是通过静态类型推断实现的
文件开头通过// @flow 或者 /* @flow */声明

输入vue inspect > output.js   >把前边运行的结果输出到output.js

编译器的作用是把template转换成render函数
render（h）{
    return h('h1','hello word')
}

运行时是不需要编译器的

vue的 _ 开头是私有成员，$开头是vue提供的成员
 
instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。

简单解释一些原型链的概念：

我们都知道js中的对象都继承自Object，所以当我们在某个对象上调用一个方法时，会先在该对象上进行查找，如果没找到则会进入对象的原型（也就是.prototype）进行查找，如果没找到，同样的也会进入对象原型的原型进行查找，直到找到或者进入原型链的顶端Object.prototype才会停止。

所以，当我们使用arr.toString()时，不能进行复杂数据类型的判断，因为它调用的是Array.prototype.toString，虽然Array也继承自Object，但js在Array.prototype上重写了toString，而我们通过toString.call(arr)实际上是通过原型链调用了Object.prototype.toString。
Object.prototype.toString.call(123)

Object.prototype有7个方法，分别是：

constructor：特定的函数，用于创建一个对象。指向Object本身，即Object.prototype.constructor === Object。

hasOwnProperty：返回一个布尔值，表明一个属性或方法是否是对象自有的，而非通过原型链继承的。

isPrototypeOf：返回一个布尔值，表明当前对象是否在某对象的原型链上。

propertyIsEnumerable：返回一个布尔值，表明当前属性或方法是否是对象自有的且可枚举的。

valueOf：返回对象的原始值。

toString：返回对象的字符串描述。

toLocalString：返回对象的本地化字符串


原型链
那么__proto__是什么？每个对象都会在其内部初始化一个属性，就是__proto__。
普通对象中的__proto__是什么呢？ Object的本质函数对象，是通过new Function()创建，所以Object.__proto__指向Function.prototype。同理，Function也是函数对象，因此Function.__proto__同样指向Function.prototype。 Object.prototype对象也有__proto__属性，但它比较特殊，为null。这个由__proto__串起来的直到Object.prototype.__proto__为null的链就是原型链。


vue创建watcher的顺序，首先创建计算属性的，然后侦听器的，最后是渲染的，执行顺序也是一样

首次渲染过程
1.vue构造函数
2.this._init()
3.this.$mount()
4.mountComponent()
5.new Watcher()渲染Watcher
6.updateComponent()
7.vm._render()=> createElement
7.vm._update()


组件的创建过程
先创建父组件再创建子组件，先挂载子组件在挂载父组件

