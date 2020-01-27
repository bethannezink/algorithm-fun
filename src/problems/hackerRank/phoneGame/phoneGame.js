// You have a phone number pad. It acts like a game board where you land on a number
// and can make moves only to adjacent numbers (diagonally or next to).
// For example, if you land on the number 9, you can move to 5, 6, 8, or 0. 
// Write a function that takes a starting number S that you land on and N number of moves.
// The function should return all possible sequences of moves starting with S.

// Examples: 
// Input: S = 0, N = 1
// Output: [ [0, 7], [0, 8], [0, 9] ]

// Input: S = 5, N = 1
// Output: [ [5, 1], [5, 2], [5, 3], [5, 4], [5, 6], [5, 7], [5, 8], [5, 9] ]


/*
 * Complete the 'getAllPossibleMoves' function below.
 *
 * The function is expected to return a 2D_STRING_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER startingNumber
 *  2. INTEGER numberOfMoves
 */

const allPossibleMovesPerSpace = {
    0: [7, 8, 9],
    1: [2, 4, 5],
    2: [1, 3, 4, 5, 6],
    3: [2, 5, 6],
    4: [1, 2, 5, 7, 8],
    5: [1, 2, 3, 4, 6, 7, 8, 9],
    6: [2, 3, 5, 8, 9], 
    7: [4, 5, 8],
    8: [4, 5, 6, 7, 9, 0],
    9: [5, 6, 8, 0]
}

function getAllPossibleMoves(startingNumber, numberOfMoves, returnArray = '', finalArray = []) {
    returnArray += startingNumber;

    if (numberOfMoves === 0) {
        finalArray.push(returnArray);
    } else {
        const moveOptions = allPossibleMovesPerSpace[startingNumber];

        for (let i = 0; i < moveOptions.length; i++) {
            getAllPossibleMoves(moveOptions[i], numberOfMoves - 1, returnArray, finalArray);
        }
    };
    return finalArray;
}

console.log(getAllPossibleMoves(0, 3));

module.exports = { getAllPossibleMoves };