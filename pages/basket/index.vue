<template>
	<the-page>
		<client-only>
			<base-section class="section-basket" :title="noBasket ? 'В корзине отсутствуют товары' : 'Товары в корзине'">
				<div class="basket__section-container">
					<the-basket-product v-for="item in items" :key="item.id" :item="item" />
				</div>
				<div v-if="noBasket" class="basket__to-main">
					<span>Перейти на главную</span>
					<base-icon :icon="Icons44ArrowUp"></base-icon>
				</div>
				<div class="basket__add-info" :class="{ 'no-basket': noBasket }">
					<span class="basket__not-oferta">
						Расчёт носит информационный характер и не является публичной офертой. Точная сумма будет рассчитана после
						связи с клиентом
					</span>
					<div class="basket__total-sum-wrapper">
						<span class="basket__total-sum-title">Продукция на сумму</span>
						<span class="basket__total-sum">
							{{ sum.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }) }}</span
						>
					</div>
				</div>
				<basket-form :items="items"></basket-form>
			</base-section>
		</client-only>
	</the-page>
</template>
<script setup lang="ts">
import type { Basket } from '/pages/basket/index';
import { Icons44ArrowUp } from '#icons';
import { computed, definePageMeta, onMounted, ref, watch } from '#imports';
import BaseSection from '~/components/base-section.vue';
import BaseIcon from '~/components/elements/base-icon';
import BasketForm from '~/components/forms/basket-form';
import TheBasketProduct from '~/components/landing/the-basket-product';
import ThePage from '~/components/the-page';
import { useStoreBasket } from '~/store/storeBasket';
import type { Product } from '~/store/storeProduct';
import { useStoreProduct } from '~/store/storeProduct';
import { Pages } from '~/utils/pages';

definePageMeta({
	name: Pages.Basket
});
const basket = useStoreBasket();
const product = useStoreProduct();
const products = computed(() => {
	return product.items.reduce((map, item) => {
		map.set(item.id, item);
		return map;
	}, new Map<number, Product>());
});
const items = computed(() => {
	return Object.entries(basket.items).map(([id, count]) => {
		const item = products.value.get(+id) as Product;
		const costDiscount = () => {
			if (item.discount && count > item.discount.barrier) {
				return item.cost - item.discount.amount;
			}
			return item.cost;
		};
		return { ...item, sum: count * item.multifyer * costDiscount(), count };
	});
});
const sum = computed(() => {
	return items.value.reduce(function (x: number, item: Basket) {
		return x + item.sum;
	}, 0);
});
const noBasket = computed(() => {
	console.log(Object.entries(basket.items).length);
	if (!Object.entries(basket.items).length) {
		console.log(Object.entries(basket.items).length);
		return true;
	}
	return false;
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';

.section {
	display: grid;
	margin-top: #{utility.rem(156)};
}
.icon--trash-x {
	display: grid;
	grid-template-columns: 1fr;
	width: #{utility.rem(44)};
	height: #{utility.rem(44)};
	color: #e22b29;
}

.basket {
	&__add-info {
		display: grid;
		grid-template-columns: 6fr 5fr;
		justify-content: space-between;
		align-items: center;
		padding: #{utility.rem(16)} #{utility.rem(20)} #{utility.rem(16)} #{utility.rem(20)};
		border: 1px solid #eaecf0;
		border-radius: #{utility.rem(16)};
		background-color: var(--brand);
	}
	&__to-main {
		display: flex;
		padding: #{utility.rem(16)} #{utility.rem(20)} #{utility.rem(16)} #{utility.rem(20)};
		border-radius: #{utility.rem(16)};
		border: 1px solid #1d2939;
		margin-bottom: #{utility.rem(16)};
		> span {
			display: flex;
			flex: 1;
			justify-content: center;
			align-items: center;
			margin-left: #{utility.rem(44)};
			color: #1d2939;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			letter-spacing: #{utility.rem(-0.48)};
		}
	}
	&__not-oferta {
		display: grid;
		border-right: 1px solid rgb(255 255 255 / 64%);
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.72)};
	}
	&__total-sum-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding-left: #{utility.rem(20)};
	}

	&__total-sum-title {
		display: grid;
		justify-content: end;
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: normal;
		letter-spacing: #{utility.rem(-0.48)};
	}

	&__total-sum {
		margin-left: #{utility.rem(16)};
		color: #fff;
		font-weight: 600;
		font-style: normal;
		font-size: #{utility.rem(32)};
		line-height: normal;
		letter-spacing: #{utility.rem(-0.64)};
	}

	&__cultures-title {
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
	}

	&__cultures-cost {
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.54)};
	}
}

.basket__section-container {
	display: grid;
	gap: #{utility.rem(16)};
	.basket-product {
		border-bottom: 1px solid #eaecf0;
	}

	.basket-product:nth-last-child(-n + 1) {
		border-bottom: none;
	}
}
.no-basket {
	background-color: #f6f7f7;
	border: none;
	> span {
		color: #1d2939;
	}
	.basket__total-sum-title {
		color: #1d2939;
	}
	.basket__total-sum {
		color: #1d2939;
	}
	.basket__not-oferta {
		border-right: 1px solid rgba(29, 41, 57, 0.64);
	}
}
.icon--arrow-up {
	width: #{utility.rem(44)};
	transform: rotate(45deg);
}
</style>
