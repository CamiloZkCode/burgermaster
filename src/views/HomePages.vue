<template>
<section class="section-inicio">
    <div class="contenedor-inicio">
      <div class="fondo-blur"></div>
        <div class="bienvenida">
            <h1>BIENVENIDO A BURGER MASTER HONDA</h1>
            <p>Donde se preparan las hamburgesas mas ricas de colombia </p>
            <button class="ver-menu">Tienda</button>
        </div>
      </div>
</section>
<section class="section-productos">
    <div class="contenedor-productos">
          <h2>Productos destacables</h2>
        <div class="productos">

            <div class="producto">
              <div class="imagen-producto">
                <img src="../assets/img/Hamburgesa-fondo.jpg" alt="Cheeseburger">
              </div>
                <div class="descripcion">
                  <h3>Cheeseburger</h3>
                  <p>Las mejores hamburguesas, prepáralas a tu gusto con ingredientes frescos y sabrosos que harán agua tu boca.</p>
                  <button>Ver Hamburguesas</button>
                </div>
            </div>

            <div class="producto">
              <div class="imagen-producto">
                <img src="../assets/img/perros.png" alt="Cheeseburger">
              </div>
                <div class="descripcion">
                  <h3>Cheeseburger</h3>
                  <p>Perros calientes irresistibles, con salchichas jugosas y toppings variados que se adaptan a tu antojo.</p>
                  <button>Ver Perros</button>
                </div>
            </div>


            <div class="producto">
              <div class="imagen-producto">
                <img src="../assets/img/batidos.png" alt="Cheeseburger">
              </div>
                <div class="descripcion">
                  <h3>Cheeseburger</h3>
                  <p>Batidos cremosos y refrescantes, hechos con frutas naturales y el toque perfecto de dulzura.</p>
                  <button>Ver Batidos</button>
                </div>
            </div>


             <div class="producto">
              <div class="imagen-producto">
                <img src="../assets/img/Hamburgesa-fondo.jpg" alt="Cheeseburger">
              </div>
                <div class="descripcion">
                  <h3>Cheeseburger</h3>
                  <p>Las mejores hamburguesas, prepáralas a tu gusto con ingredientes frescos y sabrosos que harán agua tu boca.</p>
                  <button>Ver Hamburguesas</button>
                </div>
            </div>



             <div class="producto">
              <div class="imagen-producto">
                <img src="../assets/img/Hamburgesa-fondo.jpg" alt="Cheeseburger">
              </div>
                <div class="descripcion">
                  <h3>Cheeseburger</h3>
                  <p>Las mejores hamburguesas, prepáralas a tu gusto con ingredientes frescos y sabrosos que harán agua tu boca.</p>
                  <button>Ver Hamburguesas</button>
                </div>
            </div>
             <div class="producto">
              <div class="imagen-producto">
                <img src="../assets/img/Hamburgesa-fondo.jpg" alt="Cheeseburger">
              </div>
                <div class="descripcion">
                  <h3>Cheeseburger</h3>
                  <p>Las mejores hamburguesas, prepáralas a tu gusto con ingredientes frescos y sabrosos que harán agua tu boca.</p>
                  <button>Ver Hamburguesas</button>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section-contacto">
    <div class="contenedor-contacto">
          <h2>Ubicacion</h2>
        <div class="contactos-lista">
            
        </div>
    </div>
</section>

</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400..700&family=Poetsen+One&family=Syne:wght@400..800&display=swap');
.markazi-text-uniquifier {
  font-family: "Markazi Text", serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
}

:root {
  --color-principal: #c41e3a;
  --color-secundario: #000000;
  --color-acento: #ffc107;
  --color-fondo: #fff8f0;
  --color-texto: #ffffff;
  --color-hover: #a30024;
}

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  background-color: var(--color-secundario);
  font-family: "Markazi Text", serif;
}

#app {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.section-inicio {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--color-texto);
  overflow: hidden;
  position: relative; /* para posicionar fondo-blur */
}

.fondo-blur {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('../assets/img/Hamburgesa-fondo.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: blur(4px);
  opacity: 0.6;
  z-index: 0;
}

.bienvenida {
  position: relative;
  text-align: center;
  color: var(--color-acento);
  z-index: 1;
  padding: 0 1rem;
}

.bienvenida h1 {
  font-size: 5rem; /* 80px base */
  margin-bottom: 1rem;
  text-shadow: 2px 1px 2px rgba(238, 235, 235, 0.877);
}

.bienvenida p {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.ver-menu {
  background-color: var(--color-acento);
  color: var(--color-texto);
  border: none;
  padding: 0.625rem 1.25rem; /* 10px 20px */
  border-radius: 0.3125rem; /* 5px */
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease-in-out;
}
.ver-menu:hover {
  background-color: var(--color-hover);
}

.section-productos,
.section-contacto {
  display: flex;
  justify-content: center;
  color: var(--color-acento);
  font-size: 2rem;
  padding: 2rem 1rem;
  min-height: 500px; /* o lo que necesites */
  box-sizing: border-box;
}

.contenedor-productos {
  margin: 0 auto;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
}

.productos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
}

/* Media queries para responsividad de la grilla de productos */
@media (max-width: 900px) {
  .productos {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .productos {
    grid-template-columns: 1fr;
  }
}

.producto {
  background-color: var(--color-secundario);
  border-radius: 0.625rem; /* 10px */
  overflow: hidden;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 400px;
  max-height: 500px;
  width: 100%;
}

.imagen-producto {
  width: 100%;
  height: 20rem; 
  overflow: hidden;
  flex-shrink: 0;
  max-height: 200px;
}

.imagen-producto img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
  transition: transform 1s ease-in-out;
}

.imagen-producto img:hover {
  transform: scale(1.5);
  cursor: zoom-in;
}

.producto h3 {
  margin: 0rem 0 0.5rem;
  font-family: 'Markazi Text', serif; 
  font-size: 1.5rem;
}

.descripcion {
  background-color: var(--color-fondo);
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 200px;

  
}

.descripcion p {
  font-size: 1rem;
  color: #000000;
  margin-bottom: 1rem;
}

.descripcion button {
  background-color: var(--color-principal);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 0.3125rem;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
  font-size: 1rem;
}

.descripcion button:hover {
  background-color: var(--color-hover);
}

.footer {
  background-color: var(--color-secundario);
  color: var(--color-acento);
  padding: 2rem;
  font-family: "Markazi Text", serif;
  font-size: 1.5rem;
  text-align: center;
}

@media (max-width: 600px) {
  .bienvenida h1 {
    font-size: 3rem;
  }

  .bienvenida p {
    font-size: 1.25rem;
  }

  .ver-menu {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }

  .section-productos,
  .section-contacto {
    font-size: 1.5rem;
  }

  
}
</style>