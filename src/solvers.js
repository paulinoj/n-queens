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
  var row = 0;
  var col = 0;
  var pieceNotPlaced;
  var lastPosition;

  if (n === 0) {
    return 1;
  }

  while (row < n) {

    pieceNotPlaced = true;

    while (col < n && pieceNotPlaced) {
      solution.togglePiece(row, col);
      if (solution.hasRowConflictAt(row) || solution.hasColConflictAt(col)) {
        solution.togglePiece(row, col);
      }
      else {
        flagPlacement.push([row, col]);
        pieceNotPlaced = false;
      }
      col++;
    }

    if (pieceNotPlaced === true) {
      if (flagPlacement.length === 0) {
        return counter;
      }
      else {
        lastPosition = flagPlacement.pop();
        row = lastPosition[0];
        col = lastPosition[1];
        solution.togglePiece(row, col);
        col++;
      }
    }
    else
    {
      if (row === n - 1) {
        counter++;
        lastPosition = flagPlacement.pop();
        row = lastPosition[0];
        col = lastPosition[1];
        solution.togglePiece(row, col);
        col++;

      }
      else {
        col = 0;
        row++;
      }
    }
  }
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  console.log("n:  " + n);
  var solution = new Board({"n": n});
  var counter = 0;
  var flagPlacement = [];
  var row = 0;
  var col = 0;
  var pieceNotPlaced;
  var lastPosition;

  if (n === 0) {
    return new Board([]).rows();
  }

  if (n === 1) {
    return new Board([[1]]).rows();
  }

  while (row < n) {

    pieceNotPlaced = true;

    while (col < n && pieceNotPlaced) {
      solution.togglePiece(row, col);

      if (solution.hasRowConflictAt(row) || solution.hasColConflictAt(col) || solution.hasMajorDiagonalConflictAt(col-row) || solution.hasMinorDiagonalConflictAt(col+row)) {
        solution.togglePiece(row, col);
      }
      else {
        flagPlacement.push([row, col]);
        pieceNotPlaced = false;
      }
      col++;
    }

    if (pieceNotPlaced === true) {
      if (flagPlacement.length === 0) {
        return solution.rows();
      }
      else {
        lastPosition = flagPlacement.pop();
        row = lastPosition[0];
        col = lastPosition[1];
        solution.togglePiece(row, col);
        col++;
      }
    }
    else
    {
      if (row === n - 1) {
//        console.log(flagPlacement);
        return solution.rows();
        counter++;
        lastPosition = flagPlacement.pop();
        row = lastPosition[0];
        col = lastPosition[1];
        solution.togglePiece(row, col);
        col++;

      }
      else {
        col = 0;
        row++;
      }
    }
  }

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  console.log("n:  " + n);
  var solution = new Board({"n": n});
  var counter = 0;
  var flagPlacement = [];
  var row = 0;
  var col = 0;
  var pieceNotPlaced;
  var lastPosition;

  if (n === 0 || n === 1) {
    return 1;
  }

  while (row < n) {

    pieceNotPlaced = true;

    while (col < n && pieceNotPlaced) {
      solution.togglePiece(row, col);

      if (solution.hasRowConflictAt(row) || solution.hasColConflictAt(col) || solution.hasMajorDiagonalConflictAt(col-row) || solution.hasMinorDiagonalConflictAt(col+row)) {
        solution.togglePiece(row, col);
      }
      else {
        flagPlacement.push([row, col]);
        pieceNotPlaced = false;
      }
      col++;
    }

    if (pieceNotPlaced === true) {
      if (flagPlacement.length === 0) {
        // var allZeroes = true;
        // for (var i = 0; i < n; i++) {
        //   if (solution.get(0)[i] === 1) {
        //       allZeroes = false;
        //   }
        // }
        // if (allZeroes) {
        //   return 0;
        // }
  console.log('there are ' + counter + ' solutions');
        return counter;
      }
      else {
        lastPosition = flagPlacement.pop();
        row = lastPosition[0];
        col = lastPosition[1];
        solution.togglePiece(row, col);
        col++;
      }
    }
    else
    {
      if (row === n - 1) {
//        console.log(flagPlacement);
        console.log("hello2");
        counter++;
        lastPosition = flagPlacement.pop();
        row = lastPosition[0];
        col = lastPosition[1];
        solution.togglePiece(row, col);
        col++;

      }
      else {
        col = 0;
        row++;
      }
    }
  }
};
