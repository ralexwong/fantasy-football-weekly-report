import {
    FETCH_USER
} from '../actions/types';


export default (state = { username: null }, action) => {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, username: action.type.username }
        default:
            return state;
    }
}