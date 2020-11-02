const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

//signUp post request to register user
router.post("/signup", (req, res, next) => {
  const newUser = new User(req.body);
  newUser.save((err, User) => {
    if (err) {
      res.json(err);
    }
    res.json({ User, sucess: true, message: "Regester sucess" });
  });
});

//login
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      return res.json({ err });
    }
    if (!user) return res.json("Enter valid email");
    if (!user.verifyPassword(password)) return res.json("Enter valid password");
    jwt.sign(
      { username: user.username, email: user.email, userid: user._id },
      "passanystring",
      (err, token) => {
        if (err)
          return res.json({
            sucess: false,
            message: "Token not generated",
          });
        res.json({ token, user, sucess: true, message: "Login sucess" });
      }
    );
  });
});

module.exports = router;
