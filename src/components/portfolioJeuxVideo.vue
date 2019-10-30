<template>
	<div class="portfolio">
		<imagesDuProjet :illustrations="projet.illustrations"/>
		<headerportfolio :details="projet.details" :links="projet.lien" :technos="projet.technos"/>
		<contenuportfolio :projet="projet"/>
		<tagslist/>
		<!--<previous-next/>-->
	</div>
</template>

<script>
import imagesDuProjet from './composantPortfolio/ImagesDuProjet.vue'
import headerportfolio from './composantPortfolio/HeaderPortfolio.vue'
import contenuportfolio from './composantPortfolio/ContenuPortfolio.vue'
import tagslist from './Tagslist.vue'
//import previous-next from './PreviousNext.vue' //<- https://bootstrap-vue.js.org/docs/components/button-toolbar

import store from '../store'

export default {
	name: 'portfolioJeuxVideo',
	data() {
		return {
			titre: 'La boite à trucs !',
			projet: store.getProjetByName(this.$route.params.idProjet)
		}
	},
	components: {
		imagesDuProjet,
		headerportfolio,
		contenuportfolio,
		tagslist,
		//previous-next
	}
}
</script>

<style>
</style>