export const GET_NEXT_CAT = 'GET_NEXT_CAT';

export const getNextCat = () => ({
  type: GET_NEXT_CAT,
});

export const SET_CAT = 'SET_CAT';

export const setCat = (cat) => ({
  type: SET_CAT,
  payload: cat,
});

export const SET_SLIDESHOW_DELAY = 'SET_SLIDESHOW_DELAY';

export const setSlideshowDelay = (delay) => ({
    type: SET_SLIDESHOW_DELAY,
    payload: delay,
});
