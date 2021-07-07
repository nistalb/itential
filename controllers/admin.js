const express = require("express");
const router = express.Router();

const db = require("../models");

// routes

// machine index
router.get("/", async (req, res) => {

    try{
        const machine = await db.Machine.find({});
        const soda = await db.Soda.find({});
        context = {soda: soda, machine: machine}
        return res.render("admin/stock", context);
    } catch(err) {
        return res.send(err)
    }
});

module.exports = router;

// // add soda to machine
// router.put("/:machine_id/:soda_id", async (req, res) => {
//     try {}
// })