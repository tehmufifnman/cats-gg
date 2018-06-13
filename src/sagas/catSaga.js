import map from "../utils/map";
import delayed from "../utils/delayed";
import preloadImage from "../utils/preloadImage";
import pipe from "../utils/pipe";
import flickrTagSearch from "../utils/flickrTagSearch";
import * as actions from "../actions/catActions";

// const getCat = pipe(
//     map(photo => photo.square),
//     delayed(2),
//     map(preloadImage)
// )(flickrTagSearch('cats'));

export default function* catSaga () {
    // for (let cat in getCat) {
    //     yield put(actions.setCat(cat));
    // }
}
