/* Find the maximum element of an array of numbers

In this kata, you will need to implement a function that find the largest numerical element of an array.

E.g. max([30, 50, 10, 40]), target output: 50
E.g. max(['hey', 10, 'hi', 60, 10]), target output: 60 (sum ignores any non-numerical elements)

You should implement this function in max.js, and add tests for it in this file.

We have set things up already so that this file can see your function from the other file.
*/

const findMax = require("./max.js");

// Given an empty array
// When passed to the max function
// Then it should return -Infinity
// Delete this test.todo and replace it with a test.
test("given an empty array, returns -Infinity", ()=> {
    const numbers = [];
    const currentOutput = findMax(numbers);
    const targetOutput = Infinity;

    expect(currentOutput).toEqual(targetOutput);
});

// Given an array with one number
// When passed to the max function
// Then it should return that number
test("given one numebr array, returns -the one number", ()=> {
    const numbers = [5];
    const currentOutput = findMax(numbers);
    const targetOutput = 5;

    expect(currentOutput).toEqual(targetOutput);
});


// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall
test("given both positive and negative numbers in an array, returns -the largest one", ()=> {
    const numbers = [5, -5];
    const currentOutput = findMax(numbers);
    const targetOutput = 5;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero
test("given an array with only negative numbers, returns -the closest one to zero", ()=> {
    const numbers = [-1, -2, -3, -4];
    const currentOutput = findMax(numbers);
    const targetOutput = -1;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number
test("given an array with decimal numbers, returns -the largest decimal number", ()=> {
    const numbers = [0.1, 0.2, 0.5];
    const currentOutput = findMax(numbers);
    const targetOutput = 0.5;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values
test("given an array with non-number values, returns -the max and ignore non-numeric values", ()=> {
    const numbers = ["banana", 50, 30, "mango", 10];
    const currentOutput = findMax(numbers);
    const targetOutput = 50;

    expect(currentOutput).toEqual(targetOutput);
});
// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs
test("given an array with only non-number values, returns -the least surprising value", ()=> {
    const numbers = ["banana", "mango", "pear"];
    const currentOutput = findMax(numbers);
    const targetOutput = Infinity;

    expect(currentOutput).toEqual(targetOutput);
});