const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const SleeperRoster = require("../../models/roster.js")
const rp = require('request-promise');
const axios = require('axios');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get(`/fetchLeagues`, async (req, res, next) => {
  try {

    // grab the users username_id
    const username = req.query.username;
    const resUser = await axios.get(`https://api.sleeper.app/v1/user/${username}`);
    const data = resUser.data;

    // if they pass through a username that isn't valid
    if (data === null) {
      res.json("is not valid username")
    } 
    else 
    {
      console.log(`${username}'s user_id: ${data.user_id}`);

      // grab the leagues for this user
      const user_id = data.user_id;
      const leagues = await axios.get(`https://api.sleeper.app/v1/user/${user_id}/leagues/nfl/2019`);
      const league_data = leagues.data;
  
      res.json(league_data);
    }
  } catch(e) {
    next(e)
  }
})

router.get(`/fetchLeagueInfo`, async (req, res, next) => {
  try {

    // grab the query 
    const league_id = req.query.league_id;

    const resUsers = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/users`);
    const users = resUsers.data;
    
    // call API to assign the correct roster_id to each roster
    const linkRosterId = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/rosters`);
    const rosters = linkRosterId.data;

    for (let i = 0; i < users.length; i++) {
      for (let j = 0; j < rosters.length; j++) {
        if (users[i].user_id === rosters[j].owner_id) {
          rosters[j].display_name = users[i].display_name,
          rosters[j].avatar = users[i].avatar
        }
      }
    }
    res.json(rosters)

  } catch(e) {
    next(e)
  }
})


router.get(`/fetchMatchupPoints`, async (req, res, next) => {
  try {
    const week = req.query.week;
    const league_id = req.query.league_id;

    // grab the matchup points from this week
    const resWeek = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/matchups/${week}`);
    const data = resWeek.data;

    // push relevant data into array and send to client side to be pushed into state
    const array = [];
    for (let i = 0; i < data.length; i++) {
      array.push({
        roster_id: data[i].roster_id,
        points: parseFloat(data[i].points).toFixed(2),
        matchup_id: data[i].matchup_id
      })
    }

    console.log(array);

    res.json(array)

  } catch(e) {
    next(e)
  }
})

router.get(`/fetchRosters`, async (req, res, next) => {
  try {
    const league_id = req.query.league_id;
    const response = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/rosters`);
    const data = response.data;

    res.json(data)

  } catch(e) {
    next(e)
  }
})

module.exports = router;



