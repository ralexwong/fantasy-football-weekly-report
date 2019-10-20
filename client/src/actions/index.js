import {
    FETCH_USER
} from './types';
import history from '../history';


export const fetchUser = (username) => {
    return {
        type: FETCH_USER,
        payload: username
    }
}