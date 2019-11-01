import {
    FETCH_LEAGUES,
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
    REMOVE_GRAPH_DATA
    
} from '../actions/types';

const matchups = []

for (let i = 0; i < 5; i++) {
    matchups.push({
        points1: 100,
        roster1: 'name',
        avatar1: "5d740f8ff48897b2f3f02fa137a414ec",
        roster2: 'default',
        points2: 200,
        matchup_id: i,
        avatar2: "d00bfacf3314ae01d78ebd6130b7d74c"
    })
}

const topScorer = {
    name:"default",
    highscore: 100,
    avatar:"c31055dd8932445db1d1745e5ce89dc2"
}

const closeOne = {
    name: 'name',
    difference: 100,
    avatar: 'c31055dd8932445db1d1745e5ce89dc2'
}

const initialState = {
    nullUsername: null,
    leagues: null,
    matchups: matchups,
    topScorer: topScorer,
    closeOne: closeOne

}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEAGUES:
            // reassign nullUsername: null to clear the state again in case they entered the wrong username before
            return { ...state, nullUsername: null, leagues: action.payload }
        case INVALID_USERNAME:
            return { ...state, nullUsername: action.payload }
        case FETCH_ROSTER:
            return { ...state, league_info: action.payload.league_info }
        case SET_LEAGUE_ID:
            return { ...state, league_id: action.payload }
        case FETCH_MATCHUPPOINTS:
            return { ...state, points: action.payload }
        case SET_WEEK_TO_STATE:
            return { ...state, week: action.payload }
        case REFACTORED_MATCHUPS:
            return { ...state, matchups: action.payload }
        case TOP_SCORER:
            return { ...state, topScorer: action.payload }
        case CLOSE_ONE:
            return { ...state, closeOne: action.payload }
        case FETCH_GRAPHPPG:
            return { ...state, roster: action.payload }
        case REFACTORED_DATA:
            return { ...state, graphPPG: action.payload }
        case REMOVE_GRAPH_DATA:
            return { ...state, graphPPG: null }
        default:
            return state;
    }
}