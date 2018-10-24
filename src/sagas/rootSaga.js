import catFactSaga from './catFactSaga';
import initSaga from './initSaga';
import slideshowSaga from './slideshowSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    catFactSaga(),
    initSaga(),
    slideshowSaga(),
  ]);
}
