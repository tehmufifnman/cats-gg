import { createSelector } from 'reselect';
import * as DisplayMode from '../constants/displayMode';

const getCatState = state => state.cat;

export const getDisplayMode = createSelector([
  getCatState,
], state => state.displayMode);

export const getCatPicture = createSelector([
  getCatState,
], state => state.cat);

export const getCatGif = createSelector([
  getCatState,
], state => state.catGif);

export const getCatFact = createSelector([
  getCatState,
], state => state.catFact);

export const getStreamModeEnabled = createSelector([
  getCatState,
], state => state.streamModeEnabled);

export const getCatGifUrl = createSelector([
  getCatGif,
], catGif => catGif.image_url);

export const getCatGifExternalUrl = createSelector([
  getCatGif,
], catGif => catGif.url);

export const getCatImageUrl = createSelector([
  getDisplayMode,
  getCatGifUrl,
  getCatPicture,
], (displayMode, catGif, catPicture) => displayMode === DisplayMode.Pictures ? catPicture : catGif);

export const getCatImageExternalUrl = createSelector([
  getDisplayMode,
  getCatGifExternalUrl,
  getCatPicture,
], (displayMode, catGif, catPicture) => displayMode === DisplayMode.Pictures ? catPicture : catGif);
