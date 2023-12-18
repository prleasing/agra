import { defineStore } from 'pinia';

import { reactive } from '#imports';

export interface State {
	name: string;
	phone: string;
	text: string;
	agree: boolean;
}
export const useStoreForm = defineStore('form', () => {
	const state = reactive({ name: '', phone: '', text: '', agree: false });
	return {
		state
	};
});
