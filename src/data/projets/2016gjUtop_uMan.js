import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "2016gjUtop_uMan",
	Contenu: {
		details: {
			titre: "uMan - game jam des utopiales 2016",
			duree: "Développement terminé en 48h",
			date: "Octobre 2016"
		},
		lien: {
			plateforme: "https://github.com/Racthor/gameJamUtop",
			nom: "github"
		},
		resume: "Afin de vérifier si vous avez besoin d'une mise à jour afin d'etre toujours opérationnel, vous devrez répondre à une série de test des laboratoire Apple. Attention cependant, si une mise à jour n'est pas suffisante, vous serez détruit.",
		illustrations: importAllImg(require.context('../../assets/illuProjets/2016gjUtop_uMan', false, /\.(png|jpg)$/)),
		technos: [
			"unity",
		],
		contexte: "Les utopiales sont un festival de science fiction à Nantes. Depuis plusieurs années, une game jam est organisé peu de temps avant avec un prix à la clef. C'était ma première game jam et j'ai eu la chance de rencontré des personnes extrêmement talentueuse ce jour là. Le thème était \"Humains?\", nous sommes donc rapidement partie sur l'idée d'interroger l'intégrité du joueur/personnage.",
		equipe: "Nous avons réussi à réunir à peu près tout les pôles dans cette équipe: 3 développeurs, 1 game designer, 2 graphistes et 2 sound designer.",
		manuel: "Pour jouer, vous devez télécharger l'un des fichiers .zip à la racine du projet qui correspond à votre environnement. Dézipper l'archive et lancer le jeu: via l'exécutable si vous êtes sur windows ou les autres si vous êtes susr mc ou linux. Une fois dans le menu, cliquer sur le bouton \"Jouer\" et suivez les instructions. Vous devrez répondre aux questions en cliquant sur les boutons, généralement 2, ou en ne faisant rien. Plusieurs fin sont disponible."
	}
}