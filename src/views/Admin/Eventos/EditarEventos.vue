<template>
    <div>
        Estoy en Editar Eventos 
    </div>
</template>
<script>
    import axios from 'axios'
    import siderbar from '../../../components/Siderbar.vue'
    export default{
      name:'',
      data(){},
      components:{ siderbar},
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