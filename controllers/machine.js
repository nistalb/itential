const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create routes */

// index
router.get("/machine", async(req, res) => {

    try {
        const machine = await db.Machine.find({})
        res.send("Hello Machine World")
        console.log(machine)
        return machine
    } catch (err) {
        return res.send(err);
    }
});

module.exports = router;