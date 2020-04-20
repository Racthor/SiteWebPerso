<template>
	<div class="cv">
		<b-jumbotron :header="titreCV" header-level="4" lead="Sylvain Kauffeisen">
			<hr class="my-4">
			<contacts />
			<b-button variant="primary" :href="pdf">Télécharger la version .pdf</b-button>
		</b-jumbotron>

		<b-container>
			<b-row>
				<b-col>
					<b-card>
						<competences :competences="competences['langages']" />
					</b-card>
				</b-col>
				<b-col>
					<b-card>
						<competences :competences="competences['paradigmes']" />
					</b-card>
				</b-col>
			</b-row>
			<b-row>
				<b-col>
					<b-card>
						<competences :competences="competences['equipe']" />
					</b-card>
				</b-col>
				<b-col>
					<b-card>
						<competences :competences="competences['frameworks']" />
					</b-card>
				</b-col>
			</b-row>
		</b-container>

		<br />
		<b-container>
			<b-row>
				<b-col cols="8">
					<tabXperiences titre="Experiences" :listXp="experiences.pro"/>
					<br />
					<tabXperiences titre="Formations" :listXp="experiences.dip"/>
					<br />
				</b-col>
				<b-col>
					<b-card no-body> <!-- SECTION PASSISONS -->
						<b-tabs card>
							<b-tab title="Associations" active>
								<b-media no-body>
									<b-media-body class="ml-3">
										<b-media>
											<template v-slot:aside>
												<b-img :src="require('../assets/logo-celn.jpg')" width="64" alt="placeholder"></b-img>
											</template>
											<h5>CELN</h5>
											<h6>Cercle des Escrimeurs Libre Nantais</h6>
											<p>
												<b-link href="http://www.escrimeurs-libres.fr/">www.escrimeurs-libres.fr</b-link><br/>
												Participation à la vie de l'association<br />
												Animation avec l’association lors d’événements (Art to play, Bouffay en feu, etc)
											</p>
										</b-media>
										<b-media>
											<template v-slot:aside>
												<b-img :src="require('../assets/logo-ludinantes.png')" width="64" alt="placeholder"></b-img>
											</template>
											<h5>Ludinantes</h5>
											<p>
												<b-link href="http://ludinantes.fr/">ludinantes.fr</b-link><br/>
												Coordinateur des sections jeu vidéo et tables-rondes durant le festival Nautilude<br/>
												Animateur occasionnel aux utopiales
											</p>
										</b-media>
										<b-media>
											<template v-slot:aside>
												<b-img :src="require('../assets/logo-bmj.png')" width="64" alt="placeholder"></b-img>
											</template>
											<h5>BMJ</h5>
											<h6>La Besace du Maitre du Jeu</h6>
											<p>
												Co-créateurs et vice-président<br />
												L'association a pour but d'aider les meneurs de jeu en leur fournissant conseils et outils
											</p>
										</b-media>
										<b-media>
											<template v-slot:aside>
												<b-img :src="require('../assets/logo-ludoratoire.png')" width="64" alt="placeholder"></b-img>
											</template>
											<h5>Le Ludoratoire</h5>
											<p>
												<b-link href="http://ludoratoire.com/">ludoratoire.com</b-link><br/>
												Amateur ou profesionnels se réunissent autour d'une même passion, la création de jeux vidéo<br/>
												Des événements sont organisés tout les mois: apéros networking, game jams, workshops, ...
											</p>
										</b-media>
									</b-media-body>
								</b-media>
							</b-tab>
							<b-tab title="Passions">
								<b-media no-body>
									<b-media-body class="ml-3">
										<b-media>
											<h4><font-awesome-icon :icon="['fas', 'gamepad']" size="lg"/> Jeux vidéos</h4>
											<ul>
												<li>Moba</li>
												<li>Jeux de rôles</li>
												<li>RTS</li>
												<li>Jeux de plateformes</li>
												<li>Jeux d'aventures</li>
											</ul>
										</b-media>
										<b-media>
											<h4><font-awesome-icon :icon="['fas', 'quidditch']" size="lg"/> Sport</h4>
											<ul>
												<li>Arts martiaux historiques européens</li>
											</ul>
										</b-media>
										<b-media>
											<h4><font-awesome-icon :icon="['fas', 'feather-alt']" size="lg"/> Loisirs créatifs</h4>
											<ul>
												<li>Casse tête</li>
												<li>Énigmes</li>
												<li>Jeux de rôles papier</li>
												<li>Game jam</li>
												<li>Écriture</li>
												<li>Game design</li>
											</ul>
										</b-media>
									</b-media-body>
								</b-media>
							</b-tab>
						</b-tabs>
					</b-card>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import CVinPDF from 'file-loader!../data/pdf/CV_jv_Sylvain_Kauffeisen.pdf';
import competences from './composantCV/CompetencesCV.vue';
import tabXperiences from './composantCV/TabListDate.vue';
import contacts from './Contacts.vue';

import store from '../store'

export default {
	name: 'page_cv',
	props: {
		intro: String
	},
	data() {
		return {
			pdf: CVinPDF,
			titreCV: 'Concepteur Développeur Informatique',
			experiences: {
				pro: store.getExperiencesPro(),
				dip: store.getFormations()
			},
			competences: store.getCompetences(),
		}
	},
	components: {
		competences,
		tabXperiences,
		contacts
	}
}
</script>

<style type="text/css">
	
</style>