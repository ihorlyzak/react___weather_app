import React from 'react';
import { Input } from 'components/Input/Input';
import { CardList } from 'components/CardList/CardList';
import { useSitiesList } from 'components/hooks/useCitiesList'; //custom hook

export const Main = () => {
    const [citiesList, setCitiesList] = useSitiesList();

    return (
        <div className='main'>
            <Input setCitiesList={setCitiesList} />

            <CardList citiesList={citiesList} />
        </div>
    )
}