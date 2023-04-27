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

// Object that stores all character generator functions
const randomFunctions = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
}

// Selecting the DOM Elements
const resultEl = document.querySelector(`#result`);
const clipboardEl = document.querySelector(`#clipboard`);
const lowercaseEl = document.querySelector(`#lowercase`);
const uppercaseEl = document.querySelector(`#uppercase`);
const numbersEl = document.querySelector(`#numbers`);
const symbolsEl = document.querySelector(`#symbols`);
const lengthEl = document.querySelector(`#length`);
const generateEl = document.querySelector(`#generate`);

// Generate Password function (Function that accepts true or false values as well as a number arguments)
// NOTE: THe checkbox inputs and number (AKA length) input will determine the values/arguments entered into the function
function generatePassword(lower, upper, number, symbol, length){
    console.log(lower, upper, number, symbol, length);

    // 1. CREATE THE PASSWORD VARIABLE
    let generatedPassword = "";

    // 2. FILTER OUT UNCHECKED OPTIONS
    // True and False values can be added together (True = 1 and False = 0)
    // NOTE: These values set the typesCount variable will be used when building out the password
    const typesCount = lower + upper + number + symbol;
    
    // If the user does NOT select any of the four options, then the alert will be displayed and an empty string be returned so the password displayed to the user will be an empty string (AKA Nothing)
    if (typesCount === 0){
        alert(`Please select an option`);
        // the RETURN keyword stops/ends the execution of a function (AKA Does NOT run any of the lines of code that follow the return in the function)
        return ``;
    }

    // Creating an array of arrays. The first item in each nested array holds the value of a string that will be used to access a function in the randomFunctions object. Also, the second items in each nested array are the values passed into this generatePassword function
    let typesArr = [
        [`lower`, lower],
        [`upper`, upper],
        [`number`, number],
        [`symbol`, symbol]
    ]
    console.log(typesArr);

    // The filter method creates a new array will all the items that "pass the test" implemented by the provided function (AKA All the items that cause the function to return a TRUE value when the function is run using the item as the argument for the item parameter in this example)
    // Checking if the value for index of 1 in each item (AKA Array) in the typesArr array is true or false. Also, removing the item from the typesArr array if it is possible
    typesArr = typesArr.filter(item => {
        console.log(item[1]);
        return item[1];
    })
    console.log(typesArr);

    // 3. LOOP OVER THE LENGTH AND CALL THE GENERATOR FUNCTION FOR EACH CHECKED OPTION
    // Building password with a for loop
    // NOTE: The value for "length" is the value entered/selected for the length number input
    for (i = 0; i < length; i+= typesCount){

        // One of the items in the updated/filtered version of the typeArr array will be the value/argument passed in as the parameter each time the anonymous arrow function
        typesArr.forEach(type => {
            const funcName = type[0];
            console.log(funcName);

            // Accessing and running/executing a function in the randomFunctions object. Also, concatenating/adding the value returned from the accessed function to the generatedPassword string variable
            generatedPassword += randomFunctions[funcName]();
            console.log(generatedPassword);
        });
    }

    // 4. ADD GENERATED PASSWORD TO THE FINAL PASSWORD VARIABLE AND RETURN IT OUT OF THE FUNCTION
    // Removing extra characters if necessary (The above loop will create a password that may NOT match the length selected if that length is NOT a multiple of the number of options/checkboxes selected)
    const finalPassword = generatedPassword.slice(0, length);

    console.log(finalPassword);

    return finalPassword;
}

// Example of the generatePassword function
// NOTE: Using the starting values for when the page first loads
generatePassword(true, true, true, true, 5);