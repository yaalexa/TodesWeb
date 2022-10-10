<template>

<div>

    <navbar></navbar>
    <siderbar>
      
    </siderbar>
    administrador 
</div>
    
</template>

<script>
import axios from 'axios'
    import siderbar from '../../components/Siderbar.vue'
    import navbar from '../../components/Navbar.vue'
      export default{
      name:'Dashboard',
      data(){
      
        return{
          
        }
      },
      
      components:{
        siderbar,
        navbar
      },
      methods:{
        
      },
      computed:{},
      mounted:{}
      } 
</script>