import React, { useState } from 'react';

const FirstProjectCom = () => {
    const [word, setWord] = useState("");
    const [wordLength, setWordLength] = useState(null);

    const handleWordChange = (e) => {
        setWord(e.target.value);
    }

    const handleShowCount = () => {
        setWordLength(word.length);
    }

    return (
        <div className='project-first-component-page'>
            <h3>Count Word Length</h3>
            <input
                type="text"
                value={word}
                onChange={handleWordChange}
                placeholder="Enter a word"
            />
            <button onClick={handleShowCount}>Click to show length</button>
            {wordLength !== null && (
                <h4>Word Length: {wordLength}</h4>
            )}
        </div>
    );
};

export default FirstProjectCom;







