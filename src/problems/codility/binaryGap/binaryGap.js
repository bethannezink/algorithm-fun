// modulo 2 of decimal -- will either by 1 or 0
// add 1 or 0 to array
// divide decimal in half -- Math.floor or ceil? recursively do it again
// return final array.reverse() --> join to make a string
function convertDecimalToBinary(decimal, binaryArray = []) {
  binaryArray.push(decimal % 2);
  decimal = Math.floor(decimal / 2);

  if (decimal > 0) {
    convertDecimalToBinary(decimal, binaryArray);
  }

  return binaryArray.reverse().join();
}