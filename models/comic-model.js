const mongoose = require("mongoose");
const { Schema } = mongoose;

const comicSchema = new Schema({
  title: {
    type: String,
    required: [true, "a title is required"],
  },
  author: {
    type: String,
    required: [true, "an author is required"],
  },
  publisher: {
    type: String,
  },
  genre: {
    type: String,
  },
  pages: {
    type: Number,
  },
  rating: {
    type: Number,
    min: [1],
    max: [5],
  },
  synopsis: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Comic = mongoose.model("Comic", comicSchema);

module.exports = Comic;
