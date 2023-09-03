let digits = document.querySelectorAll('.digits')
const display = document.querySelector('.display')
const additionButton = document.querySelector('.addition')
const subtractButton = document.querySelector('.subtraction')
const multiplyButton = document.querySelector('.multiplier')
const divisionButton = document.querySelector('.divider')
const equalButton = document.querySelector('.eql')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
display.innerText = "";

let firstNumber = "";
let secondNumber = "";
let operator ="";


digits.forEach((digit) => {
    digit.addEventListener('click', () => {
    display.innerText += digit.innerText
    //if operator is not present than digit should be firstNumber, else it should be secondNumber
    if (!operator) {
        firstNumber += digit.innerText
    } else {
        secondNumber += digit.innerText
    }
    if (display.innerText.length > 13) {
        
    }
    console.log(firstNumber)
    console.log(secondNumber)

})
})

function deleteNumber () {
    display.innerText = display.innerText.slice(0,-1);
    firstNumber = display.innerText
}

function clearScreen () {
    display.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator ="";
}

function addition() {
    if (!operator) {
        display.innerText += additionButton.innerText;
        operator = "+";
    }
}

function subtraction() {
    if (!operator) {
    display.innerText += subtractButton.innerText;
    operator = "-";
    }
}

function multiplier() {
    if (!operator) {display.innerText += multiplyButton.innerText;
    operator = "x"
    }
}

function divider() {
    if (!operator) {display.innerText += divisionButton.innerText;
    operator = "÷"
    }
}

function operate() {
    switch(operator) {
        case "+":
            display.innerText = parseInt(firstNumber) + parseInt(secondNumber);
            firstNumber = display.innerText;
            secondNumber = "";
            operator ="";
            break;
        case "-":
            display.innerText = parseInt(firstNumber) - parseInt(secondNumber);
            firstNumber = display.innerText;
            secondNumber = "";
            operator ="";
            break;
        case "x":
            display.innerText = parseInt(firstNumber) * parseInt(secondNumber);
            firstNumber = display.innerText;
            secondNumber = "";
            operator ="";
            break;
        case "÷":
            display.innerText = parseInt(firstNumber) / parseInt(secondNumber);
            firstNumber = display.innerText;
            secondNumber = "";
            operator ="";
            break;
    }
}

deleteButton.addEventListener('click', deleteNumber)
clearButton.addEventListener('click', clearScreen)
additionButton.addEventListener('click', addition)
subtractButton.addEventListener('click', subtraction)
multiplyButton.addEventListener('click', multiplier)
divisionButton.addEventListener('click', divider)
equalButton.addEventListener('click', operate)






