import {
    FETCH_LEAGUES,
    INVALID_USERNAME,
    FETCH_ROSTER,
    SET_LEAGUE_ID,
    FETCH_MATCHUPPOINTS,
    SET_WEEK_TO_STATE,
    REFACTORED_MATCHUPS,
    TOP_SCORER,
    CLOSE_ONE,
    FETCH_GRAPHPPG,
    REFACTORED_DATA,
    SET_GRAPH_POINTS_TO_STATE,
    SET_WAIVERS_TO_STATE,
    LAST_PLACE_TO_STATE,
    FIRST_PLACE_TO_STATE,
    SET_RECAP_TO_STATE,
    SET_SLEEPER_REPORT,
    SET_ESPN_REPORT,
    SET_SLEEPER_GRAPH_PPG,
    SET_SLEEPER_TITLE,
    SET_SLEEPER_CAPTION,
    SET_SLEEPER_SEASON,
    SET_SLEEPER_YEAR
} from '../types';
import axios from 'axios';


// Grabs the user's leagues -----------------------------------------------

export const fetchLeagues = (username) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchLeagues`, {
        params: {
            username: username
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

// Grabs the league's roster -------------------------------------------------

export const fetchRoster = (league_id) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchRoster`, {
        params: {
            league_id: league_id
        }
    })
    const data = response.data.league_info

    console.log(data);

    dispatch({ type: FETCH_ROSTER, payload: data }) 
}

// Set league_id in state just in case ---------------------------------------------

export const setLeague_id = (league_id) => dispatch => {
    dispatch({ type: SET_LEAGUE_ID, payload: league_id })
}

// Grabs the points for that week --------------------------------------------------

export const fetchMatchupPoints = (week, league_id) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchMatchupPoints`, {
        params: {
            week: week,
            league_id: league_id
        }
    })

    const data = response.data;
    console.log(data);

//       // refactor the two arrays into an array with rosters with the same matchup_id to be paired in the same object
//   refactorState = (league_info, points) => {
//     let combinedObjects = [];

//     // splices out a roster if they do not have a matchup this week
//     for (let i = 0; i < league_info.length; i++) {
//       if (league_info[i].roster_id === null) {
//         league_info.splice(i, 1);
//       }
//     }

//     // replaces the roster_id with display_name
//     for (let i = 0; i < league_info.length; i++) {
//       for (let j = 0; j < league_info.length; j++) {
//         if (league_info[i].roster_id === points[j].roster_id) {
//           points[j].roster_id = league_info[i].display_name;
//           points[j].avatar = league_info[i].avatar;
//         }
//       }
//     }

//     // sorts the points array by matchup_id
//     points.sort(function (a, b) { return a.matchup_id - b.matchup_id })

//     // pushes the combined same matchup_id rosters together in the same object
//     // and assigns each roster/points with a 1/2
//     for (let i = 0; i < points.length; i += 2) {
//       let object = {};
//       object.roster1 = points[i].roster_id;
//       object.points1 = points[i].points;
//       object.avatar1 = points[i].avatar;

//       object.roster2 = points[i + 1].roster_id;
//       object.points2 = points[i + 1].points;
//       object.matchup_id = points[i].matchup_id;
//       object.avatar2 = points[i + 1].avatar;

//       combinedObjects.push(object);
//     }

//     // push the refactored matchups into state to be mapped out
//     this.props.refactoredMatchups(combinedObjects);

//     let arr = [];

//     console.log(combinedObjects);
//     for (let i = 0; i < combinedObjects.length; i++) {
//       if (parseFloat(combinedObjects[i].points1) > parseFloat(combinedObjects[i].points2)) {
//         arr.push({ label: combinedObjects[i].roster1, y: parseFloat(combinedObjects[i].points1), color: "#00006b" });
//         arr.push({ label: combinedObjects[i].roster2, y: parseFloat(combinedObjects[i].points2), color: "#b61e1e" });
//       } else {
//         arr.push({ label: combinedObjects[i].roster1, y: parseFloat(combinedObjects[i].points1), color: "#b61e1e" });
//         arr.push({ label: combinedObjects[i].roster2, y: parseFloat(combinedObjects[i].points2), color: "#00006b" });
//       }
//     }

//     arr.sort(function (a, b) { return b.y - a.y})

//     console.log("in refactorState report CDM " + arr);

//     this.props.setGraphPPG(arr);

//     this.topScorer(points);

//     // requires the matchup array and cannot be called at the same time in a different component
//     this.closeOne(combinedObjects);
//   }

//   closeOne = (matchups) => {
//     let name = "";
//     let difference = 9999;
//     let avatar = "";
//     for (let i = 0; i < matchups.length; i++) {
//       if (Math.abs(parseFloat(matchups[i].points1) - parseFloat(matchups[i].points2)) < difference) {
//         difference = Math.abs(parseFloat(matchups[i].points1) - parseFloat(matchups[i].points2));
//         if (parseFloat(matchups[i].points1) > parseFloat(matchups[i].points2)) {
//           name = matchups[i].roster1;
//           avatar = matchups[i].avatar1
//         } else {
//           name = matchups[i].roster2;
//           avatar = matchups[i].avatar2
//         }
//       }
//     }

//     const fixedDiffernce = parseFloat(difference).toFixed(2)

//     this.props.closeOne(name, fixedDiffernce, avatar);
//   }

//   topScorer = (points) => {
//     let name = "";
//     let highscore = 0.00;
//     let avatar = ""
//     for (let i = 0; i < points.length; i++) {
//       if (parseFloat(points[i].points) > highscore) {
//         highscore = parseFloat(points[i].points);
//         name = points[i].roster_id;
//         avatar = points[i].avatar;
//       }
//     }
//     this.props.topScorer(name, highscore, avatar);
//   }

    dispatch({ type: FETCH_MATCHUPPOINTS, payload: data });
}

// Setting week into state for the report page -------------------------------------

export const setWeekToState = (week) => dispatch => {
    dispatch({ type: SET_WEEK_TO_STATE, payload: week})
}

// Grabs the user's payouts for that league -----------------------------------------

// export const fetchPayout = () => async dispatch => {
//     const response = await axios.get(``)
// }

// Push refactored array of matchups so it can be displayed in a pair fashion ---------

export const refactoredMatchups = (matchupArray) => dispatch => {
    console.log(matchupArray);
    dispatch({ type: REFACTORED_MATCHUPS, payload: matchupArray })
}

// Push top scorer into state ------------------------------------------------------

export const topScorer = (name, score, logo) => dispatch => {
    const topScorer = { 
        name, 
        score, 
        logo: `https://sleepercdn.com/avatars/${logo}`
    }
    dispatch({ type: TOP_SCORER, payload: topScorer });
}

