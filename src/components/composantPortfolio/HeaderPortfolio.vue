<template>
	<b-card-group>
	<!--TODO: check https://bootstrap-vue.js.org/docs/components/jumbotron-->
		<b-card :title="details.titre" :sub-title="details.date">
			<b-card-text>Le projet a été terminer sur une période de {{ details.duree }}</b-card-text>
			<b-link :href="links.plateforme">{{ links.nom }}</b-link>
		</b-card>
		<b-card sub-title="Technologies principale utilisées">
			<b-card-img right class="techIcon" v-for="nom in technos" :src="getIcon(nom)" height="100" width="100"></b-card-img>
		</b-card>
	</b-card-group>
</template>

<script>
import store from '../../store'

export default {
	name: 'headerportfolio',
	props: {
		details: Object,
		links: Object,
		technos: Array
	},
	methods: {
		getIcon (nomTechno) {
			return store.getIcon(nomTechno)
		}
	}
}
</script>

<style>
.techIcon {
	width: auto;
}
</style>