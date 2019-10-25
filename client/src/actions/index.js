import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_ROSTER
} from './types';
import history from '../history';
import axios from 'axios';


export const fetchLeagues = (username) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchLeagues`, {
        params: {
            username: username
        }
    })
    const data = await response.data;
    console.log(data);
    if (data === "is not valid username") {
        await dispatch({ type: INVALID_USERNAME, payload: data });
        return;
    }
    await dispatch({ type: FETCH_LEAGUES, payload: data });
    return history.push('/input2');
}

// ------------------------------------------------------------------------

export const fetchRoster = (league_id) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchRoster`, {
        params: {
            league_id: league_id
        }
    })


    dispatch({ type: FETCH_ROSTER }) 
}