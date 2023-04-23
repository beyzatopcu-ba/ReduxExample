import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dummyData } from "../DummyData";
import { RootState } from ".";

type AnimalState = {
    isFetching: boolean,
    error: any,
    animalList: typeof dummyData,
};

const INITIAL_STATE: AnimalState = {
    isFetching: false,
    error: null,
    animalList: [],
};

export const animalSlice = createSlice({
    name: 'animal',
    initialState: INITIAL_STATE,
    reducers: {
        readAnimals_Start: (state) => {
            state.isFetching = true;
            state.error = null;
        },
        readAnimals_Success: (state, action: PayloadAction<typeof dummyData>) => {
            state.isFetching = false;
            state.error = null;
            state.animalList = action.payload;
        },
        readAnimals_Error: (state, action: PayloadAction<any>) => {
            state.isFetching = false;
            state.error = action.payload;
        },
    }
});

export const animalSelectors = {
    animalList: (state: RootState) => state[animalSlice.name].animalList,
    isFetching: (state: RootState) => state[animalSlice.name].isFetching,
    error: (state: RootState) => state[animalSlice.name].error,
}
