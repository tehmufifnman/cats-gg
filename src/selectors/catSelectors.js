import { createSelector } from 'reselect';

const getCatState = state => state.cat;

export const getCat = createSelector([
    getCatState,
], state => state.cat);

export const getSlideshowDelay = createSelector([
    getCatState,
], state => state.slideshowDelay);
