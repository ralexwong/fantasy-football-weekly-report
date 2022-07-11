const path = require("path");
const router = require("express").Router();

const sleeperRoute = require("./sleeper");
const espnRoute = require("./espn");
const yahooRoute = require("./yahoo")

// Book routes
router.use("/sleeper", sleeperRoute);
router.use("/espn", espnRoute);
router.use("/yahoo", yahooRoute);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;