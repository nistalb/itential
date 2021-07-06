const mongoose = require("mongoose");

// create schema for Machine documents
const machineSchema = new mongoose.Schema({
    location: String,
    soda: [ {
        id: {type: mongoose.Schema.Types.ObjectId, ref: "Soda"},
        qty: { type: Number, required: true},
        promo: {isPromo: Boolean, cost: Number, startDate: Date, endDate: Date}
    }]
},
{timestamps: true}
);

const Machine = mongoose.model("Machine", machineSchema);

module.exports = Machine;