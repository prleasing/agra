<template>
	<Html lang="ru">
		<Link rel="icon" href="/favicon.ico" sizes="any" />
		<Link rel="icon" href="/icon.svg" type="image/svg+xml" />
		<Link rel="apple-touch-icon" href="/apple-touch-icon.png" />
		<Link rel="manifest" href="/manifest.webmanifest" />
		<Meta
			name="viewport"
			content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
		/>
	</Html>
	<the-social-meta :title="title" :description="description" :cover="cover" :template="false" />
	<nuxt-layout />
</template>
<script setup lang="ts">
import { computed } from '#imports';
import { useHost } from '~/composables/useHost';
import TheSocialMeta from '~/utils/TheSocialMeta.vue';

const title = computed(() => 'ПР-АГРО - Ваш источник натуральных продуктов');
const description = computed(() => 'ПР-АГРО - Ваш источник натуральных продуктов');
const host = useHost();
const cover = computed(() => `${host.value}images/cover.png`);
</script>
