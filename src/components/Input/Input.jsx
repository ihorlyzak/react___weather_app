import React, { useState, useRef } from 'react';

import styles from './input.module.scss';



export const Input = ({ setCitiesList }) => {
    const [inputValue, setInputValue] = useState('empty');
    const inputRef = useRef(null);

    const handleOnClick = () => {
        setCitiesList((currentArray) => [...currentArray, inputValue])

        setInputValue(''); // cleans form
        
        inputRef.current.focus(); // focus will not disappear from the form
    }

    const handleOnChange = (e) => {
        setInputValue(e.target.value); //changing state by using e.target.value
    }

    return (
        <div className={styles.inputWrap}>
            <input value={inputValue} className={styles.input} onChange={handleOnChange} ref={inputRef} />
            <button onClick={handleOnClick} className={styles.button}>Add city</button>
        </div>
    )
}