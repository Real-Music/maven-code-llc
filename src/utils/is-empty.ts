export default function isEmpty(value: object | unknown[]): boolean {
	if (Array.isArray(value)) return value.length === 0;
	else if (typeof value === 'object')
		return Object.keys(value).length === 0 || Object.values(value).every(v => isEmpty(v));

	return false;
}