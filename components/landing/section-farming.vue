<template>
	<base-section title="Животноводство" class="farming-section">
		<div class="farming">
			<div class="farming__image-wrapper">
				<base-picture
					:width="1170"
					:height="384"
					alt="photo-meat"
					src="/images/landing/farming/farming-meat.jpg"
				></base-picture>
				<span class="farming__meat-info"
					>В 2023 года хозяйство переформатировало направление деятельности с молочного производства и сфокусировало
					деятельность на мясном направлении</span
				>
			</div>
			<div class="farming__image-mobile-wrapper">
				<base-picture
					:width="1170"
					:height="384"
					alt="photo-meat"
					src="/images/landing/farming/farming-meat-mobile.jpg"
				></base-picture>
				<span class="farming__meat-info"
					>В 2023 года хозяйство переформатировало направление деятельности с молочного производства и сфокусировало
					деятельность на мясном направлении</span
				>
			</div>
			<div class="farming__minselhos">
				<div class="farming__minselhos-title">
					<base-picture :width="297" :height="64" alt="logo-minselhoz" src="/images/minselhoz.svg"></base-picture>
					<span>Принято решение о получении статуса племенного репродуктора по племенному животноводству</span>
				</div>
				<div class="farming__cattle">
					<base-picture
						:width="590"
						:height="384"
						alt="photo-cows"
						src="/images/landing/farming/farming-cows.jpg"
					></base-picture>
					<span>В течение года приобретено порядка 200 голов (телки и нетели) племенного скота 2-х пород</span>
				</div>
			</div>
			<div class="farming__cows-container">
				<div class="farming__cows-background">
					<base-picture
						:width="1170"
						:height="336"
						alt="background-photo"
						src="/images/landing/farming/background-cows.jpg"
					></base-picture>
				</div>
				<div class="farming__cows-background-mobile">
					<base-picture
						:width="288"
						:height="496"
						alt="background-photo"
						src="/images/landing/farming/background-cows-mobile.jpg"
					></base-picture>
				</div>
				<div class="farming__cows-info">
					<div class="farming__categories">
						<div class="farming__category-wrapper">
							<div class="farming__category-mark"></div>
							<span class="farming__category">Телята от 3-х мес и старше</span>
						</div>
						<div class="farming__category-wrapper">
							<div class="farming__category-mark"></div>
							<span class="farming__category">Нетели, бычки</span>
						</div>
						<div class="farming__category-wrapper">
							<div class="farming__category-mark"></div>
							<span class="farming__category">Порода: Казахская белоголовая, Черно-пестрая, Красно-пестрая</span>
						</div>
					</div>
					<div class="farming__call">
						<div class="farming__call-wrapper">
							<nuxt-link no-prefetch :to="{ name: Pages.Home, hash: '#contact-form' }">
								<span class="farming__call-title">Обратный звонок</span>
							</nuxt-link>
						</div>
					</div>
					<div class="farming__weight-price">
						<span>Цена зависит от веса </span>
						<div class="farming__point-separator"></div>
						<span>от 200 ₽/кг за живой вес</span>
					</div>
				</div>
			</div>
			<div class="farming__cows">
				<base-picture
					:width="561"
					:height="352"
					alt="background-photo"
					src="/images/landing/farming/cows.png"
				></base-picture>
			</div>
		</div>
	</base-section>
