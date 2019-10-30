<template>
	<div class="cv">
		<b-jumbotron :header="titreCV" lead="Sylvain Kauffeisen">
			<hr class="my-4">
			<p>
				info de contact
				pas sur la meme ligne
				test
				{{ intro }}
			</p>
			<b-button variant="primary" :href="pdf">Télécharger le CV en .pdf</b-button>
		</b-jumbotron>
		<b-card>
			<b-media no-body>
				<b-media-aside vertical-align="center">
					<b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder"></b-img>
				</b-media-aside>

				<b-media-body class="ml-3">
					<h5 class="mt-0">Compétences</h5>
					<b-media>
						<template v-slot:aside>
							<b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
						</template>
						<h6>Langages de programmation</h6>
						<b-nav small>
							<b-nav-item disabled v-for="langage in competences.langages">{{ langage }}</b-nav-item>
						</b-nav>
					</b-media>
					<b-media>
						<template v-slot:aside>
							<b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
						</template>
						<h6>Paradigmes de programmation</h6>
						<b-nav small>
							<b-nav-item disabled v-for="paradigme in competences.paradigmes">{{ paradigme }}</b-nav-item>
						</b-nav>
					</b-media>
					<b-media>
						<template v-slot:aside>
							<b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
						</template>
						<h6>Compétences d'équipes</h6>
						<b-nav small>
							<b-nav-item disabled v-for="equip in competences.equipe">{{ equip }}</b-nav-item>
						</b-nav>
					</b-media>
					<b-media>
						<template v-slot:aside>
							<b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
						</template>
						<h6>Framework</h6>
						<b-nav small>
							<b-nav-item disabled v-for="framework in competences.frameworks">{{ framework }}</b-nav-item>
						</b-nav>
					</b-media>
				</b-media-body>
			</b-media>
		</b-card>
		<b-card>
			<b-media no-body>
				<b-media-aside vertical-align="center">
					<b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder"></b-img>
				</b-media-aside>

				<b-media-body class="ml-3">
					<h5 class="mt-0">Expériences</h5>
					<b-media>
						<template v-slot:aside>
							<b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
						</template>
						<h6>Un truc</h6>
					</b-media>
				</b-media-body>
			</b-media>
		</b-card>
		<b-card>
			<b-media no-body>
				<b-media-aside vertical-align="center">
					<b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder"></b-img>
				</b-media-aside>

				<b-media-body class="ml-3">
					<h5 class="mt-0">Formations</h5>
					<b-media>
						<template v-slot:aside>
							<b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
						</template>
						<h6>Un truc</h6>
					</b-media>
				</b-media-body>
			</b-media>
		</b-card>
		<b-card>
			<b-media no-body>
				<b-media-aside vertical-align="center">
					<b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder"></b-img>
				</b-media-aside>

				<b-media-body class="ml-3">
					<h5 class="mt-0">Passions</h5>
					<b-media>
						<template v-slot:aside>
							<b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
						</template>
						<h6>Un truc</h6>
					</b-media>
				</b-media-body>
			</b-media>
		</b-card>
		<b-card>
			<b-media no-body>
				<b-media-aside vertical-align="center">
					<b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder"></b-img>
				</b-media-aside>

				<b-media-body class="ml-3">
					<h5 class="mt-0">Associations</h5>
					<b-media>
						<template v-slot:aside>
							<b-img blank blank-color="#ccc" width="64" alt="placeholder"></b-img>
						</template>
						<h6>Un truc</h6>
					</b-media>
				</b-media-body>
			</b-media>
		</b-card>
	</div>
</template>

<script>
import CVinPDF from 'file-loader!../data/pdf/CV_jv_Sylvain_Kauffeisen.pdf';

export default {
	name: 'page_cv',
	props: {
		intro: String
	},
	data() {
		return {
			pdf: CVinPDF,
			titreCV: 'Concepteur Développeur Informatique',
			competences: {
				langages: ['Java', 'C/C++', 'C#', 'Javascript', 'HTML5', 'CSS3', 'Python', 'SQL', 'PL/SQL', 'Android', 'XML'],
				paradigmes: ['Objet', 'Fonctionnelle', 'Composant', 'Design Pattern'],
				equipe: ['Git', 'Svn', 'Jira', 'Méthodes Agile', 'Gestion de projets'],
				frameworks: ['Unity 3D', 'Vue.js', 'Node.js', 'Swing', 'ASP.NET', 'npm']
			},
			experiences: {
				stage: [],
				emplois: [],
				gameJam: []
			}
		}
	}
}
</script>

<style type="text/css">
	
</style>
