<template>
	<div class="portfolio">
		<b-row>
			<b-col>
				<b-img class="headerprojet" :src="require('../assets/header_elya_by_morgan_chane.jpg')" fluid alt="Image Header"></b-img>
			</b-col>
		</b-row>
		<headerportfolio/>
		<contenuportfolio/>
		<tagslist/>
		<!--<previous-next/>-->
	</div>
</template>

<script>
import headerportfolio from './composantPortfolio/HeaderPortfolio.vue'
import contenuportfolio from './composantPortfolio/ContenuPortfolio.vue'
import tagslist from './Tagslist.vue'
//import previous-next from './PreviousNext.vue'

export default {
	//TODO: le contenu du projet doit être récupérer ici puis envoyer dans les composant enfant. ces derniers ne doivent pas connaitre ce qu'ils affichent.
	name: 'portfolioJeuxVideo',
	props: {
		projet: Object,		//contient le titre, la date et la durée du projet
		technos: Array,	//liste des technos pour headerportfolio
		tags: Array			//liste des tags lié au projet
	},
	data() {
		return {
			titre: 'La boite à trucs !'
		}
	},
	components: {
		headerportfolio,
		contenuportfolio,
		tagslist,
		//previous-next
	}
}
</script>

<style>
</style>