/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
	var res = new Array(temperatures.length).fill(0);
	var curr = 0;

	var stack = [];

	while (curr < temperatures.length) {
		/**
		 * My solution
		for (var i = curr + 1; i < temperatures.length; i++) {
			res[curr]++;

			if (temperatures[i] > temperatures[curr]) {
				break;
			}
		}

		if (i == temperatures.length && temperatures[curr] >= temperatures[i - 1]) {
			res[curr] = 0;
		}
		*/

		/**
		 * Optimized solution
		 */
		while (stack.length && temperatures[curr] > temperatures[stack[stack.length - 1]]) {
			var idx = stack.pop();
			res[idx] = curr - idx;
		}

		stack.push(curr);

		curr++;
	}

	return res;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]).join(","));