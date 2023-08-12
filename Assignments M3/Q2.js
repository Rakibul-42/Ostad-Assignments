const findMaxNumber = numbers => {
    if (numbers.length === 0) {
      return null;
    }
  
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    return max;
  }
  
  const numbers1 = [12, 32, 51, 23, 92];
  console.log(findMaxNumber(numbers1));
  
  const numbers2 = [2, 9, 16];
  console.log(findMaxNumber(numbers2));
  
  const emptyArray = [];
  console.log(findMaxNumber(emptyArray));
  