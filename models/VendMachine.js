const mongoose = require("mongoose");

// create schema for soda documents
const vendSchema = new mongoose.Schema({
    number: {type: Number, required: true, default: 0},
    soda: [ {
            id: { type: mongoose.Schema.ObjectId, ref: "Soda" },
            qty: { type: Number, default: 0}
        }]
},
{timestamps: true}
);

const VendMachine = mongoose.model("VendMachine", vendSchema);

module.exports = VendMachine;