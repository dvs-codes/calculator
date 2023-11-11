const digits = document.querySelectorAll('.digits')
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
    
    digit.addEventListener('click',() => {

    if (display.innerText.length<9)
    ///this code limits the numbers that can be enterd in the calculator display
    {display.innerText += digit.innerText
    //if operator is not present than digit should be firstNumber, else it should be secondNumber
    
    if (!operator) {
        firstNumber += digit.innerText
    } else {
        secondNumber += digit.innerText
    }}



    console.log(`f:${firstNumber}`)
    console.log(`S:${secondNumber}`)
    console.log(`o:${operator}`)
    if (display.innerText === "9099950451") {
        alert("Suraj weds Avani")
    }

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
    if (!operator && firstNumber) {
        display.innerText += additionButton.innerText;
        operator = "+";
    }
}

function subtraction() {
    if (!operator && firstNumber) {
    display.innerText += subtractButton.innerText;
    operator = "-";
    }
}

function multiplier() {
    if (!operator && firstNumber) {
    display.innerText += multiplyButton.innerText;
    operator = "x"
    }
}

function divider() {
    if (!operator && firstNumber) {
    display.innerText += divisionButton.innerText;
    operator = "÷"
    }
}

function operate() {
    if (firstNumber && secondNumber && operator) {
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
            if(secondNumber!=="0") {
                display.innerText = parseInt(firstNumber) / parseInt(secondNumber);
                firstNumber = display.innerText;
                secondNumber = "";
                operator ="";   
            } else {
                alert("Mate thats not possible")
                display.innerText = "";
                firstNumber = "";
                secondNumber = "";
                operator ="";
            }
    }}
}

deleteButton.addEventListener('click', deleteNumber)
clearButton.addEventListener('click', clearScreen)
additionButton.addEventListener('click', addition)
subtractButton.addEventListener('click', subtraction)
multiplyButton.addEventListener('click', multiplier)
divisionButton.addEventListener('click', divider)
equalButton.addEventListener('click', operate)

window.addEventListener("keydown", (event) => {
    console.log(`K:${event.key}`)
    switch(event.key){

        case "Backspace":
            deleteNumber() 
            break;
        case "Escape":
            clearScreen()
            break; 
        case "+":
            addition()
            break;
        case "-":
            subtraction()
            break;
        case "*":
            multiplier()
            break;
        case "/":
            divider()
            break;
        case "Enter":
            operate()
            break;
    }


    console.log(`f:${firstNumber}`)
    console.log(`S:${secondNumber}`)
    console.log(`o:${operator}`)
})




