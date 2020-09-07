import {
    FETCH_ESPN,
    SET_ESPN_WEEK,
    ESPN_SCHEDULE,
    ESPN_RECAP,
    ESPN_FIRST_PLACE,
    ESPN_LAST_PLACE,
    SET_ESPN_REPORT,
    ESPN_GRAPH_POINTS,
    SET_ESPN_MATCHUPS,
    SET_ESPN_CLOSE_ONE,
    SET_ESPN_TOP_SCORER,
    SET_ESPN_GRAPH_PPG,
    SET_ESPN_TITLE,
    SET_ESPN_CAPTION,
    SET_ESPN_SEASON,
    SET_ESPN_YEAR
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
            return { ...state, espnRecap: action.payload }
        case ESPN_FIRST_PLACE:
            return { ...state, espn_first_place: action.payload }
        case ESPN_LAST_PLACE:
            return { ...state, espn_last_place: action.payload }
        case SET_ESPN_REPORT:
            return { ...state, espnReport: action.payload }
        case ESPN_GRAPH_POINTS: 
            return { ...state, espnGraphPoints: action.payload }
        case SET_ESPN_MATCHUPS:
            return { ...state, espnMatchups: action.payload }
        case SET_ESPN_CLOSE_ONE:
            return { ...state, espnCloseOne: action.payload }
        case SET_ESPN_TOP_SCORER:
            return { ...state, espnTopScorer: action.payload }
        case SET_ESPN_GRAPH_PPG:
            return { ...state, espnGraphPPG: action.payload }
        case SET_ESPN_TITLE:
            return { ...state, espnTitle: action.payload }
        case SET_ESPN_CAPTION:
            return { ...state, espnCaption: action.payload }
        case SET_ESPN_SEASON:
            return { ...state, espnSeason: action.payload }
        case SET_ESPN_YEAR:
            return { ...state, espnYear: action.payload }
        default:
            return state;
    }
}