import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const ThirdProjectCom = () => {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [sum, setSum] = useState(null);
    const { paramNumber1, paramNumber2 } = useParams();
    const number1Ref = useRef(null);
    const number2Ref = useRef(null);

    const handleSum = () => {
        const inputNumber1 = parseInt(number1Ref.current.value);
        const inputNumber2 = parseInt(number2Ref.current.value);
        setNumber1(inputNumber1);
        setNumber2(inputNumber2);
        setSum(inputNumber1 + inputNumber2);
    }

    return (
        <div className='project-first-component-page'>
            <h3>Summation</h3>
            <input
                type="number"
                ref={number1Ref}
                defaultValue={paramNumber1 || number1}
            />
            <input
                type="number"
                ref={number2Ref}
                defaultValue={paramNumber2 || number2}
            />
            <button onClick={handleSum}>Calculate Sum</button>
            {sum !== null && <h4>Sum: {sum}</h4>}
        </div>
    );
};

export default ThirdProjectCom;
