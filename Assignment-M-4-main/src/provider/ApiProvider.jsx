
import { useState } from 'react';
import { apiContext } from '../context';

const ApiProvider = ({ children }) => {
    const [api, setApi] = useState('http://localhost:8000/v2/top-headlines');

    return (
        <apiContext.Provider value={{ api, setApi }}>
            {children}
        </apiContext.Provider>
    );
};

export default ApiProvider;
