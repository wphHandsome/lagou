const some = (arry, fn) =>{
    let result= false
    for (let value of arry ){
        result = fn(value)
        if(result) {
            break
        }
    }
    return result
} 

const arr =[1,2,3,56,6777]

const somearry= some(arr,value=>{return value %2 ===0})
console.log(somearry)

function getArea(r) {
    console.log(r)
    return Math.PI * r * r
}

function memozie(f) {
    let cache = {}

    return function(){
        let key = JSON.stringify(arguments)
        console.log(arguments,'arguments')
        cache[key] = cache[key] || f.apply(f,arguments)
        return cache[key]
    }
}


let getAreameozie = memozie(getArea)

console.log(getAreameozie(2))


function checkage(min){
    return function (age){
        console.log(arguments,'arguments')
        return age > min      
    }
}

let checkage18 = checkage(18)
console.log(checkage18(20))

const joinarr =  ['aaaa','ddddd']
const aaamap = joinarr.map((value) => value.toUpperCase())
console.log(aaamap,'2222')

//组合函数断点调试打印
const trace = (tage,v) =>{
    console.log(tage,v)
    return v
}

const log = trace('wwww',['a','b','dd','fdf'])
console.log(log)
