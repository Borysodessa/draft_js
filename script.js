//   Задача о зёрнах на шахматной доске — математическая задача,
// в которой вычисляется, сколько будет зёрен на шахматной доске,
//   если класть на каждую следующую клетку доски вдвое больше
// зёрен, чем на предыдущую, начиная с одного.

// let res = 1;
// function numberOfGrains(n) {
//   res *= 2;
//   if (n === 1) {
//     return res;
//   }
//   return numberOfGrains(n - 1);
// }
// console.log("recursion>>>", numberOfGrains(64));

// function numberOfGrains() {
//   let res = 1;
//   const obj = [];
//   for (let i = 0; i < 64; i += 1) {
//     res *= 2;
//   }
//   return res;
// }
// console.log("cicle>>>", numberOfGrains(64));

//////

// В этом Ката вы будете сокращать дроби.Каждая дробь будет правильной
// дробью с целыми положительными значениями.Для этого найдите наибольший
//  общий делитель и разделите на это число числитель и знаменатель.Дробь
//   будет введена в функцию как два отдельных числа и выведена как массив
//    с двумя значениями: первое значение — это уменьшенный числитель, а
//    второе значение — уменьшенный знаменатель.

// let n = 1;
// function reduce(fraction) {
//   if (fraction[0] < fraction[1] && fraction[1] % fraction[0] === 0) {
//     return [1, fraction[1] / fraction[0]];
//   }
//   if (fraction[0] > fraction[1] && fraction[0] % fraction[1] === 0) {
//     return [fraction[0] / fraction[1], 1];
//   }
//   if (
//     fraction[0] < fraction[1] &&
//     fraction[0] % (fraction[0] - n) === 0 &&
//     fraction[1] % (fraction[0] - n) === 0
//   ) {
//     fraction[1] /= fraction[0] - n;
//     fraction[0] /= fraction[0] - n;
//   }
//   if (
//     fraction[0] > fraction[1] &&
//     fraction[0] % (fraction[1] - n) === 0 &&
//     fraction[1] % (fraction[1] - n) === 0
//   ) {
//     fraction[0] /= fraction[1] - n;
//     fraction[1] /= fraction[1] - n;
//   }
//   n += 1;
//   if (n >= fraction[0] - 1 || n >= fraction[1] - 1) {
//     return [fraction[0], fraction[1]];
//   }
//   return reduce([fraction[0], fraction[1]]);
// }
// console.log(reduce([1422, 98]));

///////

// В этом Ката вы будете сокращать дроби.Каждая дробь будет правильной
// дробью с целыми положительными значениями.Для этого найдите наибольший
//  общий делитель и разделите на это число числитель и знаменатель.Дробь
//   будет введена в функцию как два отдельных числа и выведена как массив
//    с двумя значениями: первое значение — это уменьшенный числитель, а
//    второе значение — уменьшенный знаменатель.

// let n = 1;
// function reduce(numerator, denominator) {
//   if (numerator < denominator && denominator % numerator === 0) {
//     return [1, denominator / numerator];
//   }
//   if (numerator > denominator && numerator % denominator === 0) {
//     return [numerator / denominator, 1];
//   }
//   if (
//     numerator < denominator &&
//     numerator % (numerator - n) === 0 &&
//     denominator % (numerator - n) === 0
//   ) {
//     denominator /= numerator - n;
//     numerator /= numerator - n;
//   }
//   if (
//     numerator > denominator &&
//     numerator % (denominator - n) === 0 &&
//     denominator % (denominator - n) === 0
//   ) {
//     numerator /= denominator - n;
//     denominator /= denominator - n;
//   }
//   n += 1;
//   if (n >= numerator - 1 || n >= denominator - 1) {
//     return [numerator, denominator];
//   }
//   return reduce(numerator, denominator);
// }
// console.log(reduce(1722, 836));
