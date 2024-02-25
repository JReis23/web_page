<script lang="ts">
import Button from '../ui/Button.svelte';
export let openModal: () => void;
</script>

<section id="index">
	<h2>Salut, je m'appelle</h2>
	<h1>João Reis</h1>
	<h3>et je suis développeur Web.</h3>
	<p>
		Je suis un développeur web spécialisé dans la création du front-end de tout site web, je
		développe également des applications back-end à intégrer aux solutions front-end que je crée.
		Après avoir obtenu mon diplôme, <span
			>je suis maintenant à la recherche d'un poste de développeur Web.</span
		>
	</p>
	<div class="pt-8">
		<Button
			on:click={openModal}
			primary="primary border-2 border-green p-4 rounded w-fit text-green trasition duration-500"
			>Envoi une message ...
		</Button>
	</div>
</section>
