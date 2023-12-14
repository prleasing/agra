<script setup lang="ts">
import { Checkbox, FieldPhone, FieldText, ModalRoot } from '@ui';
import { $fetch } from 'ofetch';

import { Icons32ArrowUpRight } from '#icons';
import { reactive, ref } from '#imports';
import BaseIcon from '~/components/elements/base-icon';

const state = reactive({ name: '', phone: '', agree: false });

interface ResponseError {
	response: 'error';
	errors: Record<string, string>;
}

const errors = reactive<ResponseError['errors']>({});

function clearError() {
	for (const key in errors) {
		if (Object.hasOwn(errors, key)) {
			delete errors[key];
		}
	}
}
const isLoading = ref(false);
async function send() {
	if (isLoading.value || !state.agree) {
		return null;
	}
	isLoading.value = true;
	try {
		const data = await $fetch<ResponseError | { response: 'ok' }>('/api/request', {
			method: 'POST',
			body: state,
			ignoreResponseError: true
		});
		clearError();
		if (data.response === 'error') {
			Object.assign(errors, data.errors);
		} else {
			isSuccess.value = true;
			Object.assign(state, { name: '', phone: '', agree: false });
		}
	} finally {
		isLoading.value = false;
	}
}

const isSuccess = ref(false);
</script>

<template>
	<form class="form" @submit.prevent.stop="send">
		<div>
			<field-text id="name" v-model="state.name" v-model:error="errors.name" label="Имя" placeholder="Ваше имя" />
			<field-phone
				id="phone"
				v-model="state.phone"
				v-model:error="errors.phone"
				label="Телефон"
				placeholder="+7 999 99-99-999"
			/>
		</div>
		<checkbox v-model="state.agree" name="agree">Я согласен на обработку персональных данных</checkbox>
		<button :disabled="isLoading || !state.agree" type="button" @click.prevent.stop="send">
			Обратный звонок <base-icon :icon="Icons32ArrowUpRight" />
		</button>
		<div v-if="errors.server" class="error">{{ errors.server }}</div>
		<modal-root v-model="isSuccess">
			<div class="success">
				<p>Ваша заявка<br />отправлена</p>
				<button @click="isSuccess = false">ок</button>
			</div>
		</modal-root>
	</form>
</template>

<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/components/button';
@use 'assets/styles/breakpoints';

.form {
	:deep(.field-group) {
		border-radius: 0;

		.field {
			border-radius: 0;

			&.field--error {
				border-bottom-right-radius: #{utility.rem(12)};
				border-bottom-left-radius: #{utility.rem(12)};
			}
		}

		&:first-of-type {
			.field {
				border-top-left-radius: #{utility.rem(12)};
				border-top-right-radius: #{utility.rem(12)};
			}
		}

		&:last-of-type {
			.field {
				border-bottom-right-radius: #{utility.rem(12)};
				border-bottom-left-radius: #{utility.rem(12)};
			}
		}
	}

	:deep(.field-group):has(.field--error) + .field-group {
		.field {
			border-top-left-radius: #{utility.rem(12)};
			border-top-right-radius: #{utility.rem(12)};
		}
	}

	:deep(.field-group) + .field-group {
		margin-top: #{utility.rem(2)};
	}

	:deep(.checkbox) {
		margin-top: #{utility.rem(8)};
		margin-bottom: #{utility.rem(0)};
	}

	button {
		@include button.reset;

		display: inline-flex;
		gap: #{utility.rem(16)};
		align-items: flex-start;
		margin-top: #{utility.rem(24)};
		padding: #{utility.rem(16)} #{utility.rem(16)} #{utility.rem(16)} #{utility.rem(24)};
		border-radius: #{utility.rem(12)};
		background: #fff;
		color: var(--brand);
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.96)};
		transition:
			background-color 200ms ease-in-out,
			color 200ms ease-in-out;

		:deep(.icon) {
			width: #{utility.rem(32)};
		}

		&:disabled {
			background: rgb(255 255 255 / 17%);
			color: rgb(255 255 255 / 22%);

			// opacity: 0.5;
			pointer-events: none;
		}

		@include utility.has-hover {
			background-color: var(--brand);
			color: #fff;
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
		gap: #{utility.rem(16)};
		width: 100%;
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
			line-height: 110%;
			letter-spacing: #{utility.rem(-2.1)};
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
		}

		@include utility.has-hover {
			background-color: #1d2939;
			color: #fff;
		}
	}
}

.error {
	display: block;
	width: 100%;
	padding: #{utility.rem(8)} #{utility.rem(0)};
	border-radius: inherit;
	color: #e03533;
	font-weight: 500;
	font-style: normal;
	font-size: #{utility.rem(18)};
	line-height: 135%;
	letter-spacing: #{utility.rem(-0.72)};
}
</style>
