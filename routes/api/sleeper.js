const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const Litecoin = require('../../models/litecoin.js');
const Ethereum = require('../../models/ethereum.js');
const rp = require('request-promise');
const db = require('../../models')
const axios = require('axios');


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/first', (req, res, next) => {

  db.Profile.find({}).sort({ date: -1 })
    .then(function(dbProfile) {

      console.log("Profile api route hit");
      res.json(dbProfile);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });

});

router.get(`/sleeper`, (req, res, next) => {
  try {
    
  } catch(e) {
    next(e)
  }
  let username = req.query.username;
  console.log(username);
  axios.get(`https://api.sleeper.app/v1/user/${username}`)
    .then(function(resUser) {
      console.log(resUser.data);
    }, error => {
      console.log(error);
    })
})

router.get('/ethereum', (req, res, next) => {

  db.Ethereum.find({}).sort({ date: -1 })
    .then(function(dbEthereum) {
      console.log("ethereum api route hit");
      res.json(dbEthereum);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });

});

router.get('/litecoin', (req, res, next) => {

  db.Litecoin.find({}).sort({ date: -1 })
    .then(function(dbLitecoin) {
      console.log("litecoin api route hit");
      res.json(dbLitecoin);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });

});

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



