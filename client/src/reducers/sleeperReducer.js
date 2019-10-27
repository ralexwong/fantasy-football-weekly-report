import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_ROSTER
    
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
            return {...state, }
        default:
            return state;
    }
}