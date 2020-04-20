import Vue from 'vue'
import Projets from './data/listeProjets.js'
//import Vuex from 'vuex'

//Vue.use(Vuex)
var store = {
	state: {
		listeProjets: Projets(),
		icones: {
			unity: require('./assets/icones/unityIcon.jpg'),
			vuejs: require('./assets/icones/logoVueJs.png'),
		},
		experiencesPro: [
			{
				titre: "Développeur Web",
				ville: "Nantes",
				lieu: "DA2O",
				dateDebut: "nov 2017",
				dateFin: "nov 2018",
				description: "Maintenance évolutive des logiciels et sites de LayaHealthcare, société d’assurance irlandaise. Utilisation d’oracle, PL/SQL, javascript, vue.js, angular"
			},
			{
				titre: "Développeur Unity & Administrateur réseau",
				ville: "Nantes",
				lieu: "Apprentice Player",
				dateDebut: "sep 2016",
				dateFin: "sep 2017",
				description: "Administration de serveur, installation de Jira, installation d’owncloud, installation d’environnement LAMP, développement d’application sur Unity 3D en C#"
			},
			{
				titre: "Développeur web - stage",
				ville: "Nantes",
				lieu: "Apprentice Player",
				dateDebut: "jun 2016",
				dateFin: "sep 2016",
				description: "Développement de deux sites web, utilisation de wordpress, gestion de serveurs"
			}
		],
		formations: [
			{
				titre: "Concepteur Développeur Informatique, RNCP niveau II",
				ville: "Nantes",
				lieu: "ENI école",
				dateDebut: "sep 2016",
				dateFin: "nov 2018",
				description: "Développement d’application objet, web et mobile. Analyse et conception d’application. Pilotage de projet. Apprentissage de frameworks et d'outils courants."
			},
			{
				titre: "Licence professionnelle",
				ville: "Nantes",
				lieu: "IUT de Nantes",
				dateDebut: "sep 2015",
				dateFin: "jun 2016",
				description: "Systèmes Informatiques et Logiciels, spécialité : développement d'applications réparties."
			},
			{
				titre: "Licence informatique",
				ville: "Nantes",
				lieu: "UFR sciences et techniques",
				dateDebut: "sep 2012",
				dateFin: "jun 2015",
				description: "Apprentissage de la programmation objet et de l'informatique en général à travers différents langages et cours."
			}
		],
		competences: {
			langages: {
				type: "Langages de programmation",
				liste: ['Java', 'C/C++', 'C#', 'Javascript', 'HTML5', 'CSS3', 'Python', 'SQL', 'PL/SQL', 'Android', 'XML']
			},
			paradigmes: {
				type: "Paradigmes de programmation",
				liste: ['Objet', 'Fonctionnel', 'Composants', 'Design Pattern']
			},
			equipe: {
				type: "Compétences transverses",
				liste: ['Git', 'Svn', 'Jira', 'Méthodes Agile', 'Gestion de projets']
			},
			frameworks: {
				type: "Outils maîtrisés",
				liste: ['Unity 3D', 'Vue.js', 'Node.js', 'Swing', 'ASP.NET', 'npm']
			}
		},
	},
	getProjets () {
		return this.state.listeProjets;
	},
	getProjetByName (nomProjet) {
		return this.state.listeProjets[nomProjet];
	},
	getIcon (nomTechno) {
		return this.state.icones[nomTechno];
	},
	getExperiencesPro () {
		return this.state.experiencesPro;
	},
	getFormations () {
		return this.state.formations;
	},
	getCompetences () {
		return this.state.competences;
	},
}
export default store

/*export default new Vuex.Store({
	state: {

	},
	mutations: {

	},
	actions: {

	}
})*/