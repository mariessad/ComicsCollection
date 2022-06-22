const mongoose = require("mongoose");
const { stringify } = require("uuid");
const { Schema } = mongoose;

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    minlength: 5,
    maxlength: 255,
    required: true,
    unique: true,
  },
  birthday: {
    type: String,
  },
  avatar: {
    type: String,
  },
  twitter: {
    type: String,
  },
  ig: {
    type: String,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
