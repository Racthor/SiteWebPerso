<template>
	<!--TODO: check les medias https://bootstrap-vue.js.org/docs/components/media-->
	<b-card no-body>
		<b-tabs card>
			<b-tab title="Resume Détaillé" active>
				<b-card-body>
					<b-card-text>{{ projet.resume }}</b-card-text>
				</b-card-body>
			</b-tab>
			<b-tab title="Contexte">
				<b-card-body>
					<b-card-text>{{ projet.contexte }}</b-card-text>
				</b-card-body>
			</b-tab>
			<b-tab title="Equipe">				
				<b-card-body>
					<b-card-text>{{ projet.equipe }}</b-card-text>
				</b-card-body>
			</b-tab>
			<b-tab title="Manuel - comment ça marche?">
				<b-card-body>
					<b-card-text>{{ projet.manuel }}</b-card-text>
				</b-card-body>
			</b-tab>
		</b-tabs>
	</b-card>
</template>

<script>
export default {
	name: 'contenuportfolio',
	props: {
		projet: Object
	}
}
</script>

<style>
</style>