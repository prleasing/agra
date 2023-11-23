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

const props = defineProps({
	modelValue: {
		type: Number,
		required: true,
		default: 1
	},
	format: {
		type: Function as PropType<(count: number, measure: string) => string>,
		required: false,
		default: (count: number) => count.toString()
	},
	measure: {
		type: String,
		required: false,
		default: 'кг'
	}
});
const emit = defineEmits<{
	(e: 'update:modelValue', value: number): void;
}>();

// const unit = computed(() => {
// 	if (props.item.measure === 'кг') {
// 		return 'т';
// 	}
// 	return 'шт';
// });

const target = ref<HTMLElement>();
const model = ref<number>(props.modelValue);
const isShield = ref<boolean>(true);
function counterMinus() {
	if (model.value > 1) {
		model.value--;
	}
}
function counterPlus() {
	model.value++;
}
function shieldActivate(e) {
	isShield.value = true;
	e.target.value = 1;
}
function onInput(event: Event) {
	const input = event.target as HTMLInputElement;
	model.value = Number(input.value);
	if (Number(input.value) < 0) {
		model.value = 0;
	}
}
function onFocus(event: Event) {
	const input = event.target as HTMLInputElement;
	isShield.value = false;
}
watch(model, () => {
	emit('update:modelValue', model.value);
});
watch(
	() => props.modelValue,
	() => {
		// model.value = 1;
		model.value = props.modelValue;
	}
);
onClickOutside(target, () => {
	isShield.value = true;
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';

.stepper__counter-button {
	display: flex;
	align-items: center;
	border: none;
	background-color: transparent;
	cursor: pointer;
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

	// width: 50%;
	background-color: var(--brand);
}

.stepper__input-shield {
	display: flex;
	align-items: center;
	height: 100%;
	border: none;
	color: #1d2939;

	// width: 100%;
	// text-align: center;
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
}

.icon {
	width: #{utility.rem(32)};
}

.stepper__input-container {
	position: relative;
}
</style>
