
import React from 'react';
import { Input } from 'components/Input/Input';
import { CardList } from 'components/CardList/CardList';
import { useSitiesList } from 'components/hooks/useCitiesList'; //custom hook

export const GlobalContext = React.createContext();

export const Main = () => {
    const [state, dispatch] = useSitiesList();

    return (
        <GlobalContext.Provider value={{ state, dispatch  }}>
            <div className='main'>
                <Input />

                <CardList />
            </div>
        </GlobalContext.Provider>
    )
} 