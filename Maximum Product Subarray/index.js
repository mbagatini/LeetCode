/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	var largestProduct = nums[0];
	var curMin = 1, curMax = 1;

	for (let num of nums) {
		// store the max
		temp = curMax;

		// calculate new max
		curMax = Math.max(curMax * num, curMin * num, num);
		// calculate new min
		curMin = Math.min(temp * num, curMin * num, num);

		// keep the largest value
		largestProduct = Math.max(largestProduct, curMax);
	}

	return largestProduct;
};

// var nums = [2, 3, -2, 4];
// var nums = [-2, 0, -1];
// var nums = [-2, 3, -4];
// var nums = [3, -1, 4];
var nums = [2, -5, -2, -4, 3];

console.log(maxProduct(nums));