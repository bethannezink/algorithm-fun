// Daily Coding Problem #214
// Given an integer n, return the length of the longest consecutive
// run of 1s in its binary representation.
// For example, given 156, you should return 3.

String.prototype.reverse = function() {
	let reversedString = '';

	for (let i = this.length - 1; i >= 0; i--) {
		reversedString += this.charAt(i);
	}

	return reversedString;
}

function convertToBinary(decimalInput, binaryString = '') {
	binaryString += decimalInput % 2;
	decimalInput = Math.floor(decimalInput / 2);

	if (decimalInput > 0) {
		return convertToBinary(decimalInput, binaryString);
	}

	return binaryString.reverse();
}

function getLongestSequence(number) {
	let binaryString = convertToBinary(number);
	let longestSequence = 1, counter = 1;

	for (let i = 0; i < binaryString.length; i++) {
		let currentValue = binaryString.charAt(i);
		let nextValue = binaryString.charAt(i + 1);

		if (currentValue === nextValue) {
			counter++;

			if (counter > longestSequence) {
				longestSequence = counter;
			}

		} else {
			counter = 1;
		}

	}

	return longestSequence;
}