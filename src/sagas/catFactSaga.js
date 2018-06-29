import { call, put, takeEvery } from "redux-saga/effects";
import getCatFact from "../utils/getCatFact";
import {setCatFact} from "../actions/catActions";
import * as catActions from "../actions/catActions";

function* nextCatFact() {
    const fact = getCatFact();
    yield put(setCatFact(fact));
}

function* catFactFilter(action) {
    switch(action.type) {
        case catActions.GET_NEXT_CAT_FACT:
            yield call(nextCatFact);
    }
}

export default function* catFactSaga(action) {
    yield takeEvery(catActions.GET_NEXT_CAT_FACT, catFactFilter);
}
