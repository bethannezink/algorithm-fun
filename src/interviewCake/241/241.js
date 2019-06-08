// A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.
// They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.
// Two rectangles overlapping a little. It must be love.
// Write a function to find the rectangular intersection of two given love rectangles.
// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.
// They are defined as dictionaries like this:

// const my_rectangle = {
//   leftX: 1,
//   bottomY: 1,
//   width: 6,  
//   height: 3
// }

// Your output rectangle should use this format as well.

function findOverlappingRectangle (rect1, rect2) {
  const bottomY = findPoint(rect1.bottomY, rect1.height, rect2.bottomY) || findPoint(rect2.bottomY, rect2.height, rect1.bottomY);
  const leftX = findPoint(rect1.leftX, rect1.width, rect2.leftX) || findPoint(rect2.leftX, rect2.width, rect1.leftX);
  const width = findProperty(leftX, rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  const height = findProperty(bottomY, rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  if (bottomY === false || leftX === false) {
    return false;
  }

  const overlappingRect = {
    leftX,
    bottomY,
    width,
    height
  };

  return overlappingRect;
}

function findPoint (rect1Point, rect1Property, rect2Point) {
  for (let i = rect1Point; i < (rect1Point + rect1Property); i++) {
    if (rect2Point === i) {
      return i;
    }
  }
  return false;
}

function findProperty (point, rect1Point, rect1Property, rect2Point, rect2Property) {
  let rect1OpposingPoint = (rect1Point + rect1Property);
  let rect2OpposingPoint = (rect2Point + rect2Property);
  let overlappingRectPoint = Math.min(rect1OpposingPoint, rect2OpposingPoint);

  return Math.abs(point - overlappingRectPoint);
}

module.exports = { findOverlappingRectangle }