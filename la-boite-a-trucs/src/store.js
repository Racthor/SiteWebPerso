import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//Vue.use(Vuex)
var store = {
	state: {
		listeProjets: {
			VueHeroes: {
				titre: "VueHeroes",
				resume: "VueHeroes est un jeu narratif développé avec Vue.js qui vise à s'approcher des livres dont vous êtes le héros.",
				illustration: require('./assets/illuVueHeroes.jpg')
			},
			Beber: {
				titre: "Bernard Royal",
				resume: "bernard est un jeu développé lors de la global game jam 2019. Dans ce jeu, les joueurs incarne un bernards l'hermite et doivent faire la course jusqu'à l'autre bout de la plage sans se faire happé par la marée ni par les mouettes.",
				illustration: require('./assets/illuBernardRoyal.png')
			}
		}
	},
	getProjets () {
		return this.state.listeProjets
	},
	getProjet (nomProjet) {
		return this.state.listeProjets[nomProjet]
	}
}
export default store

/*export default new Vuex.Store({
	state: {

	},
	mutations: {

	},
	actions: {

	}
})*/