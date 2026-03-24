// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    const coinValue = parseInt(coin);
    total += coinValue * quantity;
  }

  return `£${(total / 100).toFixed(2)}`;
}

module.exports = totalTill;

// a) What is the target output when totalTill is called with the till object
    //Coverted till object to {"1p" : £0.1, "5p" : £0.3, "50p" : £2, "20p" : £2}.
// b) Why do we need to use Object.entries inside the for...of loop in this function?
    //Object.entries converts the object into an array format that the for...of loop understands. 
// c) What does coin * quantity evaluate to inside the for...of loop?
    //It evaluates the object till's property key and value, for example, which are "1p" and 10.
// d) Write a test for this function to check it works and then fix the implementation of totalTill
