<template>
	<section class="section">
		<h2 class="section__title">
			{{ title }}
		</h2>
		<div class="section-content section__content">
			<slot />
		</div>
	</section>
</template>
<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	title: {
		type: String as PropType<string>,
		required: true
	}
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';

.section {
	width: var(--container);
	margin: 0 auto;

	&__content {
		padding: #{utility.rem(24)};
		border-radius: #{utility.rem(32)};
		background: #fff;
	}

	& &__title {
		padding-bottom: #{utility.rem(24)};
		padding-left: #{utility.rem(24)};
		color: #1d2939;
		font-weight: 700;
		font-style: normal;
		font-size: #{utility.rem(48)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.96)};
	}
}
</style>
