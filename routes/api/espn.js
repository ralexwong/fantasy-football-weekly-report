const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const rp = require('request-promise');
const axios = require('axios');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get(`/fetchEspn`, async (req, res, next) => {
    try {
        const id = req.query.id;
        console.log(id)
        const response = await axios.get(`https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/2205891?view=mStandings&view=mTeam`);
        const data = response.data;

        res.json(data);

    } catch (e) {
        console.log(e);
        next(e)
    }
})

module.exports = router;
