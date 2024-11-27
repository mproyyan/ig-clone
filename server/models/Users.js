const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
  following: [
    {
      type: Schema.ObjectId,
      ref: "user",
    },
  ],
  followers: [
    {
      type: Schema.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = Users = mongoose.model("user", userSchema);
