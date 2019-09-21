const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ethereumSchema = new Schema({
  price: { type: Number, reqiuired: true },
  percentChange24h: { type: Number },
  date: { type: Date, default: Date.now }
});

const Ethereum = mongoose.model("Ethereum", ethereumSchema);

module.exports = Ethereum;
