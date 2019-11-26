/*
You can get to the Nth character, or letter, from a string by writing "string" [N].
The returned value will be a string containing only one characger (for example, "b"). The first
character has position 0, which causes the last one to be found at position string.length-1. In other words, a two-character
string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase "B" characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument tha indicates the character that is to be counted 
(rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.
*/

function countBs (string) {
    let count = 0;
    for (var x=0; x<string.length; x++) {
        if (string [x] === "B")
            count++; 
    }
    return count; 
}

let bString = "ABracadaBra is a Basic thing to BluBBer."
console.log ("Number of captial B's in '" + bString + "': " + countBs (bString));
//result: Number of captial B's in 'ABracadaBra is a Basic thing to BluBBer.': 6


function countLetterInstances (string, letter) {
    let count = 0;
    for (var x=0; x< string.length; x++) {
        if (string [x] === letter)
            count++;
    }
    return count;
}

let letterString = "Cats Can Call for the Company of other Cats."
let letter = "C";
console.log ("Number of " + letter + "'s in '" + letterString + "': " + countLetterInstances (letterString, letter));
//result: Number of C's in 'Cats Can Call for the Company of other Cats.': 5