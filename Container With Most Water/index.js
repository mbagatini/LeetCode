/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	var max = 0;

	var ini = 0;
	var end = height.length - 1;

	while (ini < end) {
		var h = Math.min(height[ini], height[end]);
		var area = h * (end - ini);

		max = Math.max(max, area);

		// moves in direction of lower side
		if (height[ini] < height[end]) {
			ini++;
		} else {
			end--;
		}
	}

	return max;
};

console.log(maxArea([1, 4, 9, 2, 8, 1, 3]));
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1, 1, 1]));
console.log(maxArea([4, 8, 3, 7]));