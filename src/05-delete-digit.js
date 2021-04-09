/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];
  const digits = n.toString().split('');
  const realDigits = digits.map(Number);
  const minimalDigit = Math.min.apply(null, realDigits);
  const u = realDigits.indexOf(minimalDigit, 0);
  delete realDigits[u];
  for (let i = 0; i < realDigits.length; i++) {
    if (realDigits[i] !== undefined) {
      result.push(realDigits[i]);
    }
  }
  return Number(result.join(''));
}

module.exports = deleteDigit;
