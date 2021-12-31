import { useState, useEffect } from 'react';

import { API_KEY } from 'settings'; //API


export const useWeather = (city) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(json => setData(json)); // .then(setData)             
    }, [city]);

    return data;
}