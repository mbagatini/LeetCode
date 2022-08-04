/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	var rows = matrix.length;
	var cols = matrix[0].length;

	// search Y axis (ROW)
	var top = 0;
	var bot = rows - 1;

	while (top <= bot) {
		var iRow = parseInt((top + bot) / 2);

		if (target < matrix[iRow][0]) {
			bot = iRow - 1;
		} else if (target > matrix[iRow][cols - 1]) {
			top = iRow + 1;
		} else {
			break;
		}
	}

	// search X axis
	var ini = 0;
	var end = cols - 1;

	while (ini <= end) {
		var iCol = parseInt((ini + end) / 2);

		if (target == matrix[iRow][iCol]) {
			return true;
		} else if (target < matrix[iRow][iCol]) {
			end = iCol - 1;
		} else {
			ini = iCol + 1;
		}
	}

	return false;
};

searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)