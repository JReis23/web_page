<script lang="ts">
import { lang } from '$lib/stores/lang';
import FR from '$lib/texts/FR.json';
import EN from '$lib/texts/EN.json';

interface Info {
	title: string;
	presentation: { id: string; text: string }[];
}

let info: Info;

lang.subscribe((value) => {
	if (value === 'fr') {
		info = FR.me[0];
	} else if (value === 'en') {
		info = EN.me[0];
	} else {
		info = EN.me[0];
	}
});
</script>

<section id="me" class="me">
	<h2 class="numbered-heading">{info.title}</h2>
	<article>
		<div>
			<div class="about">
				{#each info.presentation as { id, text }}
					<p class="pb-2">{text}</p>
				{/each}
			</div>
			<div class="stack">
				<ul>
					<li>JavaScript</li>
					<li>Mongodb</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
				<ul>
					<li>Svelte</li>
					<li>SvelteKit</li>
					<li>Python</li>
					<li>Tailwind</li>
				</ul>
			</div>
		</div>
		<div class="photo">
			<picture>
				<img src="/img/me.jpg" alt="joao reis" />
			</picture>
		</div>
	</article>
</section>

<style>
article {
	display: flex;

	& .stack {
		display: flex;
	}

	& .about {
		max-width: 75ch;
		padding-right: 2rem;
	}
}

ul {
	padding-right: 5rem;
	padding-top: 3rem;
}

ul li {
	&::before {
		content: '▹';
		color: hsl(var(--color-green));
		margin-right: 1.175rem;
	}
}
picture {
	position: relative;
	display: inline-block;
	transition: 0.5s ease-in-out;
	border-radius: 5px;
	z-index: 1;

	&::before {
		content: '';
		border: 1px solid hsl(var(--color-green));
		position: absolute;
		top: 10px;
		left: 10px;
		width: 100%;
		height: 100%;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
	}

	&::after {
		content: '';
		background: hsl(166deg 100% 70% / 20%);
		position: absolute;
		display: block;
		width: 100%;
		top: 0;
		bottom: 0;
		transition: 0.5s ease-in-out;
		border-radius: 5px;
		z-index: 1;
	}

	&:hover {
		transition: 0.5s ease-in-out;
		transform: translateY(-3px);
	}

	&:hover::before {
		transition: 0.5s ease-in-out;
		transform: translateY(-5px);
		transform: translateX(-5px);
	}

	&:hover::after {
		background: none;
		transition: 0.5s ease-in-out;
		transform: translateY(-3px);
	}
}

img {
	border-radius: 5px;
	z-index: 1;
	position: relative;
	max-width: 15rem;
}
@media (max-width: 768px) {
	.photo {
		display: flex;
		justify-content: center;
		padding-top: 5rem;
	}

	ul {
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		padding: 2rem;
	}
}
</style>
