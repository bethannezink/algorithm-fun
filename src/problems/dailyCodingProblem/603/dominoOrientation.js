// You are given an string representing the initial conditions of some dominoes. Each element can take one of three values:

// L, meaning the domino has just been pushed to the left,
// R, meaning the domino has just been pushed to the right, or
// ., meaning the domino is standing still.
// Determine the orientation of each tile when the dominoes stop falling. Note that if a domino receives a force from the left and right side simultaneously, it will remain upright.

// For example, given the string .L.R....L, you should return LL.RRRLLL.

// Given the string ..R...L.L, you should return ..RR.LLLL.

// Big O:

function dominoOrientation (initialOrientation) {
  let resultOrientation = [];
  const left = 'L';
  const right = 'R';

  let indexFirstDomino = -1;
  let indexLastDomino = -1;

  for (let i = 0; i < initialOrientation.length; i++) {
    const currentDominoOrientation = initialOrientation.charAt(i);

    if (currentDominoOrientation === left || currentDominoOrientation === right) {
      if (indexFirstDomino === -1) {
        indexFirstDomino = i;
        resultOrientation.push(initialOrientation.charAt(indexFirstDomino));
      } else {
        indexLastDomino = i;

        const orientationFirstDomino = initialOrientation.charAt(indexFirstDomino);
        const orientationLastDomino = initialOrientation.charAt(indexLastDomino);

        if (orientationFirstDomino === orientationLastDomino) {
          let indexPushedDomino = indexFirstDomino + 1;
          while (indexPushedDomino <= indexLastDomino) {
            resultOrientation.push(orientationFirstDomino)
            indexPushedDomino++;
          }

          indexFirstDomino = indexLastDomino;
        } else {

        }
      }
    }
  }

  return resultOrientation.join('');
}

module.exports = { dominoOrientation };