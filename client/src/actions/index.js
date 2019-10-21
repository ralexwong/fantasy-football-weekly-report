import {
    FETCH_USER
} from './types';
import history from '../history';
import axios from 'axios';


export const fetchUser = (username) => async dispatch => {
    const response = await axios.get(`api/sleeper`, {
        params: {
            username: username
        }
    }).then(res => {
        console.log(res);
    })
    console.log(response);

    dispatch({ type: FETCH_USER, payload: response });
}