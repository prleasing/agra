<template>
	<div class="grow-farm">
		<div class="grow-farm__title-container">
			<span class="grow-farm__title">Ваш источник</span>
			<span class="grow-farm__title-green">натуральных продуктов</span
			><span class="grow-farm__title">животноводства и растениеводства</span>
			<div class="grow-farm__special">
				<span class="grow-farm__special-title">Специализация хозяйства -</span>
				<span class="grow-farm__special-title">животноводство мясного направления</span>
				<span class="grow-farm__special-title">и растениеводство</span>
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
	position: relative;
	display: flex;
	justify-self: center;
	width: var(--container);
	margin-top: #{utility.rem(164)};

	@include breakpoints.media-down('xl') {
		flex-direction: column;
		align-items: center;
		justify-self: center;
		width: var(--mobile-container);
		max-width: var(--mobile-container-max-width);
		margin-top: #{utility.rem(16)};
		padding: var(--ears);
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
		display: inline-block;
		max-width: #{utility.rem(575)};
		color: #1d2939;
		font-weight: 700;
		font-style: normal;
		font-size: #{utility.rem(48)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-1.92)};

		@include breakpoints.media-down('xl') {
			font-weight: 700;
			font-style: normal;
			font-size: #{utility.rem(24)};
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.96)};
		}

		.grow-farm__title-green {
			padding-right: #{utility.rem(12)};
			padding-left: #{utility.rem(12)};
		}
	}

	&__title-green {
		color: #29a13e;
		font-weight: 700;
		font-style: normal;
		font-size: #{utility.rem(48)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-1.92)};

		@include breakpoints.media-down('xl') {
			font-weight: 700;
			font-style: normal;
			font-size: #{utility.rem(24)};
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.96)};
		}
	}

	&__title-container {
		display: flex;
		flex-direction: column;
		order: 2;
		width: 100%;
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
			display: flex;
			justify-content: center;
			align-items: center;
			order: 1;
			width: 100%;
			max-width: 100%;
			margin-right: #{utility.rem(-16)};
			margin-left: #{utility.rem(-16)};
		}
	}

	&__call {
		max-width: #{utility.rem(253)};
		margin-top: #{utility.rem(36)};
		padding: #{utility.rem(24)} #{utility.rem(32)} #{utility.rem(24)} #{utility.rem(32)};
		border-radius: #{utility.rem(16)};
		background: #fff;
		color: var(--brand);
		box-shadow:
			0 #{utility.rem(5)} #{utility.rem(10)} 0 rgb(29 41 57 / 8%),
			0 #{utility.rem(19)} #{utility.rem(19)} 0 rgb(29 41 57 / 7%),
			0 #{utility.rem(42)} #{utility.rem(25)} 0 rgb(29 41 57 / 4%),
			0 #{utility.rem(74)} #{utility.rem(30)} 0 rgb(29 41 57 / 1%),
			0 #{utility.rem(116)} #{utility.rem(33)} 0 rgb(29 41 57 / 0%);
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-1.44)};
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;

		@include breakpoints.media-down('xl') {
			max-width: #{utility.rem(190)};
			padding: #{utility.rem(16)} #{utility.rem(24)} #{utility.rem(16)} #{utility.rem(24)};
			border-radius: #{utility.rem(12)};
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(18)};
			line-height: 135%;
			letter-spacing: #{utility.rem(-1.08)};
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
		display: grid;
		margin-top: #{utility.rem(32)};
	}

	&__special-title {
		color: rgb(29 41 57 / 80%);
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};

		@include breakpoints.media-down('xl') {
			color: rgb(29 41 57 / 80%);
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(18)};
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
}

.picture {
	@include breakpoints.media-down('xl') {
		display: flex;
		justify-content: center;
		margin-right: #{utility.rem(-16)};
		margin-left: #{utility.rem(-16)};
	}
}
</style>
