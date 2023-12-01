<template>
	<div class="contacts">
		<div :style="colorContacts" class="contacts__links">
			<nuxt-link :href="phone.uri">{{ phone.text }}</nuxt-link>
			<nuxt-link :href="`mailto:${email}`">{{ email }}</nuxt-link>
		</div>
		<div class="social-links">
			<nuxt-link :style="color" href="#" data-type="vk">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
					<path
						fill="currentColor"
						d="M33.43 42C22.495 42 16.26 34.492 16 22h5.477c.18 9.17 4.217 13.053 7.415 13.854V22h5.157v7.908c3.158-.34 6.475-3.944 7.595-7.908H46.8c-.86 4.885-4.458 8.488-7.016 9.97C42.343 33.17 46.44 36.314 48 42h-5.677c-1.219-3.804-4.257-6.747-8.274-7.147V42h-.62Z"
					/>
				</svg>
			</nuxt-link>
			<nuxt-link :style="color" href="#" data-type="telegram">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64">
					<path
						fill="currentColor"
						d="M18.062 30.332c8.053-3.387 13.423-5.62 16.11-6.699 7.672-3.08 9.266-3.615 10.305-3.633.228-.003.74.051 1.07.31.28.22.357.515.394.723.036.207.082.68.046 1.05-.416 4.216-2.215 14.449-3.13 19.171-.387 1.998-1.15 2.669-1.888 2.734-1.604.143-2.822-1.023-4.376-2.007-2.431-1.538-3.805-2.496-6.165-3.997-2.727-1.735-.96-2.689.595-4.247.407-.408 7.475-6.614 7.612-7.177.017-.07.033-.333-.129-.471-.161-.139-.4-.091-.572-.054-.243.054-4.127 2.532-11.652 7.435-1.102.73-2.1 1.087-2.995 1.068-.987-.02-2.884-.538-4.294-.981-1.73-.543-3.105-.83-2.986-1.752.063-.48.748-.971 2.055-1.473Z"
					/>
				</svg>
			</nuxt-link>
		</div>
	</div>
</template>
<script setup lang="ts">
const props = defineProps({
	phone: {
		type: Object,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	color: {
		type: Object,
		required: false,
		default: () => {}
	},
	colorContacts: {
		type: Object,
		required: false,
		default: () => {}
	}
});
</script>
<style lang="scss">
@use 'assets/styles/utility';
@use 'assets/styles/breakpoints';
.contacts {
	display: flex;
	justify-content: space-between;
	color: #fff;
	@include breakpoints.media-down('xl') {
		flex-direction: column;
		gap: #{utility.rem(16)};
	}

	& &__links {
		display: grid;
		color: #fff;
		font-weight: 500;
		font-style: normal;
		font-size: #{utility.rem(24)};
		line-height: 135%;
		letter-spacing: #{utility.rem(-0.96)};

		a {
			text-decoration: none;

			@include utility.has-hover {
				text-decoration: underline;
			}
		}
	}
}
.social-links {
	display: flex;
	gap: #{utility.rem(8)};

	a {
		border-radius: 50%;
		background-color: #fff;
		transition:
			background-color 200ms ease-in-out,
			color 200ms ease-in-out;

		svg {
			display: block;
			width: #{utility.rem(64)};
		}

		&[data-type='vk'] {
			color: #07f;

			@include utility.has-hover {
				background-color: #07f;
				color: #fff;
			}
		}

		&[data-type='telegram'] {
			color: #2aabee;

			@include utility.has-hover {
				background-color: #2aabee;
				color: #fff;
			}
		}
	}
}
</style>
