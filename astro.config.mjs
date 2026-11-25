// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://aircrushin.github.io',
	trailingSlash: 'always',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Instrument Serif',
			cssVariable: '--font-display',
			styles: ['normal', 'italic'],
			weights: [400],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Source Serif 4',
			cssVariable: '--font-serif',
			styles: ['normal', 'italic'],
			weights: [400, 600],
			fallbacks: [
				'Noto Serif SC',
				'Source Han Serif SC',
				'Songti SC',
				'SimSun',
				'Georgia',
				'serif',
			],
		},
	],
});
