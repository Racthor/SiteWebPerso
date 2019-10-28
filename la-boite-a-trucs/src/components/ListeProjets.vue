<!--page principale-->
<template>
	<b-container>
		<b-row>
			<div>
				<h3>Liste des projets</h3>
				<b-card-group>
					<b-card v-for="projet in projets" :key="projet.titre" :img-src="projet.illustration" :img-alt="'illustration du projet ' + projet.titre" img-top>
						<router-link v-bind:to="'listeProjets/' + projet.titre">
							<b-card-text>
								{{ projet.resume }}
				        	</b-card-text>
				        </router-link>
					</b-card>
				</b-card-group>
			</div>
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
	},
	components: {
	},
	methods: {
	}
}
</script>

<style>
</style>
