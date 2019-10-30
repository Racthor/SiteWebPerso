<!-- Page de présentation, très peu de composant -->
<template>
	<div id="presentation">
	<b-card-group columns>
		<b-card
			title="Qui suis-je"
			img-src="https://placekitten.com/g/400/450"
			img-alt="Image"
			img-top
		>
			<b-card-text>
				Sylvain kauffeisen, {{ monAge }} ans, passionné de jeux et d'histoires, qu'elles soient avec un grand H ou non. Créatif invétérer, je m'intéresse à de multiple domaine tant qu'ils me permettent de m'exprimer un minimum.
			</b-card-text>
		</b-card>

		<b-card header="À quoi sert ce site - Quote">
			<blockquote class="blockquote mb-0">
				<p>C'est un protfolio mais pas que ! Il me sert de vitrine pour afficher mes travaux que je trouve intéressant, j'y ai aussi mis un cv et les moyens de me contacter. Mais au fil du temps je m'en servirait pour mes expériences, des notes d'humeur, des notes plus sérieuses, ou pour tout projet qui nécessite l'utilisation d'un site web.</p>
				<footer class="blockquote-footer">
					Someone famous in <cite title="Source Title">Source Title</cite>
				</footer>
			</blockquote>
		</b-card>

		<b-card title="Ce que je veux faire" img-src="https://placekitten.com/500/350" img-alt="Image" img-top>
			<b-card-text>
				Mon but dans la vie c'est de raconter des histoires et j'ai choisi le jeu vidéo comme support privilégié car j'y retrouve un mix de plusieurs domaine que j'apprécie, la musique, le dessin, la haute technologie, l'interactivité, et tout un tas de choses extraordinaire. C'est un excellent vecteur culturelle, et je souhaite apporter ma pierre à l'édifice.
			</b-card-text>
			<b-card-text class="small text-muted">Petit texte utile ou non</b-card-text>
		</b-card>

		<b-card title="Ce que je fais" bg-variant="primary" text-variant="white">
			<blockquote class="card-blockquote">
				<p>Je suis développeur de formation, je sais donc utiliser plusieurs langages en fonction des besoin, je sais faire des sites web, des applications, de la base de données etc. Mais mon domaine de prédilection reste le jeu vidéo j'ai donc appris à utiliser des moteurs de jeu tel que unity et unreal engine. Je me suis auto-former au game design et à la narration pour espérer un jour créer des jeux à la hauteur de mes ambitions.</p>
				<footer>
					<small>Lien vers <cite title="Source Title">mon CV</cite></small>
				</footer>
			</blockquote>
		</b-card>

		<b-card>
			<b-card-title>Que trouves t'on sur ce site</b-card-title>
			<b-card-text>
				Des projets que je trouve pertinents à vous montrer, beaucoup de game jam, un ou deux projets plus personnels, mon cv ainsi que les moyens de me contacter. Un code que j'espère propre, des sources d'inspirations ou d'apprentissage et tout ce qui me passerait par la tête et qui vaut le coup d'être partager.
			</b-card-text>
			<b-card-text class="small text-muted">Small text pour écrire des small trucs</b-card-text>
		</b-card>

		<b-card img-src="https://picsum.photos/400/400/?image=41" img-alt="Image" overlay></b-card>

		<b-card img-src="https://picsum.photos/400/200/?image=41" img-alt="Image" img-top>
			<b-card-text>
				V'nez voir, y a des trucs sympa par là !
				Sources utiles
				Vous aimez Vue.js ? Allez donc faire un tour chez Markus, il partage des astuces très intéressantes : https://markus.oberlehner.net/
			</b-card-text>
			<template v-slot:footer>
				<small class="text-muted">Footer Text</small>
			</template>
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