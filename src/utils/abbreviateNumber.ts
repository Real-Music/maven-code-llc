export default function abbreviateNumber(value: number): string {
	let newValue: string | number = value;
	if (value >= 1000) {
		const suffixes = ["", "k", "m", "b", "t"];
		const suffixNum = Math.floor(("" + value).length / 3);
		let shortValue: string | number = '';
		for (let precision = 2; precision >= 1; precision--) {
			shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(precision));

			const dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g, '');
			if (dotLessShortValue.length <= 2) { break; }
		}

		if (Number(shortValue) % 1 != 0) shortValue = Number(shortValue).toFixed(1);
		newValue = shortValue + suffixes[suffixNum];
	}
	return newValue as string;
}