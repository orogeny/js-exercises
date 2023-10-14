/* 
	👉 These exercises are a great extra challenge to push your JavaScript skills. Go for it!
*/

/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
export const sumDigits = (n) => {
	if (n === undefined) throw new Error('n is required');

	return [...n.toString()].reduce((acc, x) => acc += parseInt(x, 10), 0);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
export const createRange = (start, end, step = 1) => {
	if (start === undefined) throw new Error('start is required');
	if (end === undefined) throw new Error('end is required');

	return Array
		.from({ length: 1 + ((end - start) / step) })
		.map((_, i) => start + (i * step));
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
export const getScreentimeAlertList = (users, date) => {
	if (users === undefined) throw new Error('users is required');
	if (date === undefined) throw new Error('date is required');

	// In less fragmented code - these probably would live outside of function body
	const sumUsage = usage => Object.values(usage).reduce((acc, u) => acc += u, 0);

	const sumScreentime = times => times.reduce((acc, t) => acc += sumUsage(t.usage), 0);

	return users
		.map(u => [u.username, u.screenTime.filter(s => s.date === date)])
		.map(([username, days]) => [username, sumScreentime(days)])
		.filter(([_, usage]) => usage > 100)
		.map(([username, _]) => username);
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
export const hexToRGB = (hexStr) => {
	if (hexStr === undefined) throw new Error('hexStr is required');

	const r = parseInt(hexStr.substring(1, 3), 16);
	const g = parseInt(hexStr.substring(3, 5), 16);
	const b = parseInt(hexStr.substring(5), 16);

	if (isNaN(r) || isNaN(g) || isNaN(b)) throw new Error('hexStr must be a valid hex number');

	return `rgb(${ r },${ g },${ b })`;
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
export const findWinner = (board) => {
	if (board === undefined) throw new Error('board is required');

	const columns = Array.from({ length: board.length }).map(() => []);

	for (const row of board) {
		for (let i = 0; i < board.length; ++i) {
			columns[i].push(row[i]);
		}
	}

	const diagonals = [
		Array.from({ length: board.length }).map((_, i) => board[i][i]),
		Array.from({ length: board.length }).map((_, i) => board[i][board.length - i - 1])
	];

	const lines = board
		.concat(columns)
		.concat(diagonals)
		.map(l => l.reduce((acc, x) => {
			if (x !== null) acc[x] += 1;
			return acc;
		}, { 0: 0, X: 0 }))
		.filter((l) => l["0"] === 3 || l.X === 3)
		.map(l => l["0"] > l.X ? "0" : "X");

	const winner = new Set(lines);

	if (winner.size === 2) throw new Error('board must have, at most, one winner');

	if (winner.size === 0) return null;

	return winner.values().next().value;
};
