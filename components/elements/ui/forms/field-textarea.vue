<script setup lang="ts">
import type { PropType } from 'vue';

import { nextTick, ref, watch } from '#imports';

import FieldGroup from './field-group.vue';

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
	nextTick(() => {
		check();
	});
});
watch(
	() => props.modelValue,
	(value) => (model.value = value)
);
const focused = ref(false);
const textarea = ref();
const isFocus = ref<boolean>(false);
const heightText = ref<string>();
const isResize = ref<boolean>(false);

function blur() {
	isFocus.value = false;
}

function focus() {
	isFocus.value = true;
}
function check() {
	textarea.value.style.height = `${textarea.value.scrollHeight}px`;
	isResize.value = true;
}
</script>
<template>
	<field-group :id="id" :label="label" class="field--text" :focused="focused" :error="error">
		<!-- eslint-disable vuejs-accessibility/form-control-has-label-->
		<textarea
			:id="id"
			ref="textarea"
			v-model="model"
			:style="{ height: heightText }"
			class="field__control"
			type="text"
			:placeholder="placeholder"
			@input="check"
			@focus="focus"
			@blur="blur"
		/>
	</field-group>
</template>
<style scoped lang="scss">
textarea {
	resize: none;
}
</style>

<!-- @focus="focused = true"
@blur="focused = false" -->
