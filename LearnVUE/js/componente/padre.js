Vue.component('padre',{
    template: /*html*/
    ` 
    <div class="p-5 bg-dark text-white">
        <h2>componente padre: {{numeropadre}}</h2>
        <hijo :numero="numeropadre"></hijo>
        <button class="btn-danger" @click="numeropadre++">+</button>
    </div>

    `,
    data(){
        return{
            numeropadre: 0
        }
    }
    

})