const invert = require("./invert.js");

test("swaps keys and values", () => {
    const input = {a : 1, b : 2};
    const target = {"1" : "a", "2" : "b"};
    expect(invert(input)).toEqual(target);
});


test("works with string values", () => {
    const input = {weather : "snowy", temp : "cold"};
    const target = {snowy : "weather", cold : "temp"};
    expect(invert(input)).toEqual(target);
});