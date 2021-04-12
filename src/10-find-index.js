/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let i = -1;
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    if (array[mid] <= value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    if (array[mid] === value) {
      i = mid;
    }
  }
  return i;
}

module.exports = findIndex;
