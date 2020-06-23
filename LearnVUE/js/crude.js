const app=new Vue({
    el: '#app',
    data:{
        titulo: 'GYM whit Vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods:{
        agregarTarea(){
            console.log(this.nuevaTarea)
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            })
            this.nuevaTarea=''
        },
        cambiarEstado(index){
            this.tareas[index].estado=true;
        },
        eliminarEstado(index){
            this.tareas.splice(index,1);
        }
    }

})