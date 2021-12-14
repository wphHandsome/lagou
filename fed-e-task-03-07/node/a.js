
var arr = [3,9,1,1]
var max = arr.reduce(function (prev,cur,index) {
    return Math.max(prev,cur)
})

var sum = arr.reduce((child,index) => {
    return child+index
})
console.log(sum)

const arrylist =[{name:"zhangsan",age:'24'},{del:'108',birthday:'08-27'}]

while(arrylist.length == 2 ){
    return console.log('111222')
}
