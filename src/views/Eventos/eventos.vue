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
      <b-form-group id="input-group-2" label="Descripcion" label-for="textarea-autohe-height"></b-form-group>
    
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
  <b-form-group id="input-group-2" label="Fecha de publicacion" label-for="textarea-autohe-height"></b-form-group>
   <b-calendar
    selected-variant="success"
    today-variant="info"
    nav-button-variant="primary"
   ></b-calendar>
  </div>
  
        
   <div>
    <b-form-group id="input-group-2" label="Hora de realizacion" label-for="textarea-autohe-height"></b-form-group>
      <template>
     <b-row>
      <b-col md="auto">
      <b-time v-model="value" locale="en" @context="onContext"></b-time>
      </b-col>
       <b-col>
      <p>Value: <b>'{{ value }}'</b></p>
      <p class="mb-0">Context:</p>
      <pre class="small">{{ context }}</pre>
     </b-col>
     </b-row>
     </template>

    </div> 

    <div>
      <b-form-group id="input-group-2" label="Lugar de realizacion" label-for="textarea-autohe-height"></b-form-group>
        <b-form-input
          id="input-2"
          placeholder="Ingrece el citio"
          required
        ></b-form-input>
    </div>
      
     
    <div>
      <b-form-group id="input-group-2" label="Estado de publicacion" label-for="textarea-autohe-height"></b-form-group>
    <b-row>
    <b-col sm="2">        
   <b-dropdown id="dropdown-1" text="Seleccione uno " class="m-md-2">
    <b-dropdown-item>activo</b-dropdown-item>
    <b-dropdown-item>nactivo</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
   </b-dropdown>
    </b-col>
    </b-row>
  </div>

  <div>  
  <b-form-group id="input-group-2" label="URL" label-for="textarea-autohe-height"></b-form-group>
    
    <b-nav>       
  <!-- This link will only be active at `/` -->
  <b-link to="/login" exact>login</b-link>
</b-nav>
</div>

 <div>
<b-form-group id="input-group-2" label="Responsable" label-for="textarea-autohe-height"></b-form-group>
</div> 
<div>
  
     <b-form-input
          id="input-2"
          placeholder="Nombre"          
        ></b-form-input>
</div>

<div>
  <b-form-group id="input-group-2" label="Fecha caducidad" label-for="textarea-autohe-height"></b-form-group>
   <b-calendar
    selected-variant="success"
    today-variant="info"
    nav-button-variant="primary"
   ></b-calendar>
  </div>



  <div>
    <b-form-group id="input-group-2" label="Tipo de publicacion" label-for="textarea-autohe-height"></b-form-group>
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>

  </div> 
  
  
</template>
<script>
  export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Por favor seleccione una opcion' },
          { value: 'a', text: 'Evento' },
          { value: 'b', text: 'Noticia' }
          
        ]
      }
    }
  }
</script>

<style
.formcontent container-fluid {color: darkgray;
  font-style: italic;}

