const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const Bitcoin = require('../../models/bitcoin.js');
const Litecoin = require('../../models/litecoin.js');
const Ethereum = require('../../models/ethereum.js');
const rp = require('request-promise');
const db = require('../../models')


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest',
  qs: {
    'slug': 'bitcoin,ethereum,litecoin'
  },
  headers: {
    'X-CMC_PRO_API_KEY': '5a866443-ac0a-455d-82bd-61eace4e1410'
  },
  json: true,
  gzip: true
};


router.get('/bitcoin', (req, res, next) => {

  db.Bitcoin.find({}).sort({ date: -1 })
    .then(function(dbBitcoin) {

      console.log("bitcoin api route hit");
      res.json(dbBitcoin);
    })
    .catch(function(err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });

});

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

setInterval(checker, 60 * 60000);

module.exports = router;



