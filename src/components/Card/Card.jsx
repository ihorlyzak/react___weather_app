import React, { useEffect, useState } from 'react';
import { API_KEY } from 'settings'; //API

import styles from './card.module.scss';


export const Card = ({ city }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(res => res.json())
            .then(json => setData(json)) // .then(setData) 
    }, []);

    if (!data) return null; //if data is empty, skip render
    const { name, weather, main } = data; //destructurize object to get info for display at card
    const { description, icon } = weather[0]; //from array (API))
    const { temp, humidity, feels_like } = main;

    return (
        <div className={styles.card}>
            <div className={styles.mainInfo}>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='Weather type' className={styles.icon} />
                <div className={styles.title}>{name}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.temperature}>{temp.toFixed()}</div>
            </div>
            <div className={styles.information}>
                <div>Humidity: {humidity}%</div>
                <div>Feels like: {feels_like}</div>
            </div>
        </div>
    );
}


