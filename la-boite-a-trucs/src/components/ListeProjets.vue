<!--page principale-->
<template>
	<b-container>
		<b-row>
			<b-card-group deck>
				<b-card no-body v-for="(projet, name) in projets" :key="name" :img-src="(projet.illustrations)?projet.illustrations[0]:projet.illustration" :img-alt="'illustration du projet ' + projet.details.titre">
					<b-card-body>
						<b-card-title>{{ projet.details.titre }}</b-card-title>
						<b-card-sub-title class="mb-3" v-if="projet.lien">
							<b-link :href="projet.lien.plateforme">{{ projet.lien.nom }}</b-link>
						</b-card-sub-title>
						<b-card-text class="jeuResume">
							{{ projet.resume }}
						</b-card-text>
					</b-card-body>
    				<b-card-footer>
						<b-button variant="outline-primary" :to="'listeProjets/' + name">Voir ce projet</b-button>
					</b-card-footer>
				</b-card>
			</b-card-group>
		</b-row>
	</b-container>
</template>

<script>
import store from '../store'
//https://router.vuejs.org/fr/guide/advanced/lazy-loading.html#grouper-des-composants-dans-le-meme-fragment
export default {
	name: 'listeProjets',
	data() {
		return {
			projets: store.getProjets()
		}
	}
}
</script>

<style>
.jeuResume {
	text-align: justify;
}
</style>
