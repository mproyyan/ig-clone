const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
  username: String,
  fullName: String,
  creatorId: String,
  image: String,
  caption: String,
  hashtags: [String],
  loves: { type: [String], default: [] },
});

module.exports = Posts = mongoose.model("post", postSchema);
