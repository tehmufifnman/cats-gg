import catPictureSaga from './catPictureSaga';
import catGifSaga from './catGifSaga';
import catFactSaga from './catFactSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        catPictureSaga(),
        catGifSaga(),
        catFactSaga(),
    ]);
}
