// Q>Two sorted Arrays A & B.Find number of pairs(i,j)
// such that A[i]>B[j]
// A:3 6 8 10 15
// B:1 2 7 12 18
// sol>
function countPairs(A, B) {
  let count = 0;
  for (let i = 0, j = 0; i < A.length || j < B.length; ) {
    if (A[i] > B[j]) {
      count++;
      j++;
    } else {
      count += j;
      i++;
    }
  }
  return count;
}
let A = [3, 6, 8, 10, 15];
let B = [1, 2, 7, 12, 18];
let result = countPairs(A, B);
console.log(result);
