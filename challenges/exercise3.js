export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	const small = [];

	nums.forEach(n => n < 1 && small.push(n));

	return small;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	const found = [];

	names.forEach(n => n.charAt(0) === char && found.push(n));

	return found;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	const verbs = [];

	words.forEach(w => w.startsWith('to ') && verbs.push(w));

	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');

	const ints = [];

	nums.forEach(n => Number.isInteger(n) && ints.push(n));

	return ints;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');

	const cities = [];

	users.forEach(u => cities.push(u.data.city.displayName));

	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');

	const squares = [];

	nums.forEach(n => squares.push(Number.parseFloat(Math.sqrt(n).toFixed(2))));

	return squares;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');

	const search = new RegExp(str, 'i');

	const found = [];

	sentences.forEach(s => search.test(s) && found.push(s));

	return found;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');

	const longest = [];

	triangles.forEach(t => longest.push(Math.max(...t)));

	return longest;
}
