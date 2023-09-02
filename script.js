let digits = document.querySelectorAll('.digits')
const display = document.querySelector('.display')
const additionButton = document.querySelector('.addition')
const subtractButton = document.querySelector('.subtraction')
const multiplyButton = document.querySelector('.multiplier')
const divisionButton = document.querySelector('.divider')
const equalButton = document.querySelector('.eql')
display.innerText = "";

function addition(a,b) {
    console.log(a+b);
}

function operate(a,b,operataion) {
    operataion(a,b)
}

let result = operate(6,9, addition)


digits.forEach((digit) => {
    digit.addEventListener('click', () => {display.innerText += parseInt(digit.innerText)})
})

additionButton.addEventListener('click', () => {display.innerText += additionButton.innerText})

equalButton.addEventListener('click', () => {
    console.log(display.innerText)
})

console.log(typeof(digits.innerText))




