<template>
	<base-section title="Вакансии" class="section-vacancy">
		<div class="vacancy">
			<div class="vacancy__info-block">
				<span class="vacancy__title">Животновод</span>
			</div>
		</div>
	</base-section>
</template>
<script setup lang="ts">
import BaseSection from '~/components/base-section.vue';
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
	// padding: #{utility.rem(24)};
	// border-radius: 32px;
	&__info-block {
		display: flex;
		align-items: center;
		height: #{utility.rem(64)};
		padding: #{utility.rem(24)};
		background-color: #1d2939;
	}
}
</style>
