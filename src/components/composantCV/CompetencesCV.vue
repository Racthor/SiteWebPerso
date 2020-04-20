<template>
	<b-media>
		<h6>{{ competences.type }}</h6>
		<b-nav small>
			<b-nav-item disabled v-for="item in competences.liste" :key="item">{{ item }}</b-nav-item>
		</b-nav>
	</b-media>
</template>

<script>
export default {
	name: 'competences',
	props: {
		competences: Object
	}
}
</script>

<style type="text/css">
	
</style>