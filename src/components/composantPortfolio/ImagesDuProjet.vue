<template v-else>
	<div>
		<!-- Si il n'y a qu'une seule image -->
		<img v-if="illustrations.length == 1"
		rounded 
		class="d-block img-fluid w-100"
		width="1024"
		height="480"
		:src="illustrations[0]"
		alt="image slot"
		>
		<!-- Si il y a plus d'une illu, on les présente sous la forme d'un carousel -->
		<b-carousel v-else
			id="carousel-1"
			:interval="10000"
			controls
			indicators
			background="#ababab"
			img-width="1024"
			img-height="480"
			style="text-shadow: 1px 1px 2px #333;"
		>
			<b-carousel-slide v-for="illustration in illustrations">
				<template v-slot:img>
					<img
					rounded 
					class="d-block img-fluid w-100"
					width="1024"
					height="480"
					:src="illustration"
					alt="image slot"
					>
				</template>
			</b-carousel-slide>
		</b-carousel>
	</div>
</template>

<script>
export default {
	name: "imagesDuProjet",
	props: {
		illustrations: Array
	}
}
</script>

<style>
</style>