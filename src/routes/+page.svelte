<script lang="ts">
import Contact from '$lib/components/Contact.svelte';
import Main from '$lib/components/Main.svelte';
import Nav from '$lib/components/Nav.svelte';
import Modal from '$lib/components/Modal.svelte';
import type { PageData } from './$types';
import { superForm } from 'sveltekit-superforms/client';
export let data: PageData;
let isOpen = false;

const { form, enhance, errors, message, reset } = superForm(data.form);

function openModal() {
	isOpen = true;
}

function closeModal() {
	reset();
	isOpen = false;
}
</script>

<Nav />
<Main openModal={openModal} />
<Modal isOpen={isOpen}>
	<Contact
		closeModal={closeModal}
		enhance={enhance}
		form={form}
		errors={errors}
		message={message}
		reset={reset}
	/>
</Modal>
