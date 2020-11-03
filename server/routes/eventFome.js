const express = require("express");
const router = express.Router();
const EventForm = require("../models/form");

//Post request
router.post("/", (req, res) => {
  EventForm.create(req.body, (err, Addeddata) => {
    if (err) return console.log(err);
    EventForm.find({}, (err, data) => {
      if (err) return console.log(err);
      return res.json({
        Addeddata,
        data,
        sucess: true,
        message: "Event Registred sucess",
      });
    });
  });
});

//Get Request

router.post("/inf", (req, res) => {
  EventForm.find({}, (err, data) => {
    if (err) return console.log(err);
    return res.json({
      data,
      sucess: true,
      message: "Event Registred sucess",
    });
  });
});

module.exports = router;
