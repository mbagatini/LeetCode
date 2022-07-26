/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	var ini = 0;
	var end = nums.length - 1;
	var mid = parseInt((ini + end) / 2);

	//  0 1  2 3 4 5 
	// -1,0, 3,5,9,12    

	while (ini <= end) {
		if (nums[mid] == target) {
			return mid;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			ini = mid + 1;
		}

		mid = parseInt((ini + end) / 2);
	}

	return -1;
};

search([5], 5);
search([-1, 0, 3, 5, 9, 12], 2);