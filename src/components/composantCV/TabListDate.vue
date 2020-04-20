<template>
	<b-card no-body>
		<b-tabs card>
			<b-tab :title="titre" active>
				<b-media no-body v-for="xp, index in listXp" :key="index">
					<b-media-aside>
						<b-button v-b-toggle="xp.titre" class="m-1" variant="outline-info" @click="plusOuMoins(index)"><font-awesome-icon :icon="currentIcon[index]"/></b-button>
					</b-media-aside>

					<b-media-body class="ml-3">
						<b-media>
							<template v-slot:aside>
								{{ xp.dateFin }}
								<br />
								{{ xp.dateDebut }}
							</template>
							<h5>{{ xp.titre }}</h5>
							<h6>{{ xp.lieu }} à {{ xp.ville }}</h6>
						</b-media>
						<b-collapse :id="xp.titre">
							<b-card>{{ xp.description }}</b-card>
						</b-collapse>
					</b-media-body>
				</b-media>
			</b-tab>
		</b-tabs>
	</b-card>
</template>

<script>
export default {
	name: 'tab_list_date',
	props: {
		titre: String,
		listXp: Array //liste des expériences ou formation reçu (ou autre data qui doivent utiliser ce format)
	},
	data() {
		return {
			iconPlus: ['fas', 'plus'],
			iconMoins: ['fas', 'minus'],
			currentIcon: []
		}
	},
	methods: {
		plusOuMoins(index) {
			this.$set(this.currentIcon, index, (this.currentIcon[index] == this.iconPlus)? this.iconMoins: this.iconPlus);
		},
		remplissageCurrentIcon() {
			for(var i= 0; this.currentIcon.length < this.listXp.length; ++i)
			{//TODO: i est totalement inutile, mais aujourd'hui je vois pas comment faire mieux
				this.currentIcon.push(this.iconPlus);
			}
		}
	},
	created() {
		this.remplissageCurrentIcon();
	}
}
</script>

<style type="text/css">
	
</style>