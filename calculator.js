// get variables from DOM
const numberButtons = document.querySelectorAll('.button-number');
const operationButtons = document.querySelectorAll('.button-operate');
const equalsButton = document.querySelector('#equals');
const previousNumberTextElement = document.querySelector('.previous-number');
const operandTextElement = document.querySelector('.previous-operand');
const currentNumberTextElement = document.querySelector('.current-number');

//computational functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function sum(sumArray) { return sumArray.reduce(function (a, b) { return a + b; }, 0); }
function multiply(multiplyArray) { return multiplyArray.reduce((a, b) => a * b); }
function divide(divideArray) { return divideArray.reduce((a, b) => a / b); }

// press functions
function numberPress(e) {
    let num = e.target.innerHTML;
    let pushElement = currentNumberTextElement;
    if (pushElement.innerHTML==0) {pushElement.textContent=num}
    else { pushElement.textContent+=num; }
}

function operandPress(e) {
    console.log((previousNumberTextElement.textContent==''));
    let operand = e.target.innerHTML;
    previousNumberTextElement.textContent = currentNumberTextElement.textContent;
    operandTextElement.textContent = operand;
    currentNumberTextElement.textContent = "0"
}