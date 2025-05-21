<template>
<div id="app">
<header>
  <Navbar/>
</header>
  <router-view/>

<Footer/>
</div>

</template>

<script>
import Navbar from './components/BarraNavegacion.vue'
import Footer from './components/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}

</script>

<style>

</style>
