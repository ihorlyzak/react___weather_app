import { useState, useEffect } from 'react';


export const useSitiesList = () => {
    const [citiesList, setCitiesList] = useState(JSON.parse(localStorage.getItem('citiesList')) || []);

    useEffect(() => { //if cities list changed, local storage changed
        localStorage.setItem('citiesList', JSON.stringify(citiesList));
    }, [citiesList]);

    return [citiesList, setCitiesList];
}