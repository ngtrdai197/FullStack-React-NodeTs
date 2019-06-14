import { SELECT_FOOD } from './action';

export const selectFood = (food) => {
    return {
        type: SELECT_FOOD,
        payload: food
    };
}