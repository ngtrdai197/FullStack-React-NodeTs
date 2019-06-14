import { CREATE_USER, CREATE_USER_FAIL } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8088/api';

export const createUser = (user) => {
    return async (dispatch) => {
        try {
            const data = await axios.post(`${apiUrl}/user`, user);
            dispatch(createUserSuccess(data))
        } catch (error) {
            dispatch(createUserFailed(error.response.data))
        }
    }
}

export const createUserSuccess = (user) => {
    return {
        type: CREATE_USER,
        payload: user
    };
}
export const createUserFailed = (error) => {
    return {
        type: CREATE_USER_FAIL,
        payload: error
    }
}