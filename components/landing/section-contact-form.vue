<script setup lang="ts">
import parsePhoneNumber, { getCountryCallingCode } from 'libphonenumber-js';

import { computed, useRuntimeConfig } from '#imports';
import BaseSection from '~/components/base-section';
import Contacts from '~/components/elements/contacts';
import YandexMaps from '~/components/elements/yandex-maps';
import ContactForm from '~/components/forms/contact-form';

const runtimeConfig = useRuntimeConfig().public;

const phone = computed(() => {
	const parse = parsePhoneNumber(runtimeConfig.phone);
	const code = '+' + (parse?.country ? getCountryCallingCode(parse.country) : '');

	return {
		uri: parse?.getURI(),
		text:
			code +
			' ' +
			parse?.format('NATIONAL', {
				nationalPrefix: false
			})
	};
});

const email = computed(() => runtimeConfig.email);
</script>

<template>
	<base-section class="section-contact-form" title="Контактная форма">
		<div class="wrapper">
			<contact-form />
			<contacts :phone="phone" :email="email"></contacts>
			<p class="address">
				Республика Башкорстостан, м.р-н Иглинский, с.п. Ивано-Казанский сельсовет, д. Поступалово, ул&nbsp;Туляковская,
				зд.&nbsp;24
			</p>
		</div>
		<yandex-maps />
	</base-section>
</template>

<style scoped lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';

.section-contact-form {
	:deep(.section-content) {
		display: grid;
		grid-template-columns: auto #{utility.rem(616)};
		gap: #{utility.rem(24)};
		background-color: #1d2939;
		@include breakpoints.media-down('xl') {
			grid-template-columns: 1fr;
		}
		.maps {
			height: 100%;
			border: 1px solid #eaecf0;
			border-radius: #{utility.rem(16)};
			@include breakpoints.media-down('xl') {
				height: #{utility.rem(288)};
			}
		}
	}
}

:deep(.social-links) {
	display: flex;
	gap: #{utility.rem(8)};

	a {
		border-radius: 50%;
		background-color: #000;
		transition:
			background-color 200ms ease-in-out,
			color 200ms ease-in-out;

		svg {
			display: block;
			width: #{utility.rem(64)};
		}

		&[data-type='vk'] {
			color: #fff;

			@include utility.has-hover {
				background-color: #fff;
				color: #07f;
			}
		}

		&[data-type='telegram'] {
			color: #fff;

			@include utility.has-hover {
				background-color: #fff;
				color: #2aabee;
			}
		}
	}
}

.address {
	color: #fff;
	font-weight: 500;
	font-style: normal;
	font-size: #{utility.rem(18)};
	line-height: 135%;
	letter-spacing: #{utility.rem(-0.72)};
}

.wrapper {
	display: grid;
	gap: #{utility.rem(48)};
	align-items: start;
}
.section-contact-form:after {
	content: url('/images/background-bottom.png');
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: -1;
	overflow: hidden;
	@include breakpoints.media-down('xl') {
		content: url('/images/background-bottom.png');
		position: absolute;
		bottom: 0px;
		left: 0;
		width: 100%;
		z-index: -1;
	}
}
</style>
