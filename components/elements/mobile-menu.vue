<template>
	<div>
		<div class="header">
			<div class="header__logo-wrapper">
				<base-logo />
				<nuxt-link to="/" @click="close">
					<sr-only>На главную</sr-only>
				</nuxt-link>
			</div>
			<div class="header__menu-cart-wrapper">
				<div class="header__cart">
					<nuxt-link :to="{ path: Pages.Basket }" @click="close">
						<base-icon :icon="Icons24ShoppingCart" />
					</nuxt-link>
					<div v-show="showInfo" class="header__cart-info">
						<client-only
							><span>{{ length }}</span></client-only
						>
					</div>
				</div>
				<button class="header__closer" @click="close">
					<base-icon :icon="Icons24Close"></base-icon>
				</button>
			</div>
		</div>
		<div class="mobile-menu">
			<menu-items></menu-items>
			<div class="mobile-menu__separator"></div>
			<contacts :phone="phone" :email="email" :color="colorSocial" :color-contacts="color"></contacts>
		</div>
	</div>
</template>
<script setup lang="ts">
import parsePhoneNumber, { getCountryCallingCode } from 'libphonenumber-js';
import { type PropType } from 'vue';

import { Icons24Close, Icons24ShoppingCart } from '#icons';
import { computed, useRuntimeConfig } from '#imports';
import BaseIcon from '~/components/elements/base-icon.vue';
import BaseLogo from '~/components/elements/base-logo.vue';
import Contacts from '~/components/elements/contacts';
import MenuItems from '~/components/elements/menu-items';
import srOnly from '~/components/utils/srOnly.vue';
import { Pages } from '~/utils/pages';

// const menu = ref<HTMLDialogElement>();
defineProps({
	showInfo: {
		type: Boolean as PropType<boolean>,
		required: true,
		default: false
	},
	length: {
		type: Number as PropType<number>,
		required: true
	}
});
const emit = defineEmits<{
	(e: 'close'): void;
}>();
function close() {
	console.log('233');
	emit('close');
}
const runtimeConfig = useRuntimeConfig().public;

const phone = computed(() => {
	const parse = parsePhoneNumber(runtimeConfig.phone);
	const code = '+' + (parse?.country ? getCountryCallingCode(parse.country) : '');

	return {
		uri: parse?.getURI(),
		text:
			code +
			' ' +
			parse?.format('NATIONAL', {
				nationalPrefix: false
			})
	};
});

const email = computed(() => runtimeConfig.email);

const colorSocial = { 'background-color': 'rgba(29, 41, 57, 0.04)', color: '#1D2939' };
const color = { color: '#1D2939' };

