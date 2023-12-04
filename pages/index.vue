<template>
	<the-page>
		<section-grow-farm />
		<section-directions id="directions" />
		<section-farming />
		<section-growing />
		<section-vacancy id="vacancy" />
		<section-about id="about-company" />
		<section-contact-form id="contact-form" name="contact-form" />
		<up-scroll></up-scroll>
	</the-page>
</template>
<script lang="ts" setup>
import { definePageMeta } from '#imports';
import SectionAbout from '~/components/landing/section-about';
import SectionContactForm from '~/components/landing/section-contact-form';
import SectionDirections from '~/components/landing/section-directions';
import SectionFarming from '~/components/landing/section-farming';
import SectionGrowFarm from '~/components/landing/section-grow-farm';
import sectionGrowing from '~/components/landing/section-growing';
import SectionVacancy from '~/components/landing/section-vacancy';
import ThePage from '~/components/the-page';
import { Pages } from '~/utils/pages';
import upScroll from '~/components/elements/up-scroll';

definePageMeta({
	name: Pages.Home
});
</script>
<style scoped lang="scss">
@use 'assets/styles/utility';
.section {
	display: grid;
}
</style>
