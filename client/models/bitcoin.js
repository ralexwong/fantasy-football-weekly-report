const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bitcoinSchema = new Schema({
  price: { type: Number },
  percentChange24h: { type: Number },
  date: { type: Date, default: Date.now }
});

const Bitcoin = mongoose.model("Bitcoin", bitcoinSchema);

module.exports = Bitcoin;
