import React from 'react';
import styles from './card.module.scss';

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.mainInfo}>
                <img src='https://openweathermap.org/img/wn/10d@2x.png' alt='Weather type' className={styles.icon}/>
                <div className={styles.title}>New York</div>
                <div className={styles.description}>Cloudy</div>
                <div className={styles.temperature}>----</div>
            </div>
            <div className={styles.information}>
                <div>Humidity: 15</div>
                <div>Feels like: 20</div>
            </div>
        </div>
    );
}

export default Card;
