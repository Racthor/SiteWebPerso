<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/header_elya_by_morgan_chane.jpg">
    <input type="button" name="cv" value= "CV" @click="affichage('cv')"/>
    <input type="button" name="pitch" value= "PITCH" @click="affichage('pitch')"/>
    <div v-if="affiche == 'pitch'">
		<h1>PITCH DE JEU</h1>
	</div>
	<div v-else>
	    <portfolioJeuxVideo msg="Bienvenue dans la boite à trucs ! Sur une idée originale de Anonimus"/>
	    <pagecv intro="Je recherche actuellement un emploi dans la domaine du jeu vidéo. Les informations pour me contacter sont disponible en bas de la page (TODO: mettre un lien)"/>
	</div>
  </div>
</template>

<script>
import portfolioJeuxVideo from './components/portfolioJeuxVideo.vue'
import pagecv from './components/pageCV.vue'

export default {
  name: 'app',
  data() {
  	return {
  		affiche: ""
  	}
  },
  components: {
    portfolioJeuxVideo,
    pagecv
  },
  methods: {
    affichage(boutton) {
    	switch(boutton) {
    		case 'cv':
    			this.affiche = 'cv';
    			break;
    		case 'pitch':
    			this.affiche = 'pitch';
    			break;
    	}
    }
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
