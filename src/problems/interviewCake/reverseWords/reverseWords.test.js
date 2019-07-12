const { reverseWords } = require('./reverseWords');

const message1 = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

test('properly reverses an array with 3 words', () => {
  const reversedMessage = reverseWords(message1).join('');
  expect(reversedMessage).toEqual('steal pound cake');
});

const message2 = [ 'a', 'l', 'i', 'v', 'e', ' ', 'w', 'o', 'r', 'l', 'd', ' ', 't', 'h', 'i', 's', ' ', 'o', 'f', ' ', 'o', 'u', 't', ' ', 'g', 'e', 't', ' ', 'n',
'e', 'v', 'e', 'r', ' ', 'w', 'i', 'l', 'l', ' ', 'i' ];

test('properly reverses an array with 3 words', () => {
  const reversedMessage = reverseWords(message2).join('');
  expect(reversedMessage).toEqual('i will never get out of this world alive');
});