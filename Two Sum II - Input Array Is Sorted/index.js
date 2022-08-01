/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	// numbers - sorted asc
	// sum 2 matches target
	// [idx1 + 1, idx2 + 1]

	// keeps numbers already seen
	var nums = new Map();

	for (var [i, v] of numbers.entries()) {
		// serach for the number to be found
		var desired = target - v;

		if (nums.has(desired)) {
			var idx = nums.get(desired);
			return [idx + 1, i + 1];
		} else {
			nums.set(v, i);
		}
	}

	return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));