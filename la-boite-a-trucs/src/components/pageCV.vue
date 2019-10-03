<template>
	<div class="cv">
		<h1>{{ titreCV }}</h1>
    <p v-if="intro">{{ intro }}</p>
    <section>
      <h2>Compétences</h2>
      <section>
        <h3>Langages de programmation</h3>
        <ul>
          <li v-for="langage in competences.langages">{{ langage }}</li>
        </ul>
      </section>
      <section>
        <h3>Paradigmes de programmation</h3>
        <ul>
          <li v-for="paradigme in competences.paradigmes">{{ paradigme }}</li>
        </ul>
      </section>
      <section>
        <h3>Compétences d'équipes</h3>
        <ul>
          <li v-for="equip in competences.equipe">{{ equip }}</li>
        </ul>
      </section>
      <section>
        <h3>Framework</h3>
        <ul>
          <li v-for="framework in competences.frameworks">{{ framework }}</li>
        </ul>
      </section>
    </section>
    <section>
      <h2>Expériences</h2>
      <p></p>
    </section>
    <section>
      <h2>Formations</h2>
      <p></p>
    </section>
    <section>
      <h2>Passions</h2>
      <p></p>
    </section>
    <section>
      <h2>Associations</h2>
      <p></p>
    </section>
	</div>
</template>

<script>
export default {
  name: 'page_cv',
  props: {
    	intro: String
  },
  data() {
  	return {
  		titreCV: 'Concepteur Développeur Informatique',
      competences: {
        langages: ['Java', 'C/C++', 'C#', 'Javascipt', 'HTML5', 'CSS3', 'Python', 'SQL', 'PL/SQL', 'Android', 'XML'],
        paradigmes: ['Objet', 'Fonctionnelle', 'Composant', 'Design Pattern'],
        equipe: ['Git', 'Svn', 'Jira', 'Méthodes Agile', 'Gestion de projets'],
        frameworks: ['Unity 3D', 'Vue.js', 'Node.js', 'Swing', 'ASP.NET', 'npm']
      },
      experience: {
        stage: [],
        emplois: [],
        gameJam: []
      }
  	}
  },

}
</script>

<style type="text/css">
	
</style>