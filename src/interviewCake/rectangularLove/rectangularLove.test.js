const { findOverlappingRectangle } = require('./rectangularLove');

test('finds overlapping rectangle...', () => {
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

  expect(findOverlappingRectangle(rect1, rect2)).toEqual(expectedOverlappingRect);
});

test('finds another overlapping rectangle...', () => {
  const rect1 = {
    leftX: 1,
    bottomY: 1,
    width: 6,
    height: 3
  };
  
  const rect2 = {
    leftX: 5,
    bottomY: 2,
    width: 3,
    height: 6
  };
  
  const expectedOverlappingRect = {
    leftX: 5,
    bottomY: 2,
    width: 2,
    height: 2
  };

  expect(findOverlappingRectangle(rect1, rect2)).toEqual(expectedOverlappingRect);
});

test('finds yet another overlapping rectangle...', () => {
  const rect1 = {
    leftX: 1,
    bottomY: 0,
    width: 2,
    height: 2
  };
  
  const rect2 = {
    leftX: 2,
    bottomY: 1,
    width: 3,
    height: 3
  };
  
  const expectedOverlappingRect = {
    leftX: 2,
    bottomY: 1,
    width: 1,
    height: 1
  };

  expect(findOverlappingRectangle(rect1, rect2)).toEqual(expectedOverlappingRect);
});

test('finds overlapping rectangle when one rectangle is fully contained within another', () => {
  const rect1 = {
    leftX: 5,
    bottomY: 5,
    width: 10,
    height: 15
  };
  
  const rect2 = {
    leftX: 7,
    bottomY: 7,
    width: 2,
    height: 2
  };
  
  const expectedOverlappingRect = {
    leftX: 7,
    bottomY: 7,
    width: 2,
    height: 2
  };

  expect(findOverlappingRectangle(rect1, rect2)).toEqual(expectedOverlappingRect);
});

test('returns false if rectangles do not overlap', () => {
  const rect1 = {
    leftX: 5,
    bottomY: 5,
    width: 10,
    height: 15
  };
  
  const rect2 = {
    leftX: 1,
    bottomY: 1,
    width: 1,
    height: 1
  };

  expect(findOverlappingRectangle(rect1, rect2)).toEqual(false);
});

test('finds overlapping rectangle when one rectangle is fully contained within another', () => {
  const rect1 = {
    leftX: 2,
    bottomY: 2,
    width: 4,
    height: 4,
  }
  const rect2 = {
    leftX: 2,
    bottomY: 2,
    width: 4,
    height: 4,
  }
   const expectedOverlappingRect = {
    leftX: 2,
    bottomY: 2,
    width: 4,
    height: 4,
  }

  expect(findOverlappingRectangle(rect1, rect2)).toEqual(expectedOverlappingRect);
});

test('finds overlapping rectangle when one rectangle is fully contained within another', () => {
  const rect1 = {
    leftX: 1,
    bottomY: 1,
    width: 6,
    height: 6,
  }
  const rect2 = {
    leftX: 3,
    bottomY: 3,
    width: 2,
    height: 2,
  }
  const expectedOverlappingRect = {
    leftX: 3,
    bottomY: 3,
    width: 2,
    height: 2,
  }

  expect(findOverlappingRectangle(rect1, rect2)).toEqual(expectedOverlappingRect);
});
