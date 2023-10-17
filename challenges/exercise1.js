export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');

	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');

	return person.city === 'Manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');

	const MAX_PEOPLE_PER_BUS = 40;

	return Math.ceil(people / MAX_PEOPLE_PER_BUS);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');

	return arr.filter(x => x === 'sheep').length;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');

	return person.address?.city === 'Manchester' &&
		person.address?.postCode.startsWith('M');
}
