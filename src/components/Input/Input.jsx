import React, { useState, useRef } from 'react';

import styles from './input.module.scss';


export const Input = ({ dispatch }) => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleOnClick = () => {
        if (inputValue.length) { //no add for empty input         

            dispatch({
                type: 'ADD_CITY',
                payload: inputValue,
            })

            setInputValue(''); // cleans form

            inputRef.current.focus(); // focus will not disappear from the form

        } else (
            alert('Aghh.. Imput is empty. Enter the city name please')
        )
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
