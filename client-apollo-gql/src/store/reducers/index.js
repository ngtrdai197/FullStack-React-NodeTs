import FoodsReducer from './foodList';
import ActiveFoodReducer from './activeFood';
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    foods: FoodsReducer,
    activeFood: ActiveFoodReducer
});
