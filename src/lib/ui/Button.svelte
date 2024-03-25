<script lang="ts">
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

function handleClick() {
	dispatch('click');
}

interface ButtonProps {
	type: 'reset' | 'submit' | 'button';
	cancel: string | null;
	href: string | null;
	rel: string | null;
	target: string | null;
	active: string | null;
	className: string | null;
}

export let type: ButtonProps['type'] = 'button';
export let cancel: ButtonProps['cancel'] = '';
export let href: ButtonProps['href'] = '';
export let rel: ButtonProps['rel'] = '';
export let target: ButtonProps['target'] = '';
export let active: ButtonProps['active'] = '';
export let className: ButtonProps['className'] = '';
</script>

{#if href}
	<a href={href} class={className} rel={rel} target={target}>
		<slot />
	</a>
{:else}
	<button
		type={type}
		class="{className} {cancel} {active}"
		on:click={handleClick}
		on:submit
		on:cancel
	>
		<slot />
	</button>
{/if}

<style>
.primary {
	&:hover {
		background-color: hsl(166deg 100% 70% / 20%);
	}
}

.secondary {
	&:hover {
		background-color: hsl(225deg 20% 61% / 20%);
	}
}

.active {
	border-left-color: hsl(166deg 100% 70%);
	color: hsl(166deg 100% 70%);
	&:active,
	&:hover {
		border-left-color: hsl(166deg 100% 70%);
		color: hsl(166deg 100% 70%);
		background-color: hsl(166deg 100% 70% / 20%);
	}
}
</style>
