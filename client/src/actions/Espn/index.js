import {
    FETCH_ESPN,
    SET_ESPN_WEEK,
    ESPN_SCHEDULE,
    ESPN_RECAP
} from '../types';

// import history from '../../history';
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
    const schedule = data.schedule;

    // teams info object for overall report page
    const teamsInfo = [];
    for (let i = 0; i < teams.length; i++) {
        let name = teams[i].location + teams[i].nickname;
        teamsInfo.push({ 
            abbrev: teams[i].abbrev, 
            id: teams[i].id, 
            name: name, 
            logo: teams[i].logo, 
            totalPoints: teams[i].points, 
            pointsAgainst: teams[i].record.overall.pointsAgainst, 
            wins: teams[i].record.overall.wins,
            losses: teams[i].record.overall.losses,
        })
    }

    // create the recap object
    let recapInfo = []
    for (let i = 0; i < teamsInfo.length; i++) {
        let name = teamsInfo[i].abbrev;
        let PPG = parseFloat((teamsInfo[i].totalPoints / ((teamsInfo[i].wins) + (teamsInfo[i].losses))).toFixed(2));
        let PF = Math.round(teamsInfo[i].totalPoints);
        let PA = Math.round(teamsInfo[i].pointsAgainst);
        let wins = teamsInfo[i].wins;
        let losses = teamsInfo[i].losses;

        let logo = teamsInfo[i].logo

        recapInfo.push({ 
            name: name,
            PPG: PPG,
            PF: PF,
            PA: PA,
            wins: wins,
            losses: losses,

            logo: logo
        })
    }

    // set the colors for the table
    recapInfo.sort((a, b) => (a.PPG < b.PPG) ? 1 : -1);
    for (let i = 0; i < recapInfo.length; i++) {
      recapInfo[i].PPGcolor = `color${(i + 1)}`;
    }

    recapInfo.sort((a, b) => (a.PF < b.PF) ? 1 : -1);
    for (let i = 0; i < recapInfo.length; i++) {
      recapInfo[i].PFcolor = `color${(i + 1)}`;
    }

    recapInfo.sort((a, b) => (a.PA > b.PA) ? 1 : -1);
    for (let i = 0; i < recapInfo.length; i++) {
      recapInfo[i].PAcolor = `color${(i + 1)}`;
    }


    recapInfo.sort((a, b) => (a.wins < b.wins) ? 1 : (a.wins === b.wins) ? ((a.PF < b.PF) ? 1 : -1) : -1)

    // set the first and last place
    let first_place = recapInfo


    dispatch({ type: FETCH_ESPN, payload: teamsInfo });
    dispatch({ type: ESPN_SCHEDULE, payload: schedule })
    dispatch({ type: ESPN_RECAP, payload: recapInfo })

}

export const setEspnWeek = week => async dispatch => {

    dispatch({ type: SET_ESPN_WEEK, payload: week })
}
