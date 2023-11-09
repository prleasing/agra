import { useResizeObserver } from '@vueuse/core';

import type { Ref } from '#imports';
import { onMounted, onUpdated, ref } from '#imports';

export function useCssPropertyCalculateGutter(name: string, scope: Ref<HTMLElement | null> = ref(null)) {
	const value = ref(0);

	function calculate() {
		if (process.client) {
			const div = document.createElement('div');

			Object.assign(div.style, {
				height: `var(${name})`,
				zIndex: -9999,
				// pointerEvents: 'none',
				opacity: 0,
				visibility: 'hidden',
				position: 'absolute',
				padding: 0
			});

			if (scope.value) {
				scope.value?.append(div);
			} else {
				document.body.append(div);
				value.value = 0;
			}

			value.value = Math.ceil(div.getBoundingClientRect().height);
			div.remove();
		}
	}
	useResizeObserver(scope, () => {
		calculate();
	});

	onUpdated(() => {
		calculate();
	});
	onMounted(() => {
		calculate();
	});
	return value;
}
