const abb ={
    a:'11',
    c:function(){
        console.log('1111')
    },
    d:'13232'
}

const {a,...b} = abb

console.log(b)

const addb = new Set([1,23,2])
addb.add([1,2])
console.log(addb,'111')