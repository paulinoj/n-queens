/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = new Board({"n": n});
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      solution.togglePiece(i, j);
      if (solution.hasRowConflictAt(i) || solution.hasColConflictAt(j)) {
        solution.togglePiece(i, j);
      }
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = new Board({"n": n});
  var counter = 0;
  var flagPlacement = [];
  var i = 0;
  var j = 0;
  var allSolutionsFound = false;

  while (!allSolutionsFound) {
    while (i < n) {
      j = 0;
      while (j < n) {
        if (flagPlacement === undefined && i > 0) {
            allSolutionsFound = true;
            i = n;
            break;
        }
        solution.togglePiece(i, j);
        if (solution.hasRowConflictAt(i) || solution.hasColConflictAt(j)) {
          solution.togglePiece(i, j);
        }
        else {
          flagPlacement.push([i, j]);
        }
        j++;

        if (j === n) {
          var lastFlag = flagPlacement[flagPlacement.length - 1];
          if (lastFlag[0] !== i) {
            lastFlag = flagPlacement.pop();
            i = lastFlag[0];
            j = lastFlag[1];
            solution.togglePiece(i, j);
            j++;
          }
          if  (i === n - 1) {
            flagPlacement.pop();
            if (lastFlag[0] === i) {
              counter++;
              console.log("we found something");
            }
            solution.togglePiece(lastFlag[0], lastFlag[1]);
            lastFlag = flagPlacement.pop();
            i = lastFlag[0];
            j = lastFlag[1];
            solution.togglePiece(i, j);
            if (j === n-1) {
              lastFlag = flagPlacement.pop();
              i = lastFlag[0];
              j = lastFlag[1];
              solution.togglePiece(i, j);
            }
            j++;
          }
        }
      }
      i++;
    }
  }
  console.log('Number of solutions for ' + n + ' rooks:', counter);
  return counter;

};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
