// import React, { useContext } from 'react';
// import { Card } from 'components/Card/Card';
// import { GlobalContext } from 'components/Main/Main';


// export const CardList = () => {

//   const { state: { citiesList } } = useContext(GlobalContext);

//   return (
//     <div className='cardList'>
//       {
//         citiesList.map(city => <Card key={city} city={city} />)
//       }
//     </div>
//   )
// }

import styles from './cardList.module.scss'

// import React, { useContext } from 'react';
import React from 'react';
import { Card } from 'components/Card/Card';
// import { GlobalContext } from 'components/Main/Main';

export class CardList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);

    return (
      <>
        {/* <select className={styles.sortSelect}>
          <option value="name" className={styles.sortOption}>By name</option>
          <option value="temp" className={styles.sortOption}>By temp</option>
        </select> */}
        <div className={styles.cardList}>
          {
            this.props.citiesList.map(city => <Card key={city} city={city} />)
          }
        </div>
      </>
    )
  }
}

// export const CardList = () => {

//   const { state: { citiesList } } = useContext(GlobalContext);

//   return (
//     <div className='cardList'>
//       {
//         citiesList.map(city => <Card key={city} city={city} />)
//       }
//     </div>
//   )
// }




