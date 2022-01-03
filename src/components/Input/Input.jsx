import React, { useRef } from 'react';

import styles from './input.module.scss';


export const Input = ({ dispatch, inputValue, editingCity }) => {
    // const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const handleOnAdd = () => {
        if (inputValue.length) { //no add for empty input         

            dispatch({
                type: 'ADD_CITY',
                payload: inputValue,
            })

            dispatch({
                type: 'RESET_INPUT_VALUE',
            })

            inputRef.current.focus(); // focus will not disappear from the form

        } else (
            alert('Aghh.. Imput is empty. Enter the city name please')
        )
    }

    const handleOnChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_VALUE',
            payload: e.target.value,
        })
        // setInputValue(e.target.value); //changing state by using e.target.value        
    }

    const handleOnDone = () => {
        if (inputValue.length) { //no add for empty input         

            dispatch({
                type: 'EDIT_CITY_DONE',
                payload: inputValue,
            })

            dispatch({
                type: 'RESET_INPUT_VALUE',
            })

            inputRef.current.focus(); // focus will not disappear from the form

        } else (
            alert('Aghh.. Imput is empty. Enter the city name please')
        )
    }

    return (
        <div className={styles.inputWrap}>
            <input placeholder='Enter the name of the decired city' value={inputValue} className={styles.input} onChange={handleOnChange} ref={inputRef} />
            {// display add button or edit button
                //if ediginfCity === true => display Save changes button
                editingCity
                    ?
                <button onClick={handleOnDone} className={styles.button}>Save changes</button>  
                    :
                <button onClick={handleOnAdd} className={styles.button}>Add city</button>

            }

        </div>
    )
}
