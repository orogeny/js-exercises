export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');

	for (let i = 0; i < nums.length - 1; ++i) {
		if (nums[i] === n) return nums[i + 1];
	}

	return null;
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');

	return [...str].reduce((acc, c) => {
		acc[c] += 1;
		return acc;
	}, { 0: 0, 1: 0 });
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');

	return parseInt(n.toString().split("").reverse().join(""), 10);
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');

	return arrs.flat().reduce((acc, x) => acc += x);
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	if (arr.length < 2) return arr;

	const [fst, ...rest] = arr;

	const lst = rest.pop();

	return [lst, ...rest, fst];
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');

	const search = new RegExp(searchTerm, "i");

	return Object.values(haystack)
		.filter(v => typeof v === 'string')
		.some(s => search.test(s));
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');

	return str
		.toLowerCase()
		.replace(/[^a-z0-9 ]/g, "")
		.split(" ")
		.reduce((acc, w) => {
			acc[w] = acc[w] ? acc[w] + 1 : 1;
			return acc;
		}, {});
};
