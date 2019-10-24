const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleeperRosterSchema = new Schema({
  user_id: { type: String },
  display_name: { type: String },
  league_id: { type: String }
});

const SleeperRoster = mongoose.model("sleeperRoster", sleeperRosterSchema);

module.exports = SleeperRoster;