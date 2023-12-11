<template>
	<base-section title="Направления деятельности" class="section-directions">
		<div class="directions">
			<h3>Ключевыми направлениями деятельности ООО "ПР-Агро" являются:</h3>
			<div class="directions__categories">
				<div class="directions__categories-wrapper">
					<base-picture
						:width="379"
						:height="379"
						alt="grow-photo"
						src="/images/landing/directions/grow.jpg"
					></base-picture>
					<span>растиниеводство</span>
				</div>
				<div class="directions__categories-wrapper">
					<base-picture
						:width="379"
						:height="379"
						alt="grow-photo"
						src="/images/landing/directions/forage.jpg"
					></base-picture>
					<span>производство кормов</span>
				</div>
				<div class="directions__categories-wrapper">
					<base-picture
						:width="379"
						:height="379"
						alt="grow-photo"
						src="/images/landing/directions/farming.jpg"
					></base-picture>
					<span>промышленное животноводство</span>
				</div>
			</div>
			<div class="directions__mission">
				<div class="directions__mission-wrapper">
					<div class="directions__mission-title">
						<base-icon :icon="Icons24SettingsUp"></base-icon>
						<span>Наша миссия</span>
					</div>
					<span class="directions__garanty">
						На всех производственных цепочках внедрены современные технологии и оборудование, что гарантирует качество
						выпускаемой продукции
					</span>
				</div>
				<div class="directions__mission-picture">
					<base-picture :width="480" :height="194" alt="grow-photo" src="/images/landing/directions/mission.jpg">
					</base-picture>
				</div>
				<div class="directions__mission-picture-mobile">
					<base-picture :width="288" :height="234" alt="grow-photo" src="/images/landing/directions/mission-mobile.jpg">
					</base-picture>
				</div>
			</div>
			<div class="directions__location">
				<span class="directions__location-title"
					>Сегодня производственные активы предприятия расположены в Иглинском районе, в двух населенных пунктах:</span
				>
				<div class="directions__location-info">
					<div class="directions__location-wrapper">
						<base-icon :icon="Icons32MapPinShare"></base-icon>
						<span>Деревня Поступалово</span>
						<nuxt-link to="https://yandex.ru/maps/-/CDqNN8ju"></nuxt-link>
					</div>
					<div class="directions__location-wrapper">
						<base-icon :icon="Icons32MapPinShare"></base-icon>
						<span>Деревня Ивано-Казанка</span>
						<nuxt-link to="https://yandex.ru/maps/-/CDqNNLpF"></nuxt-link>
					</div>
				</div>
			</div>
			<div class="directions__zem-fond">
				<span class="directions__fond-title"> Компания постоянно наращивает свой земельный фонд для возделывания </span>
			</div>
		</div>
	</base-section>
</template>
<script setup lang="ts">
import { Icons24SettingsUp, Icons32MapPinShare } from '#icons';
import BaseSection from '~/components/base-section.vue';
import BaseIcon from '~/components/elements/base-icon';
import BasePicture from '~/components/elements/base-picture';
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';
.section-directions {
	:deep(.section__content) {
		background-color: #1d2939;
	}
}

