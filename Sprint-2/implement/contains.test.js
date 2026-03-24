const contains = require("./contains.js");

/*
Implement a function called contains that checks an object contains a
particular property

E.g. contains({a: 1, b: 2}, 'a') // returns true
as the object contains a key of 'a'

E.g. contains({a: 1, b: 2}, 'c') // returns false
as the object doesn't contains a key of 'c'
*/

// Acceptance criteria:

// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise

// Given an empty object
// When passed to contains
// Then it should return false

test("contains on empty object returns false", () => {
    const obejct = {

    };
    const result = contains(obejct, 'anyProperty');
    expect(result).toEqual(false);
});

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true

test("An object with properties, returns true when passes with an existing property name", () => {
    const obejct = {
        a : 1,
        b : 2,
        c : 3
    };
    const result = contains(obejct, 'a');
    expect(result).toEqual(true);
});

// When passed to contains with a non-existent property name
// Then it should return false
test("An object with properties, returns false when passes with a non-existent property name", () => {
    const obejct = {
        a : 1,
        b : 2,
        c : 3
    };
    const result = contains(obejct, 'd');
    expect(result).toEqual(false);
});
// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
test("An invalid parameters like an array, returns false when passes with contains", () => {
    const obejct = [1, 2, "summer"];
    const result = contains(obejct, '1');
    expect(result).toEqual(false);
});