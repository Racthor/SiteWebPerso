<!-- Cette vue contiendra un menu flottant. Sous la forme d'un point, genre menu de jeux vidéo, tu clique, ça te déroule le menu tu reclique, ça enroule. -->
<!--Utilisation des maodal de bootstraps ? https://bootstrap-vue.js.org/docs/components/modal-->
<template>
	<b-navbar toggleable="sm" type="dark" variant="dark">
		<b-navbar-toggle target="nav-item-collapse"></b-navbar-toggle>

		<b-navbar-brand tag="h1" href="/">
		    <img src="https://placekitten.com/g/30/30" alt="Kitten">
			Sylvain Kauffeisen
		</b-navbar-brand>

		<b-collapse id="nav-item-collapse" is-nav>
			<b-navbar-nav pills>
				<b-nav-item :to="'/listeProjets'">Portfolio</b-nav-item>
				<b-nav-item :to="'/pagecv'">Mon CV</b-nav-item>
				<b-nav-item :to="'/presentation'">Présentation</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
export default {
	name: 'menuFlottant'
}
</script>

<style scoped>
</style>