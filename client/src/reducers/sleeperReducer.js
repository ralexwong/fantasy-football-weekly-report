import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_ROSTER,
    SET_LEAGUE_ID,
    FETCH_MATCHUPPOINTS
    
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
        default:
            return state;
    }
}