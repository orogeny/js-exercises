export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	return nums.filter(n => n < 1);
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	return names.filter(n => n.charAt(0) === char);
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	return words.filter(w => w.startsWith('to '));
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');

	return nums.filter(n => Number.isInteger(n));
}

export function getCities(users) {
	if (!users) throw new Error('users is required');

	return users.map(u => u.data.city.displayName);
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');

	return nums.map(n => Number.parseFloat(Math.sqrt(n).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');

	const search = new RegExp(str, 'i');

	return sentences.filter(s => search.test(s));
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');

	return triangles.map(t => Math.max(...t));
}
