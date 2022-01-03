import React, { memo } from 'react';
import { useWeather } from 'components/hooks/useWeather'; //custom hook

import styles from './card.module.scss';


export const Card = memo(({ city, dispatch }) => {
    const data = useWeather(city);

    if (!data) return null; //if data is empty, skip render
    const { name, weather, main } = data; //destructurize object to get info for display at card
    const { description, icon } = weather[0]; //from array (API))
    const { temp, humidity, feels_like } = main;

    // current date
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

    const handleOnClick = () => {
        dispatch({
            type: 'DELETE_CITY', 
            payload: city,
        })
    }

    return (
        <div className={styles.card}>

            <div className={styles.actionButton}>
                <button className={styles.deleteCity} onClick={handleOnClick}>X</button>
            </div>

            <div className={styles.mainInfo}>
                <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt='Weather type' className={styles.icon} />
                <div className={styles.title}>{name}</div>
                <div className={styles.date}>{date}</div>
                <div className={styles.temperature}>{temp.toFixed()}°C</div>
                <div>{description}</div>
                <div>-----------------------</div>
            </div>

            <div className={styles.information}>
                <div>Humidity: {humidity}%</div>
                <div>Feels like: {feels_like}°C</div>
            </div>

        </div>
    );
})


