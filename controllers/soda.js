const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create routes */

// get all soda
router.get("/", async (req, res) => {
    
    try {
        const sodas = await db.Soda.find({}).lean();
        // .lean() returns JSON objects instead of memory and resource heavy documents
        res.json({sodas});
    } catch(err) {
        return res.send(err)
    }
});

// create soda
router.post("/", async (req, res) => {
       
    try {
        const newSoda = await db.Soda.create(req.body);
        return res.json({newSoda});
    } catch(err) {
        return res.send(err);
    };
});

// update soda
router.put("/:name", async (req, res) => {

    try {
        const updatedSoda = await db.Soda.findOneAndUpdate({name:req.params.name}, req.body, {new: true}).lean();
        return res.json({updatedSoda});
    } catch(err) {
        return res.send(err);
    };
});


// add to vendQty
router.put("/:name/add", (req, res) => {
    const {qty} = req.body;

    try {
        db.Soda.findOne({name:req.params.name})
        .exec(function(err, foundSoda){
            if (err) return res.send(err);
            
            const totalSoda = foundSoda.vendQty + qty;

            if (totalSoda <= foundSoda.maxQty) {
                foundSoda.vendQty += qty;
                foundSoda.save();
                res.json({foundSoda});
            } else {
                tooMuchSoda = totalSoda - foundSoda[0].maxQty;
                res.send({message: 'You sent too much soda', Remove: tooMuchSoda });
            };
        });
    } catch(err) {
        return res.send(err);
    };
 });

// remove a soda from vend machine
router.put("/:name/remove", (req, res) => {

    try{
        db.Soda.findOne({name:req.params.name})
        .exec(function(err, foundSoda){
            if (err) return res.send(err);
            
            const sodaQty = foundSoda.vendQty -= 1;

            if (sodaQty < 0) {
                res.json({message: 'Sorry, We are out of that flavor'});
            } else {
                foundSoda.save();
                res.json({foundSoda});
            };
        });
    } catch(err) {
        return res.send(err);
    }  
});

// delete soda
router.delete("/:name", async (req, res) => {

    try {
        const deletedSoda = await db.Soda.findOneAndDelete({name:req.params.name})
        return res.json({deletedSoda})
    } catch(err) {
        return res.send(err);
    };
});

module.exports = router;