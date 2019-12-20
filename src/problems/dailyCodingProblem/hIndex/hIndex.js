function findHIndex (numCitationsByPaper) {
  if (numCitationsByPaper.length < 1) { return 0; };

  numCitationsByPaper.sort();
  let greatestHIndex = 1;

  for (let i = 0; i < numCitationsByPaper.length; i++) {
    if (numCitationsByPaper[i] <= numCitationsByPaper.length - i) {
      greatestHIndex = numCitationsByPaper[i];
    }
  }
  return greatestHIndex;
}



// [4, 3, 2, 0, 0]
// var hIndex = function(citations) {
//   citations.sort((a, b) => b - a);
  
//   let result = 0;
//   for (let [index, value] of citations.entries()) {
//     const h = index + 1;
    
//     if (value < h) {
//       return result;
//     }
    
//     result = h;
//   }
  
//   return result;
// };

module.exports = { findHIndex };
