import React, { useState, useRef } from 'react';

const Radius = () => {
  const [radius, setRadius] = useState('');
  const [area, setArea] = useState('');
  const radiusInputRef = useRef(null);

  const calculateArea = () => {
    const enteredRadius = parseFloat(radiusInputRef.current.value);

    if (!isNaN(enteredRadius) && enteredRadius >= 0) {
      const calculatedArea = Math.PI * Math.pow(enteredRadius, 2);
      setArea(calculatedArea.toFixed(2));
    } else {
      setArea('Please enter a valid radius.');
    }
  };

  return (
    <div className='home-component-page'>
      <h2>Calculate the Area of a Circle</h2>
      <input
        type="text"
        ref={radiusInputRef}
        placeholder="Enter the radius of the circle"
      />
      <button onClick={calculateArea}>Calculate Area</button>
      <p>Area of the Circle: {area} square units</p>
    </div>
  );
};

export default Radius;
