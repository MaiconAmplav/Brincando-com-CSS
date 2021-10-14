new Vue({
    el: '#app',
    data:{
        cor1: '',
        cor2: '',
        cor3: '',
        corFundo: '',
},
    computed: {
        meuEstilo() {
        return {
            backgroundColor: this.cor1,
            backgroundColor: this.cor2,
            backgroundColor: this.cor3,
            backgroundColor: this.corFundo,
        }
        }
    }
})