import { useEffect, useState } from "react";

const useNewsQuery = (url) => {

    const [data, setData] = useState([]);

    const fetchNewsData = async (urlToFetch) => {

        const response = await fetch(urlToFetch);
        const resData = await response.json();

        return resData;
    };
    useEffect(() => {

        const getNewsData = async () => {

            const resData = await fetchNewsData(url);
            setData(resData);

        }

        getNewsData();

    }, [url])
    return data;
};

export default useNewsQuery;