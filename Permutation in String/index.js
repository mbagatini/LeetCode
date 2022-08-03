/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) {
		return false;
	}

	// map array with count of each letter of the alphabet to s1 and s2
	// the index of the array is the asc code of the letter
	var s1Count = new Array(26).fill(0);
	var s2Count = new Array(26).fill(0);

	var letter, asc;

	for (var i = 0; i < s1.length; i++) {
		letter = s1.charAt(i);
		asc = letter.charCodeAt(0) - "a".charCodeAt(0);
		s1Count[asc]++;

		letter = s2.charAt(i);
		asc = letter.charCodeAt(0) - "a".charCodeAt(0);
		s2Count[asc]++;
	}

	// calculates the matches letters between two arrays
	var matches = 0;

	for (var i = 0; i < 26; i++) {
		if (s1Count[i] == s2Count[i]) {
			matches++;
		}
	}

	// go through s2 substring (s1 length window)
	var ini = 0;

	for (var end = s1.length; end < s2.length; end++) {
		// s1 and s2 count are equal
		if (matches == 26) {
			return true;
		}

		// check end letter of substring
		letter = s2.charAt(end);
		asc = letter.charCodeAt(0) - "a".charCodeAt(0);
		s2Count[asc]++;

		// check match
		if (s1Count[asc] == s2Count[asc]) {
			matches++
		} else if (s1Count[asc] + 1 == s2Count[asc]) {
			// count was equal and it's not anymore
			matches--;
		}

		// check ini letter of substring
		letter = s2.charAt(ini);
		asc = letter.charCodeAt(0) - "a".charCodeAt(0);
		s2Count[asc]--;

		// check match
		if (s1Count[asc] == s2Count[asc]) {
			matches++
		} else if (s1Count[asc] - 1 == s2Count[asc]) {
			// count was equal and it's not anymore
			matches--;
		}

		ini++;
	}

	return matches == 26;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("pol", "sonoisdjisbeeejcnaosjsistepsaolpelvp"));
console.log(checkInclusion("aneu", "sonoisdjisbeeejcnaosjsistepsaolpelvp"));