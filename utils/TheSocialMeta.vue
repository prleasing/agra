<template>
	<Head>
		<Title>{{ titleTemplate }}</Title>
		<Meta name="title" :content="title" />
		<Meta property="og:title" :content="title" />
		<Meta property="twitter:title" :content="title" />

		<template v-if="description">
			<Meta name="description" :content="description" />
			<Meta property="og:description" :content="description" />
			<Meta property="twitter:description" :content="description" />
		</template>

		<template v-if="cover">
			<Meta property="twitter:card" content="summary_large_image" />
			<Meta property="twitter:image" :content="cover" />
			<Meta property="og:image" :content="cover" />
			<Meta property="vk:image" :content="cover" />
		</template>
	</Head>
</template>

<script setup lang="ts">
import type { PropType } from '#imports';
import { computed } from '#imports';

const props = defineProps({
	title: {
		type: String as PropType<string>,
		required: true
	},
	description: {
		type: String as PropType<string>,
		required: false,
		default: undefined
	},
	cover: {
		type: String as PropType<string>,
		required: false,
		default: undefined
	},
	template: {
		type: Boolean as PropType<boolean>,
		required: false,
		default: true
	}
});

const titleTemplate = computed(() => {
	if (props.template) {
		return `${props.title} | ПР-АГРО`;
	}
	return props.title;
});
</script>
