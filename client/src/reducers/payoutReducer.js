import {
    FETCH_PAYOUT
    
} from '../actions/types';


const initialState = {

}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PAYOUT:
            return {...state, }
        default:
            return state;
    }
}