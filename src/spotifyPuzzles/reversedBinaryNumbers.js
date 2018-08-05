String.prototype.reverse = function() {
  var reversedString = '';
  for (var i = this.length - 1; i >= 0 ; i--) {
    reversedString += this.charAt(i);
  }
  return reversedString;
}

function convertToBinary(decimalInput, binaryString = '') {
  if (decimalInput === 0) { return '0' };

  if (decimalInput > 0) {
    binaryString += decimalInput % 2;
    decimalInput = Math.floor(decimalInput / 2);
    return convertToBinary(decimalInput, binaryString);
  }
  return binaryString.reverse();
}

function convertToDecimal(binaryInput) {
  var reversedInput = binaryInput.reverse();
  var decimal = 0;
  for (var i = 0; i < reversedInput.length; i++) {
    if (parseInt(reversedInput[i])) {
      decimal += Math.pow(2, i);
    }
  }
  return decimal;
}

// Spotify puzzle solution
function convertToReversedBinary(input, binaryString = '') {
  if (input > 0) {
    binaryString += input % 2;
    input = Math.floor(input / 2);
    return convertToReversedBinary(input, binaryString);
  }
  return convertToDecimal(binaryString);
}