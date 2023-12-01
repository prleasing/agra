<script setup lang="ts">
import { onMounted, type PropType } from 'vue';

import { computed, nextTick, ref, templateRef, usePreferredReducedMotion, watch } from '#imports';
import { useBodyScrollLock } from '~/composables/useBodyScrollLock';

const $dialog = templateRef<HTMLDialogElement>('$dialog');
const props = defineProps({
	modelValue: {
		type: Boolean as PropType<boolean>,
		required: true,
		default: false
	},
	transform: {
		type: Object,
		required: false,
		default: () => ({ opacity: [0, 1], transform: ['scale(1.4)', 'scale(1)'] })
	}
});
const emit = defineEmits<{
	(e: 'update:modelValue', value: boolean): void;
}>();
const show = ref<boolean>(props.modelValue ?? false);

async function open() {
	await nextTick();
	isOpen.value = true;
	show.value = true;
}

function cancel() {
	close();
}

function close() {
	show.value = false;
}
const { lock, active } = useBodyScrollLock();
const isOpen = computed({
	get() {
		return props.modelValue;
	},
	set(value: boolean) {
		if (value) {
			$dialog.value?.showModal();
			lock();
		} else {
			$dialog.value?.close();
			emit('update:modelValue', false);
			active();
		}
	}
});
onMounted(() => {
	isOpen.value = props.modelValue;
});
watch(
	() => props.modelValue,
	(value) => {
		if (value) {
			open();
		} else {
			close();
		}
	}
);

const preferredMotion = usePreferredReducedMotion();
const durationTime = computed(() => (preferredMotion.value === 'reduce' ? 0 : 200));
function animate(el: Element, done: () => void, direction: PlaybackDirection = 'normal') {
	if (durationTime.value > 0) {
		const animation = el.animate(props.transform, {
			duration: durationTime.value,
			easing: 'cubic-bezier(0.42, 0, 0.19, 1)',
			direction
		});

		animation.onfinish = () => {
			done();
		};
	} else {
		done();
	}
}

function enter(el: Element, done: () => void) {
	animate(el, done);
}

function leave(el: Element, done: () => void) {
	animate(
		el,
		() => {
			isOpen.value = false;
			done();
		},
		'reverse'
	);
}
</script>

<template>
	<client-only>
		<teleport to="body">
			<dialog
				ref="$dialog"
				class="modal-root"
				v-bind="$attrs"
				@cancel.stop.prevent="cancel"
				@close.stop.prevent="close"
			>
				<div class="modal-root__wrapper">
					<transition @enter="enter" @leave="leave">
						<div v-show="show">
							<slot />
						</div>
					</transition>
				</div>
			</dialog>
		</teleport>
	</client-only>
</template>

<style scoped lang="scss">
@use 'assets/styles/utility';

.modal-root {
	top: 0;
	right: 0;
	left: 0;
	overflow: hidden;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	margin: 0;
	padding: 0;
	border: none;
	border: 0;
	background: transparent;
	contain: layout paint;

	& &__wrapper {
		position: fixed;
		z-index: 2;
		display: grid;
		justify-content: center;
		align-items: center;
		overflow: auto;
		width: 100%;
		height: 100%;
	}

	&::backdrop {
		position: fixed;
		z-index: 2;
		display: grid;
		justify-content: center;
		align-items: center;
		overflow: auto;
		width: 100%;
		height: 100%;
		background-color: rgb(0 0 0 / 35%);
		opacity: 1;
		backdrop-filter: blur(3px) saturate(0.9);
	}
}
</style>

<style lang="scss">
html.overflow-hidden {
	overflow: hidden;

	body {
		position: fixed;
		inset: var(--overlay-scroll-position) 0 0 0;
		overflow: hidden;
		padding-right: var(--scroll-width-offset);
	}
}
</style>
