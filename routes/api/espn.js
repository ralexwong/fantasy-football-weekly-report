const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");

const axios = require('axios');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get(`/fetchEspn`, async (req, res, next) => {
    try {
        const id = req.query.id;
        const year = req.query.year;
        console.log(id)
        console.log(year)
        const response = await axios.get(`https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leagues/${id}?view=mStandings&view=mTeam`);
        const data = response.data;

        res.json(data);

    } catch (e) {
        console.log(e);
        next(e)
    }
})

module.exports = router;
