import * as types from './slideshowActionTypes';

export const play = () => ({
  type: types.PLAY,
});

export const pause = () => ({
  type: types.PAUSE,
});

export const nextImage = () => ({
  type: types.NEXT_IMAGE,
});

export const previousImage = () => ({
  type: types.PREVIOUS_IMAGE,
});

export const setIndex = (index) => ({
  type: types.SET_INDEX,
  payload: index,
});

export const addImage = (image) => ({
  type: types.ADD_IMAGE,
  payload: image,
});

export const setDelay = (delay) => ({
  type: types.SET_DELAY,
  payload: delay,
});

export const setIsPlaying = (isPlaying) => ({
  type: types.SET_IS_PLAYING,
  payload: isPlaying,
});
