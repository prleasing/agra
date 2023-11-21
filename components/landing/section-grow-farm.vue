<template>
	<div class="grow-farm">
		<div class="grow-farm__title-container">
			<span class="grow-farm__title">Ваш источник</span>
			<span class="grow-farm__title-green">натуральных продуктов</span
			><span class="grow-farm__title">животноводства и растениеводства</span>
			<div class="grow-farm__special">
				<span class="grow-farm__special-title">Специализируемся на продаже</span>
				<span class="grow-farm__special-title">животноводства и растениеводства</span>
			</div>
			<div class="grow-farm__call">
				<nuxt-link to="#">Обратный звонок</nuxt-link>
			</div>
		</div>
		<div class="grow-farm__picture">
			<base-picture :width="1920" :height="707" alt="grow-photo" src="/images/landing/home/hay-cow.png"></base-picture>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from '#imports';
import BasePicture from '~/components/elements/base-picture';

const target = ref();
</script>
<style scoped lang="scss">
.grow-farm {
	width: var(--container);
	display: flex;
	justify-self: center;
	margin-top: 164px;
	position: relative;
	&__title {
		color: #1d2939;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 115%;
		letter-spacing: -1.92px;
		max-width: 575px;
		display: inline-block;
		.grow-farm__title-green {
			padding-left: 12px;
			padding-right: 12px;
		}
	}
	&__title-green {
		color: #29a13e;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 115%;
		letter-spacing: -1.92px;
	}
	&__title-container {
		display: flex;
		flex-direction: column;
	}
	&__picture {
		position: absolute;
		top: -160px;
		left: -380px;
		z-index: -1;
	}
	&__call {
		padding: 24px 32px 24px 32px;
		border-radius: 16px;
		background: #fff;
		max-width: 253px;
		color: var(--brand);
		font-family: Inter;
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: -1.44px;
		margin-top: 36px;
		box-shadow:
			0px 5px 10px 0px rgba(29, 41, 57, 0.08),
			0px 19px 19px 0px rgba(29, 41, 57, 0.07),
			0px 42px 25px 0px rgba(29, 41, 57, 0.04),
			0px 74px 30px 0px rgba(29, 41, 57, 0.01),
			0px 116px 33px 0px rgba(29, 41, 57, 0);
		a {
			text-decoration: none;
		}
	}
	&__special {
		margin-top: 32px;
		display: grid;
	}
	&__special-title {
		color: rgba(29, 41, 57, 0.8);
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: -0.48px;
	}
}
</style>
