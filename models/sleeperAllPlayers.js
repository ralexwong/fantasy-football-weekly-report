const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sleeperAllPlayersSchema = new Schema({
  player_id: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  team: { type: String },
  position: { type: String }
});

const SleeperAllPlayers = mongoose.model("sleeperAllPlayers", sleeperAllPlayersSchema);

module.exports = SleeperAllPlayers;
