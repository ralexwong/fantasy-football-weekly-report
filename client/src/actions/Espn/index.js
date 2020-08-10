import {
    FETCH_ESPN,
    SET_ESPN_WEEK
} from '../types';

import history from '../../history';
import axios from 'axios';

// grab the espn league info
export const fetchEspn = id => async dispatch => {
    console.log(id)

    const response = await axios.get(`api/espn/fetchEspn`, {
        params : {
            id: id
        }
    })
    const data = response.data;
    const teams = data.teams

    // teams info object for overall report page
    let teamsInfo = [];
    for (let i = 0; i < data.teams.length; i++) {
        let name = teams.location + teams.nickname;
        teamsInfo.push({ 
            abbrev: teams.abbrev, 
            id: teams.id, 
            name: name, 
            logo: teams.logo, 
            totalPoitns: teams.points, 
            pointsAgainst: teams.record.overall.pointsAgainst, 
            wins: teams.record.overall.wins})
    }

    
    


    // dispatch({ type: FETCH_ESPN, payload: data });
}

export const setEspnWeek = week => async dispatch => {

    dispatch({ type: SET_ESPN_WEEK, payload: week })
}
