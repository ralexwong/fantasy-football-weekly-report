import {
    FETCH_ESPN,
    SET_ESPN_WEEK,
    ESPN_SCHEDULE,
    ESPN_RECAP,
    ESPN_FIRST_PLACE,
    ESPN_LAST_PLACE,
    SET_ESPN_REPORT,
    SET_SLEEPER_REPORT,
    ESPN_GRAPH_POINTS
} from '../types';

import axios from 'axios';

// grab the espn league info -------------------------------------
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

    console.log(data)

    // teams info object for overall report page
    const teamsInfo = [];
    for (let i = 0; i < teams.length; i++) {
        let name = teams[i].location + " " + teams[i].nickname;
        if (name.length > 8) {
            name = name.substring(0,9);
        }
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

    console.log(teamsInfo)

    // create the graphPoints object
    let graphPointsInfo = []
    for (let i = 0; i < teamsInfo.length; i++) {
        graphPointsInfo.push({
            label: teamsInfo[i].name,
            y: teamsInfo[i].totalPoints
        })
    }

    // create the recap object
    let recapInfo = []
    for (let i = 0; i < teamsInfo.length; i++) {
        let abbrev = teamsInfo[i].abbrev;
        let PPG = parseFloat((teamsInfo[i].totalPoints / ((teamsInfo[i].wins) + (teamsInfo[i].losses))).toFixed(2));
        let PF = Math.round(teamsInfo[i].totalPoints);
        let PA = Math.round(teamsInfo[i].pointsAgainst);
        let wins = teamsInfo[i].wins;
        let losses = teamsInfo[i].losses;

        let name = teamsInfo[i].name
        let logo = teamsInfo[i].logo;

        recapInfo.push({ 
            abbrev: abbrev,
            PPG: PPG,
            PF: PF,
            PA: PA,
            wins: wins,
            losses: losses,

            name: name,
            logo: logo,
        })
    }

    // set the colors for the table
    // sorting the league by PPG
    recapInfo.sort((a, b) => (a.PPG < b.PPG) ? 1 : -1);
    for (let i = 0; i < recapInfo.length; i++) {
      recapInfo[i].PPGcolor = `color${(i + 1)}`;
    }

    // sorting the league by PF
    recapInfo.sort((a, b) => (a.PF < b.PF) ? 1 : -1);
    for (let i = 0; i < recapInfo.length; i++) {
      recapInfo[i].PFcolor = `color${(i + 1)}`;
    }

    // sorting the league by PA
    recapInfo.sort((a, b) => (a.PA > b.PA) ? 1 : -1);
    for (let i = 0; i < recapInfo.length; i++) {
      recapInfo[i].PAcolor = `color${(i + 1)}`;
    }

    // sorting the league by wins. If the wins are equal, sort by PF
    recapInfo.sort((a, b) => (a.wins < b.wins) ? 1 : (a.wins === b.wins) ? ((a.PF < b.PF) ? 1 : -1) : -1)

    console.log(recapInfo)
    // set the first and last place
    let first_place = {
        name: recapInfo[0].name,
        logo: recapInfo[0].logo
    }
    let last_place = {
        name: recapInfo[recapInfo.length - 1].name,
        logo: recapInfo[recapInfo.length - 1].logo
    }



    dispatch({ type: FETCH_ESPN, payload: teamsInfo });
    dispatch({ type: ESPN_SCHEDULE, payload: schedule });
    dispatch({ type: ESPN_RECAP, payload: recapInfo });
    dispatch({ type: ESPN_FIRST_PLACE, payload: first_place })
    dispatch({ type: ESPN_LAST_PLACE, payload: last_place })
    dispatch({ type: ESPN_GRAPH_POINTS, payload: graphPointsInfo })

}

// setting the espn week --------------------------------------------------------
export const setEspnWeek = week => async dispatch => {
    dispatch({ type: SET_ESPN_WEEK, payload: week })
}

// creating the espn report --------------------------------------------
export const createEspnWeeklyReport = () => async dispatch => {
    dispatch({ type: SET_ESPN_REPORT, payload: true })
    dispatch({ type: SET_SLEEPER_REPORT, payload: false })
}
export const createEspnOverallReport = () => async dispatch => {
    dispatch ({ type: SET_ESPN_REPORT, payload: true })
    dispatch ({ type: SET_SLEEPER_REPORT, payload: false })
}