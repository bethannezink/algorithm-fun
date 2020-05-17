// Daily Coding Problem #211
// Given a string and a pattern, find the starting indices of all occurrences
// of the pattern in the string. For example, given the string "abracadabra"
// and the pattern "abr", you should return [0, 7].

function getStartingIndices(string, pattern) {
	let patternLength = pattern.length;

	if (patternLength > string.length) { return; }
	if (pattern === string) { return [0]; }

	let startingIndices = [];

	for (let i = 0; i < string.length; i++) {
		if (string[i] === pattern[0]) {
			let substring = string.substring(i, i + patternLength);

			if (substring === pattern) {
				startingIndices.push(i);
			}
		}
	}

	return startingIndices;
}