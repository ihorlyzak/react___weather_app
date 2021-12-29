import React from 'react';
import styles from './input.module.scss';

const Input = () => {
    return (
        <div className={styles.inputWrap}>
            <input placeholder='Enter the city name' className={styles.input}></input>
            <button className={styles.button}>Add city</button>
        </div>
    );
}

export default Input;
