<script setup lang="ts">
import type { PropType } from 'vue';

import { computed } from '#imports';

const props = defineProps({
	icon: {
		type: String as PropType<string>,
		required: true
	}
});

const name = computed(() => {
	return props.icon.split('/').at(-1);
});

const size = computed(() => {
	return props.icon
		.split('/')
		.at(0)
		?.replace(/[^+\d]/g, '');
});
</script>
<template>
	<svg-icon :name="icon" :view-box="`0 0 ${size} ${size}`" :class="['icon', `icon--${name}`]" />
</template>
<style scoped lang="scss">
.icon {
	display: inline-block;
	color: currentcolor;
}
</style>
