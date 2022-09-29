<template>

<div>
    <h1>Mostar categorias</h1>
    <b-table>

    </b-table>
</div>
</template>

<script>



import Axios from "axios"
//import { response } from "express";
// el axios permite  llamar  todas las  apis  que se hayan creado
    export default {
        name:"Mostrarcategorias",
        data(){
          return {
            categoria:[],
          }
        },
        components:{

        },
        mounted(){
            this.getcategorias()

            
            

        },

        methods:{

            getcategorias(){
                this.Axios.get("http://127.0.0.1:8000/api/categoria_index").then((response)=>
                {
                   this.categoria=response.data;
                })
            }

        }
    }

</script>

<style>

</style>