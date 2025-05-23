<template>
  <div>
    <nav class="barra-productos">
      <div class="contendor-lista">
           <ul ref="listaCategorias">
      <li
        v-for="(categoria, index) in categorias"
        :key="index"
        :class="['lista-productos', { activo: categoriaActiva === index }]"
        @click="cambiarCategoria(index, $event)"
        ref="itemsCategoria"
      >
        {{ categoria }}
      </li>
    </ul>
      </div>
    </nav>

    <main class="main">
      <div class="slider" :style="{ transform: `translateX(-${categoriaActiva * 100}%)` }">
        <section v-for="(categoria, index) in categorias" :key="index" class="slide">
          <h2>{{ categoria }}</h2>
        </section>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  data() {
    return {
      categorias: ['Hamburguesas', 'Perros', 'Salchipapas', 'Batidos', 'Adicionales'],
      categoriaActiva: 0,
    };
  },
  methods: {
  cambiarCategoria(index, event) {
    this.categoriaActiva = index;

    const contenedor = this.$refs.listaCategorias;
    const item = event.currentTarget;
    const contenedorAncho = contenedor.clientWidth;
    const itemOffsetLeft = item.offsetLeft;
    const itemAncho = item.offsetWidth;
    const scrollPos = itemOffsetLeft - (contenedorAncho / 2) + (itemAncho / 2);
    contenedor.scrollTo({
      left: scrollPos,
      behavior: 'smooth',
    });
  },
},
}

</script>



<style>
.barra-productos {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    z-index: 1;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.753);
    border-top: 1px solid var(--color-acento);
    border-bottom: 1px solid var(--color-acento);

    font-family: "Markazi Text", serif;
}

.contendor-lista {
    display: flex;
    flex: column;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 0 1rem;
    font-family: "Markazi Text", serif;
    font-size: 1.5rem;
    border-radius: 0 0 10px 10px;
}

.contendor-lista ul {
    align-items: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin: 0;
    padding: 0;
}

.lista-productos {
    list-style: none;
    display: flex;
    padding: 0 20px;
    color: var(--color-texto);
}

.main {
  margin-top: 120px; 
  height: calc(100vh - 120px); 
  overflow-y: auto; 
}


@media screen and (max-width: 768px) {
  .contendor-lista {
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none; 
    -ms-overflow-style: none; 
  }

  .contendor-lista::-webkit-scrollbar {
    display: none; /* Chrome y Safari */
  }

  .contendor-lista ul {
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  display: flex;
}

.lista-productos {
  flex: 0 0 auto;
  cursor: pointer;
  padding: 0 20px;
}

}

@media (max-width: 768px) {
  .contendor-lista ul {
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  .lista-productos {
    flex: 0 0 auto;
  }
}

/* Estilo general */
.lista-productos {
  padding: 0 20px;
  cursor: pointer;
  color: var(--color-texto);
  transition: color 0.3s, background-color 0.3s;
  border-radius: 10px;
}

.lista-productos.activo {
  background-color: var(--color-acento);
  color: white;
}

/* Slider */
.main {
  margin-top: 120px;
  height: calc(100vh - 120px);
  overflow: hidden;
  position: relative;
}

.slider {
  display: flex;
  width: 500%;
  transition: transform 0.5s ease-in-out;
}

.slide {
  width: 100%;
  flex-shrink: 0;
  padding: 1rem;
}

</style>