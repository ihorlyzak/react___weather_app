import React from 'react';
import { Main } from 'components/Main/Main';

import * as backgroundImages from 'assets/images/'; //adding images from assets/images/indeg.js


const weatherImagesMap = [
    backgroundImages.Background1,
    backgroundImages.Background2,
    backgroundImages.Background3,
    backgroundImages.Background4,
    backgroundImages.Background5,
    backgroundImages.Background6,
    backgroundImages.Background7,
    backgroundImages.Background8,
    backgroundImages.Background9,
    backgroundImages.Background10,
    backgroundImages.Background11,
    backgroundImages.Background12,
    backgroundImages.Background13,
    backgroundImages.Background14,
    backgroundImages.Background15,
    backgroundImages.Background16,
    backgroundImages.Background17,
    backgroundImages.Background18,
    backgroundImages.Background19,
    backgroundImages.Background20,
];

const getRandomImageUrl = () => {
    const randomImageId = Math.floor(Math.random() * weatherImagesMap.length - 1) + 1;

    return weatherImagesMap[randomImageId];
};

export const MainBackground = () => {
    return (
        <div className='mainBackground' style={{ backgroundImage: `url(${getRandomImageUrl()})` }}>
            <Main />
        </div>
    )
}