<template>
	<component :is="tag" class="sr-only">
		<slot />
	</component>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
	tag: {
		// eslint-disable-next-line no-undef
		type: String as PropType<keyof HTMLElementTagNameMap>,
		default: 'span'
	}
});
</script>

<style lang="scss" scoped>
@use 'assets/styles/utility';

.sr-only {
	@include utility.sr-only;
}
</style>
