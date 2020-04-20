import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "MonSiteWeb",
	Contenu: {
		details: {
			titre: "Mon site web",
			duree: "Intégration en cours",
			date: "Octobre 2019"
		},
		lien: {
			plateforme: "https://gitlab.com/Racthor/site-web-perso",
			nom: "gitlab"
		},
		resume: "Un site portfolio et CV afin de présenter mes travaux au monde dans un premier temps. À l'avenir, je l'utiliserais dès que j'aurais besoin d'une adresse web pour des projets perso",
		illustrations: importAllImg(require.context('../../assets/illuProjets/MonSiteWeb', false, /\.(png|jpg)$/)),
		technos: [
			"vuejs", "Bootstrap", "node.js", "npm", "fontawesome"
		],
		contexte: "J'avais besoin d'un site web pour présenter les différents projets auquels j'ai participé. À l'avenir, je m'en servirais certainement en tant que blog ou pour partager des choses qui m'intéresse.",
		equipe: "Je suis tout seul sur le développement du site. Ainsi que pour le webdesign, je me suis servi de Bootstrap en essayant de rendre le tout clair et lisible en priorité.",
		manuel: "Vous voulez la version simple ou la compliqué ?"
	}
}