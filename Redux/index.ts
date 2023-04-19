import { createStore, combineReducers } from 'redux';
import { REDUCER_NAME, favoriteReducer } from './FavoriteRedux';
import { favoriteSlice } from './FavoriteReduxToolkit';
import { configureStore } from '@reduxjs/toolkit';


/*
Eski yöntem
const rootReducer = combineReducers({
    [REDUCER_NAME]: favoriteReducer,
});

export const store = createStore(rootReducer);
*/


// Yeni yöntem

export const store = configureStore({
    reducer: {
        [favoriteSlice.name]: favoriteSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>