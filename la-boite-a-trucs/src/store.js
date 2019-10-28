import Vue from 'vue'
import Projets from './data/listeProjets.js'
//import Vuex from 'vuex'

//Vue.use(Vuex)
var store = {
	state: {
		listeProjets: Projets()
	},
	getProjets () {
		return this.state.listeProjets;
	},
	getProjet (nomProjet) {
		return this.state.listeProjets[nomProjet];
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