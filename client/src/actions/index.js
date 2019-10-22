import {
    FETCH_LEAGUES
} from './types';
import history from '../history';
import axios from 'axios';


export const fetchUser = (username) => async dispatch => {
    const response = await axios.get(`api/sleeper`, {
        params: {
            username: username
        }
    })
    const data = await response.data;
    console.log(data);
    await dispatch({ type: FETCH_LEAGUES, payload: "p" });
}