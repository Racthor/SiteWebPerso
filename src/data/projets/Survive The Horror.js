import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "SurviveTheHorror",
	Contenu: {
		details: {
			titre: "Survive The Horror (non définitif)",
			duree: "Préproduction",
			date: "Avril 2020"
		},
		lien: {
			plateforme: "https://gitlab.com/Racthor/survive-the-horror",
			nom: "gitlab"
		},
		resume: "Le joueur doit défendre plusieurs point d'intérêt des différentes vague d'ennemis en se servant d'armes de plus en plus puissante. Les objectifs sont répartie sur des plateformes différentes, et vous êtes le seul à pouvoir les sauvegarder.",
		illustrations: importAllImg(require.context('../../assets/illuProjets/SurviveTheHorror', false, /\.(png|jpg)$/)),
		technos: [
			"unity",
		],
		contexte: "Alors que la population est confiné, nous avons décidé de nous lancer dans le développement d'un jeu avec mon ami Joachim.",
		equipe: "Joachim Vanoni et Sylvain Kauffeisen, le premier s'occupera principalement du level design tandis que le second sera en charge du code. Toutes les autres tâches se ferons à deux.",
		manuel: "Pour l'instant ça marche pas. On a même pas fini le GDD..."
	}
}