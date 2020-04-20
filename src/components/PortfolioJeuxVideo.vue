<template>
	<div class="portfolio">
		<headerportfolio class="headerportfolio" :details="projet.details" :links="projet.lien" :technos="projet.technos"/>
		<b-card no-body class="contenuportfolio">
			<b-row>
				<b-col md="8">
					<imagesDuProjet :illustrations="projet.illustrations"/>
				</b-col>
				<b-col md="4">
					<contenuportfolio :projet="projet"/>
				</b-col>
			</b-row>
		</b-card>
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
.contenuportfolio {
	border: none;
}
.card-group .card {
	margin-bottom: 15px;
}
</style>