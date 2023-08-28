function digitMaker() {
    
    for (i=9; i>=0; i--) {
    let digitButton = document.createElement("button");
    digitButton.innerText = i;
    digitButton.classList.add('button')
    digitButton.classList.add(i)
    document.getElementById('button-box').appendChild(digitButton);
}}

digitMaker();
