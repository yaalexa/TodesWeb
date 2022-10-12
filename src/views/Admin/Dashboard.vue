<template>
    <div>
        <siderbar></siderbar>
        esta es mi vista administrador
    </div>
</template>

<script>
    import axios from 'axios'
    import siderbar from '../../components/Siderbar.vue'
      export default{
      name:'Dashboard',
      data(){
      
        return{
          
        }
      },
      
      components:{
        siderbar
      },
      methods:{
       
      },
      computed:{},
      mounted:{}
      } 
          
  </script>