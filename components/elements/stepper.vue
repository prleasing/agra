<template>
	<div ref="target" class="stepper__counter-deck">
		<button class="stepper__counter-button" @click="counterMinus">
			<base-icon :icon="Icons44Minus" />
		</button>
		<div class="stepper__input-container">
			<!-- <div v-if="!isShield" class="product__input-shield">1 {{ unit }}</div> -->
			<label for="unit">
				<input
					id="unit"
					ref="inputField"
					:value="model"
					type="number"
					min="0"
					@input="onInput"
					@focus="onFocus"
					@change="onChange"
					@blur="isShield = true"
				/>
				<client-only>
					<span v-if="isShield" ref="inputShield" class="stepper__shield" type="text">
						{{ format(model, props.measure) }}
					</span>
				</client-only>
			</label>
		</div>
		<button class="stepper__counter-button" @click="counterPlus">
			<base-icon :icon="Icons44Plus" />
		</button>
	</div>
</template>
<script setup lang="ts">
import { Icons44Minus, Icons44Plus } from '#icons';
import { onClickOutside, type PropType, ref, watch } from '#imports';
import BaseIcon from '~/components/elements/base-icon';
import type { Basket } from '~/components/landing/the-basket-product';
import { useStoreBasket } from '~/store/storeBasket';

const basket = useStoreBasket();
const props = defineProps({
	modelValue: {
		type: Number as PropType<number>,
		required: true,
		default: 1
	},
	format: {
		type: Function as PropType<(count: number, measure: string) => string>,
		required: false,
		default: (count: number) => count.toString()
	},
	measure: {
		type: String as PropType<string>,
		required: false,
		default: 'кг'
	},
	item: {
		type: Object as PropType<Basket>,
		required: false,
		default: () => {}
	}
});
const emit = defineEmits<{
	(e: 'update:modelValue', value: number): void;
}>();

const target = ref<HTMLElement>();
const model = ref<number>(props.modelValue);
const isShield = ref<boolean>(true);
function counterMinus() {
	if (model.value > 1) {
		model.value--;
	}
	if (model.value <= 1) {
		const element: String | undefined = Object.keys(basket.items).find((element) => +element === props.item.id);
		if (element) {
			delete basket.items[Number(element)];
		}
	}
}
function counterPlus() {
	model.value++;
}

function onInput(event: Event) {
	const input = event.target as HTMLInputElement;
	model.value = Number(input.value);
	if (Number(input.value) < 1) {
		model.value = 0;
	}
	if (model.value < 1) {
		const element: String | undefined = Object.keys(basket.items).find((element) => +element === props.item.id);
		if (element) {
			delete basket.items[Number(element)];
		}
	}
}
function onFocus(event: Event) {
	const input = event.target as HTMLInputElement;
	isShield.value = false;
	if (model.value < 1) {
		const element: String | undefined = Object.keys(basket.items).find((element) => +element === props.item.id);
		if (element) {
			delete basket.items[Number(element)];
		}
	}
}
function onChange(event: Event) {
	// const input = event.target as HTMLInputElement;
	// isShield.value = false;
	if (model.value < 1) {
		const element: String | undefined = Object.keys(basket.items).find((element) => +element === props.item.id);
		if (element) {
			delete basket.items[Number(element)];
		}
	}
}
watch(model, () => {
	emit('update:modelValue', model.value);
});
watch(
	() => props.modelValue,
	() => {
		model.value = props.modelValue;
	}
);
onClickOutside(target, () => {
	isShield.value = true;
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.stepper__counter-button {
	display: flex;
	align-items: center;
	border: none;
	background-color: transparent;
	color: #1d2939;
	cursor: pointer;

	@include breakpoints.media-down('xl') {
		padding: 0;
	}
}

.stepper__counter-button:hover .icon {
	color: var(--brand);
}

.product__total-price {
	display: flex;
	gap: #{utility.rem(4)};
	justify-content: center;
	align-items: center;
	padding: #{utility.rem(16)};
	border-radius: 0 #{utility.rem(8)} #{utility.rem(8)} 0;
	background-color: var(--brand);
}

.stepper__input-shield {
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

.stepper__counter-deck {
	display: flex;
	align-items: center;
	padding: #{utility.rem(16)};
	border-radius: #{utility.rem(16)} 0 0 #{utility.rem(16)};
	background-color: #fff;
}

#unit {
	width: 100%;
	height: 100%;
	border: none;
	background-color: transparent;
	color: #1d2939;
	outline: none;
	font-weight: 500;
	font-style: normal;
	font-size: #{utility.rem(24)};
	line-height: 115%;
	letter-spacing: #{utility.rem(-0.48)};
	text-align: center;
	appearance: none;

	@include breakpoints.media-down('xl') {
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.36)};
	}
}

input[type='number']::-webkit-inner-spin-button {
	margin: 0;
	appearance: none;
}

input[type='number'] {
	appearance: textfield;
}

input[type='number']:hover,
input[type='number']:focus {
	appearance: number-input;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
	margin: 0;
	appearance: none;
}

.stepper__shield {
	position: absolute;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: #fff;
	color: #1d2939;
	font-weight: 500;
	font-style: normal;
	font-size: #{utility.rem(24)};
	line-height: 115%;
	letter-spacing: #{utility.rem(-0.48)};
	pointer-events: none;

	@include breakpoints.media-down('xl') {
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.36)};
	}
}

.icon {
	width: #{utility.rem(32)};
}

.stepper__input-container {
	position: relative;
}
</style>
