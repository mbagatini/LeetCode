/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	var arr = s.split("");
	var max = 0;
	var sub = "";

	var i = 0;

	while (i < arr.length) {
		var c = arr[i];

		sub += c;

		var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

		if (format.test(c)) {
			c = "\\" + c;
		}

		var exp = new RegExp(c, 'g');

		if ((sub.match(exp) || []).length > 1) {
			i = i - (sub.length - 2);
			sub = "";
			continue;
		}

		max = Math.max(max, sub.length);

		i++;
	}

	return max;
};

console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbb"));
console.log(lengthOfLongestSubstring("dvdf"));