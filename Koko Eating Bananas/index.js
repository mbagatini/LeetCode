/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	// discover k
	var k = 0;

	var maxValue = Math.max(...piles);

	var ini = 0;
	var end = maxValue;

	while (ini <= end) {
		var mid = parseInt((ini + end) / 2);

		var time = 0;
		for (var i = 0; i < piles.length; i++) {
			time += Math.ceil(piles[i] / mid);
		}

		if (time > h) {
			ini = mid + 1;
		} else {
			k = mid;
			end = mid - 1;
		}
	}

	return k;
};

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([3, 6, 7, 11], 8));