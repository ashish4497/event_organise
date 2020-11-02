const express = require("express");
const router = express.Router();
const eventFome = require("../models/fome");

//fome Post request
router.post("/event", (req, res) => {
  const newFome = new eventFome(req.body);
  newFome.save((err, eventFome) => {
    if (err) {
      res.json(err);
    }
    res.json({ eventFome, sucess: true, message: "Event Registred sucess" });
  });
});

module.exports = router;
