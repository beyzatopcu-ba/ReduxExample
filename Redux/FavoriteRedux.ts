import { Action, PayloadAction, Reducer } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';

type FavoriteState = number[];

export const REDUCER_NAME = 'favorites';

const INITIAL_STATE: FavoriteState = [];

export const ACTION_TYPES = {
    addToFavoriteList: 'addToFavoriteList',
    removeFromFavoriteList: 'removeFromFavoriteList',
    removeAll: 'removeAll',
}

// Örnek action
const addToFavoriteListActionExample: PayloadAction<number> = {
    type: ACTION_TYPES.addToFavoriteList,
    payload: 2,
}

// Örnek action creator
const bla = (itemId: number) => {
    return {
        type: ACTION_TYPES.addToFavoriteList,
        payload: itemId,
    }
}

export const ACTION_CREATORS = {
    addToFavoriteList: (itemId: number): PayloadAction<number>  => {
        return {
            type: ACTION_TYPES.addToFavoriteList,
            payload: itemId,
        };
    },
    removeFromFavoriteList: (itemId: number): PayloadAction<number> => {
        return {
            type: ACTION_TYPES.removeFromFavoriteList,
            payload: itemId
        };
    },
    removeAll: (): Action => {
        return {
            type: ACTION_TYPES.removeAll,
        };
    },
}

export const favoriteReducer: Reducer = (state: FavoriteState = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_TYPES.addToFavoriteList: {
            console.log('heyy')
            const itemId = (action as PayloadAction<number>).payload;

            const copyState = [...state];
            if (!copyState.includes(itemId)) {
                copyState.push(itemId);
            }

            console.log('returns', copyState);

            return copyState;
        }
        case ACTION_TYPES.removeFromFavoriteList: {
            const itemId = (action as PayloadAction<number>).payload;

            const copyState = [...state];
            const itemIndex = copyState.indexOf(itemId);

            if (itemIndex >= 0) {
                copyState.splice(itemIndex, 1);
            }

            return copyState;
        }
        case ACTION_TYPES.removeAll: {
            return cloneDeep(INITIAL_STATE);
        }
        default:
            return state;
    }
}

export const SELECTORS = {
    favoriteList: (rootState: { favorites: FavoriteState }) => {
        return rootState[REDUCER_NAME];
    },
    isItemFavorite: (itemId: number) => {
        return (rootState: { favorites: FavoriteState }) => {
            console.log('item id', itemId);
            console.log(rootState[REDUCER_NAME]);
            return rootState[REDUCER_NAME]?.includes(itemId) || false;
        }
    }
}
