<!--page principale-->
<template>
	<b-container>
		<menuFlottant></menuFlottant>
		<router-view></router-view>
	</b-container>
</template>

<script>
import menuFlottant from './MenuFlottant.vue'

//https://router.vuejs.org/fr/guide/advanced/lazy-loading.html#grouper-des-composants-dans-le-meme-fragment
export default {
	name: 'principale',
	components: {
		menuFlottant
	}
}
</script>

<style>
</style>
