<script lang="ts">
import Button from '../ui/Button.svelte';
import FR from '$lib/texts/FR.json';

let text = FR.main[0];

export let openModal: () => void;
</script>

<section id="index">
	<h2>{text.intro}</h2>
	<h1>{text.name}</h1>
	<h3>{text.job}</h3>
	<p>
		{text.presentation}
	</p>
	<div class="pt-8">
		<Button
			on:click={openModal}
			className="primary border-2 border-green p-3 text-sm rounded w-fit text-green trasition duration-500"
			>{text.button}
		</Button>
	</div>
</section>
