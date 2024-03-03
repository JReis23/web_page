<script lang="ts">
// import Button from '../ui/Button.svelte';
// import { openNav } from '../stores/OpenNav';
import { lang } from '$lib/stores/lang';
import FR from '$lib/texts/FR.json';
import EN from '$lib/texts/EN.json';

interface Nav {
	me: string;
	experience: string;
}

let nav: Nav[];

lang.subscribe((value) => {
	if (value === 'fr') {
		nav = FR.nav;
	} else if (value === 'en') {
		nav = EN.nav;
	} else {
		nav = EN.nav;
	}
});

function handleLang(event: Event) {
	const selectedValue = (event.target as HTMLSelectElement).value;
	lang.set(selectedValue);
}

let y = 0;
let onMove = 'scrolled';

// const handle = () => {
// 	$openNav = !$openNav;
// };

$: y;

console.log(y);

function scrollIntoView({ target }) {
	const el = document.querySelector(target.getAttribute('href'));
	if (!el) return;
	el.scrollIntoView({
		behavior: 'smooth'
	});
}
</script>

<header class="fixed left-0 top-0 z-10 w-full py-4">
	<nav class="flex justify-between">
		<div class="logo w-14">
			<img src="/img/vectorpaint.svg" alt="logo joao reis" />
		</div>
		<ol class="flex items-center">
			<li class="pr-8">
				<a
					class="transition duration-300 hover:text-green"
					href="#me"
					on:click|preventDefault={scrollIntoView}
				>
					{nav[0].me}</a
				>
			</li>
			<li class="pr-8">
				<a
					class="transition duration-300 hover:text-green"
					href="#experience"
					on:click|preventDefault={scrollIntoView}
				>
					{nav[0].experience}</a
				>
			</li>
			<div class="pr-2">
				<select
					name=""
					id=""
					class="rounded-full border-none bg-navy text-green focus:ring-green"
					on:change={handleLang}
				>
					<option value="fr">fr</option>
					<option value="en">en</option>
					<option value="pt">pt</option>
				</select>
			</div>
		</ol>
	</nav>
</header>

<style>
li {
	counter-increment: item 1;
}

a {
	&::before {
		content: '0' counter(item) '. ';
		color: hsl(var(--color-green));
	}
}
</style>
