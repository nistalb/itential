const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create routes */

// get all soda
router.get("/", async (req, res) => {
    
    const sodas = await db.Soda.find({});
    res.json({sodas});
    
});

// create soda
router.post("/", async (req, res) => {
       
    try {
        newSoda = await db.Soda.create(req.body);
        return res.json({newSoda});
    } catch (err) {
        return res.send(err);
    };
});

// add to vendQty
router.put("/:name/add", (req, res) => {
    const {qty} = req.body;

    db.Soda.find({name:req.params.name})
    .exec(function(err, foundSoda){
        if (err) return res.send(err);
        
        const totalSoda = foundSoda[0].vendQty + qty;

        if (totalSoda <= foundSoda[0].maxQty) {
            foundSoda[0].vendQty += qty;
            foundSoda[0].save();
            res.json({foundSoda});
        } else {
            tooMuchSoda = totalSoda - foundSoda[0].maxQty;
            res.send({message: 'You sent too much soda', Remove: tooMuchSoda });
        };
    });
 });

// remove a soda from vend machine
router.put("/:name/remove", (req, res) => {

    db.Soda.find({name:req.params.name})
    .exec(function(err, foundSoda){
        if (err) return res.send(err);
        
        const sodaQty = foundSoda[0].vendQty -= 1;

        if (sodaQty < 0) {
            res.send({message: 'Soda machine is empty'})
        } else {
            foundSoda[0].save();
            res.json({foundSoda})
        }
    });
});

module.exports = router;