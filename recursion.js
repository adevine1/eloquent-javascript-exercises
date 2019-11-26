/*
We've seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it's divisible by two.
Here's another way to define whether a positive whole numer is even or odd:

* Zero is even.
* One is odd.
* For any other number N, its evenness is the same as N - 2.

Define a recursive function *isEven* corresponding to this description. The function should accept a single parameter (a posiive, whole number)
and return a Boolean. 

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven (value) {
//input: number; output: boolean
  if (value > 0) {
    if (value===1) return false 
      else if (value===0) return true
        else return isEven (value-2);
  } else {
      return ("number has to be greater than 0");
  }
};

let num = 1;
console.log (isEven (num));