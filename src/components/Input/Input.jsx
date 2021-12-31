import React, { useState, useRef } from 'react';

import styles from './input.module.scss';


export const Input = ({ setCitiesList }) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleOnClick = () => {
        if (inputValue !== '') { //no add for empty input
            setCitiesList((currentArray) => [...currentArray, inputValue])
        } else (
            alert('Aghh.. Imput is empty. Enter the city name please')
        )

        setInputValue(''); // cleans form

        inputRef.current.focus(); // focus will not disappear from the form
    }

    const handleOnChange = (e) => {
        setInputValue(e.target.value); //changing state by using e.target.value        
    }

    return (
        <div className={styles.inputWrap}>
            <input placeholder='Enter the name of the decired city' value={inputValue} className={styles.input} onChange={handleOnChange} ref={inputRef} />
            <button onClick={handleOnClick} className={styles.button}>Add city</button>
        </div>
    )
}
