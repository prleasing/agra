import { defineStore } from 'pinia';

import { persistedState, ref } from '#imports';

export const useStoreBasket = defineStore(
	'basket',
	() => {
		const items = ref<Record<number, number>>({});
		return {
			items
		};
	},
	{
		persist: {
			storage: persistedState.localStorage
		}
	}
);
