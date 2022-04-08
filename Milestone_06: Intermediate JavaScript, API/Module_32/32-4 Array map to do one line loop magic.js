const ar = [11, 22, 33, 4, 5, 6, 7, 8, 9];

function doubleIt1(N) {
    return N * 2;
}
const doubleIt2 = (N) => N * 2;

// for (const n of ar) {
//     console.log(doubleIt2(n));
// }

const doubleIt3 = (N, Nn, h, hh) => {
    console.log("N: " + N + "  Nn: " + Nn + `  h: ${h}\n  hh: ${h}\n `);
    return N * Nn;
}


const output = ar.map(doubleIt3);
console.log(output);



const maparr = [23, 33.3, 4, 5, 7, 8];

const maparroutput = maparr.map(x => x * x);
console.log(maparroutput);




