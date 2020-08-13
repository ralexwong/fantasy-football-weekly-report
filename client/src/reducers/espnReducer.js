import {
    FETCH_ESPN,
    SET_ESPN_WEEK,
    ESPN_SCHEDULE,
    ESPN_RECAP
} from '../actions/types';

const initialState = {
    
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ESPN:
            return { ...state, espn: action.payload }
        case SET_ESPN_WEEK:
            return { ...state, espnWeek: action.payload }
        case ESPN_SCHEDULE:
            return { ...state, espnSchedule: action.payload }
        case ESPN_RECAP:
            return { ...state, recap: action.payload }
        default:
            return state;
    }
}