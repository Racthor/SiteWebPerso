<template>
	<b-pagination-nav :pages="projets" use-router></b-pagination-nav>
</template>

<script>
export default {
	data() {
		return {
			pages3: [
				{ link: { query: { page: 1 } }, text: 'Projet machin' },
				{ link: { query: { page: 2 } }, text: 'Projet truc' },
				{ link: { query: { page: 3 } }, text: 'titre 3' }
			]
		}
	}
}
</script>

<style>
</style>