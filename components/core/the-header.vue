<template>
	<div>
		<header class="header">
			<div class="header__logo-wrapper">
				<base-logo />
				<nuxt-link to="/">
					<sr-only>На главную</sr-only>
				</nuxt-link>
			</div>
			<div class="header__items-wrapper">
				<menu-items></menu-items>
				<!-- <div v-for="item in menu" :key="item.id" class="header__menu-item">
					<nuxt-link :to="`/#${item.link}`">{{ item.title }}</nuxt-link>
				</div> -->
				<!-- <contacts :phone="phone" :email="email"></contacts> -->
				<div class="header__menu-cart-wrapper">
					<div class="header__cart">
						<nuxt-link :to="{ path: Pages.Basket }">
							<base-icon :icon="Icons24ShoppingCart" />
						</nuxt-link>
						<div v-show="showInfo" class="header__cart-info">
							<client-only
								><span>{{ length }}</span></client-only
							>
						</div>
					</div>
					<button class="header__burger" @click="openModal">
						<base-icon :icon="Icons24Menu"></base-icon>
					</button>
				</div>
			</div>
		</header>
		<modal-root v-model="show" class="modal-mobile-menu" :transform="transform">
			<mobile-menu :show-info="showInfo" :length="length" @close="close"></mobile-menu>
		</modal-root>
		<!-- <mobile-menu v-model="show" @update:model-value="closeModal" /> -->
	</div>
</template>
<script lang="ts" setup>
import { Checkbox, FieldPhone, FieldText, ModalRoot } from '@ui';
import type { PropType } from 'vue';

import { Icons24Menu, Icons24ShoppingCart } from '#icons';
import { computed, ref, useWindowSize, watch } from '#imports';
import BaseIcon from '~/components/elements/base-icon.vue';
import BaseLogo from '~/components/elements/base-logo.vue';
import MenuItems from '~/components/elements/menu-items';
import MobileMenu from '~/components/elements/mobile-menu';
import srOnly from '~/components/utils/srOnly.vue';
import { useStoreBasket } from '~/store/storeBasket';
import { Pages } from '~/utils/pages';

const basket = useStoreBasket();
// const menu = ref([
// 	{ id: 1, title: 'Вакансии', link: 'vacancy' },
// 	{ id: 2, title: 'О Компании', link: 'about-company' },
// 	{ id: 3, title: 'Направление деятельности', link: 'directions' },
// 	{ id: 4, title: 'Cобственная продукция', link: 'products' },
// 	{ id: 5, title: 'Контакты', link: 'contact-form' }
// ]);
const showInfo = computed(() => {
	if (Object.keys(basket.items).length) {
		return true;
	}
	return false;
});
const { width } = useWindowSize();
const length = computed(() => {
	return Object.keys(basket.items).length;
});
const show = ref<boolean>(false);
const transform = {
	opacity: [0, 1],
	transform: ['translateX(180px)', 'translateY(0px)']
};

function close() {
	console.log(show.value);
	show.value = false;
}
function openModal() {
	show.value = true;
}
watch(width, (value) => {
	if (value >= 1200) {
		show.value = false;
	}
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.header {
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: var(--container);
	// height: #{utility.rem(97)};
	background-color: #fff;
	border-radius: #{utility.rem(16)};
	padding: #{utility.rem(8)};
	position: sticky;
	z-index: 3;
	top: #{utility.rem(16)};
	@include breakpoints.media-down('xl') {
		width: var(--mobile-container);
		background-color: rgba(255, 255, 255, 0.01);
		padding-left: #{utility.rem(16)};
		padding-right: #{utility.rem(16)};
		backdrop-filter: blur(20px);
		top: #{utility.rem(0)};
		border-radius: 0 0 #{utility.rem(16)} #{utility.rem(16)};
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
		gap: #{utility.rem(8)};
		height: 100%;
		@include breakpoints.media-down('xl') {
			width: 100%;
		}
	}
	&__burger {
		display: none;
		border: none;
		@include breakpoints.media-down('xl') {
			display: flex;
			// height: 48px;
			background-color: var(--brand);
			padding: #{utility.rem(12)};
			border-radius: 100%;
			min-width: #{utility.rem(48)};
			min-height: #{utility.rem(48)};
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
			border: none;
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
:deep(.header__menu-item) {
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
	a {
		text-decoration: none;
	}
}
.header__menu-item:hover a {
	text-decoration: underline;
}
:deep(.mobile__menu-item) {
	display: none;
	@include breakpoints.media-down('xl') {
		display: block;
	}
}
</style>

<style lang="scss">
.modal-mobile-menu.modal-root .modal-root__wrapper {
	display: unset;
	background-color: #eaecf0;
}
</style>
