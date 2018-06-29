import delay from "../utils/delay";
import preloadImage from "../utils/preloadImage";
import getRandomCatGif from '../utils/giphy/getRandomCatGif';
import * as actions from "../actions/catActions";
import { put, select } from "redux-saga/effects";
import {getSlideshowDelay} from "../selectors/catSelectors";


export default function* catGifSaga(action) {
    while (true) {
        const catGif = yield getRandomCatGif();
        yield preloadImage(catGif.image_url);
        yield put(actions.setCatGif(catGif));
        const slideshowDelay = yield select(getSlideshowDelay);
        yield delay(slideshowDelay);
    }
}
