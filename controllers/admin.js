const express = require("express");
const router = express.Router();

const db = require("../models");

// routes

// stock machine
router.get("/", async (req, res) => {

    try{
        const machine = await db.Machine.find({});
        const soda = await db.Soda.find({});
        context = {soda: soda, machine: machine}
        return res.render()
    } catch(err) {
        return res.send(err)
    }
})

module.exports = router;