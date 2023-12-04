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
				<nuxt-link to="/#contact-form"><span class="grow-farm__call-title">Обратный звонок</span></nuxt-link>
			</div>
		</div>
		<div class="grow-farm__picture">
			<div class="grow-farm__picture-desktop">
				<base-picture
					:width="1920"
					:height="707"
					alt="grow-photo"
					src="/images/landing/home/hay-cow.png"
				></base-picture>
			</div>
			<div class="grow-farm__picture-mobile">
				<base-picture
					:width="320"
					:height="320"
					alt="grow-photo"
					src="/images/landing/home/hay-cow-mobile.png"
				></base-picture>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import BasePicture from '~/components/elements/base-picture';
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.grow-farm {
	width: var(--container);
	display: flex;
	justify-self: center;
	margin-top: #{utility.rem(164)};
	position: relative;
	@include breakpoints.media-down('xl') {
		width: var(--mobile-container);
		max-width: var(--mobile-container-max-width);
		flex-direction: column;
		align-items: center;
		padding: var(--ears);
		margin-top: unset;
		justify-self: center;
	}
	&__picture-mobile {
		display: none;
		@include breakpoints.media-down('xl') {
			display: block;
			width: 100%;
		}
		:deep(img) {
			@include breakpoints.media-up('mmd') {
				width: #{utility.rem(600)};
				height: auto;
			}
		}
	}
	&__picture-desktop {
		@include breakpoints.media-down('xl') {
			display: none;
		}
	}
	&__title {
		color: #1d2939;
		font-size: #{utility.rem(48)};
		font-style: normal;
		font-weight: 700;
		line-height: 115%;
		letter-spacing: #{utility.rem(-1.92)};
		max-width: #{utility.rem(575)};
		display: inline-block;
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 700;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.96)};
		}
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
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 700;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.96)};
		}
	}
	&__title-container {
		display: flex;
		flex-direction: column;
		width: 100%;
		order: 2;
	}
	&__picture {
		position: absolute;
		top: #{utility.rem(-160)};
		left: #{utility.rem(-380)};
		z-index: -1;
		width: 137%;
		@include breakpoints.media-down('xl') {
			position: relative;
			top: unset;
			left: unset;
			width: 100%;
			max-width: 100%;
			justify-content: center;
			align-items: center;
			display: flex;
			order: 1;
			margin-left: #{utility.rem(-16)};
			margin-right: #{utility.rem(-16)};
			// width: 100%;
		}
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
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
		box-shadow:
			0px #{utility.rem(5)} #{utility.rem(10)} 0px rgba(29, 41, 57, 0.08),
			0px #{utility.rem(19)} #{utility.rem(19)} 0px rgba(29, 41, 57, 0.07),
			0px #{utility.rem(42)} #{utility.rem(25)} 0px rgba(29, 41, 57, 0.04),
			0px #{utility.rem(74)} #{utility.rem(30)} 0px rgba(29, 41, 57, 0.01),
			0px #{utility.rem(116)} #{utility.rem(33)} 0px rgba(29, 41, 57, 0);
		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(16)} #{utility.rem(24)} #{utility.rem(16)} #{utility.rem(24)};
			max-width: #{utility.rem(190)};
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-1.08)};
			border-radius: #{utility.rem(12)};
		}
		a {
			text-decoration: none;
		}
		> span {
			transition: color 0.2s ease-in-out;
		}
	}
	&__call:hover span {
		color: #fff;
	}
	&__call:hover {
		background-color: var(--brand);
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
		@include breakpoints.media-down('xl') {
			color: rgba(29, 41, 57, 0.8);
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
}
.picture {
	@include breakpoints.media-down('xl') {
		margin-left: #{utility.rem(-16)};
		margin-right: #{utility.rem(-16)};
		display: flex;
		justify-content: center;
	}
}
</style>
