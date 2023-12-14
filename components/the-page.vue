<script setup lang="ts"></script>

<template>
	<div class="page">
		<slot />
	</div>
</template>

<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.page {
	display: grid;
	gap: #{utility.rem(150)};

	@include breakpoints.media-down('xl') {
		gap: #{utility.rem(64)};
	}
}
</style>
