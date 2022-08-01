/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
	if (s.length == 1) {
		return true;
	}

	var str = s.replaceAll(/[^a-zA-Z0-9]/g, "").toLocaleLowerCase().split("");

	// amanaplanacanalpanama
	// aa mm aa nn aa pp ll aa nn aa c

	var ini = 0;
	var end = str.length - 1;

	while (ini <= end) {
		if (str[ini] !== str[end]) {
			return false;
		}

		ini++;
		end--;
	}

	return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));