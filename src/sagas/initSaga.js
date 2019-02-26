import { put, select, takeEvery } from "redux-saga/effects";
import * as catActions from "../actions/catActions";
import * as initActions from '../actions/initActions';
import * as slideshowActions from '../actions/slideshowActions';
import getQueryStringParameters from '../utils/getQueryStringParameters';
import * as DisplayMode from '../constants/displayMode';
import * as analytics from '../utils/analytics';
import * as Theme from '../constants/theme';
import { EventCategories, EventActions } from '../constants/analytics';

function* init() {
  analytics.initAnalytics();

  yield put(catActions.getNextCatFact());

  const {
    displayMode,
    slideshowDelay,
    streamMode,
    streamModeEnabled,
    theme,
  } = getQueryStringParameters();

  if (Object.values(DisplayMode).includes(displayMode)) {
    yield put(catActions.setDisplayMode(displayMode));

    analytics.logEvent({
      eventCategory: EventCategories.QueryString,
      eventAction: EventActions.QueryString_DisplayMode,
      eventLabel: displayMode,
    });
  }

  if (slideshowDelay) {
    const slideshowDelayNumber = parseInt(slideshowDelay, 10);
    yield put(slideshowActions.setDelay(slideshowDelayNumber));

    analytics.logEvent({
      eventCategory: EventCategories.QueryString,
      eventAction: EventActions.QueryString_SlideshowDelay,
      eventLabel: slideshowDelayNumber,
    });
  }

  if (streamMode !== undefined || streamModeEnabled !== undefined) {
    yield put(catActions.setStreamModeEnabled(true));

    analytics.logEvent({
      eventCategory: EventCategories.QueryString,
      eventAction: EventActions.QueryString_StreamMode,
    });
  }

  if (theme && Object.values(Theme).includes(theme.toLowerCase())) {
    yield put(catActions.setTheme(theme.toLowerCase()));
  }

  yield put(slideshowActions.play());
}

export default function* initSaga() {
  yield takeEvery([
    initActions.INIT,
  ], init);
}
