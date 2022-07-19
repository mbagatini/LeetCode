/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	var set = new Set();

	for (var i of nums) {
		if (set.has(i)) {
			return true;
		}

		set.add(i);
	}

	return false;
};

var nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums))