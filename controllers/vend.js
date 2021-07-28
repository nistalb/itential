const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create Routes */

// get all vending machines
router.get("/", async (req, res) => {

    try {
        const allVend = await db.VendMachine.find({}).lean();
        return res.json({allVend});
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
            return res.json({newMachine});
        });
    } catch(err) {
        return res.send(err);
    };
});

// show one vending machine and append soda info for display
router.get("/:vendId", async (req, res) => {

    try {
        const foundVend = await db.VendMachine.findById(req.params.vendId).lean();
            
        for (i=0; i < foundVend.soda.length; i++) {
            let soda = await db.Soda.findById(foundVend.soda[i]._id).lean();
            console.log(soda.name)
            foundVend.soda[i].name = soda.name;
            foundVend.soda[i].cost = soda.cost;
            foundVend.soda[i].description = soda.description;
        }
        return res.json({foundVend})
            
    } catch(err) {
        return res.send(err);
    }
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
                            return res.json({foundVend});
                        } else {
                            tooMuchSoda = totalSoda - maxQty;
                            return res.send({message: 'You sent too much soda', Remove: tooMuchSoda });
                        };
                    };
                };
                return res.send('We do not have that flavor')
            });
    } catch(err) {
        return res.send(err)
    }
});

// remove soda from vend machine
router.put("/:vendId/removeSoda", async (req, res) => {
    const {sodaId} = req.body;

    try {
        await db.VendMachine.findById(req.params.vendId)
            .exec(function(err, foundVend) {
                if (err) return res.send(err)
                
                for (i=0; i < foundVend.soda.length; i++) {
                    if (foundVend.soda[i]._id == sodaId) {
                        
                        const sodaQty = foundVend.soda[i].qty -= 1;

                        if (sodaQty < 0 ) {
                            return res.json({message: 'Sorry, We are out of that flavor'});
                        } else {
                            foundVend.save();
                            return res.json({foundVend});
                        };    
                    };
                }; 
                return res.send('We do not have that flavor')
            });
    } catch(err) {
        return res.send(err);
    };
});

module.exports = router;