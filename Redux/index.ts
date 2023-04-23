import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { REDUCER_NAME, favoriteReducer } from './FavoriteRedux';
import { favoriteSlice } from './FavoriteReduxToolkit';
import { animalSlice } from './AnimalRedux';
import { all } from 'redux-saga/effects';
import { animalSagas } from './AnimalSaga';


/*
Eski yöntem
const rootReducer = combineReducers({
    [REDUCER_NAME]: favoriteReducer,
});

export const store = createStore(rootReducer);
*/


// Yeni yöntem

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        [favoriteSlice.name]: favoriteSlice.reducer,
        [animalSlice.name]: animalSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

function* rootSagas() {
    yield all([
        ...animalSagas,
    ]);
}

sagaMiddleware.run(rootSagas);


export type RootState = ReturnType<typeof store.getState>