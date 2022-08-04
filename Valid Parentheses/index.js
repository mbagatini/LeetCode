/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	var opening = ["(".charCodeAt(0), "[".charCodeAt(0), "{".charCodeAt(0)];
	var closing = [")".charCodeAt(0), "]".charCodeAt(0), "}".charCodeAt(0)];

	var sequence = [];

	for (var i = 0; i < s.length; i++) {
		var c = s.charAt(i).charCodeAt(0);

		if (closing.includes(c)) {
			var diff = c - sequence[sequence.length - 1];

			if (diff == 1 || diff == 2) {
				sequence.pop();
			} else {
				return false;
			}
		} else {
			sequence.push(c);
		}
	}

	return sequence.length == 0;
};

console.log(isValid("{[]}"));
console.log(isValid("({{{{}}}))"));