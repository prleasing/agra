<template>
	<div class="cultures">
		<the-product v-for="item in productStore.items" :key="item.id" :item="item" />
	</div>
</template>
<script setup lang="ts">
import { ref } from '#imports';
import { useStoreBasket } from '~/store/storeBasket';
import { useStoreProduct } from '~/store/storeProduct';

import TheProduct from './the-product.vue';

const basket = useStoreBasket();
const productStore = useStoreProduct();
// const culturesObject = ref([
// 	{
// 		id: 1,
// 		title: 'Тритикале',
// 		subtitle: null,
// 		measure: 'кг',
// 		cost: 12,
// 		discount: 1,
// 		image: '/images/landing/products/tritikale.jpg',
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	},
// 	{
// 		id: 2,
// 		title: 'Ячмень',
// 		subtitle: null,
// 		measure: 'кг',
// 		cost: 11,
// 		discount: 1,
// 		image: '/images/landing/products/barley.jpg',
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	},
// 	{
// 		id: 3,
// 		title: 'Пшеница',
// 		subtitle: null,
// 		measure: 'кг',
// 		cost: 10,
// 		discount: 1,
// 		image: '/images/landing/products/wheat.jpg',
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	},
// 	{
// 		id: 4,
// 		title: 'Бинарный посев',
// 		subtitle: 'ячмень + горох',
// 		measure: 'кг',
// 		cost: 12,
// 		discount: 1,
// 		image: '/images/landing/products/pea.jpg',
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	},
// 	{
// 		id: 5,
// 		title: 'Фураж',
// 		subtitle: null,
// 		measure: 'кг',
// 		cost: 10,
// 		discount: 1,
// 		image: '/images/landing/products/fodder.jpg',
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	},
// 	{
// 		id: 6,
// 		title: 'Плющенное зерно',
// 		subtitle: 'ячмень',
// 		measure: 'кг',
// 		cost: 22,
// 		discount: 1,
// 		image: '/images/landing/products/rolled-barley.jpg',
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	},
// 	{
// 		id: 7,
// 		title: 'Плющенное зерно',
// 		subtitle: 'пшеница',
// 		measure: 'кг',
// 		cost: 25,
// 		discount: 1,
// 		image: '/images/landing/products/rolled-wheat.jpg',
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	},
// 	{
// 		id: 8,
// 		title: 'Сено',
// 		subtitle: null,
// 		measure: 'тюк',
// 		cost: 2500,
// 		discount: null,
// 		image: '/images/landing/products/hay.jpg',
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	},
// 	{
// 		id: 9,
// 		title: 'Солома',
// 		subtitle: null,
// 		measure: 'тюк',
// 		cost: 1500,
// 		image: '/images/landing/products/straw.jpg',
// 		discount: null,
// 		setDiscount() {
// 			if (this.discount) {
// 				return this.cost - this.discount;
// 			}
// 		}
// 	}
// ]);
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';

.cultures {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: #{utility.rem(16)};
	aspect-ratio: 1/1;
}
</style>
