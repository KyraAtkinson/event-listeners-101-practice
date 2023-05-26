// Something that's important to be aware of is that you can set multiple event listeners on the same element. We'll practice that in this exercise.

// First, we have the #cell-one element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will turn the background color to green.
    // 2) An event listener that, when the element is double-clicked, will turn the background color to blue. 

    let eventListenerOne = document.getElementById("cell-one")

 eventListenerOne.addEventListener("click", function(){
eventListenerOne.style.backgroundColor = "green"
 })

 eventListenerOne.addEventListener("dblclick", function(){
    eventListenerOne.style.backgroundColor = "blue"
 })

// Next, we'll target the #cell-two element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is hovered over, will turn the border into a green, 2px width, and solidly-lined border. 
    // 2) An event listener that, when the user removes their mouse from over the element, will turn the border back into a black, 2 px width, and solidly-lined border.  

    let eventListenerTwo = document.getElementById("cell-two")

    eventListenerTwo.addEventListener("mouseover", function(){
        eventListenerTwo.style.border = "2px solid green"
         })
        
         eventListenerTwo.addEventListener("mouseout", function(){
            eventListenerTwo.style.border = "2px solid black"
         })

// Lastly, we'll target the #cell-three element. We will give two event listeners to this element:
    // 1) An event listener that, when the element is clicked, will fill the element with a text of "Stop clicking me!"
    // 2) An event listener that, when the element is right-clicked, will fill the element with a text of "No right clicking either!!"

    let eventListenerThree = document.getElementById("cell-three")

    eventListenerThree.addEventListener("click", function(){
        eventListenerThree.innerText = "Stop clicking me!"
         })
        
         eventListenerThree.addEventListener("mouseright", function(){
            eventListenerThree.innerText = "No right clicking either!!"
         })