// import functions and grab DOM elements
import { add, minus, multiply, divide, toNumber } from './calculator.js';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const buttonPlus = document.getElementById('button-add');
const result1 = document.getElementById('result1');



buttonPlus.addEventListener('click', () => {
    const x = toNumber(input1);    
    const y = toNumber(input2);
    const sum = add(x, y);
    result1.textContent = sum; 
    input1.value = '';
    input2.value = '';
});


const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4');
const buttonMinus = document.getElementById('button-subtract');
const result2 = document.getElementById('result2');

buttonMinus.addEventListener('click', () => {
    const x = toNumber(input3);
    const y = toNumber(input4);
    const sum = minus(x, y);
    result2.textContent = sum;
    input3.value = '';
    input4.value = ''; 
});

const input5 = document.getElementById('input5');
const input6 = document.getElementById('input6');
const buttonTimes = document.getElementById('button-multiply');
const result3 = document.getElementById('result3');

buttonTimes.addEventListener('click', () => {
    const x = toNumber(input5);
    const y = toNumber(input6);
    const sum = multiply(x, y);
    result3.textContent = sum;
    input5.value = '';
    input6.value = ''; 
});

const input7 = document.getElementById('input7');
const input8 = document.getElementById('input8');
const buttonDivide = document.getElementById('button-divide');
const result4 = document.getElementById('result4');

buttonDivide.addEventListener('click', () => {
    const x = toNumber(input7);
    const y = toNumber(input8);
    const sum = divide(x, y);
    result4.textContent = sum;
    input7.value = '';
    input8.value = '';
})
// initialize state

// set event listeners to update state and DOM