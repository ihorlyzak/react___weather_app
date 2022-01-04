
import { useState, useEffect } from 'react';

import { API_KEY } from 'settings'; //API


export const useWeather = (city) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then((fetchedData) => {
                if (fetchedData && fetchedData.cod && fetchedData.cod === '404') {
                    new Error('CITY_NOT_FOUND')
                } else {
                    setData(fetchedData);
                }
            })

            .catch((err) => {
                setData(null);
            });

    }, [city]);

    return data;
}