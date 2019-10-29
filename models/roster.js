const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleeperRosterSchema = new Schema({
  league_id: { type: String },
  league_info: [{
      user_id: { type: String },
      roster_id: { type: Number },
      display_name: { type: String },
      avatar: { type: String }
    }]
});

const SleeperRoster = mongoose.model("sleeperRoster", sleeperRosterSchema);

module.exports = SleeperRoster;