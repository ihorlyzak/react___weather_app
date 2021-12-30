import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Card } from '../Card/Card';

import './App.scss';



function App() {

  const [citiesList, setCitiesList] = useState([]);

  return (
    <div className='mainBackground'>

      <div className='main'>
        <Input setCitiesList={setCitiesList} />        

        <div className='cardList'>
          {
            citiesList.map(city => <Card key={city} city={city} />)
          }
        </div>

      </div>

    </div>
  );
}

export default App;
