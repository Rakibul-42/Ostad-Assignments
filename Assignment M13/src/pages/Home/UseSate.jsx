import React, { useState } from 'react';

const UseSate = () => {
    const [counter, setCounter] = useState(1);

    let number = counter;
    const increase = () => {
        number++;
        setCounter(number);
    };

    const decrease = () => {
        number--;
        setCounter(number);
    };
    return (
        <>
            <div className='flex items-center'>
                <div className='flex items-center'>
                    <p>We are setting up a counter using useState:</p>
                    <div className='flex font-bold text-xl w-16 justify-between border-2 border-black m-4 p-2'>
                        <button onClick={increase}>+</button>
                        <p>{counter}</p>
                        <button onClick={decrease}>-</button>
                    </div>
                </div>


            </div>
        </>
    );
};

export default UseSate;