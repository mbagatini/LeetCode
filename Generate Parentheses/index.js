/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	var combinations = [];

	var pairs = [];

	// recursive
	var fillPairs = function (openCount, closeCount) {
		// condition to stop
		if (openCount == closeCount && openCount == n) {
			combinations.push(pairs.join(""));
			return;
		}

		// can add (
		if (openCount < n) {
			pairs.push("(");
			fillPairs(openCount + 1, closeCount);
			pairs.pop();
		}

		// can add )
		if (closeCount < openCount) {
			pairs.push(")");
			fillPairs(openCount, closeCount + 1);
			pairs.pop();
		}
	}

	fillPairs(0, 0);

	return combinations;
};

console.log(generateParenthesis(3));