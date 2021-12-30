import React, { useEffect } from 'react';
import { Card } from '../Card/Card';




export const CardList = ({ citiesList }) => {
  useEffect(() => {
    console.log('useEffect', citiesList);
  });

  return (
    <div className='cardList'>
      {
        citiesList.map(city => <Card key={city} city={city} />)
      }
    </div>
  )
}