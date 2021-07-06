const mongoose = required("mongoose");

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