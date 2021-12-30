import React from 'react';
import styles from './cardList.module.scss';
import { Card } from '../Card/Card';

const citiesList = ['New York', 'Kyiv', 'Vancouver', 'London', 'Lviv'];

export const CardList = () => {

    return (
        <div className={styles.cardList}>
            {
                citiesList.map(city => <Card key = {city} city = {city} />)
            }                  
        </div>
    );
}


