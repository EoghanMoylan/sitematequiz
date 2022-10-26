let dialogValue;

function openDialogBox(displayDataOne, displayDataTwo, textDisplay) { 

    let dialogBox = document.getElementById("reusableDialog");
    dialogBox.open = true;

    let buttonOne = document.getElementById("buttonOne");
    let buttonTwo = document.getElementById("buttonTwo");
    let text = document.getElementById("dialogText");

    text.innerHTML = textDisplay;
    buttonOne.textContent = displayDataOne;
    buttonTwo.textContent = displayDataTwo;
}

function buttonClick(buttonId){
    let results = document.getElementById("ButtonResults");
    let dialogBox = document.getElementById("reusableDialog");
    let buttonPressed = document.getElementById(buttonId);

    dialogBox.open = false;

    results.innerHTML="You clicked " + buttonPressed.textContent;
}