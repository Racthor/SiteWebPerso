import { importAllImg } from '../listeProjets.js'

export default {
	NomDeCode: "Scout",
	Contenu: {
		details: {
			titre: "Outlander 6",
			duree: "48h",
			date: "Février 2020"
		},
		lien: {
			plateforme: "https://github.com/FlorentBaudon/Scout",
			nom: "github"
		},
		resume: "Voyager dans l'espace. Contempler l'univers, prenez en photo les créatures variées qui le parcours, dans une ambiance relaxante. Cependant, prenez soin de votre vaisseau saptial, réparer vos machines, ou vous pourriez manquer de ressources vital.",
		illustrations: importAllImg(require.context('../../assets/illuProjets/2020gjGlobal_Scout', false, /\.(png|jpg)$/)),
		technos: [
			"unity", "Blender", "Substance", "FL Studio"
		],
		contexte: "https://globalgamejam.org/2020/games/outlander-6-8 #3D #Adventure #Casual #First-Person",
		equipe: "Développeurs: Florent Baudon, Pierre Bigaud, Martin Cailleau et moi-même. Graphistes: Fabien \"Rhacknam\" Duvieu et Martin Cailleau. Sound Designer: Yann Bernard",
		manuel: "Télécharger l'exécutable sur le site de la global game jam ou sur github et dézipper le. Vous vous déplacez avec les touches ZQSD de votre clavier et orienter la caméra avec la souris ou, si vous utilisez une manette, respectivement avec le joystick gauche et le joystick droit. Pour réparer les machines, vous devez cliquer dessus ou appuyer avec le bouton A de la manette en les visant quand vous êtes à porté.",
	}
}