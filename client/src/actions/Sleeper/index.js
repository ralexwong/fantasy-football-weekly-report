import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_LEAGUE_INFO,
    SET_LEAGUE_ID,
    FETCH_MATCHUPPOINTS,
    SET_GRAPH_POINTS_TO_STATE,
    SET_WAIVERS_TO_STATE,
    SET_SLEEPER_REPORT,
    SET_ESPN_REPORT,
    SET_SLEEPER_GRAPH_PPG,
    SET_SLEEPER_TITLE,
    SET_SLEEPER_CAPTION,
    SET_SLEEPER_SEASON,
    SET_SLEEPER_YEAR,
    SLEEPER_RECAP,
    SLEEPER_FIRST_PLACE,
    SLEEPER_LAST_PLACE,
    SLEEPER_GRAPH_POINTS,
    SET_SLEEPER_CLOSE_ONE,
    SET_SLEEPER_TOP_SCORER,
    SET_SLEEPER_WEEK,
    SET_SLEEPER_MATCHUPS

} from '../types';
import axios from 'axios';


// Grabs the user's leagues -----------------------------------------------

export const fetchLeagues = (username, year) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchLeagues`, {
        params: {
            username: username,
            year: year
        }
    })
    const data = response.data;
    console.log(data);
    if (data === "is not valid username") {
        await dispatch({ type: INVALID_USERNAME, payload: data });
        return;
    }
    dispatch({ type: FETCH_LEAGUES, payload: data });
}

// Grabs the leagues -------------------------------------------------

export const fetchLeagueInfo = (league_id) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchLeagueInfo`, {
        params: {
            league_id: league_id
        }
    })
    const data = response.data
    const teamsInfo = []

    // console.log(data);

    for (let i = 0; i < data.length; i++) {
        if (data[i].display_name.length > 8) {
            data[i].display_name = data[i].display_name.substring(0,9);
        }
        // grab the necessary data
        let shortenTeamName = data[i].display_name.toUpperCase().substring(0,4);
        teamsInfo.push({
            abbrev: shortenTeamName,
            id: data[i].owner_id,
            name: data[i].display_name,
            logo: data[i].avatar,
            totalPoints: data[i].settings.fpts,
            pointsAgainst: data[i].settings.fpts_against,
            wins: data[i].settings.wins,
            losses: data[i].settings.losses,

            roster_id: data[i].roster_id,
        })
    }

    // console.log(teamsInfo);

    // create the graphPoints object
    let graphPointsInfo = []
    for (let i = 0; i < teamsInfo.length; i++) {
        graphPointsInfo.push({
            label: teamsInfo[i].name,
            y: teamsInfo[i].totalPoints
        })
    }

    // console.log(graphPointsInfo)

    // sorts the graphPointsInfo by points
    graphPointsInfo.sort(function (a, b) { return b.y - a.y })

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

    // set the first and last place
    let first_place = {
        name: recapInfo[0].name,
        logo: recapInfo[0].logo
    }
    let last_place = {
        name: recapInfo[recapInfo.length - 1].name,
        logo: recapInfo[recapInfo.length - 1].logo
    }

    dispatch({ type: SLEEPER_RECAP, payload: recapInfo });
    dispatch({ type: SLEEPER_FIRST_PLACE, payload: first_place })
    dispatch({ type: SLEEPER_LAST_PLACE, payload: last_place })
    dispatch({ type: SLEEPER_GRAPH_POINTS, payload: graphPointsInfo })

    dispatch({ type: FETCH_LEAGUE_INFO, payload: data }) 
}

// Set league_id in state just in case ---------------------------------------------

export const setLeague_id = (league_id) => dispatch => {
    dispatch({ type: SET_LEAGUE_ID, payload: league_id })
}

// Grabs the points for that week --------------------------------------------------

