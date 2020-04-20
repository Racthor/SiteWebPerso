import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "GoulagTycoon",
	Contenu: {
		details: {
			titre: "GoulagTycoon",
			duree: "Développement en cours",
			date: "Avril 2018"
		},
		lien: {
			plateforme: "https://github.com/Racthor/Addon2017_Goulag-Tycoon",
			nom: "github"
		},
		resume: "Jeu à 4 joueur, retrouver les 3 prisonnier avant qu'il ne s'échappe ou échapper vous en fuyant le gardien dans l'un des 3 labyrinthes.",
		illustrations: importAllImg(require.context('../../assets/illuProjets/2017gjAddon_GoulagTycoon', false, /\.(png|jpg)$/)),
		technos: [
			"unity",
		],
		contexte: "Jeu créer lors de la game jam de l'événement Addon de 2017 organiser par Atlangames et 3hit combo.",
		equipe: "",
		manuel: ""
	}
}