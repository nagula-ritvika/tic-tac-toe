const checkLines = (isRow, n, vals) => {
  for (let i = 0; i < n; i++) {
    let initialPiece = vals[isRow ? 0 : i][isRow ? i : 0];

    if (initialPiece === null) {
      continue;
    }

    for (let j = 1; j < n; j++) {
      let currentPiece = vals[j][i];

      if (currentPiece !== initialPiece) {
        break;
      } else if (j === n - 1) {
        return initialPiece;
      }
    }

    if (i === n - 1) {
      return null;
    }
  }

  return null;
};

const checkDiagonal = (topLeft, n, vals) => {
  let piece = vals[topLeft ? 0 : n - 1][0];
  for (let d = 0; d < n; d++) {
    if (piece === null) {
      break;
    }

    let currentPiece = vals[topLeft ? d : n - d - 1][d];

    if (currentPiece !== piece) {
      break;
    } else if (d === n - 1) {
      return currentPiece;
    }
  }
};

const find_winner = board => {
  let n = Math.sqrt(board.length);
  let tempBoard = board.slice();
  console.log("in find_winner");
  let vals = [];
  while (tempBoard.length) {
    vals.push(tempBoard.splice(0, n));
  }

  let winner = checkLines(true, n, vals);
  if (winner !== null) {
    return winner;
  }
  winner = checkLines(false, n, vals);
  if (winner !== null) {
    return winner;
  }
  winner = checkDiagonal(true, n, vals);
  if (winner !== null) {
    return winner;
  }
  winner = checkDiagonal(false, n, vals);
  return winner;
};

export default find_winner;
