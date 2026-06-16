import React, { useRef } from 'react';

const UseRef = () => {
    const blueColor = useRef(null);

    const colorChange = () => {
        if (blueColor.current) {
            blueColor.current.classList.add('bg-orange-400', 'text-blue-50');
            blueColor.current.classList.remove('bg-green-500');
        }
    };
    return (
        <>
            <div ref={blueColor} className='bg-green-500 p-1'>
                    <p>We can change the div background color using useRef</p>
                    <button onClick={colorChange} className="btn">Change Color</button>
                </div>
        </>
    );
};

export default UseRef;