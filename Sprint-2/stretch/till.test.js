const totalTill = require("./till.js");

describe("totalTill()", () => {
  test("returns the total amount in pounds as a formatted string", () => {
    const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
    const result = totalTill(till);

    expect(result).toEqual("£4.40");
  });
  test("ignore 0 or string, returns the total amount in pounds as a formatted string", () => {
    const till = {
  "1p": 0,
  "5p": 6,
  "50p": '4',
  "20p": 10,
};
    const result = totalTill(till);

    expect(result).toEqual("£4.30");
  });
});