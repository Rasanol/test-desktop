// 1. Import the code you want to test
const { add } = require('./calculator');

// 2. Group related tests together using a describe block
describe('Calculator Utility Tests', () => {

  // Test Case 1: Checking simple addition
  test('should correctly add two positive numbers', () => {
    const result = add(2, 3);
    
    // An assertion checking if the output matches our expectation
    expect(result).toBe(5);
  });

  // Test Case 2: Checking negative numbers
  test('should correctly add negative numbers', () => {
    expect(add(-1, -1)).toBe(-2);
  });

});
