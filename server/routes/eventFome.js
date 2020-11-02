const express = require("express");
const router = express.Router();
const EventForm = require("../models/fome");

//Post request
router.post("/", (req, res) => {
  const newForm = new EventForm(req.body);
  newForm.save((err, EventForm) => {
    if (err) {
      res.json(err);
    }
    res.json({ EventForm, sucess: true, message: "Event Registred sucess" });
  });
});

//Get Request
router.get("/info", (req, res) => {
  const newForm = EventFome.find({}, (err, eventForm) => {
    if (err) {
      res.json(err);
    }
    res.json({ EventFome, sucess: true, message: "sucess" });
  });
});

module.exports = router;
