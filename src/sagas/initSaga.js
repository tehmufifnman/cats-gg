import { put, select, takeEvery } from "redux-saga/effects";
import * as catActions from "../actions/catActions";
import * as initActions from '../actions/initActions';
import * as slideshowActions from '../actions/slideshowActions';
import getQueryStringParameters from '../utils/getQueryStringParameters';
import * as DisplayMode from '../constants/displayMode';

function* init() {
  yield put(catActions.getNextCatFact());

  const {
    displayMode,
    slideshowDelay,
    streamModeEnabled,
  } = getQueryStringParameters();

  if (Object.values(DisplayMode).includes(displayMode)) {
    yield put(catActions.setDisplayMode(displayMode));
  }

  if (slideshowDelay) {
    yield put(slideshowActions.setDelay(parseInt(slideshowDelay, 10)));
  }

  if (streamModeEnabled === 'true') {
    yield put(catActions.setStreamModeEnabled(true));
  }

  yield put(slideshowActions.play());
}

export default function* initSaga() {
  yield takeEvery([
    initActions.INIT,
  ], init);
}
