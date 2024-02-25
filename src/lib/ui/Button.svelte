<script lang="ts">
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

function handleClick() {
	dispatch('click');
}

interface ButtonProps {
	primary: string | null;
	secondary: string | null;
	type: 'reset' | 'submit' | 'button';
	cancel: string | null;
	href: string | null;
	rel: string | null;
	target: string | null;
}

export let primary: ButtonProps['primary'] = '';
export let secondary: ButtonProps['secondary'] = '';
export let type: ButtonProps['type'] = 'button';
export let cancel: ButtonProps['cancel'] = '';
export let href: ButtonProps['href'] = '';
export let rel: ButtonProps['rel'] = '';
export let target: ButtonProps['target'] = '';
</script>

{#if href}
	<a href={href} class="{primary} {secondary}" rel={rel} target={target}>
		<slot />
	</a>
{:else}
	<button
		type={type}
		class="{primary} {secondary} {cancel}"
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
</style>
