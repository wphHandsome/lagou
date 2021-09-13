const {creatApp , h } = Vue

const app = creatApp({})

app.component('reading',{
    render(){
        return h (
            h1,{},this.$slots.default
        )
    }
})