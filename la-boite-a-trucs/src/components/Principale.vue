<!--page principale-->
<template>
	<b-container>
		<b-row>
			<b-img :src="require('../assets/header_elya_by_morgan_chane.jpg')" fluid alt="Image Header"></b-img>
		</b-row>
		<b-row align-h="center">
			<b-col cols="4">
				<b-button pill variant="info" @click="affichage('cv')">    CV    </b-button>
			</b-col>
			<b-col cols="4">
  				<b-button pill variant="success" @click="affichage('presentation')">PRESENTATION</b-button>
			</b-col>
		</b-row>
		<b-row>
			<div v-if="affiche == 'presentation'">
				<h1>Présentation</h1>
				<presentation/>
			</div>
			<div v-else>
				<div>
					<h3>Liste des projets</h3>
					<b-card-group>
						<b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
							<b-card-text>
								Some quick example text to build on the card and make up the bulk of the card's content.
				        	</b-card-text>
						</b-card>

						<b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-bottom>
							<b-card-text>
								Some quick example text to build on the card and make up the bulk of the card's content.
							</b-card-text>
						</b-card>
					</b-card-group>
				</div>
				<portfolioJeuxVideo/>
				<pagecv intro="Je recherche actuellement un emploi dans la domaine du jeu vidéo. Les informations pour me contacter sont disponible en bas de la page (TODO: mettre un lien)"/>
			</div>
		</b-row>
	</b-container>
</template>

<script>
import portfolioJeuxVideo from './PortfolioJeuxVideo.vue'
import pagecv from './PageCV.vue'
import presentation from './Presentation.vue'

export default {
	name: 'principale',
	data() {
		return {
			affiche: "presentation"
		}
	},
	components: {
		portfolioJeuxVideo,
		pagecv,
		presentation
	},
	methods: {
		affichage(boutton) {
			switch(boutton) {
				case 'cv':
					this.affiche = 'cv';
					break;
				case 'presentation':
					this.affiche = 'presentation';
					break;
			}
		}
	}
}
</script>

<style>
</style>
