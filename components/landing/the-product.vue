<template>
	<div class="product">
		<base-picture :width="379" :height="379" alt="grains-picture" :src="item.image" />
		<div class="product__info-wrapper">
			<div class="product__title">
				{{ item.title }}
				<span v-if="item.subtitle">{{ item.subtitle }}</span>
				<span v-if="!item.availability" class="product__available">Нет в наличии</span>
			</div>
			<div v-show="count > 0" class="product__counter">
				<stepper v-model="count" :item="item" :format="formatter" :measure="item.measure"></stepper>
				<button
					class="product__total-price"
					@mouseover="textShow"
					@focusin="textShow"
					@mouseleave="summaShow"
					@blur="summaShow"
				>
					<transition name="fade">
						<span v-if="!over" class="product__price-title">
							<client-only>
								<span>
									{{ `${sum} ₽` }}
								</span>
							</client-only>
							<client-only>
								<span v-if="item.discount" class="product__text-price">
									{{ `от ${format} ` }}
									<span class="product__discount-price"
										><span>{{ `-${item.discount.amount}₽/${item.measure}` }}</span></span
									></span
								>
							</client-only>
						</span>
					</transition>
					<transition name="fade-basket">
						<span v-if="over" class="product__price-title1">{{ 'В корзину' }}</span>
					</transition>
					<nuxt-link to="/basket"></nuxt-link>
				</button>
			</div>
			<div v-show="!count && item.availability" class="product__cost">
				<span>{{ item.cost }} ₽/{{ item.measure }}</span>
				<button class="product__icon-container" @click="count = 1">
					<base-icon :icon="Icons32ShoppingCart" />
				</button>
			</div>
			<div v-show="!item.availability" class="product__feedback">
				<span>Оставить заявку</span>
				<nuxt-link to="/#contact-form" @click="messagePut"></nuxt-link>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';

import { Icons32ShoppingCart } from '#icons';
import { computed, onMounted, ref } from '#imports';
import BaseIcon from '~/components/elements/base-icon';
import BasePicture from '~/components/elements/base-picture';
import Stepper from '~/components/elements/stepper';
import { useStoreBasket } from '~/store/storeBasket';
import { useStoreForm } from '~/store/storeForm';
import type { Product } from '~/store/storeProduct';
import { formatter } from '~/utils/formatter.ts';

const formField = useStoreForm();
const props = defineProps({
	item: {
		type: Object as PropType<Product>,
		required: true
	}
});
const basket = useStoreBasket();

const count = computed({
	get() {
		return basket.items[props.item.id];
	},
	set(value) {
		basket.items[props.item.id] = value;
	}
});
const format = computed(() => {
	if (props.item.discount) {
		return formatter(props.item.discount.barrier, props.item.measure);
	}
});

const showCounter = ref<boolean>(false);
const over = ref<boolean>(false);
// onClickOutside(target, (e) => {
// isShield.value = false;
// });
formatter(count.value, props.item.measure);

const sum = computed(() => {
	const multi = count.value * props.item.cost * props.item.multifyer;
	if (props.item.discount) {
		if (count.value > props.item.discount.barrier) {
			return count.value * (props.item.cost - props.item.discount.amount) * props.item.multifyer;
		}
	}
	return multi;
});

