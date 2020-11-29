function rotateArray (array, numRotations) {
  if (numRotations > array.length) {
      numRotations = numRotations % array.length;
  }
  const rotationPoint = array.length - numRotations;
  const postRotationPoint = array.slice(rotationPoint);
  const preRotationPoint = array.slice(0, rotationPoint);

  return postRotationPoint.concat(preRotationPoint);
}

module.exports = { rotateArray };