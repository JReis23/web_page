<script lang="ts">
import { fade } from 'svelte/transition';
export let isOpen: boolean = false;
</script>

{#if isOpen}
	<div
		class="fixed top-1/4 z-50 mx-auto h-[60%] w-2/3 rounded-md border border-green bg-dark_navy bg-opacity-20 bg-clip-padding backdrop-blur-lg backdrop-filter
	"
		transition:fade={{duration: 300}}
	>
		<div class="flex h-full w-full items-center justify-around">
			<slot />
		</div>
	</div>
{/if}
