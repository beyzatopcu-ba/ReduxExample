import { 
    Action, 
    PayloadAction, 
    Reducer,
    createSelector,
    createSlice,
} from '@reduxjs/toolkit';
import { RootState } from '.';

type FavoriteState = number[];

const INITIAL_STATE: FavoriteState = [];

export const favoriteSlice = createSlice({
    initialState: INITIAL_STATE,
    name: 'favorites',
    reducers: {
        addToFavoriteList: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            state.push(itemId);
        },
        removeFromFavoriteList: (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const itemIndex = state.indexOf(itemId);
            if (itemIndex >= 0) {
                state.splice(itemIndex, 1);
            }
        },
        removeAll: () => {
            return [...INITIAL_STATE];
        }
    }
});

// ÖRNEK
const exampleState = [
    {
        id: 1,
        children: [
            'alsd',
        ]
    },
    {
        id: 2,
        children: [
            'alsd',
        ]
    },
    {
        id: 3,
        children: [
            'alsd',
        ]
    },
    {
        id: 4,
        children: [
            'alsd',
        ]
    },
]

/*
// Eğer selector içinde yeni bir referans değer üretip döndürüyorsa,
// Aşağıdaki gibi createSelector ile yazmak lazım.
// Yoksa ekran uygulama içindeki herhangi bir redux update'inde yeniden render edilir.
const selectorReturns = [ 1, 2, 3, 4 ];


export const favoriteSelectors = createSelector([
    (state: { favorites: FavoriteState}) => {
        return state.favorites;
    },

], (favorites, ) => {
    return favorites.map((itemId) => {
        return {
            id: itemId,
            flag: true,
        };
    });
});
*/

export const favoriteSelectors = {
    favoriteList: (rootState: RootState) => {
        return rootState[favoriteSlice.name];
    },
    isItemFavorite: (itemId: number) => {
        return (rootState: RootState) => {
            return rootState[favoriteSlice.name]?.includes(itemId) || false;
        }
    }
}