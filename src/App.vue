<template>
	<div id="app">
		<principale/>
	</div>
</template>

<script>
import principale from './components/Principale.vue'

export default {
  name: 'app',
  components: {
    principale
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
