<script setup lang="ts">
import TheHeader from '~/components/core/the-header.vue';
</script>

<template>
	<div>
		<the-header />
		<nuxt-page />
	</div>
</template>
<style scoped lang="scss">
#__nuxt {
	display: grid;
}
</style>
