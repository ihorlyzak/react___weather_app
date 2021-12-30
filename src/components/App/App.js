import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { CardList } from '../CardList/CardList'
import './App.scss';



function App() {
  const [citiesList, setCitiesList] = useState([]);

  return (
    <div className='mainBackground'>      

      <div className='main'>
        <Input setCitiesList={setCitiesList} />

        <CardList citiesList={citiesList} />
      </div>

    </div>
  );
}

export default App;
