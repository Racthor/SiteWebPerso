// fonction qui retourne la liste des <<projets>>.json contenu dans le dossier /src/data/projets
const projets = {};
var content = [];

function importAll (r) {
	r.keys().forEach(key => content.push(r(key).default));
}

function getProjet () {
	importAll(require.context('./projets', false, /\.js$/));
	content.forEach(key => projets[key['NomDeCode']] = key['Contenu']);
	return projets;
}

export default function () {
	return getProjet()
};