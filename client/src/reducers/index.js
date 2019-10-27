import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sleeperReducer from './sleeperReducer'
import payoutReducer from './payoutReducer';

export default combineReducers({
    form: formReducer,
    sleeper: sleeperReducer,
    payout: payoutReducer
});