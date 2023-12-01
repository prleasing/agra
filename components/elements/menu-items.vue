<template>
	<div v-for="item in menu" :key="item.id" class="header__menu-item">
		<nuxt-link :to="`/#${item.link}`">{{ item.title }}</nuxt-link>
	</div>
</template>
<script setup lang="ts">
import { ref } from '#imports';

const menu = ref([
	{ id: 1, title: 'Вакансии', link: 'vacancy' },
	{ id: 2, title: 'О Компании', link: 'about-company' },
	{ id: 3, title: 'Направление деятельности', link: 'directions' },
	{ id: 4, title: 'Cобственная продукция', link: 'products' },
	{ id: 5, title: 'Контакты', link: 'contact-form' }
]);
</script>
<style lang="scss"></style>
