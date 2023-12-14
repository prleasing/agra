<script setup lang="ts">
import type { PropType } from 'vue';

import { computed } from '#imports';

defineOptions({
	inheritAttrs: false
});

const props = defineProps({
	label: {
		type: String as PropType<string>,
		required: true
	},
	id: {
		type: String as PropType<string>,
		required: true
	},
	focused: {
		type: Boolean as PropType<boolean>,
		required: false,
		default: false
	},
	error: {
		type: String as PropType<string>,
		required: false,
		default: undefined
	}
});

const classes = computed(() => {
	return [
		'field',
		{
			'field--focused': props.focused,
			'field--error': props.error
		}
	];
});
</script>

<template>
	<div class="field-group">
		<div :class="classes" v-bind="$attrs">
			<!-- eslint-disable vuejs-accessibility/label-has-for-->
			<label class="field__label" :for="id">{{ label }}</label>
			<slot />
		</div>
		<span v-if="error" class="field-error"> {{ error }}</span>
	</div>
</template>

<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/components/forms';
@use 'assets/styles/breakpoints';

.field {
	$self: &;

	position: relative;
	display: grid;
	padding: #{utility.rem(16)} #{utility.rem(24)};
	border-radius: #{utility.rem(12)};
	background: rgb(255 255 255 / 17%);
	color: #fff;
	transition: background-color 100ms ease-in-out;

	@include breakpoints.media-down('xl') {
		padding: #{utility.rem(12)} #{utility.rem(16)};
	}

	& &__label {
		border-radius: inherit;
		color: inherit;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.54)};
		cursor: text;

		@include breakpoints.media-down('xl') {
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(16)};
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
		}

		&::after {
			content: '';
			position: absolute;
			inset: 0;
			border-radius: inherit;
		}
	}

	& :deep(#{&}__control) {
		@include forms.reset;
		@include forms.base;

		width: 100%;
		color: inherit;

		&:-internal-autofill-selected:not(:focus) {
			-webkit-text-fill-color: #fff !important;
		}
	}

	&#{$self}--focused {
		background-color: #fff;
		color: #1d2939;

		:deep(#{$self}__control) {
			color: initial;

			&::placeholder {
				color: rgb(29 41 57 / 42%);
			}
		}
	}
	&#{$self}--error {
		#{$self}__label {
			color: #e03533;
		}
	}
}

.field-error {
	display: block;
	width: 100%;
	padding: #{utility.rem(8)} #{utility.rem(24)} #{utility.rem(16)};
	border-radius: inherit;
	color: #e03533;
	font-weight: 500;
	font-style: normal;
	font-size: #{utility.rem(18)};
	line-height: 135%;
	letter-spacing: #{utility.rem(-0.72)};
}
</style>
