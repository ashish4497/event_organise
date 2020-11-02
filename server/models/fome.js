const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fomeSchema = new Schema({
  eventname: { type: String, require: true },
  eventvenue: { type: String, require: true },
  startdate: { type: Date, require: true },
  enddate: { type: Date, require: true },
  city: { type: String, require: true },
  eventDescription: { type: String, require: true },
  phoneNo: { type: Number, require: true, unique: true },
});

const eventFome = mongoose.model("eventFome", fomeSchema);
module.exports = eventFome;
