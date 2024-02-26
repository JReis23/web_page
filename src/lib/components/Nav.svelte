<script>
// import Button from '../ui/Button.svelte';
// import { openNav } from '../stores/OpenNav';

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
		<ol class="flex">
			<li class="pr-8">
				<a
					class="transition duration-300 hover:text-green"
					href="#me"
					on:click|preventDefault={scrollIntoView}
				>
					Moi</a
				>
			</li>
			<li class="pr-8">
				<a
					class="transition duration-300 hover:text-green"
					href="#experience"
					on:click|preventDefault={scrollIntoView}
				>
					Expérience</a
				>
			</li>
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
		color: theme('colors.green');
	}
}
</style>
