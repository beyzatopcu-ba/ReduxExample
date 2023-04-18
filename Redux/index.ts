import { createStore, combineReducers } from 'redux';
import { REDUCER_NAME, favoriteReducer } from './FavoriteRedux';

const rootReducer = combineReducers({
    [REDUCER_NAME]: favoriteReducer,
});

export const store = createStore(rootReducer);