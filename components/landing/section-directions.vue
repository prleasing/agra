<template>
	<base-section title="Направления деятельности" class="section-directions">
		<div class="directions">
			<h3>Ключевыми напрвлениями деятельности ООО "ПР-Агро" являются:</h3>
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
			</div>
			<div class="directions__location">
				<span class="directions__location-title"
					>Сегодня производственные активы предприятия расположены в Иглинском районе, в двух населенных пунктах:</span
				>
				<div class="directions__location-info">
					<div class="directions__location-wrapper">
						<base-icon :icon="Icons32MapPinShare"></base-icon>
						<span>Деревня Поступалово</span>
						<nuxt-link to="#"></nuxt-link>
					</div>
					<div class="directions__location-wrapper">
						<base-icon :icon="Icons32MapPinShare"></base-icon>
						<span>Деревня Ивано-Казанка</span>
						<nuxt-link to="#"></nuxt-link>
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
.section-directions {
	:deep(.section__content) {
		background-color: #1d2939;
	}
}

.directions {
	> h3 {
		color: #fff;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: -0.48px;
		padding-bottom: 24px;
	}
	&__categories {
		display: flex;
		gap: 16px;
	}
	&__mission {
		background-color: #eaecf0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin-top: 33px;
		border-radius: 16px;
	}
	&__mission-picture {
		display: flex;
		justify-self: flex-end;
		border-radius: 16px;
		.picture {
			border-radius: 16px;
		}
	}
	&__garanty {
		color: #1d2939;
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: -0.48px;
	}
	&__mission-wrapper {
		padding-left: 24px;
		padding-top: 24px;
		padding-bottom: 24px;
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	&__location {
		margin-top: 42px;
		display: flex;
		flex-direction: column;
		gap: 22px;
		.icon {
			width: 32px;
			height: 32px;
			color: #fff;
		}
	}
	&__location-title {
		color: #fff;
		font-size: 24px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: -0.48px;
	}
	&__location-info {
		display: flex;
		gap: 16px;
	}
	&__location-wrapper {
		display: flex;
		gap: 16px;
		border-radius: 12px;
		border: 1px solid rgba(234, 236, 240, 0.16);
		background: rgba(255, 255, 255, 0.08);
		padding: 16px;
		padding-right: 24px;
		position: relative;
		> span {
			color: #fff;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: -0.96px;
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
		margin-top: 32px;
		display: flex;
		padding: 24px;
		background-color: var(--brand);
		max-width: 924px;
		border-radius: 16px;
		> span {
			color: #fff;
			font-size: 24px;
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: -0.48px;
		}
	}
	&__mission-title {
		display: flex;
		gap: 8px;
		.icon {
			width: 24px;
		}
		> span {
			color: #1d2939;
			font-size: 18px;
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: -0.36px;
		}
	}
	&__categories-wrapper {
		position: relative;
		.picture {
			border-radius: 16px;
		}
		> span {
			color: #fff;
			font-size: 32px;
			font-style: normal;
			font-weight: 600;
			line-height: 115%;
			letter-spacing: -0.64px;
			position: absolute;
			bottom: 24px;
			left: 24px;
			max-width: 80%;
		}
	}
}
</style>
