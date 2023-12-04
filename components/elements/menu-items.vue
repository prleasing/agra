<template>
	<div v-for="item in menu" :key="item.id" class="header__menu-item">
		<nuxt-link :to="`/#${item.link}`" @click="close">{{ item.title }}</nuxt-link>
	</div>
</template>
<script setup lang="ts">
import { ref, useRouter } from '#imports';

const router = useRouter();
const menu = ref([
	{ id: 1, title: 'Вакансии', link: 'vacancy' },
	{ id: 2, title: 'О Компании', link: 'about-company' },
	{ id: 3, title: 'Направление деятельности', link: 'directions' },
	{ id: 4, title: 'Cобственная продукция', link: 'products' },
	{ id: 5, title: 'Контакты', link: 'contact-form' }
]);
const emit = defineEmits<{
	(e: 'click'): void;
}>();
function close(e) {
	setTimeout(() => {
		router.push(e.target.attributes.href.value);
		console.log(e.target.attributes.href.value);
	}, 1000);
	emit('click');
}
</script>
<style lang="scss"></style>
