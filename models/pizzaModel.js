const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");
const pizzaSchema = mongoose.Schema({
    name : {type: String , require},
    size : [] ,
    prices : [],
    category: {type: String, require},
    image: {type: String, require},
    description: {type: String, require},
}, {
    timestamps: true
})

const pizzaModel = mongoose.model('pizzas', pizzaSchema)

module.exports = pizzaModel