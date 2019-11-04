function greatestCommonDivisor (num1, num2) {
  if (num2 === 0) { return num1; }

  return greatestCommonDivisor(num2, num1 % num2);
}

module.exports = { greatestCommonDivisor };
