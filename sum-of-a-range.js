//The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

    //console.log(sum(range (1, 10)));

// Write a range function that takes two arguemnts, start and end, and returns an array containing all the numbers from start up to (and including) end. 
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see hether it does indeed return 55.
// As a bonus assignment, modify your range function to take an optional third argument that indicates the 'step' value used when building the aray. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range (1, 10, 2) should return (1, 3, 5, 7, 9). Make sure it also works with negative step values so that range (5, 2, -1) produces [5, 4, 3, 2].

function getRange (a, b) {
    let rangeArray = [];
    for (let x=a; x<=b; x++) {
        rangeArray.push (x)
    };
    return rangeArray;
}

console.log (getRange (1, 10)); // result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumRange (a, b) {
    let sum = 0;
    for (let x=a; x<=b; x++) {
        sum += x;
    }
    return sum;
}

console.log (sumRange (1, 10)); // result: 55

function sumRangeStep (a, b, c) {
    let rangeArray = [];
    let i=1;

    if (c !== null)
         i = c;

    if (a<b) {
        for (let x=a; x<=b; x+=i) {
            rangeArray.push (x)
        } 
    } else {
        for (let x=a; x>=b; x+=i) {
            rangeArray.push (x)
        }
    }

    return rangeArray;
}

console.log (sumRangeStep (1, 10, 2)); //result: 1, 3, 5, 7, 9