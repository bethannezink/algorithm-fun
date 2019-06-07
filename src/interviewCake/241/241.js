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
  let leftX, bottomY, width, height;

  for (let i = rect1.bottomY; i < (rect1.bottomY + rect1.height); i++) {
    if (rect2.bottomY === i) {
      bottomY = i;
    }
  }

  for (let j = rect2.bottomY; j < (rect2.bottomY + rect2.height); j++) {
    if (rect1.bottomY === j) {
      bottomY = j;
    }
  }

  for (let k = rect1.leftX; k < (rect1.leftX + rect1.width); k++) {
    if (rect2.leftX === k) {
      leftX = k;
    }
  }

  for (let l = rect2.leftX; l < (rect2.leftX + rect2.width); l++) {
    if (rect1.leftX === l) {
      leftX = l;
    }
  }

  let rect1RightX = (rect1.leftX + rect1.width);
  let rect2RightX = (rect2.leftX + rect2.width);
  let overlappingRectRightX = Math.min(rect1RightX, rect2RightX);

  width = Math.abs(leftX - overlappingRectRightX);

  let rect1TopY = (rect1.bottomY + rect1.height);
  let rect2TopY = (rect2.bottomY + rect2.height);
  let overlappingRectTopY = Math.min(rect1TopY, rect2TopY);

  height = Math.abs(bottomY - overlappingRectTopY);

  const overlappingRect = {
    leftX,
    bottomY,
    width,
    height
  };

  return overlappingRect;s
}

module.exports = { findOverlappingRectangle }