const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const SleeperAllPlayers = require('../../models/sleeperAllPlayers.js')
const SleeperRoster = require("../../models/roster.js")
const rp = require('request-promise');
const db = require('../../models')
const axios = require('axios');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get(`/fetchLeagues`, async (req, res, next) => {
  try {
    const username = req.query.username;
    const resUser = await axios.get(`https://api.sleeper.app/v1/user/${username}`);
    const data = resUser.data;
    if (data === null) {
      res.json("is not valid username")
    } 
    else 
    {
      console.log(`${username}'s user_id: ${data.user_id}`);

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
    const league_id = req.query.league_id;
    const resRoster = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/users`);
    const data = resRoster.data;

    const rosterFromDatabase = await db.SleeperRoster.find({ "league_id": league_id });

    if (!rosterFromDatabase.length) {

      const arrayRoster = [];
      for (let i = 0; i < data.length; i++) {
        arrayRoster.push({
          user_id: data[i].user_id,
          display_name: data[i].display_name
        })
      }

      console.log(arrayRoster);
      const sleeperRoster = new SleeperRoster({
        league_id: data[0].league_id,
        league_info: [...arrayRoster]
      })
      
      console.log(sleeperRoster);

      const linkRosterId = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/rosters`);
      const rosterData = linkRosterId.data;



      // sleeperRoster.save()

    }
    if (rosterFromDatabase.length) {
      console.log("true");
    }



  } catch(e) {
    next(e)
  }
})

checker = () => {
  rp(requestOptions).then(response => {
    console.log(response.data[1]);
    console.log(response.data[2]);
    console.log(response.data[1027]);

    const bitcoin = new Bitcoin({
      price: response.data[1].quote.USD.price,
      percentChange24h: response.data[1].quote.USD.percent_change_24h

    })

    const litecoin = new Litecoin({
      price: response.data[2].quote.USD.price,
      percentChange24h: response.data[2].quote.USD.percent_change_24h
    })

    const ethereum = new Ethereum({
      price: response.data[1027].quote.USD.price,
      percentChange24h: response.data[1027].quote.USD.percent_change_24h
    })
  
    bitcoin.save().then(data => {
      return;
    })
    .catch(err => {
      res.json({ message: err })
    })

    litecoin.save().then(data => {
      return;
    })
    .catch(err => {
      res.json({ message: err })
    })

    ethereum.save().then(data => {
      return;
    })
    .catch(err => {
      res.json({ message: err })
    })
  
  }).catch((err) => {
    console.log('API call error:', err.message);
  })
}


module.exports = router;



