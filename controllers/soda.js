const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create routes */

// get all soda
router.get("/", async (req, res) => {
    const sodas = await db.Soda.find({});
    res.json({sodas})
    
});

// add to vendQty
router.put("/:name", (req, res) => {
    db.Soda.find({name:req.params.name})
    .exec(function(err, foundSoda){
        if (err) return res.send(err);
        
        totalSoda = foundSoda[0].vendQty + req.body.qty
        if (totalSoda <= foundSoda[0].maxQty) {
            foundSoda[0].vendQty += req.body.qty;
            foundSoda[0].save();
            res.json({foundSoda})
        } else {
            tooMuchSoda = totalSoda - foundSoda[0].maxQty
            res.send({message: 'You sent too much soda', Remove: tooMuchSoda })
        }
    })
 });

// create
router.post("/", async (req, res) => {
    try {
        await db.Soda.create(req.body);
        return res.redirect("/soda");
    } catch (err) {
        return res.send(err);
    };
})

module.exports = router;