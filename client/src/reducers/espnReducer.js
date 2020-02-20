import {
    FETCH_ESPN,
} from '../actions/types';

const initialState = {
    
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ESPN:
            return { ...state, espn: action.payload }
        default:
            return state;
    }
}