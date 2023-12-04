<template>
	<div class="cultures">
		<the-product v-for="item in productStore.items" :key="item.id" :item="item" />
	</div>
</template>
<script setup lang="ts">
import { useStoreProduct } from '~/store/storeProduct';

import TheProduct from './the-product.vue';

const productStore = useStoreProduct();
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.cultures {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: #{utility.rem(16)};
	aspect-ratio: 1/1;
	@include breakpoints.media-down('xl') {
		grid-template-columns: 1fr 1fr;
		// grid-template-columns: repeat(1, 1fr);
	}
	@include breakpoints.media-down('mmd') {
		grid-template-columns: 1fr;
		// grid-template-columns: repeat(1, 1fr);
	}
}
</style>
