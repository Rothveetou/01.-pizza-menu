const mongoose = require("mongoose");

const Pizzas = mongoose.model(
  "pizza",
  new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: String, required: true },
    price: { type: Number, required: true, min: 1 },
    image: { type: String },
    soldout: { type: Boolean, default: false },
  })
);

module.exports = Pizzas;
