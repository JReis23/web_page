<script>
import { fade } from 'svelte/transition';
export let isOpen = false;
</script>

{#if isOpen}
	<div
		class="fixed top-1/4 mx-auto h-1/2 w-2/3 rounded-md border border-green bg-dark_navy bg-opacity-20 bg-clip-padding backdrop-blur-lg backdrop-filter
	"
		transition:fade={{duration: 300}}
	>
		<div class="flex h-full w-full items-center justify-around">
			<slot />
		</div>
	</div>
{/if}
