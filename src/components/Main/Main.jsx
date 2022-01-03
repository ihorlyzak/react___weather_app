import React from 'react';
import { Input } from 'components/Input/Input';
import { CardList } from 'components/CardList/CardList';
import { useSitiesList } from 'components/hooks/useCitiesList'; //custom hook

export const Main = () => {
    const [citiesList, dispatch] = useSitiesList();

    return (
        <div className='main'>
            <Input dispatch={dispatch} />

            <CardList citiesList={citiesList} dispatch={dispatch} />
        </div>
    )
}