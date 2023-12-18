import { defineStore } from 'pinia';

import { ref } from '#imports';

export interface Product {
	id: number;
	title: string;
	subtitle: null | string;
	measure: string;
	cost: number;
	multifyer: number;
	discount: Discount | null;
	image: string;
	availability: boolean;
	// sum?: number | undefined;
}
interface Discount {
	amount: number;
	barrier: number;
}
export const useStoreProduct = defineStore(
	'products',
	() => {
		const items = ref<Product[]>([
			{
				id: 1,
				title: 'Тритикале',
				subtitle: null,
				measure: 'кг',
				cost: 10.5,
				multifyer: 1000,
				discount: {
					amount: 1,
					barrier: 10
				},
				image: '/images/landing/products/tritikale.jpg',
				availability: true
			},
			{
				id: 2,
				title: 'Ячмень',
				subtitle: null,
				measure: 'кг',
				cost: 10,
				multifyer: 1000,
				discount: {
					amount: 1,
					barrier: 10
				},
				image: '/images/landing/products/barley.jpg',
				availability: true
			},
			{
				id: 3,
				title: 'Пшеница',
				subtitle: null,
				measure: 'кг',
				cost: 11,
				multifyer: 1000,
				discount: {
					amount: 1,
					barrier: 10
				},
				image: '/images/landing/products/wheat.jpg',
				availability: true
			},
			{
				id: 4,
				title: 'Бинарный посев',
				subtitle: 'ячмень + горох',
				measure: 'кг',
				cost: 12,
				multifyer: 1000,
				discount: {
					amount: 1,
					barrier: 10
				},
				image: '/images/landing/products/pea.jpg',
				availability: true
			},
			{
				id: 5,
				title: 'Фураж',
				subtitle: null,
				measure: 'кг',
				cost: 10,
				multifyer: 1000,
				discount: {
					amount: 1,
					barrier: 10
				},
				image: '/images/landing/products/fodder.jpg',
				availability: true
			},
			{
				id: 6,
				title: 'Плющенное зерно',
				subtitle: 'ячмень',
				measure: 'кг',
				cost: 22,
				multifyer: 1000,
				discount: {
					amount: 1,
					barrier: 10
				},
				image: '/images/landing/products/rolled-barley.jpg',
				availability: true
			},
			{
				id: 7,
				title: 'Плющенное зерно',
				subtitle: 'пшеница',
				measure: 'кг',
				cost: 25,
				multifyer: 1000,
				discount: {
					amount: 1,
					barrier: 10
				},
				image: '/images/landing/products/rolled-wheat.jpg',
				availability: true
			},
			{
				id: 8,
				title: 'Сено',
				subtitle: null,
				measure: 'тюк',
				cost: 2500,
				multifyer: 1,
				discount: null,
				image: '/images/landing/products/hay.jpg',
				availability: false
			},
			{
				id: 9,
				title: 'Солома',
				subtitle: null,
				measure: 'тюк',
				cost: 1500,
				multifyer: 1,
				image: '/images/landing/products/straw.jpg',
				discount: null,
				availability: true
			}
		]);
		return {
			// counterValue,
			items
		};
	},
	{
		persist: true
		// storage: persistedState.localStorage
	}
);
