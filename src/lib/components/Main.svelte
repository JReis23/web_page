<script lang="ts">
import Button from '../ui/Button.svelte';
import { lang } from '$lib/stores/lang';
import FR from '$lib/texts/FR.json';
import EN from '$lib/texts/EN.json';

interface Info {
	intro: string;
	name: string;
	job: string;
	presentation: string;
	button: string;
}

let info: Info;

lang.subscribe((value) => {
	console.log({ value });
	if (value === 'fr') {
		info = FR.main[0];
	} else if (value === 'en') {
		info = EN.main[0];
	}
});

export let openModal: () => void;
</script>

<section id="index">
	<h2>{info.intro}</h2>
	<h1>{info.name}</h1>
	<h3>{info.job}</h3>
	<p>
		{info.presentation}
	</p>
	<div class="pt-8">
		<Button
			on:click={openModal}
			className="primary border-2 border-green p-3 text-sm rounded w-fit text-green trasition duration-500"
			>{info.button}
		</Button>
	</div>
</section>
