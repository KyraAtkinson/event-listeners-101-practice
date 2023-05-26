// You now have a 3x3 grid. We want to configure this grid such that when the left 3 cells are clicked, the colors turn red, when the middle 3 cells are clicked, the color turns green, and when the last 3 cells are clicked, the color turns blue. 

// Write some JS code below such that event listeners are attached to all the correct elements following the specifications above.

// Hint: Some sort of loop may be helpful to you in this process!


let green = document.getElementsByClassName("grid-cell green")

for (let i = 0; i < green.length; i++){
    let currGreen = green[i];
    currGreen.addEventListener("click", function(){
        currGreen.style.backgroundColor = "green"
    })
}

let blue = document.getElementsByClassName("grid-cell blue")

for (let i = 0; i < blue.length; i++){
    let currBlue = blue[i];
    currBlue.addEventListener("click", function(){
        currBlue.style.backgroundColor = "blue"
    })
}



let red = document.getElementsByClassName("grid-cell red")

for (let i = 0; i < red.length; i++){
    let currRed = red[i];
    currRed.addEventListener("click", function() {
        currRed.style.backgroundColor = "red"
    })
}



