<template>


<div class="formcontent container-fluid">
    <h3> CREAR PUBLICACION</h3>
    
    
    <b-form-group id="input-group-2" label="Nombre de publicacion" label-for="textarea-autohe-height">
        <b-form-input
          id="input-2"
          placeholder="Nombre publicacion"          
        ></b-form-input>
      </b-form-group>
 

  <b-row>
    <b-col sm="2">
      <label for="textarea-auto-height">Descripcion:</label>
    </b-col>
    <b-col sm="20">
      <b-form-textarea
        id="textarea-auto-height"
        placeholder="Describa su nueva publicacion"
        rows="3"
        max-rows="3"
      ></b-form-textarea>
    </b-col>
  </b-row>

  <div>
    <b-col sm="2">
      <label for="textarea-auto-height">Fecha:</label>
    </b-col>
    <b-form-datepicker v-model="value" :min="min" :max="max" locale="es"></b-form-datepicker>
    
   <div>
      <b-col sm="2">
      <label for="textarea-auto-height">Hora:</label>
      </b-col>
    <template>
      <div>
        <b-form-timepicker v-model="value" show-seconds locale="en"></b-form-timepicker>
      </div>
    </template>

  </div> 

  <div>
     <b-col sm="2">
      <label for="textarea-auto-height">Lugar:</label>
    </b-col>
        <b-form-input
          id="input-2"
          placeholder="Ingrece el citio"
          required
        ></b-form-input>
      </div>
      
      <b-col sm="2"></b-col>
      <div>        
  <b-button-group>
    <b-button>Estado</b-button>
    <b-dropdown right text="Seleccione">
      <b-dropdown-item>Activo</b-dropdown-item>
      <b-dropdown-item>Inactivo</b-dropdown-item>
      </b-dropdown>
  </b-button-group>
      </div>
    </b-col>
    
     

  

  </div> 
  

  </div>


</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }
</script>
