<script lang="ts">
import { fade } from 'svelte/transition';
import Button from '$lib/ui/Button.svelte';
import CloseButton from '$lib/ui/CloseButton.svelte';
import { lang } from '$lib/stores/lang';
import FR from '$lib/texts/FR.json';
import EN from '$lib/texts/EN.json';

interface Contact {
	form: {
		name: string;
		email: string;
		message: string;
		button: string;
	};
}

let contact: Contact[];

lang.subscribe((value) => {
	if (value === 'fr') {
		contact = FR.message;
	} else if (value === 'en') {
		contact = EN.message;
	} else {
		contact = EN.message;
	}
});

export let form, errors, enhance: any, message;

export let closeModal: () => void;
</script>

<CloseButton color={'stroke-slate'} closeModal={closeModal} className={'absolute top-2 right-2'} />
<form class="flex w-3/4 min-w-72 max-w-full flex-col" action="/" method="POST" use:enhance>
	<label class="flex flex-col py-2 text-green" for="email">
		<span> {contact[0].form.email}</span>
		<input type="email" placeholder={contact[0].form.email} name="email" bind:value={$form.email} />
		{#if $errors?.email}
			<span class="">{$errors.email}</span>
		{/if}
	</label>
	<label class="flex flex-col py-2 text-green" for="name">
		<span>{contact[0].form.name}</span>
		<input type="text" placeholder={contact[0].form.name} name="name" bind:value={$form.name} />
		{#if $errors?.name}
			<span class="">{$errors.name}</span>
		{/if}
	</label>
	<label class="flex flex-col py-2 text-green" for="message">
		<span>{contact[0].form.message}</span>
		<textarea
			placeholder={contact[0].form.message}
			name="message"
			rows="4"
			bind:value={$form.message}
		/>
		{#if $errors?.message}
			<span class="">{$errors.message}</span>
		{/if}
	</label>
	<div class="self-end pt-4">
		<Button
			className={'secondary border-2 p-2 rounded w-32 trasition duration-500 text-sm'}
			on:click={closeModal}
			type={'button'}>Annuler</Button
		>
		<Button
			className={'primary border-2 border-green p-2 rounded w-32 text-green trasition duration-500 text-sm'}
			type={'submit'}>Envoyer</Button
		>
	</div>
	{#if $message}
		<div
			transition:fade
			class="form-input mt-4 rounded-md bg-green text-center transition duration-500"
		>
			<span class="text-dark_navy">{$message}</span>
		</div>
	{/if}
</form>
