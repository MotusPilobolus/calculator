// get variables from DOM
const numberButtons = document.querySelectorAll('.button-number');
const operationButtons = document.querySelectorAll('.button-operate');
const equalsButton = document.querySelector('#equals');
const previousNumberTextElement = document.querySelector('.previous-number');
const operandTextElement = document.querySelector('.previous-operand');
const currentNumberTextElement = document.querySelector('.current-number');
var operand;
var answer = ''

//computational functions
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
// function sum(sumArray) { return sumArray.reduce(function (a, b) { return a + b; }, 0); }
// function multiplyArray(multiplyArray) { return multiplyArray.reduce((a, b) => a * b); }
// function divideArray(divideArray) { return divideArray.reduce((a, b) => a / b); }

// press functions
function numberPress(e) {
    let num = e.target.innerHTML;
    let pushElement = currentNumberTextElement;
    if (pushElement.innerHTML==0) {pushElement.textContent=num}
    else { pushElement.textContent+=num; }
}

function operandPress(e) {
    operand = e.target.innerHTML;
    if (previousNumberTextElement.textContent !== '' && currentNumberTextElement.textContent !== '') {
        let a = parseInt(previousNumberTextElement.textContent);
        let b = parseInt(currentNumberTextElement.textContent);
        actualMath(a, b)
        operandTextElement.textContent = operand;
        previousNumberTextElement.textContent = answer;
        currentNumberTextElement.textContent = '';
    }
    else {
    previousNumberTextElement.textContent = currentNumberTextElement.textContent;
    operandTextElement.textContent = operand;
    currentNumberTextElement.textContent = 0; }
}

function actualMath(a, b) {
    switch(operand) {
        case '+':
            answer = add(a, b);
            break;
         case '-':
            answer = subtract(a, b);
             break;
         case 'x':
             answer = multiply(a, b);
             break;
         case '/':
             answer = divide(a, b);
             break;
         default:
          console.log('error')
    }  
}

function equalsPress(e) {
    let a = parseInt(previousNumberTextElement.textContent);
    let b = parseInt(currentNumberTextElement.textContent);
  actualMath(a, b)
  currentNumberTextElement.textContent = answer;
  operandTextElement.textContent = ''
  previousNumberTextElement.textContent = '';
}