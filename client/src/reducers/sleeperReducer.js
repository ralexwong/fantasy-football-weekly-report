import {
    FETCH_LEAGUES,
    INVALID_USERNAME
} from '../actions/types';


const initialState = {
    nullUsername: null,
    leagues: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEAGUES:
            // reassign nullUsername: null to clear the state again in case they entered the wrong username before
            return { ...state, nullUsername: null, leagues: action.payload }
        case INVALID_USERNAME:
            return { ...state, nullUsername: action.payload }
        default:
            return state;
    }
}