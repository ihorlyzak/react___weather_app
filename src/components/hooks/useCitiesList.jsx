import { useEffect, useReducer } from 'react';

const initialState = {
    citiesList: JSON.parse(localStorage.getItem('citiesList')) || [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CITY': {
            const newState = { ...state, citiesList: [...state.citiesList, action.payload] }; //copying state arr & creating new with new element
            return newState;
        }
        default:
            return initialState;
    }
}

export const useSitiesList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { citiesList } = state;

    useEffect(() => { //if cities list changed, local storage changed
        localStorage.setItem('citiesList', JSON.stringify(citiesList));
    }, [citiesList]);

    return [citiesList, dispatch];
}