import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_LEAGUE_INFO,
    SET_LEAGUE_ID,
    FETCH_MATCHUPPOINTS,
    FETCH_ROSTERS,
    REFACTORED_DATA,
    SET_GRAPH_POINTS_TO_STATE,
    SET_WAIVERS_TO_STATE,
    LAST_PLACE_TO_STATE,
    FIRST_PLACE_TO_STATE,
    SET_RECAP_TO_STATE,
    SET_SLEEPER_REPORT,
    SET_SLEEPER_GRAPH_PPG,
    SET_SLEEPER_CAPTION,
    SET_SLEEPER_TITLE,
    SET_SLEEPER_SEASON,
    SET_SLEEPER_YEAR,
    SLEEPER_RECAP,
    SLEEPER_FIRST_PLACE,
    SLEEPER_LAST_PLACE,
    SLEEPER_GRAPH_POINTS,
    SET_SLEEPER_CLOSE_ONE,
    SET_SLEEPER_TOP_SCORER,
    SET_SLEEPER_WEEK,
    SET_SLEEPER_MATCHUPS
    
} from '../actions/types';
import recap from './recap';

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

const initialState = {
    nullUsername: null,
    sleeperMatchups: matchups,
    sleeperYear: 2020,
    sleeperRecap: recap,
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEAGUES:
            // reassign nullUsername: null to clear the state again in case they entered the wrong username before
            return { ...state, nullUsername: null, leagues: action.payload }
        case INVALID_USERNAME:
            return { ...state, nullUsername: action.payload }
        case FETCH_LEAGUE_INFO:
            return { ...state, league_info: action.payload }
        case SET_LEAGUE_ID:
            return { ...state, league_id: action.payload }
        case FETCH_MATCHUPPOINTS:
            return { ...state, points: action.payload }
        case FETCH_ROSTERS:
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
        case SET_SLEEPER_TITLE:
            return { ...state, sleeperTitle: action.payload }
        case SET_SLEEPER_CAPTION:
            return { ...state, sleeperCaption: action.payload }
        case SET_SLEEPER_SEASON:
            return { ...state, sleeperSeason: action.payload }
        case SET_SLEEPER_YEAR:
            return { ...state, sleeperYear: action.payload }
        case SLEEPER_RECAP:
            return { ...state, sleeperRecap: action.payload }
        case SLEEPER_FIRST_PLACE:
            return { ...state, sleeper_first_place: action.payload }
        case SLEEPER_LAST_PLACE: 
            return { ...state, sleeper_last_place: action.payload }
        case SLEEPER_GRAPH_POINTS:
            return { ...state, sleeperGraphPoints: action.payload }
        case SET_SLEEPER_CLOSE_ONE:
            return { ...state, sleeperCloseOne: action.payload }
        case SET_SLEEPER_TOP_SCORER:
            return { ...state, sleeperTopScorer: action.payload }
        case SET_SLEEPER_WEEK:
            return { ...state, sleeperWeek: action.payload }
        case SET_SLEEPER_MATCHUPS:
            return { ...state, sleeperMatchups: action.payload } 

        default:
            return state;
    }
}