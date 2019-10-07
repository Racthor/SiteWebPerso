<template>
	<!--TODO: check les medias https://bootstrap-vue.js.org/docs/components/media-->
	<b-row>
		<b-col>
			<h2>Résumé</h2>
			<p>Un résumé du projet</p>
			<b-button v-b-toggle.collapse-1 variant="primary">V Toggle Collapse V</b-button>
			<b-collapse id="collapse-1" class="mt-2">
				<b-card>
					<p class="card-text">Collapse contents Here</p>
				</b-card>
				<b-card>
					<h2>détails du projet</h2>
					<b-col>
						<h3>Contexte</h3>
					</b-col>
					<b-col>
						<h3>Expression du besoin</h3>
					</b-col>
					<b-col>
						<h3>Equipe</h3>
					</b-col>
				</b-card>
				<b-card>
					<h2>Manuel - comment ça marche?</h2>
				</b-card>
			</b-collapse>
		</b-col>
	</b-row>
</template>

<script>
export default {
	name: 'contenuportfolio',
	props: {
		details: Object
	},
	data() {
		return {
		}
	},
}
</script>

<style>
</style>