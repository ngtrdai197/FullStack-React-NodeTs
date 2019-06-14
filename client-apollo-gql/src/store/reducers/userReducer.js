import { CREATE_USER, CREATE_USER_FAIL } from '../actions/types';

const initialState = {
    user: {},
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return { ...state, user: action.payload };
        case CREATE_USER_FAIL:
            const result = { ...state, error: action.payload }
            return result;
        default:
            return state;
    }
}