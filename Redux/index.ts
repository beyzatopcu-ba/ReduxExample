import { createStore, combineReducers } from 'redux';
import { favoriteReducer } from './FavoriteRedux';

const rootReducer = combineReducers({
    favorite: favoriteReducer,
});

export const store = createStore(rootReducer);