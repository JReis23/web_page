<script lang="ts">
export let color: string | null;
export let className: string | null;
export let closeModal: () => void;
</script>

<svg
	on:click={closeModal}
	on:keydown={closeModal}
	class={className}
	tabindex="0"
	role="button"
	aria-label="Description of SVG action"
	width="36px"
	height="36px"
	stroke-width="1"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	color="#000000"
	><path
		d="M9.87871 14.1213L12 12M14.1213 9.87868L12 12M12 12L9.87871 9.87868M12 12L14.1213 14.1213"
		class={color}
		stroke="#000000"
		stroke-width="1"
		stroke-linecap="round"
		stroke-linejoin="round"
	></path><path
		d="M21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6Z"
		class={color}
		stroke="#000000"
		stroke-width="1"
		stroke-linecap="round"
		stroke-linejoin="round"
	></path></svg
>

<style>
svg {
	&:hover {
		fill: var(--color-slate_opacity);
	}
}
</style>
