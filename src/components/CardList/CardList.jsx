import React, { useContext } from 'react';
import { Card } from 'components/Card/Card';
import { GlobalContext } from 'components/Main/Main';


export const CardList = () => {

  const { state: { citiesList } } = useContext(GlobalContext);

  return (
    <div className='cardList'>
      {
        citiesList.map(city => <Card key={city} city={city} />)
      }
    </div>
  )
}


