import React, { useState } from 'react';
import { Input } from 'components/Input/Input';
import { CardList } from 'components/CardList/CardList';


export const Main = () => {
    const [citiesList, setCitiesList] = useState([]);

    return (
        <div className='main'>
            <Input setCitiesList={setCitiesList} />

            <CardList citiesList={citiesList} />
        </div>
    )
}