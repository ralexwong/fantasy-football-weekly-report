import { combineReducers } from 'redux';
import sleeperReducer from './sleeperReducer';
import espnReducer from './espnReducer';

import payoutReducer from './payoutReducer';

export default combineReducers({
    sleeper: sleeperReducer,
    espn: espnReducer,
    payout: payoutReducer
});