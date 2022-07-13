
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortArr = [];
  if (matrix === undefined) {
    return sortArr;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
          sortArr.push(matrix[i][j]);
        }
      } else {
        for (let j = 0; j < matrix[i].length; j++) {
          sortArr.push(matrix[i][j]);
        }
      }
    }
    return sortArr;
  }
}
