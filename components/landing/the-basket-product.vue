<template>
	<div class="basket-product">
		<div class="basket-product__container">
			<div class="basket-product__upper">
				<div class="basket-product__image">
					<base-picture :width="80" :height="80" alt="culture-photo" :src="item.image"></base-picture>
				</div>
				<div class="basket-product__cultures-info">
					<div class="basket-product__cultures-title">{{ item.title }}</div>
					<span v-if="item.subtitle" class="basket-product__cultures-subtitle">{{ item.subtitle }}</span>
					<div class="basket-product__info-wrapper">
						<div v-if="discount" class="basket-product__price-discount">
							{{
								item.cost.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })
							}}/{{ item.measure }}
						</div>
						<div class="basket-product__price-info">
							{{
								discountCost.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })
							}}/{{ item.measure }}
						</div>
					</div>
				</div>
			</div>
			<!-- <div> -->
			<!-- <div v-if="discount" class="basket-product__price-discount">
					{{ item.cost.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }) }}/{{
						item.measure
					}}
				</div> -->
			<!-- <div class="basket-product__price-info">
					{{
						discountCost.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 })
					}}/{{ item.measure }}
				</div> -->
			<!-- <div></div> -->
			<!-- </div> -->
			<div class="basket-product__lower">
				<div class="basket-product__sum-stepper-wrapper">
					<div class="basket-product__stepper">
						<stepper v-model="basket.items[item.id]" :format="formatter" :measure="item.measure"></stepper>
					</div>
					<div class="basket-product__sum">
						{{ item.sum?.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }) }}
					</div>
				</div>
				<button class="basket-product__icon-wrapper" @click="deleteItem">
					<base-icon :icon="Icons44TrashX"></base-icon>
				</button>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { Icons44TrashX } from '#icons';
import { computed, type PropType } from '#imports';
import BaseIcon from '~/components/elements/base-icon';
import BasePicture from '~/components/elements/base-picture';
import Stepper from '~/components/elements/stepper';
import { useStoreBasket } from '~/store/storeBasket';
import type { Product } from '~/store/storeProduct';
import { formatter } from '~/utils/formatter.ts';

export interface Basket extends Product {
	sum: number;
	count: number;
}

const props = defineProps({
	item: {
		type: Object as PropType<Basket>,
		required: true
	}
});
const basket = useStoreBasket();
function deleteItem() {
	const element: String | undefined = Object.keys(basket.items).find((element) => +element === props.item.id);
	if (element) {
		delete basket.items[Number(element)];
	}
}
const discount = computed(() => {
	if (props.item.discount && basket.items[props.item.id] > props.item.discount.barrier) {
		return true;
	}
	return false;
});
const discountCost = computed(() => {
	if (props.item.discount && basket.items[props.item.id] > props.item.discount.barrier) {
		return props.item.cost - props.item.discount.amount;
	}
	return props.item.cost;
});
formatter(basket.items[props.item.id], props.item.measure);
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.icon--trash-x {
	display: grid;
	grid-template-columns: 1fr;
	width: #{utility.rem(44)};
	height: #{utility.rem(44)};
	color: #e22b29;
	@include breakpoints.media-down('xl') {
		width: #{utility.rem(24)};
	}
}

.basket-product {
	&__icon-wrapper {
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	&__cultures-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-self: flex-start;
		width: 100%;
		height: 100%;
		@include breakpoints.media-down('xl') {
			height: auto;
			align-self: stretch;
		}
	}

	&__image {
		:deep(img) {
			border-radius: #{utility.rem(8)};
		}
	}

	&__container {
		display: grid;
		width: 100%;
		grid-template-columns: 6fr 6fr;
		gap: #{utility.rem(16)};
		padding-bottom: #{utility.rem(24)};
		@include breakpoints.media-down('xl') {
			display: flex;
			flex-direction: column;
		}
	}

	&__stepper {
		display: grid;
		max-width: 50%;
		@include breakpoints.media-down('xl') {
			display: flex;
			flex-direction: column;
			max-width: #{utility.rem(140)};
		}

		.stepper__counter-deck {
			border-radius: #{utility.rem(12)};
			background-color: #f6f7f7;
			backdrop-filter: blur(12px);
			@include breakpoints.media-down('xl') {
				padding: #{utility.rem(10)};
			}
		}

		.stepper__counter-button {
			background-color: #f6f7f7;
		}
	}

	&__add-info {
		display: grid;
		justify-content: space-between;
		align-items: center;
		padding: #{utility.rem(16)} #{utility.rem(20)} #{utility.rem(16)} #{utility.rem(20)};
		border: 1px solid #eaecf0;
		border-radius: #{utility.rem(16)};
		background-color: var(--brand);
	}

	&__not-oferta {
		display: grid;
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.72)};
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
	&__info-wrapper {
		display: flex;
		gap: #{utility.rem(16)};
		@include breakpoints.media-down('xl') {
			gap: #{utility.rem(8)};
		}
	}

	&__price-info {
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		text-align: center;
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.54)};
		}
	}
	&__upper {
		display: flex;
		gap: #{utility.rem(16)};
	}
	&__lower {
		display: flex;
		justify-content: space-between;
	}
	&__sum-stepper-wrapper {
		display: flex;
		gap: #{utility.rem(16)};
		align-items: center;
	}

	&__price-discount {
		color: #667085;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		text-align: center;
		text-decoration-line: line-through;
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 400;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.54)};
			text-decoration-line: strikethrough;
		}
	}

	&__sum {
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		text-align: center;
		justify-content: center;
		width: 50%;
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}

	&__cultures-title {
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
	&__cultures-subtitle {
		color: #667085;
		font-size: #{utility.rem(18)};
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.54)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(14)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.42)};
		}
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

:deep(.stepper__shield) {
	background-color: #f6f7f7;
}
</style>
