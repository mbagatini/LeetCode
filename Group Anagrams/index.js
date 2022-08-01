/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	var anagrams = new Map();

	// bat, tea, ate, tab

	for (var w of strs) {
		var alphabet = new Array(26).fill(0);

		// count number os letters in the word
		for (var c of w.split("")) {
			var letter = c.charCodeAt(0) - "a".charCodeAt(0);
			alphabet[letter] += 1;
		}

		// the key for anagrams is the count for each letter in alphabet
		var key = alphabet.join(",");
		if (anagrams.has(key)) {
			anagrams.get(key).push(w);
		} else {
			anagrams.set(key, [w]);
		}
	}

	var res = [];

	for (var a of anagrams) {
		res.push(a[1]);
	}

	return res;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var strs = ["hhhhu", "tttti", "tttit", "hhhuh", "hhuhh", "tittt"];
var strs = ["bdddddddddd", "bbbbbbbbbbc"];

console.log(groupAnagrams(strs));