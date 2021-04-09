/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArray = [];
  const lst = [];
  // find '-1' in array and save their indexes to lst
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      lst.push(i);
    }
  }
  // add to new array elements without '-1'
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      newArray.push(arr[i]);
    }
  }
  // sort new array by height
  newArray.sort((a, b) => a - b);
  // push '-1' to their places in sorted array
  for (let index = 0; index < lst.length; index++) {
    newArray.splice(lst[index], 0, -1);
  }
  return newArray;
}

module.exports = sortByHeight;