// watch(
// 	() => props.modelValue,
// 	(value) => {
// 		console.log('1');
// 		if (value) {
// 			menu.value?.showModal();
// 			document.body.style.overflow = 'hidden';
// 		} else {
// 			menu.value?.close();
// 			document.body.style.overflow = 'unset';
// 		}
// 	}
// );
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.mobile-menu {
	display: none;
	@include breakpoints.media-down('xl') {
		display: grid;
		position: absolute;
		top: 0;
		width: 100%;
		background-color: #fff;
		z-index: 2;
		padding: #{utility.rem(16)};
		border-radius: #{utility.rem(24)};
		margin-top: #{utility.rem(79)};
		z-index: 3;
	}
	&__separator {
		border-bottom: 1px solid #eaecf0;
		margin-top: #{utility.rem(16)};
		margin-bottom: #{utility.rem(16)};
	}
}
:deep(.mobile__menu-item) {
	@include breakpoints.media-down('xl') {
		padding: #{utility.rem(16)} 0 #{utility.rem(16)};
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.54)};
		font-size: #{utility.rem(20)};
		font-style: normal;
		font-weight: 600;
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.8)};
	}
	a {
		text-decoration: none;
	}
}
.mobile__menu-item:hover a {
	text-decoration: underline;
}
.header {
	background-color: #eaecf0;
	background-image: url('/images/background.png');
	background-size: #{utility.rem(1200)};
	background-repeat: no-repeat;
	position: absolute;
	top: 0px;
	left: 0;
	width: 100%;
	height: #{utility.rem(100)};
	z-index: -1;
	@include breakpoints.media-down('xl') {
		background-image: none;
	}
}
.header {
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: var(--container);
	// height: #{utility.rem(97)};
	background-color: #eaecf0;
	// border-radius: #{utility.rem(16)};
	padding: #{utility.rem(8)};
	position: sticky;
	z-index: 3;
	top: #{utility.rem(16)};
	@include breakpoints.media-down('xl') {
		width: var(--mobile-container);
		// background-color: rgba(255, 255, 255, 0.01);
		padding-left: #{utility.rem(16)};
		padding-right: #{utility.rem(16)};
		// backdrop-filter: blur(20px);
		top: #{utility.rem(0)};
		height: #{utility.rem(100)};
		padding-bottom: #{utility.rem(20)};
		// border-radius: 0 0 #{utility.rem(16)} #{utility.rem(16)};
		background-color: #fff;
	}
	&__items-wrapper {
		gap: #{utility.rem(16)};
		:deep(.header__menu-item) {
			@include breakpoints.media-down('xl') {
				display: none;
			}
		}
	}
	&__logo-wrapper {
		svg {
			@include breakpoints.media-down('xl') {
				max-width: #{utility.rem(170)};
			}
		}
	}
	&__menu-cart-wrapper {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: #{utility.rem(8)};
		height: 100%;
		@include breakpoints.media-down('xl') {
			width: 100%;
		}
	}
	&__closer {
		display: none;
		border: none;
		@include breakpoints.media-down('xl') {
			display: flex;
			// height: 48px;
			background-color: #eb5757;
			padding: #{utility.rem(12)};
			border-radius: 100%;
			width: #{utility.rem(48)};
			height: #{utility.rem(48)};
			align-items: center;
			justify-content: center;
		}
		.icon {
			width: #{utility.rem(24)};
		}
	}
	&__items-wrapper {
		display: flex;
		@include breakpoints.media-down('xl') {
			display: flex;
			flex-direction: column;
			// position: absolute;
			// top: 0;
		}
	}

	&__logo-wrapper {
		position: relative;

		> a {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}

	&__menu-item {
		padding: #{utility.rem(16)};
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(18)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.54)};
		@include breakpoints.media-down('xl') {
			display: flex;
		}
		a {
			text-decoration: none;
		}
	}
	&__menu-item:hover a {
		text-decoration: underline;
	}

	&__cart {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: #{utility.rem(12)};
		width: #{utility.rem(56)};
		height: #{utility.rem(56)};
		margin-left: #{utility.rem(16)};
		border-radius: #{utility.rem(100)};
		background-color: #fff;
		border: 1px solid #1d2939;
		transition: background-color 0.2s ease-in-out;
		@include breakpoints.media-down('xl') {
			// border: none;
			width: #{utility.rem(48)};
			height: #{utility.rem(48)};
		}
		.icon {
			width: #{utility.rem(24)};
			transition: background-color 0.2s ease-in-out;
		}
		> a {
			position: absolute;
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
		}
	}
	&__cart:hover .icon {
		color: #fff;
	}
	&__cart:hover {
		background-color: #1d2939;
	}
	&__cart-info {
		position: absolute;
		top: #{utility.rem(-3)};
		right: 0;
		display: inline;
		width: #{utility.rem(24)};
		height: #{utility.rem(24)};
		margin: 0;
		padding: 0;
		border-radius: #{utility.rem(100)};
		background-color: var(--brand);
		text-align: center;
		display: flex;
		@include breakpoints.media-down('xl') {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		> span {
			width: 100%;
			margin: 0 auto;
			color: #fff;
			font-weight: 600;
			font-style: normal;
			font-size: #{utility.rem(14)};
		}
	}
}
</style>
