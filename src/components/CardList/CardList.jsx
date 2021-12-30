import React from 'react';
import styles from './cardList.module.scss';
// import styles from 'components/cardList.module.scss';
import Card from '../Card/Card';
// import Card from 'components/Card/Card';


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
