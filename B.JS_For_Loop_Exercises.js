// 1.	Get the sum of two arrays… actually the sum of all their elements. P.S. Each array includes only integer numbers. Output is a number too.
// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
let sum ;
for (let i = 0; i < arr1.length; i++) {
  sum += arr1[i];
}
for ( i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}

// 2.	Using a for loop print all even numbers up to and including n. Don’t include 0.
// let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
let evens = [];
for (let i = 2; i <= n; i += 2) {
    evens.push(i);
}

// 3.	Using a for loop output the elements in reverse order
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
for (i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }

//   4.	Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
 
// let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
let sumArr = [];
  for ( i = 0; i < arr1.length; i++) {
    sumArr.push(arr1[i] + arr2[i]);
  }

//   5.	Given a string change every second letter to an uppercase ‘Z’. Assume
// there are no space.
// let str1 = "javascript";  
// Example output: 
// jZvZsZrZpZ OR each letter on a new line
// HINT: You can use if((i+1) % 2 == 0) to check for even indexes 
let newStr = "";
for (i = 0; i < str.length; i++) {
  if ((i + 1) % 2 === 0) {
    newStr += "Z";
  } else {
    newStr += str[i];
  }
}

// 6.	Check if a string contains the letter “y”. Print “yes” if it does and “no” if it does not.
// let str2 = "don’t know why";
// Example output: 
// “yes” 
let result= "no";
for ( i = 0; i < str.length; i++) {
    if (str[i] === "y") {
      result="yes";
      break;
    }else{
        result="no";
    }
}

// 7.	Given a number n Calculate the factorial of the number
// let n2 = 4; 4 * 3 * 2 * 1 = 24
// Example output:
// 24
factorial = 1;
for (i = 1; i <= n; i++) {
  factorial *= i;
}

// 8.	Write a program that will allow someone to guess a four-digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise, it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.
// let pin = 0704;
// Example output:
// Please make your guess: 
// 4544 
// Sorry that was wrong.
// Please make your guess: 
// 4444
// Sorry that was wrong.
// Please make your guess: 
// 0704
// That was correct!
let pin;
for (i = 1; i <= 4; i++) {
  let guess = prompt("Please make your guess: ");
  if (guess == pin) {
    console.log("That was correct!");
    break;
  } else {
    console.log("Sorry that was wrong.");
  }
}

// 9.	Write a program that will check if two strings are palindromes. A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.
// let str3 = "racecar";
// let str4 = "Java";
// Example output:
// string1 palindrome?: 
// Yes 
// string2 palindrome?: 
// No 
let isPalindrome = true;
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - i - 1]) {
    isPalindrome = false;
    break;
  }
}

// 10.	This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// let num1 = 2; 
// let num2 = 8; 
// Example output: 
// 1 + 2 = 3
sum=0;
for (let i = 1; i <= num; i++) {
  sum += i;
}

