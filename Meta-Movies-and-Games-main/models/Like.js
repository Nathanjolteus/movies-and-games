const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Build Like Schema
const LikeSchema = new Schema({
  imdbID: {
    type: String,
    required: true,
  },
  users: [
    {
      userid: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    },
  ],
});

module.exports = Like = mongoose.model("like", LikeSchema);
