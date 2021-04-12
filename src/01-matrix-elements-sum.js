/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const mat = matrix;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0 && typeof mat[i + 1] !== 'undefined') {
        mat[i + 1][j] = 0;
      }
    }
  }

  const result = [];
  for (let k = 0; k < mat.length; k++) {
    for (let n = 0; n < mat[0].length; n++) {
      if (mat[k][n] !== 0) {
        result.push(mat[k][n]);
      }
    }
  }
  let summa = 0;
  for (let s = 0; s < result.length; s++) {
    summa += result[s];
  }
  return summa;
}

module.exports = getMatrixElementsSum;
