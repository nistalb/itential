const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create Routes */

// get all vending machines
router.get("/", async (req, res) => {

    try {
        const allVend = await db.VendMachine.find({}).lean();
        res.json({allVend});
    } catch(err) {
        return res.send(err)
    };
});


// create vending machine
router.post("/", async (req, res) => {

    try {
        const allSoda = await db.Soda.find({}).lean()
        console.log(allSoda)
        const newMachine = await db.VendMachine.create({});
        res.json({newMachine});
    } catch(err) {
        return res.send(err);
    };
});

// add soda to vend machine
router.put("/:vendId", async (req, res) => {
    const {id, qty} = req.body;

    try {
        await db.VendMachine.findById(req.params.vendId)
            .exec(function(err, foundVend) {
                if (err) return res.send(err);

                console.log(foundVend)
                foundVend.soda.push({id: id, qty: qty})
                foundVend.save();
                res.json({foundVend});
            });
    } catch(err) {
        return res.send(err)
    }
});

module.exports = router;