<template>
    <div class="primero">
      <div class="segundo">
        <b-container class="formcontent" fluid>
          <div class="fadein">
            <h1> INICIAR SESION </h1>
  
            <b-img class="icon" :src="require('@/assets/lgtb.png')" fluid></b-img>
          </div>
  
  
  
          <div class="input">
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
    import axios from 'axios'
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
  h1 {
    font-size: 28px;
    font-weight: 100;
    line-height: 1.2;
    color: #000000;
    text-transform: inherit;
    letter-spacing: inherit;
  }
  .primero {
    display: flex;
    justify-content: center;
  }
  .segundo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: max-content;
    height: max-content;
    padding: 20px;
    border-style: solid;
    border-color: #00ADB5;
    background-color: #00ADB5;
  }
  .formcontent {
    max-width: 350px;
    border-radius: 30px;
    margin: 20px auto;
    padding: 20px;
    background-color: #eceff1;
  }
  .link {
    display: flex;
    justify-content: left;
    justify-content: center;
    position: relative;
    font-size: small;
  }
  .icon {
    float: center;
    width: 30%;
    height: 20%;
    margin: 0;
    padding: 0;
    object-fit: contain;
  }
  </style>