/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	// three different indexes
	// num1 + num2 + num3 = 0

	var res = [];

	nums.sort((a, b) => a - b);

	for (var [i, n] of nums.entries()) {
		// do not repeat same number
		if (i > 0 && n == nums[i - 1]) {
			continue;
		}

		// binary search
		var ini = i + 1;
		var end = nums.length - 1;

		while (ini < end) {
			var sum = n + nums[ini] + nums[end];

			if (sum > 0) {
				end--;
			} else if (sum < 0) {
				ini++;
			} else {
				res.push([n, nums[ini], nums[end]]);

				// update initial point
				ini++;
				while (nums[ini] == nums[ini - 1] && ini < end) {
					ini++;
				}
			}
		}
	}

	return res;
};

threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0, 0, 0]);
threeSum([34, 55, 79, 28, 46, 33, 2, 48, 31, -3, 84, 71, 52, -3, 93, 15, 21, -43, 57, -6, 86]);
threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]);