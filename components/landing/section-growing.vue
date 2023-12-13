<template>
	<base-section title="Растениеводство" class="section-growing">
		<div class="growing">
			<div class="growing__picture">
				<base-picture :width="1170" :height="384" alt="growing-picture" src="/images/landing/home/growing.jpg" />
				<span class="growing__description">
					В настоящее время, при поддержке лучших агрономов Республики Башкортостан, хозяйство успешно решает следующие
					задачи
				</span>
			</div>
			<base-masonry :columns="isMobile ? 1 : 3">
				<div v-for="item in growingTasks" :key="item.id" class="growing__masonry-item">
					<base-icon :icon="Icons24ProgressCheck" />
					<span>{{ item.title }}</span>
				</div>
			</base-masonry>
			<div id="products" class="growing__production">
				<div>
					<base-icon :icon="Icons44Discount" />
				</div>
				<span>Собственная продукция на реализацию (цена с НДС)</span>
				<!-- <div class="growing__empty"></div> -->
			</div>
			<the-cultures />
			<div class="growing__warn-wrapper">
				<div class="growing__warning">
					<div class="growing__icon-wrapper">
						<base-icon :icon="Icons32ExclamationMark"></base-icon>
					</div>
					<span
						>Цены указаны без доставки и упаковки, возможно доставка и упаковка в наши мешки по договоренности.</span
					>
				</div>
				<div class="growing__delivery-info">
					<div class="growing__pack">
						<base-icon :icon="Icons32Moneybag"></base-icon>
						<span class="growing__pack-info">1 мешок</span>
						<div class="growing__separator"></div>
						<span class="growing__pack-info">20 ₽</span>
					</div>
					<div class="growing__big-pack">
						<base-icon :icon="Icons32Moneybag"></base-icon>
						<span class="growing__pack-info">1 биг-бэг</span>
						<div class="growing__separator"></div>
						<span class="growing__pack-info">800 ₽</span>
					</div>
					<div class="growing__delivery">
						<base-icon :icon="Icons32TruckDelivery"></base-icon>
						<span class="growing__delivery-title">Доставка</span>
						<div class="growing__separator-nomobile"></div>
						<span class="growing__pack-info">1 км</span>
						<div class="growing__separator"></div>
						<span class="growing__pack-info">40 ₽</span>
					</div>
				</div>
			</div>
			<div class="growing__cultures">
				<span class="growing__cultures-title"
					>Хозяйство полностью соблюдает весь технологический процесс агрономии при выращивании культур.</span
				>
				<div>
					<div class="growing__grain-wrapper">
						<div class="growing__grain-solo">
							<div class="growing__grain-title">
								<base-icon :icon="Icons24Seeding" />
								<span>Урожай 2023</span>
							</div>
							<div class="growing__grain">
								<base-icon :icon="Icons24Seeding" />
								<span>Ячмень</span>
							</div>
							<div class="growing__grain">
								<base-icon :icon="Icons24Seeding" />
								<span>Овес</span>
							</div>
							<div class="growing__grain-binary">
								<base-icon :icon="Icons24Seeding" />
								Бинарный посев
								<!-- <span>ячмень + горох</span> -->
							</div>
							<div class="growing__grain">
								<base-icon :icon="Icons24Seeding" />
								<span>Пшеница</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="growing__image-wrapper">
				<base-picture :width="1170" :height="487" alt="cows-picture" src="/images/landing/home/field-and-cows.jpg" />
				<div class="growing__image-cover">
					<div>
						<base-icon :icon="Icons44Growth" />
					</div>
					<span>В планах на 2024г. экспериментально будут посажены новые культуры и многолетние травы</span>
				</div>
			</div>
		</div>
	</base-section>
</template>
<script setup lang="ts">
import {
	Icons24ProgressCheck,
	Icons24Seeding,
	Icons32ExclamationMark,
	Icons32Moneybag,
	Icons32TruckDelivery,
	Icons44Discount,
	Icons44Growth
} from '#icons';
import { onMounted, ref, useWindowSize, watch } from '#imports';
import BaseSection from '~/components/base-section.vue';
import BaseIcon from '~/components/elements/base-icon';
import BaseMasonry from '~/components/elements/base-masonry';
import BasePicture from '~/components/elements/base-picture.vue';
import TheCultures from '~/components/landing/the-cultures.vue';

