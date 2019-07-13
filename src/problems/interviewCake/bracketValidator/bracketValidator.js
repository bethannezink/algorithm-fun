const openBrackets = [ '{', '[', '('];
const closeBrackets = [ '}', ']', ')'];
const bracketMatches = {
  '{': '}',
  '[': ']',
  '(': ')',
};

function validateBrackets (string) {
  if (string.length === 0 || string.length % 2 !== 0) { return false; }

  let openBracketHolder = [];

  for (let i = 0; i < string.length; i++) {
    let bracket = string.charAt(i);

    if (openBrackets.includes(bracket)) {
      openBracketHolder.push(bracket);
    } else if (closeBrackets.includes(bracket)) {
      const lastOpenBracket = openBracketHolder[openBracketHolder.length - 1];
      if (bracketMatches[lastOpenBracket] === bracket) {
        openBracketHolder.pop();
      } else {
        return false;
      }
    }
  }
  return openBracketHolder.length === 0;
}

module.exports = { validateBrackets };