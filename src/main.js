import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressCard, faGamepad, faQuidditch, faFeatherAlt, faPlus, faMinus, faCity, faAt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
 
library.add(faTwitter, faLinkedin, faGithub, faGitlab, faAddressCard, faGamepad, faQuidditch, faFeatherAlt, faPlus, faMinus, faCity, faAt, faPhone)
 
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import portfolioJeuxVideo from './components/PortfolioJeuxVideo.vue'
import componentFactory from './components/ComponentFactory.vue'

const router = new VueRouter({
	routes: [
		{ name: 'home', path: '/', component: componentFactory }, // permet d'avoir le composant par défaut: presentation
		{ name: 'factory', path: '/:composant', component: componentFactory, props: true },
		{ name: 'listeProjets', path: '/listeProjets/:idProjet', component: portfolioJeuxVideo }
	]
})

new Vue({
  //store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
