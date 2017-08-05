String.prototype.reverse = function() {
  var reversedString = '';
    for (var i = this.length - 1; i >= 0 ; i--) {
    reversedString += this.charAt(i);
    }
  return reversedString;
    } 
}

function convertToBinary(input, binaryString = '') {
  if (input > 0) {
    binaryString += input % 2;
    input = Math.floor(input / 2);
    return convertToBinary(input, binaryString);
  }
  return binaryString.reverse();
}