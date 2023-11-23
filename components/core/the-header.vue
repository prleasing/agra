<template>
	<header class="header">
		<div class="header__logo-wrapper">
			<base-logo />
			<nuxt-link to="/">
				<sr-only>На главную</sr-only>
			</nuxt-link>
		</div>
		<div class="header__items-wrapper">
			<div v-for="item in menu" :key="item.id" class="header__menu-item">
				<nuxt-link :to="`/#${item.link}`">{{ item.title }}</nuxt-link>
			</div>
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
		</div>
	</header>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';

import { Icons24ShoppingCart } from '#icons';
import { computed, ref } from '#imports';
import BaseIcon from '~/components/elements/base-icon.vue';
import BaseLogo from '~/components/elements/base-logo.vue';
import srOnly from '~/components/utils/srOnly.vue';
import { useStoreBasket } from '~/store/storeBasket';
import { Pages } from '~/utils/pages';

const basket = useStoreBasket();
const menu = ref([
	{ id: 1, title: 'Вакансии', link: 'vacancy' },
	{ id: 2, title: 'О Компании', link: 'about-company' },
	{ id: 3, title: 'Направление деятельности', link: 'directions' },
	{ id: 4, title: 'Cобственная продукция', link: 'products' },
	{ id: 5, title: 'Контакты', link: 'contact-form' }
]);
const showInfo = computed(() => {
	if (Object.keys(basket.items).length) {
		return true;
	}
	return false;
});
const length = computed(() => {
	return Object.keys(basket.items).length;
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';

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
	&__items-wrapper {
		display: flex;
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
		width: #{utility.rem(56)};
		height: #{utility.rem(56)};
		margin-left: #{utility.rem(16)};
		border-radius: #{utility.rem(100)};
		background-color: #fff;
		border: 1px solid #1d2939;
		transition: background-color 0.2s ease-in-out;
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
		background-color: #1D2939;
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
