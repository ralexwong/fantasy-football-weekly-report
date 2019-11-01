import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_ROSTER,
    SET_LEAGUE_ID,
    FETCH_PAYOUT,
    FETCH_MATCHUPPOINTS,
    SET_WEEK_TO_STATE,
    REFACTORED_MATCHUPS,
    TOP_SCORER,
    CLOSE_ONE,
    FETCH_GRAPHPPG,
    REFACTORED_DATA,
    REMOVE_GRAPH_DATA
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
    dispatch({ type: FETCH_LEAGUES, payload: data });
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

    console.log(data);

    dispatch({ type: FETCH_ROSTER, payload: data }) 
    history.push('/input3');
}

// Set league_id in state just in case ---------------------------------------------

export const setLeague_id = (league_id) => dispatch => {
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
    // console.log(data);

    dispatch({ type: FETCH_MATCHUPPOINTS, payload: data });
    history.push('/report');
}

// Setting week into state for the report page -------------------------------------

export const setWeekToState = (week) => dispatch => {
    dispatch({ type: SET_WEEK_TO_STATE, payload: week})
}

// Grabs the user's payouts for that league -----------------------------------------

export const fetchPayout = () => async dispatch => {
    const response = await axios.get(``)
}

// Push refactored array of matchups so it can be displayed in a pair fashion ---------

export const refactoredMatchups = (matchupArray) => dispatch => {
    dispatch({ type: REFACTORED_MATCHUPS, payload: matchupArray })
}

// Push top scorer into state ------------------------------------------------------

export const topScorer = (name, highscore, avatar) => dispatch => {
    const topScorer = { name, highscore, avatar }
    dispatch({ type: TOP_SCORER, payload: topScorer });
}

// Push close matchup score and winner into state --------------------------------

export const closeOne = (name, difference, avatar) => async dispatch => {
    const closeOne = { name, difference, avatar };
    dispatch({ type: CLOSE_ONE, payload: closeOne })
}

// Fetch the data for graphPPG -------------------------------------------------------

export const fetchGraphPPG = (league_id) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchGraphPPG`, {
        params: {
            league_id: league_id
        }
    })
    const data = response.data;
    // const array = [];

    // for (let i = 0; i < data.length; i++) {
    //     const settings = data[i].settings;
    //     let PPG = (parseInt(settings.fpts) / (parseInt(settings.wins) + parseInt(settings.losses)))
        
    //     array.push({ })
    // }

    dispatch({ type: FETCH_GRAPHPPG, payload: data });
}

// Push refactored data for graphPPG ------------------------------------

export const refactorData = (data) => dispatch => {
    dispatch({ type: REFACTORED_DATA, payload: data})
}

// remove graph data cause the names won't reassign -----------------------

export const removeGraphData = () => dispatch => {
    dispatch({ type: REMOVE_GRAPH_DATA })
}