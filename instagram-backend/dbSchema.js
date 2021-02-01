const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  username: String,
  comment: String,
  timeStamp: String,
});

const instSchema = mongoose.Schema({
  name: String,
  image: String,
  caption: String,
  timeStamp: String,
  comments: [commentSchema],
});
module.exports = mongoose.model("Posts", instSchema);
