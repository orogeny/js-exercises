export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');

	return nums.map(x => x * x);
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');

	return words.reduce((acc, x) => acc + x.charAt(0).toUpperCase() + x.substring(1));
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');

	return people.reduce((acc, x) => (acc += x.subjects.length), 0);
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');

	return menu.some(x => x.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');

	const intersection = new Set();

	for (const a of arr1) {
		if (arr2.includes(a)) {
			intersection.add(a);
		}
	}

	return Array.from(intersection).sort((a, b) => a - b);
}
