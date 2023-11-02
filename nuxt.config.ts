// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	components: false,
	imports: {
		autoImport: false
	},
	devtools: { enabled: true },
	css: ['assets/styles/index.scss'],
	modules: [
		'nuxt-simple-sitemap',
		'nuxt-simple-robots',
		'nuxt-yandex-metrika',
		'@nuxtjs/google-fonts',
		'@nuxtjs/svg-sprite'
	],
	yandexMetrika: {
		id: process.env.YANDEX_METRIKA_ID,
		debug: process.env.NODE_ENV !== 'production',
		delay: 0,
		cdn: false,
		verification: null,
		options: {
			webvisor: true
		}
	},
	robots: {
		// mergeWithRobotsTxtPath: 'assets/custom/robots.txt'
		disallow: ['/secret', '/admin'],
		allow: '/admin/login'
	},
	site: {
		url: import.meta.env.NUXT_PUBLIC_SITE_URL
	},
	svgSprite: {
		input: '~/assets/sprite/svg',
		output: '~/assets/sprite/gen'
	},
	postcss: {
		plugins: {
			// 'postcss-nested': {},
			// "postcss-custom-media": {}
		}
	},
	googleFonts: {
		display: 'swap',
		download: true,
		families: {
			Inter: [400, 500, 600, 700]
		}
	}
});
