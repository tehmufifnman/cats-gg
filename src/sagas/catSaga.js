import map from "../utils/map";
import delayed from "../utils/delayed";
import delay from "../utils/delay";
import preloadImage from "../utils/preloadImage";
import pipe from "../utils/pipe";
import flickrTagSearch from "../utils/flickrTagSearch";
import * as actions from "../actions/catActions";
import { call, put, takeEvery } from "redux-saga/effects";

const getCat = flickrTagSearch('cats');

export default function* catSaga(action) {
  for (const nextCat of getCat) {
    const cats = yield nextCat;
    for (const cat of cats) {
      yield delay(2);
      const img = cat.medium;
      yield put(actions.setCat(img));
    }
  }
}
