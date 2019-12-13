function numberOfBracketedItems (string) {
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];

  const bracketGroups = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };
 
  let brackets = [];
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    const bracket = string.charAt(i);
    if (openBrackets.includes(bracket)) {
      brackets.push(bracket);
    } else if (closeBrackets.includes(bracket)) {
      if (bracketGroups[brackets[brackets.length - 1]] === bracket) {
        brackets.pop();
        counter++;
      } else {
        return -1;
      }
    }
  }

  if (brackets.length === 0) {
    return counter;
  }

  return -1;
}

module.exports = { numberOfBracketedItems };
