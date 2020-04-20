import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "BernardRoyal",
	Contenu: {
		details: {
			titre: "Bernard Royal",
			duree: "48h",
			date: "31 janvier 2019"
		},
		lien: {
			plateforme: "https://gitlab.com/Racthor/bernardroyal_ggj2019",
			nom: "gitlab"
		},
		resume: "Jeu de survie pour 2-4 joueurs ayant pour protagonistes des bernard l'hermite, forcer d'aller d'une maison à une autre afin d'esquiver les vagues devastatrice et les prédateurs.",
		illustrations: importAllImg(require.context('../../assets/illuProjets/2019gjGlobal_BernardRoyal', false, /\.(png|jpg)$/)),
		technos: [
			"unity",
		],
		contexte: "Jeu imaginé et créé à l'occasion de la Global game jam 2019, sur le thème \"What home means to you?\" : https://globalgamejam.org/2019/games/bernard-royal",
		equipe: "Game Designer: Yann Le Saint, Développeurs: Loïs de Sauvecanne et Sylvain Kauffeisen, Graphistes: Ronan Kergosien et Augustin Bonne, Sound Designer: Youri Bossus",
		manuel: "Lorsque vous lancer une partie, vous avez la possibilités de jouer jusqu'à 4 joueurs. Pour cela, rejoigner la partie avec la touche 'entrée' du clavier ou la touche 'A' ('croix' pour playstation) d'une manette préalablement connecté. Une fois dans la partie, vous aves quelques secondes pour avancer et trouver une coquille avant qu'une vague ne passe et vous emporte si vous êtes trop près du bord ou qu'un prédateur ne vous attrape si vous n'etes pas protéger. Le dernier en vie ou le premier arriver au bout de la plage à l'abri des rochers à gagné."
	}
}