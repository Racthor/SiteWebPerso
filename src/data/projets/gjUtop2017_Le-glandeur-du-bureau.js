import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "LeGlandeurDuBureau",
	Contenu: {
		details: {
			titre: "LeGlandeurDuBureau",
			duree: "Développement en cours",
			date: "Avril 2018"
		},
		lien: {
			plateforme: "https://github.com/Racthor/Le-glandeur-du-bureau",
			nom: "github"
		},
		resume: "Vous incarnez un employer de bureau presser de rentrer chez lui et qui doit esquiver les injonctions au travail tel que des imprimantes agressive.",
		illustrations: importAllImg(require.context('../../assets/illuProjets/2017gjUtop_LeGlandeurDuBureau', false, /\.(png|jpg)$/)),
		technos: [
			"unity",
		],
		contexte: "",
		equipe: "",
		manuel: ""
	}
}