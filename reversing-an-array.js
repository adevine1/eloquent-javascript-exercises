//Arrays have a reverse method that change the array by inversing the order in which its elements appear.
//For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array
//as an argument and produces a *new* array that has the same elements in the inverse order.
//The second, reverseArrayInPlace, does what the reserverse method does: it modifies the array given as argument by reversing its elements. 
//Neither may use the standard reverse method.

function reverseArray (myArray) {
    let reversedMyArray = [];
    for (var x=myArray.length-1; x>=0; x--) {
        reversedMyArray.push (myArray [x]);
    }
    return reversedMyArray;
}

var myArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (reverseArray (myArray)); //result = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function reverseArrayInPlace (myOtherArray) {
    for (var x=0; x<=Math.min(10/2); x++) {
        let holdVar = myOtherArray [x];
        myOtherArray [x] = myOtherArray [(myOherArray.length-1)-x];
        myOtherArray [(myOtherArray.length-1)-x] = holdVar;
    }
    return myOtherArray;
}

var myOtherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log (reverseArray (myOtherArray)); //result = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


