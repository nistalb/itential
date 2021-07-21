const mongoose = require("mongoose");

// create schema for soda documents
const vendSchema = new mongoose.Schema({
    soda: [ {
            id: { type: mongoose.Schema.Types.ObjectId, ref: "Soda" },
            qty: Number
        }]
},
{timestamps: true}
);

const VendMachine = mongoose.model("VendMachine", vendSchema);

module.exports = VendMachine;