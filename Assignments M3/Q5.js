const doubleNumbers = numbers => {
    const doubledArray = numbers.map(number => number * 2);
    return doubledArray;
  }
  
  const numbers = [1, 2, 4, 8, 16];
  console.log(doubleNumbers(numbers));