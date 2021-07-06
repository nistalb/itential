const mongoose = require("mongoose");

// create schema for soda documents
const sodaSchema = new mongoose.Schema({
    name: String,
    description: String,
    cost: Number,
    maxQty: Number,
},
{timestamps: true}
);

const Soda = mongoose.model("Soda", sodaSchema);

module.exports = Soda;