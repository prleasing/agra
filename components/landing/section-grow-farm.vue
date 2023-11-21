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
	margin-top: #{utility.rem(164)};
	position: relative;
	&__title {
		color: #1d2939;
		font-size: #{utility.rem(48)};
		font-style: normal;
		font-weight: 700;
		line-height: 115%;
		letter-spacing: #{utility.rem(-1.92)};
		max-width: #{utility.rem(575)};
		display: inline-block;
		.grow-farm__title-green {
			padding-left: #{utility.rem(12)};
			padding-right: #{utility.rem(12)};
		}
	}
	&__title-green {
		color: #29a13e;
		font-size: #{utility.rem(48)};
		font-style: normal;
		font-weight: 700;
		line-height: 115%;
		letter-spacing: #{utility.rem(-1.92)};
	}
	&__title-container {
		display: flex;
		flex-direction: column;
	}
	&__picture {
		position: absolute;
		top: #{utility.rem(-160)};
		left: #{utility.rem(-380)};
		z-index: -1;
	}
	&__call {
		padding: #{utility.rem(24)} #{utility.rem(32)} #{utility.rem(24)} #{utility.rem(32)};
		border-radius: #{utility.rem(16)};
		background: #fff;
		max-width: #{utility.rem(253)};
		color: var(--brand);
		font-family: Inter;
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: #{utility.rem(-1.44)};
		margin-top: #{utility.rem(36)};
		box-shadow:
			0px #{utility.rem(5)} #{utility.rem(10)} 0px rgba(29, 41, 57, 0.08),
			0px #{utility.rem(19)} #{utility.rem(19)} 0px rgba(29, 41, 57, 0.07),
			0px #{utility.rem(42)} #{utility.rem(25)} 0px rgba(29, 41, 57, 0.04),
			0px #{utility.rem(74)} #{utility.rem(30)} 0px rgba(29, 41, 57, 0.01),
			0px #{utility.rem(116)} #{utility.rem(33)} 0px rgba(29, 41, 57, 0);
		a {
			text-decoration: none;
		}
	}
	&__special {
		margin-top: #{utility.rem(32)};
		display: grid;
	}
	&__special-title {
		color: rgba(29, 41, 57, 0.8);
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};
	}
}
</style>
