
import { SELECT_FOOD } from '../actions/action';
export default (state = {}, action) => {
    switch (action.type) {
        case SELECT_FOOD:
            return action.payload;
        default:
            return state;
    }
}