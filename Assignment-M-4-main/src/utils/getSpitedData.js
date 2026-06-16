const getSpitedData = (data) => {
  let LeftSideData = [];
  let rightSideData = [];

  if (data) {
    const originalArray = data || [];

    for (let i = 0; i < originalArray.length; i++) {
      if (i % 2 === 0) {
        LeftSideData.push(originalArray[i]);
      } else rightSideData.push(originalArray[i]);
    }
  }
  return { LeftSideData, rightSideData };
};

export { getSpitedData };
