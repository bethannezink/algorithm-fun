const { buildWordCloud } = require('./wordCloudData');

test('builds a word cloud for a word string with basic punctuation and few relevant proper nouns', () => {
  const wordString = 'After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.'

  const expectedWordCloud = {
    after: 1,
    beating: 1,
    the: 2,
    eggs: 1,
    dana: 1,
    read: 1,
    next: 1,
    step: 1,
    add: 2,
    milk: 1,
    and: 2,
    eggs: 2,
    then: 1,
    flour: 1,
    sugar: 1
  };

  expect(buildWordCloud(wordString)).toMatchObject(expectedWordCloud);
});

test('', () => {
  const wordString = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. The bill came to five dollars."
  // expect(buildWordCloud(wordString)).toMatchObject(expectedWordCloud);
})
