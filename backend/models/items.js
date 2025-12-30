const mongoose = require("mongoose");

const itemschema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "title is required ."],
  },
  price: {
    type: Number,
    required: [true, "price is required."],
  },
  stock: {
    type: Number,
    default: 0,
  },
});

const item = mongoose.model("item", itemschema);

module.exports = item;
