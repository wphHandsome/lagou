const abb ={
    a:'11',
    c:function(){
        console.log('1111')
    },
    d:'13232'
}

const {a,...b} = abb

console.log(b)