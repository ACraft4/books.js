// let myArray = new Array(5).fill(0);
// console.log(myArray);

// let sameArray = [0, 0, 0, 0, 0];

// console.log(myArray === sameArray); // false

// let myLittleArray = []
// myLittleArray.push(3)
// console.log(myLittleArray);

// myLittleArray.push(5)
// myLittleArray.push(6)
// console.log(myLittleArray);

// myLittleArray.pop()
// console.log(myLittleArray);

// // reduce

// function add(reduction, element) {
//     return reduction + element;
// }
// let myNewArray = [2, 6, 78, 8]

// let total = myNewArray.reduce(add, 0);
// console.log(total);

// function mult(reduction, element) {
//     return reduction * element
// }

// let multTotal = myNewArray.reduce(mult, 1) // attention to numbers
// console.log(multTotal);

// console.log(Math.max(123, 3566) + Math.min(1488, 123))

// let theNumber = Number(prompt("get number"));
// if (!Number.isNaN(theNumber)) {
//     console.log("Eeeeee boooooi" + " " + theNumber * theNumber);
// }

// вывести все четные числа от 0 до 12
// даем старт с 0
// let number = 0;
// while (number <= 12) {
//     console.log(number);
//     number = number + 2;
// }

// let result = 1;
// let counter = 0;
// while (counter < 10) {
//     result = result * 2;
//     counter = counter + 1;
// }
// console.log(result);

// let result = 1;
// for (let counter = 0; ; counter++) {
//     if (counter % 7 == 0)
//         break
// }

// console.log(result);



// let yourName;
// do {
//     yourName = prompt('Hey, whats your name');
// } while (!yourName);
// console.log(yourName);

// // Triangle
// for (let i = '#'; i.length <= 10; i += '#') {
//         console.log(i);
// }

// FizzBuzz
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
//     if (i % 3 == 0) {
//         console.log('Fizz')
//     }
//     else if (i % 5 == 0) {
//         console.log('Buzz')
//     }
//     else if (i % 8 == 0) {
//         console.log('FizzBuzz')
//     }
// }

// for (let n = 1; n <= 100; n++) {
//     let output = '';
//     if (n % 3 == 0) output += 'Fizz';
//     if (n % 5 == 0) output += 'Buzz';
//     console.log(output || n);
// }

// // Шахматная доска

// let board = '';
// let size = 8;

// for (let i = 0; i <= size; i++) {
//     for (let j = 0; j <= size; j++)
//     if ((i + j) % 2 == 0) {
//         board += ' ';
//     }
        
//     else {
//         board += '#'
//         }
//         board += '\n';
// }

// console.log(board)

// functions
const square = function (x) {
    return x * x;
};

console.log(square(3)); 

const noise = function () {
    console.log('eeee booooi')
}
// make some moise
noise(); 

const power = function (base, exponent) {
    let result = 1; 
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power(5, 10)); // 5 в 10 степени

