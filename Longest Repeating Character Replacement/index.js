/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	// AABABBA - AABBBBA
	var max = 0;
	var alphabet = new Map();

	var ini = 0;
	var mostLetter = 0;

	for (var [end, ch] of s.split("").entries()) {
		// update map of letters
		if (alphabet.has(ch)) {
			alphabet.set(ch, alphabet.get(ch) + 1);
		} else {
			alphabet.set(ch, 1);
		}

		/**
		 * O(26)
		 var mostLetter = Math.max(...alphabet.values());
		 */

		/**
		 * O(1)
		 */
		var mostLetter = Math.max(mostLetter, alphabet.get(ch));

		// if the substring can't be replaced (invalid), moves ini position
		if ((end - ini + 1) - mostLetter > k) {
			var letter = s.charAt(ini);
			alphabet.set(letter, alphabet.get(letter) - 1);
			ini++;
		}

		// length of the substring
		max = Math.max(max, (end - ini + 1));
	}

	return max;
};

// console.log(characterReplacement("ABBA", 2));
console.log(characterReplacement("IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR", 2));
console.log(characterReplacement("KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF", 4));