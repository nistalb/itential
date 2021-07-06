const mongoose = require("mongoose");

// create schema for User documents
const userSchema = new mongoose.Schema({
    group: { type: String, required: true },
    password: { type: String, required: true },
    members: [ String ],
},
{timestamps: true}
);

const User = mongoose.model("User", userSchema);

module.exports = User;