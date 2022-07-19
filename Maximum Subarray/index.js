/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	var maxSum = nums[0];
	var sum = nums[0];

	for (let i = 1; i < nums.length; i++) {
		// check negatives to reset sum
		if (sum && sum < 0 && nums[i] > sum) {
			sum = nums[i];
		} else {
			sum += nums[i];
		}

		// keeps the highest
		maxSum = Math.max(maxSum, sum);
	}

	return maxSum;
};

var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// var nums = [5, 4, -1, 7, 8];
// var nums = [-2, -1];

console.log(maxSubArray(nums));