export const fetchMatchupPoints = (week, league_id, league_info) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchMatchupPoints`, {
        params: {
            week: week,
            league_id: league_id
        }
    })

    const data = response.data;
    // console.log(data);

    const topScorer = {
        name: "bob",
        score: 0,
        logo: ""
    }
    const closeOne = {
        name: "bob",
        difference: Infinity,
        logo: ""
    }
    const matchups = [];
    const graphPPG = [];

    // console.log(league_info)

    // sort data array for matchups
    data.sort(function(a, b) { return a.matchup_id - b.matchup_id });

    // loop through to set logos in data
    for (let j = 0; j < data.length; j++) {
        for (let p = 0; p < league_info.length; p++) {
            if (data[j].roster_id === league_info[p].roster_id) {
                data[j].logo = league_info[p].avatar;
                data[j].name = league_info[p].display_name;
                break;
            }
        }
    }

    // console.log(data)
    
    // pushes the combined same matchup_id rosters together in the same object
    // and assigns each roster/points with a 1/2
    for (let i = 0; i < data.length; i += 2) {
        matchups.push({
            roster1: data[i].name,
            points1: data[i].points,
            logo1: data[i].logo,
    
            roster2: data[i + 1].name,
            points2: data[i + 1].points,
            logo2: data[i + 1].logo,
        })
    }

    // console.log(matchups)

    for (let i = 0; i < matchups.length; i++) {
        let points1 = parseFloat(matchups[i].points1);
        let points2 = parseFloat(matchups[i].points2);

        if (points1 > points2) {
          graphPPG.push({ label: matchups[i].roster1, y: points1, color: "#00006b" });
          graphPPG.push({ label: matchups[i].roster2, y: points2, color: "#b61e1e" });
        } else {
          graphPPG.push({ label: matchups[i].roster1, y: points1, color: "#b61e1e" });
          graphPPG.push({ label: matchups[i].roster2, y: points2, color: "#00006b" });
        }
    }

    // sorts the graphPPG by points
    graphPPG.sort(function (a, b) { return b.y - a.y })

    for (let k = 0; k < matchups.length; k++) {
        if (matchups[k].points1 > topScorer.score) {
            topScorer.score = matchups[k].points1;
            topScorer.name = matchups[k].roster1;
            topScorer.logo = matchups[k].logo1;
        }

        if (matchups[k].points2 > topScorer.score) {
            topScorer.score = matchups[k].points2;
            topScorer.name = matchups[k].roster2;
            topScorer.logo = matchups[k].logo2;
        }

        if (Math.abs(parseFloat(matchups[k].points1) - parseFloat(matchups[k].points2)) < closeOne.difference) {
            closeOne.difference = Math.abs(parseFloat(matchups[k].points1) - parseFloat(matchups[k].points2)).toFixed(2);
            if (parseFloat(matchups[k].points1) > parseFloat(matchups[k].points2)) {
              closeOne.name = matchups[k].roster1;
              closeOne.logo = matchups[k].logo1
            } else {
              closeOne.name = matchups[k].roster2;
              closeOne.logo = matchups[k].logo2;
            }
        }
    }

    topScorer.logo = `https://sleepercdn.com/avatars/${topScorer.logo}`;
    closeOne.logo = `https://sleepercdn.com/avatars/${closeOne.logo}`;

    dispatch({ type: SET_SLEEPER_GRAPH_PPG, payload: graphPPG })
    dispatch({ type: SET_SLEEPER_CLOSE_ONE, payload: closeOne })
    dispatch({ type: SET_SLEEPER_TOP_SCORER, payload: topScorer })
    dispatch({ type: SET_SLEEPER_WEEK, payload: week })

    dispatch({ type: FETCH_MATCHUPPOINTS, payload: data });
    dispatch({ type: SET_SLEEPER_MATCHUPS, payload: matchups });
}

// Grabs the user's payouts for that league -----------------------------------------

// export const fetchPayout = () => async dispatch => {
//     const response = await axios.get(``)
// }

// push graph points to state ---------------------------------------

export const setGraphPointsToState = (data) => dispatch => {
    console.log(data);
    dispatch({ type: SET_GRAPH_POINTS_TO_STATE, payload: data})
}

// push waivers data to state -------------------------------------

export const setWaiversToState = (data) => dispatch => {
    dispatch({ type: SET_WAIVERS_TO_STATE, payload: data })
}

// create sleeper report --------------------------------------

export const createSleeperOverallReport = () => dispatch => {
    dispatch({ type: SET_SLEEPER_REPORT, payload: true })
    dispatch({ type: SET_ESPN_REPORT, payload: false })
}
export const createSleeperWeeklyReport = () => dispatch => {
    dispatch({ type: SET_SLEEPER_REPORT, payload: true })
    dispatch({ type: SET_ESPN_REPORT, payload: false })
}

// set sleeper title -----------------------------------------
export const setSleeperTitle = data => async dispatch => {
    dispatch({ type: SET_SLEEPER_TITLE, payload: data })
}

// set sleeper caption ------------------------------------------
export const setSleeperCaption = data => async dispatch => {
    dispatch({ type: SET_SLEEPER_CAPTION, payload: data })
}

// set sleeper season -----------------------------------------------
export const setSleeperSeason = data => async dispatch => {
    dispatch({ type: SET_SLEEPER_SEASON, payload: data })
}

// set sleeper year -------------------------------------------
export const setSleeperYear = data => async dispatch => {
    dispatch({ type: SET_SLEEPER_YEAR, payload: data })
}