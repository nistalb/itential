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
        
        await db.VendMachine.create({}, function(err, newMachine) {
            if (err) return res.send(err);
            
            newMachine.soda.push(...allSoda);
            newMachine.save();
            res.json({newMachine});
        });
    } catch(err) {
        return res.send(err);
    };
});

// increase qyt of each soda in the vend machine
router.put("/:vendId/addSodaQty", async (req, res) => {
    const {qtyToAdd, sodaId} = req.body
    
    try {
        const foundSoda = await db.Soda.findById(sodaId);
        const maxQty = foundSoda.maxQty;
        
        await db.VendMachine.findById(req.params.vendId)
            .exec(function(err, foundVend) {
                if (err) return res.send(err);

                for (i=0; i < foundVend.soda.length; i++) {
                    if (foundVend.soda[i]._id == sodaId ) {
                        
                        const totalSoda = foundVend.soda[i].qty + qtyToAdd;

                        if (totalSoda <= maxQty) {
                            foundVend.soda[i].qty += qtyToAdd;
                            foundVend.save();
                            res.json({foundVend});
                        } else {
                            tooMuchSoda = totalSoda - maxQty;
                            res.send({message: 'You sent too much soda', Remove: tooMuchSoda });
                        };
                    };
                };
            });
    } catch(err) {
        return res.send(err)
    }
});

module.exports = router;