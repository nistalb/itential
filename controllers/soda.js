const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create routes */

router.get("/", async (req, res) => {
    
    try {
        const allSoda = await db.Soda.find({})
        return allSoda
    } catch(err) {
        return res.send(err);
    }
})


module.exports = router;