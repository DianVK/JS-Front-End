function simpleCalculator(numOne, numTwo, operator) {
  let result;
  switch (operator) {
    case 'multiply':
      result = numOne * numTwo;
      break;
    case 'divide':
      result = numOne / numTwo;
      break;
    case 'add':
      result = numOne + numTwo;
      break;
    case 'subtract':
      result = numOne - numTwo;
      break;
    default:
      console.log('Invalid operator');
  }
  console.log(result)
}

simpleCalculator(5, 5, 'multiply');

// function simpleCalculator(numOne, numTwo, operator) {
    
//     const calculator = (numOne, numTwo, operator) => ({
//       'multiply': numOne * numTwo,
//       'divide': numOne / numTwo,
//       'add': numOne + numTwo,
//       'subtract': numOne - numTwo,
//     })[operator];
  
//     const result = calculator(numOne, numTwo, operator);
//     console.log(result);
//   }