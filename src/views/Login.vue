<template>
    <div class="primero">
        <div class="segundo">
            <b-container class="formcontent" fluid>
                <div class="fadein">
                    <h1>Iniciar Sesion</h1>
                    <img src="../assets/lgtb.png" alt="" class="icon">
                </div>

          <div class ="class">
            <b-row class="my-1">
              <b-col sm="1">
                <label>Email</label>
              </b-col>
              <b-col sm="12">
                <b-form-input id="" type="email"></b-form-input>
              </b-col>
            </b-row>
  
            <b-row class="my-1">
              <b-col sm="1">
                <label>Contraseña</label>
              </b-col>
              <b-col sm="12">
                <b-form-input id="" type="password"></b-form-input>
              </b-col>
            </b-row>
            <div class="link">
              <b-link href="">¿Olvidaste tu contraseña?</b-link>
            </div>
  
            <b-button @click="Ingresar()" variant="outline-primary">ENTRAR</b-button>
            
         
            </div>
          <div class="link">
            <b-link href="">¿No tienes cuenta? Registrate</b-link>
          </div>
            </b-container>
        </div>
    </div>



</template>


<script>


import axios from "axios"
      export default{
      name:'login',
      data(){},
      components:{},
      methods:{
         Ingresar()
         {
            this.$router.push('/Dashboard')
         }
      },
      computed:{},
      mounted:{}
      } 
          
</script>


<style>

</style>