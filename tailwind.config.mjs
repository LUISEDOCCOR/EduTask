/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cWhite: "#f1f1f1",
				cGrey: "#7F7F7F",
				cBlack: "#151515"
			}
		},
	},
	plugins: [],
}
