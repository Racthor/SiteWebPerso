<template>
	<diV>
		<b-nav vertical small class="w-25">
			<b-nav-item v-for="o in list">Active</b-nav-item>
		</b-nav>
	</div>
</template>

<script>
export default {
	name: 'tagslist',
	props: {
		list: Array
	}
}
</script>

<style>
</style>