import { createSelector } from 'reselect';

export const getSlideshow = state => state.slideshow;

export const getImages = createSelector([
  getSlideshow,
], slideshow => slideshow.images);

export const getIndex = createSelector([
  getSlideshow,
], slideshow => slideshow.index);

export const getIsPlaying = createSelector([
  getSlideshow,
], slideshow => slideshow.isPlaying);

export const getSlideshowDelay = createSelector([
  getSlideshow,
], slideshow => slideshow.delay);

export const getCurrentImage = createSelector([
  getImages,
  getIndex,
], (images, index) => index > -1 ? images[index] : null);

export const isAtEndOfImages = createSelector([
  getImages,
  getIndex,
], (images, index) => index + 1 === images.length);

export const isAtBeginningOfImages = createSelector([
  getIndex,
], index => index <= 0);
