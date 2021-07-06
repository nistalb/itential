const express = require("express");
const router = express.Router();

const db = require("../models");

/* Create routes */

// index
router.get("/", (req, res, next) => {
    
    db.Machine.findById('60e4d4f97d8323337924558e')
    .then(data => res.json(data))
    .catch(next) 
});

// edit
router.get("/:id/edit", async (req, res) => {

    try {
        const machine = await db.Machine.findById(req.params.id);
        const soda = await db.Soda.find({});
        context = {soda: soda, machine: machine}
        return res.render()
    } catch(err) {
        res.send(err)
    };
})

// update
router.put("/:id", (req, res, next) => {

    db.Machine.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(data => res.json(data))
    .catch(next)
});

module.exports = router;