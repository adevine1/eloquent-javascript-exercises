//Write a program that creates a string that represents an 8x8 grid, using newline charactes to separate lines. At each position of the grid there is either
//a space or a # characters. The characters should form a chessboard.

function makeChessboard () {
  let rowString1 = " # # # #";
  let rowString2 = "# # # # ";
  let chessBoardString = "";
  for (let x=1; x<=8; x++) {
    if (x%2 !== 0) {
      chessBoardString += rowString1 + "\n"
    } else {
      chessBoardString += rowString2 + "\n";
    }
  }
  return chessBoardString;
}

var chessboard = makeChessboard ();
console.log (chessboard);
