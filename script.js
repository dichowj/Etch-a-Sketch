
const containerDiv = document.querySelector('.container');
const resetButton = document.querySelector('.reset');
let userChoice = 16;




resetButton.addEventListener('click', function() {
    userPrompt();
});

//prompt the user for an input number, call a function to create the new grid with the user input
function userPrompt() {
    eraseGrid();
    let text = "";
    let userNumber = Number(prompt("Please enter a number between 1 and 100 to generate a new grid:", "16"));
    if (userNumber == null || userNumber<1 || isNaN(userNumber) || userNumber>100|| !Number.isInteger(userNumber)) {
        text = "Invalid entry, try again.";
    }
    else {
        text = `An Etch-A-Sketch with a grid of <strong>${userNumber}x${userNumber}</strong> has been constructed for your 
        for your pleasure.`;
        userChoice = userNumber; 
        userGrid(userChoice); 
    }
    document.getElementById("userText").innerHTML = text;
    return userChoice;
    
}

//write a function that builds a Div grid YxY
function userGrid (userChoice) {
    let totalDivs = userChoice * userChoice;
    for (let i=0; i<totalDivs; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.classList.add('gridDiv');
        let text = document.createTextNode("");
        gridDiv.appendChild(text);
        containerDiv.appendChild(gridDiv); 
        gridDiv.addEventListener('mouseover', whiteColors);  
    }
    containerDiv.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
}

function eraseGrid () {
    [...document.getElementsByClassName('gridDiv')].map(n => n && n.remove());         
}
                        // to use this, turn this function back on and replace the function name on the event listener on line 41
//function whiteBlack (e) {
//        e.target.style.backgroundColor = 'black';
//} 

function whiteColors (e) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#"+randomColor;
    document.querySelector('.pageTitle').style.color = "#"+randomColor;
    resetButton.style.backgroundColor = "#"+randomColor;
    containerDiv.style.border = "10px solid "+"#"+randomColor;
}

function fiftyShadesOfGrey (e) {    //the color change function that females across North America have been raving about
    //maybe come back to add this later, can't remember how to start it
}

userGrid(16);