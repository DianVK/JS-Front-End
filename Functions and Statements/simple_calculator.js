function simpleCalculator(numOne, numTwo, operator) {
    
    const calculator = (numOne, numTwo, operator) => ({
      'multiply': numOne * numTwo,
      'divide': numOne / numTwo,
      'add': numOne + numTwo,
      'subtract': numOne - numTwo,
    })[operator];
  
    const result = calculator(numOne, numTwo, operator);
    console.log(result);
  }
  
  simpleCalculator(5, 5, 'multiply');