// Push close matchup score and winner into state --------------------------------

export const closeOne = (name, difference, logo) => async dispatch => {
    const closeOne = { 
        name, 
        difference, 
        logo: `https://sleepercdn.com/avatars/${logo}`
    };
    dispatch({ type: CLOSE_ONE, payload: closeOne })
}

// Fetch the data for graphPPG -------------------------------------------------------

export const fetchGraphPPG = (league_id) => async dispatch => {
    const response = await axios.get(`api/sleeper/fetchGraphPPG`, {
        params: {
            league_id: league_id
        }
    })
    const data = response.data;

    dispatch({ type: FETCH_GRAPHPPG, payload: data });
}

// Push refactored data for graphPPG ------------------------------------

export const refactorData = (data) => dispatch => {
    console.log(data);
    dispatch({ type: REFACTORED_DATA, payload: data})
}

// push graphPPG to state -------------------------------------

export const setGraphPPG = data => dispatch => {
    dispatch({ type: SET_SLEEPER_GRAPH_PPG, payload: data })
}

// push graph points to state ---------------------------------------

export const setGraphPointsToState = (data) => dispatch => {
    console.log(data);
    dispatch({ type: SET_GRAPH_POINTS_TO_STATE, payload: data})
}

// push waivers data to state -------------------------------------

export const setWaiversToState = (data) => dispatch => {
    dispatch({ type: SET_WAIVERS_TO_STATE, payload: data })
}

// push cards data to state ---------------------------------------

export const setCardsToState = (first_place, last_place) => dispatch => {
    dispatch({ type: LAST_PLACE_TO_STATE, payload: last_place })
    dispatch({ type: FIRST_PLACE_TO_STATE, payload: first_place })
}

// push recap data to state -----------------------------------

export const setRecapToState = (data) => dispatch => {
    dispatch({ type: SET_RECAP_TO_STATE, payload: data })
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