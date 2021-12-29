import React from 'react';
import styles from './main.module.scss';
import Input from '../Input/Input';
import CardList from '../CardList/CardList';

const Main = () => {
    return (
        <div className={styles.mainBackground}>

            <div className={styles.main}>

                <Input />

                <CardList/>  

            </div>

        </div>
    );
}

export default Main;
