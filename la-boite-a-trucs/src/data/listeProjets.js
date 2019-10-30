/*
 * Auteur : Sylvain Kauffeisen
 * Date : oct 2019
 *
 * Fonction qui retourne la liste des <<projets>>.json contenu dans le dossier /src/data/projets
 *
 */

const projets = {};
const content = [];

function importAll (r) {
	r.keys().forEach(key => content.push(r(key).default));
}

function getProjet () {
	importAll(require.context('./projets', false, /\.js$/));
	content.forEach(key => projets[key['NomDeCode']] = key['Contenu']);
	/* TODO : importer les images dynamiquement dans le tableau
	//reinit de content pour import des images
	content = []
	importAll(require.context('../assets/illuProjets/BernardRoyal', false, /\.(png|jpg)$/));
	console.log(content)
	content.forEach(key => console.log(key));
	*/
	return projets;
}

export default function () {
	return getProjet()
};