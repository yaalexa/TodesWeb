<template>
    <div>
        <siderbar></siderbar>
        <div class="content">
            <b-table id="tableincidencias" :items="incidencias" :fields="encabezado">
           </b-table>
        </div>
        
    </div>
</template>
<script>
    import axios from 'axios'
    import siderbar from '../../../components/Siderbar.vue'
      export default{
      name:'Dashboard',
      data(){
        return{

          incidencias:null,
          encabezado:[
            {key:'id',label:'#'},
            {key:'nombre',label:'Nombre'},
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
    float:right;
}
</style>