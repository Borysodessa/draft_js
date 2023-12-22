const sumNested = (arr) => {
  let a = 0;
  arr.map((el) => (typeof el === "number" ? (a += el) : (a += sumNested(el))));
  return a;
};
console.log(sumNested([1, [1]]));
