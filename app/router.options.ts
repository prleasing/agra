import type { RouterOptions } from '@nuxt/schema';
import type { RouteRecordRaw } from 'vue-router';

import { useNuxtApp } from '#imports';

function removeIconsPage(routes: readonly RouteRecordRaw[]) {
	const index = routes.findIndex((route) => route.name === 'icons-page');
	routes[index].redirect = '/';
}
export default <RouterOptions>{
	routes(_routes) {
		return removeIconsPage(_routes);
	},
	scrollBehavior(to, from, savedPosition) {
		const nuxtApp = useNuxtApp();
		if (to.meta.name !== from.meta.name) {
			return new Promise((resolve) => {
				nuxtApp.hooks.hookOnce('page:finish', () => {
					setTimeout(() => {
						if (to.hash || savedPosition) {
							if (to.hash) {
								resolve({
									el: to.hash,
									left: 0,
									behavior: 'smooth'
								});
							} else {
								resolve({ ...savedPosition, behavior: 'smooth' });
							}
						} else {
							resolve({ left: 0, top: 0, behavior: 'smooth' });
						}
					}, 50);
				});
			});
		}
		if (to.hash) {
			return {
				el: to.hash,
				left: 0,
				behavior: 'smooth'
			};
		}
		return {};
	}
};
