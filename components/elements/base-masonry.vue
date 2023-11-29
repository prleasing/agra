<template>
	<div ref="refMasonry" class="masonry" @onResize="render">
		<slot />
	</div>
</template>
<script setup lang="ts">
import type { PropType } from '#imports';
import {
	computed,
	onMounted,
	onUnmounted,
	onUpdated,
	ref,
	useCssPropertyCalculateGutter,
	useElementBounding
} from '#imports';

const props = defineProps({
	columns: {
		type: Number as PropType<number>,
		default: 3
	}
});
const ready = ref(false);
const refMasonry = ref<HTMLElement | null>(null);
const gutter = useCssPropertyCalculateGutter('--masonry-grid-gap', refMasonry);
const boundingClientRect = useElementBounding(refMasonry);
const container = computed(() => boundingClientRect.width.value);
const columnWidth = computed(() => {
	if (props.columns === 1) {
		return 100;
	}
	return (container.value - (props.columns - 1) * gutter.value) / props.columns;
});

function render() {
	const columnHeight = Array.from<number>(new Array(props.columns)).map(() => 0);
	const elements = Array.from<HTMLElement>(refMasonry.value?.children as any);
	const items = elements.map((element) => {
		const style = {
			position: 'absolute',
			width: props.columns === 1 ? `${columnWidth.value}%` : `${columnWidth.value}px`
		};

		Object.assign(element.style, style);
		const { height } = element.getBoundingClientRect();

		return {
			style: element.style,
			height
		};
	});

	for (const { style, height } of items) {
		const i = columnHeight.indexOf(Math.min.apply(null, columnHeight));
		Object.assign(style, {
			top: `${columnHeight[i]}px`,
			left: `${gutter.value * i + columnWidth.value * i}px`
		});
		columnHeight[i] += height + gutter.value;
	}
	if (refMasonry.value !== null) {
		refMasonry.value.style.height = `${Math.max.apply(null, columnHeight) - gutter.value}px`;
	}
	ready.value = true;
}
onMounted(() => {
	window.addEventListener('resize', render);
	render();
});
onUnmounted(() => {
	window.removeEventListener('resize', render);
});
onUpdated(() => {
	render();
});
</script>
<style lang="scss">
@use 'assets/styles/utility';

.masonry {
	position: relative;
	display: flex;

	> div {
		display: flex;
		flex-direction: column;
	}
}
</style>
