<script setup lang="ts">
import type { PropType } from 'vue';

import { computed, ref, templateRef, useMousePressed, watch } from '#imports';

const props = defineProps({
	name: {
		type: String as PropType<string>,
		required: true
	},
	modelValue: {
		type: Boolean as PropType<boolean>,
		required: true,
		default: false
	}
});
const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
}>();
const model = ref<boolean>(props.modelValue);
watch(model, (value) => {
	emit('update:modelValue', value);
});
watch(
	() => props.modelValue,
	(value) => (model.value = value)
);
const $element = templateRef<HTMLElement>('$element');
const { pressed } = useMousePressed({
	target: $element
});
const classes = computed(() => {
	return [
		'checkbox',
		{
			'checkbox--checked': model.value,
			'checkbox--pressed': pressed.value
		}
	];
});
</script>

<template>
	<label ref="$element" :for="name" :class="classes">
		<span class="checkbox__indicator">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="m3.333 8 3.334 3.333 6.666-6.667"
				/>
			</svg>
		</span>
		<slot />
		<input :id="name" v-model="model" class="checkbox__control" type="checkbox" />
	</label>
</template>

<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/components/forms';

.checkbox {
	$self: &;

	position: relative;
	display: grid;
	grid-template-columns: #{utility.rem(24)} auto;
	gap: #{utility.rem(8)};
	margin: #{utility.rem(-8)} #{utility.rem(0)};
	padding: #{utility.rem(8)};
	border-radius: #{utility.rem(12)};
	color: #fff;
	font-weight: 500;
	font-style: normal;
	font-size: #{utility.rem(18)};
	line-height: 135%;
	letter-spacing: #{utility.rem(-0.72)};
	cursor: pointer;

	& &__indicator {
		display: inline-flex;
		width: #{utility.rem(24)};
		height: #{utility.rem(24)};
		border: #{utility.rem(2)} solid #fff;
		border-radius: #{utility.rem(1000)};
		color: transparent;
		transition: background-color 200ms ease-in-out;
	}

	&__control {
		@include utility.sr-only;
	}
	&#{$self}--checked {
		#{$self}__indicator {
			background-color: #fff;
			color: var(--brand);
		}
	}

	@include utility.has-hover {
		background: rgb(255 255 255 / 17%);
	}
}
</style>
