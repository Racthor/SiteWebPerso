<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <portfolioJeuxVideo msg="Bienvenue dans la boite à trucs ! Sur une idée originale de Anonimus"/>
    <h2>Le titre fonctionne heureusement.</h2>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import portfolioJeuxVideo from './components/portfolioJeuxVideo.vue'

export default {
  name: 'app',
  components: {
    portfolioJeuxVideo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
