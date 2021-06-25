const sort = require("./mergeSort");

const numbers = require("./numbers.json");

function compare(left, right) {
  return right - left;
}

console.log(sort(compare, numbers));
