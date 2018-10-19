import catPictureSaga from './catPictureSaga';
import catGifSaga from './catGifSaga';
import catFactSaga from './catFactSaga';
import initSaga from './initSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    catPictureSaga(),
    catGifSaga(),
    catFactSaga(),
    initSaga(),
  ]);
}
