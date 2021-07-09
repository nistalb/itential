const mongoose = require("mongoose");

// create schema for soda documents
const sodaSchema = new mongoose.Schema({
    name: {type: String, required: true },
    description: { type: String, required: true },
    cost: { type: Number, min: 0, default: 0, required: true },
    maxQty: { type: Number, min: 0, default: 0, required: true },
    vendQty: { type: Number, min: 0, default: 0, required: true },
    promo: {isPromo: Boolean, cost: Number, startDate: { type: Date, default: Date.now}, endDate: { type: Date, default: Date.now}}
},
{timestamps: true}
);

const Soda = mongoose.model("Soda", sodaSchema);

module.exports = Soda;