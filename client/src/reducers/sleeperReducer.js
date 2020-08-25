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
    SET_GRAPH_POINTS_TO_STATE,
    SET_WAIVERS_TO_STATE,
    LAST_PLACE_TO_STATE,
    FIRST_PLACE_TO_STATE,
    SET_RECAP_TO_STATE,
    SET_SLEEPER_REPORT,
    SET_SLEEPER_GRAPH_PPG,

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

const first_place = {
    name: 'name',
    avatar: 'c31055dd8932445db1d1745e5ce89dc2'
}

const last_place = {
    name: 'name',
    avatar: 'c31055dd8932445db1d1745e5ce89dc2'
}

const initialState = {
    nullUsername: null,
    leagues: null,
    matchups: matchups,
    topScorer: topScorer,
    closeOne: closeOne,
    first_place,
    last_place
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
            return { ...state, sleeperWeek: action.payload }
        case REFACTORED_MATCHUPS:
            return { ...state, sleeperMatchups: action.payload }
        case TOP_SCORER:
            return { ...state, sleeperTopScorer: action.payload }
        case CLOSE_ONE:
            return { ...state, sleeperCloseOne: action.payload }
        case FETCH_GRAPHPPG:
            return { ...state, roster: action.payload }
        case SET_SLEEPER_GRAPH_PPG:
            return { ...state, sleeperGraphPPG: action.payload }
        case REFACTORED_DATA:
            return { ...state, sleeperGraphPPG: action.payload }
        case SET_GRAPH_POINTS_TO_STATE:
            return { ...state, sleeperGraphPoints: action.payload }
        case SET_WAIVERS_TO_STATE:
            return { ...state, waivers: action.payload }
        case LAST_PLACE_TO_STATE:
            return { ...state, last_place: action.payload }
        case FIRST_PLACE_TO_STATE:
            return { ...state, first_place: action.payload }
        case SET_RECAP_TO_STATE:
            return { ...state, sleeperRecap: action.payload }
        case SET_SLEEPER_REPORT:
            return {...state, sleeperReport: action.payload }
        default:
            return state;
    }
}