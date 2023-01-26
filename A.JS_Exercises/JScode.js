// 1. Write a JS code to print numbers from 1 to 10.
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Write a JS code to print a 2D array.
for (i = 0; i < arr.length; i++) {
    for(var j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

// 3. Write a JS code to print Even numbers in given array.
for (i = 0; i < arr.length; i++) {
    if(i%2==0){
        console.log(arr[i]);
    }
}

// 4. Write a JS code to delete all occurrence of element in given array
for (i = 0; i < arr.length; i++) {
    if(arr[i]==elementToDelete){
        arr.splice(i, 1);
    }
}

// 5. Write a JS code to demonstrate Async loop
for (i = 1; i < n; i++) {
    let j=i;
    setTimeout(console.log(`this print statement demonstrates an async loop by delaying the runtime every ${j} seconds`), 1000 * i);
}

// 6. Write a JS code to find the power of a number using for loop
let result;
for(i = 0; i <= power; i++) {
     result*=base;
}

// 7. Write a JS code to print a pattern using for loop(confusing question because this doesn't specify the pattern, so that a basic pattern in printed)
for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}

// 8. Write a JS code to find the no of digits in a number
let no_of_digits=0;
while(Math.floor(number)>0){
    ++no_of_digits;
    number/=10;
}

// 9. Write a JS code to calculate the sum of digits in a number
let sum = 0;
while(Math.floor(number)>0){
    sum+=Math.floor(number);
    number/=10;
}

// 10. Write a JS code to find the largest number in an array
let largestNumber;
for(i=0;i<arr.length;i++){
    largestNUmber = arr[i]>largestNUmber ? arr[i] : largestNUmber;
}

// 11. Write a JS code to find the number of zeros in 2D Matrix
let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        count++;
      }
    }
}

// 12. Write a JS code to find product of two arrays
let product = 1;
let length = Math.min(arr1.length, arr2.length);
for (let i = 0; i < length; i++) {
  product *= arr1[i] * arr2[i];
}

// 13. Write a JS code to print the Fibonacci series for a given value of N
let fibonacci = [0, 1];
for (let i = 2; i < N; i++) {
  fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
}
console.log(fibonacci);

// 14. Write a JS code to find N value in the Fibonacci series for a given number
  fibonacci = [0, 1];
  let index = 2;
  let N;
  while (fibonacci[index-1] <= givenNumber) {
    let nextNum = fibonacci[index-1] + fibonacci[index-2];
    fibonacci.push(nextNum);
    if (nextNum === givenNumber) {
      N = index;
      break;
    }
    index++;
  }

//   15. Write a JS code to count all letters in a word
let letters=0;
for (let i = 0; i < word.length; i++) {
  letters++;
}

// 16. Write a JS code to find duplicate values in a given array
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] === arr[j] && duplicates.indexOf(arr[i]) === -1) {
      duplicates.push(arr[i]);
    }
  }
}

// 17. Write a JS code for binary search algorithm
  let left = 0;
  let right = arr.length - 1;
  let indexOfItemToSearch;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
        indexOfItemToSearch=middle;
        break;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  if(indexOfItemToSearch==undefined) {
    indexOfItemToSearch="Item not found";
 }