const growingTasks = ref([
	{ id: 1, title: 'обеспечение высокой урожайности и качества сельскохозяйственной продукции' },
	{ id: 2, title: 'сохранение и улучшение плодородия почвы' },
	{ id: 3, title: 'оптимизация использования агротехнических методов и механизации возделывания растений' },
	{ id: 4, title: 'борьба с болезнями, вредителями и сорняками' },
	{ id: 5, title: 'сохранение и развитие генетического потенциала культурных растений' }
]);
const { width } = useWindowSize();
const isMobile = ref<boolean>(false);
watch(width, (value) => {
	if (value < 1200) {
		isMobile.value = true;
	} else isMobile.value = false;
});
onMounted(() => {
	if (width.value < 1200) {
		isMobile.value = true;
	} else isMobile.value = false;
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.growing {
	:deep(img) {
		border-radius: #{utility.rem(16)};
		@include breakpoints.media-down('xl') {
			object-fit: cover;
			width: 100%;
		}
	}
	&__picture {
		position: relative;
		margin-bottom: #{utility.rem(24)};
		> span {
			position: absolute;
			bottom: 0;
		}
	}
	&__icon-wrapper {
		padding: #{utility.rem(12)};
		background-color: var(--brand);
		width: #{utility.rem(56)};
		height: #{utility.rem(56)};
		border-radius: #{utility.rem(100)};
		display: flex;
		@include breakpoints.media-down('xl') {
			width: #{utility.rem(32)};
			height: #{utility.rem(32)};
			padding: #{utility.rem(4)};
		}
		.icon {
			width: #{utility.rem(32)};
			color: #fff;
			@include breakpoints.media-down('xl') {
				width: #{utility.rem(24)};
			}
		}
	}
	&__warning {
		display: flex;
		gap: #{utility.rem(24)};
		align-items: center;
		max-width: #{utility.rem(899)};
		margin-top: #{utility.rem(24)};
		padding: #{utility.rem(24)};
		padding-right: #{utility.rem(32)};
		border-radius: #{utility.rem(16)} #{utility.rem(16)} 0px 0px;
		border: 1px solid #eaecf0;
		border-bottom: unset;
		@include breakpoints.media-down('xl') {
			border-radius: unset;
			align-items: flex-start;
			padding: #{utility.rem(16)};
			padding-right: #{utility.rem(16)};
			gap: #{utility.rem(16)};
			display: grid;
			grid-template-columns: 1fr 7fr;
			border-bottom: 1px solid #eaecf0;
		}
		> span {
			color: #1d2939;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.48)};
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 115%;
				letter-spacing: #{utility.rem(-0.36)};
			}
		}
		.icon {
			@include breakpoints.media-down('xl') {
				width: unset;
				height: unset;
			}
		}
	}
	&__big-pack,
	&__pack {
		display: flex;
		align-items: center;
		border: 1px solid #eaecf0;
		// border-top: unset;
		// max-width: #{utility.rem(319)};
		border-radius: 0px 0px 0px #{utility.rem(16)};
		padding: #{utility.rem(24)} #{utility.rem(32)} #{utility.rem(24)} #{utility.rem(32)};
		@include breakpoints.media-down('xl') {
			width: 100%;
			max-width: unset;
			border-radius: unset;
			padding: #{utility.rem(16)};
			border-top: unset;
		}
		.icon {
			width: #{utility.rem(32)};
			@include breakpoints.media-down('xl') {
				width: #{utility.rem(24)};
			}
		}
		> span {
			padding-left: #{utility.rem(16)};
			padding-right: #{utility.rem(16)};
			color: #1d2939;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.48)};
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 115%;
				letter-spacing: #{utility.rem(-0.36)};
			}
		}
	}
	&__big-pack {
		border-radius: unset;
		border-left: unset;
		@include breakpoints.media-down('xl') {
			border-left: 1px solid #eaecf0;
		}
	}
	&__separator {
		border-left: 1px solid #667085;
		height: #{utility.rem(16)};
	}
	&__separator-nomobile {
		border-left: 1px solid #667085;
		height: #{utility.rem(16)};
		@include breakpoints.media-down('xl') {
			border-left: unset;
		}
	}
	&__delivery {
		display: flex;
		align-items: center;
		border: 1px solid #eaecf0;
		border-left: unset;
		// border-top: unset;
		max-width: #{utility.rem(404)};
		border-radius: 0px #{utility.rem(16)} #{utility.rem(16)} 0px;
		padding: #{utility.rem(24)} #{utility.rem(32)} #{utility.rem(24)} #{utility.rem(32)};
		@include breakpoints.media-down('xl') {
			border-left: 1px solid #eaecf0;
			border-radius: 0px 0px #{utility.rem(16)} #{utility.rem(16)};
			width: 100%;
			max-width: unset;
			padding: #{utility.rem(16)};
			border-top: unset;
		}
		.icon {
			width: #{utility.rem(32)};
			@include breakpoints.media-down('xl') {
				width: #{utility.rem(24)};
			}
		}
		.growing__pack-info {
			padding-left: #{utility.rem(16)};
			padding-right: #{utility.rem(16)};
			color: #1d2939;
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.48)};
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 115%;
				letter-spacing: #{utility.rem(-0.36)};
				padding-left: #{utility.rem(8)};
				padding-right: #{utility.rem(8)};
			}
		}
	}
	&__delivery-info {
		display: flex;
		@include breakpoints.media-down('xl') {
			flex-direction: column;
		}
	}
	&__masonry-item {
		display: flex;
		flex-direction: column;
		gap: #{utility.rem(16)};
		padding: #{utility.rem(16)};
		border: 1px solid rgb(29 41 57 / 8%);
		border-radius: #{utility.rem(16)};
		background-color: rgb(29 41 57 / 4%);
		color: var(--brand);

		.icon {
			width: #{utility.rem(24)};
			color: var(--brand);
		}
	}
	&__delivery-title {
		padding-left: #{utility.rem(16)};
		padding-right: #{utility.rem(16)};
		font-size: #{utility.rem(24)};
		font-style: normal;
		font-weight: 500;
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			color: #1d2939;
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
	&__description {
		display: flex;
		margin-top: #{utility.rem(24)};
		margin-bottom: #{utility.rem(32)};
		color: #fff;
		font-weight: 600;
		font-style: normal;
		font-size: #{utility.rem(32)};
		line-height: normal;
		letter-spacing: #{utility.rem(-0.64)};
		text-align: center;
		z-index: 1;
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(20)};
			font-style: normal;
			font-weight: 600;
			line-height: normal;
			letter-spacing: #{utility.rem(-0.4)};
		}
	}

	&__cultures {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: #{utility.rem(16)};
		margin-top: #{utility.rem(42)};
		padding-top: #{utility.rem(42)};
		padding-bottom: #{utility.rem(42)};
		border-top: 1px solid #eaecf0;
		@include breakpoints.media-down('xl') {
			grid-template-columns: 1fr;
			padding-top: #{utility.rem(16)};
			padding-bottom: #{utility.rem(16)};
		}
	}

	&__cultures-title {
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: normal;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}
	&__grain-title,
	&__grain,
	&__grain-binary {
		border: 1px solid #eaecf0;
		border-radius: #{utility.rem(16)};
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.36)};
		}

		.icon {
			width: #{utility.rem(24)};
			color: var(--brand);
		}
	}
	&__grain-binary {
		display: flex;
		gap: #{utility.rem(12)};
		align-items: center;
		padding: #{utility.rem(8)};
		padding-left: #{utility.rem(16)};

		> span {
			display: inline-block;
			gap: #{utility.rem(4)};
			padding: #{utility.rem(8)} #{utility.rem(16)} #{utility.rem(8)} #{utility.rem(16)};
			border: 1px solid #eaecf0;
			border-radius: #{utility.rem(32)};
			color: #667085;
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(24)};
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.72)};
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: 135%;
				letter-spacing: #{utility.rem(-0.36)};
				display: none;
			}
		}
	}
	&__grain-title,
	&__grain {
		display: flex;
		gap: #{utility.rem(12)};
		padding: #{utility.rem(16)};
		padding-right: #{utility.rem(24)};
		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(8)};
			padding-right: #{utility.rem(16)};
		}
	}
	&__grain-title {
		background-color: var(--brand);
		color: #fff;
		.icon {
			color: #fff;
		}
	}
	&__grain-solo {
		display: flex;
		gap: #{utility.rem(12)};
		flex-wrap: wrap;
		@include breakpoints.media-down('xl') {
			gap: #{utility.rem(8)};
		}
	}

	&__grain-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: #{utility.rem(8)};
	}

	&__image-wrapper {
		position: relative;
	}

	&__image-cover {
		position: absolute;
		top: #{utility.rem(16)};
		left: #{utility.rem(16)};
		display: flex;
		gap: #{utility.rem(16)};
		align-items: center;
		max-width: #{utility.rem(670)};
		padding: #{utility.rem(16)};
		padding-right: #{utility.rem(24)};
		border-radius: #{utility.rem(13)};
		background-color: var(--brand);
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: normal;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(16)};
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			letter-spacing: #{utility.rem(-0.32)};
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			gap: #{utility.rem(8)};
			right: #{utility.rem(16)};
		}
		.icon {
			width: #{utility.rem(44)};
			@include breakpoints.media-down('xl') {
				width: #{utility.rem(24)};
			}
		}
	}

	&__production {
		display: flex;
		margin-top: #{utility.rem(42)};
		margin-bottom: #{utility.rem(16)};
		padding: #{utility.rem(16)};
		padding-right: #{utility.rem(20)};
		padding-left: #{utility.rem(20)};
		border: 1px solid #eaecf0;
		border-radius: #{utility.rem(16)};
		@include breakpoints.media-down('md') {
			flex-direction: column;
		}

		.icon {
			width: #{utility.rem(44)};
			@include breakpoints.media-down('xl') {
				width: #{utility.rem(24)};
				display: block;
			}
		}

		> span {
			display: flex;
			flex: 1;
			justify-content: center;
			align-items: center;
			margin-right: #{utility.rem(44)};
			color: #1d2939;
			font-weight: 500;
			font-style: normal;
			font-size: #{utility.rem(24)};
			line-height: normal;
			letter-spacing: #{utility.rem(-0.48)};
			@include breakpoints.media-down('xl') {
				font-size: #{utility.rem(18)};
				font-style: normal;
				font-weight: 500;
				line-height: normal;
				letter-spacing: #{utility.rem(-0.36)};
			}
			@include breakpoints.media-down('md') {
				justify-content: flex-start;
			}
		}
	}
}
</style>
