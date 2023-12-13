<template>
	<base-section title="Вакансии" class="section-vacancy">
		<div class="vacancy">
			<div v-for="item in vacancies" :key="item.id" class="vacancy__info-block">
				<nuxt-link target="_blank" class="vacancy__title" :to="`https://ufa.hh.ru/vacancy/${item.id}`">{{
					item.name
				}}</nuxt-link>
				<span class="vacancy__link">
					<base-icon :icon="Icons32ArrowUpRight" />
				</span>
			</div>
			<div class="vacancy__payment">
				<base-icon :icon="Icons44ExclamationMark" />
				<span class="vacancy__payment-title">Оплата индивидуальная по результатам собеседования</span>
			</div>
		</div>
		<base-picture :width="379" :height="476" alt="vacancy-photo" src="/images/landing/home/vacancy.jpg" />
	</base-section>
</template>
<script setup lang="ts">
import { Icons32ArrowUpRight, Icons44ExclamationMark } from '#icons';
import { computed, useFetch, useRuntimeConfig, useAsyncData } from '#imports';
import BaseSection from '~/components/base-section.vue';
import BaseIcon from '~/components/elements/base-icon.vue';
import BasePicture from '~/components/elements/base-picture.vue';

interface Vacancy {
	name: string;
	apply_alternate_url: string;
	id: number;
}
const runtimeConfig = useRuntimeConfig();
// const { data } = await useFetch<{ items: Vacancy[] }>(runtimeConfig.public.apiHhLink);
const { data } = await useAsyncData('items', () => $fetch<{ items: Vacancy[] }>(runtimeConfig.public.apiHhLink));
const vacancies = computed(() => {
	return data.value?.items ?? [];
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.section-vacancy {
	@include breakpoints.media-down('xl') {
		width: unset;
		display: grid;
		width: 100%;
	}
	:deep(.section-content) {
		display: grid;
		grid-template-columns: 8fr 4fr;
		gap: #{utility.rem(16)};
		background-color: #1d2939;
		box-shadow: 0 #{utility.rem(24)} #{utility.rem(64)} #{utility.rem(-24)} rgb(29 41 57 / 24%);
		@include breakpoints.media-down('xl') {
			width: unset;
			flex-direction: column;
			grid-template-columns: 1fr;
		}
	}
}

.vacancy {
	display: flex;
	flex-direction: column;
	gap: #{utility.rem(4)};
	@include breakpoints.media-down('xl') {
		gap: #{utility.rem(8)};
	}
	:deep(picture) {
		position: sticky;
		top: 0;
		width: 100%;
	}
	:deep(img) {
		width: 100%;
		object-fit: cover;
	}

	& &__payment {
		display: flex;
		align-items: center;
		margin-top: #{utility.rem(16)};
		padding: #{utility.rem(16)} #{utility.rem(20)} #{utility.rem(16)} #{utility.rem(20)};
		border: 1px solid #fff;
		border-radius: #{utility.rem(16)};
		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(12)};
			width: 100%;
			gap: #{utility.rem(10)};
		}

		:deep(.icon) {
			width: #{utility.rem(44)};
			height: #{utility.rem(44)};
			color: #fff;
			@include breakpoints.media-down('xl') {
				width: #{utility.rem(32)};
				display: flex;
				align-self: flex-start;
			}
		}
	}

	& &__payment-title {
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.48)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.36)};
			max-width: 60%;
		}
	}

	& &__info-block {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		@include breakpoints.media-down('xl') {
			align-items: flex-start;
		}
		padding: #{utility.rem(16)} #{utility.rem(16)} #{utility.rem(16)} #{utility.rem(24)};
		border-radius: #{utility.rem(16)};
		background: rgb(255 255 255 / 4%);
		color: #fff;
		transition:
			background-color 300ms ease-in-out,
			color 300ms ease-in-out;

		& a::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			transition: color 300ms ease-in-out;
		}
	}

	& &__info-block:hover {
		background-color: #fff;
		color: #1d2939;
	}

	& &__info-block:hover .vacancy__title {
		color: #1d2939;
	}

	& &__info-block:hover .vacancy__link {
		background-color: var(--brand);
	}

	& &__title {
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.48)};
		text-decoration: none;
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(18)};
			font-style: normal;
			font-weight: 500;
			line-height: 135%;
			letter-spacing: #{utility.rem(-0.36)};
		}
	}

	&__link {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: #{utility.rem(16)};
		border-radius: #{utility.rem(12)};
		background-color: transparent;
		color: #fff;
		transition: background-color 300ms ease-in-out;
		@include breakpoints.media-down('xl') {
			padding: #{utility.rem(0)};
		}

		:deep(.icon) {
			width: #{utility.rem(32)};
			height: #{utility.rem(32)};
		}
	}
}

.picture {
	overflow: visible;

	:deep(img) {
		border-radius: #{utility.rem(16)};
		width: 100%;
		object-fit: cover;
	}

	:deep(picture) {
		position: sticky;
		top: 0;
		width: 100%;
		display: block;
	}
}
</style>
