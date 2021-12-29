import React from 'react';
import styles from './cardList.module.scss';
import Card from '../Card/Card';



const CardList = () => {
    return (
        <div className={styles.cardList}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardList;
