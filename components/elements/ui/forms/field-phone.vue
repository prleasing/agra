<script setup lang="ts">
import { Maskito } from '@maskito/core';
import { maskitoPhoneOptionsGenerator } from '@maskito/phone';
import metadata from 'libphonenumber-js/min/metadata';
import type { PropType } from 'vue';

import { onBeforeUnmount, onMounted, ref, templateRef, watch } from '#imports';

import FieldGroup from './field-group';

const props = defineProps({
	label: {
		type: String as PropType<string>,
		required: true
	},
	id: {
		type: String as PropType<string>,
		required: true
	},
	placeholder: {
		type: String as PropType<string>,
		required: false,
		default() {
			return null;
		}
	},
	modelValue: {
		type: String as PropType<string | undefined>,
		default() {
			return undefined;
		}
	}
});
const emit = defineEmits<{
	(e: 'update:modelValue', value: string | undefined): void;
}>();
const model = ref<string | undefined>(props.modelValue);
watch(model, (value) => emit('update:modelValue', value));
watch(
	() => props.modelValue,
	(value) => (model.value = value)
);
const focused = ref(false);

const $input = templateRef<HTMLInputElement>('$input');
let maskedInput: Maskito;
onMounted(() => {
	maskedInput = new Maskito(
		$input.value,
		maskitoPhoneOptionsGenerator({
			countryIsoCode: 'RU',
			strict: true,
			metadata
		})
	);
});
onBeforeUnmount(() => {
	maskedInput.destroy();
});
</script>

<template>
	<field-group :id="id" :label="label" class="field--phone" :focused="focused">
		<!-- eslint-disable vuejs-accessibility/form-control-has-label-->
		<input
			:id="id"
			ref="$input"
			v-model="model"
			class="field__control"
			type="tel"
			:placeholder="placeholder"
			@focus="focused = true"
			@blur="focused = false"
		/>
	</field-group>
</template>
