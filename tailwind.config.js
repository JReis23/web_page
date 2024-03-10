import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			CodePro: ['Source Code Pro'],
			KodeMono: ['Kode Mono']
		},
		colors: {
			green: 'hsl(var(--color-green) / <alpha-value>)',
			light_green: 'hsl(var(--color-light_green) / <alpha-value>)',
			dark_navy: 'hsl(var(--color-dark_navy) / <alpha-value>)',
			navy: 'hsl(var(--color-navy) / <alpha-value>)',
			light_navy: 'hsl(var(--color-light_navy) / <alpha-value>)',
			lightest_navy: 'hsl(var(--color-lightest_navy) / <alpha-value>)',
			slate: 'hsl(var(--color-slate) / <alpha-value>)',
			light_slate: 'hsl(var(--color-light_slate) / <alpha-value>)',
			lightest_slate: 'hsl(var(--color-lightest_slate) / <alpha-value>)',
			white: 'hsl(var(--color-white) / <alpha-value>)'
		},
		extend: {}
	},
	plugins: [forms]
};
