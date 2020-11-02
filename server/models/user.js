const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema = new Schema({
  username: { type: String },
  email: { type: String, require: true, unique: true },
  name: { type: String },
  password: { type: String },
});

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.verifyPassword = function (userenterpassword) {
  return bcrypt.compareSync(userenterpassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
