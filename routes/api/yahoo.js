const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");

const axios = require('axios');
const YahooFantasy = require('yahoo-fantasy');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

require('dotenv').config()

console.log(process.env.APPLICATION_KEY)

const yf = new YahooFantasy(
    process.env.APPLICATION_KEY, // Yahoo! Application Key
    process.env.APPLICATION_SECRET, // Yahoo! Application Secret
);

router.get(`/fetchYahoo`, async (req, res, next) => {
    try {

        yf.auth(res);

        const response = await axios.get(`https://fantasysports.yahooapis.com/fantasy/v2/game/nfl`);
        const data = response.data;

        console.log(data)

        res.json(data);

    } catch (e) {
        console.log(e);
        next(e)
    }
})

module.exports = router;