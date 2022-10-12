<template>
    <div id="content">
        <nav id="siderbar">
            <div class="siderbar-header">
                <b-img class="icon" :src="require('@/assets/lgtb.png')" fluid></b-img>
            </div>
            <ul>
                <li> 
                    <a >REPORTES</a>
                </li>
                <li>
                    <router-link to="/MostrarIncidencias">INCIDENCIAS</router-link>
                    
                </li>
                <li>
                    <a>EVENTOS</a>
                </li>
                
                <li>
                    <a>NOTICIAS</a>
                </li>
                <li>
                    <a>USUARIOS</a>
                </li>
                <li>
                    <a>ROLES</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<style>
#siderbar{
    width: 30%;
    height: 100vh;
    background: #00ADB5;
    float: left;
}
</style>