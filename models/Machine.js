const mongoose = require("mongoose");

// create schema for Machine documents
const machineSchema = new mongoose.Schema({
    location: String,
    soda: [ {
        id: {type: mongoose.Schema.Types.ObjectId, ref: "Soda"},
        qty: Number,
        promo: {isPromo: Boolean, cost: Number}
    }]
},
{timestamps: true}
);

const Machine = mongoose.model("Machine", machineSchema);

module.exports = Machine;