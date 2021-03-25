// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, minus, multiply, divide, toNumber } from '../calculator.js';

const test = QUnit.test;



test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('subtract function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 9;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = minus(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 11;
    const y = 2;
    const expected = 22;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divide function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 22;
    const y = 2;
    const expected = 11;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('0 divided by 0 returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 0;
    const y = 0;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('toNumber', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('empty string returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    const input = document.createElement('input');
    input.value = '';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});