.directions {
	@include breakpoints.media-down('xl') {
		width: 100%;
	}
	> h3 {
		color: #fff;
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: #{utility.rem(-0.48)};
		padding-bottom: #{utility.rem(24)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
	&__categories {
		display: flex;
		gap: #{utility.rem(16)};
	}
	&__mission {
		background-color: #eaecf0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: #{utility.rem(33)};
		border-radius: #{utility.rem(16)};
		@include breakpoints.media-down('xl') {
			display: flex;
			flex-direction: column;
		}
	}
	&__mission-picture {
		display: flex;
		justify-self: flex-end;
		border-radius: #{utility.rem(16)};
		.picture {
			border-radius: #{utility.rem(16)};
			@include breakpoints.media-down('xl') {
				display: none;
			}
		}
	}
	&__mission-picture-mobile {
		display: none;
		@include breakpoints.media-down('xl') {
			display: flex;
			.picture {
				width: 100%;
			}
			:deep(img) {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
	&__garanty {
		color: #1d2939;
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
	&__mission-wrapper {
		padding-left: #{utility.rem(24)};
		padding-top: #{utility.rem(24)};
		padding-bottom: #{utility.rem(24)};
		display: flex;
		flex-direction: column;
		gap: #{utility.rem(24)};
	}
	&__location {
		margin-top: #{utility.rem(42)};
		display: flex;
		flex-direction: column;
		gap: #{utility.rem(22)};
		.icon {
			width: #{utility.rem(32)};
			height: #{utility.rem(32)};
			color: #fff;
		}
	}
	&__location-title {
		color: #fff;
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
	&__location-info {
		display: flex;
		gap: #{utility.rem(16)};
		@include breakpoints.media-down('xl') {
			flex-direction: column;
		}
	}
	&__location-wrapper {
		display: flex;
		gap: #{utility.rem(16)};
		border-radius: #{utility.rem(12)};
		border: 1px solid rgba(234, 236, 240, 0.16);
		background: rgba(255, 255, 255, 0.08);
		padding: #{utility.rem(16)};
		padding-right: #{utility.rem(24)};
		position: relative;
		@include breakpoints.media-down('xl') {
			max-width: #{utility.rem(260)};
			padding: #{utility.rem(8)};
			gap: #{utility.rem(8)};
			align-items: center;
		}
		.icon {
			@include breakpoints.media-down('xl') {
				width: #{utility.rem(24)};
			}
		}
		> span {
			color: #fff;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.96)};
			@include breakpoints.media-down('xl') {
				color: #fff;
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 115%;
				letter-spacing: #{utility.rem(-0.72)};
			}
		}
		a {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	&__zem-fond {
		margin-top: #{utility.rem(32)};
		display: flex;
		padding: #{utility.rem(24)};
		background-color: var(--brand);
		max-width: #{utility.rem(924)};
		border-radius: #{utility.rem(16)};
		@include breakpoints.media-down('xl') {
		}
		> span {
			color: #fff;
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
				letter-spacing: #{utility.rem(-0.72)};
			}
		}
	}
	&__mission-title {
		display: flex;
		gap: #{utility.rem(8)};
		.icon {
			width: #{utility.rem(24)};
		}
		> span {
			color: #1d2939;
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
	&__categories-wrapper {
		position: relative;
		.picture {
			border-radius: #{utility.rem(16)};
		}
		> span {
			color: #fff;
			font-size: #{utility.rem(32)};
			font-style: normal;
			font-weight: 600;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.64)};
			position: absolute;
			bottom: #{utility.rem(24)};
			left: #{utility.rem(24)};
			max-width: 80%;
			@include breakpoints.media-down('xl') {
				background: linear-gradient(180deg, rgba(29, 41, 57, 0) 0%, rgba(29, 41, 57, 0.64) 100%);
				height: 50%;
				width: 100%;
				max-width: 100%;
				bottom: #{utility.rem(0)};
				left: #{utility.rem(0)};
				display: flex;
				align-items: flex-end;
				padding: #{utility.rem(16)};
				font-size: #{utility.rem(16)};
				font-style: normal;
				font-weight: 600;
				line-height: 115%;
				letter-spacing: #{utility.rem(-0.32)};
			}
		}
	}
}
.directions__categories {
	@include breakpoints.media-down('xl') {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		> div:not(:last-child) {
			:deep(img) {
				aspect-ratio: 1/1;
			}
		}
		> div:last-child {
			grid-column-start: 1;
			grid-column-end: 3;
			:deep(img) {
				aspect-ratio: 2/1;
			}
		}
	}
}
.directions__categories-wrapper {
	@include breakpoints.media-down('xl') {
		:deep(img) {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
