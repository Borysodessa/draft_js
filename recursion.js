// function depth(obj) {
//   let sum = 1;
//   if (obj === null) {
//     return 0;
//   }
//   const values = Object.values(obj);
//   if (!Array.isArray(obj) && Object.keys(obj) !== 0) {
//     for (let value of values) {
//       if (typeof value === obj) {
//         sum += 1;
//         depth(value);
//       }
//     }
//     return sum;
//   }
//   return 0;
// }

// console.log(
//   depth({
//     aeTBCgzb: true,
//     WVyifRgn: null,
//     TFXcXlSt: {
//       UddJMstn: false,
//       cafPsQqw: 922,
//       xhooxMwh: null,
//       FmJAKdbG: 448,
//       PTpmqTzN: {
//         kcfJIDKO: 747,
//         HHjnJMsX: false,
//         ndiTOOaq: null,
//         seumOceg: [Object],
//         CTVTFhQz: 930,
//         fuOqoPit: 0.23753500640026237,
//         UKQEjWAc: true,
//         nMzGzpSx: 0.7052864939281036,
//       },
//       dnDbPHlM: {
//         fAOJBxkc: "biWKnO",
//         gCNKiXdV: true,
//         qSdWxiTu: true,
//         qufmPQhk: 687,
//         yhZpLHaD: true,
//         hqODwSeK: 962,
//         NEVXMJYJ: [Object],
//         qHbTjkYn: 511,
//       },
//       yivVsuEk: {
//         BDBuoQBc: "TljaUdz",
//         miIvsXto: 146,
//         TuAkrglc: 0.19709039283440055,
//         IoVijxTd: [Object],
//         LXxetXlX: true,
//         ukMmoXfC: 185,
//         cEYHUtOe: 0.6182513424453244,
//         LSgkGwqE: [Object],
//       },
//       CfKHXVYt: 0.6386937916990465,
//     },
//     roNFgYyt: 0.5401928877630051,
//     fiRpyyJR: true,
//     pCljGOan: "IEfG",
//     uTYFTxrf: 780,
//     hwZNHvBD: 744,
//   })
// );
//console.log(depth(null));
//console.log(depth({ a: 1, b: { c: 2 } }));

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      -- -> "Hi"

function remove(string) {
  if (string[string.length - 1] !== "!") {
    return string;
  }
  if (string[string.length - 1] === "!") {
    let rec = string.slice(0, -1);
    return remove(rec);
  }
}
console.log(remove("Hi!!"));
