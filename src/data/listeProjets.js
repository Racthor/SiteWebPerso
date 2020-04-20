/*
 * Auteur : Sylvain Kauffeisen
 * Date : oct 2019
 * Update :
 *  - avril 2020 : ajout de la fonction importAllImg, pour charger les images des projets dynamiquement
 */

/*
 * Fonction qui retourne la liste des <<projets>>.json contenu dans le dossier /src/data/projets
 */

const projets = {};
const content = [];

function importAllJs (r, array) {
	r.keys().forEach(key => array.push(r(key).default));
}

function getProjet () {
	importAllJs(require.context('./projets', false, /\.js$/), content);
	content.forEach(key => projets[key['NomDeCode']] = key['Contenu']);
	
	return projets;
}

export default function () {
	return getProjet()
}

/*
 * Fonction qui retourne un tableau contenant l'ensemble des fichiers dans le contexte donner en paramètre.
 *  
 * param : require.context
 * return: Array
 *
 * Cette fonction existe pour importer les images des projets dans leur dossier respectif.
 * La fonction require.context de webpack ne prenant que des arguments literals,
 * il n'est pas possible de lui spécifier le chemin des images dynamiquement.
 * 
 * C'est donc au .json de préciser le contexte et d'appeler la fonction d'import ensuite.
 */

export function importAllImg (r) {
	var allImg = [];
	r.keys().forEach(key => allImg.push(r(key)));
	return allImg;
}