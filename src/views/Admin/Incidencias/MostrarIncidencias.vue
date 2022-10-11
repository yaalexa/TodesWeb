<template>
    <div>
        Estoy en MostrarIncidencias
        <b-table id="table_incidencias" :items="incidencias" :fields="encabezado">
        </b-table>
        <div>
          <siderbar>
          </siderbar>
        </div>
        
        
    </div>
    

    
  
</template>
<script>
    import axios from 'axios'
    import siderbar from '../../../components/Siderbar.vue'
      export default{
      name:'MostrarIncidencias',
      data(){
      
        return{
          incidencias:null,
          encabezado:[
            {key:'id',label:'#'},
            {key:'nombre',label:'Nombre'},
            {key:'descripcion',label:'Descripcion'}
          ]
          
        }
      },
      
      components:{
        siderbar
      },
      methods:{
        
      },
      computed:{},
      mounted:function(){
        this.axios.get("http://127.0.0.1:8000/api/categoria").then(reponse=>{
          this.incidencias=response.data
        })
      }
      } 
          
  </script>

<style>
   .content{
    float:inline-start;
    width: 30px;
    height: 60px;
   }
</style>