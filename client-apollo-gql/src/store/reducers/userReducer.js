import { CREATE_USER } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_USER:
            console.log(action);
            return action.payload;
        default:
            state;
    }
}