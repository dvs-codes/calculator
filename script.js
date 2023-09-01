let digits = document.querySelectorAll('.digits')

// for (let i=0; i<digits.length; i++) {
//     digits[i] = document.querySelector(`.btn${i}`)
//     digits[i].addEventListener('click',()=> { console.log(digits[i].innerText)})
// }

digits.forEach((digit) => {
    digit.addEventListener('click', () => { console.log(digit.innerText)})
})

