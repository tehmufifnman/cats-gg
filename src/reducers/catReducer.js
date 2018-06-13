import * as actions from '../actions/catActions';

const initialState = {
    cat: '/favicon.ico',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_CAT:
            return { ...state, cat: action.payload };
        default:
            return state;
    }
};
