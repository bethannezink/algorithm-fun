// You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.

// Let's say:

// '(', '{', '[' are called "openers."
// ')', '}', ']' are called "closers."
// Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

// Examples:

// "{ [ ] ( ) }" should return true
// "{ [ ( ] ) }" should return false
// "{ [ }" should return false

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