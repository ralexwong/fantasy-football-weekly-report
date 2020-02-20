import {
    FETCH_LEAGUES,
    SET_USERNAME,
    INVALID_USERNAME,
    FETCH_ROSTER,
    SET_LEAGUE_ID,
    FETCH_MATCHUPPOINTS,
    SET_WEEK_TO_STATE,
    REFACTORED_MATCHUPS,
    TOP_SCORER,
    CLOSE_ONE,
    FETCH_GRAPHPPG,
    REFACTORED_DATA,
    REMOVE_GRAPH_DATA,
    SET_GRAPH_POINTS_TO_STATE,
    SET_WAIVERS_TO_STATE,
    LAST_PLACE_TO_STATE,
    FIRST_PLACE_TO_STATE,
    SET_RECAP_TO_STATE

} from '../types';
import history from '../../history';
import axios from 'axios';


// Grabs the user's leagues -----------------------------------------------

export const fetchLeagues = (username) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchLeagues`, {
        params: {
            username: username
        }
    })
    const data = response.data;
    console.log(data);
    if (data === "is not valid username") {
        await dispatch({ type: INVALID_USERNAME, payload: data });
        return;
    }
    dispatch({ type: FETCH_LEAGUES, payload: data });
}

export const setUsername = (username) => async dispatch => {
    dispatch({ type: SET_USERNAME, payload: username })
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
    console.log(data);

    dispatch({ type: FETCH_MATCHUPPOINTS, payload: data });
    history.push('/report');
}

// Setting week into state for the report page -------------------------------------

export const setWeekToState = (week) => dispatch => {
    dispatch({ type: SET_WEEK_TO_STATE, payload: week})
}

// Grabs the user's payouts for that league -----------------------------------------

// export const fetchPayout = () => async dispatch => {
//     const response = await axios.get(``)
// }

// Push refactored array of matchups so it can be displayed in a pair fashion ---------

export const refactoredMatchups = (matchupArray) => dispatch => {
    console.log(matchupArray);
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

    dispatch({ type: FETCH_GRAPHPPG, payload: data });
}

// Push refactored data for graphPPG ------------------------------------

export const refactorData = (data) => dispatch => {
    console.log(data);
    dispatch({ type: REFACTORED_DATA, payload: data})
}

// remove graph data cause the names won't reassign -----------------------

export const removeGraphData = () => dispatch => {
    dispatch({ type: REMOVE_GRAPH_DATA })
}

// push graph points to state ---------------------------------------

export const setGraphPointsToState = (data) => dispatch => {
    console.log(data);
    dispatch({ type: SET_GRAPH_POINTS_TO_STATE, payload: data})
}

// push waivers data to state -------------------------------------

export const setWaiversToState = (data) => dispatch => {
    dispatch({ type: SET_WAIVERS_TO_STATE, payload: data })
}

// push cards data to state ---------------------------------------

export const setCardsToState = (first_place, last_place) => dispatch => {
    dispatch({ type: LAST_PLACE_TO_STATE, payload: last_place })
    dispatch({ type: FIRST_PLACE_TO_STATE, payload: first_place })
}

// push recap data to state -----------------------------------

export const setRecapToState = (data) => dispatch => {
    dispatch({ type: SET_RECAP_TO_STATE, payload: data })
}