<template>
   <div>
    Estoy en CrearNoticias
    <Siderbar>

    </Siderbar>

   </div>
</template>
<script>
    import axios from 'axios'
import Siderbar from '../../../components/Siderbar.vue'  
    export default{
      name:'',
      data(){},
      components:{ Siderbar },
      methods:{
         CrearEvento()
         {
            this.$router.push('/CrearEventos')
         }
      },
      computed:{},
      mounted:{}
      } 
          
  </script>