export const GET_NEXT_CAT = 'GET_NEXT_CAT';

export const getNextCat = () => ({
  type: GET_NEXT_CAT,
});

export const SET_CAT = 'SET_CAT';

export const setCat = (cat) => ({
  type: SET_CAT,
  payload: cat,
});

export const SET_CAT_GIF = 'SET_CAT_GIF';

export const setCatGif = (catGif) => ({
    type: SET_CAT_GIF,
    payload: catGif,
});

export const SET_SLIDESHOW_DELAY = 'SET_SLIDESHOW_DELAY';

export const setSlideshowDelay = (delay) => ({
    type: SET_SLIDESHOW_DELAY,
    payload: delay,
});

export const GET_NEXT_CAT_FACT = 'GET_NEXT_CAT_FACT';

export const getNextCatFact = () => ({
    type: GET_NEXT_CAT_FACT,
});

export const SET_CAT_FACT = 'SET_CAT_FACT';

export const setCatFact = (catFact) => ({
    type: SET_CAT_FACT,
    payload: catFact,
});

export const SET_DISPLAY_MODE = 'SET_DISPLAY_MODE';

export const setDisplayMode = (displayMode) => ({
    type: SET_DISPLAY_MODE,
    payload: displayMode,
});
