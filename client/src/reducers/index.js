import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sleeperReducer from './sleeperReducer'

export default combineReducers({
    form: formReducer,
    sleeper: sleeperReducer
});