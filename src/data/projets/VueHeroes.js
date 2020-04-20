import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "VueHeroes",
	Contenu: {
		details: {
			titre: "VueHeroes",
			duree: "Développement en cours",
			date: "Avril 2018"
		},
		lien: {
			plateforme: "https://github.com/Racthor/vueHeroes",
			nom: "github"
		},
		resume: "VueHeroes est un jeu narratif développé avec Vue.js qui vise à s'approcher des livres dont vous êtes le héros.",
		illustrations: importAllImg(require.context('../../assets/illuProjets/VueHeroes', false, /\.(png|jpg)$/)),
		technos: [
			"vuejs",
		],
		contexte: "L'idée c'est de reproduire l'expérience d'un livre dont vous êtes le héros mais avec la dynamique du web. C'est un projet où il y aura beaucoup d'UI.",
		equipe: "1 dev, 1 game designer",
		manuel: ""
	}
}