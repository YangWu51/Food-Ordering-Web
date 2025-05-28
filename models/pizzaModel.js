const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const pizzaSchema = mongoose.Schema({
  name: { type: String, required: true },
  size: [],
  prices: [],
  category: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
}, {
  timestamps: true
});


const pizzaModel = mongoose.model('pizzas', pizzaSchema)

module.exports = pizzaModel