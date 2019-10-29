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
      const leagues_data = leagues.data;
  
      res.json(leagues_data);
    }
  } catch(e) {
    next(e)
  }
})

router.get(`/fetchRoster`, async (req, res, next) => {
  try {

    // find the league if its in database or through API
    const league_id = req.query.league_id;
    const resRoster = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/users`);
    const data = resRoster.data;

    const rosterFromDatabase = await SleeperRoster.find({ "league_id": league_id });

    // if this league isn't in the database
    if (!rosterFromDatabase.length) {

      // pull the relevant info from the API and push it into a new array
      const arrayRoster = [];
      for (let i = 0; i < data.length; i++) {
        arrayRoster.push({
          user_id: data[i].user_id,
          display_name: data[i].display_name,
          avatar: data[i].avatar,
          roster_id: ""
        })
      }

      // create the schema
      const sleeperRoster = new SleeperRoster({
        league_id: data[0].league_id,
        league_info: [...arrayRoster]
      })
      
      // call API to assign the correct roster_id to each roster
      const linkRosterId = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/rosters`);
      const rosterData = linkRosterId.data;


      for (let i = 0; i < arrayRoster.length; i++) {
        for (let j = 0; j < rosterData.length; j++) {
          if (sleeperRoster.league_info[i].user_id === rosterData[j].owner_id) {
            sleeperRoster.league_info[i].roster_id = rosterData[j].roster_id
          }
        }
      }

      // console.log(sleeperRoster);
      console.log("league saved");

      // save the schema in the databse and push the response back to the client side
      sleeperRoster.save()
      res.json(sleeperRoster)

    }
    // if its already in database the result will be sent to the client
    if (rosterFromDatabase.length) {
      console.log("league already created");
      res.json(rosterFromDatabase[0])
    }

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

module.exports = router;



