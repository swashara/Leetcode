/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let rowSet = new Set();
  let colSet = new Set();
  let gridSet = new Set();
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let val = board[r][c];
      if (val === ".") continue;
      let rowKey = r + "r" + val;
      let colKey = c + "c" + val;
      let gridKey = Math.floor(r / 3) + "g" + Math.floor(c / 3) + "g" + val;

      if (rowSet.has(rowKey) || colSet.has(colKey) || gridSet.has(gridKey))
        return false;
      rowSet.add(rowKey);
      colSet.add(colKey);
      gridSet.add(gridKey);
    }
  }
  return true;
};

let ans = isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
console.log(ans);
