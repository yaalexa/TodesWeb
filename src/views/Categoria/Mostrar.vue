<template>

<div>
    <h1>Mostar categorias</h1>
    <button @click="NuevaCategoria()">Nueva Categoria</button>
    <b-table :fields="encabezado" :items="categoria">
    </b-table> 
      
  
</div>
</template>

<script>



import axios from "axios"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
    export default {
        name:"Mostrarcategorias",
        data(){
          return {
            categoria:[],
            encabezado:[
        {key:"id",label:"Id"},
        {key:"nombre",label:"Nombre"},
       { key:"descripcion",label:"Descripcion"}],
          
          }},
        components:{

        },
        mounted(){
            this.getcategorias()

            
            

        },

        methods:{

            getcategorias(){
                this.axios.get("http://127.0.0.1:8000/api/categoria").then((response)=>
                {
                   this.categoria=response.data;
                })
            },

            NuevaCategoria(){
                this.$router.push('/NuevaCategoria')
            }
           
        }
    }

</script>

<style>

</style>