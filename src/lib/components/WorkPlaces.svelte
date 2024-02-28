<script lang="ts">
import Button from '$lib/ui/Button.svelte';
import FR from '$lib/texts/FR.json';
import EN from '$lib/texts/EN.json';

let societyButton: string | null = 'Lectra';
const handleSociety =
	(society: string) =>
	(event: CustomEvent<any>): void => {
		societyButton = society;
	};

let className = 'border-l-2 hover:border-green primary hover:text-green p-2 text-start text-sm';
</script>

<section id="experience" class="workplaces">
	<h2 class="numbered-heading">Expérience</h2>
	<div class="container flex pt-6">
		<div class="flex flex-col pr-10">
			{#each EN.workplaces as item}
				<Button
					on:click={handleSociety(item.company)}
					active={societyButton === item.company ? 'active' : ''}
					className={className}>{item.company}</Button
				>
			{/each}
		</div>
		<div class="container">
			<!-- content here -->
			{#each EN.workplaces as item}
				{#if societyButton === item.company}
					<div>
						<h3>
							{item.position}
							<span class="font-KodeMono text-green"
								>@ <a class="hover:before:border-b-green" href={item.company_url} target="_blank"
									>{item.company}</a
								></span
							>
						</h3>
						<p>{item.date}</p>
					</div>
					<ul class="pt-4">
						{#each Object.entries(item.details) as [key, i]}
							<li class="font-CodePro before:text-green">{i}</li>
						{/each}
					</ul>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
a {
	display: inline-block;
	text-decoration: none;
	position: relative;
}

li {
	font-size: 1.1em;
	padding: auto;
}

li::before {
	content: '▹';
	margin-right: 1.175rem;
}

a:hover::before {
	content: '';
	position: absolute;
	left: 0;
	bottom: 0;
	width: 0;
	border-bottom: solid 1px hsl(var(--color-green));
	animation: border_anim 0.5s forwards;
}

@keyframes border_anim {
	0% {
		width: 0%;
	}
	100% {
		width: 100%;
	}
}

@media (max-width: 768px) {
	li {
		padding: 0.375rem 1rem;
	}

	/* .buttons {
			overflow-x: scroll;
			-webkit-overflow-scrolling: touch;
			width: 98vw;
			white-space: nowrap;
		} */
}
</style>
