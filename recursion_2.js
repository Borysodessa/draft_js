//console.log("Hello");

const root = {
  value: 10,
  left: { value: 1, left: null, right: null },
  right: { value: 2, left: null, right: null },
};

function rec(root) {
  if (root === null) {
    return 0;
  }
  let number = 0;
  number += root.value;
  number += rec(root.left);
  number += rec(root.right);
  return number;
}
console.log(rec(root));
