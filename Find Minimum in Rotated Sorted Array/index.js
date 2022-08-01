/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	// binary search
	var min = nums[0];

	var ini = 0;
	var end = nums.length - 1;

	while (ini <= end) {
		// is sorted
		if (nums[ini] <= nums[end]) {
			min = Math.min(min, nums[ini]);
			break;
		}

		// finds middle
		var mid = Math.floor(ini + ((end - ini) / 2));
		min = Math.min(min, nums[mid]);

		if (nums[mid] >= nums[ini]) {
			// goes to second half
			ini = mid + 1;
		} else {
			// keeps searching in first half
			end = mid - 1;
		}
	}

	return min;
};

console.log(findMin([2, 3, 4, 5, 1]));
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 1, 2, 3]));
console.log(findMin([5, 1, 2, 3, 4]));
console.log(findMin([2, 3, 1]));