<template>
	<form class="form" @submit.prevent.stop="send">
		<div class="form__container">
			<div class="form__inputs">
				<field-text
					id="name-basket"
					v-model="state.name"
					v-model:error="errors.name"
					label="Имя"
					placeholder="Ваше имя"
				/>
				<field-phone
					id="phone-basket"
					v-model="state.phone"
					v-model:error="errors.phone"
					label="Телефон"
					placeholder="+7 999 99-99-999"
				/>
			</div>
			<span v-if="errors.items" class="field-error">{{ errors.items }}{{ errors.length }}</span>
			<div class="form__confirm">
				<button :disabled="isLoading || !state.agree" type="button" @click.prevent.stop="send">
					Отправить заявку <base-icon :icon="Icons32ArrowUpRight" />
				</button>
				<checkbox v-model="state.agree" name="agree-basket">Я согласен на обработку персональных данных</checkbox>
			</div>
		</div>
		<modal-root v-model="isSuccess">
			<div class="success">
				<p>Ваша заявка<br />отправлена</p>
				<button @click="success">ок</button>
			</div>
		</modal-root>
	</form>
</template>
<script setup lang="ts">
import { Checkbox, FieldPhone, FieldText, ModalRoot } from '@ui';
import type { PropType } from 'vue';

import { Icons32ArrowUpRight } from '#icons';
import { navigateTo, reactive, ref, toRefs } from '#imports';
import BaseIcon from '~/components/elements/base-icon';
import type { Basket } from '~/components/landing/the-basket-product';
import { useStoreBasket } from '~/store/storeBasket';

const props = defineProps({
	items: {
		type: Array as PropType<Basket[]>,
		required: true
	}
});
const basket = useStoreBasket();
const { items } = toRefs(props);
const state = reactive({ name: '', phone: '', agree: false, items: items });

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
const isSuccess = ref(false);

function success() {
	isSuccess.value = false;
	navigateTo('/');
	basket.items = {};
}
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/components/button';
@use 'assets/styles/breakpoints';
.form {
	&__container {
		// background-color: #1d2939;
		background-color: #f6f7f7;
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
		@include breakpoints.media-down('xl') {
			grid-template-columns: 1fr;
		}
	}
	&__confirm {
		display: flex;
		gap: #{utility.rem(24)};
		align-items: center;
		@include breakpoints.media-down('xl') {
			flex-direction: column;
			align-items: flex-start;
		}
		.icon {
			width: #{utility.rem(32)};
		}
		button {
			display: flex;
			background-color: #fff;
			border: none;
			color: #29a13e;
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
			@include breakpoints.media-down('xl') {
				order: 2;
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 135%;
				letter-spacing: #{utility.rem(-1.08)};
				background-color: #fff;
				align-items: center;
				justify-content: space-between;
			}
			&:disabled {
				// opacity: 0.5;
				pointer-events: none;
				color: #fff;
				background: rgba(29, 41, 57, 0.16);
			}
			@include utility.has-hover {
				background-color: var(--brand);
				color: rgba(255, 255, 255, 1);
			}
		}
		.checkbox {
			align-items: center;
			:deep(svg) {
				width: #{utility.rem(20)};
			}
		}
	}
}
.success {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: #{utility.rem(460)};
	padding: #{utility.rem(24)};
	border-radius: #{utility.rem(16)};
	background-color: var(--brand);
	@include breakpoints.media-down('xl') {
		width: 100%;
		gap: #{utility.rem(16)};
		padding: #{utility.rem(16)};
	}
	p {
		color: #fff;
		font-weight: 600;
		font-style: normal;
		font-size: #{utility.rem(42)};
		line-height: 110%;
		letter-spacing: #{utility.rem(-2.1)};
		@include breakpoints.media-down('xl') {
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(22)};
		}
	}

	button {
		@include button.reset;

		padding: #{utility.rem(32)};
		border-radius: #{utility.rem(100)};
		background: #fff;
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-1.2)};
		transition:
			background-color 200ms ease-in-out,
			color 200ms ease-in-out;
		backdrop-filter: blur(12px);
		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(16)};
			font-size: #{utility.rem(20)};
			display: flex;
			justify-content: center;
			align-items: center;
		}
		@include utility.has-hover {
			background-color: #1d2939;
			color: #fff;
		}
	}
}
:deep(.field) {
	background: #fff;
	color: #1d2939;
}
:deep(.field__control::placeholder) {
	// background: #fff;
	color: rgba(29, 41, 57, 0.42);
}
:deep(.checkbox) {
	color: #1d2939;
	.checkbox__indicator {
		border: 2px solid #1d2939;
		display: flex;
		justify-content: center;
	}
}
:deep(.checkbox.checkbox--checked .checkbox__indicator) {
	background-color: var(--brand);
	color: #fff;
	border: none;
}
:deep(.field-error) {
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
