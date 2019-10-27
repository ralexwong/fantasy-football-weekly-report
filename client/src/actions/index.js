import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_ROSTER,
    SET_LEAGUE_ID,
    FETCH_PAYOUT,
    FETCH_MATCHUPPOINTS,
    FETCH_AVATAR
} from './types';
import history from '../history';
import axios from 'axios';


// Grabs the user's leagues -----------------------------------------------

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
    history.push('/input2');
}

// Grabs the league's roster -------------------------------------------------

export const fetchRoster = (league_id) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchRoster`, {
        params: {
            league_id: league_id
        }
    })
    const data = response.data

    dispatch({ type: FETCH_ROSTER, payload: data }) 
    history.push('/input3');
}

// Set league_id in state just in case ---------------------------------------------

export const setLeague_id = (league_id) => async dispatch => {
    dispatch({ type: SET_LEAGUE_ID, payload: league_id })
}

// Grabs the points for that week --------------------------------------------------

export const fetchMatchupPoints = (week, league_id) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchMatchupPoints`, {
        params: {
            week: week,
            league_id: league_id
        }
    })

    const data = response.data;
    console.log(data);

    dispatch({ type: FETCH_MATCHUPPOINTS, payload: data });
    history.push('/report');
}

// Grabs the user's payouts for that league -----------------------------------------

export const fetchPayout = () => async dispatch => {
    const response = await axios.get(``)
}

// Grab sleeper avatar ----------------------------------------------

export const fetchAvatar = () => async dispatch => {
    
}