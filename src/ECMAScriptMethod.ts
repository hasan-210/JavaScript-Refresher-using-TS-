// map , filter , find , some , every and reduce array method

/** array of number  */

const numbers:number[] = [1, 2, 3, 4, 5];

// map | return array
const squaredNumber = numbers.map((number) => number * number);
console.log(squaredNumber);  // [1 , 4 , 9 , 16 , 25]

// filter | return array

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4]


// find | return first element that pass the test

const firstEvenNumber = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber); // 2

// some | return true if at least one element pass the test

const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // true

const hasNegativeNumber = numbers.some((number) => number < 0);
console.log(hasNegativeNumber); // flase


// every | return true if all elements pass the test

const allEvenNumbers = numbers.every((number) => number % 2 === 0);
console.log(allEvenNumbers); // false

const allNegativeNumber = numbers.every((number) => number < 0);
console.log(allNegativeNumber); // flase

// reduce | return single value 

const sumOfNumbers = numbers.reduce((previousValue ,currentValue) => previousValue + currentValue, 0); // 0 is added to previous
console.log(sumOfNumbers); // 15