// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['nuxt-simple-sitemap', 'nuxt-simple-robots', 'nuxt-yandex-metrika'],
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
	postcss: {
		plugins: {
			// 'postcss-nested': {},
			// "postcss-custom-media": {}
		}
	}
});
