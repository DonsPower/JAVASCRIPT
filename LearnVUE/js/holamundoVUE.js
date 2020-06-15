const app= new Vue({
    //ID dentro del modulo trabajamos por modulos.
    el: '#appi',
    //Datos que se utilizan puden ser objetos
    data: { 
        titulo: 'hola mundo con viw',
        frutas: ["hola","me","llamo","pancrasia"],
        objeto: [
            {nombre:'manzanas', cantidad:10 },
            {nombre:'peras', cantidad:20 },
            {nombre:'mangos', cantidad:0 }
        ],
        //Metodos dentro del sistema a utlizar
        add:"",
        cant:"",
        busquedafruta:"",
        total:0
        
    },
    methods:{
        agregar(){
            if (this.cant==0) {
                alert("No agregaste frutas")    
            } else {
                this.objeto.push({
                    nombre: this.add, cantidad: this.cant
                })   
            }
            this.add=""
            this.cant=""
        },
        buscar(){
            this.objeto.push({
                nombre: this.add, cantidad: 0
            })
            
        }
    },
    computed: {
        sumartotal(){
            this.total=0;
            for (fruta of this.objeto) {
                this.total +=fruta.cantidad;

            }
            return this.total;
        }
    }  
       
})