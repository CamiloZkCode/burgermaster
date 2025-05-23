<template>
    <!-- CODIGO HTML-->
    <nav class="contenedor-navegacion">

        <button class="menu-toggle" @click="toggleMenu">
            <i class="bi bi-list"></i>
        </button>

        <div class="logo">
            <h2>🍔Burger Master Honda</h2>
        </div>

        <div class="boton-carlogin">
            <button><i class="bi bi-cart2"></i></button>
            <button><i class="bi bi-person-circle"></i></button>
        </div>


        <div class="sidebar" :class="{ 'sidebar-activo': menuAbierto }">
            <button class="boton-cerrar" @click="toggleMenu"><i class="bi bi-x"></i></button>
            <ul>
                <li class="boton-menu"><router-link to="/" @click="toggleMenu"><i class="bi bi-house"></i>Inicio</router-link></li>
                <li class="boton-menu"><router-link to="/menu" @click="toggleMenu"><i class="bi bi-fork-knife"></i>Menu</router-link></li>
                <li class="boton-menu"><router-link to="/contacto" @click="toggleMenu"><i class="bi bi-telephone"></i>Contacto</router-link></li>
            </ul>
        </div>
        <div v-if="menuAbierto" class="overlay" @click="toggleMenu"></div>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            menuAbierto: false
        };
    },
    methods: {
        toggleMenu() {
            this.menuAbierto = !this.menuAbierto;
        }
    }
};

</script>

<style scoped>
.contenedor-navegacion {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    backdrop-filter: blur(10px);
    background-color: rgba(0, 0, 0, 0.753);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 1rem;
    font-family: "Markazi Text", serif;
    font-size: 1.5rem;
    border-radius: 0 0 10px 10px;

}

.menu-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;

    color: var(--color-texto);

}

.logo {
    flex-grow: 1;
    text-align: center;
    margin-left: 0.2rem;
    color: var(--color-acento);
}

.contenedor-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 2;
}

.boton-carlogin {
    display: flex;
    gap: 0.5rem;
    margin-right: 1rem;
}

.boton-carlogin button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.8rem;
    color: white;
    margin-right: 1rem;
}

.sidebar {
    position: fixed;
    top: 0;
    left: -250px;
    width: 250px;
    height: 100vh;
    background-color: #111;
    padding-top: 60px;
    transition: left 0.5s ease-in-out;
    z-index: 1100;
}

.sidebar ul {
    list-style: none;
    padding: 1rem;
}

.boton-menu {
    margin: 2rem 0;
}
.boton-menu i {
    margin-right: 1.5rem;
    color: var(--color-acento);
}
.boton-menu a {
   
    font-family: "Markazi Text", serif;
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
}

.boton-menu a:hover {
    color: var(--color-acento);
    transition: 0.3s ease-in-out;
}

.sidebar-activo {
    left: 0;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1050;
}

.boton-cerrar {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 3rem;
    color: white;
    cursor: pointer;
    z-index: 1200;
}


@media (max-width: 768px) {
    .logo h2 {
        font-size: 1.2rem; 
    }
}
</style>