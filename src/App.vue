<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
<<<<<<< HEAD
      <router-link to="/about">About</router-link>
      <router-link to="/Mostrarcategorias">Categorias</router-link>
=======
      <router-link to="/about">About</router-link> |
      <router-link to="/login">login</router-link> |
      <router-link to="/registrarse">registrarse</router-link>

>>>>>>> 835f3f8bfcc760da56d628ff48ae7bb15d2d932a
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
