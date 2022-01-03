import React from 'react';
import { Input } from 'components/Input/Input';
import { CardList } from 'components/CardList/CardList';
import { useSitiesList } from 'components/hooks/useCitiesList'; //custom hook

export const Main = () => {
    const [state, dispatch] = useSitiesList();
    const { inputValue, citiesList, editingCity } = state;

    return (
        <div className='main'>
            <Input dispatch={dispatch} inputValue={inputValue} editingCity={editingCity} />

            <CardList citiesList={citiesList} dispatch={dispatch} />
        </div>
    )
} 