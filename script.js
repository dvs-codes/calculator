let digits = document.querySelectorAll('.digits')
const display = document.querySelector('.display')
const additionButton = document.querySelector('.addition')
const subtractButton = document.querySelector('.subtraction')
const multiplyButton = document.querySelector('.multiplier')
const divisionButton = document.querySelector('.divider')
const equalButton = document.querySelector('.eql')
const clearButton = document.querySelector('.clear')
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
    console.log(firstNumber)
    console.log(secondNumber)

})
})



clearButton.addEventListener('click', () => {
    display.innerText = "";
    firstNumber = "";
    secondNumber = "";
    operator ="";
})

additionButton.addEventListener('click', () => {
    display.innerText += additionButton.innerText;
    operator = "+"
})

subtractButton.addEventListener('click', () => {
    display.innerText += subtractButton.innerText;
    operator = "-"
})

multiplyButton.addEventListener('click', () => {
    display.innerText += multiplyButton.innerText;
    operator = "x"
})

divisionButton.addEventListener('click', () => {
    display.innerText += divisionButton.innerText;
    operator = "÷"
})

equalButton.addEventListener('click', () => {
    if (operator === "+") {
        display.innerText = parseInt(firstNumber) + parseInt(secondNumber);
        firstNumber = display.innerText;
        secondNumber = "";
        operator ="";
    }
})






