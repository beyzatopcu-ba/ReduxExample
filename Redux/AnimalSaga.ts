import { takeEvery, call, put, fork, select } from 'redux-saga/effects';
import { animalSlice } from './AnimalRedux';
import { dummyData, readAnimals } from '../DummyData';
import { RootState } from '.';

function* watch_ReadAnimals_Start() {
    console.log('alskdlaslkdasl')
    yield takeEvery(animalSlice.actions.readAnimals_Start, workerReadAnimals);
}

function* workerReadAnimals(action) {
    /** TRY CATCH ÖNEMLİ */
    try {
        // ÖRNEK SELECT
        const anyData = yield select((state: RootState) => state.favorites);
        console.log(anyData);

        // ÖRNEK ACTION okuma
        console.log(action);

        // const animalList = yield call(readAnimals, username, num);
        const animalList: typeof dummyData = yield call(readAnimals);

        yield put(animalSlice.actions.readAnimals_Success(animalList));

    } catch (error) {
        yield put(animalSlice.actions.readAnimals_Error(error));
    }
}

export const animalSagas = [
    fork(watch_ReadAnimals_Start),
];


