/**
 * @param {number[]} numbers An array of numbers
 *  @param {number[]} moreNumbers An array of more numbers
 */

export function allTheNumbers(numbers, moreNumbers) {
  const first = numbers;
  const more = moreNumbers;
  console.log([first, ...more]);
}
