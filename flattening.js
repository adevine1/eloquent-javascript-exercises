//Use the *reduce* method in combination with the *concat* method to "flatten"
//an arra of arrays into a single array that has all the elements of the original arrays.

let myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(myArray.reduce  ((a, b) => a.concat (b), []));