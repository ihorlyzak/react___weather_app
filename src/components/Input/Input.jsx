import React, { useState } from 'react';

import styles from './input.module.scss';



export const Input = ({ setCitiesList }) => {
    const [inputValue, setInputValue] = useState('empty');

    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue])
    }

    const handleOnChange = (e) => {
        setInputValue(e.target.value); //changing state by using e.target.value
    }

    return (
        <div className={styles.inputWrap}>
            <input value={inputValue} className={styles.input} onChange={handleOnChange}></input>
            <button onClick={handleOnClick} className={styles.button}>Add city</button>
        </div>
    )
}