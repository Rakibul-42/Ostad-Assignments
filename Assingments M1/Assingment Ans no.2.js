function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  const originalArray = [12, 34, 45, 23, 6, 78, 54, 90];
  const filteredEvenNumbers = filterEvenNumbers(originalArray);
  
  console.log("Original Array: " + (originalArray));
  console.log("Filtered Even Numbers: " + (filteredEvenNumbers));