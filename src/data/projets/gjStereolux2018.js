import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "Stereolux2018",
	Contenu: {
		details: {
			titre: "Stereolux2018",
			duree: "Développement en cours",
			date: "Avril 2018"
		},
		lien: {
			plateforme: "https://github.com/Racthor/gjStereolux2018",
			nom: "github"
		},
		resume: "Expérience de création d'un spectacle ludique sous l forme d'une game jam",
		illustrations: importAllImg(require.context('../../assets/illuProjets/2018gjStereolux', false, /\.(png|jpg)$/)),
		technos: [
			"unity",
		],
		contexte: "Très particulier",
		equipe: "Heu...",
		manuel: ""
	}
}