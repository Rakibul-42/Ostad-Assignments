import React, { useState, useRef, useEffect } from 'react';

const PositiveNegative = () => {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(null);
  const numberInputRef = useRef(null);

  const checkNumber = () => {
    const enteredNumber = parseFloat(numberInputRef.current.value);

    if (!isNaN(enteredNumber)) {
      setNumber(enteredNumber);

      if (enteredNumber > 0) {
        setResult('Positive');
      } else if (enteredNumber < 0) {
        setResult('Negative');
      } else {
        setResult('Zero');
      }
    } else {
      setResult('Please enter a valid number.');
    }
  };

  return (
    <div className='home-component-page'>
      <h2>Check Positive, Negative, or Zero</h2>
      <input
        type="text"
        ref={numberInputRef}
        placeholder="Enter a number"
      />
      <button onClick={checkNumber}>Check</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default PositiveNegative;


