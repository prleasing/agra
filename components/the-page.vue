<script setup lang="ts"></script>

<template>
	<div class="page">
		<slot />
	</div>
</template>

<style scoped lang="scss">
@use 'assets/styles/utility';

.page {
	display: grid;
	gap: #{utility.rem(150)};
}
</style>
