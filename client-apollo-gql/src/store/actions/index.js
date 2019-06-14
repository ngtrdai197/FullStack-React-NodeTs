import { CREATE_USER } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8088/api';

export const createUser = (user) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}/user`, user)
            .then(response => dispatch(createUserSuccess(response)))
            .catch(error => {
                throw error;
            })
    }
}

export const createUserSuccess = (user) => {
    return {
        type: CREATE_USER,
        payload: user
    };
}