onMounted(() => {
	if (count.value > 0) {
		showCounter.value = true;
	}
});
function textShow() {
	over.value = true;
}
function summaShow() {
	over.value = false;
}
function messagePut() {
	formField.state.text = 'Прошу уведомить о поступлении товара "Сено"';
}
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.product {
	position: relative;
	max-height: #{utility.rem(379)};
	border-radius: #{utility.rem(16)};

	@include breakpoints.media-down('xl') {
		display: grid;
	}

	@include breakpoints.media-down('mmd') {
		display: block;
		width: 100%;
		height: auto;
		max-height: unset;
	}

	&__counter-button {
		border: none;
		background-color: #fff;
	}

	&__input-shield {
		display: flex;
		align-items: center;
		height: 100%;
		border: none;
		color: #1d2939;
		outline: none;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		pointer-events: none;
		appearance: none;
	}

	&__total-price {
		position: relative;
		display: flex;
		gap: #{utility.rem(4)};
		justify-content: center;
		align-items: center;
		width: 50%;
		padding: #{utility.rem(16)};
		border: none;
		border-radius: 0 #{utility.rem(8)} #{utility.rem(8)} 0;
		background-color: var(--brand);

		> a {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	&__discount-price {
		vertical-align: middle;
		padding-right: #{utility.rem(8)};
		padding-left: #{utility.rem(8)};
		border-radius: #{utility.rem(100)};
		background-color: rgb(255 255 255 / 24%);
		text-align: center;
	}

	&__text-price {
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.36)};

		@include breakpoints.media-down('xl') {
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(14)};
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.28)};
		}
	}

	&__feedback {
		display: flex;
		justify-content: center;
		padding: #{utility.rem(18)} #{utility.rem(16)} #{utility.rem(18)};
		border: 1px solid #fff;
		border-radius: #{utility.rem(8)};
		cursor: pointer;
		backdrop-filter: blur(12px);

		> span {
			color: #fff;
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(24)};
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.48)};
		}

		> a {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	&__feedback:hover span {
		color: var(--brand);
	}

	&__feedback:hover {
		border: 1px solid var(--brand);
	}

	&__price-title {
		position: absolute;
		top: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		text-align: center;
		opacity: 1;

		@include breakpoints.media-down('xl') {
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(18)};
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}

	&__price-title1 {
		position: absolute;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		margin: 0, auto;
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		opacity: 1;
	}

	&__sign-currency {
		color: rgb(255 255 255 / 64%);
		font-weight: 400;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
	}

	.stepper__counter-deck {
		display: flex;
		flex: 1;
		padding: #{utility.rem(16)};
		border-radius: #{utility.rem(8)} 0 0 #{utility.rem(8)};
		background-color: #fff;

		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(10)};
			padding-top: #{utility.rem(16)};
			padding-bottom: #{utility.rem(16)};
		}
	}

	&__counter {
		display: flex;
		width: 100%;
	}

	&__input-container {
		width: auto;
		height: 100%;
	}

	&__title {
		display: grid;
		width: fit-content;
		padding: #{utility.rem(16)};
		padding-right: #{utility.rem(24)};
		border-radius: #{utility.rem(8)};
		background-color: #fff;
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};

		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(8)};
			font-weight: 600;
			font-style: normal;
			font-size: #{utility.rem(18)};
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.36)};
		}

		span {
			color: #667085;
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(18)};
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.54)};
		}

		.product__available {
			color: #f00;
		}
	}

	&__info-wrapper {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100%;
		padding: #{utility.rem(16)};
		padding-bottom: #{utility.rem(16)};
		border-radius: #{utility.rem(16)};
		background: linear-gradient(180deg, rgb(29 41 57 / 0%) 0%, rgb(29 41 57 / 80%) 100%);

		@include breakpoints.media-down('xl') {
			position: absolute;
			top: 0;
			width: 100%;
		}
	}

	&__cost {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;

		> span {
			color: #fff;
			font-weight: 700;
			font-style: normal;
			font-size: #{utility.rem(42)};
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.96)};
			text-align: center;

			@include breakpoints.media-down('xl') {
				font-weight: 700;
				font-style: normal;
				font-size: #{utility.rem(24)};
				line-height: 115%;
				letter-spacing: #{utility.rem(-0.48)};
			}
		}
	}

	.picture {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		border-radius: #{utility.rem(16)};

		@include breakpoints.media-down('xl') {
			position: relative;
			width: 100%;
		}
	}

	.icon {
		width: #{utility.rem(32)};
	}
}

.product__icon-container {
	display: flex;
	padding: #{utility.rem(24)};
	border: none;
	border-radius: #{utility.rem(100)};
	background-color: #fff;
	color: #1d2939;
	opacity: 0;
	cursor: pointer;
	transition:
		opacity 300ms ease-in-out,
		background-color 300ms ease-in-out,
		color 300ms ease-in-out;

	@include breakpoints.media-down('xl') {
		opacity: 1;
	}
}

.product:hover .product__icon-container {
	opacity: 1;
}

.product__icon-container:hover {
	background-color: var(--brand);
	color: #fff;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	margin: 0;
	appearance: none;
}

img {
	display: inline-block;
	height: 100%;
}

.stepper__shield {
	width: 100%;
	height: 100%;
	border: none;
	color: #1d2939;
	outline: none;
	font-weight: 500;
	font-style: normal;
	font-size: #{utility.rem(24)};
	line-height: 115%;
	letter-spacing: #{utility.rem(-0.48)};
	text-align: center;
	appearance: none;
}

// .fade-enter-active,
// .fade-leave-active {
// 	transition: opacity 0.2s ease;
// 	opacity: 0;
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
// 	opacity: 0;
// 	transition-delay: 0.2s;
// }
// .fade-leave,
// .fade-enter-to {
// 	opacity: 1;
// 	transition-delay: 0.2s;
// }
// .fade-basket-enter-active,
// .fade-basket-leave-active {
// 	transition: opacity 0.2s ease;
// 	transition-delay: 0.1s;
// 	opacity: 0;
// }
// .fade-basket-enter, .fade-basket-leave-to /* .fade-leave-active до версии 2.1.8 */ {
// 	opacity: 0;
// }
// .fade-basket-leave,
// .fade-basket-enter-to {
// 	opacity: 1;
// 	transition-delay: 0.1s;
// }
</style>
