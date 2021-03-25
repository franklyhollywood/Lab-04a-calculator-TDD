// import functions and grab DOM elements
import { add, minus, multiply, divide, toNumber } from './calculator.js';

function calc(input1Id, input2Id, buttonId, displayId, operation) {
    const input1 = document.getElementById(input1Id);
    const input2 = document.getElementById(input2Id);
    const button = document.getElementById(buttonId);
    const resultDisplay = document.getElementById(displayId);

    button.addEventListener('click', () => {
        const x = toNumber(input1);    
        const y = toNumber(input2);
        const sum = operation(x, y);
        resultDisplay.textContent = sum; 
        input1.value = '';
        input2.value = '';
    });
}

calc('input1', 'input2', 'button-add', 'result1', add);
calc('input3', 'input4', 'button-subtract', 'result2', minus);
calc('input5', 'input6', 'button-multiply', 'result3', multiply);
calc('input7', 'input8', 'button-divide', 'result4', divide);