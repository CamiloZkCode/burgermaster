<template>
    <footer class="footer">
        <div class="contenedor-footer">
            <div class="contender-legal">
                <h2>🍔Burger Master Honda</h2>
                <p>Burger Honda © 2025</p>
                <p>Todos los derechos reservados</p>
                <p>Desarrollado por WeB-Sync</p>
            </div>
            <div class="contender-contacto">
                <h3>Acerca de Burger Honda</h3>
                <ul class="menu-acerca">
                    <li class="lista-acerca">Nosotros</li>
                    <li class="lista-acerca">Domicilios</li>
                    <li class="lista-acerca">Nuestra Carta</li>
                    <li class="lista-acerca">Lo Nuevo</li>
                </ul>
            </div>

            <div class="contenedor-redes">
                <h3>Síguenos </h3>
                <ul class="menu-redes">
                    <li class="lista-redes"><a href="Faceboock.com" target="_blank"><i class="bi bi-facebook"></i></a>
                    </li>
                    <li class="lista-redes"><a href="Whatsapp.com" target="_blank"><i class="bi bi-whatsapp"></i></a>
                    </li>
                    <li class="lista-redes"><a href="instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
                    </li>
                    <li class="lista-redes"><a href="TikTok.com" target="_blank"><i class="bi bi-tiktok"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>


</template>

<script>

</script>


<style>

.contenedor-footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}

.contender-legal,
.contender-contacto,
.contenedor-redes {
    flex: 1 1 300px; 
    min-width: 250px;
    border: none;
    padding: 0 1rem;
    box-sizing: border-box;
    position: relative;
}

.contender-contacto,
.contender-legal {
    position: relative; 
}

.contender-contacto::after,
.contender-legal::after {
    content: "";
    position: absolute;
    right: 0; 
    top: 25%; 
    height: 50%; 
    width: 1px;
    background-color: var(--color-acento) 
}

.footer h3 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    justify-content: center;
    margin-left: 10px;

}

.footer h2 {
    margin-bottom: -1rem;
    font-size: 2.5rem;
    text-align: center;
}

.contender-legal p {
    font-size: 1.2rem;
    justify-content: center;
    text-align: center;
}

/* Lista Acerca */
.menu-acerca {
    list-style: none;
    padding: 0;
    margin: 0;
}

.lista-acerca {
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: color 0.3s;
    font-size: 1.2rem;
    margin-left: 10px;
}

.lista-acerca:hover {
    color: var(--color-principal);
}

/* Redes sociales */
.menu-redes {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;

}

.lista-redes a {
    font-size: 2rem;
    color: var(--color-acento);
    transition: color 0.3s;
    margin-left: 10px;
    z-index: 0;
}

.lista-redes a:hover {
    color: var(--color-principal);
}



@media (max-width: 899px) {
  .contender-contacto::after,
  .contender-legal::after {
      content: none;
  }
}

@media (max-width: 600px) {
  .contenedor-footer {
    padding: 1rem 0.5rem;
    gap: 0.8rem;
  }
  .contender-legal,
  .contender-contacto,
  .contenedor-redes {
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    padding: 0 0.5rem;
  }

  .footer h3 {
    font-size: 1.6rem;
    margin-left: 0;
  }

  .footer h2 {
    font-size: 1.8rem;
  }

  .contender-legal p {
    font-size: 0.9rem;
  }

  .lista-acerca {
    font-size: 1.2rem;
    margin-left: 0;
  }

  .lista-redes a {
    font-size: 1.5rem;
    margin-left: 0.3rem;
  }
}



</style>