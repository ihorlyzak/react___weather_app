import React from 'react';
import { Card } from 'components/Card/Card';


export const CardList = ({ citiesList }) => {
  return (
    <div className='cardList'>
      {
        citiesList.map(city => <Card key={city} city={city} />)
      }
    </div>
  )
}