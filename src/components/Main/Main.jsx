
import React from 'react';
import { Input } from 'components/Input/Input';
import { CardList } from 'components/CardList/CardList';
import { useSitiesList } from 'hooks/useCitiesList';



export const GlobalContext = React.createContext();

export const Main = () => {
    const [state, dispatch] = useSitiesList();

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            <div className='main'>
                <Input />

                <CardList citiesList={state.citiesList} />
            </div>
        </GlobalContext.Provider>
    )
} 