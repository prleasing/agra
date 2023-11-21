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
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 600;
		line-height: normal;
		letter-spacing: #{utility.rem(-0.48)};
		padding-bottom: #{utility.rem(24)};
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
	}
	&__mission-picture {
		display: flex;
		justify-self: flex-end;
		border-radius: #{utility.rem(16)};
		.picture {
			border-radius: #{utility.rem(16)};
		}
	}
	&__garanty {
		color: #1d2939;
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 500;
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};
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
	}
	&__location-info {
		display: flex;
		gap: #{utility.rem(16)};
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
		> span {
			color: #fff;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.96)};
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
		> span {
			color: #fff;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.48)};
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
		}
	}
}
</style>
