import { addTemplate, addTypeTemplate, defineNuxtModule } from '@nuxt/kit';
import { pascalCase } from 'scule';

function useSvgFile(file: string, { defaultSprite = 'icons' } = {}) {
	if (file.startsWith('svg:')) {
		file = file.substring(4);
	}
	const paths = file.split(':');
	const name = paths
		.pop()!
		.replace(/\.svg$/, '')
		.toLocaleLowerCase()
		.replace(/[^a-z0-9-:]/g, '-');
	const sprite = paths.join('-');
	return {
		name: pascalCase((sprite || defaultSprite) + '-' + name),
		value: (sprite || defaultSprite) + '/' + name
	};
}

export default defineNuxtModule({
	setup(_, nuxt) {
		const icons = new Map<string, { name: string; value: string }>();
		const input = '~/assets/sprite/svg'.replace(/~|\.\//, 'root').replace(/\//g, ':');

		function generate() {
			const types: string[] = [];
			const code = Array.from(icons.values()).reduce((lines: string[], { name, value }) => {
				lines.push(`export const ${name} = '${value}';`);
				types.push(`export declare const ${name} = '${value}';`);
				return lines;
			}, []);

			const { dst } = addTypeTemplate({
				write: true,
				filename: 'types/svg-sprite-collection.d.ts',
				getContents: () => types.join('\n')
			});

			nuxt.options.alias['#icons'] = addTemplate({
				filename: 'svg-sprite-collection.mjs',
				write: true,
				dst,
				getContents: () => code.join('\n')
			}).dst;
		}

		nuxt.hook('nitro:init', async (nitro) => {
			const files = await nitro.storage.getKeys(input);
			files.forEach((file) => {
				icons.set(file, useSvgFile(file.substring(input.length + 1)));
			});
			generate();
			nitro.storage.watch((event, file) => () => {
				if (!file.startsWith(input)) {
					return;
				}
				if (event === 'update') {
					icons.set(file, useSvgFile(file.substring(input.length + 1)));
				} else if (event === 'remove') {
					icons.delete(file);
				}
				generate();
			});
		});
	}
});
