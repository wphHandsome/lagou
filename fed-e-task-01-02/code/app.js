const fp = require('lodash/fp')
const _ = require('lodash')

// 代码题1
const cars = [
    {name:'Ferrari',horsepower:660,dollar_value:700000,in_stock:true},
    {name:'spyker C12 Zagato',horsepower:650,dollar_value:648000,in_stock:false},
    {name:'Jaguar',horsepower:550,dollar_value:132000,in_stock:false},
    {name:'Audi',horsepower:525,dollar_value:114200,in_stock:false},
    {name:'Aston',horsepower:750,dollar_value:1850000,in_stock:true},
    {name:'pagani Huayra',horsepower:700,dollar_value:1300000,in_stock:false},
]

let isLastInStock = function (cars) {
    let last_car = fp.last(cars)
     
    return fp.prop ('in_stock',last_car)
}
console.log('cart',isLastInStock(cars))
1
const lastcars = cars => fp.last(cars)
const in_stock = cars => fp.prop ('in_stock',cars)
const carsin_stock = fp.flowRight(in_stock,lastcars)
console.log(carsin_stock(cars))
2
const firstcars = cars => fp.first(cars)
const last_stock = cars => fp.prop ('name',cars)
const firstcarsname = fp.flowRight(last_stock,firstcars)
console.log(firstcarsname(cars))
3
let average = function (xs) {
    return fp.reduce(fp.add,0,xs)/xs.length
}

// let averageDollarValue = function (cars) {
//     let dollar_values = fp.map(function(car){
//         return car.dollar_value
//     },cars)
//     return average(dollar_values)
// }
let averageDollarValue1 = fp.map(cars => cars.dollar_value)
const averageDollarValue2 =fp.flowRight(average,averageDollarValue1)
console.log(averageDollarValue2(cars),'www')
4
let name ='hello wold'
let underscore = fp=>fp.replace(/\s+/g,'_')
const map = value => value.toUpperCase()
let sanitizeNames = fp.flowRight(map,underscore)
console.log(sanitizeNames(name),'sanitizeNames')

//代码题2

class Container {
    static of (values) {
        return new Container
    } 
    constructor (value) {
        this._value = value
    }
    map (fn) {
        return Container.of(fn(this._value))
    }
}

class Maybe {
    static of (x) {
        return new Maybe(x)
    }
    isNothing () {
        return this._value === null ||this._value ===undefined
    }
    constructor (x) {
        this._value = x
    }
    map (fn) {
        return this.isNothing() ? this : Maybe.of(fn(this._value))
    }
}

let maybe = Maybe.of([5,6,87])
function square(n) {
    return fp.add (n,1)
  }
   
let ex1 = _.map(maybe._value,square)
2
let ex2 = fp.first(maybe._value)
console.log(ex1,ex2,'ddd')
3
let safeProp = fp.curry(function (x,o) {
    return Maybe.of(o[x])
})

let user = {id : 1,name:'Ablert'}
let ex3 = fp.first(safeProp('name',user)._value)

console.log(ex3,'dd')

4

class pasIntmaybe {
    static of (x) {
        return new pasIntmaybe(x)
    }
    isNothing () {
        return this._value === null ||this._value ===undefined
    }
    constructor (x) {
        this._value = parseInt(x)
    }
    map (fn) {
        return this.isNothing() ? this : Maybe.of(fn(this._value))
    }
}

