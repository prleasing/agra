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
	bottom: #{utility.rem(16)};
	right: #{utility.rem(16)};
	padding: #{utility.rem(16)};
	background-color: #fff;
	border-radius: #{utility.rem(100)};
	max-height: #{utility.rem(64)};
	border: none;
	cursor: pointer;
	transition: background-color 200ms ease-in-out;
	@include breakpoints.media-down('xl') {
		position: unset;
		margin: 0 auto;
		max-width: #{utility.rem(64)};
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
