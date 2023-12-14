<script setup lang="ts">
import TheHeader from '~/components/core/the-header.vue';
</script>

<template>
	<div class="page-container">
		<yandex-verification />
		<the-header />
		<nuxt-page />
	</div>
</template>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

// #__nuxt {
// 	display: grid;
// }

.page-container {
	position: relative;
	padding-bottom: #{utility.rem(16)};
}
</style>
