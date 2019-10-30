<template>
	<component v-bind:is="(composant)?composant:'presentation'"></component>
</template>

<script>
/*
 * TODO : Supprimer la dépendance au nom du composant
 * Le bon composant n'est afficher que si le nom donner dans les props correspond à un nom dans les composant.
 */
import portfolioJeuxVideo from './PortfolioJeuxVideo.vue'
import pagecv from './PageCV.vue'
import presentation from './Presentation.vue'
import listeProjets from './ListeProjets.vue'

export default {
	name: 'ComponentFactory',
	props: {
		composant: String
	},/*
	data: function() {
		return {
		}
	},
	computed: {
		componentName: function() { return (this.composant)?this.composant:'presentation' }
	},*/
	components: {
		portfolioJeuxVideo,
		pagecv,
		presentation,
		listeProjets
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
