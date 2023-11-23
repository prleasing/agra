<template>
	<form class="form" @submit.prevent.stop="send">
		<div class="form__container">
			<div class="form__inputs">
				<field-text id="name" v-model="state.name" v-model:error="errors.name" label="Имя" placeholder="Ваше имя" />
				<field-phone
					id="phone"
					v-model="state.phone"
					v-model:error="errors.phone"
					label="Телефон"
					placeholder="+7 999 99-99-999"
				/>
			</div>
			<div class="form__confirm">
				<button :disabled="isLoading || !state.agree" type="button" @click.prevent.stop="send">
					Обратный звонок <base-icon :icon="Icons32ArrowUpRight" />
				</button>
				<checkbox v-model="state.agree" name="agree">Я согласен на обработку персональных данных</checkbox>
			</div>
		</div>
	</form>
</template>
<script setup lang="ts">
import { Checkbox, FieldPhone, FieldText, ModalRoot } from '@ui';
import type { PropType } from 'vue';

import { Icons32ArrowUpRight } from '#icons';
import { reactive, ref } from '#imports';
import BaseIcon from '~/components/elements/base-icon';
import type { Basket } from '~/components/landing/the-basket-product';
import { isoTimeSecond } from 'valibot';

const props = defineProps({
	items: {
		type: Array as PropType<Basket[]>,
		required: true
	}
});
const state = reactive({ name: '', phone: '', agree: false, items: props.items });

interface ResponseError {
	response: 'error';
	errors: Record<string, string>;
}

const errors = reactive<ResponseError['errors']>({});
const isLoading = ref(false);
function clearError() {
	for (const key in errors) {
		if (Object.hasOwn(errors, key)) {
			delete errors[key];
		}
	}
}

async function send() {
	if (isLoading.value || !state.agree) {
		return null;
	}
	isLoading.value = true;
	try {
		const data = await $fetch<ResponseError | { response: 'ok' }>('/api/request-basket', {
			method: 'POST',
			body: state,
			ignoreResponseError: true
		});
		clearError();
		if (data) {
			if (data.response === 'error') {
				Object.assign(errors, data.errors);
			} else {
				isSuccess.value = true;
				Object.assign(state, { name: '', phone: '', agree: false });
			}
		}
	} finally {
		isLoading.value = false;
	}
}
console.log(props.items);
const isSuccess = ref(false);
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
.form {
	&__container {
		background-color: #1D2939;
		padding: #{utility.rem(24)};
		display: grid;
		gap: #{utility.rem(16)};
		border-radius: #{utility.rem(16)};
		margin-top: #{utility.rem(24)};
	}
	&__inputs {
		display: grid;
		grid-template-columns: 8fr 4fr;
		gap: #{utility.rem(16)};
	}
	&__confirm {
		display: flex;
		gap: #{utility.rem(24)};
		.icon {
			width: #{utility.rem(32)};
		}
		button {
			display: flex;
			background-color: #fff;
			border: none;
			color: #29A13E;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.96)};
			padding: #{utility.rem(16)};
			padding-left: #{utility.rem(24)};
			gap: #{utility.rem(16)};
			border-radius: #{utility.rem(12)};
			transition:
				background-color 200ms ease-in-out,
				color 200ms ease-in-out;
			cursor: pointer;
			&:disabled {
				opacity: 0.5;
				pointer-events: none;
			}
			@include utility.has-hover {
				background-color: var(--brand);
				color: #fff;
			}
		}
		.checkbox {
			align-items: center;
		}
	}
}
</style>
