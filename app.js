// Password Generator

// Character Generator Function

//Function that accepts a string value as an argument and returns a random index number from the string argument
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}

// Example of the randomIndex function
console.log(randomIndex(`chicken`)); // 0,1,2,3,4,5,6


// Function that returns a random lowercase letter using randomIndex in the "letters" string
function getRandomLower(){
    const letters = `abcdefghijklmnopqrstuvwxyz`;

    // Returning a random letter by using randomIndex
    return letters[randomIndex(letters)];
}
// Example of getRandomLower
console.log(getRandomLower());

// Function that returns a random uppercase letter using randomIndex in the "letters" string
function getRandomUpper(){
    // Running the getRandomLower function to create a random lowercase letter and then changing the letter to uppercase
    return getRandomLower().toUpperCase();
}

console.log(getRandomUpper());

// Function that returns a random number (AKA Random number as a string value)
function getRandomNumber(){
    const numbers = `1234567890`;
    // Returning a random number using a random index from the "numbers" string
    return numbers[randomIndex(numbers)];
}
  
// Example of the getRandomNumber function
console.log(getRandomNumber()); // Random number from the "numbers" string

// Function that returns a random symbol
function getRandomSymbol(){
    const symbols = `!@#$%^&*(){}[]=<>/,.`;
    // Returning a random symbol using a random index from the "symbols" string
    return symbols[randomIndex(symbols)];
}
  
// Example of the getRandomSymbol function
console.log(getRandomSymbol()); // Random symbol from the "symbols" string


// Selecting the DOM Elements
const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#length`);
const generateEl = document.querySelector(`#generate`);

