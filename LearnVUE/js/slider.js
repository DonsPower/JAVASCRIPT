const app= new Vue({
    el: '#app',
    data: {
        total: 0
    },
    methods:{
        reset(){
            this.total+=1
            if(this.total>3){
                this.total=0
            }
        }
    }
})