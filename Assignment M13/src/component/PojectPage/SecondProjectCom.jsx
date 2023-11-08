import React, { useState } from 'react';

const SecondProjectCom = () => {
    const [number, setNumber] = useState(0);
    const [result, setResult] = useState('');

    const handleButtonClick = () => {
        if (number % 2 === 0) {
            setResult('Even');
        } else {
            setResult('Odd');
        }
    }

    return (
        <div className='project-first-component-page'>
            <h3>Find Even or Odd</h3>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                placeholder="Enter a number"
            />
            <button onClick={handleButtonClick}>Check Odd/Even</button>
            {result && <h4>The number is {result}</h4>}
        </div>
    );
};

export default SecondProjectCom;

