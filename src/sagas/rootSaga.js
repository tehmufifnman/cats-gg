import catSaga from './catSaga';
import catFactSaga from './catFactSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        catSaga(),
        catFactSaga(),
    ]);
}
