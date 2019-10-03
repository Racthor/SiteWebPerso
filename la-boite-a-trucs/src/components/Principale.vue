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
				<portfolioJeuxVideo msg="Bienvenue dans la boite à trucs ! Sur une idée originale de Anonimus"/>
				<pagecv intro="Je recherche actuellement un emploi dans la domaine du jeu vidéo. Les informations pour me contacter sont disponible en bas de la page (TODO: mettre un lien)"/>
			</div>
		</b-row>
	</b-container>
</template>

<script>
import portfolioJeuxVideo from './portfolioJeuxVideo.vue'
import pagecv from './pageCV.vue'
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
