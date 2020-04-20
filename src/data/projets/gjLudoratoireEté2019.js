import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "LordOfQuest",
	Contenu: {
		details: {
			titre: "Lord Of Quest",
			duree: "48h",
			date: "Août 2019"
		},
		lien: {
			plateforme: "",
			nom: "Unity Collab"
		},
		resume: "Vous incarner un seigneur des ténèbres qui envoie ses troupes en mission afin de récupérer plus de pouvoir et vaincre ses adversaires.",
		illustrations: importAllImg(require.context('../../assets/illuProjets/2019gjLudoratoire_LordOfQuest', false, /\.(png|jpg)$/)),
		technos: [
			"unity",
		],
		contexte: "",
		equipe: "",
		manuel: ""
	}
}