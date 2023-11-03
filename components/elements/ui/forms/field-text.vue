<script setup lang="ts">
import type { PropType } from 'vue';

import { ref, watch } from '#imports';

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
	},
	error: {
		type: String as PropType<string>,
		required: false,
		default: undefined
	}
});

const emit = defineEmits<{
	(e: 'update:modelValue', value: string | undefined): void;
	(e: 'update:error', value: string | undefined): void;
}>();
const model = ref<string | undefined>(props.modelValue);
watch(model, (value) => {
	emit('update:modelValue', value);
	emit('update:error', undefined);
});
watch(
	() => props.modelValue,
	(value) => (model.value = value)
);

const focused = ref(false);
</script>

<template>
	<field-group :id="id" :label="label" class="field--text" :focused="focused" :error="error">
		<!-- eslint-disable vuejs-accessibility/form-control-has-label-->
		<input
			:id="id"
			v-model="model"
			class="field__control"
			type="text"
			:placeholder="placeholder"
			@focus="focused = true"
			@blur="focused = false"
		/>
	</field-group>
</template>
