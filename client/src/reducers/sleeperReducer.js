import {
    FETCH_LEAGUES
} from '../actions/types';


export default (state = { username: null }, action) => {
    switch (action.type) {
        case FETCH_LEAGUES:
            // console.log(action.payload.user_id);
            return { ...state, username: action.payload.user_id }
        default:
            return state;
    }
}