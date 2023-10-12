//   Задача о зёрнах на шахматной доске — математическая задача,
// в которой вычисляется, сколько будет зёрен на шахматной доске,
//   если класть на каждую следующую клетку доски вдвое больше
// зёрен, чем на предыдущую, начиная с одного.
let res = 1;
function numberOfGrains(n) {
  res *= 2;
  if (n === 1) {
    return res;
  }
  return numberOfGrains(n - 1);
}
console.log("recursion>>>", numberOfGrains(64));

// function numberOfGrains() {
//   let res = 1;
//   const obj = [];
//   for (let i = 0; i < 64; i += 1) {
//     res *= 2;
//   }
//   return res;
// }
// console.log("cicle>>>", numberOfGrains(64));
