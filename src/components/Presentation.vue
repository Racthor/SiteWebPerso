<!-- Page de présentation, très peu de composant -->
<template>
	<div id="presentation">
	<b-card-group columns>
		<b-card
			title="Qui suis-je"
			:img-src="require('../assets/photo_perso.jpg')"
			img-alt="Image"
			img-top
		>
			<b-card-text>
				Sylvain kauffeisen, {{ monAge }} ans, créateurs de jeux passionné, j'aime par dessus tous raconter des histoires. Développeur de formation, je m'intéresse à de multiples domaines techniques et culturels.
			</b-card-text>
		</b-card>

		<b-card header="À quoi sert ce site"  border-variant="dark">
			<blockquote class="blockquote mb-0">
				<p>Vous trouverez sur ce site mon portfolio ainsi que mon CV. À l'avenir, je m'en servirais de labo d'expériences, de blog, ou pour tout autre projet qui nécessiterait l'utilisation d'un site web.</p>
			</blockquote>
		</b-card>

		<b-card title="Ce que je veux faire" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
			<b-card-text>
				Je veux raconter des histoires, et je veux le faire par l'intermédiaire du jeu vidéo. Je le considère comme un excellent vecteur culturelle, en constante évolution et je souhaite apporter ma pierre à l'édifice.
			</b-card-text>
		</b-card>

		<b-card title="Ce que je fais" border-variant="primary" bg-variant="light">
			<blockquote class="card-blockquote">
				<p>Je suis développeur de formation, j'ai appris à utiliser différents langages et outils en fonction des besoins, je sais faire des sites web, des applications, de la base de données etc. Cependant, mon domaine de prédilection reste le jeu vidéo. J'ai donc appris à utiliser des moteurs de jeu tel que unity et unreal engine. Je me suis auto-formé au game design et à la narration dans l'espoir qu'un jour, je serais en mesure de créer des jeux à la hauteur de mes ambitions.</p>
				<footer>
					<small><b-link :to="{ name: 'factory', params: { composant: 'pagecv' }}">MON CV</b-link></small>
				</footer>
			</blockquote>
		</b-card>

		<b-card  border-variant="success">
			<b-card-title>Que trouve t'on sur ce site</b-card-title>
			<b-card-text>
				Des projets auxquels j'ai participé et que je trouve pertinent à montrer, soit: beaucoup de game jam, des démo techniques, mon cv ainsi que les moyens de me contacter. Un code que j'essaie de garder propre, des sources d'inspirations ou d'apprentissage et tout ce qui me passerait par la tête et qui vaut le coup d'être partagé.
			</b-card-text>
		</b-card>

		<b-card img-src="https://placekitten.com/408/287" img-alt="Image" overlay></b-card>

		<b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
			<b-card-text>
				Je listerai ici différentes sources que je trouve utile, quels que soient les domaines.
			</b-card-text>
		</b-card>
	</b-card-group>
	</div>
</template>

<script>
export default {
	computed: {
		monAge: function() {
			return (new Date().getFullYear()) - 1992;
		}
	}
}
</script>
