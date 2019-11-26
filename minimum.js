/*
Chapter 2 introuced the standard function Math.min, which returns its smallest argument (see 'Return Values' on page 27).
We can build something like that now. Write a function *min* that takes two arguments and returns their minimum.
*/

function min (a, b) {
    if (a<b) return a
    else return b;
}

let val1 = 10;
let val2 = 5;
console.log (min (val1, val2));

