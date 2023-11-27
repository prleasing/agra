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
@use 'assets/styles/breakpoints';

.section {
	display: grid;
	gap: #{utility.rem(24)};
	width: var(--container);
	margin: 0 auto;
	@include breakpoints.media-down('xl') {
		width: math(var(--mobile-container));
		max-width: var(--mobile-container-max-width);
		padding: var(--ears);
	}

	&__content {
		margin: 0 #{utility.rem(-24)};
		padding: #{utility.rem(24)};
		border-radius: #{utility.rem(32)};
		background: #fff;
		@include breakpoints.media-down('xl') {
			margin: 0 #{utility.rem(-16)};
			padding: #{utility.rem(16)};
			border-radius: #{utility.rem(24)};
		}
	}

	& &__title {
		color: #1d2939;
		font-weight: 700;
		font-style: normal;
		font-size: #{utility.rem(48)};
		line-height: 115%;
		letter-spacing: #{utility.rem(-0.96)};
		@include breakpoints.media-down('xl') {
			font-size: #{utility.rem(24)};
			font-style: normal;
			font-weight: 700;
			line-height: 115%;
			letter-spacing: #{utility.rem(-0.96)};
			display: flex;
			flex-wrap: wrap;
		}
	}
}
</style>
