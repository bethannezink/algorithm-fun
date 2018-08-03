function getStartingIndices(string, pattern) {
	let patternLength = pattern.length;
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