import * as actions from '../actions/catActions';
import * as displayMode from '../constants/displayMode';

const initialState = {
  cat: '/favicon.ico',
  catGif: {
    image_url: '/favicon.ico',
    url: 'cats.gg',
  },
  catFact: '',
  displayMode: displayMode.Gifs,
  streamModeEnabled: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CAT:
      return { ...state, cat: action.payload };
    case actions.SET_CAT_FACT:
      return { ...state, catFact: action.payload };
    case actions.SET_CAT_GIF:
      return { ...state, catGif: action.payload };
    case actions.SET_DISPLAY_MODE:
      return { ...state, displayMode: action.payload };
    case actions.SET_STREAM_MODE_ENABLED:
      return { ...state, streamModeEnabled: action.payload };
    default:
      return state;
  }
};
