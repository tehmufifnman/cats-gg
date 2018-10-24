import { combineReducers } from 'redux';
import catReducer from "./catReducer";
import slideshowReducer from './slideshowReducer';

export default combineReducers({
  cat: catReducer,
  slideshow: slideshowReducer,
});
