<template>
	<button class="up-scroll" @click="scrollTop">
		<base-icon :icon="Icons32ArrowUp"></base-icon>
	</button>
</template>
<script setup lang="ts">
import { Icons32ArrowUp } from '#icons';
import BaseIcon from '~/components/elements/base-icon.vue';

const scrollTop = () => {
	window.scroll({
		top: 0,
		behavior: 'smooth'
	});
};
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.up-scroll {
	position: absolute;
	right: #{utility.rem(16)};
	bottom: #{utility.rem(16)};
	max-height: #{utility.rem(64)};
	padding: #{utility.rem(16)};
	border: none;
	border-radius: #{utility.rem(100)};
	background-color: #fff;
	cursor: pointer;
	transition: background-color 200ms ease-in-out;

	@include breakpoints.media-down('xl') {
		position: unset;
		max-width: #{utility.rem(64)};
		margin: 0 auto;
		margin-bottom: #{utility.rem(42)};
	}

	.icon {
		width: #{utility.rem(32)};
		color: var(--brand);
		transition: color 200ms ease-in-out;
	}
}

.up-scroll:hover {
	background-color: var(--brand);
}

.up-scroll:hover .icon {
	color: #fff;
}
</style>
