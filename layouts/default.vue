<script setup lang="ts">
import TheHeader from '~/components/core/the-header.vue';
</script>

<template>
	<div class="page-container">
		<YandexVerification />
		<the-header />
		<nuxt-page />
	</div>
</template>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';
#__nuxt {
	display: grid;
}
.page-container {
	padding-bottom: #{utility.rem(16)};
	position: relative;
}
</style>
