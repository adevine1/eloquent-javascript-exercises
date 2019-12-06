/*
Ojbects, as generic blobs of vlaues, can be used to build all sorts of data structures.
A common data structure is the list (not be be confused with array). 
A list is a nested set of objects, with the first object holding a reference to the second, 
the second to the third, and so on.

-------------
let list = {
    value: 1
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};
------------

The resulting objects form a chain, like this (cf. p. 79).

A nice thing about lists is that they can share parts of their structure.
For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list}
(with list referring to the binding defined earlier), the are both independent lists,
but they share the structure that makes up their last three elements. The original list
is also still a valid three-element list.

Write a function arrayToList that builds up a list struce like the one shown when given 
[1, 2, 3] as argument. Also write a listToArray function that produces an array from a list.

Then add a helper function prepend, which takes an element and a list and creates a new list 
that adds the element to the front of the input list, 
and nth, which takes a list and a number and returns the element at the given position in the 
list (with zero referring to the first element) or undefined when there is no such element.

If you haven't already, also write a recursive version of nth.
*/

function arrayToList (inputArray) {
    
    let myObject = {};
    let lastObject = {}
    lastObject.rest = null;
    lastObject.value = inputArray [inputArray.length-1];
    console.log (lastObject);
  

    for (let x=inputArray.length-1; x>=0; x--) {
        myObject.value = x;
        myObject.rest = lastObject;
        lastObject = myObject;
        console.log (lastObject);
    }
    return myObject;
}

let myInputArray = [1, 2, 3];
console.log (arrayToList (myInputArray));


function listToArray (longList) {
    let valuesArray = [];

    function pullValues (list) {
        valuesArray.push (list.value);
        if (list.rest !== null)
        pullValues (list.rest);
    }

    pullValues (longList);
    return valuesArray;
}

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

console.log (listToArray (list));

function prepend (a, longList) {

    let prependObject = {};
    prependObject.value = a;
    prependObject.rest = longList;

    return prependObject;
}

    let longList = {
        value: 1,
        rest: {
            value: 2,
            rest: {
                value: 3,
                rest: null
            }
        }
    };

let prependValue = 'testvalue';
console.log (prepend (prependValue, longList));