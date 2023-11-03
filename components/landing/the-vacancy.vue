<template>
	<base-section title="Вакансии" class="section-vacancy">
		<div class="vacancy">
			<div v-for="item in vacancies" :key="item.id" class="vacancy__info-block">
				<span class="vacancy__title">{{ item.name }}</span>
				<nuxt-link class="vacancy__link" :to="`https://ufa.hh.ru/vacancy/${item.id}`">
					<base-icon :icon="Icons32ArrowUpRight" />
				</nuxt-link>
			</div>
		</div>
	</base-section>
</template>
<script setup lang="ts">
import { Icons32ArrowUpRight } from '#icons';
import { computed, useFetch, useRuntimeConfig } from '#imports';
import BaseSection from '~/components/base-section.vue';
import BaseIcon from '~/components/elements/base-icon.vue';

interface Vacancy {
	name: string;
	apply_alternate_url: string;
	id: number;
}
const runtimeConfig = useRuntimeConfig();
const { data } = await useFetch<{ items: Vacancy[] }>(runtimeConfig.public.apiHhLink);
// const vacancies = requestVacancy.then((responce) => console.log(responce.json().then((data) => data.items)));
const vacancies = computed(() => {
	return data.value?.items ?? [];
});
console.log(vacancies);
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';

.section-vacancy {
	:deep(.section-content) {
		background-color: #1d2939;
		box-shadow: 0 24px 64px -24px rgb(29 41 57 / 24%);
	}
}

.vacancy {
	display: flex;
	flex-direction: column;
	gap: #{utility.rem(4)};
	max-width: 735px;

	& &__info-block {
		display: flex;
		justify-content: space-between;
		align-items: center;

		// height: #{utility.rem(96)};
		padding: #{utility.rem(16)} #{utility.rem(16)} #{utility.rem(16)} #{utility.rem(24)};
		border-radius: #{utility.rem(16)};

		// background-color: #1d2939;
		background: rgb(255 255 255 / 4%);
	}

	& &__title {
		margin: #{utility.rem(16)} #{utility.rem(16)} #{utility.rem(16)} #{utility.rem(24)};
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: 24px;
		line-height: 135%;
		letter-spacing: -0.48px;
	}

	&__link {
		display: flex;
		justify-content: center;
		align-items: center;
		width: #{utility.rem(48)};
		height: #{utility.rem(48)};
		padding: #{utility.rem(16)};
		color: #fff;

		:deep(.icon) {
			width: 32px;
			height: 32px;
		}
	}
}
</style>
