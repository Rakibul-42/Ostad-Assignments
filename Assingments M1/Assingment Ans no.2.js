function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  const originalArray = [11, 36, 44, 23, 1066, 72, 54, 98];
  const filteredEvenNumbers = filterEvenNumbers(originalArray);
  
  console.log("Original Array: " + (originalArray));
  console.log("Filtered Even Numbers: " + (filteredEvenNumbers));
