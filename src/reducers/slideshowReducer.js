import * as types from '../actions/slideshowActionTypes';

const initialState = {
  delay: 2,
  images: [],
  index: -1,
  isPlaying: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_IMAGE:
      return { ...state, images: [ ...state.images, action.payload ] };
    case types.SET_INDEX:
      return { ...state, index: action.payload };
    case types.SET_DELAY:
      return { ...state, index: action.payload };
    case types.SET_IS_PLAYING:
      return { ...state, isPlaying: action.payload };
    default:
      return state;
  }
}
