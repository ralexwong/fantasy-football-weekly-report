import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_ROSTER,
    SET_LEAGUE_ID,
    FETCH_MATCHUPPOINTS,
    SET_WEEK_TO_STATE,
    REFACTORED_MATCHUPS,
    TOP_SCORER,
    CLOSE_ONE
    
} from '../actions/types';


const initialState = {
    nullUsername: null,
    leagues: null,

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
        default:
            return state;
    }
}