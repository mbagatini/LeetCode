/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	// left - index of minimum price
	// right - index of maximum price
	var left = 0, right = 1;
	var maxProfit = 0;

	// go through all the array
	while (right < prices.length) {
		// calculate the profit
		if (prices[left] < prices[right]) {
			var profit = prices[right] - prices[left];
			maxProfit = Math.max(profit, maxProfit);
		} else {
			// step to the lowest price found
			left = right;
		}

		right++;
	}

	return maxProfit;
};

var prices = [2, 1, 2, 1, 0, 1, 2]; //2
// var prices = [7, 6, 4, 3, 1]; //0
// var prices = [2, 4, 1]; //2
// var prices = [2, 7, 1, 4]; //5

console.log(maxProfit(prices));