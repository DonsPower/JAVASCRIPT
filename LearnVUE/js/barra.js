const app=new Vue({
    el: '#app',
    data:{
        mensaje: 'Barras',
        entrada:'',
        cont:0
    },
    computed:{
        invertir(){
           return this.entrada.split('').reverse().join('')
        },
        color(){
            return{
                'bg-success' : this.cont <20,
                'bg-warning' : this.cont>=21
            }
        }
    }
});