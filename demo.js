// Demo file để test các tính năng của Claude Code Vietnamese Template

/**
 * Hàm tính tổng các số trong mảng
 * @param {number[]} numbers - Mảng các số
 * @returns {number} Tổng các số
 */
function calculateSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

/**
 * Hàm tìm số lớn nhất trong mảng
 * @param {number[]} arr - Mảng các số
 * @returns {number} Số lớn nhất
 */
function findMax(arr) {
  return Math.max(...arr);
}

// Test functions
const numbers = [5, 2, 9, 1, 7, 3];
console.log("Tổng:", calculateSum(numbers));
console.log("Số lớn nhất:", findMax(numbers));

// Export
module.exports = {
  calculateSum,
  findMax
};
