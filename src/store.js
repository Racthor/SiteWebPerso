import Vue from 'vue'
import Projets from './data/listeProjets.js'
//import Vuex from 'vuex'

//Vue.use(Vuex)
var store = {
	state: {
		listeProjets: Projets(),
		icones: {
			unity: require('./assets/icones/unityIcon.jpg'),
			vuejs: require('./assets/icones/logoVueJs.png'),
		}
	},
	getProjets () {
		console.log(this.state.listeProjets)
		return this.state.listeProjets;
	},
	getProjetByName (nomProjet) {
		console.log(this.state.listeProjets)
		return this.state.listeProjets[nomProjet];
	},
	getIcon (nomTechno) {
		return this.state.icones[nomTechno];
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