function matrixGenerator(rows, columns) {
  let arr1 = [];
  function returnRandomNum() {
    let randomNum = Math.floor(Math.random() * 101);
    return randomNum;
  }

  for (let x = 0; x < rows; x++) {
    arr1.push([]);
    for (let y = 0; y < columns; y++) {
      arr1[x].push(returnRandomNum());
    }
    arr1[x].sort((a, b) => {
      return a - b;
    });
  }
  arr1.sort((a, b) => {
    return a[0] - b[0];
  });
  return arr1;
}

module.exports = matrixGenerator;
