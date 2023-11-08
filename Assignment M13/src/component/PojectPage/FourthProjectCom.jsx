import React, { useState } from 'react';

const FourthProjectCom = () => {
    const [number, setNumber] = useState("");
    const [reversedNumber, setReversedNumber] = useState("");
    
    const handleSwap = () => {
        const reversed = number
            .toString()
            .split('')
            .reverse()
            .join('');
        setReversedNumber(reversed);
    }

    return (
        <div className='project-first-component-page'>
            <h3>Swap Numbers</h3>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter a number"
            />
            <button onClick={handleSwap}>Swap Digits</button>
            {reversedNumber && <h4>Swapped Number: {reversedNumber}</h4>}
        </div>
    );
};

export default FourthProjectCom;


