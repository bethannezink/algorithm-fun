const { findOverlappingRectangle } = require('./241');

const rect1 = {
  leftX: 1,
  bottomY: -5,
  width: 2,
  height: 4
};

const rect2 = {
  leftX: 2,
  bottomY: -2,
  width: 3,
  height: 3
};

const expectedOverlappingRect = {
  leftX: 2,
  bottomY: -2,
  width: 1,
  height: 1
};

test('finds overlapping rectangle...', () => {
  expect(findOverlappingRectangle(rect1, rect2)).toEqual(expectedOverlappingRect);
});
