import { useState } from 'react';
import { newsDataContext } from '../context';

const NewsDataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    return (
        <newsDataContext.Provider value={{ data, setData }}>
            {children}
        </newsDataContext.Provider>
    );
};

export default NewsDataProvider;
