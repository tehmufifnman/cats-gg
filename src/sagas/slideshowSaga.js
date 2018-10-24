import { call, put, select, takeEvery } from 'redux-saga/effects';
import * as slideshowActionTypes from '../actions/slideshowActionTypes';
import * as slideshowActions from '../actions/slideshowActions';
import * as slideshowSelectors from '../selectors/slideshowSelectors';
import * as DisplayMode from '../constants/displayMode';
import * as catSelectors from '../selectors/catSelectors';
import getRandomCatGif from "../utils/giphy/getRandomCatGif";
import getRandomImage from '../utils/unsplash/getRandomImage';
import preloadImage from "../utils/preloadImage";
import delay from "../utils/delay";

const getRandomCatImage = getRandomImage('cats', 'kittens');

function* getNewPictureImage() {
  const picture = yield getRandomCatImage();
  return yield preloadImage(picture);
}

function* getNewGifImage() {
  const gif = yield getRandomCatGif();
  return yield preloadImage(gif.image_url);
}

function* getNewImage() {
  const displayMode = yield select(catSelectors.getDisplayMode);
  switch (displayMode) {
    case DisplayMode.Gifs:
      return yield call(getNewGifImage);
    case DisplayMode.Pictures:
      return yield call(getNewPictureImage);
  }
}

function* addNewImage() {
  const image = yield call(getNewImage);
  yield put(slideshowActions.addImage(image));
}

function* nextImage() {
  const isAtEndOfImages = yield select(slideshowSelectors.isAtEndOfImages);
  if (isAtEndOfImages) {
    yield call(addNewImage);
  }

  const index = yield select(slideshowSelectors.getIndex);
  yield put(slideshowActions.setIndex(index + 1));
}

function* previousImage() {
  const isAtBeginningOfImages = yield select(slideshowSelectors.isAtBeginningOfImages);
  if (isAtBeginningOfImages) {
    return;
  }

  const index = yield select(slideshowSelectors.getIndex);
  yield put(slideshowActions.setIndex(index - 1));
}

function* play() {
  yield put(slideshowActions.setIsPlaying(true));
  yield call(nextImage);
  const slideshowDelay = yield select(slideshowSelectors.getSlideshowDelay);
  yield delay(slideshowDelay);
  const isPlaying = yield select(slideshowSelectors.getIsPlaying);
  if (isPlaying) {
    yield call(play);
  }
}

function* slideshowFilter(action) {
  switch (action.type) {
    case slideshowActionTypes.PLAY:
      yield call(play);
      break;
    case slideshowActionTypes.PAUSE:
      yield put(slideshowActions.setIsPlaying(false));
      break;
    case slideshowActionTypes.NEXT_IMAGE:
      yield put(slideshowActions.setIsPlaying(false));
      yield call(nextImage);
      break;
    case slideshowActionTypes.PREVIOUS_IMAGE:
      yield put(slideshowActions.setIsPlaying(false));
      yield call(previousImage);
      break;
  }
}

export default function* slideshowSaga() {
  yield takeEvery(Object.values(slideshowActionTypes), slideshowFilter);
}
