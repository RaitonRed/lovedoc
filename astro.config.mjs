// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Love Documention',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RaitonRed/lovedoc' }],
			sidebar: [
				{
					label: "Introduction",
					items: [
						{ label: 'Before we Begin', slug: 'introduction/before-we-begin' },
						{ label: 'What is love', slug: 'introduction/what-is-love' },
						{ label: 'Stages of Love', slug: 'introduction/stages-of-love' }
					]
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