</template>
<script setup lang="ts">
import BaseSection from '~/components/base-section.vue';
import BasePicture from '~/components/elements/base-picture';
import { Pages } from '~/utils/pages';
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';
.farming {
	display: grid;
	gap: #{utility.rem(16)};
	position: relative;
	@include breakpoints.media-down('xl') {
		gap: #{utility.rem(8)};
	}
	&__cows {
		position: absolute;
		bottom: 0;
		right: 0;
		@include breakpoints.media-down('xl') {
			width: 100%;
		}
		:deep(img) {
			@include breakpoints.media-down('xl') {
				width: #{utility.rem(288)};
				height: #{utility.rem(210)};
			}
		}
		:deep(picture) {
			@include breakpoints.media-down('xl') {
				display: flex;
				width: 100%;
				align-items: center;
				justify-content: center;
			}
		}
	}
	&__meat-info {
		position: absolute;
		top: #{utility.rem(24)};
		left: #{utility.rem(24)};
		color: #fff;
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			top: #{utility.rem(16)};
			left: #{utility.rem(16)};
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
	&__image-wrapper {
		position: relative;
		@include breakpoints.media-down('xl') {
			display: none;
		}
		.picture {
			border-radius: #{utility.rem(16)};
			background: linear-gradient(180deg, rgba(29, 41, 57, 0) 0%, rgba(29, 41, 57, 0.54) 100%);
		}
		:deep(img) {
			@include breakpoints.media-down('xl') {
				max-width: 100%;
				object-fit: cover;
			}
		}
	}
	&__image-mobile-wrapper {
		position: relative;
		display: none;
		@include breakpoints.media-down('xl') {
			display: flex;
		}
		.picture {
			display: none;
			border-radius: #{utility.rem(16)};
			@include breakpoints.media-down('xl') {
				display: flex;
				max-width: 100%;
			}
		}
		:deep(img) {
			@include breakpoints.media-down('xl') {
				display: flex;
				max-width: 100%;
				object-fit: cover;
			}
		}
	}
	&__cows-container {
		position: relative;
	}
	&__cows-background {
		.picture {
			border-radius: #{utility.rem(16)};
		}
		@include breakpoints.media-down('xl') {
			display: none;
		}
	}
	&__cows-background-mobile {
		display: none;
		@include breakpoints.media-down('xl') {
			display: block;
			width: 100%;
			min-height: #{utility.rem(512)};
			.picture {
				border-radius: #{utility.rem(16)};
				height: 100%;
			}
		}
		:deep(img) {
			@include breakpoints.media-down('xl') {
				object-fit: cover;
				width: 100%;
				height: #{utility.rem(512)};
			}
		}
	}
	&__call {
		max-width: #{utility.rem(286)};
		@include breakpoints.media-down('xl') {
			margin-top: #{utility.rem(24)};
			margin-bottom: #{utility.rem(8)};
		}
	}
	&__call-wrapper {
		padding: #{utility.rem(24)} #{utility.rem(32)} #{utility.rem(24)} #{utility.rem(32)};
		border: 1px solid var(--brand);
		border-radius: #{utility.rem(12)};
		background-color: transparent;
		cursor: pointer;
		transition: border 0.2s ease-in-out;
		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(16)} #{utility.rem(24)} #{utility.rem(16)} #{utility.rem(24)};
			display: flex;
			justify-content: center;
		}
		a {
			color: var(--brand);
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
			text-decoration: none;
			transition: color 0.2s ease-in-out;
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 135%;
				letter-spacing: #{utility.rem(-1.08)};
			}
		}
	}
	&__call-wrapper:hover {
		border: 1px solid #fff;
	}
	&__call-wrapper:hover a {
		color: #fff;
	}
	&__weight-price {
		color: rgba(255, 255, 255, 0.64);
		font-size: #{utility.rem(18)};
		font-style: normal;
		font-weight: 600;
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.54)};
		display: flex;
		align-items: center;
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(16)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}
		.farming__point-separator {
			display: inline-block;
			width: #{utility.rem(4)};
			height: #{utility.rem(4)};
			background-color: rgba(255, 255, 255, 0.64);
			border-radius: #{utility.rem(100)};
			margin-left: #{utility.rem(8)};
			margin-right: #{utility.rem(8)};
			vertical-align: middle;
			@include breakpoints.media-down('xl') {
				display: none;
			}
		}
	}
	&__minselhos {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: #{utility.rem(16)};
		@include breakpoints.media-down('xl') {
			grid-template-columns: 1fr;
		}
		:deep(img) {
			border-radius: #{utility.rem(16)};
		}
	}
	&__minselhos-title {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: #{utility.rem(24)};
		border-radius: #{utility.rem(16)};
		background-color: #eaecf0;
		@include breakpoints.media-down('xl') {
			gap: #{utility.rem(42)};
		}
		:deep(img) {
			@include breakpoints.media-down('xl') {
				max-width: #{utility.rem(204)};
			}
		}
		> span {
			color: #1d2939;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 135%;
				letter-spacing: #{utility.rem(-0.36)};
			}
		}
	}
	&__cattle {
		position: relative;
		> span {
			position: absolute;
			color: #fff;
			font-size: #{utility.rem(24)};
			bottom: #{utility.rem(24)};
			left: #{utility.rem(24)};
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
			margin-right: #{utility.rem(24)};
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 135%;
				letter-spacing: #{utility.rem(-0.36)};
				bottom: #{utility.rem(16)};
				left: #{utility.rem(16)};
				display: flex;
			}
		}
		:deep(img) {
			@include breakpoints.media-down('xl') {
				width: 100%;
				object-fit: cover;
			}
		}
	}
	&__cows-background-mobile {
		@include breakpoints.media-down('xl') {
			position: relative;
		}
	}
	&__cows-info {
		position: absolute;
		bottom: 0;
		padding: #{utility.rem(24)};
		display: flex;
		flex-direction: column;
		gap: #{utility.rem(24)};
		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(16)};
			gap: #{utility.rem(0)};
			top: 0;
		}
		@include breakpoints.media-down('mmmd') {
			top: 0;
			padding: #{utility.rem(16)};
			gap: #{utility.rem(0)};
		}
		.farming__category {
			color: #fff;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.48)};
			max-width: #{utility.rem(460)};
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(16)};
				font-style: normal;
				font-weight: 500;
				line-height: 115%;
				letter-spacing: #{utility.rem(-0.32)};
				width: 90%;
			}
		}
	}
	&__category-wrapper {
		display: flex;
		align-items: center;
		gap: #{utility.rem(16)};
	}
	&__category-mark {
		width: #{utility.rem(16)};
		height: #{utility.rem(16)};
		border-radius: #{utility.rem(9)};
		border: 2px solid var(--brand);
	}
	&__categories {
		display: grid;
		gap: #{utility.rem(16)};
	}
}
</style>
