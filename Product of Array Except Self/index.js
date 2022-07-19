/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	var answer = [];

	// calculate begin to end
	var prefix = 1;
	for (let i = 0; i < nums.length; i++) {
		answer[i] = prefix;
		prefix *= nums[i];
	}

	// calculate end to begin
	var postfix = 1;
	for (let i = nums.length - 1; i >= 0; i--) {
		answer[i] *= postfix;
		postfix *= nums[i];
	}

	return answer;
};

// var nums = [1, 2, 3, 4];
var nums = [-1, 1, 0, -3, 3];

console.log(productExceptSelf(nums));