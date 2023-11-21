export function formatter(count: number, measure: string) {
	if (measure === 'кг') {
		return `${count} т`;
	}
	return `${count} шт`;
}
