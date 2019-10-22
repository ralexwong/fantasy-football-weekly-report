import {
    FETCH_LEAGUES
} from '../actions/types';


const initialState = {
    nullUsername: null,
    leagues: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LEAGUES:
            // if (action.payload === "is not valid username") {
            //     return { ...state, nullUsername: action.payload }
            // }
            console.log(action.payload);
            return { ...state, leagues: action.payload }
        default:
            return state;
    }
}