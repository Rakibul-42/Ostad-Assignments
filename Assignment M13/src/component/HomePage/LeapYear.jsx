import React, { useState, useRef, useEffect } from 'react';

const LeapYear = () => {
  const [inputYear, setInputYear] = useState('');
  const [result, setResult] = useState('');

  const yearInputRef = useRef(null);

  const checkLeapYear = () => {
    const enteredYear = parseInt(yearInputRef.current.value);

    if (!isNaN(enteredYear)) {
      if ((enteredYear % 400 === 0) || (enteredYear % 4 === 0 && enteredYear % 100 !== 0)) {
        setResult(`${enteredYear} is a leap year.`);
      } else {
        setResult(`${enteredYear} is not a leap year.`);
      }
    } else {
      setResult('Please enter a valid year.');
    }
  };

  return (
    <div className='home-component-page'>
      <h2>Check if a Year is a Leap Year</h2>
      <input
        type="text"
        ref={yearInputRef}
        placeholder="Enter a year"
      />
      <button onClick={checkLeapYear}>Check</button>
      <p>{result}</p>
    </div>
  );
};

export default LeapYear;
