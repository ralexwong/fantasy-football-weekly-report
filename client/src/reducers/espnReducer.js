import {
    FETCH_ESPN,
    SET_ESPN_WEEK
} from '../actions/types';

const initialState = {
    
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ESPN:
            return { ...state, espn: action.payload }
        case SET_ESPN_WEEK:
            return { ...state, espnWeek: action.payload }
        default:
            return state;
    }
}