<template>
<div>
    <h1>Nueva Categoria</h1>
    <label for="">Categorias</label>

    <input type="text" v-model="form.nombre"/><br><br>
    <label for="">Descripcion</label>
    <input type="text" v-model="form.descripcion"/>

    <button @click="GuardarCategoria()">REGISTRAR</button>

    <!--el v-model es para  hacer la conecion con  el html con el script-->
</div>
</template>

<script>
import axios from "axios"
export default {
    name:"NuevaCategoria",
    data(){
        return{
            form:{
                nombre:"",   // aqui se inicializa lo que  hace la conexion   de html con js
                descripcion:"",
            }
          
        }
    },
    methods:{
      GuardarCategoria(){
         this.axios.post("http://127.0.0.1:8000/api/categoria",this.form).then((data)=>
         {console.log(data);
        });
      }
    }
}
</script>

<style>
</style>