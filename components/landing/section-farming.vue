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
			<div class="farming__cows-background">
				<base-picture
					:width="1170"
					:height="336"
					alt="background-photo"
					src="/images/landing/farming/background-cows.jpg"
				></base-picture>
			</div>
			<div class="farming__cows">
				<base-picture
					:width="561"
					:height="352"
					alt="background-photo"
					src="/images/landing/farming/cows.png"
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
					<span
						>Цена зависит от веса
						<div class="farming__point-separator"></div>
						от 200 ₽/кг за живой вес</span
					>
				</div>
			</div>
		</div>
	</base-section>
</template>
<script setup lang="ts">
// import { Pages } from '#imports';
import BaseSection from '~/components/base-section.vue';
import BaseIcon from '~/components/elements/base-icon';
import BasePicture from '~/components/elements/base-picture';
import { Pages } from '~/utils/pages';
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
.farming {
	display: grid;
	gap: #{utility.rem(16)};
	position: relative;
	&__cows {
		position: absolute;
		bottom: 0;
		right: 0;
	}
	&__image-wrapper {
		.picture {
			border-radius: #{utility.rem(16)};
		}
	}
	&__cows-background {
		.picture {
			border-radius: #{utility.rem(16)};
		}
	}
	&__call {
		max-width: #{utility.rem(286)};
	}
	&__call-wrapper {
		padding: #{utility.rem(24)} #{utility.rem(32)} #{utility.rem(24)} #{utility.rem(32)};
		border: 1px solid var(--brand);
		border-radius: #{utility.rem(12)};
		background-color: transparent;
		cursor: pointer;
		transition: border 0.2s ease-in-out;
		a {
			color: var(--brand);
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
			text-decoration: none;
			transition: color 0.2s ease-in-out;
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
		.farming__point-separator {
			display: inline-block;
			width: #{utility.rem(4)};
			height: #{utility.rem(4)};
			background-color: rgba(255, 255, 255, 0.64);
			border-radius: #{utility.rem(100)};
			margin-left: #{utility.rem(8)};
			margin-right: #{utility.rem(8)};
			vertical-align: middle;
		}
	}
	&__minselhos {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: #{utility.rem(16)};
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
		> span {
			color: #1d2939;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
		}
	}
	&__cattle {
		position: relative;
		> span {
			position: absolute;
			bottom: #{utility.rem(24)};
			left: #{utility.rem(24)};
			color: #fff;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
			margin-right: #{utility.rem(24)};
		}
	}
	&__cows-info {
		position: absolute;
		bottom: 0;
		padding: #{utility.rem(24)};
		display: grid;
		gap: #{utility.rem(24)};
		.farming__category {
			color: #fff;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.48)};
			max-width: #{utility.rem(460)};
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
