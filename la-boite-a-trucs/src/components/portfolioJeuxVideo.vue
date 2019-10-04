<template>
	<div class="header">
		<h1>{{ titre }}</h1>
		<p>{{ msg }}</p>
	</div>
</template>

<script>
export default {
	name: 'portfolioJeuxVideo',
	props: {
		msg: String
	},
	data() {
		return {
			titre: 'La boite à trucs !'
		}
	},
}
</script>

<style>
</style>