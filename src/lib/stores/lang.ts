import { writable } from 'svelte/store';

const defaulLang = navigator.language.slice(0, 2);
defaulLang.toUpperCase();

console.log({ defaulLang });

export const lang = writable(defaulLang);
