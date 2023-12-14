import { computed, useSiteConfig } from '#imports';

export function useHost() {
	const siteConfig = useSiteConfig();

	return computed(() => {
		return siteConfig.url;
	});
}
