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
.farming {
	display: grid;
	gap: 16px;
	position: relative;
	&__cows {
		position: absolute;
		bottom: 0;
		right: 0;
	}
	&__image-wrapper {
		.picture {
			border-radius: 16px;
		}
	}
	&__cows-background {
		.picture {
			border-radius: 16px;
		}
	}
	&__call {
		max-width: 268px;
	}
	&__call-wrapper {
		padding: 24px 32px 24px 32px;
		border: 1px solid var(--brand);
		border-radius: 12px;
		background-color: transparent;
		cursor: pointer;
		a {
			color: var(--brand);
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: -0.48px;
			text-decoration: none;
		}
	}
	&__weight-price {
		color: rgba(255, 255, 255, 0.64);
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: 135%;
		letter-spacing: -0.54px;
		display: flex;
		.farming__point-separator {
			display: inline-block;
			width: 4px;
			height: 4px;
			background-color: rgba(255, 255, 255, 0.64);
			border-radius: 100px;
			margin-left: 8px;
			margin-right: 8px;
			vertical-align: middle;
		}
	}
	&__minselhos {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
		:deep(img) {
			border-radius: 16px;
		}
	}
	&__minselhos-title {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 24px;
		border-radius: 16px;
		background-color: #eaecf0;
		> span {
			color: #1d2939;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: -0.48px;
		}
	}
	&__cattle {
		position: relative;
		> span {
			position: absolute;
			bottom: 24px;
			left: 24px;
			color: #fff;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: -0.48px;
			margin-right: 24px;
		}
	}
	&__cows-info {
		position: absolute;
		bottom: 0;
		padding: 24px;
		display: grid;
		gap: 24px;
		.farming__category {
			color: #fff;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: -0.48px;
			max-width: 460px;
		}
	}
	&__category-wrapper {
		display: flex;
		align-items: center;
		gap: 16px;
	}
	&__category-mark {
		width: 16px;
		height: 16px;
		border-radius: 9px;
		border: 2px solid var(--brand);
	}
	&__categories {
		display: grid;
		gap: 16px;
	}
}
</style>
