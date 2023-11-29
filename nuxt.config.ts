// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';

export default defineNuxtConfig({
	components: false,
	imports: {
		autoImport: false
	},
	devtools: { enabled: true },
	css: ['assets/styles/index.scss', 'assets/styles/production.scss'],
	modules: [
		'@pinia-plugin-persistedstate/nuxt',
		'@pinia/nuxt',
		'nuxt-simple-sitemap',
		'nuxt-simple-robots',
		'nuxt-yandex-metrika',
		'@nuxtjs/google-fonts',
		'@nuxtjs/svg-sprite',
		'@nuxt/image',
		'@vueuse/nuxt'
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
	alias: {
		'@ui': fileURLToPath(new URL('./components/elements/ui', import.meta.url))
	},
	googleFonts: {
		display: 'swap',
		download: true,
		families: {
			Inter: [400, 500, 600, 700]
		}
	},
	runtimeConfig: {
		mail: {
			requestForm: {
				to: process.env.MAIL_REQUEST
			},
			smtp: {
				host: process.env.MAIL_HOST,
				port: process.env.MAIL_PORT,
				auth: {
					user: process.env.MAIL_USER,
					password: process.env.MAIL_PASSWORD
				}
			}
		},
		public: {
			apiHhLink: process.env.API_HH_LINK,
			phone: process.env.PHONE,
			email: process.env.EMAIL,
			locations: {
				postupalovo: process.env.LOCATION_POSTUPALOVO,
				ivanokazanka: process.env.LOCATION_IVANOKAZANKA
			}
		}
	},
	vite: {
		vue: {
			script: {
				defineModel: true,
				propsDestructure: true
			}
		}
	}
});


// , 'assets/styles/production.scss'