import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()

    // if you are a cloner, i recommend using your own api key from newspi
    const apiKey = "87b7a05270c54720a343ed0e7943dcd1";

    //once we get response from newsapi, map api endpoints to 'data'
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
            .then((response) => setData(response.data))
            .catch(error => console.log(error));
    }, [data]);

    return (
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};