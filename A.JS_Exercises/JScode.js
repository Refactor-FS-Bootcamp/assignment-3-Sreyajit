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