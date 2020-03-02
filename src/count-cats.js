module.exports = function countCats(matrix) {  
  return matrix.length ? matrix.reduce((resArr, curr) => resArr.concat(curr)).reduce((counter, curr) => (curr == '^^') ? counter + 1 : counter, 0) : 0;
};
