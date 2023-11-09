<template>
	<base-section title="Растениеводство" class="section-growing">
		<div class="growing">
			<base-picture :width="1170" :height="384" alt="growing-picture" src="/images/landing/home/growing.jpg" />
			<span class="growing__description">
				В настоящее время, при поддержке лучших агрономов Республики Башкортостан, хозяйство успешно решает следующие
				задачи
			</span>
			<base-masonry>
				<div v-for="item in growingTasks" :key="item.id" class="growing__masonry-item">
					<base-icon :icon="Icons24ProgressCheck" />
					<span>{{ item.title }}</span>
				</div>
			</base-masonry>
			<div class="growing__cultures">
				<span class="growing__cultures-title"
					>Хозяйство полностью соблюдает весь технологический процесс агрономии при выращивании культур.</span
				>
				<div>
					<div class="growing__grain-wrapper">
						<div class="growing__grain-solo">
							<div class="growing__grain">
								<base-icon :icon="Icons24Seeding" />
								<span>Ячмень</span>
							</div>
							<div class="growing__grain">
								<base-icon :icon="Icons24Seeding" />
								<span>Пшеница</span>
							</div>
							<div class="growing__grain">
								<base-icon :icon="Icons24Seeding" />
								<span>Овес</span>
							</div>
						</div>
						<div>
							<div class="growing__grain-binary">
								<base-icon :icon="Icons24Seeding" />
								Бинарный посев
								<span>ячмень + горох</span>
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
import { Icons24ProgressCheck, Icons24Seeding, Icons44Growth } from '#icons';
import { ref } from '#imports';
import BaseSection from '~/components/base-section.vue';
import BaseIcon from '~/components/elements/base-icon';
import BaseMasonry from '~/components/elements/base-masonry';
import BasePicture from '~/components/elements/base-picture.vue';

const growingTasks = ref([
	{ id: 1, title: 'обеспечение высоких урожайности и качества сельскохозяйственной продукции' },
	{ id: 2, title: 'сохранение и улучшение плодородия почвы' },
	{ id: 3, title: 'оптимизация использования агротехнических методов и механизации возделывания растений' },
	{ id: 4, title: 'борьба с болезнями, вредителями и сорняками' },
	{ id: 5, title: 'сохранение и развитие генетического потенциала культурных растений' }
]);
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';

.growing {
	:deep(img) {
		border-radius: #{utility.rem(16)};
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

	&__description {
		display: flex;
		margin-top: #{utility.rem(24)};
		margin-bottom: #{utility.rem(32)};
		color: #1d2939;
		font-weight: 600;
		font-style: normal;
		font-size: #{utility.rem(32)};
		line-height: normal;
		letter-spacing: #{utility.rem(-0.64)};
		text-align: center;
	}

	&__cultures {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: #{utility.rem(16)};
		margin-top: #{utility.rem(42)};
		padding-top: #{utility.rem(42)};
		padding-bottom: #{utility.rem(42)};
		border-top: 1px solid #eaecf0;
	}

	&__cultures-title {
		color: #1d2939;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: normal;
		letter-spacing: #{utility.rem(-0.48)};
	}

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
		}
	}

	&__grain {
		display: flex;
		gap: #{utility.rem(12)};
		padding: #{utility.rem(16)};
		padding-right: #{utility.rem(24)};
	}

	&__grain-solo {
		display: flex;
		gap: #{utility.rem(12)};
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

		.icon {
			width: #{utility.rem(44)};
		}
	}
}
</style>
