<template>
	<!--TODO: check https://bootstrap-vue.js.org/docs/components/jumbotron-->
	<b-row>
		<b-col>
			<h2>{{ titre }}</h2>
			<h2>{{ durée }}</h2>
			<h2>{{ date }}</h2>
		</b-col>
		<b-col>
			<ul class="techno">
				<!--TODO: liste des technos à récuperer dans vuex-->
				<li><b-img></b-img></li>
			</ul>
		</b-col>
		<b-col>
			<p>Liste de lien vers les sources, git etc</p>
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'headerportfolio',
	props: {
		msg: String
	},
	data() {
		return {
			titre: 'La boite à trucs !',
			durée: '1mois',
			date: '13/07/2016'
		}
	}
}
</script>

<style>
</style>