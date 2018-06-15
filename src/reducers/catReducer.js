import * as actions from '../actions/catActions';

const initialState = {
    cat: '/favicon.ico',
    slideshowDelay: 2,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_CAT:
            return { ...state, cat: action.payload };
        case actions.SET_SLIDESHOW_DELAY:
            return { ...state, slideshowDelay: action.payload };
        default:
            return state;
    }
};
