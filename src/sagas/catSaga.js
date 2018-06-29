import map from "../utils/map";
import delayed from "../utils/delayed";
import delay from "../utils/delay";
import preloadImage from "../utils/preloadImage";
import pipe from "../utils/pipe";
import {flickrTagSearch, mapResponseToPhotos, fetchPhotos, appSettings} from "../utils/flickrTagSearch";
import * as actions from "../actions/catActions";
import { call, put, select, takeEvery } from "redux-saga/effects";
import {getSlideshowDelay} from "../selectors/catSelectors";

// Set this on Application entry and pass it through your app by injection.
const getPhotosApplied = flickrTagSearch(mapResponseToPhotos(fetchPhotos(appSettings)));

const getCat = getPhotosApplied('cat,kitten');

export default function* catSaga(action) {
  for (const nextCat of getCat) {
    const cats = yield nextCat;
    for (const cat of cats) {
      const img = cat.medium;
      yield preloadImage(img);
      const delaySeconds = yield select(getSlideshowDelay);
      yield delay(delaySeconds);
      yield put(actions.setCat(img));
    }
  }
}
