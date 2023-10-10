export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');

	const small = [];

	for (const n of nums) {
		if (n < 1) {
			small.push(n);
		}
	}

	return small;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');

	const found = [];

	for (const n of names) {
		if (n.charAt(0) === char) {
			found.push(n);
		}
	}

	return found;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');

	const verbs = [];

	for (const w of words) {
		if (w.startsWith('to ')) {
			verbs.push(w);
		}
	}

	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');

	const ints = [];

	for (const n of nums) {
		if (Number.isInteger(n)) {
			ints.push(n);
		}
	}

	return ints;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');

	const cities = [];

	for (const u of users) {
		cities.push(u.data.city.displayName);
	}

	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');

	const squares = [];

	for (const n of nums) {
		squares.push(Number.parseFloat(Math.sqrt(n).toFixed(2)));
	}

	return squares;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');

	const search = new RegExp(str, 'i');

	const found = [];

	for (const s of sentences) {
		if (search.test(s)) {
			found.push(s);
		}
	}

	return found;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');

	const longest = [];

	for (const t of triangles) {
		longest.push(Math.max(...t));
	}

	return longest;
}
