let digits = document.querySelectorAll('.digits')
const display = document.querySelector('.display')

console.log(display)
// for (let i=0; i<digits.length; i++) {
//     digits[i] = document.querySelector(`.btn${i}`)
//     digits[i].addEventListener('click',()=> { console.log(digits[i].innerText)})
// }

digits.forEach((digit) => {
    digit.addEventListener('click', () => {display.innerText = digit.innerText})
})

