const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fomeSchema = new Schema({
  eventname: { type: String, required: true },
  eventvenue: { type: String, required: true },
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
  city: { type: String, required: true },
  eventDescription: { type: String, require: true },
  phoneNo: { type: Number, required: true, unique: true },
});

const eventForm = mongoose.model("eventFome", fomeSchema);
module.exports = eventForm;
